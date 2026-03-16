"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateEl = (el: HTMLDivElement | null, dir: "left" | "right") => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = dir === "left" ? "translateX(-40px)" : "translateX(40px)";
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
    };
    animateEl(leftRef.current, "left");
    animateEl(rightRef.current, "right");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend/email service
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="contact" className="relative bg-[#111111] overflow-hidden">
      {/* Mid-page CTA Banner */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/painting9.jpg"
            alt="Professional painting work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/70 to-[#0d0d0d]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
              Ready to Start?
            </span>
            <div className="h-[1px] w-10 bg-[#c9a458]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Your Dream Space is One{" "}
            <span className="text-gold-gradient">Call Away</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Contact Lane today for a free, no-obligation estimate. We&apos;re ready to transform your space.
          </p>
          <a
            href="tel:2534143937"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#c9a458] text-[#0d0d0d] font-bold text-lg tracking-wide hover:bg-[#e0bc7a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,164,88,0.5)] hover:-translate-y-0.5"
          >
            <Phone size={22} />
            (253) 414-3937
          </a>
        </div>
      </div>

      {/* Contact Form + Info */}
      <div className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            {/* Form */}
            <div ref={leftRef}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-10 bg-[#c9a458]" />
                <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
                  Get in Touch
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Request a Free Estimate
              </h3>
              <p className="text-white/45 text-sm mb-10">
                Fill out the form and Lane will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center border border-[#c9a458]/30 bg-[#c9a458]/5">
                  <CheckCircle size={48} className="text-[#c9a458] mb-4" />
                  <h4 className="font-display text-2xl text-white mb-2">Message Sent!</h4>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks! Lane will reach out within 24 hours to schedule your free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#c9a458]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@email.com"
                        className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#c9a458]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(253) 000-0000"
                        className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#c9a458]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">
                        Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-white/10 text-white/70 px-4 py-3.5 text-sm focus:outline-none focus:border-[#c9a458]/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Commercial Painting</option>
                        <option>Remodeling & Renovation</option>
                        <option>Deck & Fence</option>
                        <option>Carpentry & Repairs</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project — scope, timeline, any special requirements..."
                      className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#c9a458]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-3 px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,164,88,0.4)] hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    Send My Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info + Hours */}
            <div ref={rightRef} className="space-y-8">
              {/* Contact Details */}
              <div>
                <h4 className="font-display text-xl font-bold text-white mb-5">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <a
                    href="tel:2534143937"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#c9a458]/10 border border-[#c9a458]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a458]/20 transition-colors">
                      <Phone size={16} className="text-[#c9a458]" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-white/30 mb-0.5">Call Us</div>
                      <div className="text-white group-hover:text-[#c9a458] transition-colors text-sm font-medium">
                        (253) 414-3937
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:lane@lanehbsllc.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#c9a458]/10 border border-[#c9a458]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a458]/20 transition-colors">
                      <Mail size={16} className="text-[#c9a458]" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-white/30 mb-0.5">Email Us</div>
                      <div className="text-white group-hover:text-[#c9a458] transition-colors text-sm font-medium">
                        lane@lanehbsllc.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a458]/10 border border-[#c9a458]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#c9a458]" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-white/30 mb-0.5">Service Area</div>
                      <div className="text-white text-sm font-medium">
                        Lake Tapps, Bonney Lake, Auburn,<br />Sumner & Surrounding Areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#141414] border border-white/5 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={16} className="text-[#c9a458]" />
                  <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Business Hours</h4>
                </div>
                <div className="space-y-2.5">
                  {hours.map((h) => {
                    const isToday = h.day === today;
                    return (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 ${
                          isToday ? "text-[#c9a458]" : ""
                        }`}
                      >
                        <span className={`text-sm ${isToday ? "font-semibold" : "text-white/50"}`}>
                          {h.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] bg-[#c9a458] text-[#0d0d0d] px-1.5 py-0.5 font-bold tracking-wide">
                              TODAY
                            </span>
                          )}
                        </span>
                        <span
                          className={`text-sm ${
                            h.time === "Closed"
                              ? "text-white/25"
                              : isToday
                              ? "text-[#c9a458] font-semibold"
                              : "text-white/60"
                          }`}
                        >
                          {h.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick call CTA */}
              <div className="bg-[#c9a458] p-6 text-[#0d0d0d]">
                <div className="font-display text-xl font-bold mb-2">Prefer to Talk?</div>
                <p className="text-[#0d0d0d]/70 text-sm mb-4">
                  Give us a call and we&apos;ll discuss your project right away.
                </p>
                <a
                  href="tel:2534143937"
                  className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
                >
                  <Phone size={20} />
                  (253) 414-3937
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
