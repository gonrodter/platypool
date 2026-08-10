import type { Metadata } from "next";
import Image from "next/image";
import PageChrome from "@/components/PageChrome";
import Words from "@/components/Words";
import Arrow from "@/components/Arrow";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Conseils piscine — Platypool",
  description: "Guides simples pour nettoyer la surface, la ligne d'eau et choisir les bons accessoires de piscine.",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;
  return (
    <PageChrome>
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="meta text-ink/40" data-blur>Conseils piscine</p>
          <Words as="h1" className="display mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6rem)]" text="Moins de corvée. / Plus de *baignades*." />
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <a href={`/blogs/infos/${featured.slug}`} className="group grid gap-8 rounded-3xl bg-stone p-4 sm:p-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div className="reveal"><div className="wipe-mask overflow-hidden rounded-2xl" data-wipe><Image src={featured.image} alt="" width={1200} height={900} priority className="aspect-[4/3] w-full object-cover" sizes="(min-width:1024px) 57vw, 92vw" /></div></div>
            <div className="p-3 sm:p-6">
              <p className="meta text-ink/40">À lire · {featured.category}</p>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3.4rem)]">{featured.title}</h2>
              <p className="mt-5 text-ink/60">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-1">Lire le guide <Arrow /></span>
            </div>
          </a>

          <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <article key={article.slug} className="reveal group">
                <a href={`/blogs/infos/${article.slug}`}>
                  <div className="overflow-hidden rounded-2xl bg-stone">
                    <Image src={article.image} alt="" width={800} height={600} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 92vw" />
                  </div>
                  <p className="meta mt-5 text-ink/35">{article.category} · {article.date}</p>
                  <h2 className="display mt-3 text-[1.55rem] leading-[1.05]">{article.title}</h2>
                  <p className="mt-3 line-clamp-3 text-[0.95rem] text-ink/55">{article.excerpt}</p>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
