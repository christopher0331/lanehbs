"use client";

import { useEffect, useId, useRef } from "react";
import "leaflet/dist/leaflet.css";
import {
  SERVICE_AREA_MAP_ACCENT,
  googleMapsSearchUrl,
  hasValidCoordinates,
  zoomForRadiusMeters,
  type ServiceAreaMapPoint,
} from "@/lib/serviceAreaMap";

type GoogleMapsWindow = Window & {
  google?: {
    maps: {
      Map: new (
        el: HTMLElement,
        opts: Record<string, unknown>
      ) => {
        fitBounds: (bounds: unknown, padding?: number) => void;
      };
      Marker: new (opts: Record<string, unknown>) => unknown;
      Circle: new (opts: Record<string, unknown>) => { getBounds: () => unknown };
      event: { clearInstanceListeners: (target: unknown) => void };
    };
  };
};

const DARK_GOOGLE_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d1a24" }] },
];

function googleMapsKey(): string {
  return String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "").trim();
}

function loadGoogleMaps(apiKey: string): Promise<NonNullable<GoogleMapsWindow["google"]>["maps"]> {
  const w = window as GoogleMapsWindow;
  if (w.google?.maps?.Map) return Promise.resolve(w.google.maps);

  const existing = document.querySelector<HTMLScriptElement>("script[data-lanehbs-maps]");
  const waitFor = (script: HTMLScriptElement) =>
    new Promise<NonNullable<GoogleMapsWindow["google"]>["maps"]>((resolve, reject) => {
      script.addEventListener("load", () => {
        if (w.google?.maps?.Map) resolve(w.google.maps);
        else reject(new Error("Google Maps failed to load"));
      });
      script.addEventListener("error", () => reject(new Error("Google Maps failed to load")));
    });

  if (existing) return waitFor(existing);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.dataset.lanehbsMaps = "true";
    script.addEventListener("load", () => {
      if (w.google?.maps?.Map) resolve(w.google.maps);
      else reject(new Error("Google Maps failed to load"));
    });
    script.addEventListener("error", () => reject(new Error("Google Maps failed to load")));
    document.head.appendChild(script);
  });
}

async function mountGoogleMap(
  el: HTMLElement,
  point: ServiceAreaMapPoint
): Promise<() => void> {
  const maps = await loadGoogleMaps(googleMapsKey());
  const center = { lat: point.latitude, lng: point.longitude };
  const map = new maps.Map(el, {
    center,
    zoom: zoomForRadiusMeters(point.radiusMeters),
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: DARK_GOOGLE_STYLES,
    backgroundColor: "#111111",
  });
  new maps.Marker({
    position: center,
    map,
    title: point.label,
  });
  const circle = new maps.Circle({
    strokeColor: SERVICE_AREA_MAP_ACCENT,
    strokeOpacity: 0.95,
    strokeWeight: 2,
    fillColor: SERVICE_AREA_MAP_ACCENT,
    fillOpacity: 0.18,
    map,
    center,
    radius: point.radiusMeters,
  });
  map.fitBounds(circle.getBounds(), 28);
  return () => {
    maps.event.clearInstanceListeners(map);
    el.replaceChildren();
  };
}

async function mountLeafletMap(
  el: HTMLElement,
  point: ServiceAreaMapPoint
): Promise<() => void> {
  const L = await import("leaflet");
  el.replaceChildren();
  delete (el as HTMLElement & { _leaflet_id?: number })._leaflet_id;

  const map = L.map(el, {
    scrollWheelZoom: false,
    attributionControl: true,
    zoomControl: true,
  }).setView([point.latitude, point.longitude], zoomForRadiusMeters(point.radiusMeters));

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  }).addTo(map);

  const icon = L.divIcon({
    className: "service-area-map-pin",
    html: `<svg width="28" height="40" viewBox="0 0 28 40" aria-hidden="true"><path fill="${SERVICE_AREA_MAP_ACCENT}" stroke="#fff" stroke-width="1.5" d="M14 1.2c-6.3 0-11.4 5.1-11.4 11.4 0 8.6 11.4 26 11.4 26s11.4-17.4 11.4-26C25.4 6.3 20.3 1.2 14 1.2z"/><circle cx="14" cy="12.4" r="4.2" fill="#1a1a1a"/></svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
  });
  L.marker([point.latitude, point.longitude], { icon, title: point.label }).addTo(map);
  const circle = L.circle([point.latitude, point.longitude], {
    radius: point.radiusMeters,
    color: SERVICE_AREA_MAP_ACCENT,
    weight: 2,
    fillColor: SERVICE_AREA_MAP_ACCENT,
    fillOpacity: 0.18,
  }).addTo(map);
  map.fitBounds(circle.getBounds(), { padding: [28, 28] });
  requestAnimationFrame(() => map.invalidateSize());

  return () => {
    map.remove();
  };
}

export default function ServiceAreaMap({
  latitude,
  longitude,
  radiusMeters,
  label,
  className = "",
}: ServiceAreaMapPoint & { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const el = hostRef.current;
    if (!el || !hasValidCoordinates(latitude, longitude)) return;

    const point: ServiceAreaMapPoint = { latitude, longitude, radiusMeters, label };
    let cancelled = false;
    let cleanup = () => {};

    const start = async () => {
      const key = googleMapsKey();
      try {
        const next = key ? await mountGoogleMap(el, point) : await mountLeafletMap(el, point);
        if (cancelled) next();
        else cleanup = next;
      } catch {
        if (cancelled) return;
        const fallback = await mountLeafletMap(el, point);
        if (cancelled) fallback();
        else cleanup = fallback;
      }
    };

    void start();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [latitude, longitude, radiusMeters, label]);

  if (!hasValidCoordinates(latitude, longitude)) return null;

  return (
    <div className={`service-area-map relative overflow-hidden bg-[#111111] ${className}`}>
      <div
        ref={hostRef}
        id={titleId}
        role="region"
        aria-label={`Map of ${label}`}
        className="absolute inset-0"
      />
      <a
        href={googleMapsSearchUrl(latitude, longitude)}
        target="_blank"
        rel="noreferrer"
        className="absolute left-3 top-3 z-[2] bg-white px-3 py-1.5 text-xs font-semibold text-[#1a73e8] shadow-sm hover:underline"
      >
        Open in Maps ↗
      </a>
    </div>
  );
}
