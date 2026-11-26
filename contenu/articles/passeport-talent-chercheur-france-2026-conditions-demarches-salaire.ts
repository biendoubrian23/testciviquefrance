import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit en entier par le
 * robot éditorial le 26/11/2026 (`docs/seo/ROBOT.md`, liste « à revérifier »
 * de `docs/seo/MOTS-CLES.md`).
 * La version migrée affirmait sans source : « plus de 8 500 chercheurs » par
 * an, une grille de salaires « réels 2026 », « aucun seuil de salaire », une
 * convention « validée par la préfecture », une taxe OFII de 200 €, une
 * famille « mariée ou pacsée » payant 200 € par personne, une carte de
 * résident « après 4 ans » et une « naturalisation accélérée à 2 ans » pour
 * tout chercheur. Tout est retiré ou corrigé.
 * Sources lues le 26/11/2026 : service-public F16922 (vérifiée le 01/06/2026,
 * page « en cours de mise à jour » après le décret n° 2026-1001), onglet
 * « Chercheur » ; F35792 (talent-famille, vérifiée le 01/05/2026) ;
 * Légifrance, code civil, art. 21-18 (lu par Chrome). F2208 lue le 22/11/2026.
 */
const article: Article = {
  slug: "passeport-talent-chercheur-france-2026-conditions-demarches-salaire",
  titre: "Passeport talent chercheur : les conditions, le salaire minimum de 2 200 € et la démarche, point par point",
  titreSeo: "Passeport talent chercheur : conditions et salaire",
  resume: "La carte talent-chercheur : master, convention d'accueil, seuil de 2 200 € brut, visa, prix de 350 € et carte talent-famille.",
  chapo: "Le passeport talent chercheur, aujourd'hui appelé carte de séjour « ==talent-chercheur== », est le titre des chercheurs et enseignants du supérieur venus de l'étranger. Il faut un diplôme au moins égal au master et une convention d'accueil signée avec un organisme de recherche. La carte coûte ==350 €== et votre famille peut vous suivre sans regroupement familial.",
  publieLe: "2026-04-28",
  modifieLe: "2026-11-26",
  minutes: 6,
  theme: "La carte de séjour talent-chercheur : conditions, convention d'accueil, seuil de rémunération, démarche, prix et famille",
  motsCles: [
    "passeport talent chercheur",
    "carte talent chercheur",
    "talent chercheur convention d'accueil",
    "passeport talent chercheur salaire",
    "visa chercheur france",
    "post-doc france titre de séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/passeport-talent-chercheur.webp",
    alt: "Le bâtiment Recherche Nord du campus Condorcet, un immeuble blanc de laboratoires sous un ciel bleu",
    largeur: 1200,
    hauteur: 900,
    credit: "RT59RC, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:B%C3%A2timent_Recherche_Nord,_Campus_Condorcet_2024.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 26 novembre 2026",
      texte: "L'ancienne version donnait des chiffres sans source (nombre de chercheurs, grille de salaires). Elle disait qu'aucun salaire minimum n'existait, et annonçait une taxe de 200 € et une carte de résident après 4 ans. Elle a été réécrite sur la fiche officielle de service-public et sur le code civil.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la carte talent-chercheur ?",
    },
    {
      type: "p",
      texte: "C'est une carte de séjour pluriannuelle, c'est-à-dire valable plusieurs années, de la famille « talent ». On l'appelait avant « passeport talent ». Elle vous autorise à séjourner en France et à travailler. Votre employeur n'a pas à demander d'autorisation de travail, et il ne paie pas la taxe due pour l'emploi d'un étranger ([service-public, F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "Elle vaut aussi pour un chercheur qui travaille déjà dans un autre pays de l'Union européenne. Il vient alors faire une partie de ses travaux en France, pour plus de 3 mois. Dans ce cas, il n'a pas besoin de visa de long séjour.",
    },
    {
      type: "h2",
      texte: "Quelles sont les conditions ?",
    },
    {
      type: "p",
      texte: "Selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922), vous devez remplir ==toutes== ces conditions :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "avoir un diplôme ==au moins équivalent au master== (bac + 5) ;",
        "venir faire des travaux de recherche ou donner un enseignement de niveau universitaire ;",
        "avoir une ==convention d'accueil== signée avec un organisme public ou privé agréé, qui a une mission de recherche ou d'enseignement supérieur.",
      ],
    },
    {
      type: "p",
      texte: "La convention d'accueil, c'est le document signé par le laboratoire ou l'université qui vous reçoit. Elle doit dire que vous êtes chercheur, et indiquer l'objet et la durée de votre séjour. Si vous comptez aller dans un autre pays de l'Union pour vos recherches, elle doit dire que vous faites partie d'un programme de mobilité. Vous demandez alors la carte « talent-chercheur, programme de mobilité ».",
    },
    {
      type: "h2",
      texte: "Y a-t-il un salaire minimum ?",
    },
    {
      type: "p",
      texte: "Oui. Service-public indique un seuil de rémunération minimal de ==2 200 € brut== pour le chercheur qui a signé une convention de séjour de recherche. L'ancienne version de cet article disait le contraire : c'était faux.",
    },
    {
      type: "p",
      texte: "Les salaires varient beaucoup selon le statut (contrat doctoral, post-doctorat, poste permanent) et l'organisme. Aucune grille officielle commune ne les fixe pour tous : demandez le montant exact à l'organisme qui vous accueille, et vérifiez qu'il figure dans votre convention ou votre contrat.",
    },
    {
      type: "h2",
      texte: "Comment faire la demande ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Obtenez la convention d'accueil** auprès de l'organisme qui vous reçoit.",
        "**Demandez le visa au consulat de France** de votre pays. Pour un séjour d'un an ou plus, le consulat délivre un visa de long séjour mention « talent » de 3 mois.",
        "**Demandez la carte en ligne** dès votre arrivée, sur l'ANEF, le site de l'État pour les titres de séjour ([administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr)).",
        "**Joignez les pièces** : passeport, diplôme au moins équivalent au master, convention d'accueil, justificatif de domicile, e-photo, et le contrat d'engagement à respecter les principes de la République signé.",
        "**Payez la carte** quand la préfecture vous dit qu'elle est prête : ==350 €== en timbres fiscaux (50 € de droit de timbre et 300 € de taxe).",
        "**Récupérez la carte** en préfecture, le service de l'État dans votre département, souvent sur rendez-vous.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Ne laissez pas expirer le visa de 3 mois** sans avoir déposé la demande de carte : c'est lui qui couvre votre arrivée.",
        "**Le délai de réponse a changé.** Pour le chercheur, service-public indique un refus implicite après 60 jours sans réponse. Mais sa page est « en cours de mise à jour » après le décret n° 2026-1001 du 26 octobre 2026 : vérifiez le délai le jour de votre dépôt. Notre article sur [le délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) explique ce décret.",
        "**Gardez une copie de la convention.** Elle est la base de votre droit au séjour pendant toute la durée de vos travaux.",
      ],
    },
    {
      type: "h2",
      texte: "Votre famille peut-elle vous suivre ?",
    },
    {
      type: "p",
      texte: "Oui, par une procédure simplifiée : la carte « ==talent-famille== ». Votre famille n'a pas à passer par le regroupement familial ([service-public, F35792](https://www.service-public.gouv.fr/particuliers/vosdroits/F35792)). Elle concerne :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "votre époux ou épouse de plus de 18 ans (la fiche parle de mariage, pas de PACS) ;",
        "vos enfants, à leur majorité s'ils sont entrés en France mineurs, ou dès 16 ans s'ils veulent travailler.",
      ],
    },
    {
      type: "p",
      texte: "La carte talent-famille permet de travailler, comme salarié ou à son compte. Elle coûte aussi ==350 €==. Depuis l'étranger, la famille demande un visa au consulat, puis la carte en ligne à l'arrivée. Notre guide sur [la carte talent-famille](/articles/famille-passeport-talent-france-2026-conjoint-enfants-droits-titre) détaille les pièces.",
    },
    {
      type: "h2",
      texte: "Et après : carte de résident ou naturalisation ?",
    },
    {
      type: "p",
      texte: "Pour la carte talent, la fiche de service-public ne demande ni examen civique ni niveau de français. Ils reviennent plus tard. La carte de résident de 10 ans et la naturalisation demandent un niveau de français et la réussite à l'examen civique. Nos guides sur [la carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture) et sur [l'examen civique de la naturalisation](/articles/examen-civique-naturalisation) donnent les conditions.",
    },
    {
      type: "p",
      texte: "Pour la naturalisation, il faut en principe 5 ans de résidence en France. Le code civil réduit ce délai à ==2 ans== dans trois cas ([article 21-18](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197095)). Le premier : deux années d'études supérieures réussies en France, en vue d'un diplôme français. Le deuxième : des services importants rendus à la France par vos capacités et vos talents. Le troisième : un parcours exceptionnel d'intégration, par exemple dans le domaine scientifique. Ce n'est pas automatique : l'administration apprécie chaque dossier.",
    },
    {
      type: "cta",
      texte: "L'examen civique se prépare bien à l'avance, même pendant vos années de recherche. Sur Test Civique France, les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour voir les autres cartes de la famille talent (salarié qualifié, création d'entreprise), lisez notre [guide de la carte talent](/articles/passeport-talent-2026-conditions-metiers-demarches). Et pour savoir en une minute si l'examen civique vous concerne, utilisez le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Quel est le salaire minimum pour un passeport talent chercheur ?",
      reponse: "Service-public indique un seuil de rémunération minimal de 2 200 € brut pour le chercheur qui a signé une convention de séjour de recherche. Au-delà de ce seuil, le salaire dépend de votre statut et de l'organisme qui vous accueille. Vérifiez le montant dans votre convention ou votre contrat.",
    },
    {
      question: "Qu'est-ce que la convention d'accueil d'un chercheur ?",
      reponse: "C'est le document signé avec un organisme public ou privé agréé, qui a une mission de recherche ou d'enseignement supérieur. Il dit que vous êtes chercheur, et précise l'objet et la durée de votre séjour en France. Sans elle, la carte talent-chercheur ne peut pas être délivrée.",
    },
    {
      question: "Combien coûte la carte talent-chercheur ?",
      reponse: "La carte coûte 350 € en timbres fiscaux : 50 € de droit de timbre et 300 € de taxe, selon service-public. Vous payez quand la préfecture vous dit que la carte est prête. La carte talent-famille de votre époux ou épouse coûte aussi 350 €.",
    },
    {
      question: "Le conjoint d'un chercheur peut-il travailler en France ?",
      reponse: "Oui. L'époux ou l'épouse du titulaire d'une carte talent peut obtenir une carte talent-famille, sans passer par le regroupement familial. Cette carte autorise à travailler comme salarié ou à son compte, et l'employeur n'a pas d'autorisation de travail à demander.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour pluriannuelle « talent » (F16922, vérifiée le 01/06/2026, page en cours de mise à jour), onglet « Chercheur »",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "Service-public : carte de séjour « talent-famille » (F35792, vérifiée le 01/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35792",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "Légifrance : code civil, article 21-18 (stage de naturalisation réduit à deux ans)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197095",
      type: "officiel",
      luLe: "2026-11-26",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "ANEF : administration numérique pour les étrangers en France",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr",
      type: "officiel",
      luLe: "2026-11-26",
    },
  ],
};

export default article;
