import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 24/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « décret de naturalisation » (1 k à 10 k recherches par
 * mois, Planificateur de mots clés, France, 24/10/2026), avec « décret
 * naturalisation journal officiel », « cérémonie de naturalisation » et
 * « acte de naissance naturalisation » (100 à 1 k chacune). Famille des guides
 * permanents. Sources lues le 24/10/2026 : service-public F2213, F33626
 * (vérifiée le 23/10/2026), F15868, F1427, F1341, F1367, et le Code civil,
 * article 21-28, sur Légifrance.
 */
const article: Article = {
  slug: "decret-de-naturalisation-trouver-et-apres",
  titre: "Décret de naturalisation : comment savoir si votre nom y est, et que faire ensuite ?",
  titreSeo: "Décret de naturalisation : le trouver, et après",
  resume: "Décret de naturalisation : comment le trouver au Journal officiel, quand vous devenez français, et les démarches qui suivent (cérémonie, papiers).",
  chapo: "Vous êtes prévenu par l'administration quand votre nom paraît dans un ==décret de naturalisation== publié au Journal officiel. Pour télécharger ce décret, il vous faut sa date de publication : depuis février 2023, elle figure dans votre compte ANEF. Voici comment le trouver, et les démarches à faire ensuite, d'après les sources officielles.",
  publieLe: "2026-10-24",
  modifieLe: "2026-10-24",
  minutes: 7,
  theme: "décret de naturalisation",
  motsCles: [
    "décret de naturalisation",
    "décret naturalisation journal officiel",
    "trouver son décret de naturalisation",
    "après décret de naturalisation",
    "cérémonie de naturalisation",
    "acte de naissance naturalisation",
    "carte d'identité après naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/decret-de-naturalisation-avignon.webp",
    alt: "Façade en pierre de l'hôtel de ville d'Avignon, avec des drapeaux français aux fenêtres",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5818917417",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce qu'un décret de naturalisation ?",
    },
    {
      type: "p",
      texte: "La naturalisation, c'est la décision de l'État qui donne la nationalité française à une personne étrangère qui l'a demandée. Cette décision prend la forme d'un **décret** : un texte signé par le gouvernement. Il est ensuite publié au **Journal officiel**, le journal où l'État publie ses lois et ses décisions.",
    },
    {
      type: "p",
      texte: "Un même décret contient souvent les noms de nombreuses personnes. Vos enfants mineurs peuvent y figurer avec vous. Ils deviennent français si leur nom est écrit dans le décret ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Notre article sur [l'effet collectif pour les enfants](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration) détaille les conditions.",
    },
    {
      type: "encadre",
      titre: "La date à retenir",
      texte: "Selon service-public, le décret de naturalisation ==prend effet à la date de sa signature== ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). L'âge de vos enfants est aussi regardé à cette date : un enfant doit être mineur le jour de la signature.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Comment savoir si votre nom est dans le décret ?",
    },
    {
      type: "p",
      texte: "Vous n'avez pas à lire le Journal officiel chaque jour. Si vous vivez en France, vous êtes prévenu **par mail** après la publication de votre décret. Si vous n'avez pas donné d'adresse mail dans votre dossier, vous recevez un **courrier** ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Si vous vivez à l'étranger, vous recevez un courrier.",
    },
    {
      type: "p",
      texte: "Si vous avez déposé votre demande en ligne, regardez aussi votre compte sur l'**ANEF**. L'ANEF, c'est le site officiel du ministère de l'Intérieur pour les démarches des étrangers. Depuis le 1er février 2023, la date de publication de votre décret y figure ([service-public, F33626](https://www.service-public.gouv.fr/particuliers/vosdroits/F33626)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne payez jamais un site privé qui promet de « chercher votre nom » dans le Journal officiel : la démarche officielle est gratuite.",
        "Un mail qui vous demande de l'argent ou vos codes ANEF pour « débloquer » votre décret est une arnaque. Notre page sur les [arnaques visant les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) en décrit d'autres.",
      ],
    },
    {
      type: "h2",
      texte: "Comment télécharger votre décret au Journal officiel ?",
    },
    {
      type: "p",
      texte: "**Légifrance** est le site officiel qui publie le droit français et le Journal officiel. Les décrets de naturalisation y sont, depuis 1924. Mais il faut connaître la ==date de publication== au Journal officiel : on ne cherche pas par son nom ([service-public, F33626](https://www.service-public.gouv.fr/particuliers/vosdroits/F33626)).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Trouvez la date de publication : dans votre compte ANEF depuis février 2023, ou sur l'ampliation pour un décret plus ancien. L'ampliation, c'est la copie officielle du décret envoyée par courrier ou par mail.",
        "Sur [Légifrance](https://www.legifrance.gouv.fr), entrez cette date dans l'encart « Rechercher un JO ».",
        "Pour un décret publié en 2016 ou après, cliquez sur « Extrait du Journal officiel contenant les informations nominatives (accès protégé) ».",
        "Répondez au test de sécurité, puis cliquez sur « Consulter le document ». Enregistrez le fichier.",
      ],
    },
    {
      type: "p",
      texte: "Pour un décret publié depuis 2004, le document téléchargé a une valeur officielle : aucune copie certifiée n'est nécessaire ([F33626](https://www.service-public.gouv.fr/particuliers/vosdroits/F33626)). Vous avez perdu la date d'un décret d'avant février 2023 ? Demandez-la au ministère de l'Intérieur. Service-public donne l'adresse mail : sdanf-brupi-communications@interieur.gouv.fr.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la cérémonie d'accueil dans la citoyenneté ?",
    },
    {
      type: "p",
      texte: "C'est une réunion organisée par le **préfet**, le représentant de l'État dans votre département. Le Code civil prévoit qu'elle a lieu dans un délai de ==six mois== après l'acquisition de la nationalité ([article 21-28](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165461)). Les députés et sénateurs du département y sont invités.",
    },
    {
      type: "p",
      texte: "On vous y remet un dossier d'accueil. Il contient une lettre du président de la République et la charte des droits et devoirs du citoyen français. Il contient aussi la Déclaration des droits de l'homme et du citoyen de 1789, des extraits de la Constitution et l'hymne national. Selon la préfecture, on peut aussi vous remettre vos actes d'état civil ([service-public, F15868](https://www.service-public.gouv.fr/particuliers/vosdroits/F15868)).",
    },
    {
      type: "p",
      texte: "Si vous êtes salarié, vous pouvez prendre au moins une demi-journée pour y aller, sans perdre de congés payés. Votre conjoint aussi ([F15868](https://www.service-public.gouv.fr/particuliers/vosdroits/F15868)). Pour une question sur votre invitation, le Centre de contact citoyens Nationalité française répond au 0806 001 620, du lundi au vendredi de 9 h à 17 h.",
    },
    {
      type: "qcm",
      thematique: "Histoire, géographie et culture",
      question: "Quel texte de 1789, remis lors de la cérémonie d'accueil, proclame les droits de chaque personne ?",
      choix: [
        "Le Code civil",
        "La Déclaration des droits de l'homme et du citoyen",
        "La Constitution de la Ve République",
        "La charte des droits et devoirs du citoyen français",
      ],
      reponse: 1,
      explication: "La Déclaration des droits de l'homme et du citoyen date du 26 août 1789. Le Code civil date de 1804, la Constitution de la Ve République de 1958. La charte des droits et devoirs du citoyen français est un texte plus récent, lui aussi remis pendant la cérémonie.",
    },
    {
      type: "h2",
      texte: "Comment obtenir votre acte de naissance français ?",
    },
    {
      type: "p",
      texte: "Si vous êtes né à l'étranger, votre acte de naissance français est tenu par le **Service central d'état civil** (SCEC), à Nantes. C'est le service du ministère des Affaires étrangères qui garde l'état civil des Français nés hors de France. Il ne reçoit pas de public ([service-public, F1427](https://www.service-public.gouv.fr/particuliers/vosdroits/F1427)).",
    },
    {
      type: "p",
      texte: "Vous pouvez demander une copie en ligne, avec le [service officiel de service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/R1405), ou par courrier. ==La demande est gratuite.== Par courrier, la réponse prend environ 30 jours. Si vous voyez une erreur sur votre acte, écrivez au ministère de l'Europe et des Affaires étrangères ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
    },
    {
      type: "h2",
      texte: "Quelles démarches faire une fois français ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**La carte d'identité et le passeport.** Vous pouvez les demander dès que vous êtes français, pour vous et pour vos enfants devenus français avec vous ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). La carte d'identité est gratuite. Vous pouvez la demander dans n'importe quelle mairie équipée, souvent sur rendez-vous ([F1341](https://www.service-public.gouv.fr/particuliers/vosdroits/F1341)).",
        "**Le recensement.** Le recensement, c'est l'inscription obligatoire des jeunes Français à la mairie, pour la journée défense et citoyenneté. Un jeune devenu français entre 16 et 25 ans doit se faire recenser dans le mois qui suit ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
        "**Les listes électorales.** Une personne devenue française depuis 2019 est inscrite automatiquement ([F1367](https://www.service-public.gouv.fr/particuliers/vosdroits/F1367)). Vérifiez votre inscription avant une élection : notre [guide du droit de vote](/articles/droit-de-vote-elections-france-2026-guide-citoyen) explique comment.",
        "**Votre autre nationalité.** La France accepte la double nationalité, mais certains pays retirent la leur. Lisez notre article sur [la double nationalité](/articles/double-nationalite-france-2026-pays-interdisent-risques-declaration) avant toute démarche auprès de votre consulat.",
      ],
    },
    {
      type: "h2",
      texte: "Et si la réponse est un refus ou un ajournement ?",
    },
    {
      type: "p",
      texte: "Un ajournement, c'est une décision qui reporte votre naturalisation à plus tard, avec un délai fixé. Contre un refus ou un ajournement, vous avez ==2 mois== après la notification pour un recours administratif auprès du ministre chargé des naturalisations. Si vous avez déposé en ligne, faites ce recours avec le formulaire de votre espace ANEF ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
    },
    {
      type: "p",
      texte: "Si la réponse reste négative, ou sans réponse après 4 mois, vous avez 2 mois pour saisir le tribunal administratif de Nantes (le juge des litiges avec l'administration). Pour votre cas précis, demandez conseil à un avocat ou à une association d'aide aux étrangers. Notre article sur [le refus de naturalisation](/articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours) détaille ces recours.",
    },
    {
      type: "encadre",
      titre: "Un proche prépare sa demande ?",
      texte: "Pour être naturalisé, il faut aujourd'hui réussir l'examen civique ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). Le plus utile pour lui : commencer tôt. Notre [guide complet de la naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet) reprend toutes les étapes, et la [page d'éligibilité](/eligibilite-examen-civique) dit en une minute si l'examen le concerne.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Comment savoir si je suis sur le décret de naturalisation ?",
      reponse: "Si vous vivez en France, l'administration vous prévient par mail après la publication du décret au Journal officiel, ou par courrier si vous n'avez pas donné de mail. Si votre demande a été faite en ligne, la date de publication figure aussi dans votre compte ANEF depuis le 1er février 2023.",
    },
    {
      question: "Comment trouver son décret de naturalisation au Journal officiel ?",
      reponse: "Il faut connaître la date de publication du décret. Sur Légifrance, entrez cette date dans l'encart « Rechercher un JO ». Pour un décret de 2016 ou après, choisissez l'extrait contenant les informations nominatives, en accès protégé, répondez au test de sécurité, puis consultez et enregistrez le document.",
    },
    {
      question: "Quand devient-on français après le décret de naturalisation ?",
      reponse: "Selon service-public, le décret de naturalisation prend effet à la date de sa signature. Vous n'avez pas besoin d'attendre la cérémonie d'accueil pour demander votre carte d'identité ou votre passeport. L'âge de vos enfants mineurs est aussi apprécié à la date de signature du décret.",
    },
    {
      question: "Combien de temps après le décret a lieu la cérémonie de naturalisation ?",
      reponse: "Le Code civil prévoit que le préfet organise la cérémonie d'accueil dans la citoyenneté française dans un délai de six mois après l'acquisition de la nationalité. Service-public précise que ce délai est « en principe » respecté. Pour toute question sur votre invitation, contactez votre préfecture ou le 0806 001 620.",
    },
  ],
  sources: [
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : comment trouver son décret de naturalisation publié au Journal officiel ? (F33626)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33626",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : qu'est-ce que la cérémonie d'accueil dans la citoyenneté française ? (F15868)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15868",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Légifrance : Code civil, articles 21-28 et 21-29 (cérémonie d'accueil dans la citoyenneté française)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165461",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : acte de naissance, comment l'obtenir ? (F1427)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1427",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : carte d'identité d'un majeur, première demande (F1341)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1341",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : inscription sur les listes électorales (F1367)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1367",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-24",
    },
  ],
};

export default article;
