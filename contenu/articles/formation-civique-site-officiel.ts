import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 01/11/2026 (`docs/seo/ROBOT.md`). Pas de
 * règle des 24 heures ce jour (JORF n° 0255 et n° 0256 des 31/10 et 01/11 :
 * rien sur nos sujets). Requêtes visées : « formation civique gouv » et
 * « liste questions examen civique » (100 à 1 k recherches par mois chacune,
 * Planificateur de mots clés, France, French, 31/10/2026), avec « fiches
 * examen civique » et « cours examen civique » (10 à 100). Sujet reporté le
 * 31/10 : le site officiel répondait 503. Sources lues le 01/11/2026 sur
 * formation-civique.interieur.gouv.fr : accueil et questions fréquentes,
 * « Qu'est-ce que la formation civique ? », « Informations générales sur
 * l'examen civique », listes officielles CSP (191 questions comptées) et CR
 * (209 questions comptées, le même nombre que le jeu de données publié sur
 * data.gouv.fr), fiches par thématique, fiches par journée, plan du site.
 * Familles examen civique et Test Civique pratique.
 */
const article: Article = {
  slug: "formation-civique-site-officiel",
  titre: "Examen civique : la liste officielle de 191 ou 209 questions, et comment réviser avec le site du ministère",
  titreSeo: "Formation civique gouv : mode d'emploi du site",
  resume: "Le site formation-civique.interieur.gouv.fr publie gratuitement les fiches et les questions de l'examen civique. Ce qu'il contient, et comment l'utiliser.",
  chapo: "Le ministère de l'Intérieur a un site officiel et gratuit pour préparer l'examen civique : ==formation-civique.interieur.gouv.fr==. Il publie la liste des questions de connaissance, ==191 pour la carte de séjour pluriannuelle et 209 pour la carte de résident==, et des fiches de cours par thématique. Voici ce que vous y trouvez, ce qui n'y est pas, et une méthode simple pour réviser avec.",
  publieLe: "2026-11-01",
  modifieLe: "2026-11-01",
  minutes: 7,
  theme: "le site officiel de la formation civique",
  motsCles: [
    "formation civique gouv",
    "formation-civique.interieur.gouv.fr",
    "liste questions examen civique",
    "liste officielle questions examen civique",
    "fiches examen civique",
    "cours examen civique",
    "examen civique questions officielles",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/formation-civique-site-officiel.webp",
    alt: "La façade de l'hôtel de Beauvau, siège du ministère de l'Intérieur à Paris, vue depuis son jardin ensoleillé",
    largeur: 1200,
    hauteur: 799,
    credit: "Croquant, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_Beauvau_JP2010_2.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le site formation-civique.interieur.gouv.fr ?",
    },
    {
      type: "p",
      texte: "C'est le site officiel de la formation civique, publié par le ministère de l'Intérieur ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/)). La formation civique, ce sont 4 journées de cours obligatoires et gratuites. L'OFII vous y convoque quand vous signez votre contrat d'intégration républicaine. L'OFII est l'Office français de l'immigration et de l'intégration. Le contrat d'intégration républicaine (CIR) est l'engagement que vous signez avec l'État à votre arrivée.",
    },
    {
      type: "p",
      texte: "Le site sert à deux choses. D'abord, revoir à votre rythme ce que vous avez appris pendant la formation. Ensuite, préparer l'examen civique. Cet examen est obligatoire depuis le 1er janvier 2026 pour obtenir une ==première== carte de séjour pluriannuelle (CSP) ou une première carte de résident (CR) ([page officielle de l'examen](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Un doute sur votre situation ? Le [simulateur d'éligibilité](/eligibilite-examen-civique) répond en une minute.",
    },
    {
      type: "encadre",
      titre: "Ce que dit le ministère sur la préparation",
      texte: "Sur sa page de l'examen, le ministère écrit que la préparation « peut se faire de manière totalement gratuite ». Selon lui, il n'est pas nécessaire de payer pour accéder à des questions ou à des tests. Il ajoute que les sites payants ne sont pas gérés par lui. Test Civique France est l'un de ces sites privés : il n'est pas lié au ministère.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Que trouvez-vous sur le site officiel ?",
    },
    {
      type: "p",
      texte: "Le menu tient en trois parties. Elles sont toutes en accès libre, sans compte à créer.",
    },
    {
      type: "tableau",
      entetes: ["Rubrique", "Ce qu'elle contient", "À quoi elle vous sert"],
      lignes: [
        ["Fiches par thématique", "Des fiches courtes sur les 5 thématiques de l'examen, découpées en sous-thèmes (laïcité, droit de vote, histoire, santé, emploi…)", "Apprendre une notion de A à Z"],
        ["Fiches par journée", "Les mêmes fiches, rangées dans l'ordre des 4 journées de formation", "Revoir ce que vous avez vu en formation"],
        ["Examen civique", "Le format de l'examen, les deux organismes agréés, et les deux listes officielles de questions (CSP et CR)", "Savoir sur quoi vous serez interrogé"],
      ],
      legende: "Source : formation-civique.interieur.gouv.fr, menu et plan du site, lus le 01/11/2026.",
    },
    {
      type: "p",
      texte: "Le plan du site montre l'étendue du contenu. La partie histoire va des Mérovingiens à la Ve République. La partie culture a une fiche par région, y compris la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte. La partie « vivre dans la société française » couvre les démarches, la santé, l'emploi et la parentalité ([plan du site](https://formation-civique.interieur.gouv.fr/plan-du-site/)).",
    },
    {
      type: "h2",
      texte: "Que contient la liste officielle des questions ?",
    },
    {
      type: "p",
      texte: "Le ministère publie les questions de connaissance qui peuvent tomber à l'examen. Il y a une liste par niveau, car l'examen n'a pas la même difficulté pour les deux titres. Nous avons compté les questions le 1er novembre 2026 :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Liste CSP** (carte de séjour pluriannuelle) : ==191 questions== ([voir la liste CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)).",
        "**Liste CR** (carte de résident) : ==209 questions== ([voir la liste CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)). Le même nombre figure dans le jeu de données « Examen civique - CR » publié sur [data.gouv.fr](https://www.data.gouv.fr/datasets/examen-civique-cr/).",
        "**Mention naturalisation** : la liste n'est pas sur ce site. La page de l'examen renvoie vers le site du ministère consacré à la nationalité. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) donne le lien.",
      ],
    },
    {
      type: "p",
      texte: "Chaque liste est rangée par thématique. Vous y lisez des questions comme « Qui nomme le Premier ministre ? » ou « Jusqu'à quel âge l'école est-elle obligatoire ? ». Attention : la liste donne ++les questions, pas les réponses++. Et le jour de l'examen, chaque question arrive avec 4 réponses possibles, dont une seule est juste.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Les mises en situation ne sont pas publiées.** Le ministère le dit en tête de chaque liste. Ce sont des cas de la vie courante où l'on vous demande la bonne réaction. Elles comptent ==12 questions sur 40== ([page officielle de l'examen](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)).",
        "**Apprendre la liste par cœur ne suffit pas.** Il faut 32 bonnes réponses sur 40 pour réussir. Si vous ratez une bonne partie des mises en situation, les 28 questions de connaissance ne laissent presque plus de marge.",
      ],
    },
    {
      type: "h2",
      texte: "Comment réviser avec le site officiel ?",
    },
    {
      type: "p",
      texte: "Voici une méthode simple, en cinq étapes. Elle part de ce que l'examen compte vraiment. Deux thématiques pèsent le plus : les principes et valeurs de la République, et les droits et devoirs. Elles font ==22 questions sur 40==, mises en situation comprises ([arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Choisissez la bonne liste.** CSP si vous demandez une carte de séjour pluriannuelle, CR pour une carte de résident. Une attestation de réussite CR vaut aussi pour une CSP, pas l'inverse. Notre article sur [l'examen pour la carte de résident](/articles/examen-civique-carte-de-resident) compare les deux.",
        "**Lisez les questions d'une thématique, sans chercher les réponses.** Cochez celles que vous ne savez pas.",
        "**Ouvrez la fiche de la même thématique.** Cherchez-y les réponses aux questions cochées. Commencez par les principes et valeurs, puis les droits et devoirs.",
        "**Refaites la liste le lendemain.** Ce que vous retrouvez sans aide est acquis. Le reste repart sur la liste du jour suivant.",
        "**Entraînez-vous en conditions réelles.** 40 questions, 4 réponses chacune, 45 minutes au plus. C'est la seule façon de rencontrer des mises en situation avant le jour J. Le ministère cite un quiz gratuit de 50 questions de l'association France Fraternité, en prévenant que son format peut différer de l'examen.",
      ],
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Qui nomme le Premier ministre ?",
      choix: [
        "Les députés",
        "Le président de la République",
        "Le président du Sénat",
        "Les citoyens, par un vote",
      ],
      reponse: 1,
      explication: "L'article 8 de la Constitution dit que le président de la République nomme le Premier ministre. Cette question figure dans la liste officielle CSP et dans la liste CR. Ceci est une question type, avec des réponses écrites par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Les listes officielles n'ont ni réponses ni mises en situation. Pour vous tester sur 40 questions types, mises en situation comprises, et voir vos résultats par thématique, l'inscription est gratuite.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "image",
      src: "/images/articles/formation-civique-site-officiel.webp",
      alt: "L'hôtel de Beauvau à Paris, un bâtiment en pierre de trois étages devant une pelouse et des arbustes jaunes",
      legende: "L'hôtel de Beauvau, à Paris, abrite le ministère de l'Intérieur, qui publie le site de la formation civique.",
      credit: "Croquant, via Wikimedia Commons",
      licence: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_Beauvau_JP2010_2.jpg",
      largeur: 1200,
      hauteur: 799,
    },
    {
      type: "h2",
      texte: "Où s'inscrire à l'examen depuis le site officiel ?",
    },
    {
      type: "p",
      texte: "Le site ne vous inscrit pas lui-même. Il renvoie vers les deux organismes agréés par le ministère : la **CCI Paris Île-de-France** (CCIP), la chambre de commerce et d'industrie, et **France Éducation international** (FEI), un établissement public. Chacun a sa carte des centres et sa page d'inscription. Notre article sur [les centres agréés](/articles/centres-agrees-examen-civique-2026) vous aide à choisir.",
    },
    {
      type: "p",
      texte: "Un point qui prête à confusion : le lien d'inscription de FEI mène au site **test-civique.fr**. C'est le site d'inscription de FEI. Il n'a rien à voir avec le site que vous lisez (testciviquefrance.fr), qui ne fait passer aucun examen. Le prix de l'examen, de 60 à 80 € selon le centre, se paie à l'organisme ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)).",
    },
    {
      type: "h2",
      texte: "Comment éviter les faux sites officiels ?",
    },
    {
      type: "p",
      texte: "Le ministère met en garde : les sites qui font payer des contenus « présentent des risques de fraude et peuvent contenir de fausses informations ». Trois réflexes vous protègent.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vérifiez l'adresse.** Les sites de l'État finissent par **.gouv.fr**. Le site officiel s'écrit exactement formation-civique.interieur.gouv.fr.",
        "**Méfiez-vous des sites qui promettent les questions exactes du jour J.** Les mises en situation ne sont publiées nulle part. Un site qui prétend les vendre vous trompe.",
        "**Ne payez jamais votre titre de séjour ou votre examen à un intermédiaire inconnu.** Notre article sur [les arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) montre les pièges les plus courants.",
      ],
    },
    {
      type: "p",
      texte: "Le dernier conseil est le plus utile : l'attestation de réussite ==n'a pas de durée de validité==, et l'examen se repasse autant de fois que nécessaire (page officielle de l'examen). Inutile donc d'attendre la dernière semaine avant votre rendez-vous en préfecture. Passez l'examen dès que les 5 thématiques vous semblent acquises, puis lisez [comment trouver votre résultat](/articles/resultat-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Où trouver la liste officielle des questions de l'examen civique ?",
      reponse: "Sur formation-civique.interieur.gouv.fr, dans la rubrique « Examen civique ». Il y a une liste pour la carte de séjour pluriannuelle (191 questions) et une pour la carte de résident (209 questions). Elles donnent les questions de connaissance sans les réponses. Les mises en situation ne sont pas publiées. La liste de la naturalisation est sur le site du ministère consacré à la nationalité.",
    },
    {
      question: "Le site formation civique du gouvernement est-il gratuit ?",
      reponse: "Oui. Les fiches par thématique, les fiches par journée et les listes officielles de questions sont en accès libre, sans compte à créer. Le ministère précise que la préparation à l'examen civique peut se faire gratuitement et que les sites payants ne sont pas gérés par lui. La formation civique de 4 jours, prescrite par l'OFII, est elle aussi gratuite.",
    },
    {
      question: "Combien de questions dans la liste officielle de l'examen civique ?",
      reponse: "Nous avons compté 191 questions dans la liste de la carte de séjour pluriannuelle et 209 dans celle de la carte de résident, le 1er novembre 2026. L'examen lui-même compte 40 questions : 28 questions de connaissance, tirées de ces thèmes, et 12 mises en situation. Il faut 32 bonnes réponses pour réussir.",
    },
    {
      question: "Les mises en situation de l'examen civique sont-elles publiées ?",
      reponse: "Non. Le ministère de l'Intérieur l'écrit en tête de chaque liste officielle : les mises en situation ne sont pas rendues publiques. Elles décrivent un cas de la vie courante et demandent la bonne réaction. Pour s'y préparer, il faut comprendre les principes et valeurs de la République et les droits et devoirs, plutôt qu'apprendre des réponses.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : formation-civique.interieur.gouv.fr, accueil et questions fréquentes",
      url: "https://formation-civique.interieur.gouv.fr/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (format, organismes agréés, préparation gratuite)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Ministère de l'Intérieur : liste officielle des questions de connaissance, mention CSP (191 questions comptées)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Ministère de l'Intérieur : liste officielle des questions de connaissance, mention CR (209 questions comptées)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Ministère de l'Intérieur : qu'est-ce que la formation civique ? (4 jours, gratuite, attestation d'assiduité)",
      url: "https://formation-civique.interieur.gouv.fr/quest-ce-que-la-formation-civique/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Ministère de l'Intérieur : plan du site de la formation civique",
      url: "https://formation-civique.interieur.gouv.fr/plan-du-site/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "data.gouv.fr : jeu de données « Examen civique - CR »",
      url: "https://www.data.gouv.fr/datasets/examen-civique-cr/",
      type: "officiel",
      luLe: "2026-11-01",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
