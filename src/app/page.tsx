import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HomeCta from "@/components/HomeCta";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <HomeCta />
    </main>
  );
}
