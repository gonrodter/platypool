import type { Metadata } from "next";
import { Bodoni_Moda, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { getLocale } from "@/lib/i18n";

// Bodoni is here for one job only: the single italic word inside a headline.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["400"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = {
    es: { title: "Platypool — el recogehojas XXL que limpia la piscina en 1 minuto", description: "Un recogehojas flotante de 2 metros que barre la superficie y frota la línea de agua en una sola pasada. Patentado y fabricado en Francia.", openGraphLocale: "es_ES" },
    fr: { title: "Platypool — l'épuisette XXL qui nettoie la piscine en 1 minute", description: "Une épuisette de 2 mètres qui flotte, ratisse la surface et frotte la ligne d'eau en un seul passage. Brevetée et fabriquée en France.", openGraphLocale: "fr_FR" },
    en: { title: "Platypool — the XXL pool skimmer that cleans in 1 minute", description: "A 2-metre floating pool skimmer that sweeps the surface and scrubs the waterline in a single pass. Patented and made in France.", openGraphLocale: "en_GB" },
  }[locale];
  return { metadataBase: new URL("https://www.platypool.com"), title: copy.title, description: copy.description, openGraph: { title: copy.title, description: copy.description, locale: copy.openGraphLocale, type: "website" } };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${bodoni.variable} ${figtree.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
