"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#c9a458] fill-[#c9a458]" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      go((active + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  function go(idx: number) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 300);
  }

  const review = reviews[active];

  return (
    <section id="reviews" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Large background quote */}
      <div className="absolute top-8 right-12 text-[200px] font-display text-white/[0.02] leading-none select-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
              Client Reviews
            </span>
            <div className="h-[1px] w-10 bg-[#c9a458]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Our Clients{" "}
            <span className="text-gold-gradient">Are Saying</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Left — Review cards list */}
          <div className="hidden lg:flex flex-col gap-3">
            {reviews.map((r, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`text-left p-4 border transition-all duration-300 ${
                  i === active
                    ? "border-[#c9a458]/60 bg-[#c9a458]/5"
                    : "border-white/5 bg-[#1a1a1a] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">{r.name}</span>
                  <StarRating rating={r.rating} />
                </div>
                <span className="text-xs text-white/40 tracking-wide">{r.project}</span>
              </button>
            ))}
          </div>

          {/* Right — Active Review */}
          <div
            className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
          >
            <div className="relative bg-[#141414] border border-white/5 p-10 md:p-14">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#c9a458] to-transparent" />

              <Quote size={36} className="text-[#c9a458]/30 mb-6" />

              <blockquote className="font-display text-xl md:text-2xl text-white/85 leading-relaxed mb-8 italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-[#c9a458] flex items-center justify-center text-[#0d0d0d] font-bold text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{review.name}</div>
                      <div className="text-white/40 text-xs">{review.location}</div>
                    </div>
                  </div>
                  <div className="mt-2 ml-13">
                    <StarRating rating={review.rating} />
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[#c9a458] text-xs tracking-widest uppercase mb-1">Project</div>
                  <div className="text-white/60 text-sm">{review.project}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => go(active > 0 ? active - 1 : reviews.length - 1)}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go((active + 1) % reviews.length)}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="flex gap-2 ml-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? "bg-[#c9a458] w-6" : "bg-white/20 w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall rating bar */}
        <div className="mt-16 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div>
            <div className="font-display text-6xl font-bold text-white">5.0</div>
            <div className="flex justify-center sm:justify-start mt-1">
              <StarRating rating={5} />
            </div>
          </div>
          <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
          <div>
            <div className="text-white/60 text-sm mb-1">Based on our customer reviews</div>
            <div className="text-[#c9a458] text-sm font-medium">100% Would Recommend</div>
          </div>
          <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
          <a
            href="#contact"
            className="px-6 py-3 bg-[#c9a458] text-[#0d0d0d] text-xs font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
          >
            Become Our Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
