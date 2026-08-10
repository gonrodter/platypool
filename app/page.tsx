import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SweepHero from "@/components/SweepHero";
import Words from "@/components/Words";
import Faq from "@/components/Faq";
import Arrow from "@/components/Arrow";
import Counter from "@/components/Counter";
import PressMarquee from "@/components/PressMarquee";
import { Check, Cross } from "@/components/Marks";
import GoogleMark from "@/components/GoogleMark";
import GoogleWordmark from "@/components/GoogleWordmark";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import Footer from "@/components/Footer";
import { getLocale, localizedPath, type Locale } from "@/lib/i18n";

const specsFr = [
  { value: 2, unit: "m", label: "de filet, en un passage" },
  { value: 800, unit: "g", label: "se manie d'un seul doigt" },
  { value: 7, unit: "kg", label: "de feuilles par remplissage" },
  { value: 1, unit: "min", label: "de montage, sans outil" },
];

const specsEs = [
  { value: 2, unit: "m", label: "de red en una sola pasada" },
  { value: 800, unit: "g", label: "se maneja con un solo dedo" },
  { value: 7, unit: "kg", label: "de hojas en cada llenado" },
  { value: 1, unit: "min", label: "de montaje, sin herramientas" },
];

const specsEn = [
  { value: 2, unit: "m", label: "of net in a single pass" },
  { value: 800, unit: "g", label: "guided with just one finger" },
  { value: 7, unit: "kg", label: "of leaves in one load" },
  { value: 1, unit: "min", label: "to assemble, with no tools" },
];

const comparisonFr = [
  {
    criterion: "L'effort",
    before: "Épuise les bras et le dos",
    after: "Elle flotte, vous tirez sur une corde",
  },
  {
    criterion: "La portée",
    before: "30 cm, la surface uniquement",
    after: "2 m, surface et ligne d'eau à la fois",
  },
  {
    criterion: "Le temps",
    before: "Vingt passages pour un bassin",
    after: "Un tour du bassin, une minute",
  },
  {
    criterion: "La contenance",
    before: "Feuille par feuille",
    after: "Jusqu'à 7 kg en un remplissage",
  },
  {
    criterion: "La durée de vie",
    before: "Le manche plie, le filet lâche",
    after: "Dix ans, filet et brosses remplaçables",
  },
];

const comparisonEs = [
  { criterion: "El esfuerzo", before: "Carga los brazos y la espalda", after: "Flota y tú solo tiras de una cuerda" },
  { criterion: "El alcance", before: "30 cm y únicamente la superficie", after: "2 m, superficie y línea de agua a la vez" },
  { criterion: "El tiempo", before: "Veinte pasadas para una piscina", after: "Una vuelta a la piscina, un minuto" },
  { criterion: "La capacidad", before: "Hoja por hoja", after: "Hasta 7 kg en un solo llenado" },
  { criterion: "La vida útil", before: "El mango se dobla y la red cede", after: "Diez años, con red y cepillos reemplazables" },
];

const comparisonEn = [
  { criterion: "Effort", before: "Strains your arms and back", after: "It floats; you simply pull a rope" },
  { criterion: "Reach", before: "30 cm and the surface only", after: "2 m, surface and waterline together" },
  { criterion: "Time", before: "Twenty passes for one pool", after: "One lap of the pool, one minute" },
  { criterion: "Capacity", before: "One leaf at a time", after: "Up to 7 kg in a single load" },
  { criterion: "Lifespan", before: "The handle bends and the net gives way", after: "Ten years, with replaceable net and brushes" },
];

type Review = {
  quote: string;
  name: string;
  detail: string;
  /** Present when the review comes from the Google business listing. */
  google?: boolean;
  /** The owner's own photo, as published with their testimonial. */
  photo?: { src: string; alt: string };
};

