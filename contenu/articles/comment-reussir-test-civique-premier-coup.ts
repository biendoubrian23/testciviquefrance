import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part1.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/comment-reussir-test-civique-premier-coup`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "comment-reussir-test-civique-premier-coup",
  titre: "Comment réussir le test civique du premier coup : Guide complet 2025",
  titreSeo: "Comment réussir le test civique du premier coup : Guide complet 2025",
  resume: "Découvrez les meilleures stratégies et astuces pour réussir votre test civique français dès la première tentative. Méthodes de révision, erreurs à éviter et conseils d'experts.",
  chapo: "Le test civique est une étape cruciale pour votre naturalisation française ou l'obtention de votre titre de séjour. Avec un seuil de réussite fixé à 80% (32 bonnes réponses sur 40), une préparation sérieuse est indispensable. Ce guide vous donne toutes les clés pour réussir du premier coup.",
  publieLe: "2025-12-20",
  modifieLe: "2025-12-20",
  minutes: 15,
  theme: "réussir test civique",
  motsCles: [
    "réussir test civique",
    "préparation test civique",
    "conseils examen civique",
    "test civique premier coup",
    "révision test civique",
  ],
  rubrique: "preparation",
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
    { type: "h2", texte: "Comprendre le format de l'examen civique", id: "comprendre-examen" },
    {
      type: "p",
      texte: "L'examen civique est un QCM de **40 questions** à réaliser en **45 minutes maximum**. Il se déroule dans un centre agréé, sur support numérique. Pour réussir, vous devez obtenir au minimum **32 bonnes réponses** (80%).",
    },
    { type: "p", texte: "Les questions portent sur 5 thématiques officielles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Principes et valeurs de la République** (devise, symboles, laïcité)",
        "**Institutions françaises et européennes** (Président, Parlement, UE)",
        "**Droits et devoirs** (droits fondamentaux, obligations civiques)",
        "**Histoire et géographie de la France** (dates clés, régions)",
        "**Vie en société** (santé, travail, éducation, démarches administratives)",
      ],
    },
    { type: "h2", texte: "Établir un planning de révision efficace", id: "planning-revision" },
    {
      type: "p",
      texte: "Une préparation réussie s'étale sur **4 à 8 semaines** selon votre niveau de départ. Voici un planning type :",
    },
    { type: "p", texte: "**Semaines 1-2 : Les fondamentaux**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Étudiez les valeurs et symboles de la République",
        "Mémorisez la devise, les couleurs du drapeau, Marianne",
        "Apprenez l'hymne national et sa signification",
      ],
    },
    { type: "p", texte: "**Semaines 3-4 : Les institutions**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Comprenez le rôle du Président de la République",
        "Maîtrisez le fonctionnement de l'Assemblée nationale et du Sénat",
        "Apprenez les noms des principales institutions (Conseil constitutionnel, etc.)",
      ],
    },
    { type: "p", texte: "**Semaines 5-6 : Histoire et géographie**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Révisez les dates clés de l'histoire de France",
        "Connaissez les 13 régions métropolitaines",
        "Situez les grandes villes et fleuves",
      ],
    },
    { type: "p", texte: "**Semaines 7-8 : Vie pratique et révisions**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Révisez le système de santé, le travail, l'éducation",
        "Passez des examens blancs en conditions réelles",
        "Identifiez vos points faibles",
      ],
    },
    { type: "h2", texte: "Techniques de mémorisation efficaces", id: "techniques-memorisation" },
    {
      type: "p",
      texte: "Pour retenir efficacement les informations, utilisez ces techniques éprouvées :",
    },
    { type: "p", texte: "**Les flashcards**" },
    {
      type: "p",
      texte: "Créez des cartes avec une question d'un côté et la réponse de l'autre. Révisez-les quotidiennement.",
    },
    { type: "p", texte: "**Les associations mentales**" },
    {
      type: "p",
      texte: "Associez les dates à des images ou des histoires. Par exemple : 1789 = Révolution = Bastille = Liberté.",
    },
    { type: "p", texte: "**La répétition espacée**" },
    {
      type: "p",
      texte: "Révisez les informations à intervalles croissants : J+1, J+3, J+7, J+14, J+30.",
    },
    { type: "p", texte: "**Les moyens mnémotechniques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Devise : \"LEF\" pour Liberté, Égalité, Fraternité",
        "Drapeau : \"BBR\" pour Bleu, Blanc, Rouge (de gauche à droite)",
      ],
    },
    { type: "p", texte: "**L'apprentissage actif**" },
    { type: "p", texte: "Ne vous contentez pas de lire : testez-vous régulièrement avec des QCM." },
    { type: "h2", texte: "Les erreurs à éviter absolument", id: "erreurs-eviter" },
    { type: "p", texte: "Beaucoup de candidats échouent à cause d'erreurs évitables :" },
    { type: "p", texte: "**Sous-estimer l'examen**" },
    {
      type: "p",
      texte: "Le test civique n'est pas une formalité. 20% des candidats échouent à la première tentative.",
    },
    { type: "p", texte: "**Réviser au dernier moment**" },
    { type: "p", texte: "Commencez votre préparation au moins 4 semaines avant la date d'examen." },
    { type: "p", texte: "**Négliger certaines thématiques**" },
    { type: "p", texte: "Toutes les thématiques sont importantes. Ne faites pas d'impasses." },
    { type: "p", texte: "**Ne pas s'entraîner en conditions réelles**" },
    { type: "p", texte: "Passez plusieurs examens blancs chronométrés avant le jour J." },
    { type: "p", texte: "**Stresser le jour de l'examen**" },
    { type: "p", texte: "Dormez bien la veille, arrivez en avance, restez calme." },
    { type: "p", texte: "**Aller trop vite**" },
    {
      type: "p",
      texte: "Vous avez 45 minutes pour 40 questions. Prenez le temps de bien lire chaque question.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La réussite au test civique repose sur une préparation méthodique et régulière. En suivant ce guide et en vous entraînant sur Test Civique France, vous maximisez vos chances de réussir du premier coup. N'attendez plus pour commencer votre préparation !",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour se préparer au test civique ?",
      reponse: "En moyenne, 4 à 8 semaines de préparation régulière (30 min à 1h par jour) sont recommandées pour réussir le test civique.",
    },
    {
      question: "Peut-on repasser le test civique en cas d'échec ?",
      reponse: "Oui, vous pouvez repasser le test après un délai minimum. Cependant, une fraude vous interdit de repasser pendant 2 ans.",
    },
    {
      question: "Le test civique est-il le même pour la naturalisation et le titre de séjour ?",
      reponse: "Oui, le format est identique : 40 questions QCM, 45 minutes, seuil de 80%. Les thématiques sont les mêmes.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "Test civique France : tout ce qu'il faut savoir" },
    { id: "M6Jqed7F16I", titre: "Comment réussir le test civique du premier coup" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Test de connaissance civique",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Informations officielles sur le test de connaissance des valeurs de la République",
    },
    {
      titre: "Légifrance - Décret n° 2025-647 relatif au test civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052098629",
      type: "juridique",
      description: "Texte officiel du décret relatif au test de connaissance civique",
    },
    {
      titre: "Ministère de l'Intérieur - Naturalisation française",
      url: "https://www.interieur.gouv.fr/Archives/Archives-des-actualites/2024-Archives/Naturalisation-et-acquisition-de-la-nationalite-francaise",
      type: "officiel",
      description: "Page officielle sur les démarches de naturalisation",
    },
  ],
  aLireAussi: [
    {
      slug: "erreurs-frequentes-test-civique-2026-pieges-qcm",
      ancre: "Les erreurs les plus fréquentes au test civique",
    },
    {
      slug: "documents-test-civique-2026-convocation-piece-identite",
      ancre: "Que faut-il apporter le jour J ?",
    },
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Combien coûte le test civique ?",
    },
    {
      slug: "contrat-integration-republicaine-cir-2026-formation-civique",
      ancre: "Le CIR : formation civique obligatoire",
    },
  ],
};

export default article;
