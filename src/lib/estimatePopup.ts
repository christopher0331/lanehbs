export const ESTIMATE_POPUP_STORAGE_KEY = "lanehbs.estimatePopup";
export const ESTIMATE_POPUP_DELAY_MS = 8000;
export const ESTIMATE_POPUP_SCROLL_PX = 420;
export const ESTIMATE_POPUP_DISMISS_MS = 7 * 24 * 60 * 60 * 1000;
export const ESTIMATE_POPUP_SUBMITTED_MS = 30 * 24 * 60 * 60 * 1000;

export const ESTIMATE_POPUP_COPY = {
  heading: "Need Help With Your Project?",
  body: "Get a fast response from a local Washington painting and remodeling contractor. Submit your information and we’ll get back to you within 30 minutes during business hours.",
  offer: "Free Estimates for Painting, Remodeling, Decks & Fences",
  button: "Get My Free Estimate",
  footer: "No pressure. Just honest answers and a clear plan for your home.",
  successTitle: "Request sent",
  successBody: "Thanks — Lane will follow up within 30 minutes during business hours (9 AM–5 PM, Monday–Friday).",
} as const;

export type EstimatePopupRecord = {
  dismissedAt?: number;
  submittedAt?: number;
};

export type EstimatePopupStore = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

export function isContactPath(pathname: string): boolean {
  const path = pathname.split("?")[0].split("#")[0];
  return path === "/contact" || path.startsWith("/contact/");
}

export function readEstimatePopupRecord(store: EstimatePopupStore): EstimatePopupRecord {
  try {
    const raw = store.getItem(ESTIMATE_POPUP_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const record = parsed as Record<string, unknown>;
    return {
      dismissedAt: typeof record.dismissedAt === "number" ? record.dismissedAt : undefined,
      submittedAt: typeof record.submittedAt === "number" ? record.submittedAt : undefined,
    };
  } catch {
    return {};
  }
}

export function writeEstimatePopupRecord(
  store: EstimatePopupStore,
  record: EstimatePopupRecord
): void {
  store.setItem(ESTIMATE_POPUP_STORAGE_KEY, JSON.stringify(record));
}

export function shouldSuppressEstimatePopup(
  pathname: string,
  now = Date.now(),
  store?: EstimatePopupStore | null
): boolean {
  if (isContactPath(pathname)) return true;
  if (!store) return false;
  const record = readEstimatePopupRecord(store);
  if (record.submittedAt && now - record.submittedAt < ESTIMATE_POPUP_SUBMITTED_MS) {
    return true;
  }
  if (record.dismissedAt && now - record.dismissedAt < ESTIMATE_POPUP_DISMISS_MS) {
    return true;
  }
  return false;
}

export function markEstimatePopupDismissed(
  store: EstimatePopupStore,
  now = Date.now()
): void {
  writeEstimatePopupRecord(store, {
    ...readEstimatePopupRecord(store),
    dismissedAt: now,
  });
}

export function markEstimatePopupSubmitted(
  store: EstimatePopupStore,
  now = Date.now()
): void {
  writeEstimatePopupRecord(store, {
    ...readEstimatePopupRecord(store),
    submittedAt: now,
  });
}

export function validatePopupPhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) {
    return "Please enter a phone number so we can call you back.";
  }
  return null;
}
