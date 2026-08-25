import type { ReactNode } from "react";
import type { LocalAttraction } from "@/lib/locations";

export type { LocalAttraction };

const LINK_CLASS =
  "font-semibold text-[#c9a458] underline decoration-2 underline-offset-4";

/** Render copy that uses markdown-style [label](url) links with explicit classes. */
export function LinkedCopy({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const href = match[2];
    const isInternal = href.startsWith("/");
    nodes.push(
      <a
        key={`link-${key++}`}
        href={href}
        className={LINK_CLASS}
        {...(isInternal
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <p className={className}>{nodes}</p>;
}

type Props = {
  cityName: string;
  neighborhoodName: string;
  attractions: LocalAttraction[];
  localLivingContent: ReactNode;
};

export default function AboutTheArea({
  cityName,
  neighborhoodName,
  attractions,
  localLivingContent,
}: Props) {
  return (
    <section className="py-20 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a458]" />
          <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase">
            Discover {neighborhoodName}
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          About the Area
        </h2>
        <p className="text-white/50 max-w-3xl mb-12 leading-relaxed">
          {neighborhoodName} sits inside {cityName}&apos;s daily rhythm — parks,
          schools, and errands that shape how painting, decks, and remodels get
          scheduled around real life.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Nearby Attractions
            </h3>
            <ul className="space-y-6">
              {attractions.map((attraction) => (
                <li key={attraction.url} className="border border-white/10 p-5">
                  <a
                    href={attraction.url}
                    className={`${LINK_CLASS} text-lg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {attraction.name}
                  </a>
                  <p className="text-white/55 text-sm leading-relaxed mt-3">
                    {attraction.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Local Living
            </h3>
            <div className="space-y-5 text-white/60 leading-relaxed">
              {localLivingContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
