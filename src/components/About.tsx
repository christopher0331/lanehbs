"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Clock, Shield, Users } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Excellence in Craft",
    body: "Every project is approached with the same relentless attention to detail — no shortcuts, no compromises.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    body: "Fully licensed and insured for your complete peace of mind on every residential and commercial job.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    body: "We respect your schedule. Projects are completed on the agreed timeline without sacrificing quality.",
  },
  {
    icon: Users,
    title: "Communication First",
    body: "We stay in constant communication from first call to final walkthrough — you're never left wondering.",
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateEl = (el: HTMLDivElement | null, delay = 0, dir: "left" | "right" = "left") => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = dir === "left" ? "translateX(-40px)" : "translateX(40px)";
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
              el.style.opacity = "1";
              el.style.transform = "translateX(0)";
            }, delay);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    };

    animateEl(leftRef.current, 0, "left");
    animateEl(rightRef.current, 150, "right");
  }, []);

  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#141414] -skew-x-3 origin-top-right opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Images */}
          <div ref={leftRef} className="relative">
            {/* Main image */}
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/images/painting3.jpg"
                alt="Lane HBS team at work — kitchen cabinet painting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/40 to-transparent" />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-[#0d0d0d] overflow-hidden shadow-2xl">
              <Image
                src="/images/painting.jpg"
                alt="Exterior painting project"
                fill
                className="object-cover"
              />
            </div>

            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#c9a458]" />
            <div className="absolute -bottom-4 -right-12 w-24 h-24 border-r-2 border-b-2 border-[#c9a458]" />

            {/* Experience badge */}
            <div className="absolute top-6 -right-6 bg-[#c9a458] text-[#0d0d0d] p-5 shadow-2xl">
              <div className="font-display text-4xl font-bold leading-none">30+</div>
              <div className="text-[10px] tracking-widest uppercase font-bold mt-1">Years<br />Experience</div>
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-10 bg-[#c9a458]" />
              <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built on Trust,{" "}
              <span className="text-gold-gradient">Driven by Quality</span>
            </h2>

            <div className="section-divider mb-8" />

            <p className="text-white/60 leading-relaxed mb-5">
              Lane Home and Business Services LLC was founded by{" "}
              <span className="text-white font-medium">Lane Vanderwaal</span>, a
              diversified painting and construction contractor with a lifelong passion
              for transforming spaces. What started as a focused painting operation
              has grown into one of the most trusted names in the local contracting
              industry.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              We&apos;ve completed hundreds of projects across Lake Tapps, Bonney Lake, and the surrounding communities —
              from single-room refreshes to full commercial buildouts. Our reputation
              for excellence speaks through every finished job and every satisfied
              client.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#c9a458]/10 border border-[#c9a458]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#c9a458]" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-1">{pillar.title}</div>
                      <div className="text-white/45 text-xs leading-relaxed">{pillar.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,164,88,0.4)]"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
