import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import { byLocale, getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Filet de rechange Platypool", description: "Le filet seul, conçu pour prolonger la durée de vie de votre épuisette XXL Platypool." },
  { title: "Red de recambio Platypool", description: "La red por separado, diseñada para prolongar la vida útil de tu recogehojas XXL Platypool." },
  { title: "Platypool replacement net", description: "The net on its own, designed to extend the life of your Platypool XXL pool skimmer." },
);

export default async function NetPage() {
  const t = byLocale(await getLocale(), {
    es: { alt: "Red de recambio Platypool", title: "Cambia la red. / No tu *Platypool*", copy: "La red por separado, lista para sustituir la pieza original. La misma anchura, la misma gran capacidad y montaje sin herramientas sobre tu estructura actual.", compatibility: "Compatible con el recogehojas XXL Platypool · solo la red", close: "Una pieza de desgaste. / Muchos años *más*" },
    fr: { alt: "Filet de rechange Platypool", title: "Le filet change. / Pas votre *Platypool*", copy: "Le filet seul, prêt à remplacer la pièce d'origine. Même largeur, même grande contenance et montage sans outil sur votre structure existante.", compatibility: "Compatible avec l'épuisette XXL Platypool · filet uniquement", close: "Une pièce d'usure. / Des années de *plus*" },
    en: { alt: "Platypool replacement net", title: "Replace the net. / Not your *Platypool*", copy: "The net on its own, ready to replace the original part. The same width, the same generous capacity and tool-free fitting on your existing frame.", compatibility: "Compatible with the Platypool XXL pool skimmer · net only", close: "One replaceable part. / Many *more* years" },
  });
  return (
    <PageChrome>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="wipe-mask overflow-hidden rounded-2xl bg-stone" data-wipe>
              <Image src="/media/eponge.webp" alt={t.alt} width={1080} height={1080} priority className="aspect-square w-full object-cover" sizes="(min-width: 1024px) 48vw, 92vw" />
            </div>
          </div>
          <div>
            <Words as="h1" className="display text-[clamp(2.6rem,6vw,4.8rem)]" text={t.title} />
            <p className="mt-7 max-w-lg text-ink/65" data-blur>
              {t.copy}
            </p>
            <div className="my-9 border-y border-ink/12 py-7 text-ink/65">
              <p data-blur>{t.compatibility}</p>
            </div>
            <ProductBuy variantId="53385854615894" price="10,90 €" />
          </div>
        </div>
      </section>
      <section className="expand bg-stone px-5 py-20 sm:px-8 sm:py-28" data-expand>
        <div className="mx-auto max-w-4xl text-center">
          <Words className="display text-[clamp(2rem,5vw,3.8rem)]" text={t.close} />
        </div>
      </section>
    </PageChrome>
  );
}
