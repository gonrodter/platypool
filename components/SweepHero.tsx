"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Words from "@/components/Words";

const FRAME_COUNT = 80;
const frameSrc = (i: number) =>
  `/frames/f_${String(i + 1).padStart(3, "0")}.webp`;

/**
 * The sweep. A 2-metre net crossing a pool, bound to the scrollbar.
 *
 * Frames are painted to a canvas rather than scrubbed on a <video>: iOS Safari
 * will not seek a video frame-accurately. Three captions hand off across the
 * pin so the footage and the argument advance together.
 */
export default function SweepHero() {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cnv = canvas.current;
    const sec = section.current;
    if (!cnv || !sec) return;

    const ctx = cnv.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frames: HTMLImageElement[] = [];
    const loaded = new Set<number>();
    let current = -1;
    let disposed = false;

    const paint = (index: number) => {
      const img = frames[index];
      if (!img || !loaded.has(index)) return;
      current = index;

      const { width: cw, height: ch } = cnv;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const nearestLoaded = (index: number) => {
      if (loaded.has(index)) return index;
      for (let d = 1; d < FRAME_COUNT; d++) {
        if (loaded.has(index - d)) return index - d;
        if (loaded.has(index + d)) return index + d;
      }
      return -1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = cnv.getBoundingClientRect();
      cnv.width = Math.round(rect.width * dpr);
      cnv.height = Math.round(rect.height * dpr);
      const fallback = nearestLoaded(current >= 0 ? current : 0);
      if (fallback >= 0) paint(fallback);
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = () => {
        if (disposed) return;
        loaded.add(i);
        if (i === 0) {
          resize();
          setReady(true);
        }
        if (i === current) paint(i);
      };
      frames[i] = img;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(cnv);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(sec.querySelectorAll(".word"), {
        filter: "blur(0px)",
        opacity: 1,
      });
      return () => ro.disconnect();
    }

    gsap.registerPlugin(ScrollTrigger);

    const gctx = gsap.context(() => {
      // The opening line sharpens word by word as the page lands.
      gsap.to("[data-act='1'] .word", {
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
        stagger: 0.055,
        delay: 0.2,
      });

      // Act one hands off to act two, act two to act three. Timeline units are
      // fractions of the pinned scroll, so the whole thing runs 0 → 1.
      const timeline = gsap
        .timeline({ paused: true, defaults: { ease: "none" } })
        .to("[data-act='1']", { autoAlpha: 0, y: -40, duration: 0.1 }, 0.22)
        .fromTo(
          "[data-act='2']",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.1 },
          0.32,
        )
        .to("[data-act='2']", { autoAlpha: 0, y: -40, duration: 0.1 }, 0.58)
        .fromTo(
          "[data-act='3']",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.1 },
          0.68,
        )
        .set({}, {}, 1);

      const pin = ScrollTrigger.create({
        trigger: sec,
        start: "top top",
        end: "+=400%",
        pin: true,
        // This pin changes the document by four viewports. It must be measured
        // before every reveal below it during each refresh, otherwise their
        // start positions are all four viewports too early.
        refreshPriority: 10,
        scrub: 0.4,
        animation: timeline,
        onUpdate: (self) => {
          const index = Math.min(
            FRAME_COUNT - 1,
            Math.round(self.progress * (FRAME_COUNT - 1)),
          );
          const drawable = nearestLoaded(index);
          if (drawable >= 0 && drawable !== current) paint(drawable);
          line.current?.style.setProperty(
            "--sweep",
            `${(self.progress * 100).toFixed(2)}%`,
          );
        },
      });

      void pin;
    }, sec);

    // Pinning the hero inserts four viewports of spacer beneath it. Every
    // trigger further down the page was measured before that existed, so they
    // all have to be re-measured once — and again when fonts and images land.
    const refresh = () => ScrollTrigger.refresh();
    const frame = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", refresh);
      ro.disconnect();
      gctx.revert();
    };
  }, []);

  return (
    <section
      ref={section}
      className="relative h-svh w-full overflow-hidden bg-deep"
      aria-label="Platypool en action"
    >
      <canvas
        ref={canvas}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Legibility scrims: one along the bottom, one under the type column. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,24,30,0.45)_0%,rgba(6,24,30,0.04)_30%,rgba(6,24,30,0.12)_58%,rgba(6,24,30,0.82)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(6,24,30,0.72)_0%,rgba(6,24,30,0.42)_38%,rgba(6,24,30,0.05)_68%,rgba(6,24,30,0)_100%)]"
      />

      <div className="relative flex h-full flex-col justify-between px-5 pt-24 pb-6 text-paper sm:px-8 sm:pt-28 sm:pb-8">
        <p className="meta max-w-[15rem] text-paper/75">
          Mougins, Côte d&apos;Azur — brevet FR, EU &amp; US
        </p>

        {/* The three acts stack; only one is visible at a time. */}
        <div className="relative">
          <div data-act="1" className="max-w-4xl">
            <Words
              as="h1"
              animate={false}
              className="display text-[clamp(2.5rem,7.5vw,6rem)]"
              text="Vingt minutes de corvée, / réduites à *une*."
            />
            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-paper/80">
              Vous la posez sur l&apos;eau, vous tirez sur une corde, vous
              marchez. C&apos;est tout ce qu&apos;il y a à faire.
            </p>
          </div>

          <div
            data-act="2"
            className="invisible absolute inset-0 max-w-4xl opacity-0"
          >
            <h2 className="display text-[clamp(2.5rem,7.5vw,6rem)]">
              Deux mètres de filet.
              <br />
              Un seul <span className="accent">passage</span>.
            </h2>
            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-paper/80">
              Une épuisette classique fait 30 cm de large. Celle-ci balaie toute
              la largeur du bassin d&apos;un coup, et emporte jusqu&apos;à 7 kg
              de feuilles.
            </p>
          </div>

          <div
            data-act="3"
            className="invisible absolute inset-0 max-w-4xl opacity-0"
          >
            <h2 className="display text-[clamp(2.5rem,7.5vw,6rem)]">
              Et la ligne d&apos;eau,
              <br />
              en même <span className="accent">temps</span>.
            </h2>
            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-paper/80">
              Les brosses des extrémités restent plaquées contre la paroi. Vous
              ramassez et vous frottez dans le même geste.
            </p>
          </div>
        </div>

        <div>
          <div
            ref={line}
            className="waterline mb-4 bg-paper/25 [--sweep:0%]"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <p className="meta text-paper/70">
              {ready
                ? "Faites défiler — la piscine se nettoie"
                : "Chargement de la séquence"}
            </p>
            <a
              href="#acheter"
              className="group inline-flex items-baseline gap-3 border-b border-paper/40 pb-1 transition-colors hover:border-paper"
            >
              <span className="text-[1.05rem]">Acheter — 69 €</span>
              <span className="meta text-paper/60">
                Livraison France &amp; Europe
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
