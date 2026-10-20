import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part1.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/naturalisation-francaise-conditions-demarches-2025`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "naturalisation-francaise-conditions-demarches-2025",
  titre: "Naturalisation française 2025 : conditions, délais et démarches complètes",
  titreSeo: "Naturalisation française 2025 : conditions, délais et démarches complètes",
  resume: "Tout savoir sur la naturalisation française en 2025 : conditions requises, documents à fournir, délais de traitement et procédure complète étape par étape.",
  chapo: "La naturalisation est la procédure par laquelle un étranger acquiert la nationalité française par décision de l'autorité publique. Ce guide détaille toutes les conditions, les démarches et les délais pour devenir français en 2025.",
  publieLe: "2025-12-18",
  modifieLe: "2025-12-18",
  minutes: 20,
  theme: "naturalisation française",
  motsCles: [
    "naturalisation française",
    "devenir français",
    "conditions naturalisation",
    "dossier naturalisation",
    "procédure naturalisation 2025",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  blocs: [
    { type: "h2", texte: "Conditions d'éligibilité à la naturalisation", id: "conditions-eligibilite" },
    {
      type: "p",
      texte: "Pour demander la naturalisation française, vous devez remplir plusieurs conditions :",
    },
    { type: "p", texte: "**Condition de résidence**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Résider en France depuis au moins **5 ans** de manière régulière et continue",
        "Ce délai peut être réduit à **2 ans** si vous avez un diplôme français de niveau Master ou supérieur",
      ],
    },
    { type: "p", texte: "**Condition de régularité du séjour**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Posséder un titre de séjour valide au moment de la demande",
        "Ne pas être en situation irrégulière",
      ],
    },
    { type: "p", texte: "**Condition de langue**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justifier d'un niveau de français **B1 oral** minimum",
        "Attestation délivrée par un organisme agréé (DELF, TCF, TEF...)",
      ],
    },
    { type: "p", texte: "**Condition d'assimilation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adhérer aux valeurs de la République",
        "**Réussir le test civique** avec un score minimum de 80%",
        "Connaître les droits et devoirs du citoyen",
      ],
    },
    { type: "p", texte: "**Autres conditions**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être majeur (18 ans minimum)",
        "Avoir un casier judiciaire compatible",
        "Ne pas avoir fait l'objet d'un arrêté d'expulsion",
      ],
    },
    { type: "h2", texte: "Documents à fournir pour le dossier", id: "documents-dossier" },
    { type: "p", texte: "Le dossier de naturalisation comprend de nombreux justificatifs :" },
    { type: "p", texte: "**Documents d'état civil**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de naissance (avec traduction assermentée)",
        "Acte de mariage (si applicable)",
        "Actes de naissance des enfants",
      ],
    },
    { type: "p", texte: "**Documents d'identité**" },
    {
      type: "liste",
      style: "puces",
      items: ["Passeport en cours de validité", "Titre de séjour actuel", "Photos d'identité récentes"],
    },
    { type: "p", texte: "**Justificatifs de résidence**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatifs de domicile des 5 dernières années",
        "Avis d'imposition des 3 dernières années",
        "Attestation de résidence fiscale",
      ],
    },
    { type: "p", texte: "**Justificatifs de ressources**" },
    {
      type: "liste",
      style: "puces",
      items: ["Contrats de travail", "Bulletins de salaire des 3 derniers mois", "Avis d'imposition"],
    },
    { type: "p", texte: "**Documents spécifiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Attestation de réussite au test civique**",
        "Attestation de niveau B1 en français",
        "Diplômes obtenus en France (le cas échéant)",
        "Timbre fiscal (55€)",
      ],
    },
    { type: "h2", texte: "Procédure étape par étape", id: "procedure" },
    { type: "p", texte: "**Étape 1 : Préparation du dossier**" },
    {
      type: "p",
      texte: "Rassemblez tous les documents requis et faites traduire ceux en langue étrangère.",
    },
    { type: "p", texte: "**Étape 2 : Test civique**" },
    {
      type: "p",
      texte: "Inscrivez-vous et passez le test civique dans un centre agréé. Obtenez votre attestation de réussite.",
    },
    { type: "p", texte: "**Étape 3 : Dépôt de la demande**" },
    {
      type: "p",
      texte: "Déposez votre dossier complet à la préfecture de votre département ou via le portail en ligne.",
    },
    { type: "p", texte: "**Étape 4 : Instruction du dossier**" },
    { type: "p", texte: "La préfecture vérifie la recevabilité et mène l'enquête administrative." },
    { type: "p", texte: "**Étape 5 : Entretien d'assimilation**" },
    {
      type: "p",
      texte: "Vous êtes convoqué pour un entretien avec un agent de la préfecture pour évaluer votre assimilation.",
    },
    { type: "p", texte: "**Étape 6 : Décision**" },
    {
      type: "p",
      texte: "Le ministre de l'Intérieur prend la décision finale. En cas d'accord, un décret de naturalisation est publié au Journal officiel.",
    },
    { type: "p", texte: "**Étape 7 : Cérémonie d'accueil**" },
    {
      type: "p",
      texte: "Vous participez à une cérémonie officielle où vous recevez votre décret de naturalisation.",
    },
    { type: "h2", texte: "Délais et recours en cas de refus", id: "delais-recours" },
    { type: "p", texte: "**Délais moyens**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Instruction du dossier : 12 à 18 mois",
        "Délai total (dépôt à décision) : 18 à 24 mois",
        "Certains dossiers complexes peuvent prendre plus de 2 ans",
      ],
    },
    { type: "p", texte: "**En cas de décision défavorable**" },
    { type: "p", texte: "Si votre demande est refusée, vous pouvez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demander les motifs du refus (obligatoirement communiqués)",
        "Déposer un recours gracieux auprès du ministre (2 mois)",
        "Déposer un recours contentieux devant le tribunal administratif (2 mois)",
      ],
    },
    { type: "p", texte: "**En cas d'ajournement**" },
    {
      type: "p",
      texte: "L'administration peut ajourner votre demande si elle estime que vous n'êtes pas prêt. Vous pouvez redéposer après le délai indiqué.",
    },
    { type: "p", texte: "**Après naturalisation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez votre certificat de nationalité française",
        "Vous pouvez demander une carte d'identité et un passeport français",
        "Vous avez tous les droits et devoirs du citoyen français",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La naturalisation est un processus long mais accessible. Avec le test civique désormais obligatoire, préparez-vous dès maintenant sur Test Civique France pour mettre toutes les chances de votre côté.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on garder sa nationalité d'origine lors de la naturalisation ?",
      reponse: "Oui, la France autorise la double nationalité. Vous pouvez conserver votre nationalité d'origine sauf si votre pays d'origine l'interdit.",
    },
    {
      question: "Le test civique est-il obligatoire pour la naturalisation ?",
      reponse: "Oui, depuis le Décret n°2025-647, le test civique est obligatoire pour toute demande de naturalisation.",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "Comment obtenir la nationalité française - Guide complet" },
    { id: "8dKBT22FrKk", titre: "Test civique France : tout ce qu'il faut savoir" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Naturalisation française",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Guide officiel de la procédure de naturalisation",
    },
    {
      titre: "Légifrance - CESEDA",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Code de l'entrée et du séjour des étrangers et du droit d'asile",
    },
    {
      titre: "Ministère de l'Intérieur - Acquisition de la nationalité",
      url: "https://www.interieur.gouv.fr/Archives/Archives-des-actualites/2024-Archives/Naturalisation-et-acquisition-de-la-nationalite-francaise",
      type: "officiel",
      description: "Informations officielles sur les différentes voies d'acquisition",
    },
    {
      titre: "France Diplomatie - Nationalité française",
      url: "https://www.diplomatie.gouv.fr/fr/services-aux-francais/etat-civil-et-nationalite-francaise/",
      type: "officiel",
      description: "Informations pour les démarches depuis l'étranger",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Dossier de naturalisation 2026",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "Préparer l'entretien de naturalisation",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveau de français requis (B2)",
    },
    {
      slug: "droit-de-vote-elections-france-2026-guide-citoyen",
      ancre: "Droits civiques après naturalisation",
    },
  ],
};

export default article;
