export type Locale = "en" | "ar" | "fr"

export const locales: Locale[] = ["en", "ar", "fr"]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ar: "🇸🇦",
  fr: "🇫🇷",
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar"
}
