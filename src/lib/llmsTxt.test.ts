import assert from "node:assert/strict";
import { describe, it } from "node:test";
import sitemap from "../app/sitemap";
import { SITE_CONFIG } from "../constants/siteConfig";
import { getAllCitySlugs } from "./locations";
import { buildLlmsTxt } from "./llmsTxt";
import { getAllServiceSlugs } from "./services";

const CANONICAL_ORIGIN = "https://lanehbs.com";
const PARKED_HOST = "lanehbsllc.com";

function markdownHrefs(body: string): string[] {
  return [...body.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]);
}

describe("llms.txt", () => {
  it("uses the llmstxt.org heading, summary, and canonical host", () => {
    const body = buildLlmsTxt();
    assert.equal(body.startsWith(`# ${SITE_CONFIG.fullName}\n`), true);
    assert.equal(body.includes(`> ${SITE_CONFIG.description}`), true);
    assert.equal(body.includes(`Canonical site: ${CANONICAL_ORIGIN}`), true);
    assert.equal(body.includes(SITE_CONFIG.phone), true);
    assert.equal(body.includes(SITE_CONFIG.email), true);
  });

  it("lists homepage, hubs, key services, and primary cities only", () => {
    const body = buildLlmsTxt();
    const required = [
      CANONICAL_ORIGIN,
      `${CANONICAL_ORIGIN}/about`,
      `${CANONICAL_ORIGIN}/contact`,
      `${CANONICAL_ORIGIN}/gallery`,
      `${CANONICAL_ORIGIN}/reviews`,
      `${CANONICAL_ORIGIN}/services`,
      `${CANONICAL_ORIGIN}/service-areas`,
    ];
    for (const url of required) {
      assert.equal(body.includes(url), true, url);
    }
    for (const slug of getAllServiceSlugs()) {
      assert.equal(body.includes(`${CANONICAL_ORIGIN}/services/${slug}`), true, slug);
    }
    for (const city of getAllCitySlugs()) {
      assert.equal(
        body.includes(`${CANONICAL_ORIGIN}/service-areas/${city}`),
        true,
        city,
      );
    }
    assert.equal(body.includes("/service-areas/lake-tapps/"), false);
    assert.equal(body.includes("company hub"), true);
  });

  it("links only real sitemap URLs on https://lanehbs.com", () => {
    const hrefs = markdownHrefs(buildLlmsTxt());
    const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
    assert.ok(hrefs.length > 0);
    for (const href of hrefs) {
      assert.equal(href.startsWith(`${CANONICAL_ORIGIN}`), true, href);
      assert.equal(href.includes(PARKED_HOST), false, href);
      assert.equal(sitemapUrls.has(href), true, href);
    }
  });
});
