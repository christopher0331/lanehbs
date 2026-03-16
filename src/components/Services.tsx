"use client";

import { useEffect, useRef } from "react";
import {
  Home,
  Building2,
  Paintbrush,
  Hammer,
  TreePine,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description:
      "Precision interior painting with premium paints — walls, ceilings, trim, doors, cabinets, and millwork finished to perfection.",
    items: ["Wall & Ceiling Painting", "Cabinet Refinishing", "Trim & Millwork", "Color Consultation"],
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description:
      "Weather-resistant exterior coatings that protect and beautify your home for years to come with lasting curb appeal.",
    items: ["Full House Painting", "Soffit & Fascia", "Pressure Washing", "Wood Staining"],
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Professional commercial painting services with minimal disruption, on-time project delivery, and lasting results.",
    items: ["Office Interiors", "Retail Spaces", "Industrial Coating", "Project Management"],
  },
  {
    icon: Hammer,
    title: "Remodeling & Renovation",
    description:
      "Full-scale residential remodels that bring your vision to life — from kitchen refreshes to complete room transformations.",
    items: ["Kitchen Remodels", "Bathroom Renovation", "Room Additions", "Full Home Remodel"],
  },
  {
    icon: TreePine,
    title: "Decks & Fences",
    description:
      "Expert deck building, staining, and fence installation to expand and enhance your outdoor living space.",
    items: ["Deck Construction", "Deck Staining/Sealing", "Fence Installation", "Fence Painting"],
  },
  {
    icon: Wrench,
    title: "Repairs & Carpentry",
    description:
      "Skilled carpentry repairs for siding, soffits, trim, fascia, and more — ensuring a flawless foundation before every coat.",
    items: ["Siding Repair", "Soffit Repair", "Trim & Fascia", "Deck/Fence Repair"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="group relative bg-[#1a1a1a] border border-white/5 p-8 hover:border-[#c9a458]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Gold accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a458] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 bg-[#c9a458]/10 border border-[#c9a458]/20 flex items-center justify-center mb-6 group-hover:bg-[#c9a458]/20 transition-colors duration-300">
        <Icon size={24} className="text-[#c9a458]" />
      </div>

      <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#c9a458] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Sub-items */}
      <ul className="space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-white/50">
            <span className="w-1.5 h-1.5 bg-[#c9a458] rounded-full flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="mt-6 flex items-center gap-2 text-[#c9a458] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs tracking-widest uppercase">Learn More</span>
        <span>→</span>
      </div>
    </div>
  );
}

export default function Services() {
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

  return (
    <section id="services" className="py-24 bg-[#111111] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              Complete Services for{" "}
              <span className="text-gold-gradient">Every Project</span>
            </h2>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              From a single room refresh to a full commercial build-out, we have the expertise to get it done right.
            </p>
          </div>
          <div className="mt-6 section-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm mb-5">
            Not sure what you need? We offer free consultations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#c9a458]/50 text-[#c9a458] text-sm font-bold tracking-widest uppercase hover:bg-[#c9a458] hover:text-[#0d0d0d] transition-all duration-300"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
