export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
};

/** Real reviews shown on the site. Do not invent neighborhood-attributed quotes. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Lake Tapps, WA",
    rating: 5,
    text: "Lane and his team completely transformed our kitchen. The cabinet painting was flawless — they took their time, prepped everything perfectly, and the finish looks like it came from the factory. We couldn't be happier. Highly recommend.",
    project: "Kitchen Cabinet Painting",
  },
  {
    name: "David R.",
    location: "Lake Tapps, WA",
    rating: 5,
    text: "Had our entire exterior repainted and a new deck built. Lane was professional from start to finish — clear communication, on time every day, and the results speak for themselves. The neighbors keep asking who we used.",
    project: "Exterior Painting & Deck",
  },
  {
    name: "Jennifer L.",
    location: "Bonney Lake, WA",
    rating: 5,
    text: "After getting three other quotes, we went with Lane HBS and it was absolutely the right call. Attention to detail is incredible. Our living room and dining room have never looked this good. Will be using them again for the master bedroom.",
    project: "Interior Painting",
  },
  {
    name: "Mike T.",
    location: "Lake Tapps, WA",
    rating: 5,
    text: "Commercial project — repainted our entire office interior over a weekend so we wouldn't lose business days. They were in and out, zero mess left behind, and the quality is outstanding. Great team, great work ethic.",
    project: "Commercial Interior",
  },
  {
    name: "Tina W.",
    location: "Bonney Lake, WA",
    rating: 5,
    text: "The fence and deck staining job was done better than I imagined. Lane walked us through the color options, explained the process, and delivered exactly what he promised. Everything looks brand new.",
    project: "Deck & Fence Staining",
  },
];

export function getTestimonialsByName(names: string[]): Testimonial[] {
  return names
    .map((name) => TESTIMONIALS.find((review) => review.name === name))
    .filter((review): review is Testimonial => Boolean(review));
}
