import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis le rendu dédié de l'ancien site (`components/blog/*`, `lib/data/article-content.ts`, `lib/data/tout-savoir-content.ts`), relu sur la page construite, sans changer d'adresse
 * (`/articles/tout-savoir-examen-civique-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "tout-savoir-examen-civique-2026",
  titre: "Tout savoir sur l’examen civique 2026 : Guide complet et nouveautés",
  titreSeo: "Tout savoir sur l’examen civique 2026 : Guide complet et nouveautés",
  resume: "Le guide ultime pour comprendre la réforme 2026 : nouveau décret, niveau B2, format QCM, et conseils de préparation pour réussir du premier coup.",
  chapo: "L’examen civique est une **étape essentielle** pour toute demande de naturalisation française, d’obtention d’une carte de résident ou d'une carte de séjour pluriannuelle. Depuis le **décret n° 2025-647 du 15 juillet 2025**, applicable à partir du **1er janvier 2026**, les modalités de l’examen ont été entièrement revues pour garantir une **évaluation harmonisée et exigeante** sur tout le territoire. Ce nouveau dispositif vise à renforcer l'intégration républicaine à travers une meilleure compréhension des valeurs et institutions françaises.",
  publieLe: "2025-12-17",
  modifieLe: "2025-12-17",
  minutes: 12,
  theme: "Tout savoir sur l’examen civique 2026 : Guide complet et nouveautés",
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=2055",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413",
  },
  blocs: [
    { type: "h2", texte: "1. Qu’est-ce que l’examen civique ?" },
    {
      type: "p",
      texte: "L’examen civique évalue vos connaissances sur la **France**, son **organisation institutionnelle**, ses **valeurs républicaines** et votre compréhension du quotidien en société. Il ne s'agit pas seulement d'un test de langue, mais d'une véritable vérification de votre adhésion au projet républicain.",
    },
    { type: "h3", texte: "Public concerné" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les demandeurs de **carte de séjour pluriannuelle**",
        "Les candidats à la **carte de résident** (10 ans)",
        "Les personnes souhaitant acquérir la **nationalité française** (naturalisation)",
      ],
    },
    { type: "h2", texte: "2. Cadre légal et nouvelles exigences (réforme 2026)" },
    {
      type: "p",
      texte: "À partir du **1er janvier 2026**, la réforme introduit des critères plus stricts pour l'intégration. Les principales évolutions réglementaires sont les suivantes :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Niveau de français requis : B2** (oral et écrit) pour la naturalisation, attestant d'une maîtrise avancée de la langue.",
        "**Examen civique obligatoire** sous forme de QCM standardisé portant sur les valeurs, institutions, droits et la culture française.",
        "**Conditions d’insertion professionnelle** : Justifier d'un CDI depuis au moins 1 an ou de CDD cumulés d'au moins 2 ans.",
        "**Ressources stables** : Disposer de revenus suffisants et stables (hors prestations sociales, sauf exceptions).",
        "**Organisation centralisée** : Examen géré exclusivement par des organismes agréés par le ministère de l’Intérieur (comme la CCI).",
      ],
    },
    {
      type: "p",
      texte: "Ces dispositions sont définies par le **CESEDA (art. R. 413-12-1)** et le **décret n° 2025-647**, qui encadrent strictement les conditions de réussite et le parcours d'intégration républicaine.",
    },
    {
      type: "p",
      texte: "[Découvrir le cadre général détaillé](/articles/cadre-general-examen-civique)",
    },
    { type: "p", texte: "Une réforme pour renforcer l'intégration et les valeurs républicaines" },
    { type: "h2", texte: "3. Modalités de l’examen, QCM officiel" },
    {
      type: "p",
      texte: "L’épreuve se déroule sous la forme d’un **questionnaire à choix multiples (QCM)** de **40 questions** rédigées en français. La rigueur est de mise :",
    },
    { type: "h3", texte: "Condition de réussite" },
    {
      type: "p",
      texte: "Pour réussir, il est impératif d'obtenir au moins **32 bonnes réponses**. L'examen est surveillé et réalisé sur tablette ou ordinateur dans des centres agréés.",
    },
    { type: "h3", texte: "Fiche technique" },
    {
      type: "tableau",
      entetes: ["Élément", "Détail"],
      lignes: [
        ["Format", "40 Questions QCM"],
        ["Règle", "1 seule bonne réponse par question"],
        ["Seuil de réussite", "32/40 (soit 80 %)"],
        ["Encadrement", "Centres agréés par l'État"],
      ],
    },
    {
      type: "p",
      texte: "[Voir la liste des centres agréés 2026 →](/articles/centres-agrees-examen-civique-2026)",
    },
    { type: "h2", texte: "Les 5 grandes thématiques évaluées" },
    {
      type: "p",
      texte: "Le programme officiel couvre 5 domaines fondamentaux que tout citoyen doit maîtriser :",
    },
    { type: "h3", texte: "1. Principes et valeurs de la République" },
    {
      type: "p",
      texte: "Devise (Liberté, Égalité, Fraternité), symboles (Drapeau, Marianne), laïcité, et solidarité.",
    },
    { type: "h3", texte: "2. Système institutionnel et politique" },
    {
      type: "p",
      texte: "Organisation de la République, séparation des pouvoirs, rôle du Président, du Parlement, et fonctionnement des élections.",
    },
    { type: "h3", texte: "3. Droits et devoirs" },
    {
      type: "p",
      texte: "Libertés fondamentales, égalité femmes-hommes, respect de la loi, impôts, et défense nationale.",
    },
    { type: "h3", texte: "4. Histoire, géographie et culture française" },
    {
      type: "p",
      texte: "Grandes dates historiques, géographie de la France et de l'Outre-mer, patrimoine culturel, et place de la francophonie.",
    },
    { type: "h3", texte: "5. Vivre dans la société française" },
    {
      type: "p",
      texte: "Vie quotidienne : accès au logement, emploi, système de santé (Sécurité sociale), école, et la vie familiale.",
    },
    { type: "h3", texte: "Préparez-vous à réussir" },
    {
      type: "p",
      texte: "Une bonne préparation est la clé pour aborder l'examen avec sérénité et confiance.",
    },
    { type: "h2", texte: "4. Préparation et conseils" },
    {
      type: "p",
      texte: "La réussite à cet examen ne s'improvise pas. Le site **TestCiviqueFrance.fr** recommande une préparation structurée :",
    },
    {
      type: "p",
      texte: "**Étudiez les documents officiels** : Le Livret du Citoyen est la base indispensable.",
    },
    {
      type: "p",
      texte: "**Entraînez-vous avec des tests adaptés** : Utilisez nos séries de QCM conformes au format 2026.",
    },
    {
      type: "p",
      texte: "**Pratiquez en conditions réelles** : Chronométrez-vous pour gérer votre temps (1h30 max).",
    },
    {
      type: "p",
      texte: "**Analysez vos erreurs** : Comprenez pourquoi vous vous êtes trompé pour ne plus refaire l'erreur.",
    },
    {
      type: "p",
      texte: "[Créer un compte de préparation](/signup) · [Service-Public.fr (Site officiel)](https://www.service-public.fr/)",
    },
    { type: "h2", texte: "Sources officielles et ressources utiles" },
    { type: "h3", texte: "Documentation Officielle" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[Service-Public.fr : Examen civique](https://www.service-public.fr/particuliers/vosdroits/F35799) : Le portail officiel de l'administration française",
        "[Plateforme CCI Paris Île-de-France](https://francais.cci-paris-idf.fr/candidat) : Pour s'inscrire et trouver un centre d'examen agréé",
        "[Légifrance - Décret n° 2025-647](https://www.legifrance.gouv.fr) : Le texte de loi officiel de la réforme 2026",
      ],
    },
    { type: "h3", texte: "Guides Recommandés" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[Cadre général de l'examen civique](/articles/cadre-general-examen-civique) : Comprendre le programme détaillé",
        "[Liste des centres agréés 2026](/articles/centres-agrees-examen-civique-2026) : Où passer votre examen près de chez vous",
        "[S'entraîner maintenant](/signup) : Accès gratuit aux séries de QCM officielles",
      ],
    },
    { type: "p", texte: "Pour aller plus loin" },
    {
      type: "p",
      texte: "N'hésitez pas à consulter régulièrement notre section [Articles](/articles) pour suivre l'actualité des réformes et des sessions d'examen.",
    },
    { type: "h3", texte: "Mots-clés associés" },
    {
      type: "liste",
      style: "puces",
      items: [
        "examen civique 2026",
        "décret 2025-647",
        "naturalisation française",
        "test valeurs de la république",
        "carte de résident 10 ans",
        "titre de séjour pluriannuel",
        "QCM nationalité française",
        "préparation test civique",
        "niveau B2 français",
        "centres agréés examen civique",
        "réussir examen civique",
      ],
    },
  ],
};

export default article;
