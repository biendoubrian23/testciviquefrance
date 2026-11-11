import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite`).
 * Corrigé et réécrit par le robot éditorial le 11/11/2026 (liste « à revérifier » de `docs/seo/MOTS-CLES.md`).
 * Faux et corrigés : la prime d'activité présentée « sans délai de 5 ans » (CSS L. 842-2 : 5 ans de titre
 * autorisant à travailler, avec exceptions) ; l'APL des étudiants « aux mêmes conditions que les étudiants
 * français » (faux depuis le 01/07/2026, F1563) ; RSA 635,71 € (651,69 €, F19778) ; AAH 1 016,05 €
 * (1 041,59 €, F12242). Retirés faute de source officielle lue : montants « moyens » des aides au logement,
 * PAJE, ARS, délais de traitement de la CAF, plafond de la prime d'activité, ADA.
 * Sources lues le 11/11/2026 : service-public F19778 (vérifiée le 01/04/2026), F2882 (01/06/2026), F13213
 * (01/06/2026), F2787 (16/10/2026), F12242 (14/09/2026), F1563 et F12006 (01/07/2026) ; Légifrance, code de
 * la sécurité sociale L. 842-2. Couverture Unsplash remplacée par une photo libre.
 */
const article: Article = {
  slug: "aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite",
  titre: "Aides sociales des étrangers en France : RSA, prime d'activité, APL, qui y a droit et à partir de quand",
  titreSeo: "Aides sociales étrangers : RSA, CAF, APL en 2026",
  resume: "RSA et prime d'activité après 5 ans de titre, APL et allocations familiales sans délai : les conditions réelles pour les étrangers, aide par aide.",
  chapo: "Un étranger en situation régulière peut recevoir des aides sociales en France, mais pas toutes tout de suite. Le RSA et la prime d'activité demandent en général ==5 ans de titre de séjour autorisant à travailler==, sauf exceptions. Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Les aides au logement et les allocations familiales n'ont pas ce délai, avec une règle à part pour les étudiants depuis le 1er juillet 2026.",
  publieLe: "2026-04-03",
  modifieLe: "2026-11-11",
  minutes: 8,
  theme: "aides sociales étrangers France 2026",
  motsCles: [
    "aides sociales étrangers France 2026",
    "CAF étranger titre de séjour",
    "RSA étranger conditions",
    "RSA étranger 5 ans",
    "prime activité étranger",
    "APL étranger France",
    "allocations familiales étranger",
    "AAH étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/aides-sociales-etrangers-caf.webp",
    alt: "La façade vitrée d'un bâtiment de la Caisse d'allocations familiales à Paris, avec le sigle CAF en lettres bleues",
    largeur: 1200,
    hauteur: 900,
    credit: "Fabio Gargano, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:CAF_(Caisse_d%27Allocations_Familiales),_Paris_15.JPG",
    position: "50% 30%",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 11 novembre 2026",
      texte: "La version précédente contenait des erreurs. Elle disait que la prime d'activité n'avait ==pas de délai de 5 ans== : c'est faux, elle suit presque la même règle que le RSA. Elle disait aussi que les étudiants étrangers avaient droit à l'APL comme les étudiants français : ce n'est plus vrai ==depuis le 1er juillet 2026==. Les montants ont été mis à jour, et ceux que nous n'avons pas pu vérifier ont été retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quelle est la règle de base pour un étranger ?",
    },
    {
      type: "p",
      texte: "Les aides sociales ne sont pas réservées aux Français. Mais pour un étranger, deux conditions reviennent partout : ==un séjour régulier et une résidence en France==. Le séjour régulier se prouve par un titre de séjour, la carte qui vous autorise à vivre en France. La plupart de ces aides sont versées par la CAF, la caisse d'allocations familiales.",
    },
    {
      type: "p",
      texte: "Ensuite, chaque aide a sa propre règle. Certaines demandent plusieurs années de titre de séjour, d'autres non. Les citoyens de l'Union européenne, de l'Espace économique européen et de la Suisse suivent d'autres règles, que cet article ne détaille pas.",
    },
    {
      type: "h2",
      texte: "RSA : faut-il 5 ans de titre de séjour ?",
    },
    {
      type: "p",
      texte: "Le RSA, ou revenu de solidarité active, est un revenu minimum pour les personnes aux ressources faibles. Il faut avoir au moins 25 ans et résider en France de façon stable. Un étranger hors Union européenne doit en plus remplir ==une de ces conditions== ([service-public, F19778](https://www.service-public.gouv.fr/particuliers/vosdroits/F19778)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "avoir depuis au moins **5 ans** un titre de séjour qui permet de travailler en France ;",
        "avoir la **carte de résident** (un titre de séjour de 10 ans), ou un titre équivalent ;",
        "avoir le statut de **réfugié**, ou la **protection subsidiaire** (une protection accordée à une personne menacée dans son pays) ;",
        "être reconnu **apatride**, c'est-à-dire sans nationalité.",
      ],
    },
    {
      type: "p",
      texte: "Selon la même fiche, la condition des 5 ans ne s'applique pas aux personnes de nationalité algérienne. Le montant du RSA pour une personne seule est de ==651,69 €== par mois. Il baisse si vous avez d'autres ressources.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un **étudiant** ou un stagiaire non rémunéré ne peut pas recevoir le RSA.",
        "Le RSA s'accompagne d'un programme d'insertion : la fiche F19778 prévoit **15 à 20 heures d'activité par semaine** pour les allocataires.",
      ],
    },
    {
      type: "h2",
      texte: "Prime d'activité : la même règle des 5 ans",
    },
    {
      type: "p",
      texte: "La prime d'activité complète les revenus des personnes qui travaillent et gagnent peu. Elle demande d'avoir 18 ans ou plus et une activité professionnelle. Pour un étranger hors Union européenne, la loi fixe ==5 ans de titre de séjour autorisant à travailler== ([code de la sécurité sociale, article L. 842-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031087615)).",
    },
    {
      type: "p",
      texte: "Les exceptions sont proches de celles du RSA : carte de résident, réfugié, protection subsidiaire, apatride. La fiche [F2882](https://www.service-public.gouv.fr/particuliers/vosdroits/F2882) en ajoute une : le parent isolé qui a un enfant de moins de 3 ans à charge et un titre de séjour.",
    },
    {
      type: "p",
      texte: "Un étudiant ou un apprenti n'y a droit que si ses revenus d'activité dépassent un plafond fixé par la loi (article L. 842-2, 3°).",
    },
    {
      type: "h2",
      texte: "APL : quand un étranger peut-il toucher une aide au logement ?",
    },
    {
      type: "p",
      texte: "L'APL, l'aide personnalisée au logement, aide à payer le loyer. Vous pouvez la recevoir ==même si vous êtes étranger==, à condition d'avoir un titre de séjour en cours de validité ([service-public, F12006](https://www.service-public.gouv.fr/particuliers/vosdroits/F12006)). Il n'y a pas de délai de 5 ans. Le montant dépend de vos revenus, de votre loyer et de votre ville.",
    },
    {
      type: "p",
      texte: "**Les étudiants sont l'exception.** Prenons un étudiant d'un pays hors Union européenne, avec un titre de séjour pour les études. Depuis le 1er juillet 2026, il n'a droit à une aide au logement que dans 3 cas ([service-public, F1563](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "il reçoit une **bourse sur critères sociaux** ;",
        "il exerce une **activité professionnelle** ;",
        "il a un **contrat d'apprentissage** ou de professionnalisation.",
      ],
    },
    {
      type: "p",
      texte: "Le détail, et les bourses qui comptent, sont dans notre article sur [l'APL des étudiants étrangers](/articles/apl-etudiant-etranger). Pour trouver un logement sans APL, lisez notre guide du [logement étudiant étranger](/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier).",
    },
    {
      type: "h2",
      texte: "Allocations familiales : quelles conditions pour un parent étranger ?",
    },
    {
      type: "p",
      texte: "Les allocations familiales sont versées à partir de 2 enfants à charge. Pour un parent étranger hors Union européenne (hors réfugiés et Algériens, qui ont leurs règles), ==4 conditions== s'appliquent ([service-public, F2787](https://www.service-public.gouv.fr/particuliers/vosdroits/F2787)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "être en séjour régulier ;",
        "résider en France ;",
        "avoir au moins un enfant à charge qui réside en France ;",
        "prouver que vos enfants sont entrés en France de façon régulière, sauf si votre titre de séjour vous permet de travailler.",
      ],
    },
    {
      type: "p",
      texte: "À Mayotte, la preuve de l'entrée régulière des enfants est toujours demandée. Si vos enfants sont arrivés par le regroupement familial, la procédure qui permet à votre famille de vous rejoindre, lisez notre [guide du regroupement familial](/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais).",
    },
    {
      type: "p",
      texte: "Le montant dépend de vos revenus. Pour 2 enfants, la fiche [F13213](https://www.service-public.gouv.fr/particuliers/vosdroits/F13213) indique :",
    },
    {
      type: "tableau",
      entetes: ["Revenus du foyer (revenu net catégoriel 2024)", "Montant pour 2 enfants, par mois"],
      lignes: [
        ["Jusqu'à 79 980 €", "152,25 €"],
        ["De 79 980 € à 106 604 €", "76,13 €"],
        ["Plus de 106 604 €", "38,07 €"],
      ],
    },
    {
      type: "h2",
      texte: "AAH : l'allocation aux adultes handicapés",
    },
    {
      type: "p",
      texte: "L'AAH aide les adultes en situation de handicap qui ont peu de ressources. Pour un étranger hors Union européenne, en métropole ou dans un département d'outre-mer, il faut ([service-public, F12242](https://www.service-public.gouv.fr/particuliers/vosdroits/F12242)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "un titre de séjour en cours de validité, ou le récépissé d'une demande de renouvellement (le papier qui prouve que votre demande est en cours) ;",
        "résider en France depuis plus de 3 mois, sauf si vous travaillez.",
      ],
    },
    {
      type: "p",
      texte: "Le montant maximal est de ==1 041,59 €== par mois, sans autres ressources. À Mayotte, la règle est différente : il faut y résider depuis au moins 15 ans, et le montant maximal est de 518,73 €.",
    },
    {
      type: "h2",
      texte: "Le tableau pour tout retenir",
    },
    {
      type: "tableau",
      entetes: ["Aide", "Condition de durée pour un étranger hors UE", "Source"],
      lignes: [
        ["RSA", "5 ans de titre autorisant à travailler, sauf exceptions", "F19778"],
        ["Prime d'activité", "5 ans de titre autorisant à travailler, sauf exceptions", "L. 842-2, F2882"],
        ["APL", "Aucune, avec un titre en cours de validité ; étudiants : 3 cas seulement", "F12006, F1563"],
        ["Allocations familiales", "Aucune ; preuve de l'entrée régulière des enfants dans certains cas", "F2787"],
        ["AAH", "Plus de 3 mois de résidence, sauf si vous travaillez (15 ans à Mayotte)", "F12242"],
      ],
    },
    {
      type: "p",
      texte: "Sans titre de séjour, ces aides ne sont pas ouvertes. Pour les soins, il existe l'aide médicale d'État : voyez notre article sur [l'AME](/articles/aide-medicale-etat-ame). Pour votre propre cas, le simulateur de la CAF sur caf.fr, un point d'accès au droit ou une association comme La Cimade peuvent vous aider.",
    },
    {
      type: "h2",
      texte: "Et l'examen civique ?",
    },
    {
      type: "p",
      texte: "La protection sociale fait partie de la thématique « Vivre dans la société française » de l'examen civique. La carte de résident, qui ouvre le RSA sans attendre 5 ans, demande depuis le 1er janvier 2026 la réussite à cet examen ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Pour savoir s'il vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique), puis lisez notre guide de la [carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
  ],
  faq: [
    {
      question: "Un étranger peut-il toucher le RSA ?",
      reponse: "Oui, s'il a au moins 25 ans et réside en France de façon stable. Il doit aussi remplir une condition de séjour. Ce peut être 5 ans de titre de séjour autorisant à travailler, ou une carte de résident. Les réfugiés, les protégés subsidiaires et les apatrides n'ont pas ce délai. La condition des 5 ans ne vise pas les Algériens, selon service-public.",
    },
    {
      question: "Un étranger a-t-il droit à la prime d'activité ?",
      reponse: "Oui, s'il a 18 ans ou plus, travaille et gagne peu. Hors Union européenne, il faut en général 5 ans de titre de séjour autorisant à travailler (code de la sécurité sociale, L. 842-2). Les réfugiés, les apatrides, les titulaires d'une carte de résident et certains parents isolés n'ont pas ce délai.",
    },
    {
      question: "Un étranger peut-il avoir l'APL ?",
      reponse: "Oui, avec un titre de séjour en cours de validité, sans délai d'attente. Le montant dépend des revenus et du loyer. Depuis le 1er juillet 2026, un étudiant hors Union européenne n'y a droit que s'il est boursier sur critères sociaux, s'il travaille ou s'il est en apprentissage.",
    },
    {
      question: "Les allocations familiales sont-elles versées aux étrangers ?",
      reponse: "Oui, à partir de 2 enfants, si le parent est en séjour régulier, réside en France et a ses enfants à charge en France. Si son titre ne l'autorise pas à travailler, il doit aussi prouver l'entrée régulière des enfants en France. À Mayotte, cette preuve est toujours demandée.",
    },
  ],
  sources: [
    {
      titre: "Service-public : RSA, demandeur de 25 ans et plus (F19778), vérifiée le 01/04/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19778",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : prime d'activité (F2882), vérifiée le 01/06/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2882",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Légifrance : code de la sécurité sociale, article L. 842-2 (conditions de la prime d'activité)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031087615",
      type: "juridique",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : APL (F12006), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12006",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : aide au logement de l'étudiant (F1563), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : un étranger peut-il percevoir des prestations familiales en France ? (F2787), vérifiée le 16/10/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2787",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : allocations familiales (F13213), vérifiée le 01/06/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13213",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : allocation aux adultes handicapés (F12242), vérifiée le 14/09/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12242",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530), vérifiée le 10/02/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-11-08",
    },
  ],
};

export default article;
