"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SHOWN = { opacity: 1, y: 0 };
const SHARP = { filter: "blur(0px)", opacity: 1 };

/**
 * Splits a plain-text element into word spans so each can sharpen on its own.
 * Anything containing markup is left alone — the split would flatten it.
 */
function splitWords(el: HTMLElement) {
  if (el.querySelector(".word")) return true;
  const text = el.textContent ?? "";
  if (!text.trim()) return false;
  if (el.children.length > 0) return false;

  el.textContent = "";
  text.split(/(\s+)/).forEach((chunk) => {
    if (!chunk.trim()) {
      el.appendChild(document.createTextNode(chunk));
      return;
    }
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = chunk;
    el.appendChild(span);
  });
  return true;
}

export default function Reveal() {
  useEffect(() => {
    const blurBlocks = gsap.utils.toArray<HTMLElement>("[data-words]");
    const proseBlocks = gsap.utils.toArray<HTMLElement>("[data-blur]");
    const lifts = gsap.utils.toArray<HTMLElement>(".reveal");
    const panels = gsap.utils.toArray<HTMLElement>("[data-expand]");
    const wipes = gsap.utils.toArray<HTMLElement>("[data-wipe]");
    const heroMedia = gsap.utils.toArray<HTMLElement>("[data-hero-media]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(lifts, SHOWN);
      gsap.set(".word", SHARP);
      gsap.set(heroMedia, { filter: "none", opacity: 1 });
      panels.forEach((p) => p.classList.remove("expand"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    proseBlocks.forEach(splitWords);

    const textBlocks = [...blurBlocks, ...proseBlocks];
    const introHeading = textBlocks.find((block) => {
      const rect = block.getBoundingClientRect();
      return (
        block.tagName === "H1" &&
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > 0
      );
    });
    const nearIntro = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return Boolean(
        introHeading &&
          rect.top < window.innerHeight * 1.05 &&
          rect.bottom > 0,
      );
    };
    const introLifts = new Set(lifts.filter(nearIntro));
    const introWipes = new Set(wipes.filter(nearIntro));

    const ctx = gsap.context(() => {
      heroMedia.forEach((media) => {
        gsap.fromTo(
          media,
          { filter: "blur(12px)", opacity: 0.25 },
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
          },
        );
      });

      // 1. Headlines and body copy sharpen word by word, left to right.
      textBlocks.forEach((block) => {
        const words = block.querySelectorAll(".word");
        if (!words.length) return;

        const fast = block.hasAttribute("data-blur");
        const rect = block.getBoundingClientRect();
        const pageIntro = block === introHeading;
        const supportingIntro = nearIntro(block) && !pageIntro;

        // Every page hero gets the signature landing animation that originally
        // belonged only to SweepHero: soft words resolve left to right while
        // settling by a few pixels. It plays once on page entry, not on scroll.
        if (pageIntro) {
          gsap.fromTo(
            words,
            { filter: "blur(12px)", opacity: 0.04, y: 10 },
            {
              ...SHARP,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              stagger: 0.055,
              delay: 0.18,
              onComplete: () => gsap.set(words, { willChange: "auto" }),
            },
          );
          return;
        }

        if (supportingIntro) {
          const beforeHeading = rect.top < (introHeading?.getBoundingClientRect().top ?? 0);
          gsap.fromTo(
            words,
            { filter: "blur(9px)", opacity: 0.04, y: 6 },
            {
              ...SHARP,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.018,
              delay: beforeHeading ? 0.05 : 0.62,
              onComplete: () => gsap.set(words, { willChange: "auto" }),
            },
          );
          return;
        }

        if (rect.top < window.innerHeight * 0.85) {
          gsap.set(words, SHARP);
          return;
        }

        ScrollTrigger.create({
          trigger: block,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(words, {
              ...SHARP,
              duration: fast ? 0.5 : 0.75,
              ease: "power2.out",
              stagger: fast ? 0.012 : 0.045,
              onComplete: () => gsap.set(words, { willChange: "auto" }),
            }),
        });
      });

      // 2. Coloured sections grow from a floating, rounded panel to full bleed.
      //    Scrubbing makes the expansion feel physically attached to the page.
      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            "--expand-x": "12%",
            "--expand-y": "2.5rem",
            "--expand-round": "3rem",
          },
          {
            "--expand-x": "0%",
            "--expand-y": "0rem",
            "--expand-round": "0rem",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 96%",
              end: "top 42%",
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      // 3. Each item owns its reveal. Grouping every sibling under one trigger
      //    made long tables and masonry reviews finish before later rows/cards
      //    had entered the viewport.
      [...introLifts].forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            ...SHOWN,
            duration: 0.9,
            delay: 0.42 + index * 0.08,
            ease: "power3.out",
          },
        );
      });

      lifts.forEach((el) => {
        if (introLifts.has(el)) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          gsap.set(el, SHOWN);
          return;
        }

        gsap.to(el, {
          ...SHOWN,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      });

      // 4. Images wipe open in the direction of the product's sweep. The image
      //    settles from a restrained scale at the same time for added depth.
      introWipes.forEach((el) => {
        const image = el.querySelector("img");
        const timeline = gsap.timeline({ delay: 0.28 });
        timeline.fromTo(
          el,
          { "--wipe": "100%" },
          { "--wipe": "0%", duration: 1.15, ease: "power3.inOut" },
          0,
        );
        if (image) {
          timeline.fromTo(
            image,
            { scale: 1.06 },
            { scale: 1, duration: 1.2, ease: "power2.out" },
            0,
          );
        }
      });

      wipes.forEach((el) => {
        if (introWipes.has(el)) return;
        const image = el.querySelector("img");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 38%",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        });

        timeline.fromTo(
          el,
          { "--wipe": "100%" },
          {
            "--wipe": "0%",
            ease: "power2.inOut",
          },
          0,
        );

        if (image) {
          timeline.fromTo(
            image,
            { scale: 1.08, yPercent: -1.5 },
            { scale: 1, yPercent: 0, ease: "power2.out" },
            0,
          );
        }
      });

      // 5. Hairlines draw across as you reach them.
      gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((el) => {
        gsap.fromTo(
          el,
          { "--sweep": "0%" },
          {
            "--sweep": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 45%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      // 6. Review photographs and medals keep a hint of movement after their
      //    entrance. The range is intentionally small to avoid a template feel.
      gsap.utils
        .toArray<HTMLElement>("figure.reveal img, [data-award] img")
        .forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -2.5 },
            {
              yPercent: 2.5,
              ease: "none",
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        });
    });

    // Refresh once every effect exists and again when fonts/media settle.
    const refresh = () => ScrollTrigger.refresh();
    const frame = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
