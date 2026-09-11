export const SERVICE_AREA_MAP_ACCENT = "#c9a458";

export type ServiceAreaMapPoint = {
  latitude: number;
  longitude: number;
  radiusMeters: number;
  label: string;
};

export function googleMapsSearchUrl(latitude: number, longitude: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export function zoomForRadiusMeters(radiusMeters: number): number {
  if (radiusMeters <= 1200) return 15;
  if (radiusMeters <= 2000) return 14;
  if (radiusMeters <= 3500) return 13;
  if (radiusMeters <= 6000) return 12;
  return 11;
}

export function cityServiceRadiusMeters(city: {
  neighborhoods: { geoRadiusMeters: number }[];
}): number {
  if (!city.neighborhoods.length) return 7000;
  const max = Math.max(...city.neighborhoods.map((n) => n.geoRadiusMeters));
  return Math.min(12000, Math.max(5000, Math.round(max * 1.8)));
}

export function hasValidCoordinates(latitude: number, longitude: number): boolean {
  return (
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    Math.abs(latitude) <= 90 &&
    Math.abs(longitude) <= 180 &&
    !(latitude === 0 && longitude === 0)
  );
}
