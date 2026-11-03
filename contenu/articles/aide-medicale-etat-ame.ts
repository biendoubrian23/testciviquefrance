import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 03/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « aide médicale d'état » (1 k à 10 k recherches par mois,
 * Planificateur de mots clés, France, toutes les langues, 03/11/2026), avec
 * « ame conditions » (100 à 1 k). Famille vie en France (santé). Aucune page
 * dédiée sur le site ; l'article `titre-sejour-etranger-malade-…` en parlait
 * dans une section, réécrite le même jour pour renvoyer ici.
 * Sources lues le 03/11/2026 : Légifrance (code de l'action sociale et des
 * familles, articles L. 251-1 et L. 251-2, versions en vigueur) ;
 * service-public F3079 (vérifiée le 01/04/2026) ; ameli.fr, page « L'aide
 * médicale de l'État » (plafonds au 01/04/2026).
 */
const article: Article = {
  slug: "aide-medicale-etat-ame",
  titre: "Aide médicale de l'État (AME) : les 3 conditions, ce qu'elle rembourse et comment la demander",
  titreSeo: "Aide médicale d'État (AME) : conditions, demande",
  resume: "L'AME en 2026 : qui y a droit, le plafond de ressources, les soins pris en charge ou non, la demande à la CPAM et le renouvellement.",
  chapo: "L'aide médicale de l'État (AME) prend en charge les soins des étrangers ==sans titre de séjour== qui vivent en France depuis plus de 3 mois et ont de faibles ressources. Elle se demande en personne à la caisse d'assurance maladie et dure 1 an. Voici les conditions exactes, ce qu'elle couvre, et ce qu'elle ne couvre pas.",
  publieLe: "2026-11-03",
  modifieLe: "2026-11-03",
  minutes: 7,
  theme: "aide médicale de l'État",
  motsCles: [
    "aide médicale d'état",
    "aide médicale de l'état",
    "AME conditions",
    "AME plafond ressources 2026",
    "demande AME CPAM",
    "renouvellement AME",
    "AME soins pris en charge",
    "carte AME",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/aide-medicale-etat-ame.webp",
    alt: "Façade d'un immeuble de bureaux de l'Assurance maladie, avec l'enseigne au-dessus de l'entrée",
    largeur: 1200,
    hauteur: 900,
    credit: "Erwmat, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:CPAM_du_Val-de-Marne_%C3%A0_Cr%C3%A9teil.JPG",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que l'aide médicale de l'État ?",
    },
    {
      type: "p",
      texte: "L'AME, c'est une prise en charge des frais de santé pour les étrangers qui vivent en France sans titre de séjour. Le titre de séjour, c'est la carte qui permet de vivre en France de façon régulière. L'AME est prévue par la loi, à l'article L. 251-1 du code de l'action sociale et des familles ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074069/LEGISCTA000006157607)).",
    },
    {
      type: "p",
      texte: "Avec l'AME, vous ne payez pas d'avance chez le médecin, à l'hôpital ou à la pharmacie, pour les soins qu'elle couvre. Elle est gérée par la CPAM, la caisse primaire d'assurance maladie : c'est l'organisme public qui rembourse les soins dans votre département.",
    },
    {
      type: "h2",
      texte: "Qui a droit à l'AME ? Les 3 conditions",
    },
    {
      type: "p",
      texte: "Il faut remplir les trois conditions en même temps ([service-public, F3079](https://www.service-public.gouv.fr/particuliers/vosdroits/F3079) ; [ameli.fr](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vivre en France sans titre de séjour.** Une personne qui a un titre de séjour relève de l'Assurance maladie ordinaire, pas de l'AME. C'est aussi le cas avec un récépissé, le papier qui prouve qu'une demande de titre est en cours.",
        "**Vivre en France depuis plus de 3 mois, sans interruption.** Vous devez le prouver, par exemple avec une facture, un bail, une attestation d'hébergement ou un document médical daté.",
        "**Avoir des ressources sous un plafond.** On compte vos ressources des 12 derniers mois, et celles de la personne avec qui vous vivez en couple si elle est aussi sans titre de séjour.",
      ],
    },
    {
      type: "tableau",
      entetes: ["Personnes dans le foyer", "Plafond par an (Hexagone)", "Plafond par an (outre-mer)"],
      lignes: [
        ["1", "10 421 €", "11 599 €"],
        ["2", "15 632 €", "17 398 €"],
        ["3", "18 758 €", "20 878 €"],
        ["4", "21 885 €", "24 358 €"],
        ["Par personne en plus", "4 169 €", "4 640 €"],
      ],
      legende: "Plafonds applicables au 1er avril 2026. Sources : ameli.fr et service-public F3079, lus le 03/11/2026.",
    },
    {
      type: "p",
      texte: "Pour une personne seule dans l'Hexagone, 10 421 € par an font environ ==868 € par mois==. Le plafond est le même que celui de la complémentaire santé solidaire (CSS), l'aide qui paie la mutuelle des personnes aux faibles revenus (article L. 251-1).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Les enfants mineurs** n'attendent pas les 3 mois : ils ont droit à l'AME dès leur arrivée (service-public, F3079).",
        "**Les demandeurs d'asile** n'ont pas droit à l'AME. Après 3 mois en France, ils ont droit à l'Assurance maladie (la PUMA, la protection universelle maladie). Avant, les soins urgents sont pris en charge (F3079).",
        "**À Mayotte, l'AME ne s'applique pas** (F3079). Renseignez-vous auprès de la caisse de sécurité sociale de Mayotte ou d'un hôpital.",
      ],
    },
    {
      type: "h2",
      texte: "Quels soins l'AME rembourse-t-elle ?",
    },
    {
      type: "p",
      texte: "L'AME couvre à 100 % les soins médicaux et l'hôpital, dans la limite des tarifs de la Sécurité sociale. Vous n'avancez pas les frais (F3079). Elle couvre aussi votre conjoint ou la personne avec qui vous vivez. Elle couvre enfin vos enfants de moins de 16 ans, ou de moins de 20 ans s'ils font des études.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Ce qui n'est pas pris en charge** : les médicaments à service médical rendu faible (ceux remboursés à 15 %), les cures thermales, et les actes de procréation médicalement assistée (F3079).",
        "**Le délai de 9 mois** : certains soins non urgents et programmés ne sont pris en charge qu'après ==9 mois d'AME== pour un adulte. La loi prévoit ce délai à l'article L. 251-2 du code de l'action sociale et des familles. Il ne vaut jamais pour les mineurs.",
        "**Les soins des 90 jours avant la demande** peuvent être pris en charge après coup, si vous gardez les justificatifs (ameli.fr).",
        "**Pas de médecin traitant obligatoire** : avec l'AME, vous n'êtes pas tenu de déclarer un médecin traitant (ameli.fr).",
      ],
    },
    {
      type: "image",
      src: "/images/articles/aide-medicale-etat-ame.webp",
      alt: "Entrée d'un bâtiment de l'Assurance maladie, avec un bandeau bleu et une rampe d'accès",
      legende: "La première demande d'AME se dépose en personne, à l'accueil de la caisse d'assurance maladie.",
      credit: "Erwmat, via Wikimedia Commons",
      licence: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:CPAM_du_Val-de-Marne_%C3%A0_Cr%C3%A9teil.JPG",
      largeur: 1200,
      hauteur: 900,
    },
    {
      type: "h2",
      texte: "Comment demander l'AME, étape par étape ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Remplissez le formulaire** de demande d'AME (cerfa n° 17620). Un cerfa, c'est un formulaire officiel numéroté. Il se télécharge sur ameli.fr ou service-public.",
        "**Réunissez vos justificatifs** : votre identité (passeport, acte de naissance) et celle des personnes à charge. Ajoutez la preuve de 3 mois en France, vos ressources des 12 derniers mois et votre adresse.",
        "**Pas d'adresse ?** Vous pouvez être domicilié dans un CCAS, le centre communal d'action sociale de la mairie, ou dans une association agréée. Elle reçoit votre courrier et peut vous aider à faire la demande (F3079).",
        "**Déposez la première demande en personne** à l'accueil de la CPAM de votre lieu de résidence. Le dépôt en personne sert à vérifier que vous vivez bien en France. Dans certains départements (dont Paris, le Nord et la Seine-Saint-Denis), un accueil précis est désigné : votre CPAM vous l'indique.",
        "**Autres lieux possibles** : une maison France Services, ou l'hôpital ou la PASS où vous êtes soigné. La PASS, c'est la permanence d'accès aux soins de santé, un service de l'hôpital public pour les personnes sans couverture. L'hôpital transmet votre dossier sous 8 jours.",
        "**Attendez la décision** : la CPAM a ==2 mois== pour répondre. Sans réponse au bout de 2 mois, c'est un refus (F3079).",
        "**Retirez la carte d'admission** en personne, quand la CPAM vous convoque. Elle porte votre photo. Vous la montrez au médecin, au pharmacien et à l'hôpital. Ce n'est pas une carte Vitale (ameli.fr).",
      ],
    },
    {
      type: "p",
      texte: "Une personne qui ne peut pas se déplacer (handicap, maladie) peut envoyer sa demande avec une attestation sur l'honneur qui explique pourquoi (F3079).",
    },
    {
      type: "h2",
      texte: "Combien de temps dure l'AME, et comment la renouveler ?",
    },
    {
      type: "p",
      texte: "L'AME est accordée pour ==1 an==, à partir du jour du dépôt de la demande. Le renouvellement n'est pas automatique. Déposez une nouvelle demande ==dans les 2 mois== qui précèdent la fin de vos droits ([ameli.fr](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame)). Pour un renouvellement, vous pouvez envoyer le dossier par courrier à la caisse, sans vous déplacer.",
    },
    {
      type: "p",
      texte: "Si votre situation change et que vous obtenez un titre de séjour, vous quittez l'AME pour l'Assurance maladie ordinaire. Notre article sur [le médecin traitant et la carte Vitale](/articles/medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale) explique ce qui change alors.",
    },
    {
      type: "h2",
      texte: "Que faire si l'AME est refusée ou pas encore accordée ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Contester un refus** : vous avez ==2 mois== pour écrire à la CPAM. C'est le recours gracieux, une lettre qui demande de revoir la décision. Dans le même délai, vous pouvez saisir le tribunal administratif (F3079).",
        "**Vous soigner en urgence** : sans AME, les soins urgents à l'hôpital peuvent être pris en charge. Ce sont les soins sans lesquels votre vie est en danger, ou votre santé gravement et durablement atteinte. Demandez au service social de l'hôpital.",
        "**Consulter sans couverture** : la PASS de l'hôpital public reçoit les personnes qui n'ont aucune couverture santé.",
        "**Appeler les secours** : le 15 (SAMU) et le 112 répondent à tous, sans condition de papiers. Notre article sur [les numéros d'urgence](/articles/numeros-urgence-france) les détaille.",
      ],
    },
    {
      type: "encadre",
      titre: "AME et titre de séjour « étranger malade » : deux choses différentes",
      texte: "L'AME paie des soins. Elle ne donne aucun droit au séjour et ne protège pas d'une mesure d'éloignement.\nUne personne gravement malade, sans traitement possible dans son pays, peut demander un titre de séjour pour soins. La préfecture, le service de l'État dans le département, décide après l'avis de médecins de l'OFII (l'Office français de l'immigration et de l'intégration). Notre guide du [titre de séjour étranger malade](/articles/titre-sejour-etranger-malade-raisons-sante-2026) explique cette démarche. Pour un cas personnel, adressez-vous à une association comme le Comede ou La Cimade.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "La santé, un thème de l'examen civique",
    },
    {
      type: "p",
      texte: "Si votre situation est un jour régularisée, l'examen civique vous attendra pour la carte de séjour pluriannuelle, la carte de résident ou la naturalisation. Son programme comprend « l'accès aux soins » : le parcours de santé, l'assurance maladie, les droits du patient. Vous pouvez [vérifier en une minute si l'examen vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "qcm",
      thematique: "Vivre dans la société française",
      question: "Un médecin peut-il dire à votre employeur de quoi vous êtes malade ?",
      choix: [
        "Oui, si l'employeur le demande",
        "Non, le médecin est tenu au secret médical",
        "Oui, si vous êtes en arrêt maladie",
        "Seulement par écrit",
      ],
      reponse: 1,
      explication: "Le secret médical protège tout patient : le médecin ne peut pas révéler votre état de santé à un tiers. Les droits du patient, dont la confidentialité, font partie du programme de l'examen civique. Ceci est une question type, pas une question de l'examen officiel.",
    },
  ],
  faq: [
    {
      question: "Quelles sont les conditions pour avoir l'aide médicale d'état ?",
      reponse: "Il faut vivre en France sans titre de séjour, depuis plus de 3 mois sans interruption. Les ressources doivent rester sous un plafond. Au 1er avril 2026, c'est 10 421 € par an pour une personne seule dans l'Hexagone, et 11 599 € outre-mer. Les enfants mineurs n'attendent pas les 3 mois. À Mayotte, l'AME ne s'applique pas.",
    },
    {
      question: "Où faire la demande d'AME ?",
      reponse: "La première demande se dépose en personne à l'accueil de la CPAM de votre lieu de résidence, avec le formulaire cerfa n° 17620 et vos justificatifs. Vous pouvez aussi passer par une maison France Services, ou par l'hôpital ou la PASS où vous êtes soigné, qui transmet le dossier sous 8 jours. La CPAM répond en 2 mois au plus.",
    },
    {
      question: "Combien de temps dure l'AME ?",
      reponse: "L'AME est accordée pour 1 an à partir du jour du dépôt de la demande. Elle ne se renouvelle pas toute seule : déposez une nouvelle demande dans les 2 mois qui précèdent la fin de vos droits. Le renouvellement peut s'envoyer par courrier à la caisse, sans rendez-vous.",
    },
    {
      question: "Qu'est-ce que l'AME ne rembourse pas ?",
      reponse: "L'AME ne prend pas en charge les médicaments remboursés à 15 %, les cures thermales et la procréation médicalement assistée. Pour un adulte, certains soins non urgents et programmés ne sont couverts qu'après 9 mois d'AME. Ce délai ne vaut jamais pour les mineurs. Le reste est pris en charge à 100 %, sans avance de frais.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : code de l'action sociale et des familles, articles L. 251-1 à L. 251-3 (droit à l'aide médicale de l'État), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074069/LEGISCTA000006157607",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Service-public : aide médicale de l'État (AME), fiche F3079, vérifiée le 01/04/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3079",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Assurance maladie (ameli.fr) : l'aide médicale de l'État, plafonds au 1er avril 2026, demande et renouvellement",
      url: "https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame",
      type: "officiel",
      luLe: "2026-11-03",
    },
  ],
};

export default article;
