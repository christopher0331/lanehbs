import type { Metadata } from "next";
import HomePageTemplate from "@/components/templates/HomePageTemplate";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { HOME_META } from "@/content/homepage";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: HOME_META.title },
  description: HOME_META.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: HOME_META.title,
    description: HOME_META.description,
    url: absoluteUrl("/"),
    siteName: SITE_CONFIG.fullName,
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <main>
      <HomePageTemplate />
    </main>
  );
}
