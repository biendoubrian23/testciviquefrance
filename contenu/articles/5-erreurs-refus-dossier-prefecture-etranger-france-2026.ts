import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/5-erreurs-refus-dossier-prefecture-etranger-france-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "5-erreurs-refus-dossier-prefecture-etranger-france-2026",
  titre: "Les 5 erreurs qui font refuser un dossier en préfecture (et comment les éviter)",
  titreSeo: "Les 5 erreurs qui font refuser un dossier en préfecture (et comment les éviter)",
  resume: "Traduction non assermentée, justificatif de domicile trop vieux, timbre fiscal invalide, erreur sur ANEF, dépôt hors délai... Ces 5 erreurs bêtes font perdre des mois à des milliers d'étrangers en France chaque année. La checklist complète pour ne pas les commettre.",
  chapo: "Vous avez passé des semaines à rassembler vos documents. Vous avez attendu des mois pour décrocher un rendez-vous en préfecture. Et au guichet, en quelques secondes, l'agent vous annonce que votre dossier ne peut pas être accepté. Un document manquant, une traduction non conforme, une photo de mauvais format... Ces erreurs bêtes font perdre des mois à des milliers d'étrangers chaque année. Voici les 5 erreurs les plus fréquentes qui entraînent un refus de dossier en préfecture en 2026, et surtout, comment les éviter absolument.",
  publieLe: "2026-04-07",
  modifieLe: "2026-04-07",
  minutes: 12,
  theme: "refus dossier préfecture étranger",
  motsCles: [
    "refus dossier préfecture étranger",
    "erreurs dossier titre de séjour",
    "dossier incomplet préfecture 2026",
    "document manquant préfecture",
    "traduction non assermentée refus",
    "justificatif domicile préfecture",
    "erreur ANEF titre de séjour",
    "refus renouvellement titre séjour",
    "dossier refusé naturalisation",
    "timbre fiscal invalide préfecture",
    "photo identité refusée préfecture",
    "préparer dossier préfecture",
    "liste documents titre de séjour",
    "checklist dossier immigration France",
    "conseils dossier préfecture 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "h2",
      texte: "Erreur n°1 : Les traductions non assermentées (ou assermentées au mauvais endroit)",
      id: "erreur-traduction",
    },
    {
      type: "p",
      texte: "C'est la première cause de refus immédiat. Vous avez fait traduire vos documents, mais le traducteur n'est pas inscrit sur la liste des traducteurs assermentés d'une **cour d'appel française**. Résultat : votre traduction est nulle et votre dossier est retourné.",
    },
    { type: "h3", texte: "La règle d'or" },
    {
      type: "p",
      texte: "Toute traduction de document étranger soumise en préfecture doit être réalisée par un traducteur **assermenté en France**, habilité par une cour d'appel française. Un traducteur assermenté dans votre pays d'origine ne suffit pas.",
    },
    { type: "h3", texte: "Comment vérifier ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultez la liste officielle sur **annuaires.justice.fr** → \"Experts judiciaires\" → catégorie \"Traducteur-Interprète\"",
        "Le traducteur doit apposer son **cachet officiel** avec son numéro d'enregistrement sur chaque page traduite",
        "La traduction doit inclure une **déclaration sur l'honneur** du traducteur certifiant la conformité avec le document original",
      ],
    },
    { type: "h3", texte: "Les cas les plus courants de refus" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Traduction réalisée par un proche, même bilingue",
        "Traduction faite par un simple traducteur certifié (non assermenté)",
        "Traduction réalisée à l'étranger par un traducteur local",
        "Document original en mauvais état ou illisible rendant la traduction impossible à vérifier",
      ],
    },
    { type: "h3", texte: "Astuce" },
    {
      type: "p",
      texte: "Avant de payer, demandez au traducteur son numéro d'assermentation et vérifiez-le sur annuaires.justice.fr. Certains prestataires en ligne se présentent comme \"assermentés\" alors qu'ils ne le sont pas en France.",
    },
    {
      type: "h2",
      texte: "Erreur n°2 : Le justificatif de domicile non conforme ou trop vieux",
      id: "erreur-justificatif-domicile",
    },
    {
      type: "p",
      texte: "Le justificatif de domicile est le document le plus souvent problématique. Chaque préfecture a ses propres exigences, mais des règles communes s'appliquent partout.",
    },
    { type: "h3", texte: "Les règles de base" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le document doit dater de **moins de 3 mois** au moment du dépôt du dossier",
        "Il doit mentionner votre **nom complet** ET votre **adresse complète** en France",
        "Une simple adresse mail ou relevé bancaire sans adresse postale est refusé",
      ],
    },
    { type: "h3", texte: "Documents acceptés vs refusés" },
    {
      type: "tableau",
      entetes: ["Accepté", "Refusé"],
      lignes: [
        ["Facture EDF, Engie, Veolia (moins de 3 mois)", "Facture téléphonique mobile seule"],
        [
          "Avis d'imposition (même si date > 3 mois, parfois accepté)",
          "Relevé de compte sans adresse",
        ],
        [
          "Bail de location signé + quittance récente",
          "Bail seul sans quittance (si logement loué)",
        ],
        [
          "Attestation d'hébergement + copie CNI de l'hébergeant",
          "Attestation sans pièce d'identité jointe",
        ],
        ["Quittance de loyer récente", "Reçu informel de paiement"],
      ],
    },
    { type: "h3", texte: "Le cas de l'hébergement chez un tiers" },
    { type: "p", texte: "Si vous êtes hébergé gratuitement, vous devez fournir :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Une **attestation d'hébergement** manuscrite et signée par l'hébergeant",
        "La **copie recto-verso** de la pièce d'identité de l'hébergeant",
        "**Un justificatif de domicile** au nom de l'hébergeant (de moins de 3 mois)",
        "Dans certaines préfectures : une attestation certifiée par la mairie (service des attestations)",
      ],
    },
    {
      type: "p",
      texte: "Manquer l'un de ces 4 éléments entraîne systématiquement le rejet du dossier.",
    },
    {
      type: "h2",
      texte: "Erreur n°3 : Le timbre fiscal invalide, expiré ou du mauvais montant",
      id: "erreur-timbre-fiscal",
    },
    {
      type: "p",
      texte: "Le timbre fiscal dématérialisé (depuis 2020) comporte des pièges que beaucoup de demandeurs ne connaissent pas.",
    },
    { type: "h3", texte: "Les 4 erreurs classiques avec les timbres fiscaux" },
    {
      type: "p",
      texte: "**Erreur 3a : Montant incorrect** : Le tarif varie selon le type de titre demandé. Un timbre de 225 € acheté pour un titre de séjour temporaire ne peut pas servir pour une carte de résident si les montants diffèrent. Vérifiez le montant exact sur service-public.fr avant d'acheter.",
    },
    {
      type: "p",
      texte: "**Erreur 3b : Timbre expiré** : Les timbres fiscaux achetés en ligne ont une **durée de validité limitée** (souvent 6 mois à 1 an). Si vous avez acheté votre timbre en avance et que votre rendez-vous a été repoussé, vérifiez la validité.",
    },
    {
      type: "p",
      texte: "**Erreur 3c : Timbre non rechargé / déjà utilisé** : Un code de timbre électronique ne peut être utilisé qu'une seule fois. Si vous le soumettez sur ANEF, le système vérifiera qu'il n'a pas déjà été consommé.",
    },
    {
      type: "p",
      texte: "**Erreur 3d : Achat auprès d'un revendeur non officiel** : N'achetez vos timbres que sur **timbres.impots.gouv.fr** ou dans un bureau de tabac agréé. Les sites tiers proposant des \"timbres fiscaux\" sont des arnaques.",
    },
    { type: "h3", texte: "Comment sécuriser votre achat" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Achetez le timbre **au plus proche du rendez-vous** (max 2 à 3 semaines avant)",
        "Conservez le récapitulatif PDF avec le code de transaction",
        "Imprimez-le ET sauvegardez-le en version numérique",
      ],
    },
    {
      type: "h2",
      texte: "Erreur n°4 : Les erreurs sur ANEF (formulaire, téléversement, case mal cochée)",
      id: "erreur-anef",
    },
    {
      type: "p",
      texte: "Depuis la dématérialisation des démarches, la plateforme **ANEF (Administration Numérique pour les Étrangers en France)** est au centre de tout. Et c'est là que se glissent de nombreuses erreurs techniques qui peuvent bloquer ou invalider un dossier.",
    },
    { type: "h3", texte: "Les erreurs ANEF les plus fréquentes" },
    {
      type: "p",
      texte: "**Catégorie demandée incorrecte** : Choisir la mauvaise catégorie de titre de séjour au moment de la demande est l'erreur la plus grave. Une demande de \"carte de séjour pluriannuelle\" alors que vous êtes éligible à une \"carte de résident\" entraîne une instruction différente et des documents différents.",
    },
    {
      type: "p",
      texte: "**Documents téléversés illisibles** : ANEF impose des formats précis (PDF, JPG) et des tailles limitées. Un document scanné avec une mauvaise résolution (trop floue) sera refusé automatiquement par le système, parfois sans notification claire.",
    },
    {
      type: "p",
      texte: "**Photo non conforme** : La photo d'identité téléversée sur ANEF doit respecter les normes biométriques strictes : fond blanc ou gris clair, visage centré, pas de lunettes, regard face à l'objectif, expression neutre. Un outil de vérification automatique rejette les photos non conformes.",
    },
    {
      type: "p",
      texte: "**Numéro étranger (NIE/NIN) mal saisi** : Si vous avez travaillé à l'étranger et que vous devez rensigner un numéro d'identification étranger, toute erreur dans la saisie peut bloquer votre dossier.",
    },
    { type: "h3", texte: "Comment éviter ces erreurs" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lisez la **liste de documents** publiée par votre préfecture AVANT de commencer à remplir le formulaire",
        "Scannez vos documents en **résolution 300 DPI minimum** en couleur",
        "Utilisez le service tiers **photo-identite.fr** ou l'application ANEF pour vérifier votre photo avant téléversement",
        "En cas de doute sur la catégorie à choisir, consultez une association d'aide aux étrangers avant de valider",
      ],
    },
    { type: "h3", texte: "Si vous avez soumis une erreur" },
    {
      type: "p",
      texte: "Vous pouvez parfois contacter ANEF via le formulaire de contact pour signaler une erreur et demander une correction. Mais ce n'est pas systématiquement possible, d'où l'importance de vérifier avant de valider.",
    },
    {
      type: "h2",
      texte: "Erreur n°5 : Déposer trop tard (ou trop tôt) sa demande de renouvellement",
      id: "erreur-delais",
    },
    {
      type: "p",
      texte: "Les délais sont une source majeure de problèmes, à la fois sur-anticipés ou au contraire oubliés jusqu'au dernier moment.",
    },
    { type: "h3", texte: "La règle des délais de renouvellement" },
    {
      type: "p",
      texte: "La demande de renouvellement doit impérativement être déposée **entre 2 mois et 30 jours avant l'expiration** de votre titre de séjour actuel.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Conséquence"],
      lignes: [
        ["Dépôt plus de 2 mois avant expiration", "Dossier refusé comme \"prématuré\""],
        ["Dépôt entre 2 mois et 30 jours avant", "Idéal : dossier accepté"],
        ["Dépôt moins de 30 jours avant", "Risque de rupture de statut"],
        ["Dépôt après expiration du titre", "Situation irrégulière, risque OQTF"],
      ],
    },
    { type: "h3", texte: "La subtilité des récépissés" },
    {
      type: "p",
      texte: "Si vous déposez votre demande dans les délais, vous obtenez un **récépissé de renouvellement** qui maintient votre droit au séjour ET votre autorisation de travail jusqu'à la décision finale. Si vous déposez en retard, ce \"filet de sécurité\" disparaît.",
    },
    { type: "h3", texte: "Les situations à risque" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vacances préfectorales** : les préfectures ferment parfois plusieurs semaines. Si votre rendez-vous tombe dans cette période, anticipez",
        "**Rendez-vous ANEF indisponibles** : les créneaux en préfecture peuvent être saturés 2 à 3 mois à l'avance. Cherchez votre rendez-vous dès que vous entrez dans la fenêtre des 2 mois",
        "**Changement de situation** : si vous changez de situation (mariage, nouvel emploi) en plein renouvellement, cela peut modifier les documents requis et allonger les délais",
      ],
    },
    { type: "h3", texte: "Notre conseil" },
    {
      type: "p",
      texte: "Posez une alerte dans votre calendrier **3 mois avant l'expiration** de votre titre pour commencer à préparer votre dossier et chercher un rendez-vous.",
    },
    { type: "h2", texte: "La checklist ultime avant de déposer votre dossier", id: "checklist" },
    { type: "p", texte: "Avant tout rendez-vous ou dépôt en ligne sur ANEF, vérifiez ces points :" },
    { type: "h3", texte: "Documents de base" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour actuel (original + photocopie recto-verso)",
        "Passeport en cours de validité (toutes les pages + photocopies)",
        "2 photos d'identité biométriques conformes (fond clair, moins de 6 mois)",
        "Timbre fiscal du bon montant acheté sur timbres.impots.gouv.fr",
      ],
    },
    { type: "h3", texte: "Justificatif de situation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatif de domicile de moins de 3 mois à votre nom",
        "Contrat de travail ou attestation employeur si vous êtes salarié",
        "Justificatifs de revenus des 3 derniers mois (bulletins de salaire, avis d'imposition)",
        "Acte de mariage ou livret de famille si demande liée à la vie familiale",
      ],
    },
    { type: "h3", texte: "Documents traduits" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tous les documents étrangers accompagnés de leur traduction assermentée par un traducteur inscrit auprès d'une cour d'appel française",
      ],
    },
    { type: "h3", texte: "Vérifications finales" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La catégorie de titre demandée correspond bien à votre situation",
        "Tous les documents scannés sont lisibles (test : agrandissez le PDF sur votre écran)",
        "Le rendez-vous est bien dans la fenêtre des 2 à 30 jours avant expiration",
        "Vous avez noté le numéro de référence de votre dossier ANEF",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La plupart des refus de dossier en préfecture sont évitables. Une traduction correcte, un justificatif de domicile récent, un timbre fiscal valide, un formulaire ANEF bien rempli et des délais respectés, ce sont des points de contrôle simples qui font toute la différence. Préparez votre dossier avec soin, faites-le vérifier par une association d'aide aux étrangers si vous avez le moindre doute, et ne laissez jamais passer votre délai de renouvellement. Un dossier bien préparé, c'est des mois de stress en moins et des centaines d'euros économisés en frais évitables.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Que faire si mon dossier est refusé en préfecture ?",
      reponse: "Si votre dossier est refusé pour dossier incomplet, demandez un récépissé écrit précisant les documents manquants. Vous avez généralement le droit de revenir compléter votre dossier dans un délai donné. Si c'est un refus sur le fond (refus de titre), vous disposez de 30 jours pour exercer un recours administratif (RAPO) ou de 2 mois pour saisir le tribunal administratif.",
    },
    {
      question: "Les préfectures ont-elles toutes les mêmes exigences ?",
      reponse: "Non. Chaque préfecture peut avoir des exigences légèrement différentes, notamment sur le nombre de photocopies demandées, certains justificatifs annexes ou la liste exacte des documents acceptés. Consultez toujours la page dédiée de votre préfecture sur prefecture.gouv.fr avant de préparer votre dossier.",
    },
    {
      question: "Mon titre de séjour expire dans 10 jours et je n'ai pas encore de rendez-vous. Que faire ?",
      reponse: "Envoyez immédiatement un email en recommandé numérique (lettre recommandée électronique via AR24 ou Maileva) à votre préfecture en expliquant l'urgence et en demandant un rendez-vous prioritaire. Montrez-vous dans les locaux de la préfecture en expliquant la situation. Consultez également une association spécialisée (Cimade, France Terre d'Asile) qui peut parfois intervenir rapidement.",
    },
    {
      question: "Peut-on se faire accompagner en préfecture ?",
      reponse: "Oui. Vous pouvez venir accompagné d'un proche ou d'un représentant d'une association. L'agent préfectoral ne peut pas vous l'interdire sauf dans des espaces à accès restreint. Mais seul le demandeur peut signer et déposer son propre dossier s'il est présent.",
    },
  ],
};

export default article;
