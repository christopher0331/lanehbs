import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NeighborhoodTemplate from "@/components/templates/NeighborhoodTemplate";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { getAllNeighborhoodParams, getNeighborhood } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ city: string; neighborhood: string }> };

export function generateStaticParams() {
  return getAllNeighborhoodParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const match = getNeighborhood(citySlug, neighborhoodSlug);
  if (!match) return { title: "Neighborhood" };
  const { city, neighborhood } = match;
  const title = `${neighborhood.name} Painting & Remodeling | ${city.name} | Lane HBS`;
  const description = `${neighborhood.blurb} Serving ${neighborhood.name} in ${city.name}, ${city.state}. Call ${SITE_CONFIG.phone}.`;
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/service-areas/${city.slug}/${neighborhood.slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/service-areas/${city.slug}/${neighborhood.slug}`),
      siteName: SITE_CONFIG.fullName,
      type: "website",
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const match = getNeighborhood(citySlug, neighborhoodSlug);
  if (!match) notFound();
  return (
    <main>
      <NeighborhoodTemplate city={match.city} neighborhood={match.neighborhood} />
    </main>
  );
}
