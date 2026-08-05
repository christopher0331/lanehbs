import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
};

export default function PageHero({ title, subtitle, image, crumbs }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[42vh] md:min-h-[48vh] flex items-end overflow-hidden pt-28 pb-14">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/92 via-[#0d0d0d]/75 to-[#0d0d0d]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {crumbs && crumbs.length > 0 && (
          <nav className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase text-white/40 mb-5">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-[#c9a458] transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[#c9a458]">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-10 bg-[#c9a458]" />
          <span className="text-[#c9a458] text-xs tracking-[0.4em] uppercase font-medium">
            Lane Home &amp; Business Services
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/65 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
