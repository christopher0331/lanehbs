import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  cityServiceRadiusMeters,
  googleMapsSearchUrl,
  hasValidCoordinates,
  zoomForRadiusMeters,
} from "./serviceAreaMap";
import { lakeTappsNeighborhoods } from "./neighborhoods/lake-tapps";

describe("googleMapsSearchUrl", () => {
  it("pins the exact coordinates", () => {
    assert.equal(
      googleMapsSearchUrl(47.2472, -122.1694),
      "https://www.google.com/maps/search/?api=1&query=47.2472,-122.1694"
    );
  });
});

describe("zoomForRadiusMeters", () => {
  it("zooms in for a tight neighborhood radius", () => {
    assert.equal(zoomForRadiusMeters(1200), 15);
    assert.equal(zoomForRadiusMeters(1800), 14);
  });

  it("zooms out for a city-scale radius", () => {
    assert.equal(zoomForRadiusMeters(7000), 11);
  });
});

describe("cityServiceRadiusMeters", () => {
  it("covers the widest neighborhood with padding", () => {
    assert.equal(
      cityServiceRadiusMeters({
        neighborhoods: [{ geoRadiusMeters: 1200 }, { geoRadiusMeters: 2800 }],
      }),
      5040
    );
  });
});

describe("hasValidCoordinates", () => {
  it("accepts Snag Island", () => {
    assert.equal(hasValidCoordinates(47.2472, -122.1694), true);
  });

  it("rejects empty zeros", () => {
    assert.equal(hasValidCoordinates(0, 0), false);
  });
});

describe("Snag Island coordinates", () => {
  it("has a pin location and service radius", () => {
    const snag = lakeTappsNeighborhoods.find((n) => n.slug === "snag-island");
    assert.ok(snag);
    assert.equal(hasValidCoordinates(snag.latitude, snag.longitude), true);
    assert.ok(snag.geoRadiusMeters >= 1000);
  });
});
