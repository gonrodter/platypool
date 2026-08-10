import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import { byLocale, getLocale } from "@/lib/i18n";

export default async function GdprPage() {
  const t = byLocale(await getLocale(), {
    es: { title: "Tu información / sigue siendo *tuya*", copy: "Para solicitar el acceso, la rectificación o la eliminación de tus datos personales, escríbenos desde la dirección de correo afectada. El equipo te indicará qué elementos pueden ser necesarios para verificar tu identidad.", rights: "Ejercer mis derechos", policy: "Leer la política oficial" },
    fr: { title: "Vos informations / restent les *vôtres*", copy: "Pour demander l'accès, la rectification ou la suppression de vos données personnelles, écrivez-nous depuis l'adresse concernée. L'équipe vous indiquera les éventuels éléments nécessaires pour vérifier votre identité.", rights: "Exercer mes droits", policy: "Lire la politique officielle" },
    en: { title: "Your information / remains *yours*", copy: "To request access to, correction or deletion of your personal data, email us from the address concerned. The team will let you know what may be needed to verify your identity.", rights: "Exercise my rights", policy: "Read the official policy" },
  });
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl"><Words as="h1" className="display max-w-4xl text-[clamp(2.8rem,6vw,5rem)]" text={t.title} /><p className="mt-8 max-w-2xl text-ink/65" data-blur>{t.copy}</p><div className="reveal mt-10 flex flex-wrap gap-4"><a href="mailto:contact@platypool.fr?subject=GDPR%20request" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">{t.rights}</a><a href="https://www.platypool.com/policies/privacy-policy" className="pill border border-ink/15">{t.policy}</a></div></div></section></PageChrome>;
}
