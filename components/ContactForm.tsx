"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Arrow";

type Props = { withdrawal?: boolean };

export default function ContactForm({ withdrawal = false }: Props) {
  const [sent, setSent] = useState(false);
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : pathname === "/es" || pathname.startsWith("/es/") ? "es" : "fr";
  const t = {
    es: { withdrawalSubject: "Desistimiento — pedido", contactSubject: "Contacto Platypool", name: "Nombre y apellidos", order: "N.º de pedido", date: "Fecha del pedido", phone: "Teléfono · opcional", message: "Mensaje", request: "Preparar mi solicitud", email: "Preparar mi correo", sent: "Tu aplicación de correo se abrirá con el mensaje preparado" },
    fr: { withdrawalSubject: "Rétractation — commande", contactSubject: "Contact Platypool", name: "Nom et prénom", order: "Nº de commande", date: "Date de commande", phone: "Téléphone · facultatif", message: "Message", request: "Préparer ma demande", email: "Préparer mon e-mail", sent: "Votre messagerie va s'ouvrir avec le message prérempli" },
    en: { withdrawalSubject: "Withdrawal — order", contactSubject: "Platypool contact", name: "Full name", order: "Order number", date: "Order date", phone: "Phone · optional", message: "Message", request: "Prepare my request", email: "Prepare my email", sent: "Your email app will open with the message ready to send" },
  }[locale];

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = withdrawal
      ? `${t.withdrawalSubject} ${data.get("commande") ?? ""}`
      : `${t.contactSubject} — ${data.get("nom") ?? ""}`;
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join("\n");
    window.location.href = `mailto:contact@platypool.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label>
        <span className="meta mb-2 block text-ink/45">{t.name}</span>
        <input className="field" name="nom" required autoComplete="name" />
      </label>
      <label>
        <span className="meta mb-2 block text-ink/45">E-mail</span>
        <input className="field" name="email" type="email" required autoComplete="email" />
      </label>
      {withdrawal ? (
        <>
          <label>
            <span className="meta mb-2 block text-ink/45">{t.order}</span>
            <input className="field" name="commande" required />
          </label>
          <label>
            <span className="meta mb-2 block text-ink/45">{t.date}</span>
            <input className="field" name="date" type="date" />
          </label>
        </>
      ) : (
        <label className="sm:col-span-2">
          <span className="meta mb-2 block text-ink/45">{t.phone}</span>
          <input className="field" name="telephone" type="tel" autoComplete="tel" />
        </label>
      )}
      <label className="sm:col-span-2">
        <span className="meta mb-2 block text-ink/45">{t.message}</span>
        <textarea className="field min-h-40 resize-y" name="message" required />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">
          {withdrawal ? t.request : t.email} <Arrow />
        </button>
        {sent ? <p className="text-sm text-ink/55">{t.sent}</p> : null}
      </div>
    </form>
  );
}
