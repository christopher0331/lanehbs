import { SCHEMA_ADDRESS, SITE_CONFIG } from "@/constants/siteConfig";

export type FaqItem = { question: string; answer: string };

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_CONFIG.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildBreadcrumbList(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqPage(faqs: FaqItem[]): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildLocalBusiness({
  name,
  description,
  canonicalPath,
  city,
  latitude,
  longitude,
}: {
  name: string;
  description: string;
  canonicalPath: string;
  city: string;
  latitude?: number;
  longitude?: number;
}): Record<string, unknown> {
  const canonical = absoluteUrl(canonicalPath);
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${canonical}#localbusiness`,
    name,
    description,
    url: canonical,
    telephone: `+1${SITE_CONFIG.phoneLink}`,
    email: SITE_CONFIG.email,
    image: SITE_CONFIG.logoUrl,
    logo: { "@type": "ImageObject", url: SITE_CONFIG.logoUrl },
    address: SCHEMA_ADDRESS,
    founder: { "@type": "Person", name: SITE_CONFIG.owner },
    geo:
      latitude != null && longitude != null
        ? {
            "@type": "GeoCoordinates",
            latitude,
            longitude,
          }
        : {
            "@type": "GeoCoordinates",
            latitude: SITE_CONFIG.coordinates.latitude,
            longitude: SITE_CONFIG.coordinates.longitude,
          },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Improvement Services",
      itemListElement: [
        "Interior Painting",
        "Exterior Painting",
        "Commercial Painting",
        "Remodeling & Renovation",
        "Decks & Fences",
        "Repairs & Carpentry",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
          areaServed: { "@type": "City", name: city },
        },
      })),
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  canonicalPath,
}: {
  name: string;
  description: string;
  canonicalPath: string;
}): Record<string, unknown> {
  const canonical = absoluteUrl(canonicalPath);
  return {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.fullName,
      telephone: `+1${SITE_CONFIG.phoneLink}`,
      address: SCHEMA_ADDRESS,
    },
    areaServed: {
      "@type": "State",
      name: "Washington",
    },
    url: canonical,
  };
}
