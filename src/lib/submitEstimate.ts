import { submitEstimateAction } from "@/lib/submitEstimateAction";
import {
  normalizeEstimate,
  validateEstimate,
  type EstimatePayload,
  type EstimateResult,
} from "@/lib/contact";

async function submitViaApi(data: EstimatePayload): Promise<EstimateResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const payload = (await response.json()) as EstimateResult;
    if (typeof payload?.ok === "boolean") return payload;
  } catch {
    // Non-JSON (for example a 404 HTML page) falls through to the status check.
  }

  if (response.ok) return { ok: true };
  return { ok: false, error: "Could not send your request. Please call us." };
}

export async function submitEstimate(input: EstimatePayload): Promise<EstimateResult> {
  const data = normalizeEstimate({
    ...input,
    page: input.page || (typeof window !== "undefined" ? window.location.href : ""),
  });

  const invalid = validateEstimate(data);
  if (invalid) return { ok: false, error: invalid };

  try {
    return await submitEstimateAction(data);
  } catch {
    return submitViaApi(data);
  }
}
