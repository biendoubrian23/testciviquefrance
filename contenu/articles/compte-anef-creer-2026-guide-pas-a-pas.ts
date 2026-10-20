import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse. Réécrit le 20/10/2026 au niveau
 * de la doctrine (`docs/seo/ROBOT.md`) et fusionné avec le doublon
 * `ouvrir-compte-anef-2026-etapes-documents-problemes`, dont l'adresse
 * redirige ici en 301 (`next.config.js`).
 *
 * Chaque règle vient de la FAQ officielle de l'ANEF et des fiches
 * service-public, lues le 20/10/2026. Ont été retirés parce qu'aucune source
 * officielle ne les confirme : « 1 utilisateur sur 4 bloqué », les règles de
 * mot de passe (12 caractères), « récupération en 5 à 15 jours », « SMS
 * seulement vers un numéro français », la carte SIM à 2 €, les formats et
 * tailles de fichiers (PDF, 5 Mo, 300 DPI), la photo « Photomaton + ANEF à
 * 5 € », les heures creuses, « attendre 24 à 48 h », la liste des
 * justificatifs de domicile, les horaires du centre de contact, l'adresse
 * « contact-usagers.anef.interieur.gouv.fr » et les guichets ANEF de Paris,
 * Bobigny et Créteil.
 */
