import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-actu-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/cra-retention-etrangers-7-jours-7-mois-2026-droits-recours-expulsion`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "cra-retention-etrangers-7-jours-7-mois-2026-droits-recours-expulsion",
  titre: "CRA 2026 : la rétention des étrangers passe de 90 jours à 7 mois, vos droits, vos recours",
  titreSeo: "CRA 2026 : la rétention des étrangers passe de 90 jours à 7 mois, vos droits, vos recours",
  resume: "Une proposition de loi examinée en avril 2026 prévoit d'allonger la durée maximale de rétention en CRA à 7 mois. Qu'est-ce qu'un CRA, qui peut y être placé, quels sont vos droits et comment contester un placement en rétention administrative.",
  chapo: "Le 13 avril 2026, la Cimade a tiré la sonnette d'alarme : une proposition de loi en cours d'examen à l'Assemblée nationale prévoit d'étendre la durée maximale de rétention en Centre de Rétention Administrative (CRA) de 7 jours à 7 mois. Si ce texte est adopté, la France deviendrait l'un des pays d'Europe où la détention administrative des étrangers est la plus longue, et la moins encadrée. Qu'est-ce qu'un CRA ? Qui peut y être placé ? Quels sont vos droits si cela vous arrive ? Et comment contester un placement en rétention ?",
  publieLe: "2026-04-21",
  modifieLe: "2026-04-21",
  minutes: 22,
  theme: "CRA centre rétention administrative 2026",
  motsCles: [
    "CRA centre rétention administrative 2026",
    "rétention étrangers durée maximale 7 mois 2026",
    "prolongation rétention CRA France loi 2026",
    "droits étrangers CRA rétention",
    "placement rétention administrative OQTF",
    "recours rétention administrative tribunal",
    "Cimade CRA droits rétention",
    "expulsion étranger CRA 2026",
    "OQTF rétention centre rétention",
    "CRA conditions vie droits visite",
    "libération CRA recours juge",
    "IRTF interdiction retour territoire français",
    "avocat rétention administrative gratuit",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce qu'un Centre de Rétention Administrative (CRA) ?",
      id: "qu-est-ce-qu-un-cra",
    },
    {
      type: "p",
      texte: "Un Centre de Rétention Administrative (CRA) est un lieu de détention pour les étrangers qui font l'objet d'une mesure d'éloignement du territoire français mais ne peuvent pas être immédiatement expulsés.",
    },
    {
      type: "p",
      texte: "**Important** : un CRA n'est pas une prison. La rétention administrative n'est pas une sanction pénale, c'est une mesure administrative. Vous n'êtes pas en rétention parce que vous avez commis un crime, mais parce que l'État veut vous éloigner et craint que vous preniez la fuite.",
    },
    { type: "h3", texte: "Les CRA en France : où sont-ils ?" },
    {
      type: "p",
      texte: "La France compte **25 CRA** répartis sur le territoire, dont les plus importants :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Mesnil-Amelot** (Seine-et-Marne) : le plus grand, 240 places",
        "**Vincennes** (Val-de-Marne) : 240 places",
        "**Cornebarrieu** (Haute-Garonne, près de Toulouse) : 126 places",
        "**Marseille Le Canet** : 126 places",
        "**Coquelles** (Pas-de-Calais, près de Calais) : 79 places",
        "**Lyon Saint-Exupéry** : 132 places",
        "**Nantes** : 47 places",
      ],
    },
    { type: "p", texte: "Au total, la France dispose de **1 938 places** de rétention administrative." },
    { type: "h3", texte: "Qui peut être placé en CRA ?" },
    {
      type: "p",
      texte: "Toute personne étrangère faisant l'objet d'une mesure d'éloignement **exécutoire** peut théoriquement être placée en rétention. Les principaux cas :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titulaire d'une **Obligation de Quitter le Territoire Français (OQTF)** qui ne l'a pas exécutée",
        "Personnes en **situation irrégulière** interpellées lors d'un contrôle",
        "Personnes dont la demande d'asile a été **définitivement rejetée**",
        "Personnes interpellées à la frontière ou aux points de passage",
      ],
    },
    {
      type: "p",
      texte: "Les **mineurs** ne peuvent théoriquement pas être placés en rétention, mais des enfants peuvent se retrouver en CRA si leurs parents y sont placés.",
    },
    {
      type: "h2",
      texte: "La proposition qui choque : de 7 jours à 7 mois de détention",
      id: "la-proposition-7-mois",
    },
    {
      type: "p",
      texte: "Actuellement, la durée maximale de rétention en France est de **90 jours** (soit environ 3 mois), après plusieurs prolongations successives encadrées par le juge des libertés et de la détention (JLD).",
    },
    { type: "h3", texte: "Ce que propose la loi examinée en avril 2026" },
    {
      type: "p",
      texte: "La proposition de loi en cours d'examen à l'Assemblée nationale (avril 2026) prévoit :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Durée initiale** : maintenu à 48h par arrêté du préfet",
        "**Première prolongation** : portée de 28 jours à **3 mois** (contre 28 jours actuellement)",
        "**Deuxième prolongation** : portée à **4 mois supplémentaires** (soit 7 mois au total)",
        "**Réduction du contrôle judiciaire** : le JLD interviendrait plus tardivement dans la procédure",
      ],
    },
    {
      type: "p",
      texte: "La Cimade résume ainsi : **\"de 7 jours à 7 mois, des libertés de plus en plus grillagées\"**.",
    },
    { type: "h3", texte: "La comparaison européenne" },
    {
      type: "tableau",
      entetes: ["Pays", "Durée maximale de rétention"],
      lignes: [
        ["Portugal", "60 jours"],
        ["Belgique", "8 mois"],
        ["Allemagne", "18 mois (dans certains cas)"],
        ["Espagne", "60 jours"],
        ["Italie", "180 jours"],
        ["Grèce", "18 mois"],
        ["France (actuel)", "90 jours"],
        ["**France (si la loi passe)**", "**210 jours (7 mois)**"],
      ],
    },
    {
      type: "p",
      texte: "Si la loi est adoptée, la France aurait la **troisième durée maximale** d'Europe, derrière l'Allemagne et la Grèce.",
    },
    { type: "h3", texte: "L'argument du gouvernement : les expulsions \"bloquées\"" },
    {
      type: "p",
      texte: "Le gouvernement justifie cette extension par les difficultés à expulser certains ressortissants dont les pays d'origine **refusent les laissez-passer consulaires** (documents permettant d'embarquer sans passeport). Sans ces documents, l'expulsion est impossible, et la personne doit être libérée après la durée maximale.",
    },
    {
      type: "p",
      texte: "En allongeant la durée, le gouvernement espère obtenir ces documents le temps de la procédure.",
    },
    { type: "h3", texte: "Ce que répondent les associations" },
    {
      type: "p",
      texte: "Pour la Cimade et les associations de défense des droits, cet argument est un prétexte : **les pays qui refusent les laissez-passer ne les accorderont pas plus vite parce que la détention dure plus longtemps**. L'extension de la rétention ne résoudra pas le problème, elle créera seulement plus de souffrance humaine.",
    },
    {
      type: "p",
      texte: "La Défenseure des droits a rendu un avis défavorable, estimant que cette mesure porte une **atteinte disproportionnée à la liberté individuelle**.",
    },
    {
      type: "h2",
      texte: "Vos droits en Centre de Rétention Administrative : ce que la loi garantit",
      id: "vos-droits-en-cra",
    },
    {
      type: "p",
      texte: "Si vous êtes placé en rétention, la loi vous garantit un ensemble de droits, mais les faire valoir nécessite d'agir vite.",
    },
    { type: "h3", texte: "Droit 1 : Être informé de vos droits dans votre langue" },
    {
      type: "p",
      texte: "À votre arrivée en CRA, l'administration est légalement tenue de vous informer de vos droits **dans une langue que vous comprenez**. Si ce n'est pas le cas, signalez-le immédiatement à la Cimade.",
    },
    { type: "h3", texte: "Droit 2 : Contacter un avocat immédiatement" },
    {
      type: "p",
      texte: "Vous avez le droit de **contacter un avocat dès les premières heures**. Si vous n'en avez pas, vous pouvez demander la commission d'office d'un avocat commis d'office par le bâtonnier du barreau local. C'est gratuit si vous remplissez les conditions de l'aide juridictionnelle (ressources faibles).",
    },
    {
      type: "p",
      texte: "**Action immédiate** : demandez à téléphoner à un avocat dès votre arrivée. Ne signez aucun document avant d'en avoir parlé à un avocat.",
    },
    { type: "h3", texte: "Droit 3 : Être assisté par la Cimade" },
    {
      type: "p",
      texte: "La **Cimade** est présente dans la quasi-totalité des CRA français, c'est une association mandatée par l'État pour assister les personnes retenues. Ses intervenants sont présents sur place. Demandez à les voir immédiatement.",
    },
    { type: "h3", texte: "Droit 4 : Contester la rétention devant le juge" },
    {
      type: "p",
      texte: "Vous avez le droit de **saisir le juge des libertés et de la détention (JLD)** pour contester votre placement en rétention. Ce recours est urgent, il doit être exercé dans des délais très courts (en général 48h pour la première audience).",
    },
    { type: "p", texte: "Les motifs de contestation possibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vices de procédure (absence de notification, langue non respectée)",
        "Absence de risque réel de fuite",
        "Situation personnelle particulière (maladie grave, enfants à charge, long séjour en France)",
        "OQTF illégale ou suspendue par un recours en cours",
      ],
    },
    { type: "h3", texte: "Droit 5 : Recevoir des visites" },
    {
      type: "p",
      texte: "Vos proches peuvent vous rendre visite. Les horaires de visite varient selon les CRA. Ils peuvent vous apporter des vêtements, de l'argent de poche et des effets personnels dans la limite du règlement intérieur.",
    },
    { type: "h3", texte: "Droit 6 : Accéder aux soins" },
    {
      type: "p",
      texte: "Chaque CRA dispose d'une unité médicale (UMCRA). Si vous avez des problèmes de santé, demandez à consulter le médecin. En cas d'urgence, vous devez être transféré en hôpital.",
    },
    { type: "h3", texte: "Droit 7 : Refuser de monter dans l'avion" },
    {
      type: "p",
      texte: "Vous pouvez physiquement refuser d'embarquer. Ce refus ne vous expose pas à des poursuites pénales automatiques, mais peut entraîner une prolongation de la rétention et des tensions. Consultez votre avocat avant de prendre cette décision.",
    },
    {
      type: "h2",
      texte: "Comment contester un placement en rétention : guide étape par étape",
      id: "comment-contester-la-retention",
    },
    {
      type: "p",
      texte: "La contestation d'un placement en CRA est **urgente et technique**. Chaque heure compte.",
    },
    { type: "h3", texte: "Étape 1 : Dès l'interpellation (avant même le CRA)" },
    {
      type: "p",
      texte: "Si vous êtes interpellé et placé en garde à vue administrative, vous avez le droit de :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["Prévenir un proche", "Contacter un avocat", "Refuser de signer tout document"],
    },
    { type: "h3", texte: "Étape 2 : Dans les premières 48h au CRA" },
    {
      type: "p",
      texte: "L'administration doit vous présenter devant le **juge des libertés et de la détention (JLD)** dans les 48 heures. C'est votre première, et souvent principale, chance de contestation.",
    },
    { type: "p", texte: "**Préparez avec votre avocat** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tous les documents prouvant votre ancienneté en France (baux, contrats, photos datées)",
        "Preuve de vos liens familiaux (actes de naissance d'enfants, livret de mariage)",
        "Attestations de travail ou de formation",
        "Tout document médical si vous avez une maladie",
      ],
    },
    { type: "h3", texte: "Étape 3 : Si le JLD maintient la rétention" },
    {
      type: "p",
      texte: "Vous pouvez faire appel de la décision du JLD devant la **Cour d'appel**. Votre avocat doit le faire en urgence.",
    },
    {
      type: "p",
      texte: "Simultanément, si vous avez une OQTF, attaquez-la devant le **tribunal administratif**. Si le tribunal administratif suspend l'OQTF, votre rétention n'a plus de base légale et vous devez être libéré.",
    },
    { type: "h3", texte: "Étape 4 : Les prolongations" },
    {
      type: "p",
      texte: "À chaque étape de prolongation (à 48h, à 5 jours, à 28 jours, etc.), le JLD doit à nouveau se prononcer. C'est à chaque fois une nouvelle audience, et une nouvelle chance de liberté.",
    },
    { type: "h3", texte: "Les contacts d'urgence à connaître" },
    {
      type: "tableau",
      entetes: ["Organisme", "Rôle", "Contact"],
      lignes: [
        ["**La Cimade**", "Présente dans les CRA : assistance immédiate", "lacimade.org"],
        [
          "**Ordre des avocats local**",
          "Commission d'office d'un avocat",
          "Via le secrétariat du barreau",
        ],
        ["**Défenseur des droits**", "Signalement d'abus", "defenseursdesdroits.fr"],
        [
          "**Service d'accueil unique du justiciable (SAUJ)**",
          "Aide pour les démarches judiciaires",
          "Dans chaque tribunal",
        ],
      ],
    },
    {
      type: "h2",
      texte: "Que se passe-t-il pour votre famille si vous êtes en rétention ?",
      id: "impact-sur-votre-famille",
    },
    {
      type: "p",
      texte: "Un placement en CRA n'affecte pas que vous : il bouleverse votre famille. Voici ce que vous devez savoir.",
    },
    { type: "h3", texte: "Vos enfants" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vos enfants sont français ou nés en France et scolarisés, leur situation ne change pas, ils ne peuvent pas être expulsés",
        "Si vos enfants sont étrangers comme vous et vivent avec vous, leur situation est plus complexe : ils peuvent être placés en zone d'attente pour mineurs ou confiés à un tiers de confiance si vous en désignez un",
        "**Désignez immédiatement une personne de confiance** à qui confier vos enfants si vous êtes placé en rétention, c'est crucial",
      ],
    },
    { type: "h3", texte: "Votre conjoint(e)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si votre conjoint(e) est français(e) ou a un titre de séjour valide, il/elle n'est pas expulsé(e) avec vous",
        "Votre mariage ou union civile avec un ressortissant français peut être un argument fort devant le JLD, faites-le valoir avec les documents",
      ],
    },
    { type: "h3", texte: "Votre logement et vos biens" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre bail continue de courir pendant votre rétention, vous continuez à devoir le loyer",
        "Prévenez votre propriétaire, si possible via un proche de confiance",
        "Vos biens personnels restent à votre domicile : un proche peut s'en occuper avec une procuration",
      ],
    },
    { type: "h3", texte: "Si vous êtes expulsé" },
    {
      type: "p",
      texte: "En cas d'expulsion effective, une **IRTF (Interdiction de Retour sur le Territoire Français)** d'1 à 5 ans est souvent notifiée. Cette interdiction peut être contestée devant le tribunal administratif, même depuis votre pays d'origine, par le biais d'un avocat ou d'une association.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La proposition d'étendre la rétention en CRA de 7 jours à 7 mois représente un durcissement majeur de la politique migratoire française. Si vous ou un proche êtes concerné par une OQTF ou un risque de placement en rétention, agissez avant, pas après. Consultez une association (Cimade, GISTI), préparez votre dossier de régularisation, et désignez une personne de confiance pour votre famille. Le droit peut vous protéger, mais il faut le connaître et l'activer au bon moment.",
      ton: "bleu",
    },
  ],
};

export default article;
