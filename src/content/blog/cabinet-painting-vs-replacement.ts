import type { BlogPost } from "./types";

const EPA_FORMALDEHYDE =
  "https://www.epa.gov/formaldehyde/formaldehyde-emission-standards-composite-wood-products";
const EPA_RRP = "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program";
const EPA_VOC =
  "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality";
const WOOD_HANDBOOK = "https://research.fs.usda.gov/download/treesearch/7145.pdf";

export const cabinetPaintingVsReplacement: BlogPost = {
  slug: "cabinet-painting-vs-replacement",
  title: "Cabinet Painting vs. Replacement: How to Decide for Your Kitchen",
  metaTitle: "Cabinet Painting vs. Replacement: How to Decide",
  description:
    "Should you paint your kitchen cabinets or replace them? How to judge cabinet boxes, doors, and layout, what a durable cabinet finish takes, and when a remodel makes more sense — for homes around Lake Tapps, Enumclaw, Maple Valley, and Covington.",
  excerpt:
    "Tired cabinets do not always mean new cabinets. Here is how to tell whether yours are good candidates for painting, and when replacement or a larger remodel is the better call.",
  datePublished: "2026-11-07",
  image: "/images/painting15.jpg",
  imageAlt: "Kitchen with dark painted cabinetry, stainless appliances, and large windows",
  breadcrumbLabel: "Cabinet Painting vs. Replacement",
  ctaHeading: "Weighing paint vs. new cabinets?",
  intro: [
    "Kitchen cabinets set the tone for the whole room. When the finish is worn, the color is dated, or the doors look tired, it is easy to assume the only fix is a new set.",
    "Often it is not. Solid cabinet boxes with a layout you like can take a new finish well. Other kitchens really do need replacement or a larger remodel. This guide walks through how to tell the difference. It is general guidance; the right answer for your kitchen depends on what you see when the doors come off.",
  ],
  sections: [
    {
      heading: "Start with the boxes, not the color",
      paragraphs: [
        "Paint changes how cabinets look. It does not change how they are built. So the first question is structural: are the cabinet boxes sound?",
        "Open every door and drawer. Look at the shelves, the face frames, and the cabinet floor under the sink. Check whether doors hang straight and drawers glide without dropping.",
      ],
      bullets: [
        "Good signs: solid face frames, flat doors, boxes that are square and firmly attached.",
        "Warning signs: swollen or crumbling particleboard, especially under the sink or beside the dishwasher.",
        "Warning signs: delaminating thermofoil or peeling laminate on doors.",
        "Warning signs: water damage, soft spots, or boxes pulling away from the wall.",
      ],
      callout: {
        title: "The short version",
        body: "If the boxes are sound and you like the layout, painting is usually worth a serious look. If the boxes are damaged or the layout does not work for you, paint will not fix that.",
      },
    },
    {
      heading: "When painting makes sense",
      paragraphs: [
        "Painting tends to fit when the kitchen works and simply looks dated. Common examples are solid wood or wood-veneer doors in an older stain color, or painted cabinets whose finish has worn at the handles and edges.",
        "Because the boxes, counters, and plumbing stay put, a paint project usually means less demolition and less disruption than a tear-out. The kitchen is still out of commission while doors are off and finishes cure, so plan for that.",
        "Painting also pairs well with smaller updates: new hardware, adjusted or replaced hinges, and a fresh wall color so the room feels finished.",
      ],
      image: {
        src: "/images/painting11.jpg",
        alt: "Upper kitchen cabinets masked with tape and plastic during cabinet painting",
        caption: "Counters, walls, and appliances get masked before any cabinet coating goes on.",
      },
    },
    {
      heading: "When replacement or a remodel is the better call",
      paragraphs: [
        "Some kitchens are not good painting candidates. Boxes with water damage, doors that are warped, or surfaces that cannot take a bonding primer are better replaced.",
        "Layout matters just as much. If you want to move the sink, add an island, change cabinet heights, or fit a larger refrigerator, that is a [remodeling](/services/remodeling-renovation) project. Painting the old cabinets would only refresh a layout you plan to change.",
        "There is also a middle ground. Sometimes the boxes stay and only damaged pieces are rebuilt, with a sink base or a panel replaced by our [repairs and carpentry](/services/repairs-carpentry) work before everything is finished to match.",
      ],
      callout: {
        title: "Know what you have",
        body: "Many cabinet boxes and some doors are made from composite wood such as particleboard or MDF. The EPA notes that composite wood products sold in the U.S. must now be labeled [TSCA Title VI compliant](" + EPA_FORMALDEHYDE + ") for formaldehyde emissions. Composite panels can also swell if water gets into exposed edges, so check under the sink carefully.",
      },
    },
    {
      heading: "What a durable cabinet finish takes",
      paragraphs: [
        "Cabinets get handled every day, splashed, and wiped. That makes them harder on paint than a wall. A finish that lasts depends far more on prep than on the color.",
        "A typical sequence looks like this: doors and drawer fronts come off and are labeled, every surface is degreased, glossy finishes are sanded to give the primer grip, and a bonding primer goes on before the topcoats. The Forest Service's [Wood Handbook chapter on finishing wood](" + WOOD_HANDBOOK + ") explains why surface preparation and compatible coatings matter for how long any wood finish lasts.",
        "Cure time is the step people underestimate. A coating can feel dry to the touch well before it is hard enough for daily use. Follow the product's data sheet before rehanging doors and going back to full use.",
      ],
      image: {
        src: "/images/painting12.jpg",
        alt: "Kitchen island base being painted blue with paper on the floor and plastic on the counter",
        caption: "Island bases and toe kicks take scuffs, so they get the same prep as the doors.",
      },
      callout: {
        title: "Why cabinet paint fails early",
        body: "Peeling and chipping on painted cabinets usually come back to skipped degreasing, no sanding or bonding primer, or doors rehung before the finish had time to cure.",
      },
    },
    {
      heading: "Older kitchens: check for lead first",
      paragraphs: [
        "If your home was built before 1978, existing painted cabinets may contain lead-based paint. Sanding or scraping can create hazardous dust.",
        "The [EPA's Renovation, Repair and Painting program](" + EPA_RRP + ") requires paid contractors who disturb painted surfaces in pre-1978 homes to be certified and use lead-safe practices. If you are not sure about your cabinets, ask about testing before any sanding starts.",
      ],
    },
    {
      heading: "Living with the project",
      paragraphs: [
        "Expect the kitchen to be partly unavailable while doors are off and coatings dry. Clearing cabinets ahead of time and setting up a temporary coffee and dish station helps.",
        "Coatings release volatile organic compounds as they dry. The [EPA's overview of VOCs and indoor air](" + EPA_VOC + ") recommends ventilation during and after use, so plan to keep air moving and follow label guidance on re-entry.",
        "Our earlier post on [preparing your home for an interior repaint](/blog/prepare-home-for-interior-repaint) covers protecting rooms and living through an occupied job, and most of it applies to cabinet work too.",
      ],
      image: {
        src: "/images/painting6.jpg",
        alt: "Kitchen with light blue-green painted cabinets and a white backsplash",
        caption: "A new cabinet color can change how the whole kitchen reads.",
      },
    },
    {
      heading: "Getting a second opinion",
      paragraphs: [
        "Lane Home & Business Services refinishes cabinets as part of our [interior painting](/services/interior-painting) work, and handles larger kitchen changes through [remodeling and renovation](/services/remodeling-renovation). We serve Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby.",
        "If you are not sure which way to go, call or text (253) 414-3937 or [request a free estimate](/contact). We can look at the boxes and doors with you and talk through painting, repair, or replacement.",
      ],
    },
  ],
  internalLinks: [
    { label: "Interior Painting", href: "/services/interior-painting", note: "Walls, trim, and cabinet refinishing." },
    { label: "Remodeling & Renovation", href: "/services/remodeling-renovation", note: "Kitchen refreshes and layout changes." },
    { label: "Repairs & Carpentry", href: "/services/repairs-carpentry", note: "Fix damaged boxes and trim before finishing." },
    { label: "Interior repaint prep", href: "/blog/prepare-home-for-interior-repaint", note: "Getting rooms ready for paint." },
    { label: "Lake Tapps", href: "/service-areas/lake-tapps" },
    { label: "Enumclaw", href: "/service-areas/enumclaw" },
    { label: "Maple Valley", href: "/service-areas/maple-valley" },
    { label: "Covington", href: "/service-areas/covington" },
    { label: "Free estimate", href: "/contact", note: "Call or text (253) 414-3937." },
  ],
  sources: [
    { label: "U.S. EPA: Formaldehyde Emission Standards for Composite Wood Products", href: EPA_FORMALDEHYDE },
    { label: "U.S. EPA: Lead Renovation, Repair and Painting Program", href: EPA_RRP },
    { label: "U.S. EPA: Volatile Organic Compounds' Impact on Indoor Air Quality", href: EPA_VOC },
    { label: "USDA Forest Products Laboratory: Wood Handbook, Finishing of Wood (PDF)", href: WOOD_HANDBOOK },
  ],
};
