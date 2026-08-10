import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Counter from "@/components/Counter";
import { byLocale, getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Une histoire familiale — Platypool", description: "De Mougins à Colmar : l'histoire de Jean-Jacques, Gwenaëlle et d'une innovation française assemblée en ESAT." },
  { title: "Una historia familiar — Platypool", description: "De Mougins a Colmar: la historia de Jean-Jacques, Gwenaëlle y una innovación francesa ensamblada en un ESAT." },
  { title: "A family story — Platypool", description: "From Mougins to Colmar: the story of Jean-Jacques, Gwenaëlle and a French innovation assembled by an ESAT." },
);

const timeline = [
  ["2005", "L'idée", "Jean-Jacques dirige un hôtel à Mougins et cherche une façon moins pénible de garder sa piscine propre."],
  ["2020", "Le déclic", "Pendant le confinement, sa fille Gwenaëlle teste le prototype. L'évidence devient un projet familial."],
  ["2021", "Deux médailles", "Le public du Concours Lépine confirme ce qu'ils pressentaient : cette invention devait exister."],
  ["2023", "Le lancement", "Platypool voit officiellement le jour, conçue et fabriquée avec des partenaires français."],
  ["2026", "Dix mille bassins", "L'aventure s'étend en France et en Europe, sans renoncer à la fabrication locale."],
];