const article: Article = {
  slug: "compte-anef-creer-2026-guide-pas-a-pas",
  titre: "Créer son compte ANEF : les étapes officielles, avec un titre ou un visa",
  titreSeo: "Créer un compte ANEF : les étapes officielles",
  resume: "Créer son compte ANEF avec un titre de séjour ou un visa : les 3 étapes officielles, où trouver son numéro étranger, et que faire si ça bloque.",
  chapo: "Pour créer votre compte ANEF, vous cliquez sur « Se connecter », puis vous saisissez votre numéro étranger (ou votre numéro de visa) et les dates de validité de votre document. Ensuite, vous vérifiez votre adresse e-mail. L'ANEF, c'est le site officiel du ministère de l'Intérieur pour les démarches de séjour des étrangers en France.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "créer compte anef",
  motsCles: [
    "créer compte anef",
    "compte anef",
    "anef inscription",
    "créer un compte anef",
    "ouvrir compte anef",
    "creation compte anef",
    "anef premiere connexion",
    "anef numéro étranger",
    "anef compte visa",
    "anef etranger compte",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1200&auto=format&fit=crop",
    alt: "Ordinateur portable ouvert sur un bureau, prêt pour une démarche en ligne",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3",
  },
  blocs: [
    {
      type: "h2",
      texte: "À quoi sert le compte ANEF ?",
      id: "a-quoi-sert-le-compte",
    },
    {
      type: "p",
      texte: "Le compte ANEF est votre espace personnel sur le site [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr/). C'est là que vous faites vos démarches de séjour. Vous y déposez une demande, vous suivez son avancement et vous recevez vos documents.",
    },
    {
      type: "p",
      texte: "La page d'accueil du site propose ces démarches :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "valider son VLS-TS (le visa de long séjour qui vaut titre de séjour la première année).",
        "demander ou renouveler un titre de séjour, la carte qui autorise à vivre en France.",
        "demander un premier titre sans numéro étranger ni visa.",
        "demander la nationalité française.",
        "demander une autorisation de travail.",
        "déclarer un changement de situation, comme un déménagement.",
        "demander un document de voyage.",
        "demander l'asile.",
      ],
    },
    {
      type: "p",
      texte: "Méfiez-vous des copies. Le seul site officiel se termine par **.interieur.gouv.fr**. Notre article sur les [arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) montre comment repérer un faux site.",
    },
    {
      type: "h2",
      texte: "Avez-vous déjà un compte ANEF ?",
      id: "avez-vous-deja-un-compte",
    },
    {
      type: "p",
      texte: "Vérifiez avant d'en créer un. Selon la [FAQ officielle de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq), vous avez déjà un compte si vous avez déjà fait une démarche sur ce site. Votre identifiant dépend de cette démarche :",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Votre identifiant"],
      lignes: [
        ["Vous avez validé votre VLS-TS en ligne", "La « Référence » écrite dans l'e-mail « Confirmation de la validation de l'enregistrement de votre VLS-TS »."],
        ["Vous avez déjà demandé un titre de séjour sur le site", "Votre numéro étranger."],
        ["Vous n'avez jamais fait de démarche sur le site", "Pas encore de compte : suivez les étapes ci-dessous."],
      ],
      legende: "Source : FAQ de l'ANEF, rubrique « Votre demande de titre de séjour », lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Si vous avez un compte mais plus le mot de passe, ne créez pas de nouveau compte. Cliquez sur « Mot de passe oublié ». Un lien de remise à zéro part vers l'adresse e-mail donnée à la création du compte (FAQ de l'ANEF). Si la connexion échoue encore, lisez notre guide [connexion impossible à l'ANEF](/articles/anef-mon-compte-connexion-probleme-solution-2026).",
    },
    {
      type: "h2",
      texte: "Comment créer un compte ANEF avec un titre de séjour ?",
      id: "creer-avec-un-titre",
    },
    {
      type: "p",
      texte: "Ce cas vise les personnes qui ont un titre de séjour, ou un récépissé : c'est le papier provisoire qui prouve qu'une demande de titre est en cours. La création se fait en 3 étapes ([FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq)).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Cliquez sur « Se connecter », en haut à droite. Vous pouvez aussi cliquer sur « Je demande ou renouvelle un titre de séjour » ou « Je déclare un changement de situation ».",
        "Saisissez votre numéro étranger, puis la date de début et la date de fin de validité de votre titre ou de votre récépissé. Cliquez sur « Créer un compte ».",
        "Saisissez votre adresse e-mail et vérifiez-la. Créez ensuite votre mot de passe.",
      ],
    },
    {
      type: "h3",
      texte: "Où trouver votre numéro étranger ?",
    },
    {
      type: "p",
      texte: "Il est au recto de votre titre. Sa place dépend du modèle de carte (FAQ de l'ANEF) :",
    },
    {
      type: "tableau",
      entetes: ["Modèle du titre de séjour", "Place du numéro étranger"],
      lignes: [
        ["Délivré à partir d'octobre 2020", "Au-dessus de votre signature (« numéro personnel »)."],
        ["Délivré avant octobre 2020", "Sur le côté droit, écrit à la verticale."],
        ["Délivré avant juin 2011", "En haut à droite."],
      ],
      legende: "Source : FAQ de l'ANEF, lue le 20/10/2026.",
    },
    {
      type: "h2",
      texte: "Comment créer un compte ANEF avec un visa ?",
      id: "creer-avec-un-visa",
    },
    {
      type: "p",
      texte: "Le début est le même. Vous cliquez sur « Se connecter », puis vous saisissez votre numéro de visa et ses dates de début et de fin de validité. Vous cliquez sur « Créer un compte », puis vous saisissez et vérifiez votre adresse e-mail.",
    },
    {
      type: "p",
      texte: "La suite est différente. Selon la [FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq), votre compte personnel sera créé quand un agent commencera à traiter votre demande. Vous recevrez alors par e-mail votre numéro étranger, qui sera votre identifiant, et un mot de passe provisoire.",
    },
    {
      type: "encadre",
      titre: "Rien reçu après votre première demande ?",
      texte: "C'est prévu. Avec un visa, l'identifiant et le mot de passe n'arrivent qu'au début du traitement par l'administration. Surveillez votre boîte e-mail, et aussi le dossier des courriers indésirables.",
      ton: "ambre",
    },
    {
      type: "p",
      texte: "Si votre visa est un VLS-TS, la première démarche est souvent sa validation en ligne. Notre article [ANEF pour les étudiants étrangers](/articles/anef-etudiant-etranger-2026) détaille ce cas.",
    },
    {
      type: "h2",
      texte: "Que préparer avant de commencer ?",
      id: "que-preparer",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "votre titre de séjour, votre récépissé ou votre visa, pour recopier le numéro et les dates.",
        "une adresse e-mail que vous consultez souvent : c'est là qu'arrivent les messages de l'ANEF.",
        "un endroit sûr pour noter votre identifiant et votre mot de passe.",
      ],
    },
    {
      type: "p",
      texte: "Pour déposer ensuite une demande, il faudra aussi des justificatifs et une e-photo : c'est une photo d'identité numérique avec un code. La liste exacte des pièces s'affiche quand vous commencez votre demande en ligne (FAQ de l'ANEF). Notre guide [déposer et suivre sa demande sur l'ANEF](/articles/guide-anef-complet-2026-creer-compte-deposer-demande) explique cette étape.",
    },
    {
      type: "h2",
      texte: "Que faire si la création du compte bloque ?",
      id: "que-faire-si-ca-bloque",
    },
    {
      type: "p",
      texte: "Commencez par les gestes simples : vérifiez le numéro et les dates recopiés, puis réessayez plus tard ou avec un autre navigateur. Notre article sur les [erreurs courantes de l'ANEF](/articles/anef-erreurs-courantes-2026-page-blanche-session-expiree-500) traite la page blanche et la session expirée. Si vous passez par FranceConnect, lisez aussi [FranceConnect bloqué sur l'ANEF](/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions).",
    },
    {
      type: "p",
      texte: "Si le problème continue, la [FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq) prévoit deux recours :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "le centre de contact citoyens (CCC), au **0 806 001 620**, ou par le formulaire « Nous contacter » du site. Joignez des captures d'écran où l'adresse de la page, la date, l'heure et le message d'erreur sont visibles.",
        "si le CCC n'a pas de solution, votre préfecture de résidence. La préfecture, c'est le service de l'État qui gère les titres de séjour dans votre département. Elle vous dira comment accéder à son point d'accueil numérique (dispositif e-MERAUDE).",
      ],
    },
    {
      type: "p",
      texte: "Le 5 mai 2026, le Conseil d'État l'a rappelé : si la démarche en ligne est impossible, l'administration doit prévoir une aide et une autre solution ([communiqué du Conseil d'État](https://www.conseil-etat.fr/content/download/238995/document/Communique%CC%81%20de%20presse%20-%20ANEF%20-%20web.pdf)). Pour un dossier déjà déposé qui n'avance pas, lisez notre article [dossier ANEF bloqué](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer).",
    },
    {
      type: "p",
      texte: "Pour une question sur votre cas personnel, adressez-vous à la préfecture ou à une association comme La Cimade. Le Défenseur des droits, une autorité indépendante et gratuite, peut aussi être saisi après une démarche auprès de la préfecture ([service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F31969)).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Avec un titre ou un récépissé : numéro étranger, dates de validité, e-mail, mot de passe, et le compte est prêt. Avec un visa : le compte n'est créé qu'au début du traitement de la demande, et les codes arrivent par e-mail. Notez votre numéro étranger : c'est votre identifiant pour toutes vos démarches suivantes.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Comment créer un compte ANEF ?",
      reponse: "Sur le site officiel de l'ANEF, cliquez sur « Se connecter ». Saisissez votre numéro étranger, ou votre numéro de visa, avec les dates de début et de fin de validité du document. Cliquez sur « Créer un compte », vérifiez votre adresse e-mail, puis créez votre mot de passe. Avec un visa, le compte arrive plus tard.",
    },
    {
      question: "Où trouver mon numéro étranger pour l'ANEF ?",
      reponse: "Il figure au recto de votre titre de séjour. Sur les cartes délivrées depuis octobre 2020, il est au-dessus de votre signature (numéro personnel). Avant octobre 2020, il est écrit à la verticale sur le côté droit. Sur les cartes délivrées avant juin 2011, il est en haut à droite.",
    },
    {
      question: "Pourquoi je n'ai pas reçu mon identifiant ANEF ?",
      reponse: "Si vous avez fait une première demande avec un visa, c'est normal. Le compte personnel est créé seulement quand un agent commence à traiter votre demande. Vous recevez alors par e-mail votre numéro étranger, qui sert d'identifiant, et un mot de passe provisoire. Vérifiez aussi le dossier des courriers indésirables de votre messagerie.",
    },
    {
      question: "Comment contacter l'ANEF en cas de problème ?",
      reponse: "Appelez le centre de contact citoyens au 0 806 001 620, ou utilisez le formulaire « Nous contacter » du site. Joignez des captures d'écran avec l'adresse de la page, la date, l'heure et le message d'erreur. Si le problème reste sans solution, demandez à votre préfecture l'accès à son point d'accueil numérique.",
    },
  ],
  sources: [
    {
      titre: "ANEF : FAQ officielle, rubrique « Votre demande de titre de séjour »",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "ANEF : page d'accueil et liste des démarches en ligne",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Conseil d'État : communiqué du 5 mai 2026 sur l'accès à l'ANEF (décision n° 502860)",
      url: "https://www.conseil-etat.fr/content/download/238995/document/Communique%CC%81%20de%20presse%20-%20ANEF%20-%20web.pdf",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : que faire en cas de difficulté lors d'une demande de titre de séjour ? (F31969)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31969",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
