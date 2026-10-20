import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-contrat-republicain.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/contrat-engagement-republicain-2026-obligations-formation-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "contrat-engagement-republicain-2026-obligations-formation-civique",
  titre: "Contrat d'Engagement Républicain 2026 : obligations, formation civique et test civique",
  titreSeo: "Contrat d'Engagement Républicain 2026 : obligations, formation civique et test civique",
  resume: "Tout sur le CER 2026 : principes républicains, formation civique 4 jours, laïcité, égalité femmes-hommes et lien direct avec le test civique. Guide complet.",
  chapo: "Le Contrat d'Engagement Républicain (CER) est un pilier du parcours d'intégration en France depuis la loi du 24 août 2021 confortant le respect des principes de la République. Depuis 2026, ce contrat fait partie intégrante du Contrat d'Intégration Républicaine (CIR) signé à l'OFII. Il engage les étrangers admis au séjour en France à respecter les valeurs et principes de la République française : liberté, égalité, fraternité, laïcité, égalité entre les femmes et les hommes, et dignité humaine.",
  publieLe: "2026-03-30",
  modifieLe: "2026-03-30",
  minutes: 18,
  theme: "contrat engagement républicain",
  motsCles: [
    "contrat engagement républicain",
    "CER France 2026",
    "contrat intégration républicaine",
    "CIR OFII obligations",
    "formation civique OFII",
    "valeurs républicaines France",
    "test civique CER",
    "laïcité France explication",
    "égalité femmes hommes France",
    "principes République française",
    "symboles République France",
    "formation civique obligatoire",
    "renouvellement titre séjour CIR",
    "obligations primo-arrivant France",
    "signature CIR OFII",
    "loi séparatisme 2021",
    "naturalisation valeurs républicaines",
    "intégration républicaine France",
    "devise liberté égalité fraternité",
    "Marseillaise Marianne drapeau",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide vous explique en détail ce qu'est le Contrat d'Engagement Républicain, ce qu'il implique concrètement, les obligations de formation civique, les conséquences du non-respect, et le lien étroit avec le test civique. Comprendre ce contrat est essentiel pour réussir votre intégration et préparer les épreuves d'évaluation qui peuvent conditionner le renouvellement de votre titre de séjour ou votre accès à la nationalité française.",
    },
    { type: "h2", texte: "Qu'est-ce que le Contrat d'Engagement Républicain ?", id: "definition-cer" },
    {
      type: "p",
      texte: "Le Contrat d'Engagement Républicain est un engagement solennel signé par les étrangers admis pour la première fois au séjour en France :",
    },
    { type: "p", texte: "**Base légale :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Loi n° 2021-1109 du 24 août 2021 (loi séparatisme)",
        "Articles L. 413-1 à L. 413-8 du CESEDA",
        "Intégré au Contrat d'Intégration Républicaine (CIR) depuis 2022",
      ],
    },
    { type: "p", texte: "**Qui doit signer le CER ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tout étranger admis pour la première fois au séjour en France et souhaitant s'y installer durablement",
        "Les primo-arrivants entre 16 et 65 ans",
        "Les bénéficiaires de la protection internationale (réfugiés, bénéficiaires de la protection subsidiaire)",
        "Certains cas de regroupement familial",
      ],
    },
    { type: "p", texte: "**Sont dispensés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les étrangers titulaires d'un VLS-TS \"étudiant\" (mais ils doivent signer le CIR s'ils changent de statut)",
        "Les titulaires d'un passeport talent de courte durée",
      ],
    },
    { type: "p", texte: "**Le CER engage à respecter :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "La liberté personnelle, la liberté d'expression et la liberté de conscience",
        "L'égalité entre les femmes et les hommes",
        "La dignité de la personne humaine",
        "Les symboles et emblèmes de la République (drapeau, hymne, devise)",
        "L'intégrité territoriale (la France a des frontières reconnues)",
        "La laïcité (séparation de l'État et des religions)",
        "Le refus de toute discrimination",
      ],
    },
    { type: "p", texte: "**Concrètement, cela signifie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Respecter les lois françaises",
        "Ne pas imposer ses convictions religieuses à autrui",
        "Ne pas s'opposer à la scolarisation de ses enfants",
        "Traiter les femmes et les hommes de manière égale",
        "Ne pas recourir à la violence",
      ],
    },
    {
      type: "h2",
      texte: "La formation civique obligatoire : contenu et organisation",
      id: "formation-civique-obligatoire",
    },
    { type: "p", texte: "La signature du CIR/CER s'accompagne d'une formation civique obligatoire :" },
    { type: "p", texte: "**Durée de la formation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "4 jours (28 heures) de formation civique",
        "Dispensée gratuitement par un organisme agréé, financé par l'OFII",
        "À suivre dans les premiers mois après la signature du CIR",
      ],
    },
    { type: "p", texte: "**Contenu de la formation civique :**" },
    { type: "p", texte: "**Module 1 : Principes, valeurs et institutions de la République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La devise \"Liberté, Égalité, Fraternité\"",
        "La Déclaration des droits de l'homme et du citoyen",
        "La Constitution et les institutions (Président, Parlement, Justice)",
        "La laïcité et la séparation des Églises et de l'État",
        "L'égalité femmes-hommes",
      ],
    },
    { type: "p", texte: "**Module 2 : Vivre et accéder à l'emploi en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le marché du travail et les droits des salariés",
        "Les démarches pour chercher un emploi (France Travail, CV, entretien)",
        "La création d'entreprise",
        "Les formations professionnelles",
      ],
    },
    { type: "p", texte: "**Module 3 : La vie quotidienne en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le système de santé et l'assurance maladie",
        "L'école et le système éducatif",
        "Le logement et les aides",
        "Les transports, la banque, les impôts",
      ],
    },
    { type: "p", texte: "**Module 4 : La parentalité et les droits de l'enfant**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'autorité parentale partagée",
        "La protection de l'enfance",
        "L'interdiction des châtiments corporels",
        "L'éducation obligatoire",
      ],
    },
    { type: "p", texte: "**Assiduité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La présence aux 4 jours est obligatoire",
        "Les absences injustifiées sont signalées à l'OFII",
        "L'absence prolongée peut compromettre le renouvellement du titre de séjour",
      ],
    },
    { type: "h2", texte: "Le lien entre le CER et le test civique", id: "lien-test-civique" },
    {
      type: "p",
      texte: "Le Contrat d'Engagement Républicain et le test civique sont étroitement liés :",
    },
    { type: "p", texte: "**Le test civique évalue les connaissances du CER :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le test civique introduit par la loi immigration de 2024 évalue les connaissances acquises lors de la formation civique",
        "Les questions portent sur les principes et valeurs du CER",
        "Réussir le test prouve que vous avez intégré les valeurs républicaines",
      ],
    },
    { type: "p", texte: "**Quand passer le test civique ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "À la fin du CIR (environ 1 an après la signature)",
        "Avant le renouvellement du titre de séjour pluriannuel",
        "Le résultat conditionne le renouvellement dans certains cas",
      ],
    },
    { type: "p", texte: "**Thèmes du test civique liés au CER :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Symboles de la République : drapeau, Marianne, hymne national, devise",
        "Principes fondamentaux : liberté, égalité, fraternité, laïcité",
        "Institutions : Président, Assemblée nationale, Sénat, Conseil constitutionnel",
        "Droits et devoirs : droit de vote, obligation scolaire, impôts, service national",
        "Valeurs : égalité femmes-hommes, non-discrimination, dignité humaine",
      ],
    },
    { type: "p", texte: "**Comment se préparer :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Révisez les notes de la formation civique OFII",
        "Entraînez-vous sur testciviquefrance.fr avec les QCM d'entraînement",
        "Lisez la Déclaration des droits de l'homme et du citoyen",
        "Apprenez la Marseillaise (au moins le premier couplet et le refrain)",
      ],
    },
    { type: "p", texte: "**En cas d'échec au test civique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez le repasser (un délai entre les tentatives s'applique)",
        "Votre titre de séjour peut être renouvelé pour 1 an supplémentaire le temps de vous préparer",
        "Un échec répété peut poser problème pour la carte de résident",
      ],
    },
    {
      type: "h2",
      texte: "Conséquences du non-respect du Contrat d'Engagement Républicain",
      id: "consequences-non-respect",
    },
    {
      type: "p",
      texte: "Le CER n'est pas un simple document symbolique. Son non-respect entraîne des conséquences :",
    },
    { type: "p", texte: "**Conséquences sur le titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le respect du CIR/CER est évalué lors du renouvellement du titre de séjour",
        "Un non-respect caractérisé peut entraîner un refus de renouvellement",
        "Le préfet prend en compte : l'assiduité aux formations, le respect de la loi, l'intégration globale",
      ],
    },
    { type: "p", texte: "**Exemples de non-respect du CER :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Refus de signer le contrat → impossibilité d'obtenir le titre de séjour",
        "Absences répétées à la formation civique sans justification",
        "Condamnation pénale pour des faits contraires aux valeurs républicaines",
        "Polygamie (interdite en France)",
        "Retrait d'enfants de l'école obligatoire",
      ],
    },
    { type: "p", texte: "**Conséquences sur la naturalisation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le respect du CER est un critère d'assimilation pour la naturalisation",
        "L'entretien de naturalisation vérifie votre connaissance des valeurs républicaines",
        "Tout manquement grave au CER est un motif de refus de naturalisation",
      ],
    },
    { type: "p", texte: "**Conséquences pour les associations :**" },
    {
      type: "p",
      texte: "Depuis la loi de 2021, les associations qui reçoivent des subventions publiques doivent aussi signer un CER. Le non-respect peut entraîner le retrait des subventions.",
    },
    { type: "p", texte: "**Nuance importante :**" },
    {
      type: "p",
      texte: "Le non-respect du CER ne conduit pas automatiquement à une OQTF. Le préfet effectue un examen au cas par cas en tenant compte de la gravité des faits, de la durée de séjour, de la situation familiale et professionnelle.",
    },
    {
      type: "h2",
      texte: "La laïcité en pratique : ce qui est permis et ce qui ne l'est pas",
      id: "laicite-vie-quotidienne",
    },
    { type: "p", texte: "La laïcité est un principe central du CER souvent source de questions :" },
    { type: "p", texte: "**Ce que garantit la laïcité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La liberté de croire ou de ne pas croire",
        "La liberté de pratiquer sa religion en privé",
        "L'État ne favorise aucune religion",
        "L'État protège toutes les religions",
      ],
    },
    { type: "p", texte: "**Ce qui est permis :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Porter un signe religieux dans la rue, les transports, les magasins",
        "Prier chez soi et dans les lieux de culte",
        "Suivre un régime alimentaire religieux (halal, casher, végétarien)",
        "Fêter ses fêtes religieuses",
        "Parler de sa religion dans la sphère privée",
      ],
    },
    { type: "p", texte: "**Ce qui est interdit ou limité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Signe religieux ostentatoire à l'école publique (loi de 2004 pour les élèves)",
        "Voile intégral (niqab, burqa) dans l'espace public (loi de 2010)",
        "Agents du service public : obligation de neutralité (pas de signes religieux au travail)",
        "Prosélytisme agressif sur le lieu de travail",
        "Refuser de travailler avec une personne en raison de sa religion ou de son sexe",
      ],
    },
    { type: "p", texte: "**Cas pratiques fréquents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "*Puis-je porter le hijab au travail dans une entreprise privée ?* → En principe oui, sauf si le règlement intérieur le restreint pour des raisons de sécurité ou de contact avec la clientèle",
        "*Mon enfant peut-il être dispensé de cours ?* → Non, l'instruction est obligatoire pour tous les enfants de 3 à 16 ans",
        "*Puis-je demander un menu spécial à la cantine ?* → La loi n'oblige pas la cantine à proposer des menus confessionnels, mais de nombreuses cantines proposent un menu alternatif",
      ],
    },
    {
      type: "p",
      texte: "**C'est un sujet important du test civique.** Des questions sur la laïcité apparaissent régulièrement dans les QCM.",
    },
    {
      type: "h2",
      texte: "Égalité femmes-hommes : un principe républicain non négociable",
      id: "egalite-femmes-hommes",
    },
    {
      type: "p",
      texte: "L'égalité entre les femmes et les hommes est un principe fondamental inscrit dans le CER :",
    },
    { type: "p", texte: "**Ce que dit la loi française :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La Constitution garantit l'égalité des droits entre femmes et hommes",
        "Les violences conjugales sont un délit puni par la loi",
        "Le mariage forcé est interdit",
        "L'excision et les mutilations génitales féminines sont des crimes",
        "La polygamie est interdite en France",
      ],
    },
    { type: "p", texte: "**Droits des femmes en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit de vote et d'éligibilité (depuis 1944)",
        "Droit de travailler sans l'autorisation du mari (depuis 1965)",
        "Droit de divorcer par consentement mutuel (depuis 1975)",
        "Droit à l'IVG (constitutionnel depuis 2024)",
        "Autorité parentale partagée",
        "Égalité salariale (imposée par la loi, même si des écarts persistent)",
      ],
    },
    { type: "p", texte: "**En cas de violences conjugales :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Appelez le 3919 (numéro national contre les violences faites aux femmes) - gratuit et anonyme",
        "Police / Gendarmerie : 17",
        "En cas de danger immédiat : 112",
        "Dépôt de plainte possible même sans titre de séjour",
        "Les victimes de violences conjugales peuvent obtenir un titre de séjour spécifique",
      ],
    },
    { type: "p", texte: "**Le mariage en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le consentement libre des deux époux est obligatoire",
        "L'âge minimum est de 18 ans",
        "La polygamie est interdite (même le mariage religieux n'est pas reconnu s'il est polygame)",
        "Le mariage civil est le seul reconnu par l'État",
      ],
    },
    {
      type: "p",
      texte: "**Ce sujet fait partie du test civique.** Questions fréquentes : \"Depuis quand les femmes votent-elles en France ?\", \"La polygamie est-elle autorisée ?\", \"Qui exerce l'autorité parentale ?\"",
    },
    {
      type: "p",
      texte: "Préparez-vous sur testciviquefrance.fr pour maîtriser ces questions essentielles.",
    },
    {
      type: "h2",
      texte: "Récapitulatif des obligations du CIR complet",
      id: "obligations-cir-complete",
    },
    {
      type: "p",
      texte: "Le CIR englobe le CER et d'autres obligations. Voici le récapitulatif complet :",
    },
    { type: "p", texte: "**1. Signature du Contrat d'Engagement Républicain :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Engagement formel à respecter les principes de la République",
        "Signature à l'OFII lors de l'entretien personnalisé",
      ],
    },
    { type: "p", texte: "**2. Formation civique (4 jours) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Obligatoire et gratuite",
        "Principes républicains, vie quotidienne, emploi, parentalité",
        "Assiduité contrôlée",
      ],
    },
    { type: "p", texte: "**3. Test de positionnement linguistique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Évaluation de votre niveau de français",
        "Si le niveau est insuffisant : prescription de cours de français gratuits (jusqu'à 600 heures)",
        "Objectif : atteindre au minimum le niveau A1",
      ],
    },
    { type: "p", texte: "**4. Entretien personnalisé à l'OFII :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Bilan de votre situation personnelle et professionnelle",
        "Orientation vers les services adaptés (emploi, logement, santé)",
        "Définition d'un parcours d'intégration sur mesure",
      ],
    },
    { type: "p", texte: "**5. Suivi et évaluation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suivi régulier par l'OFII pendant la durée du CIR",
        "Évaluation de votre intégration : assiduité aux formations, progression linguistique, insertion professionnelle",
        "Résultat au test civique",
      ],
    },
    { type: "p", texte: "**Durée du CIR :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le CIR est signé pour une durée de 1 an",
        "Il peut être prolongé de 1 an si les formations n'ont pas été achevées",
        "Le respect du CIR conditionne le renouvellement de la carte de séjour pluriannuelle",
      ],
    },
    { type: "p", texte: "**Checklist pour réussir votre CIR :**" },
    { type: "p", texte: "✅ Signer le CER à l'OFII" },
    { type: "p", texte: "✅ Assister aux 4 jours de formation civique" },
    { type: "p", texte: "✅ Suivre les cours de français si prescrits" },
    { type: "p", texte: "✅ Se présenter aux convocations de l'OFII" },
    { type: "p", texte: "✅ Passer le test civique avec succès" },
    { type: "p", texte: "✅ Préparer le test sur testciviquefrance.fr" },
    {
      type: "h2",
      texte: "Conseils pratiques pour réussir votre intégration républicaine",
      id: "temoignages-conseils",
    },
    { type: "p", texte: "Des conseils concrets pour bien vivre le CER et réussir votre intégration :" },
    { type: "p", texte: "**Conseil 1 : Prenez la formation civique au sérieux**" },
    {
      type: "p",
      texte: "Ce n'est pas une simple formalité. Les informations transmises sont directement utilisées dans le test civique. Prenez des notes et posez des questions aux formateurs.",
    },
    { type: "p", texte: "**Conseil 2 : Apprenez les symboles de la République**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le drapeau tricolore : bleu, blanc, rouge",
        "La devise : \"Liberté, Égalité, Fraternité\"",
        "L'hymne national : La Marseillaise",
        "Marianne : allégorie de la République",
        "Le 14 juillet : Fête nationale",
        "Le coq : symbole non officiel",
      ],
    },
    { type: "p", texte: "**Conseil 3 : Comprenez le système politique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La France est une république démocratique et laïque",
        "Le Président est élu au suffrage universel pour 5 ans",
        "L'Assemblée nationale vote les lois",
        "Le pouvoir judiciaire est indépendant",
      ],
    },
    { type: "p", texte: "**Conseil 4 : Participez à la vie locale**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscrivez-vous dans une association",
        "Participez aux événements de votre commune",
        "Votez aux élections municipales (si vous êtes citoyen européen)",
        "Les étrangers non-européens n'ont pas le droit de vote mais peuvent participer à la vie associative",
      ],
    },
    { type: "p", texte: "**Conseil 5 : Préparez le test civique en amont**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "N'attendez pas la dernière minute",
        "Entraînez-vous régulièrement sur testciviquefrance.fr",
        "Révisez les thèmes les plus fréquents : laïcité, symboles, institutions, égalité",
        "Faites les QCM chronométrés pour vous habituer au format de l'examen",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Contrat d'Engagement Républicain est bien plus qu'une formalité administrative : c'est le socle de votre intégration en France. En signant ce contrat, vous vous engagez à respecter les valeurs qui fondent la société française, liberté, égalité, fraternité, laïcité et dignité humaine. La formation civique de l'OFII vous donne les clés pour comprendre ces principes, et le test civique vérifie que vous les avez assimilés. Pour mettre toutes les chances de votre côté, préparez-vous avec les QCM d'entraînement sur testciviquefrance.fr et anticipez cette évaluation qui conditionne le renouvellement de votre titre de séjour.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que le Contrat d'Engagement Républicain ?",
      reponse: "Le CER est un engagement signé par les étrangers primo-arrivants en France à respecter les valeurs de la République : liberté, égalité, fraternité, laïcité, égalité femmes-hommes et dignité humaine.",
    },
    {
      question: "Le Contrat d'Engagement Républicain est-il obligatoire ?",
      reponse: "Oui, il fait partie du CIR (Contrat d'Intégration Républicaine) obligatoire pour les primo-arrivants souhaitant s'installer durablement en France. Le refuser empêche l'obtention du titre de séjour.",
    },
    {
      question: "Combien de jours dure la formation civique ?",
      reponse: "La formation civique dure 4 jours (28 heures). Elle est gratuite et dispensée par un organisme agréé par l'OFII. Elle couvre les principes républicains, l'emploi, la vie quotidienne et la parentalité.",
    },
    {
      question: "Quel est le lien entre le CER et le test civique ?",
      reponse: "Le test civique évalue les connaissances transmises lors de la formation civique du CER. Les questions portent sur les symboles, principes et institutions de la République, les thèmes mêmes du CER.",
    },
    {
      question: "Que se passe-t-il si je ne respecte pas le CER ?",
      reponse: "Le non-respect du CER peut entraîner un refus de renouvellement du titre de séjour. Le préfet évalue au cas par cas l'assiduité aux formations, le respect de la loi et l'intégration globale.",
    },
    {
      question: "La laïcité interdit-elle de pratiquer sa religion ?",
      reponse: "Non. La laïcité garantit la liberté de croire ou de ne pas croire et de pratiquer sa religion en privé. Elle impose la neutralité de l'État et des agents publics, pas la disparition des religions.",
    },
    {
      question: "Quelles sont les principales valeurs républicaines françaises ?",
      reponse: "Liberté (expression, conscience, mouvement), Égalité (devant la loi, femmes-hommes), Fraternité (solidarité), Laïcité (neutralité de l'État), Dignité humaine et non-discrimination.",
    },
    {
      question: "Le CER est-il nécessaire pour la naturalisation ?",
      reponse: "Le CER en lui-même n'est pas une condition directe de naturalisation, mais le respect des valeurs républicaines est évalué lors de l'entretien de naturalisation. Tout manquement grave est un motif de refus.",
    },
    {
      question: "Qui est dispensé du CIR (et donc du CER) ?",
      reponse: "Les étrangers en VLS-TS \"étudiant\" et certains passeport talent de courte durée sont dispensés. Cependant, s'ils changent de statut pour rester durablement, ils devront signer le CIR.",
    },
    {
      question: "Comment se préparer au test civique lié au CER ?",
      reponse: "Révisez les notes de la formation civique OFII, entraînez-vous sur testciviquefrance.fr, lisez la Déclaration des droits de l'homme et du citoyen, et apprenez les symboles de la République.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Contrat d'Intégration Républicaine",
      url: "https://www.service-public.fr/particuliers/vosdroits/F17048",
      type: "officiel",
      description: "Fiche officielle sur le CIR et ses obligations.",
    },
    {
      titre: "OFII - Le parcours d'intégration",
      url: "https://www.ofii.fr/le-contrat-dintegration-republicaine/",
      type: "officiel",
      description: "Présentation officielle du CIR par l'OFII.",
    },
    {
      titre: "Légifrance - Loi n° 2021-1109 du 24 août 2021",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000043964778",
      type: "juridique",
      description: "Loi confortant le respect des principes de la République (loi séparatisme).",
    },
    {
      titre: "Vie-Publique.fr - La laïcité en France",
      url: "https://www.vie-publique.fr/fiches/la-laicite",
      type: "officiel",
      description: "Dossier complet sur la laïcité par Vie Publique.",
    },
  ],
  aLireAussi: [
    {
      slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire",
      ancre: "S'inscrire au test civique après la formation civique",
    },
    {
      slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent",
      ancre: "Résultats du test civique 2026",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "VLS-TS et signature du CIR" },
    {
      slug: "comment-reussir-test-civique-premier-coup",
      ancre: "Réussir le test civique du premier coup",
    },
  ],
};

export default article;
