import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ESTIMATE_POPUP_COPY,
  ESTIMATE_POPUP_DISMISS_MS,
  ESTIMATE_POPUP_STORAGE_KEY,
  ESTIMATE_POPUP_SUBMITTED_MS,
  markEstimatePopupDismissed,
  markEstimatePopupSubmitted,
  shouldSuppressEstimatePopup,
  validatePopupPhone,
} from "./estimatePopup";

class MemoryStore {
  private data = new Map<string, string>();
  getItem(key: string) {
    return this.data.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.data.set(key, value);
  }
}

describe("ESTIMATE_POPUP_COPY", () => {
  it("keeps Lane HBS services instead of roofing language", () => {
    const blob = Object.values(ESTIMATE_POPUP_COPY).join(" ").toLowerCase();
    assert.equal(blob.includes("roof"), false);
    assert.equal(blob.includes("inspection"), false);
    assert.match(blob, /painting/);
    assert.match(blob, /remodel/);
    assert.match(blob, /30 minutes/);
    assert.equal(ESTIMATE_POPUP_COPY.button, "Get My Free Estimate");
  });
});

describe("shouldSuppressEstimatePopup", () => {
  it("hides on the contact page", () => {
    assert.equal(shouldSuppressEstimatePopup("/contact"), true);
    assert.equal(shouldSuppressEstimatePopup("/contact?sent=1"), true);
  });

  it("shows on other pages when nothing is stored", () => {
    assert.equal(shouldSuppressEstimatePopup("/", Date.now(), new MemoryStore()), false);
  });

  it("hides after a recent dismiss", () => {
    const store = new MemoryStore();
    const now = 1_700_000_000_000;
    markEstimatePopupDismissed(store, now);
    assert.equal(shouldSuppressEstimatePopup("/", now + 1000, store), true);
    assert.equal(
      shouldSuppressEstimatePopup("/", now + ESTIMATE_POPUP_DISMISS_MS + 1, store),
      false
    );
  });

  it("hides longer after a successful submit", () => {
    const store = new MemoryStore();
    const now = 1_700_000_000_000;
    markEstimatePopupSubmitted(store, now);
    assert.equal(
      shouldSuppressEstimatePopup("/", now + ESTIMATE_POPUP_DISMISS_MS + 1, store),
      true
    );
    assert.equal(
      shouldSuppressEstimatePopup("/", now + ESTIMATE_POPUP_SUBMITTED_MS + 1, store),
      false
    );
    assert.equal(store.getItem(ESTIMATE_POPUP_STORAGE_KEY)?.includes("submittedAt"), true);
  });
});

describe("validatePopupPhone", () => {
  it("requires a 10-digit callback number", () => {
    assert.equal(validatePopupPhone(""), "Please enter a phone number so we can call you back.");
    assert.equal(validatePopupPhone("253-414"), "Please enter a phone number so we can call you back.");
    assert.equal(validatePopupPhone("(253) 414-3937"), null);
  });
});
