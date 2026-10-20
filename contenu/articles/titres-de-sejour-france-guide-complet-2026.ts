import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-new.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/titres-de-sejour-france-guide-complet-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "titres-de-sejour-france-guide-complet-2026",
  titre: "Titres de séjour en France : le guide complet 2026",
  titreSeo: "Titres de séjour en France : le guide complet 2026",
  resume: "Tout sur les titres de séjour en 2026 : première demande, renouvellement, carte pluriannuelle et carte de résident 10 ans. Les nouvelles règles expliquées.",
  chapo: "Le système des titres de séjour en France évolue avec la nouvelle loi immigration. Que vous souhaitiez obtenir votre premier titre, renouveler une carte de séjour pluriannuelle ou demander une carte de résident de 10 ans, il est crucial de maîtriser les dernières conditions applicables en 2026. Ce guide complet vous détaille toutes les démarches, les pièces à fournir et les nouveautés législatives.",
  publieLe: "2026-01-29",
  modifieLe: "2026-01-29",
  minutes: 20,
  theme: "titre de séjour",
  motsCles: [
    "titre de séjour",
    "titre de séjour france",
    "carte de séjour",
    "carte de séjour pluriannuelle",
    "carte de résident",
    "carte résident france",
    "renouvellement titre séjour",
    "renouvellement carte séjour 2026",
    "premier titre séjour france",
    "titre séjour 4 ans",
    "titre séjour 10 ans",
    "loi immigration 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1569974498991-d3c12a504f95",
  },
  blocs: [
    { type: "h2", texte: "Les différents types de titres de séjour en 2026", id: "types-titres" },
    {
      type: "p",
      texte: "Il existe plusieurs catégories de titres permettant de séjourner régulièrement en France :",
    },
    { type: "p", texte: "**1. Le Visa de Long Séjour valant Titre de Séjour (VLS-TS)**" },
    {
      type: "p",
      texte: "C'est souvent le **premier titre de séjour** obtenu avant l'arrivée en France. Il doit être validé en ligne sur la plateforme ANEF dans les 3 mois suivant l'arrivée.",
    },
    { type: "p", texte: "**2. La Carte de Séjour Temporaire (1 an)**" },
    {
      type: "p",
      texte: "Délivrée pour un motif précis (étudiant, visiteur, vie privée et familiale), elle est valable 1 an et renouvelable.",
    },
    { type: "p", texte: "**3. La Carte de Séjour Pluriannuelle (CSP)**" },
    {
      type: "p",
      texte: "Ce titre est un sésame précieux : il est valable **4 ans** (ou jusqu'à la fin des études/du projet).",
    },
    {
      type: "p",
      texte: "*Conditions d'obtention* : Avoir résidé 1 an en France sous couvert d'une carte temporaire et justifier de son assiduité (études) ou de sa volonté d'intégration.",
    },
    {
      type: "p",
      texte: "*Nouveauté 2026* : L'obtention de la carte pluriannuelle est désormais conditionnée à la maîtrise du français (niveau A2) et, dans certains cas, à la réussite du test civique.",
    },
    { type: "p", texte: "**4. La Carte de Résident (10 ans)**" },
    {
      type: "p",
      texte: "Titre ultime avant la naturalisation, la **carte de résident** de 10 ans offre une stabilité maximale. Elle est accessible, de plein droit ou sur décision discrétionnaire, après 3 ou 5 ans de résidence régulière ininterrompue.",
    },
    {
      type: "h2",
      texte: "Renouvellement de titre de séjour : les règles 2026",
      id: "renouvellement-2026",
    },
    {
      type: "p",
      texte: "Le **renouvellement de carte de séjour en 2026** suit une procédure stricte, désormais majoritairement dématérialisée via l'ANEF.",
    },
    { type: "p", texte: "**Délais à respecter**" },
    {
      type: "p",
      texte: "Vous devez déposer votre demande de renouvellement **entre 2 et 4 mois avant l'expiration** de votre titre actuel. Attention : tout dépôt tardif entraîne une taxe de retard de 180 € !",
    },
    { type: "p", texte: "**Documents essentiels pour le renouvellement :**" },
    { type: "p", texte: "* Passeport en cours de validité" },
    { type: "p", texte: "* Titre de séjour expirant" },
    { type: "p", texte: "* Justificatif de domicile de moins de 6 mois" },
    { type: "p", texte: "* 3 photos d'identité normes ISO" },
    { type: "p", texte: "* Justificatif de ressources (fiches de paie, avis d'imposition)" },
    { type: "p", texte: "**Focus : Le Contrat d'Engagement Républicain (CER)**" },
    {
      type: "p",
      texte: "Pour tout renouvellement, vous devez signer le CER, par lequel vous vous engagez à respecter les valeurs de la République.",
    },
    { type: "h2", texte: "Obtenir la Carte de Résident (10 ans)", id: "carte-resident" },
    {
      type: "p",
      texte: "La **carte de résident de 10 ans** est délivrée aux étrangers justifiant d'une bonne intégration républicaine.",
    },
    { type: "p", texte: "**Conditions clés :**" },
    { type: "p", texte: "* Résidence régulière et ininterrompue d'au moins 3 ou 5 ans." },
    { type: "p", texte: "* Ressources stables et suffisantes (SMIC minimum en général)." },
    { type: "p", texte: "* Assurance maladie." },
    { type: "p", texte: "***Maîtrise du français niveau B1** (oral et écrit) -*Condition renforcée*." },
    { type: "p", texte: "* Respect absolu des principes de la République." },
    {
      type: "p",
      texte: "Cette carte vous autorise à travailler sans restriction et est renouvelable de plein droit.",
    },
    { type: "h2", texte: "Impact de la loi immigration 2026", id: "loi-immigration" },
    { type: "p", texte: "La réforme de l'immigration apporte son lot de changements :" },
    {
      type: "p",
      texte: "* **Conditionnalité renforcée** : Le niveau de langue exigé est rehaussé pour les cartes pluriannuelles (A2) et résident (B1).",
    },
    {
      type: "p",
      texte: "* **Test civique** : Il peut être exigé pour prouver l'intégration républicaine.",
    },
    {
      type: "p",
      texte: "* **Régularisation par le travail** : Création de titres spécifiques pour les métiers en tension, sous conditions strictes.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La délivrance et le renouvellement des titres de séjour en France se complexifient. Anticipez vos démarches, préparez soigneusement vos dossiers et assurez-vous de maîtriser les prérequis linguistiques et civiques. Une bonne préparation est la clé pour sécuriser votre séjour en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quand demander le renouvellement de son titre de séjour ?",
      reponse: "La demande doit être faite sur l'ANEF entre 2 et 4 mois avant la date de fin de validité de votre titre actuel.",
    },
    {
      question: "Quel niveau de français pour la carte de résident 10 ans ?",
      reponse: "Le niveau B1 est désormais exigé pour la carte de résident (oral et écrit).",
    },
    {
      question: "C'est quoi la carte de séjour pluriannuelle ?",
      reponse: "C'est un titre de séjour d'une durée de 2 à 4 ans, délivré après une première année de séjour régulier, pour éviter des démarches annuelles.",
    },
  ],
  aLireAussi: [
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Prix de chaque titre de séjour",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour",
    },
    {
      slug: "guide-etudiants-etrangers-france-titres-demarches-2026",
      ancre: "Titre de séjour étudiant",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Recours en cas de refus de titre",
    },
  ],
};

export default article;
