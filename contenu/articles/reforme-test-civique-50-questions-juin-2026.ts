import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/reforme-test-civique-50-questions-juin-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "reforme-test-civique-50-questions-juin-2026",
  titre: "Réforme du test civique : le gouvernement envisage un passage à 50 questions en juin 2026",
  titreSeo: "Réforme du test civique : le gouvernement envisage un passage à 50 questions en juin 2026",
  resume: "Un document de travail du ministère de l'Intérieur prévoit 10 questions supplémentaires sur le développement durable et le numérique. Seuil maintenu à 80 %, durée portée à 55 minutes.",
  chapo: "Le gouvernement étudie un passage du test civique de 40 à 50 questions, avec l'ajout de thématiques sur le développement durable et le numérique. Le seuil de réussite resterait à 80 %. Décryptage du projet, du calendrier et des réactions.",
  publieLe: "2026-04-01",
  modifieLe: "2026-04-01",
  minutes: 7,
  theme: "réforme test civique 2026",
  motsCles: [
    "réforme test civique 2026",
    "test civique 50 questions",
    "changement test civique",
    "nouvelles questions test civique",
    "examen civique 2026 réforme",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    { type: "h2", texte: "Un passage de 40 à 50 questions à l'étude", id: "passage-50-questions" },
    {
      type: "p",
      texte: "Selon un document de travail du ministère de l'Intérieur consulté par plusieurs médias le 25 mars 2026, le gouvernement **étudie un élargissement du test civique de 40 à 50 questions**, avec une mise en place prévue au plus tôt en juin 2026.",
    },
    {
      type: "p",
      texte: "Le projet prévoit l'ajout de **10 questions supplémentaires** portant sur deux nouvelles thématiques :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Développement durable et transition écologique** (5 questions) : engagements climatiques de la France, Accord de Paris, politique énergétique.",
        "**Numérique et vie citoyenne** (5 questions) : démarches en ligne (ANEF, FranceConnect), lutte contre la désinformation, droits numériques.",
      ],
    },
    { type: "h2", texte: "Le seuil de réussite reste à 80 %", id: "seuil-reussite" },
    {
      type: "p",
      texte: "Si la réforme est confirmée, le seuil de réussite resterait fixé à 80 %, soit **40 bonnes réponses sur 50** (contre 32/40 actuellement). La durée de l'épreuve serait portée de 45 à **55 minutes**.",
    },
    {
      type: "p",
      texte: "Le DGEF a précisé que les questions existantes ne seraient pas modifiées : seul un bloc additionnel serait ajouté en fin d'épreuve.",
    },
    { type: "h2", texte: "Calendrier prévisionnel", id: "calendrier-previsionnel" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Avril 2026** : consultation des partenaires sociaux et des organismes de formation.",
        "**Mai 2026** : publication du décret modificatif au Journal officiel.",
        "**Juin 2026** : entrée en vigueur (sous réserve de validation par le Conseil d'État).",
        "**Mesure transitoire** : les candidats ayant obtenu leur convocation avant la date de publication du décret pourraient passer l'ancien format de 40 questions.",
      ],
    },
    { type: "h2", texte: "Réactions des associations", id: "reactions-associations" },
    {
      type: "p",
      texte: "La CFDT et la Ligue des droits de l'Homme s'inquiètent d'une **complexification excessive** pour les publics les plus fragiles. « Ajouter des questions sur le numérique supposer maîtriser un vocabulaire technique qui n'est pas toujours accessible », souligne un responsable associatif.",
    },
    {
      type: "p",
      texte: "À l'inverse, le Haut Conseil à l'intégration estime que « comprendre les outils numériques est devenu indispensable à l'intégration » et que la mesure va dans le bon sens.",
    },
    { type: "h2", texte: "Comment se préparer dès maintenant ?", id: "preparation" },
    {
      type: "p",
      texte: "Que la réforme soit confirmée ou non, les 5 thématiques actuelles restent le socle du test. Notre conseil :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Maîtrisez d'abord les fondamentaux** : valeurs, institutions, histoire, symboles.",
        "**Restez informé** : nous mettrons à jour nos entraînements dès publication du décret.",
        "**Passez le test rapidement** si votre dossier est prêt, pour bénéficier du format actuel à 40 questions.",
      ],
    },
    {
      type: "p",
      texte: "Commencez votre préparation avec nos [quiz d'entraînement gratuits](/dashboard/entrainement).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Rien n'est encore officiel, mais il est prudent de se préparer. Si vous pouvez passer le test avant juin 2026, c'est le moment. Sinon, pas de panique : les fondamentaux restent les mêmes.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le test civique va-t-il passer à 50 questions ?",
      reponse: "Le gouvernement étudie cette possibilité pour juin 2026. Rien n'est confirmé officiellement. Les candidats ayant leur convocation avant le décret pourraient passer l'ancien format.",
    },
    {
      question: "Quelles seront les nouvelles thématiques ?",
      reponse: "Les thématiques envisagées sont le développement durable / transition écologique et le numérique / vie citoyenne, avec 5 questions chacune.",
    },
  ],
  aLireAussi: [
    { slug: "tout-savoir-examen-civique-2026", ancre: "Tout savoir sur l'examen civique" },
    { slug: "comment-reussir-test-civique-premier-coup", ancre: "Comment réussir le test civique" },
    {
      slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent",
      ancre: "Statistiques et taux de réussite",
    },
    { slug: "erreurs-frequentes-test-civique-2026-pieges-qcm", ancre: "Éviter les erreurs fréquentes" },
  ],
};

export default article;
