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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(lifts, SHOWN);
      gsap.set(".word", SHARP);
      panels.forEach((p) => p.classList.remove("expand"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    proseBlocks.forEach(splitWords);

    const ctx = gsap.context(() => {
      // 1. Headlines and body copy sharpen word by word, left to right.
      [...blurBlocks, ...proseBlocks].forEach((block) => {
        const words = block.querySelectorAll(".word");
        if (!words.length) return;

        const fast = block.hasAttribute("data-blur");

        if (block.getBoundingClientRect().top < window.innerHeight * 0.85) {
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
      lifts.forEach((el) => {
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
      gsap.utils.toArray<HTMLElement>("[data-wipe]").forEach((el) => {
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

    // Refresh once every effect exists. SweepHero has a higher refreshPriority,
    // so its four-viewport pin is always accounted for before these triggers.
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
