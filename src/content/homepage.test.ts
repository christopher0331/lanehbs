import assert from "node:assert/strict";
import { describe, it } from "node:test";
import sitemap from "../app/sitemap";
import { SITE_CONFIG } from "../constants/siteConfig";
import { getAllCitySlugs, getAllNeighborhoodParams } from "../lib/locations";
import { absoluteUrl } from "../lib/seo";
import { getAllServiceSlugs } from "../lib/services";
import {
  HOME_FAQS,
  HOME_META,
  HOME_NEARBY,
  HOME_PROCESS,
  homeArticle,
} from "./homepage";

const CANONICAL_ORIGIN = "https://lanehbs.com";
const PARKED_HOST = "lanehbsllc.com";

function markdownHrefs(body: string): string[] {
  return [...body.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
}

describe("homepage hub content", () => {
  it("keeps title, description, and canonical on lanehbs.com", () => {
    assert.equal(absoluteUrl("/"), CANONICAL_ORIGIN);
    assert.equal(HOME_META.title.includes(PARKED_HOST), false);
    assert.equal(HOME_META.description.includes(PARKED_HOST), false);
    assert.equal(HOME_META.description.includes(SITE_CONFIG.phone), true);
    assert.match(HOME_META.title, /Lake Tapps/i);
    assert.match(HOME_META.description, /painting/i);
  });

  it("is long-form company-hub copy, not a thin stub", () => {
    assert.ok(homeArticle.wordCount >= 1100, `wordCount ${homeArticle.wordCount}`);
    assert.ok(homeArticle.linkCount >= 20, `linkCount ${homeArticle.linkCount}`);
    assert.ok(HOME_FAQS.length >= 8);
    assert.ok(HOME_PROCESS.length >= 4);
    assert.equal(homeArticle.bodyMarkdown.includes("## "), true);
  });

  it("links real sitemap routes and does not promote the parked host", () => {
    const hrefs = markdownHrefs(homeArticle.bodyMarkdown);
    const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
    assert.ok(hrefs.length > 0);

    for (const href of hrefs) {
      assert.equal(href.includes(PARKED_HOST), false, href);
      if (href.startsWith("http")) {
        if (href.startsWith(CANONICAL_ORIGIN)) {
          assert.equal(sitemapUrls.has(href), true, href);
        }
        continue;
      }
      assert.equal(href.startsWith("/"), true, href);
      assert.equal(sitemapUrls.has(absoluteUrl(href)), true, href);
    }
  });

  it("covers every service and primary city without inventing contact details", () => {
    for (const slug of getAllServiceSlugs()) {
      assert.equal(
        homeArticle.bodyMarkdown.includes(`/services/${slug}`),
        true,
        slug,
      );
    }
    for (const city of getAllCitySlugs()) {
      assert.equal(
        homeArticle.bodyMarkdown.includes(`/service-areas/${city}`),
        true,
        city,
      );
    }
    assert.equal(homeArticle.bodyMarkdown.includes(SITE_CONFIG.phone), true);
    assert.equal(homeArticle.bodyMarkdown.includes(SITE_CONFIG.license), true);
    assert.equal(homeArticle.bodyMarkdown.includes(SITE_CONFIG.owner), true);
    assert.ok(HOME_NEARBY.includes("Bonney Lake"));

    const neighborhoodPaths = getAllNeighborhoodParams().map(
      ({ city, neighborhood }) => `/service-areas/${city}/${neighborhood}`,
    );
    const linkedNeighborhoods = neighborhoodPaths.filter((path) =>
      homeArticle.bodyMarkdown.includes(path),
    );
    assert.ok(
      linkedNeighborhoods.length >= 4,
      "homepage should deep-link a few neighborhood pages",
    );
  });
});
