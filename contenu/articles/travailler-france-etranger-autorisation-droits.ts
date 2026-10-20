import type { Article } from "@/contenu/articles";

/**
 * Publié le 06/12/2025, migré le 20/10/2026 sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 : l'article doublon
 * `travailler-en-france-guide-permis-contrats-etrangers-2026` (27/01/2026) y
 * a été fusionné et son adresse redirige ici en 301 (`next.config.js`).
 * Ont été repris : les cartes « salarié » et « travailleur temporaire », la
 * taxe de l'employeur, les métiers en tension, l'égalité de traitement, les
 * trois questions de FAQ et les `motsCles`.
 *
 * Ont été retirés faute de source officielle relue, ou parce qu'ils étaient
 * faux : le droit du travail général (SMIC 2025, durée du travail, congés,
 * chômage, jours fériés), la « DRIEETS » qui examinerait les demandes (la
 * fiche F2728 désigne le préfet), l'autorisation « quasi automatique » pour
 * les métiers en tension, le titre « salarié » de 4 ans dès le départ (la
 * première carte vaut 1 an), le « salarié détaché », la clause suspensive et
 * la vidéo, qui portait sur les tests de français et non sur le travail.
 * Chaque règle restante est reprise de service-public ou du Code du travail,
 * lus le 20/10/2026.
 */
