import type { ServiceAreaArticle } from "@/content/service-areas/types";
import type { FaqItem } from "@/lib/seo";

export type HomeProcessStep = {
  title: string;
  body: string;
};

export const HOME_META = {
  title: "Lane Home & Business Services LLC | Painting & Remodeling in Lake Tapps, WA",
  description:
    "Licensed Lake Tapps contractor for interior and exterior painting, remodeling, decks, fences, repairs, and commercial painting. Serving Enumclaw, Maple Valley, Covington, and nearby Pierce & King County. Free estimates. (253) 414-3937.",
} as const;

export const HOME_HIGHLIGHTS = [
  "Lake Tapps–based painting, remodeling, deck, and fence contractor",
  "Interior, exterior, and commercial painting with occupied-home prep",
  "Cabinet refinishing, room refreshes, and finish carpentry",
  "Deck staining, rail upgrades, fence work, and pre-paint repairs",
];

export const HOME_CHALLENGES = [
  "Pacific Northwest moisture, moss, and UV that peel thin exterior paint",
  "Occupied homes that need contained work zones and daily cleanup",
  "Soft trim, soffits, and siding that fail if paint goes on first",
  "Decks and fences worn by wet-dry cycles, shade, and sun off the water",
  "Shops and offices that cannot shut down for a messy paint week",
];

export const HOME_SOLUTIONS = [
  "Wash, scrape, prime, and recaulk before exterior coatings",
  "Protect floors and furniture; keep interior work contained",
  "Carpentry repairs on siding, soffit, fascia, and trim before paint",
  "Evaluate framing and railings, then stain, seal, or rebuild",
  "Commercial scopes planned around staff, customers, and access",
];

export const HOME_PROCESS: HomeProcessStep[] = [
  {
    title: "Free estimate",
    body: "Call (253) 414-3937 or use the contact form. We look at the surfaces, talk through timing, and write a clear scope — paint only, carpentry plus paint, cabinets, a deck, or a remodel sequence. Estimates are free.",
  },
  {
    title: "Protect and prep",
    body: "Floors, furniture, and landscaping get covered. We wash exteriors, patch interiors, and repair soft wood so the finish has a sound surface.",
  },
  {
    title: "Build and finish",
    body: "Carpentry, coatings, stain, or remodel work follows the agreed sequence. Interior jobs are usually completed in occupied homes. Exteriors are scheduled around Northwest weather windows.",
  },
  {
    title: "Walkthrough",
    body: "We punch the punch list with you before we call it done. The job is not finished at 90 percent.",
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What services does Lane HBS offer?",
    answer:
      "Interior painting, exterior painting, commercial painting, remodeling and renovation, decks and fences, and repairs and carpentry — including cabinet refinishing, trim work, pressure washing, staining, and pre-paint repairs. The full list lives on the Services pages.",
  },
  {
    question: "Where do you work?",
    answer:
      "We are based in Lake Tapps, WA (ZIP 98391) and serve Lake Tapps, Enumclaw, Maple Valley, and Covington, plus nearby communities already listed on those service-area pages — including Bonney Lake, Sumner, Auburn, Edgewood, Puyallup, Buckley, Black Diamond, Kent, Renton, and Issaquah. Call if you are just outside a mapped radius.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Lane Home & Business Services LLC is a licensed and insured Washington contractor. The license number on this site is LANEHHB7912R. You can verify Washington contractor registration through the Department of Labor & Industries.",
  },
  {
    question: "How do I get a free estimate?",
    answer:
      "Call or text (253) 414-3937, email lane@lanehbsllc.com, or use the contact form. We will discuss the project and schedule a visit. Estimates are free with no pressure. Office hours are Monday–Friday, 9:00 AM – 5:00 PM.",
  },
  {
    question: "Can you paint while we live in the house?",
    answer:
      "Yes. Most interior projects are completed in occupied homes with contained work areas and daily cleanup — the same approach described on the interior painting service page.",
  },
  {
    question: "Do you take commercial painting jobs?",
    answer:
      "Yes. We paint offices, retail spaces, common areas, and commercial exteriors, and we plan around your hours. After-hours or weekend options are often available and confirmed during estimating.",
  },
  {
    question: "When is the best time for exterior painting?",
    answer:
      "Spring through early fall is the typical exterior window so coatings can cure. We schedule around rain and temperature. Interior work often fills wetter months.",
  },
  {
    question: "Do you repair siding, trim, or decks before painting or staining?",
    answer:
      "Yes. Soft wood, failed caulk, damaged trim, and compromised deck boards get addressed so new paint or stain is not hiding a substrate problem.",
  },
  {
    question: "Do you stain existing decks or only build new ones?",
    answer:
      "Both. Staining and sealing existing decks is common — especially around Lake Tapps — when the framing is sound. We also build decks, upgrade railings, and install or paint fences.",
  },
  {
    question: "Who owns the company?",
    answer:
      "Lane Vanderwaal owns Lane Home & Business Services LLC. The About page covers how a focused painting operation grew into painting, remodeling, and outdoor work across Lake Tapps and nearby communities.",
  },
];

