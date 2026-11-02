export type BlogSection = {
  heading: string;
  /** Paragraphs. Inline links use [text](href). */
  paragraphs: string[];
  bullets?: string[];
  /** Optional photo shown after the section text. */
  image?: { src: string; alt: string; caption?: string };
  /** Optional highlighted callout box. */
  callout?: { title: string; body: string };
};

export type BlogLink = { label: string; href: string; note?: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  /** ISO date, YYYY-MM-DD */
  datePublished: string;
  dateModified?: string;
  image: string;
  imageAlt: string;
  /** Short label for the visible breadcrumb. */
  breadcrumbLabel: string;
  /** Heading for the contact CTA box. */
  ctaHeading: string;
  intro: string[];
  sections: BlogSection[];
  internalLinks: BlogLink[];
  sources: BlogLink[];
};
