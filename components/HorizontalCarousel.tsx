"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  children: ReactNode;
  ariaLabel: string;
  initialTotal: number;
  locale: Locale;
  wrapperClassName?: string;
  scrollerClassName: string;
  indicatorClassName?: string;
};

export default function HorizontalCarousel({
  children,
  ariaLabel,
  initialTotal,
  locale,
  wrapperClassName = "",
  scrollerClassName,
  indicatorClassName = "",
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(initialTotal);

  const updatePosition = useCallback(() => {
    const element = scroller.current;
    if (!element) return;

    const slides = Array.from(element.children).filter(
      (slide) => (slide as HTMLElement).offsetWidth > 0,
    ) as HTMLElement[];
    if (!slides.length) return;

    const center = element.scrollLeft + element.clientWidth / 2;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const nextDistance = Math.abs(slideCenter - center);
      if (nextDistance < distance) {
        distance = nextDistance;
        closest = index;
      }
    });

    setCurrent(closest);
    setTotal(slides.length);
  }, []);

  useEffect(() => {
    const element = scroller.current;
    if (!element) return;

    let animationFrame = 0;
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updatePosition);
    };
    const resizeObserver = new ResizeObserver(scheduleUpdate);

    updatePosition();
    element.addEventListener("scroll", scheduleUpdate, { passive: true });
    resizeObserver.observe(element);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      element.removeEventListener("scroll", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [updatePosition]);

  return (
    <div className={wrapperClassName}>
      <div
        ref={scroller}
        className={scrollerClassName}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {children}
      </div>
      <div className={`mt-4 flex items-center gap-3 ${indicatorClassName}`}>
        <span className="meta min-w-10 text-ink/45">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 overflow-hidden bg-ink/15" aria-hidden="true">
          <span
            className="block h-full origin-left bg-aqua-deep transition-[width] duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </span>
        <span className="meta whitespace-nowrap text-ink/45">
          {locale === "en" ? "Swipe" : locale === "es" ? "Desliza" : "Faites glisser"} →
        </span>
      </div>
    </div>
  );
}
