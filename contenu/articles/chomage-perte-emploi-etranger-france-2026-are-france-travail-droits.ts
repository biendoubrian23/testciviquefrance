import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/chomage-perte-emploi-etranger-france-2026-are-france-travail-droits`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "chomage-perte-emploi-etranger-france-2026-are-france-travail-droits",
  titre: "Chômage et perte d'emploi quand on est étranger en France 2026 : ARE, France Travail, titre de séjour",
  titreSeo: "Chômage et perte d'emploi quand on est étranger en France 2026 : ARE, France Travail, titre de séjour",
  resume: "Perdre son emploi en tant qu'étranger : droits au chômage (ARE), inscription France Travail, impact sur le renouvellement du titre de séjour salarié et solutions pour rebondir.",
  chapo: "Perdre son emploi quand on est étranger en France génère une double angoisse : comment subvenir à ses besoins ET conserver son titre de séjour ? Les étrangers en situation régulière ont le droit aux allocations chômage dans les mêmes conditions que les Français, mais l'impact sur le renouvellement du titre de séjour inquiète. Ce guide détaille vos droits auprès de France Travail (ex-Pôle emploi), les conditions pour toucher l'ARE, l'impact du chômage sur votre titre de séjour et les solutions pour rebondir.",
  publieLe: "2026-04-03",
  modifieLe: "2026-04-03",
  minutes: 20,
  theme: "chômage étranger France 2026",
  motsCles: [
    "chômage étranger France 2026",
    "perte emploi étranger titre séjour",
    "ARE allocation chômage étranger",
    "France Travail étranger inscription",
    "droit chômage étranger France",
    "renouvellement titre séjour chômage",
    "licenciement étranger droits",
    "fin CDD étranger chômage",
    "étranger perd son travail France",
    "titre séjour salarié chômage",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  blocs: [
    {
      type: "h2",
      texte: "Oui, les étrangers ont droit au chômage en France",
      id: "droit-chomage-etranger",
    },
    {
      type: "p",
      texte: "Contrairement à une idée reçue, les étrangers en situation régulière bénéficient des allocations chômage **dans les mêmes conditions que les travailleurs français**. Le droit au chômage est lié au **contrat de travail et aux cotisations versées**, pas à la nationalité.",
    },
    { type: "h3", texte: "Conditions pour toucher l'ARE (Allocation d'aide au Retour à l'Emploi) :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Avoir travaillé au moins 6 mois** (130 jours ou 910 heures) au cours des 24 derniers mois",
        "**Avoir été involontairement privé d'emploi** : licenciement, fin de CDD, rupture conventionnelle, démission légitime",
        "**Être inscrit à France Travail** dans les 12 mois suivant la fin du contrat",
        "**Être en situation régulière** : titre de séjour valide autorisant le travail",
        "**Résider en France** et être à la recherche effective d'un emploi",
        "**Ne pas avoir atteint l'âge de la retraite**",
      ],
    },
    {
      type: "p",
      texte: "**Montant de l'ARE** : environ **57 %** du salaire journalier de référence (brut), avec un minimum de 31,59 €/jour (environ 950 €/mois). La durée d'indemnisation dépend de la durée de cotisation : de 6 mois à 24 mois (36 mois pour les plus de 53 ans).",
    },
    {
      type: "h2",
      texte: "S'inscrire à France Travail quand on est étranger",
      id: "inscription-france-travail",
    },
    {
      type: "p",
      texte: "L'inscription à France Travail (ex-Pôle emploi) est **obligatoire** pour percevoir l'ARE et recommandée pour votre titre de séjour (preuve de recherche active d'emploi).",
    },
    { type: "h3", texte: "Procédure d'inscription :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne** : francetravail.fr > « M'inscrire / me réinscrire » (dès le lendemain de votre dernier jour de travail)",
        "**Documents nécessaires** : Titre de séjour en cours de validité (recto-verso) Attestation employeur (remise par votre ex-employeur à la fin du contrat) Carte Vitale ou attestation de droits CPAM RIB CV",
        "**Rendez-vous d'inscription** : convoqué sous 1 à 2 semaines pour un entretien avec un conseiller",
      ],
    },
    { type: "h3", texte: "⚠️ Points d'attention pour les étrangers :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "France Travail vérifie la **validité de votre titre de séjour** et la mention « autorise à travailler »",
        "Si votre titre expire pendant la période de chômage, vous devez **renouveler votre titre** et transmettre le récépissé à France Travail",
        "Avec un **récépissé de renouvellement** portant la mention « autorise à travailler », vous restez inscrit normalement",
        "France Travail ne signale **pas** votre situation à la préfecture, les deux institutions sont indépendantes",
      ],
    },
    { type: "h2", texte: "Impact du chômage sur votre titre de séjour", id: "impact-titre-sejour" },
    {
      type: "p",
      texte: "C'est la question centrale : **le chômage peut-il entraîner le retrait ou le non-renouvellement de votre titre de séjour ?** La réponse dépend du type de titre.",
    },
    { type: "h3", texte: "Carte de séjour « salarié » (1 an) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le titre est lié à un **employeur et un métier spécifique**",
        "En cas de perte d'emploi involontaire, l'article L432-3 du CESEDA prévoit : le titre n'est **pas retiré** si la perte d'emploi est involontaire",
        "Au renouvellement, la préfecture examine si vous avez **retrouvé un emploi ou si vous êtes en recherche active**",
        "**Conseil** : gardez vos attestations France Travail et preuves de recherche d'emploi (candidatures, entretiens) : c'est votre meilleur argument en préfecture",
      ],
    },
    { type: "h3", texte: "Carte de séjour pluriannuelle « salarié » (4 ans) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plus souple : le titre est lié à l'exercice d'une activité salariée en général, pas à un employeur spécifique",
        "Une période de chômage ne justifie pas un retrait",
        "Au renouvellement, justifiez de votre intégration globale (travail passé, recherche active, formation)",
      ],
    },
    { type: "h3", texte: "Carte « vie privée et familiale » :" },
    {
      type: "liste",
      style: "puces",
      items: ["**Pas d'impact**. Ce titre n'est pas lié à l'emploi mais à votre situation familiale"],
    },
    { type: "h3", texte: "Carte de résident (10 ans) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pas d'impact**. La carte de résident n'est pas conditionnée à l'emploi. Le chômage ne peut pas entraîner son non-renouvellement",
      ],
    },
    { type: "h3", texte: "VLS-TS ou titre « travailleur temporaire » :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le plus fragile. Ce titre est lié à un contrat spécifique. La fin du contrat peut poser problème au renouvellement",
        "**Solution** : demandez un changement de statut si vous retrouvez un emploi dans un autre secteur",
      ],
    },
    {
      type: "h2",
      texte: "Formation professionnelle et reconversion pendant le chômage",
      id: "formation-reconversion",
    },
    {
      type: "p",
      texte: "Le chômage peut être l'occasion de se former et d'augmenter vos chances de retrouver un emploi, et de renforcer votre dossier pour le titre de séjour.",
    },
    { type: "h3", texte: "Formations accessibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**CPF** (Compte Personnel de Formation) : si vous avez travaillé en France, vous avez un CPF crédité de 500 €/an (plateforme moncompteformation.gouv.fr)",
        "**Formations France Travail** : votre conseiller peut vous proposer des formations financées (POEI, AFC, AFPR)",
        "**Formations linguistiques** : cours de français gratuits via l'OFII, les associations (Alliance française) ou le CPF",
        "**VAE** (Validation des Acquis de l'Expérience) : faites reconnaître votre expérience professionnelle par un diplôme français",
        "**Apprentissage et alternance** : possible pour les moins de 30 ans avec un titre de séjour valide",
      ],
    },
    { type: "h3", texte: "Avantage pour votre titre de séjour :" },
    {
      type: "p",
      texte: "Suivre une formation pendant le chômage est un **signe positif d'intégration**. La préfecture considère favorablement les personnes qui investissent dans leur formation professionnelle et linguistique.",
    },
    {
      type: "h2",
      texte: "Cas particuliers : licenciement abusif, CDD non renouvelé, rupture conventionnelle",
      id: "cas-particuliers",
    },
    { type: "p", texte: "Chaque situation a ses spécificités :" },
    { type: "h3", texte: "Licenciement économique ou abusif :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez droit aux **mêmes protections qu'un salarié français** : indemnité de licenciement, préavis, ARE",
        "Vous pouvez contester le licenciement devant le **Conseil de prud'hommes** (aide juridictionnelle possible)",
        "Un licenciement abusif ouvre droit à des **dommages et intérêts** (barème Macron : 3 à 20 mois de salaire selon l'ancienneté)",
      ],
    },
    { type: "h3", texte: "Fin de CDD / intérim :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La fin d'un CDD ouvre droit à l'ARE si vous avez cumulé suffisamment de jours travaillés",
        "Vous touchez aussi la **prime de précarité** (10 % du salaire brut total du CDD)",
        "Si le CDD n'est pas renouvelé, c'est considéré comme une perte involontaire d'emploi",
      ],
    },
    { type: "h3", texte: "Rupture conventionnelle :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Permet de quitter un CDI **d'un commun accord** avec l'employeur",
        "Ouvre droit à l'ARE",
        "**Attention** : la préfecture peut considérer que vous avez « volontairement » quitté votre emploi. Conservez la convention de rupture homologuée par la DREETS comme justificatif",
      ],
    },
    { type: "h3", texte: "Démission :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En principe, **pas de droit à l'ARE** sauf démission légitime (déménagement pour suivre conjoint, non-paiement de salaire, harcèlement…)",
        "Depuis 2019 : droit à l'ARE après 5 ans d'activité continue si vous démissionnez pour un **projet professionnel** (création d'entreprise, reconversion validée par un CEP)",
      ],
    },
    {
      type: "h2",
      texte: "Maintien des droits sociaux pendant le chômage",
      id: "maintien-droits-sociaux",
    },
    { type: "p", texte: "Perdre son emploi ne signifie pas perdre tous ses droits :" },
    { type: "h3", texte: "Droits maintenus :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Assurance maladie** : vous restez couvert par la Sécurité sociale pendant toute la durée du chômage (y compris après la fin des droits ARE, via la couverture universelle maladie)",
        "**Aides au logement** (APL) : vos droits sont recalculés en fonction de vos nouvelles ressources, souvent à la hausse",
        "**Allocations familiales** : pas d'impact",
        "**Prime d'activité** : perdue si vous ne travaillez plus, mais remplacée par l'ARE",
        "**RSA** : accessible après épuisement des droits ARE (si 5 ans de séjour régulier pour les non-européens)",
      ],
    },
    { type: "h3", texte: "Conseil pratique :" },
    {
      type: "p",
      texte: "Dès la perte d'emploi, actualisez votre situation auprès de la **CAF** (mise à jour des ressources), la **CPAM** (maintien de droits) et votre **mutuelle** (portabilité gratuite pendant 12 mois grâce à la loi ANI).",
    },
    {
      type: "h2",
      texte: "Ce que le test civique demande sur le travail et le chômage",
      id: "lien-test-civique-travail",
    },
    {
      type: "p",
      texte: "La thématique « **Vivre dans la société française** » inclut des questions sur le travail :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le droit au travail** est garanti par le Préambule de la Constitution de 1946",
        "**Le SMIC** (Salaire Minimum Interprofessionnel de Croissance) fixe le salaire minimum légal, environ 1 400 € net en 2026",
        "**Le Code du travail** protège tous les salariés (français et étrangers) : durée du travail (35h), congés payés (5 semaines), protection contre le licenciement abusif",
        "**France Travail** (ex-Pôle emploi) est le service public de l'emploi",
        "**Les cotisations sociales** financent le chômage, la retraite et la santé, c'est le principe de solidarité",
      ],
    },
    { type: "p", texte: "Préparez ces questions avec nos [QCM gratuits](/dashboard/entrainement)." },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La perte d'emploi en tant qu'étranger en France n'est pas une impasse. Vous avez les mêmes droits au chômage que les travailleurs français si vous avez cotisé suffisamment. L'impact sur votre titre de séjour dépend de son type : les cartes « vie privée et familiale » et « résident » ne sont pas affectées, tandis que la carte « salarié » nécessite de prouver votre recherche active d'emploi au renouvellement. Inscrivez-vous à France Travail dès le premier jour, profitez des formations disponibles et conservez toutes vos preuves de recherche d'emploi. Pour votre naturalisation, le test civique aborde le droit du travail et la protection sociale, entraînez-vous sur [notre plateforme gratuite](/dashboard/entrainement).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "France Travail peut-il signaler ma situation à la préfecture ?",
      reponse: "Non. France Travail et les préfectures sont des institutions indépendantes. France Travail ne transmet pas de données sur votre statut à la préfecture. Votre inscription au chômage est confidentielle et ne peut pas être utilisée contre vous.",
    },
    {
      question: "Puis-je renouveler mon titre de séjour salarié si je suis au chômage ?",
      reponse: "Oui, c'est possible. La loi prévoit que la perte involontaire d'emploi ne justifie pas le retrait du titre. Présentez vos attestations France Travail, preuves de recherche d'emploi et, si possible, une promesse d'embauche. La préfecture évalue votre intégration globale.",
    },
    {
      question: "Ai-je droit au chômage si j'ai travaillé au noir ?",
      reponse: "Non. Le travail non déclaré ne génère aucune cotisation à l'assurance chômage. Vous n'aurez pas de droits à l'ARE. De plus, le travail dissimulé est un délit pénal qui peut entraîner le non-renouvellement de votre titre de séjour.",
    },
    {
      question: "Combien de temps puis-je rester au chômage sans perdre mon titre de séjour ?",
      reponse: "Il n'y a pas de durée légale fixe. La préfecture examine votre situation au moment du renouvellement. Une période de chômage de 6 à 12 mois avec recherche active est généralement acceptée. Au-delà, constituez un dossier solide (formations suivies, candidatures, activité bénévole).",
    },
  ],
  sources: [
    {
      titre: "France Travail : Inscription et droits au chômage",
      url: "https://www.francetravail.fr/candidat/droits-aux-allocations.html",
      type: "officiel",
      description: "Conditions d'inscription et droits à l'ARE pour les demandeurs d'emploi",
    },
    {
      titre: "Service-Public.fr, Perte d'emploi et titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2215",
      type: "officiel",
      description: "Impact de la perte d'emploi sur le droit au séjour des étrangers",
    },
    {
      titre: "CESEDA : Article L432-3 (rupture du contrat de travail)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776268/",
      type: "juridique",
      description: "Protection du titre de séjour en cas de perte involontaire d'emploi",
    },
    {
      titre: "Unédic : Réglementation assurance chômage",
      url: "https://www.unedic.org/la-reglementation",
      type: "officiel",
      description: "Règles de calcul et conditions d'indemnisation du chômage",
    },
  ],
};

export default article;
