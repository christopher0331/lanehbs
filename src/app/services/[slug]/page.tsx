import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { serviceAreaCities } from "@/lib/locations";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildFaqPage,
  buildServiceSchema,
} from "@/lib/seo";
import { getAllServiceSlugs, getService, servicePages } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.slug}`),
      siteName: SITE_CONFIG.fullName,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((s) => getService(s))
    .filter(Boolean) as typeof servicePages;

  const faqSchema = buildFaqPage(service.faqs);
  const structuredData = [
    buildServiceSchema({
      name: service.title,
      description: service.metaDescription,
      canonicalPath: `/services/${service.slug}`,
    }),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <main>
      <JsonLd data={structuredData} />
      <PageHero
        title={service.title}
        subtitle={service.heroSubtitle}
        image={service.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-white/55 leading-relaxed text-lg mb-8">
              {service.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2 text-white/75 text-sm">
                  <CheckCircle size={16} className="text-[#c9a458] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
              >
                Free Estimate
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneLink}`}
                className="px-7 py-3.5 border border-white/25 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] border border-white/10 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-10">
            Our {service.title} Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="border border-white/10 p-6">
                <div className="text-[#c9a458] text-xs tracking-widest uppercase mb-3">
                  Step {i + 1}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            {service.title} by Service Area
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="border border-white/10 p-5 hover:border-[#c9a458]/50 transition-colors group"
              >
                <div className="text-[#c9a458] text-[10px] tracking-widest uppercase mb-2">
                  {city.county}
                </div>
                <div className="font-display text-xl text-white group-hover:text-[#c9a458] transition-colors">
                  {city.name}
                </div>
                <p className="text-white/40 text-xs mt-2">
                  {service.shortTitle} in {city.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="py-16 bg-[#111111] border-y border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
              {service.title} FAQs
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
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

      {related.length > 0 && (
        <section className="py-16 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="border border-white/10 p-5 hover:border-[#c9a458]/50 transition-colors flex items-center justify-between gap-3"
                >
                  <span className="text-white/80">{r.title}</span>
                  <ArrowRight size={14} className="text-[#c9a458]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
