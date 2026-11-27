import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 27/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « naturalisation par déclaration » (1 k à 10 k recherches
 * par mois ; Planificateur de mots clés, France, 17/11/2026) ; « nationalité
 * française par ascendant » (10 à 100, + 900 % sur un an). Famille guides
 * pratiques permanents (cadre légal) ; pont vers l'examen civique : les
 * déclarations n'y sont pas soumises (F39426), la naturalisation par décret si.
 * Sources lues le 27/11/2026 : service-public N111 (le sommaire), F2726
 * (mariage, vérifiée le 01/05/2026), F33430 (ascendant, 01/05/2026), F33800
 * (frère ou sœur, 01/05/2026), F295 (enfant né en France, 19/08/2025), F31919
 * (enfant recueilli, 11/12/2024), F3070 (adoption simple, 11/12/2024), F3071
 * (réintégration par déclaration, 28/05/2025), F39426 (examen civique,
 * 16/07/2026), F11926 (niveau de langue, 01/01/2026).
 * Non écrit faute de source lue : le coût des déclarations faites au tribunal
 * (les fiches n'en donnent aucun), un niveau de langue pour l'ascendant ou le
 * frère et la sœur, la possession d'état (art. 21-13, aucune fiche trouvée),
 * un nombre de déclarations par an.
 */
const article: Article = {
  slug: "nationalite-francaise-par-declaration",
  titre: "Nationalité française par déclaration : qui y a droit, combien ça coûte, et pourquoi l'examen civique ne vous concerne pas",
  titreSeo: "Naturalisation par déclaration : les cas, le prix",
  resume: "Mariage, parent de Français à 65 ans, frère ou sœur, enfant né en France : les cas de déclaration, leur prix, leurs délais, sans examen civique.",
  chapo: "La déclaration de nationalité est une autre voie que la naturalisation : si vous remplissez les conditions de la loi, l'État doit l'enregistrer. Elle existe pour quelques situations précises, comme un mariage avec une personne française ou un enfant né en France. Elle coûte ==255 €== dans les cas déposés à la préfecture, et elle ne demande ==pas d'examen civique==.",
  publieLe: "2026-11-27",
  modifieLe: "2026-11-27",
  minutes: 8,
  theme: "La nationalité française par déclaration : les cas prévus par le code civil, le prix, les délais et la différence avec la naturalisation par décret",
  motsCles: [
    "naturalisation par déclaration",
    "nationalité française par déclaration",
    "déclaration de nationalité française",
    "nationalité française par ascendant",
    "nationalité française frère ou soeur de français",
    "déclaration nationalité enfant né en france",
    "déclaration nationalité examen civique",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/nationalite-francaise-par-declaration.webp",
    alt: "Un buste de Marianne en bronze, de profil, devant des boiseries dans une salle de mairie",
    largeur: 1023,
    hauteur: 680,
    credit: "zigazou76, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/38712296@N07/8186809986",
  },
  blocs: [
    {
      type: "h2",
      texte: "Déclaration ou naturalisation : quelle différence ?",
    },
    {
      type: "p",
      texte: "Il existe deux grandes façons de devenir Français quand on ne l'est pas à la naissance. La première est la ==naturalisation par décret==. Vous la demandez, et l'État décide. Il peut refuser même si vous remplissez les conditions. La seconde est la ==déclaration de nationalité==. C'est un document que vous signez devant un agent de l'État. Si vous remplissez les conditions prévues par le code civil, la déclaration est enregistrée.",
    },
    {
      type: "p",
      texte: "Beaucoup de gens cherchent « naturalisation par déclaration ». Les deux mots désignent en réalité deux procédures différentes. Le [sommaire de service-public sur la nationalité](https://www.service-public.gouv.fr/particuliers/vosdroits/N111) les range bien à part.",
    },
    {
      type: "tableau",
      entetes: ["", "Déclaration", "Naturalisation par décret"],
      lignes: [
        ["Qui peut la demander", "Seulement certaines situations prévues par la loi", "Toute personne qui vit en France et remplit les conditions"],
        ["Qui décide", "L'État enregistre si les conditions sont remplies", "L'État décide, avec une large marge"],
        ["Examen civique", "Non", "Oui, depuis le 1er janvier 2026"],
        ["Date à laquelle vous devenez Français", "Le jour où vous signez la déclaration", "Le jour de la publication du décret"],
      ],
    },
    {
      type: "h2",
      texte: "Dans quels cas pouvez-vous faire une déclaration ?",
    },
    {
      type: "p",
      texte: "La loi prévoit une liste fermée. Voici les cas que présente service-public, avec la fiche à lire pour chacun :",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Les conditions principales", "Fiche"],
      lignes: [
        ["Mariage avec une personne française", "4 ans de mariage (parfois 5), une vie commune qui n'a jamais cessé, le niveau B2 de français", "F2726"],
        ["Parent ou grand-parent d'une personne française", "65 ans ou plus, et 25 ans ou plus de vie régulière en France", "F33430"],
        ["Frère ou sœur d'une personne française", "Être majeur, vivre en France depuis l'âge de 6 ans, y avoir fait sa scolarité obligatoire", "F33800"],
        ["Enfant né en France de parents étrangers", "Entre 13 et 17 ans, 5 ans de vie en France pendant une période fixée par la loi", "F295"],
        ["Enfant recueilli ou confié à l'aide sociale à l'enfance", "Mineur, élevé par une personne française ou confié à l'ASE depuis 3 ans au moins", "F31919"],
        ["Enfant adopté en adoption simple", "Mineur, adopté par une personne française", "F3070"],
        ["Ancien Français", "Certains cas de perte de la nationalité, par exemple par un mariage avec un étranger", "F3071"],
      ],
    },
    {
      type: "p",
      texte: "Il y a aussi des conditions communes. Pour les trois premiers cas, il ne faut pas avoir été condamné en France à 6 mois de prison ferme ou plus. Il ne faut pas non plus faire l'objet d'une mesure d'expulsion ou d'une interdiction du territoire encore en vigueur.",
    },
    {
      type: "h2",
      texte: "Le cas du mariage avec une personne française",
    },
    {
      type: "p",
      texte: "C'est la déclaration la plus fréquente. Selon [service-public (F2726)](https://www.service-public.gouv.fr/particuliers/vosdroits/F2726), il faut ==4 ans de mariage== à la date de la déclaration. Le délai passe à ==5 ans== si vous avez vécu moins de 3 ans en France depuis le mariage. Une exception : votre époux ou épouse était inscrit au registre des Français de l'étranger. L'époux ou l'épouse doit être français depuis le jour du mariage.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "une communauté de vie, c'est-à-dire vivre ensemble, matériellement et affectivement, depuis le mariage ;",
        "un mariage célébré à l'étranger transcrit à l'état civil français ;",
        "un titre de séjour (la carte qui permet de vivre en France) valide le jour du dépôt, sauf pour les Européens et les Suisses ;",
        "le niveau ==B2== de français à l'oral et à l'écrit, prouvé par un diplôme ou par un test TCF ou TEF de moins de 2 ans ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)).",
      ],
    },
    {
      type: "p",
      texte: "Le niveau B2 est le niveau d'une personne qui suit une discussion sur un sujet courant et donne son avis. Notre guide sur [la nationalité par mariage](/articles/nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier) détaille les pièces du dossier et l'entretien.",
    },
    {
      type: "h2",
      texte: "Le cas des parents et des frères et sœurs de Français",
    },
    {
      type: "p",
      texte: "Un parent ou un grand-parent d'une personne française peut faire une déclaration. Il doit avoir ==65 ans ou plus== et vivre en France de façon régulière depuis ==25 ans ou plus== ([F33430](https://www.service-public.gouv.fr/particuliers/vosdroits/F33430)). Selon service-public, l'entretien ne porte pas sur le niveau de français dans ce cas.",
    },
    {
      type: "p",
      texte: "Un frère ou une sœur d'une personne française peut aussi le faire ([F33800](https://www.service-public.gouv.fr/particuliers/vosdroits/F33800)). Mais la personne française doit être née en France de parents étrangers et être devenue française par le droit du sol. Vous devez être majeur, vivre en France depuis l'âge de 6 ans et y avoir suivi votre scolarité obligatoire.",
    },
    {
      type: "h2",
      texte: "Le cas des enfants",
    },
    {
      type: "p",
      texte: "Un enfant né en France de parents étrangers devient français ==automatiquement à 18 ans== ([F295](https://www.service-public.gouv.fr/particuliers/vosdroits/F295)). Il doit vivre en France et y avoir vécu au moins 5 ans depuis ses 11 ans. Il peut aussi le devenir plus tôt, par déclaration :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**de 13 à 15 ans**, par ses parents, avec son accord, s'il a vécu au moins 5 ans en France depuis ses 8 ans ;",
        "**à 16 ou 17 ans**, par lui-même, s'il a vécu au moins 5 ans en France depuis ses 11 ans.",
      ],
    },
    {
      type: "p",
      texte: "À Mayotte, des conditions en plus s'appliquent aux enfants nés sur l'île : lisez notre article sur [le droit du sol à Mayotte](/articles/droit-du-sol-mayotte). Notre guide sur [l'enfant né en France](/articles/avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations) explique le reste du parcours.",
    },
    {
      type: "h2",
      texte: "Où déposer la déclaration, et combien ça coûte ?",
    },
    {
      type: "p",
      texte: "Le lieu dépend du cas. Pour le mariage, l'ascendant, le frère ou la sœur, vous déposez le dossier à la ==plateforme d'accès à la nationalité française==. C'est le service de la préfecture qui traite la nationalité pour votre département. À l'étranger, vous passez par le consulat. Pour les enfants et la réintégration, le dossier va au ==tribunal judiciaire== (ou de proximité) de votre domicile. C'est son greffe, le service administratif du tribunal, qui reçoit la déclaration.",
    },
    {
      type: "tableau",
      entetes: ["Cas", "Où", "Prix selon service-public"],
      lignes: [
        ["Mariage, ascendant, frère ou sœur", "Plateforme de la préfecture (ou consulat)", "255 € en timbre fiscal (127,50 € en Guyane)"],
        ["Enfant né en France, enfant recueilli, adopté", "Tribunal judiciaire ou de proximité", "Aucun montant indiqué"],
        ["Réintégration par déclaration", "Tribunal ou consulat", "Aucun montant indiqué"],
      ],
    },
    {
      type: "p",
      texte: "Le timbre fiscal est une taxe payée en ligne ou dans un bureau de tabac équipé. Un amendement examiné au Sénat propose de porter le droit de timbre de la naturalisation à 1 000 €. ==Rien n'est voté== à ce jour : notre article sur [l'amendement du Sénat](/articles/timbre-naturalisation-1000-euros-senat) suit le texte.",
    },
    {
      type: "h2",
      texte: "Combien de temps faut-il attendre ?",
    },
    {
      type: "p",
      texte: "Pour le mariage, l'ascendant et la fratrie, vous passez un entretien. À la fin, on vous remet un récépissé, le papier qui prouve que la demande est déposée. Si toutes les conditions sont remplies, la déclaration est enregistrée. Sinon, le dossier part au ministère dans les ==6 mois==. Le ministère a alors ==1 an== pour refuser, ou ==2 ans== s'il engage une opposition, à compter du récépissé ([F2726](https://www.service-public.gouv.fr/particuliers/vosdroits/F2726)).",
    },
    {
      type: "p",
      texte: "L'opposition, c'est une décision du gouvernement, prise par décret en Conseil d'État, qui empêche l'acquisition. Pour le mariage, elle repose sur l'indignité ou sur un défaut d'assimilation autre que la langue. Pour les enfants, si le tribunal ne répond pas dans les 6 mois, la déclaration est enregistrée. Le ministère public, c'est-à-dire le procureur, peut la contester pendant 2 ans ([F295](https://www.service-public.gouv.fr/particuliers/vosdroits/F295)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Contre un refus d'enregistrement**, le recours se fait devant le tribunal judiciaire, dans les 6 mois, avec un avocat obligatoire.",
        "**Contre une opposition**, le recours va au Conseil d'État, dans les 2 mois, avec un avocat obligatoire.",
        "**Gardez la déclaration enregistrée** : elle prouve votre nationalité. Plus tard, le [certificat de nationalité française](/articles/certificat-nationalite-francaise) pourra vous être demandé.",
      ],
    },
    {
      type: "h2",
      texte: "Et l'examen civique ?",
    },
    {
      type: "p",
      texte: "L'examen civique est un test de 40 questions sur la France et ses valeurs. Selon [service-public (F39426)](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426), il concerne ==uniquement la naturalisation par décret==. Les déclarations n'y sont pas soumises. Pour le mariage, l'entretien vérifie quand même votre assimilation, c'est-à-dire votre accord avec les principes et les valeurs de la République.",
    },
    {
      type: "p",
      texte: "Si aucun cas de déclaration ne correspond à votre situation, c'est la naturalisation par décret qui reste possible. L'examen civique en fait alors partie. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) explique l'épreuve.",
    },
    {
      type: "cta",
      texte: "Vous visez la naturalisation par décret ? Testez-vous sur des examens blancs de 40 questions, avec la correction de chaque réponse. L'inscription sur Test Civique France est gratuite.",
    },
    {
      type: "encadre",
      titre: "Le bon réflexe",
      texte: "Avant de choisir une voie, lisez la fiche service-public de votre cas : les conditions changent d'un cas à l'autre. Votre situation est compliquée (une condamnation, une séparation, un séjour irrégulier) ? Demandez conseil à un avocat, à une association comme La Cimade ou à une permanence d'accès au droit. Vous ne savez pas si l'examen civique vous concerne ? Le [simulateur d'éligibilité](/eligibilite-examen-civique) répond en une minute.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre naturalisation et déclaration de nationalité ?",
      reponse: "La naturalisation est décidée par l'État, qui peut refuser même si vous remplissez les conditions, et elle demande l'examen civique. La déclaration est réservée à des cas prévus par la loi, comme le mariage avec une personne française : si les conditions sont remplies, elle est enregistrée. Vous êtes français dès la date de la déclaration.",
    },
    {
      question: "Qui peut demander la nationalité française par déclaration ?",
      reponse: "Selon service-public, la déclaration est ouverte à l'époux ou l'épouse d'une personne française après 4 ans de mariage. Elle l'est aussi au parent ou grand-parent d'une personne française, à 65 ans et avec 25 ans de vie en France. Puis au frère ou à la sœur d'une personne devenue française par le droit du sol, et à certains enfants.",
    },
    {
      question: "Combien coûte une déclaration de nationalité française ?",
      reponse: "Pour le mariage, l'ascendant ou le frère et la sœur, service-public indique 255 € en timbre fiscal, et 127,50 € en Guyane. À l'étranger, la somme se paie au consulat. Les fiches sur les déclarations des enfants, faites au tribunal, n'indiquent aucun montant. Un amendement au Sénat sur le timbre n'est pas voté.",
    },
    {
      question: "Faut-il passer l'examen civique pour la nationalité par mariage ?",
      reponse: "Non. Selon service-public, l'examen civique concerne uniquement la naturalisation par décret. La déclaration par mariage demande en revanche le niveau B2 de français, à l'oral et à l'écrit. Elle passe aussi par un entretien qui vérifie votre vie commune et votre assimilation.",
    },
  ],
  sources: [
    {
      titre: "Service-public : nationalité française, sommaire des démarches (N111)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/N111",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : nationalité française par mariage (F2726, vérifiée le 01/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2726",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : nationalité française d'un ascendant de Français (F33430, vérifiée le 01/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33430",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : nationalité française d'un frère ou d'une sœur de Français (F33800, vérifiée le 01/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33800",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : nationalité française d'un enfant né en France de parents étrangers (F295, vérifiée le 19/08/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F295",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : enfant recueilli ou confié à l'aide sociale à l'enfance (F31919) et enfant adopté (F3070), vérifiées le 11/12/2024",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31919",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : réintégration dans la nationalité française par déclaration (F3071, vérifiée le 28/05/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3071",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : examen civique (F39426, vérifiée le 16/07/2026), procédures concernées",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : niveau de langue française exigé pour la nationalité (F11926, vérifiée le 01/01/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-11-27",
    },
  ],
};

export default article;
