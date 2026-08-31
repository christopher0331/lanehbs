export const ESTIMATE_FORM_NAME = "estimate";

export type EstimatePayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  page?: string;
  company?: string;
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

export function encodeFormBody(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}
