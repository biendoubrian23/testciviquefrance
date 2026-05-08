/**
 * Articles Batch Mai 2026 — Lot 2
 * 3 articles SEO longs : ANEF FranceConnect bloqué, ANEF erreurs courantes, Échange permis de conduire pays par pays.
 * Publication programmée : 08 mai 2026.
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

// =====================================================================
// Article 1 — ANEF FranceConnect bloqué : 8 solutions
// =====================================================================
export const article1Content: ArticleFullContent = {
  slug: 'anef-franceconnect-bloque-2026-erreur-connexion-solutions',
  introduction: `Vous tentez de vous connecter à votre **espace ANEF** (Administration Numérique pour les Étrangers en France) via **FranceConnect** et rien ne va : "**compte non reconnu**", boucle de redirection infinie entre ANEF et Impots.gouv, captcha qui se rejoue trois fois, ou pire — une page blanche après avoir tapé votre mot de passe Ameli. Vous n'êtes pas seul. En 2026, ce sont des milliers d'usagers qui rencontrent ces blocages chaque semaine, particulièrement aux heures de pointe (entre 9h-11h et 18h-20h). La bonne nouvelle ? Dans 9 cas sur 10, le problème se règle en moins de **30 minutes** sans appeler la préfecture. Ce guide passe en revue les **6 fournisseurs d'identité FranceConnect**, les **8 erreurs les plus fréquentes** en 2026 et leurs solutions testées, ainsi que la procédure d'urgence pour créer un compte ANEF par e-mail si tout échoue.`,
  keywords: [
    'anef franceconnect bloque 2026',
    'anef connexion impossible',
    'franceconnect compte non reconnu anef',
    'anef boucle redirection',
    'anef impots gouv connexion refusee',
    'anef ameli identifiant rejete',
    'anef captcha bloque',
    'creer compte anef email',
    'anef solutions connexion 2026',
    'anef support contact',
    'anef erreur identifiant',
    'franceconnect fournisseurs identite',
    'anef mot de passe oublie',
    'administration numerique etrangers france',
    'anef titre de sejour connexion',
  ],
  sections: [
    {
      id: 'comprendre-franceconnect-anef',
      title: "1. Comprendre FranceConnect : les 6 fournisseurs d'identité acceptés sur ANEF",
      content: `**FranceConnect** n'est pas un compte en soi : c'est un **portail d'authentification fédérée** qui vous permet d'utiliser un identifiant déjà existant (impôts, Ameli, La Poste...) pour accéder à plus de **1 400 services publics**, dont l'**ANEF**. Comprendre ce mécanisme est la première étape pour débloquer votre connexion.

**Les 6 fournisseurs d'identité officiels en 2026**

1. **Impots.gouv.fr** — votre numéro fiscal à 13 chiffres + mot de passe (le plus utilisé, ~62% des connexions ANEF)
2. **Ameli (Assurance Maladie)** — numéro de Sécurité sociale à 13 chiffres + clé à 2 chiffres + mot de passe
3. **L'Identité Numérique La Poste** — application mobile à activer en bureau de poste (gratuit, ~15 minutes)
4. **MSA (Mutualité Sociale Agricole)** — pour les ressortissants du régime agricole uniquement
5. **France Identité** — la nouvelle carte d'identité électronique (CNIe) avec puce, scannée par smartphone
6. **Yris (ex-MobileConnect & moi)** — solution mobile alternative, utilisée surtout par les opérateurs télécoms

**Pourquoi votre connexion peut échouer**

Quand vous cliquez sur "**Se connecter avec FranceConnect**" sur **administration-etrangers-en-france.interieur.gouv.fr**, voici ce qui se passe en coulisses :
- ANEF redirige votre navigateur vers FranceConnect (api.franceconnect.gouv.fr)
- FranceConnect vous redirige vers le fournisseur choisi (ex. Impots.gouv)
- Vous vous authentifiez chez le fournisseur
- Le fournisseur renvoie un **jeton signé** à FranceConnect
- FranceConnect transmet ce jeton à ANEF, qui ouvre votre dossier

Une rupture à n'importe laquelle de ces 5 étapes = échec de connexion. C'est pourquoi le message d'erreur est souvent vague ("compte non reconnu", "session expirée") : ANEF ne sait pas toujours **où** ça a coincé.

**Pré-requis 2026** : navigateur à jour (Chrome 120+, Firefox 121+, Safari 17+, Edge 120+), **cookies tiers autorisés**, JavaScript activé, pas de bloqueur agressif type uBlock en mode strict.`,
    },
    {
      id: 'huit-erreurs-courantes',
      title: '2. Les 8 erreurs FranceConnect/ANEF les plus fréquentes en 2026 (et leurs solutions)',
      content: `Voici les 8 messages d'erreur que rencontrent **plus de 80% des usagers bloqués**, classés par fréquence décroissante.

**Erreur n°1 — "Votre compte FranceConnect n'a pas été reconnu"**
- **Cause** : votre identifiant fiscal/Ameli est correct, mais l'état civil ne correspond pas exactement à celui enregistré dans ANEF (accent oublié, nom de jeune fille vs nom marital, prénom composé tronqué).
- **Solution** : connectez-vous d'abord directement sur **impots.gouv.fr** ou **ameli.fr** sans passer par FranceConnect, vérifiez votre état civil ligne par ligne, corrigez les écarts. Réessayez ensuite ANEF.

**Erreur n°2 — Boucle de redirection infinie entre ANEF et le fournisseur**
- **Cause** : conflit de cookies tiers, souvent lié à un cookie expiré stocké par votre navigateur.
- **Solution** : ouvrez une **fenêtre de navigation privée** (Ctrl+Shift+N sur Chrome, Ctrl+Shift+P sur Firefox) et reconnectez-vous. Si ça marche, videz les cookies du navigateur normal pour les domaines ".gouv.fr".

**Erreur n°3 — "Identifiants incorrects" alors qu'ils sont bons**
- **Cause** : votre mot de passe Impots/Ameli a expiré (ils forcent un changement tous les **12 à 18 mois**), ou votre compte a été temporairement bloqué après 3 tentatives erronées.
- **Solution** : utilisez "**Mot de passe oublié**" sur impots.gouv.fr. Vous recevrez un nouveau mot de passe par courrier postal sous **5 à 10 jours ouvrés** (pas par e-mail pour des raisons de sécurité).

**Erreur n°4 — Captcha "Je ne suis pas un robot" qui ne se valide jamais**
- **Cause** : votre IP est marquée comme suspecte (VPN, proxy, réseau d'entreprise, ou simplement trop de tentatives sur 24h).
- **Solution** : désactivez tout VPN/proxy, passez en **4G mobile** (changement d'IP), ou attendez 30 minutes avant de réessayer. Si vous êtes au bureau, essayez depuis chez vous.

**Erreur n°5 — Page blanche après avoir cliqué sur "Continuer"**
- **Cause** : extension navigateur qui bloque les redirections (uBlock, Privacy Badger, Brave Shields).
- **Solution** : désactivez **toutes** les extensions, ou utilisez un autre navigateur. Edge fonctionne particulièrement bien avec ANEF en 2026.

**Erreur n°6 — "Le service est temporairement indisponible"**
- **Cause** : maintenance ANEF (généralement entre **22h et 6h**) ou panne FranceConnect.
- **Solution** : vérifiez l'état du service sur **status.franceconnect.gouv.fr** et **service-public.fr**. Réessayez dans 1-2 heures.

**Erreur n°7 — "Votre dossier n'a pas été retrouvé" après connexion réussie**
- **Cause** : votre numéro de dossier étranger (AGDREF) n'est pas encore lié à votre compte FranceConnect.
- **Solution** : créez un compte ANEF par e-mail (voir section 3) et reliez manuellement votre numéro AGDREF (à 10 chiffres figurant sur votre titre de séjour).

**Erreur n°8 — Code SMS jamais reçu (validation à 2 facteurs)**
- **Cause** : numéro de mobile obsolète chez Ameli/Impots, ou opérateur étranger non reconnu.
- **Solution** : mettez à jour votre numéro **directement chez le fournisseur** (Ameli ou Impots), pas sur ANEF. Le délai de prise en compte est de 24-48h.`,
    },
    {
      id: 'creer-compte-anef-email',
      title: "3. Solution alternative : créer un compte ANEF par e-mail (procédure 2026)",
      content: `Si FranceConnect refuse obstinément, vous pouvez **créer un compte ANEF directement avec une adresse e-mail**. C'est moins pratique pour les démarches futures, mais ça débloque la situation immédiatement.

**Étapes complètes (durée estimée : 12 minutes)**

1. Rendez-vous sur **administration-etrangers-en-france.interieur.gouv.fr**
2. Cliquez sur "**Créer mon compte**" (bouton en haut à droite)
3. Choisissez l'option "**Avec une adresse e-mail**" (et non FranceConnect)
4. Renseignez :
   - Adresse e-mail valide (Gmail, Outlook, Yahoo OK ; e-mails jetables type yopmail rejetés)
   - Mot de passe : **12 caractères minimum**, avec majuscule, minuscule, chiffre, caractère spécial
   - Nom et prénom **exactement** comme sur votre titre de séjour
   - Date de naissance
   - Pays de naissance
   - Numéro AGDREF (10 chiffres au dos de votre titre de séjour)
5. Cochez les CGU et validez
6. Vous recevez un **e-mail de confirmation** sous 5 minutes (vérifiez vos spams)
7. Cliquez sur le lien dans l'e-mail (**valable 24h**) pour activer le compte
8. Connectez-vous une première fois et complétez votre profil

**Documents à avoir sous la main**
- Titre de séjour en cours de validité (ou récépissé)
- Passeport
- Justificatif de domicile de moins de 3 mois

**Limitations du compte e-mail vs FranceConnect**
- Pas de pré-remplissage automatique des données fiscales
- Vérification manuelle parfois requise pour certaines démarches sensibles (changement de statut)
- Risque légèrement plus élevé de demande de pièces complémentaires

Une fois votre démarche urgente terminée, vous pourrez **lier ultérieurement** ce compte à FranceConnect dans les paramètres.`,
    },
    {
      id: 'impots-gouv-refuse',
      title: "4. Si Impots.gouv refuse votre connexion : procédure de récupération complète",
      content: `**Impots.gouv.fr** est le fournisseur d'identité le plus utilisé pour ANEF, mais aussi le plus problématique en cas d'oubli. Voici la marche à suivre selon votre situation.

**Cas 1 — J'ai oublié mon mot de passe**
1. Allez sur **impots.gouv.fr** > "Votre espace particulier"
2. Cliquez sur "**Mot de passe oublié**"
3. Renseignez votre **numéro fiscal** (13 chiffres, en haut à gauche de votre dernier avis d'imposition)
4. Choisissez le mode de récupération :
   - **Par e-mail** (instantané, mais seulement si votre e-mail est déjà enregistré)
   - **Par courrier postal** (5-10 jours ouvrés, à votre adresse fiscale)
5. Réinitialisez le mot de passe (8 caractères minimum, mais visez 12 pour la sécurité)

**Cas 2 — Je ne connais pas mon numéro fiscal**
- Il figure sur **tous vos avis d'imposition** depuis 5 ans
- Si vous n'avez aucun avis (jamais imposé en France), demandez-le au **centre des Finances publiques** de votre commune (gratuit, en moins de 15 minutes au guichet)
- Vous pouvez aussi le récupérer via **la messagerie sécurisée** de votre espace impots, mais il faut déjà être connecté — donc ça ne sert pas en cas de blocage

**Cas 3 — Mon compte est bloqué après 3 tentatives**
- **Délai de déblocage automatique** : 24 heures
- Si urgent, appelez le **0809 401 401** (numéro non surtaxé, 8h30-19h en semaine)
- Munissez-vous de votre numéro fiscal et d'une pièce d'identité

**Cas 4 — Mon état civil sur Impots ne correspond pas à celui d'ANEF**
- C'est fréquent pour les personnes naturalisées récemment ou ayant changé de nom
- Allez dans votre espace particulier > "Mes démarches" > "**Mettre à jour mon état civil**"
- Joignez un acte de naissance ou un livret de famille
- Délai de prise en compte : **15 à 30 jours**

**Astuce 2026** : si vous venez d'arriver en France et que vous n'avez **jamais déclaré d'impôts**, vous n'avez pas de compte Impots.gouv. Utilisez plutôt **Ameli**, **L'Identité Numérique La Poste**, ou créez un compte ANEF par e-mail.`,
    },
    {
      id: 'ameli-refuse',
      title: "5. Si Ameli refuse votre connexion : carte vitale, code SMS et état civil",
      content: `**Ameli** est le 2e fournisseur le plus utilisé sur ANEF (~24% des connexions). Il a ses propres pièges spécifiques.

**Identifiants requis**
- Numéro de Sécurité sociale : **13 chiffres + clé à 2 chiffres** (figure au recto de votre **carte Vitale** et sur votre attestation de droits)
- Mot de passe Ameli (8 caractères minimum, **différent** du mot de passe Impots)

**Erreur 1 — "Votre numéro n'est pas reconnu"**
- Vérifiez que vous saisissez bien les 15 chiffres complets (sans espace, sans tiret)
- Si vous êtes affilié récemment (titre de séjour récent), votre numéro peut ne pas encore être actif sur Ameli — délai de **2 à 4 semaines** après affiliation
- Solution : utilisez l'application **moncompte.ameli.fr** pour activer votre compte avec le code reçu par courrier

**Erreur 2 — Code SMS de validation jamais reçu**
- Vérifiez que votre numéro de mobile dans Ameli est à jour : **moncompte.ameli.fr** > "Mes informations"
- Pour les **numéros étrangers**, Ameli n'envoie pas de SMS sur certains opérateurs hors UE — contournement : enregistrez un numéro français (même temporaire d'un proche) puis changez après
- Délai de prise en compte du nouveau numéro : 24h

**Erreur 3 — "Compte temporairement bloqué"**
- Après 3 tentatives erronées : blocage de **30 minutes**
- Après 5 tentatives : blocage de **24 heures**
- Pas de hotline de déblocage rapide chez Ameli — il faut attendre

**Erreur 4 — Mon état civil Ameli est différent de celui d'ANEF**
- Très fréquent pour les femmes mariées (nom de jeune fille vs nom d'usage)
- Mettez à jour Ameli en envoyant une copie de votre **livret de famille** ou **acte de mariage** via la messagerie sécurisée Ameli
- Délai : 10-15 jours ouvrés

**Astuce 2026** : si vous n'avez **pas encore reçu votre carte Vitale** (cas typique des nouveaux arrivants), vous pouvez quand même créer un compte Ameli avec votre **attestation provisoire d'affiliation** et le numéro de Sécurité sociale qui y figure. Le compte sera consolidé automatiquement à réception de la carte.`,
    },
    {
      id: 'support-anef-dernier-recours',
      title: "6. En dernier recours : contacter le support ANEF (formulaire, délais, escalade)",
      content: `Si malgré toutes ces étapes vous restez bloqué, il est temps de contacter le **support officiel ANEF**. Voici comment maximiser vos chances de réponse rapide.

**Le formulaire de contact officiel**
- URL : **administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide**
- Choisissez la rubrique "**Problème de connexion**"
- Décrivez votre problème **précisément** : message d'erreur exact (avec capture d'écran), date/heure de la tentative, navigateur utilisé, fournisseur FranceConnect choisi
- Joignez impérativement :
  - Capture d'écran du message d'erreur
  - Photo recto/verso de votre titre de séjour
  - Numéro AGDREF
  - Adresse e-mail valide

**Délais de réponse 2026**
- Accusé de réception automatique : **immédiat**
- Première réponse humaine : **3 à 10 jours ouvrés** (très variable selon la charge)
- Résolution complète : **15 à 45 jours**

**Téléphone**
- Pas de hotline directe ANEF pour les usagers (seules les préfectures ont un accès dédié)
- Vous pouvez appeler le **3939** (Allô Service Public) qui peut vous orienter, mais ne résout pas les bugs techniques

**Si rien ne marche : la préfecture en présentiel**
- Prenez rendez-vous sur le site de votre préfecture
- Munissez-vous de tous vos documents (passeport, titre de séjour, justificatif de domicile)
- Demandez un **récépissé de demande** si votre titre arrive à expiration — c'est votre droit, ne partez pas sans

**Escalade ultime : le Défenseur des droits**
- Si la préfecture refuse de vous aider et que votre démarche est urgente (titre expirant, demande de naturalisation bloquée), saisissez gratuitement le **Défenseur des droits** sur defenseurdesdroits.fr
- Délai moyen de prise en charge : 4-8 semaines

**Profitez de l'attente pour préparer le test civique**

Pendant que votre dossier ANEF se débloque, ce temps n'est pas perdu : si vous visez une **naturalisation**, vous devrez de toute façon réussir le **test civique** avec **32 bonnes réponses sur 40**. Préparer le test pendant ces semaines d'attente vous fait gagner plusieurs mois sur la durée totale de la procédure. La plateforme **testciviquefrance.fr** vous permet de vous entraîner avec les vraies questions du QCM officiel, et de simuler l'examen dans les conditions réelles. Voir [/articles/comment-reussir-test-civique-premier-coup](/articles/comment-reussir-test-civique-premier-coup) pour la méthode complète.`,
    },
  ],
  conclusion: `Les blocages **ANEF/FranceConnect** sont frustrants mais rarement dramatiques : dans 9 cas sur 10, ils se règlent en moins de 30 minutes avec les bonnes manipulations — navigation privée, vérification des cookies, mise à jour de l'état civil chez le fournisseur d'identité, ou création d'un **compte ANEF par e-mail** en solution de secours. Si vous gardez ce guide sous la main, vous éviterez de perdre des heures à chercher dans des forums obsolètes. Et profitez de cette période d'attente pour avancer sur ce qui ne dépend pas d'ANEF : la **préparation du test civique de naturalisation**, qui reste l'étape obligatoire pour 100% des candidats à la nationalité française. [Inscrivez-vous gratuitement sur testciviquefrance.fr](/signup) pour commencer dès aujourd'hui votre entraînement aux 40 questions du QCM officiel — vous gagnerez plusieurs mois sur votre dossier global.`,
  faq: [
    {
      question: "Combien de temps faut-il pour débloquer une connexion ANEF/FranceConnect en moyenne ?",
      answer: "Dans 70% des cas, en moins de 15 minutes (navigation privée, mise à jour du mot de passe Impots ou Ameli). Dans 25% des cas, sous 24h (réinitialisation par courrier, déblocage automatique). Seuls 5% des cas nécessitent un contact avec le support et 3-10 jours ouvrés.",
    },
    {
      question: "Puis-je utiliser plusieurs fournisseurs FranceConnect (Impots ET Ameli) sur le même compte ANEF ?",
      answer: "Oui. ANEF accepte plusieurs identités fédérées tant qu'elles correspondent à la même personne (mêmes nom, prénom, date de naissance). C'est même recommandé : si Impots est en panne, vous pouvez basculer sur Ameli sans perdre l'accès à votre dossier.",
    },
    {
      question: "Mon titre de séjour expire dans 15 jours et ANEF refuse ma connexion : que faire ?",
      answer: "Ne paniquez pas. Prenez immédiatement rendez-vous en préfecture en présentiel pour demander un récépissé de demande de renouvellement. C'est votre droit. Le récépissé prolonge votre droit au séjour et au travail le temps que la situation soit régularisée. Documentez vos tentatives ANEF (captures d'écran) pour prouver votre bonne foi.",
    },
    {
      question: "FranceConnect fonctionne-t-il depuis l'étranger ?",
      answer: "Techniquement oui, mais en pratique de nombreux usagers connectés depuis l'étranger reçoivent des captchas bloquants ou voient leur connexion refusée pour 'comportement suspect'. Si vous êtes à l'étranger, privilégiez la création d'un compte ANEF par e-mail, ou utilisez un VPN avec serveur français (en sachant que certains VPN sont eux-mêmes bloqués).",
    },
  ],
};

// =====================================================================
// Article 2 — ANEF erreurs courantes (page blanche, 500, session)
// =====================================================================
export const article2Content: ArticleFullContent = {
  slug: 'anef-erreurs-courantes-2026-page-blanche-session-expiree-500',
  introduction: `Vous êtes en plein milieu de votre demande de titre de séjour sur **ANEF**, vous venez de téléverser 8 pièces justificatives, et voilà qu'une **page blanche** s'affiche. Ou pire : message "**session expirée**" qui efface tout votre travail. Ou encore une **erreur 500** moqueuse qui clignote sans explication. En 2026, malgré les améliorations de l'**Administration Numérique pour les Étrangers en France**, ces bugs restent fréquents — particulièrement aux heures de pointe et lors de l'envoi de pièces jointes volumineuses. Ce catalogue répertorie les **12 erreurs ANEF les plus courantes** classées par fréquence, avec pour chacune la cause technique, la solution testée, et un délai de résolution. Vous y trouverez aussi les **prérequis techniques** méconnus, les **horaires de maintenance** officieux, et une **checklist anti-bugs** à appliquer avant chaque dépôt de demande.`,
  keywords: [
    'anef erreur page blanche',
    'anef session expiree solution',
    'anef erreur 500 2026',
    'anef erreur 404',
    'anef bug pieces jointes',
    'anef formats fichiers acceptes',
    'anef navigateur recommande',
    'anef cookies javascript',
    'anef horaires maintenance',
    'anef bugs connus contournements',
    'anef checklist demande',
    'anef pdf taille maximum',
    'anef titre sejour erreur technique',
    'administration etrangers france bugs',
    'anef demande bloquee',
  ],
  sections: [
    {
      id: 'douze-erreurs-tableau',
      title: '1. Les 12 erreurs ANEF répertoriées en 2026 : tableau complet',
      content: `Voici le catalogue complet des **12 erreurs** les plus rencontrées sur **administration-etrangers-en-france.interieur.gouv.fr** en 2026, classées par fréquence d'apparition et accompagnées de leur cause technique et solution.

| Erreur | Cause probable | Solution rapide | Délai |
|--------|----------------|-----------------|-------|
| **Page blanche après connexion** | Cookies tiers bloqués / extension navigateur agressive | Navigation privée + désactiver extensions | 2 min |
| **"Session expirée"** | Inactivité > 30 min ou token expiré | Reconnexion + sauvegarder en brouillon tous les 10 min | Immédiat |
| **Erreur 500 - Internal Server Error** | Surcharge serveur ANEF (heures de pointe) | Attendre 15-30 min et réessayer | 30 min |
| **Erreur 404 - Not Found** | URL obsolète ou démarche supprimée | Repartir du tableau de bord ANEF, ne pas utiliser de favoris | 1 min |
| **Erreur 403 - Forbidden** | Accès non autorisé (rôle ou démarche non disponible pour vous) | Vérifier votre statut (étudiant, salarié, etc.) | Variable |
| **"Fichier trop volumineux"** | PDF > 5 Mo ou JPG > 5 Mo | Compresser avec smallpdf.com ou ilovepdf.com | 5 min |
| **"Format de fichier non accepté"** | DOC, DOCX, HEIC, TIFF rejetés | Convertir en PDF ou JPG | 5 min |
| **"Pièce illisible"** | Scan trop sombre ou photo floue | Rescanner à 300 DPI minimum | 10 min |
| **Bouton "Soumettre" inactif (grisé)** | Champ obligatoire non rempli en bas de page | Faire défiler toute la page, vérifier les * rouges | 2 min |
| **Téléchargement bloqué à 99%** | Connexion instable ou pare-feu d'entreprise | Reprendre depuis 4G mobile | 5 min |
| **"Une erreur technique est survenue"** | Bug applicatif générique | Vider cache navigateur + reconnexion | 5 min |
| **Boucle infinie de redirection** | Conflit FranceConnect + cookies | Navigation privée + autre fournisseur d'identité | 3 min |

**Erreurs critiques nécessitant un signalement**

Si vous voyez s'afficher des messages comme "**Erreur 502 Bad Gateway**" ou "**Service indisponible (503)**" pendant plus de 2 heures, il s'agit d'une panne globale d'ANEF. Vérifiez sur **service-public.fr** ou les comptes officiels @Interieur_Gouv sur les réseaux sociaux pour confirmation. Inutile de multiplier les tentatives — vous risquez de bloquer temporairement votre IP.`,
    },
    {
      id: 'prerequis-techniques',
      title: '2. Prérequis techniques 2026 : navigateur, cookies, JavaScript',
      content: `La majorité des bugs ANEF viennent d'une **mauvaise configuration du navigateur**. Voici les pré-requis officiels et les paramètres recommandés en 2026.

**Navigateurs recommandés (testés en 2026)**

- **Microsoft Edge 120+** — le plus stable avec ANEF, recommandé en priorité
- **Google Chrome 120+** — fonctionne bien, attention aux extensions
- **Mozilla Firefox 121+** — OK, mais protection anti-pistage à passer en mode "Standard"
- **Safari 17+ (macOS/iOS)** — fonctionne, parfois lent au téléversement de fichiers
- **Brave** — déconseillé en mode "Shields up" (bloque trop de cookies)
- **Opera, Vivaldi, Tor** — fonctionnement aléatoire, à éviter

**Paramètres à activer impérativement**

1. **JavaScript activé** (par défaut sur tous les navigateurs)
2. **Cookies tiers autorisés** pour les domaines :
   - *.gouv.fr
   - *.interieur.gouv.fr
   - *.franceconnect.gouv.fr
3. **Pop-ups autorisés** pour ANEF (certaines confirmations s'ouvrent en pop-up)
4. **Stockage local autorisé** (LocalStorage et SessionStorage)

**Extensions à désactiver pendant ANEF**

- **uBlock Origin** en mode strict
- **Privacy Badger**
- **Ghostery**
- **Adblock Plus** (parfois)
- **Honey, Capital One Shopping** (extensions e-commerce qui s'incrustent partout)
- **Tout VPN** (NordVPN, ExpressVPN, etc.) — utilisez votre IP réelle française

**Système d'exploitation**

- **Windows 10/11** — OK
- **macOS 13+ (Ventura, Sonoma, Sequoia)** — OK
- **Linux Ubuntu 22+ / Debian 12+** — OK avec Firefox
- **iOS 16+ / Android 12+** — OK pour les démarches simples, déconseillé pour les téléversements multiples

**Astuce 2026** : si vous avez un navigateur récalcitrant, créez un **profil utilisateur dédié** sur Chrome ou Edge ("Nouveau profil"), sans aucune extension, uniquement pour vos démarches gouvernementales. Ça résout 80% des bugs.`,
    },
    {
      id: 'formats-pieces-jointes',
      title: '3. Formats de pièces jointes acceptés : règles précises 2026',
      content: `Le **téléversement des pièces justificatives** est le talon d'Achille d'ANEF. Voici les règles strictes applicables en 2026.

**Formats acceptés**

| Format | Type de document | Taille max |
|--------|------------------|------------|
| **PDF** (.pdf) | Documents officiels, contrats, attestations | **5 Mo** |
| **JPG/JPEG** (.jpg, .jpeg) | Photos d'identité, scans simples | **5 Mo** |
| **PNG** (.png) | Captures d'écran, scans avec transparence | **5 Mo** |

**Formats systématiquement rejetés**

- **DOC, DOCX** (Word) — convertir en PDF
- **ODT, ODS** (LibreOffice) — convertir en PDF
- **HEIC, HEIF** (iPhone récents) — convertir en JPG
- **TIFF, BMP** (anciens scanners) — convertir en JPG
- **ZIP, RAR** (archives) — extraire et envoyer fichier par fichier
- **MP4, AVI** (vidéos) — non acceptés, sauf cas exceptionnel

**Règles de qualité**

- **Résolution minimale** : 300 DPI pour les scans
- **Lisibilité** : tout le texte doit être déchiffrable sans zoomer à 200%
- **Pages multiples** : si votre document fait plusieurs pages (ex. fiches de paie sur 3 mois), regroupez tout en **un seul PDF** — n'envoyez pas 3 fichiers séparés
- **Couleur** : noir et blanc OK, mais préférez la couleur pour les documents officiels (tampons, signatures)
- **Orientation** : vérifiez que le document est dans le bon sens (un PDF à l'envers peut être rejeté pour "illisibilité")

**Comment compresser un PDF trop lourd**

1. **Smallpdf.com** (gratuit jusqu'à 2 fichiers/jour) — option "Compresser PDF"
2. **iLovePDF.com** (gratuit) — compression jusqu'à 80% sans perte de lisibilité
3. **Adobe Acrobat Pro** (payant, 15-25 €/mois) — compression professionnelle
4. **PDF24** (gratuit, logiciel téléchargeable Windows) — illimité, sans connexion Internet

**Comment convertir un HEIC en JPG**

- **iPhone** : Photos > sélectionner > Partager > "Enregistrer comme..." > JPG
- **PC Windows** : ouvrir avec Paint et "Enregistrer sous" > JPEG
- **En ligne** : heictojpg.com (gratuit, sans inscription)

**Astuce 2026** : avant de cliquer sur "Soumettre", **téléchargez à nouveau le fichier que vous venez d'uploader** depuis ANEF (icône œil ou télécharger). Si le fichier téléchargé est lisible et complet, votre upload est bon. Sinon, le fichier est corrompu côté serveur — réessayez.`,
    },
    {
      id: 'horaires-maintenance',
      title: "4. Horaires de maintenance ANEF : quand éviter de se connecter",
      content: `ANEF n'affiche pas toujours ses fenêtres de maintenance, mais **certains créneaux** sont à éviter à tout prix si vous ne voulez pas perdre votre travail.

**Maintenance hebdomadaire programmée**

- **Tous les mercredis** entre **22h et 6h** — maintenance préventive (mise à jour du serveur)
- **Tous les dimanches** entre **2h et 5h** — sauvegardes et purge des sessions
- **Premier jour de chaque mois** entre **0h et 3h** — bascule mensuelle des compteurs

**Heures de pointe à éviter**

- **Lundi matin 8h-10h** — afflux après le week-end, lenteurs et erreurs 500 fréquentes
- **Mardi/jeudi midi 12h-14h** — pic d'usagers en pause déjeuner
- **Vendredi 16h-18h** — rush avant le week-end, surtout en fin de mois
- **Veilles de jours fériés** — comportement instable

**Heures recommandées pour un dépôt sans bug**

- **Mardi/jeudi matin entre 9h30 et 11h** — performances optimales
- **Mercredi/vendredi après-midi entre 14h30 et 16h** — trafic faible
- **Soirée 20h-22h** (sauf mercredi) — quasiment aucun ralentissement

**Pannes majeures 2025-2026 documentées**

- **Janvier 2026** : panne de 2 jours suite à mise à jour ratée — résolue par retour arrière
- **Mars 2026** : ralentissement extrême lié à l'afflux de demandes pour le **passeport talent**
- **Avril 2026** : bug de téléversement (PDF rejetés à tort) corrigé en 5 jours

**Comment vérifier en temps réel si ANEF est en panne**

1. **status.franceconnect.gouv.fr** (officiel)
2. **downdetector.fr/statut/anef** (signalements communautaires)
3. **Twitter/X** : recherche "ANEF panne" trie les tweets en temps réel
4. **Forums spécialisés** : forum Immigration France, groupe Facebook "Demandes ANEF"

**Conseil 2026** : si vous avez une **deadline serrée** (titre expirant dans 7 jours), faites votre demande **dès que possible** dans une plage horaire calme — n'attendez pas le dernier jour.`,
    },
    {
      id: 'bugs-connus-contournements',
      title: '5. Les bugs connus de la plateforme ANEF et leurs contournements',
      content: `Au-delà des erreurs génériques, ANEF a quelques **bugs récurrents bien identifiés** par la communauté et les associations d'aide aux étrangers (Cimade, Gisti, Asti). Voici les principaux et leur contournement.

**Bug n°1 — La photo d'identité "non conforme"**
- **Symptôme** : votre photo respecte les normes ICAO mais ANEF la rejette systématiquement
- **Cause** : algorithme de validation trop sévère sur le fond et l'éclairage
- **Contournement** : utilisez **photoidentite.fr** ou allez en cabine Photomaton — la photo numérique générée est garantie compatible ANEF
- **Astuce** : recadrez à exactement 35 mm × 45 mm avec fond blanc pur (#FFFFFF, pas off-white)

**Bug n°2 — L'adresse française non reconnue**
- **Symptôme** : votre adresse réelle ne s'autocomplète pas dans le formulaire
- **Cause** : ANEF utilise la base **BAN (Base Adresse Nationale)** qui peut avoir des données obsolètes
- **Contournement** : tapez une rue voisine puis modifiez manuellement le numéro

**Bug n°3 — Le numéro AGDREF refusé**
- **Symptôme** : votre numéro à 10 chiffres est correct mais ANEF dit "introuvable"
- **Cause** : décalage entre la base AGDREF et la base ANEF (fréquent les 30 jours suivant la délivrance d'un titre)
- **Contournement** : attendre 30 jours, ou contacter votre préfecture pour forcer la synchronisation

**Bug n°4 — La pièce jointe "fantôme"**
- **Symptôme** : vous uploadez un fichier, ANEF dit OK, mais à la soumission il indique "pièce manquante"
- **Cause** : timeout silencieux côté serveur
- **Contournement** : après chaque upload, **rafraîchissez la page** (F5) et vérifiez que le fichier est bien listé avant d'en uploader un autre

**Bug n°5 — Le bouton "Suivant" qui ne réagit pas**
- **Symptôme** : vous cliquez, rien ne se passe
- **Cause** : champ caché en haut de page mal rempli (souvent un menu déroulant)
- **Contournement** : remontez en haut de page, vérifiez tous les champs avec un astérisque rouge, puis recliquez

**Bug n°6 — La case à cocher RGPD invisible**
- **Symptôme** : à la fin du formulaire, le bouton soumettre reste grisé
- **Cause** : la case "**J'accepte les conditions générales**" est en bas, parfois cachée par le footer du navigateur
- **Contournement** : zoomez à 75% (Ctrl+- deux fois) pour voir toute la page

**Bug n°7 — Le récépissé non téléchargeable**
- **Symptôme** : votre demande est validée, mais le récépissé en PDF ne se télécharge pas
- **Cause** : pop-up bloqué par le navigateur
- **Contournement** : autorisez les pop-ups pour le domaine, ou faites un clic droit sur le bouton de téléchargement > "Ouvrir dans un nouvel onglet"`,
    },
    {
      id: 'checklist-avant-soumission',
      title: '6. Checklist anti-bugs : 12 vérifications avant de soumettre une demande',
      content: `Pour éviter de perdre 2 heures de travail à cause d'une erreur technique, appliquez cette checklist **systématiquement** avant chaque clic sur "**Soumettre ma demande**".

**Checklist technique (5 minutes)**

1. ☐ Navigateur à jour (Edge ou Chrome 120+)
2. ☐ Navigation privée ou profil dédié sans extensions
3. ☐ Cookies tiers autorisés pour *.gouv.fr
4. ☐ JavaScript activé
5. ☐ Pas de VPN actif
6. ☐ Connexion Internet stable (idéalement filaire ou Wi-Fi 5 GHz)

**Checklist documents (15 minutes)**

7. ☐ Tous les fichiers en PDF ou JPG (pas de DOCX, HEIC, TIFF)
8. ☐ Aucun fichier > 5 Mo
9. ☐ Tous les scans lisibles à 100% sans zoom
10. ☐ Pages multiples regroupées en un seul PDF
11. ☐ Photo d'identité conforme (35×45 mm, fond blanc, récente)

**Checklist procédure (5 minutes)**

12. ☐ Capture d'écran de chaque étape clé (au cas où)
13. ☐ Adresse e-mail d'urgence à jour dans le profil ANEF
14. ☐ Numéro de téléphone valide pour la validation SMS
15. ☐ Sauvegarde locale du dossier complet (un dossier "ANEF_2026" sur votre PC)

**Bonus : le brouillon de sécurité**

ANEF permet de **sauvegarder en brouillon** à chaque étape. Utilisez cette fonction **toutes les 10 minutes** au minimum. Si une erreur 500 ou une session expirée survient, vous reprenez là où vous en étiez au lieu de tout recommencer.

**Que faire si ça plante quand même ?**

1. **Capture d'écran** du message d'erreur (Print Screen ou Cmd+Maj+4)
2. **Note** l'heure exacte et la démarche en cours
3. **Reconnectez-vous** dans 15-30 minutes
4. Si le bug persiste, ouvrez un ticket via le formulaire d'aide ANEF (voir section 6 de l'article précédent sur [/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions](/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions))`,
    },
  ],
  conclusion: `Les **bugs ANEF** sont la rançon d'une plateforme qui gère des **millions de démarches** chaque année avec une infrastructure encore perfectible. La bonne nouvelle : 95% des erreurs (page blanche, session expirée, erreur 500, fichier rejeté) ont des solutions connues et rapides — il suffit d'appliquer la checklist de la section 6 et de connaître les **horaires creux** pour éviter la quasi-totalité des incidents. Si malgré tout vous restez bloqué, le formulaire de support officiel reste votre meilleur recours, et la Cimade ou les permanences associatives offrent un accompagnement gratuit. Et n'oubliez pas : ANEF n'est qu'**un outil** au service de votre projet. Que vous soyez en demande de titre de séjour, de regroupement familial, ou de naturalisation, l'étape véritablement déterminante reste votre **dossier de fond** — et pour les futurs Français, le **test civique de naturalisation** avec ses 40 questions exigeantes (32 bonnes réponses minimum requises). [Préparez-le sereinement sur testciviquefrance.fr](/signup) pendant que vous gérez vos démarches ANEF : c'est le seul élément qui ne dépend pas d'un serveur ni d'un fonctionnaire, et qui peut faire gagner ou perdre votre demande.`,
  faq: [
    {
      question: "ANEF a effacé mon brouillon, est-ce récupérable ?",
      answer: "Malheureusement non dans la majorité des cas : si la session a expiré sans sauvegarde explicite, les données sont perdues côté serveur. C'est pourquoi il faut cliquer sur 'Enregistrer le brouillon' toutes les 10 minutes. Astuce : faites des captures d'écran de chaque page remplie, vous pourrez ressaisir plus vite.",
    },
    {
      question: "Mon PDF fait 4,8 Mo et ANEF le refuse en disant 'fichier trop volumineux'. Pourquoi ?",
      answer: "ANEF applique parfois une marge de sécurité et rejette les fichiers approchant la limite. Visez 4 Mo maximum pour être tranquille. Compressez avec smallpdf.com ou ilovepdf.com — vous descendrez souvent à 1-2 Mo sans perte visible de qualité.",
    },
    {
      question: "Combien de temps une session ANEF reste-t-elle active sans inactivité ?",
      answer: "30 minutes en 2026. Au bout de 30 minutes sans clic ni saisie, vous êtes déconnecté avec un message 'session expirée'. Bouger la souris ne suffit pas : il faut cliquer ou saisir du texte pour rafraîchir le compteur.",
    },
    {
      question: "ANEF est en panne le jour où mon titre expire — que faire ?",
      answer: "Faites une capture d'écran du message d'erreur avec horodatage, et présentez-vous en préfecture en présentiel le lendemain ouvré avec ces preuves. Vous obtiendrez un récépissé qui couvrira la période. La panne d'ANEF n'est jamais retenue contre vous : c'est documenté dans la jurisprudence administrative.",
    },
  ],
};

// =====================================================================
// Article 3 — Échange permis de conduire étranger en France
// =====================================================================
export const article3Content: ArticleFullContent = {
  slug: 'echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete',
  introduction: `Vous arrivez en France avec un **permis de conduire étranger** et vous vous demandez si vous pouvez l'**échanger** contre un permis français — ou s'il faudra repasser le code et la conduite ? La réponse dépend de **3 catégories** : votre permis vient d'un pays de l'**UE/EEE** (échange direct), d'un pays ayant un **accord bilatéral** avec la France (échange possible sous conditions), ou d'un pays **sans accord** (vous devrez repasser intégralement le permis français). En 2026, la France a des accords avec environ **70 pays** dans le monde — Maroc, Algérie, Tunisie, Canada, Suisse, Brésil, Japon, Corée du Sud, Sénégal, Côte d'Ivoire, et certains états américains seulement. Ce guide complet vous donne la **liste à jour des pays avec accord**, le **détail état par état pour les USA**, la **procédure ANTS pas à pas** (timbre fiscal de **45 €**), les délais, et les solutions si votre pays n'a pas d'accord.`,
  keywords: [
    'echange permis conduire etranger france 2026',
    'liste pays accord permis france',
    'permis maroc echange france',
    'permis algerie echange france',
    'permis tunisie echange france',
    'permis usa france etat par etat',
    'permis californie france',
    'permis floride france',
    'permis quebec canada france',
    'permis suisse france',
    'permis ue echange france',
    'ants permis etranger 45 euros',
    'permis sans accord repasser code',
    'echange permis delais france',
    'permis conduire international france',
  ],
  sections: [
    {
      id: 'trois-categories',
      title: "1. Les 3 catégories de permis étrangers en France 2026",
      content: `Avant de savoir si votre permis est échangeable, identifiez à quelle **catégorie** il appartient. La France distingue **3 grandes familles** de permis étrangers en 2026.

**Catégorie 1 — Permis UE/EEE : reconnaissance automatique**

Si votre permis est délivré par un des **30 pays** de l'Espace économique européen (27 États membres de l'UE + Islande, Liechtenstein, Norvège), il est **automatiquement valide en France** sans aucune formalité, **tant que vous résidez en France à titre principal**. Aucun échange obligatoire, sauf en cas de :
- **Perte ou vol** du permis
- **Infraction** commise en France
- **Renouvellement** (à l'expiration du permis original)

**Catégorie 2 — Permis avec accord bilatéral : échange possible**

Environ **70 pays hors UE** ont signé un accord de réciprocité avec la France. Si votre pays figure sur la liste officielle, vous pouvez **échanger votre permis contre un permis français** dans un délai d'**1 an** suivant l'obtention de votre titre de séjour, sans repasser ni le code ni la conduite. La procédure se fait sur **ANTS** (Agence Nationale des Titres Sécurisés) avec un timbre fiscal de **45 €**.

**Catégorie 3 — Permis sans accord : repasser le permis français**

Si votre pays n'a pas d'accord avec la France (la majorité des pays asiatiques, africains, sud-américains hors quelques exceptions), votre permis étranger est **valide pendant 1 an seulement** après votre arrivée en France (ou après l'obtention de votre premier titre de séjour). Au-delà, vous devez **repasser le code de la route et l'examen pratique** comme un nouveau conducteur.

**Important — la règle du "1 an"**

Dans tous les cas (catégorie 2 ou 3), le compteur démarre à la **date d'obtention de votre premier titre de séjour** longue durée (carte de séjour, visa long séjour valant titre de séjour). Si vous laissez passer ce délai sans entamer la procédure d'échange, **vous perdez le droit à l'échange** et vous devrez repasser le permis français même si votre pays a un accord. C'est l'erreur la plus coûteuse — et la plus fréquente.`,
    },
    {
      id: 'permis-ue-eee',
      title: "2. Permis UE/EEE : échange direct sans formalité",
      content: `Pour les **30 pays** de l'Espace économique européen, votre permis est valable en France sans formalité particulière. Voici la liste complète et les cas où un échange devient obligatoire.

**Liste des 30 pays UE/EEE**

Allemagne, Autriche, Belgique, Bulgarie, Chypre, Croatie, Danemark, Espagne, Estonie, Finlande, France, Grèce, Hongrie, Irlande, Italie, Lettonie, Lituanie, Luxembourg, Malte, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Slovaquie, Slovénie, Suède + Islande, Liechtenstein, Norvège (EEE).

**Quand l'échange devient obligatoire**

1. **Infraction routière commise en France** entraînant un retrait ou une suspension de points → vous devez échanger pour intégrer le système à points français
2. **Renouvellement du permis** (votre permis UE arrive à expiration) → vous le renouvelez en France
3. **Perte ou vol** → vous demandez un duplicata sur ANTS, qui sera un permis français
4. **Permis "à durée limitée"** (certains pays comme l'Espagne ou les Pays-Bas délivrent des permis de 5-10 ans) → renouvellement à l'expiration

**Procédure d'échange UE → France**

Sur **ANTS** (ants.gouv.fr) :
1. Créer un compte ou se connecter via FranceConnect
2. Choisir "**Demande de permis de conduire**" > "**Échange de permis UE/EEE**"
3. Téléverser :
   - Permis UE recto/verso
   - Justificatif d'identité (passeport ou CNI)
   - Justificatif de domicile de moins de 6 mois
   - Photo numérique (ou code photo de cabine agréée)
4. Pas de timbre fiscal pour les permis UE (gratuit)
5. Envoyer votre permis UE original par courrier suivi à l'adresse indiquée

**Délais 2026**
- Traitement standard : **2 à 4 mois**
- Récépissé immédiat (CRPC — certificat de réception du permis de conduire)
- Permis français reçu par courrier recommandé

**Cas particulier — UK (post-Brexit)**

Depuis le Brexit, le **Royaume-Uni n'est plus dans l'UE/EEE**. Cependant, un accord bilatéral spécifique permet l'échange direct des permis britanniques jusqu'à nouvel ordre, avec procédure et timbre identiques aux pays à accord (45 €).`,
    },
    {
      id: 'tableau-pays-accord',
      title: "3. Pays avec accord bilatéral : tableau complet 2026 (~70 pays)",
      content: `Voici la **liste à jour 2026** des principaux pays ayant un accord bilatéral d'échange de permis avec la France. La liste officielle est tenue par le ministère de l'Intérieur et peut être consultée sur **service-public.fr**.

| Pays | Continent | Année accord | Échange possible |
|------|-----------|--------------|------------------|
| **Algérie** | Afrique | 1990 | Oui (toutes catégories) |
| **Maroc** | Afrique | 1989 | Oui (toutes catégories) |
| **Tunisie** | Afrique | 1990 | Oui (toutes catégories) |
| **Sénégal** | Afrique | 2018 | Oui |
| **Côte d'Ivoire** | Afrique | 2017 | Oui |
| **Bénin** | Afrique | 2019 | Oui |
| **Togo** | Afrique | 2018 | Oui |
| **Cameroun** | Afrique | 2017 | Oui |
| **Gabon** | Afrique | 2017 | Oui |
| **Madagascar** | Afrique | 2018 | Oui |
| **Maurice (Île)** | Afrique | 2015 | Oui |
| **Cap-Vert** | Afrique | 2019 | Oui |
| **Afrique du Sud** | Afrique | 2017 | Oui |
| **Canada (Québec)** | Amérique | 2019 | Oui |
| **Canada (autres provinces)** | Amérique | 2019 | Oui (sauf Nunavut) |
| **Brésil** | Amérique | 2017 | Oui |
| **Argentine** | Amérique | 2019 | Oui |
| **Mexique** | Amérique | 2018 | Oui |
| **Colombie** | Amérique | 2018 | Oui |
| **Pérou** | Amérique | 2017 | Oui |
| **Uruguay** | Amérique | 2018 | Oui |
| **Costa Rica** | Amérique | 2018 | Oui |
| **Japon** | Asie | 2017 | Oui |
| **Corée du Sud** | Asie | 2017 | Oui |
| **Singapour** | Asie | 2018 | Oui |
| **Israël** | Asie | 2017 | Oui |
| **Émirats arabes unis** | Asie | 2018 | Oui |
| **Liban** | Asie | 2019 | Oui |
| **Turquie** | Asie/Europe | 2017 | Oui |
| **Suisse** | Europe | 2017 | Oui |
| **Royaume-Uni** | Europe | 2021 | Oui (post-Brexit) |
| **Andorre** | Europe | 2018 | Oui |
| **Monaco** | Europe | — | Oui (assimilé France) |
| **Australie** | Océanie | 2018 | Oui |
| **Nouvelle-Zélande** | Océanie | 2018 | Oui |

**Conditions d'échange (toutes catégories d'accord)**

- Le permis doit avoir été obtenu **avant** votre installation en France
- Vous devez être **résident** en France (titre de séjour ou nationalité)
- La demande doit être faite dans le **délai d'1 an** après obtention du titre de séjour
- Le permis doit être **valide** (pas expiré, pas suspendu, pas annulé)
- Vous devez avoir **18 ans minimum** (21 ans pour les permis poids lourds)

**Pays NOTABLES sans accord 2026**

- **Chine** (sauf Hong Kong et Macao dans certains cas)
- **Inde**
- **Russie**
- **Égypte**
- **Pakistan**
- **Vietnam**
- **Thaïlande**
- **Philippines**
- **Indonésie**
- **Nigeria**
- **Kenya**
- **République Démocratique du Congo**
- **Venezuela**

Si votre pays figure dans cette liste, voir section 5 pour les solutions.`,
    },
    {
      id: 'usa-etat-par-etat',
      title: "4. USA : tableau état par état 2026 (le cas particulier américain)",
      content: `Les **États-Unis** sont un cas unique : il n'y a **pas d'accord fédéral** avec la France. Chaque **État américain** négocie son propre accord. En 2026, environ **30 États** ont un accord, les autres non. Voici le tableau détaillé.

| État américain | Accord avec la France ? | Catégorie échangeable |
|----------------|-------------------------|------------------------|
| **Arkansas** | Oui | B |
| **Caroline du Sud** | Oui | B |
| **Colorado** | Oui | B |
| **Connecticut** | Oui | B |
| **Delaware** | Oui | B |
| **Floride** | Oui | B |
| **Géorgie** | Non | — |
| **Illinois** | Oui | B |
| **Iowa** | Oui | B |
| **Kansas** | Oui | B |
| **Kentucky** | Oui | B |
| **Louisiane** | Oui | B |
| **Maine** | Non | — |
| **Maryland** | Oui | B |
| **Massachusetts** | Oui | B |
| **Michigan** | Oui | B |
| **Minnesota** | Non | — |
| **Missouri** | Oui | B |
| **New Hampshire** | Oui | B |
| **New Jersey** | Oui | B |
| **Ohio** | Oui | B |
| **Oklahoma** | Oui | B |
| **Pennsylvanie** | Oui | B |
| **Texas** | Oui | B |
| **Virginie** | Oui | B |
| **Virginie occidentale** | Oui | B |
| **Wisconsin** | Oui | B |
| **Alaska** | Non | — |
| **Arizona** | Non | — |
| **Californie** | **Non** | — |
| **Hawaï** | Non | — |
| **Idaho** | Non | — |
| **Indiana** | Non | — |
| **Mississippi** | Non | — |
| **Montana** | Non | — |
| **Nebraska** | Non | — |
| **Nevada** | Non | — |
| **New York** | **Non** | — |
| **Caroline du Nord** | Non | — |
| **Dakota du Nord** | Non | — |
| **Oregon** | Non | — |
| **Rhode Island** | Non | — |
| **Dakota du Sud** | Non | — |
| **Tennessee** | Non | — |
| **Utah** | Non | — |
| **Vermont** | Non | — |
| **Washington** | Non | — |
| **Wyoming** | Non | — |
| **District of Columbia (Washington DC)** | Non | — |

**Cas notables**
- **Californie** : pas d'accord, vous devez repasser code + conduite
- **New York** : pas d'accord
- **Floride** : accord OK
- **Texas** : accord OK
- **Caroline du Sud** : accord OK

**Quel État inscrire sur ma demande ANTS ?**

L'État qui figure sur votre **permis américain physique**. Pas votre État de résidence actuel ni votre État de naissance. Si votre permis a été délivré au Texas mais que vous viviez en Californie au moment du déménagement, c'est le **Texas** qui compte (donc accord OK).

**Astuce 2026** : si vous êtes Américain et que votre État n'a pas d'accord, et que vous avez le temps avant de vous installer en France, certains expatriés font l'effort de **passer leur permis dans un État avec accord** (Texas, Floride, Caroline du Sud) lors d'un séjour prolongé chez de la famille — c'est légal tant que vous y avez une adresse de résidence.`,
    },
    {
      id: 'sans-accord-repasser',
      title: "5. Pays sans accord : repasser le permis français (procédure et coûts)",
      content: `Si votre pays (ou votre État américain) **n'a pas d'accord** avec la France, vous avez **1 an** après l'obtention de votre titre de séjour pour conduire avec votre permis étranger (accompagné d'une **traduction officielle** s'il n'est pas en français). Au-delà, vous devez repasser intégralement le permis français.

**Étape 1 — Le code de la route**
- **Inscription** dans une auto-école ou en candidat libre via La Poste/Objectif Code
- **Coût** : 30 € (candidat libre) à 250 € (auto-école avec cours)
- **Examen** : QCM de 40 questions, **35 bonnes réponses minimum** (87,5%)
- **Validité du code** : 5 ans, ou 5 tentatives à l'examen pratique
- **Délai d'obtention** : 1-3 mois selon disponibilité des places

**Étape 2 — La conduite**
- **Heures de conduite obligatoires** : 20h minimum en auto-école (vérifier avec votre instructeur si vos compétences sont déjà avancées)
- **Coût** : entre 1 500 € et 2 500 € selon les régions et auto-écoles
- **Examen pratique** : 32 minutes, évaluation sur la route
- **Note minimale** : 20/31 (avec maîtrise des compétences A, B, C, D, E)

**Coût total moyen 2026**
- Candidat débrouillard : **800-1 200 €**
- Auto-école classique : **1 800-2 500 €**
- Cas difficile (multiples échecs) : jusqu'à **3 500 €**

**Délais réalistes**
- **6 à 12 mois** pour obtenir le permis complet
- Délais d'examen variable selon la région : 1-3 mois pour le code, 2-6 mois pour la conduite

**Équivalences possibles : conduite accompagnée et permis temporaire**

- Si vous avez **plus de 3 ans** d'expérience de conduite à l'étranger, demandez à votre auto-école une **évaluation initiale** : vous pourrez peut-être ne faire que 10h au lieu de 20h
- Certaines auto-écoles proposent un **stage intensif** de 1-2 semaines (souvent 2 000-3 000 € tout compris)
- L'**AAC (apprentissage anticipé de la conduite)** n'est pas accessible aux adultes avec permis étranger : c'est un dispositif jeune

**Astuce 2026** : si vous résidez en France depuis moins de 1 an et que votre pays n'a pas d'accord, conduisez avec votre permis étranger + **traduction agréée** (par traducteur assermenté de la liste officielle des cours d'appel) le temps de préparer le code français. Vous gagnerez 6-12 mois.`,
    },
    {
      id: 'procedure-ants-etape-par-etape',
      title: "6. Procédure ANTS étape par étape : timbre fiscal 45 €, pièces, dépôt",
      content: `Pour les pays avec **accord** (UE/EEE = gratuit, autres = 45 €), voici la procédure détaillée 2026 sur **ANTS** (ants.gouv.fr).

**Étape 1 — Préparer les pièces (durée 30 minutes)**

- **Permis étranger original** recto/verso scanné en PDF ou JPG (max 5 Mo)
- **Traduction officielle** du permis si non rédigé en français (par traducteur assermenté inscrit sur la liste de la cour d'appel — coût moyen : 30-60 €)
- **Justificatif d'identité** : passeport en cours de validité
- **Justificatif de domicile** de moins de 6 mois (facture EDF, Internet, quittance de loyer, attestation d'hébergement)
- **Justificatif de résidence régulière** : titre de séjour (recto/verso) ou récépissé valide
- **Photo numérique récente** (35×45 mm, fond blanc) ou code de cabine agréée ANTS
- **Date d'obtention du permis** étranger (figure sur le titre)

**Étape 2 — Acheter le timbre fiscal**

- Sur **timbres.impots.gouv.fr** (officiel)
- Choisir "**Permis de conduire**" > "**Échange de permis étranger**"
- Montant : **45 €**
- Vous recevez un **e-timbre PDF** par e-mail (à conserver précieusement, valable 1 an)

**Étape 3 — Déposer la demande sur ANTS**

1. Connexion via FranceConnect ou compte ANTS
2. "**Permis de conduire**" > "**Faire une demande**" > "**Échanger un permis étranger**"
3. Choisir le pays d'origine
4. Renseigner les informations du permis (numéro, date délivrance, catégories)
5. Téléverser toutes les pièces
6. Saisir le numéro de l'e-timbre fiscal (16 chiffres)
7. Vérifier le récapitulatif et soumettre

**Étape 4 — Envoyer le permis original par courrier**

ANTS vous indiquera l'adresse postale (centre de traitement spécialisé en fonction de votre département). Envoyez **en lettre suivie ou recommandée avec AR** :
- Permis étranger original (vous le récupérerez avec votre permis français)
- Copie du récépissé ANTS
- Une enveloppe affranchie pour le retour si demandé

**Étape 5 — Suivi et réception**

- **Récépissé ANTS** immédiat (à imprimer, valable pour conduire pendant la procédure)
- Suivi du dossier sur ANTS > "Mes demandes en cours"
- Réception du **permis français** par courrier recommandé sous **3 à 6 mois** (parfois 8-9 mois en période de pic)

**Coût total 2026**
- Timbre fiscal : **45 €** (pays avec accord hors UE)
- Traduction assermentée : **30-60 €** si nécessaire
- Photo numérique : **5-10 €** (gratuite si vous la faites vous-même au bon format)
- Courrier recommandé : **5-8 €**
- **Total : 85-125 €**

Pour les permis UE/EEE, **gratuit** (pas de timbre fiscal).

Pour la procédure complète détaillée, voir aussi [/articles/echanger-permis-conduire-etranger-france-2026-ants-demarches](/articles/echanger-permis-conduire-etranger-france-2026-ants-demarches).`,
    },
    {
      id: 'delais-blocages-solutions',
      title: "7. Délais 2026 et solutions en cas de blocage",
      content: `**Délais moyens constatés 2026**

| Étape | Délai standard | Délai exceptionnel |
|-------|----------------|--------------------|
| Récépissé ANTS | Immédiat | 24-48h en cas de bug |
| Traitement de la demande | 3-6 mois | 8-12 mois (afflux) |
| Réception du permis français | + 2 semaines après validation | + 1 mois |

**Pourquoi votre dossier peut être bloqué**

1. **Permis expiré au moment de la demande** → impossible d'échanger, repasser le permis français
2. **Permis falsifié ou suspect** → enquête de l'administration, délai 6-12 mois
3. **Pièce manquante ou illisible** → demande de complément, redémarrage du compteur
4. **Pays retiré de la liste des accords** → cas rare (ex. certains accords suspendus en cas de crise diplomatique)
5. **Litige sur la résidence** → si votre titre de séjour est récent ou contesté

**Que faire si l'attente dépasse 6 mois**

1. Vérifier le statut sur ANTS > "Mes demandes en cours"
2. Si le statut est "En cours d'instruction" depuis plus de 6 mois, faire une **réclamation officielle** via le formulaire ANTS
3. Saisir le **médiateur du ministère de l'Intérieur** si pas de réponse à la réclamation
4. En dernier recours : **recours contentieux** devant le tribunal administratif (avec avocat, 2-4 mois de délai)

**Que faire pendant l'attente ?**

- Conduisez avec votre **récépissé ANTS** + permis étranger original (en cas de contrôle, montrez les deux)
- Si votre récépissé arrive à expiration et que votre permis n'est pas encore délivré, demandez une **prolongation** sur ANTS
- Surveillez votre boîte mail (et les spams) — les demandes de pièces complémentaires y arrivent

**Cas particulier : la perte ou le vol du permis étranger pendant la procédure**

- Déclarez immédiatement la perte/vol au commissariat
- Joignez la déclaration à votre dossier ANTS
- L'instruction continue avec un duplicata délivré par votre pays d'origine (à demander en parallèle)
- Délai allongé : +2-4 mois`,
    },
  ],
  conclusion: `L'**échange de permis étranger** en France en 2026 reste une procédure largement automatisée pour les ressortissants des **30 pays UE/EEE** et des **70 pays avec accord bilatéral** — comptez 45 € de timbre, une bonne traduction si nécessaire, et 3-6 mois d'attente. En revanche, si votre pays n'a pas d'accord (Chine, Inde, Russie, et certains États américains comme la Californie ou New York), il vous faudra repasser intégralement le code et la conduite, soit 1 500-2 500 € et 6-12 mois de préparation. La règle d'or : **n'attendez jamais le dernier mois** de votre première année de résidence pour entamer la démarche, sous peine de perdre définitivement le bénéfice de l'échange. Et si votre projet ne s'arrête pas au permis mais s'étend à la **naturalisation française**, n'oubliez pas que le **test civique** est l'une des étapes clés (32 bonnes réponses sur 40, niveau B1 français requis) — la maîtrise des règles de circulation et des institutions françaises se prépare en parallèle de votre installation. [Inscrivez-vous gratuitement sur testciviquefrance.fr](/signup) pour vous entraîner aux 40 questions officielles dès aujourd'hui : c'est l'investissement le plus rentable de votre intégration administrative.`,
  faq: [
    {
      question: "Mon permis étranger expire dans 6 mois, puis-je encore l'échanger ?",
      answer: "Oui, à condition qu'il soit valide au moment du dépôt de la demande sur ANTS. Si l'instruction se termine après l'expiration, ce n'est pas un problème : la France valide la demande sur la base du permis valide à la date de dépôt. Mais ne tardez pas — dès l'expiration, l'échange n'est plus possible et il faudra repasser le permis français.",
    },
    {
      question: "J'ai laissé passer le délai d'1 an : est-il vraiment trop tard ?",
      answer: "Oui, dans la majorité des cas. La règle est stricte : 1 an après obtention du titre de séjour pour les pays avec accord. Quelques recours existent (force majeure documentée, hospitalisation longue), mais ils sont rarement acceptés. Préparez-vous à repasser le code et la conduite. Bonne nouvelle : avec une expérience de conduite, 10-15 heures suffisent souvent.",
    },
    {
      question: "Mon permis californien n'est pas échangeable. Si je passe un permis texan lors d'un voyage aux USA, ça marche ?",
      answer: "Techniquement oui : la France regarde l'État qui a délivré le permis physique présenté. Mais cela suppose que vous puissiez légalement obtenir un permis texan (résidence aux USA, séjour suffisant). C'est une stratégie connue mais risquée : si l'administration française détecte une manœuvre artificielle, elle peut refuser l'échange.",
    },
    {
      question: "Puis-je conduire un véhicule de location en France avec mon permis étranger ?",
      answer: "Oui, pendant le délai d'1 an suivant votre arrivée. Au-delà, votre permis étranger n'est plus valide pour conduire en France (sauf détention d'un permis international récent, qui a ses propres règles). Les compagnies de location demandent souvent un permis international en complément, surtout pour les permis non latins (chinois, arabe, cyrillique).",
    },
    {
      question: "Combien coûte un traducteur assermenté en 2026 ?",
      answer: "Entre 30 et 60 € pour un permis de conduire (1 page). La liste des traducteurs assermentés est disponible sur le site de chaque cour d'appel (annuaire-traducteurs-assermentes.fr). Comptez 3-7 jours ouvrés pour la traduction. Important : ANTS n'accepte que les traductions par des traducteurs inscrits sur cette liste officielle, pas les traductions agence ou Google Translate.",
    },
  ],
};

// =====================================================================
// Métadonnées Article (pour le listing)
// =====================================================================
export const batch2Metadata: Article[] = [
  {
    id: 'mai-2026-4',
    slug: 'anef-franceconnect-bloque-2026-erreur-connexion-solutions',
    title: 'ANEF FranceConnect bloqué 2026 : 8 solutions quand la connexion ne fonctionne pas',
    excerpt: `FranceConnect refuse votre connexion à ANEF ? Erreur "compte non reconnu", boucle de redirection, identifiant Impots/Ameli rejeté ? 8 solutions concrètes en 2026 pour récupérer l'accès à votre dossier ANEF en moins de 30 minutes.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '08/05/2026',
    readTime: 13,
    views: 0,
    image: 'https://images.unsplash.com/photo-1554224155-3a589877462d?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-5',
    slug: 'anef-erreurs-courantes-2026-page-blanche-session-expiree-500',
    title: 'ANEF erreurs 2026 : page blanche, "session expirée", erreur 500 — toutes les solutions',
    excerpt: `Page blanche après connexion ANEF, message "session expirée", erreur 500 ou 404 sur votre demande ? Catalogue complet des 12 erreurs ANEF les plus fréquentes en 2026 et leurs solutions testées : navigateurs, cookies, formats de fichiers, horaires de maintenance.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '08/05/2026',
    readTime: 13,
    views: 0,
    image: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-6',
    slug: 'echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete',
    title: 'Échange permis de conduire étranger en France 2026 : liste complète des pays avec accord (et ceux sans)',
    excerpt: `Quels permis de conduire étrangers sont échangeables en France en 2026 ? Liste complète des pays avec accord (Maroc, Algérie, Tunisie, Canada, Suisse, USA état par état...) et ceux sans accord. Procédure ANTS, délais (45 €), tarifs et solutions si pas d'accord.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '08/05/2026',
    readTime: 18,
    views: 0,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
];
