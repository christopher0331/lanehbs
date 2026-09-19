import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import Hero from "@/components/Hero";
import HomeCta from "@/components/HomeCta";
import JsonLd from "@/components/seo/JsonLd";
import ServiceAreaArticleBody from "@/components/ServiceAreaArticle";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import Testimonials from "@/components/Testimonials";
import { SITE_CONFIG } from "@/constants/siteConfig";
import {
  HOME_CHALLENGES,
  HOME_FAQS,
  HOME_HIGHLIGHTS,
  HOME_NEARBY,
  HOME_PROCESS,
  HOME_SOLUTIONS,
  homeArticle,
} from "@/content/homepage";
import { serviceAreaCities } from "@/lib/locations";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildLocalBusiness,
} from "@/lib/seo";
import { cityServiceRadiusMeters } from "@/lib/serviceAreaMap";
import { servicePages } from "@/lib/services";

const lakeTapps = serviceAreaCities.find((city) => city.slug === "lake-tapps");

export default function HomePageTemplate() {
  const faqSchema = buildFaqPage(HOME_FAQS);
  const structuredData = [
    buildLocalBusiness({
      name: SITE_CONFIG.fullName,
      description: SITE_CONFIG.description,
      canonicalPath: "/",
      city: SITE_CONFIG.address.city,
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    }),
    buildBreadcrumbList([{ name: "Home", path: "/" }]),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />

      <section className="border-y border-white/10 bg-[#111111] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#c9a458]" /> Licensed &amp; Insured
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
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#c9a458]" /> WA Lic. {SITE_CONFIG.license}
          </span>
        </div>
      </section>

      <StatsBar />

      {lakeTapps ? (
        <section className="py-16 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a458]" />
                <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
                  Home Base
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Based in Lake Tapps, working Pierce &amp; King County
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">
                {SITE_CONFIG.shortName} is rooted in Lake Tapps, {SITE_CONFIG.address.state}{" "}
                {SITE_CONFIG.address.zip}. The map marks the same home-base center point used
                on our{" "}
                <Link href="/service-areas/lake-tapps" className="text-[#c9a458] hover:underline">
                  Lake Tapps service-area page
                </Link>
                . We also work{" "}
                <Link href="/service-areas/enumclaw" className="text-[#c9a458] hover:underline">
                  Enumclaw
                </Link>
                ,{" "}
                <Link href="/service-areas/maple-valley" className="text-[#c9a458] hover:underline">
                  Maple Valley
                </Link>
                ,{" "}
                <Link href="/service-areas/covington" className="text-[#c9a458] hover:underline">
                  Covington
                </Link>
                , and nearby communities listed on those pages. Call if you are just outside
                a mapped radius.
              </p>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-[#c9a458] text-xs font-bold tracking-widest uppercase"
              >
                All service areas <ArrowRight size={12} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] border border-white/15 overflow-hidden bg-[#111111]">
              <ServiceAreaMap
                className="absolute inset-0 h-full w-full"
                latitude={lakeTapps.latitude}
                longitude={lakeTapps.longitude}
                radiusMeters={cityServiceRadiusMeters(lakeTapps)}
                label={`${lakeTapps.name}, ${lakeTapps.state}`}
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c9a458]" />
              <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
                Why Lane HBS
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              A local contractor for painting, remodeling, and outdoor work
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">
              {SITE_CONFIG.fullName} is owned by {SITE_CONFIG.owner} and based in{" "}
              {SITE_CONFIG.address.city}. We handle the work that shows up on the same
              South Sound properties: paint, cabinets, carpentry repairs, decks, fences,
              and remodel finish — for homeowners and for businesses that need scheduled
              commercial painting. Licensed and insured. Free estimates.
            </p>
            <ul className="space-y-3">
              {HOME_HIGHLIGHTS.map((item) => (
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
                Problems We See Across the South Sound
              </h3>
              <ul className="space-y-3">
                {HOME_CHALLENGES.map((challenge) => (
                  <li key={challenge} className="text-white/50 text-sm flex gap-2">
                    <span className="text-[#c9a458]">•</span> {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#c9a458]/30 bg-[#c9a458]/5 p-6">
              <h3 className="text-[#c9a458] font-semibold mb-4 tracking-wide">
                How We Handle Them
              </h3>
              <ul className="space-y-3">
                {HOME_SOLUTIONS.map((solution) => (
                  <li key={solution} className="text-white/70 text-sm flex gap-2">
                    <CheckCircle size={14} className="text-[#c9a458] mt-0.5 shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-20 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Service pages for every trade we run
          </h2>
          <p className="text-white/45 text-center max-w-2xl mx-auto mb-12">
            Each service page covers scope, process, and FAQs — then links back to the
            cities we serve. Start here if you already know the work you need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-white/10 p-6 hover:border-[#c9a458]/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#c9a458] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
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

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#c9a458]" />
            <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
              How We Work
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            From free estimate to final walkthrough
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_PROCESS.map((step, index) => (
              <div key={step.title} className="border border-white/10 p-6">
                <div className="text-[#c9a458] text-xs tracking-widest uppercase mb-3">
                  Step {index + 1}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Service areas we cover in depth
          </h2>
          <p className="text-white/45 text-center max-w-2xl mx-auto mb-12">
            City pages go neighborhood by neighborhood. This hub stays company-wide —
            use it to jump into the community you actually live in.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {serviceAreaCities.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group relative overflow-hidden border border-white/10 hover:border-[#c9a458]/50 transition-colors min-h-[260px]"
              >
                <Image
                  src={area.image}
                  alt={`${area.name} painting and remodeling contractor`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/55 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-[#c9a458] text-xs tracking-widest uppercase mb-2">
                    <MapPin size={13} />
                    {area.county}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">
                    {area.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">
                    {area.blurb}
                  </p>
                  <p className="text-white/35 text-xs mb-4">
                    {area.neighborhoods.length} neighborhood pages
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#c9a458] text-xs font-bold tracking-widest uppercase">
                    View area
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-white/35 text-sm">
            Also serving nearby: {HOME_NEARBY.join(" · ")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-white/10 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-[#c9a458]/10">
                <Sun className="text-[#c9a458]" size={22} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Pacific Northwest climate, one prep standard
                </h2>
                <p className="text-white/40 text-sm mt-1">
                  Lake Tapps humidity, plateau wind, foothill shade — same wash-repair-prime rule
                </p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Homes across our service area share a wet-season pattern even when the
              microclimate changes. Lake Tapps adds reservoir humidity and UV off the water.
              Enumclaw plateau lots take wind-driven rain. Maple Valley foothills hold moss
              under tree cover. Covington north elevations fade and grow mildew through damp
              winters. The company response is the same: wash, repair, prime, then coat —
              whether the job is siding, a deck, or a fence. City pages spell out the local
              version; this is the standard we bring to every street.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreaArticleBody article={homeArticle} eyebrow="Company Guide" />

      <Testimonials />

      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {HOME_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="border border-white/10 p-5 group open:border-[#c9a458]/40"
              >
                <summary className="cursor-pointer text-white font-medium list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-[#c9a458] group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-white/50 text-sm leading-relaxed mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Get your free estimate
          </h2>
          <p className="text-white/50 mb-8">
            Tell us about your painting, remodel, deck, fence, or commercial project — we
            follow up fast. Call {SITE_CONFIG.phone} or write {SITE_CONFIG.email}.
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
        </div>
      </section>

      <HomeCta />
    </>
  );
}