const article: Article = {
  slug: "travailler-france-etranger-autorisation-droits",
  titre: "Travailler en France quand on est étranger : faut-il une autorisation de travail ?",
  titreSeo: "Travailler en France étranger : autorisation",
  resume: "Qui a besoin d'une autorisation de travail, quels titres en dispensent, la carte salarié, les 964 heures des étudiants et vos droits de salarié.",
  chapo: "Si vous n'êtes ni européen ni suisse, il vous faut en général une **autorisation de travail** pour être salarié en France. Certains titres en dispensent, d'autres non. C'est l'employeur qui fait la demande, en ligne. Une fois embauché, vous avez les mêmes droits qu'un autre salarié.",
  publieLe: "2025-12-06",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "travailler en France étranger",
  motsCles: [
    "travailler en france étranger",
    "autorisation de travail étranger",
    "autorisation travail france",
    "permis travail france",
    "titre de séjour salarié",
    "carte travailleur temporaire",
    "étudiant étranger 964 heures",
    "métiers en tension",
    "taxe employeur salarié étranger",
    "salarié étranger france",
    "droits travailleur étranger",
    "travail sans autorisation sanctions employeur",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070",
    alt: "Collègues réunis autour d'une table de travail dans un bureau",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui a besoin d'une autorisation de travail ?",
      id: "qui-est-concerne",
    },
    {
      type: "p",
      texte: "Vous êtes concerné si vous n'êtes pas citoyen de l'Union européenne, de l'Espace économique européen ou de la Suisse. Pour vous embaucher, l'employeur doit alors avoir une autorisation de travail, sauf si votre titre de séjour l'en dispense ([service-public, fiche F2728](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728)). Le titre de séjour, c'est la carte qui vous permet de vivre en France.",
    },
    {
      type: "p",
      texte: "Les ressortissants algériens suivent d'autres règles, fixées par un accord entre la France et l'Algérie. La fiche F2728 ne s'applique pas à eux : renseignez-vous auprès de la préfecture.",
    },
    {
      type: "h2",
      texte: "Quels titres valent autorisation de travail ?",
      id: "titres-qui-dispensent",
    },
    {
      type: "p",
      texte: "Avec certains titres, vous pouvez travailler sans autre démarche. Voici les principaux, d'après [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "la carte de résident (un titre de longue durée), et la carte de résident longue durée-UE obtenue en France.",
        "la carte « vie privée et familiale », ou le visa long séjour (VLS-TS, un visa qui vaut titre de séjour) avec cette mention.",
        "la carte « talent ».",
        "la carte « recherche d'emploi ou création d'entreprise », pour un emploi lié à vos études payé au moins 2 800,53 € brut par mois.",
        "les cartes liées à la protection subsidiaire ou au statut d'apatride.",
        "le visa vacances-travail.",
      ],
    },
    {
      type: "p",
      texte: "Le guide sur le [passeport talent](/articles/passeport-talent-2026-conditions-metiers-demarches) détaille la carte « talent ». Pour les autres cartes, voyez notre [guide des cartes de séjour](/articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement).",
    },
    {
      type: "p",
      texte: "À l'inverse, certains titres ne permettent pas de travailler du tout : la carte « visiteur » ou « stagiaire », par exemple. Un titre délivré par un autre pays de l'Union ne suffit pas non plus (F2728).",
    },
    {
      type: "h2",
      texte: "Comment l'employeur demande-t-il l'autorisation ?",
      id: "demande-employeur",
    },
    {
      type: "p",
      texte: "C'est l'employeur, ou une personne qu'il mandate, qui fait la demande. Elle se fait **uniquement en ligne**. Elle s'adresse au préfet, le représentant de l'État dans le département ([F2728](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728)).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "L'employeur publie l'offre pendant 3 semaines de suite, dans les 6 mois avant la demande, sans trouver de candidat. Ce n'est pas exigé pour un métier en tension.",
        "Il propose un salaire au moins égal au Smic, ou au minimum de sa convention collective s'il est plus haut.",
        "Il dépose la demande en ligne. Une confirmation de dépôt arrive par courriel, mais elle ne permet pas encore de travailler.",
        "Sans réponse de la préfecture au bout de 2 mois, la demande est refusée. Vous pouvez contester ce refus dans les 2 mois.",
      ],
    },
    {
      type: "p",
      texte: "Avant l'embauche, l'employeur doit aussi vérifier votre titre auprès de la préfecture, au moins 2 jours ouvrables avant. Il paie enfin une taxe, une seule fois, à votre première admission au séjour pour le travail. Elle se paie avec la TVA.",
    },
    {
      type: "tableau",
      entetes: ["Contrat de 3 à 12 mois, salaire brut par mois", "Taxe de l'employeur"],
      lignes: [
        ["Jusqu'au Smic (1 867,02 €)", "74 €"],
        ["De 1 867,02 € à 2 800,53 €", "210 €"],
        ["Au-dessus de 2 800,53 €", "300 €"],
        ["Contrat de 12 mois ou plus", "55 % du salaire brut mensuel, au plus 2 567,15 €"],
      ],
      legende: "Source : service-public, fiche F2728, vérifiée le 18/06/2026, lue le 20/10/2026.",
    },
    {
      type: "h2",
      texte: "Carte « salarié » ou « travailleur temporaire » : quelle différence ?",
      id: "carte-salarie-travailleur-temporaire",
    },
    {
      type: "p",
      texte: "Tout dépend de votre contrat ([service-public, fiche F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)). Avec un CDI, vous recevez une carte « salarié ». Avec un CDD, c'est une carte « travailleur temporaire ». Dans les deux cas, il faut une autorisation de travail pour chaque nouveau contrat.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte « salarié »** : elle vaut 1 an. Si vous gardez le même emploi, elle peut devenir une carte de séjour pluriannuelle de 4 ans (une carte valable plusieurs années).",
        "**Carte « travailleur temporaire »** : elle couvre la durée du CDD. Le renouvellement se demande au moins 2 mois avant la fin.",
        "**Si vous vivez à l'étranger** : l'employeur obtient d'abord l'autorisation. Vous demandez ensuite le visa long séjour, puis vous le validez en ligne dans les 3 mois après votre arrivée.",
      ],
    },
    {
      type: "p",
      texte: "Pour la première carte de 4 ans, la loi demande un niveau A2 en français et la réussite à l'examen civique. Ces deux conditions ne visent pas les plus de 65 ans (F15898). Le niveau de langue est expliqué dans notre [guide A2, B1, B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation). Vous pouvez aussi [vérifier si l'examen civique vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "h2",
      texte: "Étudiants : combien d'heures pouvez-vous travailler ?",
      id: "etudiants-964-heures",
    },
    {
      type: "p",
      texte: "Avec un titre « étudiant », vous pouvez travailler sans autorisation jusqu'à 60 % de la durée annuelle du travail, soit **964 heures par an** ([F2728](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728)). Au-delà, l'employeur doit demander une autorisation. Un contrat d'apprentissage validé en est dispensé.",
    },
    {
      type: "p",
      texte: "Pour passer d'un titre « étudiant » à un titre de salarié, lisez notre article sur le [changement de statut](/articles/changement-statut-etudiant-salarie-2026-demarches-anef). Le [guide du titre étudiant](/articles/titre-sejour-etudiant-france-guide-2025) reprend le reste de vos droits.",
    },
    {
      type: "h2",
      texte: "Métiers en tension : ce qui existe jusqu'au 31 décembre 2026",
      id: "metiers-en-tension",
    },
    {
      type: "p",
      texte: "Un métier en tension, c'est un métier où les employeurs peinent à recruter. Une liste officielle les fixe par zone géographique. Pour ces métiers, l'employeur n'a pas à publier l'offre avant sa demande (F2728).",
    },
    {
      type: "p",
      texte: "La loi prévoit aussi une régularisation pour les personnes sans titre qui travaillent dans ces métiers. Elle est possible **jusqu'au 31 décembre 2026** ([service-public, fiche F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Il faut notamment :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "occuper un emploi dans un métier et une zone en tension.",
        "vivre en France sans interruption depuis au moins 3 ans.",
        "avoir travaillé 12 mois sur les 24 derniers mois dans un tel métier.",
      ],
    },
    {
      type: "p",
      texte: "Dans ce cas, vous faites vous-même la demande d'autorisation, sans votre employeur. Avec un CDI, vous recevez une carte « salarié » d'un an. Ce n'est pas un droit automatique : la préfecture décide au cas par cas. Notre article sur le [travail sans papiers](/articles/travailler-sans-papiers-france-2026-risques-regularisation) détaille cette voie.",
    },
    {
      type: "h2",
      texte: "Quels sont vos droits de salarié étranger ?",
      id: "droits-salarie",
    },
    {
      type: "p",
      texte: "Le Code du travail interdit les discriminations liées à l'origine ou à l'appartenance, vraie ou supposée, à une nation ([article L1132-1](https://code.travail.gouv.fr/code-du-travail/l1132-1)). Elles sont interdites à l'embauche comme pendant le contrat. Le Code du travail s'applique à votre contrat comme à celui des autres salariés : Smic, congés, repos.",
    },
    {
      type: "p",
      texte: "Même sans autorisation, un salarié étranger garde des droits. Pour la durée du travail, les congés, la santé, la sécurité et l'ancienneté, il est traité comme un salarié engagé de façon régulière ([article L8252-1](https://code.travail.gouv.fr/code-du-travail/l8252-1)). Si vous subissez une discrimination, le Défenseur des droits, une autorité qui défend gratuitement vos droits, peut être saisi.",
    },
    {
      type: "h2",
      texte: "Que risque un employeur qui embauche sans autorisation ?",
      id: "sanctions-employeur",
    },
    {
      type: "p",
      texte: "Employer en connaissance de cause un étranger sans autorisation est un délit. Selon [service-public (fiche F33886)](https://www.service-public.gouv.fr/particuliers/vosdroits/F33886), l'employeur risque 5 ans de prison et 30 000 € d'amende par étranger concerné. Pour une société, l'amende monte à 150 000 €.",
    },
    {
      type: "p",
      texte: "Si votre autorisation prend fin, l'employeur ne peut pas vous garder. Il doit rompre le contrat. Vous n'êtes pas en faute : vous touchez au moins une indemnité égale à 3 mois de salaire, sauf fraude de votre part (F33886).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Avant de signer, vérifiez ce que dit votre titre : il vaut parfois déjà autorisation de travail. Sinon, c'est l'employeur qui demande l'autorisation en ligne. Si vous voulez créer votre propre activité, voyez plutôt notre article sur l'[auto-entreprise pour les étrangers](/articles/auto-entrepreneur-etranger-france-2026-creer-entreprise-titre-sejour). Pour un cas précis, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon titre de séjour étudiant me permet-il de travailler à temps plein ?",
      reponse: "Non. Le titre « étudiant » permet de travailler jusqu'à 964 heures par an, soit 60 % de la durée annuelle du travail. Au-delà, l'employeur doit demander une autorisation de travail. Pour travailler à temps plein de façon durable, il faut en général changer de statut et obtenir un titre de salarié.",
    },
    {
      question: "Qu'est-ce qu'un métier en tension ?",
      reponse: "C'est un métier où les employeurs peinent à recruter, inscrit sur une liste officielle par zone géographique. Pour ces postes, l'employeur n'a pas à publier son offre pendant trois semaines avant de demander l'autorisation. L'autorisation n'est pas automatique pour autant : la préfecture examine chaque dossier.",
    },
    {
      question: "Qui paie la taxe pour l'embauche d'un salarié étranger ?",
      reponse: "C'est l'employeur. La taxe est due une seule fois, à la première admission au séjour du salarié pour le travail. Elle se paie avec la TVA. Pour un contrat de 3 à 12 mois, elle va de 74 € à 300 € selon le salaire. Le salarié ne la paie pas.",
    },
    {
      question: "Peut-on commencer à travailler avec la confirmation de dépôt ?",
      reponse: "Non. La confirmation de dépôt reçue par courriel prouve seulement que la demande a été envoyée. Elle ne permet pas de travailler. Il faut attendre l'autorisation de travail, ou un récépissé, c'est-à-dire un document provisoire de la préfecture, qui indique qu'il autorise son titulaire à travailler.",
    },
  ],
  aLireAussi: [
    { slug: "passeport-talent-2026-conditions-metiers-demarches", ancre: "Passeport talent : conditions et démarches" },
    { slug: "changement-statut-etudiant-salarie-2026-demarches-anef", ancre: "Passer d'étudiant à salarié" },
    { slug: "travailler-sans-papiers-france-2026-risques-regularisation", ancre: "Travailler sans papiers : risques et régularisation" },
    { slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement", ancre: "Les cartes de séjour en France" },
  ],
  sources: [
    {
      titre: "Service-public : Autorisation de travail d'un salarié étranger en France (F2728)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2728",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : Travail d'un étranger en France, carte de séjour salarié ou travailleur temporaire (F15898)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15898",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : Qu'est-ce que la régularisation d'un étranger par le travail ? (F16053)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : Salarié étranger sans autorisation de travail, quelles sont les conséquences ? (F33886)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33886",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Code du travail, article L1132-1 (interdiction des discriminations)",
      url: "https://code.travail.gouv.fr/code-du-travail/l1132-1",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Code du travail, article L8252-1 (droits du salarié étranger sans autorisation)",
      url: "https://code.travail.gouv.fr/code-du-travail/l8252-1",
      type: "juridique",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
