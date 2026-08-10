"use client";

import { useState } from "react";
import Arrow from "@/components/Arrow";

type Props = {
  variantId: string;
  price: string;
  compact?: boolean;
};

export default function ProductBuy({ variantId, price, compact = false }: Props) {
  const [quantity, setQuantity] = useState(1);
  const checkout = `https://www.platypool.com/cart/${variantId}:${quantity}`;

  return (
    <div className={compact ? "" : "border-t border-ink/12 pt-7"}>
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="meta text-ink/40">Prix TTC</p>
          <p className="figure mt-3 text-[3rem]">{price}</p>
        </div>
        <div>
          <p className="meta mb-2 text-ink/40">Quantité</p>
          <div className="flex items-center rounded-full border border-ink/15">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label="Réduire la quantité"
            >
              −
            </button>
            <output className="w-8 text-center tabular-nums">{quantity}</output>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label="Augmenter la quantité"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <a
        href={checkout}
        className="pill mt-7 w-full justify-center bg-aqua text-ink hover:bg-ink hover:text-paper"
      >
        Ajouter au panier <Arrow />
      </a>
      <p className="meta mt-4 text-center text-ink/40">
        Paiement sécurisé · livraison France &amp; Europe
      </p>
    </div>
  );
}
