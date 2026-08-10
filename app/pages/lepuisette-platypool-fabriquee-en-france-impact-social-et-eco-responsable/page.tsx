import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Counter from "@/components/Counter";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Une histoire familiale — Platypool", description: "De Mougins à Colmar : l'histoire de Jean-Jacques, Gwenaëlle et d'une innovation française assemblée en ESAT." },
  { title: "Una historia familiar — Platypool", description: "De Mougins a Colmar: la historia de Jean-Jacques, Gwenaëlle y una innovación francesa ensamblada en un ESAT." },
);

const timeline = [
  ["2005", "L'idée", "Jean-Jacques dirige un hôtel à Mougins et cherche une façon moins pénible de garder sa piscine propre."],
  ["2020", "Le déclic", "Pendant le confinement, sa fille Gwenaëlle teste le prototype. L'évidence devient un projet familial."],
  ["2021", "Deux médailles", "Le public du Concours Lépine confirme ce qu'ils pressentaient : cette invention devait exister."],
  ["2023", "Le lancement", "Platypool voit officiellement le jour, conçue et fabriquée avec des partenaires français."],
  ["2026", "Dix mille bassins", "L'aventure s'étend en France et en Europe, sans renoncer à la fabrication locale."],
];

export default async function StoryPage() {
  const es = (await getLocale()) === "es";
  const localizedTimeline = es ? [
    ["2005", "La idea", "Jean-Jacques dirige un hotel en Mougins y busca una forma menos pesada de mantener limpia su piscina"],
    ["2020", "El impulso", "Durante el confinamiento, su hija Gwenaëlle prueba el prototipo. La evidencia se convierte en un proyecto familiar"],
    ["2021", "Dos medallas", "El público del Concurso Lépine confirma lo que intuían: esta invención tenía que existir"],
    ["2023", "El lanzamiento", "Platypool nace oficialmente, diseñada y fabricada con socios franceses"],
    ["2026", "Diez mil piscinas", "La aventura se extiende por Francia y Europa sin renunciar a la fabricación local"],
  ] : timeline;
  return (
    <PageChrome>
      <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="meta text-ink/40" data-blur>{es ? "Mougins · Costa Azul" : "Mougins · Côte d'Azur"}</p>
          <Words as="h1" className="display mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)]" text={es ? "Un padre, su hija / y demasiadas *hojas*" : "Un père, sa fille, / et beaucoup trop de *feuilles*"} />
          <div className="reveal mt-14">
            <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
              <Image src="/media/famille-portrait.webp" alt={es ? "Jean-Jacques y Gwenaëlle, inventores de Platypool" : "Jean-Jacques et Gwenaëlle, inventeurs de Platypool"} width={2000} height={1414} priority className="aspect-[16/9] w-full object-cover" sizes="92vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="expand bg-deep px-5 py-24 text-paper sm:px-8 sm:py-32" data-expand>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="meta text-paper/40" data-blur>{es ? "El origen" : "L'origine"}</p>
            <Words className="display mt-7 text-[clamp(2rem,4.5vw,3.7rem)]" text={es ? "Una idea sencilla / que esperaba su *momento*" : "Une idée simple / qui attendait son *moment*"} />
          </div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-paper/70">
            <p data-blur>
              {es ? "Platypool comienza en Mougins. Jean-Jacques, hotelero e inventor de corazón, dedica demasiado tiempo a perseguir hojas con un recogehojas demasiado pequeño. Ya en 2005 imagina una red que trabajaría con el agua, no contra ella." : "Platypool commence à Mougins. Jean-Jacques, inventeur dans l'âme et hôtelier, passe trop de temps à courir après les feuilles avec une épuisette trop petite. Dès 2005, il imagine un filet qui travaillerait avec l'eau plutôt que contre elle."}
            </p>
            <p data-blur>
              {es ? "En 2020, Gwenaëlle descubre uno de sus prototipos. Conoce las ideas a veces extravagantes de su padre y se muestra escéptica, hasta que lo prueba. En pocos minutos la piscina está limpia. Esta vez han dado con algo." : "En 2020, Gwenaëlle découvre l'un de ses prototypes. Elle connaît les idées parfois farfelues de son père et reste sceptique — jusqu'à l'essai. En quelques minutes, le bassin est propre. Cette fois, ils tiennent quelque chose."}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-6xl border-t border-paper/15 pt-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={10000} /></p><p className="meta mt-3 text-paper/40">{es ? "familias" : "familles"}</p></div>
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={2} /></p><p className="meta mt-3 text-paper/40">{es ? "medallas Lépine" : "médailles Lépine"}</p></div>
            <div className="reveal"><p className="figure text-[clamp(2.5rem,6vw,5rem)]"><Counter value={3} /></p><p className="meta mt-3 text-paper/40">{es ? "patentes principales" : "brevets majeurs"}</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="meta text-ink/40" data-blur>{es ? "Las etapas" : "Les étapes"}</p>
          <div className="mt-12">
            {localizedTimeline.map(([year, title, copy]) => (
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
            <p className="meta text-ink/40" data-blur>{es ? "Fabricada en Francia" : "Fabriquée en France"}</p>
            <Words className="display mt-7 text-[clamp(2.2rem,5vw,4rem)]" text={es ? "Local por elección / Social por *convicción*" : "Locale par choix / Sociale par *conviction*"} />
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
                  <Image src={src} alt={es ? ["Fabricación local de Platypool", "Control de las piezas Platypool", "Montaje en el ESAT Les Tournesols", "Equipo de montaje de Platypool"][i] : alt} width={900} height={1200} className="aspect-[3/4] w-full object-cover" sizes="(min-width: 1024px) 23vw, 46vw" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              {es ? "Cada etapa se realiza en Alsacia con socios locales. El montaje se confía al ESAT Les Tournesols, que acompaña a personas con discapacidad hacia una mayor autonomía." : "Chaque étape est réalisée en Alsace avec des partenaires locaux. L'assemblage est confié à l'ESAT Les Tournesols, qui accompagne des travailleurs en situation de handicap vers davantage d'autonomie."}
            </p>
            <p className="text-[1.15rem] leading-relaxed text-ink/70" data-blur>
              {es ? "La fibra de vidrio, el PVC, la PA66 y el acero inoxidable son reciclables. La estructura está hecha para durar; solo se sustituyen las piezas de desgaste: red y cepillos." : "Fibre de verre, PVC, PA66 et inox sont recyclables. La structure est faite pour durer ; seules les pièces d'usure — filet et brosses — se remplacent."}
            </p>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
