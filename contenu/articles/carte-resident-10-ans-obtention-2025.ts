import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/carte-resident-10-ans-obtention-2025`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "carte-resident-10-ans-obtention-2025",
  titre: "Carte de résident 10 ans : comment l'obtenir en 2025",
  titreSeo: "Carte de résident 10 ans : comment l'obtenir en 2025",
  resume: "Procédure complète pour obtenir la carte de résident de 10 ans en France : conditions d'éligibilité, justificatifs requis et nouvelle réforme 2025.",
  chapo: "La carte de résident est le titre de séjour le plus stable accordé aux étrangers en France. Valable 10 ans et renouvelable de plein droit, elle offre des droits étendus et une sécurité juridique maximale.",
  publieLe: "2025-12-16",
  modifieLe: "2025-12-16",
  minutes: 16,
  theme: "carte résident 10 ans",
  motsCles: [
    "carte résident 10 ans",
    "titre séjour 10 ans",
    "carte résident france",
    "conditions carte résident",
    "renouvellement carte résident",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  },
  blocs: [
    { type: "h2", texte: "Qu'est-ce que la carte de résident ?", id: "presentation" },
    {
      type: "p",
      texte: "La carte de résident est un titre de séjour d'une durée de **10 ans**, renouvelable automatiquement sous conditions. Elle représente l'aboutissement du parcours d'intégration en France.",
    },
    { type: "p", texte: "**Avantages de la carte de résident**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée de 10 ans (stabilité maximale)",
        "Renouvellement de plein droit",
        "Droit au travail sans restriction",
        "Facilitation des démarches administratives",
        "Accès facilité à la naturalisation",
        "Possibilité de demander un titre pour sa famille",
      ],
    },
    { type: "p", texte: "**Types de cartes de résident**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte de résident classique (10 ans)",
        "Carte de résident longue durée-UE",
        "Carte de résident permanent (après 2 renouvellements)",
      ],
    },
    { type: "h2", texte: "Conditions d'obtention en 2025-2026", id: "conditions-2025" },
    { type: "p", texte: "**Conditions générales requises**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Résider en France de manière **régulière depuis 5 ans** minimum",
        "Disposer de **ressources stables et suffisantes**",
        "Ne pas constituer une menace pour l'ordre public",
        "**Réussir le test civique** (obligation depuis 2026)",
        "Justifier d'un niveau de français **B1** (oral)",
      ],
    },
    { type: "p", texte: "**Cas d'attribution de plein droit** (sans condition de durée)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conjoint de Français (après 3 ans de mariage et de séjour)",
        "Parent d'enfant français résidant en France",
        "Réfugié statutaire et sa famille",
        "Apatride et sa famille",
        "Ancien combattant",
        "Étranger ayant servi dans la Légion étrangère",
      ],
    },
    { type: "p", texte: "**Cas d'attribution sur demande**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Après 5 ans de séjour régulier continu",
        "Avec justification d'intégration républicaine",
        "Avec ressources suffisantes (SMIC minimum)",
      ],
    },
    { type: "h2", texte: "Procédure complète de demande", id: "procedure-complete" },
    { type: "p", texte: "**1. Vérifiez votre éligibilité**" },
    { type: "p", texte: "Confirmez que vous remplissez toutes les conditions requises." },
    { type: "p", texte: "**2. Passez le test civique**" },
    {
      type: "p",
      texte: "Inscrivez-vous dans un centre agréé et obtenez votre attestation de réussite (80% minimum).",
    },
    { type: "p", texte: "**3. Justifiez votre niveau de français B1**" },
    {
      type: "p",
      texte: "Passez un test reconnu (DELF B1, TCF, etc.) ou fournissez un diplôme équivalent.",
    },
    { type: "p", texte: "**4. Constituez votre dossier**" },
    { type: "p", texte: "Documents requis :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire CERFA",
        "Passeport valide",
        "Titre de séjour actuel",
        "Justificatif de domicile",
        "Justificatifs de ressources (3 derniers mois)",
        "Attestation de test civique",
        "Attestation de niveau B1",
        "Timbre fiscal (225€)",
        "3 photos d'identité",
      ],
    },
    { type: "p", texte: "**5. Déposez votre demande**" },
    { type: "p", texte: "En préfecture ou via le portail ANEF selon votre département." },
    { type: "p", texte: "**6. Attendez la décision**" },
    {
      type: "p",
      texte: "Délai : 4 à 8 mois en moyenne. Vous recevez un récépissé pendant l'instruction.",
    },
    {
      type: "h2",
      texte: "Renouvellement et carte de résident permanent",
      id: "renouvellement-permanent",
    },
    { type: "p", texte: "**Renouvellement de la carte de résident**" },
    { type: "p", texte: "Le renouvellement est automatique si vous :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avez résidé habituellement en France",
        "N'avez pas été absent plus de 3 ans consécutifs",
        "N'avez pas commis d'infraction grave",
      ],
    },
    { type: "p", texte: "**Carte de résident permanent**" },
    {
      type: "p",
      texte: "Après **2 renouvellements** de carte de résident (soit 20 ans), vous pouvez demander la carte de résident permanent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée illimitée",
        "Ne nécessite plus de renouvellement",
        "Mêmes droits que la carte de résident",
      ],
    },
    { type: "p", texte: "**Attention : perte du droit au renouvellement**" },
    { type: "p", texte: "Vous perdez votre carte de résident si :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous résidez hors de France plus de 3 ans",
        "Vous avez obtenu la carte par fraude",
        "Vous représentez une menace grave pour l'ordre public",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La carte de résident de 10 ans est l'objectif ultime pour de nombreux étrangers souhaitant s'établir durablement en France. Avec le test civique désormais obligatoire, commencez votre préparation dès maintenant sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "Comment obtenir la carte de résident 10 ans" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Carte de résident",
      url: "https://www.service-public.fr/particuliers/vosdroits/F11217",
      type: "officiel",
      description: "Conditions et démarches pour la carte de résident de 10 ans",
    },
    {
      titre: "Légifrance - Articles L414-1 à L414-14 du CESEDA",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Textes juridiques régissant la carte de résident",
    },
    {
      titre: "Préfecture de Police - Carte de résident",
      url: "https://www.prefecturedepolice.interieur.gouv.fr/",
      type: "officiel",
      description: "Informations pour les demandes en Île-de-France",
    },
  ],
  aLireAussi: [
    { slug: "titres-de-sejour-france-guide-complet-2026", ancre: "Tous les types de titres de séjour" },
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Naturalisation après la carte de résident",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler sa carte de résident",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveau de français requis",
    },
  ],
};

export default article;
