"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Arrow";

type Props = { withdrawal?: boolean };

export default function ContactForm({ withdrawal = false }: Props) {
  const [sent, setSent] = useState(false);
  const pathname = usePathname();
  const es = pathname === "/es" || pathname.startsWith("/es/");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = withdrawal
      ? `${es ? "Desistimiento — pedido" : "Rétractation — commande"} ${data.get("commande") ?? ""}`
      : `${es ? "Contacto Platypool" : "Contact Platypool"} — ${data.get("nom") ?? ""}`;
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join("\n");
    window.location.href = `mailto:contact@platypool.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label>
        <span className="meta mb-2 block text-ink/45">{es ? "Nombre y apellidos" : "Nom et prénom"}</span>
        <input className="field" name="nom" required autoComplete="name" />
      </label>
      <label>
        <span className="meta mb-2 block text-ink/45">E-mail</span>
        <input className="field" name="email" type="email" required autoComplete="email" />
      </label>
      {withdrawal ? (
        <>
          <label>
            <span className="meta mb-2 block text-ink/45">{es ? "N.º de pedido" : "Nº de commande"}</span>
            <input className="field" name="commande" required />
          </label>
          <label>
            <span className="meta mb-2 block text-ink/45">{es ? "Fecha del pedido" : "Date de commande"}</span>
            <input className="field" name="date" type="date" />
          </label>
        </>
      ) : (
        <label className="sm:col-span-2">
          <span className="meta mb-2 block text-ink/45">{es ? "Teléfono · opcional" : "Téléphone · facultatif"}</span>
          <input className="field" name="telephone" type="tel" autoComplete="tel" />
        </label>
      )}
      <label className="sm:col-span-2">
        <span className="meta mb-2 block text-ink/45">Message</span>
        <textarea className="field min-h-40 resize-y" name="message" required />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">
          {withdrawal ? (es ? "Preparar mi solicitud" : "Préparer ma demande") : (es ? "Preparar mi correo" : "Préparer mon e-mail")} <Arrow />
        </button>
        {sent ? <p className="text-sm text-ink/55">{es ? "Tu aplicación de correo se abrirá con el mensaje preparado" : "Votre messagerie va s'ouvrir avec le message prérempli"}</p> : null}
      </div>
    </form>
  );
}
