"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle } from "lucide-react";

const badges = [
  "Licensed & Insured",
  "Free Estimates",
  "Quality Guaranteed",
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const timeout = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/painting16.jpg"
          alt="Lane HBS — Stunning kitchen renovation with dark cabinets"
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ transform: "scale(1.05)" }}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/70 to-[#0d0d0d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/30" />
      </div>

      {/* Decorative gold line left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-[#c9a458] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div ref={textRef} className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
              Lake Tapps, WA &amp; Surrounding Areas
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            Transforming Spaces.{" "}
            <span className="text-gold-gradient">Elevating</span>{" "}
            Standards.
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            From precision painting to full-scale renovations, Lane Home &amp; Business Services delivers exceptional craftsmanship on every project — residential or commercial.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <CheckCircle size={15} className="text-[#c9a458]" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,164,88,0.5)] hover:-translate-y-0.5"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white/30 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
