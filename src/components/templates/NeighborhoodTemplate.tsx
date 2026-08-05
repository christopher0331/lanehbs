import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MapPin, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { Neighborhood, ServiceAreaCity } from "@/lib/locations";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildLocalBusiness,
} from "@/lib/seo";
import { servicePages } from "@/lib/services";

type Props = {
  city: ServiceAreaCity;
  neighborhood: Neighborhood;
};

export default function NeighborhoodTemplate({ city, neighborhood }: Props) {
  const canonicalPath = `/service-areas/${city.slug}/${neighborhood.slug}`;
  const faqSchema = buildFaqPage(neighborhood.faqs);
  const structuredData = [
    buildLocalBusiness({
      name: `${SITE_CONFIG.shortName} — ${neighborhood.name} ${city.name}`,
      description: `${neighborhood.blurb} Serving ${neighborhood.name} in ${city.name}, ${city.state}.`,
      canonicalPath,
      city: `${neighborhood.name}, ${city.name}`,
      latitude: city.latitude,
      longitude: city.longitude,
    }),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: city.name, path: `/service-areas/${city.slug}` },
      { name: neighborhood.name, path: canonicalPath },
    ]),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={neighborhood.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/82 to-[#0d0d0d]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/35" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href={`/service-areas/${city.slug}`}
            className="inline-flex items-center gap-2 text-[#c9a458] text-sm mb-6 hover:text-[#e0bc7a] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to {city.name}
          </Link>
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <MapPin size={16} className="text-[#c9a458]" />
            <span className="text-sm tracking-widest uppercase">
              {neighborhood.name} · {city.name}, {city.state}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
            {neighborhood.name} Painting &amp; Remodeling
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            {neighborhood.blurb}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
            >
              Free Estimate
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneLink}`}
              className="px-7 py-3.5 border border-white/30 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors inline-flex items-center gap-2"
            >
              <Phone size={15} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              Contractor Services in {neighborhood.name}
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">
              {neighborhood.description} Lane Home &amp; Business Services LLC brings the same prep standards and finish quality we use across {city.name} — licensed, insured, and focused on lasting results.
            </p>
            <ul className="space-y-3">
              {neighborhood.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-white/75 text-sm">
                  <CheckCircle size={16} className="text-[#c9a458] mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] border border-white/10 overflow-hidden">
            <Image
              src={neighborhood.image}
              alt={`${neighborhood.name} project work by Lane HBS`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
            Popular Services Near {neighborhood.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="border border-white/10 px-5 py-4 text-white/70 text-sm hover:border-[#c9a458]/50 hover:text-[#c9a458] transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {neighborhood.faqs.length > 0 && (
        <section className="py-16 bg-[#0d0d0d]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
              {neighborhood.name} FAQs
            </h2>
            <div className="space-y-4">
              {neighborhood.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-white/10 p-5 open:border-[#c9a458]/40"
                >
                  <summary className="cursor-pointer text-white font-medium list-none">
                    {faq.question}
                  </summary>
                  <p className="text-white/50 text-sm leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#111111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
            More {city.name} Neighborhoods
          </h3>
          <div className="flex flex-wrap gap-2">
            {city.neighborhoods
              .filter((n) => n.slug !== neighborhood.slug)
              .map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-areas/${city.slug}/${n.slug}`}
                  className="text-xs tracking-wide text-white/40 border border-white/10 px-3 py-1.5 hover:border-[#c9a458]/50 hover:text-[#c9a458] transition-colors"
                >
                  {n.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
