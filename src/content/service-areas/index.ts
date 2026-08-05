import type { ServiceAreaArticle } from "@/content/service-areas/types";

const articles: Record<string, () => Promise<{ default: ServiceAreaArticle }>> = {
  "lake-tapps": () => import("./lake-tapps"),
  enumclaw: () => import("./enumclaw"),
  "maple-valley": () => import("./maple-valley"),
  covington: () => import("./covington"),
};

export async function getServiceAreaArticle(
  slug: string,
): Promise<ServiceAreaArticle | null> {
  const loader = articles[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}
