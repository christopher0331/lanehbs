import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a free estimate from Lane Home & Business Services LLC. Call (253) 414-3937 or send a message — serving Lake Tapps, Enumclaw, Maple Valley, and Covington.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get a Free Estimate"
        subtitle="Tell us about your project. We’ll follow up with clear next steps — no pressure, no surprises."
        image="/images/painting9.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Contact />
    </main>
  );
}
