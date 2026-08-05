import Link from "next/link";
import { Phone } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="py-20 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-10 bg-[#c9a458]" />
          <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
            Ready to Start
          </span>
          <div className="h-[1px] w-10 bg-[#c9a458]" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
          Let&apos;s Build Something{" "}
          <span className="text-gold-gradient">Worth Showing Off</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Free estimates for painting, remodeling, decks, and more across Lake Tapps,
          Enumclaw, Maple Valley, Covington, and nearby communities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-all duration-300"
          >
            Get a Free Estimate
          </Link>
          <a
            href="tel:2534143937"
            className="px-8 py-4 border border-white/25 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone size={15} />
            (253) 414-3937
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs tracking-widest uppercase text-white/35">
          <Link href="/services" className="hover:text-[#c9a458] transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-[#c9a458] transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-[#c9a458] transition-colors">
            About
          </Link>
          <Link href="/service-areas" className="hover:text-[#c9a458] transition-colors">
            Service Areas
          </Link>
          <Link href="/reviews" className="hover:text-[#c9a458] transition-colors">
            Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
