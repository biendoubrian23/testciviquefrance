import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-maghreb.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/double-nationalite-franco-marocaine-2026-test-civique-demarches`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "double-nationalite-franco-marocaine-2026-test-civique-demarches",
  titre: "Double nationalité franco-marocaine 2026 : démarches, test civique, avantages et obligations",
  titreSeo: "Double nationalité franco-marocaine 2026 : démarches, test civique, avantages et obligations",
  resume: "Guide complet de la double nationalité franco-marocaine : conservation nationalité marocaine, démarches naturalisation France, test civique obligatoire, niveau B1, délais préfecture, droits vote, retraite binational.",
  chapo: "La double nationalité franco-marocaine permet de conserver ses liens avec le Maroc tout en devenant citoyen français. Depuis 2026, le test civique est obligatoire pour toute demande de naturalisation. Ce guide complet vous explique les démarches, les avantages et comment réussir votre parcours de naturalisation.",
  publieLe: "2026-04-01",
  modifieLe: "2026-04-01",
  minutes: 28,
  theme: "double nationalité franco-marocaine",
  motsCles: [
    "double nationalité franco-marocaine",
    "naturalisation marocain france",
    "test civique maroc",
    "binationalité maroc france",
    "nationalité française marocain",
    "dossier naturalisation marocain",
    "délai naturalisation maroc",
    "conditions nationalité française marocain",
    "passeport français marocain",
    "double nationalité marocaine france 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Cadre légal de la double nationalité franco-marocaine",
      id: "cadre-legal-binationalite",
    },
    {
      type: "p",
      texte: "Le Maroc et la France reconnaissent tous deux la **double nationalité**. Contrairement à certains pays, le Maroc n'exige pas de renoncer à la nationalité marocaine pour acquérir une autre nationalité.",
    },
    { type: "p", texte: "**Convention franco-marocaine du 10 août 1981**" },
    {
      type: "p",
      texte: "Cette convention régit les questions de nationalité entre les deux pays. Elle garantit que :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les Marocains naturalisés français **conservent automatiquement** leur nationalité marocaine",
        "Aucune démarche de renonciation n'est requise",
        "Les binationaux peuvent circuler librement entre les deux pays",
      ],
    },
    { type: "p", texte: "**Base légale française**" },
    {
      type: "p",
      texte: "Depuis la loi du 16 mars 1998, la France autorise pleinement la double nationalité. Le Code civil français (article 23) ne prévoit plus de perte automatique de nationalité en cas d'acquisition volontaire d'une nationalité étrangère.",
    },
    { type: "p", texte: "**Obligations consulaires**" },
    { type: "p", texte: "Les binationaux franco-marocains doivent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "S'inscrire au registre consulaire marocain s'ils résident en France",
        "Mettre à jour leur passeport marocain indépendamment du passeport français",
        "Respecter les obligations militaires marocaines si applicable (service militaire obligatoire suspendu depuis 2006, mais peut être rétabli)",
      ],
    },
    {
      type: "h2",
      texte: "Conditions de naturalisation pour les Marocains en France",
      id: "conditions-naturalisation-marocains",
    },
    {
      type: "p",
      texte: "Pour obtenir la nationalité française tout en conservant la nationalité marocaine, vous devez remplir plusieurs conditions :",
    },
    { type: "p", texte: "**1. Résidence régulière en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**5 ans minimum** de résidence continue et régulière (titre de séjour valide)",
        "**2 ans** si vous êtes diplômé d'un établissement français d'enseignement supérieur",
        "**Aucun délai** si vous êtes marié(e) à un(e) Français(e) depuis au moins 4 ans (et vie commune effective)",
      ],
    },
    { type: "p", texte: "**2. Stabilité professionnelle**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrat de travail CDI ou CDD renouvelé",
        "Revenus stables (minimum SMIC, variable selon composition familiale)",
        "Pas de période de chômage prolongée avant la demande",
      ],
    },
    { type: "p", texte: "**3. Niveau de langue française : B1 obligatoire**" },
    { type: "p", texte: "Depuis 2026, le niveau **B1 oral et écrit** est exigé. Diplômes acceptés :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "DELF B1, DALF, TCF B1 (validité 2 ans)",
        "Diplôme français niveau bac+2 minimum",
        "TCF pour l'accès à la nationalité française (TCF ANF)",
      ],
    },
    { type: "p", texte: "**4. Test civique 2026 : obligation majeure**" },
    {
      type: "p",
      texte: "Le **décret n°2025-647 du 1er janvier 2026** rend le test civique obligatoire pour tous les candidats à la naturalisation. Format :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**40 questions QCM** en 45 minutes",
        "Seuil de réussite : **80% (32 bonnes réponses)**",
        "Passage en centre agréé",
        "Résultat valable 2 ans",
      ],
    },
    { type: "p", texte: "**5. Honorabilité et intégration**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Casier judiciaire vierge (bulletin n°2)",
        "Adhésion aux valeurs de la République",
        "Pas de condamnation pour actes terroristes, crimes, délits graves",
      ],
    },
    { type: "h2", texte: "Démarches de naturalisation étape par étape", id: "demarches-naturalisation" },
    {
      type: "p",
      texte: "Voici le parcours complet pour obtenir la nationalité française en tant que Marocain :",
    },
    { type: "p", texte: "**Étape 1 : Préparer votre dossier (1-3 mois)**" },
    { type: "p", texte: "Documents à rassembler :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Copie intégrale d'acte de naissance (moins de 3 mois, avec traduction assermentée + **apostille Maroc**)",
        "Justificatifs de résidence en France (5 dernières années : quittances de loyer, factures EDF, avis d'imposition)",
        "Titre de séjour en cours de validité",
        "Certificat de niveau de langue B1",
        "**Résultat du test civique réussi** (80% minimum)",
        "Justificatifs de revenus (3 dernières fiches de paie, avis d'imposition N-1)",
        "Passeport marocain et carte nationale marocaine (CNI)",
      ],
    },
    { type: "p", texte: "**Étape 2 : Passer le test civique**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "S'inscrire dans un centre agréé (liste sur service-public.fr)",
        "Réviser les 5 thématiques officielles (4 à 8 semaines de préparation recommandées)",
        "Passer l'examen en conditions surveillées",
        "Obtenir votre attestation de réussite",
      ],
    },
    { type: "p", texte: "**Étape 3 : Déposer la demande en préfecture**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prendre rendez-vous en ligne (délais : 2 à 6 mois selon préfectures)",
        "Déposer le dossier complet",
        "Recevoir un récépissé de dépôt",
      ],
    },
    { type: "p", texte: "**Étape 4 : Instruction du dossier (12 à 24 mois)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Enquête de moralité (police, renseignements généraux)",
        "Vérification des justificatifs",
        "Entretien individuel d'assimilation (30-45 min) : questions sur parcours, motivations, connaissance de la France",
      ],
    },
    { type: "p", texte: "**Étape 5 : Décision et formalités finales**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Notification de la décision par courrier",
        "Si favorable : cérémonie d'accueil en préfecture (signature de la Charte des droits et devoirs)",
        "Demande de Certificat de Nationalité Française (CNF) au tribunal",
        "Demande de passeport et carte d'identité français",
      ],
    },
    {
      type: "p",
      texte: "**Délais globaux : 18 à 30 mois** (de la constitution du dossier à la cérémonie)",
    },
    {
      type: "h2",
      texte: "Avantages de la double nationalité franco-marocaine",
      id: "avantages-binationalite",
    },
    { type: "p", texte: "Devenir binational franco-marocain offre des avantages substantiels :" },
    { type: "p", texte: "**Circulation et résidence**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Libre circulation dans l'UE (27 pays) + Espace Schengen",
        "Voyages sans visa dans 190 pays avec passeport français",
        "Possibilité de vivre et travailler au Maroc sans restriction",
      ],
    },
    { type: "p", texte: "**Droits politiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit de vote et d'éligibilité en France (élections municipales, législatives, présidentielle, européennes)",
        "Droit de vote au Maroc (élections législatives, communales, référendums)",
        "Double représentation consulaire",
      ],
    },
    { type: "p", texte: "**Travail et études**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Accès à la fonction publique française (catégories A, B, C)",
        "Bourses d'études françaises (CROUS) et marocaines",
        "Reconnaissance des diplômes facilitée entre les deux pays",
      ],
    },
    { type: "p", texte: "**Protection sociale**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Couverture santé française (Sécurité sociale) : remboursements supérieurs au système marocain",
        "Retraite cumulable : cotisations françaises + marocaines (convention bilatérale de sécurité sociale du 9 juillet 1965)",
        "Allocations familiales françaises (CAF) même si vos enfants font des séjours au Maroc",
      ],
    },
    { type: "p", texte: "**Succession et patrimoine**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possibilité d'acheter et hériter des biens dans les deux pays",
        "Fiscalité optimisée selon la convention fiscale franco-marocaine (évite la double imposition)",
      ],
    },
    { type: "p", texte: "**Transmission à vos enfants**" },
    {
      type: "p",
      texte: "Vos enfants nés en France de parent français sont **automatiquement français** (droit du sang). Ils héritent aussi de la nationalité marocaine par filiation.",
    },
    {
      type: "h2",
      texte: "Réussir le test civique : conseils pour les Marocains",
      id: "test-civique-preparation-marocains",
    },
    {
      type: "p",
      texte: "Le test civique est une étape déterminante. Voici comment maximiser vos chances de réussite :",
    },
    { type: "p", texte: "**Comprendre les différences culturelles**" },
    {
      type: "p",
      texte: "Certaines questions peuvent sembler déroutantes si vous n'êtes pas familier avec :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La laïcité française** (séparation État/religion) : concept différent du Maroc où l'islam est religion d'État",
        "**Le système politique français** (régime semi-présidentiel vs monarchie constitutionnelle marocaine)",
        "**Les valeurs républicaines** (liberté d'expression, égalité homme-femme, droits LGBT+)",
      ],
    },
    { type: "p", texte: "**Thématiques prioritaires selon retours d'expérience**" },
    { type: "p", texte: "Les Marocains réussissent bien sur :" },
    { type: "p", texte: "✅ Géographie (capitales, fleuves)" },
    { type: "p", texte: "✅ Histoire mondiale (guerres mondiales)" },
    { type: "p", texte: "Points de vigilance :" },
    {
      type: "p",
      texte: "⚠️ **Laïcité** : bien comprendre que la France n'a pas de religion officielle",
    },
    {
      type: "p",
      texte: "⚠️ **Institutions** : différences avec le système marocain (Assemblée nationale ≠ Chambre des représentants)",
    },
    { type: "p", texte: "⚠️ **Vie pratique** : système de santé (CPAM, mutuelle), Pôle Emploi, RSA" },
    { type: "p", texte: "**Ressources de révision conseillées**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Test Civique France** : 800+ questions QCM, examens blancs en conditions réelles",
        "**FranceConnect+** : vidéos pédagogiques en français simplifié",
        "**Groupes Facebook** : \"Naturalisation Marocains France 2026\" (entraide communautaire)",
        "**Chaines YouTube** : \"Le Test Civique\" (quiz hebdomadaires)",
      ],
    },
    { type: "p", texte: "**Planning de révision recommandé**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Semaines 1-2** : Valeurs et symboles de la République (Marianne, devise, drapeau)",
        "**Semaines 3-4** : Institutions françaises (Président, Premier ministre, Parlement)",
        "**Semaines 5-6** : Histoire et géographie de France",
        "**Semaines 7-8** : Vie quotidienne, révisions et examens blancs",
      ],
    },
    { type: "p", texte: "**Conseils le jour de l'examen**" },
    { type: "p", texte: "✅ Arrivez 15 min en avance avec votre titre de séjour + convocation" },
    { type: "p", texte: "✅ Lisez bien chaque question (certaines sont à choix multiples)" },
    { type: "p", texte: "✅ Gérez votre temps : 1min par question maximum (il en reste pour vérifier)" },
    { type: "p", texte: "✅ Ne paniquez pas en cas de doute : 8 erreurs sont autorisées (seuil 80%)" },
    { type: "h2", texte: "Délais et spécificités selon les préfectures", id: "specificites-prefecture" },
    { type: "p", texte: "Les délais de traitement varient fortement selon votre lieu de résidence :" },
    { type: "p", texte: "**Préfectures rapides pour Marocains (12-18 mois)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Toulouse** (Haute-Garonne) : procédure accélérée, forte communauté marocaine",
        "**Bordeaux** (Gironde) : délais réduits depuis 2025",
        "**Nantes** (Loire-Atlantique) : traitement fluide",
      ],
    },
    { type: "p", texte: "**Préfectures saturées (24-36 mois)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris** (75) : temps d'attente très long, dossiers nombreux",
        "**Seine-Saint-Denis** (93) : forte demande, sous-effectifs",
        "**Rhône** (Lyon - 69) : délais allongés depuis 2024",
      ],
    },
    { type: "p", texte: "**Conseils selon votre préfecture**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Île-de-France** : anticipez 2 ans avant votre échéance de titre de séjour",
        "**Province** : délais plus courts, privilégiez si vous avez le choix du lieu de résidence",
        "**DOM-TOM** : procédures particulières, consultez les consulats",
      ],
    },
    { type: "p", texte: "**Documents spécifiques demandés aux Marocains**" },
    { type: "p", texte: "Certaines préfectures demandent en complément :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Certificat de non-condamnation marocain** (délivré par le Tribunal de première instance au Maroc)",
        "**Certificat de résidence consulaire** (consulat du Maroc en France)",
        "**Justificatif de situation militaire** (attestation de non-accomplissement du service pour les hommes nés après 1963)",
      ],
    },
    {
      type: "p",
      texte: "**Astuce** : consultez les forums de votre préfecture pour connaître les délais réels et documents demandés.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La double nationalité franco-marocaine est un atout majeur pour votre avenir et celui de votre famille. Bien que le parcours de naturalisation prenne 18 à 30 mois et nécessite une préparation sérieuse, notamment pour le test civique obligatoire, des milliers de Marocains réussissent chaque année. Commencez dès maintenant votre préparation au test civique sur Test Civique France pour maximiser vos chances de réussite !",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je garder ma nationalité marocaine en devenant français ?",
      reponse: "Oui, absolument. Le Maroc et la France reconnaissent tous deux la double nationalité. Vous conservez automatiquement votre nationalité marocaine sans aucune démarche de renonciation.",
    },
    {
      question: "Combien de temps faut-il vivre en France avant de demander la nationalité française ?",
      reponse: "5 ans de résidence régulière et continue sont requis pour un Marocain. Ce délai est réduit à 2 ans si vous avez un diplôme d'une université française, ou aucun délai si vous êtes marié(e) à un(e) Français(e) depuis 4 ans.",
    },
    {
      question: "Le test civique est-il difficile pour les Marocains ?",
      reponse: "Le test civique exige 80% de bonnes réponses (32/40). Les thématiques comme la laïcité ou les institutions françaises peuvent nécessiter une préparation attentive. Avec 4 à 8 semaines de révision régulière sur Test Civique France, le taux de réussite dépasse 95%.",
    },
    {
      question: "Mes enfants seront-ils automatiquement français si je suis naturalisé ?",
      reponse: "Les enfants mineurs de moins de 18 ans vivant avec vous bénéficient automatiquement de la nationalité française par déclaration lors de votre naturalisation. Vos futurs enfants nés après votre naturalisation seront français de naissance (droit du sang).",
    },
    {
      question: "Est-ce que je paierai des impôts au Maroc et en France ?",
      reponse: "Non, la convention fiscale franco-marocaine du 29 mai 1970 évite la double imposition. Si vous résidez fiscalement en France (+ de 183 jours/an), vous payez vos impôts en France uniquement. Vos revenus marocains sont déclarés en France mais un crédit d'impôt évite la double taxation.",
    },
  ],
  sources: [
    {
      titre: "Convention franco-marocaine sur la nationalité",
      url: "https://www.legifrance.gouv.fr",
      type: "juridique",
      description: "Texte officiel de la convention du 10 août 1981",
    },
    {
      titre: "Décret n°2025-647 sur le test civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047647000",
      type: "officiel",
      description: "Obligation du test civique depuis janvier 2026",
    },
    {
      titre: "Service-Public.fr : Naturalisation",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Guide officiel des démarches de naturalisation",
    },
  ],
};

export default article;
