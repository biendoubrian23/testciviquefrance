import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 28/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « résultat examen civique » (100 à 1 k recherches par mois,
 * Planificateur de mots clés, France, French, 28/10/2026), avec
 * « attestation de réussite examen civique » (10 à 100) et la suggestion
 * « quand resultat examen civique » (veille du 28/10/2026). Famille examen
 * civique. Sources lues le 28/10/2026 : France Éducation international (page
 * candidats et manuel du candidat, version B de septembre 2026) ; CCI Paris
 * Île-de-France (pages « Obtenir son attestation » et « Comprendre ses
 * résultats ») ; arrêté du 10/10/2025 ; formation-civique.interieur.gouv.fr ;
 * service-public F39530 ; réponse ministérielle à la question écrite n° 11488.
 */
const article: Article = {
  slug: "resultat-examen-civique",
  titre: "Résultat de l'examen civique : sous 12 h ou 48 h selon l'organisme, et que faire de votre attestation",
  titreSeo: "Résultat examen civique : quand et où le trouver",
  resume: "Résultat de l'examen civique : le délai chez FEI et à la CCI Paris, où télécharger l'attestation, ce qu'elle contient et que faire en cas d'échec.",
  chapo: "Le résultat de l'examen civique arrive vite : ==12 heures== après l'épreuve chez France Éducation international, ==24 à 48 heures ouvrées== à la CCI Paris Île-de-France. Dans les deux cas, vous le recevez en ligne, sous la forme d'une attestation à télécharger. Voici où la trouver, comment la lire et quoi en faire.",
  publieLe: "2026-10-28",
  modifieLe: "2026-10-28",
  minutes: 7,
  theme: "résultat examen civique",
  motsCles: [
    "résultat examen civique",
    "quand résultat examen civique",
    "attestation de réussite examen civique",
    "attestation examen civique",
    "examen civique résultat délai",
    "télécharger attestation examen civique",
    "examen civique échec repasser",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/resultat-examen-civique.webp",
    alt: "Salle informatique vide, des écrans alignés face à une grande baie vitrée",
    largeur: 1024,
    hauteur: 768,
    credit: "quatro.sinko, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/93932066@N00/468370932",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quand recevez-vous le résultat de l'examen civique ?",
    },
    {
      type: "p",
      texte: "Le délai dépend de l'organisme qui a fait passer votre examen. Deux organismes sont agréés par le ministère de l'Intérieur : **France Éducation international** (FEI), un établissement public, et la **CCI Paris Île-de-France** (CCIP), la chambre de commerce et d'industrie ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Chaque centre d'examen dépend de l'un ou de l'autre. En cas de doute, demandez-le à votre centre.",
    },
    {
      type: "tableau",
      entetes: ["Organisme", "Délai annoncé", "Où arrive le résultat"],
      lignes: [
        ["France Éducation international (FEI)", "12 heures après l'épreuve", "Sur votre compte candidat, onglet « Attestations »"],
        ["CCI Paris Île-de-France (CCIP)", "24 à 48 heures ouvrées après l'épreuve", "Par courriel, avec un lien vers un coffre-fort numérique"],
      ],
      legende: "Sources : France Éducation international (page candidats et manuel du candidat, version B, septembre 2026) et CCI Paris Île-de-France, lus le 28/10/2026.",
    },
    {
      type: "p",
      texte: "« Ouvrées » veut dire que les samedis, les dimanches et les jours fériés ne comptent pas. Un examen passé à la CCIP un vendredi peut donc donner un résultat le mardi suivant. Le résultat n'est pas affiché dans la salle : vous repartez sans connaître votre score.",
    },
    {
      type: "h2",
      texte: "Où trouver votre attestation ?",
    },
    {
      type: "p",
      texte: "Il n'y a ==pas d'attestation papier==. Vous la recevez en ligne, au format PDF.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Chez FEI** : connectez-vous au compte candidat créé lors de votre inscription. Ouvrez l'onglet « Attestations », puis cliquez sur « Télécharger l'attestation » ([manuel du candidat FEI](https://www.france-education-international.fr/document/manuelcandidatexamencivique), page 20).",
        "**Chez la CCIP** : ouvrez le courriel qui annonce vos résultats. Il contient un lien vers un coffre-fort numérique, un espace sécurisé en ligne. Téléchargez l'attestation depuis cet espace ([CCI Paris Île-de-France](https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/attestation/)).",
        "**Rien reçu ?** Regardez d'abord dans vos courriels indésirables (les spams). Ensuite, appelez votre centre d'examen : c'est lui qui est informé en premier quand les résultats sont prêts (CCI Paris Île-de-France).",
      ],
    },
    {
      type: "p",
      texte: "Gardez une copie de l'attestation sur votre ordinateur et dans votre messagerie. La CCIP indique qu'elle la conserve 10 ans, pas davantage. Vous ne savez plus quels papiers vous aviez apportés le jour J ? Notre article sur [les documents de l'examen](/articles/documents-test-civique-2026-convocation-piece-identite) fait le point.",
    },
    {
      type: "image",
      src: "/images/articles/resultat-examen-civique.webp",
      alt: "Rangées d'ordinateurs dans une salle sans personne, devant une vitre qui donne sur l'eau",
      legende: "L'examen se passe sur ordinateur ou sur tablette, et le résultat arrive en ligne.",
      credit: "quatro.sinko, via Flickr",
      licence: "CC BY 2.0",
      source: "https://www.flickr.com/photos/93932066@N00/468370932",
      largeur: 1024,
      hauteur: 768,
    },
    {
      type: "h2",
      texte: "Comment lire votre attestation ?",
    },
    {
      type: "p",
      texte: "Le manuel du candidat de FEI montre un modèle d'attestation, avec chaque partie expliquée (annexe 5, page 35). Vous y trouvez :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La mention** : « carte de séjour pluriannuelle », « carte de résident » ou « naturalisation ». C'est le type d'examen que vous avez passé ([arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 1).",
        "**Votre identité** : nom, prénom, date et lieu de naissance, et votre numéro AGDREF. Ce numéro est votre identifiant d'étranger : il figure sur votre titre de séjour.",
        "**Votre photo**, prise par le centre juste avant l'épreuve (arrêté du 10 octobre 2025, annexe II).",
        "**La date de passage, le centre et le numéro de l'attestation.**",
        "**Le score sur 40** et le mot « Réussi » quand vous avez au moins ==32 bonnes réponses==.",
        "**Un QR code**, un petit carré à scanner avec un téléphone. Il permet à l'administration de vérifier que l'attestation est authentique.",
      ],
    },
    {
      type: "p",
      texte: "Le score se compte simplement : 1 point par bonne réponse, 0 point pour une erreur ou une question sans réponse (arrêté du 10 octobre 2025, article 3). Une réponse au hasard ne vous fait donc rien perdre.",
    },
    {
      type: "h2",
      texte: "Que faire de l'attestation de réussite ?",
    },
    {
      type: "p",
      texte: "Elle sert de preuve dans votre démarche. Elle ==n'a pas de durée de validité== : vous pouvez l'utiliser tout de suite ou plus tard ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Pour une carte de séjour pluriannuelle ou une carte de résident** : vous joignez l'attestation à votre demande sur l'ANEF. L'ANEF est le site du ministère de l'Intérieur où se font les demandes de titre de séjour en ligne. Notre guide pour [créer votre compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) vous accompagne.",
        "**Une attestation « carte de résident » vaut aussi pour la carte pluriannuelle.** L'inverse ne marche pas (formation-civique.interieur.gouv.fr). Notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) compare les deux.",
        "**Pour la naturalisation** : l'attestation mention « naturalisation » est une pièce du dossier. Il faut donc l'avoir avant de déposer la demande. Lisez notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation).",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Ne modifiez jamais une attestation.** Une attestation falsifiée est annulée par FEI, et des sanctions peuvent suivre (manuel du candidat, page 25).",
        "**La préfecture voit vos résultats.** Les agents qui étudient les dossiers ont accès aux résultats obtenus par les candidats (même page). La préfecture, c'est l'administration de l'État dans votre département.",
        "**Test Civique France ne délivre pas d'attestation.** Le site que vous lisez est une plateforme de préparation, pas un centre d'examen.",
      ],
    },
    {
      type: "h2",
      texte: "Et si votre score est sous 32 ?",
    },
    {
      type: "p",
      texte: "Un échec n'est pas définitif. Le ministère de l'Intérieur indique qu'on peut repasser l'examen « autant de fois que nécessaire » ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Il faut seulement attendre ==24 heures== entre deux passages : FEI et la CCIP le disent tous les deux. Chez FEI, la nouvelle inscription se fait depuis votre compte candidat, onglet « Profil », puis « Nouvelle inscription ».",
    },
    {
      type: "p",
      texte: "Chaque passage se paie. Le prix est fixé par le centre, de ==60 à 80 €== selon le ministère (même réponse). Avant de payer à nouveau, regardez où vous avez perdu des points. Deux thématiques pèsent lourd : les principes et valeurs de la République, et les droits et devoirs. Elles comptent 22 questions sur 40 (arrêté du 10 octobre 2025). Notre article sur [ce qu'il faut faire après un échec](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec) détaille la marche à suivre.",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Quelle est la devise de la République française ?",
      choix: [
        "Travail, Famille, Patrie",
        "Liberté, Égalité, Fraternité",
        "Unité, Progrès, Justice",
        "Paix, Travail, Patrie",
      ],
      reponse: 1,
      explication: "La devise « Liberté, Égalité, Fraternité » est écrite à l'article 2 de la Constitution. La devise et les symboles de la République font l'objet de 3 questions à chaque examen, selon l'arrêté du 10 octobre 2025. Ceci est une question type, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Avant de vous réinscrire, testez-vous sur 40 questions types, mises en situation comprises, et voyez quelle thématique vous coûte des points.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "encadre",
      titre: "Votre titre de séjour arrive à expiration ?",
      texte: "Le délai de 24 heures entre deux passages est court. Le vrai délai, c'est souvent la prochaine date libre dans un centre. Si votre titre expire bientôt, renseignez-vous tôt sur les dates de session, et pour votre situation personnelle, adressez-vous à votre préfecture ou à une association d'aide aux étrangers. Notre article sur [les centres agréés](/articles/centres-agrees-examen-civique-2026) vous aide à trouver un centre.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quand ai-je le résultat de l'examen civique ?",
      reponse: "Cela dépend de l'organisme. France Éducation international met l'attestation sur votre compte candidat 12 heures après l'épreuve. La CCI Paris Île-de-France envoie les résultats par courriel sous 24 à 48 heures ouvrées. Le résultat n'est pas donné dans la salle. Sans nouvelles, vérifiez vos spams puis appelez votre centre d'examen.",
    },
    {
      question: "Comment télécharger l'attestation de l'examen civique ?",
      reponse: "Chez France Éducation international, connectez-vous à votre compte candidat, ouvrez l'onglet « Attestations » et cliquez sur « Télécharger l'attestation ». À la CCI Paris Île-de-France, suivez le lien du courriel de résultats vers le coffre-fort numérique. L'attestation est un PDF ; il n'y a pas de version papier. Gardez-en plusieurs copies.",
    },
    {
      question: "Combien de temps est valable l'attestation de l'examen civique ?",
      reponse: "L'attestation de réussite n'a pas de durée de validité, selon service-public et le ministère de l'Intérieur. Vous pouvez la déposer tout de suite ou plus tard. Une attestation avec la mention « carte de résident » vaut aussi pour une carte de séjour pluriannuelle, mais pas l'inverse. Pour la naturalisation, il faut la mention « naturalisation ».",
    },
    {
      question: "Peut-on repasser l'examen civique après un échec ?",
      reponse: "Oui, autant de fois que nécessaire, selon le ministère de l'Intérieur. Il faut attendre 24 heures entre deux passages. Chaque passage se paie, de 60 à 80 € selon le centre. Chez France Éducation international, la nouvelle inscription se fait depuis votre compte candidat, dans l'onglet « Profil ».",
    },
  ],
  sources: [
    {
      titre: "France Éducation international : examen civique, informations pour les candidats (résultats sous 12 heures, attestation à durée illimitée)",
      url: "https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "France Éducation international : manuel du candidat à l'examen civique, version B, septembre 2026 (résultats p. 20, réinscriptions p. 21, sanctions et accès des préfectures p. 25, lecture de l'attestation p. 35)",
      url: "https://www.france-education-international.fr/document/manuelcandidatexamencivique",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "CCI Paris Île-de-France (Le français des affaires) : examen civique, obtenir son attestation",
      url: "https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/attestation/",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "CCI Paris Île-de-France (Le français des affaires) : examen civique, comprendre ses résultats",
      url: "https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/resultats/",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (formation-civique.interieur.gouv.fr)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530, vérifiée le 10/02/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
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
