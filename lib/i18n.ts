import { headers } from "next/headers";
import type { Metadata } from "next";

export const locales = ["es", "fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "fr" || value === "en";
}

export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-platypool-locale");
  return isLocale(value) ? value : defaultLocale;
}

export function localizedPath(locale: Locale, path: string) {
  if (!path.startsWith("/")) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function byLocale<T>(locale: Locale, copy: Record<Locale, T>): T {
  return copy[locale];
}

export async function localizedMetadata(fr: Metadata, es: Metadata, en: Metadata): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "en" ? en : locale === "es" ? es : fr;
}
