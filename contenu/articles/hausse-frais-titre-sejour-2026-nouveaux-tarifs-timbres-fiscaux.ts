import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-frais-titre-sejour-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux",
  titre: "Hausse des frais de titre de séjour 2026 : nouveaux tarifs, timbres fiscaux et exonérations",
  titreSeo: "Hausse des frais de titre de séjour 2026 : nouveaux tarifs, timbres fiscaux et exonérations",
  resume: "Les frais de titre de séjour augmentent en 2026 : 225 € pour un titre pluriannuel, 200 € pour un changement de statut. Tableau complet des tarifs, exonérations et méthodes de paiement.",
  chapo: "Les frais de titre de séjour augmentent en 2026. Le budget 2026, voté fin 2025, a acté une hausse significative des taxes et timbres fiscaux liés à la délivrance et au renouvellement des titres de séjour en France. Cette augmentation concerne tous les étrangers résidant en France : étudiants, salariés, conjoints de Français, demandeurs de naturalisation et bénéficiaires de la protection internationale.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 15,
  theme: "frais titre de séjour 2026",
  motsCles: [
    "frais titre de séjour 2026",
    "hausse tarifs titre de séjour",
    "combien coûte titre de séjour",
    "timbre fiscal titre de séjour",
    "prix titre de séjour 2026",
    "tarif renouvellement titre séjour",
    "coût carte de séjour 2026",
    "frais préfecture étranger",
    "taxe titre séjour augmentation",
    "budget 2026 immigration",
    "timbres fiscaux titre de séjour",
    "frais naturalisation 2026",
    "prix carte de résident 2026",
    "coût passeport talent",
    "titre séjour étudiant tarif",
    "exonération frais titre séjour",
    "payer titre de séjour en ligne",
    "timbres.impots.gouv.fr",
    "coût total démarches immigration",
    "frais changement statut",
    "combien coûte la naturalisation",
    "hausse frais immigration 2026",
    "nouveau tarif carte séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  blocs: [
    {
      type: "p",
      texte: "Combien coûte un titre de séjour en 2026 ? Quels sont les nouveaux tarifs des timbres fiscaux ? Quelles catégories sont concernées par la hausse ? Ce guide complet détaille tous les montants officiels applicables depuis le 1er janvier 2026, les différences avec 2025, et les moyens de paiement acceptés en préfecture et sur la plateforme ANEF.",
    },
    {
      type: "p",
      texte: "Que vous demandiez un premier titre, un renouvellement, un changement de statut ou une carte de résident, vous trouverez ici le tarif exact à prévoir dans votre budget. Les montants sont conformes au Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA) et aux arrêtés tarifaires en vigueur.",
    },
    {
      type: "h2",
      texte: "Tableau complet des tarifs de titre de séjour 2026",
      id: "tableau-complet-tarifs-2026",
    },
    {
      type: "p",
      texte: "Voici les tarifs officiels des titres de séjour en 2026, incluant la taxe de délivrance et le timbre fiscal (droit de timbre de 25 €) :",
    },
    { type: "p", texte: "**Carte de séjour temporaire (1 an) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Étudiant / stagiaire : 75 € (taxe) + 25 € (timbre) = **100 € au total**",
        "Salarié / travailleur temporaire : 225 € + 25 € = **250 €**",
        "Visiteur : 225 € + 25 € = **250 €**",
        "Vie privée et familiale : 225 € + 25 € = **250 €**",
        "Conjoint de Français (1er titre) : 225 € + 25 € = **250 €**",
        "Travailleur saisonnier : 225 € + 25 € = **250 €**",
      ],
    },
    { type: "p", texte: "**Carte de séjour pluriannuelle (2-4 ans) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport talent : 225 € + 25 € = **250 €**",
        "Salarié pluriannuel : 225 € + 25 € = **250 €**",
        "Conjoint de Français (pluriannuelle) : 225 € + 25 € = **250 €**",
      ],
    },
    { type: "p", texte: "**Carte de résident (10 ans) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Première délivrance : 225 € + 25 € = **250 €**",
        "Renouvellement : 225 € + 25 € = **250 €**",
        "Carte de résident permanent : 225 € + 25 € = **250 €**",
      ],
    },
    { type: "p", texte: "**Cas particuliers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Duplicata (perte/vol) : 225 € + 25 € = **250 €**",
        "Changement d'adresse : **gratuit**",
        "Récépissé : **gratuit**",
        "Document de circulation pour mineur étranger : **gratuit**",
      ],
    },
    { type: "p", texte: "**Naturalisation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal pour décret de naturalisation : **55 €**",
        "Test civique obligatoire : **90 €** (payé au centre agréé)",
      ],
    },
    {
      type: "p",
      texte: "À noter : ces montants incluent la hausse votée dans le budget 2026. La taxe de base a augmenté pour la plupart des catégories par rapport à 2025.",
    },
    {
      type: "h2",
      texte: "Comparaison des tarifs 2025 vs 2026 : ce qui a changé",
      id: "comparaison-tarifs-2025-2026",
    },
    {
      type: "p",
      texte: "Le budget 2026 a modifié plusieurs éléments tarifaires. Voici les changements principaux :",
    },
    { type: "p", texte: "**Ce qui a augmenté :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le droit de timbre reste à 25 € (inchangé)",
        "La taxe pour les titres de séjour salariés et pluriannuels a été revue à la hausse",
        "Les frais de renouvellement sont désormais alignés sur les frais de première délivrance dans la plupart des cas",
      ],
    },
    { type: "p", texte: "**Ce qui reste stable :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les titres étudiants restent à 75 € de taxe (volonté de ne pas pénaliser les étudiants internationaux)",
        "Le récépissé reste gratuit",
        "Le changement d'adresse reste gratuit",
      ],
    },
    { type: "p", texte: "**Ce qui est nouveau en 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le test civique (90 €) est une dépense supplémentaire obligatoire pour obtenir une carte de séjour pluriannuelle, une carte de résident ou la naturalisation",
        "Le contrat d'engagement républicain est désormais obligatoire, mais gratuit",
      ],
    },
    { type: "p", texte: "**Impact global pour un étranger type :**" },
    {
      type: "p",
      texte: "Un salarié en renouvellement pluriannuel doit prévoir : 250 € (titre) + 90 € (test civique) = **340 € minimum**. En 2025, ce même profil payait environ 269 € sans test civique.",
    },
    {
      type: "h2",
      texte: "Comment payer les frais de titre de séjour : timbres fiscaux en ligne",
      id: "comment-payer-titre-sejour",
    },
    { type: "p", texte: "Le paiement des frais de titre de séjour se fait en deux étapes :" },
    { type: "p", texte: "**1. Achat du timbre fiscal électronique :**" },
    {
      type: "p",
      texte: "Le timbre fiscal doit être acheté en ligne sur le site officiel timbres.impots.gouv.fr. Vous recevez un code à 16 chiffres ou un QR code à présenter en préfecture.",
    },
    {
      type: "p",
      texte: "Alternative : vous pouvez aussi acheter le timbre fiscal dans un bureau de tabac agréé.",
    },
    { type: "p", texte: "**2. Paiement de la taxe de délivrance :**" },
    {
      type: "p",
      texte: "La taxe est payée directement en préfecture ou sur la plateforme ANEF selon le type de démarche :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Par carte bancaire en ligne (ANEF)",
        "Par carte bancaire au guichet de la préfecture",
        "Par timbre fiscal électronique",
      ],
    },
    { type: "p", texte: "**Attention aux arnaques :**" },
    {
      type: "p",
      texte: "N'achetez JAMAIS vos timbres fiscaux sur un site autre que timbres.impots.gouv.fr. De nombreux sites frauduleux proposent des timbres à prix majoré ou des faux.",
    },
    { type: "p", texte: "**Remboursement :**" },
    {
      type: "p",
      texte: "Si votre demande est refusée, le timbre fiscal de 25 € n'est pas remboursable. La taxe de délivrance peut faire l'objet d'un remboursement partiel dans certains cas. Conservez tous vos justificatifs de paiement.",
    },
    {
      type: "h2",
      texte: "Frais de titre de séjour selon votre situation personnelle",
      id: "frais-par-situation",
    },
    { type: "p", texte: "Voici le détail des frais selon les situations les plus courantes :" },
    { type: "p", texte: "**Vous êtes étudiant étranger :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Premier titre de séjour étudiant : 100 € (75 € taxe + 25 € timbre)",
        "Renouvellement annuel : 100 €",
        "Changement de statut étudiant → salarié : 250 €",
        "Astuce : certaines bourses couvrent les frais de titre de séjour",
      ],
    },
    { type: "p", texte: "**Vous êtes conjoint de Français :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Premier titre VPF (vie privée et familiale) : 250 €",
        "Renouvellement pluriannuel : 250 €",
        "Demande de carte de résident après 3 ans de mariage : 250 €",
      ],
    },
    { type: "p", texte: "**Vous êtes salarié étranger :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour salarié : 250 €",
        "Passeport talent : 250 €",
        "Changement d'employeur (modification du titre) : selon situation",
      ],
    },
    { type: "p", texte: "**Vous demandez la naturalisation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Timbre fiscal naturalisation : 55 €",
        "Test civique : 90 €",
        "Test de langue française (si nécessaire) : 100-200 € (payé au centre agréé)",
        "Total naturalisation : environ **145-345 €**",
      ],
    },
    { type: "p", texte: "**Vous êtes réfugié / protégé subsidiaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Premier titre de séjour : **gratuit** (exonération totale)",
        "Renouvellement : **gratuit**",
        "Document de voyage : tarif réduit",
      ],
    },
    {
      type: "h2",
      texte: "Exonérations et réductions de frais : qui ne paie pas ?",
      id: "exonerations-reductions",
    },
    {
      type: "p",
      texte: "Certaines catégories d'étrangers bénéficient d'exonérations totales ou partielles :",
    },
    { type: "p", texte: "**Exonération totale (0 €) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réfugiés statutaires et bénéficiaires de la protection subsidiaire",
        "Apatrides",
        "Mineurs étrangers (document de circulation gratuit)",
        "Victimes de traite des êtres humains",
        "Étrangers confiés à l'Aide Sociale à l'Enfance (ASE)",
      ],
    },
    { type: "p", texte: "**Exonération partielle :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certains ressortissants de pays ayant signé des accords bilatéraux avec la France (Algérie, Tunisie, Maroc, certains pays d'Afrique subsaharienne) peuvent bénéficier de tarifs spécifiques",
      ],
    },
    { type: "p", texte: "**Demander une exonération :**" },
    {
      type: "p",
      texte: "Si vous êtes dans une situation de précarité financière avérée, vous pouvez demander une exonération exceptionnelle au préfet. Joignez à votre demande :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un justificatif de revenus",
        "Une attestation CAF",
        "Tout document prouvant votre situation financière",
      ],
    },
    { type: "p", texte: "L'exonération est accordée au cas par cas et n'est pas automatique." },
    {
      type: "h2",
      texte: "Le test civique : un coût supplémentaire de 90 € en 2026",
      id: "test-civique-cout-supplementaire",
    },
    { type: "p", texte: "Depuis le 1er janvier 2026, le test civique est devenu obligatoire pour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'obtention d'une carte de séjour pluriannuelle",
        "L'obtention d'une carte de résident (10 ans)",
        "La naturalisation française",
      ],
    },
    {
      type: "p",
      texte: "Ce test coûte **90 euros**, payés directement au centre agréé lors de l'inscription. Ce montant s'ajoute aux frais de titre de séjour habituels.",
    },
    { type: "p", texte: "**Ce que couvrent les 90 € :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'inscription à l'examen",
        "Le passage de l'épreuve (40 questions QCM, 30 minutes)",
        "La délivrance de l'attestation de réussite",
      ],
    },
    { type: "p", texte: "**En cas d'échec :**" },
    {
      type: "p",
      texte: "Vous pouvez repasser le test autant de fois que nécessaire, mais chaque passage coûte à nouveau 90 €. D'où l'importance de bien se préparer.",
    },
    { type: "p", texte: "**Budget total à prévoir (exemple salarié en renouvellement pluriannuel) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour : 250 €",
        "Test civique : 90 €",
        "Éventuellement test de français : 100-200 €",
        "**Total : 340-540 €**",
      ],
    },
    {
      type: "p",
      texte: "Préparez-vous gratuitement au test civique sur testciviquefrance.fr pour maximiser vos chances de réussir du premier coup et économiser les 90 € d'un second passage.",
    },
    {
      type: "h2",
      texte: "Quand payer ? Délais et calendrier des frais",
      id: "delais-paiement-prefecture",
    },
    { type: "p", texte: "Le paiement intervient à des moments différents selon la démarche :" },
    { type: "p", texte: "**Lors du dépôt de la demande :**" },
    {
      type: "p",
      texte: "Le timbre fiscal de 25 € doit être présenté lors du dépôt du dossier en préfecture ou joint à votre demande ANEF.",
    },
    { type: "p", texte: "**Lors de la remise du titre :**" },
    {
      type: "p",
      texte: "La taxe de délivrance (variable selon le type de titre) est généralement payée au moment du retrait du titre en préfecture.",
    },
    { type: "p", texte: "**Calendrier type pour un renouvellement :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "2-3 mois avant expiration : dépôt sur ANEF",
        "À la convocation préfecture : présentation du timbre fiscal",
        "Lors du retrait du titre : paiement de la taxe restante",
      ],
    },
    { type: "p", texte: "**Si vous ne pouvez pas payer immédiatement :**" },
    {
      type: "p",
      texte: "Il n'existe pas de système de paiement échelonné officiel pour les titres de séjour. Cependant, certaines associations (CIMADE, France Terre d'Asile) peuvent parfois aider financièrement les personnes en difficulté.",
    },
    { type: "p", texte: "**Attention aux délais :**" },
    {
      type: "p",
      texte: "Ne retardez pas votre demande de renouvellement sous prétexte de ne pas avoir les fonds. Un titre expiré peut entraîner une situation irrégulière. Déposez votre demande à temps et régularisez le paiement dès que possible.",
    },
    {
      type: "h2",
      texte: "Erreurs à éviter lors du paiement des frais de titre de séjour",
      id: "erreurs-eviter-paiement",
    },
    { type: "p", texte: "Voici les erreurs les plus fréquentes et comment les éviter :" },
    { type: "p", texte: "**Erreur n°1 : Acheter le mauvais montant de timbre fiscal**" },
    {
      type: "p",
      texte: "Vérifiez le montant exact AVANT d'acheter. Un timbre d'un montant incorrect ne sera pas accepté et ne peut pas toujours être remboursé.",
    },
    { type: "p", texte: "**Erreur n°2 : Acheter sur un site frauduleux**" },
    {
      type: "p",
      texte: "Seul timbres.impots.gouv.fr est officiel. Méfiez-vous des sites avec des URL similaires mais différentes.",
    },
    { type: "p", texte: "**Erreur n°3 : Oublier le timbre le jour du rendez-vous**" },
    {
      type: "p",
      texte: "Préparez votre timbre fiscal au moins une semaine avant votre rendez-vous en préfecture. Note : imprimez-le ou gardez le code sur votre téléphone.",
    },
    { type: "p", texte: "**Erreur n°4 : Ne pas prévoir le coût du test civique**" },
    {
      type: "p",
      texte: "Le test civique (90 €) est un coût séparé, payé au centre agréé. Il ne fait pas partie des frais de préfecture.",
    },
    { type: "p", texte: "**Erreur n°5 : Confondre premier titre et renouvellement**" },
    {
      type: "p",
      texte: "Les tarifs peuvent différer. Vérifiez le tarif correspondant à votre situation exacte.",
    },
    { type: "p", texte: "**Erreur n°6 : Ne pas conserver les justificatifs**" },
    {
      type: "p",
      texte: "Gardez tous les reçus de paiement. En cas de litige ou de demande de remboursement, ils seront indispensables.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les frais de titre de séjour en 2026 ont augmenté suite au vote du budget 2026. Que vous soyez étudiant (100 €), salarié (250 €), conjoint de Français (250 €) ou demandeur de naturalisation (55 € + 90 € de test civique), il est essentiel de connaître le montant exact à prévoir pour votre démarche. N'oubliez pas que le test civique obligatoire représente un coût supplémentaire de 90 €. Préparez-vous bien pour réussir du premier coup, et achetez vos timbres fiscaux uniquement sur le site officiel timbres.impots.gouv.fr.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte un titre de séjour en 2026 ?",
      reponse: "Le coût dépend du type de titre. Un titre étudiant coûte 100 € (75 € de taxe + 25 € de timbre fiscal). Un titre salarié ou vie privée et familiale coûte 250 € (225 € + 25 €). La carte de résident 10 ans coûte également 250 €.",
    },
    {
      question: "Les frais de titre de séjour ont-ils augmenté en 2026 ?",
      reponse: "Oui, le budget 2026 a acté une hausse des tarifs de plusieurs types de titres de séjour. De plus, le test civique obligatoire (90 €) représente un coût supplémentaire nouveau en 2026.",
    },
    {
      question: "Où acheter le timbre fiscal pour le titre de séjour ?",
      reponse: "Le timbre fiscal doit être acheté sur le site officiel timbres.impots.gouv.fr ou dans un bureau de tabac agréé. N'achetez jamais sur un autre site pour éviter les fraudes.",
    },
    {
      question: "Le test civique est-il inclus dans les frais de titre de séjour ?",
      reponse: "Non, le test civique (90 €) est un coût séparé, payé directement au centre agréé. Il s'ajoute aux frais de titre de séjour (250 € en moyenne).",
    },
    {
      question: "Combien coûte la naturalisation française en 2026 ?",
      reponse: "La naturalisation coûte environ 145 € minimum : 55 € de timbre fiscal pour le décret + 90 € pour le test civique. Si un test de français est nécessaire, ajoutez 100 à 200 € supplémentaires.",
    },
    {
      question: "Les réfugiés doivent-ils payer pour leur titre de séjour ?",
      reponse: "Non, les réfugiés statutaires et les bénéficiaires de la protection subsidiaire sont exonérés de tous les frais de titre de séjour (taxe et timbre fiscal).",
    },
    {
      question: "Peut-on payer les frais de titre de séjour en plusieurs fois ?",
      reponse: "Il n'existe pas de système de paiement échelonné officiel. Cependant, des associations comme la CIMADE ou France Terre d'Asile peuvent parfois aider les personnes en difficulté financière.",
    },
    {
      question: "Que se passe-t-il si je ne peux pas payer les frais ?",
      reponse: "Vous pouvez demander une exonération exceptionnelle au préfet en fournissant des justificatifs de revenus et votre situation financière. L'exonération est accordée au cas par cas.",
    },
    {
      question: "Le récépissé de titre de séjour est-il payant ?",
      reponse: "Non, le récépissé est délivré gratuitement. Il atteste que votre demande est en cours de traitement et vous autorise à séjourner légalement en France.",
    },
    {
      question: "Combien coûte un changement de statut étudiant vers salarié ?",
      reponse: "Le changement de statut étudiant vers salarié coûte 250 € (225 € de taxe + 25 € de timbre fiscal). À cela peut s'ajouter le test civique (90 €) si vous demandez une carte pluriannuelle.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Coût du titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F17281",
      type: "officiel",
      description: "Tarifs officiels des taxes et timbres fiscaux pour tous les types de titres de séjour.",
    },
    {
      titre: "Timbres fiscaux en ligne - Site officiel",
      url: "https://timbres.impots.gouv.fr/",
      type: "officiel",
      description: "Achat officiel de timbres fiscaux électroniques pour les démarches administratives.",
    },
    {
      titre: "InfoMigrants - Hausse des frais titre de séjour 2026",
      url: "https://www.infomigrants.net/fr/post/69678/budget-2026-en-france--hausse-des-frais-pour-lobtention-dun-titre-de-sejour",
      type: "article",
      description: "Article détaillant les changements tarifaires votés dans le budget 2026.",
    },
    {
      titre: "CESEDA - Code des étrangers",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Code de l'entrée et du séjour des étrangers et du droit d'asile.",
    },
  ],
  aLireAussi: [
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour via ANEF",
    },
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "Récépissé de titre de séjour : droits et durée",
    },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut étudiant à salarié",
    },
    { slug: "guide-anef-complet-2026-creer-compte-deposer-demande", ancre: "Guide ANEF complet 2026" },
  ],
};

export default article;
