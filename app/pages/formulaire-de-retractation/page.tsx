import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Rétractation — Platypool" },
  { title: "Desistimiento — Platypool" },
);

export default async function WithdrawalPage() {
  const es = (await getLocale()) === "es";
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><p className="meta text-ink/40" data-blur>{es ? "Cancelar un pedido" : "Annuler une commande"}</p><Words as="h1" className="display mt-7 max-w-4xl text-[clamp(2.7rem,6vw,5rem)]" text={es ? "Tu solicitud / sin *letra pequeña*" : "Votre demande, / sans petite *ligne*"} /><p className="mt-7 max-w-2xl text-ink/65" data-blur>{es ? "Dispones de 14 días para cambiar de opinión sobre un producto sin usar y conservado en su embalaje original. Prepara tu solicitud a continuación; tu aplicación de correo se abrirá con toda la información." : "Vous disposez de 14 jours pour changer d'avis sur un produit non utilisé, conservé dans son emballage d'origine. Préparez votre demande ci-dessous ; votre messagerie s'ouvrira avec toutes les informations."}</p><div className="reveal mt-14 rounded-3xl bg-stone p-6 sm:p-10"><ContactForm withdrawal /></div></div></section></PageChrome>;
}
