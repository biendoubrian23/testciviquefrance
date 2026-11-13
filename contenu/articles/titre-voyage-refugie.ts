import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 13/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « titre de voyage réfugié » et « titre de voyage pour
 * réfugié » (1 k à 10 k recherches par mois), avec « renouvellement titre de
 * voyage pour réfugié », « titre de voyage pour réfugié délai », « titre de
 * voyage pour réfugié pays sans visa », « passeport réfugié » (100 à 1 k
 * chacune) : Planificateur de mots clés, France, French, 11/11/2026. Famille
 * guides permanents. Aucune page dédiée sur le site.
 * Sources lues le 13/11/2026 : service-public F35534 (vérifiée le
 * 01/07/2026), F1765, R36942, F39426 ; Légifrance, CESEDA L. 424-1, L. 424-9,
 * L. 511-8, L. 561-9 à L. 561-13, R. 561-5 à R. 561-11, code général des
 * impôts art. 953 (IV) ; convention de Genève du 28/07/1951, art. 1er C
 * (OHCHR).
 */
const article: Article = {
  slug: "titre-voyage-refugie",
  titre: "Titre de voyage pour réfugié : 45 €, 5 ans, et le voyage qui peut mettre fin à votre protection",
  titreSeo: "Titre de voyage réfugié : demande, prix, durée",
  resume: "Titre de voyage pour réfugié : à quoi il sert, la demande sur l'ANEF, les pièces, 45 € et 5 ans, et le pays où il ne faut pas aller.",
  chapo: "Le titre de voyage pour réfugié (TVR) remplace le passeport : il permet ==de sortir de France et d'y revenir==. Il se demande en ligne sur l'ANEF, coûte ==45 €== et vaut ==5 ans==. Il ne permet pas d'aller dans le pays que vous avez fui : ce voyage peut mettre fin à votre statut.",
  publieLe: "2026-11-13",
  modifieLe: "2026-11-13",
  minutes: 8,
  theme: "titre de voyage pour réfugié",
  motsCles: [
    "titre de voyage réfugié",
    "titre de voyage pour réfugié",
    "renouvellement titre de voyage pour réfugié",
    "titre de voyage pour réfugié délai",
    "titre de voyage pour réfugié pays sans visa",
    "passeport réfugié",
    "titre d'identité et de voyage protection subsidiaire",
    "passeport apatride",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/titre-voyage-refugie.webp",
    alt: "Un tableau des départs d'aéroport, avec des destinations et des horaires en lettres jaunes sur fond noir",
    largeur: 1200,
    hauteur: 800,
    credit: "Marek Ślusarczyk (Tupungato) Photo portfolio, via Wikimedia Commons",
    licence: "CC BY 3.0",
    source: "https://commons.wikimedia.org/wiki/File:48_Aviation_industry_in_Australia_-_Melbourne_Airport_departures_board.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "À quoi sert le titre de voyage pour réfugié ?",
    },
    {
      type: "p",
      texte: "Un réfugié, c'est une personne que la France protège parce qu'elle craint d'être persécutée dans son pays. Cette protection est accordée par l'Ofpra, l'Office français de protection des réfugiés et apatrides. Un réfugié ne peut pas demander un passeport à son pays : il lui faut donc un autre document pour voyager.",
    },
    {
      type: "p",
      texte: "Ce document, c'est le titre de voyage pour réfugié, souvent appelé TVR. Il ==vous permet de sortir de France, puis d'y revenir== ([service-public, F35534](https://www.service-public.gouv.fr/particuliers/vosdroits/F35534)). Au retour, vous êtes réadmis en France sur simple présentation du titre en cours de validité (article R. 561-11 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042802200/)). Le CESEDA, c'est le code qui regroupe les règles de séjour des étrangers.",
    },
    {
      type: "p",
      texte: "Le TVR ne remplace pas votre titre de séjour. Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Un réfugié reçoit une carte de résident de 10 ans (article L. 424-1 du CESEDA). Vous voyagez donc avec ==les deux documents== : le TVR et la carte de résident.",
    },
    {
      type: "h2",
      texte: "Protection subsidiaire, apatride : quel document pour vous ?",
    },
    {
      type: "p",
      texte: "Le nom du document change selon votre protection (articles L. 561-9 à L. 561-11 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772564/)). La protection subsidiaire, c'est une protection accordée à une personne menacée de graves dangers dans son pays, sans avoir le statut de réfugié. Un apatride, c'est une personne qu'aucun pays ne reconnaît comme son citoyen.",
    },
    {
      type: "tableau",
      entetes: ["Votre protection", "Le document de voyage", "Durée", "Taxe"],
      lignes: [
        ["Réfugié (avec carte de résident)", "Titre de voyage pour réfugié", "5 ans", "45 €"],
        ["Apatride ou protection subsidiaire, avec carte de résident", "Titre de voyage pour apatride, ou titre d'identité et de voyage (TIV)", "5 ans", "45 €"],
        ["Apatride ou protection subsidiaire, avec carte pluriannuelle de 4 ans", "Titre de voyage pour apatride, ou titre d'identité et de voyage (TIV)", "4 ans", "40 €"],
      ],
      legende: "Source : code général des impôts, article 953 (IV), et CESEDA, articles L. 561-9 à L. 561-12, lus sur Légifrance le 13/11/2026.",
    },
    {
      type: "p",
      texte: "La carte pluriannuelle, c'est une carte de séjour valable plusieurs années. La personne sous protection subsidiaire en reçoit une de 4 ans au plus, dès sa première admission au séjour (article L. 424-9 du CESEDA).",
    },
    {
      type: "h2",
      texte: "Comment demander le titre de voyage, étape par étape ?",
    },
    {
      type: "p",
      texte: "La demande se fait ==en ligne sur l'ANEF== (F35534). L'ANEF, c'est le site officiel des démarches des étrangers en France. Le titre est ensuite délivré par la préfecture de votre domicile, ou par la préfecture de police à Paris (article R. 561-6 du CESEDA). La préfecture, c'est le service de l'État qui délivre les titres dans votre département.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Créez votre compte ANEF**, si vous n'en avez pas. Notre [guide pour créer un compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) l'explique pas à pas.",
        "**Faites une e-photo.** C'est une photo d'identité avec un code, faite chez un photographe ou dans une cabine agréée. Vous indiquez ce code dans la demande.",
        "**Déposez la demande** avec les pièces de la liste ci-dessous.",
        "**Achetez le timbre fiscal** de 45 € ou de 40 €. Le timbre fiscal, c'est la taxe payée à l'État, achetée en ligne ou dans un bureau de tabac.",
        "**Retirez le titre en préfecture.** Si vous renouvelez, vous rendez l'ancien titre : un nouveau titre suppose la restitution du précédent (article R. 561-7 du CESEDA).",
      ],
    },
    {
      type: "p",
      texte: "Pour un adulte, service-public demande notamment (F35534) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Votre carte de résident en cours de validité.",
        "Un justificatif de domicile à votre nom (facture d'eau ou d'électricité, quittance de loyer). Si quelqu'un vous héberge : son attestation d'hébergement et sa pièce d'identité.",
        "La preuve de votre protection par l'Ofpra, par exemple la décision qui vous reconnaît réfugié.",
        "Pour un renouvellement, l'ancien titre de voyage.",
        "Deux photos d'identité, et le code de votre e-photo.",
      ],
    },
    {
      type: "p",
      texte: "Pour un enfant, la demande est faite par son représentant légal, c'est-à-dire le parent ou la personne qui décide pour lui. Il fournit l'acte de naissance ou le livret de famille établi par l'Ofpra, la preuve de l'autorité parentale et un justificatif de domicile (F35534 ; article R. 561-9 du CESEDA). L'autorité parentale, c'est le droit et le devoir de décider pour l'enfant.",
    },
    {
      type: "encadre",
      titre: "Combien de temps faut-il attendre ?",
      texte: "Aucun délai officiel n'est publié pour la délivrance du titre de voyage. Déposez votre demande ==bien avant== d'acheter vos billets, et suivez l'avancement dans votre compte ANEF. Si votre dossier n'avance pas, notre article sur [les dossiers ANEF bloqués](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer) donne les recours possibles.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Dans quels pays pouvez-vous aller ?",
    },
    {
      type: "p",
      texte: "Le titre vous permet de ==demander à vous rendre dans tous les pays==, sauf celui ou ceux où vos craintes de persécution ont été reconnues (article L. 561-9 du CESEDA). Ces pays interdits sont écrits sur le document. En général, c'est seulement votre pays d'origine (F35534).",
    },
    {
      type: "p",
      texte: "« Demander à vous rendre » ne veut pas dire « entrer sans visa ». Le visa, c'est l'autorisation d'entrer dans un pays. Hors d'Europe, chaque pays fixe ses propres règles pour les titulaires d'un titre de voyage : vérifiez auprès de son ambassade ou de son consulat avant de réserver.",
    },
    {
      type: "p",
      texte: "Dans l'espace Schengen, la règle est plus simple. L'espace Schengen, ce sont les pays européens qui ont supprimé les contrôles entre eux. Avec un titre de séjour délivré par un pays Schengen et un document de voyage valable, vous pouvez y entrer et y circuler ([service-public, F1765](https://www.service-public.gouv.fr/particuliers/vosdroits/F1765)). Vos courts séjours ne doivent pas dépasser ==90 jours sur toute période de 180 jours== ([simulateur service-public, R36942](https://www.service-public.gouv.fr/particuliers/vosdroits/R36942)). Notre article sur [les voyages avec un titre de séjour français](/articles/voyager-titre-sejour-francais-2026-pays-sans-visa-schengen) détaille ces règles.",
    },
    {
      type: "image",
      src: "/images/articles/titre-voyage-refugie.webp",
      alt: "Le tableau des départs d'un aéroport, avec une liste de destinations, d'heures de départ et de comptoirs",
      legende: "Avant de réserver, vérifiez trois choses : la date de fin du titre de voyage, celle de votre carte de résident, et les règles de visa du pays choisi.",
      credit: "Marek Ślusarczyk (Tupungato) Photo portfolio, via Wikimedia Commons",
      licence: "CC BY 3.0",
      source: "https://commons.wikimedia.org/wiki/File:48_Aviation_industry_in_Australia_-_Melbourne_Airport_departures_board.jpg",
      largeur: 1200,
      hauteur: 800,
    },
    {
      type: "h2",
      texte: "Quel voyage peut mettre fin à votre statut de réfugié ?",
    },
    {
      type: "p",
      texte: "La convention de Genève de 1951 est le texte international qui définit le réfugié. Son article 1er (section C) prévoit plusieurs cas où la protection cesse ([texte publié par l'ONU](https://www.ohchr.org/fr/instruments-mechanisms/instruments/convention-relating-status-refugees)). Deux concernent le voyage. La personne ==s'est volontairement réclamée à nouveau de la protection== du pays dont elle a la nationalité. Ou elle est ==retournée volontairement s'établir== dans le pays qu'elle a fui.",
    },
    {
      type: "p",
      texte: "En France, l'Ofpra ==met fin au statut de réfugié== quand l'une de ces situations est établie (article L. 511-8 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776175)). Il peut le faire de lui-même ou à la demande de la préfecture.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Aller dans le pays interdit sur votre titre.** Le titre ne le permet pas (article L. 561-9 du CESEDA), et un retour volontaire peut être retenu contre votre protection.",
        "**Demander un passeport au consulat de votre pays.** Demander la protection de ce pays fait partie des cas prévus par la convention de Genève.",
        "**Voyager avec un titre expiré.** Le retour en France se fait sur présentation d'un titre ==en cours de validité== (article R. 561-11 du CESEDA). Regardez aussi la date de fin de votre carte de résident.",
        "**Rester trop longtemps à l'étranger.** Une longue absence pose d'autres questions pour votre titre de séjour : notre article sur [l'absence de France et le titre de séjour](/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026) les explique.",
      ],
    },
    {
      type: "p",
      texte: "Chaque situation est différente. Avant un voyage qui vous inquiète, par exemple pour voir un proche malade, demandez conseil à un avocat ou à une association comme La Cimade. Ne partez pas sur la foi d'un forum.",
    },
    {
      type: "h2",
      texte: "Quand faut-il rendre le titre de voyage ?",
    },
    {
      type: "p",
      texte: "Le titre de voyage peut être retiré, et doit être rendu, si vous n'en remplissez plus les conditions, ou si vous devenez français (article R. 561-10 du CESEDA). Il peut aussi être retiré, ou son renouvellement refusé, pour des raisons graves de sécurité nationale ou d'ordre public (article L. 561-13).",
    },
    {
      type: "p",
      texte: "Devenir français, c'est la suite que beaucoup de réfugiés envisagent. Vous voyagez alors avec un passeport français. Pour la naturalisation, la connaissance de l'histoire, de la culture et de la société françaises est évaluée par un examen civique ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) explique quand le passer.",
    },
    {
      type: "encadre",
      titre: "Le geste à faire avant votre prochain voyage",
      texte: "Notez dans un agenda trois dates : la fin de votre titre de voyage, la fin de votre carte de résident, et votre date de retour. Déposez le renouvellement sur l'ANEF plusieurs mois avant la première échéance. Et si vous pensez à la naturalisation, [vérifiez en une minute ce que l'examen civique vous demande](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Combien coûte un titre de voyage pour réfugié ?",
      reponse: "Le titre de voyage pour réfugié coûte 45 €, payés en timbre fiscal, et il vaut 5 ans. Pour un apatride ou une personne sous protection subsidiaire, c'est 45 € pour 5 ans avec une carte de résident. Avec une carte pluriannuelle de 4 ans, c'est 40 € pour 4 ans (code général des impôts, article 953).",
    },
    {
      question: "Comment renouveler un titre de voyage pour réfugié ?",
      reponse: "Le renouvellement se demande en ligne sur l'ANEF, comme une première demande. Vous joignez votre carte de résident, un justificatif de domicile, la preuve de votre protection par l'Ofpra, une e-photo et l'ancien titre de voyage. Au retrait en préfecture, vous rendez l'ancien titre et vous payez le timbre fiscal.",
    },
    {
      question: "Quels pays peut-on visiter avec un titre de voyage pour réfugié ?",
      reponse: "Le titre permet de demander à se rendre dans tous les pays, sauf celui ou ceux où vos craintes de persécution ont été reconnues, écrits sur le document. Dans l'espace Schengen, vous circulez avec ce titre et votre carte de résident. Ailleurs, chaque pays fixe ses règles de visa : vérifiez auprès de son ambassade.",
    },
    {
      question: "Un réfugié peut-il retourner dans son pays d'origine ?",
      reponse: "Le titre de voyage ne le permet pas : ce pays y est écrit comme interdit. Un retour volontaire, ou une demande de passeport au consulat de ce pays, peut conduire l'Ofpra à mettre fin au statut de réfugié (article L. 511-8 du CESEDA). Avant tout projet de ce type, demandez conseil à un avocat ou à une association.",
    },
  ],
  sources: [
    {
      titre: "Service-public : réfugié, titre de séjour, document de voyage et accompagnement, fiche F35534 (vérifiée le 01/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35534",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 561-9 à L. 561-13 (documents de voyage des bénéficiaires d'une protection), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772564/",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : CESEDA, articles R. 561-5 à R. 561-11 (délivrance, pièces, retrait et réadmission)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042802200/",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 424-1 à L. 424-21 (titres de séjour des bénéficiaires d'une protection internationale)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771756/",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : CESEDA, article L. 511-8 (fin du statut de réfugié)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776175",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : code général des impôts, article 953 (IV : durée et taxe des titres de voyage), en vigueur depuis le 01/03/2020",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041466881",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Haut-Commissariat des Nations unies aux droits de l'homme : convention relative au statut des réfugiés du 28 juillet 1951, article 1er, section C",
      url: "https://www.ohchr.org/fr/instruments-mechanisms/instruments/convention-relating-status-refugees",
      type: "juridique",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : espace Schengen, quelles sont les conditions d'entrée et de circulation ?, fiche F1765",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1765",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : calculer la durée maximale autorisée de courts séjours dans les pays Schengen, R36942 (vérifié le 12/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R36942",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ?, fiche F39426 (vérifiée le 16/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-11-13",
    },
  ],
};

export default article;
