import type { Metadata } from "next";
import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";

export const metadata: Metadata = {
  title: "Filet de rechange Platypool",
  description: "Le filet seul, conçu pour prolonger la durée de vie de votre épuisette XXL Platypool.",
};

export default function NetPage() {
  return (
    <PageChrome>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="wipe-mask overflow-hidden rounded-2xl bg-stone" data-wipe>
              <Image src="/media/eponge.webp" alt="Filet de rechange Platypool" width={1080} height={1080} priority className="aspect-square w-full object-cover" sizes="(min-width: 1024px) 48vw, 92vw" />
            </div>
          </div>
          <div>
            <p className="meta text-ink/40" data-blur>Pièce de rechange</p>
            <Words as="h1" className="display mt-6 text-[clamp(2.6rem,6vw,4.8rem)]" text="Le filet change / Pas votre *Platypool*" />
            <p className="mt-7 max-w-lg text-ink/65" data-blur>
              Le filet seul, prêt à remplacer la pièce d&apos;origine. Même largeur,
              même grande contenance et montage sans outil sur votre structure existante.
            </p>
            <div className="my-9 border-y border-ink/12 py-7 text-ink/65">
              <p data-blur>Compatible avec l&apos;épuisette XXL Platypool · filet uniquement.</p>
            </div>
            <ProductBuy variantId="53385854615894" price="10,90 €" />
          </div>
        </div>
      </section>
      <section className="expand bg-stone px-5 py-20 sm:px-8 sm:py-28" data-expand>
        <div className="mx-auto max-w-4xl text-center">
          <p className="meta text-ink/40" data-blur>Réparer plutôt que remplacer</p>
          <Words className="display mt-7 text-[clamp(2rem,5vw,3.8rem)]" text="Une pièce d'usure / Des années de *plus*" />
        </div>
      </section>
    </PageChrome>
  );
}
