import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import { byLocale, getLocale } from "@/lib/i18n";

export default async function DataOptOutPage() {
  const t = byLocale(await getLocale(), {
    es: { title: "Controla cómo se comparten / tus *datos*", copy: "Puedes solicitar que Platypool no comparta tus datos con fines publicitarios. Utiliza la página oficial de privacidad de la tienda para aplicar tu preferencia al servicio actualmente en producción.", button: "Abrir el ajuste oficial" },
    fr: { title: "Maîtriser le partage / de vos *données*", copy: "Vous pouvez demander à Platypool de ne pas partager vos données à des fins publicitaires. Utilisez la page officielle de confidentialité de la boutique pour appliquer votre préférence au service actuellement en production.", button: "Ouvrir le réglage officiel" },
    en: { title: "Control how / your *data* is shared", copy: "You can ask Platypool not to share your data for advertising purposes. Use the store's official privacy page to apply your preference to the service currently in production.", button: "Open the official setting" },
  });
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><Words as="h1" className="display max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text={t.title} /><p className="mt-8 max-w-2xl text-ink/65" data-blur>{t.copy}</p><a href="https://www.platypool.com/pages/data-sharing-opt-out" className="pill reveal mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper">{t.button}</a></div></section></PageChrome>;
}
