import PageChrome from "@/components/PageChrome";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import { getLocale, localizedMetadata } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Contact — Platypool", description: "Contactez l'équipe Platypool. Nous répondons généralement sous 48 heures." },
  { title: "Contacto — Platypool", description: "Contacta con el equipo de Platypool. Solemos responder en menos de 48 horas laborables." },
);

export default async function ContactPage() {
  const es = (await getLocale()) === "es";
  return (
    <PageChrome>
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="meta text-ink/40" data-blur>{es ? "Escríbenos" : "Nous écrire"}</p>
            <Words as="h1" className="display mt-7 text-[clamp(2.8rem,6vw,5.2rem)]" text={es ? "¿Tienes una pregunta? / Hablemos *fácil*" : "Une question ? / Parlons-en *simplement*"} />
            <p className="mt-8 max-w-md text-ink/60" data-blur>{es ? "Nuestro equipo está en Francia y suele responder en un plazo de 48 horas laborables." : "Notre équipe est en France et répond généralement sous 48 heures ouvrées."}</p>
            <div className="reveal mt-10 border-t border-ink/12 pt-6">
              <p className="meta text-ink/40">{es ? "Correo directo" : "E-mail direct"}</p>
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
          {(es ? [['Atención al cliente','Francia'],['Respuesta','Menos de 48 h'],['Garantía','2 años del fabricante']] : [['Service client','France'],['Réponse','Moins de 48 h'],['Garantie','2 ans fabricant']]).map(([a,b])=><div className="reveal border-t border-paper/15 pt-5" key={a}><p className="meta text-paper/35">{a}</p><p className="display mt-3 text-2xl">{b}</p></div>)}
        </div>
      </section>
    </PageChrome>
  );
}
