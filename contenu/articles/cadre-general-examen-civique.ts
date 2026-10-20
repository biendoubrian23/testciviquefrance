import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis le rendu dédié de l'ancien site (`components/blog/*`, `lib/data/article-content.ts`, `lib/data/tout-savoir-content.ts`), relu sur la page construite, sans changer d'adresse
 * (`/articles/cadre-general-examen-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "cadre-general-examen-civique",
  titre: "Cadre général de l'examen civique : programme et thématiques officielles",
  titreSeo: "Cadre général de l'examen civique : programme et thématiques officielles",
  resume: "Découvrez le cadre légal, la structure de l'examen et les 5 thématiques officielles pour bien vous préparer au test civique.",
  chapo: "L'examen civique est un **test officiel** évaluant les connaissances du candidat sur les **valeurs, institutions et la vie en société en France**.",
  publieLe: "2025-11-01",
  modifieLe: "2025-11-01",
  minutes: 8,
  theme: "Cadre général de l'examen civique : programme et thématiques officielles",
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "p",
      texte: "Il s'applique aux étrangers souhaitant obtenir une **carte de séjour pluriannuelle**, une **carte de résident** ou la **naturalisation française**.",
    },
    { type: "h2", texte: "Cadre légal" },
    {
      type: "p",
      texte: "L'examen est encadré par le **Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA)**, notamment l'article **R.413-12-1**, et par le **décret n° 2025-647 du 15 juillet 2025**.",
    },
    { type: "p", texte: "Ces textes définissent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **5 thématiques officielles** de l'examen",
        "La **forme du test** (QCM de 40 questions)",
        "Le **seuil de réussite** (80 %, soit 32 bonnes réponses)",
        "Les **organismes agréés** chargés de l'évaluation",
      ],
    },
    { type: "h2", texte: "Les titres concernés" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte de séjour pluriannuelle**",
        "**Carte de résident**",
        "**Naturalisation française**",
      ],
    },
    {
      type: "p",
      texte: "Chaque mention implique le passage du même test civique, mais la note minimale peut être exigée pour justifier une **intégration républicaine suffisante**.",
    },
    { type: "h2", texte: "Structure de l'examen" },
    {
      type: "tableau",
      entetes: ["Élément", "Détail"],
      lignes: [
        ["Nombre de questions", "40"],
        ["Langue", "Français"],
        ["Forme", "QCM (1 seule bonne réponse)"],
        ["Seuil de réussite", "80 % (32 bonnes réponses)"],
        ["Thématiques", "5 thèmes officiels détaillés ci-dessous"],
        ["Source", "CESEDA R. 413-12-1, Décret n° 2025-647 du 15 juillet 2025"],
      ],
    },
    { type: "h2", texte: "Les 5 thématiques officielles" },
    { type: "p", texte: "Les 5 domaines de connaissances à maîtriser" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Principes et valeurs de la République",
        "Système institutionnel et politique",
        "Droits et devoirs",
        "Histoire, géographie et culture",
        "Vivre dans la société française",
      ],
    },
    { type: "p", texte: "Consultez la description complète et les notions clés dans :" },
    { type: "p", texte: "Les thématiques officielles de l'examen civique en détail →" },
    { type: "h2", texte: "Répartition des questions par thématique" },
    {
      type: "p",
      texte: "Chaque candidat devra répondre à un nombre équivalent de questions par thématique et notion :",
    },
    { type: "h3", texte: "1. Principes et valeurs de la République (11 questions)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Devise et symboles de la République : 3 questions",
        "Laïcité : 2 questions",
        "Mises en situation : 6 questions",
      ],
    },
    { type: "h3", texte: "2. Système institutionnel et politique (6 questions)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Démocratie et droit de vote : 3 questions",
        "Organisation de la République française : 2 questions",
        "Institutions européennes : 1 question",
      ],
    },
    { type: "h3", texte: "3. Droits et devoirs (11 questions)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droits fondamentaux : 2 questions",
        "Obligations et devoirs des personnes résidant en France : 3 questions",
        "Mises en situation : 6 questions",
      ],
    },
    { type: "h3", texte: "4. Histoire, géographie et culture (8 questions)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Principales périodes et personnages historiques : 3 questions",
        "Territoires et géographie : 3 questions",
        "Patrimoine français : 2 questions",
      ],
    },
    { type: "h3", texte: "5. Vivre dans la société française (4 questions)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "S'installer et résider en France : 1 question",
        "L'accès aux soins : 1 question",
        "Travailler en France : 1 question",
        "Autorité parentale et système éducatif : 1 question",
      ],
    },
    { type: "h2", texte: "⚠️ Modalités de notation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une seule **bonne réponse** est proposée par question.",
        "Une **bonne réponse** vaut **1 point**.",
        "Une **mauvaise réponse** ou **l'absence de réponse** vaut **0 point**.",
      ],
    },
    { type: "h2", texte: "Bien se préparer" },
    {
      type: "p",
      texte: "L'examen demande à la fois des connaissances théoriques et une bonne compréhension du mode de vie français.",
    },
    { type: "p", texte: "Pour vous entraîner dans les meilleures conditions :" },
    { type: "p", texte: "[Découvrez les tests interactifs sur LeTestCivique.fr](/dashboard)" },
  ],
  sources: [
    {
      titre: "Examen civique : programme et thématiques - Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F35799",
      type: "officiel",
    },
    {
      titre: "Carte de séjour pluriannuelle : conditions - Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F34708",
      type: "officiel",
    },
    {
      titre: "Acquisition de la nationalité française - Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
    },
  ],
};

export default article;