const reviewsFr: Review[] = [
  {
    quote:
      "Vraiment très satisfait. La piscine est propre en un temps record, facile d'utilisation et très performant. Je conseille.",
    name: "Gérard S.",
    detail: "71 ans · avril 2026",
    photo: {
      src: "/media/avis-gerard.webp",
      alt: "Gérard nettoie sa piscine avec Platypool",
    },
  },
  {
    quote:
      "Cette épuisette est incroyable. Ma famille l'adore, c'est un très bon investissement pour votre piscine.",
    name: "Théotime Richard",
    detail: "Local Guide",
    google: true,
  },
  {
    quote:
      "Après l'avoir essayée, on se demande comment on faisait avec une épuisette de 30 cm.",
    name: "Julia V.",
    detail: "42 ans · avril 2026",
    photo: {
      src: "/media/avis-julia.webp",
      alt: "Julia sort le filet Platypool de son bassin",
    },
  },
  {
    quote:
      "Je suis pisciniste dans le Sud-Ouest. Belle découverte, gain de temps non négligeable. Et c'est vrai qu'en une minute, c'est propre.",
    name: "Antoine F.",
    detail: "32 ans · mars 2026",
    photo: {
      src: "/media/avis-antoine.webp",
      alt: "Platypool en service dans une piscine du Sud-Ouest",
    },
  },
  {
    quote:
      "C'est un outil franchement incroyable. Léger, facile à utiliser et très efficace. Ma piscine est toujours propre.",
    name: "Sophie Brunet",
    detail: "avis vérifié",
    google: true,
  },
  {
    quote:
      "Piscine hors-sol ronde de 5 m : ça récupère tout avant que ça ne tombe au fond. Ma piscine est beaucoup plus propre.",
    name: "Christine H.",
    detail: "63 ans · mars 2026",
    photo: {
      src: "/media/avis-christine.webp",
      alt: "Platypool sur une piscine hors-sol ronde",
    },
  },
  {
    quote:
      "On a de gros problèmes avec les aiguilles de pin. Maintenant on les ramasse avant qu'elles tombent au fond, et en deux minutes.",
    name: "Nicolas R.",
    detail: "46 ans · août 2025",
    photo: {
      src: "/media/avis-nicolas.webp",
      alt: "Le filet Platypool rempli d'aiguilles de pin",
    },
  },
  {
    quote:
      "C'est l'innovation à avoir pour l'été. Simple, efficace et léger, ça fait vraiment la différence à la maison.",
    name: "Manon Nicot",
    detail: "cliente",
    google: true,
  },
  {
    quote:
      "Mon cadeau pour la fête des pères. Il est très content ! Il voulait une solution efficace, facile à utiliser et facile à vider.",
    name: "Alex B.",
    detail: "23 ans · août 2025",
    photo: {
      src: "/media/avis-alex.webp",
      alt: "Platypool offerte pour la fête des pères",
    },
  },
];

