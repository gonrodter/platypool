import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Arrow from "@/components/Arrow";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Informations légales — Platypool" },
  { title: "Información legal — Platypool" },
);

const policies = [
  ["Confidentialité", "privacy-policy"], ["Mentions légales", "legal-notice"], ["Remboursement", "refund-policy"], ["Expédition", "shipping-policy"], ["Conditions de vente", "terms-of-sale"], ["Coordonnées", "contact-information"], ["Conditions d'utilisation", "terms-of-service"],
];

export default async function PoliciesPage() {
  const es = (await getLocale()) === "es";
  const labels = es ? ["Privacidad", "Aviso legal", "Reembolsos", "Envíos", "Condiciones de venta", "Datos de contacto", "Condiciones de uso"] : policies.map(([label]) => label);
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><Words as="h1" className="display max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text={es ? "Todo lo que merece / leerse con *claridad*" : "Tout ce qui mérite / d'être lu *clairement*"} /><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{policies.map(([,slug], index)=><a key={slug} href={`https://www.platypool.com/policies/${slug}`} className="reveal group flex min-h-40 items-end justify-between gap-6 rounded-2xl border border-ink/12 p-6 transition-colors hover:bg-stone"><span><span className="display block text-2xl">{labels[index]}</span><span className="meta mt-3 block text-ink/35">{es ? "Documento oficial" : "Document officiel"}</span></span><Arrow /></a>)}</div><p className="mt-8 max-w-2xl text-sm text-ink/45" data-blur>{es ? "Estos enlaces abren la versión oficial publicada actualmente por Platypool para mostrar siempre el texto contractual vigente." : "Ces documents ouvrent leur version officielle actuellement publiée par Platypool afin de toujours présenter le texte contractuel à jour."}</p></div></section></PageChrome>;
}
