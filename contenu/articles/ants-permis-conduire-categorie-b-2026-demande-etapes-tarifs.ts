import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs",
  titre: "ANTS permis B 2026 : première demande, code, conduite, tarifs (étapes complètes)",
  titreSeo: "ANTS permis B 2026 : première demande, code, conduite, tarifs (étapes complètes)",
  resume: "Première demande de permis B en 2026 ? Tout passer par ANTS : code de la route (30 €), examen de conduite, fabrication du permis. Étapes officielles, tarifs détaillés, délais et solutions aux blocages les plus fréquents.",
  chapo: "Passer le **permis de conduire catégorie B** (voitures jusqu'à 3,5 tonnes) reste en 2026 l'un des examens les plus passés en France : environ **1,5 million de candidats** s'inscrivent chaque année. Depuis 2018, toutes les démarches sont **dématérialisées sur l'ANTS** (Agence nationale des titres sécurisés) : pas de passage en préfecture, tout se fait en ligne sur ants.gouv.fr. Mais le parcours reste long, parfois confus, et coûteux : entre **700 € en candidat libre** et **2 500 € en auto-école traditionnelle**. Ce guide détaille en 6 étapes l'intégralité du processus 2026 : prérequis, demande NEPH sur ANTS, code de la route, conduite, tarifs réels, fabrication du permis. Avec un tableau récapitulatif des coûts et toutes les solutions aux blocages les plus fréquents (numéro NEPH bloqué, place d'examen indisponible, code 96 pour les étrangers).",
  publieLe: "2026-05-10",
  modifieLe: "2026-05-10",
  minutes: 14,
  theme: "ANTS permis B 2026",
  motsCles: [
    "ANTS permis B 2026",
    "permis conduire première demande 2026",
    "NEPH ANTS demande",
    "inscription code route 30 euros",
    "permis B candidat libre 2026",
    "tarif auto-école 2026",
    "fabrication permis conduire ANTS",
    "permis conduire étranger France 2026",
    "code 96 permis conduire",
    "examen pratique permis B 2026",
    "ANTS gouv fr permis",
    "place examen permis conduire",
    "délai fabrication permis B",
    "ASSR permis 2026",
    "auto-école en ligne tarif",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
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
      type: "h2",
      texte: "Prérequis avant inscription : NEPH, ASSR, justificatifs",
      id: "prerequis-inscription",
    },
    {
      type: "p",
      texte: "Avant même d'aller sur ANTS, vérifiez que vous remplissez les **conditions légales** pour passer le permis B en 2026.",
    },
    { type: "p", texte: "**Condition d'âge**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**15 ans** : conduite accompagnée (AAC)",
        "**17 ans** : conduite supervisée",
        "**18 ans** : permis B classique",
      ],
    },
    { type: "p", texte: "**Documents obligatoires à préparer**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Pièce d'identité valide** : carte nationale d'identité, passeport, ou titre de séjour pour les étrangers (recto/verso scanné).",
        "**Justificatif de domicile** de moins de 6 mois (facture EDF, quittance de loyer, avis d'imposition).",
        "**Photo d'identité numérique** au format ANTS (signature électronique incluse, code à 22 caractères obtenu en cabine ou photographe agréé).",
        "**ASSR 2** (Attestation Scolaire de Sécurité Routière niveau 2) : obligatoire si vous êtes né **après le 1er janvier 1988**. Obtenue au collège en classe de 3e. Si perdue : demandez un duplicata à votre ancien établissement.",
        "**Journée Défense et Citoyenneté (JDC)** : pour les Français de 16-25 ans, obligatoire avant le permis. Attestation à télécharger sur majdc.fr.",
        "**Pour les étrangers** : titre de séjour en cours de validité (récépissé accepté) + traduction certifiée si permis étranger à échanger.",
      ],
    },
    { type: "p", texte: "**Le NEPH (Numéro d'Enregistrement Préfectoral Harmonisé)**" },
    {
      type: "p",
      texte: "C'est votre **identifiant unique candidat permis** valable à vie. Il est attribué une seule fois lors de votre première demande sur ANTS. Conservez-le précieusement : sans NEPH, **aucune inscription** au code ou à la conduite n'est possible.",
    },
    { type: "h2", texte: "Étape 1 : demander le NEPH sur ANTS (pas-à-pas)", id: "demande-neph-ants" },
    {
      type: "p",
      texte: "La création du dossier ANTS est **gratuite** et obligatoire pour tous, qu'on passe par auto-école ou en candidat libre.",
    },
    { type: "p", texte: "**Étapes détaillées**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Créer un compte ANTS** sur ants.gouv.fr → \"Mon espace\" → \"Créer un compte\". Utilisez de préférence votre **identifiant FranceConnect** (impôts, Ameli, La Poste) : connexion plus rapide et plus sécurisée.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Accéder au service \"Permis de conduire\"** → \"Je fais une demande en ligne\" → choisir le motif **\"Demande de fabrication d'un titre\"** ou **\"Inscription au permis\"**.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Choisir le motif exact** :"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Première demande de permis\" (vous n'avez jamais eu de permis)",
        "\"Réussite à l'examen\" (vous venez de réussir et demandez la fabrication)",
        "\"Extension de catégorie\" (ajout d'une catégorie à un permis existant)",
        "\"Échange de permis étranger\" (permis hors UE/EEE)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Renseigner l'état civil** : nom, prénom, date et lieu de naissance, nationalité."],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Téléverser les pièces justificatives** au format **PDF, JPG ou PNG**, taille maximale **3 Mo par fichier** :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pièce d'identité (recto/verso)",
        "Justificatif de domicile",
        "Code photo numérique (22 caractères)",
        "ASSR 2 si concerné",
        "Attestation JDC si concerné",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Valider et envoyer**. Vous recevez immédiatement un **numéro de dossier** (différent du NEPH).",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Délai d'instruction** : entre **5 et 15 jours ouvrés** en 2026. Vous recevez un **email confirmant votre NEPH** (format : 12 chiffres). C'est avec ce NEPH que vous pourrez vous inscrire au code et à la conduite.",
      ],
    },
    {
      type: "p",
      texte: "**En cas de refus** : vérifiez votre boîte mail (parfois spam), corrigez les pièces demandées et renvoyez. Pas besoin de recommencer le dossier.",
    },
    {
      type: "h2",
      texte: "Étape 2 : s'inscrire à l'examen du code (auto-école ou candidat libre)",
      id: "inscription-code-route",
    },
    {
      type: "p",
      texte: "Avec votre NEPH en main, vous pouvez vous inscrire à l'**examen du code de la route (ETG : Épreuve théorique générale)**. Tarif officiel **inchangé en 2026 : 30 € par tentative**.",
    },
    { type: "p", texte: "**Deux options possibles**" },
    { type: "p", texte: "**Option 1 : via votre auto-école**" },
    {
      type: "p",
      texte: "L'auto-école s'occupe de tout : inscription, choix du centre, planification. Coût souvent **inclus dans le forfait global** (mais les présentations supplémentaires sont à votre charge).",
    },
    { type: "p", texte: "**Option 2 : en candidat libre**" },
    {
      type: "p",
      texte: "Vous vous inscrivez vous-même via un **opérateur agréé** par le ministère de l'Intérieur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Poste** (lapostecode.fr) : centres dans toutes les villes",
        "**SGS Objectif Code** : 1 800 centres en France",
        "**Bureau Veritas / Code'n'go** : 700 centres",
        "**Pearson Vue / Codeclic** : 600 centres",
        "**Dekra** : 500 centres",
      ],
    },
    { type: "p", texte: "**Étapes inscription candidat libre**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Créez un compte sur le site de l'opérateur de votre choix.",
        "Renseignez votre **NEPH** + état civil.",
        "Choisissez **date, heure et centre** d'examen.",
        "Payez **30 €** en ligne (carte bancaire).",
        "Téléchargez votre **convocation** (à présenter le jour J avec pièce d'identité).",
      ],
    },
    { type: "p", texte: "**Le jour de l'examen**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "40 questions QCM, format vidéo, **35 minutes**.",
        "Réussite : **35 bonnes réponses sur 40** (87,5%).",
        "Résultat : **par email sous 24-48h**, valable **5 ans** (ou 5 présentations à la conduite).",
      ],
    },
    {
      type: "p",
      texte: "**Préparation** : applis officielles (Codes Rousseau, En Voiture Simone, Lepermislibre) entre **20 et 60 €**. Beaucoup d'auto-écoles en ligne incluent le code dans leur forfait global.",
    },
    {
      type: "h2",
      texte: "Étape 3 : la conduite (20h minimum, places d'examen)",
      id: "inscription-conduite",
    },
    {
      type: "p",
      texte: "Une fois le code obtenu, place à la **formation pratique** puis à l'**examen de conduite (épreuve B)**.",
    },
    { type: "p", texte: "**Heures de conduite minimum légales**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Permis B classique** : **20 heures minimum** (article R.213-4 du Code de la route).",
        "**Boîte automatique uniquement** : 13 heures minimum, mais permis limité aux véhicules automatiques.",
        "**Conduite accompagnée (AAC, dès 15 ans)** : 20 heures auto-école + minimum 3 000 km accompagné.",
      ],
    },
    {
      type: "p",
      texte: "**Réalité statistique** : la **moyenne nationale 2026** pour réussir l'examen est de **35 heures** (selon la DSCR, Délégation à la sécurité routière). En auto-école traditionnelle, prévoyez **30 à 40 heures**.",
    },
    { type: "p", texte: "**Inscription à l'examen pratique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Via auto-école : elle dispose d'un **quota de places** par mois selon ses inscriptions.",
        "En candidat libre : vous devez trouver une auto-école qui accepte de **présenter** un candidat libre (rare, comptez **150 à 250 € de frais d'accompagnement**) ou passer par une **auto-école en ligne** type Lepermislibre, Stych, En Voiture Simone qui gèrent la présentation.",
      ],
    },
    { type: "p", texte: "**Délais 2026 pour obtenir une place**" },
    {
      type: "tableau",
      entetes: ["Région", "Délai moyen 1ère présentation", "Délai 2e présentation"],
      lignes: [
        ["Île-de-France", "60 à 90 jours", "30 à 60 jours"],
        ["Région PACA", "50 à 75 jours", "30 à 45 jours"],
        ["Outre-mer", "90 à 120 jours", "60 à 90 jours"],
        ["Régions rurales", "30 à 45 jours", "15 à 30 jours"],
      ],
    },
    {
      type: "p",
      texte: "**L'examen pratique** dure **32 minutes** : conduite urbaine, hors agglomération, manœuvre obligatoire, vérifications techniques. Réussite si vous obtenez **au moins 20 points sur 31** sans **erreur éliminatoire**.",
    },
    {
      type: "p",
      texte: "**Résultat** : disponible sur ANTS sous **48 heures** dans votre espace personnel. Avec mention \"favorable\" = permis obtenu.",
    },
    { type: "h2", texte: "Étape 4 : tarifs réels du permis B en 2026", id: "tarifs-reels-2026" },
    {
      type: "p",
      texte: "Le coût total du permis B varie énormément selon la formule choisie. Voici les **fourchettes réelles 2026** observées sur le marché français.",
    },
    { type: "p", texte: "**Tableau comparatif des coûts 2026**" },
    {
      type: "tableau",
      entetes: ["Poste", "Auto-école traditionnelle", "Auto-école en ligne", "Candidat libre"],
      lignes: [
        ["Frais de dossier ANTS", "0 € (gratuit)", "0 €", "0 €"],
        ["Code (inscription + cours)", "200-400 €", "30-100 €", "30 € (examen) + 0-60 € (appli)"],
        ["Présentation au code", "Inclus", "Inclus", "30 € par tentative"],
        [
          "Formation conduite (20h)",
          "1 100-1 600 €",
          "700-1 100 €",
          "0 € (bénévole) ou 35-50 €/h location voiture double commande",
        ],
        ["Heures supplémentaires (10h en moyenne)", "500-800 €", "300-500 €", "350-500 €"],
        [
          "Présentation pratique",
          "100-200 €",
          "80-150 €",
          "150-250 € (auto-école d'accompagnement)",
        ],
        ["**Total moyen**", "**1 900 à 3 000 €**", "**1 100 à 1 850 €**", "**600 à 900 €**"],
      ],
    },
    { type: "p", texte: "**Aides financières disponibles en 2026**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Permis à 1 € par jour** : prêt à taux zéro de 600 à 1 200 €, garanti par l'État, pour les 15-25 ans (banques partenaires : BNP, Crédit Agricole, Société Générale).",
        "**Aide CPF** : depuis 2024, le **Compte personnel de formation** finance le permis B si **lié au projet professionnel**. Plafond du compte (souvent 5 000 €).",
        "**Aide France Travail** : jusqu'à **1 200 €** pour demandeurs d'emploi en parcours d'insertion.",
        "**Aide régionale** : variable selon les régions (Île-de-France : jusqu'à 800 € ; Hauts-de-France : 500 € ; Occitanie : 500 €).",
        "**Bourse au permis** des communes : 200 à 500 € contre engagement bénévole.",
      ],
    },
    { type: "p", texte: "**Tarif des présentations supplémentaires**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Code : **30 € par session**",
        "Conduite : variable selon auto-école, mais le passage en lui-même reste gratuit (la place vous est attribuée par la préfecture).",
      ],
    },
    {
      type: "h2",
      texte: "Étape 5 : récupérer le permis sur ANTS, code 96 et fabrication",
      id: "recuperer-permis-fabrication",
    },
    {
      type: "p",
      texte: "Vous venez de recevoir votre **certificat d'examen du permis de conduire (CEPC)** avec mention favorable ? Vous pouvez **conduire immédiatement** avec ce document pendant **4 mois maximum**, en attendant le permis définitif format carte bancaire.",
    },
    { type: "p", texte: "**Demander la fabrication du permis sur ANTS**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous sur ants.gouv.fr → espace permis.",
        "Choisissez le motif **\"Réussite à l'examen\"**.",
        "Téléversez :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "CEPC (téléchargé depuis votre espace ANTS)",
        "Photo numérique (code 22 caractères)",
        "Pièce d'identité",
        "Justificatif de domicile récent",
        "Signature numérique",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["Validez. **Aucun frais** de fabrication (gratuit pour la première demande)."],
    },
    { type: "p", texte: "**Délais de fabrication 2026**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délai moyen national** : **2 à 4 semaines** depuis la demande validée.",
        "**Délais constatés en 2026** : entre **15 jours** (régions peu chargées) et **8 semaines** (Île-de-France, période estivale).",
        "Le permis arrive en **lettre recommandée avec accusé de réception** à votre domicile.",
      ],
    },
    { type: "p", texte: "**Le code 96 : pour étrangers et conducteurs de remorques**" },
    {
      type: "p",
      texte: "Le **code 96** est une **mention restrictive** apposée sur le permis B : elle autorise la conduite d'un ensemble véhicule + remorque dont le PTAC total est compris entre 3 500 kg et 4 250 kg, **après une formation complémentaire de 7 heures** dans une auto-école.",
    },
    {
      type: "p",
      texte: "Pour les **étrangers ressortissants hors UE/EEE** : si vous échangez votre permis étranger contre un permis français via ANTS, des codes restrictifs peuvent apparaître selon votre pays d'origine et votre titre de séjour. Vérifiez la **liste officielle des pays ayant un accord de réciprocité** sur service-public.fr.",
    },
    { type: "p", texte: "**Suivi du permis**" },
    {
      type: "p",
      texte: "Sur ants.gouv.fr → \"Suivre ma démarche\" → vous voyez chaque étape : \"En cours d'instruction\", \"Validé\", \"En cours de fabrication\", \"Expédié\". Numéro de suivi La Poste fourni dès l'expédition.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le permis B 2026 reste un parcours exigeant mais entièrement structuré sur ANTS : NEPH d'abord, code (30 €), conduite (20 h minimum), examens, fabrication. Selon votre formule, comptez entre **700 € en candidat libre** et **2 500 € en auto-école traditionnelle**, avec de nombreuses aides disponibles (Permis à 1 €/jour, CPF, France Travail). La clé du succès : préparer méthodiquement chaque étape et ne pas sauter de prérequis. Cette logique d'examen national avec QCM, score minimal et préparation rigoureuse n'est d'ailleurs pas si éloignée de celle du **test civique de naturalisation** : 40 questions, seuil de 32/40, formation préalable indispensable. Si votre projet est plus large que la mobilité, devenir Français, préparez-vous à cet examen national gratuitement sur [testciviquefrance.fr](/signup) et passez le test blanc avant la convocation officielle.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps prend la délivrance du NEPH sur ANTS en 2026 ?",
      reponse: "Entre 5 et 15 jours ouvrés selon la charge des services et la complétude de votre dossier. En cas de pièce manquante, vous recevez un email avec demande de complément, ce qui rallonge de 7 à 10 jours.",
    },
    {
      question: "Puis-je passer le permis B en candidat libre si je suis étranger ?",
      reponse: "Oui, à condition de disposer d'un titre de séjour en cours de validité (récépissé accepté) et d'un justificatif de domicile en France. La procédure ANTS est identique. Attention : certains opérateurs d'auto-école d'accompagnement refusent les candidats libres avec récépissé.",
    },
    {
      question: "Que faire si je ne reçois pas mon permis fabriqué après 8 semaines ?",
      reponse: "Connectez-vous sur ANTS et vérifiez le statut. Si \"En cours de fabrication\" depuis plus de 6 semaines, contactez l'ANTS via le formulaire de contact ou le 34 00 (du lundi au vendredi). Vous pouvez aussi conduire avec votre CEPC pendant 4 mois après réussite.",
    },
    {
      question: "Le code de la route est-il valable combien de temps en 2026 ?",
      reponse: "5 ans à partir de la date de réussite, ou 5 présentations à l'examen pratique. Au-delà, vous devez repasser le code (30 € + nouvelle inscription).",
    },
    {
      question: "L'aide CPF couvre-t-elle 100% du permis B en 2026 ?",
      reponse: "Oui si vous avez assez de droits sur votre CPF (jusqu'à 5 000 €) et si l'auto-école est référencée Qualiopi. Depuis 2024, vous devez justifier que le permis sert un projet professionnel concret (chauffeur, livreur, déplacements pro). Une participation forfaitaire de 102,23 € reste à votre charge depuis avril 2024.",
    },
  ],
};

export default article;
