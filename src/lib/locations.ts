import type { FaqItem } from "@/lib/seo";

export type Neighborhood = {
  slug: string;
  name: string;
  description: string;
  blurb: string;
  highlights: string[];
  faqs: FaqItem[];
  image: string;
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
      "Local Lake Tapps contractor for interior & exterior painting, cabinet refinishing, decks, fences, and home renovations. Free estimates. Call (253) 414-3937.",
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
        question: "Do you serve all of Lake Tapps and Bonney Lake?",
        answer:
          "Yes. We regularly work throughout Lake Tapps, Bonney Lake, and nearby Pierce County communities including Sumner, Auburn, and Edgewood.",
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
    neighborhoods: [
      {
        slug: "snag-island",
        name: "Snag Island",
        description:
          "Peninsula living with waterfront exposure — exteriors and decks need moisture-smart prep and durable finishes.",
        blurb:
          "Snag Island properties sit close to the water. Lane HBS handles exterior painting, deck staining, and trim repairs with products and prep suited to humid lakeside conditions.",
        highlights: [
          "Waterfront-aware exterior painting and staining",
          "Deck and railing refreshes that stand up to humidity",
          "Clean job sites on tight peninsula lots",
        ],
        faqs: [
          {
            question: "Do you paint waterfront homes on Snag Island?",
            answer:
              "Yes. We prep thoroughly for moisture, use appropriate primers and topcoats, and protect landscaping and docks during the job.",
          },
          {
            question: "Can you help with peeling deck stain near the lake?",
            answer:
              "We pressure wash, sand or scrape as needed, and recoat with stain/sealers chosen for lakeside wear.",
          },
        ],
        image: "/images/from-lane/lane-25-1450.jpg",
      },
      {
        slug: "driftwood-point",
        name: "Driftwood Point",
        description:
          "Established lakeside streets where curb appeal and durable outdoor finishes matter year-round.",
        blurb:
          "From full-home exteriors to cabinet refinishing inside, Driftwood Point homeowners hire Lane HBS for careful prep, honest timelines, and finishes that look sharp after Northwest winters.",
        highlights: [
          "Full-home exterior painting",
          "Interior paint and cabinet refinishing",
          "Fence and deck touch-ups or rebuilds",
        ],
        faqs: [
          {
            question: "How long does exterior painting take in Driftwood Point?",
            answer:
              "Most single-family exteriors take several days depending on size, weather, and repair needs. We give a clear schedule before work starts.",
          },
        ],
        image: "/images/from-lane/lane-01-46.jpg",
      },
      {
        slug: "west-tapps",
        name: "West Tapps",
        description:
          "West-side Lake Tapps homes with elevated decks, views, and Pacific Northwest weather exposure.",
        blurb:
          "West Tapps projects often mix exterior paint, deck rail upgrades, and interior refreshes. We coordinate the work so your home looks consistent from street to shoreline view.",
        highlights: [
          "Elevated deck staining and modern rail systems",
          "Exterior color updates with lasting coatings",
          "Interior painting for open living spaces",
        ],
        faqs: [
          {
            question: "Do you install or replace deck railings in West Tapps?",
            answer:
              "Yes — wood rails with metal balusters, staining, and related carpentry are common West Tapps projects for us.",
          },
        ],
        image: "/images/from-lane/lane-22-62.jpg",
      },
      {
        slug: "lake-tapps-plateau",
        name: "Lake Tapps Plateau",
        description:
          "Plateau neighborhoods above the reservoir with larger lots and family-focused outdoor living.",
        blurb:
          "On the Lake Tapps Plateau we paint, remodel, and build outdoor spaces for growing families — kitchens, interiors, fences, and decks included.",
        highlights: [
          "Interior & exterior residential painting",
          "Kitchen cabinet painting systems",
          "Fence and outdoor living upgrades",
        ],
        faqs: [
          {
            question: "Can you paint cabinets instead of replacing them?",
            answer:
              "Yes. Our cabinet painting system includes heavy-duty cleaning, sanding, priming, and a durable topcoat — a cost-effective kitchen upgrade.",
          },
        ],
        image: "/images/from-lane/lane-20-1512.jpg",
      },
    ],
    articleSections: [
      {
        heading: "Your Local Lake Tapps Painting & Remodeling Team",
        body: "Lane Home & Business Services LLC is rooted in Lake Tapps. That means we understand reservoir humidity, elevated decks, and the finish quality neighbors notice on lakeside streets. Whether you need a full exterior repaint, a kitchen cabinet refresh, or a deck rebuild, you get licensed, insured craftsmanship with clear communication.",
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
    neighborhoods: [
      {
        slug: "downtown-enumclaw",
        name: "Downtown Enumclaw",
        description:
          "Main-street homes and businesses that need sharp exteriors and reliable commercial painting.",
        blurb:
          "Downtown Enumclaw projects range from storefront refresh work to nearby residential interiors. We keep sites tidy and schedules predictable.",
        highlights: [
          "Commercial and residential painting",
          "Trim, door, and facade updates",
          "Flexible scheduling for businesses",
        ],
        faqs: [
          {
            question: "Can work be done after business hours?",
            answer:
              "Often yes — we’ll discuss timing during your estimate so customers and neighbors aren’t disrupted.",
          },
        ],
        image: "/images/painting.jpg",
      },
      {
        slug: "boise-creek",
        name: "Boise Creek",
        description:
          "Residential pockets near Boise Creek with family homes and outdoor living spaces.",
        blurb:
          "Boise Creek homeowners call Lane HBS for interior paint, exterior refresh, and deck or fence work that fits family yards.",
        highlights: [
          "Interior painting for busy households",
          "Fence and deck upgrades",
          "Honest pricing and clear communication",
        ],
        faqs: [
          {
            question: "Do you fence yards in Boise Creek?",
            answer:
              "Yes — fence installation, painting, and repairs are part of our outdoor services in Enumclaw.",
          },
        ],
        image: "/images/from-lane/lane-16-48.jpg",
      },
      {
        slug: "enumclaw-plateau",
        name: "Enumclaw Plateau",
        description:
          "Larger plateau lots where exterior coatings and outdoor structures take a beating from wind and rain.",
        blurb:
          "On the Enumclaw Plateau we focus on durable exteriors, stained decks, and carpentry that keeps bigger properties looking maintained for years.",
        highlights: [
          "Weather-ready exterior painting",
          "Deck staining and sealing",
          "Siding and soffit repairs",
        ],
        faqs: [
          {
            question: "What prep do plateau exteriors need?",
            answer:
              "Washing, scraping failed paint, caulking, priming bare wood, and addressing repairs before the finish coats.",
          },
        ],
        image: "/images/from-lane/lane-05-1d7c6264-414c-4303-b396-b8786e3a1eea-1_all_205.jpg",
      },
    ],
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
      "Maple Valley painting, remodeling, decks, and fences with clean job sites and lasting finishes. Serving Wilderness Rim, Summit, Four Corners, Tahoma & more. (253) 414-3937.",
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
          "We work across Maple Valley including Wilderness Rim, Summit, Four Corners, Tahoma-area neighborhoods, Lake Wilderness communities, and nearby Ravensdale.",
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
    neighborhoods: [
      {
        slug: "wilderness-rim",
        name: "Wilderness Rim",
        description:
          "Hillside, tree-lined lots where moisture-aware exteriors and solid outdoor structures matter.",
        blurb:
          "Wilderness Rim homes often need exterior paint that fights moss and shade, plus decks or fences that follow the terrain. Lane HBS brings careful prep and durable finishes.",
        highlights: [
          "Moisture-aware exterior painting",
          "Sloped-lot deck staining and repairs",
          "Fence work for wooded property lines",
        ],
        faqs: [
          {
            question: "Do you treat mildew before painting in Wilderness Rim?",
            answer:
              "Yes. Washing and appropriate treatments are part of exterior prep in shaded foothills neighborhoods.",
          },
        ],
        image: "/images/from-lane/lane-05-1d7c6264-414c-4303-b396-b8786e3a1eea-1_all_205.jpg",
      },
      {
        slug: "summit",
        name: "Summit at Maple Valley",
        description:
          "Newer planned community with HOA standards and modern home exteriors.",
        blurb:
          "At Summit we deliver crisp exteriors, cabinet refinishing, and outdoor updates that meet community expectations without cutting corners on prep.",
        highlights: [
          "HOA-conscious exterior painting",
          "Cabinet painting for modern kitchens",
          "Clean, contained job sites",
        ],
        faqs: [
          {
            question: "Will you follow Summit HOA paint guidelines?",
            answer:
              "We’ll review your guidelines and approved colors during the estimate so the finished look stays compliant.",
          },
        ],
        image: "/images/painting16.jpg",
      },
      {
        slug: "lake-wilderness",
        name: "Lake Wilderness",
        description:
          "Lake-adjacent Maple Valley living with parks, trails, and outdoor-focused homes.",
        blurb:
          "Near Lake Wilderness we paint, stain decks, and refresh interiors for homeowners who want their property to match the recreation lifestyle outside the door.",
        highlights: [
          "Interior and exterior painting",
          "Deck staining near lake communities",
          "Fence installation and repairs",
        ],
        faqs: [
          {
            question: "Do you work near Lake Wilderness Park?",
            answer:
              "Yes — surrounding neighborhoods are a regular part of our Maple Valley service area.",
          },
        ],
        image: "/images/from-lane/lane-33-1513.jpg",
      },
      {
        slug: "four-corners",
        name: "Four Corners",
        description:
          "The SR 169 and Kent-Kangley crossroads — family homes, school-year schedules, and exteriors that take arterial weather and Pacific Northwest rain.",
        blurb:
          "Around Four Corners, Lane HBS paints interiors and exteriors, refinishes cabinets, and refreshes decks and fences for busy Tahoma-area households. We keep job sites tidy near SE Tahoma Way, Maple Valley Highway, and the Kent-Kangley corridor.",
        highlights: [
          "Exterior painting that holds up to arterial dust, rain, and UV",
          "Interior paint and cabinet refinishing in occupied family homes",
          "Deck staining and fence work on typical subdivision lots",
        ],
        faqs: [
          {
            question: "Do I need a permit to paint my Four Corners home?",
            answer:
              "Most interior and exterior repaints in Maple Valley do not need a building permit. Structural changes, new decks, or fence work that alters height or location may. We’ll flag anything that should be checked with the City of Maple Valley Building Division during your estimate.",
          },
          {
            question: "What painting and remodel work fits Four Corners homes?",
            answer:
              "Many Four Corners houses are two-story 1990s–2000s family homes near Tahoma High School. The usual mix is a full exterior refresh, kitchen cabinet painting, interior walls in high-traffic rooms, and deck or fence staining that can take shade and wet winters.",
          },
          {
            question: "How much does painting or remodeling cost in Four Corners?",
            answer:
              "Price depends on square footage, siding condition, access, and whether carpentry or deck work is included. Estimates are free — call (253) 414-3937 or use our contact form and we’ll walk the property and give a written scope.",
          },
          {
            question: "How long does a typical Four Corners project take?",
            answer:
              "A single-family interior or exterior paint job is usually several days, scheduled around weather and school-year routines. Cabinet refinishing and deck staining add time for prep and cure. We confirm the calendar before we start so drop-off traffic on SE Tahoma Way and Kent-Kangley doesn’t become a surprise.",
          },
        ],
        image: "/images/from-lane/lane-08-4766.jpg",
      },
      {
        slug: "ravensdale",
        name: "Ravensdale",
        description:
          "Wooded rural-residential area east of Maple Valley with larger lots and quiet foothills character.",
        blurb:
          "Ravensdale properties often mean longer fence runs, bigger exteriors, and wooded moisture. We bring the same professional standards as in-town Maple Valley jobs.",
        highlights: [
          "Larger-lot exterior painting",
          "Fence installation and staining",
          "Deck projects for rural residential homes",
        ],
        faqs: [
          {
            question: "Is Ravensdale inside your service area?",
            answer:
              "Yes. Ravensdale and nearby Maple Valley foothills communities are within our regular coverage.",
          },
        ],
        image: "/images/from-lane/lane-01-46.jpg",
      },
    ],
    articleSections: [
      {
        heading: "Maple Valley’s Trusted Painting & Outdoor Contractor",
        body: "From Wilderness Rim slopes to Summit streetscapes, Lane HBS helps Maple Valley homeowners protect and upgrade their properties. Interior painting, exteriors, cabinets, decks, and fences — scoped clearly and finished carefully.",
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
      "Covington painting, cabinet refinishing, remodeling, decks, and fences with clear communication from estimate to walkthrough. Call (253) 414-3937.",
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
      "Downtown Covington",
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
        question: "Do you serve Lake Sawyer and Maple Hills?",
        answer:
          "Yes. Lake Sawyer, Maple Hills, Covington Woods, and nearby Covington neighborhoods are all within our service area.",
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
    neighborhoods: [
      {
        slug: "lake-sawyer",
        name: "Lake Sawyer",
        description:
          "Lake-adjacent Covington living with strong demand for exteriors, decks, and polished interiors.",
        blurb:
          "Around Lake Sawyer we help homeowners refresh exteriors, stain decks, and update interiors so properties feel as good as the setting.",
        highlights: [
          "Lakeside-area exterior painting",
          "Deck staining and rail updates",
          "Interior paint and cabinet work",
        ],
        faqs: [
          {
            question: "Do you work on homes near Lake Sawyer Regional Park?",
            answer:
              "Yes — Lake Sawyer neighborhoods are a regular Covington coverage area for Lane HBS.",
          },
        ],
        image: "/images/from-lane/lane-03-45.jpg",
      },
      {
        slug: "maple-hills",
        name: "Maple Hills",
        description:
          "Established Covington neighborhood with family homes and classic exterior refresh needs.",
        blurb:
          "Maple Hills projects often include exterior repaints, fence updates, and interior upgrades for long-time homeowners ready for a new look.",
        highlights: [
          "Full exterior repaints",
          "Fence painting and repairs",
          "Interior room-by-room painting",
        ],
        faqs: [
          {
            question: "Can you paint just the exterior trim in Maple Hills?",
            answer:
              "Yes. We can scope trim-only, full exterior, or phased projects based on budget and timing.",
          },
        ],
        image: "/images/painting6.jpg",
      },
      {
        slug: "covington-woods",
        name: "Covington Woods",
        description:
          "Tree-lined residential streets where moisture-aware prep keeps new paint looking fresh longer.",
        blurb:
          "In Covington Woods we wash, prep, and coat exteriors properly — and handle cabinets, decks, and fences when outdoor living needs a refresh too.",
        highlights: [
          "Shade-smart exterior prep and paint",
          "Cabinet refinishing",
          "Deck and outdoor projects",
        ],
        faqs: [
          {
            question: "Why does paint fail faster on shaded sides of the house?",
            answer:
              "Moisture and mildew linger on north/shaded elevations. Washing and correct primers dramatically improve coating life.",
          },
        ],
        image: "/images/from-lane/lane-20-1512.jpg",
      },
    ],
    articleSections: [
      {
        heading: "Covington Painting, Cabinets & Remodeling",
        body: "Lane HBS helps Covington homeowners upgrade where it shows — kitchens, exteriors, decks, and living spaces — without the runaround. Licensed work, straightforward estimates, and finishes built for South King County weather.",
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
