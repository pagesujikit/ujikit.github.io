import "server-only";

import type id from "@/dictionaries/id.json";
import type { Locale } from "@/lib/i18n";

// id.json is the source of truth; en.json must have the same shape
export type Dictionary = typeof id;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  id: () => import("@/dictionaries/id.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
