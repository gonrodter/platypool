import { headers } from "next/headers";
import type { Metadata } from "next";

export const locales = ["es", "fr"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "fr";
}

export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-platypool-locale");
  return isLocale(value) ? value : "es";
}

export function localizedPath(locale: Locale, path: string) {
  if (!path.startsWith("/")) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export async function localizedMetadata(fr: Metadata, es: Metadata): Promise<Metadata> {
  return (await getLocale()) === "es" ? es : fr;
}
