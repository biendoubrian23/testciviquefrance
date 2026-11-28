import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, sans changer d'adresse. Réécrit en entier par le robot
 * éditorial le 28/11/2026 (liste « à revérifier » de `docs/seo/MOTS-CLES.md`).
 * La version migrée donnait 2 895 € et 3 941 € (2 902 € et 3 950 € sur Campus
 * France pour 2026-2027), 254 € pour le master (255 €), « 380 € environ » pour
 * le doctorat (398 €), exonérait les CPGE sans condition et les Andorrans et
 * Monégasques sans source, oubliait le foyer fiscal en France depuis 2 ans, et
 * renvoyait vers un guide de 2025.
 * Sources : Campus France, « Le coût des études supérieures en France » (mis à
 * jour le 25/06/2026, lu le 28/11/2026) ; service-public F2865 (vérifiée le
 * 20/08/2026, lue le 28/11/2026) ; F2231 (vérifiée le 01/08/2026, lue le
 * 28/11/2026) ; décret n° 2026-385 du 19/05/2026 (Légifrance, lu le
 * 27/11/2026 : plafonds de 30 %, 25 % puis 20 %).
 */
const article: Article = {
  slug: "frais-inscription-universites-france-etudiants-hors-ue-2026",
  titre: "Frais d'université pour un étudiant étranger : 2 902 € ou 178 € ? Qui paie quoi en 2026-2027",
  titreSeo: "Frais d'université étudiant étranger : 2 902 € ?",
  resume: "Licence 2 902 €, master 3 950 €, doctorat 398 € : les frais 2026-2027 pour les étudiants hors UE, qui paie le tarif français et les exonérations.",
  chapo: "Selon Campus France, un étudiant venu d'un pays hors de l'Union européenne paie en principe ==2 902 € par an en licence== et ==3 950 € en master== en 2026-2027. C'est le tarif des universités publiques. Mais beaucoup paient le même tarif que les Français (178 € et 255 €). C'est le cas des résidents de longue durée, des réfugiés, des doctorants et des familles installées en France depuis 2 ans. Depuis le décret du 19 mai 2026, les autres exonérations sont limitées.",
  publieLe: "2026-05-25",
  modifieLe: "2026-11-28",
  minutes: 7,
  theme: "Les droits d'inscription à l'université pour les étudiants étrangers hors Union européenne en 2026-2027 : montants, cas du tarif français, exonérations et décret n° 2026-385",
  motsCles: [
    "frais inscription étudiants étrangers 2026",
    "frais différenciés étudiants extracommunautaires",
    "prix université france étranger",
    "décret 2026-385 étudiants étrangers",
    "exonération frais université étranger",
    "droits d'inscription différenciés",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/frais-inscription-universite.webp",
    alt: "Le décor peint du grand amphithéâtre de la Sorbonne, avec l'inscription « Université de Paris » entre des feuillages dorés",
    largeur: 1200,
    hauteur: 675,
    credit: "Sigoise, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Le_grand_amphith%C3%A9%C3%A2tre_-_Universit%C3%A9_de_Paris.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 28 novembre 2026",
      texte: "La version précédente donnait des montants de l'année passée (2 895 € et 3 941 €, 254 € pour le master, « 380 € environ » pour le doctorat). Elle disait aussi que toutes les classes préparatoires étaient exonérées, et oubliait le cas des familles installées en France depuis 2 ans. Cette page est réécrite sur Campus France et service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Combien coûte une année d'université pour un étudiant étranger ?",
    },
    {
      type: "p",
      texte: "Les frais d'inscription, ou droits d'inscription, sont la somme que vous payez chaque année à l'université pour suivre un diplôme. Certains étudiants ne sont pas ressortissants de l'Union européenne, de l'Espace économique européen ou de la Suisse. Pour eux, l'État a fixé des ==droits différenciés== : un tarif plus élevé en licence et en master.",
    },
    {
      type: "tableau",
      entetes: ["Diplôme (2026-2027)", "Tarif des droits différenciés", "Tarif des étudiants français et européens"],
      lignes: [
        ["Licence", "2 902 €", "178 €"],
        ["Master", "3 950 €", "255 €"],
        ["Doctorat", "398 € (pas de droits différenciés)", "398 €"],
      ],
    },
    {
      type: "p",
      texte: "Ces montants viennent de [Campus France](https://www.campusfrance.org/fr/cout-etudes-superieures-france-frais-inscription) (page mise à jour le 25 juin 2026) et de [service-public (F2865)](https://www.service-public.gouv.fr/particuliers/vosdroits/F2865). Ils valent pour les établissements publics qui dépendent du ministère de l'Enseignement supérieur. Les cycles d'ingénieur ont aussi des droits différenciés. Les écoles qui dépendent d'autres ministères fixent leurs propres tarifs. Et l'inscription dans un BTS public ne coûte rien, selon F2865.",
    },
    {
      type: "h2",
      texte: "Qui paie le même tarif que les étudiants français ?",
    },
    {
      type: "p",
      texte: "Selon Campus France, certains étudiants étrangers ne paient pas les droits différenciés. Ils paient 178 € en licence et 255 € en master, comme les Français :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "les titulaires d'une ==carte de résident== de longue durée (la carte de séjour de 10 ans) ;",
        "les étudiants dont le foyer fiscal est en France ==depuis plus de 2 ans==, ou qui sont rattachés depuis plus de 2 ans à un foyer fiscal en France. Par exemple, ceux dont les parents paient leurs impôts en France ;",
        "les réfugiés et les bénéficiaires de la protection subsidiaire, et leurs enfants ;",
        "les étudiants en doctorat et dans certains diplômes de 3e cycle de santé ;",
        "les étudiants en classe préparatoire aux grandes écoles (CPGE) qui ont aussi une inscription en licence à l'université ;",
        "les étudiants résidents du Québec.",
      ],
    },
    {
      type: "p",
      texte: "La protection subsidiaire est une protection accordée par l'OFPRA, l'office qui étudie les demandes d'asile, à une personne qui risque des menaces graves dans son pays sans être reconnue réfugiée. Un titre de séjour étudiant ou salarié, lui, ne suffit pas pour payer le tarif français.",
    },
    {
      type: "h2",
      texte: "Qui ne paie rien du tout ?",
    },
    {
      type: "p",
      texte: "Campus France cite deux exonérations ==automatiques et totales== :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "les étudiants qui ont une bourse d'enseignement supérieur de l'État français : les bourses du gouvernement français et les bourses sur critères sociaux. Service-public le confirme pour les boursiers du gouvernement français ;",
        "les étudiants venus dans le cadre d'un accord qui prévoit que chaque pays exonère les étudiants de l'autre (un accord entre universités, un programme européen ou international).",
      ],
    },
    {
      type: "p",
      texte: "Une bourse de votre pays d'origine ou d'une fondation privée n'entre pas dans ce cas. Pour tous les autres, il reste l'exonération demandée à l'université, sur dossier. Campus France cite par exemple un pays en crise, une situation de handicap ou une difficulté financière de la famille.",
    },
    {
      type: "h2",
      texte: "Ce que change le décret du 19 mai 2026",
    },
    {
      type: "p",
      texte: "Avant 2026, beaucoup d'universités exonéraient une grande partie de leurs étudiants étrangers. Le [décret n° 2026-385 du 19 mai 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054113646) limite ces exonérations accordées par les universités. Il a été publié le 20 mai au Journal officiel (le journal de l'État qui publie les lois et les décrets). Il ne change pas les montants.",
    },
    {
      type: "tableau",
      entetes: ["Année universitaire", "Part maximale d'exonérations accordées par l'université"],
      lignes: [
        ["2026-2027", "30 %"],
        ["2027-2028", "25 %"],
        ["À partir de 2028-2029", "20 %"],
      ],
    },
    {
      type: "p",
      texte: "Des mesures de transition protègent ceux qui étaient déjà exonérés. Selon Campus France, un étudiant exonéré en 2025-2026 garde les anciennes règles jusqu'à la fin de son cycle (toute la licence ou tout le master). Il doit rester dans le même établissement. C'est la même chose pour une exonération obtenue pour 2026-2027 avant la publication du décret. Si vous changez d'université, cette protection ne vous suit pas.",
    },
    {
      type: "encadre",
      titre: "Le bon réflexe avant de vous inscrire",
      texte: "Demandez **par écrit** au service des inscriptions de l'université quel tarif vous paierez, et si une exonération est possible, avec quels critères et à quelle date. Gardez la réponse. Les universités peuvent aussi proposer un paiement en 3 fois (F2865).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les frais d'inscription et votre titre de séjour étudiant",
    },
    {
      type: "p",
      texte: "Pour obtenir ou renouveler un titre de séjour étudiant, vous devez prouver des ressources d'au moins ==877,50 € par mois==, selon [service-public (F2231)](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231). Les frais d'inscription s'ajoutent à ce budget : prévoyez-les dès le départ. La validation de votre visa long séjour étudiant coûte aussi 100 €. Notre guide sur [l'ANEF pour les étudiants étrangers](/articles/anef-etudiant-etranger-2026) détaille ces étapes, et celui sur [Campus France](/articles/campus-france-etude-france-2026-visa-inscription-procedure) la procédure pour venir étudier.",
    },
    {
      type: "p",
      texte: "Après vos études, plusieurs voies existent pour rester en France, du [passeport talent](/articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure) au [titre de séjour salarié](/articles/titre-de-sejour-salarie). Une carte de séjour pluriannuelle ou une carte de résident demande ensuite de réussir l'examen civique : le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute s'il vous concerne.",
    },
    {
      type: "cta",
      texte: "Vous visez une carte pluriannuelle ou une carte de résident après vos études ? Découvrez les questions types de l'examen civique, avec la correction. L'inscription sur Test Civique France est gratuite.",
    },
  ],
  faq: [
    {
      question: "Combien coûte l'université en France pour un étudiant étranger ?",
      reponse: "En 2026-2027, un étudiant hors Union européenne paie en principe 2 902 € par an en licence et 3 950 € en master dans une université publique, selon Campus France. Le doctorat coûte 398 €, comme pour les Français. Certains étudiants étrangers paient le tarif français (178 € et 255 €), et les boursiers de l'État français ne paient rien.",
    },
    {
      question: "Qui est exonéré des frais différenciés ?",
      reponse: "Les titulaires d'une carte de résident et les étudiants dont le foyer fiscal est en France depuis plus de 2 ans ne paient pas les droits différenciés. C'est aussi le cas des réfugiés, des bénéficiaires de la protection subsidiaire, des doctorants et de certains élèves de classe préparatoire. Les boursiers du gouvernement français et les étudiants en échange avec réciprocité sont exonérés en totalité.",
    },
    {
      question: "Un étudiant marocain ou algérien paie-t-il les frais différenciés ?",
      reponse: "Oui en principe, car le Maroc et l'Algérie sont hors de l'Union européenne. Il paie le tarif français s'il entre dans un cas prévu, par exemple une carte de résident ou un foyer fiscal en France depuis plus de 2 ans. Il peut aussi demander une exonération à son université, dans la limite fixée par le décret du 19 mai 2026.",
    },
    {
      question: "J'étais exonéré en 2025-2026 : vais-je perdre mon exonération ?",
      reponse: "Non, selon Campus France, vous gardez les anciennes règles jusqu'à la fin de votre cycle, c'est-à-dire toute la licence ou tout le master, si vous restez dans le même établissement. Si vous changez d'université, cette protection ne s'applique plus. Demandez une confirmation écrite au service des inscriptions.",
    },
  ],
  sources: [
    {
      titre: "Campus France : le coût des études supérieures en France (mis à jour le 25/06/2026), droits 2026-2027, étudiants non concernés et exonérations",
      url: "https://www.campusfrance.org/fr/cout-etudes-superieures-france-frais-inscription",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "Service-public : coût d'une inscription dans l'enseignement supérieur (F2865, vérifiée le 20/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2865",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "Légifrance : décret n° 2026-385 du 19 mai 2026 relatif aux modalités d'exonération des droits d'inscription des étudiants étrangers (JORF du 20/05/2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054113646",
      type: "juridique",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : carte de séjour temporaire étudiant (F2231, vérifiée le 01/08/2026), ressources de 877,50 € par mois et taxe de validation du visa",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      luLe: "2026-11-28",
    },
  ],
};

export default article;
