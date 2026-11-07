import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 07/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « dcem » (1 k à 10 k recherches par mois), avec « titre
 * d'identité républicain » (100 à 1 k, + 900 % sur trois mois) : Planificateur
 * de mots clés, France, toutes les langues, 07/11/2026. Famille guides
 * permanents. Aucune page dédiée sur le site.
 * Sources lues le 07/11/2026 : Légifrance, CESEDA L. 414-2 à L. 414-9,
 * D. 414-1 à D. 414-4, R. 431-5 et L. 436-3 (versions en vigueur au
 * 07/11/2026) ; service-public F2718 (vérifiée le 30/07/2024), F297
 * (vérifiée le 13/02/2026), R64360 et A18881 ; communiqué du ministère de
 * l'Intérieur du 03/05/2022 sur la demande en ligne.
 */
const article: Article = {
  slug: "dcem-document-circulation-mineur",
  titre: "DCEM : 50 €, 5 ans, et l'erreur qui bloque le retour de votre enfant en France",
  titreSeo: "DCEM : demande, prix et durée de validité",
  resume: "Le DCEM permet à un enfant étranger qui vit en France d'y revenir sans visa après un voyage : qui y a droit, la demande en ligne, 50 €, 5 ans.",
  chapo: "Le document de circulation pour étranger mineur (DCEM) permet à un enfant étranger qui vit en France ==d'y revenir sans visa== après un voyage, avec son passeport. Il se demande en ligne, coûte ==50 €== et vaut ==5 ans au plus==. Attention : la simple confirmation de la demande ne suffit pas pour rentrer.",
  publieLe: "2026-11-07",
  modifieLe: "2026-11-07",
  minutes: 7,
  theme: "document de circulation pour étranger mineur",
  motsCles: [
    "dcem",
    "document de circulation pour étranger mineur",
    "demande dcem en ligne",
    "dcem prix",
    "dcem délai",
    "dcem validité",
    "titre d'identité républicain",
    "tir enfant",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/document-circulation-etranger-mineur-dcem.webp",
    alt: "Un avion de ligne blanc stationné devant une passerelle d'embarquement à l'aéroport de Roissy, sous un ciel gris",
    largeur: 1024,
    hauteur: 685,
    credit: "KrzysztofTe Foto Blog, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20849923@N00/4050687363",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le DCEM ?",
    },
    {
      type: "p",
      texte: "Un enfant étranger qui vit en France n'a pas besoin de titre de séjour. Le titre de séjour, c'est la carte qui autorise un adulte étranger à vivre en France. Avant 18 ans, l'enfant n'est pas obligé d'en avoir une (ministère de l'Intérieur, communiqué du 03/05/2022).",
    },
    {
      type: "p",
      texte: "Le problème arrive au moment du voyage. Pour revenir en France, un étranger doit en général montrer un titre de séjour ou un visa. Un visa, c'est l'autorisation d'entrer dans un pays, collée dans le passeport. Le DCEM règle ce problème : avec lui et un passeport valable, l'enfant est ==réadmis en France sans visa== (article L. 414-5 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771504/)). Le CESEDA, c'est le code qui regroupe les règles de séjour des étrangers.",
    },
    {
      type: "p",
      texte: "Le DCEM permet aussi de passer les frontières extérieures de l'espace Schengen ([service-public, F2718](https://www.service-public.gouv.fr/particuliers/vosdroits/F2718)). L'espace Schengen, ce sont les pays européens qui ont supprimé les contrôles entre eux. Notre article sur [les voyages avec un titre de séjour français](/articles/voyager-titre-sejour-francais-2026-pays-sans-visa-schengen) détaille cet espace.",
    },
    {
      type: "encadre",
      titre: "Et le TIR ?",
      texte: "Le titre d'identité républicain (TIR) servait aux enfants nés en France de parents étrangers. Il n'est ==plus délivré depuis le 1er mars 2019== ([service-public, F297](https://www.service-public.gouv.fr/particuliers/vosdroits/F297)). Aujourd'hui, ces enfants demandent un DCEM, comme les autres.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quels enfants peuvent avoir un DCEM ?",
    },
    {
      type: "p",
      texte: "L'enfant doit être mineur et vivre en France. Il doit aussi être dans l'une de ces situations (article L. 414-4 du CESEDA) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Un de ses parents au moins a une carte de séjour** ou une carte de résident. C'est le cas le plus fréquent.",
        "**Un de ses parents a acquis la nationalité française**, ou l'enfant est l'enfant étranger d'un Français.",
        "**Un de ses parents est citoyen européen** (ou islandais, norvégien, suisse, du Liechtenstein) et vit en France.",
        "**L'enfant est réfugié** ou a reçu la protection subsidiaire, une protection accordée à une personne menacée dans son pays.",
        "**L'enfant est entré en France avec un visa de long séjour** comme enfant de Français ou comme enfant adopté.",
        "**L'enfant est entré en France avant 13 ans** avec un visa de long séjour « visiteur », et il vit en France depuis.",
        "**L'enfant a été confié à l'aide sociale à l'enfance avant 16 ans** (renvoi de L. 414-4 à l'article L. 423-22, et fiche F2718).",
      ],
    },
    {
      type: "p",
      texte: "La demande est faite par un parent qui a l'autorité parentale, c'est-à-dire le droit et le devoir de décider pour l'enfant. Ce parent doit avoir un titre de séjour valable. Le parent européen installé en France depuis plus de 3 mois n'en a pas besoin (F2718).",
    },
    {
      type: "h2",
      texte: "Comment demander le DCEM, étape par étape ?",
    },
    {
      type: "p",
      texte: "Depuis le 2 mai 2022, la demande se fait ==entièrement en ligne== sur l'ANEF, le site officiel des démarches des étrangers en France (communiqué du ministère de l'Intérieur du 03/05/2022). Vous allez en préfecture une seule fois, pour retirer le document. La préfecture, c'est le service de l'État qui délivre les titres dans votre département.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Préparez les pièces** (liste ci-dessous) et une e-photo de l'enfant. L'e-photo est une photo d'identité avec un code, faite chez un photographe ou dans une cabine agréée.",
        "**Déposez la demande en ligne** avec le service [« Demander ou renouveler un DCEM »](https://www.service-public.gouv.fr/particuliers/vosdroits/R64360). Il vous faut un compte ANEF : notre [guide pour créer un compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) l'explique pas à pas.",
        "**Attendez l'instruction.** La préfecture de votre domicile étudie le dossier. Les délais sont ==variables== selon les préfectures (F2718). Vous suivez l'avancement dans votre compte.",
        "**Achetez le timbre fiscal de 50 €.** Le timbre fiscal, c'est la taxe payée à l'État, achetée en ligne ou dans un bureau de tabac.",
        "**Retirez le DCEM en préfecture**, sur rendez-vous ou sur convocation, ==avec l'enfant==. Donnez le timbre à ce moment-là.",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le passeport du parent et celui de l'enfant (ou, à défaut, une carte d'identité ou une carte consulaire).",
        "La carte de séjour du parent, s'il n'est pas européen.",
        "Le livret de famille ou l'acte de naissance de l'enfant, qui montre qui sont ses parents.",
        "La preuve de l'autorité parentale : acte de mariage, jugement de divorce, ou acte de naissance avec la reconnaissance de l'enfant.",
        "Un certificat de scolarité ou de crèche, qui prouve que l'enfant vit en France.",
        "La traduction en français, par un traducteur agréé, de chaque acte écrit dans une autre langue.",
      ],
    },
    {
      type: "p",
      texte: "Cette liste vient de la fiche F2718 de service-public. Selon la situation de l'enfant (réfugié, entré avec un visa, confié à l'aide sociale à l'enfance, Mayotte), d'autres pièces s'ajoutent : la fiche les donne cas par cas.",
    },
    {
      type: "h2",
      texte: "Combien coûte le DCEM ?",
    },
    {
      type: "p",
      texte: "Le DCEM coûte ==50 €==. Ce montant vaut pour une première demande, un renouvellement ou un duplicata, c'est-à-dire un document refait après une perte (article L. 436-3 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772036/), version en vigueur lue le 07/11/2026).",
    },
    {
      type: "p",
      texte: "Il est ==gratuit== pour l'enfant d'un parent européen, et pour l'enfant d'un bénéficiaire de l'accord sur la sortie du Royaume-Uni de l'Union européenne (F2718). La hausse des taxes du 1er mai 2026 porte sur les cartes de séjour, pas sur le DCEM ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)).",
    },
    {
      type: "h2",
      texte: "Combien de temps le DCEM est-il valable ?",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Durée du DCEM"],
      lignes: [
        ["Enfant de Français, d'Européen, réfugié, entré avec un visa (cas 2° à 8° de L. 414-4)", "5 ans, renouvelable"],
        ["Parent avec une carte de résident ou une carte pluriannuelle « salarié », « talent »…", "5 ans"],
        ["Parent avec une carte de la liste de L. 414-8 (étudiant, visiteur, travailleur temporaire, stagiaire…)", "Jusqu'à la fin de la carte du parent, et au moins 1 an"],
        ["Les deux parents ont une carte de cette liste", "Jusqu'à la fin de la carte qui finit le plus tard"],
      ],
      legende: "Source : CESEDA, articles L. 414-6 à L. 414-8, lus sur Légifrance le 07/11/2026.",
    },
    {
      type: "p",
      texte: "À partir de 13 ans, le DCEM vaut ==jusqu'aux 18 ans== de l'enfant, ou jusqu'à la fin du titre du parent si elle arrive avant (F2718). Il peut être retiré si l'enfant ne remplit plus les conditions, après que le parent a pu donner ses observations (article L. 414-9).",
    },
    {
      type: "image",
      src: "/images/articles/document-circulation-etranger-mineur-dcem.webp",
      alt: "Un avion de ligne garé à une passerelle de l'aéroport Paris-Charles-de-Gaulle, avec des véhicules de piste au premier plan",
      legende: "Au retour, l'enfant présente son passeport et son DCEM valable. Vérifiez les deux dates avant de réserver.",
      credit: "KrzysztofTe Foto Blog, via Flickr",
      licence: "CC BY 2.0",
      source: "https://www.flickr.com/photos/20849923@N00/4050687363",
      largeur: 1024,
      hauteur: 685,
    },
    {
      type: "h2",
      texte: "Quelles erreurs bloquent le retour de l'enfant ?",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Partir avec la seule confirmation de dépôt.** Après la demande en ligne, vous recevez une confirmation. Elle ==ne permet pas== à l'enfant de rentrer en France : sans DCEM, un visa est nécessaire (F2718).",
        "**Oublier le passeport.** Le DCEM se présente ==avec== un document de voyage valable, jamais seul (article L. 414-5).",
        "**Laisser le DCEM expirer pendant le voyage.** Regardez la date de fin du DCEM et celle du passeport avant d'acheter les billets.",
        "**Utiliser un DCEM de Mayotte pour rentrer dans l'Hexagone.** Le DCEM délivré à Mayotte ==ne permet que le retour à Mayotte== (F2718). Notre article sur [le droit du sol à Mayotte](/articles/droit-du-sol-mayotte) explique les autres règles propres à ce département.",
      ],
    },
    {
      type: "p",
      texte: "Votre enfant est déjà à l'étranger avec un document expiré ? Contactez sans attendre le consulat de France du pays où il se trouve. Notre article sur [le titre de séjour expiré pendant les vacances](/articles/titre-sejour-expire-vacances-etranger-france-que-faire-visa-retour) décrit les démarches de retour.",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il à 18 ans ?",
    },
    {
      type: "p",
      texte: "Le DCEM ne sert plus quand l'enfant obtient un titre de séjour ou devient français. Il doit alors être rendu à la préfecture (article D. 414-4 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042800892/)).",
    },
    {
      type: "p",
      texte: "Le jeune majeur qui veut rester en France demande un titre de séjour. Pour plusieurs titres prévus pour les jeunes, la demande se fait ==au plus tard la veille de ses 19 ans==. Dans les autres cas, elle se fait ==au plus tard 2 mois après ses 18 ans== (article R. 431-5 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042801298/)). La préfecture, un avocat ou une association comme La Cimade peut dire quel délai s'applique à votre enfant.",
    },
    {
      type: "p",
      texte: "Un enfant né en France de parents étrangers peut aussi devenir français, à 13, 16 ou 18 ans selon les cas. Notre article sur [le certificat de nationalité française](/articles/certificat-nationalite-francaise) explique comment le prouver ensuite.",
    },
    {
      type: "encadre",
      titre: "Le geste à faire avant les 18 ans",
      texte: "Notez dans un agenda les 18 ans de votre enfant, et la date de fin de son DCEM. Rassemblez ses certificats de scolarité année par année : ils prouvent qu'il vit en France. Si le titre demandé est une première carte pluriannuelle ou une carte de résident, l'examen civique peut être exigé : vous pouvez [vérifier en une minute si l'examen le concerne](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Comment faire une demande de DCEM ?",
      reponse: "Le parent qui a l'autorité parentale et un titre de séjour valable dépose la demande en ligne, sur le site de l'ANEF, avec le service « Demander ou renouveler un DCEM ». Il joint les passeports, l'acte de naissance, la preuve de l'autorité parentale, un certificat de scolarité et une e-photo. Il retire ensuite le DCEM en préfecture, avec l'enfant.",
    },
    {
      question: "Quel est le délai pour obtenir un DCEM ?",
      reponse: "Aucun délai fixe n'est publié. Service-public indique que les délais de traitement sont variables selon les préfectures. Vous suivez l'avancement de la demande dans votre compte ANEF. Déposez la demande bien avant un voyage : la confirmation de dépôt ne permet pas à l'enfant de rentrer en France sans visa.",
    },
    {
      question: "Combien coûte un DCEM ?",
      reponse: "Le DCEM coûte 50 €, payés en timbre fiscal au moment du retrait en préfecture. Ce montant vaut aussi pour le renouvellement et le duplicata (article L. 436-3 du CESEDA). Le DCEM est gratuit pour l'enfant d'un parent européen et pour l'enfant d'un bénéficiaire de l'accord sur la sortie du Royaume-Uni.",
    },
    {
      question: "Un enfant étranger peut-il voyager sans DCEM ?",
      reponse: "Il peut quitter la France, mais le retour pose problème. Sans DCEM ni titre de séjour, un enfant étranger a en général besoin d'un visa pour revenir en France. Avec un DCEM valable et son passeport, il est réadmis sans visa. Le DCEM délivré à Mayotte ne permet que le retour à Mayotte.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : CESEDA, articles L. 414-2 à L. 414-9 (circulation, document de circulation pour étranger mineur), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771504/",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Légifrance : CESEDA, articles D. 414-1 à D. 414-4 (délivrance, pièces, caducité du DCEM)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042800892/",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 436-1 à L. 436-13 (dispositions fiscales, dont L. 436-3 : taxe de 50 € sur le DCEM)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772036/",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Légifrance : CESEDA, articles R. 431-1 à R. 431-24 (demandes de titres de séjour, dont R. 431-5 : délais à 18 et 19 ans)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042801298/",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Service-public : document de circulation pour étranger mineur (DCEM), fiche F2718, vérifiée le 30/07/2024",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2718",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Service-public : le titre d'identité républicain (TIR) existe-t-il toujours ?, fiche F297, vérifiée le 13/02/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F297",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Service-public : demander ou renouveler un DCEM (service en ligne), R64360",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R64360",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Ministère de l'Intérieur, portail des étrangers en France : dématérialisation des demandes de DCEM, communiqué du 03/05/2022",
      url: "https://etrangers-en-france.interieur.gouv.fr/actualites/dematerialisation-demande-de-circulation-pour-etranger-mineur",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Service-public : titres de séjour, augmentation des taxes à compter du 1er mai 2026, actualité A18881 (mise à jour le 12/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-11-07",
    },
  ],
};

export default article;
