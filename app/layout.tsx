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
  const es = (await getLocale()) === "es";
  const title = es ? "Platypool — el recogehojas XXL que limpia la piscina en 1 minuto" : "Platypool — l'épuisette XXL qui nettoie la piscine en 1 minute";
  const description = es ? "Un recogehojas flotante de 2 metros que barre la superficie y frota la línea de agua en una sola pasada. Patentado y fabricado en Francia." : "Une épuisette de 2 mètres qui flotte, ratisse la surface et frotte la ligne d'eau en un seul passage. Brevetée et fabriquée en France.";
  return { metadataBase: new URL("https://www.platypool.com"), title, description, openGraph: { title, description, locale: es ? "es_ES" : "fr_FR", type: "website" } };
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