const reviewsEs: Review[] = [
  { quote: "Estoy realmente muy satisfecho. La piscina queda limpia en un tiempo récord; es fácil de usar y muy eficaz. La recomiendo.", name: "Gérard S.", detail: "71 años · abril de 2026", photo: { src: "/media/avis-gerard.webp", alt: "Gérard limpia su piscina con Platypool" } },
  { quote: "Este recogehojas es increíble. A mi familia le encanta; es una inversión estupenda para la piscina.", name: "Théotime Richard", detail: "Local Guide", google: true },
  { quote: "Después de probarla, te preguntas cómo podías apañarte con un recogehojas de 30 cm.", name: "Julia V.", detail: "42 años · abril de 2026", photo: { src: "/media/avis-julia.webp", alt: "Julia saca la red Platypool de su piscina" } },
  { quote: "Soy profesional de piscinas en el suroeste. Un gran descubrimiento y un ahorro de tiempo importante. Es verdad: en un minuto queda limpia.", name: "Antoine F.", detail: "32 años · marzo de 2026", photo: { src: "/media/avis-antoine.webp", alt: "Platypool en uso en una piscina del suroeste" } },
  { quote: "Es una herramienta sencillamente increíble. Ligera, fácil de usar y muy eficaz. Mi piscina está siempre limpia.", name: "Sophie Brunet", detail: "opinión verificada", google: true },
  { quote: "Piscina elevada redonda de 5 m: lo recoge todo antes de que caiga al fondo. La piscina está mucho más limpia.", name: "Christine H.", detail: "63 años · marzo de 2026", photo: { src: "/media/avis-christine.webp", alt: "Platypool sobre una piscina elevada redonda" } },
  { quote: "Tenemos muchos problemas con las agujas de pino. Ahora las recogemos antes de que caigan al fondo, y solo tardamos dos minutos.", name: "Nicolas R.", detail: "46 años · agosto de 2025", photo: { src: "/media/avis-nicolas.webp", alt: "La red Platypool llena de agujas de pino" } },
  { quote: "Es la innovación que hay que tener este verano. Sencilla, eficaz y ligera; en casa se nota muchísimo.", name: "Manon Nicot", detail: "clienta", google: true },
  { quote: "Fue mi regalo del Día del Padre. ¡Está encantado! Quería una solución eficaz, fácil de usar y fácil de vaciar.", name: "Alex B.", detail: "23 años · agosto de 2025", photo: { src: "/media/avis-alex.webp", alt: "Platypool como regalo del Día del Padre" } },
];

const reviewsEn: Review[] = [
  { quote: "I am genuinely very satisfied. The pool is clean in record time; it is easy to use and very effective. I recommend it.", name: "Gérard S.", detail: "71 years old · April 2026", photo: { src: "/media/avis-gerard.webp", alt: "Gérard cleaning his pool with Platypool" } },
  { quote: "This pool skimmer is incredible. My family loves it; it is a great investment for your pool.", name: "Théotime Richard", detail: "Local Guide", google: true },
  { quote: "Once you have tried it, you wonder how you ever managed with a 30 cm skimmer.", name: "Julia V.", detail: "42 years old · April 2026", photo: { src: "/media/avis-julia.webp", alt: "Julia lifting the Platypool net out of her pool" } },
  { quote: "I am a pool professional in south-west France. A great discovery and a significant time-saver. And it is true: the pool is clean in one minute.", name: "Antoine F.", detail: "32 years old · March 2026", photo: { src: "/media/avis-antoine.webp", alt: "Platypool in use at a pool in south-west France" } },
  { quote: "It is simply an incredible tool. Light, easy to use and very effective. My pool is always clean.", name: "Sophie Brunet", detail: "verified review", google: true },
  { quote: "Round 5 m above-ground pool: it collects everything before it sinks. My pool is much cleaner.", name: "Christine H.", detail: "63 years old · March 2026", photo: { src: "/media/avis-christine.webp", alt: "Platypool on a round above-ground pool" } },
  { quote: "We have a major problem with pine needles. Now we collect them before they sink, and it only takes two minutes.", name: "Nicolas R.", detail: "46 years old · August 2025", photo: { src: "/media/avis-nicolas.webp", alt: "Platypool net filled with pine needles" } },
  { quote: "This is the innovation to have this summer. Simple, effective and light; it makes a real difference at home.", name: "Manon Nicot", detail: "customer", google: true },
  { quote: "It was my Father's Day gift. He loves it! He wanted an effective solution that was easy to use and easy to empty.", name: "Alex B.", detail: "23 years old · August 2025", photo: { src: "/media/avis-alex.webp", alt: "Platypool given as a Father's Day gift" } },
];

