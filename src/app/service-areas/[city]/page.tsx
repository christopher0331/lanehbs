import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { getServiceAreaArticle } from "@/content/service-areas";
import { getAllCitySlugs, getCity } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "Service Area" };
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: absoluteUrl(`/service-areas/${city.slug}`) },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: absoluteUrl(`/service-areas/${city.slug}`),
      siteName: SITE_CONFIG.fullName,
      type: "website",
    },
  };
}

export default async function CityServiceAreaPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const article = await getServiceAreaArticle(city.slug);
  return (
    <main>
      <ServiceAreaTemplate city={city} article={article} />
    </main>
  );
}
