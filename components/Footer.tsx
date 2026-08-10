import Image from "next/image";
import Link from "next/link";

const shop = [
  ["L'épuisette XXL", "/products/epuisette-xxl"],
  ["Filet de rechange", "/products/filet"],
  ["Livraison", "/pages/livraison"],
  ["Conseils piscine", "/blogs/infos"],
];

const company = [
  ["Notre histoire", "/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable"],
  ["Contact", "/pages/contact"],
  ["Rétractation", "/pages/formulaire-de-retractation"],
  ["Nos politiques", "/pages/nos-politiques"],
];

export default function Footer() {
  return (
    <footer className="bg-deep px-5 py-16 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" aria-label="Platypool — accueil">
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
            <p className="meta mb-3 text-paper/35">Boutique</p>
            <ul className="space-y-1.5">
              {shop.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-paper">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <p className="meta mb-3 text-paper/35">Platypool</p>
            <ul className="space-y-1.5">
              {company.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-paper">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <p className="meta mb-3 text-paper/35">Suivre</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.instagram.com/platypool/" className="hover:text-paper">Instagram</a>
              <a href="https://www.facebook.com/PlatypoolFrance/" className="hover:text-paper">Facebook</a>
              <a href="https://www.youtube.com/@gwenaellebertrand3807" className="hover:text-paper">YouTube</a>
            </div>
            <p className="mt-5 text-paper/35">
              © 2026 Platypool — conçue et fabriquée en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
