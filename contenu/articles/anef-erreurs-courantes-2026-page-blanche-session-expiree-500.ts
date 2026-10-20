import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-erreurs-courantes-2026-page-blanche-session-expiree-500`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "anef-erreurs-courantes-2026-page-blanche-session-expiree-500",
  titre: "ANEF erreurs 2026 : page blanche, \"session expirée\", erreur 500, toutes les solutions",
  titreSeo: "ANEF erreurs 2026 : page blanche, \"session expirée\", erreur 500, toutes les solutions",
  resume: "Page blanche après connexion ANEF, message \"session expirée\", erreur 500 ou 404 sur votre demande ? Catalogue complet des 12 erreurs ANEF les plus fréquentes en 2026 et leurs solutions testées : navigateurs, cookies, formats de fichiers, horaires de maintenance.",
  chapo: "Vous êtes en plein milieu de votre demande de titre de séjour sur **ANEF**, vous venez de téléverser 8 pièces justificatives, et voilà qu'une **page blanche** s'affiche. Ou pire : message \"**session expirée**\" qui efface tout votre travail. Ou encore une **erreur 500** moqueuse qui clignote sans explication. En 2026, malgré les améliorations de l'**Administration Numérique pour les Étrangers en France**, ces bugs restent fréquents, particulièrement aux heures de pointe et lors de l'envoi de pièces jointes volumineuses. Ce catalogue répertorie les **12 erreurs ANEF les plus courantes** classées par fréquence, avec pour chacune la cause technique, la solution testée, et un délai de résolution. Vous y trouverez aussi les **prérequis techniques** méconnus, les **horaires de maintenance** officieux, et une **checklist anti-bugs** à appliquer avant chaque dépôt de demande.",
  publieLe: "2026-05-08",
  modifieLe: "2026-05-08",
  minutes: 13,
  theme: "anef erreur page blanche",
  motsCles: [
    "anef erreur page blanche",
    "anef session expiree solution",
    "anef erreur 500 2026",
    "anef erreur 404",
    "anef bug pieces jointes",
    "anef formats fichiers acceptes",
    "anef navigateur recommande",
    "anef cookies javascript",
    "anef horaires maintenance",
    "anef bugs connus contournements",
    "anef checklist demande",
    "anef pdf taille maximum",
    "anef titre sejour erreur technique",
    "administration etrangers france bugs",
    "anef demande bloquee",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3",
  },
  blocs: [
    {
      type: "h2",
      texte: "1. Les 12 erreurs ANEF répertoriées en 2026 : tableau complet",
      id: "douze-erreurs-tableau",
    },
    {
      type: "p",
      texte: "Voici le catalogue complet des **12 erreurs** les plus rencontrées sur **administration-etrangers-en-france.interieur.gouv.fr** en 2026, classées par fréquence d'apparition et accompagnées de leur cause technique et solution.",
    },
    {
      type: "tableau",
      entetes: ["Erreur", "Cause probable", "Solution rapide", "Délai"],
      lignes: [
        [
          "**Page blanche après connexion**",
          "Cookies tiers bloqués / extension navigateur agressive",
          "Navigation privée + désactiver extensions",
          "2 min",
        ],
        [
          "**\"Session expirée\"**",
          "Inactivité > 30 min ou token expiré",
          "Reconnexion + sauvegarder en brouillon tous les 10 min",
          "Immédiat",
        ],
        [
          "**Erreur 500 - Internal Server Error**",
          "Surcharge serveur ANEF (heures de pointe)",
          "Attendre 15-30 min et réessayer",
          "30 min",
        ],
        [
          "**Erreur 404 - Not Found**",
          "URL obsolète ou démarche supprimée",
          "Repartir du tableau de bord ANEF, ne pas utiliser de favoris",
          "1 min",
        ],
        [
          "**Erreur 403 - Forbidden**",
          "Accès non autorisé (rôle ou démarche non disponible pour vous)",
          "Vérifier votre statut (étudiant, salarié, etc.)",
          "Variable",
        ],
        [
          "**\"Fichier trop volumineux\"**",
          "PDF > 5 Mo ou JPG > 5 Mo",
          "Compresser avec smallpdf.com ou ilovepdf.com",
          "5 min",
        ],
        [
          "**\"Format de fichier non accepté\"**",
          "DOC, DOCX, HEIC, TIFF rejetés",
          "Convertir en PDF ou JPG",
          "5 min",
        ],
        [
          "**\"Pièce illisible\"**",
          "Scan trop sombre ou photo floue",
          "Rescanner à 300 DPI minimum",
          "10 min",
        ],
        [
          "**Bouton \"Soumettre\" inactif (grisé)**",
          "Champ obligatoire non rempli en bas de page",
          "Faire défiler toute la page, vérifier les * rouges",
          "2 min",
        ],
        [
          "**Téléchargement bloqué à 99%**",
          "Connexion instable ou pare-feu d'entreprise",
          "Reprendre depuis 4G mobile",
          "5 min",
        ],
        [
          "**\"Une erreur technique est survenue\"**",
          "Bug applicatif générique",
          "Vider cache navigateur + reconnexion",
          "5 min",
        ],
        [
          "**Boucle infinie de redirection**",
          "Conflit FranceConnect + cookies",
          "Navigation privée + autre fournisseur d'identité",
          "3 min",
        ],
      ],
    },
    { type: "p", texte: "**Erreurs critiques nécessitant un signalement**" },
    {
      type: "p",
      texte: "Si vous voyez s'afficher des messages comme \"**Erreur 502 Bad Gateway**\" ou \"**Service indisponible (503)**\" pendant plus de 2 heures, il s'agit d'une panne globale d'ANEF. Vérifiez sur **service-public.fr** ou les comptes officiels @Interieur_Gouv sur les réseaux sociaux pour confirmation. Inutile de multiplier les tentatives, vous risquez de bloquer temporairement votre IP.",
    },
    {
      type: "h2",
      texte: "2. Prérequis techniques 2026 : navigateur, cookies, JavaScript",
      id: "prerequis-techniques",
    },
    {
      type: "p",
      texte: "La majorité des bugs ANEF viennent d'une **mauvaise configuration du navigateur**. Voici les pré-requis officiels et les paramètres recommandés en 2026.",
    },
    { type: "p", texte: "**Navigateurs recommandés (testés en 2026)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Microsoft Edge 120+** : le plus stable avec ANEF, recommandé en priorité",
        "**Google Chrome 120+** : fonctionne bien, attention aux extensions",
        "**Mozilla Firefox 121+** : OK, mais protection anti-pistage à passer en mode \"Standard\"",
        "**Safari 17+ (macOS/iOS)** : fonctionne, parfois lent au téléversement de fichiers",
        "**Brave** : déconseillé en mode \"Shields up\" (bloque trop de cookies)",
        "**Opera, Vivaldi, Tor** : fonctionnement aléatoire, à éviter",
      ],
    },
    { type: "p", texte: "**Paramètres à activer impérativement**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**JavaScript activé** (par défaut sur tous les navigateurs)",
        "**Cookies tiers autorisés** pour les domaines :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: ["*.gouv.fr", "*.interieur.gouv.fr", "*.franceconnect.gouv.fr"],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Pop-ups autorisés** pour ANEF (certaines confirmations s'ouvrent en pop-up)",
        "**Stockage local autorisé** (LocalStorage et SessionStorage)",
      ],
    },
    { type: "p", texte: "**Extensions à désactiver pendant ANEF**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**uBlock Origin** en mode strict",
        "**Privacy Badger**",
        "**Ghostery**",
        "**Adblock Plus** (parfois)",
        "**Honey, Capital One Shopping** (extensions e-commerce qui s'incrustent partout)",
        "**Tout VPN** (NordVPN, ExpressVPN, etc.) : utilisez votre IP réelle française",
      ],
    },
    { type: "p", texte: "**Système d'exploitation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Windows 10/11** : OK",
        "**macOS 13+ (Ventura, Sonoma, Sequoia)** : OK",
        "**Linux Ubuntu 22+ / Debian 12+** : OK avec Firefox",
        "**iOS 16+ / Android 12+** : OK pour les démarches simples, déconseillé pour les téléversements multiples",
      ],
    },
    {
      type: "p",
      texte: "**Astuce 2026** : si vous avez un navigateur récalcitrant, créez un **profil utilisateur dédié** sur Chrome ou Edge (\"Nouveau profil\"), sans aucune extension, uniquement pour vos démarches gouvernementales. Ça résout 80% des bugs.",
    },
    {
      type: "h2",
      texte: "3. Formats de pièces jointes acceptés : règles précises 2026",
      id: "formats-pieces-jointes",
    },
    {
      type: "p",
      texte: "Le **téléversement des pièces justificatives** est le talon d'Achille d'ANEF. Voici les règles strictes applicables en 2026.",
    },
    { type: "p", texte: "**Formats acceptés**" },
    {
      type: "tableau",
      entetes: ["Format", "Type de document", "Taille max"],
      lignes: [
        ["**PDF** (.pdf)", "Documents officiels, contrats, attestations", "**5 Mo**"],
        ["**JPG/JPEG** (.jpg, .jpeg)", "Photos d'identité, scans simples", "**5 Mo**"],
        ["**PNG** (.png)", "Captures d'écran, scans avec transparence", "**5 Mo**"],
      ],
    },
    { type: "p", texte: "**Formats systématiquement rejetés**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**DOC, DOCX** (Word) : convertir en PDF",
        "**ODT, ODS** (LibreOffice) : convertir en PDF",
        "**HEIC, HEIF** (iPhone récents) : convertir en JPG",
        "**TIFF, BMP** (anciens scanners) : convertir en JPG",
        "**ZIP, RAR** (archives) : extraire et envoyer fichier par fichier",
        "**MP4, AVI** (vidéos) : non acceptés, sauf cas exceptionnel",
      ],
    },
    { type: "p", texte: "**Règles de qualité**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Résolution minimale** : 300 DPI pour les scans",
        "**Lisibilité** : tout le texte doit être déchiffrable sans zoomer à 200%",
        "**Pages multiples** : si votre document fait plusieurs pages (ex. fiches de paie sur 3 mois), regroupez tout en **un seul PDF** : n'envoyez pas 3 fichiers séparés",
        "**Couleur** : noir et blanc OK, mais préférez la couleur pour les documents officiels (tampons, signatures)",
        "**Orientation** : vérifiez que le document est dans le bon sens (un PDF à l'envers peut être rejeté pour \"illisibilité\")",
      ],
    },
    { type: "p", texte: "**Comment compresser un PDF trop lourd**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Smallpdf.com** (gratuit jusqu'à 2 fichiers/jour) : option \"Compresser PDF\"",
        "**iLovePDF.com** (gratuit) : compression jusqu'à 80% sans perte de lisibilité",
        "**Adobe Acrobat Pro** (payant, 15-25 €/mois) : compression professionnelle",
        "**PDF24** (gratuit, logiciel téléchargeable Windows) : illimité, sans connexion Internet",
      ],
    },
    { type: "p", texte: "**Comment convertir un HEIC en JPG**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**iPhone** : Photos > sélectionner > Partager > \"Enregistrer comme...\" > JPG",
        "**PC Windows** : ouvrir avec Paint et \"Enregistrer sous\" > JPEG",
        "**En ligne** : heictojpg.com (gratuit, sans inscription)",
      ],
    },
    {
      type: "p",
      texte: "**Astuce 2026** : avant de cliquer sur \"Soumettre\", **téléchargez à nouveau le fichier que vous venez d'uploader** depuis ANEF (icône œil ou télécharger). Si le fichier téléchargé est lisible et complet, votre upload est bon. Sinon, le fichier est corrompu côté serveur, réessayez.",
    },
    {
      type: "h2",
      texte: "4. Horaires de maintenance ANEF : quand éviter de se connecter",
      id: "horaires-maintenance",
    },
    {
      type: "p",
      texte: "ANEF n'affiche pas toujours ses fenêtres de maintenance, mais **certains créneaux** sont à éviter à tout prix si vous ne voulez pas perdre votre travail.",
    },
    { type: "p", texte: "**Maintenance hebdomadaire programmée**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Tous les mercredis** entre **22h et 6h** : maintenance préventive (mise à jour du serveur)",
        "**Tous les dimanches** entre **2h et 5h** : sauvegardes et purge des sessions",
        "**Premier jour de chaque mois** entre **0h et 3h** : bascule mensuelle des compteurs",
      ],
    },
    { type: "p", texte: "**Heures de pointe à éviter**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Lundi matin 8h-10h** : afflux après le week-end, lenteurs et erreurs 500 fréquentes",
        "**Mardi/jeudi midi 12h-14h** : pic d'usagers en pause déjeuner",
        "**Vendredi 16h-18h** : rush avant le week-end, surtout en fin de mois",
        "**Veilles de jours fériés** : comportement instable",
      ],
    },
    { type: "p", texte: "**Heures recommandées pour un dépôt sans bug**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Mardi/jeudi matin entre 9h30 et 11h** : performances optimales",
        "**Mercredi/vendredi après-midi entre 14h30 et 16h** : trafic faible",
        "**Soirée 20h-22h** (sauf mercredi) : quasiment aucun ralentissement",
      ],
    },
    { type: "p", texte: "**Pannes majeures 2025-2026 documentées**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Janvier 2026** : panne de 2 jours suite à mise à jour ratée, résolue par retour arrière",
        "**Mars 2026** : ralentissement extrême lié à l'afflux de demandes pour le **passeport talent**",
        "**Avril 2026** : bug de téléversement (PDF rejetés à tort) corrigé en 5 jours",
      ],
    },
    { type: "p", texte: "**Comment vérifier en temps réel si ANEF est en panne**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**status.franceconnect.gouv.fr** (officiel)",
        "**downdetector.fr/statut/anef** (signalements communautaires)",
        "**Twitter/X** : recherche \"ANEF panne\" trie les tweets en temps réel",
        "**Forums spécialisés** : forum Immigration France, groupe Facebook \"Demandes ANEF\"",
      ],
    },
    {
      type: "p",
      texte: "**Conseil 2026** : si vous avez une **deadline serrée** (titre expirant dans 7 jours), faites votre demande **dès que possible** dans une plage horaire calme, n'attendez pas le dernier jour.",
    },
    {
      type: "h2",
      texte: "5. Les bugs connus de la plateforme ANEF et leurs contournements",
      id: "bugs-connus-contournements",
    },
    {
      type: "p",
      texte: "Au-delà des erreurs génériques, ANEF a quelques **bugs récurrents bien identifiés** par la communauté et les associations d'aide aux étrangers (Cimade, Gisti, Asti). Voici les principaux et leur contournement.",
    },
    { type: "p", texte: "**Bug n°1 : La photo d'identité \"non conforme\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : votre photo respecte les normes ICAO mais ANEF la rejette systématiquement",
        "**Cause** : algorithme de validation trop sévère sur le fond et l'éclairage",
        "**Contournement** : utilisez **photoidentite.fr** ou allez en cabine Photomaton, la photo numérique générée est garantie compatible ANEF",
        "**Astuce** : recadrez à exactement 35 mm × 45 mm avec fond blanc pur (#FFFFFF, pas off-white)",
      ],
    },
    { type: "p", texte: "**Bug n°2 : L'adresse française non reconnue**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : votre adresse réelle ne s'autocomplète pas dans le formulaire",
        "**Cause** : ANEF utilise la base **BAN (Base Adresse Nationale)** qui peut avoir des données obsolètes",
        "**Contournement** : tapez une rue voisine puis modifiez manuellement le numéro",
      ],
    },
    { type: "p", texte: "**Bug n°3 : Le numéro AGDREF refusé**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : votre numéro à 10 chiffres est correct mais ANEF dit \"introuvable\"",
        "**Cause** : décalage entre la base AGDREF et la base ANEF (fréquent les 30 jours suivant la délivrance d'un titre)",
        "**Contournement** : attendre 30 jours, ou contacter votre préfecture pour forcer la synchronisation",
      ],
    },
    { type: "p", texte: "**Bug n°4 : La pièce jointe \"fantôme\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : vous uploadez un fichier, ANEF dit OK, mais à la soumission il indique \"pièce manquante\"",
        "**Cause** : timeout silencieux côté serveur",
        "**Contournement** : après chaque upload, **rafraîchissez la page** (F5) et vérifiez que le fichier est bien listé avant d'en uploader un autre",
      ],
    },
    { type: "p", texte: "**Bug n°5 : Le bouton \"Suivant\" qui ne réagit pas**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : vous cliquez, rien ne se passe",
        "**Cause** : champ caché en haut de page mal rempli (souvent un menu déroulant)",
        "**Contournement** : remontez en haut de page, vérifiez tous les champs avec un astérisque rouge, puis recliquez",
      ],
    },
    { type: "p", texte: "**Bug n°6 : La case à cocher RGPD invisible**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : à la fin du formulaire, le bouton soumettre reste grisé",
        "**Cause** : la case \"**J'accepte les conditions générales**\" est en bas, parfois cachée par le footer du navigateur",
        "**Contournement** : zoomez à 75% (Ctrl+- deux fois) pour voir toute la page",
      ],
    },
    { type: "p", texte: "**Bug n°7 : Le récépissé non téléchargeable**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Symptôme** : votre demande est validée, mais le récépissé en PDF ne se télécharge pas",
        "**Cause** : pop-up bloqué par le navigateur",
        "**Contournement** : autorisez les pop-ups pour le domaine, ou faites un clic droit sur le bouton de téléchargement > \"Ouvrir dans un nouvel onglet\"",
      ],
    },
    {
      type: "h2",
      texte: "6. Checklist anti-bugs : 12 vérifications avant de soumettre une demande",
      id: "checklist-avant-soumission",
    },
    {
      type: "p",
      texte: "Pour éviter de perdre 2 heures de travail à cause d'une erreur technique, appliquez cette checklist **systématiquement** avant chaque clic sur \"**Soumettre ma demande**\".",
    },
    { type: "p", texte: "**Checklist technique (5 minutes)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "☐ Navigateur à jour (Edge ou Chrome 120+)",
        "☐ Navigation privée ou profil dédié sans extensions",
        "☐ Cookies tiers autorisés pour *.gouv.fr",
        "☐ JavaScript activé",
        "☐ Pas de VPN actif",
        "☐ Connexion Internet stable (idéalement filaire ou Wi-Fi 5 GHz)",
      ],
    },
    { type: "p", texte: "**Checklist documents (15 minutes)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "☐ Tous les fichiers en PDF ou JPG (pas de DOCX, HEIC, TIFF)",
        "☐ Aucun fichier > 5 Mo",
        "☐ Tous les scans lisibles à 100% sans zoom",
        "☐ Pages multiples regroupées en un seul PDF",
        "☐ Photo d'identité conforme (35×45 mm, fond blanc, récente)",
      ],
    },
    { type: "p", texte: "**Checklist procédure (5 minutes)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "☐ Capture d'écran de chaque étape clé (au cas où)",
        "☐ Adresse e-mail d'urgence à jour dans le profil ANEF",
        "☐ Numéro de téléphone valide pour la validation SMS",
        "☐ Sauvegarde locale du dossier complet (un dossier \"ANEF_2026\" sur votre PC)",
      ],
    },
    { type: "p", texte: "**Bonus : le brouillon de sécurité**" },
    {
      type: "p",
      texte: "ANEF permet de **sauvegarder en brouillon** à chaque étape. Utilisez cette fonction **toutes les 10 minutes** au minimum. Si une erreur 500 ou une session expirée survient, vous reprenez là où vous en étiez au lieu de tout recommencer.",
    },
    { type: "p", texte: "**Que faire si ça plante quand même ?**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Capture d'écran** du message d'erreur (Print Screen ou Cmd+Maj+4)",
        "**Note** l'heure exacte et la démarche en cours",
        "**Reconnectez-vous** dans 15-30 minutes",
        "Si le bug persiste, ouvrez un ticket via le formulaire d'aide ANEF (voir section 6 de l'article précédent sur [/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions](/articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions))",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les **bugs ANEF** sont la rançon d'une plateforme qui gère des **millions de démarches** chaque année avec une infrastructure encore perfectible. La bonne nouvelle : 95% des erreurs (page blanche, session expirée, erreur 500, fichier rejeté) ont des solutions connues et rapides, il suffit d'appliquer la checklist de la section 6 et de connaître les **horaires creux** pour éviter la quasi-totalité des incidents. Si malgré tout vous restez bloqué, le formulaire de support officiel reste votre meilleur recours, et la Cimade ou les permanences associatives offrent un accompagnement gratuit. Et n'oubliez pas : ANEF n'est qu'**un outil** au service de votre projet. Que vous soyez en demande de titre de séjour, de regroupement familial, ou de naturalisation, l'étape véritablement déterminante reste votre **dossier de fond** : et pour les futurs Français, le **test civique de naturalisation** avec ses 40 questions exigeantes (32 bonnes réponses minimum requises). [Préparez-le sereinement sur testciviquefrance.fr](/signup) pendant que vous gérez vos démarches ANEF : c'est le seul élément qui ne dépend pas d'un serveur ni d'un fonctionnaire, et qui peut faire gagner ou perdre votre demande.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "ANEF a effacé mon brouillon, est-ce récupérable ?",
      reponse: "Malheureusement non dans la majorité des cas : si la session a expiré sans sauvegarde explicite, les données sont perdues côté serveur. C'est pourquoi il faut cliquer sur 'Enregistrer le brouillon' toutes les 10 minutes. Astuce : faites des captures d'écran de chaque page remplie, vous pourrez ressaisir plus vite.",
    },
    {
      question: "Mon PDF fait 4,8 Mo et ANEF le refuse en disant 'fichier trop volumineux'. Pourquoi ?",
      reponse: "ANEF applique parfois une marge de sécurité et rejette les fichiers approchant la limite. Visez 4 Mo maximum pour être tranquille. Compressez avec smallpdf.com ou ilovepdf.com, vous descendrez souvent à 1-2 Mo sans perte visible de qualité.",
    },
    {
      question: "Combien de temps une session ANEF reste-t-elle active sans inactivité ?",
      reponse: "30 minutes en 2026. Au bout de 30 minutes sans clic ni saisie, vous êtes déconnecté avec un message 'session expirée'. Bouger la souris ne suffit pas : il faut cliquer ou saisir du texte pour rafraîchir le compteur.",
    },
    {
      question: "ANEF est en panne le jour où mon titre expire : que faire ?",
      reponse: "Faites une capture d'écran du message d'erreur avec horodatage, et présentez-vous en préfecture en présentiel le lendemain ouvré avec ces preuves. Vous obtiendrez un récépissé qui couvrira la période. La panne d'ANEF n'est jamais retenue contre vous : c'est documenté dans la jurisprudence administrative.",
    },
  ],
};

export default article;