const HOME_ARTICLE_MARKDOWN = `## A Lake Tapps contractor for homes and businesses

Lane Home & Business Services LLC is a painting, remodeling, and outdoor contractor based in Lake Tapps, Washington. The company is owned by [Lane Vanderwaal](/about) and works under Washington contractor license LANEHHB7912R. Day-to-day work covers [interior painting](/services/interior-painting), [exterior painting](/services/exterior-painting), [commercial painting](/services/commercial-painting), [remodeling and renovation](/services/remodeling-renovation), [decks and fences](/services/decks-fences), and [repairs and carpentry](/services/repairs-carpentry).

That mix matters in Pierce and King County because a paint job often starts with failed caulk or soft trim, and a kitchen refresh often includes cabinet refinishing instead of a full gut. Homeowners and shop owners can review the full [services](/services) list, then request a [free estimate](/contact) or call (253) 414-3937. Hours published on this site are Monday through Friday, 9:00 AM to 5:00 PM.

Lane HBS is rooted in Lake Tapps ZIP 98391 and regularly works the dedicated [Lake Tapps](/service-areas/lake-tapps) service area — including waterfront and plateau neighborhoods such as [Tapps Island](/service-areas/lake-tapps/tapps-island), [Deer Island](/service-areas/lake-tapps/deer-island), [Snag Island](/service-areas/lake-tapps/snag-island), [Driftwood Point](/service-areas/lake-tapps/driftwood-point), [West Tapps](/service-areas/lake-tapps/west-tapps), [Allan Yorke](/service-areas/lake-tapps/allan-yorke), [Tacoma Point](/service-areas/lake-tapps/tacoma-point), inland [Prairie Ridge](/service-areas/lake-tapps/prairie-ridge), [Lake Jane Estates](/service-areas/lake-tapps/lake-jane-estates) around Debra Jane Lake, and the [Lake Tapps Plateau](/service-areas/lake-tapps/lake-tapps-plateau). The same crew also covers [Enumclaw](/service-areas/enumclaw), [Maple Valley](/service-areas/maple-valley), and [Covington](/service-areas/covington). Nearby communities already named on those pages include Bonney Lake, Sumner, Auburn, Edgewood, Puyallup, Buckley, Black Diamond, Kent, Renton, and Issaquah. If your street is just outside a mapped radius, call and ask — the [service areas](/service-areas) hub is the starting point, not a hard wall.

## Why Pacific Northwest prep comes first

South Sound weather is hard on coatings. Wet winters, moss on shaded elevations, freeze-thaw, and bright summer UV — especially off water or on west-facing walls — punish thin paint and skipped prep. That pattern shows up on lakeside siding in Lake Tapps, wind-exposed plateau exteriors in Enumclaw, tree-covered foothill lots in Maple Valley, and subdivision north walls in Covington.

A durable [exterior painting](/services/exterior-painting) job here is less about rushing a color and more about washing, scraping, sanding, priming bare wood, and recaulking failed joints. Soft soffits, fascia, and trim get [repairs and carpentry](/services/repairs-carpentry) before a finish coat goes on. Paint will not save rotten wood; fixing the substrate first is how a coating lasts more than a season. Pressure washing and mildew-aware prep are part of that sequence, not extras added after a bid looks cheap.

Indoors, occupied-house painting is the usual pattern. Floors and furniture get protected, work areas stay contained, and [interior painting](/services/interior-painting) covers walls, ceilings, trim, doors, cabinets, and millwork. Older plaster or early drywall often needs patching first so cracks do not telegraph through a new color. Color consultation is available when a whole-home refresh needs a consistent palette, including HOA-friendly exterior colors in planned communities.

If you want to see how those finishes look on real jobs, the [project gallery](/gallery) has owned photos from painting, deck, flooring, and remodel work. Published [reviews](/reviews) on this site come from Lake Tapps and Bonney Lake customers — kitchen cabinets, exteriors and decks, interior rooms, a commercial interior completed over a weekend, and fence and deck staining.

## Remodeling and cabinet work without a second contractor

Many local kitchens start with solid boxes and worn doors. Cabinet refinishing — cleaning, sanding, priming, and a durable topcoat — is one of the most requested upgrades because it changes the room without a full replacement. That work sits next to [remodeling and renovation](/services/remodeling-renovation): kitchen refreshes, bathroom updates, room transformations, flooring installs, drywall, and finish carpentry.

The point of a combined painting and general contracting team is sequencing. Demolition, carpentry, and coatings get planned so the last thing you see is a cohesive finish, not a punch list that never closes. Formal permits are often not required for cosmetic paint. Moving walls, changing windows, or reworking kitchens and baths may need building review — city or county depending on the parcel. Contractors working in Washington should be registered through the [Washington State Department of Labor & Industries](https://lni.wa.gov/); homeowners can verify license LANEHHB7912R there.

Utility planning shows up on remodel scopes too. Many homes in the service area are served by [Puget Sound Energy](https://www.pse.com/). New lighting, panel questions, or heating changes should be scoped before finish work starts so the paint and carpentry sequence is not rebuilt around a late utility surprise.

Lake Tapps parcels can sit in unincorporated Pierce County or in Bonney Lake, which changes who reviews a larger remodel or new deck. Enumclaw, Maple Valley, and Covington each have their own permit desks, and unincorporated King County streets — called out on the Enumclaw and Maple Valley pages — do not always follow the mailbox city. The city pages go into those local rules; this page is the company-level reminder to confirm jurisdiction before structural work.

## Decks, fences, and outdoor rooms in a wet climate

Outdoor living is part of South Sound life, and decks and fences take the same wet-dry abuse as siding. [Decks and fences](/services/decks-fences) work includes construction, staining and sealing, railing upgrades (including wood rails with metal balusters), fence installation, and fence painting or staining. Existing decks are commonly stained rather than replaced when the framing is sound.

The process is evaluation first: soft boards, loose fasteners, failed railings, moss, and standing water. Then cleaning, carpentry repairs, and a stain or coating matched to the wood and sun exposure. Fences on larger lots see soil contact and impact wear; coating and carpentry together often add years before replacement is the honest answer. Shaded yards and creek-adjacent properties pick up mildew faster — the same reason Maple Valley and Enumclaw pages talk about washing before coating.

Waterfront and near-shore properties around Lake Tapps add humidity and reflected UV. Those jobs still use the same principle as plateau or foothill work: prep and repair before cosmetics. Shoreline or over-water structures can involve extra review beyond a typical backyard deck; the [Lake Tapps](/service-areas/lake-tapps) page is the place for reservoir-specific notes. This homepage keeps the company rule simple: we do not stain over spongy boards or paint over failed flashing.

## Commercial painting that respects operating hours

[Commercial painting](/services/commercial-painting) covers offices, retail, common areas, and exterior commercial coatings. The scheduling difference is the point: scopes get planned around customers, staff, and access. After-hours or weekend work is often available and confirmed during estimating. Occupied offices and shops need contained zones and a clean handoff — the same standard used in occupied homes.

Downtown storefronts, light commercial interiors, and outbuildings all show up in the service-area pages. If you run a shop in Enumclaw, an office near Covington, or a workspace in Lake Tapps, the estimate conversation starts with hours and access, not just color. A published review on this site describes an office interior completed over a weekend so the business did not lose weekdays.

## How a Lane HBS project typically runs

Most jobs start with a [contact / free estimate](/contact) or a call to (253) 414-3937. Email is lane@lanehbsllc.com. Estimates are free. The visit is to see the surfaces, talk through timing, and write a clear scope — painting only, carpentry plus paint, a cabinet refinish, a deck stain, or a remodel sequence.

Once you approve the work, the crew protects the site, completes repairs, then applies the finish system. Interior work is usually done while you live in the house. Exteriors get scheduled around Northwest weather windows; spring through early fall is the typical exterior season, and interior work often fills wetter months. The job is not done at 90 percent. A walkthrough closes the punch list.

Communication is part of the published company story on the [about](/about) page: stay in contact from first call to final walkthrough so you are not left wondering. Licensed and insured work, tidy job sites, and honest timelines are the same promises used on the city pages — they are company standards, not a single-neighborhood slogan.

## Choosing a local contractor — and where to go next

Lane Vanderwaal started the company as a focused painting operation and expanded into remodeling, decks, fences, and carpentry because those jobs keep showing up on the same properties. The [about](/about) page covers that background. The [service areas](/service-areas) pages go deeper on climate, neighborhoods, landmarks, and local FAQs for [Lake Tapps](/service-areas/lake-tapps), [Enumclaw](/service-areas/enumclaw), [Maple Valley](/service-areas/maple-valley), and [Covington](/service-areas/covington). Each city page also links neighborhood guides — Downtown Enumclaw, Elk Meadows, Mud Mountain, Lake Sawyer, Wilderness Rim, Lake Jane Estates, and the Lake Tapps islands among them — when you need street-level detail.

This homepage is the company hub: who we are, what we do, where we work, and how to start. When you are ready, request a free estimate through the [contact](/contact) form or call (253) 414-3937. You can also browse the [gallery](/gallery) and [reviews](/reviews) before you write. The canonical site for this company is lanehbs.com.`;

