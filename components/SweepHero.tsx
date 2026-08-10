import Words from "@/components/Words";

/**
 * Full-bleed product film. Native video playback keeps the page free-flowing:
 * there is no pinned spacer and scrolling never controls the playhead.
 */
export default function SweepHero() {
  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-deep"
      aria-label="Platypool en action"
    >
      <video
        className="absolute inset-0 h-full w-full -translate-y-[5%] scale-[1.18] object-cover sm:-translate-x-[10%] sm:-translate-y-[8%] sm:scale-[1.35]"
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

      <div className="relative flex h-full flex-col justify-between px-5 pt-24 pb-6 text-paper sm:px-8 sm:pt-28 sm:pb-8">
        <p className="meta max-w-[15rem] text-paper/75">
          Mougins, Côte d&apos;Azur — brevet FR, EU &amp; US
        </p>

        <div className="max-w-4xl">
          <Words
            as="h1"
            className="display text-[clamp(2.5rem,7.5vw,6rem)]"
            text="Vingt minutes de corvée, / réduites à *une*."
          />
          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-paper/80">
            Vous la posez sur l&apos;eau, vous tirez sur une corde, vous marchez.
            C&apos;est tout ce qu&apos;il y a à faire.
          </p>
        </div>

        <div>
          <div
            className="waterline mb-4 bg-paper/25 [--sweep:100%]"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <p className="meta text-paper/70">Platypool en action · lecture en boucle</p>
            <a
              href="#acheter"
              className="group inline-flex items-baseline gap-3 border-b border-paper/40 pb-1 transition-colors hover:border-paper"
            >
              <span className="text-[1.05rem]">Acheter — 69 €</span>
              <span className="meta text-paper/55">Livraison France &amp; Europe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
