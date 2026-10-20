import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/carte-sejour-pluriannuelle-guide-complet-2025`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "carte-sejour-pluriannuelle-guide-complet-2025",
  titre: "Carte de séjour pluriannuelle : guide complet des démarches 2025",
  titreSeo: "Carte de séjour pluriannuelle : guide complet des démarches 2025",
  resume: "Guide détaillé pour obtenir votre carte de séjour pluriannuelle en France : conditions, documents, délais et nouvelle obligation du test civique depuis janvier 2026.",
  chapo: "La carte de séjour pluriannuelle (CSP) est un titre de séjour de 4 ans maximum qui simplifie les démarches administratives des étrangers résidant en France. Depuis janvier 2026, son obtention est conditionnée à la réussite du test civique.",
  publieLe: "2025-12-17",
  modifieLe: "2025-12-17",
  minutes: 18,
  theme: "carte séjour pluriannuelle",
  motsCles: [
    "carte séjour pluriannuelle",
    "titre séjour 4 ans",
    "renouvellement carte séjour",
    "CSP france",
    "conditions carte séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la carte de séjour pluriannuelle ?",
      id: "definition-avantages",
    },
    {
      type: "p",
      texte: "La carte de séjour pluriannuelle est un titre de séjour d'une durée de **2 à 4 ans** qui remplace la carte de séjour temporaire d'un an après votre première année de séjour régulier en France.",
    },
    { type: "p", texte: "**Avantages de la CSP**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée de validité de 4 ans (vs 1 an pour la carte temporaire)",
        "Moins de démarches administratives (renouvellement tous les 4 ans)",
        "Stabilité pour les démarches bancaires, logement, emploi",
        "Étape vers la carte de résident de 10 ans",
      ],
    },
    { type: "p", texte: "**Qui peut en bénéficier ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les titulaires d'un visa long séjour valant titre de séjour (VLS-TS)",
        "Les titulaires d'une carte de séjour temporaire d'un an",
        "Les bénéficiaires du regroupement familial",
        "Les étudiants (carte spécifique \"étudiant\")",
        "Les travailleurs salariés et non-salariés",
      ],
    },
    { type: "h2", texte: "Conditions d'obtention en 2025-2026", id: "conditions-obtention" },
    { type: "p", texte: "**Conditions générales**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être en situation régulière en France",
        "Avoir accompli une première année de séjour avec un VLS-TS ou carte temporaire",
        "Justifier de ressources suffisantes et stables",
        "Disposer d'un logement adapté",
      ],
    },
    { type: "p", texte: "**Nouvelles conditions depuis janvier 2026** (Décret n°2025-647)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Réussir le test civique** avec un score minimum de 80%",
        "Justifier d'un niveau de français **A2** minimum",
        "Avoir suivi une formation civique (si première demande)",
      ],
    },
    { type: "p", texte: "**Conditions spécifiques selon le motif**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "*Salarié* : CDI ou CDD de plus de 12 mois, salaire conforme au SMIC",
        "*Vie privée et familiale* : liens personnels et familiaux en France",
        "*Étudiant* : inscription dans un établissement d'enseignement supérieur",
        "*Passeport talent* : diplôme de niveau Master ou projet innovant",
      ],
    },
    { type: "h2", texte: "Documents et démarches à effectuer", id: "documents-demarches" },
    { type: "p", texte: "**Documents communs à tous les demandeurs**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire CERFA de demande",
        "Passeport en cours de validité",
        "Justificatif de domicile de moins de 6 mois",
        "3 photos d'identité conformes aux normes",
        "Timbre fiscal (225€ en 2025)",
        "**Attestation de réussite au test civique**",
        "Attestation de niveau de français A2",
      ],
    },
    { type: "p", texte: "**Documents spécifiques**" },
    { type: "p", texte: "*Pour les salariés :*" },
    {
      type: "liste",
      style: "puces",
      items: ["Contrat de travail", "3 derniers bulletins de salaire", "Dernier avis d'imposition"],
    },
    { type: "p", texte: "*Pour la vie privée et familiale :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage ou PACS",
        "Actes de naissance des enfants",
        "Tout justificatif de liens personnels en France",
      ],
    },
    { type: "p", texte: "**Procédure de demande**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Passer et réussir le test civique",
        "Constituer le dossier complet",
        "Prendre rendez-vous en préfecture ou sur le site de l'ANEF",
        "Déposer le dossier",
        "Retirer la carte après instruction (2 à 4 mois)",
      ],
    },
    { type: "h2", texte: "Renouvellement de la carte pluriannuelle", id: "renouvellement" },
    { type: "p", texte: "**Quand demander le renouvellement ?**" },
    {
      type: "p",
      texte: "Vous devez demander le renouvellement **2 à 4 mois avant l'expiration** de votre carte actuelle.",
    },
    { type: "p", texte: "**Conditions de renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Maintien des conditions initiales d'attribution",
        "Pas de menace à l'ordre public",
        "Résidence habituelle en France maintenue",
        "Respect des obligations fiscales",
      ],
    },
    { type: "p", texte: "**Le test civique au renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous avez déjà réussi le test civique, vous n'avez pas à le repasser",
        "Conservez précieusement votre attestation de réussite",
        "En cas de première demande de renouvellement en 2026+, le test est requis",
      ],
    },
    { type: "p", texte: "**Délai de traitement**" },
    {
      type: "p",
      texte: "Le délai moyen est de 2 à 3 mois. Vous recevez un récépissé vous autorisant à rester en France pendant l'instruction.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La carte de séjour pluriannuelle offre une stabilité administrative précieuse pour votre vie en France. Avec la nouvelle obligation du test civique depuis janvier 2026, préparez-vous dès maintenant sur Test Civique France pour obtenir votre attestation de réussite.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je travailler avec une carte de séjour pluriannuelle ?",
      reponse: "Oui, la plupart des CSP autorisent l'exercice d'une activité professionnelle. Vérifiez les mentions sur votre carte.",
    },
    {
      question: "Que faire si ma carte expire pendant l'instruction de mon renouvellement ?",
      reponse: "Le récépissé de demande de renouvellement vous autorise à rester et travailler en France jusqu'à la décision.",
    },
  ],
  videos: [
    { id: "M6Jqed7F16I", titre: "Guide complet du titre de séjour en France" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Carte de séjour pluriannuelle",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      description: "Conditions et démarches pour obtenir une carte de séjour pluriannuelle",
    },
    {
      titre: "ANEF - Demande de titre de séjour en ligne",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Portail officiel pour les démarches en ligne",
    },
    {
      titre: "Légifrance - CESEDA - Titres de séjour",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Code régissant les différents titres de séjour",
    },
  ],
  aLireAussi: [
    { slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement", ancre: "Guide complet des titres de séjour" },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour",
    },
    {
      slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
      ancre: "Timbre fiscal du titre de séjour : les tarifs 2026",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Démarches ANEF pour la carte pluriannuelle",
    },
  ],
};

export default article;
