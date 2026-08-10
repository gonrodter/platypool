"use client";

import { useState } from "react";

type Entry = { q: string; a: React.ReactNode };

const entries: Entry[] = [
  {
    q: "Est-ce facile à utiliser ?",
    a: (
      <>
        <p>
          Vous la lancez sur l&apos;eau et vous tirez sur la corde en marchant
          autour du bassin. Elle flotte et ramasse tout sur son passage.
        </p>
        <p>
          Pour la sortir, vous tirez la corde, vous la secouez dans un coin et
          vous la laissez sécher. Une fois sèche, un second secouement suffit à
          faire partir le pollen.
        </p>
      </>
    ),
  },
  {
    q: "Faut-il des outils pour la monter ?",
    a: (
      <p>
        Non. Le montage se fait en 4 étapes, sans outil, une seule fois à la
        réception. Comptez une minute. Vous pouvez la démonter et la ranger dans
        sa boîte pour l&apos;hivernage.
      </p>
    ),
  },
  {
    q: "Est-ce compatible avec toutes les piscines ?",
    a: (
      <p>
        Oui : enterrées ou hors-sol, liner, carrelage, béton ou bois, toutes
        formes et toutes tailles. Au-delà de 4 mètres de large, il suffit de
        passer deux fois.
      </p>
    ),
  },
  {
    q: "Est-ce que Platypool remplace un robot ?",
    a: (
      <p>
        Non — elle nettoie la surface et la ligne d&apos;eau, le robot nettoie le
        fond. Les deux sont complémentaires. En passant Platypool régulièrement,
        moins de feuilles atteignent le fond, et le robot travaille moins.
      </p>
    ),
  },
  {
    q: "Le filet se perce, les brosses s'usent. Que faire ?",
    a: (
      <p>
        Tous les éléments sont remplaçables et le service client est en France.
        Sur plus de 10 000 Platypool vendues, aucun retour SAV à ce jour. Si un
        souci survient, la pièce part immédiatement, sans frais.
      </p>
    ),
  },
  {
    q: "Que contient la boîte ?",
    a: (
      <p>
        4 tubes de 50 cm, 2 extendeurs avec brosses pré-montées, 1 filet de 2
        mètres et 1 corde avec 4 crochets déjà fixés. Boîte de 52 × 17 cm, 1,2
        kg.
      </p>
    ),
  },
  {
    q: "Livraison, retours et garantie ?",
    a: (
      <p>
        Point Relais DPD choisi après paiement (plus de 8 500 relais en France).
        14 jours pour changer d&apos;avis sur un produit non utilisé dans son
        emballage d&apos;origine, remboursement sous 7 jours après réception.
        Garantie fabricant 2 ans.
      </p>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-ink/12">
      {entries.map((entry, i) => {
        const isOpen = open === i;
        return (
          <div key={entry.q} className="reveal border-b border-ink/12">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
              >
                <span className="display text-[clamp(1.2rem,2.2vw,1.65rem)]">
                  {entry.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-[1.6rem] leading-none font-light text-ink/40 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl space-y-4 pb-8 text-ink/70">
                  {entry.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
