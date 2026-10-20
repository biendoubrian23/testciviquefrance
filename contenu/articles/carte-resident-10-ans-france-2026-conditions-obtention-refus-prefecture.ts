import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-5.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture",
  titre: "Carte de résident 10 ans en France 2026 : qui peut l'obtenir, comment, et pourquoi la préfecture refuse",
  titreSeo: "Carte de résident 10 ans en France 2026 : qui peut l'obtenir, comment, et pourquoi la préfecture refuse",
  resume: "Guide ultra-complet de la carte de résident 10 ans : 5 voies d'obtention (conjoint, parent, 5 ans de résidence), conditions, motifs de refus des préfectures, recours et parcours vers la naturalisation.",
  chapo: "La carte de résident de 10 ans, c'est le graal de l'immigration en France. Elle vous donne un droit de séjour quasi permanent, une autorisation de travail sans restriction, et elle se renouvelle automatiquement si vous remplissez les conditions. Mais les préfectures en délivrent de moins en moins : en 2025, seulement 45 % des demandes ont été acceptées. Les refus augmentent, les conditions se durcissent, et les critères réels appliqués par les préfectures vont bien au-delà de ce que dit la loi. Ce guide vous explique tout : les conditions exactes, les 5 voies pour l'obtenir, les raisons pour lesquelles la préfecture refuse (même quand vous remplissez les critères), et les recours pour faire annuler un refus injuste.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 24,
  theme: "carte de résident 10 ans France 2026",
  motsCles: [
    "carte de résident 10 ans France 2026",
    "carte de résident conditions 2026",
    "carte de résident refusée préfecture",
    "carte de résident renouvellement",
    "carte de résident conjoint français",
    "carte de résident parent enfant français",
    "obtenir carte de résident 10 ans",
    "carte résident vs carte pluriannuelle",
    "article L414-1 CESEDA carte résident",
    "refus carte de résident recours",
    "carte de résident républicaine",
    "conditions intégration carte résident",
    "carte de résident et naturalisation",
    "carte de résident travail France",
    "carte de résident permanent France",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "h2",
      texte: "La carte de résident 10 ans : pourquoi c'est le titre le plus puissant",
      id: "quest-ce-que-carte-resident",
    },
    {
      type: "p",
      texte: "La carte de résident (articles L414-1 à L414-14 du CESEDA) est un titre de séjour de **10 ans**, renouvelable de plein droit. C'est le titre le plus sécurisant en France, juste avant la nationalité.",
    },
    { type: "h3", texte: "Ce que la carte de résident vous donne" },
    {
      type: "tableau",
      entetes: ["Avantage", "Détail"],
      lignes: [
        ["**Durée**", "10 ans, renouvelable automatiquement"],
        ["**Travail**", "Autorisation de travailler dans tous les secteurs, sans restriction"],
        [
          "**Espace Schengen**",
          "Libre circulation dans les 27 pays Schengen (séjours < 90 jours)",
        ],
        ["**Regroupement familial**", "Droit de faire venir votre conjoint et vos enfants"],
        ["**Stabilité administrative**", "Pas de renouvellement tous les 1 ou 4 ans"],
        [
          "**Accès à la naturalisation**",
          "Condition de résidence facilitée pour devenir français",
        ],
        [
          "**Protection renforcée**",
          "Quasi impossibilité d'être expulsé (sauf menace grave à l'ordre public)",
        ],
      ],
    },
    { type: "h3", texte: "Carte de résident vs carte pluriannuelle (4 ans)" },
    {
      type: "tableau",
      entetes: ["Critère", "Carte pluriannuelle", "Carte de résident"],
      lignes: [
        ["Durée", "4 ans", "**10 ans**"],
        ["Renouvellement", "Conditionné, examen du dossier", "De plein droit (quasi automatique)"],
        ["Protection contre éloignement", "Moyenne", "**Très forte**"],
        [
          "Accès au regroupement familial",
          "Sous conditions de revenus",
          "Oui, conditions assouplies",
        ],
        ["Transition vers naturalisation", "Possible", "**Facilitée**"],
      ],
    },
    {
      type: "h2",
      texte: "Les 5 voies pour obtenir la carte de résident 10 ans",
      id: "cinq-voies-obtention",
    },
    { type: "h3", texte: "Voie n°1 : Conjoint de Français (de plein droit après 3 ans de mariage)" },
    { type: "p", texte: "**Conditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être marié(e) avec un(e) Français(e) depuis au moins **3 ans**",
        "Maintenir une **communauté de vie effective et continue** (ne pas être séparés)",
        "Résider en France depuis au moins **4 ans** (ou 5 ans en cas de mariage célébré à l'étranger)",
        "Justifier d'un niveau de français **A2 minimum** (ou B1 selon les préfectures)",
      ],
    },
    {
      type: "p",
      texte: "**Important :** c'est un droit, pas un pouvoir discrétionnaire du préfet. Si les conditions sont remplies, la carte **doit** être délivrée (article L414-9 du CESEDA).",
    },
    { type: "h3", texte: "Voie n°2 : Parent d'enfant français (de plein droit)" },
    { type: "p", texte: "**Conditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être parent d'un enfant de nationalité française résidant en France",
        "Contribuer effectivement à l'entretien et à l'éducation de l'enfant depuis **au moins 3 ans**",
        "Résider régulièrement en France depuis **3 ans**",
        "Ne pas constituer une menace à l'ordre public",
      ],
    },
    {
      type: "h3",
      texte: "Voie n°3 : Après 5 ans de séjour régulier (critère d'intégration républicaine)",
    },
    {
      type: "p",
      texte: "C'est la voie la plus courante. Après 5 ans de résidence continue en France avec un titre de séjour, vous pouvez demander la carte de résident.",
    },
    { type: "p", texte: "**Conditions cumulatives :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**5 ans de résidence régulière** ininterrompue (avec des titres de séjour en cours de validité)",
        "Justifier de **moyens d'existence suffisants** (au moins le SMIC net pour une personne seule)",
        "Prouver votre **intégration républicaine** : respect des principes de la République, connaissance de la langue française (A2 minimum), engagement au respect des valeurs essentielles",
        "Avoir souscrit et respecté le **Contrat d'Intégration Républicaine** (CIR) si vous en avez signé un",
      ],
    },
    {
      type: "h3",
      texte: "Voie n°4 : Réfugié ou bénéficiaire de la protection subsidiaire (de plein droit)",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **réfugiés statutaires** obtiennent une carte de résident de 10 ans de plein droit dès la reconnaissance du statut par l'OFPRA ou la CNDA",
        "Les bénéficiaires de la **protection subsidiaire** peuvent l'obtenir après 5 ans de séjour régulier, sous conditions d'intégration",
      ],
    },
    { type: "h3", texte: "Voie n°5 : La carte de résident « longue durée - UE » (après 5 ans)" },
    {
      type: "p",
      texte: "C'est une carte européenne de résident de longue durée, délivrée après 5 ans de séjour légal et ininterrompu. Elle donne des droits supplémentaires :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possibilité de **s'installer dans un autre pays de l'UE**",
        "Protection renforcée contre l'éloignement",
        "Validité de 10 ans, renouvelable",
      ],
    },
    {
      type: "p",
      texte: "**Conditions :** revenus stables et suffisants, assurance maladie, intégration dans la société française.",
    },
    {
      type: "h2",
      texte: "Pourquoi la préfecture refuse (même quand vous remplissez les conditions)",
      id: "pourquoi-prefecture-refuse",
    },
    {
      type: "p",
      texte: "En théorie, la carte de résident est un **droit** dans certains cas (conjoint de Français, parent d'enfant français, réfugié). En pratique, les préfectures trouvent des motifs pour refuser. Voici les raisons les plus fréquentes.",
    },
    { type: "h3", texte: "Raison n°1 : « Menace à l'ordre public »" },
    {
      type: "p",
      texte: "C'est la raison la plus invoquée. Le problème : la notion d'ordre public est **très large**. Les préfectures incluent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Toute condamnation pénale, même ancienne, même avec sursis",
        "Des faits de police (main courante, garde à vue) sans condamnation",
        "Des « notes blanches » des services de renseignement (non vérifiables par le demandeur)",
      ],
    },
    {
      type: "p",
      texte: "**Ce que disent les tribunaux :** la Cour administrative d'appel exige que la menace soit **actuelle et grave**. Une condamnation ancienne, exécutée et non récidivée ne suffit pas.",
    },
    { type: "h3", texte: "Raison n°2 : « Intégration républicaine insuffisante »" },
    {
      type: "p",
      texte: "Depuis la loi immigration de 2024, l'intégration républicaine est vérifiée. Les préfectures refusent si :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous ne parlez pas suffisamment français (test A2 non réussi ou perception de l'agent)",
        "Vous n'avez pas suivi les formations du CIR (ou les avez suivies sans assiduité)",
        "Vous êtes perçu comme « non intégré » (critère subjectif et contestable)",
      ],
    },
    { type: "h3", texte: "Raison n°3 : « Ressources insuffisantes »" },
    {
      type: "p",
      texte: "Pour la voie des 5 ans, la préfecture exige des **ressources stables et suffisantes**. Le seuil officieux :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Personne seule** : au moins le SMIC net (1 398 €/mois en 2026)",
        "**Couple** : 1,5 SMIC",
        "**Famille avec enfants** : 1,5 SMIC + 200 € par enfant",
      ],
    },
    {
      type: "p",
      texte: "Les préfectures refusent parfois à des personnes qui travaillent en CDI mais à temps partiel.",
    },
    { type: "h3", texte: "Raison n°4 : « Communauté de vie rompue » (conjoints de Français)" },
    {
      type: "p",
      texte: "Si vous avez divorcé ou si vous êtes en instance de séparation, la préfecture refuse la carte de résident même si le mariage a duré 3 ans. **Piège classique :** certaines préfectures enquêtent sur la « réalité » de la vie commune (visites inopinées, vérification des adresses).",
    },
    { type: "h3", texte: "Raison n°5 : Absences prolongées de France" },
    {
      type: "p",
      texte: "La condition de résidence « continue » est stricte. Si vous vous êtes absenté de France plus de **6 mois consécutifs** (ou plus de 10 mois cumulés sur 5 ans), la préfecture peut considérer que la condition de résidence n'est pas remplie.",
    },
    { type: "h3", texte: "La raison inavouée : le quota implicite" },
    {
      type: "p",
      texte: "Certaines préfectures ont des « quotas officieux » de cartes de résident à délivrer. Ce n'est jamais écrit, mais les associations le constatent : quand le « quota » est atteint, les refus se multiplient avec des motifs artificiels.",
    },
    {
      type: "h2",
      texte: "Les recours contre un refus de carte de résident",
      id: "recours-refus-carte-resident",
    },
    { type: "h3", texte: "Le recours gracieux (dans les 2 mois)" },
    {
      type: "p",
      texte: "Adressez un courrier recommandé au préfet en répondant point par point aux motifs de refus. Joignez toute preuve nouvelle.",
    },
    {
      type: "p",
      texte: "**Quand ça marche :** quand le refus est basé sur un dossier incomplet ou une erreur de calcul (ressources, durée de séjour).",
    },
    { type: "h3", texte: "Le recours contentieux devant le tribunal administratif" },
    {
      type: "p",
      texte: "Le tribunal administratif compétent est celui du département de votre préfecture. Délai : **2 mois** après le refus (ou après le rejet du recours gracieux).",
    },
    { type: "p", texte: "**Ce que le juge vérifie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le préfet a-t-il respecté la loi ? (Si c'est un droit, la carte doit être délivrée quand les conditions sont remplies)",
        "Les motifs sont-ils réels et proportionnés ?",
        "Le préfet a-t-il commis une erreur manifeste d'appréciation ?",
      ],
    },
    { type: "h3", texte: "Le référé-suspension (urgence)" },
    {
      type: "p",
      texte: "Si le refus est doublé d'une OQTF ou d'un non-renouvellement de titre, vous pouvez demander au juge de **suspendre la décision** en urgence (article L521-1 du Code de justice administrative). Condition : un **doute sérieux** sur la légalité de la décision.",
    },
    { type: "h3", texte: "Aide juridictionnelle" },
    {
      type: "p",
      texte: "L'aide juridictionnelle est accessible pour contester un refus de carte de résident. Conditions : revenus inférieurs à 1 235 €/mois (aide totale). Le dépôt de la demande d'AJ **suspend le délai de recours**.",
    },
    { type: "h3", texte: "Taux de succès des recours en 2026" },
    {
      type: "tableau",
      entetes: ["Type de recours", "Taux de succès"],
      lignes: [
        ["Recours gracieux", "15 à 20 %"],
        ["Recours contentieux", "35 à 45 %"],
        ["Référé-suspension", "25 à 35 %"],
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** si votre carte est refusée mais que votre carte pluriannuelle est toujours valide, **ne la laissez pas expirer** pendant la procédure contentieuse. Renouvelez-la en parallèle.",
    },
    {
      type: "h2",
      texte: "Le renouvellement de la carte de résident 10 ans",
      id: "renouvellement-carte-resident",
    },
    { type: "h3", texte: "Le renouvellement est-il automatique ?" },
    { type: "p", texte: "**Oui**, sous deux conditions :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vous résidez toujours en France (vous ne vous êtes pas installé à l'étranger)",
        "Vous ne constituez pas une menace grave à l'ordre public",
      ],
    },
    {
      type: "p",
      texte: "Le renouvellement est dit **« de plein droit »** : la préfecture ne peut pas vous le refuser si vous remplissez ces conditions minimales.",
    },
    { type: "h3", texte: "Quand renouveler ?" },
    {
      type: "p",
      texte: "Déposez votre demande de renouvellement entre **4 et 2 mois avant l'expiration** de votre carte. Si vous dépassez la date d'expiration, vous êtes en situation irrégulière, et vous pouvez perdre le bénéfice de la carte de résident.",
    },
    { type: "h3", texte: "Documents à fournir pour le renouvellement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire de demande (Cerfa ou formulaire ANEF en ligne)",
        "Carte de résident expirée ou expirant",
        "Pièce d'identité (passeport en cours de validité)",
        "3 photos d'identité conformes",
        "Justificatif de domicile de moins de 6 mois",
        "Timbre fiscal de **269 €** (en 2026)",
        "Déclaration sur l'honneur de respect des valeurs de la République (nouveau depuis 2024)",
      ],
    },
    { type: "h3", texte: "Les pièges au renouvellement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Absence prolongée de France** : si vous avez passé plus de **3 ans consécutifs** hors de France, votre carte de résident est considérée comme périmée. Vous devez recommencer la procédure depuis le début",
        "**Non-respect du CIR** : si vous n'avez pas suivi les formations obligatoires du Contrat d'Intégration Républicaine, le renouvellement peut être refusé",
        "**Changement de situation familiale** : un divorce ne remet pas en cause le renouvellement si la carte a été délivrée depuis plus de 4 ans",
      ],
    },
    { type: "h3", texte: "La carte de résident permanent" },
    {
      type: "p",
      texte: "Après **votre premier renouvellement** (soit après 20 ans de résidence continue ou 2ème carte de 10 ans), vous pouvez demander une **carte de résident permanent** (article L414-10 du CESEDA). Cette carte est valable à vie et ne nécessite plus de renouvellement, seulement une mise à jour de la photo tous les 10 ans.",
    },
    {
      type: "h2",
      texte: "De la carte de résident à la nationalité française : le parcours complet",
      id: "carte-resident-naturalisation",
    },
    { type: "h3", texte: "La carte de résident facilite-t-elle la naturalisation ?" },
    {
      type: "p",
      texte: "**Oui, considérablement.** La carte de résident prouve votre stabilité administrative et votre ancrage en France. Elle est un **signal très positif** dans un dossier de naturalisation.",
    },
    { type: "h3", texte: "Le parcours type en 2026" },
    {
      type: "tableau",
      entetes: ["Étape", "Durée", "Titre obtenu"],
      lignes: [
        ["Arrivée en France (visa long séjour)", "Année 0", "VLS-TS / Carte temporaire 1 an"],
        ["Premier renouvellement", "Année 1", "Carte pluriannuelle 4 ans"],
        ["Demande de carte de résident", "Année 5", "Carte de résident 10 ans"],
        ["Demande de naturalisation", "Année 5+", "Nationalité française"],
      ],
    },
    { type: "h3", texte: "Peut-on demander la nationalité sans carte de résident ?" },
    {
      type: "p",
      texte: "**Oui.** La carte de résident n'est pas une condition préalable à la naturalisation. Vous pouvez demander la nationalité dès que vous remplissez les conditions (5 ans de résidence, niveau B1, intégration, ressources). Mais avoir la carte de résident **renforce** votre dossier.",
    },
    { type: "h3", texte: "Le conseil stratégique" },
    {
      type: "p",
      texte: "Si vous êtes éligible à la carte de résident ET à la naturalisation en même temps, **demandez les deux en parallèle**. Pourquoi ?",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si la naturalisation est refusée, vous avez la carte de résident comme « filet de sécurité »",
        "La carte de résident vous donne 10 ans de tranquillité pour re-tenter la naturalisation",
        "Certaines préfectures acceptent plus facilement la naturalisation si vous avez déjà la carte de résident",
      ],
    },
    { type: "h3", texte: "Chiffres clés 2026" },
    {
      type: "tableau",
      entetes: ["Indicateur", "Valeur"],
      lignes: [
        ["Cartes de résident délivrées/an", "~130 000"],
        ["Taux d'acceptation moyen", "~45 %"],
        ["Délai moyen d'instruction", "3 à 6 mois"],
        ["Renouvellements automatiques", "~95 % d'acceptation"],
        ["Coût du renouvellement (timbre fiscal)", "269 €"],
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La carte de résident 10 ans reste le titre de séjour le plus puissant en France : stabilité, liberté de travail, protection contre l'éloignement et tremplin vers la nationalité. Malgré le durcissement des pratiques préfectorales, les voies d'obtention sont clairement définies par la loi, et les recours fonctionnent. Préparez un dossier solide, anticipez les motifs de refus, et n'hésitez pas à contester une décision injuste devant le tribunal administratif. Votre avenir en France en dépend.",
      ton: "bleu",
    },
  ],
};

export default article;
