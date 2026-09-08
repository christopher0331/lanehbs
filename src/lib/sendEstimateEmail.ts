import { Resend } from "resend";
import { SITE_CONFIG } from "@/constants/siteConfig";
import {
  escapeHtml,
  isEstimateHoneypot,
  normalizeEstimate,
  validateEstimate,
  type EstimatePayload,
} from "@/lib/contact";

export type SendEstimateOutcome =
  | { ok: true; ignored: boolean }
  | { ok: false; error: string; status: number };

export type EstimateMailer = (message: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
}) => Promise<{ error: unknown; id?: string }>;

export type SendEstimateOptions = {
  apiKey?: string;
  from?: string;
  extraRecipients?: string;
  send?: EstimateMailer;
};

function notifyList(extraRecipients?: string): string[] {
  const extra = String(extraRecipients ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return Array.from(new Set([SITE_CONFIG.email, ...extra]));
}

export function buildEstimateEmailHtml(data: EstimatePayload): string {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service || "Not specified"],
    ["Submitted from", data.page || "Unknown page"],
  ];

  return `
    <h2>New estimate request — ${escapeHtml(SITE_CONFIG.shortName)}</h2>
    ${rows
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
      )
      .join("")}
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.message || "No details provided.").replace(/\n/g, "<br>")}</p>
    <hr>
    <p style="color:#666;font-size:12px;">
      Sent from the ${escapeHtml(SITE_CONFIG.fullName)} website contact form.
    </p>
  `;
}

export async function sendEstimateEmail(
  input: EstimatePayload,
  options: SendEstimateOptions = {}
): Promise<SendEstimateOutcome> {
  const data = normalizeEstimate(input);
  if (isEstimateHoneypot(data)) {
    console.info("Estimate ignored as honeypot");
    return { ok: true, ignored: true };
  }

  const invalid = validateEstimate(data);
  if (invalid) {
    return { ok: false, error: invalid, status: 400 };
  }

  const apiKey = (options.apiKey ?? process.env.RESEND_API_KEY ?? "").trim();
  if (!apiKey) {
    return { ok: false, error: "email_unconfigured", status: 503 };
  }

  const from =
    (options.from ?? process.env.RESEND_FROM ?? "").trim() ||
    `${SITE_CONFIG.shortName} <noreply@lanehbs.com>`;

  const send: EstimateMailer =
    options.send ??
    (async (message) => {
      const resend = new Resend(apiKey);
      const { data: sent, error } = await resend.emails.send(message);
      return { error, id: sent?.id };
    });

  try {
    const { error, id } = await send({
      from,
      to: notifyList(options.extraRecipients ?? process.env.CONTACT_NOTIFY_EMAIL),
      replyTo: data.email,
      subject: `New estimate request from ${data.name}`,
      html: buildEstimateEmailHtml(data),
    });

    if (error || !id) {
      console.error("Resend rejected estimate email:", error ?? "missing message id");
      return {
        ok: false,
        error: "Could not send your request. Please call us.",
        status: 502,
      };
    }

    console.info("Estimate email sent", { id });
    return { ok: true, ignored: false };
  } catch (error) {
    console.error("Estimate email failed:", error);
    return {
      ok: false,
      error: "Could not send your request. Please call us.",
      status: 502,
    };
  }
}
