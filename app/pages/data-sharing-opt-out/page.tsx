import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";

export default function DataOptOutPage() {
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><p className="meta text-ink/40" data-blur>Confidentialité</p><Words as="h1" className="display mt-7 max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text="Maîtriser le partage / de vos *données*" /><p className="mt-8 max-w-2xl text-ink/65" data-blur>Vous pouvez demander à Platypool de ne pas partager vos données à des fins publicitaires. Utilisez la page officielle de confidentialité de la boutique pour appliquer votre préférence au service actuellement en production.</p><a href="https://www.platypool.com/pages/data-sharing-opt-out" className="pill reveal mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper">Ouvrir le réglage officiel</a></div></section></PageChrome>;
}
