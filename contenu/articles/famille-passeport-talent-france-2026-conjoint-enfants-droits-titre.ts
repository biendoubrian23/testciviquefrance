import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/famille-passeport-talent-france-2026-conjoint-enfants-droits-titre`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "famille-passeport-talent-france-2026-conjoint-enfants-droits-titre",
  titre: "Famille du passeport talent en France 2026 : conjoint, enfants, titre \"famille accompagnante\" (guide complet)",
  titreSeo: "Famille du passeport talent en France 2026 : conjoint, enfants, titre \"famille accompagnante\" (guide complet)",
  resume: "Vous êtes titulaire d'un passeport talent ? Votre conjoint et vos enfants peuvent obtenir un titre \"famille accompagnante\" sans démarche compliquée. Conditions 2026, dossier, délais, droit au travail du conjoint, et passerelle vers la naturalisation.",
  chapo: "Vous venez d'obtenir un **passeport talent** en France et votre famille est restée à l'étranger ? Bonne nouvelle : depuis la loi du 7 mars 2016 (et confirmée par les décrets de 2024-2026), votre conjoint et vos enfants mineurs bénéficient d'un régime ultra-favorable, le titre de séjour mention **\"famille accompagnante\"** (parfois appelé \"passeport talent - famille\"). Concrètement : un titre pluriannuel de la même durée que le vôtre (jusqu'à 4 ans), un **droit au travail immédiat pour le conjoint** sans autorisation préalable, et une procédure simplifiée à l'ANEF. Mais attention, des conditions strictes encadrent ce dispositif : mariage ou PACS reconnu, vie commune effective, ressources suffisantes du titulaire. Et en cas de divorce ou de perte d'emploi du titulaire, les règles changent rapidement. Ce guide complet 2026 détaille les conditions, le dossier à constituer, la procédure visa long séjour, le renouvellement, et surtout la **passerelle vers la naturalisation** que beaucoup de familles ignorent.",
  publieLe: "2026-05-09",
  modifieLe: "2026-05-09",
  minutes: 17,
  theme: "famille passeport talent 2026",
  motsCles: [
    "famille passeport talent 2026",
    "titre famille accompagnante",
    "passeport talent conjoint travail",
    "visa long séjour famille passeport talent",
    "VLS-TS famille accompagnante",
    "passeport talent enfants mineurs",
    "L421-22 CESEDA famille",
    "naturalisation famille passeport talent",
    "passeport talent regroupement",
    "titre séjour conjoint talent 2026",
    "famille talent ANEF",
    "passeport talent renouvellement famille",
    "divorce passeport talent titre",
    "passeport talent ressources conjoint",
    "famille passeport talent droit travail",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1605703517-f33de7e0a99c?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1605703517-f33de7e0a99c",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui peut bénéficier du titre \"famille accompagnante\" du passeport talent ?",
      id: "qui-peut-beneficier",
    },
    {
      type: "p",
      texte: "Le titre **\"famille accompagnante\"** (parfois noté \"passeport talent - famille\" sur la carte) est régi par les articles **L421-22 et R421-26 du CESEDA**. Il vise à faciliter l'installation en France de la famille proche du titulaire d'un passeport talent, sans recours au regroupement familial classique (qui est plus long et plus restrictif).",
    },
    { type: "p", texte: "**Les bénéficiaires éligibles**" },
    {
      type: "liste",
      style: "numeros",
      items: ["**Le conjoint marié**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mariage reconnu en France (acte d'état civil étranger transcrit ou apostillé)",
        "Aucune condition d'ancienneté du mariage requise (contrairement au regroupement familial classique qui exige 18 mois de mariage)",
        "Le conjoint peut être de toute nationalité (hors UE/EEE/Suisse, qui relèvent d'un autre régime)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Le partenaire de PACS** (sous conditions strictes)"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "PACS conclu en France ou à l'étranger et reconnu en France",
        "**Vie commune justifiée d'au moins 1 an** (factures communes, bail, attestations)",
        "Plus difficile à obtenir que pour les couples mariés : la préfecture vérifie la réalité de l'union",
        "Le concubinage simple (union libre) **n'ouvre PAS droit** au titre famille accompagnante",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Les enfants mineurs**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Enfants du couple, jusqu'à **18 ans** au moment de la demande",
        "Enfants nés d'une précédente union (si l'autre parent donne son accord ou en cas d'autorité parentale exclusive)",
        "Enfants adoptés (jugement d'adoption traduit et apostillé)",
        "**Bon à savoir** : à 18 ans, l'enfant doit basculer vers un titre étudiant ou autre, voir notre article sur le passage de la majorité.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Les ascendants à charge ?**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Non**, contrairement à certaines idées reçues, les parents (ascendants) du titulaire **ne sont pas éligibles** au titre famille accompagnante. Ils doivent passer par le regroupement familial classique ou un visa visiteur, ce qui est nettement plus contraignant.",
      ],
    },
    { type: "p", texte: "**Cas particulier des familles recomposées**" },
    {
      type: "p",
      texte: "Si vous avez des enfants d'une précédente union qui ne vivent pas avec vous en France, ils peuvent quand même demander un titre famille accompagnante **à condition** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "D'apporter une autorisation écrite et certifiée de l'autre parent biologique",
        "Ou de produire un jugement attribuant l'autorité parentale exclusive",
        "Ou de prouver le décès de l'autre parent",
      ],
    },
    {
      type: "h2",
      texte: "Les 5 avantages décisifs du titre \"famille accompagnante\"",
      id: "avantages-titre",
    },
    {
      type: "p",
      texte: "Le titre famille accompagnante est l'un des plus protecteurs et avantageux du droit des étrangers en France. Voici les 5 atouts majeurs en 2026 :",
    },
    { type: "p", texte: "**1. Durée alignée sur celle du titulaire (jusqu'à 4 ans)**" },
    {
      type: "p",
      texte: "Le titre est délivré pour la **même durée que celui du titulaire** du passeport talent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Talent salarié qualifié 4 ans → famille 4 ans",
        "Talent chercheur 2 ans → famille 2 ans",
        "Talent ICT (mobilité intra-groupe) 3 ans → famille 3 ans",
        "Carte bleue européenne 4 ans → famille 4 ans",
      ],
    },
    { type: "p", texte: "Cela évite les renouvellements annuels stressants pour toute la famille." },
    {
      type: "p",
      texte: "**2. Droit au travail immédiat pour le conjoint, sans autorisation préalable**",
    },
    {
      type: "p",
      texte: "C'est l'avantage **le plus significatif** par rapport au regroupement familial classique. Dès la remise de la carte, le conjoint peut :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Travailler en CDI, CDD, intérim ou freelance",
        "Créer une entreprise ou être auto-entrepreneur",
        "Exercer une profession libérale (sous réserve des conditions propres à chaque profession réglementée)",
        "Travailler à temps plein ou à temps partiel",
        "**Aucune autorisation de travail préalable** n'est requise",
      ],
    },
    { type: "p", texte: "**3. Scolarisation immédiate des enfants**" },
    {
      type: "p",
      texte: "Les enfants mineurs sont scolarisés dans les mêmes conditions que les enfants français :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "École publique gratuite (maternelle, primaire, collège, lycée)",
        "Inscription en université (frais réduits, mêmes droits que les Français)",
        "Accès aux bourses et aides au logement étudiant (CROUS)",
        "Possibilité d'apprentissage dès 16 ans",
      ],
    },
    { type: "p", texte: "**4. Couverture sociale complète**" },
    {
      type: "p",
      texte: "Toute la famille est rattachée au régime général de la Sécurité sociale via la **PUMA (Protection Universelle Maladie)** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Remboursements maladie identiques aux Français",
        "Prestations CAF (allocations familiales, APL, etc.)",
        "Accès au compte personnel de formation (CPF) pour le conjoint dès qu'il travaille",
      ],
    },
    { type: "p", texte: "**5. Mobilité dans l'espace Schengen**" },
    {
      type: "p",
      texte: "Avec le titre famille accompagnante, toute la famille peut voyager librement dans les 27 pays de l'espace Schengen pour des séjours de courte durée (90 jours sur 180), sans visa supplémentaire. Pratique pour les vacances ou les déplacements professionnels.",
    },
    {
      type: "h2",
      texte: "Conditions précises : ressources, vie commune, mariage",
      id: "conditions-precises",
    },
    {
      type: "p",
      texte: "Le titre famille accompagnante n'est pas automatique. La préfecture vérifie 3 conditions principales en 2026 :",
    },
    { type: "p", texte: "**1. Mariage légal ou PACS solide**" },
    { type: "p", texte: "Pour les couples mariés :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage original en français OU traduit par un traducteur assermenté",
        "Si mariage célébré à l'étranger : transcription préalable au Service Central d'État Civil (SCEC) de Nantes ou apostille selon les conventions bilatérales",
        "Délai de transcription : **2 à 6 mois** en moyenne, anticipez !",
      ],
    },
    { type: "p", texte: "Pour les partenaires PACS :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convention de PACS originale et certificat de non-rétractation",
        "Si PACS étranger : reconnaissance préalable par le tribunal judiciaire compétent",
        "**Justification d'une vie commune d'au moins 1 an** avec preuves matérielles (voir ci-dessous)",
      ],
    },
    { type: "p", texte: "**2. Vie commune effective et continue**" },
    {
      type: "p",
      texte: "C'est le **point le plus contrôlé** par les préfectures en 2026. La vie commune doit être documentée par :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Bail au nom des deux conjoints (ou attestation d'hébergement croisée)",
        "Factures communes (électricité, internet, assurance habitation) sur les 6 derniers mois minimum",
        "Avis d'imposition commun ou déclaration commune signée",
        "Comptes bancaires joints ou virements réguliers entre les comptes",
        "Photos en couple datées (mariage, vacances, événements familiaux)",
        "Attestations de proches (employeurs, voisins, médecin de famille)",
      ],
    },
    {
      type: "p",
      texte: "**Attention au \"mariage blanc\"** : la préfecture peut convoquer le couple à un entretien séparé pour vérifier la cohérence des déclarations. En cas de doute, le titre est refusé et un signalement au procureur peut être fait.",
    },
    { type: "p", texte: "**3. Ressources suffisantes du titulaire**" },
    {
      type: "p",
      texte: "Le titulaire du passeport talent doit prouver qu'il peut subvenir aux besoins de toute sa famille :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaire minimum requis : variable selon la catégorie de passeport talent, mais en moyenne **2 fois le SMIC brut** soit environ **3 500 € brut / mois en 2026**",
        "Pour les **chercheurs et artistes**, des seuils plus bas peuvent être tolérés (à condition de présenter une convention d'accueil ou contrat solide)",
        "Pour la **carte bleue européenne**, le seuil est plus élevé : 1,5 fois le salaire moyen de référence (environ **53 836 € brut / an en 2026**)",
      ],
    },
    {
      type: "p",
      texte: "**Bon à savoir** : les revenus du conjoint **ne sont pas comptés** pour atteindre le seuil de ressources. Seuls les revenus du titulaire comptent. C'est pourquoi un conjoint au chômage ou non encore embauché ne pose aucun problème pour la délivrance du titre.",
    },
    { type: "h2", texte: "Dossier complet et démarches sur l'ANEF", id: "dossier-complet" },
    {
      type: "p",
      texte: "Depuis 2024, **toutes les demandes** de titre famille accompagnante se font via l'**ANEF (Administration Numérique des Étrangers en France)** sur le portail [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr). Voici la liste complète des pièces à fournir en 2026 :",
    },
    { type: "p", texte: "**Pièces concernant le demandeur (conjoint ou enfant)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Passeport en cours de validité (toutes les pages, scan couleur)",
        "Photo d'identité aux normes ICAO (récente, moins de 6 mois)",
        "Justificatif de domicile en France (bail, attestation d'hébergement, facture EDF/internet)",
        "Certificat médical OFII (si VLS-TS validé) ou rendez-vous OFII pour visite médicale",
        "Pour les enfants : extrait d'acte de naissance traduit + livret de famille",
        "Pour le conjoint : extrait d'acte de mariage traduit ou convention PACS",
        "**Pour PACS uniquement** : preuves de vie commune sur 1 an minimum (voir section 3)",
      ],
    },
    { type: "p", texte: "**Pièces concernant le titulaire du passeport talent**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Copie du passeport talent (recto-verso)",
        "Contrat de travail français (CDI, CDD long, convention d'accueil pour chercheurs)",
        "**3 derniers bulletins de salaire** + attestation employeur récente",
        "**Avis d'imposition de l'année précédente** (ou déclaration provisoire si récemment arrivé)",
        "Justificatif de domicile (le même que le bénéficiaire)",
      ],
    },
    { type: "p", texte: "**Pièces complémentaires selon situations**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si famille recomposée : autorisation parentale écrite, jugement de divorce, etc.",
        "Si transcription d'acte étranger : récépissé du SCEC ou apostille",
        "Si PACS étranger : décision du tribunal judiciaire de reconnaissance",
      ],
    },
    { type: "p", texte: "**Coût et timbre fiscal**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Frais de dossier : **225 € de timbre fiscal** (à acheter en ligne sur timbres.impots.gouv.fr)",
        "Pour le visa long séjour préalable (si la famille était à l'étranger) : 99 € à 269 € selon les cas",
        "Visite OFII obligatoire à l'arrivée",
      ],
    },
    { type: "p", texte: "**Délai d'instruction**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En préfecture (cas classique) : **2 à 4 mois** en 2026",
        "Sur l'ANEF si dossier complet : **1 à 3 mois** en moyenne",
        "Récépissé ANEF délivré sous **48-72h** permettant de circuler et travailler en attendant la carte définitive",
      ],
    },
    {
      type: "p",
      texte: "Pour plus de détails sur le récépissé, consultez notre guide complet récépissé ANEF.",
    },
    {
      type: "h2",
      texte: "Procédure visa long séjour, VLS-TS et passage en titre",
      id: "procedure-visa",
    },
    {
      type: "p",
      texte: "Si votre famille est encore à l'étranger au moment où vous obtenez votre passeport talent, elle doit suivre une **procédure visa long séjour spécifique** pour vous rejoindre. Voici les étapes en 2026 :",
    },
    { type: "p", texte: "**Étape 1 : Demande de VLS-TS \"famille passeport talent\"**" },
    {
      type: "p",
      texte: "Chaque membre de la famille (conjoint et enfants) doit déposer une demande de **VLS-TS (Visa Long Séjour valant Titre de Séjour) \"famille de passeport talent\"** auprès du consulat français de son pays de résidence. Le formulaire est disponible sur [france-visas.gouv.fr](https://france-visas.gouv.fr).",
    },
    { type: "p", texte: "Pièces requises au consulat :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport valide encore 1 an minimum après la date d'arrivée prévue",
        "Acte de mariage / acte de naissance traduit et apostillé",
        "Copie du passeport talent du titulaire en France",
        "Justificatif de domicile en France",
        "Bulletins de salaire et attestation employeur du titulaire",
        "Justificatif de souscription à une assurance santé internationale (en attendant la PUMA)",
        "Photo, formulaire Schengen, frais de visa (99 €)",
      ],
    },
    {
      type: "p",
      texte: "**Délai consulaire** : 2 à 6 semaines selon les pays. Plus rapide pour les pays à fort partenariat (Maroc, Tunisie, Sénégal, Côte d'Ivoire) que pour certains pays asiatiques ou africains plus chargés.",
    },
    { type: "p", texte: "**Étape 2 : Arrivée en France et validation OFII**" },
    {
      type: "p",
      texte: "Dans les **3 mois suivant l'arrivée**, chaque membre de la famille doit valider son VLS-TS sur le portail [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Saisie du n° de visa et de la date d'entrée",
        "Paiement de la taxe OFII (250 € pour le conjoint, 50 € par enfant en 2026)",
        "Convocation à la visite médicale OFII obligatoire (radio pulmonaire, vaccinations, entretien)",
      ],
    },
    { type: "p", texte: "À l'issue : le VLS-TS validé fait office de titre de séjour pendant 1 an." },
    { type: "p", texte: "**Étape 3 : Demande de carte pluriannuelle \"famille accompagnante\"**" },
    {
      type: "p",
      texte: "**2 mois avant la fin du VLS-TS**, déposez la demande de **carte pluriannuelle \"famille accompagnante\"** sur l'ANEF. C'est cette carte qui s'aligne sur la durée du passeport talent (jusqu'à 4 ans).",
    },
    { type: "p", texte: "**Cas particulier : famille déjà en France**" },
    {
      type: "p",
      texte: "Si votre conjoint était déjà en France sous un autre titre (étudiant, salarié) au moment où vous obtenez votre passeport talent, il peut faire un **changement de statut directement sur l'ANEF** sans repasser par le consulat. Le délai est plus rapide : 2 à 3 mois pour la nouvelle carte.",
    },
    {
      type: "h2",
      texte: "Renouvellement, divorce, perte d'emploi : ce qui peut tout changer",
      id: "renouvellement-changement",
    },
    {
      type: "p",
      texte: "Le titre famille accompagnante est confortable... tant que la situation reste stable. En cas de changement majeur, les règles évoluent vite.",
    },
    { type: "p", texte: "**Renouvellement classique (situation inchangée)**" },
    { type: "p", texte: "Le renouvellement se fait sur l'ANEF, **2 mois avant l'expiration**, avec :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mêmes pièces qu'à la première demande (mariage, vie commune, ressources du titulaire)",
        "Nouvelle taxe : **225 €** (en 2026)",
        "Délai d'instruction : 1 à 3 mois, un récépissé est délivré pour conserver les droits",
      ],
    },
    { type: "p", texte: "**Cas n°1 : Divorce du conjoint titulaire**" },
    {
      type: "p",
      texte: "C'est la situation **la plus délicate**. Selon la durée de séjour en France :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Moins de 3 ans** sous titre famille : le titre **n'est pas renouvelé**. Le conjoint doit chercher un autre fondement (changement de statut salarié, étudiant, etc.) sous 60 jours.",
        "**3 ans ou plus** sous titre famille + intégration prouvée (travail, langue, vie sociale) : le préfet peut **maintenir le titre à titre humanitaire** sur le fondement du droit à la vie privée et familiale (art. 8 CEDH).",
        "**Cas de violences conjugales** : le conjoint conserve **systématiquement** son titre, indépendamment de la durée. Il faut produire le dépôt de plainte et l'ordonnance de protection si elle existe.",
      ],
    },
    { type: "p", texte: "**Cas n°2 : Perte d'emploi du titulaire**" },
    { type: "p", texte: "Si le titulaire du passeport talent perd son emploi :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pendant le titre en cours : aucun impact immédiat sur le titre famille",
        "Au renouvellement : la condition de ressources doit toujours être vérifiée. Si le titulaire est désormais au chômage indemnisé, les allocations chômage comptent comme ressources (sous conditions).",
        "Si le titulaire change de statut (par exemple vers un titre salarié classique), la famille doit aussi changer de fondement de séjour.",
      ],
    },
    { type: "p", texte: "**Cas n°3 : Décès du titulaire**" },
    {
      type: "p",
      texte: "Le conjoint et les enfants conservent leur titre jusqu'à expiration. Au renouvellement, ils peuvent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demander un titre **\"vie privée et familiale\"** s'ils résident en France depuis 3 ans ou plus",
        "Faire reconnaître la perte du titulaire et demander un titre humanitaire",
      ],
    },
    { type: "p", texte: "**Cas n°4 : Enfant qui devient majeur**" },
    {
      type: "p",
      texte: "À 18 ans, l'enfant ne peut plus rester sous titre famille accompagnante. Il doit basculer vers :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Titre étudiant** s'il poursuit ses études (le plus courant)",
        "**Titre vie privée et familiale** s'il vit en France depuis l'âge de 13 ans (procédure simplifiée)",
        "**Titre salarié** s'il a un contrat de travail solide",
      ],
    },
    {
      type: "h2",
      texte: "La passerelle vers la naturalisation française : ce qu'il faut anticiper",
      id: "passerelle-naturalisation",
    },
    {
      type: "p",
      texte: "Beaucoup de familles de passeport talent ignorent qu'elles peuvent demander la **naturalisation française par décret** plus rapidement que le régime classique. Voici les conditions et l'anticipation à prévoir.",
    },
    { type: "p", texte: "**Le délai de résidence en 2026**" },
    {
      type: "p",
      texte: "Le régime classique exige **5 ans de résidence régulière** en France. MAIS le passeport talent et son titre famille accompagnante bénéficient d'un délai **réduit à 2 ans** dans certains cas (cf. article 21-18 du code civil) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les chercheurs talent qui ont accompli 2 années d'études supérieures en France",
        "Les titulaires ayant rendu des **services importants à la France** (innovation, économie, culture)",
        "Les titulaires d'un titre talent à haute qualification depuis 2 ans",
      ],
    },
    { type: "p", texte: "Pour les autres cas, c'est le délai de 5 ans qui s'applique." },
    { type: "p", texte: "**Les conditions à remplir**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Stabilité de la résidence** : 5 ans (ou 2 ans selon cas) sous titre régulier en France",
        "**Niveau de langue B1 minimum** : DELF B1 ou TCF B1 (à passer dès maintenant)",
        "**Test civique** : 32 bonnes réponses sur 40 (80%) au QCM de connaissances civiques",
        "**Insertion professionnelle stable** : CDI ou activité régulière prouvée",
        "**Casier judiciaire vierge** : bulletin n°2 vide",
        "**Pas de dette fiscale** : impôts à jour, déclarations complètes",
        "**Assimilation à la communauté française** : entretien individuel en préfecture",
      ],
    },
    { type: "p", texte: "**Anticiper le test civique dès maintenant**" },
    {
      type: "p",
      texte: "Le **test civique de naturalisation** est devenu en 2026 l'un des principaux points de blocage. Il porte sur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les valeurs de la République (laïcité, égalité, devise)",
        "Les institutions françaises (Président, Parlement, Justice)",
        "L'histoire de France (dates clés, personnages)",
        "La vie en société (santé, école, travail)",
        "La géographie française (régions, fleuves, climat)",
      ],
    },
    {
      type: "p",
      texte: "**Notre conseil** : ne sous-estimez pas le test. 1 candidat sur 3 échoue au premier passage. Préparez-vous **6 à 8 mois avant** votre demande, en utilisant des plateformes spécialisées avec QCM, fiches et simulations chronométrées.",
    },
    {
      type: "p",
      texte: "Pour vos enfants nés en France ou arrivés mineurs, des règles particulières existent : voir notre [article sur la naturalisation des enfants mineurs](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration).",
    },
    { type: "p", texte: "**Le calendrier idéal pour une famille passeport talent**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Année 1-2** : installation, scolarisation, premier emploi du conjoint",
        "**Année 3** : début de la préparation linguistique (B1) et civique",
        "**Année 4** : finalisation des documents (impôts, casier, ressources), préparation du dossier",
        "**Année 5** : dépôt de la demande de naturalisation à la préfecture (ou plateforme dématérialisée)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le titre **\"famille accompagnante\" du passeport talent** est l'un des dispositifs les plus protecteurs du droit français des étrangers en 2026 : durée alignée jusqu'à 4 ans, droit au travail immédiat du conjoint, scolarisation des enfants, mobilité Schengen et passerelle accélérée vers la naturalisation. Mais ce confort dépend de **3 conditions strictes** : un mariage ou PACS solide, une vie commune effective documentée, et des ressources suffisantes du titulaire. En cas de divorce, de perte d'emploi ou de décès, les règles se durcissent rapidement, anticipez en gardant tous vos justificatifs et en construisant votre intégration personnelle (langue, travail, réseau). Et surtout, ne perdez pas de vue **l'horizon naturalisation** : dès la 3ème année, commencez à préparer le test civique de naturalisation. Il est devenu en 2026 le principal facteur de blocage, et 1 candidat sur 3 échoue au premier passage. Inscrivez-vous gratuitement sur [testciviquefrance.fr](/signup) pour accéder aux simulations chronométrées, aux fiches mémo et aux 1500+ questions officielles. C'est le geste qui transforme un projet familial en réalité française.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon conjoint peut-il travailler dès son arrivée en France avec un titre famille accompagnante ?",
      reponse: "Oui, immédiatement et sans autorisation préalable. Dès la validation du VLS-TS ou la remise du récépissé ANEF, le conjoint peut signer un CDI, un CDD, faire de l'intérim, créer une entreprise ou être auto-entrepreneur. C'est le grand avantage par rapport au regroupement familial classique.",
    },
    {
      question: "Que se passe-t-il en cas de divorce après 2 ans de mariage et 2 ans en France ?",
      reponse: "Le titre famille accompagnante n'est généralement pas renouvelé après moins de 3 ans en France. Le conjoint doit alors chercher un autre fondement (changement de statut salarié, étudiant, ou vie privée et familiale s'il a tissé des liens forts en France). Exception : en cas de violences conjugales, le titre est conservé.",
    },
    {
      question: "Mes parents peuvent-ils me rejoindre avec un titre famille accompagnante ?",
      reponse: "Non. Le titre famille accompagnante ne concerne que le conjoint (mariage ou PACS) et les enfants mineurs. Pour faire venir vos parents (ascendants), vous devez passer par le regroupement familial classique (conditions plus strictes) ou un visa visiteur de longue durée.",
    },
    {
      question: "Combien d'années en France avant de pouvoir demander la naturalisation française ?",
      reponse: "En règle générale, 5 ans de résidence régulière sont exigés. Mais certains titulaires de passeport talent à haute qualification ou ayant rendu des services importants à la France peuvent demander la naturalisation après seulement 2 ans (article 21-18 du code civil). Dans tous les cas, le test civique reste obligatoire.",
    },
    {
      question: "Mon enfant a 17 ans et arrive en France : que faire à sa majorité ?",
      reponse: "À 18 ans, votre enfant ne peut plus rester sous titre famille accompagnante. S'il poursuit ses études, il bascule sur un titre étudiant (procédure simple). S'il vit en France depuis l'âge de 13 ans ou s'il a un emploi solide, il peut prétendre à un titre vie privée et familiale ou salarié. Anticipez le changement de statut 3 mois avant ses 18 ans.",
    },
  ],
};

export default article;
