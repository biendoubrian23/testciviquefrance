import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/louer-appartement-etranger-france-discrimination-refus-illegaux-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "louer-appartement-etranger-france-discrimination-refus-illegaux-2026",
  titre: "Louer un appartement quand on est étranger en France : les refus illégaux (et comment les contourner)",
  titreSeo: "Louer un appartement quand on est étranger en France : les refus illégaux (et comment les contourner)",
  resume: "Discrimination au nom, récépissé refusé, CDI exigé abusivement, garant Visale gratuit méconnu, DALO, testing anti-discrimination... Toutes les armes légales et astuces concrètes pour trouver un logement en France quand on est étranger.",
  chapo: "\"Ah, finalement l'appartement vient d'être pris.\" Cette phrase, des centaines de milliers d'étrangers en France l'entendent chaque année... souvent après avoir donné leur nom au téléphone. La discrimination au logement est le problème quotidien n°1 des étrangers installés en France, et c'est un délit pénal puni de 3 ans de prison. Refus à cause du nom, exigences abusives de CDI, récépissé refusé comme justificatif, garant demandé en plus de Visale... Ce guide expose les pratiques illégales, les astuces concrètes pour contourner les blocages, et les recours gratuits si vous êtes discriminé. Les propriétaires ne savent souvent pas qu'ils sont dans l'illégalité, et vous ne savez souvent pas que la loi vous protège.",
  publieLe: "2026-04-09",
  modifieLe: "2026-04-09",
  minutes: 20,
  theme: "louer appartement étranger France",
  motsCles: [
    "louer appartement étranger France",
    "discrimination logement étranger",
    "refus location étranger France",
    "Visale garant gratuit étranger",
    "récépissé justificatif logement",
    "discrimination nom logement France",
    "trouver logement sans CDI étranger",
    "louer sans garant étranger France",
    "Défenseur des droits logement",
    "Action Logement étranger",
    "DALO droit logement opposable",
    "titre de séjour louer appartement",
    "ADIL aide logement étranger",
    "refus location récépissé titre séjour",
    "testing discrimination logement",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  blocs: [
    {
      type: "h2",
      texte: "Les 5 discriminations les plus courantes (et pourquoi elles sont illégales)",
      id: "discriminations-courantes",
    },
    {
      type: "p",
      texte: "La discrimination au logement est un délit pénal prévu par les articles 225-1 et 225-2 du Code pénal, puni de **3 ans d'emprisonnement** et **45 000 € d'amende**. Voici les formes les plus fréquentes.",
    },
    { type: "h3", texte: "1. Le refus basé sur le nom ou l'origine" },
    {
      type: "p",
      texte: "\"L'appartement est déjà pris\" : sauf qu'un candidat français rappelle 10 minutes après et obtient une visite. C'est la forme de discrimination la plus documentée par les études (testing SOS Racisme, étude IFOP 2023 : les candidats à consonance étrangère reçoivent **30% de réponses en moins**).",
    },
    { type: "h3", texte: "2. L'exigence abusive de CDI" },
    {
      type: "p",
      texte: "Un propriétaire peut légitimement demander une preuve de revenus, mais **exiger un CDI est interdit** quand d'autres preuves de solvabilité existent (CDD long, bulletins de salaire, attestation employeur, revenus indépendants). La loi ALUR interdit de refuser un locataire au seul motif de son type de contrat.",
    },
    { type: "h3", texte: "3. Le refus du récépissé comme justificatif" },
    {
      type: "p",
      texte: "Un récépissé de titre de séjour est un **document officiel** qui prouve la régularité de votre séjour. Un propriétaire ne peut pas exiger un titre de séjour \"définitif\". Le récépissé donne les mêmes droits qu'un titre pour louer un logement.",
    },
    { type: "h3", texte: "4. L'exigence de garant en plus de Visale" },
    {
      type: "p",
      texte: "Si vous avez une garantie Visale (garantie de l'État via Action Logement), le propriétaire **ne peut pas** exiger un garant supplémentaire. La garantie Visale couvre les impayés et dégradations, c'est plus sûr qu'un garant physique.",
    },
    { type: "h3", texte: "5. La demande de documents interdits" },
    {
      type: "p",
      texte: "Le décret du 5 novembre 2015 liste les documents que le propriétaire peut demander. Il est **interdit** de demander :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un relevé de compte bancaire (seuls les 3 derniers bulletins de salaire et le dernier avis d'imposition sont autorisés)",
        "Une photo d'identité",
        "Un extrait de casier judiciaire",
        "Un certificat de bonne conduite",
        "Une attestation de l'ancien propriétaire",
      ],
    },
    {
      type: "h2",
      texte: "Visale et Action Logement : le garant gratuit que 80% des étrangers ne connaissent pas",
      id: "visale-action-logement",
    },
    {
      type: "p",
      texte: "Visale est une **garantie locative gratuite** fournie par Action Logement (organisme d'État). C'est votre meilleure arme pour trouver un logement.",
    },
    { type: "h3", texte: "Qu'est-ce que Visale ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un **garant gratuit de l'État** qui se porte caution pour vous auprès du propriétaire",
        "Couvre les **impayés de loyer** jusqu'à 36 mois",
        "Couvre les **dégradations locatives** jusqu'à 2 mois de loyer",
        "**Entièrement gratuit** pour le locataire ET le propriétaire",
        "Reconnu par tous les propriétaires et agences",
      ],
    },
    { type: "h3", texte: "Qui est éligible ?" },
    {
      type: "tableau",
      entetes: ["Profil", "Éligible Visale ?"],
      lignes: [
        ["Salarié de moins de 30 ans", "Oui"],
        ["Salarié de plus de 30 ans en mobilité professionnelle", "Oui"],
        ["Salarié en CDD, intérim, contrat aidé", "Oui"],
        ["Étudiant (avec titre de séjour ou récépissé)", "Oui"],
        ["Alternant", "Oui"],
        ["Demandeur d'emploi", "Sous conditions"],
        ["Réfugié ou bénéficiaire de la protection subsidiaire", "Oui"],
      ],
    },
    { type: "h3", texte: "Comment obtenir Visale en 5 étapes" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Allez sur **visale.fr**",
        "Créez un compte avec votre email",
        "Remplissez votre profil (revenus, situation professionnelle)",
        "Recevez votre **visa certifié** en 24-48h",
        "Envoyez ce visa au propriétaire avec votre dossier de candidature",
      ],
    },
    { type: "h3", texte: "L'effet magique de Visale" },
    {
      type: "p",
      texte: "Quand vous présentez Visale, le propriétaire n'a plus aucune raison de vous refuser pour des raisons financières. Visale est **plus fiable qu'un garant physique** : le propriétaire est assuré de recevoir son loyer quoi qu'il arrive.",
    },
    {
      type: "h2",
      texte: "Les 8 astuces concrètes pour trouver un logement quand on est étranger",
      id: "astuces-trouver-logement",
    },
    { type: "p", texte: "Au-delà des recours juridiques, voici des stratégies pratiques et éprouvées." },
    { type: "h3", texte: "1. Constituez un dossier béton AVANT de chercher" },
    { type: "p", texte: "Préparez un dossier PDF propre contenant :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pièce d'identité ou titre de séjour",
        "3 derniers bulletins de salaire",
        "Dernier avis d'imposition (ou avis de non-imposition)",
        "Attestation Visale",
        "Lettre de motivation courte et personnelle",
      ],
    },
    { type: "h3", texte: "2. Utilisez les plateformes avec dossier numérique" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**DossierFacile** (dossierfacile.logement.gouv.fr) : service gratuit de l'État qui certifie votre dossier. Les propriétaires font confiance à un dossier \"certifié DossierFacile\"",
        "**Flatlooker**, **Studapart** (étudiants) : plateformes qui sécurisent les deux parties",
      ],
    },
    { type: "h3", texte: "3. Passez par les logements sociaux" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Demande en mairie** ou sur demande-logement-social.gouv.fr",
        "Délai : 6 mois à 3 ans selon la zone",
        "Priorité pour les réfugiés statutaires et les familles",
      ],
    },
    { type: "h3", texte: "4. Ciblez les résidences CROUS (étudiants)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande via trouverunlogement.lescrous.fr",
        "Loyers entre 200 et 500 €/mois",
        "APL éligible",
      ],
    },
    { type: "h3", texte: "5. Explorez les colocations" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plateformes : Appartager, LaCarteDesColocs, Facebook groupes",
        "Moins de formalisme, moins de discrimination",
        "Solution idéale pour les premiers mois",
      ],
    },
    { type: "h3", texte: "6. Contactez les ADIL" },
    {
      type: "p",
      texte: "Les **ADIL** (Agences Départementales d'Information sur le Logement) offrent des **conseils gratuits** sur vos droits et vous orientent vers les dispositifs adaptés. Trouvez votre ADIL sur anil.org.",
    },
    { type: "h3", texte: "7. Utilisez le 1% logement (Action Logement)" },
    {
      type: "p",
      texte: "Si vous êtes salarié d'une entreprise de plus de 10 personnes, vous pouvez bénéficier :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "D'un **prêt à 1%** pour le dépôt de garantie (aide MOBILI-PASS)",
        "D'une **avance Loca-Pass** (dépôt de garantie avancé sans intérêt)",
        "De Visale (vu plus haut)",
      ],
    },
    { type: "h3", texte: "8. Faites jouer le réseau communautaire" },
    {
      type: "p",
      texte: "Les associations communautaires, les lieux de culte, les centres sociaux connaissent souvent des propriétaires ouverts et des logements disponibles. N'hésitez pas à vous y rendre.",
    },
    {
      type: "h2",
      texte: "Récépissé de titre de séjour : vos droits pour le logement",
      id: "recepisse-droits-logement",
    },
    {
      type: "p",
      texte: "Le récépissé est le document le plus souvent refusé à tort par les propriétaires et agences. Voici vos droits.",
    },
    { type: "h3", texte: "Ce que dit la loi" },
    {
      type: "p",
      texte: "Le récépissé de demande ou de renouvellement de titre de séjour est un **document officiel** délivré par la préfecture (art. R431-1 du CESEDA). Il prouve la régularité de votre séjour pendant la durée de sa validité.",
    },
    { type: "h3", texte: "Vos droits avec un récépissé" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Louer un logement** : le propriétaire ne peut pas exiger un titre \"définitif\"",
        "**Ouvrir un compte bancaire** : les banques sont tenues de vous accepter (droit au compte, article L312-1 du Code monétaire)",
        "**Travailler** : si le récépissé porte la mention \"autorise son titulaire à travailler\"",
        "**Recevoir des aides** : CAF, APL, RSA (selon le type de récépissé)",
      ],
    },
    { type: "h3", texte: "Que faire si un propriétaire refuse votre récépissé" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demandez le refus **par écrit** (email ou SMS) : c'est votre preuve",
        "Rappelez que le récépissé est un document officiel de la préfecture",
        "Si le refus persiste, saisissez le **Défenseur des droits** (defenseurdesdroits.fr)",
        "Contactez l'ADIL de votre département pour un conseil juridique gratuit",
        "Vous pouvez aussi saisir la **commission départementale de conciliation** (CDC)",
      ],
    },
    { type: "h3", texte: "Le cas du récépissé ANEF (numérique)" },
    {
      type: "p",
      texte: "Depuis la dématérialisation, beaucoup de récépissés sont au format numérique (PDF téléchargeable depuis l'ANEF). Ce document a la **même valeur juridique** qu'un récépissé papier avec tampon. Imprimez-le ou présentez-le en PDF, il est tout aussi valide.",
    },
    {
      type: "h2",
      texte: "DALO : le droit au logement opposable (votre dernier recours puissant)",
      id: "dalo-logement-opposable",
    },
    {
      type: "p",
      texte: "Si après des mois de recherche vous ne trouvez toujours pas de logement, la France offre un droit unique en Europe : le **DALO** (Droit Au Logement Opposable).",
    },
    { type: "h3", texte: "Qu'est-ce que le DALO ?" },
    {
      type: "p",
      texte: "Le DALO (loi du 5 mars 2007) oblige l'État à vous proposer un logement adapté si vous remplissez certains critères. Ce n'est pas une aide sociale, c'est un **droit juridiquement opposable**, c'est-à-dire que vous pouvez aller au tribunal pour l'obtenir.",
    },
    { type: "h3", texte: "Qui peut faire une demande DALO ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous êtes sans logement (à la rue, en hébergement d'urgence)",
        "Vous êtes menacé d'expulsion sans solution de relogement",
        "Vous êtes hébergé chez un tiers depuis plus de 6 mois",
        "Votre logement est insalubre ou dangereux",
        "Vous avez des enfants et votre logement est surpeuplé",
        "Votre demande de logement social est sans réponse depuis un délai anormalement long",
      ],
    },
    { type: "h3", texte: "Conditions pour les étrangers" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous devez être en **séjour régulier** en France (titre de séjour, récépissé, attestation d'asile)",
        "Les réfugiés et les bénéficiaires de la protection subsidiaire sont éligibles",
        "La demande se fait auprès de la **commission de médiation** de votre département",
      ],
    },
    { type: "h3", texte: "La procédure" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Déposez un dossier DALO à la commission de médiation (formulaire CERFA 15036)",
        "La commission a **3 mois** (logement) ou **6 semaines** (hébergement) pour répondre",
        "Si votre dossier est reconnu prioritaire, le préfet a **6 mois** pour vous proposer un logement",
        "Si rien n'est proposé → saisissez le **tribunal administratif** qui condamnera l'État à vous loger",
        "En attendant, l'État doit vous verser une **astreinte** (indemnité financière) pour chaque mois de retard",
      ],
    },
    {
      type: "h2",
      texte: "Comment prouver et signaler la discrimination au logement",
      id: "testing-signaler-discrimination",
    },
    {
      type: "p",
      texte: "Si vous pensez être victime de discrimination, vous pouvez agir concrètement, et la loi est de votre côté.",
    },
    { type: "h3", texte: "Le testing : prouver la discrimination" },
    {
      type: "p",
      texte: "Le **testing** consiste à envoyer deux candidatures identiques (mêmes revenus, même profil) avec un nom \"français\" et un nom \"étranger\". Si seul le candidat au nom français obtient une réponse positive, c'est une preuve de discrimination.",
    },
    { type: "h3", texte: "Comment faire un testing simple" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Envoyez votre candidature réelle à une annonce",
        "Demandez à un ami français (ou avec un nom à consonance française) d'envoyer une candidature similaire au même propriétaire",
        "Comparez les réponses",
        "Conservez tous les échanges (emails, SMS, messages plateformes)",
      ],
    },
    { type: "h3", texte: "Le testing est admis comme preuve par la justice" },
    {
      type: "p",
      texte: "Les tribunaux français acceptent le testing comme preuve de discrimination (Cour de cassation, arrêt du 11 décembre 2000). Des associations comme **SOS Racisme** organisent régulièrement des opérations de testing à grande échelle.",
    },
    { type: "h3", texte: "Où signaler" },
    {
      type: "tableau",
      entetes: ["Organisme", "Type d'action", "Contact"],
      lignes: [
        ["Défenseur des droits", "Enquête, médiation, saisine justice", "defenseurdesdroits.fr"],
        ["SOS Racisme", "Testing, accompagnement juridique", "sos-racisme.org"],
        ["LICRA", "Aide juridique anti-discrimination", "licra.org"],
        ["Procureur de la République", "Plainte pénale", "Tribunal de votre ville"],
        ["ADIL", "Conseil juridique logement", "anil.org"],
      ],
    },
    { type: "h3", texte: "Les sanctions pour le propriétaire" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**3 ans de prison** et **45 000 € d'amende** pour discrimination (art. 225-2 du Code pénal)",
        "Dommages et intérêts au profit de la victime",
        "Publication de la condamnation (naming and shaming)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Trouver un logement quand on est étranger en France reste un parcours du combattant, mais la loi est clairement de votre côté. La discrimination est un délit punissable de 3 ans de prison. Le récépissé vaut un titre de séjour pour louer. Visale offre un garant gratuit et infaillible. DossierFacile certifie votre dossier gratuitement. Le DALO peut obliger l'État à vous loger. Toutes ces armes existent et sont gratuites, le problème est qu'elles sont trop peu connues. Partagez ce guide avec toute personne qui galère à trouver un logement. Un étranger informé est un étranger protégé.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un propriétaire peut-il refuser de me louer parce que j'ai un récépissé et pas un titre de séjour définitif ?",
      reponse: "Non, c'est illégal. Le récépissé est un document officiel qui prouve la régularité de votre séjour. Un propriétaire ne peut pas exiger un titre \"définitif\". Si vous essuyez un refus, demandez-le par écrit et saisissez le Défenseur des droits (defenseurdesdroits.fr) ou l'ADIL de votre département.",
    },
    {
      question: "Qu'est-ce que Visale et comment l'obtenir gratuitement ?",
      reponse: "Visale est une garantie locative gratuite de l'État (via Action Logement). Elle se porte caution pour vous auprès du propriétaire, couvrant jusqu'à 36 mois d'impayés. Inscrivez-vous sur visale.fr, remplissez votre profil et recevez votre visa certifié en 24-48h. C'est gratuit, sans engagement et accepté par tous les propriétaires.",
    },
    {
      question: "Comment prouver qu'un propriétaire m'a discriminé ?",
      reponse: "Le testing est la méthode la plus efficace : envoyez votre candidature et demandez à un ami avec un profil similaire mais un nom français d'envoyer la même candidature. Si les réponses diffèrent, c'est une preuve. Conservez tous les échanges écrits (emails, SMS). Le testing est admis comme preuve par les tribunaux français.",
    },
    {
      question: "Quels documents un propriétaire n'a pas le droit de me demander ?",
      reponse: "Le propriétaire n'a pas le droit de demander : un relevé de compte bancaire, une photo d'identité, un extrait de casier judiciaire, une attestation de l'employeur sur votre statut (CDI/CDD), un certificat de bonne conduite. La liste des documents autorisés est fixée par le décret du 5 novembre 2015.",
    },
    {
      question: "Je suis à la rue et je suis étranger en situation régulière, quels sont mes recours ?",
      reponse: "En urgence : appelez le 115 (SAMU social, gratuit 24h/24). Pour une solution durable : déposez un dossier DALO auprès de la commission de médiation de votre département (formulaire CERFA 15036). Si vous êtes reconnu prioritaire, le préfet a 6 mois pour vous proposer un logement. Contactez aussi l'ADIL de votre département pour un accompagnement gratuit.",
    },
  ],
};

export default article;
