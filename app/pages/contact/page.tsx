import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import { byLocale, getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Contact — Platypool", description: "Contactez l'équipe Platypool. Nous répondons généralement sous 48 heures." },
  { title: "Contacto — Platypool", description: "Contacta con el equipo de Platypool. Solemos responder en menos de 48 horas laborables." },
  { title: "Contact — Platypool", description: "Contact the Platypool team. We usually reply within 48 business hours." },
);

export default async function ContactPage() {
  const t = byLocale(await getLocale(), {
    es: { title: "¿Tienes una pregunta? / Hablemos *fácil*", copy: "Nuestro equipo está en Francia y suele responder en un plazo de 48 horas laborables.", email: "Correo directo", facts: [['Atención al cliente','Francia'],['Respuesta','Menos de 48 h'],['Garantía','2 años del fabricante']] },
    fr: { title: "Une question ? / Parlons-en *simplement*", copy: "Notre équipe est en France et répond généralement sous 48 heures ouvrées.", email: "E-mail direct", facts: [['Service client','France'],['Réponse','Moins de 48 h'],['Garantie','2 ans fabricant']] },
    en: { title: "Have a question? / Let's keep it *simple*", copy: "Our team is based in France and usually replies within 48 business hours.", email: "Direct email", facts: [['Customer service','France'],['Response','Within 48 hours'],['Warranty','2 years']] },
  });
  return (
    <PageChrome>
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <Words as="h1" className="display text-[clamp(2.8rem,6vw,5.2rem)]" text={t.title} />
            <p className="mt-8 max-w-md text-ink/60" data-blur>{t.copy}</p>
            <div className="reveal mt-10 border-t border-ink/12 pt-6">
              <p className="meta text-ink/40">{t.email}</p>
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
          {t.facts.map(([a,b])=><div className="reveal border-t border-paper/15 pt-5" key={a}><p className="meta text-paper/35">{a}</p><p className="display mt-3 text-2xl">{b}</p></div>)}
        </div>
      </section>
    </PageChrome>
  );
}
