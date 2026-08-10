import PageChrome from "@/components/PageChrome";
import Link from "next/link";
import { getLocale, localizedPath } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getLocale();
  const es = locale === "es";
  return <PageChrome><section className="flex min-h-[70vh] items-center px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl text-center"><h1 className="display text-[clamp(3rem,8vw,7rem)]" data-blur>{es ? "Esta página se ha ido a pique" : "Cette page a pris l'eau"}</h1><p className="meta mt-5 text-ink/40">404 · {es ? "página no encontrada" : "page introuvable"}</p><Link href={localizedPath(locale, "/")} className="pill mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper">{es ? "Volver al inicio" : "Retour à l'accueil"}</Link></div></section></PageChrome>;
}
