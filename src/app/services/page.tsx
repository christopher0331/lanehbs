import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior & exterior painting, commercial painting, remodeling, decks, fences, and carpentry from Lane Home & Business Services LLC.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="From a single room refresh to full outdoor rebuilds — premium prep, clean job sites, and finishes that hold up in the Northwest."
        image="/images/painting2.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <Services />
    </main>
  );
}
