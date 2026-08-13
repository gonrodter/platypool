"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const copy = {
  fr: {
    shopTitle: "Boutique",
    follow: "Suivre",
    shop: [["L'épuisette XXL", "/products/epuisette-xxl"], ["Filet de rechange", "/products/filet"], ["Livraison", "/pages/livraison"], ["Conseils piscine", "/blogs/infos"]],
    company: [["Notre histoire", "/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable"], ["Contact", "/pages/contact"], ["Rétractation", "/pages/formulaire-de-retractation"], ["Nos politiques", "/pages/nos-politiques"]],
    made: "conçue et fabriquée en France",
    home: "accueil",
  },
  es: {
    shopTitle: "Tienda",
    follow: "Síguenos",
    shop: [["El recogehojas XXL", "/products/epuisette-xxl"], ["Red de recambio", "/products/filet"], ["Envíos", "/pages/livraison"], ["Consejos de piscina", "/blogs/infos"]],
    company: [["Nuestra historia", "/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable"], ["Contacto", "/pages/contact"], ["Desistimiento", "/pages/formulaire-de-retractation"], ["Políticas", "/pages/nos-politiques"]],
    made: "diseñada y fabricada en Francia",
    home: "inicio",
  },
  en: {
    shopTitle: "Shop",
    follow: "Follow us",
    shop: [["The XXL pool skimmer", "/products/epuisette-xxl"], ["Replacement net", "/products/filet"], ["Delivery", "/pages/livraison"], ["Pool care tips", "/blogs/infos"]],
    company: [["Our story", "/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable"], ["Contact", "/pages/contact"], ["Withdrawal", "/pages/formulaire-de-retractation"], ["Policies", "/pages/nos-politiques"]],
    made: "designed and made in France",
    home: "home",
  },
} as const;

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
  const t = copy[locale];
  const localize = (path: string) => path === "/" ? `/${locale}` : `/${locale}${path}`;

  return (
    <footer className="bg-deep px-5 py-16 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href={localize("/")} aria-label={`Platypool — ${t.home}`}>
          <Image
            src="/media/logo-platypool-light.webp"
            alt="Platypool"
            width={900}
            height={100}
            className="reveal w-full max-w-3xl"
            sizes="(min-width: 768px) 48rem, 92vw"
          />
        </Link>

        <div className="mt-12 grid gap-10 border-t border-paper/15 pt-8 text-[0.9rem] text-paper/60 sm:grid-cols-2 lg:grid-cols-4">
          <div className="reveal">
            <p className="meta mb-3 text-paper/35">Contact</p>
            <a href="mailto:contact@platypool.fr" className="hover:text-paper">
              contact@platypool.fr
            </a>
            <p className="mt-2">ESAT Les Tournesols</p>
            <p>35 rue Denis Papin, 68000 Colmar</p>
          </div>

          <div className="reveal">
            <p className="meta mb-3 text-paper/35">{t.shopTitle}</p>
            <ul className="space-y-1.5">
              {t.shop.map(([label, href]) => (
                <li key={href}>
                  <a href={localize(href)} className="hover:text-paper">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <p className="meta mb-3 text-paper/35">Platypool</p>
            <ul className="space-y-1.5">
              {t.company.map(([label, href]) => (
                <li key={href}>
                  <a href={localize(href)} className="hover:text-paper">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <p className="meta mb-3 text-paper/35">{t.follow}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.instagram.com/platypool/" className="hover:text-paper">Instagram</a>
              <a href="https://www.facebook.com/PlatypoolFrance/" className="hover:text-paper">Facebook</a>
              <a href="https://www.youtube.com/@gwenaellebertrand3807" className="hover:text-paper">YouTube</a>
            </div>
            <p className="mt-5 text-paper/35">
              © 2026 Platypool — {t.made}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
