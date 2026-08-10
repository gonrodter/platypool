import type { Metadata } from "next";
import { Bodoni_Moda, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.platypool.com"),
  title: "Platypool — l'épuisette XXL qui nettoie la piscine en 1 minute",
  description:
    "Une épuisette de 2 mètres qui flotte, ratisse la surface et frotte la ligne d'eau en un seul passage. Brevetée, fabriquée en France, 2 médailles au Concours Lépine.",
  openGraph: {
    title: "Platypool — l'épuisette XXL qui nettoie la piscine en 1 minute",
    description:
      "2 mètres de filet, 800 g, 2-en-1 surface et ligne d'eau. Inventée et fabriquée en France.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bodoni.variable} ${figtree.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
