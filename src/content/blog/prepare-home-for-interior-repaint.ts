import type { BlogPost } from "./types";

const EPA_RRP =
  "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program";
const EPA_DIY =
  "https://www.epa.gov/lead/lead-safe-renovations-diyers";
const EPA_VOC =
  "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality";
const EPA_IAQ =
  "https://www.epa.gov/indoor-air-quality-iaq/care-your-air-guide-indoor-air-quality";

export const prepareHomeForInteriorRepaint: BlogPost = {
  slug: "prepare-home-for-interior-repaint",
  title: "How to Prepare Your Home for an Interior Repaint",
  metaTitle: "How to Prepare Your Home for an Interior Repaint",
  description:
    "A practical checklist for getting rooms ready before interior painting: clearing and protecting furniture, patching walls, choosing sheens, lead-safe practices in older homes, and living through an occupied job in the Lake Tapps area.",
  excerpt:
    "Good paint jobs start before the first coat. Here is how to clear rooms, protect floors, plan colors and sheens, and handle older homes safely before an interior repaint.",
  datePublished: "2026-11-05",
  image: "/images/from-lane/lane-04-4874.jpg",
  imageAlt: "Living room furniture covered and windows masked for interior painting",
  breadcrumbLabel: "Interior Repaint Prep",
  ctaHeading: "Planning an interior refresh?",
  intro: [
    "Interior painting looks simple from the driveway. Inside the house, the finish only looks clean if the rooms were ready for it. Furniture in the way, floors left open, holes left unpatched, or damp spots painted over all show up later as chips, telegraphing repairs, or sticky doors.",
    "This guide walks through what to do before the brushes come out — whether you are hiring a crew or doing parts of the prep yourself. It is general guidance for homes around Lake Tapps, Enumclaw, Maple Valley, and Covington. The right plan for your house still depends on the rooms, the paint already on the walls, and whether the house was built before 1978.",
  ],
  sections: [
    {
      heading: "Decide the scope before you move a sofa",
      paragraphs: [
        "Start with a short written list: which rooms, which surfaces, and what stays the same. Walls only? Ceilings too? Doors, casing, baseboards, and window trim? Kitchen cabinets are a different project from a bedroom refresh, and mixing them into one vague “paint the house” request makes scheduling harder for everyone.",
        "Walk each room in daylight and with the lights on. Mark nail pops, corner cracks, water stains, shiny patches from old repairs, and places where doors rub the jamb. Those notes become the punch list for patching and priming. If you already have a color or sheen in mind, write it next to the room so decisions are not made under a ladder.",
      ],
      callout: {
        title: "Occupied homes are normal",
        body: "Most of our [interior painting](/services/interior-painting) work happens while people still live in the house. Clear planning — which rooms go first, where the dog sleeps, and how bathrooms stay usable — matters as much as the paint itself.",
      },
    },
    {
      heading: "Clear, cover, and protect",
      paragraphs: [
        "Empty the room as much as you can. Small items, wall art, curtains, and closet contents should leave before any sanding starts. Large furniture that cannot leave the room gets pulled to the center and wrapped so dust and overspray stay off fabric and wood.",
        "Floors need a continuous cover that is taped at the edges, not a loose drop cloth that slides underfoot. Hardware you care about — switch plates, cabinet pulls, door stops — comes off and goes in labeled bags. Leave thermostat covers and smoke detectors alone unless the painter agrees to handle them; moving life-safety devices without a plan creates problems that paint cannot fix.",
      ],
      image: {
        src: "/images/painting5.jpg",
        alt: "Painter applying blue tape along baseboards on a wood floor",
        caption: "Tape and floor protection go down before sanding or cutting in begins.",
      },
      bullets: [
        "Take down art, mirrors, and window treatments.",
        "Bag and label outlet covers, switch plates, and removable hardware.",
        "Move or tightly wrap furniture; cover floors wall to wall.",
        "Plan a clean path for the household so kids and pets stay out of active rooms.",
      ],
    },
    {
      heading: "Fix the surface, then choose primer",
      paragraphs: [
        "Paint will not hide a soft spot, a shiny joint compound smear, or chalky old enamel. Scrape loose material, drive nail pops, and fill holes and cracks. Sand repairs flush so they do not flash under the new coat. Glossy trim and previously oil-based surfaces often need a bonding primer so the new paint grips instead of peeling at the first bump.",
        "Stains from water, smoke, or markers need a stain-blocking primer, not a second coat of wall paint hoping they disappear. If a stain keeps returning after priming, stop and find the moisture source — painting over an active leak only buys a short delay.",
        "Our [repairs and carpentry](/services/repairs-carpentry) work often runs ahead of paint when trim is broken, casing is missing, or a door no longer fits the opening. Getting those fixes done first keeps the paint schedule honest.",
      ],
      image: {
        src: "/images/from-lane/lane-37-foyer-staircase-spray-prep.webp",
        alt: "Staircase and foyer covered in plastic sheeting for spray painting prep",
        caption: "Stairs, rails, and open foyers need thorough masking before any spray work.",
      },
    },
    {
      heading: "Sheen and color choices that hold up",
      paragraphs: [
        "Sheen is not decoration alone. Flatter finishes hide wall imperfections better and suit most ceilings and low-traffic walls. Eggshell and satin clean more easily on family-room walls and hallways that get handprints. Semi-gloss or gloss belongs on trim, doors, and many bathrooms and kitchens where moisture and scrubbing are common — as long as the surface was prepped so the shinier film does not spotlight every ridge.",
        "Keep sheen consistent within a room’s walls, and change it on purpose at the trim. Mixing random leftover sheens on the same wall is a common DIY tell. For color, test large samples on more than one wall and look at them morning and evening; western Washington light is cool and gray for much of the year, so a color that felt warm in the store can read cooler at home.",
      ],
      callout: {
        title: "Cabinets are their own system",
        body: "Cabinet refinishing uses different primers, topcoats, and cure times than wall paint. If cabinets are on the list, treat them as a separate phase so doors and drawers can dry without becoming the household’s coat rack. See our [interior painting](/services/interior-painting) page for how we handle cabinet work.",
      },
    },
    {
      heading: "Older homes and lead-safe work",
      paragraphs: [
        "If your house was built before 1978, assume painted surfaces may contain lead-based paint until testing says otherwise. The federal government banned consumer lead-based paint that year, and the [EPA’s Renovation, Repair and Painting program](" +
          EPA_RRP +
          ") explains how disturbing old paint can create hazardous dust.",
        "EPA recommends hiring a lead-safe certified contractor for renovation, repair, or painting in pre-1978 homes. Its [DIY lead-safe renovation guidance](" +
          EPA_DIY +
          ") also covers containing the work area, keeping children and pregnant people out, using methods that limit dust, and cleaning thoroughly with HEPA vacuuming and wet wiping. Do not dry-sand large areas of unknown old paint as a casual prep step.",
      ],
      image: {
        src: "/images/painting9.jpg",
        alt: "Hallway with walls taped and plastic sheeting protecting floors and baseboards",
        caption: "Containment keeps dust in the work area instead of tracking it through the house.",
      },
    },
    {
      heading: "Air, odor, and living through the job",
      paragraphs: [
        "Paint products release volatile organic compounds (VOCs) as they dry. The [EPA’s overview of VOCs and indoor air](" +
          EPA_VOC +
          ") notes that concentrations can be much higher indoors than outdoors, especially during and right after use. Its [Care for Your Air guide](" +
          EPA_IAQ +
          ") also points to source control and ventilation as the main ways to improve indoor air.",
        "Practical steps help: open windows when weather allows, run exhaust fans, keep unused rooms closed off, and follow the product label for re-entry and dry times. Low-VOC products reduce odor for many households, but “low VOC” is not the same as “no ventilation needed.” Plan meals and sleeping arrangements so freshly coated rooms can dry without people camping in them overnight.",
      ],
      bullets: [
        "Confirm heat or AC will stay in a normal range so coatings cure as the label expects.",
        "Ask which rooms will be off-limits each day and where bathrooms remain open.",
        "Keep pets and kids out of active rooms until cleanup is done.",
        "Save leftover labeled cans for touch-ups; write the room and date on the lid.",
      ],
    },
    {
      heading: "When to call Lane HBS",
      paragraphs: [
        "If you want the prep and the paint handled together, Lane Home & Business Services does [interior painting](/services/interior-painting) in occupied homes across Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby. We can also handle related [remodeling](/services/remodeling-renovation) and [carpentry repairs](/services/repairs-carpentry) before coatings go on.",
        "For outdoor timing and deck finishes, see our posts on [when to paint your exterior](/blog/when-to-paint-exterior-lake-tapps-enumclaw) and [deck stain vs. paint](/blog/deck-stain-vs-paint-western-washington). Call or text (253) 414-3937 or [request a free estimate](/contact), and we will walk the rooms with you.",
      ],
      image: {
        src: "/images/painting16.jpg",
        alt: "Finished kitchen with dark cabinetry and large windows after interior work",
        caption: "A finished room starts with clear scope, solid prep, and time for coatings to cure.",
      },
    },
  ],
  internalLinks: [
    {
      label: "Interior Painting",
      href: "/services/interior-painting",
      note: "Walls, ceilings, trim, and cabinet refinishing.",
    },
    {
      label: "Repairs & Carpentry",
      href: "/services/repairs-carpentry",
      note: "Fixes that should happen before paint.",
    },
    {
      label: "Remodeling & Renovation",
      href: "/services/remodeling-renovation",
      note: "Larger refreshes that include paint.",
    },
    {
      label: "When to paint your exterior",
      href: "/blog/when-to-paint-exterior-lake-tapps-enumclaw",
      note: "Outdoor timing for the same climate.",
    },
    {
      label: "Deck stain vs. paint",
      href: "/blog/deck-stain-vs-paint-western-washington",
      note: "Finish choices for decks and rails.",
    },
    { label: "Lake Tapps", href: "/service-areas/lake-tapps" },
    { label: "Enumclaw", href: "/service-areas/enumclaw" },
    { label: "Maple Valley", href: "/service-areas/maple-valley" },
    { label: "Covington", href: "/service-areas/covington" },
    { label: "Free estimate", href: "/contact", note: "Call or text (253) 414-3937." },
  ],
  sources: [
    {
      label: "U.S. EPA: Lead Renovation, Repair and Painting Program",
      href: EPA_RRP,
    },
    {
      label: "U.S. EPA: Lead-Safe Renovations for DIYers",
      href: EPA_DIY,
    },
    {
      label: "U.S. EPA: Volatile Organic Compounds' Impact on Indoor Air Quality",
      href: EPA_VOC,
    },
    {
      label: "U.S. EPA: Care for Your Air — A Guide to Indoor Air Quality",
      href: EPA_IAQ,
    },
  ],
};
