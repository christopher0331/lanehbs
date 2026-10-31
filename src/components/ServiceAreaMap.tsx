import {
  googleMapsSearchUrl,
  hasValidCoordinates,
  zoomForRadiusMeters,
  type ServiceAreaMapPoint,
} from "@/lib/serviceAreaMap";

/** Keyless Google Maps embed URL centered on a point. */
export function googleMapsEmbedUrl(latitude: number, longitude: number, zoom: number): string {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
}

export default function ServiceAreaMap({
  latitude,
  longitude,
  radiusMeters,
  label,
  className = "",
}: ServiceAreaMapPoint & { className?: string }) {
  if (!hasValidCoordinates(latitude, longitude)) return null;

  return (
    <div className={`service-area-map relative overflow-hidden bg-[#111111] ${className}`}>
      <iframe
        src={googleMapsEmbedUrl(latitude, longitude, zoomForRadiusMeters(radiusMeters))}
        title={`Map of ${label}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 z-0 h-full w-full border-0"
      />
      <a
        href={googleMapsSearchUrl(latitude, longitude)}
        target="_blank"
        rel="noreferrer"
        className="absolute left-3 top-3 z-20 bg-white px-3 py-1.5 text-xs font-semibold text-[#1a73e8] shadow-sm hover:underline"
      >
        Open in Maps ↗
      </a>
    </div>
  );
}