export default async function StoryPage() {
  const locale = await getLocale();
  const t = byLocale(locale, {
    fr: { hero: "Un père, sa fille, / et beaucoup trop de *feuilles*", location: "Mougins · Côte d'Azur", portraitAlt: "Jean-Jacques et Gwenaëlle, inventeurs de Platypool", originTitle: "Une idée simple / qui attendait son *moment*", origin: ["Platypool commence à Mougins. Jean-Jacques, inventeur dans l'âme et hôtelier, passe trop de temps à courir après les feuilles avec une épuisette trop petite. Dès 2005, il imagine un filet qui travaillerait avec l'eau plutôt que contre elle.", "En 2020, Gwenaëlle découvre l'un de ses prototypes. Elle connaît les idées parfois farfelues de son père et reste sceptique — jusqu'à l'essai. En quelques minutes, le bassin est propre. Cette fois, ils tiennent quelque chose."], stats: ["familles", "médailles Lépine", "brevets majeurs"], stages: "Les étapes", timeline, localTitle: "Locale par choix. / Sociale par *conviction*", alts: ["Fabrication locale de Platypool", "Contrôle des pièces Platypool", "Assemblage dans l'ESAT Les Tournesols", "Équipe d'assemblage Platypool"], local: ["Chaque étape est réalisée en Alsace avec des partenaires locaux. L'assemblage est confié à l'ESAT Les Tournesols, qui accompagne des travailleurs en situation de handicap vers davantage d'autonomie.", "Fibre de verre, PVC, PA66 et inox sont recyclables. La structure est faite pour durer ; seules les pièces d'usure — filet et brosses — se remplacent."] },
    es: { hero: "Un padre, su hija / y demasiadas *hojas*", location: "Mougins · Costa Azul", portraitAlt: "Jean-Jacques y Gwenaëlle, inventores de Platypool", originTitle: "Una idea sencilla / que esperaba su *momento*", origin: ["Platypool comienza en Mougins. Jean-Jacques, hotelero e inventor de corazón, dedica demasiado tiempo a perseguir hojas con un recogehojas demasiado pequeño. Ya en 2005 imagina una red que trabajaría con el agua, no contra ella.", "En 2020, Gwenaëlle descubre uno de sus prototipos. Conoce las ideas a veces extravagantes de su padre y se muestra escéptica, hasta que lo prueba. En pocos minutos la piscina está limpia. Esta vez han dado con algo."], stats: ["familias", "medallas Lépine", "patentes principales"], stages: "Las etapas", timeline: [["2005", "La idea", "Jean-Jacques dirige un hotel en Mougins y busca una forma menos pesada de mantener limpia su piscina"], ["2020", "El impulso", "Durante el confinamiento, su hija Gwenaëlle prueba el prototipo. La evidencia se convierte en un proyecto familiar"], ["2021", "Dos medallas", "El público del Concurso Lépine confirma lo que intuían: esta invención tenía que existir"], ["2023", "El lanzamiento", "Platypool nace oficialmente, diseñada y fabricada con socios franceses"], ["2026", "Diez mil piscinas", "La aventura se extiende por Francia y Europa sin renunciar a la fabricación local"]], localTitle: "Local por elección. / Social por *convicción*", alts: ["Fabricación local de Platypool", "Control de las piezas Platypool", "Montaje en el ESAT Les Tournesols", "Equipo de montaje de Platypool"], local: ["Cada etapa se realiza en Alsacia con socios locales. El montaje se confía al ESAT Les Tournesols, que acompaña a personas con discapacidad hacia una mayor autonomía.", "La fibra de vidrio, el PVC, la PA66 y el acero inoxidable son reciclables. La estructura está hecha para durar; solo se sustituyen las piezas de desgaste: red y cepillos."] },
    en: { hero: "A father, his daughter / and far too many *leaves*", location: "Mougins · French Riviera", portraitAlt: "Jean-Jacques and Gwenaëlle, inventors of Platypool", originTitle: "A simple idea / waiting for its *moment*", origin: ["Platypool began in Mougins. Jean-Jacques, a hotelier and inventor at heart, spent far too long chasing leaves with a skimmer that was too small. As early as 2005, he imagined a net that would work with the water, not against it.", "In 2020, Gwenaëlle discovered one of his prototypes. Familiar with her father's occasionally extravagant ideas, she was sceptical until she tried it. Within minutes, the pool was clean. This time, they had found something."], stats: ["families", "Lépine medals", "major patents"], stages: "The milestones", timeline: [["2005", "The idea", "Jean-Jacques runs a hotel in Mougins and looks for a less demanding way to keep its pool clean."], ["2020", "The breakthrough", "During lockdown, his daughter Gwenaëlle tests the prototype. The obvious solution becomes a family project."], ["2021", "Two medals", "The Concours Lépine audience confirms what they suspected: this invention deserved to exist."], ["2023", "The launch", "Platypool officially launches, designed and made with French partners."], ["2026", "Ten thousand pools", "The adventure expands across France and Europe without giving up local manufacturing."]], localTitle: "Local by choice. / Social by *conviction*", alts: ["Local manufacturing of Platypool", "Quality control of Platypool parts", "Assembly at ESAT Les Tournesols", "Platypool assembly team"], local: ["Every stage takes place in Alsace with local partners. Assembly is entrusted to ESAT Les Tournesols, which helps people with disabilities gain greater independence.", "Fibreglass, PVC, PA66 and stainless steel are recyclable. The frame is built to last; only the wear parts—the net and brushes—need replacing."] },
  });
  return (
    <PageChrome>
      <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <Words as="h1" className="display max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)]" text={t.hero} />
          <p className="meta mt-6 text-ink/40" data-blur>{t.location}</p>
          <div className="reveal mt-14">
            <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
              <Image src="/media/famille-portrait.webp" alt={t.portraitAlt} width={2000} height={1414} priority className="aspect-[16/9] w-full object-cover" sizes="92vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="expand bg-deep px-5 py-24 text-paper sm:px-8 sm:py-32" data-expand>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <Words className="display text-[clamp(2rem,4.5vw,3.7rem)]" text={t.originTitle} />
          </div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-paper/70">
            <p data-blur>
              {t.origin[0]}
            </p>
            <p data-blur>
              {t.origin[1]}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-6xl border-t border-paper/15 pt-10">
          <div className="grid grid-cols-3 gap-6">
            {[10000, 2, 3].map((value, index) => <div key={value} className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={value} /></p><p className="meta mt-3 text-paper/40">{t.stats[index]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-[clamp(1.8rem,4vw,3rem)]" data-blur>{t.stages}</h2>
          <div className="mt-12">
            {t.timeline.map(([year, title, copy]) => (
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
            <Words className="display text-[clamp(2.2rem,5vw,4rem)]" text={t.localTitle} />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/media/fabrication-1.webp", "Fabrication locale de Platypool"],
              ["/media/fabrication-2.webp", "Contrôle des pièces Platypool"],
              ["/media/esat-1.webp", "Assemblage dans l'ESAT Les Tournesols"],
              ["/media/esat-2.webp", "Équipe d'assemblage Platypool"],
            ].map(([src], i) => (
              <div key={src} className={`reveal ${i % 2 ? "sm:mt-12" : ""}`}>
                <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
                  <Image src={src} alt={t.alts[i]} width={900} height={1200} className="aspect-[3/4] w-full object-cover" sizes="(min-width: 1024px) 23vw, 46vw" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              {t.local[0]}
            </p>
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              {t.local[1]}
            </p>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
