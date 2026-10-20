import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/delf-tcf-dilf-certification-francais-2026-titre-sejour-naturalisation-laquelle-choisir`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "delf-tcf-dilf-certification-francais-2026-titre-sejour-naturalisation-laquelle-choisir",
  titre: "DELF, TCF ou DILF : quelle certification de français pour votre titre de séjour ou naturalisation en 2026 ?",
  titreSeo: "DELF, TCF ou DILF : quelle certification de français pour votre titre de séjour ou naturalisation en 2026 ?",
  resume: "DELF B1 à vie vs TCF ANF valable 2 ans : lequel choisir pour la naturalisation ? Quel niveau pour le titre de séjour ? Prix, centres d'examen, dispenses si vous avez un diplôme français ou francophone.",
  chapo: "Pour renouveler votre titre de séjour, demander la nationalité française ou obtenir un visa long séjour, la France exige souvent une certification officielle de votre niveau de français. Mais entre le DELF, le TCF, le DALF, le DILF et le TEF, il est facile de se perdre. Quelle certification est reconnue pour quel titre ? Quel niveau faut-il atteindre ? Combien de temps les résultats sont-ils valables ? Ce guide complet répond à toutes ces questions en 2026 pour ne pas payer inutilement une certification qui ne sera pas acceptée.",
  publieLe: "2026-04-10",
  modifieLe: "2026-04-10",
  minutes: 18,
  theme: "DELF titre de séjour naturalisation France",
  motsCles: [
    "DELF titre de séjour naturalisation France",
    "TCF naturalisation française 2026",
    "DILF titre de séjour France",
    "certification français titre de séjour France 2026",
    "niveau A2 B1 français naturalisation",
    "quel diplôme français pour naturalisation",
    "DELF B1 naturalisation française",
    "TCF ANF naturalisation",
    "différence DELF TCF DALF",
    "validité DELF naturalisation",
    "prix DELF DILF TCF France 2026",
    "centre examen DELF France",
    "dispense niveau français naturalisation",
    "certification français visa conjoint français",
    "B1 ou A2 naturalisation française",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
  },
  blocs: [
    {
      type: "h2",
      texte: "Pourquoi une certification de français est-elle exigée ?",
      id: "pourquoi-certification",
    },
    {
      type: "p",
      texte: "La France exige la preuve d'un niveau de langue français dans plusieurs procédures d'immigration. Ce n'est pas une formalité : une certification inadaptée ou expirée peut entraîner un refus de dossier.",
    },
    { type: "h3", texte: "Les procédures qui exigent une certification" },
    {
      type: "tableau",
      entetes: ["Procédure", "Niveau requis", "Certification acceptée"],
      lignes: [
        ["Naturalisation (décret)", "B1 oral minimum", "DELF B1/B2/C1/C2, TCF ANF (B1+)"],
        [
          "Carte de séjour \"résident\" (10 ans)",
          "A2 minimum",
          "DELF A2+, TCF, DILF (cas spécifique)",
        ],
        [
          "Carte de séjour pluriannuelle (renouvellement)",
          "A1 à A2 selon parcours",
          "DELF A1/A2, TCF, DILF",
        ],
        ["Visa long séjour \"conjoint de Français\"", "A2 si moins de 65 ans", "DELF A2+, TCF"],
        ["Regroupement familial", "A1 (en hausse vers A2)", "DELF A1/A2, TCF, DILF"],
      ],
    },
    { type: "h3", texte: "Ce que la loi dit exactement" },
    {
      type: "p",
      texte: "L'article L413-5 du CESEDA précise que la condition de connaissance du français pour la naturalisation est une \"connaissance suffisante\" appréciée par une certification de niveau **B1 oral** minimum, ou par un diplôme obtenu dans un établissement d'enseignement en langue française.",
    },
    { type: "h3", texte: "La règle la plus importante" },
    {
      type: "p",
      texte: "Une certification de niveau **supérieur** (B2, C1, C2) est toujours acceptée à la place du niveau inférieur requis. Un DELF B2 vaut pour une demande qui exige B1.",
    },
    { type: "h2", texte: "Le DELF : la référence pour la naturalisation", id: "delf-explique" },
    {
      type: "p",
      texte: "Le **DELF** (Diplôme d'Études en Langue Française) est le diplôme officiel du ministère de l'Éducation nationale française. C'est la certification la plus reconnue et la plus polyvalente.",
    },
    { type: "h3", texte: "Les niveaux disponibles" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**DELF A1** : niveau débutant (requis dans certains cas de regroupement familial)",
        "**DELF A2** : niveau élémentaire (requis pour carte de résident 10 ans, conjoint de Français)",
        "**DELF B1** : niveau intermédiaire (**requis pour la naturalisation**)",
        "**DELF B2** : niveau indépendant avancé (accepté pour toutes les procédures)",
        "**DALF C1 / C2** : niveau expert (idem, mais sur-qualifié pour l'immigration)",
      ],
    },
    { type: "h3", texte: "Structure de l'examen DELF B1 (naturalisation)" },
    { type: "p", texte: "L'examen dure environ **1h45** et comporte 4 épreuves :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Compréhension de l'oral** : 25 min, écouter des dialogues et répondre à des questions",
        "**Compréhension des écrits** : 35 min, lire des textes et répondre",
        "**Production écrite** : 45 min, rédiger un texte (message, article court)",
        "**Production orale** : 15 min de préparation + 15 min d'épreuve",
      ],
    },
    {
      type: "p",
      texte: "Pour réussir : 50/100 au total **ET** au moins 5/25 dans chacune des 4 épreuves.",
    },
    { type: "h3", texte: "Tarifs en 2026" },
    {
      type: "tableau",
      entetes: ["Niveau", "Prix moyen"],
      lignes: [
        ["DELF A1", "80 à 120 €"],
        ["DELF A2", "90 à 130 €"],
        ["DELF B1", "100 à 150 €"],
        ["DELF B2", "110 à 160 €"],
      ],
    },
    {
      type: "p",
      texte: "Les prix varient selon les centres d'examen. Des centres associatifs (Alliance Française, Institut Français) pratiquent des tarifs plus bas que certains lycées privés.",
    },
    { type: "h3", texte: "Validité du DELF" },
    {
      type: "p",
      texte: "Le DELF est un **diplôme à vie** : il n'a pas de date d'expiration. Une fois obtenu, vous n'avez jamais à le repasser. C'est un avantage majeur sur le TCF.",
    },
    {
      type: "h2",
      texte: "Le TCF : rapide et flexible, mais avec une durée de validité",
      id: "tcf-explique",
    },
    {
      type: "p",
      texte: "Le **TCF** (Test de Connaissance du Français) est un test de compétences, pas un diplôme. Il est administré par le CIEP (Centre International d'Études Pédagogiques) sous tutelle du ministère de l'Éducation nationale.",
    },
    { type: "h3", texte: "Les versions du TCF" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**TCF tout public** : version générale, acceptée pour certaines démarches d'immigration",
        "**TCF ANF** (Accès à la Nationalité Française) : version spécifique **exigée pour la naturalisation** dans certaines préfectures. Attention : le TCF tout public n'est PAS toujours accepté pour la naturalisation, vérifiez auprès de votre préfecture.",
        "**TCF DAP** : pour les demandes d'admission préalable dans les universités françaises",
      ],
    },
    { type: "h3", texte: "Structure du TCF ANF" },
    { type: "p", texte: "Le TCF ANF comprend uniquement :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Compréhension de l'oral** : 29 questions sur 3 niveaux progressifs (A2 à C2)",
        "**Maîtrise des structures de la langue** : 20 questions de grammaire",
        "**Compréhension des écrits** : 29 questions",
      ],
    },
    { type: "p", texte: "Durée totale : environ **1h35**. Résultats disponibles sous **15 jours**." },
    { type: "h3", texte: "Tarif TCF ANF 2026" },
    {
      type: "p",
      texte: "Entre **120 et 180 €** selon le centre. Le TCF est généralement plus cher que le DELF pour le même niveau.",
    },
    { type: "h3", texte: "Durée de validité du TCF" },
    {
      type: "p",
      texte: "C'est le principal inconvénient : **le TCF n'est valable que 2 ans**. Si votre dossier de naturalisation prend du temps, vous devrez peut-être le repasser. Le DELF (diplôme à vie) est souvent préférable pour la naturalisation.",
    },
    { type: "h3", texte: "TCF vs DELF : que choisir pour la naturalisation ?" },
    {
      type: "tableau",
      entetes: ["Critère", "DELF B1", "TCF ANF"],
      lignes: [
        ["Validité", "À vie", "2 ans"],
        ["Prix moyen", "100-150 €", "120-180 €"],
        ["Préparation", "Plus longue", "Plus courte"],
        ["Acceptation préfectures", "Universelle", "Vérifiez votre préfecture"],
        ["Diplôme utilisable ailleurs (université, emploi)", "Oui", "Non"],
      ],
    },
    {
      type: "p",
      texte: "**Recommandation** : si vous avez le temps de vous préparer, choisissez le **DELF B1** : diplôme à vie, universellement accepté et utilisable pour votre carrière. Le TCF ANF est une bonne option si vous avez besoin d'un résultat rapide.",
    },
    {
      type: "h2",
      texte: "Le DILF : uniquement pour le regroupement familial et l'intégration",
      id: "dilf-explique",
    },
    {
      type: "p",
      texte: "Le **DILF** (Diplôme Initial de Langue Française) correspond au niveau **A1.1**, soit un niveau encore inférieur au A1 du CECRL. Il est conçu pour les personnes très peu ou pas scolarisées dans leur pays d'origine.",
    },
    { type: "h3", texte: "Quand le DILF est-il accepté ?" },
    { type: "p", texte: "Le DILF est accepté pour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le renouvellement de certains titres de séjour en parcours d'intégration (OFII)",
        "Valider la formation linguistique du Contrat d'Intégration Républicaine (CIR)",
      ],
    },
    {
      type: "p",
      texte: "**Le DILF n'est PAS suffisant pour la naturalisation** (qui exige B1) ni pour la plupart des renouvellements de titre de séjour pluriannuels (qui exigent A2 minimum).",
    },
    { type: "h3", texte: "Qui est concerné par le DILF ?" },
    {
      type: "p",
      texte: "Principalement les personnes qui ont suivi les cours de français offerts par l'OFII dans le cadre du CIR, qui n'ont jamais été scolarisées ou qui ont un très faible niveau initial.",
    },
    { type: "h3", texte: "Notre avis : si vous pouvez viser A2, visez A2" },
    {
      type: "p",
      texte: "Le DILF a une utilité très limitée dans un parcours d'immigration long terme. Si vous pouvez atteindre le A2, vous aurez un diplôme reconnu pour beaucoup plus de démarches. Investissez votre préparation vers le DELF A2 ou B1 directement.",
    },
    { type: "h2", texte: "Les cas où vous êtes dispensé de certification", id: "dispenses-exceptions" },
    {
      type: "p",
      texte: "Bonne nouvelle : de nombreuses situations vous exemptent de passer une certification de français.",
    },
    { type: "h3", texte: "Dispenses pour la naturalisation" },
    { type: "p", texte: "Vous êtes dispensé de présenter une certification si :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez un **diplôme obtenu dans un établissement scolaire en France** (CAP, BEP, Bac, licence, master…)",
        "Vous avez un **diplôme d'un pays francophone** (Belgique, Suisse, Canada francophone, Sénégal, Maroc, etc.) à partir du niveau collège",
        "Vous avez **plus de 70 ans** au moment de la demande",
        "Vous êtes atteint d'un **handicap ou d'une maladie grave** affectant votre expression orale (attestation médicale requise)",
        "Vous avez été **scolarisé en France pendant au moins 5 ans**",
      ],
    },
    { type: "h3", texte: "Diplômes universitaires = dispense automatique" },
    {
      type: "p",
      texte: "Un **diplôme de licence, master ou doctorat** obtenu dans un établissement français ou dans une université dont l'enseignement est en français dispense automatiquement de toute certification linguistique pour la naturalisation.",
    },
    { type: "h3", texte: "Comment faire valoir une dispense" },
    {
      type: "p",
      texte: "Joignez à votre dossier de naturalisation le diplôme original (ou une copie certifiée conforme) avec une traduction assermentée si le diplôme est dans une langue autre que le français. Pour les pays francophones, la traduction n'est généralement pas requise.",
    },
    { type: "h2", texte: "Où passer l'examen et comment se préparer", id: "ou-passer-examen" },
    { type: "p", texte: "Trouver un centre d'examen et bien se préparer sont les deux clés du succès." },
    { type: "h3", texte: "Trouver un centre d'examen" },
    { type: "p", texte: "**Pour le DELF :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**ciep.fr** ou **france-education-international.fr** : moteur de recherche des centres agréés par département",
        "**Alliance Française** : présente dans toutes les grandes villes, souvent moins chère",
        "**Institut Français** : centres officiels du gouvernement français",
        "**GRETA** (Groupement d'Établissements) : centres de formation pour adultes dans les lycées publics",
      ],
    },
    { type: "p", texte: "**Pour le TCF ANF :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Uniquement dans les centres agréés par France Éducation International",
        "Recherche sur france-education-international.fr → TCF → ANF",
      ],
    },
    { type: "h3", texte: "Se préparer efficacement au DELF B1" },
    { type: "p", texte: "**Ressources gratuites :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "france-education-international.fr : tous les anciens sujets du DELF B1 avec corrigés",
        "TV5Monde Langue Française (apprendre.tv5monde.com) : exercices gratuits par niveau",
        "RFI Savoirs (savoirs.rfi.fr) : contenus audio et vidéo adaptés au B1",
      ],
    },
    { type: "p", texte: "**Durée de préparation recommandée :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous avez un niveau A2 solide : 2 à 3 mois de préparation intensive",
        "Si vous partez de A1 : 6 à 12 mois",
      ],
    },
    { type: "h3", texte: "Inscription aux examens" },
    {
      type: "p",
      texte: "Les sessions DELF ont lieu en **mars, juin et octobre** dans la plupart des centres. L'inscription se fait généralement 4 à 6 semaines avant la session. Inscrivez-vous tôt, les places sont limitées dans les grandes villes.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Pour ne pas perdre de temps ni d'argent, retenez l'essentiel : pour la naturalisation, vous avez besoin du DELF B1 (ou TCF ANF niveau B1). Pour le renouvellement de carte de résident ou le visa conjoint de Français, le DELF A2 suffit. Si vous avez un diplôme français ou un diplôme d'un pays francophone, vous êtes dispensé de certification. Le DELF B1 est notre recommandation par défaut pour la naturalisation : diplôme à vie, universellement reconnu, utilisable pour votre carrière. Commencez à vous préparer au moins 3 mois avant la prochaine session d'examen.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle certification dois-je passer pour ma demande de naturalisation ?",
      reponse: "Pour la naturalisation, il faut un niveau B1 oral minimum. La certification recommandée est le DELF B1 (diplôme à vie, universellement accepté) ou le TCF ANF (valable 2 ans seulement). Vérifiez auprès de votre préfecture quelle certification elle accepte car certaines n'acceptent que le TCF ANF.",
    },
    {
      question: "Mon diplôme de mon pays me dispense-t-il de passer le DELF ou le TCF ?",
      reponse: "Si votre diplôme a été obtenu dans un établissement enseignant en langue française (y compris dans les pays francophones : Belgique, Suisse, Maroc, Sénégal, Côte d'Ivoire, etc.) à partir du niveau collège, vous êtes dispensé de certification pour la naturalisation. Joignez le diplôme original + traduction assermentée si nécessaire à votre dossier.",
    },
    {
      question: "Combien de temps le DELF est-il valable ?",
      reponse: "Le DELF est un diplôme à vie, il n'expire jamais. C'est son principal avantage sur le TCF qui n'est valable que 2 ans. Un DELF obtenu en 2015 est toujours valable en 2026.",
    },
    {
      question: "Quelle est la différence entre le TCF ANF et le TCF tout public ?",
      reponse: "Le TCF ANF (Accès à la Nationalité Française) est une version spécifique du TCF conçue pour les demandes de nationalité française. Certaines préfectures n'acceptent que le TCF ANF et pas le TCF tout public pour les dossiers de naturalisation. Vérifiez toujours auprès de votre préfecture avant de vous inscrire.",
    },
    {
      question: "Où passer le DELF B1 et combien ça coûte ?",
      reponse: "Les sessions DELF ont lieu en mars, juin et octobre dans les centres agréés (Alliance Française, Institut Français, GRETA). Le prix varie entre 100 et 150 € selon le centre. Recherchez les centres sur france-education-international.fr. Inscrivez-vous 4 à 6 semaines avant la session car les places sont limitées.",
    },
  ],
  sources: [
    {
      titre: "CESEDA : Article L413-5 (condition de langue pour la naturalisation)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776444/",
      type: "juridique",
      description: "Exigence légale de connaissance du français pour la naturalisation",
    },
    {
      titre: "France Éducation International : DELF/DALF",
      url: "https://www.france-education-international.fr/certification/delf-dalf",
      type: "officiel",
      description: "Portail officiel du DELF et DALF, centres d'examen, anciens sujets",
    },
    {
      titre: "France Éducation International : TCF ANF",
      url: "https://www.france-education-international.fr/certification/tcf/tcf-anf",
      type: "officiel",
      description: "TCF Accès à la Nationalité Française : modalités et centres agréés",
    },
    {
      titre: "Service-Public.fr, Niveau de langue pour la naturalisation",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Conditions de connaissance du français pour la demande de nationalité",
    },
  ],
};

export default article;
