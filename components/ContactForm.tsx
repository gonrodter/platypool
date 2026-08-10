"use client";

import { useState, type FormEvent } from "react";
import Arrow from "@/components/Arrow";

type Props = { withdrawal?: boolean };

export default function ContactForm({ withdrawal = false }: Props) {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = withdrawal
      ? `Rétractation — commande ${data.get("commande") ?? ""}`
      : `Contact Platypool — ${data.get("nom") ?? ""}`;
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join("\n");
    window.location.href = `mailto:contact@platypool.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label>
        <span className="meta mb-2 block text-ink/45">Nom et prénom</span>
        <input className="field" name="nom" required autoComplete="name" />
      </label>
      <label>
        <span className="meta mb-2 block text-ink/45">E-mail</span>
        <input className="field" name="email" type="email" required autoComplete="email" />
      </label>
      {withdrawal ? (
        <>
          <label>
            <span className="meta mb-2 block text-ink/45">Nº de commande</span>
            <input className="field" name="commande" required />
          </label>
          <label>
            <span className="meta mb-2 block text-ink/45">Date de commande</span>
            <input className="field" name="date" type="date" />
          </label>
        </>
      ) : (
        <label className="sm:col-span-2">
          <span className="meta mb-2 block text-ink/45">Téléphone · facultatif</span>
          <input className="field" name="telephone" type="tel" autoComplete="tel" />
        </label>
      )}
      <label className="sm:col-span-2">
        <span className="meta mb-2 block text-ink/45">Message</span>
        <textarea className="field min-h-40 resize-y" name="message" required />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="pill bg-aqua text-ink hover:bg-ink hover:text-paper">
          {withdrawal ? "Préparer ma demande" : "Préparer mon e-mail"} <Arrow />
        </button>
        {sent ? <p className="text-sm text-ink/55">Votre messagerie va s&apos;ouvrir avec le message prérempli.</p> : null}
      </div>
    </form>
  );
}
