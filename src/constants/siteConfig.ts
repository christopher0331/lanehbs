export const SITE_CONFIG = {
  fullName: "Lane Home & Business Services LLC",
  shortName: "Lane HBS",
  legalName: "Lane Home & Business Services LLC",
  owner: "Lane Vanderwaal",
  phone: "(253) 414-3937",
  phoneLink: "2534143937",
  email: "lane@lanehbsllc.com",
  license: "LANEHHB7912R",
  address: {
    city: "Lake Tapps",
    state: "WA",
    zip: "98391",
    country: "US",
  },
  coordinates: {
    latitude: 47.2384,
    longitude: -122.1951,
  },
  url: "https://lanehbsllc.com",
  logoUrl: "https://lanehbsllc.com/images/from-lane/lane-02-1196.png",
  tagline: "Painting, Remodeling & Outdoor Craftsmanship",
  description:
    "Licensed painting, remodeling, deck, and fence contractor serving Lake Tapps, Enumclaw, Maple Valley, Covington, and surrounding Pierce & King County communities.",
  hours: {
    weekdays: "9:00 AM – 5:00 PM",
    weekend: "Closed",
  },
} as const;

export const SCHEMA_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: SITE_CONFIG.address.city,
  addressRegion: SITE_CONFIG.address.state,
  postalCode: SITE_CONFIG.address.zip,
  addressCountry: SITE_CONFIG.address.country,
} as const;
