import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import { getLocale } from "@/lib/i18n";

export default async function GdprPage() {
  const es = (await getLocale()) === "es";
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><Words as="h1" className="display max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text={es ? "Tu información / sigue siendo *tuya*" : "Vos informations / restent les *vôtres*"} /><p className="mt-8 max-w-2xl text-ink/65" data-blur>{es ? "Para solicitar el acceso, la rectificación o la eliminación de tus datos personales, escríbenos desde la dirección de correo afectada. El equipo te indicará qué elementos pueden ser necesarios para verificar tu identidad." : "Pour demander l'accès, la rectification ou la suppression de vos données personnelles, écrivez-nous depuis l'adresse concernée. L'équipe vous indiquera les éventuels éléments nécessaires pour vérifier votre identité."}</p><div className="reveal mt-10 flex flex-wrap gap-4"><a href="mailto:contact@platypool.fr?subject=Demande%20RGPD" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">{es ? "Ejercer mis derechos" : "Exercer mes droits"}</a><a href="https://www.platypool.com/policies/privacy-policy" className="pill border border-ink/15">{es ? "Leer la política oficial" : "Lire la politique officielle"}</a></div></div></section></PageChrome>;
}
