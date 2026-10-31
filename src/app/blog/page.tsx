import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { blogPosts, formatBlogDate } from "@/content/blog";
import { absoluteUrl, buildBreadcrumbList } from "@/lib/seo";

const TITLE = "Blog";
const DESCRIPTION =
  "Painting and home-care guidance from Lane Home & Business Services for homeowners in Lake Tapps, Enumclaw, Maple Valley, Covington, and nearby.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title: `${TITLE} | ${SITE_CONFIG.shortName}`,
    description: DESCRIPTION,
    url: absoluteUrl("/blog"),
    siteName: SITE_CONFIG.fullName,
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <JsonLd
        data={[
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageHero
        title="Lane HBS Blog"
        subtitle="Practical painting and home-care guidance for Pierce and King County homeowners."
        image="/images/painting3.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-white/10 bg-[#111111] flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <time dateTime={post.datePublished} className="text-xs tracking-widest uppercase text-[#c9a458] mb-3">
                  {formatBlogDate(post.datePublished)}
                </time>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#c9a458] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#c9a458] hover:text-[#e0bc7a]"
                >
                  Read the post <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
