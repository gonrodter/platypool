import type { Metadata } from "next";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";

export const metadata: Metadata = { title: "Livraison — Platypool", description: "Toutes les informations sur la livraison Platypool en relais DPD ou à domicile." };

const modes = [
  { eyebrow: "DPD Relais", title: "Choisissez votre point relais après le paiement.", points: ["Plus de 8 500 relais en France", "Choix immédiat après validation de la commande", "8 jours calendaires pour retirer le colis"] },
  { eyebrow: "DPD Predict", title: "Une heure de passage, pas une journée d'attente.", points: ["Date annoncée par SMS et e-mail", "Créneau d'une heure le matin de la livraison", "Reprogrammation, voisin ou lieu sûr en un clic"] },
];

export default function DeliveryPage() {
  return <PageChrome>
    <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"><div className="mx-auto max-w-6xl"><p className="meta text-ink/40" data-blur>Livraison en 2 à 4 jours</p><Words as="h1" className="display mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6rem)]" text="Votre Platypool arrive / comme cela vous *arrange*." /></div></section>
    <section className="expand bg-stone px-5 py-20 sm:px-8 sm:py-28" data-expand><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">{modes.map((mode,i)=><article key={mode.eyebrow} className={`reveal rounded-3xl p-7 sm:p-10 ${i ? 'bg-paper/65' : 'bg-aqua/40'}`}><p className="meta text-ink/40">{mode.eyebrow}</p><h2 className="display mt-6 text-[clamp(1.8rem,3.5vw,2.8rem)]">{mode.title}</h2><ul className="mt-10 space-y-4 border-t border-ink/12 pt-6 text-ink/65">{mode.points.map(p=><li key={p} data-blur>— {p}</li>)}</ul></article>)}</div></section>
    <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-4xl text-center"><p className="meta text-ink/40" data-blur>Une question sur votre colis ?</p><Words className="display mt-6 text-[clamp(2rem,4.5vw,3.4rem)]" text="Nous sommes à un / e-mail de *distance*." /><a href="/pages/contact" className="pill reveal mt-9 bg-aqua text-ink hover:bg-ink hover:text-paper">Contacter Platypool</a></div></section>
  </PageChrome>;
}
