import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import Counter from "@/components/Counter";
import { Check } from "@/components/Marks";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Épuisette XXL Platypool — 2 mètres, surface et ligne d'eau", description: "L'épuisette flottante de 2 mètres qui nettoie la surface et la ligne d'eau en un seul tour de bassin." },
  { title: "Recogehojas XXL Platypool — 2 metros, superficie y línea de agua", description: "El recogehojas flotante de 2 metros que limpia la superficie y la línea de agua en una sola vuelta a la piscina." },
);

const gallery = [
  ["/media/gallery-product-01.webp", "Epuisette piscine XXL Platypool 2 mètres sans effort vue principale"],
  ["/media/gallery-product-02.webp", "Platypool épuisette XXL flottante nettoyage piscine rapide"],
  ["/media/gallery-product-03.webp", "Epuisette Platypool compatible piscine hors-sol enterrée liner béton"],
  ["/media/gallery-product-04.webp", "Filet épuisette XXL grande contenance 7 kg feuilles insectes pollen"],
  ["/media/gallery-product-05.webp", "Epuisette XXL Platypool légère 800 g maniable et pratique"],
  ["/media/gallery-product-06.webp", "Epuisette Platypool montage en une minute sans outil"],
  ["/media/gallery-product-07.webp", "Nettoyage ligne d'eau piscine avec les brosses intégrées Platypool"],
  ["/media/gallery-product-08.webp", "Epuisette Platypool sortie de piscine après le nettoyage des débris"],
  ["/media/gallery-product-09.webp", "Platypool innovation française, deux médailles au Concours Lépine 2021"],
  ["/media/gallery-product-10.webp", "Epuisette piscine XXL Platypool en matériaux résistants au chlore et aux UV"],
];

const galleryAltsEs = [
  "Recogehojas XXL Platypool de 2 metros, vista principal",
  "Recogehojas XXL flotante Platypool para una limpieza rápida",
  "Platypool compatible con piscinas elevadas y enterradas",
  "Red XXL Platypool con 7 kg de capacidad",
  "Recogehojas XXL Platypool ligero de 800 g",
  "Montaje de Platypool en un minuto y sin herramientas",
  "Limpieza de la línea de agua con los cepillos Platypool",
  "Salida de Platypool de la piscina después de recoger los residuos",
  "Innovación francesa Platypool, dos medallas del Concurso Lépine 2021",
  "Platypool fabricada con materiales resistentes al cloro y a los rayos UV",
];

const features = [
  ["2 mètres", "Toute la largeur utile en un seul passage."],
  ["2-en-1", "Surface et ligne d'eau dans le même geste."],
  ["800 grammes", "Elle flotte et se manie d'un seul doigt."],
  ["7 kg", "Une vraie contenance, même après un coup de vent."],
  ["1 minute", "Quatre étapes de montage, aucun outil."],
  ["10 ans", "Structure durable, filet et brosses remplaçables."],
];

