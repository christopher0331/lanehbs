"use server";

import type { EstimatePayload, EstimateResult } from "@/lib/contact";
import { sendEstimateEmail } from "@/lib/sendEstimateEmail";

const CALL_US = "Could not send your request. Please call (253) 414-3937.";

export async function submitEstimateAction(
  input: EstimatePayload
): Promise<EstimateResult> {
  const outcome = await sendEstimateEmail(input);
  if (outcome.ok) return { ok: true };
  if (outcome.error === "email_unconfigured") return { ok: false, error: CALL_US };
  return { ok: false, error: outcome.error };
}