function ReviewCard({ review, locale }: { review: Review; locale: Locale }) {
  return (
    <figure className={`reveal w-[84vw] max-w-[22rem] shrink-0 snap-center break-inside-avoid overflow-hidden rounded-2xl bg-paper/70 md:mb-6 md:block md:w-auto md:max-w-none md:snap-none ${review.photo ? "" : "hidden"}`}>
      {review.photo ? (
        <Image
          src={review.photo.src}
          alt={review.photo.alt}
          width={900}
          height={675}
          className="aspect-4/3 w-full object-cover"
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 84vw"
        />
      ) : null}
      <blockquote className="p-7">
        <p className="text-[1.05rem] leading-relaxed">« {review.quote} »</p>
        {/* Google reviews carry the mark instead of an age, so the line never
            has to hold three pieces of metadata at once. */}
        <figcaption className="mt-5 flex items-center gap-3">
          <cite className="text-[0.9rem] not-italic">{review.name}</cite>
          {review.google ? (
            <span className="ml-auto flex shrink-0 items-center gap-1.5 text-ink/45">
              <GoogleMark className="h-3.5 w-3.5" />
              <span className="meta">{locale === "en" ? "Google review" : locale === "es" ? "Opinión de Google" : "Avis Google"}</span>
            </span>
          ) : (
            <span className="meta text-ink/40">{review.detail}</span>
          )}
        </figcaption>
      </blockquote>
    </figure>
  );
}

