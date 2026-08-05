import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { serviceAreaCities } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Areas | Lake Tapps, Enumclaw, Maple Valley, Covington",
  description:
    "Lane Home & Business Services LLC serves Lake Tapps, Enumclaw, Maple Valley, Covington, and surrounding Pierce & King County communities with painting, remodeling, decks, and fences.",
  alternates: { canonical: absoluteUrl("/service-areas") },
};

export default function ServiceAreasPage() {
  return (
    <main>
      <PageHero
        title="Where We Work"
        subtitle="Local painting, remodeling, and outdoor projects across Lake Tapps and nearby Pierce & King County communities — with dedicated pages for neighborhoods we know well."
        image="/images/from-lane/lane-01-46.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
      />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {serviceAreaCities.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group relative overflow-hidden border border-white/10 hover:border-[#c9a458]/50 transition-colors min-h-[300px]"
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
                  <h2 className="font-display text-3xl font-bold text-white mb-3">
                    {area.name}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">
                    {area.blurb}
                  </p>
                  <p className="text-white/35 text-xs mb-4">
                    {area.neighborhoods.length} neighborhood pages
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#c9a458] text-xs font-bold tracking-widest uppercase">
                    View Area
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-white/40 text-sm mb-5">
              Don&apos;t see your city? We often serve nearby neighborhoods too — call {SITE_CONFIG.phone}.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
            >
              Ask About Your Area
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
