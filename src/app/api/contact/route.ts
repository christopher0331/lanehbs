import { NextResponse } from "next/server";
import {
  estimateFromFields,
  estimateFromFormData,
  wantsHtmlRedirect,
  type EstimatePayload,
  type EstimateResult,
} from "@/lib/contact";
import { sendEstimateEmail } from "@/lib/sendEstimateEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALL_US = "Could not send your request. Please call (253) 414-3937.";

async function readPayload(request: Request): Promise<EstimatePayload | null> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    try {
      const json: unknown = await request.json();
      if (!json || typeof json !== "object") return null;
      return estimateFromFields(json as Record<string, unknown>);
    } catch {
      return null;
    }
  }

  try {
    return estimateFromFormData(await request.formData());
  } catch {
    return null;
  }
}

function jsonResult(result: EstimateResult, status: number) {
  return NextResponse.json(result, { status });
}

function formRedirect(request: Request, sent: boolean, error?: string) {
  const url = new URL("/contact", request.url);
  if (sent) url.searchParams.set("sent", "1");
  if (error) url.searchParams.set("error", error);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  const payload = await readPayload(request);
  const redirect = wantsHtmlRedirect(request);

  if (!payload) {
    if (redirect) return formRedirect(request, false, "invalid");
    return jsonResult({ ok: false, error: "Invalid request." }, 400);
  }

  const outcome = await sendEstimateEmail(payload);

  if (outcome.ok) {
    if (redirect) return formRedirect(request, true);
    return jsonResult({ ok: true }, 200);
  }

  const publicError =
    outcome.error === "email_unconfigured" ? CALL_US : outcome.error;

  if (redirect) return formRedirect(request, false, "send");
  return jsonResult({ ok: false, error: publicError }, outcome.status);
}
