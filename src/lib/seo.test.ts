import assert from "node:assert/strict";
import { describe, it } from "node:test";
import robots from "../app/robots";
import sitemap from "../app/sitemap";
import { SITE_CONFIG, SITE_URL } from "../constants/siteConfig";
import { absoluteUrl } from "./seo";

const PARKED_HOST = "lanehbsllc.com";
const CANONICAL_ORIGIN = "https://lanehbs.com";

describe("canonical site host", () => {
  it("uses https://lanehbs.com with no trailing slash", () => {
    assert.equal(SITE_URL, CANONICAL_ORIGIN);
    assert.equal(SITE_CONFIG.url, CANONICAL_ORIGIN);
    assert.equal(new URL(SITE_CONFIG.logoUrl).origin, CANONICAL_ORIGIN);
  });

  it("does not use the parked GoDaddy host", () => {
    assert.equal(SITE_CONFIG.url.includes(PARKED_HOST), false);
    assert.equal(SITE_CONFIG.logoUrl.includes(PARKED_HOST), false);
  });
});

describe("absoluteUrl", () => {
  it("keeps the homepage on the canonical origin", () => {
    assert.equal(absoluteUrl("/"), CANONICAL_ORIGIN);
    assert.equal(absoluteUrl(""), CANONICAL_ORIGIN);
  });

  it("preserves hub and nested paths", () => {
    assert.equal(absoluteUrl("/service-areas"), `${CANONICAL_ORIGIN}/service-areas`);
    assert.equal(
      absoluteUrl("/service-areas/lake-tapps"),
      `${CANONICAL_ORIGIN}/service-areas/lake-tapps`
    );
    assert.equal(
      absoluteUrl("services/interior-painting"),
      `${CANONICAL_ORIGIN}/services/interior-painting`
    );
  });
});

describe("robots.txt metadata", () => {
  it("points Host and Sitemap at lanehbs.com", () => {
    const result = robots();
    assert.equal(result.host, "lanehbs.com");
    assert.equal(result.sitemap, `${CANONICAL_ORIGIN}/sitemap.xml`);
    assert.equal(String(result.host).includes(PARKED_HOST), false);
    assert.equal(String(result.sitemap).includes(PARKED_HOST), false);
  });
});

describe("sitemap.xml metadata", () => {
  it("emits only https://lanehbs.com loc URLs and keeps hub paths", () => {
    const urls = sitemap().map((entry) => entry.url);
    assert.ok(urls.length > 0);
    for (const url of urls) {
      assert.equal(url.startsWith(`${CANONICAL_ORIGIN}`), true, url);
      assert.equal(url.includes(PARKED_HOST), false, url);
    }
    assert.ok(urls.includes(CANONICAL_ORIGIN));
    assert.ok(urls.includes(`${CANONICAL_ORIGIN}/service-areas`));
    assert.ok(urls.includes(`${CANONICAL_ORIGIN}/about`));
    assert.ok(urls.includes(`${CANONICAL_ORIGIN}/services`));
    assert.ok(urls.some((url) => url.startsWith(`${CANONICAL_ORIGIN}/service-areas/`)));
  });
});
