import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part1.ts` et
 * `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/comment-reussir-test-civique-premier-coup`).
 *
 * Réécrit en entier par le robot éditorial le 07/11/2026 (`docs/seo/ROBOT.md`,
 * liste « à revérifier » de `docs/seo/MOTS-CLES.md`). La version migrée
 * affirmait « 20 % des candidats échouent à la première tentative » sans
 * source, portait un titre « Guide complet 2025 » périmé, et recoupait le plan
 * de révision de `preparer-examen-civique` (06/11/2026). Elle est réorientée
 * sur le jour de l'examen, à partir du règlement de l'épreuve (annexes II et
 * III de l'arrêté du 10/10/2025), sans planning de révision.
 * Sources lues le 07/11/2026 : Légifrance, arrêté du 10/10/2025 (articles 4 et
 * 5, annexes II et III) ; formation-civique.interieur.gouv.fr, informations
 * générales sur l'examen. Lues le 28/10/2026 : QE n° 11488, manuel du
 * candidat FEI, pages de la CCIP.
 */
const article: Article = {
  slug: "comment-reussir-test-civique-premier-coup",
  titre: "Réussir l'examen civique du premier coup : les règles du jour J, et pourquoi ne laisser aucune réponse vide",
  titreSeo: "Réussir l'examen civique du premier coup : jour J",
  resume: "Le jour de l'examen civique : l'identité à l'entrée, aucun retard toléré, 45 minutes, la réponse vide qui vaut 0, et ce qui est interdit dans la salle.",
  chapo: "Pour réussir l'examen civique du premier coup, il faut ==32 bonnes réponses sur 40== en 45 minutes. Le règlement officiel ajoute des règles que beaucoup découvrent trop tard. ==Aucun retard n'est toléré==, il faut un titre de séjour valable pour entrer (la carte qui vous autorise à vivre en France), et une réponse vide vaut 0. Voici le jour J, point par point.",
  publieLe: "2025-12-20",
  modifieLe: "2026-11-07",
  minutes: 7,
  theme: "réussir l'examen civique",
  motsCles: [
    "réussir examen civique",
    "réussir test civique premier coup",
    "examen civique jour J",
    "déroulement examen civique",
    "examen civique retard",
    "examen civique pièce d'identité",
    "examen civique règlement",
    "conseils examen civique",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/examen-civique-jour-j-sablier.webp",
    alt: "Gros plan sur un sablier en verre dont le sable doré s'écoule, sur un fond sombre",
    largeur: 1024,
    hauteur: 1024,
    credit: "Natalia Medd, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/137731904@N05/31459916693",
    position: "50% 40%",
  },
  blocs: [
    {
      type: "h2",
      texte: "Que faut-il pour réussir l'examen civique ?",
    },
    {
      type: "p",
      texte: "L'examen civique est un QCM, un questionnaire à choix multiples : 40 questions, avec 4 réponses chacune et une seule bonne. Il compte ==28 questions de connaissance== et ==12 mises en situation==. Une mise en situation décrit un cas de la vie courante et vous demande la bonne réaction ([ministère de l'Intérieur](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)).",
    },
    {
      type: "p",
      texte: "L'épreuve dure ==45 minutes au plus==, sur tablette ou ordinateur. Il faut au moins 32 bonnes réponses, soit 80 %. Les questions portent sur les 5 thématiques de la formation civique. Le niveau de difficulté change selon la carte demandée : carte de séjour pluriannuelle ou carte de résident.",
    },
    {
      type: "p",
      texte: "Bonne nouvelle : la plupart des candidats réussissent. Selon le ministère de l'Intérieur, le taux de réussite moyen était de ==81 %== au 26 mai 2026 ([réponse à la question écrite n° 11488](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Pour les révisions, notre [plan en 4 semaines](/articles/preparer-examen-civique) suit le poids officiel de chaque thème. Cet article parle du jour J.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qui peut vous empêcher d'entrer ?",
    },
    {
      type: "p",
      texte: "Le règlement de l'épreuve est fixé par l'arrêté du 10 octobre 2025, en annexe III ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)). Le centre doit vous le montrer avant l'examen, mais le jour J il est trop tard pour corriger une erreur. Trois règles bloquent l'entrée.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le retard.** L'examen commence à l'heure prévue, ==sans aucune tolérance==. Un candidat qui arrive après l'heure de début ne peut pas passer l'examen (annexe III, point 4).",
        "**La pièce d'identité.** Elle est vérifiée avant l'épreuve. Le règlement demande un ==titre de séjour en cours de validité==. Le passeport ou la carte d'identité ne sont acceptés que pour un citoyen européen qui passe l'examen pour la naturalisation (annexe III, point 1).",
        "**La photo.** Le centre prend votre photo avant l'épreuve, pour l'attestation de réussite. Si vous refusez, ou en cas de doute sur votre identité, vous ne passez pas l'examen (annexe II, points 4 et 5).",
      ],
    },
    {
      type: "p",
      texte: "Votre titre de séjour expire bientôt, ou vous n'avez qu'un autre document ? Demandez au centre, ==avant le jour J==, ce qu'il accepte. Notre liste des [documents à apporter](/articles/documents-test-civique-2026-convocation-piece-identite) vous aide à préparer votre sac.",
    },
    {
      type: "h2",
      texte: "Pourquoi ne laisser aucune réponse vide ?",
    },
    {
      type: "p",
      texte: "Le règlement est clair : une bonne réponse vaut 1 point. Une mauvaise réponse ==et== une absence de réponse valent 0 (annexe III, point 4). Une erreur ne vous enlève donc aucun point. Une case vide, c'est toujours un point perdu. Répondez à toutes les questions, même quand vous hésitez.",
    },
    {
      type: "encadre",
      titre: "La règle à retenir",
      texte: "Une réponse fausse coûte autant qu'une réponse vide : 0 point. Il n'y a jamais de raison de laisser une question sans réponse.",
      ton: "vert",
    },
    {
      type: "h2",
      texte: "Comment gérer les 45 minutes ?",
    },
    {
      type: "p",
      texte: "45 minutes pour 40 questions, cela fait un peu plus d'une minute par question. C'est assez si vous ne restez pas bloqué. Voici une méthode simple, que nous proposons ; elle n'est pas imposée par le règlement.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Lisez la question jusqu'au bout**, puis les 4 réponses. Les mots « toujours », « jamais » ou « seulement » changent souvent le sens.",
        "**Écartez les réponses impossibles.** Il en reste souvent deux. Vous avez alors une chance sur deux, au lieu d'une sur quatre.",
        "**Pour une mise en situation, cherchez la règle de la République en jeu** : égalité, laïcité, liberté, respect de la loi. La bonne réaction est celle qui respecte cette règle.",
        "**Ne restez pas plus de 2 minutes sur une question.** Choisissez la réponse la plus probable et passez à la suivante.",
        "**Gardez un œil sur l'heure** à la moitié de l'épreuve : vers 20 questions, environ 22 minutes doivent être passées.",
      ],
    },
    {
      type: "p",
      texte: "Les mises en situation ne sont pas publiées par le ministère. Les erreurs qui reviennent le plus sont détaillées dans notre article sur [les pièges du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm).",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Dans une entreprise, une femme et un homme occupent le même poste et font le même travail. Que prévoit la loi pour leur salaire ?",
      choix: [
        "L'employeur choisit librement",
        "Le salaire doit être le même",
        "L'homme doit être mieux payé",
        "Cela dépend de leur religion",
      ],
      reponse: 1,
      explication: "L'égalité entre les femmes et les hommes est l'un des principes de la République cités par le référentiel de l'examen civique. Pour un même travail, la rémunération doit être la même. Ceci est une question type, pas une question de l'examen officiel.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qui est interdit dans la salle ?",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le téléphone et tout appareil électronique** : il est éteint et rangé dans vos affaires, hors de la salle ou sous clé (annexe II, point 9).",
        "**Les écouteurs et les oreillettes**, sauf les appareils qui corrigent la surdité. L'examinateur peut vous demander de dégager vos oreilles (annexe III, point 6).",
        "**Les documents**, sur papier ou sur écran, et toute communication avec un autre candidat ou avec l'extérieur (annexe III, point 7).",
        "**Sortir de la salle** : il faut l'accord de l'examinateur pour bouger, et toute sortie est ==définitive== (annexe III, point 8). Prenez vos précautions avant l'épreuve.",
      ],
    },
    {
      type: "p",
      texte: "La sanction est lourde. Un candidat qui ne respecte pas ces règles est exclu de la salle tout de suite. En cas de fraude ou de tentative de fraude, il ne peut plus passer l'examen ==pendant 2 ans== (annexe III, point 9).",
    },
    {
      type: "h2",
      texte: "Vous avez un handicap ou une maladie ?",
    },
    {
      type: "p",
      texte: "Un candidat qui a un handicap, ou une maladie chronique qui gêne l'épreuve, peut demander un aménagement, par exemple plus de temps (article 4 de l'arrêté). La durée de 45 minutes ne peut être allongée que pour une raison médicale justifiée. Faites la demande au centre ==au moment de l'inscription==, avec un justificatif médical.",
    },
    {
      type: "h2",
      texte: "Que faire la veille et le matin ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Relisez l'heure et l'adresse sur votre convocation, et prévoyez le trajet avec une marge.",
        "Vérifiez la date de fin de votre titre de séjour.",
        "Passez un dernier examen blanc de 40 questions en 45 minutes, puis arrêtez de réviser.",
        "Dormez, mangez, et arrivez en avance : le retard ne se rattrape pas.",
      ],
    },
    {
      type: "cta",
      texte: "Le meilleur entraînement au jour J, c'est le jour J en conditions réelles. Sur Test Civique France, les examens blancs de 40 questions se passent en temps limité et vous donnent un résultat par thématique. L'inscription est gratuite.",
      bouton: "Passer un examen blanc",
    },
    {
      type: "h2",
      texte: "Et après l'épreuve ?",
    },
    {
      type: "p",
      texte: "Le résultat n'est pas donné dans la salle. Il arrive en ligne. Chez France Éducation international, comptez 12 heures après l'épreuve. À la CCI Paris Île-de-France, comptez 24 à 48 heures ouvrées. Notre article sur [le résultat de l'examen](/articles/resultat-examen-civique) explique où trouver l'attestation. Et si le score n'y est pas, l'examen se repasse après 24 heures : voyez [que faire après un échec](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec).",
    },
    {
      type: "p",
      texte: "Vous n'êtes pas sûr que l'examen vous concerne ? Vous pouvez [vérifier en une minute si l'examen vous concerne](/eligibilite-examen-civique), avant de vous inscrire.",
    },
  ],
  faq: [
    {
      question: "Comment réussir l'examen civique du premier coup ?",
      reponse: "Révisez d'abord les principes et valeurs de la République et les droits et devoirs, qui font 22 questions sur 40. Entraînez-vous avec des examens blancs en 45 minutes. Le jour J, arrivez en avance avec un titre de séjour valable, et répondez à toutes les questions : une réponse vide vaut 0, comme une réponse fausse.",
    },
    {
      question: "Que se passe-t-il si j'arrive en retard à l'examen civique ?",
      reponse: "Vous ne pourrez pas passer l'examen. Le règlement fixé par l'arrêté du 10 octobre 2025 prévoit que l'épreuve commence à l'heure prévue, sans tolérance. Un candidat qui arrive après l'heure de début n'est pas admis. Il faut alors vous réinscrire à une autre session. Prévoyez votre trajet avec une marge.",
    },
    {
      question: "Quelle pièce d'identité pour l'examen civique ?",
      reponse: "Le règlement demande un titre de séjour en cours de validité. Le passeport ou la carte d'identité ne sont acceptés que pour un citoyen de l'Union européenne qui passe l'examen pour la naturalisation. Le centre prend aussi votre photo avant l'épreuve. Si vous avez un autre document, demandez au centre avant le jour J ce qu'il accepte.",
    },
    {
      question: "Combien de fautes a-t-on le droit de faire à l'examen civique ?",
      reponse: "Il faut au moins 32 bonnes réponses sur 40, soit 80 %. Vous pouvez donc vous tromper ou ne pas répondre à 8 questions au plus. Une mauvaise réponse ne fait pas perdre de point : elle vaut 0, comme une réponse vide. Mieux vaut donc toujours répondre, même en cas de doute.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique (article 4 ; annexe II, déroulement ; annexe III, règlement de l'épreuve)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (40 questions, 28 de connaissance et 12 mises en situation, 45 minutes, 32 bonnes réponses)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-11-07",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026 (81 % de réussite moyenne au 26/05/2026)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "France Éducation international : manuel du candidat à l'examen civique, version B, septembre 2026 (résultats sous 12 heures, réinscription après 24 heures)",
      url: "https://www.france-education-international.fr/document/manuelcandidatexamencivique",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "CCI Paris Île-de-France (Le français des affaires) : examen civique, comprendre ses résultats (24 à 48 heures ouvrées)",
      url: "https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/resultats/",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
