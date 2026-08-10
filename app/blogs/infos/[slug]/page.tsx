import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageChrome from "@/components/PageChrome";
import Arrow from "@/components/Arrow";
import { articleBySlug, articleEsBySlug, articles, articlesEs, type Article } from "@/lib/articles";
import { getLocale, localizedPath } from "@/lib/i18n";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/infos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getLocale()) === "es" ? articleEsBySlug.get(slug) : articleBySlug.get(slug);
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

const copyEs: Record<Article["category"], Array<[string, string[]]>> = {
  Entretien: [
    ["Empieza por lo que flota", ["Las hojas, el polen y los insectos se retiran con más facilidad antes de hundirse o pegarse a la línea de agua. Una pasada breve pero frecuente casi siempre evita la gran limpieza del fin de semana.", "Trabaja en la dirección del viento y céntrate primero en las zonas donde se acumulan los residuos: esquinas, skimmers y el borde opuesto al viento dominante."]],
    ["El gesto correcto en el momento adecuado", ["Actúa cuando la suciedad aún está fresca. Una herramienta ancha reduce las pasadas y una estructura flotante evita cargar con el peso del agua y los residuos.", "La regularidad importa más que la fuerza. Dos minutos varias veces por semana valen más que media hora cuando todo ya se ha depositado en el fondo."]],
    ["Superficie, línea de agua y después filtración", ["Retira primero la materia visible, limpia después la línea de agua con un accesorio suave y, por último, comprueba la filtración y el equilibrio de la piscina. Este orden evita volver a poner en circulación lo que acabas de retirar."]],
  ],
  "Bien choisir": [
    ["La anchura útil", ["Un recogehojas estrecho parece manejable, pero obliga a multiplicar las pasadas. La anchura adecuada cubre una parte importante de la piscina sin dejar de ser fácil de guiar.", "En piscinas grandes, la superficie cubierta en cada pasada influye más en el tiempo de mantenimiento que unos pocos gramos de diferencia en el mango."]],
    ["Peso, flotabilidad y capacidad", ["El peso anunciado no lo cuenta todo: una herramienta que flota se maneja de forma distinta a una red que hay que sostener. Comprueba también la capacidad real y lo fácil que resulta vaciarla.", "Una bolsa grande evita detenerse hoja por hoja, siempre que la estructura permanezca estable cuando está cargada."]],
    ["Durabilidad y piezas reemplazables", ["El sol, el cloro y el roce son las pruebas reales. Prioriza materiales anti-UV y un diseño que permita sustituir la red o los cepillos sin desechar toda la estructura."]],
  ],
  Comparatif: [
    ["Dos herramientas, dos funciones", ["El robot trabaja sobre todo en el fondo. El recogehojas actúa antes: retira lo que flota y evita que parte de los residuos llegue al fondo. Por eso se complementan.", "Compara el tiempo de instalación, la superficie cubierta y el esfuerzo real, no solo el precio mostrado."]],
    ["El coste durante varias temporadas", ["Un accesorio barato pero frágil puede tener que sustituirse cada verano. Una estructura reparable cuesta más al principio, pero después solo requiere cambiar algunas piezas de desgaste."]],
    ["Lo que realmente ahorra tiempo", ["La anchura, la flotabilidad y la posibilidad de limpiar la línea de agua en la misma pasada influyen directamente en la duración de la rutina."]],
  ],
  Innovation: [
    ["Partir de una molestia real", ["Las innovaciones útiles rara vez comienzan con la tecnología. Empiezan con una tarea repetitiva, un gesto incómodo o un objeto que lleva demasiado tiempo sin evolucionar.", "Platypool nació de esa observación: hacer decenas de pasadas con una red pequeña había dejado de tener sentido."]],
    ["Diseñar para durar", ["Una innovación solo vale si resiste las temporadas. Los materiales, la reparabilidad y la disponibilidad de recambios forman parte del producto tanto como su idea central."]],
    ["Fabricar cerca", ["Una cadena corta facilita el control, las mejoras y el servicio posventa. Platypool se fabrica en Francia y se ensambla en Alsacia junto al ESAT Les Tournesols."]],
  ],
};

export default async function ArticlePage({ params }: PageProps<"/blogs/infos/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const es = locale === "es";
  const article = es ? articleEsBySlug.get(slug) : articleBySlug.get(slug);
  if (!article) notFound();
  const related = (es ? articlesEs : articles).filter((item) => item.category === article.category && item.slug !== slug).slice(0, 3);
  const category = es ? ({ Entretien: "Mantenimiento", "Bien choisir": "Cómo elegir", Comparatif: "Comparativa", Innovation: "Innovación" }[article.category]) : article.category;

  return (
    <PageChrome>
      <article>
        <header className="px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto max-w-5xl text-[clamp(2.6rem,6.5vw,5.5rem)]" data-blur>{article.title}</h1>
            <p className="meta mt-5 text-ink/40" data-blur>{category} · {article.date}</p>
            <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] leading-relaxed text-ink/60" data-blur>{article.excerpt}</p>
          </div>
        </header>
        <div className="reveal mx-auto max-w-6xl px-5 sm:px-8"><div className="wipe-mask overflow-hidden rounded-2xl" data-wipe><Image src={article.image} alt="" width={1400} height={900} priority className="aspect-[16/9] w-full object-cover" sizes="92vw" /></div></div>
        <div className="editorial mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="!mt-0 text-[1.15rem] !text-ink/75">{es ? "Una piscina limpia no exige necesariamente más material ni más esfuerzo. Lo importante es entender dónde se acumula la suciedad y actuar antes de que se convierta en una tarea pesada." : "Une piscine propre ne demande pas forcément plus de matériel ni plus d'effort. Elle demande surtout de comprendre où les salissures s'accumulent et d'intervenir avant qu'elles ne deviennent une corvée."}</p>
          {(es ? copyEs : copy)[article.category].map(([heading, paragraphs]) => <section key={heading}><h2 data-blur>{heading}</h2>{paragraphs.map(p=><p key={p} data-blur>{p}</p>)}</section>)}
          <aside className="reveal mt-14 rounded-2xl bg-aqua/35 p-7 sm:p-9"><p className="meta !mt-0 !text-ink/40">{es ? "En resumen" : "À retenir"}</p><p className="!text-ink/75">{es ? "Retirar pronto los residuos, cubrir más superficie en cada pasada y elegir una herramienta reparable: tres decisiones sencillas que transforman toda la rutina." : "Retirer les débris tôt, couvrir plus de surface à chaque passage et choisir un outil réparable : trois décisions simples qui changent toute la routine."}</p><a href={localizedPath(locale, "/products/epuisette-xxl")} className="mt-6 inline-flex items-center gap-3 border-b border-ink/25 pb-1">{es ? "Descubrir Platypool" : "Découvrir Platypool"} <Arrow /></a></aside>
        </div>
      </article>
      <section className="bg-stone px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><h2 className="display text-[clamp(1.8rem,4vw,3rem)]" data-blur>{es ? "Seguir leyendo" : "Continuer la lecture"}</h2><div className="mt-10 grid gap-7 md:grid-cols-3">{related.map(item=><a href={localizedPath(locale, `/blogs/infos/${item.slug}`)} key={item.slug} className="reveal group"><Image src={item.image} alt="" width={700} height={525} className="aspect-[4/3] w-full rounded-2xl object-cover" /><h3 className="display mt-5 text-[1.45rem]">{item.title}</h3></a>)}</div></div></section>
    </PageChrome>
  );
}
