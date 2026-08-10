import PageChrome from "@/components/PageChrome";
import Link from "next/link";

export default function NotFound() {
  return <PageChrome><section className="flex min-h-[70vh] items-center px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl text-center"><p className="meta text-ink/40">404 · page introuvable</p><h1 className="display mt-7 text-[clamp(3rem,8vw,7rem)]">Cette page a pris l&apos;eau.</h1><Link href="/" className="pill mt-10 bg-aqua text-ink hover:bg-ink hover:text-paper">Retour à l&apos;accueil</Link></div></section></PageChrome>;
}
