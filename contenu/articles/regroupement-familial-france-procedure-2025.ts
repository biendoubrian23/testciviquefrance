import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/regroupement-familial-france-procedure-2025`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "regroupement-familial-france-procedure-2025",
  titre: "Regroupement familial en France 2025 : procédure et conditions",
  titreSeo: "Regroupement familial en France 2025 : procédure et conditions",
  resume: "Guide complet du regroupement familial : conditions de ressources et logement, délais de traitement, documents requis et nouvelle réglementation 2025.",
  chapo: "Le regroupement familial permet à un étranger résidant légalement en France de faire venir son conjoint et ses enfants mineurs. Cette procédure est encadrée par des conditions strictes de ressources et de logement.",
  publieLe: "2025-12-14",
  modifieLe: "2025-12-14",
  minutes: 19,
  theme: "regroupement familial france",
  motsCles: [
    "regroupement familial france",
    "faire venir sa famille en france",
    "conditions regroupement familial",
    "visa famille france",
    "OFII regroupement familial",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
  },
  blocs: [
    {
      type: "h2",
      texte: "Principe et bénéficiaires du regroupement familial",
      id: "principe-beneficiaires",
    },
    { type: "p", texte: "**Définition**" },
    {
      type: "p",
      texte: "Le regroupement familial est le droit pour un étranger en situation régulière de faire venir en France les membres de sa famille restés dans le pays d'origine.",
    },
    { type: "p", texte: "**Qui peut demander le regroupement familial ?**" },
    { type: "p", texte: "L'étranger \"demandeur\" doit :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Séjourner régulièrement en France depuis **au moins 18 mois**",
        "Détenir un titre de séjour d'au moins **1 an**",
        "Ne pas être polygame",
      ],
    },
    { type: "p", texte: "**Qui peut rejoindre le demandeur ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le conjoint (époux/épouse) majeur",
        "Les enfants mineurs de moins de 18 ans",
        "Les enfants du conjoint (avec autorisation de l'autre parent)",
      ],
    },
    { type: "p", texte: "**Qui est exclu ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les partenaires de PACS (autre procédure)",
        "Les parents du demandeur",
        "Les enfants majeurs",
        "Le second conjoint en cas de polygamie",
      ],
    },
    {
      type: "h2",
      texte: "Conditions de ressources et de logement",
      id: "conditions-ressources-logement",
    },
    { type: "p", texte: "**Conditions de ressources**" },
    { type: "p", texte: "Le demandeur doit justifier de ressources stables et suffisantes :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Minimum : SMIC net** pour une famille de 2-3 personnes",
        "Revenus pris en compte : salaires, allocations chômage, pensions",
        "Revenus exclus : RSA, ASS, allocations familiales",
      ],
    },
    { type: "p", texte: "*Barème 2025 :*" },
    {
      type: "tableau",
      entetes: ["Taille famille", "Ressources minimales"],
      lignes: [
        ["2-3 personnes", "1 426€/mois (SMIC)"],
        ["4-5 personnes", "1 569€/mois"],
        ["6+ personnes", "1 711€/mois"],
      ],
    },
    { type: "p", texte: "**Conditions de logement**" },
    { type: "p", texte: "Le logement doit être :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Considéré comme \"normal\" pour une famille comparable",
        "Superficie minimale : 22m² pour 2 personnes, +10m² par personne supplémentaire",
        "Répondre aux normes de salubrité et de sécurité",
        "Disponible à la date d'arrivée de la famille",
      ],
    },
    { type: "h2", texte: "Procédure de demande étape par étape", id: "procedure-detaillee" },
    { type: "p", texte: "**Étape 1 : Dépôt de la demande**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déposez le dossier à l'OFII (Office Français de l'Immigration et de l'Intégration)",
        "Formulaire CERFA n°11436*06",
        "Justificatifs d'identité, de ressources et de logement",
      ],
    },
    { type: "p", texte: "**Étape 2 : Instruction par le maire**" },
    { type: "p", texte: "Le maire de votre commune vérifie :" },
    {
      type: "liste",
      style: "puces",
      items: ["La réalité et la conformité du logement", "L'enquête est obligatoire dans les 2 mois"],
    },
    { type: "p", texte: "**Étape 3 : Décision de l'OFII**" },
    { type: "p", texte: "L'OFII rend sa décision dans un délai de **6 mois** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Accord : l'OFII délivre une attestation de regroupement familial",
        "Refus : motivé et susceptible de recours",
      ],
    },
    { type: "p", texte: "**Étape 4 : Demande de visa par la famille**" },
    {
      type: "p",
      texte: "Les membres de la famille demandent un visa long séjour au consulat de France dans leur pays.",
    },
    { type: "p", texte: "**Étape 5 : Arrivée en France**" },
    { type: "p", texte: "À leur arrivée, les membres de la famille :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passent la visite médicale OFII",
        "Signent le Contrat d'Intégration Républicaine (CIR)",
        "Reçoivent leur titre de séjour",
      ],
    },
    { type: "h2", texte: "Test civique et intégration de la famille", id: "test-civique-famille" },
    { type: "p", texte: "**Formation civique obligatoire**" },
    {
      type: "p",
      texte: "Les membres de la famille doivent suivre une formation civique dispensée par l'OFII comprenant :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Présentation des institutions françaises",
        "Valeurs de la République",
        "Accès aux droits",
        "Vie quotidienne en France",
      ],
    },
    { type: "p", texte: "**Test civique pour la famille**" },
    {
      type: "p",
      texte: "Depuis janvier 2026, pour obtenir une **carte de séjour pluriannuelle**, les membres de la famille devront également :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["**Réussir le test civique** (80% minimum)", "Justifier d'un niveau de français A2"],
    },
    {
      type: "p",
      texte: "Cette obligation s'applique lors du premier renouvellement du titre de séjour, après la période initiale d'un an.",
    },
    { type: "p", texte: "**Préparation sur Test Civique France**" },
    {
      type: "p",
      texte: "Notre plateforme propose des cours et des tests adaptés pour préparer tous les membres de la famille au test civique.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le regroupement familial est un droit fondamental encadré par des conditions précises. Avec les nouvelles obligations du test civique, anticipez la préparation de toute votre famille sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "8MyAxR3G-fU", titre: "Le regroupement familial en France expliqué" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Regroupement familial",
      url: "https://www.service-public.fr/particuliers/vosdroits/F11166",
      type: "officiel",
      description: "Conditions et démarches du regroupement familial",
    },
    {
      titre: "OFII - Le regroupement familial",
      url: "https://www.ofii.fr/procedure/le-regroupement-familial/",
      type: "officiel",
      description: "Procédure officielle auprès de l'OFII",
    },
    {
      titre: "Légifrance - Articles L434-1 à L434-8 du CESEDA",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Cadre juridique du regroupement familial",
    },
  ],
  aLireAussi: [
    { slug: "titres-de-sejour-france-guide-complet-2026", ancre: "Guide des titres de séjour" },
    {
      slug: "attestation-accueil-inviter-famille-france-2026-mairie-conditions",
      ancre: "L'attestation d'accueil pour la famille",
    },
    {
      slug: "mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour",
      ancre: "Mariage avec un étranger en France",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Déposer sa demande sur ANEF",
    },
  ],
};

export default article;
