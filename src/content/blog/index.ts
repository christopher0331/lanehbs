import type { BlogPost } from "./types";
import { fixTrimBeforeExteriorPaint } from "./fix-trim-before-exterior-paint";
import { deckStainVsPaintWesternWashington } from "./deck-stain-vs-paint-western-washington";
import { whenToPaintExteriorLakeTappsEnumclaw } from "./when-to-paint-exterior-lake-tapps-enumclaw";
import { prepareHomeForInteriorRepaint } from "./prepare-home-for-interior-repaint";

export type { BlogPost, BlogSection, BlogLink } from "./types";

/** Newest first. */
export const blogPosts: BlogPost[] = [
  fixTrimBeforeExteriorPaint,
  prepareHomeForInteriorRepaint,
  deckStainVsPaintWesternWashington,
  whenToPaintExteriorLakeTappsEnumclaw,
].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
