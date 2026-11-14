import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-4.ts`, sans changer d'adresse.
 * Réécrit par le robot éditorial le 14/11/2026 (`docs/seo/ROBOT.md`, liste « à revérifier »).
 * Faux dans la version migrée : l'APL « quel que soit votre titre » (faux depuis le 01/07/2026 pour
 * les étudiants non européens, F1563), l'AME de l'enfant « après 3 mois de présence » (les mineurs y
 * ont droit sans délai, F3079), la prime à la naissance à 1 049 € versée « au 7e mois » (1 093,11 €,
 * versée après le 6e mois, F2550), l'allocation de base « jusqu'à 185 € » (198,16 €, F2552), la
 * déclaration de grossesse « avant 14 semaines » (avant la fin du 3e mois), la carte « parent d'enfant
 * français » sans la condition des 2 ans d'entretien (F2209). Retirés faute de source : « des centaines
 * de milliers de naissances », les préfectures « réticentes à expulser », le CNF « gratuit, 1 à 6 mois ».
 * Sources lues le 14/11/2026 : service-public F3068, F295, F961, F2550, F2552, F2787, F13213, F3079,
 * F2209 (vérifiée le 06/11/2026), F1563, F1051.
 */
const article: Article = {
  slug: "avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations",
  titre: "Enfant né en France de parents étrangers : est-il français, quelles aides de la CAF, et quel effet sur votre titre de séjour ?",
  titreSeo: "Enfant né en France de parents étrangers : droits",
  resume: "Né en France de parents étrangers, votre enfant n'est pas français à la naissance, sauf exception. Nationalité, aides de la CAF, AME et titre de séjour.",
  chapo: "Un enfant né en France de deux parents étrangers ==n'est pas français à la naissance==, sauf si l'un des parents est lui-même né en France. Il peut le devenir dès 13 ans par une déclaration, ou automatiquement à 18 ans. Les aides de la CAF (caisse d'allocations familiales) ne dépendent pas de la nationalité, mais de la ==régularité de votre séjour==.",
  publieLe: "2026-04-12",
  modifieLe: "2026-11-14",
  minutes: 7,
  theme: "Enfant né en France de parents étrangers : nationalité, aides et titre de séjour",
  motsCles: [
    "enfant né en France de parents étrangers",
    "droit du sol France nationalité enfant",
    "enfant né en France nationalité française",
    "allocations familiales étranger France",
    "prime de naissance étranger",
    "titre de séjour parent d'enfant français",
    "naissance enfant étranger France titre de séjour",
    "AME enfant",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/enfant-ne-en-france-parents-etrangers.webp",
    alt: "Un lit de bébé neuf en bois clair et blanc, posé dans une pièce vide",
    largeur: 1024,
    hauteur: 683,
    credit: "Associated Fabrication, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/31167421@N07/5097130297",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 14 novembre 2026",
      texte: "La version précédente contenait des erreurs. L'aide au logement n'est plus ouverte à tous les titres de séjour : depuis le 1er juillet 2026, les étudiants non européens n'y ont droit que dans trois cas. Un enfant mineur a droit à l'AME sans attendre 3 mois. La prime à la naissance vaut 1 093,11 €, et l'allocation de base 198,16 € par mois au plus. Les chiffres sans source ont été retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Votre enfant né en France est-il français ?",
    },
    {
      type: "p",
      texte: "En France, la nationalité passe d'abord par les parents. Un enfant est français de naissance si ==au moins un de ses parents est français==, qu'il soit né en France ou ailleurs ([service-public, F3068](https://www.service-public.gouv.fr/particuliers/vosdroits/F3068)). Si ses deux parents sont étrangers, la naissance en France ne suffit pas.",
    },
    {
      type: "tableau",
      entetes: ["Situation de l'enfant né en France", "Nationalité française"],
      lignes: [
        ["Au moins un parent français", "Français dès la naissance"],
        ["Deux parents étrangers, dont un né en France", "Français dès la naissance (on parle de « double droit du sol »)"],
        ["Deux parents étrangers nés à l'étranger, enfant de 13 à 17 ans", "Possible par une déclaration, sous condition de résidence"],
        ["Deux parents étrangers nés à l'étranger, jeune de 18 ans", "Automatique, sous condition de résidence"],
      ],
    },
    {
      type: "p",
      texte: "Le droit du sol, c'est la règle qui donne des droits à la nationalité parce qu'on est né sur le sol français. Les conditions de résidence sont précises ([service-public, F295](https://www.service-public.gouv.fr/particuliers/vosdroits/F295)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**De 13 à 15 ans** : les parents font la déclaration, avec l'accord de l'enfant. Il doit avoir vécu en France au moins 5 ans depuis ses 8 ans.",
        "**À 16 ou 17 ans** : le jeune fait la déclaration lui-même. Il doit avoir vécu en France au moins 5 ans depuis ses 11 ans.",
        "**À 18 ans** : le jeune devient français sans démarche, s'il vit en France et y a vécu au moins 5 ans depuis ses 11 ans.",
      ],
    },
    {
      type: "p",
      texte: "La déclaration se dépose au tribunal judiciaire, le tribunal qui traite les questions de nationalité. Les étapes sont détaillées dans notre article sur [la nationalité des enfants mineurs](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration). À Mayotte, une condition de plus s'ajoute : le séjour régulier d'un parent à la naissance (voir [le droit du sol à Mayotte](/articles/droit-du-sol-mayotte)).",
    },
    {
      type: "h2",
      texte: "Que faire dans les jours qui suivent la naissance ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Déclarer la naissance à la mairie** du lieu de naissance, dans les ==5 jours== qui suivent l'accouchement. Le jour de l'accouchement ne compte pas. Si le dernier jour tombe un samedi, un dimanche ou un jour férié, le délai va jusqu'au jour ouvrable suivant. Cette déclaration crée l'acte de naissance ([service-public, F961](https://www.service-public.gouv.fr/particuliers/vosdroits/F961)). En Guyane, le délai peut être différent selon la commune.",
        "**Prévenir la CAF**, qui verse les aides aux familles.",
        "**Ajouter l'enfant à votre assurance maladie**, ou à votre AME si vous en bénéficiez.",
        "**Si l'enfant est français** (un parent français ou né en France), demander sa carte d'identité ou son passeport. Un certificat de nationalité française, le document qui prouve la nationalité, peut être demandé au tribunal ([service-public, F1051](https://www.service-public.gouv.fr/particuliers/vosdroits/F1051) ; notre article sur [le certificat de nationalité](/articles/certificat-nationalite-francaise)).",
      ],
    },
    {
      type: "h2",
      texte: "Quelles aides de la CAF pouvez-vous recevoir ?",
    },
    {
      type: "p",
      texte: "Les prestations familiales, ce sont les aides versées par la CAF pour les enfants. Elles ne demandent pas la nationalité française. Mais si vous êtes étranger, il faut ==résider en France== et être ==en séjour régulier==, avec un titre de séjour ou un récépissé de renouvellement, par exemple ([service-public, F2787](https://www.service-public.gouv.fr/particuliers/vosdroits/F2787)). Le récépissé, c'est le papier provisoire qui prouve que votre demande de titre est en cours.",
    },
    {
      type: "tableau",
      entetes: ["Aide", "Condition principale", "Montant en 2026"],
      lignes: [
        ["Prime à la naissance", "Grossesse déclarée avant la fin du 3e mois, ressources sous un plafond", "1 093,11 €, versée avant la fin du mois qui suit le 6e mois de grossesse"],
        ["Allocation de base", "Enfant de moins de 3 ans, ressources sous un plafond", "198,16 € par mois (ou 99,08 € selon les revenus)"],
        ["Allocations familiales", "Au moins 2 enfants à charge", "Selon le nombre d'enfants et les revenus"],
      ],
    },
    {
      type: "p",
      texte: "Les montants viennent des fiches officielles de la [prime à la naissance](https://www.service-public.gouv.fr/particuliers/vosdroits/F2550) et de l'[allocation de base](https://www.service-public.gouv.fr/particuliers/vosdroits/F2552), à jour au 1er avril 2026, et de celle des [allocations familiales](https://www.service-public.gouv.fr/particuliers/vosdroits/F13213). Pour toutes ces aides, il faut vivre en France plus de 9 mois par an.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**L'entrée régulière des enfants** peut être demandée pour un enfant né à l'étranger, sauf si votre titre vous permet de travailler. À Mayotte, cette preuve est demandée dans tous les cas (F2787).",
        "**L'aide au logement** demande un titre de séjour valide. Depuis le 1er juillet 2026, un étudiant non européen n'y a droit que dans trois cas, par exemple s'il est boursier ([service-public, F1563](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563)). Voir notre article sur [l'APL des étudiants étrangers](/articles/apl-etudiant-etranger).",
      ],
    },
    {
      type: "h2",
      texte: "Sans titre de séjour : quels soins pour votre enfant ?",
    },
    {
      type: "p",
      texte: "L'aide médicale de l'État (AME) prend en charge les soins des étrangers sans titre de séjour, sous conditions de ressources. Un adulte doit vivre en France depuis plus de 3 mois. Un enfant mineur, lui, y a droit ==sans délai==, et ses soins sont pris en charge à 100 % ([service-public, F3079](https://www.service-public.gouv.fr/particuliers/vosdroits/F3079)).",
    },
    {
      type: "p",
      texte: "Les soins d'une femme enceinte et d'un nouveau-né, dont l'accouchement, font partie des soins urgents pris en charge même sans AME (F3079). Attention : l'AME ne s'applique pas à Mayotte. Notre article sur [l'aide médicale de l'État](/articles/aide-medicale-etat-ame) détaille la demande.",
    },
    {
      type: "h2",
      texte: "La naissance change-t-elle votre titre de séjour ?",
    },
    {
      type: "p",
      texte: "Pas automatiquement. Une naissance ne donne pas, à elle seule, un titre de séjour à ses parents. Tout dépend de la nationalité de l'enfant.",
    },
    {
      type: "p",
      texte: "**Si votre enfant est français**, vous pouvez demander la carte de séjour « vie privée et familiale » de parent d'enfant français, même en situation irrégulière. Il faut remplir trois conditions ([service-public, F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "être le père ou la mère d'un enfant français mineur qui vit en France ;",
        "contribuer vraiment à son entretien et à son éducation depuis sa naissance, ou depuis au moins 2 ans ;",
        "ne pas vivre en état de polygamie.",
      ],
    },
    {
      type: "p",
      texte: "La préfecture, le service de l'État qui délivre les titres, peut refuser en cas d'obligation de quitter la France non respectée, de faux documents ou de faits graves. Cette carte permet de travailler sans autorisation de travail.",
    },
    {
      type: "p",
      texte: "**Si votre enfant n'est pas français**, sa naissance ne crée pas de titre pour vous. Elle peut compter parmi vos liens personnels et familiaux en France, mais la préfecture étudie chaque dossier. Pour une situation personnelle, adressez-vous à une association comme La Cimade, ou à un avocat.",
    },
    {
      type: "h2",
      texte: "Et plus tard : votre propre naturalisation",
    },
    {
      type: "p",
      texte: "Un parent qui devient français par décret peut transmettre la nationalité à ses enfants mineurs, si leur nom figure dans le décret et qu'ils vivent avec lui. Pour un adulte, la naturalisation a ses propres conditions, dont l'examen civique. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) dit quand le passer, et le [simulateur d'éligibilité](/eligibilite-examen-civique) vous répond en une minute.",
    },
  ],
  faq: [
    {
      question: "Un enfant né en France de parents étrangers est-il français ?",
      reponse: "Pas à la naissance, sauf si l'un des parents est lui-même né en France. L'enfant peut devenir français par une déclaration dès 13 ans, s'il a vécu au moins 5 ans en France depuis ses 8 ans. Sinon, il devient français automatiquement à 18 ans, s'il vit en France et y a vécu 5 ans depuis ses 11 ans.",
    },
    {
      question: "Un étranger peut-il toucher la prime de naissance ?",
      reponse: "Oui, si vous résidez en France et êtes en séjour régulier, avec un titre de séjour ou un récépissé de renouvellement. Il faut aussi déclarer la grossesse avant la fin du 3e mois et ne pas dépasser un plafond de ressources. En 2026, la prime vaut 1 093,11 €, versée pendant la grossesse.",
    },
    {
      question: "Mon bébé a-t-il droit à l'AME si je suis sans papiers ?",
      reponse: "Oui, sous conditions de ressources. Un enfant mineur a droit à l'aide médicale de l'État sans attendre 3 mois de présence en France, et ses soins sont pris en charge à 100 %. L'accouchement et les soins du nouveau-né sont aussi couverts comme soins urgents. L'AME ne s'applique pas à Mayotte.",
    },
    {
      question: "Avoir un enfant en France donne-t-il un titre de séjour ?",
      reponse: "Pas automatiquement. Si l'enfant est français, son parent étranger peut demander une carte de séjour « vie privée et familiale ». Il doit contribuer à son entretien et à son éducation depuis sa naissance, ou depuis 2 ans. Si l'enfant n'est pas français, la naissance ne crée pas de droit au séjour.",
    },
  ],
  sources: [
    {
      titre: "Service-public : dans quels cas un enfant est-il français ? (F3068, vérifiée le 29/04/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3068",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : nationalité française d'un enfant né en France de parents étrangers (F295, vérifiée le 19/08/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F295",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : déclaration de naissance (F961, vérifiée le 18/06/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F961",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : prime à la naissance de la Paje (F2550, vérifiée le 01/04/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2550",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : allocation de base de la Paje (F2552, vérifiée le 01/04/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2552",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : allocations familiales (F13213, vérifiée le 01/06/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13213",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : prestations familiales d'un étranger en France (F2787, vérifiée le 16/10/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2787",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : aide médicale de l'État (F3079, vérifiée le 01/04/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3079",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : carte de séjour « vie privée et familiale » (F2209, vérifiée le 06/11/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : aide au logement d'un étudiant (F1563, vérifiée le 01/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      luLe: "2026-11-14",
    },
    {
      titre: "Service-public : certificat de nationalité française (F1051, vérifiée le 20/06/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1051",
      type: "officiel",
      luLe: "2026-11-14",
    },
  ],
};

export default article;
