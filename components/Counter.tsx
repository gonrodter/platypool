"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  value: number;
  /** Decimal places, French style (4,9). */
  decimals?: number;
  duration?: number;
};

const format = (n: number, decimals: number) =>
  new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);

/**
 * Counts up to its value when scrolled into view. The final value is what
 * renders on the server, so the number is correct without JavaScript and the
 * column never reflows mid-count.
 */
export default function Counter({ value, decimals = 0, duration = 1.6 }: Props) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const counter = { n: 0 };
    const write = () => {
      node.textContent = format(counter.n, decimals);
    };

    const ctx = gsap.context(() => {
      const run = () =>
        gsap.to(counter, {
          n: value,
          duration,
          ease: "power2.out",
          onUpdate: write,
        });

      // Already on screen at mount — count straight away.
      if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
        write();
        run();
        return;
      }

      write();
      ScrollTrigger.create({
        trigger: node,
        start: "top 90%",
        once: true,
        onEnter: run,
      });
    }, node);

    return () => {
      ctx.revert();
      node.textContent = format(value, decimals);
    };
  }, [value, decimals, duration]);

  return (
    <span ref={el} className="tabular-nums">
      {format(value, decimals)}
    </span>
  );
}
