import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Car,
  ClipboardCheck,
  Droplets,
  Hammer,
  HeartHandshake,
  Home,
  MapPin,
  Paintbrush,
  Phone,
  School,
  ShieldCheck,
  Star,
  Sun,
  Trees,
  Users,
  Waves,
  Wind,
} from "lucide-react";
import AboutTheArea, { LinkedCopy } from "@/components/AboutTheArea";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/siteConfig";
import type { Neighborhood, NeighborhoodTrustIcon, ServiceAreaCity } from "@/lib/locations";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildLocalBusiness,
  buildServiceSchema,
} from "@/lib/seo";
import { getService } from "@/lib/services";
import { getTestimonialsByName } from "@/lib/testimonials";

type Props = {
  city: ServiceAreaCity;
  neighborhood: Neighborhood;
};

const TRUST_ICONS: Record<NeighborhoodTrustIcon, typeof ShieldCheck> = {
  shield: ShieldCheck,
  droplets: Droplets,
  home: Home,
  trees: Trees,
  wind: Wind,
  users: Users,
  paintbrush: Paintbrush,
  hammer: Hammer,
  sun: Sun,
  waves: Waves,
  clipboard: ClipboardCheck,
  car: Car,
  school: School,
  heart: HeartHandshake,
};

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5.0 ★ Average Rating" },
  { icon: Award, label: "30+ Years Experience" },
  { icon: ClipboardCheck, label: "500+ Projects Completed" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#c9a458] fill-[#c9a458]" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function NeighborhoodTemplate({ city, neighborhood }: Props) {
  const canonicalPath = `/service-areas/${city.slug}/${neighborhood.slug}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(neighborhood.mapQuery)}&z=14&output=embed`;
  const reviews = getTestimonialsByName(neighborhood.reviewNames);
  const faqSchema = buildFaqPage(neighborhood.faqs);
  const siblings = city.neighborhoods.filter((n) => n.slug !== neighborhood.slug);

  const structuredData = [
    buildLocalBusiness({
      name: `${SITE_CONFIG.shortName} — ${neighborhood.name} ${city.name}`,
      description: `${neighborhood.blurb} Serving ${neighborhood.name} in ${city.name}, ${city.state}.`,
      canonicalPath,
      city: city.name,
      neighborhoodName: neighborhood.name,
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
      geoRadiusMeters: neighborhood.geoRadiusMeters,
    }),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: city.name, path: `/service-areas/${city.slug}` },
      { name: neighborhood.name, path: canonicalPath },
    ]),
    buildServiceSchema({
      name: `Painting in ${neighborhood.name}`,
      description: `Interior and exterior painting for homes in ${neighborhood.name}, ${city.name}, WA.`,
      canonicalPath,
      areaServedName: `${neighborhood.name}, ${city.name}`,
      serviceId: "painting",
    }),
    buildServiceSchema({
      name: `Remodeling in ${neighborhood.name}`,
      description: `Remodeling, cabinet refinishing, and renovation support in ${neighborhood.name}.`,
      canonicalPath,
      areaServedName: `${neighborhood.name}, ${city.name}`,
      serviceId: "remodeling",
    }),
    buildServiceSchema({
      name: `Decks & Fences in ${neighborhood.name}`,
      description: `Deck staining, rail upgrades, and fence work for ${neighborhood.name} properties.`,
      canonicalPath,
      areaServedName: `${neighborhood.name}, ${city.name}`,
      serviceId: "decks-fences",
    }),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      {/* 1. Hero */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-end">
          <div>
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
                Serving {neighborhood.name}, {city.name} WA
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {neighborhood.name} Painting &amp; Remodeling
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              {neighborhood.heroIntro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneLink}`}
                className="px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={15} />
                Call {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="px-7 py-3.5 border border-white/30 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors"
              >
                Free Estimate
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] border border-white/15 overflow-hidden bg-[#111111]">
            <iframe
              title={`Map of ${neighborhood.name}, ${city.name}`}
              src={mapSrc}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <section className="border-y border-white/10 bg-[#111111] py-5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-2 text-sm text-white/55"
            >
              <badge.icon size={16} className="text-[#c9a458] shrink-0" />
              {badge.label}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Introduction */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {neighborhood.introHeading}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {neighborhood.introLead}
            </p>
            <p className="text-white/55 leading-relaxed">{neighborhood.introBody}</p>
          </div>
          <ul className="border border-white/10 p-6 space-y-3">
            {neighborhood.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-white/75 text-sm">
                <ShieldCheck size={16} className="text-[#c9a458] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Trust cards */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why {neighborhood.name} Homeowners Trust Lane HBS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {neighborhood.trustCards.map((card) => {
              const Icon = TRUST_ICONS[card.icon];
              return (
                <div key={card.title} className="border border-white/10 p-7">
                  <Icon size={22} className="text-[#c9a458] mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                What Nearby Homeowners Say
              </h2>
              <p className="text-white/45 text-sm max-w-2xl">
                These are real Lane HBS reviews from Lake Tapps and Bonney Lake — not
                rewritten as {neighborhood.name} testimonials. We keep names and cities
                as they were given.
              </p>
            </div>
            <Link
              href="/reviews"
              className="text-[#c9a458] text-sm font-bold tracking-widest uppercase inline-flex items-center gap-1 hover:text-[#e0bc7a]"
            >
              All reviews <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="border border-white/10 p-6 bg-[#141414]"
              >
                <StarRating rating={review.rating} />
                <p className="text-white/75 text-sm leading-relaxed mt-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-5">
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.location}</div>
                  <div className="text-[#c9a458] text-xs mt-1">{review.project}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {neighborhood.galleryHeading}
          </h2>
          <p className="text-white/45 text-sm max-w-3xl mb-10">{neighborhood.galleryNote}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhood.gallery.map((item) => (
              <figure key={item.src} className="border border-white/10 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-white/60 text-sm">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case study */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] border border-white/10 overflow-hidden">
            <Image
              src={neighborhood.caseStudy.image}
              alt={neighborhood.caseStudy.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-[#c9a458] text-xs tracking-[0.3em] uppercase">
              {neighborhood.caseStudy.serviceType}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              {neighborhood.caseStudy.heading}
            </h2>
            <p className="text-white/60 leading-relaxed">{neighborhood.caseStudy.body}</p>
          </div>
        </div>
      </section>

      {/* 8. Considerations */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            {neighborhood.considerationsHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {neighborhood.considerations.map((item) => (
              <article key={item.heading}>
                <h3 className="text-white font-semibold text-lg mb-3">{item.heading}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Cost drivers */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            {neighborhood.costHeading}
          </h2>
          <p className="text-white/55 leading-relaxed max-w-3xl mb-10">
            {neighborhood.costIntro}
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {neighborhood.costDrivers.map((driver) => (
              <div key={driver.title} className="border border-white/10 p-6">
                <h3 className="text-[#c9a458] font-semibold mb-3">{driver.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{driver.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
          >
            Get a free on-site estimate for your {neighborhood.name} property
          </Link>
        </div>
      </section>

      {/* 10. Popular services */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            Popular Services in {neighborhood.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {neighborhood.featuredServices.map((item) => {
              const service = getService(item.slug);
              if (!service) return null;
              return (
                <div key={item.slug} className="border border-white/10 p-6 flex flex-col">
                  <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                    {item.localDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#c9a458] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1 hover:text-[#e0bc7a]"
                  >
                    View service <ArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Estimate band */}
      <section className="py-16 bg-[#c9a458]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="text-[#0d0d0d] text-lg font-medium max-w-2xl leading-relaxed">
            {neighborhood.estimateBandCopy}
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#0d0d0d] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors"
            >
              Free Estimate
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneLink}`}
              className="px-7 py-3.5 border border-[#0d0d0d]/30 text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#0d0d0d]/10 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={15} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 12. Process */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            {neighborhood.processHeading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {neighborhood.processSteps.map((step, index) => (
              <div key={step.title} className="border border-white/10 p-5">
                <div className="text-[#c9a458] text-xs tracking-widest uppercase mb-3">
                  0{index + 1}
                </div>
                <h3 className="text-white font-semibold mb-3 leading-snug">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {neighborhood.faqs.length > 0 && (
        <section className="py-20 bg-[#111111] border-y border-white/5">
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

      {/* 13. About the area */}
      <AboutTheArea
        cityName={city.name}
        neighborhoodName={neighborhood.name}
        attractions={neighborhood.attractions}
        localLivingContent={
          <>
            {neighborhood.localLivingParagraphs.map((paragraph) => (
              <LinkedCopy key={paragraph.slice(0, 40)} text={paragraph} />
            ))}
          </>
        }
      />

      {/* 14. Adjacent neighborhoods */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Also Serving Nearby {city.name} Neighborhoods
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblings.length > 0 ? (
              siblings.map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-areas/${city.slug}/${n.slug}`}
                  className="border border-white/10 p-6 hover:border-[#c9a458]/50 transition-colors group"
                >
                  <h3 className="text-[#c9a458] font-semibold mb-2">{n.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">{n.description}</p>
                  <span className="text-xs font-bold tracking-widest uppercase text-white/35 group-hover:text-[#c9a458]">
                    View neighborhood →
                  </span>
                </Link>
              ))
            ) : (
              <Link
                href={`/service-areas/${city.slug}`}
                className="border border-white/10 p-6 hover:border-[#c9a458]/50 transition-colors"
              >
                <h3 className="text-[#c9a458] font-semibold mb-2">{city.name} service area</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  See all {city.name} neighborhoods and services.
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 15. Closing CTA */}
      <section className="py-20 bg-[#111111] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Improve Your {neighborhood.name} Home?
          </h2>
          <p className="text-white/50 mb-8">
            Free estimates — call Lane HBS or send the form. We&apos;ll talk through paint,
            remodel, deck, or fence work for your {neighborhood.name} property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
            >
              Free Estimate
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneLink}`}
              className="px-8 py-4 border border-white/25 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors inline-flex items-center gap-2"
            >
              <Phone size={15} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
