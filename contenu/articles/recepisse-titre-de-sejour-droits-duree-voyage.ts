import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-recepisse-anef.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/recepisse-titre-de-sejour-droits-duree-voyage`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "recepisse-titre-de-sejour-droits-duree-voyage",
  titre: "Récépissé de titre de séjour 2026 : droits, durée, voyage et renouvellement",
  titreSeo: "Récépissé de titre de séjour 2026 : droits, durée, voyage et renouvellement",
  resume: "Tout sur le récépissé de titre de séjour : durée 4-6 mois, droit au travail, voyage, démarches de renouvellement et que faire si votre récépissé expire.",
  chapo: "Le récépissé de titre de séjour est un document provisoire que la préfecture vous délivre lorsque votre demande de titre de séjour est en cours d'instruction. Ce document, souvent mal compris, soulève de nombreuses questions : quels sont vos droits avec un récépissé ? Combien de temps est-il valable ? Pouvez-vous voyager avec ? Pouvez-vous travailler ?",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 13,
  theme: "récépissé titre de séjour",
  motsCles: [
    "récépissé titre de séjour",
    "récépissé droits travail",
    "récépissé voyage étranger",
    "durée validité récépissé",
    "renouveler récépissé préfecture",
    "travailler avec récépissé",
    "voyager avec récépissé",
    "récépissé banque logement",
    "récépissé ANEF numérique",
    "récépissé gratuit préfecture",
    "récépissé expiré que faire",
    "visa de retour récépissé",
    "droits récépissé titre séjour",
    "attestation prolongation instruction",
    "récépissé CAF CPAM",
    "employeur récépissé étranger",
    "récépissé première demande",
    "récépissé renouvellement titre",
    "document provisoire séjour France",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "p",
      texte: "En 2026, avec l'augmentation des délais de traitement dans certaines préfectures, le récépissé joue un rôle essentiel pour les étrangers en France. C'est votre preuve légale de séjour régulier pendant que la préfecture examine votre dossier. Sans comprendre ses limites et ses droits, vous risquez de vous retrouver en difficulté.",
    },
    {
      type: "p",
      texte: "Ce guide complet sur le récépissé de titre de séjour répond à toutes vos questions : définition, durée de validité, droits au travail, possibilités de voyage, renouvellement, et que faire si votre récépissé expire avant la décision de la préfecture.",
    },
    { type: "h2", texte: "Qu'est-ce qu'un récépissé de titre de séjour ?", id: "definition-recepisse" },
    { type: "p", texte: "Le récépissé est un document officiel délivré par la préfecture :" },
    { type: "p", texte: "**Définition juridique :**" },
    {
      type: "p",
      texte: "Le récépissé est un document provisoire qui atteste que vous avez déposé une demande de titre de séjour et que votre dossier est en cours d'instruction. Il vous autorise à séjourner en France en situation régulière pendant la durée de son examen.",
    },
    { type: "p", texte: "**Ce que le récépissé EST :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une preuve de dépôt de votre demande",
        "Une autorisation de séjour temporaire",
        "Un document officiel avec une date de validité",
        "Parfois, une autorisation de travailler (selon la mention)",
      ],
    },
    { type: "p", texte: "**Ce que le récépissé N'EST PAS :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un titre de séjour définitif",
        "Une garantie d'obtention du titre demandé",
        "Un document de voyage international (sauf exceptions)",
        "Une carte d'identité",
      ],
    },
    { type: "p", texte: "**Les différents types de récépissés :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Récépissé de première demande de titre de séjour",
        "Récépissé de renouvellement de titre de séjour",
        "Récépissé de demande de changement de statut",
        "Récépissé de demande de carte de résident",
        "Attestation de prolongation d'instruction (quand le récépissé est renouvelé)",
      ],
    },
    { type: "p", texte: "**Format :**" },
    {
      type: "p",
      texte: "Le récépissé se présente sous la forme d'un document A4 avec votre photo, vos informations personnelles, les dates de validité et la mention du type de titre demandé.",
    },
    { type: "h2", texte: "Durée de validité du récépissé", id: "duree-validite" },
    { type: "p", texte: "La durée de validité du récépissé varie selon le type de demande :" },
    { type: "p", texte: "**Première demande de titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Durée : 4 à 6 mois généralement", "Renouvelable si l'instruction n'est pas terminée"],
    },
    { type: "p", texte: "**Renouvellement de titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Durée : 3 à 6 mois", "Renouvelable tant que l'instruction est en cours"],
    },
    { type: "p", texte: "**Changement de statut :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Durée : 4 à 6 mois", "Renouvelable si nécessaire"],
    },
    { type: "p", texte: "**Demande de carte de résident :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Durée : 3 à 6 mois", "Renouvelable"],
    },
    { type: "p", texte: "**Que se passe-t-il à l'expiration ?**" },
    {
      type: "p",
      texte: "Si votre récépissé expire et que la préfecture n'a pas encore rendu sa décision :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vous pouvez demander un renouvellement du récépissé",
        "La préfecture est tenue de vous délivrer un nouveau récépissé tant que votre demande est en cours",
        "L'absence de décision dans un délai de 4 mois vaut acceptation tacite (dans certains cas)",
      ],
    },
    { type: "p", texte: "**Important :**" },
    {
      type: "p",
      texte: "Ne vous retrouvez JAMAIS sans récépissé valide. Si votre récépissé arrive à expiration, prenez rendez-vous avec la préfecture AVANT la date d'expiration pour le faire renouveler. Être sans récépissé valide peut être assimilé à un séjour irrégulier.",
    },
    { type: "h2", texte: "Travailler avec un récépissé : ce qui est autorisé", id: "droits-travail" },
    {
      type: "p",
      texte: "Le droit de travailler avec un récépissé dépend de la mention inscrite dessus :",
    },
    { type: "p", texte: "**Récépissé avec mention \"autorise son titulaire à travailler\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez travailler à temps plein",
        "Votre employeur peut vérifier la validité du récépissé auprès de la préfecture",
        "Vous avez les mêmes droits qu'un salarié avec un titre de séjour classique",
      ],
    },
    { type: "p", texte: "**Récépissé SANS mention de travail :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous NE pouvez PAS travailler",
        "Travailler sans autorisation est une infraction pénale",
        "L'employeur qui vous embauche s'expose aussi à des sanctions",
      ],
    },
    { type: "p", texte: "**Qui obtient un récépissé autorisant le travail :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Renouvellement d'un titre \"salarié\" ou \"vie privée et familiale\" → OUI",
        "Renouvellement d'un titre \"étudiant\" → OUI (dans la limite de 964h/an)",
        "Première demande de titre \"salarié\" → OUI (si autorisation de travail accordée)",
        "Changement de statut étudiant → salarié → dépend (souvent OUI si CERFA déposé)",
        "Demande d'asile → OUI, après 6 mois si pas de décision OFPRA",
      ],
    },
    { type: "p", texte: "**Que faire si votre récépissé ne mentionne pas le travail :**" },
    { type: "p", texte: "Si vous estimez avoir droit à travailler, vous pouvez :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demander à la préfecture de rectifier la mention",
        "Faire un recours si vous estimez que c'est une erreur",
        "Attendre la délivrance du titre de séjour définitif",
      ],
    },
    { type: "p", texte: "**Pour l'employeur :**" },
    {
      type: "p",
      texte: "L'employeur doit vérifier la mention du récépissé et sa validité avant de vous embaucher. Il peut contacter la préfecture pour confirmation.",
    },
    {
      type: "h2",
      texte: "Peut-on voyager avec un récépissé de titre de séjour ?",
      id: "voyage-recepisse",
    },
    {
      type: "p",
      texte: "La question du voyage avec un récépissé est complexe et source de nombreux problèmes :",
    },
    { type: "p", texte: "**Voyage en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récépissé est valable sur tout le territoire français",
        "Vous pouvez vous déplacer librement en France métropolitaine",
        "Présentez-le en cas de contrôle d'identité",
      ],
    },
    { type: "p", texte: "**Voyage dans l'espace Schengen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récépissé n'est PAS un document de voyage reconnu dans l'espace Schengen",
        "Théoriquement, vous ne pouvez pas voyager dans un autre pays Schengen avec un simple récépissé",
        "En pratique, certains pays acceptent le récépissé + passeport, mais c'est risqué",
        "Risque : être refoulé à la frontière ou ne pas pouvoir revenir en France",
      ],
    },
    { type: "p", texte: "**Voyage hors Schengen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récépissé ne remplace PAS un visa",
        "Si vous quittez l'espace Schengen, vous aurez besoin d'un visa de retour pour revenir en France",
        "Demandez un visa de retour à la préfecture AVANT votre départ",
      ],
    },
    { type: "p", texte: "**Le visa de retour :**" },
    { type: "p", texte: "Si vous devez voyager alors que vous n'avez qu'un récépissé :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demandez un \"visa de retour\" à la préfecture",
        "Ce document vous autorise à revenir en France après un voyage à l'étranger",
        "Délai d'obtention : 1-2 semaines",
        "Valable uniquement pour le voyage prévu",
      ],
    },
    { type: "p", texte: "**Notre conseil :**" },
    {
      type: "p",
      texte: "Évitez de voyager à l'étranger tant que vous n'avez pas votre titre de séjour définitif. Si le voyage est indispensable, demandez impérativement un visa de retour. Ne prenez aucun risque : un retour en France refusé à la frontière peut avoir des conséquences graves sur votre dossier.",
    },
    {
      type: "h2",
      texte: "Le récépissé dans la vie quotidienne : banque, logement, travail",
      id: "recepisse-vie-quotidienne",
    },
    { type: "p", texte: "Le récépissé impacte de nombreux aspects de votre vie quotidienne :" },
    { type: "p", texte: "**Ouverture de compte bancaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La plupart des banques acceptent le récépissé pour un compte existant",
        "Pour ouvrir un nouveau compte, certaines banques exigent un titre de séjour définitif",
        "Droit au compte bancaire : si une banque refuse, saisissez la Banque de France pour exercer votre droit au compte",
      ],
    },
    { type: "p", texte: "**Location d'un logement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les propriétaires peuvent être réticents face à un récépissé",
        "C'est une forme de discrimination : le récépissé prouve votre séjour régulier",
        "Proposez des garanties supplémentaires (garant, dépôt de garantie renforcé)",
        "Un bailleur ne peut pas légalement vous refuser uniquement à cause du récépissé",
      ],
    },
    { type: "p", texte: "**Prestations sociales (CAF, CPAM) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La CAF accepte le récépissé pour le maintien de vos droits",
        "La CPAM (Assurance maladie) accepte le récépissé",
        "Vos droits sociaux sont maintenus pendant la validité du récépissé",
        "Si vous perdez des droits à cause d'un récépissé, contestez immédiatement",
      ],
    },
    { type: "p", texte: "**Permis de conduire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récépissé ne permet pas de demander un nouveau permis",
        "Si vous avez déjà un permis, il reste valable",
        "L'échange de permis étranger peut être bloqué pendant la période de récépissé",
      ],
    },
    { type: "p", texte: "**Inscription à France Travail :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possible avec un récépissé portant la mention \"autorise son titulaire à travailler\"",
        "Vous avez accès aux offres d'emploi et aux formations",
      ],
    },
    { type: "h2", texte: "Comment renouveler son récépissé", id: "renouvellement-recepisse" },
    {
      type: "p",
      texte: "Si l'instruction de votre demande n'est pas terminée à l'expiration du récépissé :",
    },
    { type: "p", texte: "**La règle :**" },
    {
      type: "p",
      texte: "La préfecture est tenue de vous délivrer un nouveau récépissé tant que votre demande est en cours d'instruction. Le refus de renouveler un récépissé est illégal si aucune décision n'a été prise sur votre demande.",
    },
    { type: "p", texte: "**Procédure de renouvellement :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Identifiez la date d'expiration de votre récépissé",
        "Prenez rendez-vous 2-3 semaines AVANT l'expiration",
        "Option 1 : via le site de la préfecture (prise de rendez-vous en ligne)",
        "Option 2 : sur ANEF si votre demande est gérée sur cette plateforme",
        "Option 3 : par courrier recommandé avec accusé de réception",
      ],
    },
    { type: "p", texte: "**Documents pour le renouvellement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Récépissé en cours ou expiré",
        "Passeport",
        "Justificatif de domicile récent",
        "Tout document prouvant que votre demande est toujours en cours",
      ],
    },
    { type: "p", texte: "**Si la préfecture ne vous donne pas de rendez-vous :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Envoyez un courrier recommandé à la préfecture demandant le renouvellement",
        "Gardez une copie du courrier et l'accusé de réception",
        "Si pas de réponse dans un mois, contactez le Défenseur des droits",
        "En dernier recours, saisissez le tribunal administratif en référé",
      ],
    },
    { type: "p", texte: "**Combien de fois peut-on renouveler ?**" },
    {
      type: "p",
      texte: "Il n'y a pas de limite au nombre de renouvellements tant que votre demande est en instruction. Certaines personnes ont des récépissés pendant plus d'un an dans les préfectures les plus engorgées.",
    },
    { type: "h2", texte: "Le récépissé numérique sur ANEF", id: "recepisse-numerique-anef" },
    {
      type: "p",
      texte: "Depuis 2024, de plus en plus de récépissés sont délivrés sous forme numérique via ANEF :",
    },
    { type: "p", texte: "**Le récépissé numérique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délivré automatiquement lors du dépôt d'une demande sur ANEF",
        "Disponible dans votre espace personnel ANEF",
        "Téléchargeable en format PDF",
        "Contient un QR code de vérification",
      ],
    },
    { type: "p", texte: "**Avantages du récépissé numérique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Obtention immédiate (pas besoin d'attendre un rendez-vous)",
        "Toujours accessible en ligne",
        "Vérifiable par QR code",
        "Plus difficile à perdre",
      ],
    },
    { type: "p", texte: "**Limites du récépissé numérique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pas toujours accepté par les administrations qui ne connaissent pas le format",
        "Certains employeurs préfèrent un document \"physique\"",
        "Imprimez toujours une copie papier pour les démarches en personne",
      ],
    },
    { type: "p", texte: "**Comment vérifier la validité d'un récépissé :**" },
    {
      type: "p",
      texte: "Les administrations et employeurs peuvent vérifier la validité d'un récépissé :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "En scannant le QR code",
        "En contactant la préfecture qui l'a délivré",
        "Via le service de vérification en ligne du ministère de l'Intérieur",
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** gardez toujours une copie imprimée de votre récépissé sur vous, en plus de la version numérique sur votre téléphone.",
    },
    {
      type: "h2",
      texte: "Problèmes fréquents avec le récépissé et solutions",
      id: "problemes-frequents",
    },
    { type: "p", texte: "Voici les problèmes les plus courants et comment les résoudre :" },
    { type: "p", texte: "**Problème 1 : La préfecture refuse de délivrer un récépissé**" },
    {
      type: "p",
      texte: "→ Solution : c'est illégal. Toute demande de titre de séjour doit donner lieu à un récépissé. Faites un courrier recommandé au préfet, puis saisissez le tribunal administratif.",
    },
    { type: "p", texte: "**Problème 2 : Mon récépissé a expiré et je n'ai pas de rendez-vous**" },
    {
      type: "p",
      texte: "→ Solution : envoyez un courrier recommandé demandant le renouvellement. Conservez la copie comme preuve de votre bonne foi. Contactez une association d'aide aux étrangers (CIMADE, Gisti).",
    },
    { type: "p", texte: "**Problème 3 : Mon employeur refuse de m'embaucher avec un récépissé**" },
    {
      type: "p",
      texte: "→ Solution : si votre récépissé porte la mention \"autorise à travailler\", l'employeur ne peut pas vous refuser. Montrez-lui l'article L431-2 du CESEDA. La discrimination est punie par la loi.",
    },
    { type: "p", texte: "**Problème 4 : Ma banque bloque mon compte à cause du récépissé**" },
    {
      type: "p",
      texte: "→ Solution : la banque ne peut pas bloquer votre compte si vous êtes titulaire d'un récépissé valide. Invoquez le droit au compte (Banque de France) et faites un courrier de contestation.",
    },
    { type: "p", texte: "**Problème 5 : J'ai perdu mon récépissé**" },
    {
      type: "p",
      texte: "→ Solution : demandez un duplicata à la préfecture qui l'a délivré. Si votre récépissé est numérique (ANEF), reconnectez-vous et re-téléchargez-le.",
    },
    { type: "p", texte: "**Problème 6 : Mon récépissé ne mentionne pas le droit au travail**" },
    {
      type: "p",
      texte: "→ Solution : si votre titre précédent ou votre demande en cours vous donne droit au travail, demandez à la préfecture de corriger la mention.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le récépissé de titre de séjour est votre bouclier juridique pendant que la préfecture examine votre dossier. Il prouve votre séjour régulier en France et, selon la mention, vous autorise à travailler. Cependant, il a des limites : il n'est pas un document de voyage international et peut compliquer certaines démarches du quotidien. Gardez toujours votre récépissé à jour, demandez son renouvellement avant expiration, et n'hésitez pas à faire valoir vos droits si une administration ou un employeur le refuse.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps est valable un récépissé de titre de séjour ?",
      reponse: "Un récépissé est généralement valable 3 à 6 mois, selon le type de demande. Il est renouvelable tant que votre demande est en cours d'instruction.",
    },
    {
      question: "Peut-on travailler avec un récépissé de titre de séjour ?",
      reponse: "Oui, si le récépissé porte la mention \"autorise son titulaire à travailler\". Sans cette mention, vous ne pouvez pas travailler légalement.",
    },
    {
      question: "Peut-on voyager à l'étranger avec un récépissé ?",
      reponse: "Le récépissé n'est pas un document de voyage. Pour voyager hors de France, demandez un visa de retour à la préfecture. Voyager sans est risqué : vous pourriez ne pas pouvoir revenir.",
    },
    {
      question: "Le récépissé de titre de séjour est-il gratuit ?",
      reponse: "Oui, le récépissé est délivré gratuitement, que ce soit pour une première demande ou un renouvellement.",
    },
    {
      question: "Que faire si mon récépissé expire avant la décision de la préfecture ?",
      reponse: "Demandez un renouvellement avant la date d'expiration. La préfecture est obligée de renouveler votre récépissé tant que votre demande est en instruction.",
    },
    {
      question: "Mon employeur peut-il refuser un récépissé ?",
      reponse: "Non, si le récépissé porte la mention \"autorise à travailler\", l'employeur ne peut pas vous refuser. C'est un document officiel attestant votre droit au séjour et au travail.",
    },
    {
      question: "Peut-on ouvrir un compte bancaire avec un récépissé ?",
      reponse: "Oui, vous avez droit à un compte bancaire avec un récépissé valide. Si une banque refuse, invoquez le droit au compte auprès de la Banque de France.",
    },
    {
      question: "J'ai perdu mon récépissé, que faire ?",
      reponse: "Demandez un duplicata à votre préfecture. Si votre récépissé est numérique (délivré via ANEF), reconnectez-vous à votre espace et re-téléchargez-le.",
    },
    {
      question: "Le récépissé permet-il de bénéficier de la CAF ?",
      reponse: "Oui, la CAF accepte le récépissé de titre de séjour pour maintenir vos droits aux allocations. Vos prestations sociales sont maintenues pendant la validité du récépissé.",
    },
    {
      question: "Quelle différence entre récépissé et attestation de prolongation ?",
      reponse: "Le récépissé est délivré lors du dépôt initial. L'attestation de prolongation d'instruction est délivrée quand le récépissé arrive à expiration et que la demande n'est toujours pas tranchée. Les deux ont la même valeur juridique.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Récépissé de demande de titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F15763",
      type: "officiel",
      description: "Informations officielles sur le récépissé : définition, durée et droits.",
    },
    {
      titre: "CESEDA - Article L431-2 et suivants",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Dispositions légales sur le récépissé de titre de séjour.",
    },
    {
      titre: "GISTI - Le récépissé de titre de séjour",
      url: "https://www.gisti.org/spip.php?article6224",
      type: "article",
      description: "Analyse juridique des droits du titulaire d'un récépissé.",
    },
    {
      titre: "InfoMigrants - Comprendre le récépissé",
      url: "https://www.infomigrants.net/fr/post/55678/le-recepisse-de-titre-de-sejour-a-quoi-sert-il",
      type: "article",
      description: "Guide pratique sur le récépissé pour les étrangers en France.",
    },
  ],
  aLireAussi: [
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour avant expiration",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Suivre son dossier sur ANEF",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Que faire en cas de refus de titre de séjour ?",
    },
    {
      slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
      ancre: "Timbre fiscal du titre de séjour : les tarifs 2026",
    },
  ],
};

export default article;
