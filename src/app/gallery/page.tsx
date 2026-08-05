import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse recent painting, deck, flooring, and remodel projects from Lane Home & Business Services LLC across Lake Tapps and nearby communities.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Project Gallery"
        subtitle="Real jobs. Real results. Browse the work we’re proud to put our name on."
        image="/images/from-lane/lane-25-1450.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <Gallery />
    </main>
  );
}
