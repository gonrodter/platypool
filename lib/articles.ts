export type Article = {
  slug: string;
  title: string;
  category: "Entretien" | "Bien choisir" | "Comparatif" | "Innovation";
  date: string;
  image: string;
  excerpt: string;
};

const entries: Array<[string, string, Article["category"]]> = [
  ["innovation-francaise-accessoires-piscine", "Innovation française : les accessoires piscine qui changent l'entretien", "Innovation"],
  ["quelle-largeur-epuisette-choisir", "Quelle largeur d'épuisette choisir ?", "Bien choisir"],
  ["epuisette-piscine-solide-anti-uv", "Épuisette piscine solide et anti-UV : bien choisir", "Bien choisir"],
  ["epuisette-compatible-toutes-piscines", "Une épuisette compatible avec toutes les piscines", "Bien choisir"],
  ["entretien-piscine-sans-robot", "Entretien piscine sans robot : mode d'emploi", "Entretien"],
  ["nettoyage-express-piscine", "Nettoyage express de la piscine en dix minutes", "Entretien"],
  ["accessoires-piscine-qui-font-gagner-temps", "Les accessoires piscine qui font vraiment gagner du temps", "Bien choisir"],
  ["epuisette-xxl-ou-robot-piscine", "Épuisette XXL ou robot piscine ?", "Comparatif"],
  ["retirer-pollen-piscine-facilement", "Retirer le pollen de la piscine facilement", "Entretien"],
  ["guide-entretien-surface-piscine", "Le guide de l'entretien de surface", "Entretien"],
  ["faut-il-une-epuisette-xxl-pour-sa-piscine", "Faut-il une épuisette XXL pour sa piscine ?", "Bien choisir"],
  ["avis-epuisette-xxl-piscine", "Épuisette XXL piscine : avis et critères utiles", "Bien choisir"],
  ["quelle-epuisette-pour-piscine-enterree", "Quelle épuisette pour une piscine enterrée ?", "Bien choisir"],
  ["epuisette-large-vs-epuisette-classique", "Épuisette large ou épuisette classique", "Comparatif"],
  ["comment-entretenir-une-piscine-chaque-jour", "Comment entretenir une piscine chaque jour", "Entretien"],
  ["guide-choix-epuisette-piscine", "Guide pour choisir son épuisette de piscine", "Bien choisir"],
  ["nettoyer-ligne-eau-piscine", "Nettoyer la ligne d'eau de la piscine", "Entretien"],
  ["enlever-feuilles-surface-piscine", "Enlever les feuilles à la surface de la piscine", "Entretien"],
  ["epuisette-piscine-mieux-choisir", "Épuisette piscine : mieux la choisir", "Bien choisir"],
  ["meilleures-epuisettes-pour-grande-piscine", "Les meilleures épuisettes pour une grande piscine", "Bien choisir"],
  ["nettoyer-piscine-en-deux-minutes", "Nettoyer sa piscine en deux minutes", "Entretien"],
  ["platypool-vs-epuisette-classique", "Platypool face à l'épuisette classique", "Comparatif"],
  ["comment-nettoyer-piscine-en-2-minutes", "Comment nettoyer sa piscine en deux minutes", "Entretien"],
  ["accessoire-piscine-facile-a-utiliser", "Un accessoire piscine vraiment facile à utiliser", "Bien choisir"],
  ["epuisette-piscine-fabrication-francaise", "Pourquoi choisir une épuisette fabriquée en France", "Innovation"],
  ["meilleure-epuisette-piscine", "Quelle est la meilleure épuisette de piscine ?", "Bien choisir"],
  ["ramasser-aiguilles-de-pin-piscine", "Ramasser les aiguilles de pin dans la piscine", "Entretien"],
  ["comment-retirer-le-pollen-de-la-piscine", "Comment retirer le pollen de la piscine", "Entretien"],
  ["epuisette-piscine-ligne-deau-bien-la-choisir", "Choisir une épuisette qui nettoie aussi la ligne d'eau", "Bien choisir"],
  ["nettoyage-quotidien-piscine-sans-effort", "Le nettoyage quotidien de la piscine sans effort", "Entretien"],
  ["accessoire-entretien-piscine-gain-de-temps", "L'accessoire d'entretien qui fait gagner du temps", "Bien choisir"],
  ["epuisette-piscine-anti-feuilles-bien-choisir", "Bien choisir une épuisette anti-feuilles", "Bien choisir"],
  ["quelle-epuisette-pour-grande-piscine", "Quelle épuisette pour une grande piscine ?", "Bien choisir"],
  ["nettoyer-surface-eau-piscine-rapidement", "Nettoyer rapidement la surface de l'eau", "Entretien"],
  ["comment-enlever-les-feuilles-piscine", "Comment enlever les feuilles de la piscine", "Entretien"],
  ["comment-nettoyer-la-ligne-deau-piscine", "Comment nettoyer la ligne d'eau de la piscine", "Entretien"],
];

