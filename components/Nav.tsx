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
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const pageContent = document.querySelectorAll("main, footer");
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    pageContent.forEach((element) => element.setAttribute("inert", ""));
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      pageContent.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        menuOpen
          ? "bg-deep text-paper"
          : solid
          ? "bg-paper/85 text-ink backdrop-blur-md"
          : "bg-transparent text-paper"
      }`}
    >
      <div className="relative z-20 flex items-center justify-between px-3 py-4 min-[360px]:px-5 sm:px-8">
        <a href={home ? "#top" : localize("/")} className="relative block h-4 w-[9.5rem] sm:h-5 sm:w-[11.5rem]">
          <span className="sr-only">Platypool — {locale === "es" ? "inicio" : "accueil"}</span>
          <Image
            src="/media/logo-platypool.webp"
            alt=""
            fill
            priority
            sizes="184px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid && !menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/media/logo-platypool-light-tight.webp"
            alt=""
            fill
            priority
            sizes="184px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid && !menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links[locale].map(([href, label]) => (
            <a key={href} href={localize(href)} className="meta hover:opacity-60">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
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

        <button
          type="button"
          className="flex h-9 w-11 flex-col items-end justify-center gap-[6px] lg:hidden"
          aria-label={menuOpen ? (locale === "es" ? "Cerrar menú" : "Fermer le menu") : (locale === "es" ? "Abrir menú" : "Ouvrir le menu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "w-7 translate-y-[3.5px] rotate-45" : "w-7"}`} />
          <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "w-7 -translate-y-[3.5px] -rotate-45" : "w-5"}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-10 overflow-y-auto bg-deep px-5 pb-8 pt-24 text-paper transition-[opacity,visibility] duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-xl flex-col">
          <nav className="flex-1 border-b border-paper/15" aria-label={locale === "es" ? "Menú móvil" : "Menu mobile"}>
            {links[locale].map(([href, label], index) => {
              const active = pathWithoutLocale === href;
              return (
                <a
                  key={href}
                  href={localize(href)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`display flex items-center justify-between border-t border-paper/15 py-4 text-[clamp(2rem,9vw,3.25rem)] transition-[opacity,transform] duration-500 ${
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  } ${active ? "text-aqua" : "text-paper"}`}
                  style={{ transitionDelay: menuOpen ? `${80 + index * 45}ms` : "0ms" }}
                >
                  <span>{label}</span>
                  <span className="text-base font-normal tracking-normal">0{index + 1}</span>
                </a>
              );
            })}
          </nav>

          <div className="grid gap-3 pt-7 min-[430px]:grid-cols-2">
            <a
              href={switchHref}
              onClick={() => setMenuOpen(false)}
              className="pill justify-center border border-paper/25 text-paper hover:bg-paper hover:text-ink"
              aria-label={locale === "es" ? "Cambiar a francés" : "Passer en espagnol"}
            >
              {locale === "es" ? "Français" : "Español"}
            </a>
            <a
              href={localize("/products/epuisette-xxl")}
              onClick={() => setMenuOpen(false)}
              className="pill justify-center bg-aqua text-ink hover:bg-paper"
            >
              {locale === "es" ? "Comprar · 69 €" : "Acheter · 69 €"}
            </a>
          </div>
        </div>
      </div>
      <div
        className={`h-px transition-colors duration-500 ${
          menuOpen ? "bg-paper/15" : solid ? "bg-ink/12" : "bg-transparent"
        }`}
      />
    </header>
  );
}
