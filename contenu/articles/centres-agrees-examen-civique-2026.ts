import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis le rendu dédié de l'ancien site, sans changer
 * d'adresse (`/articles/centres-agrees-examen-civique-2026`).
 *
 * Réécrit le 20/10/2026 (fusion de doublons). L'article
 * `nouveaux-centres-test-civique-mai-2026-liste-complete` (02/04/2026) y a été
 * fusionné : son adresse redirige ici en 301. Il n'en a été repris que ses
 * requêtes (`motsCles`) et le format de l'épreuve de sa FAQ : ses « 15 nouveaux
 * centres ouverts par l'OFII le 5 mai 2026 », ses capacités par session, son
 * inscription « exclusivement via l'ANEF » et sa « cinquième vague » n'avaient
 * aucune source officielle.
 *
 * Ont aussi été retirés de l'ancien texte, faute de source ou parce que faux :
 * la liste de villes par région, « plus de 150 centres » (le ministère en
 * compte 444 au 26/05/2026), un prix de 100 à 150 € (le ministère indique 60 à
 * 80 €), une durée de 1 h 30 (l'arrêté du 10/10/2025 fixe 45 minutes au plus),
 * des résultats « sous 48 à 72 h », « tous les centres accessibles PMR »,
 * « niveau A2 requis », « 800+ questions officielles » et « 95 % de réussite ».
 *
 * L'image de couverture vient d'Unsplash (licence Unsplash : usage libre,
 * commercial compris) ; ses dimensions sont nominales.
 */
const article: Article = {
  slug: "centres-agrees-examen-civique-2026",
  titre: "Centres agréés pour l'examen civique : où trouver la liste officielle et choisir le vôtre",
  titreSeo: "Centres agréés examen civique : où le passer",
  resume: "444 centres agréés au 26 mai 2026 : où trouver la liste officielle (CCIP et France Éducation International), le prix fixé par chaque centre et le format.",
  chapo: "La **liste officielle des centres agréés** pour l'examen civique se consulte sur deux cartes en ligne : celles des deux organismes agréés par le ministère de l'Intérieur. Au 26 mai 2026, le ministère comptait ==444 centres== dans tous les départements. Voici comment trouver le vôtre, ce que coûte l'examen et comment il se passe.",
  publieLe: "2025-12-09",
  modifieLe: "2026-10-20",
  minutes: 8,
  theme: "centres agréés examen civique",
  motsCles: [
    "centres agréés examen civique",
    "liste des centres examen civique",
    "centre examen civique près de chez moi",
    "où passer l'examen civique",
    "centres test civique 2026",
    "nouveaux centres examen civique",
    "centres agréés test civique",
    "examen civique CCI Paris",
    "examen civique France Éducation International",
    "inscription test civique",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
    alt: "Une salle de classe avec des tables et des chaises alignées face à un tableau",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 20 octobre 2026",
      texte: "Une version précédente de cet article donnait une liste de villes, « plus de 150 centres », un prix de 100 à 150 € et une durée de 1 h 30. Une autre page annonçait « 15 nouveaux centres en mai 2026 ». Aucune source officielle ne confirme ces chiffres. Le ministère compte 444 centres au 26 mai 2026, l'examen dure 45 minutes au plus, et son prix va de 60 à 80 € selon le ministère.",
      ton: "ambre",
    },
    { type: "h2", texte: "Où trouver la liste officielle des centres agréés ?", id: "liste-centres" },
    {
      type: "p",
      texte: "L'examen civique est un QCM sur les valeurs, l'histoire et les institutions de la France. Il ne se passe pas à la préfecture, le service de l'État qui gère les papiers des étrangers dans votre département. Il se passe dans un centre agréé, c'est-à-dire autorisé par le ministère de l'Intérieur.",
    },
    {
      type: "p",
      texte: "Deux organismes ont cet agrément ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Chacun publie sa carte des centres :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**La CCI Paris Île-de-France (CCIP)** : sa [carte des centres](https://francais.cci-paris-idf.fr/candidat?produit=21) permet de chercher par ville et par date de session.",
        "**France Éducation International (FEI)** : sa [carte des centres](https://www.france-education-international.fr/centres-d-examen/carte?type-centre=examen_civique) montre les centres qui passent par lui.",
      ],
    },
    {
      type: "p",
      texte: "Service-public renvoie vers ces deux mêmes outils ([carte CCIP](https://www.service-public.gouv.fr/particuliers/vosdroits/R75389), [carte FEI](https://www.service-public.gouv.fr/particuliers/vosdroits/R75391)). Ce sont les seules listes à jour. Des centres ouvrent et ferment au fil des mois. Une liste de villes recopiée sur un autre site peut donc être fausse. Regardez toujours les deux cartes avant de choisir.",
    },
    {
      type: "p",
      texte: "Qui doit passer cet examen ? Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Depuis le 1er janvier 2026, l'examen est exigé pour une **première** carte de séjour pluriannuelle (un titre valable plusieurs années). Il l'est aussi pour une **première** carte de résident (un titre de 10 ans). Le renouvellement n'y est pas soumis ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "p",
      texte: "Il existe aussi une mention à part pour la naturalisation. Pour savoir en une minute si l'examen vous concerne, utilisez notre [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    { type: "h2", texte: "Combien y a-t-il de centres en France ?", id: "nombre-centres" },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur a donné un chiffre officiel dans une réponse à un député. Elle a paru au Journal officiel (le journal où l'État publie ses textes) le 11 août 2026 ([question écrite n° 11488](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)). Voici ce qu'elle dit :",
    },
    {
      type: "tableau",
      entetes: ["Donnée", "Chiffre officiel au 26 mai 2026"],
      lignes: [
        ["Centres d'examen", "**444**, dans tous les départements"],
        ["Personnes qui ont passé l'examen", "**71 125**"],
        ["Taux de réussite moyen", "**81 %**"],
        ["Organismes agréés", "la CCIP et France Éducation International, en novembre 2025"],
      ],
      legende: "Source : réponse du ministère à la question écrite n° 11488, publiée au Journal officiel le 11/08/2026.",
    },
    {
      type: "p",
      texte: "Ce chiffre date de mai 2026. Le nombre de centres a pu changer depuis : seules les deux cartes en ligne donnent l'état du jour. Vous vivez en outre-mer ? Cherchez votre ville sur les deux cartes. Pour le détail des résultats, lisez notre article sur le [taux de réussite de l'examen civique](/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent).",
    },
    { type: "h2", texte: "Comment choisir et réserver un centre ?", id: "inscription" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ouvrez les deux cartes, CCIP et FEI, et notez les centres proches de chez vous.",
        "Comparez les dates de session et le prix : chaque centre fixe le sien.",
        "Posez vos questions au centre avant de payer : date, accès, pièce acceptée.",
        "Inscrivez-vous et payez auprès du centre choisi.",
        "Gardez votre convocation : seuls les candidats convoqués entrent en salle.",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez choisir un centre loin de chez vous si la date vous convient mieux. Les étapes en détail sont dans notre guide [où et comment s'inscrire à l'examen civique](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire).",
    },
    { type: "h2", texte: "Combien coûte l'examen dans un centre agréé ?", id: "prix" },
    {
      type: "p",
      texte: "Il n'y a pas de prix national. Service-public le dit : les droits d'inscription sont « fixés par le centre de passation » ([R75389](https://www.service-public.gouv.fr/particuliers/vosdroits/R75389)). Dans sa réponse du 11 août 2026, le ministère précise que ce prix va ==de 60 à 80 €== selon les centres ([question n° 11488](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)).",
    },
    {
      type: "p",
      texte: "Ce montant est le prix de l'examen seul. Il ne comprend pas le timbre fiscal (la taxe payée à l'État quand votre titre est prêt). Notre article sur le [prix de l'examen civique](/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture) fait le point sur tous ces frais.",
    },
    { type: "h2", texte: "Comment se passe l'examen ?", id: "deroulement" },
    {
      type: "p",
      texte: "L'épreuve est la même dans tous les centres. Elle est fixée par un arrêté (un texte signé par un ministre) du 10 octobre 2025 ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)). Voici l'essentiel :",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que disent les textes"],
      lignes: [
        ["Format", "40 questions à choix multiples, une seule bonne réponse par question"],
        ["Contenu", "28 questions de connaissance et 12 mises en situation"],
        ["Durée", "45 minutes au plus, sauf aménagement pour raison de santé"],
        ["Seuil de réussite", "80 %, soit 32 bonnes réponses sur 40"],
        ["Mauvaise réponse", "0 point : aucun point n'est retiré"],
        ["Support", "tablette ou ordinateur"],
      ],
      legende: "Sources : arrêté du 10 octobre 2025 et formation-civique.interieur.gouv.fr, lus le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le programme couvre cinq thèmes (F39530). Ce sont les principes et valeurs de la République, les droits et devoirs, l'histoire, la géographie et la culture, les institutions, et la vie en société. Notre article sur le [cadre général de l'examen civique](/articles/cadre-general-examen-civique) les présente un par un.",
    },
    {
      type: "p",
      texte: "Le ministère publie la liste des questions de connaissance sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/). Les mises en situation, elles, ne sont pas publiées.",
    },
    { type: "h2", texte: "Que faut-il apporter le jour de l'examen ?", id: "documents" },
    {
      type: "p",
      texte: "Le centre vérifie votre identité avant l'épreuve. L'arrêté cite le titre de séjour en cours de validité. Sans pièce valable, vous ne pouvez pas passer l'examen. Vous avez seulement un récépissé (le papier provisoire remis pendant l'étude d'une demande) ou un visa ? Demandez au centre ce qu'il accepte, avant de payer.",
    },
    {
      type: "p",
      texte: "Le centre prend aussi votre photo : elle figure sur l'attestation de réussite. Notre article sur les [documents à apporter](/articles/documents-test-civique-2026-convocation-piece-identite) détaille ce point.",
    },
    { type: "h2", texte: "Santé, échec, attestation : ce qu'il faut savoir", id: "a-savoir" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Handicap ou santé** : un aménagement de l'épreuve est possible, sur certificat médical ([F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
        "**Échec** : vous pouvez repasser l'examen à tout moment, autant de fois que nécessaire (formation-civique). Lisez notre article sur [ce qu'il faut faire après un échec](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec).",
        "**Fraude** : l'examen est annulé, et vous ne pouvez pas le repasser pendant 2 ans (arrêté du 10 octobre 2025).",
        "**Attestation** : elle n'a pas de durée de validité. Une attestation mention carte de résident vaut aussi pour une carte de séjour pluriannuelle (formation-civique).",
      ],
    },
    { type: "h2", texte: "Dix conseils pour le jour de l'examen", id: "conseils" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Réservez tôt** : les places dépendent des sessions de chaque centre.",
        "**Comparez les deux cartes** : un centre plus loin a parfois une date plus proche.",
        "**Révisez les cinq thèmes** du programme, pas seulement l'histoire.",
        "**Entraînez-vous au QCM** : ce format demande de lire vite et bien.",
        "**Gérez votre temps** : 45 minutes pour 40 questions, soit un peu plus d'une minute par question.",
        "**Arrivez en avance** pour le contrôle d'identité et la photo.",
        "**Prenez une pièce d'identité valable** : sans elle, pas d'examen.",
        "**Lisez chaque question jusqu'au bout** avant de choisir.",
        "**Répondez à tout** : une mauvaise réponse ne retire aucun point.",
        "**Gardez votre attestation** : vous en aurez besoin pour votre demande de titre.",
      ],
    },
    {
      type: "cta",
      texte: "Testez-vous sur 40 questions types, en 45 minutes, avant de réserver votre session.",
      bouton: "Faire un examen blanc",
    },
    { type: "h2", texte: "Où se faire aider ?", id: "aide" },
    {
      type: "p",
      texte: "Une question sur une session, un prix ou un accès ? Le centre d'examen y répond. Une question sur votre situation, par exemple savoir si l'examen vous concerne ? Adressez-vous à la préfecture, ou à une association comme La Cimade. Ces conseils sont gratuits.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La liste officielle des centres, ce sont les deux cartes en ligne : celle de la CCIP et celle de France Éducation International.\nAu 26 mai 2026, 444 centres étaient ouverts. Chaque centre fixe son prix, entre 60 et 80 € selon le ministère. L'examen compte 40 questions, dure 45 minutes au plus, et se réussit avec 32 bonnes réponses.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Où trouver la liste officielle des centres agréés pour l'examen civique ?",
      reponse: "La liste officielle se consulte sur deux cartes en ligne. La première est celle de la CCI Paris Île-de-France (CCIP). La seconde est celle de France Éducation International. Ce sont les deux organismes agréés par le ministère de l'Intérieur. Service-public renvoie vers ces deux outils. Regardez les deux avant de choisir votre centre.",
    },
    {
      question: "Combien de centres agréés pour l'examen civique en France ?",
      reponse: "Au 26 mai 2026, le ministère de l'Intérieur comptait 444 centres d'examen, dans tous les départements. Ce chiffre vient de sa réponse à la question écrite n° 11488, publiée au Journal officiel le 11 août 2026. Le nombre peut changer : seules les cartes de la CCIP et de France Éducation International donnent l'état du jour.",
    },
    {
      question: "Combien coûte l'examen civique dans un centre agréé ?",
      reponse: "Il n'y a pas de prix national. Chaque centre fixe ses droits d'inscription, comme l'indique service-public. Dans sa réponse publiée le 11 août 2026, le ministère de l'Intérieur précise que ce prix va de 60 à 80 € selon les centres. Comparez les prix sur les deux cartes avant de vous inscrire.",
    },
    {
      question: "Combien de temps dure l'examen civique et combien de questions ?",
      reponse: "L'examen compte 40 questions à choix multiples : 28 questions de connaissance et 12 mises en situation. Il dure 45 minutes au plus, sauf aménagement pour raison de santé. Pour réussir, il faut 80 % de bonnes réponses, soit 32 sur 40. Une mauvaise réponse ne retire aucun point. L'épreuve est la même dans tous les centres.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur, formation-civique : informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte des centres agréés de la CCIP (R75389)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R75389",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte des centres agréés de France Éducation International (R75391)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R75391",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère publiée au JO le 11/08/2026",
      url: "https://questions.assemblee-nationale.fr/q17/17-11488QE.htm",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    { slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire", ancre: "S'inscrire à l'examen civique" },
    { slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent", ancre: "Taux de réussite de l'examen civique" },
    { slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture", ancre: "Prix de l'examen civique" },
    { slug: "cadre-general-examen-civique", ancre: "Le programme de l'examen civique" },
  ],
};

export default article;
