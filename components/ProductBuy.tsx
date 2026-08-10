"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Arrow";

type Props = {
  variantId: string;
  price: string;
  compact?: boolean;
  contrast?: boolean;
};

export default function ProductBuy({ variantId, price, compact = false, contrast = false }: Props) {
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();
  const es = pathname === "/es" || pathname.startsWith("/es/");
  const checkout = `https://www.platypool.com/cart/${variantId}:${quantity}`;

  return (
    <div className={compact ? "" : "pt-7"}>
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="meta text-ink/40">{es ? "Precio IVA incluido" : "Prix TTC"}</p>
          <p className="figure mt-3 text-[3rem]">{price}</p>
        </div>
        <div>
          <p className="meta mb-2 text-ink/40">{es ? "Cantidad" : "Quantité"}</p>
          <div className="flex items-center rounded-full border border-ink/15">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label={es ? "Reducir la cantidad" : "Réduire la quantité"}
            >
              −
            </button>
            <output className="w-8 text-center tabular-nums">{quantity}</output>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label={es ? "Aumentar la cantidad" : "Augmenter la quantité"}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <a
        href={checkout}
        className={`pill mt-7 w-full justify-center ${
          contrast
            ? "bg-ink text-paper hover:bg-paper hover:text-ink"
            : "bg-aqua text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        {es ? "Añadir al carrito" : "Ajouter au panier"} <Arrow />
      </a>
      <p className="meta mt-4 text-center text-ink/40">
        {es ? "Pago seguro · envío a Francia y Europa" : "Paiement sécurisé · livraison France & Europe"}
      </p>
    </div>
  );
}
