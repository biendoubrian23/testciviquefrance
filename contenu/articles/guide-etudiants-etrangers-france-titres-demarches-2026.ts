import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-new.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/guide-etudiants-etrangers-france-titres-demarches-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "guide-etudiants-etrangers-france-titres-demarches-2026",
  titre: "Étudiants étrangers en France : visas, titres et changement de statut 2026",
  titreSeo: "Étudiants étrangers en France : visas, titres et changement de statut 2026",
  resume: "Guide ultime pour étudiants étrangers : du visa étudiant au changement de statut salarié, en passant par la recherche d'emploi et l'APS. Démarches Campus France incluses.",
  chapo: "La France accueille chaque année des milliers d'étudiants internationaux. Du visa étudiant à la recherche d'emploi après études, en passant par le changement de statut, le parcours administratif peut sembler complexe. Ce guide complet pour **étudiants étrangers en France** vous éclaire sur toutes les étapes, y compris les spécificités liées à Campus France et aux changements de statut vers salarié.",
  publieLe: "2026-01-28",
  modifieLe: "2026-01-28",
  minutes: 18,
  theme: "titre séjour étudiant",
  motsCles: [
    "titre séjour étudiant",
    "visa étudiant france",
    "carte séjour étudiant",
    "étudiant étranger france",
    "renouvellement titre séjour étudiant",
    "changement statut étudiant salarié",
    "APS autorisation provisoire séjour",
    "passeport talent",
    "recherche emploi après études",
    "master france étranger",
    "doctorat france étranger",
    "campus france test civique",
    "études supérieures france étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  blocs: [
    { type: "h2", texte: "Le Titre de Séjour Étudiant : Fonctionnement", id: "titre-etudiant" },
    {
      type: "p",
      texte: "Pour étudier en France, le **visa étudiant** (VLS-TS mention \"étudiant\") est la première étape.",
    },
    { type: "p", texte: "Une fois en France, ce visa vaut titre de séjour après validation." },
    { type: "p", texte: "**Renouvellement du titre séjour étudiant** :" },
    {
      type: "p",
      texte: "Il doit être demandé 2 mois avant expiration. La préfecture vérifie trois points cruciaux :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'inscription** dans un établissement agréé.",
        "**Le sérieux des études** (assiduité aux examens, progression dans le cursus).",
        "**Les ressources financières** (environ 615 €/mois minimum).",
      ],
    },
    {
      type: "p",
      texte: "*Attention* : Des redoublements multiples sans justification peuvent entraîner un refus de renouvellement.",
    },
    { type: "h2", texte: "Après les études : Recherche d'emploi et APS", id: "apres-etudes" },
    {
      type: "p",
      texte: "Une fois votre diplôme obtenu (Master, Licence Pro...), plusieurs options s'offrent à vous pour rester en France :",
    },
    { type: "p", texte: "**La Carte \"Recherche d'Emploi / Création d'Entreprise\" (RECE)**" },
    {
      type: "p",
      texte: "Anciennement APS (Autorisation Provisoire de Séjour), cette carte de 12 mois permet de chercher un emploi en lien avec vos études ou de créer une entreprise.",
    },
    {
      type: "p",
      texte: "*Public éligible* : Titulaires d'un Master, d'un diplôme d'ingénieur ou équivalent.",
    },
    { type: "p", texte: "**Le Passeport Talent \"Chercheur\" ou \"Salarié qualifié\"**" },
    {
      type: "p",
      texte: "Si vous trouvez un emploi hautement qualifié avec une rémunération seuil, vous pouvez prétendre directement au Passeport Talent, valable 4 ans.",
    },
    { type: "h2", texte: "Le Changement de Statut Étudiant vers Salarié", id: "changement-statut" },
    { type: "p", texte: "C'est l'étape clé pour travailler durablement en France." },
    { type: "p", texte: "Si vous trouvez un emploi (CDI ou CDD) :" },
    { type: "p", texte: "* L'emploi doit être en **adéquation avec votre diplôme**." },
    {
      type: "p",
      texte: "* La rémunération doit être au moins égale à 1,5 fois le SMIC (sauf exceptions métiers en tension).",
    },
    {
      type: "p",
      texte: "La procédure implique une demande d'autorisation de travail auprès de la DREETS. Si la situation de l'emploi vous est opposable, l'employeur devra prouver qu'il n'a pas trouvé de candidat local (sauf métiers en tension).",
    },
    { type: "h2", texte: "Le rôle de Campus France", id: "campus-france" },
    {
      type: "p",
      texte: "**Campus France** est l'interlocuteur privilégié pour les demandes initiales. Mais saviez-vous qu'il informe aussi sur le **test civique** ? Bien que non obligatoire pour le titre étudiant simple, une connaissance des valeurs de la République est un atout majeur pour toute demande de changement de statut ou de naturalisation future.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "De l'arrivée via Campus France à l'insertion professionnelle, le parcours de l'étudiant étranger demande rigueur et anticipation. La France valorise les talents formés sur son territoire : maîtrisez les rouages du changement de statut et de la carte RECE pour transformer vos études en une carrière réussie.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je travailler avec un titre de séjour étudiant ?",
      reponse: "Oui, à titre accessoire, dans la limite de 60% de la durée légale du travail annuelle (964 heures).",
    },
    {
      question: "C'est quoi la carte RECE ?",
      reponse: "C'est la carte 'Recherche d'Emploi / Création d'Entreprise' qui remplace l'APS pour les diplômés de Master.",
    },
    {
      question: "Comment changer de statut étudiant à salarié ?",
      reponse: "Il faut trouver un emploi en lien avec vos études (rémunération > 1,5 SMIC souvent requise) et déposer une demande de changement de statut en préfecture.",
    },
  ],
  aLireAussi: [
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Prix du titre de séjour étudiant (75€)",
    },
    { slug: "titres-de-sejour-france-guide-complet-2026", ancre: "Tous les titres de séjour expliqués" },
    {
      slug: "travailler-en-france-guide-permis-contrats-etrangers-2026",
      ancre: "Travailler en France comme étudiant étranger",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveaux de français requis",
    },
  ],
};

export default article;
