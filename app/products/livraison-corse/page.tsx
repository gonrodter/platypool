import PageChrome from "@/components/PageChrome";
import ProductBuy from "@/components/ProductBuy";
import Words from "@/components/Words";
import { byLocale, getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Livraison Corse — Platypool" },
  { title: "Envío a Córcega — Platypool" },
  { title: "Corsica delivery — Platypool" },
);

export default async function CorsicaDeliveryPage() {
  const t = byLocale(await getLocale(), {
    es: { title: "Platypool también llega / a *Córcega*", copy: "Añade este suplemento únicamente si nuestro equipo te lo ha indicado para enviar tu pedido a Córcega." },
    fr: { title: "Platypool arrive / aussi en *Corse*", copy: "Ajoutez ce supplément uniquement si notre équipe vous l'a indiqué pour l'expédition de votre commande vers la Corse." },
    en: { title: "Platypool also ships / to *Corsica*", copy: "Add this surcharge only if our team has instructed you to do so for delivery of your order to Corsica." },
  });
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><Words as="h1" className="display text-[clamp(2.8rem,7vw,5.8rem)]" text={t.title} /><p className="mt-7 max-w-xl text-ink/65" data-blur>{t.copy}</p></div><div className="reveal rounded-3xl bg-stone p-7 sm:p-9"><ProductBuy variantId="54164866859350" price="25 €" compact /></div></div></section></PageChrome>;
}
