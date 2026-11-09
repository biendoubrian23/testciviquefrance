import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 09/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « apl étudiant étranger » et « apl étudiants étrangers »
 * (1 k à 10 k recherches par mois, + 900 % sur un an, Planificateur de mots
 * clés, France, French, 09/11/2026). Famille actualité réglementaire et
 * démarches du moment. Aucune page dédiée sur le site.
 * Sources lues le 09/11/2026 : Légifrance (loi n° 2026-103, art. 179 ; décret
 * n° 2026-552), Conseil constitutionnel (décision n° 2026-901 DC), CAF
 * (actualités nationale et professionnelle), service-public F1563, F12006
 * (vérifiées le 01/07/2026), A18981, F33453, F17319, F39530, communiqué du
 * ministère de l'Enseignement supérieur du 29/10/2025.
 */
const article: Article = {
  slug: "apl-etudiant-etranger",
  titre: "Étudiant hors Union européenne sans bourse : avez-vous encore droit à l'APL ? Les cas qui la gardent",
  titreSeo: "APL étudiant étranger : qui la garde en 2026 ?",
  resume: "Depuis le 1er juillet 2026, un étudiant hors UE sans bourse sociale n'a plus droit à l'APL, sauf exceptions : qui la garde, quelles bourses comptent.",
  chapo: "Depuis le ==1er juillet 2026==, un étudiant non européen venu en France pour ses études n'a plus droit à l'APL s'il n'a pas de bourse sur critères sociaux. Il la garde s'il travaille, s'il est en apprentissage, ou dans quelques autres cas. Attention : toutes les bourses ne comptent pas.",
  publieLe: "2026-11-09",
  modifieLe: "2026-11-09",
  minutes: 7,
  theme: "APL des étudiants étrangers",
  motsCles: [
    "apl étudiant étranger",
    "apl étudiants étrangers",
    "apl pour étudiant étranger",
    "caf étudiant étranger",
    "apl étudiant hors union européenne",
    "apl étudiant non boursier",
    "décret 2026-552",
    "aide au logement étudiant étranger",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/apl-etudiant-etranger.webp",
    alt: "La façade claire du pavillon du Cambodge à la Cité internationale universitaire de Paris, avec son bas-relief au-dessus de l'entrée",
    largeur: 1024,
    hauteur: 682,
    credit: "corno.fulgur75, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/129231073@N06/17465244683",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce qui a changé pour l'APL des étudiants étrangers ?",
    },
    {
      type: "p",
      texte: "L'APL, ou aide personnalisée au logement, est une somme versée chaque mois pour aider à payer le loyer. C'est la CAF qui la verse. La CAF, ou caisse d'allocations familiales, est l'organisme public qui gère les aides aux familles et au logement.",
    },
    {
      type: "p",
      texte: "La règle vient de l'article 179 de la loi de finances pour 2026 ([Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053509383)). Elle vise les personnes qui ont un visa long séjour ou un titre de séjour « étudiant ». Le titre de séjour, c'est la carte qui autorise une personne étrangère à vivre en France. Ces personnes doivent désormais remplir les conditions d'une bourse sur critères sociaux. La règle s'applique depuis le ==1er juillet 2026==.",
    },
    {
      type: "p",
      texte: "Le [décret n° 2026-552 du 27 juin 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054323364), publié au Journal officiel du 28 juin, précise les bourses qui comptent et les personnes assimilées. Dans cet article, un étudiant non européen n'a la nationalité ni d'un pays de l'Union européenne (UE) ou de l'Espace économique européen (EEE), ni de la Suisse.",
    },
    {
      type: "p",
      texte: "Le Conseil constitutionnel a examiné cette mesure. Il l'a jugée conforme à la Constitution, sous une réserve d'interprétation ([décision n° 2026-901 DC du 19 février 2026](https://www.conseil-constitutionnel.fr/decision/2026/2026901DC.htm), paragraphe 223). En octobre 2025, le ministère de l'Enseignement supérieur estimait que la mesure concernerait 3 % des 3 millions d'étudiants en France ([communiqué du 29 octobre 2025](https://www.enseignementsup-recherche.gouv.fr/fr/aides-au-logement-pour-les-etudiants-internationaux-le-gouvernement-adapte-les-criteres-d-100242)).",
    },
    {
      type: "h2",
      texte: "Qui garde le droit à l'APL ?",
    },
    {
      type: "p",
      texte: "Vous pouvez encore recevoir l'APL dans les situations suivantes, si vous remplissez aussi les conditions habituelles de loyer et de ressources ([CAF, actualité nationale](https://www.caf.fr/allocataires/actualites/actualites-nationales/apl-ce-qui-change-pour-certains-etudiants-partir-du-1er-juillet-2026)).",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "APL possible ?"],
      lignes: [
        ["Nationalité d'un pays de l'UE, de l'EEE ou de la Suisse", "Oui"],
        ["Étudiant non européen avec une bourse sur critères sociaux", "Oui"],
        ["Étudiant non européen qui exerce une activité professionnelle (salariée ou auto-entrepreneur)", "Oui"],
        ["Contrat d'apprentissage ou de professionnalisation", "Oui"],
        ["Personne réfugiée ou apatride", "Oui"],
        ["Conjoint ou conjointe d'un étudiant non européen", "Oui"],
        ["Étudiant non européen sans bourse, sans emploi ni contrat", "Non"],
      ],
      legende: "Sources : CAF, service-public F1563 et A18981, décret n° 2026-552. Lus le 09/11/2026.",
    },
    {
      type: "p",
      texte: "Une personne apatride est une personne qu'aucun État ne reconnaît comme son ressortissant. Pour ces cas, et pour les titres qui ne sont pas des titres d'étude, la condition de bourse ne s'applique pas. La [fiche F1563 de service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563) vise en effet les personnes qui ont un titre de séjour délivré pour les études.",
    },
    {
      type: "h2",
      texte: "Quelles bourses comptent, et lesquelles ne comptent pas ?",
    },
    {
      type: "p",
      texte: "C'est le point que beaucoup de pages oublient. Le décret retient ==uniquement== les bourses d'enseignement supérieur sur critères sociaux. Il écarte les autres aides de l'État, des collectivités territoriales ou des organismes internationaux, versées dans le cadre d'un accord de coopération. C'est l'article D. 822-0-1 du code de la construction et de l'habitation, créé par le [décret n° 2026-552](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054323364).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Comptent :** les bourses sur critères sociaux versées par le Crous, le service public de la vie étudiante.",
        "**Comptent aussi, selon la CAF et service-public :** certaines bourses régionales des filières sanitaires et sociales, alignées sur les critères sociaux (F1563).",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Une aide d'un autre type**, par exemple une aide publique versée dans le cadre d'un accord de coopération, n'ouvre pas le droit à l'APL d'après le texte du décret.",
        "**Vous avez un doute sur votre bourse ?** Demandez à l'organisme qui la verse sur quel texte elle repose, puis posez la question à votre CAF.",
      ],
    },
    {
      type: "h2",
      texte: "Un étudiant étranger qui travaille peut-il toucher l'APL ?",
    },
    {
      type: "p",
      texte: "Oui. Le décret considère que les étudiants qui exercent une activité professionnelle remplissent la condition (article D. 822-0-2). La CAF précise qu'il peut s'agir d'un emploi salarié ou d'une activité d'auto-entrepreneur. Le décret ne fixe ==aucun minimum== d'heures ou de revenu. Si une autre page vous donne un seuil, demandez à la CAF de le confirmer par écrit.",
    },
    {
      type: "p",
      texte: "Une limite reste à respecter. Un titre étudiant permet de travailler dans la limite de 60 % de la durée légale, soit 964 heures par an, comme le rappelle la [fiche F17319](https://www.service-public.gouv.fr/particuliers/vosdroits/F17319). Déclarez tout changement à la CAF. Si vous vivez avec une personne qui n'a pas droit à l'aide, votre APL est calculée comme pour une personne seule (CAF).",
    },
    {
      type: "image",
      src: "/images/articles/apl-etudiant-etranger.webp",
      alt: "Le fronton sculpté du pavillon du Cambodge, avec l'inscription Université de Paris, vu depuis le bas de l'immeuble",
      legende: "Le pavillon du Cambodge, à la Cité internationale universitaire de Paris. La règle sur l'APL dépend du titre et de la bourse, pas du type de résidence.",
      credit: "corno.fulgur75, via Flickr",
      licence: "CC BY 2.0",
      source: "https://www.flickr.com/photos/129231073@N06/17465244683",
      largeur: 1024,
      hauteur: 682,
    },
    {
      type: "h2",
      texte: "Vous receviez déjà l'APL : que se passe-t-il ?",
    },
    {
      type: "p",
      texte: "La CAF l'écrit clairement : si vous receviez déjà l'aide et que vous ne remplissez pas les nouvelles conditions, votre droit prend fin à partir de ==juillet 2026==. Une demande faite depuis le 1er juillet 2026 ne peut pas aboutir si vous ne remplissez pas ces conditions.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez votre situation** sur le simulateur du site caf.fr, en donnant votre bourse et votre emploi exacts.",
        "**Mettez à jour votre dossier** dans votre espace CAF si vous avez trouvé un emploi, un contrat d'alternance ou une bourse.",
        "**Gardez les preuves** : avis de bourse, contrat de travail, bulletins de salaire, contrat d'apprentissage.",
        "**Demandez les raisons par écrit** si la CAF vous refuse l'aide. La [fiche F12006](https://www.service-public.gouv.fr/particuliers/vosdroits/F12006) présente l'aide et les recours possibles.",
      ],
    },
    {
      type: "p",
      texte: "Le premier versement arrive en général 2 mois après la demande (F1563). Faites donc votre demande dès que vous entrez dans le logement.",
    },
    {
      type: "h2",
      texte: "Sans APL, quelles solutions pour payer son logement ?",
    },
    {
      type: "p",
      texte: "Le ministère de l'Enseignement supérieur l'a indiqué le 29 octobre 2025 : les étudiants non européens sans bourse pourraient continuer à utiliser les services des Crous. Cela comprend leurs logements sociaux. Notre [guide du logement étudiant](/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier) détaille ces pistes.",
    },
    {
      type: "p",
      texte: "La garantie Visale reste possible. C'est une caution gratuite d'Action Logement pour les personnes de moins de 30 ans, qui remplace la personne garante. La demande se fait ==avant la signature du bail== ([service-public, F33453](https://www.service-public.gouv.fr/particuliers/vosdroits/F33453)).",
    },
    {
      type: "encadre",
      titre: "Et en outre-mer ?",
      texte: "L'APL s'applique dans les départements et régions d'outre-mer selon des conditions particulières (F12006). Dans ces territoires et dans les collectivités d'outre-mer, demandez à votre CAF ou à votre caisse locale quelle règle s'applique à vous.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Qui peut vous aider si votre situation est compliquée ?",
    },
    {
      type: "p",
      texte: "Cet article explique la règle générale. Pour un cas personnel, adressez-vous à votre CAF ou au service social du Crous ou de votre établissement. Une association comme La Cimade peut aussi vous aider. Vous pouvez enfin écrire au [Défenseur des droits](https://www.defenseurdesdroits.fr/) si vous pensez avoir subi une discrimination. Le Défenseur des droits, c'est l'autorité indépendante qui protège les personnes face aux services publics et aux discriminations.",
    },
    {
      type: "p",
      texte: "Un titre de séjour en attente peut aussi bloquer vos droits à la CAF. Notre article sur [l'attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction) explique ce que vaut ce papier, et notre guide du [renouvellement du titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) donne les délais.",
    },
    {
      type: "encadre",
      titre: "Le geste à faire aujourd'hui",
      texte: "Prenez votre avis de bourse ou votre contrat, et faites une simulation sur caf.fr. Vous pensez rester en France après vos études ? Une première carte pluriannuelle ou une carte de résident peut exiger l'examen civique ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). [Vérifiez en une minute si l'examen vous concernera](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Un étudiant étranger a-t-il droit à l'APL ?",
      reponse: "Oui, sous conditions. Depuis le 1er juillet 2026, un étudiant non européen venu pour ses études doit percevoir une bourse sur critères sociaux. Il garde aussi le droit s'il travaille, s'il est apprenti ou en contrat de professionnalisation. Les réfugiés, les apatrides et les conjoints d'étudiants non européens gardent l'aide.",
    },
    {
      question: "Quelles bourses donnent droit à l'APL pour un étudiant étranger ?",
      reponse: "Les bourses d'enseignement supérieur sur critères sociaux, versées par le Crous, et certaines bourses régionales des filières sanitaires et sociales, selon la CAF et service-public. Le décret n° 2026-552 écarte les autres aides versées par l'État, les collectivités ou les organismes internationaux dans le cadre d'un accord de coopération. Vérifiez auprès de votre CAF.",
    },
    {
      question: "Un étudiant étranger qui travaille peut-il toucher l'APL ?",
      reponse: "Oui. Le décret n° 2026-552 considère que l'étudiant qui exerce une activité professionnelle remplit la condition. La CAF cite l'emploi salarié et l'auto-entrepreneuriat. Le décret ne fixe pas de nombre d'heures minimum. Il faut aussi remplir les conditions habituelles de loyer et de ressources, et respecter la limite de travail du titre étudiant.",
    },
    {
      question: "Comment demander l'APL quand on est étudiant étranger ?",
      reponse: "La demande se fait en ligne sur le site de la CAF, dès l'entrée dans le logement. Il faut un titre de séjour valable et un logement décent. Préparez votre avis de bourse ou votre contrat de travail. Service-public indique que le premier paiement arrive en général deux mois après la demande. Faites d'abord une simulation sur caf.fr.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : loi n° 2026-103 du 19 février 2026 de finances pour 2026, article 179 (L. 822-2 du code de la construction et de l'habitation, en vigueur le 01/07/2026)",
      url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053509383",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Légifrance : décret n° 2026-552 du 27 juin 2026, JORF du 28 juin 2026 (articles D. 822-0-1 et D. 822-0-2)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054323364",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Conseil constitutionnel : décision n° 2026-901 DC du 19 février 2026 (loi de finances pour 2026), paragraphes 212 à 223",
      url: "https://www.conseil-constitutionnel.fr/decision/2026/2026901DC.htm",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "CAF : APL, ce qui change pour certains étudiants à partir du 1er juillet 2026",
      url: "https://www.caf.fr/allocataires/actualites/actualites-nationales/apl-ce-qui-change-pour-certains-etudiants-partir-du-1er-juillet-2026",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "CAF, espace professionnels : APL, ce qui change pour certains étudiants étrangers",
      url: "https://caf.fr/professionnels/actualites/apl-ce-qui-change-pour-certains-etudiants-etrangers",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : aide au logement d'un étudiant (F1563), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : aide personnalisée au logement (F12006), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12006",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : suppression des APL pour les étudiants extra-européens non boursiers, actualité A18981 du 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18981",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Ministère de l'Enseignement supérieur : aides au logement pour les étudiants internationaux, communiqué du 29/10/2025",
      url: "https://www.enseignementsup-recherche.gouv.fr/fr/aides-au-logement-pour-les-etudiants-internationaux-le-gouvernement-adapte-les-criteres-d-100242",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : garantie Visale (F33453), vérifiée le 23/01/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : carte de séjour recherche d'emploi ou création d'entreprise (F17319), vérifiée le 01/06/2026 (rappel de la limite de 964 heures)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, l'examen civique (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-11-09",
    },
  ],
};

export default article;
