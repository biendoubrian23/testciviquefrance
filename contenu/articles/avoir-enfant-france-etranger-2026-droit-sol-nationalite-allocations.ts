import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations",
  titre: "Avoir un enfant en France quand on est étranger : droit du sol, nationalité, allocations et impact sur votre titre de séjour 2026",
  titreSeo: "Avoir un enfant en France quand on est étranger : droit du sol, nationalité, allocations et impact sur votre titre de séjour 2026",
  resume: "Votre enfant né en France est-il automatiquement français ? Non, mais il peut l'être à 13 ou 18 ans. Prime de naissance (1 049 €), allocations CAF sans condition de nationalité, et comment la naissance peut transformer votre titre de séjour : tout ce que vous devez savoir.",
  chapo: "Vous êtes étranger en France et vous attendez un enfant, ou vous venez d'en avoir un. Félicitations d'abord. Maintenant les questions pratiques : votre enfant est-il français ? Quelles allocations pouvez-vous toucher ? Est-ce que la naissance améliore votre propre situation administrative ? Ce sont des questions que des milliers de parents étrangers se posent chaque année, souvent dans la confusion et l'inquiétude. Ce guide y répond clairement, avec les règles exactes du **droit du sol en 2026**, les allocations auxquelles vous avez droit quel que soit votre titre de séjour, et les impacts concrets sur votre titre de séjour.",
  publieLe: "2026-04-12",
  modifieLe: "2026-04-12",
  minutes: 20,
  theme: "avoir enfant en France étranger 2026",
  motsCles: [
    "avoir enfant en France étranger 2026",
    "droit du sol France nationalité enfant",
    "enfant né en France nationalité française",
    "allocations familiales étranger France",
    "CAF étranger bébé France",
    "titre de séjour parent enfant français",
    "naissance enfant étranger France titre séjour",
    "allocation naissance étrangère France",
    "PAJE prime naissance étranger France",
    "enfant français parent étranger sans papiers",
    "nationalité française enfant né en France",
    "droits naissance étranger France 2026",
    "impact naissance titre de séjour",
    "droit du sol conditions France 2026",
    "parent enfant français titre de séjour",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7",
  },
  blocs: [
    {
      type: "h2",
      texte: "Votre enfant est-il automatiquement français à la naissance ?",
      id: "enfant-automatiquement-francais",
    },
    {
      type: "p",
      texte: "La réponse courte : **pas automatiquement**. La France applique le droit du sol, mais avec des conditions. Voici la règle exacte.",
    },
    { type: "h3", texte: "Le principe : droit du sang d'abord" },
    {
      type: "p",
      texte: "En France, la nationalité se transmet d'abord **par filiation** (droit du sang) : si l'un des deux parents est français, l'enfant est français à la naissance, où qu'il soit né. C'est automatique.",
    },
    { type: "h3", texte: "Le droit du sol : pour les enfants nés en France de parents étrangers" },
    {
      type: "p",
      texte: "Si **les deux parents sont étrangers**, l'enfant né en France n'est pas automatiquement français à la naissance. Mais il peut le devenir selon deux cas :",
    },
    { type: "p", texte: "**Cas 1 : L'acquisition automatique à 18 ans**" },
    {
      type: "p",
      texte: "L'enfant né en France de parents étrangers acquiert automatiquement la nationalité française à 18 ans s'il réside en France et y a résidé pendant **au moins 5 ans depuis l'âge de 11 ans** (article 21-7 du Code civil). Aucune démarche n'est nécessaire, c'est automatique.",
    },
    { type: "p", texte: "**Cas 2 : La déclaration anticipée entre 13 et 17 ans**" },
    {
      type: "p",
      texte: "Entre 13 et 17 ans, l'enfant (avec l'accord des parents) peut demander la nationalité française par déclaration s'il réside en France depuis ses 8 ans (article 21-11 du Code civil). Démarche simple, devant le tribunal judiciaire ou la préfecture.",
    },
    { type: "p", texte: "**Cas 3 : La déclaration dès la naissance (cas particulier)**" },
    {
      type: "p",
      texte: "Si l'enfant est né en France et que **l'un des parents est lui-même né en France** (même de parents étrangers), alors l'enfant est **français à la naissance** : c'est le double droit du sol (article 19-3 du Code civil). Ce cas concerne notamment les enfants de la 3e génération.",
    },
    { type: "h3", texte: "En résumé" },
    {
      type: "tableau",
      entetes: ["Situation", "Nationalité à la naissance"],
      lignes: [
        ["Au moins un parent français", "Français automatiquement"],
        [
          "Les deux parents étrangers, enfant né en France",
          "**Étranger** (peut devenir français à 13-18 ans)",
        ],
        [
          "Les deux parents étrangers, mais l'un né en France",
          "**Français automatiquement** (double droit du sol)",
        ],
      ],
    },
    {
      type: "h2",
      texte: "Impact de la naissance sur votre titre de séjour",
      id: "impact-titre-sejour-parents",
    },
    {
      type: "p",
      texte: "La naissance d'un enfant en France peut avoir un impact **significatif** sur votre situation administrative, dans certains cas, elle ouvre droit à un nouveau titre de séjour.",
    },
    { type: "h3", texte: "Si vous êtes déjà en situation régulière" },
    {
      type: "p",
      texte: "La naissance d'un enfant ne change pas directement votre titre de séjour actuel. En revanche, elle peut :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous permettre d'obtenir un titre de **catégorie \"vie privée et familiale\"** lors du prochain renouvellement (plus stable)",
        "Renforcer votre dossier de naturalisation (liens en France)",
        "Permettre un regroupement familial si votre conjoint est à l'étranger",
      ],
    },
    { type: "h3", texte: "Si votre enfant devient français (double droit du sol ou déclaration)" },
    {
      type: "p",
      texte: "Dès que votre enfant est reconnu comme français, vous pouvez demander un **titre de séjour \"parent d'enfant français\"** (article L. 423-7 du CESEDA). Conditions :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avoir la garde effective de l'enfant",
        "Contribuer à son entretien et son éducation",
        "Ne pas être en situation de polygamie",
        "Ne pas représenter une menace à l'ordre public",
      ],
    },
    {
      type: "p",
      texte: "Ce titre est **valable 1 an**, renouvelable, et ouvre droit à une carte de résident après 3 ans.",
    },
    { type: "h3", texte: "Si vous êtes en situation irrégulière" },
    {
      type: "p",
      texte: "La naissance d'un enfant en France **ne régularise pas automatiquement** votre situation. Mais elle constitue un **argument puissant** dans le cadre d'une demande de régularisation humanitaire. Le préfet doit tenir compte :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Du droit de l'enfant à être élevé par ses deux parents",
        "De l'intérêt supérieur de l'enfant (article 3 de la Convention internationale des droits de l'enfant)",
        "Des liens développés en France",
      ],
    },
    {
      type: "encadre",
      texte: "Si votre enfant est français et que vous n'avez pas de titre de séjour, contactez immédiatement une association (La Cimade, France Terre d'Asile) pour examiner votre situation.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les allocations et aides auxquelles vous avez droit",
      id: "allocations-auxquelles-vous-avez-droit",
    },
    {
      type: "p",
      texte: "Bonne nouvelle : **la plupart des aides à la naissance ne sont pas conditionnées à la nationalité française**. Elles dépendent de votre titre de séjour et de votre résidence en France.",
    },
    { type: "h3", texte: "La PAJE (Prestation d'Accueil du Jeune Enfant) : CAF" },
    {
      type: "tableau",
      entetes: ["Aide", "Conditions", "Montant 2026"],
      lignes: [
        [
          "**Prime à la naissance**",
          "Résider en France, titre de séjour valide, grossesse déclarée avant 14 semaines",
          "**1 049 €** (versée au 7e mois de grossesse)",
        ],
        [
          "**Allocation de base**",
          "Enfant de moins de 3 ans, conditions de ressources",
          "**Jusqu'à 185 €/mois**",
        ],
        [
          "**Complément de libre choix d'activité (PreParE)**",
          "Cesser ou réduire son activité professionnelle",
          "Variable selon le cas",
        ],
      ],
    },
    { type: "p", texte: "**Titres de séjour acceptés par la CAF :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte de séjour temporaire (salarié, étudiant, vie privée et familiale, etc.)",
        "Carte de séjour pluriannuelle",
        "Carte de résident",
        "Récépissé de demande de renouvellement (sous conditions)",
      ],
    },
    {
      type: "encadre",
      texte: "Les titres de séjour \"visiteur\" et \"étudiant\" en première année peuvent avoir des restrictions. Vérifiez avec votre CAF.",
      ton: "bleu",
    },
    { type: "h3", texte: "Les allocations familiales" },
    {
      type: "p",
      texte: "Les allocations familiales classiques s'appliquent dès le **2e enfant à charge**. Elles sont versées sans condition de nationalité si vous résidez en France et disposez d'un titre de séjour régulier.",
    },
    { type: "h3", texte: "Le Complément Familial et l'APL" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Complément familial** : pour les familles avec 3 enfants ou plus de 3 à 21 ans, sous conditions de ressources",
        "**APL (aide au logement)** : accessible dès votre arrivée régulière en France, quel que soit votre titre",
      ],
    },
    { type: "h3", texte: "L'aide médicale d'État (AME) pour les sans-papiers" },
    {
      type: "p",
      texte: "Si vous n'avez pas de titre de séjour, vous n'accédez pas à la Sécurité sociale classique, mais votre enfant bénéficie de l'**AME** (soins pris en charge à 100 %) après 3 mois de présence sur le territoire. Les naissances en urgence sont prises en charge **sans délai**.",
    },
    { type: "h3", texte: "Les démarches à faire dans les jours suivant la naissance" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Déclarer la naissance** à la mairie dans les **5 jours** (obligatoire)",
        "**Déclarer la naissance à la CAF** pour démarrer vos droits",
        "**Affilier l'enfant à votre CPAM** pour la carte Vitale",
        "Si l'enfant peut être français : **demander un certificat de nationalité française** au greffe du tribunal judiciaire",
      ],
    },
    {
      type: "h2",
      texte: "Les démarches pratiques pas à pas après la naissance",
      id: "demarches-pratiques-naissance",
    },
    { type: "h3", texte: "Jour 1-5 : La déclaration de naissance" },
    {
      type: "p",
      texte: "**Obligatoire et urgent** : vous devez déclarer la naissance à la **mairie du lieu de naissance** dans les **5 jours** suivant la naissance (article 55 du Code civil). La maternité vous remet généralement un certificat médical d'accouchement. Apportez :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le certificat médical d'accouchement",
        "Vos pièces d'identité (ou titre de séjour)",
        "Votre livret de famille (si vous en avez un)",
      ],
    },
    {
      type: "p",
      texte: "**Sanction** : Au-delà de 5 jours, il faut passer par le tribunal judiciaire, une procédure plus longue.",
    },
    {
      type: "h3",
      texte: "Dans le mois : La demande de Certificat de Nationalité Française (si applicable)",
    },
    {
      type: "p",
      texte: "Si votre enfant est potentiellement français (double droit du sol), demandez immédiatement un **Certificat de Nationalité Française (CNF)** au **greffe du tribunal judiciaire** de votre domicile. Ce certificat est la preuve officielle de la nationalité.",
    },
    { type: "p", texte: "Délai : 1 à 6 mois selon les juridictions. C'est gratuit." },
    { type: "h3", texte: "Dans les 2 semaines : La déclaration CAF" },
    {
      type: "p",
      texte: "Déclarez la naissance sur **caf.fr** dans votre espace personnel. La CAF calculera automatiquement vos droits à la prime de naissance et à l'allocation de base PAJE. Si vous n'êtes pas encore inscrit à la CAF, créez votre compte immédiatement.",
    },
    { type: "h3", texte: "Dans le mois : L'affiliation à la CPAM" },
    {
      type: "p",
      texte: "Affiliez votre enfant à votre caisse d'assurance maladie (CPAM) via **ameli.fr**. L'enfant sera couvert dès la naissance sur votre carte Vitale jusqu'à sa propre affiliation.",
    },
    { type: "h3", texte: "Si vous souhaitez demander un titre de séjour \"parent d'enfant français\"" },
    { type: "p", texte: "Une fois que vous avez le CNF de l'enfant, rassemblez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'acte de naissance de l'enfant + CNF",
        "La preuve de garde effective (vie commune, ou jugement si séparation)",
        "Les preuves de contribution à l'entretien (dépenses pour l'enfant)",
        "Vos propres documents d'identité et preuves de résidence",
      ],
    },
    { type: "p", texte: "Déposez la demande à la préfecture ou sur l'ANEF." },
    {
      type: "h2",
      texte: "Et si vous n'avez pas de titre de séjour ?",
      id: "sans-papiers-enfant-en-france",
    },
    {
      type: "p",
      texte: "C'est la situation la plus anxiogène. Voici ce qui est vrai et ce qui est faux.",
    },
    { type: "h3", texte: "Faux : \"L'hôpital va signaler mon accouchement à la police\"" },
    {
      type: "p",
      texte: "**C'est faux.** Les hôpitaux et maternités sont soumis au **secret médical**. Aucun personnel de santé ne peut signaler votre présence à la police lors d'un accouchement. Cette règle est absolue. Des centaines de milliers de naissances d'enfants de parents sans papiers ont lieu chaque année en France en toute sécurité.",
    },
    { type: "h3", texte: "Vrai : \"Je peux accoucher en France sans titre de séjour\"" },
    {
      type: "p",
      texte: "**C'est vrai.** Les soins urgents, dont les accouchements, sont pris en charge par l'**AME** (Aide Médicale d'État) ou à défaut par le système hospitalier en urgence. Aucun hôpital ne peut refuser une femme en travail.",
    },
    { type: "h3", texte: "Ce que la naissance peut changer pour votre situation" },
    { type: "p", texte: "Si vous êtes sans papiers et que votre enfant naît en France :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Votre enfant n'est pas automatiquement français** (voir section sur le droit du sol)",
        "Mais votre enfant a le droit d'être **scolarisé** (l'école est obligatoire pour tous, sans condition de titre de séjour)",
        "La présence d'un enfant en France constitue un **motif humanitaire** pour demander une régularisation",
        "Si votre enfant devient français (double droit du sol), vous pouvez demander un titre de séjour \"parent d'enfant français\"",
      ],
    },
    { type: "h3", texte: "La menace d'expulsion avec un enfant en bas âge" },
    {
      type: "p",
      texte: "En pratique, les préfectures sont très réticentes à expulser une mère (ou un père) avec un enfant en bas âge. Ce n'est pas une garantie légale absolue, mais c'est une réalité opérationnelle. Le juge administratif tient compte de l'intérêt de l'enfant dans tout recours contre une OQTF.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La naissance d'un enfant en France est un événement qui peut transformer votre situation administrative, mais il faut connaître les règles exactes pour en bénéficier. Le droit du sol ne rend pas votre enfant automatiquement français, mais ouvre des voies vers la nationalité française entre 13 et 18 ans. En termes d'allocations, la France est généreux avec les parents résidant régulièrement sur son territoire : la prime de naissance, les allocations familiales, la PAJE sont accessibles sans condition de nationalité. Si vous êtes dans une situation irrégulière, la naissance de votre enfant doit vous pousser à consulter rapidement une association spécialisée, votre dossier mérite d'être sérieusement étudié.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon enfant né en France peut-il avoir un passeport français avant 18 ans ?",
      reponse: "Oui, si votre enfant est reconnu comme français (double droit du sol ou déclaration anticipée à 13-17 ans), il peut obtenir un passeport français. La demande se fait en mairie avec le Certificat de Nationalité Française.",
    },
    {
      question: "Mon enfant est né en France, puis-je voyager avec lui à l'étranger ?",
      reponse: "Votre enfant voyagera avec son propre titre de voyage. S'il a la nationalité de l'un des deux parents, il peut obtenir le passeport du pays en question. Si votre enfant est français, un passeport français lui sera délivré. S'il n'est ni français ni du pays d'origine, un \"document de voyage\" peut être demandé à l'ambassade de votre pays.",
    },
    {
      question: "La CAF peut-elle me demander de prouver ma nationalité pour recevoir les allocations ?",
      reponse: "La CAF ne demande pas votre nationalité. Elle demande votre titre de séjour (ou tout document prouvant votre résidence régulière en France) et vos justificatifs de ressources. Un titre de séjour régulier suffit pour ouvrir vos droits.",
    },
    {
      question: "Mon conjoint est à l'étranger : peut-il venir en France grâce à la naissance de notre enfant ?",
      reponse: "La naissance d'un enfant en France n'ouvre pas automatiquement un droit au regroupement familial. Le regroupement familial suit sa propre procédure (revenus, logement, durée de résidence). Cependant, si l'enfant est français, il a le droit d'être élevé par ses deux parents, ce qui est un argument fort dans une demande de visa \"parent d'enfant français\".",
    },
  ],
  sources: [
    {
      titre: "Code civil : Articles sur la nationalité française (art. 19-3, 21-7, 21-11)",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006150501",
      type: "juridique",
      description: "Base légale du droit du sol et de l'acquisition de la nationalité française",
    },
    {
      titre: "CESEDA article L. 423-7, Titre de séjour parent d'enfant français",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776913",
      type: "juridique",
      description: "Conditions d'obtention du titre de séjour pour parent d'enfant français",
    },
    {
      titre: "CAF : Prestations familiales pour les étrangers",
      url: "https://www.caf.fr/allocataires/vies-de-famille/articles/les-conditions-pour-beneficier-des-prestations-familiales",
      type: "officiel",
      description: "Conditions d'accès aux aides CAF pour les ressortissants étrangers",
    },
  ],
};

export default article;
