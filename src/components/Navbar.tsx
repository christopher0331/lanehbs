"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { trackLeadIntent, trackPhoneCall } from "@/lib/analytics";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solidNav = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidNav
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-display text-2xl font-bold tracking-wide text-white group-hover:text-[#c9a458] transition-colors duration-300">
            LANE HBS
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a458] font-medium">
            Home & Business Services
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                  active ? "text-[#c9a458]" : "text-white/80 hover:text-[#c9a458]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#c9a458] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:2534143937"
            onClick={() => trackPhoneCall("2534143937")}
            className="flex items-center gap-2 text-[#c9a458] text-sm font-medium hover:text-[#e0bc7a] transition-colors"
          >
            <Phone size={15} />
            <span>(253) 414-3937</span>
          </a>
          <Link
            href="/contact"
            onClick={() => trackLeadIntent("cta_contact")}
            className="px-6 py-2.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,164,88,0.4)]"
          >
            Free Estimate
          </Link>
        </div>

        <button
          className="lg:hidden text-white hover:text-[#c9a458] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#0d0d0d]/98 backdrop-blur-md`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-[#c9a458] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2534143937"
            onClick={() => trackPhoneCall("2534143937")}
            className="flex items-center gap-2 text-[#c9a458] text-sm font-medium mt-2"
          >
            <Phone size={14} />
            (253) 414-3937
          </a>
          <Link
            href="/contact"
            onClick={() => {
              setMenuOpen(false);
              trackLeadIntent("cta_contact");
            }}
            className="mt-1 px-6 py-3 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase text-center hover:bg-[#e0bc7a] transition-colors"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
