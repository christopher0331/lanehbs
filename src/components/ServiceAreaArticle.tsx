import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ServiceAreaArticle } from "@/content/service-areas/types";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    if (isInternal) {
      nodes.push(
        <Link
          key={`${keyPrefix}-a-${i++}`}
          href={href}
          className="text-[#c9a458] underline underline-offset-4 decoration-[#c9a458]/40 hover:decoration-[#c9a458] transition-colors"
        >
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a
          key={`${keyPrefix}-a-${i++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c9a458] underline underline-offset-4 decoration-[#c9a458]/40 hover:decoration-[#c9a458] transition-colors"
        >
          {label}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function insertImages(
  paragraphs: string[],
  images: ServiceAreaArticle["images"],
): Array<{ type: "text"; text: string } | { type: "image"; src: string; alt: string }> {
  if (!images.length) {
    return paragraphs.map((text) => ({ type: "text" as const, text }));
  }

  const blocks: Array<
    { type: "text"; text: string } | { type: "image"; src: string; alt: string }
  > = [];
  const textParas = paragraphs.filter((p) => !p.startsWith("## "));
  const interval = Math.max(2, Math.floor(textParas.length / (images.length + 1)));
  let textCount = 0;
  let imageIdx = 0;

  for (const para of paragraphs) {
    blocks.push({ type: "text", text: para });
    if (!para.startsWith("## ")) {
      textCount += 1;
      if (imageIdx < images.length && textCount > 0 && textCount % interval === 0) {
        blocks.push({ type: "image", ...images[imageIdx++] });
      }
    }
  }

  while (imageIdx < images.length) {
    blocks.push({ type: "image", ...images[imageIdx++] });
  }

  return blocks;
}

export default function ServiceAreaArticleBody({
  article,
}: {
  article: ServiceAreaArticle;
}) {
  const paragraphs = article.bodyMarkdown
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const blocks = insertImages(paragraphs, article.images);

  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a458]" />
          <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
            Local Guide
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-white/50 text-lg leading-relaxed mb-10 border-l-2 border-[#c9a458]/50 pl-5">
            {article.excerpt}
          </p>
        )}

        <div className="space-y-6">
          {blocks.map((block, idx) => {
            if (block.type === "image") {
              return (
                <figure
                  key={`img-${idx}`}
                  className="relative my-10 overflow-hidden border border-white/10"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs tracking-wide text-white/40 bg-[#111111] border-t border-white/10">
                    {block.alt}
                  </figcaption>
                </figure>
              );
            }

            if (block.text.startsWith("## ")) {
              const heading = block.text.replace(/^##\s+/, "");
              return (
                <h3
                  key={`h-${idx}`}
                  className="font-display text-2xl md:text-3xl font-bold text-white pt-6"
                >
                  {renderInline(heading, `h-${idx}`)}
                </h3>
              );
            }

            return (
              <p
                key={`p-${idx}`}
                className="text-white/60 leading-relaxed text-lg"
              >
                {renderInline(block.text, `p-${idx}`)}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
