import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Filet de rechange Platypool", description: "Le filet seul, conçu pour prolonger la durée de vie de votre épuisette XXL Platypool." },
  { title: "Red de recambio Platypool", description: "La red por separado, diseñada para prolongar la vida útil de tu recogehojas XXL Platypool." },
);

export default async function NetPage() {
  const es = (await getLocale()) === "es";
  return (
    <PageChrome>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="wipe-mask overflow-hidden rounded-2xl bg-stone" data-wipe>
              <Image src="/media/eponge.webp" alt={es ? "Red de recambio Platypool" : "Filet de rechange Platypool"} width={1080} height={1080} priority className="aspect-square w-full object-cover" sizes="(min-width: 1024px) 48vw, 92vw" />
            </div>
          </div>
          <div>
            <p className="meta text-ink/40" data-blur>{es ? "Pieza de recambio" : "Pièce de rechange"}</p>
            <Words as="h1" className="display mt-6 text-[clamp(2.6rem,6vw,4.8rem)]" text={es ? "Cambia la red. / No tu *Platypool*" : "Le filet change. / Pas votre *Platypool*"} />
            <p className="mt-7 max-w-lg text-ink/65" data-blur>
              {es ? "La red por separado, lista para sustituir la pieza original. La misma anchura, la misma gran capacidad y montaje sin herramientas sobre tu estructura actual." : "Le filet seul, prêt à remplacer la pièce d'origine. Même largeur, même grande contenance et montage sans outil sur votre structure existante."}
            </p>
            <div className="my-9 border-y border-ink/12 py-7 text-ink/65">
              <p data-blur>{es ? "Compatible con el recogehojas XXL Platypool · solo la red" : "Compatible avec l'épuisette XXL Platypool · filet uniquement"}</p>
            </div>
            <ProductBuy variantId="53385854615894" price="10,90 €" />
          </div>
        </div>
      </section>
      <section className="expand bg-stone px-5 py-20 sm:px-8 sm:py-28" data-expand>
        <div className="mx-auto max-w-4xl text-center">
          <p className="meta text-ink/40" data-blur>{es ? "Reparar antes que reemplazar" : "Réparer plutôt que remplacer"}</p>
          <Words className="display mt-7 text-[clamp(2rem,5vw,3.8rem)]" text={es ? "Una pieza de desgaste. / Muchos años *más*" : "Une pièce d'usure. / Des années de *plus*"} />
        </div>
      </section>
    </PageChrome>
  );
}
