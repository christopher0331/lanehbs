import type { FaqItem } from "@/lib/seo";
import { covingtonNeighborhoods } from "@/lib/neighborhoods/covington";
import { enumclawNeighborhoods } from "@/lib/neighborhoods/enumclaw";
import { lakeTappsNeighborhoods } from "@/lib/neighborhoods/lake-tapps";
import { mapleValleyNeighborhoods } from "@/lib/neighborhoods/maple-valley";

export type NeighborhoodTrustIcon =
  | "shield"
  | "droplets"
  | "home"
  | "trees"
  | "wind"
  | "users"
  | "paintbrush"
  | "hammer"
  | "sun"
  | "waves"
  | "clipboard"
  | "car"
  | "school"
  | "heart";

export type NeighborhoodTrustCard = {
  icon: NeighborhoodTrustIcon;
  title: string;
  body: string;
};

export type NeighborhoodGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type NeighborhoodCaseStudy = {
  heading: string;
  image: string;
  imageAlt: string;
  serviceType: string;
  body: string;
};

export type NeighborhoodConsideration = {
  heading: string;
  body: string;
};

export type NeighborhoodCostDriver = {
  title: string;
  body: string;
};

export type NeighborhoodServiceHighlight = {
  slug: string;
  localDescription: string;
};

export type NeighborhoodProcessStep = {
  title: string;
  body: string;
};

export type LocalAttraction = {
  name: string;
  url: string;
  description: string;
};

export type Neighborhood = {
  slug: string;
  name: string;
  description: string;
  blurb: string;
  highlights: string[];
  faqs: FaqItem[];
  image: string;
  heroIntro: string;
  mapQuery: string;
  latitude: number;
  longitude: number;
  geoRadiusMeters: number;
  introHeading: string;
  introLead: string;
  introBody: string;
  trustCards: NeighborhoodTrustCard[];
  reviewNames: string[];
  galleryHeading: string;
  galleryNote: string;
  gallery: NeighborhoodGalleryItem[];
  caseStudy: NeighborhoodCaseStudy;
  considerationsHeading: string;
  considerations: NeighborhoodConsideration[];
  costHeading: string;
  costIntro: string;
  costDrivers: NeighborhoodCostDriver[];
  featuredServices: NeighborhoodServiceHighlight[];
  estimateBandCopy: string;
  processHeading: string;
  processSteps: NeighborhoodProcessStep[];
  attractions: LocalAttraction[];
  localLivingParagraphs: string[];
};

export type ServiceAreaCity = {
  slug: string;
  name: string;
  state: string;
  county: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  blurb: string;
  zipCodes: string[];
  landmarks: string[];
  climateDescription: string;
  localChallenges: string[];
  localSolutions: string[];
  highlights: string[];
  nearby: string[];
  image: string;
  latitude: number;
  longitude: number;
  faqs: FaqItem[];
  neighborhoods: Neighborhood[];
  articleSections: { heading: string; body: string }[];
};

