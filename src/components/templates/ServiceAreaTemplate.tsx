import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Sun,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { ServiceAreaCity } from "@/lib/locations";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildLocalBusiness,
} from "@/lib/seo";
import { servicePages } from "@/lib/services";

type Props = {
  city: ServiceAreaCity;
};

export default function ServiceAreaTemplate({ city }: Props) {
  const canonicalPath = `/service-areas/${city.slug}`;
  const faqSchema = buildFaqPage(city.faqs);
  const structuredData = [
    buildLocalBusiness({
      name: `${SITE_CONFIG.shortName} — ${city.name} Painting & Remodeling`,
      description: city.metaDescription,
      canonicalPath,
      city: city.name,
      latitude: city.latitude,
      longitude: city.longitude,
    }),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: city.name, path: canonicalPath },
    ]),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={city.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase text-white/40 mb-6">
            <Link href="/" className="hover:text-[#c9a458]">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-[#c9a458]">Service Areas</Link>
            <span>/</span>
            <span className="text-[#c9a458]">{city.name}</span>
          </nav>
          <div className="flex items-center gap-2 text-[#c9a458] mb-4">
            <MapPin size={18} />
            <span className="text-sm tracking-widest uppercase">
              Serving {city.name}, {city.state} · {city.county}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
            {city.heroTitle}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {city.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneLink}`}
              className="px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/30 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/10 bg-[#111111] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#c9a458]" /> Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#c9a458]" /> Free Estimates
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[#c9a458]" /> Mon–Fri {SITE_CONFIG.hours.weekdays}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-[#c9a458]" /> Based in Lake Tapps
          </span>
        </div>
      </section>

      {/* Intro + highlights */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c9a458]" />
              <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
                Local Expertise
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Why {city.name} Homeowners Choose{" "}
              <span className="text-gold-gradient">{SITE_CONFIG.shortName}</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">{city.blurb}</p>
            <ul className="space-y-3">
              {city.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-white/75 text-sm">
                  <CheckCircle size={16} className="text-[#c9a458] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 tracking-wide">
                Local Challenges We Solve
              </h3>
              <ul className="space-y-3">
                {city.localChallenges.map((c) => (
                  <li key={c} className="text-white/50 text-sm flex gap-2">
                    <span className="text-[#c9a458]">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#c9a458]/30 bg-[#c9a458]/5 p-6">
              <h3 className="text-[#c9a458] font-semibold mb-4 tracking-wide">
                How We Handle Them
              </h3>
              <ul className="space-y-3">
                {city.localSolutions.map((s) => (
                  <li key={s} className="text-white/70 text-sm flex gap-2">
                    <CheckCircle size={14} className="text-[#c9a458] mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our Services in {city.name}
          </h2>
          <p className="text-white/45 text-center max-w-2xl mx-auto mb-12">
            Full-service painting, remodeling, and outdoor craftsmanship for {city.name} homes and businesses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-white/10 p-6 hover:border-[#c9a458]/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#c9a458] transition-colors">
                  {service.title} in {city.name}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#c9a458] text-xs font-bold tracking-widest uppercase">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Climate */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-white/10 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-[#c9a458]/10">
                <Sun className="text-[#c9a458]" size={22} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Local Climate Expertise
                </h2>
                <p className="text-white/40 text-sm mt-1">
                  Understanding {city.name}&apos;s unique conditions
                </p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{city.climateDescription}</p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Neighborhoods We Serve in {city.name}
          </h2>
          <p className="text-white/45 text-center mb-12 max-w-2xl mx-auto">
            Click into a neighborhood for local project details, FAQs, and how we work on nearby streets.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${city.slug}/${n.slug}`}
                className="group border border-white/10 p-6 hover:border-[#c9a458]/50 hover:bg-[#c9a458]/5 transition-all"
              >
                <h3 className="text-lg font-semibold text-[#c9a458] mb-2">{n.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{n.description}</p>
                <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-[#c9a458] transition-colors inline-flex items-center gap-1">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          {city.landmarks.length > 0 && (
            <div className="mt-14 text-center">
              <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
                Serving Properties Near
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {city.landmarks.map((l) => (
                  <span key={l} className="text-xs text-white/40 border border-white/10 px-3 py-1.5">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          )}

          {city.zipCodes.length > 0 && (
            <div className="mt-8 text-center">
              <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
                Zip Codes
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {city.zipCodes.map((z) => (
                  <span key={z} className="text-sm text-white/60 border border-white/10 px-4 py-2 font-medium">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Article SEO content */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {city.articleSections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-white/55 leading-relaxed text-lg">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
            {city.name} FAQs
          </h2>
          <div className="space-y-4">
            {city.faqs.map((faq) => (
              <details
                key={faq.question}
                className="border border-white/10 p-5 group open:border-[#c9a458]/40"
              >
                <summary className="cursor-pointer text-white font-medium list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-[#c9a458] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/50 text-sm leading-relaxed mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free {city.name} Estimate
          </h2>
          <p className="text-white/50 mb-8">
            Tell us about your painting, remodel, deck, or fence project — we&apos;ll follow up fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
            >
              Request Estimate
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneLink}`}
              className="px-8 py-4 border border-white/25 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors inline-flex items-center gap-2"
            >
              <Phone size={15} />
              {SITE_CONFIG.phone}
            </a>
          </div>
          {city.nearby.length > 0 && (
            <p className="mt-10 text-white/35 text-sm">
              Also serving nearby: {city.nearby.join(" · ")}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
