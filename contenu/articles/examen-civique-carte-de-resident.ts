import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 20/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « examen civique carte de résident » (1 k à 10 k recherches
 * par mois, Planificateur de mots clés, 20/10/2026). Aucun article du site ne
 * comparait les deux mentions de l'examen.
 */
const article: Article = {
  slug: "examen-civique-carte-de-resident",
  titre: "Examen civique pour la carte de résident : est-il plus difficile que pour la carte pluriannuelle ?",
  titreSeo: "Examen civique carte de résident : ce qui diffère",
  resume: "Même format, autre liste de questions et niveau B1 : ce que l'examen civique demande pour une première carte de résident, sources officielles à l'appui.",
  chapo: "Pour une première carte de résident, l'examen civique a le ==même format== que pour la carte pluriannuelle : 40 questions, 45 minutes, 32 bonnes réponses. Ce qui change, c'est la liste officielle des questions, plus longue, et le niveau de français demandé à côté (B1 au lieu de A2). Voici les différences, point par point, avec les textes officiels.",
  publieLe: "2026-10-20",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "examen civique carte de résident",
  motsCles: [
    "examen civique carte de résident",
    "examen civique mention carte de résident",
    "examen civique CR",
    "différence examen civique CSP CR",
    "examen civique carte de séjour pluriannuelle",
    "liste officielle questions carte de résident",
    "carte de résident 10 ans examen civique",
    "niveau B1 carte de résident",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/examen-civique-carte-de-resident.webp",
    alt: "Façade de l'hôtel de ville d'Avignon ornée de drapeaux tricolores et de l'emblème RF",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5818917417",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui doit passer l'examen civique pour une carte de résident ?",
    },
    {
      type: "p",
      texte: "La carte de résident est un titre de séjour valable 10 ans. Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Depuis le 1er janvier 2026, une **première** carte de résident demande la réussite à l'examen civique, avec la mention « carte de résident » ([service-public, fiche F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "p",
      texte: "Cette règle vient du CESEDA, le code qui regroupe les règles sur l'entrée et le séjour des étrangers (article L. 413-7). Elle vise plusieurs situations :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "la carte de résident « classique » : conjoint de Français, parent d'enfant français, venue par regroupement familial, conjoint d'une personne qui a déjà une carte de résident.",
        "la carte de résident de longue durée-UE, par exemple après 5 ans de séjour régulier avec des ressources stables.",
        "la carte de résident permanent, pour toutes les premières demandes.",
      ],
    },
    {
      type: "p",
      texte: "Le **renouvellement** d'une carte de résident ne demande pas l'examen. Les personnes de **plus de 65 ans** en sont dispensées ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). D'autres cas existent : notre article sur les [dispenses de l'examen civique](/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords) les détaille. Pour savoir en une minute si vous êtes concerné par l'examen, utilisez le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "h2",
      texte: "Le format est-il le même que pour la carte pluriannuelle ?",
    },
    {
      type: "p",
      texte: "Oui. La carte de séjour pluriannuelle (CSP) est le titre de 2 à 4 ans que l'on demande souvent avant la carte de résident. Pour les deux titres, l'épreuve est identique ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)) :",
    },
    {
      type: "tableau",
      entetes: ["Point", "Mention « carte de séjour pluriannuelle »", "Mention « carte de résident »"],
      lignes: [
        ["Nombre de questions", "40", "40."],
        ["Questions de connaissance", "28", "28."],
        ["Mises en situation", "12", "12."],
        ["Durée", "45 minutes au plus", "45 minutes au plus."],
        ["Pour réussir", "32 bonnes réponses (80 %)", "32 bonnes réponses (80 %)."],
        ["Liste officielle des questions de connaissance", "191 questions", "209 questions."],
        ["Niveau de français demandé à côté", "A2", "B1."],
      ],
      legende: "Sources : service-public F39530 et F34501, formation-civique.interieur.gouv.fr, listes officielles comptées le 20/10/2026.",
    },
    {
      type: "p",
      texte: "L'examen est un QCM, un questionnaire à choix multiples : pour chaque question, quatre réponses, dont une seule est juste. Il se passe sur ordinateur ou sur tablette. Les 28 questions de connaissance et les 12 mises en situation sont précisées par le ministère de l'Intérieur sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/).",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qui change vraiment avec la mention carte de résident ?",
    },
    {
      type: "p",
      texte: "La différence tient surtout à la **liste des questions de connaissance**. Le ministère publie une liste pour chaque mention. Le 20/10/2026, la liste « carte de résident » compte ==209 questions==, contre 191 pour la liste « carte de séjour pluriannuelle ».",
    },
    {
      type: "tableau",
      entetes: ["Thématique officielle", "Liste CSP", "Liste carte de résident"],
      lignes: [
        ["Principes et valeurs de la République", "37", "40."],
        ["Système institutionnel et politique", "46", "50."],
        ["Droits et devoirs", "30", "38."],
        ["Histoire, géographie et culture", "47", "49."],
        ["Vivre dans la société française", "31", "32."],
      ],
      legende: "Questions comptées sur les deux listes officielles de formation-civique.interieur.gouv.fr, le 20/10/2026.",
    },
    {
      type: "p",
      texte: "C'est la thématique « Droits et devoirs » qui gagne le plus de questions : 38 au lieu de 30. Beaucoup de questions se retrouvent dans les deux listes. Par exemple, « Combien de députés composent l'Assemblée nationale ? » figure dans les deux.",
    },
    {
      type: "p",
      texte: "Le ministère indique seulement que la difficulté est « adaptée à chacun des titres concernés » ([réponse ministérielle publiée au Journal officiel le 11/08/2026](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)). Il ne publie pas d'autre détail. Les mises en situation, elles, ne sont publiées pour aucune des deux mentions.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Même épreuve, même seuil de 32 sur 40. La mention carte de résident s'appuie sur une liste un peu plus longue : 18 questions de connaissance en plus à réviser.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Une attestation carte de résident vaut-elle pour une carte pluriannuelle ?",
    },
    {
      type: "p",
      texte: "Oui. L'attestation de réussite avec la mention « carte de résident » est aussi acceptée pour une demande de carte pluriannuelle. L'inverse n'est pas vrai : une attestation « carte de séjour pluriannuelle » ne suffit pas pour une première carte de résident ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)).",
    },
    {
      type: "p",
      texte: "L'attestation **n'a pas de date de fin** de validité. Vous la déposez sur l'ANEF (le site du ministère de l'Intérieur où se font les demandes de titre de séjour en ligne).",
    },
    {
      type: "p",
      texte: "Si vous hésitez entre les deux mentions, regardez votre projet sur plusieurs années. La mention carte de résident demande un peu plus de révision, mais elle couvre les deux titres.",
    },
    {
      type: "h2",
      texte: "Quel niveau de français faut-il en plus de l'examen ?",
    },
    {
      type: "p",
      texte: "L'examen civique ne remplace pas la condition de langue. Pour une première carte de résident, il faut **aussi** prouver un niveau ==B1== en français. Pour la carte pluriannuelle, c'est le niveau A2 ([service-public, fiche F34501](https://www.service-public.gouv.fr/particuliers/vosdroits/F34501)).",
    },
    {
      type: "p",
      texte: "A2 et B1 sont des niveaux d'une échelle européenne commune. A2 veut dire que vous comprenez des phrases simples de la vie courante. B1 veut dire que vous pouvez vous débrouiller seul dans la plupart des situations et raconter un événement.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "un test de français reconnu (le TCF ou le TEF), valable 2 ans.",
        "un diplôme de français de niveau B1 ou plus (DELF, DALF, DCL, DUEF, DFP).",
        "un diplôme français de niveau 3 au moins (CAP, BEP) ou le diplôme national du brevet.",
      ],
    },
    {
      type: "p",
      texte: "Un diplôme délivré à l'étranger, même dans un pays francophone, n'est pas accepté pour cette preuve (F34501). Notre guide des [niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) compare les tests.",
    },
    {
      type: "h2",
      texte: "Comment s'inscrire, et combien coûte l'examen ?",
    },
    {
      type: "p",
      texte: "Vous vous inscrivez dans un centre agréé par le ministère de l'Intérieur. Les deux organismes qui gèrent ces centres sont la CCI Paris Île-de-France et France Éducation international (F39530). Au moment de l'inscription, choisissez bien la mention « carte de résident ».",
    },
    {
      type: "p",
      texte: "Le prix est fixé par chaque centre, ==entre 60 et 80 €== selon le ministère. Au 26/05/2026, 444 centres étaient ouverts et le taux de réussite moyen était de 81 % ([réponse ministérielle du 11/08/2026](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)). En cas d'échec, vous pouvez repasser l'examen autant de fois que nécessaire. Notre article [Où et comment s'inscrire](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) donne les étapes.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Une fraude ou une tentative de fraude entraîne une interdiction de repasser l'examen pendant 2 ans (F39530).",
        "La préparation officielle est gratuite sur formation-civique.interieur.gouv.fr : méfiez-vous des sites qui se présentent comme officiels et font payer.",
        "Pour un handicap ou un problème de santé, un aménagement est possible avec un certificat médical.",
      ],
    },
    {
      type: "cta",
      texte: "Testez-vous sur 40 questions types avant le jour J, et voyez quelle thématique vous fait perdre des points.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "h2",
      texte: "Comment réviser la liste carte de résident ?",
    },
    {
      type: "p",
      texte: "Commencez par la thématique qui a le plus de questions en plus : « Droits et devoirs ». Révisez ensuite le système institutionnel, la plus longue liste. Puis entraînez-vous aux mises en situation : elles ne sont pas publiées, mais elles portent sur les mêmes thèmes. Voici une question type sur les institutions :",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Combien de députés au plus siègent à l'Assemblée nationale ?",
      choix: ["348", "577", "925", "100"],
      reponse: 1,
      explication: "La Constitution fixe à 577 le nombre maximal de députés (article 24). 348 est le nombre maximal de sénateurs. 925 correspond aux deux chambres réunies.",
    },
    {
      type: "p",
      texte: "Pour d'autres questions corrigées, lisez nos [exemples de questions de l'examen civique](/articles/examen-civique-2026-exemples-questions-corrigees). Si vous préparez d'abord la carte pluriannuelle, lisez aussi [l'examen civique pour la carte de séjour pluriannuelle](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026). Et pour le dossier complet de la carte de 10 ans, voyez notre guide de la [carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    {
      type: "encadre",
      titre: "Le geste utile",
      texte: "Visez la mention carte de résident dès que votre projet le permet. Une seule attestation, sans date de fin, couvre alors les deux titres. Pour toute question sur votre cas, adressez-vous à votre préfecture (le service de l'État qui gère les titres de séjour dans votre département) ou à une association comme La Cimade.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "L'examen civique est-il obligatoire pour la carte de résident ?",
      reponse: "Oui, pour une première carte de résident demandée depuis le 1er janvier 2026 : il faut réussir l'examen civique avec la mention « carte de résident ». Le renouvellement n'est pas concerné. Les personnes de plus de 65 ans sont dispensées, et un handicap ou un état de santé peut ouvrir un aménagement ou une dispense.",
    },
    {
      question: "Quelle est la différence entre l'examen civique CSP et CR ?",
      reponse: "Le format est le même : 40 questions, 45 minutes, 32 bonnes réponses. La différence porte sur la liste officielle des questions de connaissance : 209 questions pour la carte de résident, 191 pour la carte pluriannuelle, au 20/10/2026. Le niveau de français demandé à côté passe aussi de A2 à B1.",
    },
    {
      question: "Combien de questions pour l'examen civique de la carte de résident ?",
      reponse: "L'examen compte 40 questions : 28 questions de connaissance et 12 mises en situation, avec quatre réponses possibles pour chacune. Il faut au moins 32 bonnes réponses, soit 80 %. La liste officielle d'où viennent les questions de connaissance compte 209 questions pour la mention carte de résident.",
    },
    {
      question: "L'examen civique carte de résident est-il valable pour la carte pluriannuelle ?",
      reponse: "Oui. Une attestation de réussite avec la mention « carte de résident » est acceptée pour une demande de carte de séjour pluriannuelle. L'inverse ne marche pas. L'attestation n'a pas de durée de validité : vous pouvez la garder et la déposer plus tard sur l'ANEF.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, comment passer l'examen civique ? (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : justifier de sa connaissance du français pour une carte de résident ou une carte pluriannuelle (F34501)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : liste officielle des questions de connaissance, carte de résident",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : liste officielle des questions de connaissance, carte de séjour pluriannuelle",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère publiée au JO le 11/08/2026",
      url: "https://questions.assemblee-nationale.fr/q17/17-11488QE.htm",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Conseil constitutionnel : Constitution du 4 octobre 1958, article 24",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
      type: "juridique",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