export const serviceAreaCities: ServiceAreaCity[] = [
  {
    slug: "lake-tapps",
    name: "Lake Tapps",
    state: "WA",
    county: "Pierce County",
    heroTitle: "Painting & Remodeling Contractor in Lake Tapps, WA",
    heroDescription:
      "Local Lake Tapps contractor for interior & exterior painting, cabinet refinishing, decks, fences, and home renovations — including Tapps Island, Deer Island, Snag Island, Driftwood Point, West Tapps, and the plateau. Free estimates. Call (253) 414-3937.",
    metaTitle: "Lake Tapps Painting & Remodeling Contractor | Lane HBS",
    metaDescription:
      "Licensed painting, remodeling, deck & fence contractor in Lake Tapps, WA. Interior/exterior paint, cabinets, waterfront decks. Free estimates. (253) 414-3937.",
    blurb:
      "Proudly based in Lake Tapps, Lane Home & Business Services knows the homes, weather, and neighborhoods around the reservoir. From lakeside exteriors to kitchen refreshes, we deliver clean job sites and finishes that hold up in Pacific Northwest conditions.",
    zipCodes: ["98391"],
    landmarks: [
      "Lake Tapps Reservoir",
      "Allan Yorke Park",
      "North Lake Tapps Park",
      "Tapps Island Golf Course",
      "West Hylebos Wetlands",
      "Daffodil Valley",
    ],
    climateDescription:
      "Lake Tapps sits in a humid lakeside microclimate with frequent moisture, freeze-thaw cycles, and UV exposure off the water. Exterior coatings, deck stains, and fasteners need moisture-aware prep and products built for Pierce County weather — not one-coat shortcuts.",
    localChallenges: [
      "High humidity and splash exposure on waterfront and near-shore homes",
      "Peeling stain and weathered railings on elevated decks",
      "Older trim, soffits, and siding that need repair before paint",
      "HOA and neighbor expectations for clean, professional curb appeal",
    ],
    localSolutions: [
      "Thorough pressure washing, scraping, and priming before every exterior coat",
      "Deck staining and railing systems built for lakeside moisture",
      "Cabinet refinishing that upgrades kitchens without full replacement cost",
      "Clear timelines, licensed work, and tidy job sites from start to finish",
    ],
    highlights: [
      "Local Lake Tapps contractor — we work where we live",
      "Exterior paint systems built for Pacific Northwest weather",
      "Deck staining, sealing, and railing upgrades for waterfront homes",
      "Interior painting and cabinet refinishing for lake-community residences",
    ],
    nearby: ["Bonney Lake", "Sumner", "Auburn", "Edgewood", "Puyallup"],
    image: "/images/from-lane/lane-03-45.jpg",
    latitude: 47.2384,
    longitude: -122.1951,
    faqs: [
      {
        question: "Do you serve Tapps Island, Deer Island, and the rest of Lake Tapps?",
        answer:
          "Yes. We work Tapps Island, Deer Island, Snag Island, Driftwood Point, West Tapps, the Lake Tapps Plateau, Bonney Lake, and nearby Pierce County communities including Sumner, Auburn, and Edgewood.",
      },
      {
        question: "What painting services do you offer in Lake Tapps?",
        answer:
          "Interior and exterior painting, cabinet refinishing, trim and millwork, pressure washing, staining, and prep/repair work so coatings last in lakeside conditions.",
      },
      {
        question: "Can you stain or rebuild decks on waterfront properties?",
        answer:
          "Absolutely. Deck staining, sealing, railing upgrades, and related carpentry are core services for Lake Tapps homes facing moisture and sun exposure.",
      },
      {
        question: "How do I get a free estimate?",
        answer:
          "Call or text (253) 414-3937 or use our contact form. We’ll discuss your project and schedule a visit — estimates are free with no pressure.",
      },
    ],
    neighborhoods: lakeTappsNeighborhoods,
    articleSections: [
      {
        heading: "Your Local Lake Tapps Painting & Remodeling Team",
        body: "Lane Home & Business Services LLC is rooted in Lake Tapps. That means we understand reservoir humidity, elevated decks, and the finish quality neighbors notice on lakeside streets — from gated Tapps Island off Island Parkway East to Deer Island Drive E, Snag Island, Driftwood Point, West Tapps, and the plateau. Whether you need a full exterior repaint, a kitchen cabinet refresh, or a deck rebuild, you get licensed, insured craftsmanship with clear communication.",
      },
      {
        heading: "Services Built for Lakeside Living",
        body: "Waterfront and near-shore homes fail coatings early when prep is skipped. We pressure wash, repair soft wood, prime bare spots, and choose systems that handle moisture and sun. Indoors, we protect floors and furniture while delivering crisp lines on walls, trim, and cabinets.",
      },
      {
        heading: "Decks, Fences & Outdoor Living",
        body: "Lake Tapps living is outdoor living. We stain and seal decks, upgrade railings, repair or install fencing, and handle the carpentry that makes paint and stain look finished — not patched.",
      },
    ],
  },
  {
    slug: "enumclaw",
    name: "Enumclaw",
    state: "WA",
    county: "King County",
    heroTitle: "Painting & Remodeling Contractor in Enumclaw, WA",
    heroDescription:
      "Plateau-ready painting, remodeling, decks, and fences for Enumclaw homes and businesses. Licensed local craftsmanship. Free estimates at (253) 414-3937.",
    metaTitle: "Enumclaw Painting & Remodeling Contractor | Lane HBS",
    metaDescription:
      "Enumclaw painting, remodeling, deck & fence contractor. Interior/exterior paint, cabinets, repairs for plateau homes. Free estimates. (253) 414-3937.",
    blurb:
      "Serving Enumclaw homeowners and businesses with painting, remodeling, and outdoor projects. Plateau properties get the same careful prep and finish we bring to every Lane HBS job.",
    zipCodes: ["98022"],
    landmarks: [
      "Enumclaw Expo Center",
      "Mud Mountain Dam",
      "Federation Forest State Park",
      "Downtown Enumclaw",
      "Boise Creek",
    ],
    climateDescription:
      "Enumclaw’s plateau climate brings cooler temperatures, wind exposure, and wet winters that punish thin exterior paint and neglected decks. Proper surface prep and quality coatings make the difference between a one-year fade and a lasting finish.",
    localChallenges: [
      "Wind-driven rain on exposed plateau exteriors",
      "Older farmhouse and mid-century trim needing repair",
      "Weathered decks and fences on larger lots",
      "Commercial storefronts that need after-hours-friendly scheduling",
    ],
    localSolutions: [
      "Durable exterior paint systems with solid priming",
      "Carpentry repairs before coating — siding, soffit, fascia, trim",
      "Deck staining and fence painting or installation",
      "Commercial painting planned around your business hours",
    ],
    highlights: [
      "Full-home interior and exterior painting",
      "Deck construction, staining, and fence work",
      "Remodels and carpentry repairs for older plateau homes",
      "Commercial painting for local shops and offices",
    ],
    nearby: ["Buckley", "Black Diamond", "Maple Valley", "Auburn", "Bonney Lake"],
    image: "/images/from-lane/lane-25-1450.jpg",
    latitude: 47.2043,
    longitude: -121.9915,
    faqs: [
      {
        question: "Do you take Enumclaw exterior painting jobs year-round?",
        answer:
          "We schedule exteriors around weather windows. Spring through early fall is ideal; we can often stage interior work during wetter months.",
      },
      {
        question: "Can you paint commercial buildings in downtown Enumclaw?",
        answer:
          "Yes. We plan commercial projects to minimize disruption for shops, offices, and other businesses.",
      },
      {
        question: "Do you repair siding before painting?",
        answer:
          "We do. Soft wood, failed caulk, and damaged trim get fixed so new paint has a sound surface.",
      },
    ],
    neighborhoods: enumclawNeighborhoods,
    articleSections: [
      {
        heading: "Enumclaw Painting & Remodeling Done Right",
        body: "Lane HBS brings Lake Tapps–based craftsmanship to Enumclaw with the same standards: proper prep, premium materials, and a job site you’d be comfortable having neighbors see. From downtown facades to plateau homes, we treat every project like our reputation depends on it — because it does.",
      },
      {
        heading: "Exteriors That Survive Plateau Weather",
        body: "Wind and rain expose weak paint fast. Our exterior process prioritizes washing, repairs, priming, and quality topcoats so Enumclaw homes keep their curb appeal through wet winters.",
      },
    ],
  },
  {
    slug: "maple-valley",
    name: "Maple Valley",
    state: "WA",
    county: "King County",
    heroTitle: "Painting & Remodeling Contractor in Maple Valley, WA",
    heroDescription:
      "Maple Valley painting, remodeling, decks, and fences with clean job sites and lasting finishes. Serving Wilderness Rim, Summit, Four Corners, Lake Wilderness, Hobart, Ravensdale & more. (253) 414-3937.",
    metaTitle: "Maple Valley Painting & Remodeling Contractor | Lane HBS",
    metaDescription:
      "Maple Valley painting, remodeling, deck & fence contractor. Interior/exterior paint, cabinets, outdoor projects. Free estimates. (253) 414-3937.",
    blurb:
      "Maple Valley families count on Lane HBS for clean job sites, honest timelines, and finishes that last — whether it is a single-room paint job or a full outdoor rebuild.",
    zipCodes: ["98038"],
    landmarks: [
      "Lake Wilderness Park",
      "Lake Wilderness Arboretum",
      "Cedar River Trail",
      "Maple Valley Community Center",
      "Legacy Park",
      "Taylor Mountain Forest",
    ],
    climateDescription:
      "Maple Valley sits in the Cascade foothills with more precipitation and tree cover than many lowland suburbs. Shade, moss, and moisture mean exteriors and decks need washing, mildew awareness, and coatings chosen for wetter microclimates.",
    localChallenges: [
      "Moss and moisture on shaded siding and fences",
      "Sloped lots complicating deck and exterior access",
      "HOA guidelines in newer planned communities",
      "Busy family households needing tidy, contained work zones",
    ],
    localSolutions: [
      "Pressure washing and mildew treatment before coating",
      "Deck and fence systems adapted to slopes and trees",
      "Cabinet and interior painting with floor and furniture protection",
      "Clear scopes that respect HOA and neighbor expectations",
    ],
    highlights: [
      "Interior & exterior residential painting",
      "Kitchen and bath remodel support",
      "Deck and fence installs with modern rail systems",
      "Pressure washing and prep before every coat",
    ],
    nearby: ["Covington", "Black Diamond", "Renton", "Enumclaw", "Issaquah"],
    image: "/images/from-lane/lane-22-62.jpg",
    latitude: 47.3926,
    longitude: -122.0465,
    faqs: [
      {
        question: "Which Maple Valley neighborhoods do you serve?",
        answer:
          "We work across Maple Valley including Wilderness Rim, Summit, Four Corners, Lake Wilderness communities, Tahoma-area streets, nearby Hobart along Issaquah-Hobart Road, and Ravensdale.",
      },
      {
        question: "Do you handle HOA-friendly exterior colors?",
        answer:
          "Yes. We’ll work with your approved color palette and help document finishes when HOAs require it.",
      },
      {
        question: "Can you paint interiors while we live at home?",
        answer:
          "Most interior projects are done occupied. We protect floors, move furniture carefully, and keep work areas contained.",
      },
    ],
    neighborhoods: mapleValleyNeighborhoods,
    articleSections: [
      {
        heading: "Maple Valley’s Trusted Painting & Outdoor Contractor",
        body: "From Wilderness Rim slopes to Summit streetscapes, Four Corners along SR 169 and Kent-Kangley, and unincorporated Hobart along Issaquah-Hobart Road, Lane HBS helps Maple Valley-area homeowners protect and upgrade their properties. Interior painting, exteriors, cabinets, decks, and fences — scoped clearly and finished carefully.",
      },
      {
        heading: "Foothills Moisture Demands Better Prep",
        body: "Tree cover and rainfall mean washing, repairs, and the right coatings matter more here than in drier climates. We don’t skip prep, and we don’t leave a mess behind.",
      },
    ],
  },
  {
    slug: "covington",
    name: "Covington",
    state: "WA",
    county: "King County",
    heroTitle: "Painting & Remodeling Contractor in Covington, WA",
    heroDescription:
      "Covington painting, cabinet refinishing, remodeling, decks, and fences. Serving Lake Sawyer, Maple Hills, Covington Woods, Jenkins Creek, Downtown Covington & more. Call (253) 414-3937.",
    metaTitle: "Covington Painting & Remodeling Contractor | Lane HBS",
    metaDescription:
      "Covington painting, remodeling, deck & fence contractor. Cabinets, interiors, exteriors, flooring refreshes. Free estimates. (253) 414-3937.",
    blurb:
      "From Covington subdivisions to established streets, we deliver professional painting and renovation services with clear communication from estimate to final walkthrough.",
    zipCodes: ["98042"],
    landmarks: [
      "Lake Sawyer",
      "Jenkins Creek Park",
      "Covington Community Park",
      "Soos Creek Trail",
      "Downtown Covington / SE 272nd",
    ],
    climateDescription:
      "Covington shares the South King County wet-season pattern — damp winters, moss pressure on north elevations, and UV that fades neglected exteriors. Consistent washing and quality paint systems keep neighborhoods looking sharp.",
    localChallenges: [
      "Subdivision homes needing cohesive exterior color updates",
      "Kitchen cabinets worn from daily family use",
      "Fences and decks due for stain or replacement",
      "Homeowners wanting remodel results without chaos",
    ],
    localSolutions: [
      "Whole-home exterior painting with neat trim detail",
      "Cabinet painting systems that transform kitchens affordably",
      "Deck and fence services matched to lot size and lifestyle",
      "Remodel and repair work coordinated with clear daily progress",
    ],
    highlights: [
      "Cabinet painting that upgrades kitchens without full replacement",
      "Whole-home exterior painting and staining",
      "Flooring installs and room refreshes",
      "Licensed, bonded, and insured general contractor services",
    ],
    nearby: ["Maple Valley", "Kent", "Auburn", "Black Diamond", "Renton"],
    image: "/images/from-lane/lane-33-1513.jpg",
    latitude: 47.3579,
    longitude: -122.1472,
    faqs: [
      {
        question: "Do you serve Lake Sawyer, Maple Hills, Jenkins Creek, and Downtown Covington?",
        answer:
          "Yes. Lake Sawyer, Maple Hills, Covington Woods, Jenkins Creek, Downtown Covington along SE 272nd, and nearby Covington neighborhoods are all within our service area.",
      },
      {
        question: "Is cabinet painting durable enough for a busy kitchen?",
        answer:
          "When prep is done right — cleaning, sanding, priming, and a quality topcoat — cabinet painting is a proven, durable upgrade for family kitchens.",
      },
      {
        question: "Can you help with flooring as part of a refresh?",
        answer:
          "Yes. Flooring installs and room refreshes can be scoped alongside paint and remodel work.",
      },
    ],
    neighborhoods: covingtonNeighborhoods,
    articleSections: [
      {
        heading: "Covington Painting, Cabinets & Remodeling",
        body: "Lane HBS helps Covington homeowners and shop owners upgrade where it shows — kitchens, exteriors, decks, storefronts, and living spaces — from Lake Sawyer and Maple Hills to Covington Woods, Jenkins Creek, and Downtown Covington along SE 272nd. Licensed work, straightforward estimates, and finishes built for South King County weather.",
      },
      {
        heading: "Cabinet Painting That Looks Like a Remodel",
        body: "Replacing cabinets is expensive. Our cabinet painting system (cleaning, sanding, priming, durable topcoat) gives Covington kitchens a high-end refresh at a fraction of replacement cost.",
      },
    ],
  },
];

export function getCity(slug: string): ServiceAreaCity | undefined {
  return serviceAreaCities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return serviceAreaCities.map((c) => c.slug);
}

export function getNeighborhood(
  citySlug: string,
  neighborhoodSlug: string,
): { city: ServiceAreaCity; neighborhood: Neighborhood } | undefined {
  const city = getCity(citySlug);
  if (!city) return undefined;
  const neighborhood = city.neighborhoods.find((n) => n.slug === neighborhoodSlug);
  if (!neighborhood) return undefined;
  return { city, neighborhood };
}

export function getAllNeighborhoodParams(): { city: string; neighborhood: string }[] {
  return serviceAreaCities.flatMap((city) =>
    city.neighborhoods.map((n) => ({ city: city.slug, neighborhood: n.slug })),
  );
}
