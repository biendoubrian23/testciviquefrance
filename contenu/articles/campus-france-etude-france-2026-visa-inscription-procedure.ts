import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-campus-france-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/campus-france-etude-france-2026-visa-inscription-procedure`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "campus-france-etude-france-2026-visa-inscription-procedure",
  titre: "Campus France 2026 : Études en France, visa étudiant, entretien, financement (guide ultra-complet 48 400 recherches/mois)",
  titreSeo: "Campus France 2026 : Études en France, visa étudiant, entretien, financement (guide ultra-complet 48 400 recherches/mois)",
  resume: "Procédure Campus France 2026 pas à pas : pays CEF, plateforme Études en France, calendrier (oct-juin), entretien Campus France et 7 conseils pour le réussir, coûts (175-3 879 €), bourses, APS et naturalisation accélérée.",
  chapo: "**Campus France** est l'agence officielle française pour la promotion de l'enseignement supérieur, l'accueil et la mobilité internationale. Avec **48 400 recherches mensuelles** sur Bing en 2026, c'est la porte d'entrée incontournable pour les **400 000+ étudiants étrangers** qui rejoignent la France chaque année.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 24,
  theme: "campus france",
  motsCles: [
    "campus france",
    "campus france 2026",
    "études en france",
    "pastel diplomatie",
    "visa étudiant france",
    "TCF DAP",
    "entretien campus france",
    "procédure CEF",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide complet explique **étape par étape la procédure Campus France 2026** : pour qui, dans quels pays, quels diplômes, quels coûts, comment s'inscrire sur **Études en France**, comment réussir l'entretien Campus France, obtenir son visa étudiant, et toutes les astuces pour mettre toutes les chances de son côté.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que Campus France et qui doit y passer ?",
      id: "qu-est-ce-que-campus-france",
    },
    {
      type: "p",
      texte: "**Campus France** est un opérateur public sous tutelle des ministères de l'Europe et des Affaires étrangères, et de l'Enseignement supérieur. Sa mission : promouvoir l'enseignement supérieur français à l'international et accompagner les étudiants étrangers dans leur projet d'études en France.",
    },
    { type: "p", texte: "**Vous devez OBLIGATOIREMENT passer par Campus France si :**" },
    {
      type: "p",
      texte: "✅ Vous êtes ressortissant d'un des **65 pays à procédure CEF** (Centre pour les Études en France)",
    },
    {
      type: "p",
      texte: "✅ Vous voulez vous inscrire en **Licence (L1, L2, L3)**, **Master 1 ou 2** ou **DUT/BUT**",
    },
    { type: "p", texte: "✅ Vous avez besoin d'un **visa long séjour étudiant**" },
    { type: "p", texte: "**Vous N'avez PAS besoin de Campus France si :**" },
    { type: "p", texte: "❌ Vous êtes citoyen UE/EEE/Suisse" },
    { type: "p", texte: "❌ Vous candidatez en **doctorat** (procédure directe avec l'école doctorale)" },
    { type: "p", texte: "❌ Vous êtes déjà en France avec un titre de séjour valide" },
    {
      type: "p",
      texte: "❌ Vous postulez à une école avec **procédure d'admission propre** non rattachée à Campus France (certaines grandes écoles)",
    },
    { type: "p", texte: "**Les 65 pays CEF (les plus fréquents) :**" },
    {
      type: "p",
      texte: "Algérie, Maroc, Tunisie, Sénégal, Côte d'Ivoire, Cameroun, Mali, Bénin, Madagascar, Gabon, Congo, RDC, Burkina Faso, Liban, Égypte, Arabie Saoudite, Émirats, Inde, Vietnam, Chine, Indonésie, Japon, Corée du Sud, Taïwan, Brésil, Mexique, Argentine, Colombie, Chili, Pérou, États-Unis, Canada, Russie, Turquie, Iran, etc.",
    },
    {
      type: "h2",
      texte: "La procédure Études en France pas à pas (2026)",
      id: "procedure-etudes-en-france",
    },
    { type: "p", texte: "**Plateforme officielle :** **pastel.diplomatie.gouv.fr/etudesenfrance**" },
    { type: "p", texte: "**Calendrier 2026-2027 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Octobre 2025** : ouverture de la plateforme",
        "**15 décembre 2025 - 15 janvier 2026** : dépôt des candidatures DAP (Demande d'Admission Préalable)",
        "**Janvier - Mars 2026** : entretiens Campus France",
        "**Avril - Juin 2026** : réponses des établissements",
        "**Juin - Août 2026** : demande de visa",
        "**Septembre 2026** : arrivée en France",
      ],
    },
    { type: "p", texte: "**Étape 1 : Création du dossier en ligne**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscription sur Études en France",
        "Renseigner : état civil, parcours scolaire, projet d'études",
        "Téléverser : passeport, diplômes traduits (si non français), relevés de notes, CV, lettre de motivation, certifications de langue (TCF DAP, DELF, TOEFL)",
      ],
    },
    { type: "p", texte: "**Étape 2 : Choix des formations (jusqu'à 7 vœux)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Licence : DAP \"blanche\" (L1) ou candidature directe (L2-L3 hors champ DAP)",
        "Master : candidature directe à chaque université",
        "Frais : **50 € par dossier** environ + 99 € de frais Campus France (selon pays)",
      ],
    },
    {
      type: "p",
      texte: "**Étape 3 : Entretien Campus France (obligatoire pour la plupart des pays CEF)**",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée : 30 minutes",
        "Sur le **projet d'études** et la **maîtrise du français**",
        "Notation : avis Campus France joint au dossier (favorable / défavorable / réservé)",
      ],
    },
    { type: "p", texte: "**Étape 4 : Décisions des établissements**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réponses entre avril et juin",
        "Acceptation conditionnelle (visa requis), liste d'attente, ou refus",
      ],
    },
    { type: "p", texte: "**Étape 5 : Demande de visa long séjour étudiant**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "VFS Global ou TLS Contact selon pays",
        "Visa **VLS-TS étudiant** valable 1 an, validation OFII obligatoire en France",
      ],
    },
    {
      type: "h2",
      texte: "Réussir l'entretien Campus France : 7 conseils éprouvés",
      id: "reussir-entretien",
    },
    {
      type: "p",
      texte: "L'entretien Campus France est **éliminatoire dans plusieurs pays** (Algérie, Tunisie, Maroc, Sénégal, Vietnam, etc.). Un avis défavorable peut bloquer votre visa.",
    },
    { type: "p", texte: "**1. Maîtrisez votre projet d'études**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pourquoi cette formation ?",
        "Pourquoi en France et pas dans votre pays ?",
        "Comment ce diplôme s'intègre dans votre projet professionnel ?",
      ],
    },
    { type: "p", texte: "**2. Démontrez la cohérence du parcours**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si rupture de cursus, expliquez avec des arguments concrets",
        "Évitez les changements brutaux non justifiés",
      ],
    },
    { type: "p", texte: "**3. Connaissez votre établissement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lisez le site web de l'université / école",
        "Citez 2-3 cours phares qui vous attirent",
        "Mentionnez les laboratoires de recherche si pertinent",
      ],
    },
    { type: "p", texte: "**4. Prouvez votre niveau de français**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "TCF DAP minimum **B2** (niveau 4) pour Licence",
        "DELF B2 ou DALF C1 pour Master compétitif",
        "Astuce : faites un **stage linguistique en France** avant si possible",
      ],
    },
    { type: "p", texte: "**5. Préparez le financement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justifiez 615 €/mois pour 12 mois (≈7 380 €) bloqués sur compte",
        "Bourse, parents, prêt étudiant : tout est valable mais doit être prouvé",
      ],
    },
    { type: "p", texte: "**6. Soyez précis sur le retour au pays (si applicable)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Beaucoup de pays exigent une \"lettre d'intention de retour\"",
        "Plan de carrière dans le pays d'origine après le diplôme",
      ],
    },
    { type: "p", texte: "**7. Tenue et attitude**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tenue correcte",
        "Sourire et politesse",
        "Pas de réponses apprises par cœur : soyez naturel",
      ],
    },
    {
      type: "h2",
      texte: "Combien coûte étudier en France pour un étranger en 2026 ?",
      id: "cout-etudes-france",
    },
    { type: "p", texte: "**Frais de candidature Campus France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Frais de procédure CEF : **50 à 99 €** selon pays",
        "Frais de candidature universitaires : **50 € par établissement** (parfois inclus)",
      ],
    },
    { type: "p", texte: "**Frais de scolarité 2026 :**" },
    {
      type: "tableau",
      entetes: ["Formation", "Pays UE/EEE", "Pays hors UE"],
      lignes: [
        ["Licence", "175 €/an", "**2 850 €/an**"],
        ["Master", "250 €/an", "**3 879 €/an**"],
        ["Doctorat", "380 €/an", "380 €/an (sauf exception)"],
        ["Grandes écoles", "500-15 000 €/an", "500-25 000 €/an"],
        ["Privé (Bachelor, MBA)", "6 000-25 000 €/an", "6 000-30 000 €/an"],
      ],
    },
    { type: "p", texte: "**Coût de la vie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Logement (CROUS / privé) : **300 à 800 €/mois**",
        "Repas (RU à 3.30 €) : **150 à 300 €/mois**",
        "Transport (Pass Navigo Île-de-France) : **88.80 €/mois**",
        "Mutuelle (CSS étudiant) : 0-50 €/mois",
        "Loisirs / divers : 100-200 €/mois",
      ],
    },
    { type: "p", texte: "**Total mensuel moyen : 700 à 1 200 €/mois selon ville**" },
    { type: "p", texte: "**Aides accessibles aux étudiants étrangers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**APL** (CAF) : 100 à 250 €/mois",
        "**Bourse Campus France** (Eiffel, BGF) : couvre tout (rare et compétitif)",
        "**Job étudiant** : 964h/an autorisées",
        "**CSS** (Complémentaire Santé Solidaire) : gratuite si revenus faibles",
      ],
    },
    {
      type: "h2",
      texte: "Après votre diplôme : APS, Passeport Talent et naturalisation",
      id: "apres-diplome",
    },
    {
      type: "p",
      texte: "Étudier en France peut être le début d'un parcours plus long. Voici les voies pour rester :",
    },
    { type: "p", texte: "**1. APS (Autorisation Provisoire de Séjour) : 12 mois après Master**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Niveau Master minimum",
        "12 mois pour chercher un emploi ou créer une entreprise",
        "Travail à 100% (plus de limite 964h)",
      ],
    },
    { type: "p", texte: "**2. Passeport Talent, Salarié qualifié**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaire ≥ **1.5 SMIC** (≈ 2 707 €/mois en 2026)",
        "Diplôme niveau Master + emploi qualifié",
        "Titre 4 ans renouvelable",
      ],
    },
    { type: "p", texte: "**3. Salarié classique**" },
    {
      type: "liste",
      style: "puces",
      items: ["CDI ou CDD ≥12 mois", "Salaire ≥ 1.5 SMIC", "Passage par changement de statut sur ANEF"],
    },
    { type: "p", texte: "**4. Naturalisation à terme**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "5 ans de résidence régulière en France (réduit à **2 ans après 2 ans d'études supérieures en France** !)",
        "Connaissance de la langue française (B1)",
        "Test civique (réussite à 80%)",
      ],
    },
    { type: "p", texte: "**Astuce naturalisation pour étudiants :**" },
    {
      type: "p",
      texte: "La loi prévoit une **réduction à 2 ans** du délai de stage pour les étrangers ayant suivi avec succès **2 années d'enseignement supérieur en France**. C'est une voie royale vers la nationalité française.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Campus France est une étape exigeante mais structurante pour votre projet d'études en France. La clé du succès : **anticiper de 12 à 18 mois**, soigner votre dossier (notes, langue, cohérence), réussir l'entretien Campus France et préparer le financement. Une fois en France, l'écosystème étudiant (CROUS, APL, RU, mutuelle CSS) rend les études abordables. Et pour ceux qui veulent rester après le diplôme, l'APS, le Passeport Talent et la naturalisation accélérée sont des voies concrètes et accessibles.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte la procédure Campus France en 2026 ?",
      reponse: "Entre 50 et 99 € pour la procédure Études en France selon votre pays, plus environ 50 € par dossier de candidature universitaire. Total moyen : 200-400 €.",
    },
    {
      question: "Combien de temps prend la procédure Campus France ?",
      reponse: "6 à 9 mois entre l'ouverture du dossier (octobre/novembre) et l'arrivée en France (septembre). Anticipez largement.",
    },
    {
      question: "Peut-on contourner Campus France si on est dans un pays CEF ?",
      reponse: "Non, c'est obligatoire pour obtenir un visa étudiant. Sauf si vous candidatez à une grande école avec procédure d'admission propre (HEC, Sciences Po, etc.), le visa reste lié à votre admission.",
    },
    {
      question: "Quel niveau de français est exigé ?",
      reponse: "TCF DAP niveau 4 (B2) minimum pour Licence. B2/C1 pour Master compétitif. Pour les formations en anglais, certificat type IELTS/TOEFL exigé à la place.",
    },
    {
      question: "Un avis défavorable Campus France est-il définitif ?",
      reponse: "Non. L'avis Campus France est consultatif. Vous pouvez quand même obtenir un visa si l'établissement vous accepte, mais c'est plus difficile. Vous pouvez aussi représenter le dossier l'année suivante.",
    },
  ],
};

export default article;
