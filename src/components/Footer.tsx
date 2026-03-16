import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Remodeling & Renovation",
  "Deck & Fence",
  "Carpentry & Repairs",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const serviceAreas = [
  "Lake Tapps",
  "Bonney Lake",
  "Auburn",
  "Sumner",
  "Buckley",
  "Enumclaw",
  "Puyallup",
  "Edgewood",
];

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-white/60 relative">
      {/* Top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a458] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="font-display text-2xl font-bold text-white tracking-wide">
                LANE HBS
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a458] font-medium mt-0.5">
                Home & Business Services
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted painting and construction contractor proudly rooted in Lake Tapps and serving the surrounding communities. Quality craftsmanship, honest pricing, exceptional results.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm hover:text-[#c9a458] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c9a458]/40 group-hover:bg-[#c9a458] transition-colors rounded-full flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Service Areas */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-8">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-[#c9a458] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c9a458]/40 group-hover:bg-[#c9a458] transition-colors rounded-full flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Areas */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Contact Us
            </h4>
            <div className="space-y-4 mb-8">
              <a
                href="tel:2534143937"
                className="flex items-center gap-3 text-sm hover:text-[#c9a458] transition-colors group"
              >
                <Phone size={14} className="text-[#c9a458] flex-shrink-0" />
                (253) 414-3937
              </a>
              <a
                href="mailto:lane@lanehbsllc.com"
                className="flex items-center gap-3 text-sm hover:text-[#c9a458] transition-colors"
              >
                <Mail size={14} className="text-[#c9a458] flex-shrink-0" />
                lane@lanehbsllc.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="text-[#c9a458] flex-shrink-0 mt-0.5" />
                <span>Lake Tapps, WA &amp; Surrounding Areas</span>
              </div>
            </div>

            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-[10px] tracking-wide text-white/40 border border-white/10 px-2 py-1"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Lane Home &amp; Business Services LLC — All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
            {/* Back to top */}
            <a
              href="#"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
