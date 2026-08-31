import {
  encodeFormBody,
  ESTIMATE_FORM_NAME,
  normalizeEstimate,
  validateEstimate,
  type EstimatePayload,
  type EstimateResult,
} from "@/lib/contact";

async function submitViaApi(data: EstimatePayload): Promise<EstimateResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let payload: EstimateResult = { ok: response.ok };
  try {
    payload = (await response.json()) as EstimateResult;
  } catch {
    payload = { ok: false, error: "Could not send your request. Please call us." };
  }

  return payload;
}

async function submitViaNetlify(data: EstimatePayload): Promise<boolean> {
  const body = encodeFormBody({
    "form-name": ESTIMATE_FORM_NAME,
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    page: data.page ?? "",
    company: data.company ?? "",
  });

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  return response.ok;
}

export async function submitEstimate(input: EstimatePayload): Promise<EstimateResult> {
  const data = normalizeEstimate({
    ...input,
    page: input.page || (typeof window !== "undefined" ? window.location.href : ""),
  });

  const invalid = validateEstimate(data);
  if (invalid) return { ok: false, error: invalid };

  const [api, netlifyOk] = await Promise.all([
    submitViaApi(data).catch(() => ({
      ok: false,
      error: "Could not send your request. Please call us.",
    })),
    submitViaNetlify(data).catch(() => false),
  ]);

  if (api.ok || netlifyOk) return { ok: true };
  if (api.error && api.error !== "email_unconfigured") return api;

  return {
    ok: false,
    error: "Could not send your request. Please call (253) 414-3937.",
  };
}
