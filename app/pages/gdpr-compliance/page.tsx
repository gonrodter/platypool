import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";

export default function GdprPage() {
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><p className="meta text-ink/40" data-blur>Vos données</p><Words as="h1" className="display mt-7 max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text="Vos informations / restent les *vôtres*" /><p className="mt-8 max-w-2xl text-ink/65" data-blur>Pour demander l&apos;accès, la rectification ou la suppression de vos données personnelles, écrivez-nous depuis l&apos;adresse concernée. L&apos;équipe vous indiquera les éventuels éléments nécessaires pour vérifier votre identité.</p><div className="reveal mt-10 flex flex-wrap gap-4"><a href="mailto:contact@platypool.fr?subject=Demande%20RGPD" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">Exercer mes droits</a><a href="https://www.platypool.com/policies/privacy-policy" className="pill border border-ink/15">Lire la politique officielle</a></div></div></section></PageChrome>;
}
