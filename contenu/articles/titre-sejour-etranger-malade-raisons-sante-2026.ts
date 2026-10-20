import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-titre-sejour-sante.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/titre-sejour-etranger-malade-raisons-sante-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "titre-sejour-etranger-malade-raisons-sante-2026",
  titre: "Titre de séjour étranger malade 2026 : procédure OFII, droits et recours",
  titreSeo: "Titre de séjour étranger malade 2026 : procédure OFII, droits et recours",
  resume: "Guide complet du titre de séjour pour raisons de santé : conditions, procédure OFII, collège de médecins, droits au travail, AME et recours en cas de refus.",
  chapo: "Le titre de séjour pour raisons de santé, aussi appelé \"titre étranger malade\", est un dispositif humanitaire essentiel du droit français. Il permet à un ressortissant étranger gravement malade de rester en France pour accéder à des soins indisponibles dans son pays d'origine. En 2026, cette procédure, encadrée par le Code de l'entrée et du séjour des étrangers (CESEDA), reste une voie protectrice mais exigeante.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 17,
  theme: "titre séjour étranger malade",
  motsCles: [
    "titre séjour étranger malade",
    "titre séjour raisons de santé",
    "titre séjour maladie France",
    "étranger malade France procédure",
    "OFII avis médical",
    "collège médecins OFII",
    "titre séjour soins France",
    "carte séjour vie privée familiale maladie",
    "AME aide médicale état",
    "recours refus titre séjour maladie",
    "renouvellement titre séjour santé",
    "pathologie grave titre séjour",
    "sans papiers soins France",
    "PASS soins gratuits hôpital",
    "accompagnant étranger malade",
    "CSS complémentaire santé solidaire",
    "OQTF étranger malade",
    "droit au séjour soins",
    "CESEDA titre séjour santé",
    "Comede santé exilés",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide complet vous explique les conditions d'éligibilité, la procédure de demande via l'OFII et la préfecture, le rôle du collège de médecins, les droits associés et les recours possibles en cas de refus. Que vous soyez demandeur, accompagnant ou travailleur social, vous trouverez ici toutes les informations à jour pour comprendre et naviguer cette procédure complexe.",
    },
    {
      type: "h2",
      texte: "Conditions d'éligibilité au titre de séjour pour raisons de santé",
      id: "conditions-eligibilite",
    },
    {
      type: "p",
      texte: "Le titre de séjour \"étranger malade\" est encadré par l'article L. 425-9 du CESEDA. Voici les conditions à remplir :",
    },
    { type: "p", texte: "**1. Résider habituellement en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous devez vivre en France, même en situation irrégulière",
        "Aucune condition de durée minimale de résidence",
      ],
    },
    { type: "p", texte: "**2. Avoir une pathologie grave :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La maladie doit nécessiter une prise en charge médicale",
        "Le défaut de soins doit entraîner des conséquences d'une exceptionnelle gravité (risque vital, handicap grave)",
      ],
    },
    { type: "p", texte: "**3. Absence de traitement dans le pays d'origine :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le traitement médical approprié doit être indisponible dans votre pays d'origine",
        "L'évaluation porte sur l'accès effectif au traitement (pas seulement l'existence théorique du traitement)",
      ],
    },
    { type: "p", texte: "**4. Pas de condition de régularité du séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Même si vous êtes en situation irrégulière, vous pouvez déposer une demande",
        "C'est l'un des rares cas où un sans-papiers peut obtenir un titre",
      ],
    },
    { type: "p", texte: "**Pathologies concernées (exemples) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cancers nécessitant une chimiothérapie spécifique",
        "VIH/SIDA avec traitement antirétroviral",
        "Maladies chroniques graves (insuffisance rénale, hépatite C)",
        "Pathologies psychiatriques sévères",
        "Handicaps nécessitant une rééducation spécialisée",
        "Maladies rares avec traitement uniquement disponible en France",
      ],
    },
    { type: "h2", texte: "Le rôle de l'OFII et du collège de médecins", id: "role-ofii-medecins" },
    {
      type: "p",
      texte: "Depuis 2017, c'est l'OFII (et non plus l'ARS) qui évalue la situation médicale :",
    },
    { type: "p", texte: "**Le collège de médecins de l'OFII :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Composé de 3 médecins",
        "Émet un avis médical après examen du dossier",
        "L'avis est transmis au préfet qui prend la décision finale",
      ],
    },
    { type: "p", texte: "**Ce que le collège évalue :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "La gravité de la pathologie",
        "Les conséquences d'un défaut de soins (exceptionnelle gravité ?)",
        "L'existence d'un traitement approprié dans le pays d'origine",
        "L'accès effectif à ce traitement dans le pays d'origine",
        "La durée prévisible du traitement",
      ],
    },
    { type: "p", texte: "**L'avis médical est confidentiel :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le préfet ne connaît pas le diagnostic",
        "Il reçoit seulement l'avis favorable ou défavorable",
        "Le secret médical est préservé",
      ],
    },
    { type: "p", texte: "**Après l'avis du collège :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avis favorable → le préfet délivre le titre de séjour (sauf exception : ordre public)",
        "Avis défavorable → le préfet refuse le titre",
        "Le préfet n'est pas formellement lié par l'avis, mais le suit dans la grande majorité des cas",
      ],
    },
    { type: "p", texte: "**Délais d'examen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dépôt du dossier médical : environ 1 mois après le dépôt du dossier en préfecture",
        "Avis du collège : 3 à 6 mois",
        "Décision du préfet : 1 à 3 mois après l'avis",
      ],
    },
    { type: "h2", texte: "Procédure de demande pas à pas", id: "procedure-demande" },
    {
      type: "p",
      texte: "Voici les étapes détaillées pour demander un titre de séjour pour raisons de santé en 2026 :",
    },
    { type: "p", texte: "**Étape 1 : Préparer le dossier médical**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultez votre médecin traitant ou un spécialiste",
        "Rassemblez les certificats médicaux, ordonnances, comptes rendus d'examens",
        "Le rapport doit démontrer la gravité de la maladie et la nécessité d'un traitement en France",
      ],
    },
    { type: "p", texte: "**Étape 2 : Déposer la demande en préfecture**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prenez rendez-vous en préfecture (ou sous-préfecture) de votre domicile",
        "En Île-de-France : certaines procédures passent par ANEF",
        "Présentez :",
        "Formulaire de demande de titre de séjour",
        "Documents d'identité (passeport)",
        "Justificatif de domicile",
        "3 photos d'identité",
        "Dossier médical sous pli confidentiel (à l'attention du médecin de l'OFII)",
      ],
    },
    { type: "p", texte: "**Étape 3 : Transmission du dossier médical à l'OFII**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La préfecture transmet le pli confidentiel au collège de médecins de l'OFII",
        "Vous pouvez être convoqué pour un examen médical complémentaire",
      ],
    },
    { type: "p", texte: "**Étape 4 : Convocation médicale (si nécessaire)**" },
    {
      type: "liste",
      style: "puces",
      items: ["Un médecin de l'OFII peut vous examiner", "Apportez tous vos documents médicaux"],
    },
    { type: "p", texte: "**Étape 5 : Avis du collège de médecins**" },
    {
      type: "liste",
      style: "puces",
      items: ["Le collège rend son avis : favorable ou défavorable", "Cet avis est transmis au préfet"],
    },
    { type: "p", texte: "**Étape 6 : Décision du préfet**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le préfet délivre ou refuse le titre de séjour",
        "En cas de refus, vous recevez une notification écrite avec les voies de recours",
      ],
    },
    {
      type: "h2",
      texte: "Droits associés au titre de séjour pour raisons de santé",
      id: "droits-titre-sejour-maladie",
    },
    { type: "p", texte: "Le titre de séjour pour soins confère de nombreux droits :" },
    { type: "p", texte: "**Durée et type de titre :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte de séjour temporaire \"vie privée et familiale\"",
        "Durée : 1 an, renouvelable",
        "Peut être renouvelé tant que les conditions médicales sont remplies",
        "Après 5 ans de résidence : possibilité de demander une carte de résident (10 ans)",
      ],
    },
    { type: "p", texte: "**Droit au travail :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le titre mention \"vie privée et familiale\" autorise à travailler",
        "Pas besoin d'autorisation de travail supplémentaire",
        "Vous pouvez être salarié ou travailleur indépendant",
      ],
    },
    { type: "p", texte: "**Protection contre l'éloignement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous ne pouvez pas faire l'objet d'une OQTF (Obligation de Quitter le Territoire Français) tant que le titre est valide",
        "Protection forte pendant la procédure d'instruction",
      ],
    },
    { type: "p", texte: "**Accès aux soins :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Affiliation à la Sécurité sociale (Assurance maladie)",
        "Prise en charge des soins liés à votre pathologie",
        "Possibilité de bénéficier de la CSS (Complémentaire Santé Solidaire)",
        "ALD (Affection de Longue Durée) : prise en charge à 100% pour certaines pathologies",
      ],
    },
    { type: "p", texte: "**Droits sociaux :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possibilité de demander les aides CAF (APL, allocations familiales)",
        "Accès à l'hébergement d'urgence si nécessaire",
        "Accès aux services sociaux et associations d'aide",
      ],
    },
    { type: "p", texte: "**Regroupement familial :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possible après 18 mois de résidence avec le titre \"vie privée et familiale\"",
        "Conditions de resources et de logement à remplir",
      ],
    },
    {
      type: "h2",
      texte: "Renouvellement du titre pour raisons de santé",
      id: "renouvellement-procedure",
    },
    { type: "p", texte: "Le renouvellement suit une procédure similaire à la demande initiale :" },
    { type: "p", texte: "**Quand faire la demande de renouvellement ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "2 à 4 mois avant l'expiration de votre titre",
        "Prenez rendez-vous en préfecture le plus tôt possible",
        "Un récépissé vous sera délivré en attendant la décision",
      ],
    },
    { type: "p", texte: "**Documents pour le renouvellement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour en cours de validité",
        "Certificats médicaux récents (moins de 3 mois)",
        "Ordonnances et comptes rendus de suivi",
        "Justificatif de domicile",
        "Photos d'identité",
        "Dossier médical actualisé sous pli confidentiel",
      ],
    },
    { type: "p", texte: "**Réexamen médical :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le collège de médecins de l'OFII réexamine votre dossier",
        "Il évalue si la pathologie nécessite toujours un traitement en France",
        "Si votre état de santé s'est amélioré, l'avis peut devenir défavorable",
      ],
    },
    { type: "p", texte: "**Attention à l'évolution des listes de pays :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'OFII tient à jour des fiches pays sur la disponibilité des traitements",
        "Un traitement indisponible aujourd'hui peut le devenir dans votre pays d'origine",
        "Cela peut impacter le renouvellement de votre titre",
      ],
    },
    { type: "p", texte: "**Passage en carte de résident après 5 ans :**" },
    { type: "p", texte: "Si vous avez résidé régulièrement en France pendant 5 ans avec cette carte :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez demander une carte de résident (10 ans)",
        "Conditions : intégration républicaine, revenus suffisants",
        "Le test civique fait partie des critères d'intégration",
      ],
    },
    { type: "h2", texte: "Que faire en cas de refus ? Recours possibles", id: "refus-recours" },
    { type: "p", texte: "Un refus n'est pas une fin en soi. Voici les voies de recours :" },
    { type: "p", texte: "**Recours gracieux :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adressé au préfet qui a pris la décision",
        "Délai : 2 mois après la notification du refus",
        "Apportez de nouveaux éléments médicaux ou des informations complémentaires",
        "Le préfet peut réexaminer favorablement le dossier",
      ],
    },
    { type: "p", texte: "**Recours hiérarchique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adressé au Ministre de l'Intérieur",
        "Délai : 2 mois après la notification du refus",
        "Moins courant mais possible",
      ],
    },
    { type: "p", texte: "**Recours contentieux devant le Tribunal administratif :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai : 2 mois après la notification du refus (ou 2 mois après le silence du recours gracieux)",
        "Vous pouvez demander l'aide juridictionnelle si vos revenus sont faibles",
        "Un avocat spécialisé en droit des étrangers est fortement recommandé",
        "Le tribunal peut annuler la décision et enjoindre au préfet de délivrer le titre",
      ],
    },
    { type: "p", texte: "**Arguments fréquents en recours :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Erreur d'appréciation sur la disponibilité du traitement dans le pays d'origine",
        "Accès effectif au traitement non vérifié (coût prohibitif, éloignement géographique)",
        "Nouveaux certificats médicaux",
        "Violation du secret médical par la préfecture",
        "Avis médical insuffisamment motivé",
      ],
    },
    { type: "p", texte: "**En cas d'OQTF associée :**" },
    { type: "p", texte: "Si le refus s'accompagne d'une Obligation de Quitter le Territoire :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le recours auprès du tribunal a un effet suspensif (vous ne pouvez pas être expulsé pendant la procédure)",
        "Délai de recours réduit : 30 jours",
        "Saisissez un avocat immédiatement",
      ],
    },
    {
      type: "h2",
      texte: "L'AME : accéder aux soins sans titre de séjour",
      id: "ame-soins-sans-papiers",
    },
    {
      type: "p",
      texte: "Si vous êtes en situation irrégulière et n'avez pas encore de titre de séjour :",
    },
    { type: "p", texte: "**L'AME (Aide Médicale de l'État) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Destinée aux personnes en situation irrégulière résidant en France depuis plus de 3 mois",
        "Prise en charge à 100% des soins médicaux et hospitaliers",
        "Gratuite (pas de cotisation)",
        "Durée : 1 an, renouvelable",
      ],
    },
    { type: "p", texte: "**Conditions de l'AME :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Résider en France depuis plus de 3 mois consécutifs",
        "Avoir des ressources inférieures à un plafond (environ 810 €/mois pour une personne seule)",
        "Pas besoin de titre de séjour",
      ],
    },
    { type: "p", texte: "**Demande d'AME :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "À la CPAM de votre lieu de résidence",
        "Documents : pièce d'identité, justificatif de présence en France depuis 3 mois, justificatif de domicile, déclaration de ressources",
      ],
    },
    { type: "p", texte: "**Soins urgents (DSUV) :**" },
    {
      type: "p",
      texte: "Si vous êtes en France depuis moins de 3 mois ou ne remplissez pas les conditions de l'AME :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les soins urgents et vitaux sont pris en charge par l'hôpital",
        "Aucune condition de régularité ou de durée de résidence",
        "Accouchement, soins aux mineurs, maladies contagieuses",
      ],
    },
    { type: "p", texte: "**PASS (Permanences d'Accès aux Soins de Santé) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultations gratuites dans les hôpitaux publics",
        "Ouvert à toute personne sans couverture sociale",
        "Sans condition de régularité",
      ],
    },
    { type: "h2", texte: "Accompagnants et famille du malade étranger", id: "accompagnants-famille" },
    { type: "p", texte: "Les proches d'un étranger malade bénéficient aussi de protections :" },
    { type: "p", texte: "**Titre de séjour pour accompagnant :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le parent d'un enfant mineur malade résidant en France peut obtenir un titre de séjour",
        "Conditions : l'enfant est gravement malade, les soins sont indisponibles dans le pays d'origine, la présence du parent est nécessaire",
        "Le titre est généralement une carte de séjour temporaire \"vie privée et familiale\"",
      ],
    },
    { type: "p", texte: "**Conjoint et enfants :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous obtenez un titre pour raisons de santé, votre conjoint et vos enfants mineurs peuvent demander un titre de séjour",
        "Procédure de regroupement familial après 18 mois de résidence régulière",
        "En pratique, le conjoint peut aussi invoquer le droit à la vie privée et familiale (article 8 CEDH)",
      ],
    },
    { type: "p", texte: "**Accompagnant d'un enfant malade :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le titre est délivré au parent qui accompagne l'enfant pour les soins",
        "L'enfant lui-même bénéficie d'une autorisation de séjour et de l'AME",
      ],
    },
    { type: "p", texte: "**Conseils pratiques :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Constituez votre dossier avec un avocat spécialisé ou une association (CIMADE, Médecins du Monde, Comede)",
        "Le Comede (Comité pour la santé des exilés) est spécialisé dans les questions de santé et de droit au séjour",
        "Les PASS hospitalières peuvent vous diriger vers les bons contacts",
        "N'hésitez pas à solliciter une assistante sociale de l'hôpital pour vous aider dans vos démarches",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le titre de séjour pour raisons de santé est un droit fondamental qui protège les étrangers gravement malades résidant en France. Bien que la procédure soit complexe, elle est accessible même aux personnes en situation irrégulière. L'essentiel est de constituer un dossier médical solide et de se faire accompagner par un avocat ou une association spécialisée. En cas de refus, les voies de recours existent et aboutissent régulièrement à l'annulation des décisions injustifiées. Si vous préparez un renouvellement de titre de séjour ou une demande de carte de résident, pensez aussi à préparer votre test civique sur testciviquefrance.fr.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on obtenir un titre de séjour pour raisons de santé sans papiers ?",
      reponse: "Oui, c'est l'un des rares cas où une personne en situation irrégulière peut obtenir un titre de séjour. Il faut démontrer une pathologie grave nécessitant un traitement indisponible dans le pays d'origine.",
    },
    {
      question: "Qui évalue le dossier médical pour le titre étranger malade ?",
      reponse: "Le collège de médecins de l'OFII, composé de 3 médecins, examine le dossier médical et émet un avis. Le préfet prend la décision finale sur la base de cet avis.",
    },
    {
      question: "Quelle est la durée du titre de séjour pour raisons de santé ?",
      reponse: "Le titre est délivré pour 1 an, renouvelable tant que les conditions médicales sont remplies. Après 5 ans, vous pouvez demander une carte de résident de 10 ans.",
    },
    {
      question: "Le titre de séjour étranger malade autorise-t-il à travailler ?",
      reponse: "Oui. Le titre porte la mention \"vie privée et familiale\" qui autorise à travailler sans restriction. Vous pouvez être salarié ou travailleur indépendant.",
    },
    {
      question: "Que faire si l'OFII donne un avis défavorable ?",
      reponse: "Vous pouvez déposer un recours gracieux auprès du préfet (2 mois), un recours hiérarchique au Ministre de l'Intérieur, ou un recours contentieux devant le tribunal administratif.",
    },
    {
      question: "Qu'est-ce que l'AME (Aide Médicale de l'État) ?",
      reponse: "L'AME est une couverture santé gratuite pour les personnes en situation irrégulière résidant en France depuis plus de 3 mois et ayant des ressources faibles. Elle couvre 100% des soins.",
    },
    {
      question: "Combien de temps dure la procédure de titre pour raisons de santé ?",
      reponse: "Environ 4 à 12 mois au total : 1 mois pour le dépôt, 3 à 6 mois pour l'avis du collège de médecins, et 1 à 3 mois pour la décision du préfet.",
    },
    {
      question: "Mon conjoint peut-il obtenir un titre de séjour si je suis étranger malade ?",
      reponse: "Après 18 mois de résidence régulière avec votre titre, vous pouvez demander le regroupement familial. Le conjoint peut aussi invoquer le droit à la vie privée et familiale.",
    },
    {
      question: "Le secret médical est-il respecté dans la procédure ?",
      reponse: "Oui. Le dossier médical est transmis sous pli confidentiel au collège de médecins de l'OFII. Le préfet ne connaît pas le diagnostic, seulement l'avis favorable ou défavorable.",
    },
    {
      question: "Quelles associations aident pour le titre étranger malade ?",
      reponse: "Le Comede (santé des exilés), Médecins du Monde, la CIMADE (accompagnement juridique), et les PASS hospitalières sont les principales structures d'aide spécialisées.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Étranger malade",
      url: "https://www.service-public.fr/particuliers/vosdroits/F17164",
      type: "officiel",
      description: "Fiche officielle sur le titre de séjour pour raisons de santé.",
    },
    {
      titre: "OFII - Procédure étranger malade",
      url: "https://www.ofii.fr/procedure-etranger-malade/",
      type: "officiel",
      description: "Procédure officielle sur le site de l'OFII.",
    },
    {
      titre: "Comede - Guide de prise en charge médico-juridique",
      url: "https://www.comede.org/guide/",
      type: "article",
      description: "Guide de référence du Comité pour la santé des exilés.",
    },
    {
      titre: "Légifrance - Article L. 425-9 CESEDA",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776843",
      type: "juridique",
      description: "Article de loi encadrant le droit au séjour pour raisons de santé.",
    },
  ],
  aLireAussi: [
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "Le récépissé pendant la procédure médicale",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Recours en cas de refus de titre de séjour",
    },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Démarches CAF et Ameli pour les étrangers",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Déposer sa demande sur ANEF",
    },
  ],
};

export default article;
