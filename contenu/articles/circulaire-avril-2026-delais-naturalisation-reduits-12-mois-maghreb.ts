import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb",
  titre: "Nouvelle circulaire avril 2026 : les délais de naturalisation réduits à 12 mois pour les ressortissants du Maghreb",
  titreSeo: "Nouvelle circulaire avril 2026 : les délais de naturalisation réduits à 12 mois pour les ressortissants du Maghreb",
  resume: "Le ministère de l'Intérieur réduit de 18 à 12 mois le délai de traitement des demandes de naturalisation pour les ressortissants marocains, algériens et tunisiens. 45 000 dossiers concernés.",
  chapo: "Le ministère de l'Intérieur a publié le 1er avril 2026 une circulaire interministérielle réduisant de 18 à 12 mois le délai moyen de traitement des demandes de naturalisation déposées par les ressortissants du Maroc, de l'Algérie et de la Tunisie. Plus de 45 000 dossiers sont concernés chaque année.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 8,
  theme: "circulaire avril 2026",
  motsCles: [
    "circulaire avril 2026",
    "naturalisation Maghreb",
    "délai naturalisation réduit",
    "naturalisation marocains",
    "naturalisation algériens",
    "naturalisation tunisiens",
    "décret naturalisation 2026",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    { type: "h2", texte: "Ce que prévoit la circulaire du 1er avril 2026", id: "contenu-circulaire" },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur a publié le 1er avril 2026 une circulaire interministérielle visant à **réduire de 18 à 12 mois le délai moyen de traitement des demandes de naturalisation** déposées par les ressortissants du Maroc, de l'Algérie et de la Tunisie.",
    },
    {
      type: "p",
      texte: "Cette mesure répond à l'engorgement chronique des préfectures, qui traitent à elles seules plus de **45 000 dossiers maghrébins par an**, soit environ 38 % du total national des demandes de naturalisation.",
    },
    { type: "h2", texte: "Qui est concerné ?", id: "qui-concerne" },
    {
      type: "p",
      texte: "La circulaire s'applique aux ressortissants marocains, algériens et tunisiens ayant déposé une demande de naturalisation par décret via la plateforme ANEF ou en préfecture. Les conditions d'éligibilité restent inchangées :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Résidence régulière** en France depuis au moins 5 ans (3 ans pour les diplômés de l'enseignement supérieur français).",
        "**Niveau de français B1 oral et écrit**, attesté par un diplôme DELF, TCF ou équivalent.",
        "**Réussite au test civique obligatoire** (score minimum 80 %, soit 32/40 questions).",
        "**Stabilité professionnelle et fiscale** vérifiée sur les 3 dernières années.",
      ],
    },
    { type: "h2", texte: "Pourquoi cette accélération ?", id: "raisons-acceleration" },
    { type: "p", texte: "Trois facteurs expliquent cette décision :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Arriéré post-Covid.** Plus de 12 000 dossiers maghrébins sont en attente depuis plus de 24 mois, selon les chiffres du Défenseur des droits publiés en février 2026.",
        "**Accords bilatéraux.** La France a renégocié en mars 2026 les conventions consulaires avec le Maroc et la Tunisie, facilitant la vérification d'état civil.",
        "**Objectif politique.** Le gouvernement s'est engagé à ramener le délai moyen de naturalisation sous les 14 mois d'ici fin 2026.",
      ],
    },
    { type: "h2", texte: "Calendrier et mise en œuvre", id: "calendrier" },
    {
      type: "p",
      texte: "La circulaire entre en application immédiate. Les préfectures les plus concernées (Paris, Lyon, Marseille, Toulouse, Bordeaux) ont reçu des renforts de personnel dédiés :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Avril 2026** : mise en place de créneaux prioritaires pour les dossiers complets.",
        "**Juin 2026** : bilan intermédiaire avec l'objectif de 50 % des dossiers en attente traités.",
        "**Décembre 2026** : objectif d'un délai moyen constaté de 12 mois.",
      ],
    },
    {
      type: "h2",
      texte: "Impact pour les candidats : ce qu'il faut faire maintenant",
      id: "actions-candidats",
    },
    { type: "p", texte: "Si vous êtes concerné, voici les actions recommandées :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vérifiez la complétude de votre dossier** sur ANEF (pièces manquantes = retard garanti).",
        "**Passez le test civique rapidement** si ce n'est pas encore fait : les résultats sont valables 18 mois.",
        "**Anticipez l'attestation de niveau B1** : les délais d'inscription au TCF/DELF atteignent 6 semaines dans certaines régions.",
      ],
    },
    {
      type: "p",
      texte: "Test Civique France propose des [entraînements gratuits](/dashboard/entrainement) pour préparer le test civique 2026 et maximiser vos chances de réussite.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Cette circulaire représente une avancée significative pour les candidats à la naturalisation d'origine maghrébine. Pour en profiter pleinement, assurez-vous que votre dossier est complet et que vous avez réussi le test civique obligatoire.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La circulaire réduit-elle le délai à 12 mois pour tous les demandeurs ?",
      reponse: "Non, elle cible spécifiquement les ressortissants du Maroc, de l'Algérie et de la Tunisie. Pour les autres nationalités, le délai moyen reste de 18 mois.",
    },
    {
      question: "Est-ce que le test civique est toujours obligatoire ?",
      reponse: "Oui. Le test civique reste obligatoire pour toute demande de naturalisation depuis janvier 2026, quelle que soit la nationalité d'origine.",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Constituer son dossier de naturalisation",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "Préparer l'entretien d'assimilation",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveau de français B2 requis",
    },
    {
      slug: "prefectures-delais-rendez-vous-avril-2026-solutions",
      ancre: "Délais en préfecture avril 2026",
    },
  ],
};

export default article;
