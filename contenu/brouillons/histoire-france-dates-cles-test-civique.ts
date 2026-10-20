import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part4.ts` (contenu jamais publié : aucune fiche dans `seo-articles.ts`, adresse en 404 au 20/10/2026), sans changer d'adresse
 * (`/articles/histoire-france-dates-cles-test-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "histoire-france-dates-cles-test-civique",
  titre: "histoire-france-dates-cles-test-civique",
  titreSeo: "histoire-france-dates-cles-test-civique",
  resume: "L'histoire de France est marquée par des dates et des événements qui ont façonné notre nation. De la Révolution française à la Ve République, découvre",
  chapo: "L'histoire de France est marquée par des dates et des événements qui ont façonné notre nation. De la Révolution française à la Ve République, découvrez les repères historiques essentiels pour réussir le test civique.",
  publieLe: "2026-10-20",
  modifieLe: "2026-10-20",
  minutes: 8,
  theme: "histoire france",
  motsCles: [
    "histoire france",
    "dates clés france",
    "révolution française",
    "ve république",
    "présidents france",
    "14 juillet 1789",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "La Révolution française et la naissance de la République",
      id: "revolution-republique",
    },
    { type: "p", texte: "**1789 : L'année révolutionnaire**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**14 juillet 1789** : Prise de la Bastille - symbole de la chute de l'absolutisme",
        "**26 août 1789** : Déclaration des Droits de l'Homme et du Citoyen",
        "**4 août 1789** : Abolition des privilèges",
      ],
    },
    { type: "p", texte: "**1792-1799 : La Première République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "21 septembre 1792 : Proclamation de la République",
        "1793 : Exécution de Louis XVI",
        "Guerres révolutionnaires contre les monarchies européennes",
      ],
    },
    { type: "p", texte: "**Les acquis de la Révolution**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Fin de la monarchie absolue",
        "Égalité devant la loi",
        "Souveraineté du peuple",
        "Déclaration des droits fondamentaux",
        "Abolition des privilèges de naissance",
      ],
    },
    { type: "h2", texte: "Le XIXe siècle : entre monarchie et république", id: "xix-siecle" },
    { type: "p", texte: "**Napoléon Bonaparte (1799-1815)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1804 : Sacre de Napoléon Ier, Premier Empire",
        "Code civil (1804) : unifie le droit français",
        "Lycées, préfets, Légion d'honneur",
        "Défaites de 1814 et 1815 (Waterloo)",
      ],
    },
    { type: "p", texte: "**Restauration et monarchies (1815-1848)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Retour des rois (Louis XVIII, Charles X, Louis-Philippe)",
        "Révolution de 1830 : les \"Trois Glorieuses\"",
        "Révolution de 1848 : avènement de la IIe République",
      ],
    },
    { type: "p", texte: "**La IIe République (1848-1852)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suffrage universel masculin (1848)",
        "Abolition de l'esclavage (27 avril 1848)",
        "Louis-Napoléon Bonaparte élu président",
      ],
    },
    { type: "p", texte: "**Le Second Empire (1852-1870)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Napoléon III empereur",
        "Grands travaux (Haussmann à Paris)",
        "Défaite contre la Prusse (1870)",
      ],
    },
    { type: "p", texte: "**La IIIe République (1870-1940)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Proclamée le 4 septembre 1870",
        "Lois sur l'école gratuite et obligatoire (Jules Ferry, 1881-1882)",
        "Loi de séparation des Églises et de l'État (1905)",
        "Première Guerre mondiale (1914-1918)",
      ],
    },
    { type: "h2", texte: "Le XXe siècle : guerres mondiales et reconstruction", id: "xx-siecle" },
    { type: "p", texte: "**La Première Guerre mondiale (1914-1918)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1,4 million de morts français",
        "11 novembre 1918 : Armistice",
        "Traité de Versailles (1919)",
      ],
    },
    { type: "p", texte: "**L'entre-deux-guerres (1919-1939)**" },
    {
      type: "liste",
      style: "puces",
      items: ["Crise économique de 1929", "Front populaire (1936) : congés payés, 40 heures"],
    },
    { type: "p", texte: "**La Seconde Guerre mondiale (1939-1945)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Défaite de 1940, Occupation allemande",
        "Régime de Vichy (Pétain)",
        "Résistance : Charles de Gaulle et Jean Moulin",
        "Débarquement du 6 juin 1944 (D-Day)",
        "8 mai 1945 : Victoire et fin de la guerre en Europe",
      ],
    },
    { type: "p", texte: "**La IVe République (1946-1958)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Reconstruction du pays",
        "Sécurité sociale (1945)",
        "Droit de vote des femmes (1944, premières élections 1945)",
        "Début de la construction européenne",
        "Guerres de décolonisation (Indochine, Algérie)",
      ],
    },
    { type: "h2", texte: "La Ve République (depuis 1958)", id: "cinquieme-republique" },
    { type: "p", texte: "**Naissance de la Ve République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "4 octobre 1958 : Constitution de la Ve République",
        "Charles de Gaulle, premier président",
        "Renforcement du pouvoir exécutif",
      ],
    },
    { type: "p", texte: "**Les grandes dates de la Ve République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1962 : Élection du Président au suffrage universel direct",
        "1962 : Fin de la guerre d'Algérie (Accords d'Évian)",
        "1968 : Événements de mai 68",
        "1981 : Première alternance (François Mitterrand)",
        "1992 : Traité de Maastricht (Union européenne)",
        "2000 : Passage au quinquennat (mandat de 5 ans)",
        "2002 : Passage à l'euro",
      ],
    },
    { type: "p", texte: "**Les Présidents de la Ve République**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Charles de Gaulle (1959-1969)",
        "Georges Pompidou (1969-1974)",
        "Valéry Giscard d'Estaing (1974-1981)",
        "François Mitterrand (1981-1995)",
        "Jacques Chirac (1995-2007)",
        "Nicolas Sarkozy (2007-2012)",
        "François Hollande (2012-2017)",
        "Emmanuel Macron (depuis 2017)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'histoire de France est un sujet central du test civique. Des dates clés comme 1789, 1905 ou 1958 sont incontournables. Révisez efficacement sur Test Civique France avec nos cours et tests dédiés.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle date marque le début de la Ve République ?",
      reponse: "La Ve République commence le 4 octobre 1958 avec l'adoption de la nouvelle Constitution par référendum.",
    },
    {
      question: "Quand les femmes ont-elles obtenu le droit de vote en France ?",
      reponse: "Le droit de vote des femmes est accordé le 21 avril 1944 par le Gouvernement provisoire. Elles votent pour la première fois le 29 avril 1945.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "L'histoire de France en dates clés" },
  ],
  sources: [
    {
      titre: "Château de Versailles - Histoire de France",
      url: "https://www.chateauversailles.fr/decouvrir/histoire",
      type: "officiel",
      description: "Découvrir l'histoire de France à travers Versailles",
    },
    {
      titre: "Élysée - Les présidents de la République",
      url: "https://www.elysee.fr/la-presidence/les-presidents-de-la-republique",
      type: "officiel",
      description: "Liste et biographies des présidents français",
    },
    {
      titre: "Musée de l'Histoire de France",
      url: "https://www.histoire-de-france.fr/",
      type: "article",
      description: "Ressources pédagogiques sur l'histoire de France",
    },
  ],
  aLireAussi: [
    {
      slug: "valeurs-republique-francaise-liberte-egalite-fraternite",
      ancre: "Valeurs républicaines issues de l'Histoire",
    },
    { slug: "culture-francaise-patrimoine-monuments-artistes", ancre: "Culture et patrimoine français" },
    { slug: "institutions-francaises-president-assemblee-senat", ancre: "Les institutions françaises" },
  ],
};

export default article;
