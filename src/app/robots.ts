import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const origin = SITE_CONFIG.url.replace(/\/+$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: new URL(origin).host,
  };
}
