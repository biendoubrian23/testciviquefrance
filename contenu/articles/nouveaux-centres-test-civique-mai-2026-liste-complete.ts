import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/nouveaux-centres-test-civique-mai-2026-liste-complete`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "nouveaux-centres-test-civique-mai-2026-liste-complete",
  titre: "15 nouveaux centres agréés pour le test civique ouvrent en mai 2026",
  titreSeo: "15 nouveaux centres agréés pour le test civique ouvrent en mai 2026",
  resume: "L'OFII annonce l'ouverture de 15 nouveaux centres d'examen en mai 2026 : Créteil, Saint-Denis, Grenoble, Nice, Montpellier... Délais d'attente réduits de 6 à 2-3 semaines.",
  chapo: "L'Office français de l'immigration et de l'intégration (OFII) a annoncé l'ouverture de 15 nouveaux centres agréés pour le test civique à partir du 5 mai 2026. Cette expansion vise à réduire les délais d'attente de 6 à 2-3 semaines dans les régions les plus tendues.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 6,
  theme: "centres test civique 2026",
  motsCles: [
    "centres test civique 2026",
    "nouveaux centres examen civique",
    "inscription test civique",
    "centres agréés test civique",
    "test civique mai 2026",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
  blocs: [
    { type: "h2", texte: "Où ouvrent les 15 nouveaux centres ?", id: "liste-centres" },
    {
      type: "p",
      texte: "L'Office français de l'immigration et de l'intégration (OFII) a officiellement annoncé l'ouverture de **15 nouveaux centres agréés** pour le passage du test civique, effective au 5 mai 2026. Ces ouvertures visent à résorber les délais d'attente, passés de 3 à 8 semaines dans certaines métropoles.",
    },
    { type: "p", texte: "Les nouvelles implantations couvrent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Île-de-France** : Créteil, Saint-Denis, Cergy-Pontoise",
        "**Auvergne-Rhône-Alpes** : Villeurbanne, Grenoble",
        "**Occitanie** : Montpellier (2e centre), Perpignan",
        "**Provence-Alpes-Côte d'Azur** : Nice, Avignon",
        "**Hauts-de-France** : Roubaix, Amiens",
        "**Grand Est** : Mulhouse, Metz",
        "**Nouvelle-Aquitaine** : Pau",
        "**Outre-mer** : Fort-de-France (Martinique)",
      ],
    },
    { type: "h2", texte: "Capacité et fréquence des sessions", id: "capacite-sessions" },
    {
      type: "p",
      texte: "Chaque nouveau centre disposera d'une capacité de **30 à 50 candidats par session**, avec 2 à 3 sessions par semaine. L'OFII estime que cette extension permettra d'absorber **15 000 passages supplémentaires par an**.",
    },
    {
      type: "p",
      texte: "Le délai moyen d'obtention d'un créneau devrait passer de 6 semaines à **2-3 semaines** dans les régions concernées.",
    },
    { type: "h2", texte: "Comment s'inscrire dans un nouveau centre ?", id: "inscription" },
    {
      type: "p",
      texte: "L'inscription se fait exclusivement via la **plateforme ANEF** (Administration numérique pour les étrangers en France). Les créneaux pour les nouveaux centres seront disponibles à partir du **15 avril 2026**.",
    },
    { type: "p", texte: "Documents requis pour l'inscription :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour en cours de validité ou récépissé de demande",
        "Convocation à la naturalisation (si applicable)",
        "Pièce d'identité avec photo",
      ],
    },
    {
      type: "p",
      texte: "Pour maximiser vos chances, [entraînez-vous avec nos examens blancs](/dashboard/examens) avant le jour J.",
    },
    { type: "h2", texte: "Réactions et contexte", id: "reactions" },
    {
      type: "p",
      texte: "La Cimade et France Terre d'Asile saluent cette extension tout en soulignant que « le maillage territorial reste insuffisant dans les zones rurales ». De son côté, la Direction générale des étrangers en France (DGEF) indique qu'**une cinquième vague d'ouvertures est prévue pour septembre 2026**, ciblant les départements d'outre-mer et les villes moyennes.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'ouverture de ces 15 centres devrait significativement améliorer l'accès au test civique sur l'ensemble du territoire. Inscrivez-vous dès que les créneaux seront ouverts sur ANEF pour bénéficier des premières sessions.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quand les créneaux seront-ils disponibles pour les nouveaux centres ?",
      reponse: "Les créneaux seront ouverts sur la plateforme ANEF à partir du 15 avril 2026 pour des sessions débutant le 5 mai 2026.",
    },
    {
      question: "Le test civique est-il identique dans tous les centres ?",
      reponse: "Oui. Le test est standardisé nationalement : 40 questions QCM, 45 minutes, seuil de réussite à 80 % (32 bonnes réponses).",
    },
  ],
  aLireAussi: [
    { slug: "centres-agrees-examen-civique-2026", ancre: "Liste complète des centres agréés" },
    {
      slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire",
      ancre: "S'inscrire au test civique",
    },
    {
      slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent",
      ancre: "Taux de réussite 2026 : 72%",
    },
    { slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture", ancre: "Prix du test civique" },
  ],
};

export default article;
