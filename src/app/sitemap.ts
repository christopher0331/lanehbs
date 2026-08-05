import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { getAllCitySlugs, getAllNeighborhoodParams } from "@/lib/locations";
import { getAllServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/reviews",
    "/contact",
    "/service-areas",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityRoutes = getAllCitySlugs().map((city) => ({
    url: `${base}/service-areas/${city}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const neighborhoodRoutes = getAllNeighborhoodParams().map(({ city, neighborhood }) => ({
    url: `${base}/service-areas/${city}/${neighborhood}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...neighborhoodRoutes];
}
