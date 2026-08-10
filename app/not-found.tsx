import PageChrome from "@/components/PageChrome";
import Link from "next/link";
import { byLocale, getLocale, localizedPath } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getLocale();
  const t = byLocale(locale, {
    es: { title: "Esta página se ha ido a pique", label: "página no encontrada", button: "Volver al inicio" },
    fr: { title: "Cette page a pris l'eau", label: "page introuvable", button: "Retour à l'accueil" },
    en: { title: "This page has gone overboard", label: "page not found", button: "Back to home" },
  });
  return <PageChrome><section className="flex min-h-[70vh] items-center px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl text-center"><h1 className="display text-[clamp(3rem,8vw,7rem)]" data-blur>{t.title}</h1><p className="meta mt-5 text-ink/40">404 · {t.label}</p><Link href={localizedPath(locale, "/")} className="pill mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper">{t.button}</Link></div></section></PageChrome>;
}
