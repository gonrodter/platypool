import type { Metadata } from "next";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = { title: "Informations légales — Platypool" };

const policies = [
  ["Confidentialité", "privacy-policy"], ["Mentions légales", "legal-notice"], ["Remboursement", "refund-policy"], ["Expédition", "shipping-policy"], ["Conditions de vente", "terms-of-sale"], ["Coordonnées", "contact-information"], ["Conditions d'utilisation", "terms-of-service"],
];

export default function PoliciesPage() {
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><p className="meta text-ink/40" data-blur>Transparence</p><Words as="h1" className="display mt-7 max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text="Tout ce qui mérite / d'être lu *clairement*." /><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{policies.map(([label,slug])=><a key={slug} href={`https://www.platypool.com/policies/${slug}`} className="reveal group flex min-h-40 flex-col justify-between rounded-2xl border border-ink/12 p-6 transition-colors hover:bg-stone"><span className="meta text-ink/35">Document officiel</span><span className="flex items-end justify-between gap-6"><span className="display text-2xl">{label}</span><Arrow /></span></a>)}</div><p className="mt-8 max-w-2xl text-sm text-ink/45" data-blur>Ces documents ouvrent leur version officielle actuellement publiée par Platypool afin de toujours présenter le texte contractuel à jour.</p></div></section></PageChrome>;
}
