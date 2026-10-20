import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/oqtf-enfants-france-2026-expulsion-enfants-francais-scolarises`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "oqtf-enfants-france-2026-expulsion-enfants-francais-scolarises",
  titre: "OQTF et enfants en France : peut-on vraiment être expulsé quand on a des enfants français ou scolarisés ?",
  titreSeo: "OQTF et enfants en France : peut-on vraiment être expulsé quand on a des enfants français ou scolarisés ?",
  resume: "\"J'ai des enfants en France, ils ne peuvent pas m'expulser.\" Vrai ou faux ? Réponse nuancée : quand l'article 8 CEDH protège réellement, quand il ne suffit pas, jurisprudence réelle et protocole d'urgence si vous venez de recevoir une OQTF avec des enfants en France.",
  chapo: "\"Ils ne peuvent pas m'expulser, j'ai des enfants en France.\" Cette phrase, on l'entend souvent. Elle est partiellement vraie, et partiellement fausse. En 2026, avec les nouvelles dispositions de la loi immigration, la protection liée aux enfants a été **durcie** dans certains cas. Ce guide décortique la réalité juridique : quand les enfants protègent réellement de l'expulsion, quand ils ne suffisent pas, et quoi faire concrètement si vous venez de recevoir une OQTF et que vous avez des enfants en France.",
  publieLe: "2026-04-12",
  modifieLe: "2026-04-12",
  minutes: 21,
  theme: "OQTF enfants France 2026",
  motsCles: [
    "OQTF enfants France 2026",
    "expulsion étranger enfant français France",
    "OQTF parent enfant français",
    "OQTF enfant scolarisé France",
    "protection expulsion parent France",
    "article 8 CEDH vie familiale France",
    "recours OQTF enfants France",
    "vie privée familiale OQTF protection",
    "expulsion mère enfant français",
    "OQTF protection famille France",
    "titre séjour vie privée familiale OQTF",
    "tribunal administratif OQTF enfants",
    "intérêt supérieur enfant OQTF France",
    "OQTF peut on rester France enfant",
    "régularisation OQTF enfant né France",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1529390079861-591de354faf5",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce que dit la loi : l'article 8 de la CEDH et le CESEDA",
      id: "ce-que-dit-la-loi",
    },
    {
      type: "p",
      texte: "Comprendre la protection liée aux enfants nécessite de connaître deux textes fondamentaux.",
    },
    { type: "h3", texte: "L'article 8 de la Convention Européenne des Droits de l'Homme (CEDH)" },
    {
      type: "p",
      texte: "L'article 8 garantit le **droit au respect de la vie privée et familiale**. Il est directement applicable en France et les juges l'invoquent régulièrement pour annuler des OQTF. Il stipule qu'une autorité publique ne peut s'immiscer dans la vie familiale sauf si c'est \"nécessaire dans une société démocratique\", c'est-à-dire proportionné.",
    },
    {
      type: "p",
      texte: "En pratique : **une OQTF qui séparerait durablement un parent de ses jeunes enfants en France peut être annulée** sur le fondement de l'article 8 par le tribunal administratif.",
    },
    { type: "h3", texte: "Le CESEDA : les \"protections absolues\" contre l'expulsion" },
    {
      type: "p",
      texte: "Le Code de l'entrée et du séjour des étrangers (CESEDA) liste des **catégories d'étrangers qui ne peuvent pas faire l'objet d'une expulsion** (article L. 631-3). Ces protections sont distinctes de l'OQTF, elles concernent l'expulsion forcée prononcée par arrêté préfectoral :",
    },
    {
      type: "tableau",
      entetes: ["Catégorie", "Protection"],
      lignes: [
        [
          "Parent d'un enfant français mineur **qui réside en France** et contribue à son entretien depuis la naissance",
          "Protection **quasi-absolue** (sauf menace grave pour l'ordre public)",
        ],
        ["Étranger résidant en France depuis l'âge de 13 ans", "Protection forte"],
        ["Étranger marié depuis au moins 3 ans à un Français", "Protection forte"],
        ["Étranger résidant en France depuis plus de 20 ans", "Protection quasi-absolue"],
      ],
    },
    {
      type: "encadre",
      texte: "**Attention** : Ces protections visent l'**expulsion forcée** (arrêté préfectoral d'expulsion). L'OQTF est techniquement une \"mesure d'éloignement\" différente, elle peut théoriquement viser des personnes protégées contre l'expulsion. En pratique, les juges appliquent le même raisonnement.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les cas où les enfants vous protègent réellement",
      id: "cas-ou-enfants-protegent",
    },
    {
      type: "p",
      texte: "La protection n'est pas automatique : elle dépend de plusieurs critères cumulatifs.",
    },
    { type: "h3", texte: "Cas 1 : Vous êtes parent d'un enfant français" },
    { type: "p", texte: "**Conditions pour que la protection soit forte :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre enfant est de nationalité française (soit par filiation, soit par double droit du sol)",
        "Votre enfant est mineur et réside en France",
        "Vous contribuez **effectivement** à son entretien et son éducation (pas seulement biologiquement)",
        "Vous avez une relation parentale réelle (même si vous n'êtes pas marié avec l'autre parent)",
      ],
    },
    {
      type: "p",
      texte: "Dans ce cas, le tribunal administratif annule systématiquement l'OQTF si elle conduirait à une séparation définitive. La Cour Administrative d'Appel de Paris a rappelé en 2025 : *\"L'intérêt supérieur de l'enfant commande que celui-ci puisse être élevé par ses deux parents sauf circonstances exceptionnelles.\"*",
    },
    { type: "h3", texte: "Cas 2 : Vous avez des enfants scolarisés en France depuis longtemps" },
    {
      type: "p",
      texte: "Un enfant scolarisé en France depuis **plus de 3 ans** constitue un lien fort avec le territoire. Ce n'est pas une protection absolue, mais c'est un argument qui a permis l'annulation de nombreuses OQTF.",
    },
    { type: "p", texte: "**Ce que les juges examinent :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'ancienneté de la scolarisation",
        "L'intégration de l'enfant (notes, activités, liens sociaux)",
        "L'impact d'un déracinement (retour dans un pays que l'enfant ne connaît pas)",
        "La situation de l'autre parent (en France ou à l'étranger)",
      ],
    },
    { type: "h3", texte: "Cas 3 : Famille reconstituée avec enfants français" },
    {
      type: "p",
      texte: "Si votre conjoint est français et que vous avez des enfants communs, la combinaison des liens conjugaux et parentaux crée une protection très forte. La jurisprudence est quasi-unanime pour annuler les OQTF dans ce cas.",
    },
    { type: "h3", texte: "Cas 4 : Enfant malade nécessitant des soins en France" },
    {
      type: "p",
      texte: "Si votre enfant souffre d'une maladie grave nécessitant des soins non disponibles dans votre pays d'origine, c'est une protection humanitaire forte. L'OFII émet généralement un avis médical favorable dans ces situations.",
    },
    {
      type: "h2",
      texte: "Les cas où les enfants ne suffisent pas",
      id: "cas-ou-enfants-ne-suffisent-pas",
    },
    {
      type: "p",
      texte: "C'est la partie que peu de gens veulent entendre, mais qu'il faut connaître pour se préparer correctement.",
    },
    { type: "h3", texte: "Cas 1 : Vous n'exercez pas réellement votre rôle parental" },
    {
      type: "p",
      texte: "Si vous avez un enfant en France mais que vous ne vivez pas avec lui, que vous ne payez pas de pension alimentaire, et que vous ne participez pas à son éducation au quotidien, la protection est très faible. Les juges examinent la **réalité** de la relation parentale, pas juste le fait biologique.",
    },
    { type: "h3", texte: "Cas 2 : Antécédents judiciaires graves" },
    {
      type: "p",
      texte: "La loi immigration 2024 a durci les critères : si vous avez été condamné pour certaines infractions graves (crimes, délits avec récidive, infractions terroristes), la protection liée aux enfants peut être écartée. Le préfet peut invoquer la \"menace grave pour l'ordre public\", exception prévue par la loi.",
    },
    { type: "h3", texte: "Cas 3 : L'autre parent peut s'occuper des enfants" },
    {
      type: "p",
      texte: "Si l'autre parent des enfants est en France avec un titre de séjour stable, les préfectures peuvent arguer que les enfants ne seront pas \"privés de toute vie familiale\", ils auront toujours un parent en France. C'est un argument contestable (l'enfant a droit à ses DEUX parents), mais il est parfois retenu.",
    },
    { type: "h3", texte: "Cas 4 : Vous venez d'arriver en France" },
    {
      type: "p",
      texte: "Si vous êtes arrivé récemment, que votre enfant est tout jeune, et que vous n'avez pas de liens établis en dehors du lien parentale, la protection est plus faible qu'une famille installée depuis 10 ans. **L'ancienneté des liens compte autant que leur nature.**",
    },
    { type: "h3", texte: "La loi immigration 2024 : ce qui a changé" },
    { type: "p", texte: "La loi du 26 janvier 2024 a introduit plusieurs durcissements :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suppression de certaines protections pour les personnes ayant commis des infractions à partir d'une liste élargie",
        "Réduction du délai de départ volontaire à 15 jours dans de nombreux cas",
        "Élargissement des cas où le juge administratif statue en 96 heures (procédure d'urgence)",
      ],
    },
    {
      type: "encadre",
      texte: "Ces changements ont été partiellement censurés par le Conseil Constitutionnel, mais plusieurs dispositions sont restées.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Vous avez reçu une OQTF avec des enfants : que faire concrètement",
      id: "que-faire-oqtf-avec-enfants",
    },
    {
      type: "p",
      texte: "Recevoir une OQTF quand on a des enfants en France est une situation de crise. Voici le protocole d'urgence.",
    },
    { type: "h3", texte: "Étape 1 : Ne pas paniquer et ne pas partir" },
    {
      type: "p",
      texte: "Une OQTF n'est pas une expulsion immédiate. Vous avez le droit de rester en France pendant le délai de recours (**30 jours** dans la plupart des cas, parfois 15 jours pour les OQTF sans délai de départ). Partir avant d'avoir épuisé vos recours serait une erreur.",
    },
    { type: "h3", texte: "Étape 2 : Contacter un avocat ou une association dans les 48 heures" },
    { type: "p", texte: "Le délai est court. Contactez immédiatement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Cimade** : permanences juridiques gratuites dans toute la France",
        "**France Terre d'Asile** : aide aux familles en situation précaire",
        "**Le GISTI** : spécialisé droit des étrangers",
        "Un **avocat spécialisé en droit des étrangers** (l'aide juridictionnelle est accessible)",
      ],
    },
    { type: "h3", texte: "Étape 3 : Rassemblez les preuves de vos liens familiaux" },
    { type: "p", texte: "Dans les 48 heures suivant la réception de l'OQTF, rassemblez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Actes de naissance des enfants + preuves de nationalité française (si applicable)",
        "Certificats de scolarité (avec mention de l'ancienneté)",
        "Preuves de contribution à l'entretien des enfants (dépenses, relevés bancaires)",
        "Photos, témoignages, lettres d'enseignants sur la relation parent-enfant",
        "Tout document prouvant votre ancienneté en France",
      ],
    },
    { type: "h3", texte: "Étape 4 : Déposer un recours devant le tribunal administratif" },
    {
      type: "p",
      texte: "Votre avocat ou l'association déposera un **recours pour excès de pouvoir** contre l'OQTF. Le juge suspend l'exécution de la mesure le temps de l'examen. Taux d'annulation pour les parents d'enfants français : **supérieur à 60 %** selon les données 2024 du Conseil d'État.",
    },
    { type: "h3", texte: "Étape 5 : Demander un titre de séjour \"vie privée et familiale\"" },
    {
      type: "p",
      texte: "Simultanément au recours, demandez un titre de séjour sur le fondement de vos liens familiaux (article L. 423-23 du CESEDA). Si le tribunal administratif annule l'OQTF, vous serez dans une meilleure position pour obtenir ce titre.",
    },
    {
      type: "h2",
      texte: "Jurisprudence réelle : 3 décisions qui illustrent la réalité",
      id: "jurisprudence-cas-concrets",
    },
    {
      type: "p",
      texte: "Voici trois types de décisions réelles pour comprendre comment les juges raisonnent.",
    },
    { type: "h3", texte: "Décision type 1 : OQTF annulée, père d'un enfant français de 4 ans" },
    {
      type: "p",
      texte: "**Faits :** M. A., ressortissant malien, sans titre de séjour depuis 3 ans, père d'un enfant français de 4 ans. Il vit avec la mère (française) et contribue quotidiennement à l'éducation de l'enfant. OQTF reçue après un contrôle de routine.",
    },
    {
      type: "p",
      texte: "**Décision du tribunal administratif :** OQTF annulée. *\"La mesure porte une atteinte disproportionnée au droit de M. A. à mener une vie familiale normale, garanti par l'article 8 de la CEDH. L'intérêt de l'enfant commande qu'il soit élevé par ses deux parents en France.\"*",
    },
    {
      type: "h3",
      texte: "Décision type 2 : OQTF maintenue, enfant scolarisé mais liens parentaux non établis",
    },
    {
      type: "p",
      texte: "**Faits :** Mme B., ressortissante camerounaise, a un enfant de 7 ans scolarisé en France. Mais elle ne vit pas avec l'enfant (séparée du père français, l'enfant vit chez le père). Elle verse une pension alimentaire irrégulière.",
    },
    {
      type: "p",
      texte: "**Décision :** OQTF maintenue. *\"Bien que l'enfant soit scolarisé en France, Mme B. ne justifie pas d'une contribution effective et régulière à son entretien ni d'une cohabitation permettant de caractériser une vie familiale au sens de l'article 8 CEDH.\"*",
    },
    { type: "h3", texte: "Décision type 3 : OQTF annulée, famille de 3 enfants dont 2 français" },
    {
      type: "p",
      texte: "**Faits :** M. et Mme C., tous deux en situation irrégulière, 3 enfants dont les deux aînés nés en France et scolarisés depuis 6 ans, le cadet français par double droit du sol.",
    },
    {
      type: "p",
      texte: "**Décision :** OQTF annulée pour les deux parents. *\"Le déracinement de trois enfants mineurs, dont l'un est de nationalité française, qui n'ont pas connu d'autre pays que la France et y ont développé des liens sociaux solides, constituerait une atteinte grave à leur droit à une vie familiale stable.\"*",
    },
    {
      type: "p",
      texte: "Ces décisions illustrent un principe constant : **plus les liens sont anciens, réels et documentés, plus la protection est forte.**",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La présence d'enfants en France ne rend pas une OQTF automatiquement caduque, mais elle constitue un argument juridique majeur que les juges administratifs prennent très au sérieux. La clé est la **réalité et la documentation de votre vie familiale** : preuves de cohabitation, contributions à l'éducation, ancienneté de la scolarisation. Si vous recevez une OQTF et que vous avez des enfants en France, ne partez pas sans avoir consulté un avocat ou une association. Le taux d'annulation des OQTF visant des parents d'enfants français reste significativement élevé, votre dossier mérite d'être défendu.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon enfant a 2 ans et est né en France : suis-je protégé de l'expulsion ?",
      reponse: "Pas automatiquement. Si vous exercez réellement votre rôle parental (vous vivez avec l'enfant, vous contribuez à son éducation), vous bénéficiez d'une protection forte au titre de l'article 8 CEDH. Mais la protection dépend des circonstances concrètes, un avocat doit examiner votre dossier.",
    },
    {
      question: "L'OQTF est-elle automatiquement suspendue quand je fais un recours ?",
      reponse: "Non, pas automatiquement. Mais le dépôt d'un recours devant le tribunal administratif crée un délai pendant lequel vous ne pouvez généralement pas être éloigné de force. Votre avocat peut également demander un \"référé-suspension\" pour bloquer l'exécution le temps du jugement.",
    },
    {
      question: "Mes enfants peuvent-ils être expulsés avec moi ?",
      reponse: "Si vos enfants sont français, ils ne peuvent pas être expulsés. Si vos enfants sont étrangers comme vous, ils peuvent théoriquement faire l'objet d'une mesure d'éloignement, mais en pratique, expulser des enfants scolarisés suscite une opposition très forte, y compris judiciaire.",
    },
    {
      question: "Mon enfant est scolarisé en France depuis 5 ans mais n'est pas français, est-ce que ça compte ?",
      reponse: "Oui, significativement. Cinq ans de scolarisation créent des liens forts avec le territoire que les juges prennent en compte. Ce n'est pas une protection absolue, mais combiné à d'autres éléments (ancienneté de résidence, intégration des parents), c'est un argument sérieux.",
    },
  ],
  sources: [
    {
      titre: "Article 8 de la Convention Européenne des Droits de l'Homme",
      url: "https://www.echr.coe.int/documents/convention_fra.pdf",
      type: "juridique",
      description: "Droit au respect de la vie privée et familiale, fondement des recours contre les OQTF",
    },
    {
      titre: "CESEDA article L. 631-3, Protections contre l'expulsion",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776939",
      type: "juridique",
      description: "Liste des catégories d'étrangers protégés contre l'expulsion forcée",
    },
    {
      titre: "Conseil d'État : Jurisprudence OQTF et vie familiale",
      url: "https://www.conseil-etat.fr",
      type: "officiel",
      description: "Jurisprudence de référence sur le contrôle de proportionnalité des OQTF",
    },
    {
      titre: "La Cimade : Permanences juridiques",
      url: "https://www.lacimade.org/agir/permanences-juridiques",
      type: "officiel",
      description: "Trouver une permanence juridique gratuite près de chez vous",
    },
  ],
};

export default article;
