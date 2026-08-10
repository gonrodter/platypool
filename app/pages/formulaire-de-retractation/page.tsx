import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import { byLocale, getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Rétractation — Platypool" },
  { title: "Desistimiento — Platypool" },
  { title: "Withdrawal — Platypool" },
);

export default async function WithdrawalPage() {
  const t = byLocale(await getLocale(), {
    es: { title: "Tu solicitud / sin *letra pequeña*", copy: "Dispones de 14 días para cambiar de opinión sobre un producto sin usar y conservado en su embalaje original. Prepara tu solicitud a continuación; tu aplicación de correo se abrirá con toda la información." },
    fr: { title: "Votre demande, / sans petite *ligne*", copy: "Vous disposez de 14 jours pour changer d'avis sur un produit non utilisé, conservé dans son emballage d'origine. Préparez votre demande ci-dessous ; votre messagerie s'ouvrira avec toutes les informations." },
    en: { title: "Your request / with no *small print*", copy: "You have 14 days to change your mind about an unused product kept in its original packaging. Prepare your request below and your email app will open with all the information." },
  });
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><Words as="h1" className="display max-w-4xl text-[clamp(2.7rem,6vw,5rem)]" text={t.title} /><p className="mt-7 max-w-2xl text-ink/65" data-blur>{t.copy}</p><div className="reveal mt-14 rounded-3xl bg-stone p-6 sm:p-10"><ContactForm withdrawal /></div></div></section></PageChrome>;
}
