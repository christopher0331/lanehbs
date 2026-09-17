import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Lane Home & Business Services LLC — a Lake Tapps painting and remodeling contractor built on craftsmanship, honesty, and lasting results.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Lane HBS"
        subtitle="A local contractor rooted in Lake Tapps — delivering painting, remodeling, and outdoor craftsmanship across Pierce and King County."
        image="/images/painting3.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <About />
    </main>
  );
}
