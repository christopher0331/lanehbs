import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { sendEstimateEmail, type EstimateMailer } from "./sendEstimateEmail";

const valid = {
  name: "Jane Neighbor",
  email: "jane@example.com",
  phone: "(253) 414-3937",
  service: "Interior Painting",
  message: "Kitchen walls and ceiling.",
};

describe("sendEstimateEmail", () => {
  it("quietly accepts honeypot spam", async () => {
    const outcome = await sendEstimateEmail(
      { ...valid, company: "Bot Co" },
      { apiKey: "re_test", send: async () => ({ error: "should not send" }) }
    );
    assert.deepEqual(outcome, { ok: true, ignored: true });
  });

  it("returns a 400 for invalid input", async () => {
    const outcome = await sendEstimateEmail(
      { ...valid, email: "nope" },
      { apiKey: "re_test" }
    );
    assert.equal(outcome.ok, false);
    if (!outcome.ok) {
      assert.equal(outcome.status, 400);
      assert.equal(outcome.error, "Please enter a valid email address.");
    }
  });

  it("returns 503 when email is not configured", async () => {
    const outcome = await sendEstimateEmail(valid, { apiKey: "" });
    assert.equal(outcome.ok, false);
    if (!outcome.ok) {
      assert.equal(outcome.status, 503);
      assert.equal(outcome.error, "email_unconfigured");
    }
  });

  it("sends to Lane with a reply-to of the customer", async () => {
    const sent: Parameters<EstimateMailer>[0][] = [];
    const outcome = await sendEstimateEmail(valid, {
      apiKey: "re_test",
      from: "Lane HBS <noreply@lanehbs.com>",
      send: async (message) => {
        sent.push(message);
        return { error: null };
      },
    });
    assert.deepEqual(outcome, { ok: true, ignored: false });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].from, "Lane HBS <noreply@lanehbs.com>");
    assert.deepEqual(sent[0].to, ["lane@lanehbsllc.com"]);
    assert.equal(sent[0].replyTo, "jane@example.com");
    assert.match(sent[0].subject, /Jane Neighbor/);
    assert.match(sent[0].html, /Interior Painting/);
  });

  it("returns 502 when the mailer rejects the message", async () => {
    const outcome = await sendEstimateEmail(valid, {
      apiKey: "re_test",
      send: async () => ({ error: { message: "invalid from" } }),
    });
    assert.equal(outcome.ok, false);
    if (!outcome.ok) {
      assert.equal(outcome.status, 502);
    }
  });
});
