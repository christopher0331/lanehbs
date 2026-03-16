"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/painting16.jpg", alt: "Kitchen cabinet painting — dark finish", label: "Interior" },
  { src: "/images/painting3.jpg", alt: "Kitchen renovation in progress", label: "Renovation" },
  { src: "/images/painting.jpg", alt: "Exterior commercial painting", label: "Exterior" },
  { src: "/images/painting2.jpg", alt: "Cabinet painting workshop", label: "Cabinets" },
  { src: "/images/painting4.jpg", alt: "Residential painting project", label: "Residential" },
  { src: "/images/painting5.jpg", alt: "Interior painting detail", label: "Interior" },
  { src: "/images/painting6.jpg", alt: "Exterior house painting", label: "Exterior" },
  { src: "/images/painting7.jpg", alt: "Deck staining project", label: "Deck" },
  { src: "/images/painting8.jpg", alt: "Professional painting work", label: "Residential" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i! > 0 ? i! - 1 : galleryImages.length - 1));
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i! < galleryImages.length - 1 ? i! + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx]);

  return (
    <section id="gallery" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
              Our Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Transformations That{" "}
              <span className="text-gold-gradient">Speak for Themselves</span>
            </h2>
            <a
              href="#gallery"
              className="flex-shrink-0 text-sm text-[#c9a458] tracking-widest uppercase font-medium hover:text-[#e0bc7a] transition-colors border-b border-[#c9a458]/40 pb-0.5"
            >
              View Full Gallery →
            </a>
          </div>
          <div className="mt-6 section-divider" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 4 ? "col-span-2" : ""}`}
              onClick={() => setLightboxIdx(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0d0d0d]/0 group-hover:bg-[#0d0d0d]/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={28} className="text-white" />
                  <span className="text-white text-xs tracking-widest uppercase">{img.label}</span>
                </div>
              </div>
              {/* Label chip */}
              <div className="absolute top-3 left-3 bg-[#c9a458] text-[#0d0d0d] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightboxIdx(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-3 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i! > 0 ? i! - 1 : galleryImages.length - 1));
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-3 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i! < galleryImages.length - 1 ? i! + 1 : 0));
            }}
          >
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-6 text-white/40 text-sm">
            {lightboxIdx + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
