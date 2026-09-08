import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  estimateFromFields,
  estimateFromFormData,
  isEstimateHoneypot,
  normalizeEstimate,
  validateEstimate,
  wantsHtmlRedirect,
} from "./contact";

describe("validateEstimate", () => {
  it("accepts a complete request", () => {
    assert.equal(
      validateEstimate(
        normalizeEstimate({
          name: "Jane Neighbor",
          email: "jane@example.com",
          phone: "(253) 414-3937",
          service: "Interior Painting",
          message: "Kitchen and hallway.",
        })
      ),
      null
    );
  });

  it("rejects a missing name", () => {
    assert.equal(
      validateEstimate(
        normalizeEstimate({
          name: "  ",
          email: "jane@example.com",
          phone: "",
          service: "",
          message: "",
        })
      ),
      "Please enter your name."
    );
  });

  it("rejects an invalid email", () => {
    assert.equal(
      validateEstimate(
        normalizeEstimate({
          name: "Jane",
          email: "not-an-email",
          phone: "",
          service: "",
          message: "",
        })
      ),
      "Please enter a valid email address."
    );
  });
});

describe("estimateFromFields", () => {
  it("reads string fields and ignores extras", () => {
    const payload = estimateFromFields({
      name: "Lane",
      email: "lane@example.com",
      phone: "2534143937",
      service: "Deck & Fence",
      message: "Need stain",
      page: "https://lanehbsllc.com/contact",
      company: "",
      "form-name": "estimate",
    });
    assert.equal(payload.name, "Lane");
    assert.equal(payload.service, "Deck & Fence");
    assert.equal(payload.company, "");
  });

  it("treats non-string values as empty", () => {
    const payload = estimateFromFields({ name: 1, email: null });
    assert.equal(payload.name, "");
    assert.equal(payload.email, "");
  });

  it("reads the bot_check honeypot", () => {
    const payload = estimateFromFields({ bot_check: "http://spam.example" });
    assert.equal(isEstimateHoneypot(payload), true);
    assert.equal(isEstimateHoneypot(estimateFromFields({ name: "Lane" })), false);
  });
});

describe("estimateFromFormData", () => {
  it("parses urlencoded-style form data", () => {
    const formData = new FormData();
    formData.set("name", "Pat");
    formData.set("email", "pat@example.com");
    formData.set("message", "Hello");
    const payload = estimateFromFormData(formData);
    assert.equal(payload.name, "Pat");
    assert.equal(payload.email, "pat@example.com");
    assert.equal(payload.message, "Hello");
  });
});

describe("wantsHtmlRedirect", () => {
  it("redirects browser form posts", () => {
    const request = new Request("https://lanehbsllc.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    assert.equal(wantsHtmlRedirect(request), true);
  });

  it("keeps JSON clients on JSON", () => {
    const request = new Request("https://lanehbsllc.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
    });
    assert.equal(wantsHtmlRedirect(request), false);
  });
});