export default async function ProductPage() {
  const es = (await getLocale()) === "es";
  const localizedFeatures = es ? [
    ["2 metros", "Todo el ancho útil en una sola pasada"],
    ["2 en 1", "Superficie y línea de agua en el mismo gesto"],
    ["800 gramos", "Flota y se maneja con un solo dedo"],
    ["7 kg", "Una capacidad real, incluso después de un vendaval"],
    ["1 minuto", "Cuatro pasos de montaje, sin herramientas"],
    ["10 años", "Estructura duradera, red y cepillos reemplazables"],
  ] : features;
  return (
    <PageChrome>
      <section className="px-5 pb-24 pt-14 sm:px-8 sm:pb-32 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
          <div className="contents lg:grid lg:grid-cols-2 lg:gap-4">
            {gallery.map(([src, alt], index) => (
              <div
                key={src}
                className={index === 0 ? "order-1 lg:order-none lg:col-span-2" : "order-3 lg:order-none"}
              >
                <div className="overflow-hidden rounded-2xl bg-stone">
                  <Image
                    src={src}
                    alt={es ? galleryAltsEs[index] : alt}
                    width={1080}
                    height={1080}
                    priority={index === 0}
                    className="aspect-square w-full object-cover"
                    sizes={index === 0 ? "(min-width: 1024px) 54vw, 92vw" : "(min-width: 1024px) 27vw, 92vw"}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="order-2 my-10 lg:order-none lg:sticky lg:top-28 lg:my-0 lg:self-start">
            <Words
              as="h1"
              className="display text-[clamp(2.5rem,5.5vw,4.6rem)]"
              text={es ? "La piscina limpia. / En una sola *vuelta*" : "La piscine propre. / En un seul *tour*"}
            />
            <p className="meta mt-5 text-ink/40" data-blur>{es ? "Innovación patentada · fabricada en Francia" : "Innovation brevetée · fabriquée en France"}</p>
            <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-ink/65" data-blur>
              {es ? "Dos metros de red flotante barren la superficie mientras los cepillos limpian la línea de agua. Tú tiras de la cuerda y Platypool hace el resto." : "Deux mètres de filet flottant ratissent la surface pendant que les brosses nettoient la ligne d'eau. Vous tirez sur la corde, Platypool fait le reste."}
            </p>

            <ul className="my-9 space-y-3 border-y border-ink/12 py-7 text-[0.95rem] text-ink/70">
              {(es ? ["Compatible con todas las piscinas, enterradas o elevadas", "Materiales anti-UV, resistentes al cloro y reciclables", "2 años de garantía del fabricante y atención al cliente en Francia"] : ["Compatible avec toutes les piscines, enterrées ou hors-sol", "Matériaux anti-UV, résistants au chlore et recyclables", "Garantie fabricant 2 ans, service client en France"]).map((item) => (
                <li key={item} className="reveal flex gap-3">
                  <Check /> <span>{item}</span>
                </li>
              ))}
            </ul>
            <ProductBuy variantId="50463396036950" price="69 €" />
          </div>
        </div>
      </section>

      <section className="expand bg-stone px-5 py-24 sm:px-8 sm:py-32" data-expand>
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <Words className="display text-[clamp(2rem,5vw,4rem)]" text={es ? "Pensada para hacer menos. / Y recoger *mucho* más" : "Pensée pour faire moins. / Et ramasser *beaucoup* plus"} />
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {localizedFeatures.map(([value, copy], index) => (
              <article key={value} className="reveal border-t border-ink/15 pt-6">
                <p className="figure text-[clamp(2.4rem,5vw,4rem)]">
                  {index === 0 ? <><Counter value={2} /> m</> : value}
                </p>
                <p className="mt-4 max-w-xs text-ink/60" data-blur>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="wipe-mask overflow-hidden rounded-2xl" data-wipe>
              <Image src="/media/flottante.webp" alt={es ? "Platypool flota sobre la superficie de la piscina" : "Platypool flotte à la surface du bassin"} width={1600} height={1600} className="aspect-square w-full object-cover" sizes="(min-width: 1024px) 48vw, 92vw" />
            </div>
          </div>
          <div>
            <Words className="display text-[clamp(2rem,4.6vw,3.6rem)]" text={es ? "Coloca. Camina. / *Disfruta*" : "Posez. Marchez. / *Profitez*"} />
            <div className="mt-10 space-y-7">
              {(es ? [["01", "Colócala sobre el agua", "La estructura flota de forma natural, sin esfuerzo ni mango que cargar"], ["02", "Da la vuelta", "La cuerda guía la red mientras los extremos permanecen contra la pared"], ["03", "Vacía y deja secar", "Basta con sacudirla. El polen se desprende cuando la red está seca"]] : [["01", "Posez-la sur l'eau", "La structure flotte naturellement, sans effort ni manche à porter."], ["02", "Faites le tour", "La corde guide le filet tandis que les extrémités restent contre la paroi."], ["03", "Videz et laissez sécher", "Un secouement suffit. Le pollen se détache une fois le filet sec."]]).map(([n, title, copy]) => (
                <div key={n} className="reveal grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/12 pt-5">
                  <span className="meta text-aqua-deep">{n}</span>
                  <div><h2 className="display text-[1.35rem]">{title}</h2><p className="mt-2 text-ink/60">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-aqua px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-10">
          <Words className="display max-w-3xl text-[clamp(2.2rem,5vw,4rem)]" text={es ? "Veinte minutos se convierten / en *uno*" : "Vingt minutes deviennent / *une*"} />
          <div className="reveal min-w-[18rem]"><ProductBuy variantId="50463396036950" price="69 €" compact contrast /></div>
        </div>
      </section>
    </PageChrome>
  );
}
