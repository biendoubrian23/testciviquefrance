import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-additions.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
  titre: "Niveau B2 naturalisation 2026 : quels diplômes et tests acceptés",
  titreSeo: "Niveau B2 naturalisation 2026 : quels diplômes et tests acceptés",
  resume: "Depuis le 1er janvier 2026, le niveau B2 est exigé pour la naturalisation (avant : B1). Diplômes et tests acceptés (DELF, TCF, TEF), validité, prix et où les passer.",
  chapo: "Depuis le **1er janvier 2026, le niveau B2 est exigé pour la naturalisation française** : alors que le niveau B1 suffisait jusqu'à fin 2025. Ce relèvement, fixé par le [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519) et précisé par l'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463), change concrètement la façon de constituer un dossier. Mais une question revient sans cesse : **quel niveau pour quelle démarche, et comment le justifier ?** Entre A2, B1 et B2, et entre diplômes et tests de langue (TCF, TEF, DELF), il est facile de se tromper de pièce, et un justificatif inadapté ou périmé peut bloquer un dossier entier. Ce guide remet les choses à plat : ce qui a changé en 2026, le niveau requis selon votre titre, comment prouver votre niveau (et pour combien de temps cette preuve reste valable), un comparatif TCF / TEF / DELF, les dispenses prévues par la loi, et le lien à ne pas confondre avec l'examen civique.",
  publieLe: "2026-06-15",
  modifieLe: "2026-06-15",
  minutes: 14,
  theme: "niveau B2 naturalisation",
  motsCles: [
    "niveau B2 naturalisation",
    "niveau de langue naturalisation 2026",
    "B2 nationalité française 2026",
    "TCF naturalisation",
    "TEF naturalisation",
    "DELF B2 naturalisation",
    "justificatif niveau de français naturalisation",
    "arrêté 22 décembre 2025 niveau français",
    "décret 2025-648 naturalisation B2",
    "niveau français carte pluriannuelle A2",
    "niveau français carte résident B1",
    "dispense niveau français naturalisation",
    "validité test TCF TEF naturalisation",
    "niveau de langue et examen civique",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce qui change au 1er janvier 2026 : le passage de B1 à B2 pour la naturalisation",
      id: "ce-qui-change-2026",
    },
    {
      type: "p",
      texte: "Jusqu'au 31 décembre 2025, un niveau **B1** suffisait pour demander la nationalité française. Depuis le **1er janvier 2026, le niveau exigé est le B2** du Cadre européen commun de référence pour les langues (CECRL), à l'oral comme à l'écrit.",
    },
    { type: "p", texte: "**Le fondement juridique**" },
    { type: "p", texte: "Deux textes officiels encadrent ce changement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519), qui modifie le décret n° 93-1362 du 30 décembre 1993 relatif aux décisions de naturalisation. Il relève le niveau de français exigé de B1 à **B2** et introduit l'obligation de réussir un **examen civique**.",
        "L'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463), qui fixe la liste précise des **diplômes et certifications** attestant le niveau B2 requis. Son article 5 prévoit expressément qu'il « entre en vigueur le 1er janvier 2026 ».",
      ],
    },
    { type: "p", texte: "**Qui est concerné**" },
    {
      type: "p",
      texte: "Le niveau B2 s'applique à **toutes les voies d'acquisition de la nationalité** soumises à condition de langue :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "la **naturalisation par décret** (la voie classique, après plusieurs années de résidence) ;",
        "l'**acquisition par mariage** avec un ressortissant français (déclaration au titre de l'article 21-2 du Code civil), comme le confirme [France Diplomatie](https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite).",
      ],
    },
    { type: "p", texte: "**À partir de quand exactement ?**" },
    {
      type: "p",
      texte: "La règle s'applique à toute demande **déposée après le 31 décembre 2025**. Attention : elle vise aussi les dossiers déposés avant cette date mais **incomplets**, pour lesquels un complément serait demandé à partir du 1er janvier 2026. Autrement dit, un dossier ouvert en 2025 mais finalisé en 2026 peut se voir appliquer la nouvelle exigence B2.",
    },
    {
      type: "h2",
      texte: "Quel niveau de français pour quelle démarche en 2026 ?",
      id: "tableau-niveau-par-titre",
    },
    {
      type: "p",
      texte: "Le niveau de langue exigé n'est pas le même selon le titre que vous demandez. Plus le titre engage durablement, plus le niveau attendu est élevé.",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Niveau de français requis", "Évolution"],
      lignes: [
        ["**Carte de séjour pluriannuelle**", "**A2**", "Niveau élémentaire avancé"],
        ["**Carte de résident (10 ans)**", "**B1**", "Niveau intermédiaire"],
        [
          "**Naturalisation / nationalité (décret ou mariage)**",
          "**B2**",
          "⬆️ Relevé de B1 à B2 le 1er janvier 2026",
        ],
      ],
    },
    {
      type: "p",
      texte: "Pour le détail des conditions de langue selon votre situation, la fiche de référence est celle de [Service-Public.fr, « Comment justifier de son niveau en français ? » (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926).",
    },
    {
      type: "p",
      texte: "**À retenir :** le passage à B2 ne concerne que la **naturalisation et l'acquisition de la nationalité**. Les niveaux exigés pour la carte pluriannuelle (A2) et la carte de résident (B1) restent inchangés. Vérifiez toujours le niveau applicable à **votre** démarche précise avant de réserver un test.",
    },
    {
      type: "h2",
      texte: "A2, B1, B2 : comprendre les niveaux du CECRL simplement",
      id: "comprendre-cecrl",
    },
    {
      type: "p",
      texte: "Le **CECRL** (Cadre européen commun de référence pour les langues) classe les compétences linguistiques de A1 (débutant) à C2 (maîtrise quasi native). Voici concrètement ce que recouvrent les trois niveaux utiles pour vos démarches.",
    },
    { type: "p", texte: "**A2 : élémentaire avancé** (carte pluriannuelle)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Comprendre des phrases simples du quotidien",
        "Échanger sur des besoins immédiats",
        "Décrire son environnement avec un vocabulaire de base",
      ],
    },
    { type: "p", texte: "**B1 : intermédiaire** (carte de résident 10 ans)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Comprendre l'essentiel d'une discussion claire",
        "Exprimer un avis simple et cohérent",
        "Gérer la plupart des situations de la vie courante",
      ],
    },
    { type: "p", texte: "**B2 : intermédiaire avancé** (naturalisation depuis 2026)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Comprendre des contenus complexes, y compris abstraits",
        "Argumenter avec nuance et défendre un point de vue",
        "Interagir avec aisance et spontanéité, y compris dans un contexte administratif",
      ],
    },
    {
      type: "p",
      texte: "L'écart entre B1 et B2 n'est pas anodin : il correspond souvent à **plusieurs mois de progression** pour un apprenant. Si vous visiez la naturalisation avec un ancien justificatif B1, prévoyez de réévaluer votre niveau (voir la section dispenses et la FAQ ci-dessous).",
    },
    {
      type: "h2",
      texte: "Comment justifier son niveau B2 : diplôme ou test de langue ?",
      id: "comment-justifier",
    },
    {
      type: "p",
      texte: "Il existe deux grandes familles de justificatifs, et la différence entre les deux est **capitale** car elle ne joue pas du tout sur la durée de validité.",
    },
    { type: "p", texte: "**1. Un diplôme, valable sans limitation de durée**" },
    {
      type: "p",
      texte: "L'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463) reconnaît notamment :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "le **diplôme national du brevet** ;",
        "tout **diplôme délivré au nom de l'État** attestant au moins le niveau 3 du cadre national de certification professionnelle ;",
        "toute **certification professionnelle de niveau 3 minimum** inscrite au RNCP ;",
        "tout **diplôme attestant un niveau de français au moins équivalent au B2** (par exemple le **DELF B2** ou le **DALF**).",
      ],
    },
    {
      type: "p",
      texte: "➡️ Un diplôme est acquis **définitivement** : il n'expire jamais. C'est l'option la plus sûre si vous l'avez déjà ou pouvez l'obtenir.",
    },
    { type: "p", texte: "**2. Une attestation de test de langue, validité limitée à 2 ans**" },
    {
      type: "p",
      texte: "Si vous n'avez pas de diplôme adéquat, vous pouvez passer un **test linguistique** reconnu (voir l'[arrêté du 22 décembre 2025 sur les tests linguistiques](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "le **TCF** (Test de connaissance du français), version IRN (Intégration, Résidence, Nationalité) ;",
        "le **TEF** (Test d'évaluation de français), version IRN.",
      ],
    },
    {
      type: "p",
      texte: "➡️ L'attestation de test est valable **2 ans** au maximum. Au-delà, elle n'est plus recevable et il faut repasser l'examen.",
    },
    { type: "p", texte: "**Le réflexe à avoir**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifiez que le justificatif atteste bien le niveau **B2** (et non B1).",
        "Si c'est un test, contrôlez qu'il sera **encore valide au moment du dépôt ET de l'instruction** de votre dossier, un test périmé entre-temps rend la pièce inexploitable.",
        "Joignez des copies lisibles et cohérentes avec votre identité.",
      ],
    },
    {
      type: "h2",
      texte: "TCF, TEF ou DELF B2 : quel test choisir pour la naturalisation ?",
      id: "comparatif-tcf-tef-delf",
    },
    {
      type: "p",
      texte: "Les trois certifications sont acceptées pour justifier le niveau B2, mais elles ne fonctionnent pas de la même manière. Voici un comparatif pour choisir selon votre profil.",
    },
    {
      type: "tableau",
      entetes: ["Critère", "TCF (IRN)", "TEF (IRN)", "DELF B2"],
      lignes: [
        [
          "Nature",
          "Test (attestation de niveau)",
          "Test (attestation de niveau)",
          "**Diplôme** d'État",
        ],
        ["Validité du résultat", "**2 ans**", "**2 ans**", "**À vie** (diplôme)"],
        [
          "Résultat",
          "Niveau atteint sur une échelle",
          "Niveau atteint sur une échelle",
          "Réussite / échec à un niveau visé (B2)",
        ],
        [
          "Délai d'obtention",
          "Rapide (quelques jours à semaines)",
          "Rapide (quelques jours à semaines)",
          "Sessions plus espacées dans l'année",
        ],
        [
          "Où le passer",
          "Centres agréés (Alliances françaises, organismes habilités)",
          "Centres agréés (CCI, organismes habilités)",
          "Centres d'examen DELF/DALF, Alliances françaises",
        ],
        [
          "Prix indicatif",
          "Variable selon le centre",
          "Variable selon le centre",
          "Variable selon le centre",
        ],
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ **Prix** : les tarifs varient sensiblement d'un centre agréé à l'autre (souvent de l'ordre de **100 à 200 €** pour un TCF/TEF IRN). Demandez toujours le tarif exact et la disponibilité des sessions au centre avant de réserver, ne vous fiez pas à un montant trouvé sur un forum.",
      ton: "bleu",
    },
    { type: "p", texte: "**Comment choisir ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous voulez un justificatif **définitif** et avez le temps : visez le **DELF B2**, un diplôme qui ne périme jamais.",
        "Vous avez besoin d'un résultat **rapidement** (échéance de dépôt proche) : le **TCF IRN** ou le **TEF IRN** s'obtiennent généralement plus vite, en gardant en tête la validité de 2 ans.",
        "Dans tous les cas, confirmez auprès du centre que la version proposée est bien celle reconnue pour la **nationalité** (mention IRN pour le TCF/TEF).",
      ],
    },
    { type: "h2", texte: "Qui est dispensé de justifier son niveau de français ?", id: "dispenses" },
    {
      type: "p",
      texte: "La loi prévoit des **dispenses**, c'est-à-dire des situations où vous n'avez pas à produire de justificatif de niveau. D'après la fiche officielle [Service-Public.fr (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926), sont notamment dispensées :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "les personnes dont l'**état de santé ou le handicap** rend l'évaluation du niveau impossible (sur présentation d'un **certificat médical**) ;",
        "les **réfugiés statutaires et apatrides âgés de plus de 70 ans** et résidant régulièrement en France depuis au moins **15 ans**.",
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ Les dispenses sont d'interprétation stricte et leur périmètre exact peut évoluer. Vérifiez votre éligibilité sur la fiche [Service-Public.fr F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926) ou auprès de votre préfecture avant de constituer votre dossier sans justificatif.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "En dehors de ces cas, **le niveau B2 doit être prouvé** par un diplôme ou un test, comme détaillé plus haut.",
    },
    {
      type: "h2",
      texte: "Niveau de langue ≠ examen civique : ne pas confondre les deux exigences",
      id: "langue-vs-civique",
    },
    {
      type: "p",
      texte: "C'est une confusion fréquente depuis 2026 : le **niveau de français** et l'**examen civique** sont deux conditions **distinctes et cumulatives**. Réussir l'une ne dispense pas de l'autre.",
    },
    {
      type: "tableau",
      entetes: ["Niveau de langue (B2)", "Examen civique"],
      lignes: [
        [
          "Ce qui est évalué",
          "Votre **maîtrise du français** (comprendre, parler, écrire)",
          "Vos **connaissances** sur les valeurs, l'histoire et les institutions de la République",
        ],
        [
          "Comment le prouver",
          "Diplôme ou test (TCF, TEF, DELF)",
          "Réussir le QCM officiel (32/40, soit 80 %)",
        ],
        [
          "Introduit / relevé par",
          "Décret n° 2025-648 (B1 → B2)",
          "Décret n° 2025-648 (nouvel examen)",
        ],
      ],
    },
    {
      type: "p",
      texte: "Pour un dossier de naturalisation complet en 2026, il faut donc **les deux** : un justificatif de niveau **B2** ET une attestation de réussite à l'**examen civique**. Préparez ces deux volets en parallèle pour ne pas retarder votre dépôt.",
    },
    {
      type: "p",
      texte: "Pour bien comprendre la nouvelle obligation d'examen civique selon votre titre, consultez notre guide [Examen civique obligatoire : ce qui change pour la carte de séjour et la naturalisation](/articles/examen-civique-2026-exemples-questions-corrigees).",
    },
    {
      type: "h2",
      texte: "Plan de progression vers le B2 et préparation de l'examen civique",
      id: "plan-progression",
    },
    {
      type: "p",
      texte: "Atteindre le B2 demande de la régularité. Voici un plan réaliste, à combiner avec la préparation de l'examen civique.",
    },
    { type: "p", texte: "**Semaines 1 à 4 : consolidation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Grammaire et vocabulaire de la vie administrative et citoyenne",
        "30 à 45 minutes de lecture quotidienne en français (presse, démarches)",
        "3 sessions d'expression orale par semaine",
      ],
    },
    { type: "p", texte: "**Semaines 5 à 8 : entraînement au format**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Compréhension écrite et orale sur des supports de niveau B2",
        "Production écrite argumentée (courrier, prise de position)",
        "Correction systématique des erreurs récurrentes",
      ],
    },
    { type: "p", texte: "**Semaines 9 à 12 : simulation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tests blancs chronométrés (format TCF/TEF ou DELF B2)",
        "Travail de la fluidité et de la prononciation",
        "Révision ciblée selon vos points faibles",
      ],
    },
    {
      type: "p",
      texte: "En parallèle, ne négligez pas l'**examen civique** : c'est une condition à part entière. Vous pouvez vous entraîner sur des examens blancs en conditions réelles, avec score immédiat et bilan par thème.",
    },
    {
      type: "encadre",
      texte: "🎯 **Votre niveau de français est en bonne voie ? Il vous reste l'examen civique, préparez-le dès maintenant.** → [Commencer l'entraînement gratuit](/signup)",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Depuis le 1er janvier 2026, la naturalisation française exige un **niveau B2** de français, un cran au-dessus de l'ancien B1, au titre du décret n° 2025-648 et de l'arrêté du 22 décembre 2025. Retenez l'essentiel : le niveau dépend de votre démarche (A2 pour la carte pluriannuelle, B1 pour la carte de résident, **B2 pour la nationalité**) ; un **diplôme** vaut à vie tandis qu'une **attestation de test** (TCF, TEF) n'est valable que **2 ans** ; et le niveau de langue ne remplace pas l'**examen civique**, qui reste une condition distincte. En choisissant le bon justificatif, en surveillant sa validité et en préparant les deux volets en parallèle, vous évitez le principal motif de blocage : une pièce inadaptée ou périmée. Anticipez, vérifiez chaque exigence sur les sources officielles, et avancez sereinement vers votre objectif.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel niveau de français faut-il pour la naturalisation en 2026 ?",
      reponse: "Depuis le 1er janvier 2026, il faut justifier d'un niveau B2 du CECRL, à l'oral comme à l'écrit. C'est un relèvement par rapport au niveau B1 exigé jusqu'à fin 2025, prévu par le décret n° 2025-648 du 15 juillet 2025 et l'arrêté du 22 décembre 2025.",
    },
    {
      question: "DELF ou TCF : quelle différence pour la naturalisation ?",
      reponse: "Le DELF B2 est un diplôme : une fois obtenu, il est valable à vie. Le TCF (comme le TEF) est un test dont l'attestation n'est valable que 2 ans. Si vous avez le temps, le DELF B2 offre un justificatif définitif ; si vous êtes pressé, le TCF/TEF IRN s'obtient généralement plus vite.",
    },
    {
      question: "Mon ancien diplôme ou test B1 est-il encore valable pour la naturalisation ?",
      reponse: "Non : depuis le 1er janvier 2026, le niveau exigé est le B2. Un justificatif attestant uniquement le B1 ne suffit plus pour une demande déposée (ou complétée) après le 31 décembre 2025. Il faut produire une preuve de niveau B2.",
    },
    {
      question: "Le niveau B2 est-il aussi exigé pour la naturalisation par mariage ?",
      reponse: "Oui. Le niveau B2 s'applique aussi bien à la naturalisation par décret qu'à l'acquisition de la nationalité par mariage (déclaration au titre de l'article 21-2 du Code civil), comme le confirme France Diplomatie.",
    },
    {
      question: "Combien de temps une attestation de test (TCF / TEF) reste-t-elle valable ?",
      reponse: "Une attestation de test de langue est valable 2 ans au maximum. Assurez-vous qu'elle sera encore valide au moment du dépôt et de l'instruction de votre dossier, sous peine de devoir repasser le test.",
    },
    {
      question: "Qui est dispensé de justifier son niveau de français ?",
      reponse: "Sont notamment dispensées les personnes dont l'état de santé ou le handicap rend l'évaluation impossible (certificat médical), ainsi que les réfugiés et apatrides de plus de 70 ans résidant en France depuis au moins 15 ans. Vérifiez votre situation sur la fiche Service-Public F11926.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Comment justifier de son niveau en français ? (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      description: "Fiche officielle détaillant le niveau de français requis selon la démarche, les justificatifs acceptés (diplôme ou test), leur validité et les dispenses (santé, âge).",
    },
    {
      titre: "Décret n° 2025-648 du 15 juillet 2025 (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519",
      type: "juridique",
      description: "Décret modifiant le décret de 1993 sur la nationalité : relève le niveau de français de B1 à B2 pour la naturalisation et instaure l'examen civique.",
    },
    {
      titre: "Arrêté du 22 décembre 2025 : diplômes et certifications (nationalité française)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463",
      type: "juridique",
      description: "Fixe la liste des diplômes et certifications attestant le niveau B2 requis des candidats à la nationalité ; entrée en vigueur le 1er janvier 2026.",
    },
    {
      titre: "Arrêté du 22 décembre 2025 : tests linguistiques (nationalité française)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492",
      type: "juridique",
      description: "Précise les tests linguistiques (TCF, TEF) recevables pour justifier le niveau de français requis pour la nationalité.",
    },
    {
      titre: "France Diplomatie : Le niveau B2 devient obligatoire (acquisition par mariage)",
      url: "https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite",
      type: "officiel",
      description: "Confirme l'application du niveau B2 à l'acquisition de la nationalité par mariage à compter du 1er janvier 2026.",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Dossier de naturalisation : le français B2 est requis",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Titre de séjour : le français A2 est requis",
    },
    {
      slug: "contrat-integration-republicaine-cir-2026-formation-civique",
      ancre: "Formation linguistique via le CIR",
    },
    {
      slug: "guide-etudiants-etrangers-france-titres-demarches-2026",
      ancre: "Guide étudiant étranger en France",
    },
  ],
};

export default article;
