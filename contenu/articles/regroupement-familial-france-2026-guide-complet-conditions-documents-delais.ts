import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nouveaux-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "regroupement-familial-france-2026-guide-complet-conditions-documents-delais",
  titre: "Regroupement familial France 2026 : conditions (revenus, logement), documents, délais et recours, guide complet",
  titreSeo: "Regroupement familial France 2026 : conditions (revenus, logement), documents, délais et recours, guide complet",
  resume: "Faire venir son conjoint et ses enfants en France en 2026 : revenus minimum (SMIC × 1,2), surface logement, liste documents, procédure OFII étape par étape, délais réels (6 à 12 mois) et recours en cas de refus.",
  chapo: "Le regroupement familial est la procédure légale qui permet à un étranger résidant régulièrement en France de faire venir son conjoint et ses enfants mineurs sur le territoire français. En 2026, cette démarche reste encadrée par des conditions strictes de revenus, de logement et de durée de séjour. Entre les exigences préfectorales, les délais parfois longs et les dossiers complexes, beaucoup de familles se perdent dans les méandres administratifs. Ce guide complet vous explique tout, étape par étape, avec les chiffres exacts et les pièges à éviter pour maximiser vos chances de succès.",
  publieLe: "2026-04-04",
  modifieLe: "2026-04-04",
  minutes: 22,
  theme: "regroupement familial France 2026",
  motsCles: [
    "regroupement familial France 2026",
    "regroupement familial conditions",
    "regroupement familial revenus",
    "regroupement familial logement",
    "faire venir conjoint France",
    "faire venir enfants France étranger",
    "OFII regroupement familial",
    "dossier regroupement familial préfecture",
    "délai regroupement familial France",
    "regroupement familial refus recours",
    "visa long séjour conjoint",
    "titre de séjour regroupement familial",
    "test civique regroupement familial",
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
    { type: "h2", texte: "Qu'est-ce que le regroupement familial ?", id: "definition" },
    {
      type: "p",
      texte: "Le **regroupement familial** est le droit reconnu à tout étranger en situation régulière en France de faire venir les membres de sa famille proche pour vivre avec lui sur le territoire français. Il est encadré par le **Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA)**, aux articles L421-2 et suivants.",
    },
    { type: "h3", texte: "Qui est concerné par cette procédure ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le demandeur** : l'étranger déjà présent en France avec un titre de séjour valable et répondant aux critères d'éligibilité",
        "**Les bénéficiaires** : le conjoint (marié, pas pacsé ni concubin) et les enfants mineurs du couple",
      ],
    },
    {
      type: "p",
      texte: "**Important :** Le regroupement familial ne concerne pas les parents, les frères et sœurs, ni les concubins ou partenaires de PACS. Il existe des procédures distinctes pour ces situations (visa visiteur, titre « vie privée et familiale »).",
    },
    { type: "h3", texte: "Lien avec le test civique" },
    {
      type: "p",
      texte: "La thématique **« Vivre dans la société française »** du test civique aborde les droits fondamentaux liés à la vie familiale et à l'intégration. Comprendre le regroupement familial, c'est aussi comprendre comment l'État français concilie le droit à la vie familiale (article 8 de la CEDH) avec les impératifs de maîtrise de l'immigration.",
    },
    {
      type: "h2",
      texte: "Condition n°1 : la durée de séjour régulier en France",
      id: "conditions-sejour",
    },
    {
      type: "p",
      texte: "Pour déposer une demande de regroupement familial, le demandeur doit **résider régulièrement en France depuis au moins 18 mois** au moment du dépôt du dossier.",
    },
    { type: "h3", texte: "Ce que cela signifie concrètement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous devez être titulaire d'un titre de séjour en cours de validité depuis 18 mois minimum",
        "Les périodes couvertes par un simple récépissé comptent, à condition qu'elles soient continues",
        "Les absences du territoire ne doivent pas dépasser 3 mois consécutifs sur la période des 18 mois",
      ],
    },
    { type: "h3", texte: "Titres de séjour compatibles :" },
    {
      type: "tableau",
      entetes: ["Type de titre", "Regroupement familial possible ?"],
      lignes: [
        [
          "Carte de séjour temporaire (CST)",
          "Oui, si autorisant le travail et détenu depuis 18 mois",
        ],
        ["Carte de séjour pluriannuelle", "Oui"],
        ["Carte de résident (10 ans)", "Oui"],
        ["Récépissé de renouvellement", "Non (doit attendre le titre définitif)"],
        ["Visa long séjour valant titre de séjour (VLS-TS)", "Oui, s'il est validé par l'OFII"],
        [
          "Statut de réfugié / protection subsidiaire",
          "Oui, avec procédure simplifiée (pas de condition de revenus ni de logement)",
        ],
      ],
    },
    {
      type: "p",
      texte: "**Cas particulier des réfugiés :** les titulaires du statut de réfugié ou de la protection subsidiaire bénéficient d'un régime de faveur, pas de condition de revenus, pas de condition de logement, et le délai de 18 mois ne s'applique pas si la demande est faite dans les 3 mois suivant l'obtention du statut.",
    },
    {
      type: "h2",
      texte: "Condition n°2 : les revenus, le calcul exact en 2026",
      id: "conditions-revenus",
    },
    {
      type: "p",
      texte: "C'est souvent la condition la plus difficile à satisfaire. Vous devez justifier de ressources **stables, régulières et suffisantes** pour subvenir aux besoins de votre famille sans recourir aux aides sociales.",
    },
    { type: "h3", texte: "Le seuil de revenus en 2026 :" },
    {
      type: "p",
      texte: "Le montant minimum requis est calculé en fonction de la **taille de la famille** sur la base du SMIC :",
    },
    {
      type: "tableau",
      entetes: ["Taille de la famille", "Revenus mensuels minimum (nets)"],
      lignes: [
        ["Couple sans enfant (2 personnes)", "1 426,30 € (SMIC × 1,0)"],
        ["Couple + 1 enfant (3 personnes)", "1 711,56 € (SMIC × 1,2)"],
        ["Couple + 2 enfants (4 personnes)", "1 996,82 € (SMIC × 1,4)"],
        ["Couple + 3 enfants (5 personnes)", "2 282,08 € (SMIC × 1,6)"],
        ["Par enfant supplémentaire", "+ 285,26 € (SMIC × 0,2)"],
      ],
    },
    { type: "p", texte: "*Base SMIC 2026 : 1 426,30 € net mensuel (valeur indicative).*" },
    { type: "h3", texte: "Quelles ressources sont prises en compte ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Salaires et revenus d'activité** (CDI, CDD, intérim, indépendant)",
        "**Revenus locatifs** stables",
        "**Pensions alimentaires reçues**",
        "**Certaines prestations sociales** : allocations familiales, aide au logement (APL)",
      ],
    },
    { type: "h3", texte: "Ce qui N'est PAS pris en compte :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "RSA, prime d'activité, ASS (allocations de chômage spécifique)",
        "Revenus des membres de la famille à faire venir",
        "Aides ponctuelles ou dons familiaux",
      ],
    },
    {
      type: "p",
      texte: "**Conseil :** Les ressources sont calculées sur les **12 derniers mois** précédant la demande. Conservez tous vos bulletins de salaire et avis d'imposition.",
    },
    {
      type: "h2",
      texte: "Condition n°3 : le logement, surface minimale obligatoire",
      id: "conditions-logement",
    },
    {
      type: "p",
      texte: "Vous devez justifier d'un logement **décent, aux normes et suffisamment grand** pour accueillir toute votre famille au moment de l'arrivée des bénéficiaires.",
    },
    { type: "h3", texte: "La surface minimale requise en 2026 :" },
    {
      type: "tableau",
      entetes: ["Nombre de personnes dans le foyer", "Surface habitable minimale"],
      lignes: [
        ["2 personnes", "22 m²"],
        ["3 personnes", "33 m²"],
        ["4 personnes", "44 m²"],
        ["5 personnes", "55 m²"],
        ["Par personne supplémentaire", "+ 11 m²"],
      ],
    },
    { type: "h3", texte: "Critères de décence du logement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Alimentation en eau potable",
        "Installation sanitaire intérieure (WC, douche ou baignoire)",
        "Chauffage suffisant",
        "Éclairage naturel dans les pièces principales",
        "Aucune infiltration d'eau, aucune infestation nuisible",
      ],
    },
    {
      type: "p",
      texte: "**Visite de l'OFII :** Dans certains cas, un agent de l'Office Français de l'Immigration et de l'Intégration (OFII) peut visiter votre logement pour vérifier sa conformité. Anticipez cette visite en vous assurant que le logement est propre, meublé et conforme.",
    },
    {
      type: "p",
      texte: "**Cas du logement en cours de location :** si vous êtes en attente d'un logement social plus grand, mentionnez-le dans votre dossier. Certaines préfectures acceptent une promesse de location ou un contrat de location futur si la date de prise d'effet est proche.",
    },
    { type: "h2", texte: "Qui peut venir en France par regroupement familial ?", id: "membres-famille" },
    {
      type: "p",
      texte: "La loi française limite strictement les bénéficiaires du regroupement familial :",
    },
    { type: "h3", texte: "Peuvent venir :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le conjoint marié** (époux/épouse), âgé d'au moins 18 ans",
        "**Les enfants mineurs du couple** (nés du demandeur et du conjoint, ou d'une précédente union si l'autre parent est décédé ou déchu de l'autorité parentale)",
        "**Les enfants mineurs du seul demandeur** (si l'autre parent est décédé, ou si le demandeur exerce seul l'autorité parentale)",
      ],
    },
    { type: "h3", texte: "Ne peuvent PAS venir par cette procédure :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les concubins ou partenaires de PACS (ils doivent demander un visa « vie privée et familiale »)",
        "Les parents du demandeur (parents âgés, etc.)",
        "Les frères, sœurs, oncles, tantes",
        "Les enfants majeurs (18 ans et plus)",
      ],
    },
    {
      type: "p",
      texte: "**Polygamie :** si vous êtes en situation de polygamie (plusieurs épouses légalement reconnues à l'étranger), vous ne pouvez faire venir qu'**une seule épouse**. La polygamie est interdite en France et constitue un motif de refus automatique si elle est détectée.",
    },
    { type: "h2", texte: "La procédure étape par étape", id: "procedure" },
    {
      type: "p",
      texte: "La demande de regroupement familial suit un circuit précis en plusieurs étapes :",
    },
    { type: "h3", texte: "Étape 1 : Dépôt du dossier à l'OFII (1 à 2 mois)" },
    {
      type: "p",
      texte: "La demande se dépose auprès de la **direction territoriale de l'OFII** compétente pour votre lieu de résidence. Depuis 2021, le dépôt peut se faire en ligne sur le portail **administration-etrangers.interieur.gouv.fr** ou en se rendant directement à l'OFII.",
    },
    { type: "h3", texte: "Étape 2 : Instruction par l'OFII (3 à 6 mois)" },
    { type: "p", texte: "L'OFII vérifie :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La régularité de votre séjour (durée des 18 mois)",
        "Vos ressources financières",
        "Votre logement (éventuellement avec visite)",
        "L'absence de polygamie",
      ],
    },
    { type: "h3", texte: "Étape 3 : Autorisation de regroupement familial" },
    {
      type: "p",
      texte: "Si le dossier est accepté, l'OFII émet une **autorisation de regroupement familial** transmise au consulat français du pays de résidence des bénéficiaires.",
    },
    { type: "h3", texte: "Étape 4 : Demande de visa au consulat" },
    {
      type: "p",
      texte: "Votre conjoint et/ou vos enfants doivent se présenter au consulat français de leur pays de résidence pour demander un **visa long séjour « regroupement familial »**. Le consulat peut demander un **entretien** et des examens médicaux.",
    },
    { type: "h3", texte: "Étape 5 : Arrivée en France et démarches OFII" },
    {
      type: "p",
      texte: "À leur arrivée, les bénéficiaires doivent se signaler auprès de l'OFII dans les **3 mois** pour validation du visa et démarrage du **Contrat d'Intégration Républicaine (CIR)**.",
    },
    { type: "h3", texte: "Étape 6 : Titre de séjour pour les bénéficiaires" },
    {
      type: "p",
      texte: "Le conjoint reçoit une **carte de séjour temporaire « vie privée et familiale »** d'1 an, renouvelable, puis une carte pluriannuelle après 3 ans.",
    },
    { type: "h2", texte: "Liste complète des documents à fournir", id: "documents" },
    {
      type: "p",
      texte: "Un dossier incomplet est la première cause de rejet ou de retard. Voici la liste exhaustive :",
    },
    { type: "h3", texte: "Documents concernant le demandeur (en France) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire de demande de regroupement familial (Cerfa n°11436*06)",
        "Copie du titre de séjour en cours de validité (recto-verso)",
        "Justificatifs de ressources des 12 derniers mois (bulletins de salaire, avis d'imposition)",
        "Justificatif de domicile récent (bail de location, facture EDF, quittance de loyer)",
        "Plan du logement avec superficie de chaque pièce",
        "Attestation d'assurance habitation",
        "Livret de famille ou acte de mariage (traduit et apostillé si nécessaire)",
        "Actes de naissance des enfants concernés (traduits et apostillés)",
      ],
    },
    { type: "h3", texte: "Documents concernant les bénéficiaires (à l'étranger) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeports en cours de validité",
        "Acte de naissance de chaque personne (traduit et apostillé)",
        "Acte de mariage (traduit et apostillé)",
        "Justificatif de résidence actuelle à l'étranger",
        "Casier judiciaire (selon les pays)",
        "Certificats médicaux (selon exigences consulaires)",
      ],
    },
    {
      type: "p",
      texte: "**Attention aux traductions :** tous les documents étrangers doivent être traduits par un **traducteur assermenté agréé par la Cour d'appel**. Les traductions Google ou amateurs ne sont pas acceptées.",
    },
    { type: "h2", texte: "Les délais : combien de temps cela prend-il ?", id: "delais" },
    {
      type: "p",
      texte: "La procédure de regroupement familial est l'une des plus longues en matière d'immigration. Voici les délais réalistes en 2026 :",
    },
    {
      type: "tableau",
      entetes: ["Étape", "Délai moyen"],
      lignes: [
        ["Instruction par l'OFII", "3 à 6 mois"],
        ["Traitement consulaire + visa", "2 à 4 mois"],
        ["Total moyen de bout en bout", "6 à 12 mois"],
        ["Délai légal maximum de l'OFII", "6 mois (silence = refus)"],
      ],
    },
    {
      type: "p",
      texte: "**Le silence vaut refus :** si l'OFII ne répond pas dans les **6 mois** suivant la réception du dossier complet, cela vaut décision de rejet implicite. Vous pouvez alors exercer un recours.",
    },
    { type: "p", texte: "**Q : Peut-on accélérer la procédure ?**" },
    {
      type: "p",
      texte: "R : Non officiellement. En pratique, un dossier très complet et bien présenté réduit les échanges de pièces complémentaires et donc les délais. Évitez les dossiers incomplets qui repartent en navette.",
    },
    { type: "h2", texte: "En cas de refus : vos recours", id: "refus-recours" },
    {
      type: "p",
      texte: "Un refus de regroupement familial n'est pas une fin en soi. Vous disposez de plusieurs voies de recours :",
    },
    { type: "h3", texte: "1. Recours gracieux auprès de l'OFII (délai : 2 mois)" },
    {
      type: "p",
      texte: "Adressez un courrier recommandé à l'OFII en expliquant pourquoi vous contestez la décision et en fournissant des pièces complémentaires.",
    },
    { type: "h3", texte: "2. Recours hiérarchique auprès du Ministre de l'Intérieur (délai : 2 mois)" },
    {
      type: "p",
      texte: "Si le recours gracieux est rejeté, vous pouvez saisir le Ministre de l'Intérieur.",
    },
    { type: "h3", texte: "3. Recours contentieux devant le tribunal administratif (délai : 2 mois)" },
    {
      type: "p",
      texte: "C'est le recours le plus efficace. Vous déposez un recours devant le tribunal administratif compétent. Vous pouvez bénéficier de l'**aide juridictionnelle** si vos revenus sont modestes (gratuit si revenu mensuel inférieur à environ 1 100 €).",
    },
    { type: "h3", texte: "Motifs de refus les plus fréquents :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ressources insuffisantes (revenu trop bas ou instable)",
        "Logement trop petit ou non conforme aux normes",
        "Séjour de moins de 18 mois",
        "Suspicion de mariage de complaisance",
        "Polygamie avérée",
      ],
    },
    { type: "h2", texte: "L'arrivée en France : les démarches OFII obligatoires", id: "arrivee-ofii" },
    {
      type: "p",
      texte: "Une fois le visa obtenu et l'arrivée en France effectuée, les bénéficiaires du regroupement familial ont des **obligations légales** à respecter sous peine de remise en cause de leur titre de séjour.",
    },
    { type: "h3", texte: "Dans les 3 mois suivant l'arrivée :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Se signaler à l'OFII** via le portail en ligne ou en se rendant à la direction territoriale compétente",
        "**Passer la visite médicale OFII** (examen médical, radiographie pulmonaire pour les adultes)",
        "**Signer le Contrat d'Intégration Républicaine (CIR)** : engagement à suivre une formation civique et, si nécessaire, des cours de français",
      ],
    },
    { type: "h3", texte: "La formation civique OFII :" },
    {
      type: "p",
      texte: "Tous les bénéficiaires adultes doivent suivre une **formation civique de 4 heures** sur les valeurs de la République française (liberté, égalité, fraternité, laïcité). Cette formation est **gratuite et obligatoire**.",
    },
    {
      type: "p",
      texte: "**Lien avec le test civique :** si le conjoint souhaite à terme demander la nationalité française, il devra passer le test civique, 40 questions sur les institutions, les valeurs et la vie en France. La formation OFII est une excellente première étape de préparation.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le regroupement familial est une procédure longue (6 à 12 mois en moyenne) mais parfaitement réalisable à condition de bien préparer son dossier. Les deux conditions les plus souvent bloquantes sont les revenus (attention au seuil SMIC × 1,2) et le logement (surface minimale selon la taille de la famille). En cas de refus, n'hésitez pas à exercer un recours, beaucoup de décisions initiales sont réformées devant le tribunal administratif. Une fois la famille réunie en France, n'oubliez pas les démarches OFII obligatoires dans les 3 mois suivant l'arrivée.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel revenu minimum faut-il pour le regroupement familial en 2026 ?",
      reponse: "Le revenu minimum dépend du nombre de personnes dans le foyer. Pour un couple sans enfant, il faut environ 1 426 € net mensuel (1 SMIC). Pour un couple avec 1 enfant, environ 1 711 € (1,2 SMIC). Ce calcul se fait sur les 12 derniers mois de revenus stables.",
    },
    {
      question: "Combien de temps dure la procédure de regroupement familial ?",
      reponse: "En moyenne entre 6 et 12 mois de bout en bout. L'OFII dispose de 6 mois pour instruire le dossier, puis le consulat prend 2 à 4 mois pour traiter le visa. Un dossier complet et bien préparé réduit les allers-retours.",
    },
    {
      question: "Peut-on faire venir ses parents par regroupement familial ?",
      reponse: "Non. Le regroupement familial ne concerne que le conjoint marié et les enfants mineurs. Pour faire venir ses parents, il faut d'autres procédures (visa visiteur, titre \"vie privée et familiale\" pour parents d'enfant français, etc.).",
    },
    {
      question: "Le conjoint peut-il travailler dès son arrivée en France ?",
      reponse: "Oui. La carte de séjour \"vie privée et familiale\" obtenue dans le cadre du regroupement familial autorise le travail en France. Le conjoint peut donc travailler dès la réception de son titre de séjour, sans avoir à demander d'autorisation supplémentaire.",
    },
    {
      question: "Que se passe-t-il si l'OFII ne répond pas dans les 6 mois ?",
      reponse: "Le silence de l'OFII pendant 6 mois vaut décision de refus implicite. Vous pouvez alors exercer un recours devant le tribunal administratif dans les 2 mois suivant l'expiration du délai de 6 mois.",
    },
    {
      question: "Les réfugiés ont-ils les mêmes conditions pour le regroupement familial ?",
      reponse: "Non, les réfugiés et bénéficiaires de la protection subsidiaire bénéficient d'un régime de faveur : pas de condition de revenus, pas de condition de logement, et pas de délai de 18 mois si la demande est faite dans les 3 mois après l'obtention du statut.",
    },
  ],
};

export default article;
