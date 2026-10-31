export type BlogSection = {
  heading: string;
  /** Paragraphs. Inline links use [text](href). */
  paragraphs: string[];
  bullets?: string[];
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
  intro: string[];
  sections: BlogSection[];
  internalLinks: BlogLink[];
  sources: BlogLink[];
};
