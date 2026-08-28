#!/usr/bin/env npx tsx
/**
 * Generate link-dense local SEO articles for Lane HBS service areas via Perplexity.
 *
 * Usage:
 *   npx tsx scripts/generate-service-area-articles.ts
 *   npx tsx scripts/generate-service-area-articles.ts lake-tapps
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const PERPLEXITY_API = "https://api.perplexity.ai/chat/completions";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

type AreaSeed = {
  slug: string;
  name: string;
  county: string;
  zipCodes: string[];
  neighborhoods: Array<{ name: string; path: string }>;
  knownLinks: Array<{ name: string; url: string }>;
  peers: Array<{ name: string; path: string }>;
  serviceLinks: Array<{ name: string; path: string }>;
  images: Array<{ src: string; alt: string }>;
};

const SERVICE_LINKS = [
  { name: "interior painting", path: "/services/interior-painting" },
  { name: "exterior painting", path: "/services/exterior-painting" },
  { name: "commercial painting", path: "/services/commercial-painting" },
  { name: "remodeling and renovation", path: "/services/remodeling-renovation" },
  { name: "decks and fences", path: "/services/decks-fences" },
  { name: "repairs and carpentry", path: "/services/repairs-carpentry" },
];

const AREAS: Record<string, AreaSeed> = {
  "lake-tapps": {
    slug: "lake-tapps",
    name: "Lake Tapps",
    county: "Pierce County",
    zipCodes: ["98391"],
    neighborhoods: [
      { name: "Snag Island", path: "/service-areas/lake-tapps/snag-island" },
      { name: "Driftwood Point", path: "/service-areas/lake-tapps/driftwood-point" },
      { name: "West Tapps", path: "/service-areas/lake-tapps/west-tapps" },
      {
        name: "Lake Tapps Plateau",
        path: "/service-areas/lake-tapps/lake-tapps-plateau",
      },
      { name: "Tapps Island", path: "/service-areas/lake-tapps/tapps-island" },
    ],
    knownLinks: [
      {
        name: "Pierce County Planning & Public Works",
        url: "https://www.piercecountywa.gov/91/Planning-Public-Works",
      },
      { name: "Cascade Water Alliance", url: "https://cascadewater.org/" },
      { name: "Puget Sound Energy", url: "https://www.pse.com/" },
      {
        name: "Sumner-Bonney Lake School District",
        url: "https://www.sumnersd.org/",
      },
      { name: "Pierce County Library System", url: "https://mypcls.org/" },
      {
        name: "Tacoma–Pierce County Health Department",
        url: "https://www.tpchd.org/",
      },
      {
        name: "Washington State Department of Ecology — Shoreline Management",
        url: "https://ecology.wa.gov/Water-Shorelines/Shoreline-coastal-management",
      },
      {
        name: "Allan Yorke Park",
        url: "https://www.bonneylake.gov/Facilities/Facility/Details/Allan-Yorke-Park-1",
      },
      {
        name: "City of Bonney Lake",
        url: "https://www.bonneylake.gov/",
      },
      {
        name: "Tapps Island Golf Course",
        url: "https://www.tappsislandgolf.com/",
      },
      {
        name: "Dieringer School District",
        url: "https://www.dieringer.wednet.edu/",
      },
    ],
    peers: [
      { name: "Enumclaw", path: "/service-areas/enumclaw" },
      { name: "Maple Valley", path: "/service-areas/maple-valley" },
      { name: "Covington", path: "/service-areas/covington" },
    ],
    serviceLinks: SERVICE_LINKS,
    images: [
      {
        src: "/images/from-lane/lane-03-45.jpg",
        alt: "Completed deck and exterior project near Lake Tapps",
      },
      {
        src: "/images/from-lane/lane-25-1450.jpg",
        alt: "Freshly stained multi-level deck by Lane HBS",
      },
      {
        src: "/images/painting16.jpg",
        alt: "Interior kitchen cabinet painting project",
      },
      {
        src: "/images/from-lane/lane-20-1512.jpg",
        alt: "New deck railing installation in progress",
      },
    ],
  },
  enumclaw: {
    slug: "enumclaw",
    name: "Enumclaw",
    county: "King County",
    zipCodes: ["98022"],
    neighborhoods: [
      {
        name: "Downtown Enumclaw",
        path: "/service-areas/enumclaw/downtown-enumclaw",
      },
      { name: "Boise Creek", path: "/service-areas/enumclaw/boise-creek" },
      {
        name: "Enumclaw Plateau",
        path: "/service-areas/enumclaw/enumclaw-plateau",
      },
    ],
    knownLinks: [
      { name: "City of Enumclaw", url: "https://www.cityofenumclaw.net/" },
      {
        name: "Enumclaw Permit Center",
        url: "https://www.cityofenumclaw.net/159/Building-Division",
      },
      { name: "Puget Sound Energy", url: "https://www.pse.com/" },
      {
        name: "Enumclaw School District",
        url: "https://www.enumclaw.wednet.edu/",
      },
      { name: "King County Library System", url: "https://kcls.org/" },
      {
        name: "King County Parks",
        url: "https://kingcounty.gov/en/dept/natural-resources-parks/parks",
      },
      {
        name: "Enumclaw Expo Center",
        url: "https://www.enumclawexpo.com/",
      },
      {
        name: "Washington State Department of Labor & Industries",
        url: "https://lni.wa.gov/",
      },
    ],
    peers: [
      { name: "Lake Tapps", path: "/service-areas/lake-tapps" },
      { name: "Maple Valley", path: "/service-areas/maple-valley" },
      { name: "Covington", path: "/service-areas/covington" },
    ],
    serviceLinks: SERVICE_LINKS,
    images: [
      {
        src: "/images/from-lane/lane-25-1450.jpg",
        alt: "Stained deck project serving Enumclaw-area homes",
      },
      {
        src: "/images/painting6.jpg",
        alt: "Exterior house painting by Lane HBS",
      },
      {
        src: "/images/from-lane/lane-05-1d7c6264-414c-4303-b396-b8786e3a1eea-1_all_205.jpg",
        alt: "Deck pressure washing and prep",
      },
      {
        src: "/images/painting.jpg",
        alt: "Commercial and residential exterior painting",
      },
    ],
  },
  "maple-valley": {
    slug: "maple-valley",
    name: "Maple Valley",
    county: "King County",
    zipCodes: ["98038"],
    neighborhoods: [
      {
        name: "Wilderness Rim",
        path: "/service-areas/maple-valley/wilderness-rim",
      },
      { name: "Summit at Maple Valley", path: "/service-areas/maple-valley/summit" },
      {
        name: "Lake Wilderness",
        path: "/service-areas/maple-valley/lake-wilderness",
      },
      {
        name: "Four Corners",
        path: "/service-areas/maple-valley/four-corners",
      },
      { name: "Ravensdale", path: "/service-areas/maple-valley/ravensdale" },
    ],
    knownLinks: [
      { name: "City of Maple Valley", url: "https://www.maplevalleywa.gov/" },
      {
        name: "Maple Valley Building Permits",
        url: "https://www.maplevalleywa.gov/179/Building",
      },
      { name: "Puget Sound Energy", url: "https://www.pse.com/" },
      { name: "Tahoma School District", url: "https://www.tahomasd.us/" },
      { name: "King County Library System", url: "https://kcls.org/" },
      {
        name: "Lake Wilderness Park",
        url: "https://www.maplevalleywa.gov/Facilities/Facility/Details/Lake-Wilderness-Park-5",
      },
      {
        name: "King County Parks",
        url: "https://kingcounty.gov/en/dept/natural-resources-parks/parks",
      },
      {
        name: "Cedar River Trail",
        url: "https://kingcounty.gov/en/dept/local-services/transit-transportation-roads/roads-and-bridges/trails",
      },
    ],
    peers: [
      { name: "Lake Tapps", path: "/service-areas/lake-tapps" },
      { name: "Enumclaw", path: "/service-areas/enumclaw" },
      { name: "Covington", path: "/service-areas/covington" },
    ],
    serviceLinks: SERVICE_LINKS,
    images: [
      {
        src: "/images/from-lane/lane-22-62.jpg",
        alt: "Modern deck on a Maple Valley-area home",
      },
      {
        src: "/images/from-lane/lane-33-1513.jpg",
        alt: "Flooring installation during a home refresh",
      },
      {
        src: "/images/painting3.jpg",
        alt: "Kitchen renovation painting in progress",
      },
      {
        src: "/images/from-lane/lane-04-4874.jpg",
        alt: "Interior spray prep in a vaulted living space",
      },
    ],
  },
  covington: {
    slug: "covington",
    name: "Covington",
    county: "King County",
    zipCodes: ["98042"],
    neighborhoods: [
      { name: "Lake Sawyer", path: "/service-areas/covington/lake-sawyer" },
      { name: "Maple Hills", path: "/service-areas/covington/maple-hills" },
      {
        name: "Covington Woods",
        path: "/service-areas/covington/covington-woods",
      },
      {
        name: "Jenkins Creek",
        path: "/service-areas/covington/jenkins-creek",
      },
    ],
    knownLinks: [
      { name: "City of Covington", url: "https://www.covingtonwa.gov/" },
      {
        name: "Covington Building Division",
        url: "https://www.covingtonwa.gov/city_departments/community_development/building.php",
      },
      { name: "Puget Sound Energy", url: "https://www.pse.com/" },
      { name: "Kent School District", url: "https://www.kent.k12.wa.us/" },
      { name: "King County Library System", url: "https://kcls.org/" },
      {
        name: "Jenkins Creek Park",
        url: "https://www.covingtonwa.gov/parks/jenkinscreekpark.php",
      },
      {
        name: "Lake Sawyer Regional Park",
        url: "https://kingcounty.gov/en/dept/natural-resources-parks/parks",
      },
      {
        name: "Soos Creek Trail",
        url: "https://kingcounty.gov/en/dept/local-services/transit-transportation-roads/roads-and-bridges/trails",
      },
      {
        name: "Washington Contractors Registration",
        url: "https://secure.lni.wa.gov/verify/",
      },
    ],
    peers: [
      { name: "Lake Tapps", path: "/service-areas/lake-tapps" },
      { name: "Enumclaw", path: "/service-areas/enumclaw" },
      { name: "Maple Valley", path: "/service-areas/maple-valley" },
    ],
    serviceLinks: SERVICE_LINKS,
    images: [
      {
        src: "/images/from-lane/lane-33-1513.jpg",
        alt: "Flooring and interior refresh project",
      },
      {
        src: "/images/painting16.jpg",
        alt: "Dark cabinet kitchen finish by Lane HBS",
      },
      {
        src: "/images/from-lane/lane-03-45.jpg",
        alt: "Deck and exterior upgrade near Covington",
      },
      {
        src: "/images/from-lane/lane-30-4772.jpg",
        alt: "Kitchen remodel work in progress",
      },
    ],
  },
};

function buildPrompt(area: AreaSeed): string {
  const known = area.knownLinks.map((l) => `- [${l.name}](${l.url})`).join("\n");
  const peers = area.peers.map((p) => `- [${p.name}](${p.path})`).join("\n");
  const neighborhoods = area.neighborhoods
    .map((n) => `- [${n.name}](${n.path})`)
    .join("\n");
  const services = area.serviceLinks
    .map((s) => `- [${s.name}](${s.path})`)
    .join("\n");

  return `Write a factual, locally grounded home-improvement article of 900–1100 words about painting, remodeling, decks, and outdoor projects for homeowners in ${area.name}, ${area.county}, Washington.

Context:
- This copy appears on the Lane Home & Business Services LLC service-area hub: https://lanehbsllc.com/service-areas/${area.slug}
- Brand: Lane Home & Business Services LLC (Lane Vanderwaal). Soft CTA only in the final paragraph — mention a free estimate and phone (253) 414-3937 once at the end.
- Audience: homeowners researching painting, cabinet refinishing, remodeling, decks, and fences in ${area.name}.
- ZIP codes: ${area.zipCodes.join(", ")}.
- CRITICAL: Center the entire article on ${area.name}. Peer cities are brief comparison links only.

Must weave in AT LEAST 16 inline markdown links total, including:
1) Most of these verified outbound authority links (use exact URLs):
${known}
2) Internal neighborhood pages (exact paths):
${neighborhoods}
3) Internal service pages (exact paths) — use several naturally:
${services}
4) Peer service-area hubs (exact paths):
${peers}
5) Also link [service areas overview](/service-areas), [project gallery](/gallery), and [contact / free estimate](/contact) naturally.

Requirements:
- Focus on ${area.name} housing character, climate/moisture considerations for paint and decks, neighborhoods, permits/utilities where relevant, and why prep quality matters in the Pacific Northwest.
- Short paragraphs (2–4 sentences). Use ## headings for 3–5 section titles (H2 only). No bullet lists.
- Separate paragraphs with a blank line.
- Only use markdown links like [anchor](url). Never invent URLs. Prefer provided URLs; you may add a few additional verified .gov / .org / school / utility links if confident.
- Do not invent statistics, rankings, awards, or prices. Speak qualitatively.
- Do not mention AI, Perplexity, or that this is generated. No footnote citations like [1].
- Write narrative prose with links woven in — not a dry resource directory.

Return ONLY this JSON object (no markdown fences):
{
  "title": "Compelling SEO title under 70 characters mentioning ${area.name} painting or remodeling",
  "excerpt": "1–2 sentence summary under 220 characters focused on ${area.name}",
  "bodyMarkdown": "Full article body with ## headings, blank-line-separated paragraphs, and inline markdown links"
}`;
}

function stripFootnotes(text: string): string {
  return text.replace(/\[\d+\](?!\()/g, "");
}

function parseArticleJson(raw: string): {
  title: string;
  excerpt: string;
  bodyMarkdown: string;
} {
  const stripped = stripFootnotes(raw)
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  // Try direct parse, then extract first {...} block
  let jsonText = stripped;
  try {
    JSON.parse(jsonText);
  } catch {
    const start = stripped.indexOf("{");
    const end = stripped.lastIndexOf("}");
    if (start === -1 || end === -1) throw new Error("No JSON object in response");
    jsonText = stripped.slice(start, end + 1);
  }

  const parsed = JSON.parse(jsonText) as {
    title?: string;
    excerpt?: string;
    bodyMarkdown?: string;
  };
  if (!parsed.title?.trim() || !parsed.bodyMarkdown?.trim()) {
    throw new Error("Perplexity JSON missing title or bodyMarkdown");
  }
  return {
    title: parsed.title.trim(),
    excerpt: (parsed.excerpt ?? "").trim(),
    bodyMarkdown: parsed.bodyMarkdown.trim(),
  };
}

async function callPerplexity(prompt: string): Promise<{ content: string; model: string }> {
  const apiKey = process.env.PERPLEXITY_API_KEY?.trim();
  if (!apiKey) throw new Error("PERPLEXITY_API_KEY missing in .env.local");
  const model = process.env.PERPLEXITY_MODEL?.trim() || "sonar-pro";

  const res = await fetch(PERPLEXITY_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are a local home-improvement research writer for a Pacific Northwest painting and remodeling contractor. Output valid JSON only. Prefer verified municipal and utility URLs.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.35,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Perplexity ${res.status}: ${detail.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
    model?: string;
  };
  const content = data.choices?.[0]?.message?.content?.trim() ?? "";
  if (!content) throw new Error("Empty Perplexity response");
  return { content, model: data.model ?? model };
}

function toTsModule(payload: {
  slug: string;
  title: string;
  excerpt: string;
  bodyMarkdown: string;
  images: Array<{ src: string; alt: string }>;
  model: string;
  wordCount: number;
  linkCount: number;
  generatedAt: string;
}): string {
  return `/* Autogenerated by scripts/generate-service-area-articles.ts — do not edit by hand */
