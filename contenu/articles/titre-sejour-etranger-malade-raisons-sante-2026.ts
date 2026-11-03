import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-titre-sejour-sante.ts`
 * et `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Réécrit par le robot éditorial le 03/11/2026 (liste « à revérifier » de
 * `docs/seo/MOTS-CLES.md`). Erreurs corrigées : le délai de décision (90 jours
 * depuis le 30/10/2026, article R. 432-2, et non 4 mois), des délais d'OFII
 * sans source (« 3 à 6 mois »), un plafond d'AME faux (810 € par mois au lieu
 * de 10 421 € par an), un délai de recours en cas d'OQTF donné sans source,
 * une liste de « pathologies concernées » sans texte, l'« effet suspensif »
 * affirmé sans condition, et une phrase sur le regroupement familial sans
 * source. Requête visée : « titre de séjour étranger malade » et « titre de
 * séjour pour soins » (100 à 1 k chacune, Planificateur, France, toutes les
 * langues, 03/11/2026). Sources lues le 03/11/2026 : Légifrance (CESEDA
 * L. 425-9, L. 425-10, R. 425-11 à R. 425-13, R. 432-2) ; service-public
 * F17164 et F2209. Couverture Unsplash d'origine conservée, texte
 * alternatif ajouté.
 */
const article: Article = {
  slug: "titre-sejour-etranger-malade-raisons-sante-2026",
  titre: "Titre de séjour étranger malade : les conditions, le rôle des médecins de l'OFII et les délais en 2026",
  titreSeo: "Titre de séjour étranger malade : conditions, OFII",
  resume: "Titre de séjour pour soins : les conditions du CESEDA, le certificat médical à envoyer à l'OFII en 1 mois, le délai de 90 jours et les recours.",
  chapo: "Un étranger gravement malade, qui ne pourrait pas être soigné dans son pays, peut demander une carte de séjour « vie privée et familiale » d'==un an== (article L. 425-9 du CESEDA). La préfecture décide après l'avis de trois médecins de l'OFII. Voici les conditions, les étapes et les délais, à jour du décret du 26 octobre 2026.",
  publieLe: "2026-03-31",
  modifieLe: "2026-11-03",
  minutes: 7,
  theme: "titre séjour étranger malade",
  motsCles: [
    "titre de séjour étranger malade",
    "titre de séjour pour soins",
    "titre séjour raisons de santé",
    "collège médecins OFII",
    "certificat médical OFII étranger malade",
    "autorisation provisoire de séjour parent enfant malade",
    "L. 425-9 CESEDA",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    alt: "Couloir d'hôpital vide, avec des portes de chambres de chaque côté",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 3 novembre 2026",
      texte: "Cet article a été réécrit sur les textes officiels. La version précédente donnait un délai de réponse périmé : 4 mois, alors que c'est 90 jours depuis le 30 octobre 2026. Elle citait aussi des délais d'avis médical sans source et un plafond d'AME faux.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qui peut demander un titre de séjour pour soins ?",
    },
    {
      type: "p",
      texte: "Le titre de séjour, c'est la carte qui permet de vivre en France de façon régulière. Le titre « étranger malade » est prévu par l'article L. 425-9 du CESEDA, le code qui fixe les règles de séjour des étrangers ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771828)). Il faut remplir ces conditions en même temps :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Résider habituellement en France.** Le texte ne fixe pas de durée minimale.",
        "**Avoir besoin de soins** dont l'absence pourrait avoir des « conséquences d'une exceptionnelle gravité » pour vous.",
        "**Ne pas pouvoir bénéficier effectivement d'un traitement approprié dans votre pays d'origine**, compte tenu des soins qui y existent et de son système de santé. Ce qui compte, c'est l'accès réel au traitement.",
        "**Ne pas représenter une menace pour l'ordre public** ([service-public, F17164](https://www.service-public.gouv.fr/particuliers/vosdroits/F17164)).",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez faire la demande ==même sans titre de séjour== ni visa de long séjour : la loi écarte cette condition (article L. 425-9). La préfecture peut toutefois refuser si vous n'avez pas respecté une OQTF, une obligation de quitter le territoire français, ou pour certaines infractions graves (F17164). Les ressortissants européens relèvent d'autres règles.",
    },
    {
      type: "h2",
      texte: "Comment se passe la demande, étape par étape ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vous déposez la demande de titre.** Service-public décrit un dépôt sur l'ANEF. C'est le site du ministère de l'Intérieur pour les demandes de titre en ligne. Le certificat médical à faire remplir apparaît dans votre espace (F17164).",
        "**Votre médecin remplit le certificat médical.** Ce doit être le médecin qui vous suit habituellement, ou un médecin praticien hospitalier (article R. 425-12 du CESEDA).",
        "**Vous l'envoyez au service médical de l'OFII dans le mois.** L'OFII, c'est l'Office français de l'immigration et de l'intégration. Le délai est d'==1 mois== en général, de 3 mois pour un demandeur d'asile. Service-public conseille l'envoi en recommandé avec accusé de réception (F17164).",
        "**Un médecin de l'OFII rédige un rapport médical.** Il peut demander des informations à votre médecin, vous convoquer et faire faire des examens. Vous avez ==15 jours== pour répondre à une demande de compléments (R. 425-12).",
        "**Un collège de trois médecins de l'OFII rend un avis** (R. 425-13). Il se fonde sur le rapport et sur les informations disponibles sur les soins dans votre pays (R. 425-11).",
        "**Le préfet décide.** L'avis ne l'oblige pas (F17164). Mais si l'avis est favorable, il ne peut refuser le titre que par une décision « spécialement motivée » (article L. 425-9).",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Ne manquez pas une convocation de l'OFII.** Si vous ne venez pas, ou si vous ne prouvez pas votre identité, le médecin rédige son rapport sans vous. Le récépissé de première demande n'est alors pas délivré (R. 425-12).",
        "**Le secret médical est protégé.** Le dossier médical va au service médical de l'OFII, pas à la préfecture. Ne joignez jamais de documents médicaux à votre dossier de préfecture.",
      ],
    },
    {
      type: "h2",
      texte: "Combien de temps faut-il attendre ?",
    },
    {
      type: "p",
      texte: "Depuis le 30 octobre 2026, la préfecture doit notifier sa décision ==au plus tard 90 jours== après le dépôt d'une demande complète. Elle peut ajouter 30 jours pour un dossier d'une complexité particulière, en vous prévenant (article R. 432-2 du CESEDA, modifié par le décret n° 2026-1001). Sans réponse dans ce délai, la demande est considérée comme refusée : c'est un refus implicite.",
    },
    {
      type: "p",
      texte: "La fiche F17164 de service-public parle encore d'un silence de 4 mois : elle indique elle-même être en cours de mise à jour. Notre article sur [le délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) détaille ce changement.",
    },
    {
      type: "p",
      texte: "Pendant l'examen, la préfecture vous remet une attestation de prolongation d'instruction, un document qui prouve que votre demande est en cours (F17164). Notre article sur [l'attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction) explique ce qu'elle permet.",
    },
    {
      type: "h2",
      texte: "Que donne ce titre de séjour ?",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que disent les textes"],
      lignes: [
        ["Type de carte", "Carte de séjour temporaire « vie privée et familiale » (L. 425-9)"],
        ["Durée", "1 an (L. 425-9)"],
        ["Travail", "La carte « vie privée et familiale » autorise à travailler, sans autorisation de travail à demander par l'employeur (service-public, F2209)"],
        ["Droit de timbre", "50 €, à payer quand la carte est accordée (F17164)"],
        ["Entrée sans visa de long séjour", "Un droit de visa de régularisation de 300 € (F17164)"],
      ],
      legende: "Sources : Légifrance (CESEDA) et service-public F17164 et F2209, lus le 03/11/2026.",
    },
    {
      type: "p",
      texte: "Pour le **renouvellement**, la même procédure médicale recommence : un nouveau certificat, un nouvel avis du collège. Le récépissé de renouvellement est délivré dès que l'OFII reçoit votre certificat médical (R. 425-12). Le récépissé, c'est le papier qui prouve que votre demande de titre est en cours. Si votre état de santé ou les soins disponibles dans votre pays ont changé, l'avis peut changer aussi.",
    },
    {
      type: "h2",
      texte: "Et si c'est votre enfant qui est malade ?",
    },
    {
      type: "p",
      texte: "Les parents d'un enfant mineur qui remplit les conditions de l'article L. 425-9 reçoivent une **autorisation provisoire de séjour** (APS) de ==6 mois au plus==, s'ils vivent en France avec lui et l'élèvent (article L. 425-10 du CESEDA). Elle permet de travailler. Elle est renouvelée tant que l'enfant est soigné. Elle est aussi délivrée après l'avis des médecins de l'OFII. Ce n'est pas la démarche ANEF décrite plus haut (F17164).",
    },
    {
      type: "h2",
      texte: "Que faire en cas de refus ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Lisez la décision le jour même.** Elle indique le délai et le tribunal pour la contester. Le délai de recours devant le tribunal administratif est de ==2 mois== en général (F17164).",
        "**Si le refus s'accompagne d'une OQTF**, le délai de recours est plus court. Il est écrit sur la décision : agissez tout de suite.",
        "**Faites-vous aider.** Un avocat, ou une association : le Comede (Comité pour la santé des exilés) pour la partie médicale, La Cimade pour le droit au séjour. L'aide juridictionnelle peut payer l'avocat si vos revenus sont faibles. Le Défenseur des droits peut aussi être saisi.",
      ],
    },
    {
      type: "p",
      texte: "Cet article explique la règle générale. Il ne remplace pas l'avis d'un professionnel sur votre situation.",
    },
    {
      type: "h2",
      texte: "Comment se soigner pendant la procédure ?",
    },
    {
      type: "p",
      texte: "Sans titre de séjour, vos soins peuvent être pris en charge par l'aide médicale de l'État (AME). Il faut vivre en France depuis plus de 3 mois et avoir de faibles ressources. Notre guide de [l'aide médicale de l'État](/articles/aide-medicale-etat-ame) donne les conditions, le plafond et la démarche. Les soins urgents à l'hôpital restent possibles sans AME.",
    },
    {
      type: "encadre",
      titre: "Après le titre pour soins",
      texte: "Plus tard, vous pourrez demander une carte de séjour pluriannuelle (une carte de 2 à 4 ans) ou une carte de résident (une carte de 10 ans). Ces cartes demandent en général l'examen civique, un QCM de 40 questions sur la France. Vous pouvez [vérifier en une minute si l'examen vous concerne](/eligibilite-examen-civique).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelles sont les conditions pour avoir un titre de séjour étranger malade ?",
      reponse: "Il faut résider habituellement en France et avoir besoin de soins dont l'absence aurait des conséquences d'une exceptionnelle gravité. Il faut aussi ne pas pouvoir bénéficier effectivement d'un traitement approprié dans son pays d'origine (article L. 425-9 du CESEDA). Il ne faut pas non plus représenter une menace pour l'ordre public. Un visa de long séjour n'est pas exigé.",
    },
    {
      question: "Quel délai pour envoyer le certificat médical à l'OFII ?",
      reponse: "En général, 1 mois. Service-public le compte à partir de la mise à disposition du certificat dans votre espace ANEF ; le CESEDA, à partir de l'enregistrement de la demande. Pour un demandeur d'asile, le délai est de 3 mois. Envoyez-le tôt, en recommandé avec accusé de réception, au service médical de l'OFII.",
    },
    {
      question: "Combien de temps dure la procédure étranger malade ?",
      reponse: "Depuis le 30 octobre 2026, la préfecture doit répondre au plus tard 90 jours après le dépôt d'une demande complète, 30 jours de plus pour un dossier complexe (article R. 432-2 du CESEDA). Sans réponse dans ce délai, la demande est considérée comme refusée. Ce refus implicite peut être contesté dans les 2 mois.",
    },
    {
      question: "Le titre de séjour étranger malade permet-il de travailler ?",
      reponse: "Oui. Le titre est une carte de séjour temporaire « vie privée et familiale » d'un an. Selon service-public, cette carte autorise à travailler, sans que l'employeur ait à demander une autorisation de travail. Pour un parent d'enfant malade, l'autorisation provisoire de séjour permet aussi de travailler (article L. 425-10 du CESEDA).",
    },
  ],
  sources: [
    {
      titre: "Légifrance : CESEDA, articles L. 425-9 et L. 425-10 (étranger dont l'état de santé nécessite une prise en charge médicale), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771828",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Légifrance : CESEDA, articles R. 425-11 à R. 425-14 (certificat médical, rapport, collège de médecins de l'OFII)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042801208",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Légifrance : CESEDA, article R. 432-2, modifié par le décret n° 2026-1001 du 26 octobre 2026 (décision sous 90 jours)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042801364",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Service-public : titre de séjour pour raison de santé, fiche F17164, vérifiée le 01/05/2026 (en cours de mise à jour)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17164",
      type: "officiel",
      luLe: "2026-11-03",
    },
    {
      titre: "Service-public : carte de séjour « vie privée et familiale », fiche F2209, vérifiée le 01/05/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-03",
    },
  ],
  aLireAussi: [
    {
      slug: "aide-medicale-etat-ame",
      ancre: "L'aide médicale de l'État : conditions et demande",
    },
    {
      slug: "attestation-prolongation-instruction",
      ancre: "L'attestation de prolongation d'instruction",
    },
    {
      slug: "delai-reponse-prefecture-titre-de-sejour-90-jours",
      ancre: "Le délai de réponse de 90 jours",
    },
  ],
};

export default article;
