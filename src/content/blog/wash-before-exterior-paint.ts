import type { BlogPost } from "./types";

const WOOD_HANDBOOK =
  "https://research.fs.usda.gov/download/treesearch/7145.pdf";
const FPL_CHOICE =
  "https://research.fs.usda.gov/download/treesearch/32438.pdf";
const FPL_DECKS =
  "https://research.fs.usda.gov/download/treesearch/32439.pdf";
const EPA_MOLD =
  "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home";

export const washBeforeExteriorPaint: BlogPost = {
  slug: "wash-before-exterior-paint",
  title: "Why Siding and Decks Need a Real Wash Before Paint or Stain",
  metaTitle: "Wash Siding and Decks Before Exterior Paint or Stain",
  description:
    "Dirt, mildew, and chalky old paint keep new coatings from sticking. What a proper wash does before exterior paint or deck stain, what it cannot fix, and why the surface has to dry — for homes around Lake Tapps, Enumclaw, Maple Valley, and Covington.",
  excerpt:
    "A new coat will not stick to dirt, mildew, or chalky paint. Here is what washing siding and decks actually does, what it cannot fix, and why dry time matters as much as the wash itself.",
  datePublished: "2026-11-15",
  image: "/images/painting.jpg",
  imageAlt: "House exterior with ladders set up for siding and paint work",
  breadcrumbLabel: "Wash Before Exterior Paint",
  ctaHeading: "Planning an exterior or deck refresh?",
  intro: [
    "Fresh paint on a dirty wall does not last. The same is true of stain on a deck that still has pollen, mildew, or leftover gray fibers on the boards. Coatings need a clean, sound surface. A wash is how most exterior jobs start — but it is prep, not a finish, and it is not a substitute for repairs.",
    "This guide covers why siding and outdoor wood need a real wash before paint or stain, how to think about mildew and dry time in western Washington, and what washing cannot fix. It is general guidance for homes around Lake Tapps, Enumclaw, Maple Valley, and Covington. The right method still depends on the surface, the existing coating, and the weather that follows.",
  ],
  sections: [
    {
      heading: "Coatings stick to clean surfaces, not to film",
      paragraphs: [
        "Siding collects dust, cobwebs, pollen, and oxidation. North and shaded walls often grow mildew or algae. Decks add foot traffic, leaf tannins, and gray weathered fibers. If that layer stays put, the new coat bonds to the dirt instead of the house.",
        "The USDA Forest Products Laboratory's [Wood Handbook chapter on finishing wood](" +
          WOOD_HANDBOOK +
          ") treats surface condition as part of how long a finish lasts. Its guide to [choosing a finish](" +
          FPL_CHOICE +
          ") makes the same point: paint and stain need a sound, clean substrate. Washing is how you get there before primer or stain goes on.",
      ],
      callout: {
        title: "The short version",
        body: "Wash first, let the surface dry, then repair and coat. Skipping the wash is a common reason a new color looks dull early or peels in patches.",
      },
    },
    {
      heading: "What a wash can and cannot do",
      paragraphs: [
        "A proper wash removes loose dirt, mildew residue, and chalky oxidation so the new film can grip. On a deck, it also lifts the loose gray layer that keeps stain from soaking in evenly. That is why our [exterior painting](/services/exterior-painting) process starts with a wash and assessment, and why [deck and fence](/services/decks-fences) work lists pressure-washing prep before stain or paint.",
        "A wash cannot rebuild soft fascia, close open joints, or glue down peeling paint. Those are carpentry and scraping problems. If a board is soft or a coating is already failing in sheets, clean enough to see the damage, then fix it before any new color. Our [repairs and carpentry](/services/repairs-carpentry) work belongs in that gap between a clean surface and the first coat.",
      ],
      bullets: [
        "A wash helps: dirt, pollen, mildew residue, chalky oxidation, and loose fibers on deck boards.",
        "A wash does not fix: soft wood, open joints, failed caulk, or paint that is already peeling in sheets.",
        "After the wash: look again in daylight. Dirt often hides the repairs you still need.",
      ],
      image: {
        src: "/images/painting14.jpg",
        alt: "House exterior and yard seen from the driveway, with siding and trim in view",
        caption: "Shaded sides and lower walls often hold more dirt and growth than the sunny face of the same house.",
      },
    },
    {
      heading: "Western Washington dirt is often living dirt",
      paragraphs: [
        "In this climate, the film on a north wall is frequently mildew or algae, not just dust. The same is true under deck rails and on boards that stay damp. A rinse alone may move it around. Cleaning that actually addresses growth, then rinsing it off, is what gives the new coat a chance.",
        "The EPA's [brief guide to mold, moisture, and your home](" +
          EPA_MOLD +
          ") is written mainly for indoor spaces, but the underlying idea is the same outdoors: moisture and organic growth should be cleaned, and the water source should be controlled where you can. Overflowing gutters, splashback at grade, and shady plantings against siding will bring the growth back after the wash if nothing else changes.",
      ],
    },
    {
      heading: "Pressure is a tool, not the goal",
      paragraphs: [
        "Pressure washing is useful, and it is also easy to overdo. Too much force can etch wood, drive water behind laps of siding, or open the grain so it raises and holds dirt later. Soft or already failing boards take that damage first. The point is a clean surface, not the highest setting on the machine.",
        "Method matters as much as pressure. Keep the spray moving, work from the top down on walls, and stay at a sensible distance. Windows, lights, vents, and electrical fixtures need to be protected or avoided. On decks, the Forest Products Laboratory's [Finishes for Wood Decks](" +
          FPL_DECKS +
          ") stresses cleaning and letting the wood dry thoroughly before a new finish — not soaking the boards and coating them the same afternoon.",
      ],
      callout: {
        title: "Do not coat a wet wall",
        body: "A house can look dry and still hold water in the siding or in freshly washed deck boards. Follow the product label for moisture and temperature, and give the surface real dry time after the wash.",
      },
      image: {
        src: "/images/from-lane/lane-05-1d7c6264-414c-4303-b396-b8786e3a1eea-1_all_205.jpg",
        alt: "House and elevated deck after exterior work, with stairs leading to the yard",
        caption: "Decks and siding both need to dry after a wash, even on a clear day.",
      },
    },
    {
      heading: "How washing fits the rest of the job",
      paragraphs: [
        "A practical order looks like this: wash and inspect, let the surface dry, make repairs, prime bare areas, then paint or stain. Reversing that order usually means washing paint dust onto a finished wall, or coating wood that is still wet at the core.",
        "Weather sits in the middle of that sequence. Our post on [when to paint your exterior](/blog/when-to-paint-exterior-lake-tapps-enumclaw) covers dry-season windows, dew, and surface moisture. The same limits apply after a wash. For finish choices on outdoor wood once the boards are clean and sound, see [deck stain vs. paint](/blog/deck-stain-vs-paint-western-washington).",
      ],
      image: {
        src: "/images/from-lane/lane-03-45.jpg",
        alt: "Completed exterior of a house with deck and siding after finish work",
        caption: "Clean, dry, sound surfaces give paint and stain a fair chance to last.",
      },
    },
    {
      heading: "Getting the wash on the schedule",
      paragraphs: [
        "Lane Home & Business Services includes washing as prep on [exterior painting](/services/exterior-painting) and on many [deck and fence](/services/decks-fences) staining jobs, and we handle [carpentry repairs](/services/repairs-carpentry) when the wash turns up soft wood. We work in Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby.",
        "If you are planning a repaint or a deck refresh, call or text (253) 414-3937 or [request a free estimate](/contact). We can look at the siding or boards with you and plan the wash, the dry time, and any repairs before a coat goes on.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Exterior Painting",
      href: "/services/exterior-painting",
      note: "Wash, repairs, prime, and finish coats.",
    },
    {
      label: "Decks & Fences",
      href: "/services/decks-fences",
      note: "Pressure-washing prep, stain, and paint.",
    },
    {
      label: "Repairs & Carpentry",
      href: "/services/repairs-carpentry",
      note: "Soft wood and failed trim the wash cannot fix.",
    },
    {
      label: "When to paint your exterior",
      href: "/blog/when-to-paint-exterior-lake-tapps-enumclaw",
      note: "Dry-season windows, dew, and surface moisture.",
    },
    {
      label: "Deck stain vs. paint",
      href: "/blog/deck-stain-vs-paint-western-washington",
      note: "Finish choices once the wood is clean and sound.",
    },
    { label: "Lake Tapps", href: "/service-areas/lake-tapps" },
    { label: "Enumclaw", href: "/service-areas/enumclaw" },
    { label: "Maple Valley", href: "/service-areas/maple-valley" },
    { label: "Covington", href: "/service-areas/covington" },
    { label: "Free estimate", href: "/contact", note: "Call or text (253) 414-3937." },
  ],
  sources: [
    {
      label: "USDA Forest Products Laboratory: Wood Handbook, Finishing of Wood (PDF)",
      href: WOOD_HANDBOOK,
    },
    {
      label: "USDA Forest Products Laboratory: Paint, Stain, Varnish, or Preservative? It's Your Choice (PDF)",
      href: FPL_CHOICE,
    },
    {
      label: "USDA Forest Products Laboratory: Finishes for Wood Decks (PDF)",
      href: FPL_DECKS,
    },
    {
      label: "U.S. EPA: A Brief Guide to Mold, Moisture, and Your Home",
      href: EPA_MOLD,
    },
  ],
};