import type { ServiceAreaArticle } from "@/content/service-areas/types";

const article: ServiceAreaArticle = ${JSON.stringify(payload, null, 2)};

export default article;
`;
}

async function generateOne(slug: string) {
  const area = AREAS[slug];
  if (!area) throw new Error(`Unknown slug: ${slug}`);

  console.log(`\n→ Generating ${area.name} via Perplexity...`);
  const result = await callPerplexity(buildPrompt(area));
  const article = parseArticleJson(result.content);

  const linkCount = (article.bodyMarkdown.match(/\[[^\]]+\]\([^)]+\)/g) ?? []).length;
  const wordCount = article.bodyMarkdown.trim().split(/\s+/).filter(Boolean).length;

  const outDir = resolve(process.cwd(), "src/content/service-areas");
  mkdirSync(outDir, { recursive: true });

  const payload = {
    slug: area.slug,
    title: article.title,
    excerpt: article.excerpt,
    bodyMarkdown: article.bodyMarkdown,
    images: area.images,
    model: result.model,
    wordCount,
    linkCount,
    generatedAt: new Date().toISOString(),
  };

  const outPath = resolve(outDir, `${area.slug}.ts`);
  writeFileSync(outPath, toTsModule(payload), "utf8");

  // Also stash raw JSON for debugging
  const tmpDir = resolve(process.cwd(), "tmp");
  mkdirSync(tmpDir, { recursive: true });
  writeFileSync(resolve(tmpDir, `${area.slug}-article.json`), JSON.stringify(payload, null, 2));

  console.log(`  wrote ${outPath}`);
  console.log(`  title: ${article.title}`);
  console.log(`  words: ${wordCount}, links: ${linkCount}, model: ${result.model}`);
}

async function main() {
  loadEnvLocal();
  const arg = (process.argv[2] || "").trim();
  const slugs = arg ? [arg] : Object.keys(AREAS);

  for (const slug of slugs) {
    if (!AREAS[slug]) {
      console.error(`Unknown area: ${slug}. Known: ${Object.keys(AREAS).join(", ")}`);
      process.exit(1);
    }
    await generateOne(slug);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
