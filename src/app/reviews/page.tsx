import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what homeowners say about Lane Home & Business Services LLC — painting, remodeling, and outdoor projects done right.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        title="Customer Reviews"
        subtitle="The best proof of our work is the people who invite us back — and refer us to their neighbors."
        image="/images/painting8.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
      />
      <Testimonials />
    </main>
  );
}
