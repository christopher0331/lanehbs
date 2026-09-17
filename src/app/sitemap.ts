import type { MetadataRoute } from "next";
import { getAllCitySlugs, getAllNeighborhoodParams } from "@/lib/locations";
import { getAllServiceSlugs } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/gallery",
    "/reviews",
    "/contact",
    "/service-areas",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityRoutes = getAllCitySlugs().map((city) => ({
    url: absoluteUrl(`/service-areas/${city}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const neighborhoodRoutes = getAllNeighborhoodParams().map(({ city, neighborhood }) => ({
    url: absoluteUrl(`/service-areas/${city}/${neighborhood}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...neighborhoodRoutes];
}
