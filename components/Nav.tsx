"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/products/epuisette-xxl", label: "L'épuisette" },
  {
    href: "/pages/lepuisette-platypool-fabriquee-en-france-impact-social-et-eco-responsable",
    label: "L'histoire",
  },
  { href: "/blogs/infos", label: "Conseils" },
  { href: "/pages/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [pastHero, setPastHero] = useState(false);
  const solid = !home || pastHero;

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
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        {/* Two files rather than a filter: the wave in the A must keep its
            colour on light ground and disappear into white on the video. */}
        <a href={home ? "#top" : "/"} className="relative block h-4 w-[9.5rem] sm:h-5 sm:w-[11.5rem]">
          <span className="sr-only">Platypool — accueil</span>
          <Image
            src="/media/logo-platypool.webp"
            alt=""
            fill
            priority
            sizes="184px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/media/logo-platypool-light.webp"
            alt=""
            fill
            priority
            sizes="184px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="meta hover:opacity-60">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/products/epuisette-xxl"
          className={`meta rounded-full px-4 py-2 transition-colors ${
            solid
              ? "bg-aqua text-ink hover:bg-ink hover:text-paper"
              : "bg-paper/15 text-paper backdrop-blur-sm hover:bg-paper/30"
          }`}
        >
          Acheter · 69 €
        </a>
      </div>
      <div
        className={`h-px transition-colors duration-500 ${
          solid ? "bg-ink/12" : "bg-transparent"
        }`}
      />
    </header>
  );
}
