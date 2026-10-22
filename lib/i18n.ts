export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export const hasLocale = (locale: string): locale is Locale => (locales as readonly string[]).includes(locale);

/** Default locale lives at `/`, others under `/<locale>`. */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);
