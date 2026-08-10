import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Arrow from "@/components/Arrow";
import { getLocale, localizedMetadata, localizedPath } from "@/lib/i18n";

export const generateMetadata = () => localizedMetadata(
  { title: "Boutique — Platypool" },
  { title: "Tienda — Platypool" },
);

const products = [
  { href: "/products/epuisette-xxl", image: "/media/packshot-boite.webp", eyebrow: "L'originale", title: "Épuisette XXL", price: "69 €" },
  { href: "/products/filet", image: "/media/eponge.webp", eyebrow: "Pièce de rechange", title: "Filet seul", price: "10,90 €" },
];

export default async function CollectionPage() {
  const locale = await getLocale();
  const es = locale === "es";
  return <PageChrome><section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><p className="meta text-ink/40" data-blur>{es ? "Tienda" : "Boutique"}</p><Words as="h1" className="display mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6rem)]" text={es ? "Una piscina más limpia / Un verano más *largo*" : "Une piscine plus propre / Un été plus *long*"} /><div className="mt-16 grid gap-8 md:grid-cols-2">{products.map((product, index)=><a href={localizedPath(locale, product.href)} key={product.href} className="reveal group"><div className="overflow-hidden rounded-2xl bg-stone"><Image src={product.image} alt="" width={1080} height={1080} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(min-width:768px) 46vw, 92vw" /></div><div className="mt-5 flex items-end justify-between gap-6"><div><p className="meta text-ink/35">{es ? (index ? "Pieza de recambio" : "La original") : product.eyebrow}</p><h2 className="display mt-2 text-3xl">{es ? (index ? "Solo la red" : "Recogehojas XXL") : product.title}</h2></div><span className="flex items-center gap-3 text-lg">{product.price}<Arrow /></span></div></a>)}</div></div></section></PageChrome>;
}
