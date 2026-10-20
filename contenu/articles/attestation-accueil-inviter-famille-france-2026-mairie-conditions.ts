import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-quotidien-immigration.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/attestation-accueil-inviter-famille-france-2026-mairie-conditions`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "attestation-accueil-inviter-famille-france-2026-mairie-conditions",
  titre: "Attestation d'accueil pour inviter sa famille en France : mairie, conditions, visa",
  titreSeo: "Attestation d'accueil pour inviter sa famille en France : mairie, conditions, visa",
  resume: "Conditions de logement, démarches en mairie, coût du timbre fiscal, documents pour le visa : le guide complet pour faire venir vos proches en France.",
  chapo: "Vous souhaitez inviter un membre de votre famille ou un proche étranger en France pour un séjour touristique ? Dans la plupart des cas, une attestation d'accueil est obligatoire pour obtenir le visa. Ce document, délivré par la mairie, certifie que vous vous engagez à héberger la personne et à prendre en charge certains frais. Voici tout ce qu'il faut savoir en 2026 : conditions, démarches en mairie, coût, documents requis et ce que vérifie le consulat.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 12,
  theme: "attestation d'accueil France 2026",
  motsCles: [
    "attestation d'accueil France 2026",
    "inviter famille en France visa",
    "attestation accueil mairie démarches",
    "attestation hébergement étranger France",
    "inviter parents en France papiers",
    "attestation accueil conditions logement",
    "certificat hébergement mairie France",
    "faire venir famille France visa",
    "attestation accueil prix 2026",
    "attestation accueil combien temps",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
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
      texte: "Qu'est-ce que l'attestation d'accueil et quand est-elle obligatoire ?",
      id: "definition-obligatoire",
    },
    {
      type: "p",
      texte: "L'attestation d'accueil est un **document officiel** par lequel une personne résidant en France s'engage à héberger un étranger pour un séjour de courte durée (maximum 90 jours). Elle est prévue par les **articles L. 812-1 à L. 812-8 du CESEDA** (Code de l'entrée et du séjour des étrangers).",
    },
    { type: "h3", texte: "Quand est-elle obligatoire ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour tout ressortissant étranger **soumis à visa Schengen** qui séjourne chez un particulier (et non à l'hôtel)",
        "L'attestation fait partie des pièces exigées pour la **demande de visa court séjour** au consulat de France",
      ],
    },
    { type: "h3", texte: "Quand n'est-elle PAS nécessaire ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si la personne invitée est **ressortissante UE/EEE ou Suisse**",
        "Si la personne invitée séjourne à **l'hôtel ou en location touristique** (Airbnb, etc.)",
        "Si la personne invitée a un **visa de travail, d'études ou familial** (long séjour)",
        "Certaines nationalités exemptées de visa court séjour Schengen (Brésil, Argentine, etc.)",
      ],
    },
    { type: "h2", texte: "Conditions à remplir par l'hébergeant", id: "conditions-hebergeant" },
    {
      type: "p",
      texte: "Pour obtenir l'attestation d'accueil, vous devez remplir les conditions suivantes :",
    },
    { type: "h3", texte: "Conditions personnelles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être de **nationalité française** ou titulaire d'un **titre de séjour en cours de validité**",
        "Résider en France de façon stable et régulière",
        "S'engager à prendre en charge les **frais de séjour** de la personne hébergée (hébergement, nourriture) si elle ne peut les assumer elle-même",
      ],
    },
    { type: "h3", texte: "Conditions de logement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le logement doit respecter les **normes de salubrité et de surface** (en général, 9 m² minimum par personne hébergée)",
        "La mairie peut effectuer une **visite du logement** pour vérifier les conditions d'hébergement",
        "Vous devez être **propriétaire ou locataire** du logement (et avoir l'accord du propriétaire si locataire)",
      ],
    },
    {
      type: "p",
      texte: "**Important** : l'attestation d'accueil ne vous engage **pas financièrement** pour les frais médicaux de la personne invitée (sauf en cas d'hospitalisation sous certaines conditions).",
    },
    { type: "h2", texte: "La démarche en mairie : étape par étape", id: "demarches-mairie" },
    { type: "p", texte: "La demande se fait **en personne à la mairie** de votre lieu de résidence :" },
    { type: "h3", texte: "Étape 1 : Prenez rendez-vous" },
    {
      type: "p",
      texte: "La plupart des mairies exigent un rendez-vous préalable. Réservez en ligne ou par téléphone. Dans les grandes villes, comptez 1 à 3 semaines d'attente pour un créneau.",
    },
    { type: "h3", texte: "Étape 2 : Préparez les documents" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pièce d'identité** (CNI ou passeport pour les Français, titre de séjour pour les étrangers)",
        "**Justificatif de domicile** de moins de 3 mois (facture, avis d'imposition, quittance de loyer)",
        "**Document prouvant la capacité à héberger** : titre de propriété, bail, ou attestation du propriétaire",
        "**Timbre fiscal de 30 €**",
        "**Informations sur la personne invitée** : nom, prénom, date de naissance, nationalité, numéro de passeport, dates de séjour prévues",
      ],
    },
    { type: "h3", texte: "Étape 3 : Validation par la mairie" },
    {
      type: "p",
      texte: "Le maire valide l'attestation (ou la refuse si les conditions ne sont pas remplies). **Délai moyen : 1 à 15 jours** selon les mairies.",
    },
    { type: "h3", texte: "Étape 4 : Envoi à l'invité" },
    {
      type: "p",
      texte: "Envoyez l'attestation originale validée à la personne invitée pour qu'elle la joigne à sa demande de visa.",
    },
    {
      type: "h2",
      texte: "L'attestation dans le dossier de visa : ce que vérifie le consulat",
      id: "visa-consulat",
    },
    {
      type: "p",
      texte: "L'attestation d'accueil est une pièce du dossier de **visa court séjour Schengen (type C)**. Le consulat vérifie :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **validité et l'authenticité** de l'attestation (cachet de la mairie, signature)",
        "La **concordance** entre les dates de séjour demandées et celles sur l'attestation",
        "Les **moyens financiers** de l'hébergeant et/ou de l'invité",
        "L'**assurance voyage** couvrant les frais médicaux (minimum 30 000 € de couverture, obligatoire)",
      ],
    },
    {
      type: "p",
      texte: "**Attention** : l'attestation d'accueil **ne garantit pas l'obtention du visa**. Le consulat peut refuser le visa s'il estime que les attaches dans le pays d'origine sont insuffisantes (risque de non-retour) ou si les ressources financières sont jugées insuffisantes.",
    },
    { type: "h3", texte: "Autres pièces requises pour le visa (en plus de l'attestation) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire de demande de visa",
        "Passeport valide 3 mois après la date de retour",
        "Photos d'identité",
        "Assurance voyage Schengen",
        "Justificatifs financiers (relevés bancaires de l'invité)",
        "Preuve de vol aller-retour ou réservation",
      ],
    },
    { type: "h2", texte: "Refus de l'attestation : motifs et recours", id: "refus-recours" },
    {
      type: "p",
      texte: "Le maire peut refuser de délivrer l'attestation. Les motifs les plus fréquents :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Logement non conforme** aux normes de salubrité ou surface insuffisante",
        "**Nombre d'attestations excessif** demandé par le même hébergeant (suspicion de détournement)",
        "**Fausses informations** dans le dossier",
      ],
    },
    { type: "h3", texte: "Recours possibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Recours gracieux** : écrivez au maire en expliquant votre situation et en fournissant des éléments complémentaires",
        "**Recours auprès du préfet** : si le refus vous semble injustifié",
        "**Recours au tribunal administratif** : en dernier recours, dans les 2 mois suivant la notification du refus",
      ],
    },
    {
      type: "p",
      texte: "**Bon à savoir** : le silence de la mairie pendant plus de **30 jours** vaut refus implicite. N'hésitez pas à relancer.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'attestation d'accueil est une formalité incontournable pour faire venir vos proches en France. Anticipez les délais, surtout avant l'été quand les mairies sont surchargées, et assurez-vous que votre logement remplit les conditions. Envoyez l'original à la personne invitée bien en avance pour qu'elle puisse déposer sa demande de visa dans les temps.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte une attestation d'accueil en 2026 ?",
      reponse: "L'attestation d'accueil coûte 30 € sous forme de timbre fiscal. Ce montant est à la charge de l'hébergeant en France.",
    },
    {
      question: "Combien de temps faut-il pour obtenir l'attestation d'accueil ?",
      reponse: "Entre 1 et 15 jours après le dépôt du dossier complet en mairie. Dans les grandes villes, il faut ajouter le délai de prise de rendez-vous (1 à 3 semaines).",
    },
    {
      question: "Peut-on faire une attestation d'accueil si on est locataire ?",
      reponse: "Oui, les locataires peuvent demander une attestation d'accueil. Vous devez fournir votre bail et un justificatif de domicile. Certaines mairies demandent une autorisation écrite du propriétaire.",
    },
    {
      question: "L'attestation d'accueil garantit-elle l'obtention du visa ?",
      reponse: "Non. L'attestation d'accueil est une pièce du dossier de visa, mais le consulat peut refuser le visa pour d'autres motifs (ressources insuffisantes, risque de non-retour, etc.).",
    },
    {
      question: "Combien de personnes peut-on inviter avec une attestation d'accueil ?",
      reponse: "Chaque attestation concerne une seule personne (ou une famille nucléaire : couple + enfants mineurs). Il n'y a pas de limite légale au nombre d'attestations, mais la mairie peut refuser si le nombre semble excessif.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Attestation d'accueil",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2191",
      type: "officiel",
      description: "Procédure officielle de demande d'attestation d'accueil",
    },
    {
      titre: "CESEDA : Articles L. 812-1 à L. 812-8",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042776250/",
      type: "juridique",
      description: "Cadre juridique de l'attestation d'accueil",
    },
    {
      titre: "France-Visas.gouv.fr, Visa court séjour",
      url: "https://france-visas.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle de demande de visa pour la France",
    },
  ],
  aLireAussi: [
    { slug: "regroupement-familial-france-procedure-2025", ancre: "Procédure de regroupement familial" },
    {
      slug: "mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour",
      ancre: "Mariage avec un étranger en France",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Visa long séjour pour la famille" },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Premiers pas en France pour les proches",
    },
  ],
};

export default article;
