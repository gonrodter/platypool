"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Entry = { q: string; a: React.ReactNode };

const entriesFr: Entry[] = [
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

const entriesEs: Entry[] = [
  {
    q: "¿Es fácil de usar?",
    a: <><p>La colocas sobre el agua y tiras de la cuerda mientras caminas alrededor de la piscina. Flota y recoge todo a su paso.</p><p>Para sacarla, tiras de la cuerda, la sacudes en una esquina y la dejas secar. Una vez seca, basta con volver a sacudirla para eliminar el polen.</p></>,
  },
  {
    q: "¿Necesito herramientas para montarla?",
    a: <p>No. Se monta una sola vez al recibirla, en 4 pasos y sin herramientas. Solo necesitas un minuto. También puedes desmontarla y guardarla en su caja durante el invierno.</p>,
  },
  {
    q: "¿Es compatible con todas las piscinas?",
    a: <p>Sí: enterradas o elevadas, de liner, azulejo, hormigón o madera, de cualquier forma y tamaño. Si mide más de 4 metros de ancho, basta con hacer dos pasadas.</p>,
  },
  {
    q: "¿Platypool sustituye a un robot?",
    a: <p>No: Platypool limpia la superficie y la línea de agua; el robot limpia el fondo. Se complementan. Al usar Platypool con regularidad, llegan menos hojas al fondo y el robot trabaja menos.</p>,
  },
  {
    q: "¿Qué hago si la red se perfora o los cepillos se desgastan?",
    a: <p>Todos los elementos son sustituibles y el servicio de atención al cliente está en Francia. De más de 10.000 Platypool vendidas, todavía no se ha recibido ninguna devolución posventa. Si surge un problema, enviamos la pieza de inmediato y sin coste.</p>,
  },
  {
    q: "¿Qué incluye la caja?",
    a: <p>4 tubos de 50 cm, 2 extensores con cepillos premontados, 1 red de 2 metros y 1 cuerda con 4 ganchos ya fijados. Caja de 52 × 17 cm y 1,2 kg.</p>,
  },
  {
    q: "¿Cómo funcionan el envío, las devoluciones y la garantía?",
    a: <p>El punto de recogida DPD se elige después del pago —hay más de 8.500 en Francia—. Dispones de 14 días para cambiar de opinión sobre un producto sin usar y en su embalaje original. El reembolso se realiza en los 7 días posteriores a su recepción y la garantía del fabricante es de 2 años.</p>,
  },
];

const entriesEn: Entry[] = [
  {
    q: "Is it easy to use?",
    a: <><p>Place it on the water and pull the rope as you walk around the pool. It floats and collects everything in its path.</p><p>To remove it, pull the rope, shake it out in a corner and leave it to dry. Once dry, another quick shake removes the pollen.</p></>,
  },
  {
    q: "Do I need tools to assemble it?",
    a: <p>No. You assemble it once when it arrives, in four steps and without tools. It takes just one minute. You can also take it apart and store it in its box over winter.</p>,
  },
  {
    q: "Is it compatible with every pool?",
    a: <p>Yes: in-ground or above-ground, liner, tiled, concrete or wooden, in any shape or size. If your pool is more than 4 metres wide, simply make two passes.</p>,
  },
  {
    q: "Does Platypool replace a pool robot?",
    a: <p>No. Platypool cleans the surface and waterline; a robot cleans the bottom. They complement each other. Using Platypool regularly means fewer leaves reach the bottom and less work for the robot.</p>,
  },
  {
    q: "What if the net tears or the brushes wear out?",
    a: <p>Every part can be replaced and our customer service team is based in France. More than 10,000 Platypools have been sold without a single after-sales return. If anything goes wrong, we send the part immediately and free of charge.</p>,
  },
  {
    q: "What is included in the box?",
    a: <p>Four 50 cm tubes, two extenders with pre-fitted brushes, one 2-metre net and one rope with four hooks already attached. The box measures 52 × 17 cm and weighs 1.2 kg.</p>,
  },
  {
    q: "How do delivery, returns and the warranty work?",
    a: <p>You choose your DPD pickup point after payment. You have 14 days to change your mind about an unused product in its original packaging. Refunds are issued within 7 days of receipt and the manufacturer warranty lasts 2 years.</p>,
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const pathname = usePathname();
  const entries = pathname === "/en" || pathname.startsWith("/en/") ? entriesEn : pathname === "/es" || pathname.startsWith("/es/") ? entriesEs : entriesFr;

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
