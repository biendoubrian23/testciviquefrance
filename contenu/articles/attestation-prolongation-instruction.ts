import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 26/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « attestation de prolongation d'instruction » (1 k à 10 k
 * recherches par mois, Planificateur de mots clés, France, 24/10/2026).
 * Famille guides pratiques permanents. Aucune page du site ne lui était
 * dédiée : le sujet n'apparaissait qu'en passant dans les guides de l'ANEF,
 * du renouvellement et du récépissé. Sources lues le 26/10/2026 :
 * service-public F36206 ; décision du Conseil d'État n° 502860 du 5 mai 2026,
 * qui cite le texte en vigueur des articles L. 431-3, R. 431-5, R. 431-15-1 et
 * R. 431-15-2 du CESEDA.
 */
const article: Article = {
  slug: "attestation-prolongation-instruction",
  titre: "Attestation de prolongation d'instruction : ce qu'elle vous permet, et que faire si elle n'arrive pas",
  titreSeo: "Attestation de prolongation d'instruction : droits",
  resume: "Attestation de prolongation d'instruction : quand l'ANEF la délivre, sa durée, le travail, la CAF, et que faire si elle n'arrive pas avant la fin du titre.",
  chapo: "Votre titre expire et la préfecture (l'administration de l'État qui délivre les titres) étudie encore votre demande ? L'attestation de prolongation d'instruction prouve alors que votre séjour reste régulier. Elle vaut ==3 mois au plus== et doit être renouvelée tant qu'aucune décision n'est prise. Voici quand vous y avez droit, ce qu'elle permet, et que faire si elle n'arrive pas.",
  publieLe: "2026-10-26",
  modifieLe: "2026-10-26",
  minutes: 7,
  theme: "attestation de prolongation d'instruction",
  motsCles: [
    "attestation de prolongation d'instruction",
    "attestation de prolongation d'instruction ANEF",
    "attestation de prolongation d'instruction travailler",
    "attestation de prolongation d'instruction CAF",
    "renouvellement attestation de prolongation d'instruction",
    "attestation de prolongation non reçue",
    "R431-15-1 CESEDA",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/attestation-prolongation-instruction.webp",
    alt: "Un sablier au sable rouge posé sur des pages de journal, le haut encore presque plein",
    largeur: 1024,
    hauteur: 772,
    credit: "Semtrio, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/163837264@N07/43309471604",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que l'attestation de prolongation d'instruction ?",
    },
    {
      type: "p",
      texte: "C'est un ==document provisoire de séjour==. Il prouve que vous êtes en règle pendant que l'administration étudie votre demande de titre de séjour. Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Vous recevez l'attestation sur l'**ANEF**, le site du ministère de l'Intérieur où se font la plupart des demandes de titre ([service-public, F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)).",
    },
    {
      type: "p",
      texte: "La règle est écrite dans le **CESEDA**, le code qui regroupe les lois sur l'entrée et le séjour des étrangers, à l'article R. 431-15-1. Le Conseil d'État, la plus haute juridiction administrative, en cite le texte en vigueur dans sa [décision du 5 mai 2026](https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "elle est mise à votre disposition quand votre demande est **complète**, déposée **dans les délais**, et toujours en cours à la date de fin de votre titre ;",
        "elle vaut ==3 mois au plus== ;",
        "accompagnée de votre titre expiré, elle prouve que votre séjour est régulier pendant la durée qu'elle indique ;",
        "elle est **renouvelée** aussi longtemps que le préfet n'a pas pris de décision.",
      ],
    },
    {
      type: "encadre",
      titre: "Trois documents à ne pas confondre",
      texte: "**L'attestation de dépôt** arrive tout de suite après votre demande en ligne. Elle ne prouve pas que votre séjour est régulier et ne vous autorise pas à travailler.\n**L'attestation de prolongation d'instruction** prend le relais quand votre titre expire et que le dossier est toujours à l'étude.\n**L'attestation de décision favorable** arrive quand la préfecture accepte votre demande, en attendant que vous récupériez la carte ([F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quand avez-vous droit à cette attestation ?",
    },
    {
      type: "p",
      texte: "Deux conditions comptent. La première : votre dossier doit être **complet**. La seconde : pour un renouvellement, vous devez l'avoir déposé ==entre le 120e et le 60e jour== avant la fin de votre titre. C'est le délai de l'article R. 431-5 du CESEDA, rappelé par le Conseil d'État au point 24 de sa décision.",
    },
    {
      type: "tableau",
      entetes: ["Votre titre expire le", "Déposez la demande à partir du", "Et au plus tard le"],
      lignes: [
        ["31 mars", "1er décembre (120 jours avant)", "30 janvier (60 jours avant)"],
        ["30 juin", "2 mars (120 jours avant)", "1er mai (60 jours avant)"],
      ],
      legende: "Exemples calculés sur le délai de l'article R. 431-5 du CESEDA, hors année bissextile. Comptez toujours à partir de la date exacte inscrite sur votre carte.",
    },
    {
      type: "p",
      texte: "Si vous déposez trop tard, la préfecture peut ne pas vous délivrer l'attestation. Le dossier reste à l'étude, mais vous risquez une période sans document valable. Notre guide du [renouvellement du titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) détaille les pièces à préparer pour ne pas manquer ce délai.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Un dossier incomplet bloque tout.** Si la préfecture vous demande une pièce, envoyez-la vite sur l'ANEF : l'attestation dépend d'un dossier complet.",
        "**Les réfugiés ont une règle à part.** Pour les personnes réfugiées et les bénéficiaires de la protection subsidiaire, l'attestation est donnée dès la demande de carte, pour 6 mois renouvelables (articles R. 431-15-3 et R. 431-15-4, cités par le Conseil d'État).",
      ],
    },
    {
      type: "h2",
      texte: "Pouvez-vous travailler avec cette attestation ?",
    },
    {
      type: "p",
      texte: "Cela dépend de votre demande. **Pour un renouvellement**, vous pouvez travailler si la carte que vous renouvelez vous y autorisait déjà ([F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)). Le CESEDA le précise à l'article R. 431-15-2 : l'attestation permet alors de travailler en France métropolitaine.",
    },
    {
      type: "p",
      texte: "**Pour une première demande**, c'est plus étroit. Le principe est qu'un document provisoire n'autorise pas à travailler (article L. 431-3 du CESEDA). Service-public liste les exceptions ([F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)). Il cite par exemple une première carte « salarié » ou « travailleur temporaire », certaines cartes « vie privée et familiale » et la carte « talent ». Il cite aussi la carte de résident demandée après un mariage avec une personne française ou au titre du regroupement familial.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Lisez la mention imprimée sur votre attestation : elle dit si elle autorise une activité professionnelle.",
        "Donnez à votre employeur l'attestation **et** votre ancien titre : c'est l'ensemble des deux qui prouve votre droit.",
        "Si la mention vous semble fausse pour votre cas, signalez-le à la préfecture par l'ANEF. Le ministère a dit au Conseil d'État qu'il adaptait ces mentions, notamment pour les demandes « talent » (point 36 de la décision).",
      ],
    },
    {
      type: "h2",
      texte: "CAF, Sécurité sociale, logement : que vaut l'attestation ?",
    },
    {
      type: "p",
      texte: "En principe, l'attestation maintient les droits liés à votre ancien titre. Selon le Conseil d'État, le modèle d'attestation le dit, et un document d'information du ministère de l'Intérieur d'octobre 2023 la compare au « récépissé papier ». Le récépissé, c'est l'ancien document provisoire en papier remis par la préfecture.",
    },
    {
      type: "p",
      texte: "Mais la liste officielle des documents acceptés par la **CAF**, la caisse qui verse les allocations familiales et les aides au logement, ne cite pas encore l'attestation. Il en va de même pour la Sécurité sociale. Le Conseil d'État a constaté que certains organismes la refusaient. Il a ordonné à l'État de corriger ces textes ==dans un délai de six mois== (points 37, 38 et 49 de la décision du 5 mai 2026).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Envoyez à la CAF ou à votre caisse d'assurance maladie l'attestation, votre titre expiré et l'attestation de dépôt de votre demande.",
        "En cas de refus, demandez une réponse écrite. Elle vous servira si vous devez contester.",
        "Pour faire le point sur vos aides, lisez notre article sur [les aides sociales des étrangers en France](/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite).",
      ],
    },
    {
      type: "cta",
      texte: "Une première carte de séjour pluriannuelle (une carte valable plusieurs années) ou une première carte de résident demande aussi l'examen civique. Profitez de l'attente pour vous tester sur 40 questions types, gratuitement.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "h2",
      texte: "Votre titre expire et l'attestation n'arrive pas : que faire ?",
    },
    {
      type: "p",
      texte: "L'administration doit mettre l'attestation à votre disposition ==avant== la fin de votre titre, puis la renouveler avant sa propre fin. Le Conseil d'État le dit au point 29 de sa décision : vous n'avez pas de démarche spéciale à faire pour l'obtenir. Il a aussi constaté que, dans de nombreux cas, l'attestation n'arrivait pas à temps, et a ordonné à l'État d'y remédier dans les six mois.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Regardez votre espace ANEF** et la boîte mail liée au compte : l'attestation y est déposée, sans courrier papier.",
        "**Vérifiez que le dossier est complet** : une demande de pièce restée sans réponse peut bloquer l'attestation.",
        "**Contactez le centre de contact citoyens** depuis l'ANEF. Selon le Conseil d'État, il répond par message ou par téléphone, du lundi au vendredi, de 9 h à 17 h (point 43).",
        "**Allez au point d'accueil numérique de votre préfecture**, un guichet où un agent ou un volontaire aide pour les démarches en ligne. Notre article sur [un dossier ANEF bloqué](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer) détaille ces recours.",
        "**Faites-vous aider** par une association comme La Cimade, une permanence d'accès au droit ou un avocat. Ils peuvent vous dire si un recours devant le **tribunal administratif** (le juge des décisions de l'administration) est possible dans votre cas.",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez aussi saisir le **Défenseur des droits**, une autorité indépendante qui aide gratuitement les personnes en difficulté avec un service public ([defenseurdesdroits.fr](https://www.defenseurdesdroits.fr)).",
    },
    {
      type: "h2",
      texte: "Et pour voyager hors de France ?",
    },
    {
      type: "p",
      texte: "Restez prudent. Nous avons lu la fiche service-public F36206 et la décision du Conseil d'État. Aucune des deux ne dit si l'attestation suffit pour revenir en France après un voyage à l'étranger. Avant de réserver, interrogez la préfecture par l'ANEF. Notre article sur [le récépissé et les voyages](/articles/recepisse-titre-de-sejour-droits-duree-voyage) explique les règles du document papier, et celui sur [l'absence du territoire](/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026) les durées à surveiller.",
    },
    {
      type: "encadre",
      titre: "Ce qui peut changer d'ici quelques mois",
      texte: "Le Conseil d'État a donné à l'État ==six mois== à partir de la notification de sa décision du 5 mai 2026. Dans ce délai, l'État doit faire délivrer l'attestation à temps et la faire reconnaître par la CAF et la Sécurité sociale. Il doit aussi inscrire les droits sur l'attestation de décision favorable. Tant qu'aucun texte n'est publié au Journal officiel (le journal où paraissent les lois et les décrets), les règles décrites ici restent celles en vigueur. Nous mettrons cet article à jour à chaque nouveau texte.",
      ton: "ambre",
    },
  ],
  faq: [
    {
      question: "Combien de temps dure une attestation de prolongation d'instruction ?",
      reponse: "Elle vaut 3 mois au plus, selon l'article R. 431-15-1 du CESEDA. Si la préfecture n'a toujours pas décidé à la fin de ces 3 mois, l'attestation doit être renouvelée, aussi longtemps que dure l'étude du dossier. Pour les personnes réfugiées et les bénéficiaires de la protection subsidiaire, elle vaut 6 mois, renouvelables.",
    },
    {
      question: "Peut-on travailler avec une attestation de prolongation d'instruction ?",
      reponse: "Pour un renouvellement, oui, si la carte renouvelée autorisait déjà à travailler. Pour une première demande, seulement dans certains cas listés par service-public : carte « salarié », « talent », certaines cartes « vie privée et familiale », par exemple. La mention imprimée sur l'attestation indique si elle autorise une activité professionnelle.",
    },
    {
      question: "Comment obtenir le renouvellement de l'attestation de prolongation d'instruction ?",
      reponse: "Vous n'avez pas de démarche spéciale à faire : selon le Conseil d'État, l'administration doit la renouveler avant sa date de fin, sur l'ANEF. Si rien n'arrive, vérifiez que votre dossier est complet, puis contactez le centre de contact citoyens ou le point d'accueil numérique de votre préfecture. Une association ou un avocat peut aussi vous aider.",
    },
    {
      question: "Pourquoi je n'ai pas reçu d'attestation de prolongation d'instruction ?",
      reponse: "Souvent parce que le dossier n'est pas complet. Autre cause fréquente : une demande de renouvellement déposée hors du délai, moins de 60 jours avant la fin du titre. Le Conseil d'État a aussi constaté des retards de l'administration. Vérifiez votre espace ANEF et votre boîte mail, puis contactez le centre de contact citoyens.",
    },
  ],
  sources: [
    {
      titre: "Service-public : documents remis après une demande de carte de séjour sur internet (F36206)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36206",
      type: "officiel",
      luLe: "2026-10-26",
    },
    {
      titre: "Conseil d'État, décision n° 502860 du 5 mai 2026, Fédération des acteurs de la solidarité et autres (ANEF), texte intégral",
      url: "https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf",
      type: "juridique",
      description: "Cite le texte en vigueur des articles L. 431-3, R. 431-5, R. 431-15-1 et R. 431-15-2 du CESEDA ; injonctions à six et douze mois",
      luLe: "2026-10-26",
    },
    {
      titre: "Défenseur des droits",
      url: "https://www.defenseurdesdroits.fr",
      type: "officiel",
      luLe: "2026-10-26",
    },
  ],
};

export default article;
