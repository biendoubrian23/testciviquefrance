import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "absence-france-voyage-perte-titre-sejour-duree-maximale-2026",
  titre: "Ces étrangers ont perdu leur titre de séjour à cause d'un voyage de trop, connaissez-vous la règle ?",
  titreSeo: "Ces étrangers ont perdu leur titre de séjour à cause d'un voyage de trop, connaissez-vous la règle ?",
  resume: "Durée d'absence maximale par type de titre, tampons vérifiés par la préfecture, impact sur la naturalisation. La règle que des milliers d'étrangers ignorent, et qui leur coûte leur titre de séjour au retour de vacances.",
  chapo: "Chaque année, des milliers d'étrangers en France voient leur titre de séjour refusé au renouvellement parce qu'ils sont restés trop longtemps hors du territoire. Un retour au pays pour l'été, un décès familial, une urgence médicale à l'étranger… et au retour, la préfecture considère que vous ne résidez plus « habituellement » en France. Le problème ? Beaucoup ne connaissent pas la durée exacte autorisée, et aucun SMS ne vous prévient que vous approchez de la limite. Voici les règles précises par type de titre, les vérifications réellement effectuées par les préfectures, et les stratégies pour protéger votre statut en 2026.",
  publieLe: "2026-04-08",
  modifieLe: "2026-04-08",
  minutes: 16,
  theme: "absence France titre de séjour",
  motsCles: [
    "absence France titre de séjour",
    "durée maximale voyage étranger France",
    "perte titre séjour voyage pays",
    "renouvellement refusé absence France",
    "combien de temps quitter France titre séjour",
    "carte de séjour absence maximale",
    "carte résident absence France",
    "voyage au pays titre de séjour",
    "résidence habituelle étranger France",
    "préfecture vérifie absence",
    "tampon passeport préfecture",
    "risque perte titre séjour voyage",
    "séjour à l étranger titre séjour",
    "absence naturalisation prise en compte",
    "règle 6 mois absence titre séjour France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1436491865332-7a61a109db05",
  },
  blocs: [
    {
      type: "h2",
      texte: "La règle générale : vous devez résider \"habituellement\" en France",
      id: "regle-generale",
    },
    {
      type: "p",
      texte: "Le Code de l'entrée et du séjour des étrangers (CESEDA) impose à tout titulaire d'un titre de séjour de maintenir sa **résidence habituelle en France**. Ce concept juridique est flou volontairement, il donne aux préfectures une marge d'appréciation.",
    },
    {
      type: "p",
      texte: "Concrètement, la jurisprudence et la pratique administrative ont établi des seuils d'absence au-delà desquels votre titre peut être remis en cause :",
    },
    { type: "h3", texte: "Les seuils critiques à connaître" },
    {
      type: "tableau",
      entetes: ["Type de titre", "Durée d'absence maximale tolérée", "Source"],
      lignes: [
        [
          "Carte de séjour temporaire (1 an)",
          "3 mois consécutifs ou 6 mois cumulés/an",
          "Pratique préfectorale",
        ],
        ["Carte de séjour pluriannuelle", "6 mois consécutifs", "Art. L433-2 CESEDA"],
        [
          "Carte de résident (10 ans)",
          "3 ans d'absence consécutive = perte automatique",
          "Art. L434-7 CESEDA",
        ],
        [
          "Carte de résident permanent",
          "3 ans d'absence = perte automatique",
          "Art. L434-7 CESEDA",
        ],
        ["Récépissé de renouvellement", "Aucun voyage recommandé", "Pratique"],
      ],
    },
    { type: "h3", texte: "Attention : ces seuils ne sont pas des \"droits acquis\"" },
    {
      type: "p",
      texte: "Le fait de rester 5 mois et 29 jours en carte de séjour temporaire ne vous met pas automatiquement à l'abri. L'agent préfectoral peut estimer, au vu de votre dossier global, que votre centre de vie n'est plus en France.",
    },
    {
      type: "h2",
      texte: "Carte de séjour temporaire et pluriannuelle : la zone de danger",
      id: "carte-sejour-temporaire",
    },
    {
      type: "p",
      texte: "Pour les titulaires d'une carte de séjour temporaire (CST, 1 an) ou d'une carte de séjour pluriannuelle (CSP, 2 à 4 ans), c'est ici que les refus de renouvellement pour absence sont les plus fréquents.",
    },
    { type: "h3", texte: "Ce qui déclenche un refus" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**3 mois d'absence consécutive** : seuil critique le plus souvent appliqué. Au-delà, la préfecture considère que vous avez quitté la France",
        "**Absences répétées** : même si chaque absence est courte (ex : 2 mois puis 2 mois), le total cumulé sur 12 mois peut déclencher un contrôle",
        "**Absence en fin de titre** : partir 2 mois juste avant le renouvellement attire particulièrement l'attention",
      ],
    },
    { type: "h3", texte: "Cas concret : le piège des vacances au pays" },
    {
      type: "p",
      texte: "Mohamed a une CSP salarié. Il rentre au Maroc chaque été pendant 2 mois et demi (juillet à mi-septembre). Son contrat de travail est suspendu (congé sans solde). La troisième année, la préfecture lui demande de justifier sa résidence habituelle en France. Ses fiches de paie montrent un trou de 3 mois par an. Le renouvellement est retardé de 4 mois le temps de l'examen approfondi du dossier.",
    },
    { type: "h3", texte: "Les documents que la préfecture vérifie" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **tampons d'entrée/sortie** dans votre passeport",
        "Les **relevés de comptes bancaires** français (mouvements réguliers = preuve de présence)",
        "Les **quittances de loyer** et factures EDF/Internet",
        "Les **bulletins de salaire** (interruptions longues = suspicion d'absence)",
        "Pour les indépendants : **chiffre d'affaires mensuel** (un CA nul sur 3 mois est suspect)",
      ],
    },
    {
      type: "h2",
      texte: "Carte de résident (10 ans) : une fausse sensation de sécurité",
      id: "carte-resident",
    },
    {
      type: "p",
      texte: "Beaucoup de titulaires d'une carte de résident pensent qu'ils peuvent quitter la France aussi longtemps qu'ils veulent. C'est **faux** : et l'erreur peut coûter très cher.",
    },
    { type: "h3", texte: "La règle des 3 ans" },
    {
      type: "p",
      texte: "L'article L434-7 du CESEDA est clair : la carte de résident est retirée ou non renouvelée si le titulaire a **quitté le territoire français pendant plus de 3 années consécutives** sans autorisation préalable de la préfecture.",
    },
    { type: "h3", texte: "Ce que beaucoup ne savent pas" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **3 ans** ne redémarrent pas à chaque bref retour en France. Si vous passez 2 jours en France puis repartez, la préfecture peut considérer que votre résidence habituelle n'est plus en France malgré la \"coupure\"",
        "En pratique, des préfectures ont refusé le renouvellement pour **1 an d'absence continue**, en invoquant la perte de résidence habituelle (soutenu par la jurisprudence)",
        "La carte de résident peut aussi être retirée si vous avez obtenu un titre équivalent dans un autre pays",
      ],
    },
    { type: "h3", texte: "Comment se protéger si vous devez vous absenter longtemps ?" },
    {
      type: "p",
      texte: "Il existe une possibilité peu connue : demander une **autorisation d'absence** à la préfecture avant votre départ. Ce n'est pas une obligation légale, mais un courrier recommandé adressé à la préfecture expliquant la raison de votre absence (et prévoyant la date de retour) constitue une preuve en cas de contentieux.",
    },
    {
      type: "h2",
      texte: "Impact sur la naturalisation : la règle encore plus stricte",
      id: "naturalisation",
    },
    {
      type: "p",
      texte: "Si vous envisagez la naturalisation française, la question de l'absence est encore plus critique. La préfecture examine votre **historique de résidence sur les 5 dernières années** (ou 2 ans selon les cas).",
    },
    { type: "h3", texte: "Ce que la préfecture vérifie pour la naturalisation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre **centre d'intérêts matériels** doit être en France (logement, emploi, impôts, famille)",
        "Vos absences cumulées ne doivent pas remettre en question le caractère continu de votre résidence",
        "En pratique, **plus de 6 mois d'absence cumulée sur la période de résidence** peuvent entraîner un rejet ou un report de la demande",
      ],
    },
    { type: "h3", texte: "Le piège de l'année de résidence \"cassée\"" },
    {
      type: "p",
      texte: "Si vous avez été absent 4 mois consécutifs en année 3 de vos 5 ans de résidence, la préfecture peut exiger que vous \"recommenciez\" le compteur à partir de votre retour. Vous passez alors de 5 ans à potentiellement 7 ans d'attente effective.",
    },
    { type: "h3", texte: "Notre conseil" },
    {
      type: "p",
      texte: "Pendant les années qui précèdent votre demande de naturalisation, limitez vos absences à 1 mois maximum par an. Conservez systématiquement vos billets d'avion retour, vos factures françaises, et vos relevés bancaires montrant des dépenses régulières en France.",
    },
    {
      type: "h2",
      texte: "Comment prouver que vous résidez bien en France : les 8 preuves à conserver",
      id: "preuves-presence",
    },
    {
      type: "p",
      texte: "En cas de contrôle ou de doute de la préfecture sur votre résidence habituelle, vous devrez apporter des **preuves de présence en France**. Plus vous en avez, plus votre dossier est solide.",
    },
    { type: "h3", texte: "Les preuves les plus convaincantes (par ordre de force)" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Bulletins de salaire** : La preuve la plus forte. Un salaire versé chaque mois prouve que vous êtes en France",
        "**Avis d'imposition** : Montre que vous déclarez vos revenus en France et que vous y êtes fiscalement domicilié",
        "**Quittances de loyer / factures EDF** : Preuve continue de domicile actif en France",
        "**Relevés bancaires français** : Les dépenses quotidiennes (courses, transport, restaurants) prouvent la vie sur place",
        "**Attestation de l'employeur** : Peut préciser vos dates de congés et confirmer votre présence",
        "**Factures de santé / Ameli** : Les consultations médicales en France datent votre présence",
        "**Inscriptions scolaires des enfants** : Si vos enfants sont scolarisés en France, c'est un indicateur fort",
        "**Tout reçu ou interaction en France** : Pass Navigo, abonnement salle de sport, carte de fidélité...",
      ],
    },
    { type: "h3", texte: "L'erreur à ne pas commettre" },
    {
      type: "p",
      texte: "Ne supprimez pas votre historique de voyages dans votre passeport (pages tamponnées). Certaines personnes demandent un nouveau passeport \"propre\", la préfecture peut demander l'ancien et considérer l'absence de l'ancien comme suspecte.",
    },
    {
      type: "h2",
      texte: "Les cas particuliers : maladie, décès, mission professionnelle",
      id: "cas-particuliers",
    },
    {
      type: "p",
      texte: "Certaines situations peuvent justifier une absence prolongée sans risquer votre titre de séjour. Mais il faut pouvoir le prouver.",
    },
    { type: "h3", texte: "Absence pour raison médicale" },
    {
      type: "p",
      texte: "Si vous êtes hospitalisé à l'étranger ou devez suivre un traitement médical non disponible en France, un **certificat médical** détaillé peut justifier une absence de plusieurs mois. Prévenez votre préfecture avant si possible (lettre recommandée).",
    },
    { type: "h3", texte: "Décès ou maladie grave d'un proche" },
    {
      type: "p",
      texte: "Un certificat de décès, un bulletin d'hospitalisation de votre proche et vos billets d'avion aller-retour constituent un dossier acceptable. La jurisprudence reconnaît ces motifs comme des \"cas de force majeure\".",
    },
    { type: "h3", texte: "Mission professionnelle à l'étranger" },
    {
      type: "p",
      texte: "Si votre employeur vous envoie en mission à l'étranger, une **lettre de mission** signée par l'employeur, précisant les dates et le caractère temporaire, protège votre titre. Votre contrat de travail français est maintenu et votre résidence habituelle reste en France.",
    },
    { type: "h3", texte: "Études à l'étranger (Erasmus, échange universitaire)" },
    {
      type: "p",
      texte: "Pour les étudiants en programme d'échange, la **convention d'échange universitaire** et l'attestation de l'établissement français suffisent généralement. L'absence est considérée comme temporaire et liée à votre parcours en France.",
    },
    { type: "h3", texte: "Ce qu'il faut retenir" },
    {
      type: "p",
      texte: "Dans tous les cas, la clé est d'**anticiper** : prévenez la préfecture, conservez les preuves, et maintenez des liens actifs avec la France pendant votre absence (loyer payé, compte bancaire actif, adresse maintenue).",
    },
    {
      type: "h2",
      texte: "Vous êtes resté trop longtemps : que faire maintenant ?",
      id: "que-faire-trop-long",
    },
    {
      type: "p",
      texte: "Si vous avez déjà dépassé la durée d'absence recommandée et que vous êtes de retour en France, ne paniquez pas. Il existe des stratégies pour limiter les dégâts.",
    },
    { type: "h3", texte: "Stratégie n°1 : Reconstituer un dossier de présence solide" },
    { type: "p", texte: "Dès votre retour, reprenez immédiatement une vie \"visible\" en France :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Signez un nouveau bail ou faites une attestation d'hébergement",
        "Ouvrez ou réactivez un compte bancaire français avec des mouvements réguliers",
        "Inscrivez-vous à France Travail si vous cherchez un emploi",
        "Déclarez votre retour à la CAF",
      ],
    },
    { type: "h3", texte: "Stratégie n°2 : Préparer une lettre d'explication" },
    {
      type: "p",
      texte: "Au moment du renouvellement, joignez une lettre manuscrite expliquant les raisons de votre absence prolongée (raison familiale, médicale, professionnelle) avec les justificatifs correspondants. Les préfectures apprécient la transparence.",
    },
    { type: "h3", texte: "Stratégie n°3 : Consulter un avocat en droit des étrangers" },
    {
      type: "p",
      texte: "Si votre absence dépasse 6 mois, consultez un avocat spécialisé avant le rendez-vous de renouvellement. Il pourra vous conseiller sur la meilleure stratégie de présentation et vous accompagner si la préfecture émet un avis défavorable.",
    },
    { type: "h3", texte: "Le pire scénario et vos droits" },
    {
      type: "p",
      texte: "Si votre titre est refusé, vous recevrez une décision motivée contre laquelle vous pouvez exercer un **recours administratif (RAPO)** dans les 30 jours ou saisir le **tribunal administratif** dans les 2 mois. L'aide juridictionnelle est disponible pour couvrir les frais d'avocat.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La règle est simple mais souvent ignorée : votre titre de séjour n'est pas un passeport pour voyager sans limite. Chaque type de titre a ses propres seuils d'absence tolérée, 3 mois pour une CST, 6 mois pour une CSP, 3 ans pour une carte de résident. Et la naturalisation est encore plus stricte. Conservez vos preuves de présence, anticipez vos absences, prévenez votre préfecture si nécessaire, et ne laissez jamais un voyage au pays mettre en danger des années de démarches. Partagez cette information autour de vous, elle peut éviter une catastrophe à quelqu'un que vous connaissez.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps puis-je quitter la France avec une carte de séjour temporaire ?",
      reponse: "En pratique, la limite tolérée est de 3 mois consécutifs maximum, et 6 mois cumulés sur l'année. Au-delà, le renouvellement peut être refusé pour perte de résidence habituelle en France.",
    },
    {
      question: "La préfecture vérifie-t-elle vraiment les tampons dans mon passeport ?",
      reponse: "Oui, c'est l'un des premiers documents vérifiés lors du renouvellement. L'agent regarde les dates d'entrée et de sortie des tampons. Les relevés bancaires et bulletins de salaire sont aussi analysés pour confirmer la durée de présence.",
    },
    {
      question: "Mon titre expire pendant que je suis à l'étranger, que faire ?",
      reponse: "Revenez en France le plus rapidement possible. Contactez le consulat de France dans le pays où vous vous trouvez pour obtenir un visa de retour. À votre retour, déposez immédiatement une demande de renouvellement en expliquant la situation.",
    },
    {
      question: "Un séjour de 4 mois au pays peut-il compromettre ma demande de naturalisation ?",
      reponse: "Potentiellement oui. La préfecture peut considérer que votre résidence en France n'est pas suffisamment continue. Le risque n'est pas systématique, mais une absence de 4 mois peut rallonger le délai d'examen ou reporter le compteur de résidence.",
    },
  ],
};

export default article;
