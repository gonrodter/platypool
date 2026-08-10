import type { Metadata } from "next";
import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";

export const metadata: Metadata = { title: "Rétractation — Platypool" };

export default function WithdrawalPage() {
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><p className="meta text-ink/40" data-blur>Annuler une commande</p><Words as="h1" className="display mt-7 max-w-4xl text-[clamp(2.7rem,6vw,5rem)]" text="Votre demande, / sans petite *ligne*" /><p className="mt-7 max-w-2xl text-ink/65" data-blur>Vous disposez de 14 jours pour changer d&apos;avis sur un produit non utilisé, conservé dans son emballage d&apos;origine. Préparez votre demande ci-dessous ; votre messagerie s&apos;ouvrira avec toutes les informations.</p><div className="reveal mt-14 rounded-3xl bg-stone p-6 sm:p-10"><ContactForm withdrawal /></div></div></section></PageChrome>;
}
