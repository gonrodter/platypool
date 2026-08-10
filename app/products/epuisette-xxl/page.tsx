import type { Metadata } from "next";
import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import Counter from "@/components/Counter";
import { Check } from "@/components/Marks";

export const metadata: Metadata = {
  title: "Épuisette XXL Platypool — 2 mètres, surface et ligne d'eau",
  description: "L'épuisette flottante de 2 mètres qui nettoie la surface et la ligne d'eau en un seul tour de bassin.",
};

const gallery = [
  ["/media/packshot-boite.webp", "Platypool et sa boîte fabriquée en France"],
  ["/media/contenu-boite.webp", "Tous les éléments contenus dans la boîte Platypool"],
  ["/media/filet-plein.webp", "Le grand filet Platypool rempli de feuilles"],
  ["/media/ligne-eau.webp", "Les brosses Platypool nettoient la ligne d'eau"],
];

const features = [
  ["2 mètres", "Toute la largeur utile en un seul passage."],
  ["2-en-1", "Surface et ligne d'eau dans le même geste."],
  ["800 grammes", "Elle flotte et se manie d'un seul doigt."],
  ["7 kg", "Une vraie contenance, même après un coup de vent."],
  ["1 minute", "Quatre étapes de montage, aucun outil."],
  ["10 ans", "Structure durable, filet et brosses remplaçables."],
];

export default function ProductPage() {
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
                    alt={alt}
                    width={1080}
                    height={1080}
                    priority={index === 0}
                    className={`w-full object-cover ${index === 0 ? "aspect-[16/10]" : "aspect-square"}`}
                    sizes={index === 0 ? "(min-width: 1024px) 54vw, 92vw" : "(min-width: 1024px) 27vw, 45vw"}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="order-2 my-10 lg:order-none lg:sticky lg:top-28 lg:my-0 lg:self-start">
            <p className="meta text-ink/40" data-blur>Innovation brevetée · fabriquée en France</p>
            <Words
              as="h1"
              className="display mt-6 text-[clamp(2.5rem,5.5vw,4.6rem)]"
              text="La piscine propre. / En un seul *tour*."
            />
            <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-ink/65" data-blur>
              Deux mètres de filet flottant ratissent la surface pendant que les
              brosses nettoient la ligne d&apos;eau. Vous tirez sur la corde,
              Platypool fait le reste.
            </p>

            <ul className="my-9 space-y-3 border-y border-ink/12 py-7 text-[0.95rem] text-ink/70">
              {[
                "Compatible avec toutes les piscines, enterrées ou hors-sol",
                "Matériaux anti-UV, résistants au chlore et recyclables",
                "Garantie fabricant 2 ans, service client en France",
              ].map((item) => (
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
            <p className="meta text-ink/40" data-blur>Tout ce qui change</p>
            <Words className="display mt-7 text-[clamp(2rem,5vw,4rem)]" text="Pensée pour faire moins. / Et ramasser *beaucoup* plus." />
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([value, copy], index) => (
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
              <Image src="/media/flottante.webp" alt="Platypool flotte à la surface du bassin" width={1600} height={1600} className="aspect-square w-full object-cover" sizes="(min-width: 1024px) 48vw, 92vw" />
            </div>
          </div>
          <div>
            <p className="meta text-ink/40" data-blur>Le geste</p>
            <Words className="display mt-7 text-[clamp(2rem,4.6vw,3.6rem)]" text="Posez. Marchez. / *Profitez*." />
            <div className="mt-10 space-y-7">
              {[
                ["01", "Posez-la sur l'eau", "La structure flotte naturellement, sans effort ni manche à porter."],
                ["02", "Faites le tour", "La corde guide le filet tandis que les extrémités restent contre la paroi."],
                ["03", "Videz et laissez sécher", "Un secouement suffit. Le pollen se détache une fois le filet sec."],
              ].map(([n, title, copy]) => (
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
          <Words className="display max-w-3xl text-[clamp(2.2rem,5vw,4rem)]" text="Vingt minutes deviennent / *une*." />
          <div className="reveal min-w-[18rem]"><ProductBuy variantId="50463396036950" price="69 €" compact /></div>
        </div>
      </section>
    </PageChrome>
  );
}
