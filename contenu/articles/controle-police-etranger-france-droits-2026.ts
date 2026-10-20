import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/controle-police-etranger-france-droits-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "controle-police-etranger-france-droits-2026",
  titre: "Contrôle de police quand on est étranger : tes droits que 90% des gens ignorent",
  titreSeo: "Contrôle de police quand on est étranger : tes droits que 90% des gens ignorent",
  resume: "Obligation de porter son titre sur soi, droit de refuser la fouille, filmer la police (légal), contrôle au faciès interdit, garde à vue vs rétention, droit à un interprète gratuit, porter plainte IGPN... Guide complet de tes droits face à un contrôle.",
  chapo: "Se faire contrôler par la police quand on est étranger en France, c'est souvent un moment de stress intense. Cœur qui s'accélère, mains qui tremblent, peur de dire la mauvaise chose. Pourtant, même en situation irrégulière, vous avez des droits fondamentaux que la police DOIT respecter, et que 90% des gens ignorent. Droit de ne pas être fouillé sans motif, droit à un interprète, droit de filmer, obligation de présenter son titre ou non, contrôle au faciès interdit par la loi... Ce guide détaille vos droits concrets, les limites légales de la police, et les recours si vos droits sont violés. À lire, à sauvegarder et à partager.",
  publieLe: "2026-04-09",
  modifieLe: "2026-04-09",
  minutes: 16,
  theme: "contrôle police étranger France droits",
  motsCles: [
    "contrôle police étranger France droits",
    "contrôle identité étranger France",
    "droits étranger contrôle de police",
    "refus fouille police France",
    "contrôle au faciès France illégal",
    "garde à vue étranger droits",
    "rétention administrative droits",
    "porter titre de séjour obligatoire France",
    "filmer police France légal",
    "IGPN plainte police",
    "droit interprète garde à vue",
    "vérification titre séjour police",
    "rétention CRA droits",
    "OQTF contrôle police",
    "recours contrôle abusif étranger",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le contrôle d'identité : ce que la police a le droit de faire (et ce qu'elle n'a pas le droit)",
      id: "controle-identite-cadre-legal",
    },
    {
      type: "p",
      texte: "En France, un contrôle d'identité est encadré par des règles strictes. La police ne peut pas vous arrêter \"comme ça\" sans raison.",
    },
    { type: "h3", texte: "Les 3 types de contrôle légaux" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Contrôle judiciaire** (art. 78-2 du Code de procédure pénale) : la police a un indice qu'une infraction a été commise ou va être commise. Exemple : vous correspondez à la description d'un suspect",
        "**Contrôle administratif** (art. 78-2 alinéa 7) : sur réquisition du procureur de la République, dans une zone et un créneau horaire précis. C'est le plus courant",
        "**Contrôle aux frontières** (art. 78-2 alinéa 9) : dans une zone de 20 km autour d'une frontière Schengen, dans les ports, gares et aéroports internationaux",
      ],
    },
    { type: "h3", texte: "Ce que la police N'A PAS le droit de faire" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous contrôler **uniquement en raison de votre apparence physique, votre couleur de peau ou votre nom** : c'est un contrôle au faciès, interdit par la loi et condamné par la Cour de cassation (2016)",
        "Vous fouiller sans votre consentement (sauf flagrant délit ou réquisition du procureur)",
        "Vous retenir plus de **4 heures** pour une simple vérification d'identité",
        "Vous insulter, vous frapper ou vous menacer : même si vous êtes en situation irrégulière",
      ],
    },
    { type: "h3", texte: "Votre droit fondamental" },
    {
      type: "p",
      texte: "Vous pouvez demander le **motif du contrôle**. L'agent doit pouvoir vous expliquer pourquoi il vous contrôle. Si le motif est flou (\"contrôle de routine\"), notez l'heure, le lieu et le matricule de l'agent (RIO, Référentiel des Identités et de l'Organisation, visible sur l'uniforme).",
    },
    {
      type: "h2",
      texte: "Faut-il toujours avoir son titre de séjour sur soi ?",
      id: "titre-sejour-obligation",
    },
    { type: "p", texte: "C'est LA question que tous les étrangers se posent. La réponse est nuancée." },
    { type: "h3", texte: "Ce que dit la loi" },
    {
      type: "p",
      texte: "L'article L812-1 du CESEDA impose aux étrangers de pouvoir **justifier de la régularité de leur séjour** en cas de contrôle. Cela signifie que vous devez pouvoir présenter :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre titre de séjour (carte, récépissé, VLS-TS)",
        "Votre passeport avec visa valide",
        "Votre attestation de demande d'asile",
      ],
    },
    { type: "h3", texte: "En pratique : que se passe-t-il si vous ne l'avez pas sur vous ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous avez un titre valide mais pas sur vous → la police peut vérifier dans le fichier AGDREF. Vous pouvez être retenu **jusqu'à 4 heures** pour vérification",
        "Le temps de vérification ne peut **pas dépasser 4 heures** (art. 78-3 CPP)",
        "Pendant cette vérification, vous avez le droit de **prévenir quelqu'un** (famille, ami, avocat)",
        "Vous ne pouvez PAS être placé en garde à vue juste pour absence de titre sur vous",
      ],
    },
    { type: "h3", texte: "Notre conseil pratique" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Gardez une **photocopie ou une photo** de votre titre de séjour sur votre téléphone",
        "Conservez l'original dans un endroit sûr chez vous",
        "Si vous avez un récépissé ANEF (numérique), gardez le PDF accessible hors ligne sur votre téléphone",
        "En cas de contrôle, montrez la copie et indiquez que l'original est chez vous",
      ],
    },
    { type: "h2", texte: "Fouille corporelle et fouille du sac : vos droits", id: "fouille-droits" },
    {
      type: "p",
      texte: "La fouille est l'un des moments les plus intrusifs d'un contrôle. Beaucoup de personnes croient à tort qu'elles doivent accepter automatiquement.",
    },
    { type: "h3", texte: "Les 3 types de fouille et vos droits" },
    {
      type: "tableau",
      entetes: ["Type", "Qui décide", "Votre droit"],
      lignes: [
        [
          "Palpation de sécurité",
          "L'agent, pour sa sécurité",
          "Vous pouvez exiger que ce soit fait par un agent de même sexe",
        ],
        [
          "Fouille du sac/affaires",
          "L'agent, si motif raisonnable",
          "Vous pouvez refuser. Seul un OPJ (Officier de Police Judiciaire) peut ordonner une fouille",
        ],
        [
          "Fouille corporelle complète",
          "Uniquement un OPJ, sur ordre",
          "Doit se faire dans un local fermé, par une personne de même sexe",
        ],
      ],
    },
    { type: "h3", texte: "Ce que vous pouvez dire" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Je refuse la fouille de mon sac\" : c'est votre droit dans le cadre d'un simple contrôle d'identité",
        "\"Je souhaite connaître votre matricule (RIO)\" : c'est votre droit",
        "\"Je souhaite que la fouille soit faite par un agent du même sexe\", c'est votre droit",
      ],
    },
    { type: "h3", texte: "Attention" },
    {
      type: "p",
      texte: "Si vous refusez une fouille et que l'agent insiste, ne résistez pas physiquement. Notez le matricule, l'heure et le lieu, et portez plainte après. La résistance physique peut être requalifiée en \"outrage\" ou \"rébellion\" (même si le contrôle est illégal).",
    },
    {
      type: "h2",
      texte: "Garde à vue et rétention administrative : la différence et vos droits",
      id: "garde-a-vue-retention",
    },
    {
      type: "p",
      texte: "Beaucoup d'étrangers confondent garde à vue et rétention administrative. Ce sont deux procédures très différentes, avec des droits différents.",
    },
    { type: "h3", texte: "Garde à vue (GAV)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pourquoi** : vous êtes soupçonné d'avoir commis un délit (vol, violence, séjour irrégulier)",
        "**Durée** : 24h, renouvelable une fois (48h max en général)",
        "**Vos droits** :",
        "Droit à un **avocat** dès la première heure (gratuit si vous n'en avez pas → avocat commis d'office)",
        "Droit à un **interprète** gratuit si vous ne parlez pas français",
        "Droit de **prévenir un proche** par téléphone",
        "Droit d'être **examiné par un médecin**",
        "Droit de **garder le silence** : vous n'êtes pas obligé de répondre aux questions",
      ],
    },
    { type: "h3", texte: "Rétention administrative (CRA)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pourquoi** : vous faites l'objet d'une mesure d'éloignement (OQTF) et la préfecture vous place en Centre de Rétention Administrative en attendant l'exécution",
        "**Durée** : 48h initiales, prolongeables par un juge jusqu'à **90 jours maximum**",
        "**Vos droits** :",
        "Droit de contester devant le **Juge des Libertés et de la Détention (JLD)** dans les 48h",
        "Droit à un **avocat** (associations présentes sur place : La Cimade, France Terre d'Asile, Forum Réfugiés)",
        "Droit à un **interprète**",
        "Droit de **téléphoner** et de recevoir des visites",
        "Droit de déposer une **demande d'asile** même en rétention",
        "Droit de contester l'OQTF devant le tribunal administratif",
      ],
    },
    { type: "h3", texte: "Ce qu'il faut retenir" },
    {
      type: "p",
      texte: "Dans les deux cas, vous avez le droit à un avocat et à un interprète **gratuits**. Ne signez RIEN sans comprendre le document. Demandez systématiquement la traduction.",
    },
    { type: "h2", texte: "Filmer la police : est-ce légal en France ?", id: "filmer-police" },
    {
      type: "p",
      texte: "La question revient constamment, surtout depuis la polémique autour de la loi \"sécurité globale\" en 2021.",
    },
    { type: "h3", texte: "La réponse est OUI" },
    {
      type: "p",
      texte: "Filmer la police dans l'exercice de ses fonctions est **légal en France**. Le Conseil constitutionnel a confirmé ce droit le 20 mai 2021 en censurant l'article 24 de la loi \"sécurité globale\" qui tentait de l'interdire.",
    },
    { type: "h3", texte: "Les conditions" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez filmer depuis l'espace public (trottoir, rue, transport)",
        "Vous ne devez pas **entraver** l'opération de police (rester à distance raisonnable)",
        "Vous pouvez publier la vidéo en ligne (sauf si c'est dans une intention de nuire personnelle, comme publier l'adresse privée d'un agent)",
        "L'agent ne peut **PAS** exiger que vous effaciez la vidéo",
        "L'agent ne peut **PAS** saisir votre téléphone pour effacer la vidéo (sauf sur décision d'un magistrat)",
      ],
    },
    { type: "h3", texte: "Ce qu'un agent peut vous demander" },
    {
      type: "liste",
      style: "puces",
      items: [
        "De reculer si vous gênez l'opération → c'est légitime, reculez",
        "De ne pas diffuser en direct si c'est une opération sensible en cours → discutable, mais préférez obtempérer et diffuser après",
      ],
    },
    { type: "h3", texte: "En cas de saisie illégale du téléphone" },
    { type: "p", texte: "Si un agent saisit votre téléphone ou vous oblige à effacer :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Notez son matricule RIO",
        "Notez l'heure et le lieu exact",
        "Portez plainte auprès de l'**IGPN** (Inspection Générale de la Police Nationale) sur igpn.interieur.gouv.fr",
        "Contactez le **Défenseur des droits** sur defenseurdesdroits.fr",
      ],
    },
    { type: "h2", texte: "Contrôle abusif : les 4 recours possibles", id: "recours-controle-abusif" },
    {
      type: "p",
      texte: "Si vous estimez avoir été victime d'un contrôle abusif, discriminatoire ou violent, vous avez des recours concrets.",
    },
    { type: "h3", texte: "Recours n°1 : Le Défenseur des droits" },
    {
      type: "p",
      texte: "Le Défenseur des droits est une autorité indépendante qui peut enquêter sur les discriminations et les manquements à la déontologie policière. C'est le recours le plus accessible.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "En ligne : defenseurdesdroits.fr",
        "Par téléphone : 09 69 39 00 00 (gratuit)",
        "Par courrier : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07",
      ],
    },
    { type: "h3", texte: "Recours n°2 : Plainte à l'IGPN ou l'IGGN" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**IGPN** (pour la police nationale) : signalement en ligne sur igpn.interieur.gouv.fr",
        "**IGGN** (pour la gendarmerie) : par courrier à la Direction générale de la Gendarmerie nationale",
      ],
    },
    { type: "h3", texte: "Recours n°3 : Plainte pénale" },
    {
      type: "p",
      texte: "Si vous avez subi des violences, des insultes à caractère raciste, ou une fouille abusive :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Portez plainte au commissariat ou par courrier au Procureur de la République",
        "Faites constater les blessures par un médecin (certificat médical)",
        "Conservez tous les témoignages et vidéos",
      ],
    },
    { type: "h3", texte: "Recours n°4 : Recours en annulation" },
    { type: "p", texte: "Si vous avez été placé en rétention suite à un contrôle illégal :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre avocat peut demander au JLD l'annulation de la rétention pour **irrégularité de la procédure**",
        "Un contrôle discriminatoire rend toute la procédure qui en découle nulle",
        "Le tribunal administratif peut annuler l'OQTF si le contrôle initial était illégal",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Que vous soyez en situation régulière ou non, vous avez des droits fondamentaux lors d'un contrôle de police en France. Le droit de connaître le motif du contrôle, le droit à un avocat et un interprète gratuits, le droit de refuser une fouille abusive, le droit de filmer, le droit de porter plainte sans risque pour votre dossier de séjour. Ces droits existent parce que la France est un État de droit, et c'est justement ce que le test civique vous demande de connaître. Sauvegardez ce guide, partagez-le, et n'oubliez jamais : la connaissance de vos droits, c'est votre meilleure protection.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La police peut-elle me demander mes papiers dans la rue sans raison ?",
      reponse: "Non, un contrôle d'identité doit toujours être motivé : soit il existe des indices d'infraction, soit il y a une réquisition du procureur pour une zone et un créneau précis, soit vous êtes dans une zone frontalière (20 km). Un contrôle \"parce que vous avez l'air étranger\" est illégal et constitue un contrôle au faciès condamné par la justice.",
    },
    {
      question: "Est-ce que je suis obligé de porter mon titre de séjour sur moi en permanence ?",
      reponse: "La loi (article L812-1 du CESEDA) demande de pouvoir justifier de la régularité de votre séjour. En pratique, une photocopie ou une photo sur votre téléphone suffit pour un premier contrôle. Si la police veut vérifier, elle peut vous retenir maximum 4 heures pour vérification dans le fichier AGDREF. Gardez l'original en sécurité chez vous.",
    },
    {
      question: "Que faire si un policier refuse de me donner son matricule RIO ?",
      reponse: "Le port et l'affichage du numéro RIO sont obligatoires depuis 2014. Si un agent refuse de vous le communiquer, notez son nom (si visible), le lieu, l'heure et la description physique. Signalez le manquement à l'IGPN (igpn.interieur.gouv.fr) ou au Défenseur des droits.",
    },
    {
      question: "Est-ce que porter plainte contre la police peut mettre en danger mon titre de séjour ?",
      reponse: "Non. Le droit de porter plainte est un droit fondamental protégé par la Constitution. La police et la préfecture sont deux administrations distinctes. Votre plainte ne sera pas transmise au service des titres de séjour. Au contraire, exercer vos droits montre votre connaissance du système juridique français.",
    },
    {
      question: "La police peut-elle m'obliger à effacer une vidéo de mon téléphone ?",
      reponse: "Non. Filmer la police est légal en France (confirmé par le Conseil constitutionnel le 20 mai 2021). Un agent ne peut ni exiger l'effacement ni saisir votre téléphone sans décision d'un magistrat. Si cela se produit, notez le matricule RIO et portez plainte à l'IGPN.",
    },
  ],
};

export default article;
