import type { BlogPost } from "./types";

const EPA_RRP =
  "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program";
const EPA_MOLD =
  "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home";
const EPA_MOISTURE =
  "https://www.epa.gov/sites/default/files/2014-08/documents/moisture-control.pdf";
const EPA_VOC =
  "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality";

export const planHomeRemodelSequence: BlogPost = {
  slug: "plan-home-remodel-sequence",
  title: "How to Plan a Home Remodel So Carpentry, Drywall, and Paint Stay in Sequence",
  metaTitle: "Plan a Home Remodel: Carpentry, Drywall, and Paint Sequence",
  description:
    "A practical sequence for kitchen, bath, and room remodels: write the scope, fix moisture and carpentry first, finish drywall, then paint. For homeowners around Lake Tapps, Enumclaw, Maple Valley, and Covington.",
  excerpt:
    "A remodel looks finished only if the trades happen in the right order. Here is how to plan carpentry, drywall, and paint so you are not cutting into a fresh coat later.",
  datePublished: "2026-11-13",
  image: "/images/from-lane/lane-30-4772.jpg",
  imageAlt: "Kitchen mid-remodel with wood counters, open shelves, and work underway",
  breadcrumbLabel: "Plan a Remodel Sequence",
  ctaHeading: "Planning a kitchen, bath, or room refresh?",
  intro: [
    "A remodel fails in the last ten percent when the sequence was never written down. Doors get hung before the walls are finished. Paint goes on before a leak is fixed. A cabinet run is installed against drywall that still needs a patch. Then someone has to cut into work that already looked done.",
    "This guide is about planning the order of a kitchen, bath, or room refresh so carpentry, drywall, and paint support each other. It is general guidance for homes around Lake Tapps, Enumclaw, Maple Valley, and Covington. Your house still needs a walk-through, especially if moisture, layout changes, or pre-1978 paint are in play.",
  ],
  sections: [
    {
      heading: "Write the scope before demolition starts",
      paragraphs: [
        "Start with a short written list: which rooms, what stays, and what actually changes. A kitchen refresh that keeps the layout is a different job from moving a sink or opening a wall. A bathroom update that replaces a vanity is different from one that touches tile, ventilation, or wet walls.",
        "Name the surfaces as well as the rooms — cabinets, counters, floors, walls, ceilings, trim, and doors. If electrical, plumbing, or windows are part of the plan, put them on the list even if another trade will do that work. Painting last only works if those items are scheduled, not assumed.",
      ],
      callout: {
        title: "The short version",
        body: "Decide what is changing, what is staying, and in what order dusty and wet work will finish. A color choice is not a remodel plan.",
      },
    },
    {
      heading: "A workable order for most rooms",
      paragraphs: [
        "Every house is different, but a reliable pattern is the same: fix what is wrong, close up the surfaces, then coat them. Demolition and repairs come first. New or patched drywall needs to be finished and dry. Trim, doors, and built-ins should be fit before the final coats, not after you have a perfect wall.",
        "Paint and other coatings belong near the end, after the dusty work is done and the room can stay clean. If floors are being replaced, plan protection or timing so a new floor is not used as a drop zone, and so wall work is not scuffed by later flooring cuts.",
        "Our [remodeling](/services/remodeling-renovation) work is built around that sequence, with [repairs and carpentry](/services/repairs-carpentry) ahead of [interior painting](/services/interior-painting). When those pieces are bid as one vague “redo the room,” the finish usually pays for the confusion.",
      ],
      bullets: [
        "Locate leaks, soft wood, and failed trim before anything is covered up.",
        "Complete framing, drywall patches, and sanding before primer and paint.",
        "Fit doors, casing, and cabinets so gaps can be caulked or filled once — not twice.",
        "Save finish coats until the room can stay clean, then walk it in daylight.",
      ],
      image: {
        src: "/images/from-lane/lane-04-4874.jpg",
        alt: "Room with furniture covered, windows masked, and painting supplies staged",
        caption: "Protection goes down after the dusty repairs, before coatings start.",
      },
    },
    {
      heading: "Kitchens and baths: fix moisture first",
      paragraphs: [
        "Kitchens and bathrooms fail early when water is still in the walls or under a sink. Soft cabinet floors, stained drywall, peeling caulk, and musty cabinets are not cosmetic problems. They are moisture problems, and paint will not solve them.",
        "The EPA's [brief guide to mold, moisture, and your home](" +
          EPA_MOLD +
          ") starts from a simple rule: control the water, then clean and dry the area, then repair. Its [moisture control guidance](" +
          EPA_MOISTURE +
          ") makes the same point for building maintenance — coatings and finishes last only if the wet source is handled first.",
        "In a bath, that may mean confirming ventilation works, not just choosing a washable sheen. In a kitchen, it may mean replacing a swollen sink base before any cabinet finish or wall paint. Those repairs belong in the remodel scope, not on a punch list after the color is up.",
      ],
      image: {
        src: "/images/from-lane/lane-26-4767.jpg",
        alt: "Small bathroom with light wood floors and white cabinetry during a refresh",
        caption: "Baths need a dry, sound substrate before new paint or a new vanity.",
      },
    },
    {
      heading: "Living in the house during the work",
      paragraphs: [
        "Most remodels happen in occupied homes. That means a temporary kitchen or a planned bathroom shutdown, not an assumption that every room stays fully usable. Clear a path, decide where pets and kids will be, and keep finished rooms closed off from dusty ones.",
        "Coatings and some adhesives release volatile organic compounds as they dry. The [EPA's overview of VOCs and indoor air](" +
          EPA_VOC +
          ") notes that indoor levels can be much higher than outdoor ones during and right after use. Ventilate when you can, and follow product labels for re-entry instead of moving back in the same afternoon.",
        "Our earlier post on [preparing your home for an interior repaint](/blog/prepare-home-for-interior-repaint) covers furniture, floor protection, and living through an occupied paint job. The same habits help during a remodel, especially once the project reaches finish coats.",
      ],
    },
    {
      heading: "Older homes and lead-safe work",
      paragraphs: [
        "If the house was built before 1978, demolition and sanding can disturb lead-based paint. That is true of walls, trim, and some cabinets, not only of obvious peeling spots.",
        "The [EPA's Renovation, Repair and Painting program](" +
          EPA_RRP +
          ") requires paid contractors who disturb painted surfaces in pre-1978 homes, childcare facilities, and preschools to be certified and use lead-safe practices. If you do not know the age of the house or what is on the surfaces, ask about testing before demolition or sanding starts.",
      ],
      callout: {
        title: "Do not skip the messy middle",
        body: "A remodel looks faster when you jump to paint. It lasts longer when leaks, carpentry, and drywall are actually finished first — even if that means the room looks worse for a stretch.",
      },
    },
    {
      heading: "Close the job in the lighting you live with",
      paragraphs: [
        "Walk the room in daylight and at night before you call it done. Look at patches under raking light, door edges, caulk lines, and the places furniture will hide later. Touch-ups are easier before everything is moved back.",
        "Leave labeled leftover paint and note the products used on trim versus walls. A kitchen or bath will get scuffs. A recorded finish makes a later repair match, instead of turning into a second color project.",
      ],
      image: {
        src: "/images/painting15.jpg",
        alt: "Finished kitchen with dark cabinetry, wood floors, and large windows",
        caption: "The last coats only look this settled if the repairs underneath were finished first.",
      },
    },
    {
      heading: "Getting the plan on paper",
      paragraphs: [
        "Lane Home & Business Services handles [remodeling and renovation](/services/remodeling-renovation) along with the [carpentry](/services/repairs-carpentry) and [interior painting](/services/interior-painting) that finish the rooms. We work in Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby.",
        "If you are thinking about a kitchen, bath, or room refresh, call or text (253) 414-3937 or [request a free estimate](/contact). We can walk the space with you and write a sequence that does not paint you into a corner.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Remodeling & Renovation",
      href: "/services/remodeling-renovation",
      note: "Kitchens, baths, room refreshes, and finish work.",
    },
    {
      label: "Repairs & Carpentry",
      href: "/services/repairs-carpentry",
      note: "Fixes that should happen before coatings.",
    },
    {
      label: "Interior Painting",
      href: "/services/interior-painting",
      note: "Walls, ceilings, trim, and cabinet finishing.",
    },
    {
      label: "Interior repaint prep",
      href: "/blog/prepare-home-for-interior-repaint",
      note: "Protecting rooms during occupied work.",
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
      label: "U.S. EPA: A Brief Guide to Mold, Moisture, and Your Home",
      href: EPA_MOLD,
    },
    {
      label: "U.S. EPA: Moisture Control Guidance for Building Design, Construction and Maintenance (PDF)",
      href: EPA_MOISTURE,
    },
    {
      label: "U.S. EPA: Volatile Organic Compounds' Impact on Indoor Air Quality",
      href: EPA_VOC,
    },
  ],
};
