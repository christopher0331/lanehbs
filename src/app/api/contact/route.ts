import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/constants/siteConfig";
import {
  escapeHtml,
  normalizeEstimate,
  validateEstimate,
  type EstimatePayload,
} from "@/lib/contact";

export const runtime = "nodejs";

function notifyList(): string[] {
  const primary = SITE_CONFIG.email;
  const extra = String(process.env.CONTACT_NOTIFY_EMAIL ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return Array.from(new Set([primary, ...extra]));
}

function buildEmailHtml(data: EstimatePayload): string {
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

export async function POST(request: Request) {
  let body: EstimatePayload;
  try {
    body = (await request.json()) as EstimatePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = normalizeEstimate(body);
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const invalid = validateEstimate(data);
  if (invalid) {
    return NextResponse.json({ ok: false, error: invalid }, { status: 400 });
  }

  const apiKey = String(process.env.RESEND_API_KEY ?? "").trim();
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "email_unconfigured" },
      { status: 503 }
    );
  }

  const from =
    String(process.env.RESEND_FROM ?? "").trim() ||
    `${SITE_CONFIG.shortName} <noreply@${new URL(SITE_CONFIG.url).hostname}>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: notifyList(),
      replyTo: data.email,
      subject: `New estimate request from ${data.name}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend rejected estimate email:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send your request. Please call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Estimate email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your request. Please call us." },
      { status: 502 }
    );
  }
}
