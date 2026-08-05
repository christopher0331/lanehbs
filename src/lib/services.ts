import type { FaqItem } from "@/lib/seo";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  description: string;
  items: string[];
  process: { title: string; body: string }[];
  faqs: FaqItem[];
  image: string;
  relatedSlugs: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    shortTitle: "Interior Painting",
    metaTitle: "Interior Painting Contractor | Lake Tapps & Nearby | Lane HBS",
    metaDescription:
      "Professional interior painting for homes in Lake Tapps, Enumclaw, Maple Valley & Covington. Walls, ceilings, trim, cabinets. Free estimates. (253) 414-3937.",
    heroSubtitle:
      "Crisp lines, protected floors, and finishes that make rooms feel new — without the chaos of a bad paint job.",
    description:
      "Precision interior painting with premium paints — walls, ceilings, trim, doors, cabinets, and millwork finished carefully in occupied homes across Pierce and King County.",
    items: [
      "Wall & ceiling painting",
      "Cabinet refinishing",
      "Trim, doors & millwork",
      "Color consultation",
      "Drywall repair touch-ups",
      "Move-in / refresh painting",
    ],
    process: [
      {
        title: "Protect & Prep",
        body: "Floors, furniture, and fixtures get covered. We patch, sand, and prime so the finish looks even.",
      },
      {
        title: "Cut & Coat",
        body: "Clean cut-ins, proper film build, and quality products chosen for the room’s use and light.",
      },
      {
        title: "Detail Walkthrough",
        body: "We punch the punch list with you before we call it done.",
      },
    ],
    faqs: [
      {
        question: "Can you paint while we live in the house?",
        answer:
          "Yes. Most interior projects are completed in occupied homes with contained work areas and daily cleanup.",
      },
      {
        question: "Do you paint cabinets?",
        answer:
          "Cabinet refinishing is one of our most requested upgrades — cleaning, sanding, priming, and a durable topcoat.",
      },
    ],
    image: "/images/painting16.jpg",
    relatedSlugs: ["exterior-painting", "remodeling-renovation", "repairs-carpentry"],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    shortTitle: "Exterior Painting",
    metaTitle: "Exterior Painting Contractor | Pierce & King County | Lane HBS",
    metaDescription:
      "Exterior house painting built for Pacific Northwest weather. Pressure washing, repairs, priming & lasting coatings. Free estimates. (253) 414-3937.",
    heroSubtitle:
      "Weather-ready exteriors — washed, repaired, primed, and coated to protect your home and curb appeal.",
    description:
      "Weather-resistant exterior coatings that protect and beautify homes in Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby communities.",
    items: [
      "Full house painting",
      "Soffit & fascia",
      "Pressure washing",
      "Wood staining",
      "Caulking & exterior repairs",
      "Garage & outbuilding paint",
    ],
    process: [
      {
        title: "Wash & Assess",
        body: "Pressure washing and a full surface check for soft wood, failed caulk, and peeling coatings.",
      },
      {
        title: "Repair & Prime",
        body: "Carpentry fixes and priming bare areas so the finish bonds and lasts.",
      },
      {
        title: "Finish Coats",
        body: "Even coverage on siding, trim, and detail work — scheduled around Northwest weather windows.",
      },
    ],
    faqs: [
      {
        question: "When is the best time for exterior painting?",
        answer:
          "Spring through early fall is ideal. We’ll schedule around rain and temperature for proper curing.",
      },
      {
        question: "Do you repair siding before painting?",
        answer:
          "Yes. Soft wood, trim, soffits, and failed caulk get addressed so new paint isn’t hiding problems.",
      },
    ],
    image: "/images/painting6.jpg",
    relatedSlugs: ["interior-painting", "decks-fences", "repairs-carpentry"],
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting",
    shortTitle: "Commercial Painting",
    metaTitle: "Commercial Painting Contractor | South Sound | Lane HBS",
    metaDescription:
      "Commercial painting for offices, retail, and light industrial spaces with minimal disruption. Serving Lake Tapps & nearby. (253) 414-3937.",
    heroSubtitle:
      "Professional commercial painting with scheduling that respects your customers, staff, and operations.",
    description:
      "Commercial painting services with minimal disruption, on-time delivery, and durable results for offices, retail, and business properties.",
    items: [
      "Office interiors",
      "Retail spaces",
      "Common areas & hallways",
      "Exterior commercial coatings",
      "After-hours scheduling options",
      "Project management & clear scopes",
    ],
    process: [
      {
        title: "Scope & Schedule",
        body: "We plan around your hours, tenants, and access so business keeps moving.",
      },
      {
        title: "Protect & Execute",
        body: "Contained work zones, professional prep, and efficient coating systems.",
      },
      {
        title: "Inspect & Hand Off",
        body: "Walkthrough with your point of contact and a clean, ready space.",
      },
    ],
    faqs: [
      {
        question: "Can you work nights or weekends?",
        answer:
          "Often yes for commercial projects. We’ll confirm options during estimating.",
      },
    ],
    image: "/images/painting.jpg",
    relatedSlugs: ["interior-painting", "exterior-painting", "remodeling-renovation"],
  },
  {
    slug: "remodeling-renovation",
    title: "Remodeling & Renovation",
    shortTitle: "Remodeling",
    metaTitle: "Home Remodeling & Renovation | Lane HBS",
    metaDescription:
      "Residential remodeling and renovation — kitchens, baths, room refreshes, and project carpentry. Lake Tapps & nearby. Free estimates. (253) 414-3937.",
    heroSubtitle:
      "From kitchen refreshes to full room transformations — remodel work coordinated with finish quality that shows.",
    description:
      "Residential remodels that bring your vision to life — kitchens, bathrooms, room updates, and the carpentry/paint finishing that ties it together.",
    items: [
      "Kitchen refreshes & cabinet systems",
      "Bathroom renovation support",
      "Room transformations",
      "Flooring installs",
      "Drywall & finish carpentry",
      "Paint-integrated remodel scopes",
    ],
    process: [
      {
        title: "Plan the Scope",
        body: "Clear priorities, realistic sequencing, and honest pricing before demolition starts.",
      },
      {
        title: "Build & Finish",
        body: "Carpentry, surfaces, and coatings executed so the final look is cohesive.",
      },
      {
        title: "Final Walkthrough",
        body: "We don’t disappear at 90% — punch lists get closed.",
      },
    ],
    faqs: [
      {
        question: "Do you only paint, or can you remodel too?",
        answer:
          "We’re a painting and general contracting team — remodel and renovation work is part of what we do, not an afterthought.",
      },
    ],
    image: "/images/from-lane/lane-30-4772.jpg",
    relatedSlugs: ["interior-painting", "repairs-carpentry", "decks-fences"],
  },
  {
    slug: "decks-fences",
    title: "Decks & Fences",
    shortTitle: "Decks & Fences",
    metaTitle: "Deck & Fence Contractor | Lake Tapps & Nearby | Lane HBS",
    metaDescription:
      "Deck building, staining, railing upgrades, and fence installation/painting in Lake Tapps, Enumclaw, Maple Valley & Covington. (253) 414-3937.",
    heroSubtitle:
      "Outdoor living that lasts — decks, rails, stains, and fences built and finished for Northwest weather.",
    description:
      "Deck construction, staining/sealing, railing systems, and fence installation or painting to expand and protect your outdoor space.",
    items: [
      "Deck construction",
      "Deck staining & sealing",
      "Railing upgrades",
      "Fence installation",
      "Fence painting & staining",
      "Pressure washing prep",
    ],
    process: [
      {
        title: "Measure & Design",
        body: "We match structure and finish to how you use the yard — privacy, views, pets, and entertaining.",
      },
      {
        title: "Build / Prep",
        body: "Solid framing, hardware, and surface prep so stain or paint has a chance to last.",
      },
      {
        title: "Finish",
        body: "Even stain or paint application and a clean site when we’re done.",
      },
    ],
    faqs: [
      {
        question: "Do you stain existing decks or only build new?",
        answer:
          "Both. Staining/sealing existing decks is extremely common — especially around Lake Tapps.",
      },
      {
        question: "Can you install modern wood + metal railings?",
        answer:
          "Yes. Cedar or wood rails with black metal balusters are a popular upgrade we install regularly.",
      },
    ],
    image: "/images/from-lane/lane-03-45.jpg",
    relatedSlugs: ["exterior-painting", "repairs-carpentry", "remodeling-renovation"],
  },
  {
    slug: "repairs-carpentry",
    title: "Repairs & Carpentry",
    shortTitle: "Repairs & Carpentry",
    metaTitle: "Carpentry & Exterior Repairs | Lane HBS",
    metaDescription:
      "Siding, soffit, fascia, trim, and deck/fence repairs before paint. Licensed carpentry for lasting results. Free estimates. (253) 414-3937.",
    heroSubtitle:
      "Fix the substrate first — siding, soffits, trim, and outdoor repairs that make new paint actually last.",
    description:
      "Skilled carpentry repairs for siding, soffits, trim, fascia, decks, and fences — the foundation of a flawless coating job.",
    items: [
      "Siding repair",
      "Soffit & fascia repair",
      "Trim replacement",
      "Deck & fence repairs",
      "Exterior caulking",
      "Pre-paint carpentry",
    ],
    process: [
      {
        title: "Find the Failures",
        body: "We identify soft wood, leaks, and failed details before coatings go on.",
      },
      {
        title: "Repair Properly",
        body: "Replace or rebuild what’s compromised instead of painting over problems.",
      },
      {
        title: "Ready for Finish",
        body: "Surfaces left primed and ready for paint or stain.",
      },
    ],
    faqs: [
      {
        question: "Should repairs be done before exterior painting?",
        answer:
          "Almost always. Paint won’t save rotten trim — fixing first protects your investment.",
      },
    ],
    image: "/images/from-lane/lane-07-1199.jpg",
    relatedSlugs: ["exterior-painting", "decks-fences", "remodeling-renovation"],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}
