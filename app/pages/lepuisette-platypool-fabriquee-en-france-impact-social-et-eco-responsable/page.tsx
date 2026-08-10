import type { Metadata } from "next";
import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Une histoire familiale — Platypool",
  description: "De Mougins à Colmar : l'histoire de Jean-Jacques, Gwenaëlle et d'une innovation française assemblée en ESAT.",
};

const timeline = [
  ["2005", "L'idée", "Jean-Jacques dirige un hôtel à Mougins et cherche une façon moins pénible de garder sa piscine propre."],
  ["2020", "Le déclic", "Pendant le confinement, sa fille Gwenaëlle teste le prototype. L'évidence devient un projet familial."],
  ["2021", "Deux médailles", "Le public du Concours Lépine confirme ce qu'ils pressentaient : cette invention devait exister."],
  ["2023", "Le lancement", "Platypool voit officiellement le jour, conçue et fabriquée avec des partenaires français."],
  ["2026", "Dix mille bassins", "L'aventure s'étend en France et en Europe, sans renoncer à la fabrication locale."],
];

export default function StoryPage() {
  return (
    <PageChrome>
      <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="meta text-ink/40" data-blur>Mougins · Côte d&apos;Azur</p>
          <Words as="h1" className="display mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)]" text="Un père, sa fille, / et beaucoup trop de *feuilles*." />
          <div className="reveal mt-14">
            <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
              <Image src="/media/famille-portrait.webp" alt="Jean-Jacques et Gwenaëlle, inventeurs de Platypool" width={2000} height={1414} priority className="aspect-[16/9] w-full object-cover" sizes="92vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="expand bg-deep px-5 py-24 text-paper sm:px-8 sm:py-32" data-expand>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="meta text-paper/40" data-blur>L&apos;origine</p>
            <Words className="display mt-7 text-[clamp(2rem,4.5vw,3.7rem)]" text="Une idée simple / qui attendait son *moment*." />
          </div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-paper/70">
            <p data-blur>
              Platypool commence à Mougins. Jean-Jacques, inventeur dans l&apos;âme
              et hôtelier, passe trop de temps à courir après les feuilles avec
              une épuisette trop petite. Dès 2005, il imagine un filet qui
              travaillerait avec l&apos;eau plutôt que contre elle.
            </p>
            <p data-blur>
              En 2020, Gwenaëlle découvre l&apos;un de ses prototypes. Elle connaît
              les idées parfois farfelues de son père et reste sceptique — jusqu&apos;à
              l&apos;essai. En quelques minutes, le bassin est propre. Cette fois,
              ils tiennent quelque chose.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-6xl border-t border-paper/15 pt-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={10000} /></p><p className="meta mt-3 text-paper/40">familles</p></div>
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={2} /></p><p className="meta mt-3 text-paper/40">médailles Lépine</p></div>
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={3} /></p><p className="meta mt-3 text-paper/40">brevets majeurs</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="meta text-ink/40" data-blur>Les étapes</p>
          <div className="mt-12">
            {timeline.map(([year, title, copy]) => (
              <article key={year} className="reveal grid gap-4 border-t border-ink/12 py-8 sm:grid-cols-[8rem_14rem_1fr] sm:gap-8">
                <p className="figure text-[2rem] text-aqua-deep">{year}</p>
                <h2 className="display text-[1.55rem]">{title}</h2>
                <p className="max-w-2xl text-ink/60" data-blur>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expand bg-stone px-5 py-24 sm:px-8 sm:py-32" data-expand>
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="meta text-ink/40" data-blur>Fabriquée en France</p>
            <Words className="display mt-7 text-[clamp(2.2rem,5vw,4rem)]" text="Locale par choix. / Sociale par *conviction*." />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/media/fabrication-1.webp", "Fabrication locale de Platypool"],
              ["/media/fabrication-2.webp", "Contrôle des pièces Platypool"],
              ["/media/esat-1.webp", "Assemblage dans l'ESAT Les Tournesols"],
              ["/media/esat-2.webp", "Équipe d'assemblage Platypool"],
            ].map(([src, alt], i) => (
              <div key={src} className={`reveal ${i % 2 ? "sm:mt-12" : ""}`}>
                <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
                  <Image src={src} alt={alt} width={900} height={1200} className="aspect-[3/4] w-full object-cover" sizes="(min-width: 1024px) 23vw, 46vw" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              Chaque étape est réalisée en Alsace avec des partenaires locaux.
              L&apos;assemblage est confié à l&apos;ESAT Les Tournesols, qui accompagne
              des travailleurs en situation de handicap vers davantage d&apos;autonomie.
            </p>
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              Fibre de verre, PVC, PA66 et inox sont recyclables. La structure est
              faite pour durer ; seules les pièces d&apos;usure — filet et brosses —
              se remplacent.
            </p>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
