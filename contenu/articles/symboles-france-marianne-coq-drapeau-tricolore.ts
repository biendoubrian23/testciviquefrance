import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/symboles-france-marianne-coq-drapeau-tricolore`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "symboles-france-marianne-coq-drapeau-tricolore",
  titre: "Les symboles de la France : Marianne, le coq, le drapeau tricolore",
  titreSeo: "Les symboles de la France : Marianne, le coq, le drapeau tricolore",
  resume: "Découvrez tous les symboles officiels de la France : Marianne, le coq gaulois, le drapeau bleu-blanc-rouge, la Marseillaise, le 14 juillet. Fiche de révision complète.",
  chapo: "Les symboles de la France incarnent l'identité nationale et les valeurs républicaines. Du drapeau tricolore à la Marseillaise, de Marianne au coq gaulois, découvrez la signification de ces emblèmes incontournables pour le test civique.",
  publieLe: "2025-12-12",
  modifieLe: "2025-12-12",
  minutes: 12,
  theme: "symboles france",
  motsCles: [
    "symboles france",
    "drapeau français",
    "marseillaise hymne",
    "marianne république",
    "coq gaulois",
    "14 juillet fête nationale",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  blocs: [
    { type: "h2", texte: "Le drapeau tricolore : bleu, blanc, rouge", id: "drapeau-tricolore" },
    { type: "p", texte: "**Origine du drapeau**" },
    {
      type: "p",
      texte: "Le drapeau tricolore naît pendant la Révolution française (1789). Il combine :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **bleu** et le **rouge** : couleurs de Paris",
        "Le **blanc** : couleur traditionnelle de la royauté et de la France",
      ],
    },
    { type: "p", texte: "**Signification des couleurs**" },
    { type: "p", texte: "Plusieurs interprétations existent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Bleu = liberté, rouge = fraternité, blanc = égalité",
        "Les trois ordres : clergé, noblesse, tiers-état réunis",
        "Paris (bleu et rouge) et le Roi (blanc)",
      ],
    },
    { type: "p", texte: "**Statut officiel**" },
    {
      type: "p",
      texte: "Le drapeau tricolore est l'emblème national de la France selon l'article 2 de la Constitution de 1958. Il flotte sur tous les bâtiments publics.",
    },
    { type: "p", texte: "**Usage du drapeau**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Obligatoire sur les édifices publics",
        "Arboré lors des cérémonies officielles",
        "Les trois couleurs sont disposées verticalement",
        "Le bleu est toujours du côté du mât",
      ],
    },
    { type: "h2", texte: "La Marseillaise : hymne national", id: "marseillaise" },
    { type: "p", texte: "**Création de l'hymne**" },
    {
      type: "p",
      texte: "La Marseillaise est composée par **Rouget de Lisle** à Strasbourg dans la nuit du 25 au 26 avril 1792. Son titre original est \"Chant de guerre pour l'Armée du Rhin\".",
    },
    { type: "p", texte: "**Pourquoi \"Marseillaise\" ?**" },
    {
      type: "p",
      texte: "Ce sont les fédérés marseillais qui popularisent ce chant en le chantant lors de leur marche vers Paris en 1792. Le peuple parisien l'adopte alors sous le nom de \"Marseillaise\".",
    },
    { type: "p", texte: "**Hymne national officiel**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1795 : premier hymne national",
        "1879 : hymne officiel de la IIIe République",
        "1958 : inscrit dans la Constitution (article 2)",
      ],
    },
    { type: "p", texte: "**Paroles du premier couplet (à connaître)**" },
    { type: "p", texte: "\"Allons enfants de la Patrie," },
    { type: "p", texte: "Le jour de gloire est arrivé !" },
    { type: "p", texte: "Contre nous de la tyrannie," },
    { type: "p", texte: "L'étendard sanglant est levé !\"" },
    { type: "p", texte: "**Usage de la Marseillaise**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Jouée lors des cérémonies officielles",
        "Interprétée lors des événements sportifs internationaux",
        "Enseignée dans les écoles",
      ],
    },
    { type: "h2", texte: "Marianne : visage de la République", id: "marianne" },
    { type: "p", texte: "**Origine de Marianne**" },
    {
      type: "p",
      texte: "Marianne est l'allégorie de la République française. Elle apparaît sous la Révolution comme symbole de la liberté et de la République.",
    },
    { type: "p", texte: "**Pourquoi \"Marianne\" ?**" },
    {
      type: "p",
      texte: "Marie et Anne étaient des prénoms très populaires au XVIIIe siècle dans le peuple. Marianne représente donc le peuple français et la République.",
    },
    { type: "p", texte: "**Représentation de Marianne**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Coiffée du **bonnet phrygien** (symbole de liberté)",
        "Arbore une **cocarde tricolore**",
        "Porte parfois les attributs de la liberté (chaînes brisées)",
        "Parfois représentée avec des épis de blé (prospérité)",
      ],
    },
    { type: "p", texte: "**Marianne au quotidien**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Buste présent dans toutes les mairies",
        "Figure sur les timbres-poste",
        "Représentée sur les pièces de monnaie",
        "Utilisée sur les documents officiels",
      ],
    },
    { type: "p", texte: "**Les \"Marianne\" célèbres**" },
    {
      type: "p",
      texte: "Depuis 1969, des personnalités incarnent Marianne sur les timbres : Brigitte Bardot, Catherine Deneuve, Laetitia Casta...",
    },
    { type: "h2", texte: "Les autres symboles de la France", id: "autres-symboles" },
    { type: "p", texte: "**Le coq gaulois**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Origine : jeu de mots latin (gallus = coq et Gaulois)",
        "Symbole de fierté et de vigilance",
        "Présent sur les grilles de l'Élysée, les maillots sportifs",
      ],
    },
    { type: "p", texte: "**La fête nationale du 14 Juillet**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Commémore la prise de la Bastille (14 juillet 1789)",
        "Et la Fête de la Fédération (14 juillet 1790)",
        "Défilé militaire sur les Champs-Élysées",
        "Feux d'artifice et bals populaires",
      ],
    },
    { type: "p", texte: "**Le sceau de la République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Figure la Liberté assise",
        "Tenue par le président de la République",
        "Apposé sur les textes constitutionnels",
      ],
    },
    { type: "p", texte: "**Le faisceau de licteur**" },
    {
      type: "liste",
      style: "puces",
      items: ["Symbole romain d'autorité", "Représente l'union et la force du peuple"],
    },
    { type: "p", texte: "**La devise \"Liberté, Égalité, Fraternité\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscrite au fronton des bâtiments publics",
        "Article 2 de la Constitution",
        "Résume les valeurs républicaines",
      ],
    },
    { type: "p", texte: "**Le jour du souvenir : 11 novembre**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Armistice de la Première Guerre mondiale (1918)",
        "Hommage à tous les morts pour la France",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les symboles de la France racontent notre histoire et incarnent nos valeurs. Connaître le drapeau, la Marseillaise et Marianne est essentiel pour le test civique. Entraînez-vous sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "M6Jqed7F16I", titre: "Les symboles de la République française" },
  ],
  sources: [
    {
      titre: "Élysée - Les symboles de la République",
      url: "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique-francaise",
      type: "officiel",
      description: "Présentation officielle des symboles nationaux",
    },
    {
      titre: "Gouvernement - Drapeau, hymne et devise",
      url: "https://www.gouvernement.fr/le-drapeau-francais",
      type: "officiel",
      description: "Histoire et signification du drapeau tricolore",
    },
    {
      titre: "Assemblée nationale - Les symboles républicains",
      url: "https://www.assemblee-nationale.fr/decouvrir-l-assemblee/patrimoine/les-symboles-de-la-republique",
      type: "officiel",
      description: "Symboles présents à l'Assemblée nationale",
    },
  ],
};

export default article;
