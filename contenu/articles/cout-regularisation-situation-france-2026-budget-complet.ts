import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/cout-regularisation-situation-france-2026-budget-complet`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "cout-regularisation-situation-france-2026-budget-complet",
  titre: "Combien ça coûte vraiment de régulariser sa situation en France en 2026 ?",
  titreSeo: "Combien ça coûte vraiment de régulariser sa situation en France en 2026 ?",
  resume: "Timbres fiscaux, taxe OFII, traductions assermentées, test civique, photos, déplacements, avocat... Le budget complet et chiffré de chaque type de démarche en France en 2026 (renouvellement, naturalisation, carte résident, changement statut).",
  chapo: "\"Combien ça va me coûter ?\" C'est la question que se posent tous les étrangers qui entament des démarches en France, et personne ne leur donne jamais une réponse claire. Timbres fiscaux, traductions assermentées, photos d'identité, frais de test civique, déplacements en préfecture, parfois un avocat... Les coûts s'accumulent et peuvent vite dépasser 500, voire 1 000 euros. En 2026, voici le budget complet et chiffré de chaque type de démarche, с tous les postes de dépense inclus, y compris ceux que vous n'aviez pas anticipés.",
  publieLe: "2026-04-07",
  modifieLe: "2026-04-07",
  minutes: 16,
  theme: "coût régularisation France 2026",
  motsCles: [
    "coût régularisation France 2026",
    "prix titre de séjour France",
    "combien coûte naturalisation France",
    "frais dossier préfecture",
    "timbre fiscal titre de séjour 2026",
    "traduction assermentée prix",
    "coût test civique 2026",
    "budget immigration France",
    "frais ANEF 2026",
    "prix avocat droit étranger",
    "exonération timbre fiscal",
    "taxe OFII prix 2026",
    "coût carte de séjour pluriannuelle",
    "combien coûte carte résident",
    "frais visa France 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  },
  blocs: [
    { type: "h2", texte: "Les timbres fiscaux : le poste de dépense principal", id: "timbres-fiscaux" },
    {
      type: "p",
      texte: "Le **timbre fiscal** est la taxe obligatoire payée lors de toute demande ou renouvellement de titre de séjour en France. Son montant varie selon le type de titre demandé. En 2026, voici les tarifs officiels :",
    },
    { type: "h3", texte: "Tarifs des timbres fiscaux en 2026" },
    {
      type: "tableau",
      entetes: ["Type de titre", "Tarif 2026"],
      lignes: [
        ["Carte de séjour temporaire (1 an)", "225 €"],
        ["Carte de séjour pluriannuelle (2 à 4 ans)", "225 €"],
        ["Carte de résident (10 ans)", "225 €"],
        ["Naturalisation (certificat de nationalité)", "55 €"],
        ["Passeport talent", "225 €"],
        ["Étudiant (1ère délivrance)", "50 €"],
        ["Réfugié / protection subsidiaire", "Exonéré"],
        ["Mineur", "Exonéré"],
      ],
    },
    { type: "h3", texte: "Comment payer ?" },
    {
      type: "p",
      texte: "Depuis 2020, les timbres fiscaux s'achètent exclusivement **en ligne** sur timbres.impots.gouv.fr ou dans les bureaux de tabac agréés. Plus aucun paiement n'est accepté directement en préfecture.",
    },
    { type: "h3", texte: "Ce que beaucoup ignorent" },
    {
      type: "p",
      texte: "Le timbre fiscal est dû **même en cas de refus**. Si votre dossier est rejeté, la taxe n'est pas remboursée sauf cas exceptionnels (erreur de l'administration prouvée).",
    },
    { type: "h2", texte: "La taxe OFII : souvent oubliée, toujours due", id: "taxe-ofii" },
    {
      type: "p",
      texte: "L'**OFII (Office Français de l'Immigration et de l'Intégration)** prélève une taxe distincte du timbre fiscal lors de la première délivrance d'un titre de séjour ou lors d'un changement de statut.",
    },
    { type: "h3", texte: "Montants de la taxe OFII en 2026" },
    {
      type: "tableau",
      entetes: ["Situation", "Taxe OFII"],
      lignes: [
        ["1ère délivrance (salarié, vie privée...)", "200 €"],
        ["Étudiant (1ère délivrance)", "58 €"],
        ["Regroupement familial", "200 €"],
        ["Changement de statut (étudiant → salarié)", "200 €"],
        ["Réfugié", "Exonéré"],
        ["Renouvellement simple (même catégorie)", "0 €"],
      ],
    },
    { type: "h3", texte: "La validation du VLS-TS" },
    {
      type: "p",
      texte: "Si vous arrivez avec un visa long séjour (VLS-TS), vous devez valider votre visa sur le site de l'OFII dans les **3 mois suivant l'arrivée**. Cette validation est **gratuite depuis 2020**, mais son oubli peut bloquer tout renouvellement ultérieur.",
    },
    {
      type: "h2",
      texte: "Les traductions assermentées : un poste souvent sous-estimé",
      id: "traductions",
    },
    {
      type: "p",
      texte: "Tout document étranger soumis à une préfecture française doit être accompagné d'une **traduction certifiée par un traducteur assermenté** auprès d'une cour d'appel française. Ce coût peut rapidement s'accumuler.",
    },
    { type: "h3", texte: "Tarifs moyens en 2026" },
    {
      type: "tableau",
      entetes: ["Type de document", "Prix moyen"],
      lignes: [
        ["Acte de naissance (1 page)", "50-80 €"],
        ["Acte de mariage", "60-100 €"],
        ["Diplôme / relevé de notes", "80-150 €"],
        ["Casier judiciaire étranger", "60-90 €"],
        ["Jugement de divorce", "100-200 €"],
        ["Extrait d'état civil complet", "80-120 €"],
      ],
    },
    { type: "h3", texte: "Comment réduire ce coût ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demandez **plusieurs devis** : les tarifs varient du simple au double selon le prestataire",
        "Privilégiez les traducteurs assermentés indépendants plutôt que les agences (moins chers)",
        "Vérifiez la liste officielle des traducteurs sur le site de chaque cour d'appel (annuaires.justice.fr)",
        "Un seul traducteur peut traduire tous vos documents : massifiez les commandes pour négocier",
      ],
    },
    { type: "h3", texte: "Ce qu'il ne faut pas faire" },
    {
      type: "p",
      texte: "N'utilisez jamais Google Translate, DeepL ou une traduction faite par un proche. Ces documents sont systématiquement refusés et peuvent entraîner le rejet de votre dossier entier.",
    },
    { type: "h2", texte: "Le test civique : 90 € dans la plupart des cas", id: "test-civique" },
    {
      type: "p",
      texte: "Le **test de connaissance du français et des valeurs de la République** (appelé \"test civique\") est obligatoire dans le cadre du Contrat d'Intégration Républicaine (CIR) pour obtenir ou renouveler certains titres de séjour.",
    },
    { type: "h3", texte: "Tarifs du test civique 2026" },
    {
      type: "tableau",
      entetes: ["Type de test", "Tarif"],
      lignes: [
        ["Test civique standard (centres agréés)", "90 €"],
        ["Passage du test à l'étranger (via Institut français)", "Variable (60-120 €)"],
        ["Reprise en cas d'échec", "90 € supplémentaires"],
        ["Test numérique en ligne (pilote 2026)", "90 €"],
      ],
    },
    { type: "h3", texte: "Qui est exonéré ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les personnes de **plus de 65 ans**",
        "Les personnes avec un handicap reconnu les empêchant de passer le test",
        "Les ressortissants de certains pays avec accord de reconnaissance mutuelle (vérifier la liste officielle)",
      ],
    },
    { type: "h3", texte: "Notre conseil" },
    {
      type: "p",
      texte: "Préparez-vous sérieusement pour éviter un second passage à 90 €. Notre plateforme propose des examens blancs gratuits couvrant les 400 questions officielles du référentiel.",
    },
    { type: "h2", texte: "Les autres frais que vous n'aviez pas prévus", id: "autres-frais" },
    {
      type: "p",
      texte: "Au-delà des timbres et traductions, voici tous les postes de dépense qui surprennent les candidats :",
    },
    { type: "h3", texte: "Photos d'identité" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Format biométrique obligatoire (norme ISO/IEC 19794-5)",
        "Tarif en photomaton : **5 à 8 €** la planche de 4 photos",
        "La plupart des dossiers en demandent 2 à 4 photos",
      ],
    },
    { type: "h3", texte: "Frais postaux" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Envoi recommandé avec accusé de réception pour tout dossier envoyé par courrier : **6 à 10 €**",
        "Certaines préfectures n'acceptent plus que les dépôts en ligne (ANEF) : vérifiez avant de vous déplacer",
      ],
    },
    { type: "h3", texte: "Déplacements en préfecture" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Selon votre ville, comptez 1 à 3 déplacements minimum (dépôt, récupération du titre, convocations)",
        "Transport et stationnement : **10 à 50 €** selon la distance",
        "Journée de travail perdue si prise de rendez-vous un jour ouvrable",
      ],
    },
    { type: "h3", texte: "Frais d'avocat (optionnels mais parfois nécessaires)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultation initiale : **100 à 200 €**",
        "Rédaction d'un recours : **500 à 1 500 €**",
        "Constitution d'un dossier complet avec suivi : **800 à 2 500 €**",
        "N'oubliez pas : l'aide juridictionnelle peut couvrir tout ou partie de ces frais si vos revenus le permettent",
      ],
    },
    { type: "h3", texte: "Documents complémentaires" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certains titres requèrent un **casier judiciaire B3 français** (gratuit, demandable en ligne sur casier.justice.fr)",
        "Justificatifs de logement notariés si vous êtes hébergé : **15 à 30 €** chez le notaire",
        "Attestations d'hébergement certifiées par la mairie : souvent gratuites",
      ],
    },
    { type: "h2", texte: "Budget complet par type de démarche en 2026", id: "recap-par-demarche" },
    {
      type: "p",
      texte: "Voici un récapitulatif des coûts totaux réalistes pour chaque type de démarche, en incluant tous les postes de dépense :",
    },
    { type: "h3", texte: "Renouvellement d'un titre de séjour existant (même catégorie)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal : 225 €",
        "Taxe OFII : 0 € (pas de 1ère délivrance)",
        "Traductions : 0 à 100 € (selon documents à jour)",
        "Photos + frais divers : 20 €",
        "**Total estimé : 245 à 350 €**",
      ],
    },
    { type: "h3", texte: "Demande de naturalisation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal : 55 €",
        "Traductions (actes d'état civil) : 100 à 400 €",
        "Test civique : 90 €",
        "Photos + courrier : 30 €",
        "Avocat (facultatif) : 0 à 2 500 €",
        "**Total estimé sans avocat : 275 à 575 €**",
      ],
    },
    { type: "h3", texte: "Carte de résident (10 ans) : 1ère demande" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal : 225 €",
        "Taxe OFII : 200 €",
        "Traductions : 100 à 300 €",
        "Test civique (si requis) : 90 €",
        "Photos + frais : 30 €",
        "**Total estimé : 645 à 845 €**",
      ],
    },
    { type: "h3", texte: "Changement de statut (étudiant → salarié)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal : 225 €",
        "Taxe OFII : 200 €",
        "Traductions (diplôme, contrat de travail traduit) : 80 à 200 €",
        "Photos + frais : 20 €",
        "**Total estimé : 525 à 645 €**",
      ],
    },
    { type: "h3", texte: "Regroupement familial (par membre de la famille)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal : 225 €",
        "Taxe OFII : 200 €",
        "Traductions (actes de mariage, naissance) : 150 à 400 €",
        "Visa long séjour (pays d'origine) : 99 €",
        "Photos + frais : 30 €",
        "**Total estimé : 700 à 900 € par personne**",
      ],
    },
    { type: "h2", texte: "Les exonérations : qui ne paie pas ou moins ?", id: "exonerations" },
    {
      type: "p",
      texte: "Certaines catégories de personnes bénéficient d'exonérations totales ou partielles des taxes.",
    },
    { type: "h3", texte: "Exonérés totalement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les mineurs (moins de 18 ans)",
        "Les réfugiés statutaires et bénéficiaires de la protection subsidiaire",
        "Les apatrides reconnus",
        "Les victimes de violences conjugales bénéficiant d'une ordonnance de protection",
      ],
    },
    { type: "h3", texte: "Exonérés partiellement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les étudiant(e)s : timbre réduit à 50 € (au lieu de 225 €)",
        "Les personnes sous CMU sous conditions",
      ],
    },
    { type: "h3", texte: "Les erreurs coûteuses à éviter" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ne jamais payer le timbre fiscal avant d'avoir vérifié si votre dossier est complet : en cas de refus de dépôt (dossier incomplet), le timbre n'est pas toujours remboursé",
        "Vérifiez si votre traducteur est bien assermenté AVANT de payer : une traduction non assermentée est inutilisable et l'argent est perdu",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Régulariser sa situation en France est un investissement financier réel. Selon les démarches, le budget réaliste oscille entre 250 € pour un simple renouvellement et 900 € ou plus pour un regroupement familial ou un changement de statut. La bonne nouvelle : plusieurs aides permettent de réduire ces coûts (aide juridictionnelle, exonérations selon les catégories). Anticipez ces dépenses, regroupez vos demandes, et n'hésitez pas à consulter gratuitement les associations spécialisées avant de payer quoi que ce soit. Un dossier bien préparé évite les allers-retours coûteux en préfecture.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le timbre fiscal est-il remboursé en cas de refus de ma demande ?",
      reponse: "En principe non. Le timbre fiscal est acquitté pour l'instruction du dossier, indépendamment de la décision finale. Seule une erreur manifeste de l'administration peut justifier un remboursement, sur demande écrite motivée.",
    },
    {
      question: "Peut-on négocier le prix d'une traduction assermentée ?",
      reponse: "Oui, les tarifs ne sont pas réglementés. Demandez plusieurs devis et comparez. Un traducteur indépendant est souvent moins cher qu'une agence. Si vous avez plusieurs documents à traduire, regroupez-les chez le même traducteur pour potentiellement obtenir un tarif groupé.",
    },
    {
      question: "L'aide juridictionnelle couvre-t-elle les frais de traduction ?",
      reponse: "L'aide juridictionnelle couvre principalement les honoraires d'avocat. Elle peut couvrir certains frais d'expertise ou de traduction si le juge l'ordonne, mais pas systématiquement. Renseignez-vous précisément auprès du Bureau d'Aide Juridictionnelle (BAJ) de votre tribunal.",
    },
    {
      question: "Combien coûte la naturalisation française en tout ?",
      reponse: "Sans avocat, prévoyez entre 275 € et 575 € selon le nombre de documents à traduire. Avec un avocat pour vous accompagner, ajoutez entre 800 € et 2 500 €. Le timbre fiscal de la naturalisation est de 55 €, bien moins élevé que les autres titres.",
    },
  ],
};

export default article;
