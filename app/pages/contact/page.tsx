import type { Metadata } from "next";
import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";

export const metadata: Metadata = { title: "Contact — Platypool", description: "Contactez l'équipe Platypool. Nous répondons généralement sous 48 heures." };

export default function ContactPage() {
  return (
    <PageChrome>
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="meta text-ink/40" data-blur>Nous écrire</p>
            <Words as="h1" className="display mt-7 text-[clamp(2.8rem,6vw,5.2rem)]" text="Une question ? / Parlons-en *simplement*" />
            <p className="mt-8 max-w-md text-ink/60" data-blur>Notre équipe est en France et répond généralement sous 48 heures ouvrées.</p>
            <div className="reveal mt-10 border-t border-ink/12 pt-6">
              <p className="meta text-ink/40">E-mail direct</p>
              <a className="mt-2 block text-xl hover:text-aqua-deep" href="mailto:contact@platypool.fr">contact@platypool.fr</a>
            </div>
          </div>
          <div className="reveal rounded-3xl bg-stone p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-deep px-5 py-16 text-paper sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {[['Service client','France'],['Réponse','Moins de 48 h'],['Garantie','2 ans fabricant']].map(([a,b])=><div className="reveal border-t border-paper/15 pt-5" key={a}><p className="meta text-paper/35">{a}</p><p className="display mt-3 text-2xl">{b}</p></div>)}
        </div>
      </section>
    </PageChrome>
  );
}
