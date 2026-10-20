import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "anef-franceconnect-bloque-2026-erreur-connexion-solutions",
  titre: "ANEF FranceConnect bloqué 2026 : 8 solutions quand la connexion ne fonctionne pas",
  titreSeo: "ANEF FranceConnect bloqué 2026 : 8 solutions quand la connexion ne fonctionne pas",
  resume: "FranceConnect refuse votre connexion à ANEF ? Erreur \"compte non reconnu\", boucle de redirection, identifiant Impots/Ameli rejeté ? 8 solutions concrètes en 2026 pour récupérer l'accès à votre dossier ANEF en moins de 30 minutes.",
  chapo: "Vous tentez de vous connecter à votre **espace ANEF** (Administration Numérique pour les Étrangers en France) via **FranceConnect** et rien ne va : \"**compte non reconnu**\", boucle de redirection infinie entre ANEF et Impots.gouv, captcha qui se rejoue trois fois, ou pire, une page blanche après avoir tapé votre mot de passe Ameli. Vous n'êtes pas seul. En 2026, ce sont des milliers d'usagers qui rencontrent ces blocages chaque semaine, particulièrement aux heures de pointe (entre 9h-11h et 18h-20h). La bonne nouvelle ? Dans 9 cas sur 10, le problème se règle en moins de **30 minutes** sans appeler la préfecture. Ce guide passe en revue les **6 fournisseurs d'identité FranceConnect**, les **8 erreurs les plus fréquentes** en 2026 et leurs solutions testées, ainsi que la procédure d'urgence pour créer un compte ANEF par e-mail si tout échoue.",
  publieLe: "2026-05-08",
  modifieLe: "2026-05-08",
  minutes: 13,
  theme: "anef franceconnect bloque 2026",
  motsCles: [
    "anef franceconnect bloque 2026",
    "anef connexion impossible",
    "franceconnect compte non reconnu anef",
    "anef boucle redirection",
    "anef impots gouv connexion refusee",
    "anef ameli identifiant rejete",
    "anef captcha bloque",
    "creer compte anef email",
    "anef solutions connexion 2026",
    "anef support contact",
    "anef erreur identifiant",
    "franceconnect fournisseurs identite",
    "anef mot de passe oublie",
    "administration numerique etrangers france",
    "anef titre de sejour connexion",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-3a589877462d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-3a589877462d",
  },
  blocs: [
    {
      type: "h2",
      texte: "1. Comprendre FranceConnect : les 6 fournisseurs d'identité acceptés sur ANEF",
      id: "comprendre-franceconnect-anef",
    },
    {
      type: "p",
      texte: "**FranceConnect** n'est pas un compte en soi : c'est un **portail d'authentification fédérée** qui vous permet d'utiliser un identifiant déjà existant (impôts, Ameli, La Poste...) pour accéder à plus de **1 400 services publics**, dont l'**ANEF**. Comprendre ce mécanisme est la première étape pour débloquer votre connexion.",
    },
    { type: "p", texte: "**Les 6 fournisseurs d'identité officiels en 2026**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Impots.gouv.fr** : votre numéro fiscal à 13 chiffres + mot de passe (le plus utilisé, ~62% des connexions ANEF)",
        "**Ameli (Assurance Maladie)** : numéro de Sécurité sociale à 13 chiffres + clé à 2 chiffres + mot de passe",
        "**L'Identité Numérique La Poste** : application mobile à activer en bureau de poste (gratuit, ~15 minutes)",
        "**MSA (Mutualité Sociale Agricole)** : pour les ressortissants du régime agricole uniquement",
        "**France Identité** : la nouvelle carte d'identité électronique (CNIe) avec puce, scannée par smartphone",
        "**Yris (ex-MobileConnect & moi)** : solution mobile alternative, utilisée surtout par les opérateurs télécoms",
      ],
    },
    { type: "p", texte: "**Pourquoi votre connexion peut échouer**" },
    {
      type: "p",
      texte: "Quand vous cliquez sur \"**Se connecter avec FranceConnect**\" sur **administration-etrangers-en-france.interieur.gouv.fr**, voici ce qui se passe en coulisses :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "ANEF redirige votre navigateur vers FranceConnect (api.franceconnect.gouv.fr)",
        "FranceConnect vous redirige vers le fournisseur choisi (ex. Impots.gouv)",
        "Vous vous authentifiez chez le fournisseur",
        "Le fournisseur renvoie un **jeton signé** à FranceConnect",
        "FranceConnect transmet ce jeton à ANEF, qui ouvre votre dossier",
      ],
    },
    {
      type: "p",
      texte: "Une rupture à n'importe laquelle de ces 5 étapes = échec de connexion. C'est pourquoi le message d'erreur est souvent vague (\"compte non reconnu\", \"session expirée\") : ANEF ne sait pas toujours **où** ça a coincé.",
    },
    {
      type: "p",
      texte: "**Pré-requis 2026** : navigateur à jour (Chrome 120+, Firefox 121+, Safari 17+, Edge 120+), **cookies tiers autorisés**, JavaScript activé, pas de bloqueur agressif type uBlock en mode strict.",
    },
    {
      type: "h2",
      texte: "2. Les 8 erreurs FranceConnect/ANEF les plus fréquentes en 2026 (et leurs solutions)",
      id: "huit-erreurs-courantes",
    },
    {
      type: "p",
      texte: "Voici les 8 messages d'erreur que rencontrent **plus de 80% des usagers bloqués**, classés par fréquence décroissante.",
    },
    { type: "p", texte: "**Erreur n°1 : \"Votre compte FranceConnect n'a pas été reconnu\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : votre identifiant fiscal/Ameli est correct, mais l'état civil ne correspond pas exactement à celui enregistré dans ANEF (accent oublié, nom de jeune fille vs nom marital, prénom composé tronqué).",
        "**Solution** : connectez-vous d'abord directement sur **impots.gouv.fr** ou **ameli.fr** sans passer par FranceConnect, vérifiez votre état civil ligne par ligne, corrigez les écarts. Réessayez ensuite ANEF.",
      ],
    },
    { type: "p", texte: "**Erreur n°2 : Boucle de redirection infinie entre ANEF et le fournisseur**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : conflit de cookies tiers, souvent lié à un cookie expiré stocké par votre navigateur.",
        "**Solution** : ouvrez une **fenêtre de navigation privée** (Ctrl+Shift+N sur Chrome, Ctrl+Shift+P sur Firefox) et reconnectez-vous. Si ça marche, videz les cookies du navigateur normal pour les domaines \".gouv.fr\".",
      ],
    },
    { type: "p", texte: "**Erreur n°3 : \"Identifiants incorrects\" alors qu'ils sont bons**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : votre mot de passe Impots/Ameli a expiré (ils forcent un changement tous les **12 à 18 mois**), ou votre compte a été temporairement bloqué après 3 tentatives erronées.",
        "**Solution** : utilisez \"**Mot de passe oublié**\" sur impots.gouv.fr. Vous recevrez un nouveau mot de passe par courrier postal sous **5 à 10 jours ouvrés** (pas par e-mail pour des raisons de sécurité).",
      ],
    },
    { type: "p", texte: "**Erreur n°4 : Captcha \"Je ne suis pas un robot\" qui ne se valide jamais**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : votre IP est marquée comme suspecte (VPN, proxy, réseau d'entreprise, ou simplement trop de tentatives sur 24h).",
        "**Solution** : désactivez tout VPN/proxy, passez en **4G mobile** (changement d'IP), ou attendez 30 minutes avant de réessayer. Si vous êtes au bureau, essayez depuis chez vous.",
      ],
    },
    { type: "p", texte: "**Erreur n°5 : Page blanche après avoir cliqué sur \"Continuer\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : extension navigateur qui bloque les redirections (uBlock, Privacy Badger, Brave Shields).",
        "**Solution** : désactivez **toutes** les extensions, ou utilisez un autre navigateur. Edge fonctionne particulièrement bien avec ANEF en 2026.",
      ],
    },
    { type: "p", texte: "**Erreur n°6 : \"Le service est temporairement indisponible\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : maintenance ANEF (généralement entre **22h et 6h**) ou panne FranceConnect.",
        "**Solution** : vérifiez l'état du service sur **status.franceconnect.gouv.fr** et **service-public.fr**. Réessayez dans 1-2 heures.",
      ],
    },
    {
      type: "p",
      texte: "**Erreur n°7 : \"Votre dossier n'a pas été retrouvé\" après connexion réussie**",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : votre numéro de dossier étranger (AGDREF) n'est pas encore lié à votre compte FranceConnect.",
        "**Solution** : créez un compte ANEF par e-mail (voir section 3) et reliez manuellement votre numéro AGDREF (à 10 chiffres figurant sur votre titre de séjour).",
      ],
    },
    { type: "p", texte: "**Erreur n°8 : Code SMS jamais reçu (validation à 2 facteurs)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cause** : numéro de mobile obsolète chez Ameli/Impots, ou opérateur étranger non reconnu.",
        "**Solution** : mettez à jour votre numéro **directement chez le fournisseur** (Ameli ou Impots), pas sur ANEF. Le délai de prise en compte est de 24-48h.",
      ],
    },
    {
      type: "h2",
      texte: "3. Solution alternative : créer un compte ANEF par e-mail (procédure 2026)",
      id: "creer-compte-anef-email",
    },
    {
      type: "p",
      texte: "Si FranceConnect refuse obstinément, vous pouvez **créer un compte ANEF directement avec une adresse e-mail**. C'est moins pratique pour les démarches futures, mais ça débloque la situation immédiatement.",
    },
    { type: "p", texte: "**Étapes complètes (durée estimée : 12 minutes)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rendez-vous sur **administration-etrangers-en-france.interieur.gouv.fr**",
        "Cliquez sur \"**Créer mon compte**\" (bouton en haut à droite)",
        "Choisissez l'option \"**Avec une adresse e-mail**\" (et non FranceConnect)",
        "Renseignez :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adresse e-mail valide (Gmail, Outlook, Yahoo OK ; e-mails jetables type yopmail rejetés)",
        "Mot de passe : **12 caractères minimum**, avec majuscule, minuscule, chiffre, caractère spécial",
        "Nom et prénom **exactement** comme sur votre titre de séjour",
        "Date de naissance",
        "Pays de naissance",
        "Numéro AGDREF (10 chiffres au dos de votre titre de séjour)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Cochez les CGU et validez",
        "Vous recevez un **e-mail de confirmation** sous 5 minutes (vérifiez vos spams)",
        "Cliquez sur le lien dans l'e-mail (**valable 24h**) pour activer le compte",
        "Connectez-vous une première fois et complétez votre profil",
      ],
    },
    { type: "p", texte: "**Documents à avoir sous la main**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour en cours de validité (ou récépissé)",
        "Passeport",
        "Justificatif de domicile de moins de 3 mois",
      ],
    },
    { type: "p", texte: "**Limitations du compte e-mail vs FranceConnect**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pas de pré-remplissage automatique des données fiscales",
        "Vérification manuelle parfois requise pour certaines démarches sensibles (changement de statut)",
        "Risque légèrement plus élevé de demande de pièces complémentaires",
      ],
    },
    {
      type: "p",
      texte: "Une fois votre démarche urgente terminée, vous pourrez **lier ultérieurement** ce compte à FranceConnect dans les paramètres.",
    },
    {
      type: "h2",
      texte: "4. Si Impots.gouv refuse votre connexion : procédure de récupération complète",
      id: "impots-gouv-refuse",
    },
    {
      type: "p",
      texte: "**Impots.gouv.fr** est le fournisseur d'identité le plus utilisé pour ANEF, mais aussi le plus problématique en cas d'oubli. Voici la marche à suivre selon votre situation.",
    },
    { type: "p", texte: "**Cas 1 : J'ai oublié mon mot de passe**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Allez sur **impots.gouv.fr** > \"Votre espace particulier\"",
        "Cliquez sur \"**Mot de passe oublié**\"",
        "Renseignez votre **numéro fiscal** (13 chiffres, en haut à gauche de votre dernier avis d'imposition)",
        "Choisissez le mode de récupération :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Par e-mail** (instantané, mais seulement si votre e-mail est déjà enregistré)",
        "**Par courrier postal** (5-10 jours ouvrés, à votre adresse fiscale)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["Réinitialisez le mot de passe (8 caractères minimum, mais visez 12 pour la sécurité)"],
    },
    { type: "p", texte: "**Cas 2 : Je ne connais pas mon numéro fiscal**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Il figure sur **tous vos avis d'imposition** depuis 5 ans",
        "Si vous n'avez aucun avis (jamais imposé en France), demandez-le au **centre des Finances publiques** de votre commune (gratuit, en moins de 15 minutes au guichet)",
        "Vous pouvez aussi le récupérer via **la messagerie sécurisée** de votre espace impots, mais il faut déjà être connecté, donc ça ne sert pas en cas de blocage",
      ],
    },
    { type: "p", texte: "**Cas 3 : Mon compte est bloqué après 3 tentatives**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délai de déblocage automatique** : 24 heures",
        "Si urgent, appelez le **0809 401 401** (numéro non surtaxé, 8h30-19h en semaine)",
        "Munissez-vous de votre numéro fiscal et d'une pièce d'identité",
      ],
    },
    { type: "p", texte: "**Cas 4 : Mon état civil sur Impots ne correspond pas à celui d'ANEF**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "C'est fréquent pour les personnes naturalisées récemment ou ayant changé de nom",
        "Allez dans votre espace particulier > \"Mes démarches\" > \"**Mettre à jour mon état civil**\"",
        "Joignez un acte de naissance ou un livret de famille",
        "Délai de prise en compte : **15 à 30 jours**",
      ],
    },
    {
      type: "p",
      texte: "**Astuce 2026** : si vous venez d'arriver en France et que vous n'avez **jamais déclaré d'impôts**, vous n'avez pas de compte Impots.gouv. Utilisez plutôt **Ameli**, **L'Identité Numérique La Poste**, ou créez un compte ANEF par e-mail.",
    },
    {
      type: "h2",
      texte: "5. Si Ameli refuse votre connexion : carte vitale, code SMS et état civil",
      id: "ameli-refuse",
    },
    {
      type: "p",
      texte: "**Ameli** est le 2e fournisseur le plus utilisé sur ANEF (~24% des connexions). Il a ses propres pièges spécifiques.",
    },
    { type: "p", texte: "**Identifiants requis**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Numéro de Sécurité sociale : **13 chiffres + clé à 2 chiffres** (figure au recto de votre **carte Vitale** et sur votre attestation de droits)",
        "Mot de passe Ameli (8 caractères minimum, **différent** du mot de passe Impots)",
      ],
    },
    { type: "p", texte: "**Erreur 1 : \"Votre numéro n'est pas reconnu\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez que vous saisissez bien les 15 chiffres complets (sans espace, sans tiret)",
        "Si vous êtes affilié récemment (titre de séjour récent), votre numéro peut ne pas encore être actif sur Ameli, délai de **2 à 4 semaines** après affiliation",
        "Solution : utilisez l'application **moncompte.ameli.fr** pour activer votre compte avec le code reçu par courrier",
      ],
    },
    { type: "p", texte: "**Erreur 2 : Code SMS de validation jamais reçu**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez que votre numéro de mobile dans Ameli est à jour : **moncompte.ameli.fr** > \"Mes informations\"",
        "Pour les **numéros étrangers**, Ameli n'envoie pas de SMS sur certains opérateurs hors UE, contournement : enregistrez un numéro français (même temporaire d'un proche) puis changez après",
        "Délai de prise en compte du nouveau numéro : 24h",
      ],
    },
    { type: "p", texte: "**Erreur 3 : \"Compte temporairement bloqué\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Après 3 tentatives erronées : blocage de **30 minutes**",
        "Après 5 tentatives : blocage de **24 heures**",
        "Pas de hotline de déblocage rapide chez Ameli : il faut attendre",
      ],
    },
    { type: "p", texte: "**Erreur 4 : Mon état civil Ameli est différent de celui d'ANEF**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Très fréquent pour les femmes mariées (nom de jeune fille vs nom d'usage)",
        "Mettez à jour Ameli en envoyant une copie de votre **livret de famille** ou **acte de mariage** via la messagerie sécurisée Ameli",
        "Délai : 10-15 jours ouvrés",
      ],
    },
    {
      type: "p",
      texte: "**Astuce 2026** : si vous n'avez **pas encore reçu votre carte Vitale** (cas typique des nouveaux arrivants), vous pouvez quand même créer un compte Ameli avec votre **attestation provisoire d'affiliation** et le numéro de Sécurité sociale qui y figure. Le compte sera consolidé automatiquement à réception de la carte.",
    },
    {
      type: "h2",
      texte: "6. En dernier recours : contacter le support ANEF (formulaire, délais, escalade)",
      id: "support-anef-dernier-recours",
    },
    {
      type: "p",
      texte: "Si malgré toutes ces étapes vous restez bloqué, il est temps de contacter le **support officiel ANEF**. Voici comment maximiser vos chances de réponse rapide.",
    },
    { type: "p", texte: "**Le formulaire de contact officiel**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "URL : **administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide**",
        "Choisissez la rubrique \"**Problème de connexion**\"",
        "Décrivez votre problème **précisément** : message d'erreur exact (avec capture d'écran), date/heure de la tentative, navigateur utilisé, fournisseur FranceConnect choisi",
        "Joignez impérativement :",
        "Capture d'écran du message d'erreur",
        "Photo recto/verso de votre titre de séjour",
        "Numéro AGDREF",
        "Adresse e-mail valide",
      ],
    },
    { type: "p", texte: "**Délais de réponse 2026**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Accusé de réception automatique : **immédiat**",
        "Première réponse humaine : **3 à 10 jours ouvrés** (très variable selon la charge)",
        "Résolution complète : **15 à 45 jours**",
      ],
    },
    { type: "p", texte: "**Téléphone**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pas de hotline directe ANEF pour les usagers (seules les préfectures ont un accès dédié)",
        "Vous pouvez appeler le **3939** (Allô Service Public) qui peut vous orienter, mais ne résout pas les bugs techniques",
      ],
    },
    { type: "p", texte: "**Si rien ne marche : la préfecture en présentiel**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prenez rendez-vous sur le site de votre préfecture",
        "Munissez-vous de tous vos documents (passeport, titre de séjour, justificatif de domicile)",
        "Demandez un **récépissé de demande** si votre titre arrive à expiration, c'est votre droit, ne partez pas sans",
      ],
    },
    { type: "p", texte: "**Escalade ultime : le Défenseur des droits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si la préfecture refuse de vous aider et que votre démarche est urgente (titre expirant, demande de naturalisation bloquée), saisissez gratuitement le **Défenseur des droits** sur defenseurdesdroits.fr",
        "Délai moyen de prise en charge : 4-8 semaines",
      ],
    },
    { type: "p", texte: "**Profitez de l'attente pour préparer le test civique**" },
    {
      type: "p",
      texte: "Pendant que votre dossier ANEF se débloque, ce temps n'est pas perdu : si vous visez une **naturalisation**, vous devrez de toute façon réussir le **test civique** avec **32 bonnes réponses sur 40**. Préparer le test pendant ces semaines d'attente vous fait gagner plusieurs mois sur la durée totale de la procédure. La plateforme **testciviquefrance.fr** vous permet de vous entraîner avec les vraies questions du QCM officiel, et de simuler l'examen dans les conditions réelles. Voir [/articles/comment-reussir-test-civique-premier-coup](/articles/comment-reussir-test-civique-premier-coup) pour la méthode complète.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les blocages **ANEF/FranceConnect** sont frustrants mais rarement dramatiques : dans 9 cas sur 10, ils se règlent en moins de 30 minutes avec les bonnes manipulations, navigation privée, vérification des cookies, mise à jour de l'état civil chez le fournisseur d'identité, ou création d'un **compte ANEF par e-mail** en solution de secours. Si vous gardez ce guide sous la main, vous éviterez de perdre des heures à chercher dans des forums obsolètes. Et profitez de cette période d'attente pour avancer sur ce qui ne dépend pas d'ANEF : la **préparation du test civique de naturalisation**, qui reste l'étape obligatoire pour 100% des candidats à la nationalité française. [Inscrivez-vous gratuitement sur testciviquefrance.fr](/signup) pour commencer dès aujourd'hui votre entraînement aux 40 questions du QCM officiel, vous gagnerez plusieurs mois sur votre dossier global.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour débloquer une connexion ANEF/FranceConnect en moyenne ?",
      reponse: "Dans 70% des cas, en moins de 15 minutes (navigation privée, mise à jour du mot de passe Impots ou Ameli). Dans 25% des cas, sous 24h (réinitialisation par courrier, déblocage automatique). Seuls 5% des cas nécessitent un contact avec le support et 3-10 jours ouvrés.",
    },
    {
      question: "Puis-je utiliser plusieurs fournisseurs FranceConnect (Impots ET Ameli) sur le même compte ANEF ?",
      reponse: "Oui. ANEF accepte plusieurs identités fédérées tant qu'elles correspondent à la même personne (mêmes nom, prénom, date de naissance). C'est même recommandé : si Impots est en panne, vous pouvez basculer sur Ameli sans perdre l'accès à votre dossier.",
    },
    {
      question: "Mon titre de séjour expire dans 15 jours et ANEF refuse ma connexion : que faire ?",
      reponse: "Ne paniquez pas. Prenez immédiatement rendez-vous en préfecture en présentiel pour demander un récépissé de demande de renouvellement. C'est votre droit. Le récépissé prolonge votre droit au séjour et au travail le temps que la situation soit régularisée. Documentez vos tentatives ANEF (captures d'écran) pour prouver votre bonne foi.",
    },
    {
      question: "FranceConnect fonctionne-t-il depuis l'étranger ?",
      reponse: "Techniquement oui, mais en pratique de nombreux usagers connectés depuis l'étranger reçoivent des captchas bloquants ou voient leur connexion refusée pour 'comportement suspect'. Si vous êtes à l'étranger, privilégiez la création d'un compte ANEF par e-mail, ou utilisez un VPN avec serveur français (en sachant que certains VPN sont eux-mêmes bloqués).",
    },
  ],
};

export default article;
