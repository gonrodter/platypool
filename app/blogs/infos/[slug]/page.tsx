import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageChrome from "@/components/PageChrome";
import Arrow from "@/components/Arrow";
import { articleBySlug, articles, type Article } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/infos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  return article ? { title: `${article.title} — Platypool`, description: article.excerpt } : {};
}

const copy: Record<Article["category"], Array<[string, string[]]>> = {
  Entretien: [
    ["Commencer par ce qui flotte", ["Les feuilles, le pollen et les insectes sont plus faciles à retirer avant qu'ils ne coulent ou ne se collent à la ligne d'eau. Un passage court mais régulier évite presque toujours le grand nettoyage du week-end.", "Travaillez dans le sens du vent et concentrez-vous d'abord sur les zones où les débris s'accumulent : angles, skimmers et bord opposé au vent dominant."]],
    ["Le bon geste, au bon moment", ["Intervenez quand les salissures sont encore fraîches. Un outil large réduit les passages, tandis qu'une structure flottante évite de porter le poids de l'eau et des débris.", "La régularité compte davantage que la force. Deux minutes plusieurs fois par semaine valent mieux qu'une demi-heure lorsque tout s'est déjà déposé au fond."]],
    ["Surface, ligne d'eau, puis filtration", ["Retirez d'abord les matières visibles, nettoyez ensuite la ligne d'eau avec un accessoire doux, puis contrôlez la filtration et l'équilibre du bassin. Cet ordre empêche de remettre en circulation ce que vous venez d'enlever."]],
  ],
  "Bien choisir": [
    ["La largeur utile", ["Une épuisette étroite paraît maniable, mais oblige à multiplier les allers-retours. La bonne largeur est celle qui couvre une part importante du bassin tout en restant facile à guider.", "Pour les grands bassins, la surface couverte à chaque passage change davantage le temps d'entretien que quelques grammes de différence sur le manche."]],
    ["Poids, flottabilité et contenance", ["Le poids annoncé ne raconte pas tout : un outil qui flotte se manie différemment d'un filet que l'on doit soutenir. Vérifiez aussi la contenance réelle et la facilité de vidage.", "Une grande poche évite de s'arrêter feuille par feuille, à condition que la structure reste stable lorsqu'elle est chargée."]],
    ["Durabilité et pièces remplaçables", ["Le soleil, le chlore et les frottements sont les vrais tests. Privilégiez des matériaux anti-UV et une conception où le filet ou les brosses se remplacent sans jeter toute la structure."]],
  ],
  Comparatif: [
    ["Deux outils, deux missions", ["Le robot traite surtout le fond. L'épuisette agit avant : elle retire ce qui flotte et évite qu'une partie des débris atteigne le fond. Les usages sont donc complémentaires.", "Comparez le temps d'installation, la surface couverte et l'effort réel, pas seulement le prix affiché."]],
    ["Le coût sur plusieurs saisons", ["Un accessoire peu cher mais fragile peut être remplacé chaque été. Une structure réparable coûte davantage au départ, mais conserve seulement quelques pièces d'usure."]],
    ["Ce qui fait gagner du temps", ["La largeur, la flottabilité et la possibilité de nettoyer la ligne d'eau dans le même passage ont un impact direct sur la durée de la routine."]],
  ],
  Innovation: [
    ["Partir d'un vrai irritant", ["Les innovations utiles commencent rarement par la technologie. Elles commencent par une tâche répétitive, un geste pénible ou un objet qui n'a pas évolué depuis trop longtemps.", "Platypool est née de cette observation : faire des dizaines de passages avec un petit filet n'avait plus de sens."]],
    ["Concevoir pour durer", ["Une innovation ne vaut que si elle résiste aux saisons. Les matériaux, la réparabilité et la disponibilité des pièces d'usure font partie du produit autant que son idée centrale."]],
    ["Fabriquer au plus près", ["Une chaîne courte facilite le contrôle, les améliorations et le service après-vente. Platypool est fabriquée en France et assemblée en Alsace avec l'ESAT Les Tournesols."]],
  ],
};

export default async function ArticlePage({ params }: PageProps<"/blogs/infos/[slug]">) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.category === article.category && item.slug !== slug).slice(0, 3);

  return (
    <PageChrome>
      <article>
        <header className="px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="meta text-ink/40" data-blur>{article.category} · {article.date}</p>
            <h1 className="display mx-auto mt-7 max-w-5xl text-[clamp(2.6rem,6.5vw,5.5rem)]" data-blur>{article.title}</h1>
            <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] leading-relaxed text-ink/60" data-blur>{article.excerpt}</p>
          </div>
        </header>
        <div className="reveal mx-auto max-w-6xl px-5 sm:px-8"><div className="wipe-mask overflow-hidden rounded-2xl" data-wipe><Image src={article.image} alt="" width={1400} height={900} priority className="aspect-[16/9] w-full object-cover" sizes="92vw" /></div></div>
        <div className="editorial mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="!mt-0 text-[1.15rem] !text-ink/75">Une piscine propre ne demande pas forcément plus de matériel ni plus d&apos;effort. Elle demande surtout de comprendre où les salissures s&apos;accumulent et d&apos;intervenir avant qu&apos;elles ne deviennent une corvée.</p>
          {copy[article.category].map(([heading, paragraphs]) => <section key={heading}><h2 data-blur>{heading}</h2>{paragraphs.map(p=><p key={p} data-blur>{p}</p>)}</section>)}
          <aside className="reveal mt-14 rounded-2xl bg-aqua/35 p-7 sm:p-9"><p className="meta !mt-0 !text-ink/40">À retenir</p><p className="!text-ink/75">Retirer les débris tôt, couvrir plus de surface à chaque passage et choisir un outil réparable : trois décisions simples qui changent toute la routine.</p><a href="/products/epuisette-xxl" className="mt-6 inline-flex items-center gap-3 border-b border-ink/25 pb-1">Découvrir Platypool <Arrow /></a></aside>
        </div>
      </article>
      <section className="bg-stone px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><p className="meta text-ink/40" data-blur>Continuer la lecture</p><div className="mt-10 grid gap-7 md:grid-cols-3">{related.map(item=><a href={`/blogs/infos/${item.slug}`} key={item.slug} className="reveal group"><Image src={item.image} alt="" width={700} height={525} className="aspect-[4/3] w-full rounded-2xl object-cover" /><h2 className="display mt-5 text-[1.45rem]">{item.title}</h2></a>)}</div></div></section>
    </PageChrome>
  );
}
