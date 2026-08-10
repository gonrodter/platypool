"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

/** Heights are set per logo so they read as the same optical size, not the
 *  same pixel height — a wordmark and a square mark never balance at parity. */
const press = [
  { src: "/media/press-ouestfrance.webp", alt: "Ouest-France", h: "h-7" },
  { src: "/media/press-m6.webp", alt: "M6", h: "h-10" },
  { src: "/media/press-france3.webp", alt: "France 3", h: "h-10" },
  { src: "/media/press-nicematin.webp", alt: "Nice-Matin", h: "h-6" },
  {
    src: "/media/press-activitepiscine.webp",
    alt: "L'activité Piscine",
    h: "h-9",
  },
  {
    src: "/media/press-maisonjardin.webp",
    alt: "Maison & Jardin magazine",
    h: "h-12",
  },
  { src: "/media/press-guidepiscine.webp", alt: "Guide Piscine", h: "h-12" },
];

/**
 * Two identical tracks side by side; the pair slides one full track width and
 * resets, so the loop never shows a seam.
 */
export default function PressMarquee() {
  const track = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : pathname === "/es" || pathname.startsWith("/es/") ? "es" : "fr";

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 38,
      ease: "none",
      repeat: -1,
    });

    const pause = () => tween.timeScale(0.15);
    const resume = () => tween.timeScale(1);
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);

    return () => {
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      tween.kill();
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      role="list"
      aria-label={locale === "en" ? "Press and magazines" : locale === "es" ? "Prensa y revistas" : "Presse et magazines"}
    >
      <div ref={track} className="flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {press.map((logo) => (
              <div
                key={`${copy}-${logo.alt}`}
                role={copy === 0 ? "listitem" : undefined}
                className="flex w-[clamp(9rem,16vw,14rem)] shrink-0 items-center justify-center px-6"
              >
                <Image
                  src={logo.src}
                  alt={copy === 0 ? logo.alt : ""}
                  width={300}
                  height={160}
                  className={`${logo.h} w-auto opacity-45 grayscale transition-opacity duration-300 hover:opacity-80`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