const images = [
  "/media/feuilles-surface.webp",
  "/media/ligne-eau.webp",
  "/media/flottante.webp",
  "/media/filet-plein.webp",
  "/media/un-doigt.webp",
  "/media/sortie-debris.webp",
];

export const articles: Article[] = entries.map(([slug, title, category], index) => ({
  slug,
  title,
  category,
  date: new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(2026, 6 - Math.floor(index / 6), Math.max(1, 1 + ((35 - index) % 27))),
  ),
  image: images[index % images.length],
  excerpt: `${title} : les gestes et critères qui comptent vraiment pour garder un bassin propre plus vite, avec moins d'effort.`,
}));

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

const spanishTitles = [
  "Innovación francesa: los accesorios de piscina que cambian el mantenimiento",
  "¿Qué anchura de recogehojas elegir?",
  "Recogehojas de piscina sólido y anti-UV: cómo elegirlo",
  "Un recogehojas compatible con todas las piscinas",
  "Mantenimiento de la piscina sin robot: guía práctica",
  "Limpieza rápida de la piscina en diez minutos",
  "Los accesorios de piscina que realmente ahorran tiempo",
  "¿Recogehojas XXL o robot de piscina?",
  "Cómo eliminar fácilmente el polen de la piscina",
  "Guía de mantenimiento de la superficie de la piscina",
  "¿Necesitas un recogehojas XXL para tu piscina?",
  "Recogehojas XXL para piscina: opiniones y criterios útiles",
  "¿Qué recogehojas elegir para una piscina enterrada?",
  "Recogehojas ancho o recogehojas clásico",
  "Cómo mantener una piscina cada día",
  "Guía para elegir tu recogehojas de piscina",
  "Cómo limpiar la línea de agua de la piscina",
  "Cómo retirar las hojas de la superficie de la piscina",
  "Cómo elegir mejor un recogehojas de piscina",
  "Los mejores recogehojas para una piscina grande",
  "Cómo limpiar la piscina en dos minutos",
  "Platypool frente al recogehojas clásico",
  "Cómo limpiar la piscina en dos minutos",
  "Un accesorio de piscina realmente fácil de usar",
  "Por qué elegir un recogehojas fabricado en Francia",
  "¿Cuál es el mejor recogehojas de piscina?",
  "Cómo recoger agujas de pino de la piscina",
  "Cómo retirar el polen de la piscina",
  "Elegir un recogehojas que también limpie la línea de agua",
  "La limpieza diaria de la piscina sin esfuerzo",
  "El accesorio de mantenimiento que ahorra tiempo",
  "Cómo elegir un recogehojas antihojas",
  "¿Qué recogehojas elegir para una piscina grande?",
  "Cómo limpiar rápidamente la superficie del agua",
  "Cómo quitar las hojas de la piscina",
  "Cómo limpiar la línea de agua de la piscina",
];

const categoriesEs: Record<Article["category"], Article["category"]> = {
  Entretien: "Entretien",
  "Bien choisir": "Bien choisir",
  Comparatif: "Comparatif",
  Innovation: "Innovation",
};

export const articlesEs: Article[] = entries.map(([slug, , category], index) => ({
  slug,
  title: spanishTitles[index],
  category: categoriesEs[category],
  date: new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(2026, 6 - Math.floor(index / 6), Math.max(1, 1 + ((35 - index) % 27))),
  ),
  image: images[index % images.length],
  excerpt: `${spanishTitles[index]}: los gestos y criterios que de verdad importan para mantener la piscina limpia más rápido y con menos esfuerzo.`,
}));

export const articleEsBySlug = new Map(articlesEs.map((article) => [article.slug, article]));
