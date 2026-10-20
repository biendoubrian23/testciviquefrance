import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-quotidien-immigration.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/echanger-permis-conduire-etranger-france-2026-ants-demarches`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "echanger-permis-conduire-etranger-france-2026-ants-demarches",
  titre: "Échange permis de conduire étranger 2026 : ANTS pas-à-pas, liste des 60+ pays éligibles, délai réel (3-12 mois) et solutions si refus",
  titreSeo: "Échange permis de conduire étranger 2026 : ANTS pas-à-pas, liste des 60+ pays éligibles, délai réel (3-12 mois) et solutions si refus",
  resume: "Procédure ANTS détaillée étape par étape, liste officielle 2026 des pays dont le permis s'échange (et ceux qui ne s'échangent pas), délai réel par préfecture, coût exact (45 €), 5 erreurs qui font rejeter le dossier et que faire si votre pays n'est pas listé.",
  chapo: "Vous êtes étranger installé en France et vous possédez un permis de conduire obtenu dans votre pays d'origine ? Depuis 2017, la demande d'échange se fait exclusivement en ligne sur le site de l'ANTS. Mais tous les permis ne sont pas échangeables : seuls les pays ayant signé un accord de réciprocité avec la France sont éligibles. Ce guide vous explique étape par étape les conditions, la procédure, les délais en 2026 et que faire si votre pays n'a pas d'accord avec la France.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 13,
  theme: "échanger permis de conduire étranger France",
  motsCles: [
    "échanger permis de conduire étranger France",
    "permis de conduire étranger en France 2026",
    "échange permis conduire ANTS",
    "permis de conduire marocain en France",
    "permis de conduire algérien échange",
    "permis de conduire tunisien France",
    "pays éligibles échange permis France",
    "reconnaissance permis étranger France",
    "délai échange permis conduire ANTS 2026",
    "conduire en France avec permis étranger",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637",
  },
  blocs: [
    {
      type: "h2",
      texte: "Pouvez-vous conduire en France avec votre permis étranger ?",
      id: "pouvez-vous-conduire",
    },
    {
      type: "p",
      texte: "En arrivant en France, vous pouvez conduire avec votre permis étranger pendant une **durée limitée** :",
    },
    { type: "h3", texte: "Règles selon votre situation :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Touriste / court séjour** : votre permis étranger est valable pendant toute la durée de votre séjour (max 3 mois). Un **permis international** est recommandé pour les pays non francophones.",
        "**Titulaire d'un titre de séjour** : votre permis étranger est reconnu pendant **1 an** à compter de la délivrance de votre premier titre de séjour (ou de votre entrée en France avec un VLS-TS).",
        "**Étudiant** : votre permis étranger est valable pendant **toute la durée de vos études**, sans obligation d'échange.",
      ],
    },
    {
      type: "p",
      texte: "**Passé ces délais**, vous devez soit **échanger votre permis** (si votre pays est éligible), soit **repasser le permis français**.",
    },
    { type: "h2", texte: "Liste des pays éligibles à l'échange de permis", id: "pays-eligibles" },
    {
      type: "p",
      texte: "Seuls les permis délivrés par des pays ayant un **accord de réciprocité** avec la France peuvent être échangés. Voici les principales catégories :",
    },
    { type: "h3", texte: "Union européenne / EEE (échange automatique) :" },
    {
      type: "p",
      texte: "Tous les pays de l'UE et de l'Espace économique européen. L'échange est de droit, sans examen.",
    },
    { type: "h3", texte: "Pays hors UE avec accord bilatéral (liste non exhaustive) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Maghreb** : Algérie, Maroc, Tunisie ✅",
        "**Afrique** : Sénégal, Côte d'Ivoire, Cameroun, Mali, Bénin, Togo, Burkina Faso, Gabon, Congo, Madagascar, Maurice ✅",
        "**Asie** : Japon, Corée du Sud, Singapour, Taïwan ✅",
        "**Amériques** : Canada (Québec et Ontario), Brésil (certains États) ✅",
        "**Autres** : Turquie, Russie, Ukraine, Kosovo, Moldavie ✅",
      ],
    },
    {
      type: "p",
      texte: "**Pays NON éligibles (exemples)** : États-Unis (sauf certains États), Chine, Inde, Pakistan, Bangladesh, Sri Lanka, Égypte, Vietnam → vous devez repasser le permis en France.",
    },
    {
      type: "p",
      texte: "La liste complète est disponible sur le **site de l'ANTS** et est mise à jour régulièrement.",
    },
    {
      type: "h2",
      texte: "La procédure d'échange sur le site ANTS (étape par étape)",
      id: "procedure-ants",
    },
    { type: "p", texte: "Toute la démarche se fait en ligne sur **ants.gouv.fr** :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Créez un compte ANTS** ou connectez-vous via FranceConnect",
        "Choisissez **« Demande de permis de conduire »** puis **« Échange d'un permis étranger »**",
        "**Téléversez les documents** : Formulaire Cerfa 14879*01 Permis de conduire étranger original (recto-verso) Traduction assermentée du permis Justificatif d'identité (titre de séjour) Justificatif de domicile de moins de 6 mois Photo d'identité et signature numérisées Attestation sur l'honneur de non-suspension/annulation du permis",
        "**Envoyez le permis original** par courrier recommandé à l'adresse indiquée (il vous sera restitué après vérification)",
        "**Attendez la vérification** auprès des autorités de votre pays d'origine",
        "**Recevez votre permis français** (format carte de crédit européen)",
      ],
    },
    { type: "h2", texte: "Délais en 2026 : à quoi s'attendre ?", id: "delais-2026" },
    { type: "p", texte: "Les délais d'échange varient considérablement :" },
    {
      type: "tableau",
      entetes: ["Situation", "Délai moyen 2026"],
      lignes: [
        ["Permis UE/EEE", "2 à 4 semaines"],
        ["Permis Maghreb (Maroc, Algérie, Tunisie)", "6 à 12 mois"],
        ["Permis Afrique subsaharienne", "8 à 18 mois"],
        ["Permis Asie (Japon, Corée)", "3 à 6 mois"],
      ],
    },
    {
      type: "p",
      texte: "Le goulot d'étranglement est la **vérification d'authenticité** auprès des autorités du pays d'origine. Certains pays répondent en quelques semaines, d'autres… jamais.",
    },
    {
      type: "p",
      texte: "**Pendant l'attente** : vous recevez une **attestation de dépôt (AEDP)** qui vous autorise à conduire en France pendant 1 an, renouvelable.",
    },
    {
      type: "h2",
      texte: "Votre permis n'est pas échangeable ? Voici les solutions",
      id: "permis-non-echangeable",
    },
    {
      type: "p",
      texte: "Si votre pays n'a pas d'accord avec la France, vous devez **repasser le permis français**. Mais des facilités existent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Inscription en auto-école** : vous pouvez passer directement le code et la conduite. Votre expérience de conduite n'est pas perdue.",
        "**Code de la route en ligne** : de nombreuses plateformes proposent l'entraînement au code (30 €-50 € pour des forfaits illimités).",
        "**Candidat libre** : vous pouvez vous inscrire au permis en candidat libre via ANTS pour réduire les coûts.",
        "**Aide financière** : le CPF (Compte personnel de formation) finance le permis B pour les salariés et demandeurs d'emploi.",
      ],
    },
    {
      type: "p",
      texte: "**Coût moyen du permis en France (2026)** : 1 200 € à 2 000 € en auto-école classique, 700 € à 1 000 € en candidat libre ou en ligne.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'échange de permis de conduire est une démarche incontournable pour les étrangers installés en France. Si votre pays a un accord avec la France, faites la demande sur ANTS dès que possible, les délais sont longs. Si votre pays n'est pas éligible, pas de panique : le permis français reste accessible. Dans tous les cas, ne conduisez pas au-delà du délai légal avec votre permis étranger, vous risquez une amende et la confiscation du véhicule.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps puis-je conduire en France avec mon permis étranger ?",
      reponse: "1 an à compter de la délivrance de votre premier titre de séjour. Les étudiants bénéficient d'une exception : leur permis est valable pendant toute la durée des études.",
    },
    {
      question: "Puis-je échanger mon permis marocain / algérien / tunisien en France ?",
      reponse: "Oui. Le Maroc, l'Algérie et la Tunisie ont un accord de réciprocité avec la France. La demande se fait en ligne sur ANTS. Le délai moyen est de 6 à 12 mois en raison des vérifications.",
    },
    {
      question: "Que se passe-t-il si je conduis après le délai d'un an sans avoir échangé mon permis ?",
      reponse: "Vous êtes considéré comme conduisant sans permis valide. Les sanctions : amende de 800 € (minorée à 640 €), immobilisation du véhicule, et assurance non valable en cas d'accident.",
    },
    {
      question: "Mon permis étranger m'est-il restitué après l'échange ?",
      reponse: "Non. Le permis étranger original est conservé par les autorités françaises et transmis à l'ambassade de votre pays. Vous recevez en échange le permis français au format européen.",
    },
  ],
  sources: [
    {
      titre: "ANTS : Échange de permis de conduire étranger",
      url: "https://permisdeconduire.ants.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle de demande d'échange de permis",
    },
    {
      titre: "Service-Public.fr, Échange de permis de conduire non européen",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1460",
      type: "officiel",
      description: "Conditions et liste des pays éligibles à l'échange",
    },
    {
      titre: "Arrêté du 12 janvier 2012 modifié",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025249979/",
      type: "juridique",
      description: "Texte fixant la liste des pays avec accord de réciprocité",
    },
  ],
  aLireAussi: [
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Plateforme ANEF pour les démarches",
    },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Démarches à l'arrivée en France",
    },
    {
      slug: "titres-de-sejour-france-guide-complet-2026",
      ancre: "Titre de séjour et permis de conduire",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Validation VLS-TS et permis" },
  ],
};

export default article;
