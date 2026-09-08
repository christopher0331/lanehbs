export const ESTIMATE_FORM_NAME = "estimate";
export const ESTIMATE_HONEYPOT_FIELD = "bot_check";

export type EstimatePayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  page?: string;
  company?: string;
  bot_check?: string;
};

export type EstimateResult = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEstimate(input: EstimatePayload): EstimatePayload {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    service: input.service.trim(),
    message: input.message.trim(),
    page: input.page?.trim() || "",
    company: input.company?.trim() || "",
    bot_check: input.bot_check?.trim() || "",
  };
}

export function validateEstimate(input: EstimatePayload): string | null {
  if (!input.name || input.name.length > 100) return "Please enter your name.";
  if (!input.email || input.email.length > 255 || !EMAIL_RE.test(input.email)) {
    return "Please enter a valid email address.";
  }
  if (input.phone.length > 30) return "Please enter a valid phone number.";
  if (input.service.length > 80) return "Please choose a service.";
  if (input.message.length > 2000) return "Please shorten your project details.";
  return null;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function estimateFromFields(fields: Record<string, unknown>): EstimatePayload {
  return {
    name: fieldString(fields.name),
    email: fieldString(fields.email),
    phone: fieldString(fields.phone),
    service: fieldString(fields.service),
    message: fieldString(fields.message),
    page: fieldString(fields.page),
    company: fieldString(fields.company),
    bot_check: fieldString(fields.bot_check),
  };
}

export function isEstimateHoneypot(input: EstimatePayload): boolean {
  return Boolean(input.company?.trim() || input.bot_check?.trim());
}

export function estimateFromFormData(formData: FormData): EstimatePayload {
  const fields: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") fields[key] = value;
  }
  return estimateFromFields(fields);
}

export function wantsHtmlRedirect(request: Request): boolean {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return false;
  return (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  );
}
