import { SITE_CONFIG } from "@/constants/siteConfig";
import { serviceAreaCities } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";
import { servicePages } from "@/lib/services";

const SERVICE_NOTES: Record<string, string> = {
  "interior-painting":
    "Walls, ceilings, trim, doors, cabinets, and millwork in occupied homes.",
  "exterior-painting":
    "Prep, prime, and finish coats for Northwest weather on homes and exteriors.",
  "commercial-painting":
    "Scheduled painting for shops, offices, and other occupied businesses.",
  "remodeling-renovation":
    "Interior remodels, flooring, and finish work coordinated with paint.",
  "decks-fences": "Deck and fence build, repair, stain, and replacement.",
  "repairs-carpentry":
    "Carpentry, rot repair, and punch-list work before paint or remodel.",
};

function item(name: string, path: string, note: string): string {
  return `- [${name}](${absoluteUrl(path)}): ${note}`;
}

export function buildLlmsTxt(): string {
  const origin = absoluteUrl("/");
  const services = servicePages.map((service) =>
    item(
      service.title,
      `/services/${service.slug}`,
      SERVICE_NOTES[service.slug] ?? service.description,
    ),
  );
  const cities = serviceAreaCities.map((city) =>
    item(
      city.name,
      `/service-areas/${city.slug}`,
      `Painting, remodeling, decks, and repairs in ${city.name}, ${city.state}.`,
    ),
  );

  return [
    `# ${SITE_CONFIG.fullName}`,
    "",
    `> ${SITE_CONFIG.description}`,
    "",
    `Canonical site: ${origin}`,
    `Contact: ${SITE_CONFIG.phone} · ${SITE_CONFIG.email}`,
    `WA contractor license: ${SITE_CONFIG.license}`,
    `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`,
    "",
    "## Pages",
    "",
    item(
      "Homepage",
      "/",
      `${SITE_CONFIG.shortName} painting, remodeling, decks, fences, and repairs.`,
    ),
    item(
      "About",
      "/about",
      "Local contractor background, owner, and how Lane HBS works.",
    ),
    item(
      "Contact & free estimate",
      "/contact",
      "Request a free estimate or call for painting and remodel work.",
    ),
    item(
      "Project gallery",
      "/gallery",
      "Photos of recent painting, deck, flooring, and remodel jobs.",
    ),
    item(
      "Reviews",
      "/reviews",
      "Customer reviews of Lane HBS painting and remodeling work.",
    ),
    "",
    "## Services",
    "",
    item(
      "Services",
      "/services",
      "Interior and exterior painting, commercial painting, remodeling, decks, fences, and carpentry.",
    ),
    ...services,
    "",
    "## Service areas",
    "",
    item(
      "Service areas",
      "/service-areas",
      "Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby Pierce & King County communities.",
    ),
    ...cities,
    "",
  ].join("\n");
}
