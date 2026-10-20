import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nouveaux-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais`).
 *
 * Réécrit le 20/10/2026 selon la doctrine du robot (`docs/seo/ROBOT.md`), et
 * fusionné avec le doublon `regroupement-familial-france-procedure-2025`
 * (même intention de recherche), dont l'adresse redirige ici en 301. Chaque
 * règle est reprise de service-public (fiche F11166 et suivantes), lue le
 * 20/10/2026. Corrigé à cette occasion : les ressources se calculent sur le
 * Smic brut et par tranche (2 ou 3, 4 ou 5, 6 personnes et plus), pas sur le
 * Smic net multiplié par personne ; les surfaces dépendent de la zone ; la
 * décision revient au préfet, pas à l'OFII ; la formation civique dure
 * 24 heures, pas 4 ; les réfugiés relèvent d'une autre procédure (la
 * réunification familiale). La loi du 26 janvier 2024 n'a rien changé au
 * regroupement familial : son article 3 (24 mois de séjour, etc.) a été
 * censuré par le Conseil constitutionnel (décision 2023-863 DC).
 * L'image de couverture vient d'Unsplash (licence Unsplash : usage libre,
 * commercial compris) ; ses dimensions sont nominales.
 */
const article: Article = {
  slug: "regroupement-familial-france-2026-guide-complet-conditions-documents-delais",
  titre: "Regroupement familial en 2026 : faire venir votre conjoint et vos enfants, conditions et étapes",
  titreSeo: "Regroupement familial 2026 : conditions et étapes",
  resume: "Conjoint et enfants mineurs : 18 mois de séjour, ressources au niveau du Smic, logement selon la zone, dossier à l'OFII, décision du préfet sous 6 mois.",
  chapo: "Pour faire venir votre époux ou épouse et vos enfants mineurs, vous devez vivre en France de façon régulière depuis au moins **18 mois**. Il faut aussi des ressources stables et un logement assez grand. Le dossier part à l'OFII, et c'est le préfet qui décide, en 6 mois au plus.",
  publieLe: "2026-04-04",
  modifieLe: "2026-10-20",
  minutes: 9,
  theme: "regroupement familial France 2026",
  motsCles: [
    "regroupement familial France 2026",
    "regroupement familial conditions",
    "regroupement familial revenus",
    "regroupement familial logement",
    "faire venir conjoint France",
    "faire venir enfants France étranger",
    "faire venir sa famille en france",
    "OFII regroupement familial",
    "dossier regroupement familial préfecture",
    "délai regroupement familial France",
    "regroupement familial refus recours",
    "visa famille france",
    "titre de séjour regroupement familial",
    "regroupement familial 18 mois",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    alt: "Une grande famille, adultes et enfants main dans la main, de dos sur une plage au coucher du soleil",
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
      texte: "Le regroupement familial, c'est la démarche qui permet à une personne étrangère installée en France de faire venir sa famille proche. Les règles sont dans le CESEDA (le code qui fixe le droit des étrangers en France), aux articles L434-1 et suivants. Service-public les résume dans sa [fiche F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166), vérifiée le 1er juin 2026.",
    },
    {
      type: "p",
      texte: "Deux personnes jouent un rôle. **Le demandeur** vit déjà en France avec un titre de séjour (la carte qui autorise à vivre en France). **Les bénéficiaires** sont les membres de la famille qui vivent à l'étranger.",
    },
    { type: "h3", texte: "Qui peut venir ?" },
    {
      type: "liste",
      style: "coches",
      items: [
        "votre époux ou épouse, majeur (18 ans au moins) et légalement marié avec vous.",
        "les enfants mineurs du couple, y compris les enfants adoptés.",
        "dans certains cas, les enfants mineurs nés d'une union précédente.",
      ],
    },
    {
      type: "p",
      texte: "L'âge est apprécié le jour du dépôt de la demande. En principe, toute la famille vient en même temps. Un regroupement partiel reste possible à titre exceptionnel, avec une lettre qui explique l'intérêt de l'enfant ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    { type: "h3", texte: "Qui ne peut pas venir par cette voie ?" },
    {
      type: "liste",
      style: "alertes",
      items: [
        "vos parents : service-public indique qu'ils peuvent demander un statut de visiteur.",
        "les enfants majeurs, et les frères et sœurs.",
        "une deuxième épouse, si une première épouse vit déjà en France.",
      ],
    },
    {
      type: "p",
      texte: "Pour une visite courte de vos proches, voyez plutôt l'[attestation d'accueil](/articles/attestation-accueil-inviter-famille-france-2026-mairie-conditions). Pour un mariage récent, notre guide du [mariage avec une personne étrangère](/articles/mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour) détaille les autres démarches.",
    },
    { type: "h2", texte: "Depuis combien de temps devez-vous vivre en France ?", id: "conditions-sejour" },
    {
      type: "p",
      texte: "Il faut résider en France depuis **18 mois au moins**, de façon régulière. Plusieurs papiers comptent dans ces 18 mois : un visa long séjour, une carte de séjour ou une carte de résident. Comptent aussi une autorisation provisoire de séjour, un récépissé (le papier qui prouve qu'une demande est en cours) ou une attestation de demande d'asile ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    {
      type: "p",
      texte: "Le jour du dépôt, vous devez avoir l'un de ces titres :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "une carte de séjour temporaire d'au moins 1 an, ou une carte de séjour pluriannuelle (valable plusieurs années).",
        "une carte de résident de 10 ans, ou une carte de résident de longue durée-UE délivrée par la France.",
        "le récépissé d'une demande de renouvellement de l'une de ces cartes.",
      ],
    },
    {
      type: "encadre",
      titre: "La loi de 2024 n'a pas changé ces 18 mois",
      texte: "Le Parlement avait voté en décembre 2023 des règles plus strictes pour le regroupement familial. Le Conseil constitutionnel a censuré cet article le 25 janvier 2024, pour une raison de procédure ([décision 2023-863 DC](https://www.conseil-constitutionnel.fr/decision/2024/2023863DC.htm)). La loi du 26 janvier 2024 ne contient donc pas ces mesures. En octobre 2026, la règle reste de 18 mois. Service-public ne prévoit ni test de langue ni assurance maladie à prouver avant l'arrivée.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Des règles propres s'appliquent dans deux cas. À Mayotte, il faut 3 ans de séjour et un titre d'au moins 5 ans. Les Algériens suivent l'accord franco-algérien : un certificat de résidence d'au moins 1 an et 1 an de résidence en France ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    { type: "h2", texte: "Quelles ressources faut-il en 2026 ?", id: "conditions-revenus" },
    {
      type: "p",
      texte: "Vos ressources doivent être stables et suffisantes. Service-public prend la moyenne de vos revenus sur les **12 derniers mois** avant la demande. Le seuil se compare au Smic **brut** (le salaire minimum avant cotisations), selon la taille de la famille :",
    },
    {
      type: "tableau",
      entetes: ["Taille de la famille", "Moyenne mensuelle minimum sur 12 mois"],
      lignes: [
        ["2 ou 3 personnes", "1 867,02 € brut (le Smic)"],
        ["4 ou 5 personnes", "2 053,72 € brut (le Smic plus un dixième)"],
        ["6 personnes ou plus", "2 240,42 € brut (le Smic plus un cinquième)"],
      ],
      legende: "Source : service-public, fiche F11166 vérifiée le 1er juin 2026, lue le 20/10/2026. Les montants suivent le Smic et peuvent changer.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "comptent : les revenus du travail (salarié ou non), le patrimoine, les pensions de retraite.",
        "comptent aussi : les revenus de votre conjoint, s'ils continueront à lui être versés.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "ne comptent pas : les prestations familiales, le RSA, l'Aspa, l'Ata, l'ASS et l'AER.",
      ],
    },
    {
      type: "p",
      texte: "Deux cas sont dispensés de cette condition. Le premier : vous touchez l'AAH (l'allocation aux adultes handicapés) ou l'Asi. Le second : vous avez plus de 65 ans, vous vivez en France depuis 25 ans, et la demande concerne votre conjoint, marié depuis 10 ans. Pour les Algériens, le seuil est le Smic, sans les prestations familiales ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    { type: "h2", texte: "Quel logement faut-il prévoir ?", id: "conditions-logement" },
    {
      type: "p",
      texte: "Le logement doit être décent et normal pour une famille comparable de la région. Vous devez l'avoir au plus tard à l'arrivée de la famille. La surface minimale dépend de la zone de votre commune. Le simulateur de zonage de service-public vous la donne.",
    },
    {
      type: "tableau",
      entetes: ["Zone de la commune", "Surface pour 2 personnes", "Par personne en plus"],
      lignes: [
        ["Zones A bis et A (grandes villes chères)", "22 m²", "+ 10 m² jusqu'à 8 personnes, puis + 5 m²"],
        ["Zones B1 et B2", "24 m²", "+ 10 m² jusqu'à 8 personnes, puis + 5 m²"],
        ["Zone C", "28 m²", "+ 10 m² jusqu'à 8 personnes, puis + 5 m²"],
      ],
      legende: "Source : service-public, fiche F11166, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Exemple : un couple avec deux enfants vit en zone B1. Il faut 24 m² pour deux, plus 10 m² par enfant, soit 44 m² au moins. Des agents habilités peuvent venir voir le logement pour vérifier le confort et l'hygiène ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    { type: "h2", texte: "Comment se passe la demande, étape par étape ?", id: "procedure" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifier les conditions** avec le simulateur de service-public.",
        "**Préparer le dossier** : le formulaire cerfa, votre titre de séjour, les actes d'état civil traduits, les preuves de ressources et de logement sur 12 mois.",
        "**Déposer le dossier à l'OFII** (l'Office français de l'immigration et de l'intégration) : en ligne, ou par courrier recommandé avec accusé de réception. Choisissez un seul des deux.",
        "**L'examen par le maire** : il vérifie les ressources et le logement, et donne son avis en 2 mois. Sans réponse, son avis compte comme favorable.",
        "**La décision du préfet** : c'est le représentant de l'État dans votre département (le préfet de police à Paris). Il accepte ou refuse.",
        "**Le visa** : si c'est oui, la famille demande un visa de long séjour au consulat, puis entre en France dans les 3 mois.",
      ],
    },
    {
      type: "p",
      texte: "Toutes ces étapes sont décrites dans la [fiche F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166). Service-public propose aussi un simulateur qui donne la liste exacte des pièces selon votre cas : utilisez-le avant d'envoyer quoi que ce soit.",
    },
    { type: "h2", texte: "Combien de temps faut-il attendre ?", id: "delais" },
    {
      type: "p",
      texte: "Le préfet doit vous notifier sa décision **dans les 6 mois** qui suivent le dépôt du dossier complet à l'OFII. S'il ne répond pas dans ce délai, la demande est refusée. On parle de refus implicite ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)).",
    },
    {
      type: "p",
      texte: "Le temps du visa au consulat s'ajoute ensuite. Aucune source officielle ne donne de durée moyenne de bout en bout : méfiez-vous des chiffres « réels » qui circulent. Un dossier complet dès le départ évite les demandes de pièces en plus.",
    },
    { type: "h2", texte: "Que faire en cas de refus ?", id: "refus-recours" },
    {
      type: "p",
      texte: "Un refus doit être motivé, c'est-à-dire expliqué par écrit. Vous pouvez le contester de deux façons ([F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**le recours administratif** : une lettre au préfet (recours gracieux, qui demande à l'auteur de revoir sa décision) ou au ministre de l'Intérieur (recours hiérarchique). Le délai est de 2 mois ([F2474](https://www.service-public.gouv.fr/particuliers/vosdroits/F2474)).",
        "**le recours contentieux** : c'est la demande faite au juge. Elle va au tribunal administratif, qui juge les litiges avec l'administration. Le délai est de 2 mois après la décision, 3 mois outre-mer et 4 mois depuis l'étranger ([F2478](https://www.service-public.gouv.fr/particuliers/vosdroits/F2478)).",
      ],
    },
    {
      type: "p",
      texte: "Un recours administratif envoyé à temps interrompt le délai pour saisir le juge ([F2474](https://www.service-public.gouv.fr/particuliers/vosdroits/F2474)). Selon vos revenus, l'aide juridictionnelle peut payer tout ou partie des frais d'avocat. Pour votre cas précis, adressez-vous à un avocat ou à une association comme La Cimade. Vous pouvez aussi saisir le Défenseur des droits (l'autorité qui vous défend face à l'administration).",
    },
    { type: "h2", texte: "Que fait la famille en arrivant en France ?", id: "arrivee-ofii" },
    {
      type: "liste",
      style: "coches",
      items: [
        "valider en ligne le VLS-TS (le visa de long séjour qui vaut titre de séjour) dans les 3 mois qui suivent l'arrivée.",
        "passer la visite médicale prévue par l'OFII.",
        "signer le CIR (contrat d'intégration républicaine) : c'est le cas du conjoint et des enfants de plus de 16 ans.",
        "payer 150 € pour la demande de titre de séjour à la préfecture (le service de l'État dans le département), selon service-public.",
      ],
    },
    {
      type: "p",
      texte: "Ces obligations viennent de la [fiche F11166](https://www.service-public.gouv.fr/particuliers/vosdroits/F11166). Avec le CIR, la formation civique est obligatoire : 4 sessions, 24 heures au total. Une formation de français est proposée si le niveau est sous A2 ([F17048](https://www.service-public.gouv.fr/particuliers/vosdroits/F17048)). Notre page sur le [contrat d'intégration républicaine](/articles/contrat-integration-republicaine-cir-2026-formation-civique) détaille son contenu.",
    },
    {
      type: "p",
      texte: "La suite compte aussi. Depuis le 1er janvier 2026, une carte de séjour pluriannuelle demande la réussite à l'examen civique et le niveau A2 en français ([F17048](https://www.service-public.gouv.fr/particuliers/vosdroits/F17048)). Notre article sur l'[examen civique pour la carte pluriannuelle](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026) explique qui est concerné. Les types de cartes sont présentés dans le [guide de la carte de séjour](/articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement).",
    },
    { type: "h2", texte: "Réfugiés : une autre procédure, la réunification familiale", id: "refugies" },
    {
      type: "p",
      texte: "Si vous avez le statut de réfugié ou la protection subsidiaire, une autre démarche existe : la réunification familiale. La famille demande directement un visa de long séjour au consulat du pays où elle vit. Les liens familiaux doivent dater d'avant votre demande d'asile ([F35158](https://www.service-public.gouv.fr/particuliers/vosdroits/F35158)). Un mariage plus récent relève du regroupement familial décrit plus haut.",
    },
    {
      type: "cta",
      texte: "Votre conjoint devra un jour passer l'examen civique ? Vérifiez en une minute si l'examen le concerne.",
      bouton: "Tester l'éligibilité",
    },
  ],
  faq: [
    {
      question: "Quel salaire pour le regroupement familial en 2026 ?",
      reponse: "Pour 2 ou 3 personnes, la moyenne de vos revenus sur 12 mois doit atteindre le Smic brut, soit 1 867,02 € par mois selon service-public. Il faut 2 053,72 € pour 4 ou 5 personnes, et 2 240,42 € à partir de 6. Les prestations familiales et le RSA ne comptent pas.",
    },
    {
      question: "Combien de temps dure la procédure de regroupement familial ?",
      reponse: "Le préfet a 6 mois pour décider, à partir du dépôt du dossier complet à l'OFII. Sans réponse dans ce délai, la demande est refusée. Il faut ensuite ajouter le temps du visa au consulat, puis 3 mois au plus pour que la famille entre en France.",
    },
    {
      question: "Peut-on faire venir ses parents par regroupement familial ?",
      reponse: "Non. Le regroupement familial vise seulement l'époux ou l'épouse et les enfants mineurs. Service-public indique que les parents peuvent demander un statut de visiteur. Pour une visite courte, ils peuvent venir avec une attestation d'accueil signée par la personne qui les reçoit en France.",
    },
    {
      question: "La loi immigration de 2024 a-t-elle allongé le délai à 24 mois ?",
      reponse: "Non. Le Parlement avait voté 24 mois, mais le Conseil constitutionnel a censuré cet article le 25 janvier 2024, pour une raison de procédure. En octobre 2026, service-public indique toujours 18 mois de séjour régulier en France avant de pouvoir déposer la demande.",
    },
  ],
  sources: [
    {
      titre: "Service-public : regroupement familial (F11166)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11166",
      type: "officiel",
      description: "Conditions de séjour, ressources, logement, procédure, délai et recours. Vérifiée le 1er juin 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Conseil constitutionnel : décision n° 2023-863 DC du 25 janvier 2024",
      url: "https://www.conseil-constitutionnel.fr/decision/2024/2023863DC.htm",
      type: "juridique",
      description: "Censure de l'article 3 de la loi immigration, qui modifiait les conditions du regroupement familial.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : contrat d'intégration républicaine (F17048)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17048",
      type: "officiel",
      description: "Formation civique de 24 heures, formation linguistique, examen civique pour la carte pluriannuelle. Vérifiée le 26 juin 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : recours administratif (F2474)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2474",
      type: "officiel",
      description: "Recours gracieux et hiérarchique : délai de 2 mois. Vérifiée le 11 mai 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : recours contentieux devant le juge administratif (F2478)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2478",
      type: "officiel",
      description: "Délai de 2 mois (3 mois outre-mer, 4 mois à l'étranger). Vérifiée le 19 juin 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : réunification familiale d'un réfugié (F35158)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35158",
      type: "officiel",
      description: "La procédure propre aux réfugiés et bénéficiaires de la protection subsidiaire. Vérifiée le 22 avril 2026.",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement",
      ancre: "Guide de la carte de séjour",
    },
    {
      slug: "attestation-accueil-inviter-famille-france-2026-mairie-conditions",
      ancre: "L'attestation d'accueil pour la famille",
    },
    {
      slug: "mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour",
      ancre: "Mariage avec une personne étrangère en France",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Déposer une demande sur l'ANEF",
    },
  ],
};

export default article;
