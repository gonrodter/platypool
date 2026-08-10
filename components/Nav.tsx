"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = {
  fr: [
    ["/", "Accueil"],
    ["/products/epuisette-xxl", "L'épuisette"],
    ["/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable", "L'histoire"],
    ["/blogs/infos", "Conseils"],
    ["/pages/contact", "Contact"],
  ],
  es: [
    ["/", "Inicio"],
    ["/products/epuisette-xxl", "El recogehojas"],
    ["/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable", "La historia"],
    ["/blogs/infos", "Consejos"],
    ["/pages/contact", "Contacto"],
  ],
} as const;

export default function Nav() {
  const pathname = usePathname();
  const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "es";
  const pathWithoutLocale = pathname.replace(/^\/(es|fr)(?=\/|$)/, "") || "/";
  const home = pathWithoutLocale === "/";
  const [pastHero, setPastHero] = useState(false);
  const solid = !home || pastHero;
  const localize = (path: string) => path === "/" ? `/${locale}` : `/${locale}${path}`;
  const switchTo = locale === "es" ? "fr" : "es";
  const switchHref = pathWithoutLocale === "/" ? `/${switchTo}` : `/${switchTo}${pathWithoutLocale}`;

  useEffect(() => {
    if (!home) return;

    // The hero is pinned, so measure a sentinel that sits just past it rather
    // than a scroll offset: the pin length must not be encoded twice.
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;

    const check = () => setPastHero(sentinel.getBoundingClientRect().top < 72);
    check();

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [home]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-paper/85 text-ink backdrop-blur-md"
          : "bg-transparent text-paper"
      }`}
    >
      <div className="flex items-center justify-between px-3 py-4 min-[360px]:px-5 sm:px-8">
        <a href={home ? "#top" : localize("/")} className="relative block h-4 w-[9.5rem] sm:h-5 sm:w-[11.5rem]">
          <span className="sr-only">Platypool — {locale === "es" ? "inicio" : "accueil"}</span>
          <Image
            src="/media/logo-platypool.webp"
            alt=""
            fill
            priority
            sizes="184px"
            className="object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links[locale].map(([href, label]) => (
            <a key={href} href={localize(href)} className="meta hover:opacity-60">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className={`meta whitespace-nowrap rounded-full border px-3 py-2 transition-colors ${
              solid
                ? "border-ink/15 hover:bg-ink hover:text-paper"
                : "border-paper/25 bg-paper/10 text-paper backdrop-blur-sm hover:bg-paper/25"
            }`}
            aria-label={locale === "es" ? "Cambiar a francés" : "Passer en espagnol"}
          >
            {locale === "es" ? "ES · FR" : "FR · ES"}
          </a>
          <a
            href={localize("/products/epuisette-xxl")}
            className={`meta whitespace-nowrap rounded-full px-4 py-2 transition-colors ${
              solid
                ? "bg-aqua text-ink hover:bg-ink hover:text-paper"
                : "bg-paper/15 text-paper backdrop-blur-sm hover:bg-paper/30"
            }`}
          >
            {locale === "es" ? "Comprar" : "Acheter"}<span className="max-[359px]:hidden"> · 69 €</span>
          </a>
        </div>
      </div>
      <div
        className={`h-px transition-colors duration-500 ${
          solid ? "bg-ink/12" : "bg-transparent"
        }`}
      />
    </header>
  );
}
