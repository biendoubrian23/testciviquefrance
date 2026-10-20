import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-recepisse-anef.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/guide-anef-complet-2026-creer-compte-deposer-demande`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
  titre: "Guide ANEF 2026 : créer son compte, déposer sa demande étape par étape (+ 8 erreurs à éviter et que faire si bug)",
  titreSeo: "Guide ANEF 2026 : créer son compte, déposer sa demande étape par étape (+ 8 erreurs à éviter et que faire si bug)",
  resume: "Tutoriel ANEF 2026 ultra-précis : création compte FranceConnect en 3 minutes, dépôt de demande sans rejet, formats de documents acceptés, 8 erreurs qui bloquent un dossier, solutions aux bugs courants (page blanche, photo refusée, paiement échoué) et comment contacter le support.",
  chapo: "ANEF (Administration Numérique pour les Étrangers en France) est la plateforme en ligne du ministère de l'Intérieur pour toutes les démarches liées au titre de séjour. En 2026, la quasi-totalité des demandes de titre de séjour passe par ANEF : premier titre, renouvellement, changement de statut, changement d'adresse, et même certaines demandes de naturalisation.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 15,
  theme: "ANEF guide complet 2026",
  motsCles: [
    "ANEF guide complet 2026",
    "créer compte ANEF",
    "déposer demande ANEF",
    "plateforme étrangers France",
    "ANEF titre de séjour",
    "administration numérique étrangers",
    "ANEF documents télécharger",
    "suivi demande ANEF",
    "ANEF problèmes techniques",
    "renouvellement titre séjour en ligne",
    "ANEF préfecture en ligne",
    "messagerie ANEF préfecture",
    "ANEF paiement en ligne",
    "ANEF pièces justificatives",
    "site officiel étrangers France",
    "ANEF mot de passe oublié",
    "demande en ligne titre séjour",
    "ANEF récépissé numérique",
    "ANEF changement statut",
    "comment utiliser ANEF",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  blocs: [
    {
      type: "p",
      texte: "Mais s'y retrouver sur cette plateforme n'est pas toujours simple. Interface complexe, documents à télécharger, messages d'erreur, délais d'attente... Ce guide complet vous accompagne étape par étape : de la création de votre compte ANEF jusqu'au suivi de votre demande, en passant par le dépôt des pièces justificatives et le paiement en ligne.",
    },
    {
      type: "p",
      texte: "Que vous utilisiez ANEF pour la première fois ou que vous rencontriez des difficultés avec une demande en cours, ce guide répond à toutes vos questions pratiques pour naviguer sereinement sur la plateforme.",
    },
    { type: "h2", texte: "Créer un compte ANEF : guide pas à pas", id: "creer-compte-anef" },
    { type: "p", texte: "La création de votre compte ANEF est la première étape :" },
    { type: "p", texte: "**Se rendre sur le site officiel :**" },
    {
      type: "p",
      texte: "Allez sur administration-etrangers-en-france.interieur.gouv.fr (**attention : c'est le SEUL site officiel**, méfiez-vous des copies)",
    },
    { type: "p", texte: "**Étape 1 : Cliquer sur \"Créer un compte\"**" },
    {
      type: "p",
      texte: "Sur la page d'accueil, cliquez sur \"Je n'ai pas de compte\" puis \"Créer un compte\"",
    },
    { type: "p", texte: "**Étape 2 : Renseigner votre email**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Utilisez une adresse email fiable que vous consultez régulièrement",
        "Vous recevrez un email de confirmation (vérifiez vos spams)",
        "Cliquez sur le lien de confirmation dans l'email",
      ],
    },
    { type: "p", texte: "**Étape 3 : Créer votre mot de passe**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Minimum 12 caractères",
        "Au moins une majuscule, une minuscule, un chiffre et un caractère spécial",
        "Notez-le précieusement : la récupération de mot de passe est parfois longue",
      ],
    },
    { type: "p", texte: "**Étape 4 : Renseigner vos informations personnelles**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nom et prénom (exactement comme sur votre passeport)",
        "Date et lieu de naissance",
        "Nationalité",
        "Numéro de votre titre de séjour actuel (si renouvellement)",
        "Numéro de visa (si première demande)",
      ],
    },
    { type: "p", texte: "**Étape 5 : Valider votre identité**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Numéro de visa ou de titre de séjour (pour vérifier votre identité)",
        "Si vous n'avez ni l'un ni l'autre, contactez votre préfecture",
      ],
    },
    { type: "p", texte: "**Erreurs fréquentes à ce stade :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nom avec des accents ou caractères spéciaux : utilisez la transcription de votre passeport",
        "Email déjà utilisé : vous avez peut-être déjà un compte",
        "Numéro de visa incorrect : vérifiez le format exact sur votre visa",
      ],
    },
    { type: "h2", texte: "Déposer une demande de titre de séjour sur ANEF", id: "deposer-demande-anef" },
    { type: "p", texte: "Une fois connecté, voici comment déposer votre demande :" },
    { type: "p", texte: "**1. Choisir le type de demande :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Première demande de titre de séjour\" (si vous venez d'arriver en France)",
        "\"Renouvellement de titre de séjour\" (si votre titre arrive à expiration)",
        "\"Changement de statut\" (si vous changez de motif de séjour)",
        "\"Changement d'adresse\" (déménagement)",
        "\"Duplicata\" (perte ou vol)",
      ],
    },
    { type: "p", texte: "**2. Sélectionner le motif :**" },
    {
      type: "p",
      texte: "Selon votre situation, choisissez parmi : étudiant, salarié, visiteur, vie privée et familiale, passeport talent, réfugié, etc.",
    },
    { type: "p", texte: "**3. Remplir le formulaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Informations personnelles (vérifiez les informations pré-remplies)",
        "Informations sur votre situation actuelle",
        "Informations spécifiques selon le motif (employeur, conjoint, études, etc.)",
      ],
    },
    { type: "p", texte: "**4. Télécharger les pièces justificatives :**" },
    {
      type: "p",
      texte: "La plateforme vous indique les documents requis pour votre demande spécifique. Chaque document doit être :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Au format PDF ou JPEG",
        "Lisible (scannez en 300 dpi minimum)",
        "Inférieur à 10 Mo par fichier",
        "Conforme au modèle demandé",
      ],
    },
    { type: "p", texte: "**5. Payer les frais :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le paiement se fait par carte bancaire directement sur la plateforme",
        "Montant variable selon le type de titre (100 € à 250 €)",
      ],
    },
    { type: "p", texte: "**6. Soumettre la demande :**" },
    {
      type: "p",
      texte: "Après vérification, cliquez sur \"Soumettre\". Vous recevrez un récépissé numérique dans votre espace.",
    },
    {
      type: "h2",
      texte: "Les documents à télécharger sur ANEF : liste et format",
      id: "documents-telecharger",
    },
    {
      type: "p",
      texte: "Voici les documents les plus couramment demandés sur ANEF selon le type de demande :",
    },
    { type: "p", texte: "**Documents communs à toutes les demandes :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport (toutes les pages, y compris les pages vierges)",
        "Photo d'identité conforme (format numérique JPEG, fond blanc, visage découvert)",
        "Justificatif de domicile de moins de 3 mois (quittance de loyer, facture EDF/eau/internet)",
        "Titre de séjour actuel (recto-verso)",
        "Timbre fiscal électronique",
      ],
    },
    { type: "p", texte: "**Documents spécifiques - Renouvellement étudiant :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificat d'inscription dans un établissement d'enseignement",
        "Relevés de notes de l'année en cours",
        "Justificatif de ressources (relevés bancaires 3 derniers mois)",
      ],
    },
    { type: "p", texte: "**Documents spécifiques - Renouvellement salarié :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Contrat de travail en cours", "3 dernières fiches de paie", "Attestation employeur"],
    },
    { type: "p", texte: "**Documents spécifiques - Vie privée et familiale :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage ou livret de famille",
        "Justificatif de communauté de vie (attestation sur l'honneur, factures communes)",
      ],
    },
    { type: "p", texte: "**Conseils techniques pour les documents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Scannez en couleur, pas en noir et blanc",
        "Un seul document par fichier PDF (ne regroupez pas)",
        "Nommez clairement vos fichiers (ex : \"passeport_pages1-2.pdf\")",
        "Si un document n'est pas en français, joignez la traduction assermentée",
      ],
    },
    { type: "h2", texte: "Suivre sa demande sur ANEF : notifications et statuts", id: "suivi-demande" },
    { type: "p", texte: "Après avoir soumis votre demande, voici comment suivre son avancement :" },
    { type: "p", texte: "**Les différents statuts de votre demande :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**\"Demande déposée\"** : votre dossier a bien été reçu",
        "**\"En cours d'instruction\"** : la préfecture examine votre dossier",
        "**\"Pièce complémentaire demandée\"** : vous devez fournir un document supplémentaire",
        "**\"Décision favorable\"** : votre titre est accordé",
        "**\"Décision défavorable\"** : votre demande est refusée",
        "**\"Titre disponible\"** : votre titre est prêt à être retiré en préfecture",
      ],
    },
    { type: "p", texte: "**Les notifications :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez un email à chaque changement de statut",
        "Vérifiez régulièrement vos spams (les emails ANEF finissent parfois dans les indésirables)",
        "Connectez-vous à ANEF au moins une fois par semaine pour vérifier",
      ],
    },
    { type: "p", texte: "**Le statut \"Pièce complémentaire demandée\" :**" },
    {
      type: "p",
      texte: "C'est le statut le plus critique. La préfecture vous demande un document manquant ou supplémentaire :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Répondez le plus rapidement possible (vous avez généralement 1 mois)",
        "Le document à fournir est indiqué dans le message de la préfecture",
        "Téléchargez-le directement sur ANEF dans la section \"Pièces complémentaires\"",
        "Ne pas répondre dans le délai peut entraîner un classement sans suite de votre demande",
      ],
    },
    { type: "p", texte: "**Si le statut ne change pas depuis longtemps :**" },
    {
      type: "p",
      texte: "Si votre demande est \"En cours d'instruction\" depuis plus de 3-4 mois sans nouvelles :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Envoyez un message via la messagerie ANEF",
        "Appelez le numéro de la préfecture",
        "Si pas de réponse, envoyez un courrier recommandé",
        "Après 4 mois sans décision, une décision implicite de rejet ou d'acceptation peut naître (selon le type de demande)",
      ],
    },
    { type: "h2", texte: "Résoudre les problèmes techniques sur ANEF", id: "problemes-techniques" },
    { type: "p", texte: "ANEF n'est pas exempt de bugs et problèmes techniques. Voici les solutions :" },
    { type: "p", texte: "**Problème : Je n'arrive pas à me connecter**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez votre email et mot de passe",
        "Essayez la récupération de mot de passe",
        "Videz le cache de votre navigateur",
        "Essayez un autre navigateur (Chrome, Firefox, Edge recommandés)",
        "Vérifiez que votre navigateur est à jour",
      ],
    },
    { type: "p", texte: "**Problème : Le site est en maintenance**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "ANEF est souvent en maintenance la nuit (entre 22h et 6h) et certains week-ends",
        "Attendez quelques heures et réessayez",
        "Les heures creuses : tôt le matin (6h-8h) et en soirée (20h-22h)",
      ],
    },
    { type: "p", texte: "**Problème : Je ne peux pas télécharger un document**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez la taille (< 10 Mo par fichier)",
        "Vérifiez le format (PDF ou JPEG uniquement)",
        "Réduisez la taille du fichier avec un compresseur PDF en ligne",
        "Si le fichier est trop gros, divisez-le en plusieurs fichiers",
      ],
    },
    { type: "p", texte: "**Problème : Le paiement en ligne est refusé**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez que votre carte bancaire est active et pas expirée",
        "Certaines cartes étrangères peuvent être refusées (essayez une carte française)",
        "Contactez votre banque pour autoriser le paiement en ligne au ministère de l'Intérieur",
        "Si le problème persiste, essayez à un autre moment",
      ],
    },
    { type: "p", texte: "**Problème : Mon dossier est bloqué à cause d'une erreur**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contactez le support technique ANEF via le formulaire de contact",
        "Joignez des captures d'écran du problème",
        "Indiquez votre numéro de dossier",
      ],
    },
    { type: "p", texte: "**Numéro d'assistance ANEF :**" },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur dispose d'un numéro de support pour les problèmes techniques ANEF. Consultez le pied de page du site pour le numéro à jour.",
    },
    {
      type: "h2",
      texte: "Utiliser la messagerie ANEF pour communiquer avec la préfecture",
      id: "messagerie-anef",
    },
    {
      type: "p",
      texte: "ANEF dispose d'une messagerie interne pour communiquer avec votre préfecture :",
    },
    { type: "p", texte: "**Comment accéder à la messagerie :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous à votre espace ANEF",
        "Allez dans la section \"Mes échanges\" ou \"Messagerie\"",
        "Sélectionnez votre demande en cours",
        "Cliquez sur \"Nouveau message\"",
      ],
    },
    { type: "p", texte: "**Quand utiliser la messagerie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour relancer la préfecture si votre demande prend du retard",
        "Pour signaler un changement de situation (déménagement, nouveau numéro de téléphone)",
        "Pour demander des précisions sur une demande de pièce complémentaire",
        "Pour communiquer un document supplémentaire",
      ],
    },
    { type: "p", texte: "**Quand NE PAS utiliser la messagerie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour signaler un problème technique (utilisez le formulaire de support)",
        "Pour des urgences (appelez la préfecture directement)",
        "Pour des demandes complexes (prenez rendez-vous physique)",
      ],
    },
    { type: "p", texte: "**Conseils pour vos messages :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Soyez concis et clair",
        "Indiquez toujours votre numéro de dossier",
        "Joignez les documents pertinents en pièce jointe",
        "Restez poli et professionnel (même si vous êtes frustré)",
        "Conservez une copie de vos échanges",
      ],
    },
    { type: "p", texte: "**Délai de réponse :**" },
    {
      type: "p",
      texte: "Le délai de réponse via la messagerie ANEF peut varier de quelques jours à plusieurs semaines selon la préfecture. Ne harcelez pas la préfecture avec des messages quotidiens, cela ne fera pas accélérer votre dossier.",
    },
    {
      type: "h2",
      texte: "ANEF vs guichet en préfecture : quand se déplacer physiquement",
      id: "anef-vs-prefecture",
    },
    { type: "p", texte: "Toutes les démarches ne se font pas exclusivement en ligne :" },
    { type: "p", texte: "**Ce qui se fait UNIQUEMENT sur ANEF :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dépôt de la plupart des demandes de titre de séjour",
        "Renouvellement de titre",
        "Changement de statut",
        "Changement d'adresse",
        "Suivi de votre demande",
      ],
    },
    { type: "p", texte: "**Ce qui nécessite un déplacement en préfecture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prise d'empreintes biométriques (2 doigts)",
        "Remise du titre de séjour (vous devez le retirer en personne)",
        "Photo d'identité en cas de problème avec la photo numérique",
        "Dépôt de demande d'asile (premiers accueils)",
      ],
    },
    { type: "p", texte: "**Ce qui peut se faire en ligne OU en préfecture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande de récépissé de renouvellement",
        "Demande de visa de retour",
        "Certains changements de situation",
      ],
    },
    { type: "p", texte: "**Prendre rendez-vous en préfecture :**" },
    {
      type: "p",
      texte: "Même quand un déplacement est nécessaire, vous devez généralement prendre rendez-vous :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Via le site internet de votre préfecture",
        "Via la plateforme de rendez-vous en ligne",
        "Par téléphone dans certains cas",
      ],
    },
    { type: "p", texte: "**Les horaires d'ouverture :**" },
    {
      type: "p",
      texte: "Les guichets des préfectures sont ouverts du lundi au vendredi, généralement de 9h à 16h. Les horaires varient selon les préfectures. Consultez le site de votre préfecture.",
    },
    {
      type: "p",
      texte: "**Conseil :** même si vous déposez tout en ligne, gardez des copies papier de tous vos documents. Vous en aurez besoin lors du retrait de votre titre.",
    },
    { type: "h2", texte: "Astuces et bonnes pratiques pour ANEF", id: "astuces-anef" },
    { type: "p", texte: "Voici nos meilleures astuces pour naviguer efficacement sur ANEF :" },
    { type: "p", texte: "**1. Préparez tout avant de commencer**" },
    {
      type: "p",
      texte: "Scannez tous vos documents à l'avance. Avoir tout prêt évite les abandons en cours de formulaire et les erreurs.",
    },
    { type: "p", texte: "**2. Utilisez un ordinateur (pas un smartphone)**" },
    {
      type: "p",
      texte: "ANEF fonctionne mieux sur un ordinateur avec un écran large. Les téléphones peuvent poser des problèmes d'affichage et de téléchargement de fichiers.",
    },
    { type: "p", texte: "**3. Sauvegardez régulièrement**" },
    {
      type: "p",
      texte: "ANEF permet de sauvegarder un brouillon. Sauvegardez à chaque étape pour éviter de perdre votre saisie en cas de déconnexion.",
    },
    { type: "p", texte: "**4. Faites des captures d'écran**" },
    {
      type: "p",
      texte: "Prenez une capture d'écran à chaque étape importante : confirmation de dépôt, récépissé, messages de la préfecture. Ce sont des preuves précieuses en cas de litige.",
    },
    { type: "p", texte: "**5. Anticipez les délais**" },
    {
      type: "p",
      texte: "Ne déposez pas votre demande le dernier jour. Prévoyez 1-2 semaines d'avance pour avoir le temps de corriger d'éventuels problèmes.",
    },
    { type: "p", texte: "**6. Vérifiez les informations pré-remplies**" },
    {
      type: "p",
      texte: "ANEF pré-remplit certaines informations à partir de votre compte. Vérifiez chaque champ : une erreur dans le nom ou la date de naissance peut bloquer la demande.",
    },
    { type: "p", texte: "**7. Gardez une adresse email fonctionnelle**" },
    {
      type: "p",
      texte: "Toutes les notifications ANEF arrivent par email. Si vous changez d'adresse email, mettez-la à jour immédiatement dans votre profil ANEF.",
    },
    { type: "p", texte: "**8. En cas de doute, contactez votre préfecture**" },
    {
      type: "p",
      texte: "Ne soumettez pas un dossier incomplet ou avec des documents incorrects. Un rejet pour dossier incomplet fait perdre du temps.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "ANEF est un outil puissant mais qui demande de la patience et de la rigueur. En suivant ce guide, vous éviterez les erreurs les plus courantes et naviguerez sereinement sur la plateforme. Préparez vos documents à l'avance, scannez-les correctement, sauvegardez régulièrement et surveillez votre boîte email. Si vous rencontrez des difficultés, n'hésitez pas à utiliser la messagerie ANEF ou à contacter votre préfecture. Et n'oubliez pas : si votre démarche inclut le test civique, préparez-vous sur testciviquefrance.fr en parallèle de votre dossier ANEF.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Comment créer un compte ANEF ?",
      reponse: "Allez sur administration-etrangers-en-france.interieur.gouv.fr, cliquez sur \"Créer un compte\", renseignez votre email, créez un mot de passe, puis entrez vos informations personnelles et votre numéro de visa ou titre de séjour.",
    },
    {
      question: "Quels documents télécharger sur ANEF ?",
      reponse: "Les documents varient selon la demande. Généralement : passeport, photo d'identité, justificatif de domicile, titre de séjour actuel, timbre fiscal, et documents spécifiques à votre situation (contrat de travail, inscription universitaire, etc.).",
    },
    {
      question: "ANEF est en panne, que faire ?",
      reponse: "Videz le cache de votre navigateur, essayez un autre navigateur, vérifiez votre connexion internet. ANEF est souvent en maintenance la nuit et certains week-ends. Réessayez aux heures creuses.",
    },
    {
      question: "Comment suivre sa demande sur ANEF ?",
      reponse: "Connectez-vous à votre espace ANEF et consultez le statut de votre demande. Vous recevez aussi des emails à chaque changement de statut. Vérifiez vos spams régulièrement.",
    },
    {
      question: "Le paiement en ligne est refusé sur ANEF, que faire ?",
      reponse: "Vérifiez votre carte bancaire, essayez une autre carte ou un autre navigateur. Certaines cartes étrangères ne fonctionnent pas. Contactez votre banque pour autoriser le paiement au ministère de l'Intérieur.",
    },
    {
      question: "Peut-on modifier une demande déjà soumise sur ANEF ?",
      reponse: "Non, une fois soumise, la demande ne peut pas être modifiée. En revanche, vous pouvez ajouter des pièces complémentaires via la messagerie ou la section dédiée.",
    },
    {
      question: "Comment contacter la préfecture via ANEF ?",
      reponse: "Utilisez la messagerie interne dans la section \"Mes échanges\" de votre espace ANEF. Indiquez toujours votre numéro de dossier dans vos messages.",
    },
    {
      question: "ANEF remplace-t-il complètement la préfecture ?",
      reponse: "Non, certaines étapes nécessitent un déplacement physique : prise d'empreintes biométriques, remise du titre de séjour, et certains cas particuliers. Le dépôt se fait en ligne, mais le retrait se fait en préfecture.",
    },
    {
      question: "Mon récépissé ANEF est-il valable pour travailler ?",
      reponse: "Le récépissé numérique délivré par ANEF est un document officiel. Vérifiez s'il porte la mention \"autorise son titulaire à travailler\". Si oui, il est valable pour travailler.",
    },
    {
      question: "J'ai oublié mon mot de passe ANEF, que faire ?",
      reponse: "Cliquez sur \"Mot de passe oublié\" sur la page de connexion. Vous recevrez un email pour le réinitialiser. Si votre email n'est plus valide, contactez le support technique ANEF.",
    },
  ],
  sources: [
    {
      titre: "ANEF - Plateforme officielle",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Site officiel de l'Administration Numérique pour les Étrangers en France.",
    },
    {
      titre: "Service-Public.fr - Démarches en ligne titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/N110",
      type: "officiel",
      description: "Guide officiel des démarches de titre de séjour.",
    },
    {
      titre: "Ministère de l'Intérieur - FAQ ANEF",
      url: "https://www.immigration.interieur.gouv.fr/Info-ressources/FAQ-ANEF",
      type: "officiel",
      description: "FAQ officielle de la plateforme ANEF.",
    },
    {
      titre: "InfoMigrants - Naviguer sur ANEF",
      url: "https://www.infomigrants.net/fr/post/66789/comment-naviguer-sur-la-plateforme-anef",
      type: "article",
      description: "Guide pratique pour utiliser ANEF simplement.",
    },
  ],
  aLireAussi: [
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "Comprendre le récépissé de titre de séjour",
    },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changer de statut étudiant à salarié via ANEF",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre via ANEF",
    },
    {
      slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire",
      ancre: "S'inscrire au test civique",
    },
  ],
};

export default article;