function countWords(markdown: string): number {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function countLinks(markdown: string): number {
  return [...markdown.matchAll(/\[[^\]]+\]\([^)]+\)/g)].length;
}

export const homeArticle: ServiceAreaArticle = {
  slug: "home",
  title: "A Lake Tapps contractor for painting, remodeling, and outdoor work",
  excerpt:
    "Lane Home & Business Services LLC is based in Lake Tapps and handles painting, remodeling, decks, fences, and repairs for homes and businesses across Pierce and King County — with dedicated pages for the communities we serve most.",
  bodyMarkdown: HOME_ARTICLE_MARKDOWN,
  images: [
    {
      src: "/images/from-lane/lane-03-45.jpg",
      alt: "Completed deck and exterior project near Lake Tapps",
    },
    {
      src: "/images/painting16.jpg",
      alt: "Interior kitchen cabinet painting project",
    },
    {
      src: "/images/from-lane/lane-25-1450.jpg",
      alt: "Freshly stained multi-level deck by Lane HBS",
    },
    {
      src: "/images/painting.jpg",
      alt: "Commercial and residential exterior painting",
    },
  ],
  model: "homepage-hub",
  wordCount: countWords(HOME_ARTICLE_MARKDOWN),
  linkCount: countLinks(HOME_ARTICLE_MARKDOWN),
  generatedAt: "2026-09-19T00:00:00.000Z",
};

export const HOME_NEARBY = [
  "Bonney Lake",
  "Sumner",
  "Auburn",
  "Edgewood",
  "Puyallup",
  "Buckley",
  "Black Diamond",
  "Kent",
  "Renton",
  "Issaquah",
] as const;
