import type { BlogPost } from "./types";

const EPA_VOC =
  "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality";
const EPA_IAQ =
  "https://www.epa.gov/indoor-air-quality-iaq/care-your-air-guide-indoor-air-quality";
const EPA_RRP =
  "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program";
const EPA_INDOOR =
  "https://www.epa.gov/indoor-air-quality-iaq/improving-your-indoor-environment";

export const commercialPaintingMinimalDisruption: BlogPost = {
  slug: "commercial-painting-minimal-disruption",
  title: "How to Plan a Commercial Paint Job Without Shutting Your Business Down",
  metaTitle: "Plan a Commercial Paint Job With Minimal Disruption",
  description:
    "How to schedule and stage painting for an occupied office, shop, or common area: work zones, after-hours options, indoor air, and older-building lead checks — for businesses around Lake Tapps, Enumclaw, Maple Valley, and Covington.",
  excerpt:
    "A paint refresh does not have to mean a closed sign. Here is how to plan scope, access, and protection so an office or shop can keep operating during the work.",
  datePublished: "2026-11-11",
  image: "/images/painting9.jpg",
  imageAlt: "Hallway floors and baseboards protected with tape and plastic during a paint job",
  breadcrumbLabel: "Commercial Painting, Occupied Spaces",
  ctaHeading: "Planning a paint job around your hours?",
  intro: [
    "Most businesses cannot close for a week of painting. Staff still need desks, customers still come through the door, and hallways have to stay passable. The work can still get done — but only if the plan starts with how the space is used, not with a color chip.",
    "This guide covers how to scope an occupied commercial paint job, protect the spaces that stay open, think about air and older buildings, and hand the rooms back in usable condition. It is general guidance for offices, shops, and common areas around Lake Tapps, Enumclaw, Maple Valley, and Covington. Your schedule still depends on the rooms, access, and what is already on the walls.",
  ],
  sections: [
    {
      heading: "Start with hours, access, and a written scope",
      paragraphs: [
        "Write down which rooms will be painted, which surfaces, and when people actually use them. A reception area that is busy all day is a different problem than a back office that can be emptied on a Saturday. Hallways, restrooms, and shared kitchens often need to stay open even when adjacent rooms are closed.",
        "Decide early whether work will happen after hours, on weekends, or in phases during the workday. After-hours painting reduces foot traffic, but it still needs a plan for keys, alarms, lighting, and who can answer questions if a wall or door is not as expected.",
        "A written scope should name the rooms, the surfaces (walls, ceilings, doors, trim), any repairs first, and which areas must remain in service each day. Vague “paint the office” requests make it hard to protect the parts of the business that cannot stop.",
      ],
      callout: {
        title: "The short version",
        body: "List the rooms, the hours they must stay open, and a realistic sequence. Phasing one wing or floor at a time is usually easier on staff than trying to coat everything at once.",
      },
    },
    {
      heading: "Protect the spaces that stay open",
      paragraphs: [
        "Occupied jobs live or die on containment. Furniture, counters, inventory, and equipment that cannot leave the room need to be covered. Floors need a continuous path that is taped down, not a loose cloth that slides underfoot in a hallway customers still use.",
        "Create a clear route through the building. People should not have to step over trays or walk into a wet room to reach a restroom or exit. Sign the closed rooms, keep lids on product, and isolate the active work area so dust and overspray stay put.",
      ],
      bullets: [
        "Move or wrap furniture, merchandising, and equipment before sanding starts.",
        "Tape floor protection at the edges so a hallway can still serve as a path.",
        "Bag and label switch plates and removable hardware; leave life-safety devices alone unless the plan covers them.",
        "Agree on a restroom and an exit that stay open for the whole job.",
      ],
      image: {
        src: "/images/from-lane/lane-08-4766.jpg",
        alt: "Hallway with door frames and baseboards taped during interior painting",
        caption: "A contained corridor keeps the rest of the building usable while work is underway.",
      },
    },
    {
      heading: "Choose coatings for wear, not just color",
      paragraphs: [
        "Commercial rooms take more abuse than a spare bedroom. Hallways, break rooms, and restrooms get handprints, carts, and frequent cleaning. A flatter finish can hide wall texture, but higher-traffic surfaces often need a sheen that can be wiped without polishing bare in a month.",
        "Trim, doors, and frames take contact every day. Those surfaces need the same careful prep as in a home — clean, sand where the old film is glossy, and prime when the existing coating may not accept a new one. Color decisions should be tested in the actual light of the space, including after-hours lighting if the crew will work then.",
        "Repairs still come first. Nail pops, scuffed corners, and damaged casing will show through a new coat. If the work grows into new walls or a larger refresh, that is [remodeling](/services/remodeling-renovation) territory and should be scoped separately so painting is not waiting on demolition.",
      ],
      image: {
        src: "/images/painting18.jpg",
        alt: "Windows and trim masked with plastic and tape before coatings go on",
        caption: "Openings and adjacent surfaces get masked so paint stays in the work area.",
      },
    },
    {
      heading: "Indoor air when people still work nearby",
      paragraphs: [
        "Paint products release volatile organic compounds (VOCs) as they dry. The [EPA's overview of VOCs and indoor air](" +
          EPA_VOC +
          ") notes that indoor concentrations can be much higher than outdoor ones, especially during and right after use. Its [Care for Your Air guide](" +
          EPA_IAQ +
          ") points to source control and ventilation as the main ways to improve indoor air, and its page on [improving your indoor environment](" +
          EPA_INDOOR +
          ") makes the same point.",
        "Practical steps help in an occupied building: ventilate when weather and the HVAC plan allow, keep unused rooms closed off from the work zone, and follow the product label for re-entry and dry times. Low-VOC products can reduce odor, but they do not remove the need for air movement or for keeping staff out of a freshly coated room until it is ready.",
        "Tell employees and tenants what will happen each day: which rooms are closed, where to walk, and when a space should be usable again. Surprises create more disruption than the painting itself.",
      ],
      callout: {
        title: "Dry time is not the same as back in service",
        body: "A wall can feel dry to the touch well before it can take desks pushed back, pictures rehung, or regular cleaning. Build cure time into the reopening plan, not just the last coat on the calendar.",
      },
    },
    {
      heading: "Older buildings and lead-safe work",
      paragraphs: [
        "If the building was built before 1978, existing paint may contain lead. Sanding or scraping can create hazardous dust for workers and for anyone still using the space.",
        "The [EPA's Renovation, Repair and Painting program](" +
          EPA_RRP +
          ") requires that paid contractors who disturb painted surfaces in pre-1978 housing, childcare facilities, and preschools be certified and use lead-safe work practices. If you are not sure when the building was built, or what is on the walls, ask about testing before any sanding starts.",
      ],
    },
    {
      heading: "Hand the space back ready for business",
      paragraphs: [
        "A commercial job is not finished when the last wall is coated. Walk the rooms in the lighting staff actually use. Check doors, hardware, switch plates, and the path customers will take in the morning. Remove protection only after the surfaces can handle traffic.",
        "Leave labeled leftover product for touch-ups, and agree on who is the point of contact for punch-list items that show up after furniture goes back. That closeout is part of keeping the business running, not an afterthought.",
      ],
      image: {
        src: "/images/from-lane/lane-37-foyer-staircase-spray-prep.webp",
        alt: "Stairwell and railings covered in plastic sheeting for spray painting prep",
        caption: "Open stairs and shared entries need thorough masking before any spray work.",
      },
    },
    {
      heading: "Working with Lane HBS",
      paragraphs: [
        "Lane Home & Business Services does [commercial painting](/services/commercial-painting) for offices, retail, and common areas, and can schedule around occupied hours when the job allows. Related work often includes [interior painting](/services/interior-painting) and [exterior painting](/services/exterior-painting) for the building itself.",
        "For occupied-home prep that overlaps with this kind of protection and sequencing, see our post on [preparing a home for an interior repaint](/blog/prepare-home-for-interior-repaint). Call or text (253) 414-3937 or [request a free estimate](/contact), and we can walk the space and talk through a plan that fits your hours.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial Painting",
      href: "/services/commercial-painting",
      note: "Offices, retail, and common areas, with scheduling options.",
    },
    {
      label: "Interior Painting",
      href: "/services/interior-painting",
      note: "Walls, ceilings, trim, and occupied-space work.",
    },
    {
      label: "Exterior Painting",
      href: "/services/exterior-painting",
      note: "Building exteriors that go with the interior refresh.",
    },
    {
      label: "Remodeling & Renovation",
      href: "/services/remodeling-renovation",
      note: "Repairs or layout changes that should be scoped separately.",
    },
    {
      label: "Interior repaint prep",
      href: "/blog/prepare-home-for-interior-repaint",
      note: "Protecting rooms and living through an occupied job.",
    },
    { label: "Lake Tapps", href: "/service-areas/lake-tapps" },
    { label: "Enumclaw", href: "/service-areas/enumclaw" },
    { label: "Maple Valley", href: "/service-areas/maple-valley" },
    { label: "Covington", href: "/service-areas/covington" },
    { label: "Free estimate", href: "/contact", note: "Call or text (253) 414-3937." },
  ],
  sources: [
    {
      label: "U.S. EPA: Volatile Organic Compounds' Impact on Indoor Air Quality",
      href: EPA_VOC,
    },
    {
      label: "U.S. EPA: Care for Your Air — A Guide to Indoor Air Quality",
      href: EPA_IAQ,
    },
    {
      label: "U.S. EPA: Improving Your Indoor Environment",
      href: EPA_INDOOR,
    },
    {
      label: "U.S. EPA: Lead Renovation, Repair and Painting Program",
      href: EPA_RRP,
    },
  ],
};
