import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import InlineLinks from "@/components/blog/InlineLinks";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { formatBlogDate, getAllBlogSlugs, getBlogPost } from "@/content/blog";
import { absoluteUrl, buildBlogPosting, buildBreadcrumbList } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url,
      siteName: SITE_CONFIG.fullName,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [SITE_CONFIG.fullName],
      images: [{ url: absoluteUrl(post.image), alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;

  return (
    <main>
      <JsonLd
        data={[
          buildBlogPosting({
            title: post.title,
            description: post.description,
            path,
            image: post.image,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <PageHero
        title={post.title}
        image={post.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Exterior Painting Timing" },
        ]}
      />

      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-[#c9a458] mb-10">
            Published <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time> · By{" "}
            {SITE_CONFIG.fullName}
          </p>
          <article className="text-white/70 leading-relaxed text-[17px]">
            {post.intro.map((p) => (
              <p key={p.slice(0, 40)} className="mb-5">
                <InlineLinks text={p} />
              </p>
            ))}
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mb-5">
                    <InlineLinks text={p} />
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 mb-5 marker:text-[#c9a458]">
                    {section.bullets.map((b) => (
                      <li key={b}>
                        <InlineLinks text={b} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <div className="mt-14 border border-[#c9a458]/30 bg-[#111111] p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-3">Planning an exterior paint job?</h2>
            <p className="text-white/60 mb-6">
              Call or text {SITE_CONFIG.phone} or request a free estimate. We will walk the house and talk timing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#c9a458] text-[#0d0d0d] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7a] transition-colors"
              >
                Free Estimate
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneLink}`}
                className="px-7 py-3.5 border border-white/25 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a458] hover:text-[#c9a458] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <nav aria-label="Related pages" className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Related pages</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {post.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block border border-white/10 p-5 hover:border-[#c9a458]/60 transition-colors"
                  >
                    <span className="flex items-center justify-between text-white font-semibold group-hover:text-[#c9a458]">
                      {link.label} <ArrowRight size={15} />
                    </span>
                    {link.note && <span className="block text-white/45 text-sm mt-1">{link.note}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 border-t border-white/10 pt-8">
            <h2 className="text-sm tracking-widest uppercase text-white/50 mb-4">Sources</h2>
            <ul className="space-y-2 text-sm">
              {post.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/60 underline underline-offset-2 hover:text-[#c9a458]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-white/35 text-xs mt-6">
              General guidance only. Always follow the label and technical data sheet for the specific product being used.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
