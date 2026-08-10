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
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : pathname === "/es" || pathname.startsWith("/es/") ? "es" : "fr";
  const t = {
    es: { price: "Precio IVA incluido", quantity: "Cantidad", reduce: "Reducir la cantidad", increase: "Aumentar la cantidad", buy: "Comprar ya", secure: "Pago seguro · envío a Francia y Europa" },
    fr: { price: "Prix TTC", quantity: "Quantité", reduce: "Réduire la quantité", increase: "Augmenter la quantité", buy: "Acheter maintenant", secure: "Paiement sécurisé · livraison France & Europe" },
    en: { price: "Price including VAT", quantity: "Quantity", reduce: "Reduce quantity", increase: "Increase quantity", buy: "Buy now", secure: "Secure payment · delivery across France and Europe" },
  }[locale];
  const checkout = `https://www.platypool.com/cart/${variantId}:${quantity}`;

  return (
    <div className={compact ? "" : "pt-7"}>
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="meta text-ink/40">{t.price}</p>
          <p className="figure mt-3 text-[3rem]">{price}</p>
        </div>
        <div>
          <p className="meta mb-2 text-ink/40">{t.quantity}</p>
          <div className="flex items-center rounded-full border border-ink/15">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label={t.reduce}
            >
              −
            </button>
            <output className="w-8 text-center tabular-nums">{quantity}</output>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-10 w-10 text-xl text-ink/55 hover:text-ink"
              aria-label={t.increase}
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
        {t.buy} <Arrow />
      </a>
      <p className="meta mt-4 text-center text-ink/40">
        {t.secure}
      </p>
    </div>
  );
}
