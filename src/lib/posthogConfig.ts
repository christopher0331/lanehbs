/**
 * Lane HBS lives in the billed Reactiv Labs PostHog
 * organization as its own project. Do not use the MyFence token.
 */
export const SITE_ID = String(process.env.NEXT_PUBLIC_SITE_ID ?? "lanehbs").trim() || "lanehbs";

const LANEHBS_PROJECT_KEY = "phc_DpfhFQoWJ78j59E9ziLSjQC5nq3G2E5H3wt4bSmGd29u";

export const POSTHOG_KEY =
  String(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "").trim() || LANEHBS_PROJECT_KEY;

export const POSTHOG_HOST = String(process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com").trim();

export function posthogSuperProperties(): Record<string, string> {
  return {
    client: SITE_ID,
    site: SITE_ID,
  };
}

export type PosthogQueueItem = { event: string; properties?: Record<string, unknown> };

declare global {
  interface Window {
    __phEventQueue?: PosthogQueueItem[];
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      register?: (properties: Record<string, unknown>) => void;
    };
  }
}
