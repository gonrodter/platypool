import Words from "@/components/Words";
import type { Locale } from "@/lib/i18n";

/**
 * Full-bleed product film. Native video playback keeps the page free-flowing:
 * there is no pinned spacer and scrolling never controls the playhead.
 */
export default function SweepHero({ locale = "fr" }: { locale?: Locale }) {
  const t = {
    es: { label: "Platypool en acción", title: "Veinte minutos de trabajo / reducidos a *uno*", copy: "La colocas sobre el agua, tiras de una cuerda y caminas. Eso es todo.", buy: "Comprar", shipping: "Envío a Francia y Europa" },
    fr: { label: "Platypool en action", title: "Vingt minutes de corvée, / réduites à *une*", copy: "Vous la posez sur l'eau, vous tirez sur une corde, vous marchez. C'est tout ce qu'il y a à faire.", buy: "Acheter", shipping: "Livraison France & Europe" },
    en: { label: "Platypool in action", title: "Twenty minutes of work / reduced to *one*", copy: "Place it on the water, pull the rope and walk. That is all it takes.", buy: "Buy", shipping: "Delivery across France and Europe" },
  }[locale];
  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-deep"
      aria-label={t.label}
    >
      <video
        data-hero-media
        className="absolute inset-0 h-full w-full -translate-y-[5%] scale-[1.18] object-cover object-center sm:-translate-y-[8%] sm:scale-[1.35]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/media/hero-loop.m4v" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,24,30,0.45)_0%,rgba(6,24,30,0.04)_30%,rgba(6,24,30,0.12)_58%,rgba(6,24,30,0.82)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(6,24,30,0.72)_0%,rgba(6,24,30,0.42)_38%,rgba(6,24,30,0.05)_68%,rgba(6,24,30,0)_100%)]"
      />

      <div className="relative grid h-full grid-rows-[1fr_auto_1fr] px-5 pt-24 pb-6 text-paper sm:px-8 sm:pt-28 sm:pb-8">
        <div className="row-start-2 max-w-4xl">
          <Words
            as="h1"
            className="display text-[clamp(2.5rem,7.5vw,6rem)]"
            text={t.title}
          />
          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-paper/80" data-blur>
            {t.copy}
          </p>
        </div>

        <div className="reveal row-start-3 self-end">
          <div className="flex flex-wrap items-end justify-end gap-x-8 gap-y-3">
            <a
              href="#acheter"
              className="group inline-flex items-baseline gap-3 border-b border-paper/40 pb-1 transition-colors hover:border-paper"
            >
              <span className="text-[1.05rem]">{t.buy} — 69 €</span>
              <span className="meta text-paper/55">{t.shipping}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
