import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/titre-sejour-etudiant-france-guide-2025`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "titre-sejour-etudiant-france-guide-2025",
  titre: "Titre de séjour étudiant en France : guide complet 2025",
  titreSeo: "Titre de séjour étudiant en France : guide complet 2025",
  resume: "Tout savoir sur le titre de séjour étudiant : démarches Campus France, renouvellement, changement de statut et impact du test civique pour les étudiants étrangers.",
  chapo: "Le titre de séjour étudiant permet aux ressortissants étrangers de poursuivre leurs études supérieures en France. Ce guide complet vous accompagne dans toutes les démarches, du visa initial au changement de statut après les études.",
  publieLe: "2025-12-15",
  modifieLe: "2025-12-15",
  minutes: 17,
  theme: "titre séjour étudiant",
  motsCles: [
    "titre séjour étudiant",
    "visa étudiant france",
    "carte séjour étudiant",
    "études france étranger",
    "campus france",
    "changement statut étudiant salarié",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  blocs: [
    { type: "h2", texte: "Types de titres de séjour pour étudiants", id: "types-titres" },
    { type: "p", texte: "**Visa long séjour valant titre de séjour (VLS-TS) \"étudiant\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée : jusqu'à 1 an",
        "Délivré avant l'arrivée en France",
        "Doit être validé en ligne dans les 3 mois suivant l'arrivée",
      ],
    },
    { type: "p", texte: "**Carte de séjour pluriannuelle \"étudiant\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée : correspond à la durée des études restantes",
        "Délivrée après la première année avec VLS-TS",
        "Maximum 4 ans",
      ],
    },
    { type: "p", texte: "**Carte de séjour \"étudiant-programme de mobilité\"**" },
    {
      type: "liste",
      style: "puces",
      items: ["Pour les étudiants en échange universitaire", "Durée selon le programme"],
    },
    { type: "p", texte: "**Carte \"passeport talent - chercheur\"**" },
    {
      type: "liste",
      style: "puces",
      items: ["Pour les doctorants et chercheurs", "Durée de 4 ans maximum"],
    },
    { type: "h2", texte: "Démarches pour étudier en France", id: "demarches-initiales" },
    { type: "p", texte: "**Étape 1 : Inscription via Campus France**" },
    { type: "p", texte: "Si vous venez d'un pays à procédure \"Études en France\" :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Créez un compte sur le portail Campus France",
        "Constituez votre dossier pédagogique",
        "Passez l'entretien Campus France",
        "Obtenez l'accord préalable",
      ],
    },
    { type: "p", texte: "**Étape 2 : Demande de visa long séjour**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déposez votre demande au consulat de France",
        "Fournissez votre attestation Campus France",
        "Justifiez vos ressources (615€/mois minimum)",
        "Attestation d'hébergement ou réservation",
      ],
    },
    { type: "p", texte: "**Étape 3 : Validation du VLS-TS**" },
    { type: "p", texte: "Dans les 3 mois suivant votre arrivée :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Connectez-vous sur le site de l'ANEF",
        "Payez la taxe (50€)",
        "Téléchargez vos justificatifs",
      ],
    },
    { type: "p", texte: "**Étape 4 : Inscription à la Sécurité sociale étudiante**" },
    {
      type: "liste",
      style: "puces",
      items: ["Via le site ameli.fr", "Gratuit pour les étudiants"],
    },
    { type: "h2", texte: "Renouvellement du titre étudiant", id: "renouvellement-etudiant" },
    { type: "p", texte: "**Conditions de renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être inscrit dans un établissement d'enseignement supérieur",
        "Progression dans les études (pas de redoublement excessif)",
        "Ressources suffisantes maintenues",
        "Présence effective aux cours",
      ],
    },
    { type: "p", texte: "**Depuis janvier 2026 : test civique requis**" },
    {
      type: "p",
      texte: "Pour obtenir une carte de séjour pluriannuelle \"étudiant\", vous devez désormais :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["**Réussir le test civique** (80% minimum)", "Justifier d'un niveau de français A2"],
    },
    { type: "p", texte: "**Documents pour le renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Attestation d'inscription universitaire",
        "Relevés de notes",
        "Justificatifs de ressources",
        "Justificatif de domicile",
        "Attestation de test civique (si première CSP)",
        "Timbre fiscal (75€ pour étudiants)",
      ],
    },
    { type: "p", texte: "**Délai de demande**" },
    { type: "p", texte: "Demandez le renouvellement 2 mois avant l'expiration de votre titre actuel." },
    { type: "h2", texte: "Après les études : changement de statut", id: "apres-etudes" },
    { type: "p", texte: "**Autorisation Provisoire de Séjour (APS) \"recherche d'emploi\"**" },
    {
      type: "p",
      texte: "À la fin de vos études (Master minimum), vous pouvez demander une APS de 12 mois pour :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["Chercher un emploi en lien avec vos études", "Créer une entreprise"],
    },
    { type: "p", texte: "**Changement vers \"salarié\"**" },
    { type: "p", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Emploi en lien avec le diplôme obtenu",
        "Salaire minimum 1,5 SMIC (pour un Master)",
        "CDI ou CDD de plus de 12 mois",
        "Autorisation de travail accordée",
      ],
    },
    { type: "p", texte: "**Changement vers \"passeport talent\"**" },
    { type: "p", texte: "Si vous obtenez un emploi qualifié :" },
    {
      type: "liste",
      style: "puces",
      items: ["Salaire minimum 2 SMIC", "Ou poste de cadre avec diplôme Master", "Carte de 4 ans"],
    },
    { type: "p", texte: "**Changement vers \"entrepreneur\"**" },
    { type: "p", texte: "Si vous créez votre entreprise :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Projet économique viable",
        "Ressources suffisantes",
        "Carte \"entrepreneur/profession libérale\"",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Étudier en France est une opportunité exceptionnelle. Avec les nouvelles règles 2026, le test civique devient une étape importante de votre parcours. Préparez-vous dès maintenant sur Test Civique France pour sécuriser votre avenir en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je travailler avec un titre de séjour étudiant ?",
      reponse: "Oui, vous pouvez travailler jusqu'à 964 heures par an (soit 60% du temps plein), sans autorisation de travail spécifique.",
    },
    {
      question: "Le test civique est-il obligatoire pour tous les étudiants ?",
      reponse: "Depuis janvier 2026, le test civique est requis pour l'obtention d'une carte de séjour pluriannuelle, y compris pour les étudiants.",
    },
  ],
  videos: [
    { id: "faTI6V7m5Tk", titre: "Étudier en France : guide pour les étudiants étrangers" },
  ],
  sources: [
    {
      titre: "Campus France - Étudier en France",
      url: "https://www.campusfrance.org/fr",
      type: "officiel",
      description: "Portail officiel pour les étudiants internationaux",
    },
    {
      titre: "Service-Public.fr - Carte de séjour étudiant",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      description: "Conditions et démarches pour le titre de séjour étudiant",
    },
    {
      titre: "France Diplomatie - Venir étudier en France",
      url: "https://www.diplomatie.gouv.fr/fr/venir-en-france/etudier-en-france/",
      type: "officiel",
      description: "Informations sur les visas étudiants",
    },
  ],
  aLireAussi: [
    {
      slug: "guide-etudiants-etrangers-france-titres-demarches-2026",
      ancre: "Guide étudiant étranger 2026",
    },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut étudiant → salarié",
    },
    { slug: "guide-anef-complet-2026-creer-compte-deposer-demande", ancre: "Créer son compte ANEF" },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Validation du VLS-TS étudiant" },
  ],
};

export default article;
