import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Livraison Corse — Platypool" },
  { title: "Envío a Córcega — Platypool" },
);

export default async function CorsicaDeliveryPage() {
  const es = (await getLocale()) === "es";
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="meta text-ink/40" data-blur>{es ? "Suplemento de envío" : "Supplément livraison"}</p><Words as="h1" className="display mt-7 text-[clamp(2.8rem,7vw,5.8rem)]" text={es ? "Platypool también llega / a *Córcega*" : "Platypool arrive / aussi en *Corse*"} /><p className="mt-7 max-w-xl text-ink/65" data-blur>{es ? "Añade este suplemento únicamente si nuestro equipo te lo ha indicado para enviar tu pedido a Córcega." : "Ajoutez ce supplément uniquement si notre équipe vous l'a indiqué pour l'expédition de votre commande vers la Corse."}</p></div><div className="reveal rounded-3xl bg-stone p-7 sm:p-9"><ProductBuy variantId="54164866859350" price="25 €" compact /></div></div></section></PageChrome>;
}