export default async function Home() {
  const locale = await getLocale();
  const tr = (es: string, fr: string, en: string) => locale === "en" ? en : locale === "es" ? es : fr;
  const specs = locale === "en" ? specsEn : locale === "es" ? specsEs : specsFr;
  const comparison = locale === "en" ? comparisonEn : locale === "es" ? comparisonEs : comparisonFr;
  const reviews = locale === "en" ? reviewsEn : locale === "es" ? reviewsEs : reviewsFr;
  return (
    <>
      <Nav />
      <Reveal />

      <main id="top">
        <SweepHero locale={locale} />
        <div id="nav-sentinel" aria-hidden="true" className="h-px w-full" />

        {/* The claim, followed by the key product figures. */}
        <section
          id="produit"
          className="px-5 pt-28 pb-24 sm:px-8 sm:pt-40 sm:pb-32"
        >
          <div className="mx-auto max-w-5xl text-center">
            <Words
              className="display mx-auto max-w-4xl text-[clamp(1.85rem,4.6vw,3.5rem)]"
              text={tr("Un recogehojas clásico mide 30 centímetros de ancho. / Tu piscina mide cuatro mil. / Las cuentas salen *rápido*", "Une épuisette classique fait 30 centimètres de large. / Votre piscine en fait quatre mille. / Le calcul est *vite* fait", "A classic pool skimmer is 30 centimetres wide. / Your pool is four thousand. / The maths is *simple*")}
            />
          </div>

          <div className="mx-auto mt-24 max-w-6xl">
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
              {specs.map((s) => (
                <div key={s.label} className="reveal">
                  <p className="figure text-[clamp(3rem,6vw,4.5rem)]">
                    <Counter value={s.value} />
                    <span className="ml-1 align-baseline text-[0.32em] tracking-normal">
                      {s.unit}
                    </span>
                  </p>
                  <p className="mt-4 max-w-[13rem] text-[0.9rem] leading-snug text-ink/60" data-blur>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two-in-one, told as two image cards that read left to right. */}
        <section className="expand bg-stone px-5 py-24 sm:px-8 sm:py-32" data-expand>
          <div className="mx-auto max-w-5xl text-center">
            <Words
              className="display mx-auto max-w-3xl text-[clamp(1.85rem,4.6vw,3.5rem)]"
              text={tr("Dos gestos que nadie había pensado *unir*", "Deux gestes que personne n'avait pensé à *réunir*", "Two movements no one had thought to *combine*")}
            />
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-x-8 gap-y-14 md:grid-cols-2">
            <figure className="reveal">
              <div
                className="wipe-mask overflow-hidden rounded-2xl"
                data-wipe
              >
                <Image
                  src="/media/feuilles-surface.webp"
                  alt={tr("La red Platypool recoge hojas e insectos de la superficie", "Le filet Platypool rassemble feuilles et insectes à la surface de l'eau", "The Platypool net collects leaves and insects from the surface")}
                  width={1600}
                  height={1200}
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 92vw"
                />
              </div>
              <figcaption className="mt-6">
                <h3 className="display text-[1.6rem]" data-blur>{tr("La superficie", "La surface", "The surface")}</h3>
                <p className="mt-3 max-w-sm text-ink/65" data-blur>
                  {tr("Dos metros de red barren todo el ancho de una sola pasada. Hojas, insectos, agujas de pino y polen desaparecen antes de hundirse.", "Deux mètres de filet balaient toute la largeur d'un coup. Feuilles, insectes, aiguilles de pin, pollen — tout part avant de couler au fond.", "Two metres of net sweep the full width in one pass. Leaves, insects, pine needles and pollen disappear before they sink.")}
                </p>
              </figcaption>
            </figure>

            <figure className="reveal md:mt-16">
              <div
                className="wipe-mask overflow-hidden rounded-2xl"
                data-wipe
              >
                <Image
                  src="/media/ligne-eau.webp"
                  alt={tr("Los cepillos integrados frotan la línea de agua de la piscina", "Les brosses intégrées frottent la ligne d'eau du bassin", "The integrated brushes scrub the pool waterline")}
                  width={1600}
                  height={1600}
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 92vw"
                />
              </div>
              <figcaption className="mt-6">
                <h3 className="display text-[1.6rem]" data-blur>{tr("La línea de agua", "La ligne d'eau", "The waterline")}</h3>
                <p className="mt-3 max-w-sm text-ink/65" data-blur>
                  {tr("Los cepillos de los extremos permanecen pegados a la pared. La línea de grasa se limpia mientras recoges la suciedad, sin agacharte.", "Les brosses des extrémités restent plaquées contre la paroi. La ligne grasse se nettoie pendant que vous ramassez, sans vous baisser.", "The end brushes stay pressed against the wall. The greasy line is cleaned while you collect debris, with no bending down.")}
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Comparison: their table, rewritten as parallel prose on a rule. */}
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <Words
              className="display mx-auto text-[clamp(1.85rem,4.6vw,3.5rem)]"
              text={tr("¿Cuánto vale un verano sin / *esfuerzo*?", "Combien vaut un été sans *corvée* ?", "What is a summer without / *chores* worth?")}
            />
          </div>

          <div className="mx-auto mt-12 max-w-5xl md:hidden">
            <div className="grid grid-cols-2 gap-3 px-1">
              <p className="meta text-ink/40">{tr("Recogehojas clásico", "Épuisette classique", "Classic skimmer")}</p>
              <p className="meta text-aqua-deep">Platypool</p>
            </div>
            <div className="mt-4 space-y-4">
              {comparison.map((row) => (
                <article key={row.criterion} className="reveal overflow-hidden rounded-2xl border border-ink/10">
                  <h3 className="meta border-b border-ink/10 bg-paper/55 px-4 py-3 text-ink/45">{row.criterion}</h3>
                  <div className="grid grid-cols-2">
                    <div className="flex gap-2.5 p-4 text-[0.92rem] leading-snug text-ink/50">
                      <Cross />
                      <p>{row.before}</p>
                    </div>
                    <div className="flex gap-2.5 bg-aqua/25 p-4 text-[0.92rem] leading-snug text-ink">
                      <Check />
                      <p>{row.after}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 hidden max-w-5xl overflow-x-auto md:block">
            <table className="w-full min-w-xl border-collapse text-left">
              <caption className="sr-only">
                {tr("Comparativa entre un recogehojas clásico y Platypool", "Comparatif entre une épuisette classique et Platypool", "Comparison between a classic pool skimmer and Platypool")}
              </caption>
              <thead>
                <tr className="border-b border-ink/15">
                  <th scope="col" className="meta w-1/4 py-4 text-ink/40">
                    <span className="reveal block">{tr("Criterio", "Critère", "Criterion")}</span>
                  </th>
                  <th scope="col" className="w-[37.5%] py-4 pr-6 align-bottom">
                    <span className="reveal block">
                      <span className="block text-[1.05rem] font-medium text-ink/45">
                        {tr("Recogehojas clásico", "L'épuisette classique", "Classic skimmer")}
                      </span>
                      <span className="meta mt-1 block text-ink/35">
                        {tr("De 10 a 40 €, cada temporada", "10 à 40 €, chaque saison", "€10 to €40, every season")}
                      </span>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="w-[37.5%] rounded-t-2xl bg-aqua/25 px-6 py-4 align-bottom"
                  >
                    <span className="reveal block">
                      <span className="block text-[1.05rem] font-medium">
                        Platypool
                      </span>
                      <span className="meta mt-1 block text-ink/50">
                        {tr("69 €, una sola vez", "69 €, une fois", "€69, just once")}
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.criterion} className="border-b border-ink/12">
                    <th
                      scope="row"
                      className="meta py-6 pr-6 align-top font-semibold text-ink/45"
                    >
                      <span className="reveal block">{row.criterion}</span>
                    </th>
                    <td className="py-6 pr-6 align-top text-ink/45">
                      <span className="reveal flex gap-3">
                        <Cross />
                        <span>{row.before}</span>
                      </span>
                    </td>
                    <td
                      className={`bg-aqua/25 px-6 py-6 align-top ${
                        i === comparison.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <span className="reveal flex gap-3">
                        <Check />
                        <span>{row.after}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Family story: image left, numbers below, dark ground. */}
        <section
          id="histoire"
          className="expand bg-deep px-5 py-24 text-paper sm:px-8 sm:py-32"
          data-expand
        >
          <div className="mx-auto max-w-5xl text-center">
            <Words
              className="display mx-auto max-w-3xl text-[clamp(1.85rem,4.6vw,3.5rem)]"
              text={tr("Mougins, 2020. Un hotelero se cansa / de pescar *hojas*", "Mougins, 2020. Un hôtelier en a assez / de repêcher des *feuilles*", "Mougins, 2020. A hotelier is tired / of fishing for *leaves*")}
            />
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <div className="reveal">
              <div
                className="wipe-mask overflow-hidden rounded-2xl"
                data-wipe
              >
                <Image
                  src="/media/flottante.webp"
                  alt={tr("Platypool guiada con una cuerda junto a una piscina de la Costa Azul", "Platypool tirée à la corde le long d'une piscine sur la Côte d'Azur", "Platypool guided by rope along a pool on the French Riviera")}
                  width={1600}
                  height={1200}
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
              </div>
            </div>

            <div className="lg:pt-4">
              <div className="max-w-xl space-y-5 text-paper/70">
                <p data-blur>
                  {tr("Jean-Jacques, inventor de corazón, buscaba cómo limpiar la piscina de su hotel sin perder toda la mañana. Su hijo prueba el primer prototipo en 2020: ahí surge la chispa.", "Jean-Jacques, inventeur dans l'âme, cherchait de quoi nettoyer la piscine de son hôtel sans y passer sa matinée. Son fils teste le premier prototype en 2020 : c'est le déclic.", "Jean-Jacques, an inventor at heart, was looking for a way to clean his hotel's pool without losing the whole morning. The first prototype was tested in 2020, and the idea clicked.")}
                </p>
                <p data-blur>
                  {tr("Dos años después, más de 10.000 familias de Francia y Europa la utilizan. Platypool sigue fabricándose en Francia y se ensambla en el ESAT Les Tournesols de Colmar.", "Deux ans plus tard, plus de 10 000 familles en France et en Europe l'utilisent. Platypool est toujours fabriquée en France, et assemblée par l'ESAT Les Tournesols à Colmar.", "Two years later, more than 10,000 families across France and Europe use it. Platypool is still made in France and assembled by ESAT Les Tournesols in Colmar.")}
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="reveal">
                  <p className="figure text-[clamp(1.9rem,3.5vw,2.75rem)]">
                    <Counter value={10000} />
                  </p>
                  <p className="meta mt-3 text-paper/45">{tr("usuarios", "utilisateurs", "users")}</p>
                </div>
                <div className="reveal">
                  <p className="figure text-[clamp(1.9rem,3.5vw,2.75rem)]">
                    <Counter value={4.9} decimals={1} />
                  </p>
                  <p className="meta mt-3 text-paper/45">{tr("en Google", "avis Google", "on Google")}</p>
                </div>
                <div className="reveal">
                  <p className="figure text-[clamp(1.9rem,3.5vw,2.75rem)]">
                    <Counter value={0} />
                  </p>
                  <p className="meta mt-3 text-paper/45">{tr("devoluciones posventa", "retour SAV", "after-sales returns")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards: the assets that were buried on the old site. */}
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="display text-[clamp(1.85rem,4vw,3rem)]" data-blur>{tr("Reconocida y después patentada", "Reconnue, puis brevetée", "Recognised, then patented")}</h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <div className="reveal flex items-start gap-5" data-award>
                <Image
                  src="/media/medaille-lepine.webp"
                  alt={tr("Dos medallas del Concurso Lépine 2021", "Deux médailles du Concours Lépine 2021", "Two medals from the 2021 Concours Lépine")}
                  width={200}
                  height={200}
                  className="h-16 w-auto"
                />
                <div>
                  <h3 className="display text-[1.4rem]" data-blur>Concours Lépine</h3>
                  <p className="meta mt-2 text-ink/45">{tr("Dos medallas", "Deux médailles", "Two medals")} · 2021</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-5" data-award>
                <Image
                  src="/media/medaille-geneve.webp"
                  alt={tr("Medalla de oro del Salón Internacional de Invenciones de Ginebra", "Médaille d'or du Salon international des inventions de Genève", "Gold medal from the International Exhibition of Inventions Geneva")}
                  width={200}
                  height={200}
                  className="h-16 w-auto"
                />
                <div>
                  <h3 className="display text-[1.4rem]" data-blur>{tr("Salón de Ginebra", "Salon de Genève", "Geneva Exhibition")}</h3>
                  <p className="meta mt-2 text-ink/45">
                    {tr("Medalla de oro", "Médaille d'or", "Gold medal")} · 2026
                  </p>
                </div>
              </div>

              <div className="reveal">
                <h3 className="display text-[1.4rem]" data-blur>{tr("Patente concedida", "Brevet accordé", "Patent granted")}</h3>
                <p className="meta mt-2 text-ink/45">
                  {tr("Europa, Estados Unidos y Australia", "Europe, États-Unis, Australie", "Europe, the United States and Australia")}
                </p>
                <p className="mt-3 max-w-xs text-[0.9rem] text-ink/60">
                  {tr("Los tres territorios cubren el 85 % del mercado mundial de piscinas.", "Les trois territoires couvrent 85 % du marché mondial de la piscine.", "The three territories cover 85% of the global swimming pool market.")}
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-ink/12 pt-10">
              <p className="meta reveal mb-8 text-ink/35">{tr("Vista en", "Vue dans", "Featured in")}</p>
              <PressMarquee />
            </div>
          </div>
        </section>

        {/* Reviews: a wall of real quotes, with two owners' photos among them. */}
        <section className="expand bg-stone px-5 py-24 sm:px-8 sm:py-32" data-expand>
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Words
                  className="display text-[clamp(1.85rem,4.6vw,3.25rem)]"
                  text={tr("Diez mil piscinas / y ni un solo *arrepentimiento*", "Dix mille piscines, / et pas un *regret*", "Ten thousand pools / and not a single *regret*")}
                />
              </div>
              <p className="reveal flex items-center gap-1.5 text-[0.9rem] text-ink/50">
                <span><Counter value={4.9} decimals={1} /> {tr("de 5 · opiniones", "sur 5 · avis", "out of 5 · reviews")}</span>
                <GoogleWordmark className="h-4 w-auto shrink-0" />
              </p>
            </div>

            <HorizontalCarousel
              ariaLabel={tr("Carrusel de opiniones de clientes", "Carrousel d'avis clients", "Customer review carousel")}
              initialTotal={reviews.filter((review) => review.photo).length}
              locale={locale}
              wrapperClassName="-mx-5 mt-14 min-w-0 md:mx-0"
              scrollerClassName="flex w-full snap-x snap-mandatory items-start gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:block md:columns-2 md:overflow-visible md:px-0 md:pb-0 lg:columns-3"
              indicatorClassName="px-5 md:hidden"
            >
              {reviews.map((r) => (
                <ReviewCard key={r.name} review={r} locale={locale} />
              ))}
            </HorizontalCarousel>
          </div>
        </section>

        {/* Buy. */}
        <section id="acheter" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <div
                className="wipe-mask overflow-hidden rounded-2xl bg-stone"
                data-wipe
              >
                <Image
                  src="/media/contenu-boite.webp"
                  alt={tr("Contenido de la caja Platypool: tubos, extensores con cepillos, red y cuerda", "Contenu de la boîte Platypool : tubes, extendeurs à brosses, filet et corde", "Contents of the Platypool box: tubes, brush extensions, net and rope")}
                  width={1600}
                  height={1200}
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 1024px) 45vw, 92vw"
                />
              </div>
            </div>

            <div>
              <Words
                className="display text-[clamp(2rem,4.4vw,3.25rem)]"
                text={tr("Limpia menos / disfruta *más*", "Nettoyez moins, / profitez *plus*", "Clean less / enjoy *more*")}
              />

              <p className="figure reveal mt-10 text-[3.25rem]">
                <Counter value={69} />
                <span className="ml-1 text-[0.32em] tracking-normal">
                  € {tr("IVA incl.", "TTC", "incl. VAT")}
                </span>
              </p>

              <ul className="mt-8 space-y-2 text-ink/65">
                <li data-blur>
                  {tr("4 tubos de 50 cm y 2 extensores con cepillos premontados", "4 tubes de 50 cm, 2 extendeurs à brosses pré-montées", "4 × 50 cm tubes and 2 extensions with pre-fitted brushes")}
                </li>
                <li data-blur>
                  {tr("1 red de 2 metros, 1 cuerda y sus 4 ganchos", "1 filet de 2 mètres, 1 corde et ses 4 crochets", "1 × 2-metre net, 1 rope and 4 hooks")}
                </li>
                <li data-blur>
                  {tr("Montaje en 4 pasos, un minuto y sin herramientas", "Montage en 4 étapes, une minute, sans outil", "Four-step assembly, one minute, no tools")}
                </li>
                <li data-blur>
                  {tr("Materiales anti-UV, resistentes al cloro y reciclables", "Matériaux anti-UV, résistants au chlore, recyclables", "UV-resistant, chlorine-resistant and recyclable materials")}
                </li>
              </ul>

              <a
                href={localizedPath(locale, "/products/epuisette-xxl")}
                className="pill reveal mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper"
              >
                {tr("Comprar ya", "Acheter maintenant", "Buy now")}
                <Arrow />
              </a>

              <p className="meta reveal mt-6 text-ink/40">
                {tr("Punto de recogida DPD · 14 días para cambiar de opinión · 2 años de garantía", "Point Relais DPD · 14 jours pour changer d'avis · garantie 2 ans", "DPD pickup point · 14 days to change your mind · 2-year warranty")}
              </p>
            </div>
          </div>
        </section>

        <section id="questions" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-4xl">
            <Words
              className="display mb-10 text-[clamp(1.85rem,4.4vw,3rem)]"
              text={tr("¿Tienes alguna *pregunta*?", "Vous avez des *questions*", "Have a *question*?")}
            />
            <Faq />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
