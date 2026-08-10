import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import { getLocale, localizedMetadata, localizedPath } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Livraison — Platypool", description: "Toutes les informations sur la livraison Platypool en relais DPD ou à domicile." },
  { title: "Envíos — Platypool", description: "Toda la información sobre el envío de Platypool a puntos DPD o a domicilio." },
);

const modes = [
  { eyebrow: "DPD Relais", title: "Choisissez votre point relais après le paiement", points: ["Plus de 8 500 relais en France", "Choix immédiat après validation de la commande", "8 jours calendaires pour retirer le colis"] },
  { eyebrow: "DPD Predict", title: "Une heure de passage, pas une journée d'attente", points: ["Date annoncée par SMS et e-mail", "Créneau d'une heure le matin de la livraison", "Reprogrammation, voisin ou lieu sûr en un clic"] },
];

export default async function DeliveryPage() {
  const locale = await getLocale();
  const es = locale === "es";
  const translatedModes = es ? [
    { eyebrow: "DPD Pickup", title: "Elige tu punto de recogida después del pago", points: ["Más de 8.500 puntos en Francia", "Elección inmediata tras validar el pedido", "8 días naturales para recoger el paquete"] },
    { eyebrow: "DPD Predict", title: "Una hora de entrega, no un día entero esperando", points: ["Fecha comunicada por SMS y correo", "Franja de una hora la mañana de la entrega", "Reprogramación, vecino o lugar seguro en un clic"] },
  ] : modes;
  return <PageChrome>
    <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"><div className="mx-auto max-w-6xl"><Words as="h1" className="display max-w-5xl text-[clamp(2.8rem,7vw,6rem)]" text={es ? "Tu Platypool llega / como más te *convenga*" : "Votre Platypool arrive / comme cela vous *arrange*"} /><p className="meta mt-6 text-ink/40" data-blur>{es ? "Entrega en 2–4 días" : "Livraison en 2 à 4 jours"}</p></div></section>
    <section className="expand bg-stone px-5 py-20 sm:px-8 sm:py-28" data-expand><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">{translatedModes.map((mode,i)=><article key={mode.eyebrow} className={`reveal rounded-3xl p-7 sm:p-10 ${i ? 'bg-paper/65' : 'bg-aqua/40'}`}><h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)]">{mode.title}</h2><p className="meta mt-4 text-ink/40">{mode.eyebrow}</p><ul className="mt-10 space-y-4 border-t border-ink/12 pt-6 text-ink/65">{mode.points.map(p=><li key={p} data-blur>— {p}</li>)}</ul></article>)}</div></section>
    <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-4xl text-center"><Words className="display text-[clamp(2rem,4.5vw,3.4rem)]" text={es ? "Estamos a un / correo de *distancia*" : "Nous sommes à un / e-mail de *distance*"} /><a href={localizedPath(locale, "/pages/contact")} className="pill reveal mt-9 bg-aqua text-ink hover:bg-ink hover:text-paper">{es ? "Contactar con Platypool" : "Contacter Platypool"}</a></div></section>
  </PageChrome>;
}
