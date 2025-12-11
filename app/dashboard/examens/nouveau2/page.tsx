'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  Trophy,
  Home,
  Loader2
} from 'lucide-react';
import { consumeExamCredit } from '@/lib/utils/examCredits';

// =====================================================
// SÉCURITÉ PAR HASH - Les réponses correctes sont hashées
// Impossible de voir directement quelle est la bonne réponse
// Il faudrait bruteforcer 0,1,2,3 (mais autant apprendre!)
// =====================================================

// Fonction de hash simple (djb2) - rapide et suffisant pour notre cas
// EXAMEN 2 - Numéro d'examen intégré dans le hash
const EXAM_NUMBER = 2;

function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `exam${EXAM_NUMBER}_q${questionId}_a${answerIndex}_civique2024`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

// Vérifier une réponse (compare le hash)
function verifyAnswer(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Trouver l'index correct à partir du hash (pour l'affichage après correction)
function findCorrectIndex(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

// ==================== QUESTIONS DE L'EXAMEN BLANC #2 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

interface Question {
  id: number;
  categorie: string;
  sousCategorie: string;
  question: string;
  options: string[];
  correctHash: string; // Hash de la bonne réponse (pas l'index direct!)
  explication: string;
}

// Génération des questions avec hash
// Pour chaque question, correctHash = hashAnswer(id, indexCorrect)
const QUESTIONS_EXAMEN: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quel animal symbolise la France ?",
    options: ["L'aigle", "Le coq", "Le lion", "Le taureau"],
    correctHash: hashAnswer(1, 1),
    explication: "Le coq gaulois est l'un des symboles de la France. Il représente la vigilance et le courage. Il figure notamment sur les maillots des équipes nationales sportives."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Marianne est le symbole de :",
    options: ["La monarchie française", "La République française", "L'Empire français", "La région parisienne"],
    correctHash: hashAnswer(2, 1),
    explication: "Marianne est la représentation symbolique de la République française. Son buste figure dans toutes les mairies. Elle porte souvent un bonnet phrygien, symbole de liberté."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quelle est la fête nationale française ?",
    options: ["Le 1er mai", "Le 8 mai", "Le 14 juillet", "Le 11 novembre"],
    correctHash: hashAnswer(3, 2),
    explication: "Le 14 juillet est la fête nationale française. Elle commémore la prise de la Bastille le 14 juillet 1789 et la Fête de la Fédération du 14 juillet 1790."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans un établissement scolaire public, un enseignant peut-il porter des signes religieux ?",
    options: [
      "Oui, c'est sa liberté",
      "Non, il doit respecter le principe de neutralité",
      "Oui, s'il enseigne la religion",
      "Cela dépend de l'école"
    ],
    correctHash: hashAnswer(4, 1),
    explication: "Les enseignants, en tant qu'agents publics, doivent respecter le principe de neutralité et ne peuvent afficher leurs convictions religieuses dans l'exercice de leurs fonctions."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "La laïcité garantit :",
    options: [
      "L'interdiction des religions",
      "La liberté de culte et la neutralité de l'État",
      "La priorité à la religion catholique",
      "L'athéisme obligatoire"
    ],
    correctHash: hashAnswer(5, 1),
    explication: "La laïcité garantit la liberté de conscience, le libre exercice des cultes et la neutralité de l'État vis-à-vis des religions, dans le respect de l'ordre public."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Quelle forme de discrimination est interdite en France ?",
    options: [
      "Uniquement la discrimination raciale",
      "Toutes les formes de discrimination",
      "Uniquement la discrimination religieuse",
      "Aucune discrimination n'est interdite"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "La loi française interdit toutes les formes de discrimination : origine, sexe, situation de famille, orientation sexuelle, âge, opinions politiques, activités syndicales, religion, apparence physique, handicap, etc."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un commerçant refuse de servir une personne en raison de son origine. Quelle est la sanction ?",
    options: [
      "Simple avertissement",
      "Amende de 50 euros",
      "Jusqu'à 3 ans de prison et 45 000 € d'amende",
      "Aucune sanction, c'est légal"
    ],
    correctHash: hashAnswer(7, 2),
    explication: "Refuser un bien ou un service en raison de l'origine est une discrimination punie par le Code pénal : jusqu'à 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "En France, une femme mariée doit-elle obtenir l'autorisation de son mari pour travailler ?",
    options: [
      "Oui, toujours",
      "Non, elle a la même liberté que les hommes",
      "Oui, si elle a des enfants",
      "Cela dépend du contrat de mariage"
    ],
    correctHash: hashAnswer(8, 1),
    explication: "Depuis 1965, une femme mariée peut exercer une profession sans le consentement de son mari. L'égalité femmes-hommes est un principe constitutionnel."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous voyez quelqu'un taguer un monument public. Que devez-vous faire ?",
    options: [
      "Rien, ce n'est pas votre problème",
      "Prendre une photo et appeler la police (17)",
      "Aider la personne",
      "Filmer et publier sur les réseaux sociaux"
    ],
    correctHash: hashAnswer(9, 1),
    explication: "La dégradation de bien public est un délit. Il convient d'alerter les forces de l'ordre (17 ou 112) et éventuellement de prendre des photos comme preuves."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un collègue fait des remarques sexistes. Que dit la loi ?",
    options: [
      "C'est normal, c'est de l'humour",
      "C'est interdit, c'est du harcèlement",
      "C'est autorisé entre collègues",
      "Cela dépend de l'entreprise"
    ],
    correctHash: hashAnswer(10, 1),
    explication: "Les propos sexistes constituent du harcèlement sexuel ou moral, interdit par le Code du travail et le Code pénal. Les sanctions peuvent être sévères."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Que signifie le principe de fraternité ?",
    options: [
      "L'obligation d'être ami avec tout le monde",
      "La solidarité et l'entraide entre tous les citoyens",
      "L'obéissance aux autorités",
      "Le respect des traditions familiales"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "La fraternité implique la solidarité et l'entraide entre tous les membres de la société, sans distinction. C'est le troisième pilier de la devise républicaine."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Pour voter en France, il faut :",
    options: [
      "Avoir 18 ans et être inscrit sur les listes électorales",
      "Avoir 21 ans minimum",
      "Avoir un diplôme",
      "Être propriétaire"
    ],
    correctHash: hashAnswer(12, 0),
    explication: "Pour voter en France, il faut avoir 18 ans, être de nationalité française, jouir de ses droits civils et politiques, et être inscrit sur les listes électorales."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Les députés sont élus pour :",
    options: ["3 ans", "4 ans", "5 ans", "7 ans"],
    correctHash: hashAnswer(13, 2),
    explication: "Les députés de l'Assemblée nationale sont élus pour 5 ans au suffrage universel direct. Ils peuvent être réélus sans limitation."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui nomme le Premier ministre ?",
    options: ["Les députés", "Le Président de la République", "Les citoyens par vote", "Le Sénat"],
    correctHash: hashAnswer(14, 1),
    explication: "Le Premier ministre est nommé par le Président de la République. Il est le chef du Gouvernement et dirige l'action de celui-ci."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Conseil constitutionnel vérifie :",
    options: [
      "Les impôts des citoyens",
      "La conformité des lois à la Constitution",
      "Les diplômes des fonctionnaires",
      "Les budgets des entreprises"
    ],
    correctHash: hashAnswer(15, 1),
    explication: "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution. Il veille au respect de celle-ci et juge de la régularité des élections nationales."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Qui dirige une commune en France ?",
    options: ["Le préfet", "Le maire", "Le député", "Le président du conseil régional"],
    correctHash: hashAnswer(16, 1),
    explication: "Le maire est élu par le conseil municipal et dirige la commune. Il est à la fois agent de l'État et représentant de la collectivité locale."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Quelle est la monnaie officielle de la France depuis 2002 ?",
    options: ["Le franc", "L'euro", "Le dollar", "La livre"],
    correctHash: hashAnswer(17, 1),
    explication: "L'euro est la monnaie officielle de la France depuis le 1er janvier 2002, remplaçant le franc français. Elle est utilisée par 20 pays de l'Union européenne."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté d'expression est-elle absolue en France ?",
    options: [
      "Oui, on peut tout dire",
      "Non, elle est limitée par le respect d'autrui et l'ordre public",
      "Oui, sauf pour les politiciens",
      "Non, elle n'existe pas"
    ],
    correctHash: hashAnswer(18, 1),
    explication: "La liberté d'expression est un droit fondamental mais elle a des limites : interdiction de l'injure, la diffamation, l'incitation à la haine, l'apologie du terrorisme, etc."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "En France, le droit de grève est-il autorisé ?",
    options: [
      "Non, c'est interdit",
      "Oui, c'est un droit constitutionnel",
      "Oui, mais seulement pour les fonctionnaires",
      "Non, sauf autorisation du patron"
    ],
    correctHash: hashAnswer(19, 1),
    explication: "Le droit de grève est reconnu par le Préambule de la Constitution de 1946. Il s'exerce dans le cadre des lois qui le réglementent, notamment pour les services publics."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Quel est le devoir de tout citoyen français ?",
    options: [
      "Payer ses impôts",
      "Voter obligatoirement",
      "Posséder une voiture",
      "Être diplômé"
    ],
    correctHash: hashAnswer(20, 0),
    explication: "Payer ses impôts est un devoir de tout citoyen. Les impôts financent les services publics : éducation, santé, sécurité, infrastructures, etc."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Le service national universel (SNU) concerne :",
    options: [
      "Tous les jeunes de 15 à 17 ans",
      "Uniquement les garçons",
      "Uniquement les militaires",
      "Les personnes de plus de 25 ans"
    ],
    correctHash: hashAnswer(21, 0),
    explication: "Le Service National Universel (SNU) s'adresse aux jeunes de 15 à 17 ans, filles et garçons. Il comprend un séjour de cohésion et une mission d'intérêt général."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "En France, qui peut juger une personne ?",
    options: [
      "La police",
      "Les tribunaux avec des juges",
      "Le maire",
      "Le Président de la République"
    ],
    correctHash: hashAnswer(22, 1),
    explication: "Seuls les tribunaux, composés de juges indépendants, peuvent juger une personne. La police enquête et arrête, mais ne juge pas. C'est le principe de séparation des pouvoirs."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Que signifie la présomption d'innocence ?",
    options: [
      "Tout suspect est coupable",
      "Toute personne est considérée comme innocente tant que sa culpabilité n'est pas prouvée",
      "Seuls les riches sont innocents",
      "Il n'y a pas de procès"
    ],
    correctHash: hashAnswer(23, 1),
    explication: "La présomption d'innocence est un principe fondamental : toute personne accusée d'une infraction est présumée innocente jusqu'à ce que sa culpabilité soit légalement établie."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le système de sécurité sociale en France garantit :",
    options: [
      "Uniquement les retraites",
      "La santé, la famille, le chômage et la retraite",
      "Uniquement la santé",
      "Rien du tout"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "La Sécurité sociale couvre 4 branches : maladie (santé), famille (allocations), accidents du travail, et vieillesse (retraite). Elle est financée par les cotisations sociales."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "L'école est-elle obligatoire en France ?",
    options: [
      "Non, c'est facultatif",
      "Oui, de 3 à 16 ans",
      "Oui, mais seulement jusqu'à 14 ans",
      "Oui, jusqu'à 18 ans"
    ],
    correctHash: hashAnswer(25, 1),
    explication: "L'instruction est obligatoire de 3 à 16 ans en France. Elle peut être dispensée dans une école publique, privée ou à domicile (avec contrôles)."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "La Journée Défense et Citoyenneté (JDC) est obligatoire pour :",
    options: [
      "Personne",
      "Tous les jeunes Français entre 16 et 25 ans",
      "Uniquement les militaires",
      "Uniquement les hommes"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "La JDC est obligatoire pour tous les jeunes Français, filles et garçons, entre 16 et 25 ans. Elle dure une journée et permet de sensibiliser à la défense et la citoyenneté."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Une pétition citoyenne permet de :",
    options: [
      "Élire le Président",
      "Proposer une loi ou demander un changement",
      "Annuler les impôts",
      "Dissoudre l'Assemblée"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "Une pétition permet aux citoyens de se rassembler autour d'une demande collective adressée aux pouvoirs publics. C'est un outil de participation démocratique."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Un citoyen peut-il participer à la vie locale ?",
    options: [
      "Non, c'est réservé aux élus",
      "Oui, par le vote, les associations, les conseils de quartier",
      "Oui, mais seulement s'il est riche",
      "Non, c'est interdit"
    ],
    correctHash: hashAnswer(28, 1),
    explication: "Les citoyens peuvent participer à la vie locale de nombreuses façons : vote, conseils de quartier, associations, conseils citoyens, consultations publiques, etc."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Quelle révolution a mis fin à la monarchie absolue en France ?",
    options: ["La Révolution de 1789", "La Révolution de 1848", "Mai 1968", "La Commune de Paris"],
    correctHash: hashAnswer(29, 0),
    explication: "La Révolution française de 1789 a mis fin à la monarchie absolue. Elle a abouti à la proclamation de la République et à l'adoption de la Déclaration des droits de l'homme."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Qui était Napoléon Bonaparte ?",
    options: [
      "Un roi de France",
      "Un empereur et général",
      "Un président de la République",
      "Un philosophe"
    ],
    correctHash: hashAnswer(30, 1),
    explication: "Napoléon Bonaparte fut Premier consul puis Empereur des Français de 1804 à 1815. Il a modernisé la France (Code civil, lycées) et mené de nombreuses campagnes militaires en Europe."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Quelle guerre a duré de 1914 à 1918 ?",
    options: ["La guerre de Cent Ans", "La Première Guerre mondiale", "La Seconde Guerre mondiale", "La guerre d'Algérie"],
    correctHash: hashAnswer(31, 1),
    explication: "La Première Guerre mondiale (1914-1918) a opposé les Alliés (dont la France) aux Empires centraux. Elle fit plus de 1,4 million de morts français."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Le 8 mai commémore :",
    options: [
      "La prise de la Bastille",
      "La victoire de 1945 et la fin de la Seconde Guerre mondiale en Europe",
      "L'armistice de 1918",
      "La libération de Paris"
    ],
    correctHash: hashAnswer(32, 1),
    explication: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie et la fin de la Seconde Guerre mondiale en Europe. C'est un jour férié en France."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Marseille", "Lyon", "Paris", "Lille"],
    correctHash: hashAnswer(33, 2),
    explication: "Paris est la capitale de la France et le chef-lieu de la région Île-de-France. C'est la ville la plus peuplée de France avec environ 2,1 millions d'habitants."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "La France métropolitaine a combien de régions depuis 2016 ?",
    options: ["13 régions", "18 régions", "22 régions", "27 régions"],
    correctHash: hashAnswer(34, 0),
    explication: "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (contre 22 auparavant). Il y a également 5 régions d'outre-mer."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quel océan borde la France à l'ouest ?",
    options: ["L'océan Indien", "L'océan Pacifique", "L'océan Atlantique", "L'océan Arctique"],
    correctHash: hashAnswer(35, 2),
    explication: "L'océan Atlantique borde la France à l'ouest. La France possède également des façades sur la mer du Nord, la Manche et la mer Méditerranée."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "Quel monument parisien est le plus visité au monde ?",
    options: ["Le Louvre", "La tour Eiffel", "Notre-Dame", "L'Arc de Triomphe"],
    correctHash: hashAnswer(36, 1),
    explication: "La tour Eiffel est le monument payant le plus visité au monde avec environ 7 millions de visiteurs par an. Elle a été construite pour l'Exposition universelle de 1889."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "En cas d'urgence médicale, quel numéro appeler ?",
    options: ["15", "17", "18", "112"],
    correctHash: hashAnswer(37, 0),
    explication: "Le 15 est le numéro du SAMU pour les urgences médicales. Le 112 est le numéro d'urgence européen qui redirige vers le service approprié."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Pour signaler un incendie, quel numéro appeler ?",
    options: ["15", "17", "18", "114"],
    correctHash: hashAnswer(38, 2),
    explication: "Le 18 est le numéro des pompiers. Ils interviennent pour les incendies, accidents, et également pour certaines urgences médicales."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "La carte Vitale sert à :",
    options: [
      "Voter",
      "Se faire rembourser les soins de santé",
      "Prendre le train",
      "Ouvrir un compte bancaire"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "La carte Vitale est la carte d'assuré social. Elle facilite le remboursement des soins de santé par la Sécurité sociale et les mutuelles."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "Que doit faire un locataire avant de quitter son logement ?",
    options: [
      "Rien",
      "Donner un préavis au propriétaire (généralement 3 mois pour un logement vide)",
      "Changer les serrures",
      "Vendre l'appartement"
    ],
    correctHash: hashAnswer(40, 1),
    explication: "Le locataire doit respecter un délai de préavis : 3 mois pour un logement vide, 1 mois pour un meublé (ou dans certains cas particuliers). Ce préavis doit être notifié au propriétaire par écrit."
  }
];

type ExamenPhase = 'en_cours' | 'termine' | 'revision';

interface UserAnswer {
  questionId: number;
  selectedIndex: number | null;
}

interface ExamenSession {
  id: string;
  current_answers: UserAnswer[];
  current_question_index: number;
  time_remaining: number;
  is_completed: boolean;
}

export default function NouvelExamenPage() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [phase, setPhase] = useState<ExamenPhase>('en_cours');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    QUESTIONS_EXAMEN.map(q => ({ questionId: q.id, selectedIndex: null }))
  );
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes
  const [revisionQuestionIndex, setRevisionQuestionIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger ou créer une session d'examen au démarrage
  useEffect(() => {
    if (!user) return;

    const userId = user.id; // Capture pour éviter l'erreur TypeScript

    async function loadOrCreateSession() {
      setIsLoading(true);
      
      const EXAM_NUMBER = 2; // Examen blanc 2
      
      try {
        // 1. Chercher un examen en cours non terminé POUR CET EXAMEN SPÉCIFIQUE
        const { data: existingExam, error: fetchError } = await supabase
          .from('examens_blancs')
          .select('id, current_answers, current_question_index, time_remaining, is_completed')
          .eq('user_id', userId)
          .eq('exam_number', EXAM_NUMBER)
          .eq('is_completed', false)
          .maybeSingle();

        if (existingExam && !fetchError) {
          // Reprendre l'examen existant
          console.log(`📖 Reprise de l'examen ${EXAM_NUMBER} en cours (session ${existingExam.id})`);
          setSessionId(existingExam.id);
          
          // Restaurer les réponses
          if (existingExam.current_answers && Array.isArray(existingExam.current_answers)) {
            setUserAnswers(existingExam.current_answers);
          }
          
          // Restaurer la question courante
          if (typeof existingExam.current_question_index === 'number') {
            setCurrentQuestionIndex(existingExam.current_question_index);
          }
          
          // Restaurer le temps restant
          if (typeof existingExam.time_remaining === 'number' && existingExam.time_remaining > 0) {
            setTimeRemaining(existingExam.time_remaining);
          } else {
            // Si le temps est écoulé, le laisser à 0
            setTimeRemaining(0);
          }
        } else {
          // Créer une nouvelle session pour cet examen
          console.log(`✨ Création d'une nouvelle session pour l'examen ${EXAM_NUMBER}`);
          const initialAnswers = QUESTIONS_EXAMEN.map(q => ({ questionId: q.id, selectedIndex: null }));
          
          const { data: newExam, error: insertError } = await supabase
            .from('examens_blancs')
            .insert({
              user_id: userId,
              exam_number: EXAM_NUMBER,
              score: 0,
              total_questions: 40,
              is_completed: false,
              current_answers: initialAnswers,
              current_question_index: 0,
              time_remaining: 45 * 60,
              started_at: new Date().toISOString(),
              last_saved_at: new Date().toISOString()
            })
            .select('id')
            .single();

          if (newExam && !insertError) {
            setSessionId(newExam.id);
            setUserAnswers(initialAnswers);
            setCurrentQuestionIndex(0);
            setTimeRemaining(45 * 60);

            // Consommer un crédit d'examen UNIQUEMENT pour la nouvelle session
            console.log(`💳 Consommation d'un crédit pour l'examen ${EXAM_NUMBER}`);
            const creditConsumed = await consumeExamCredit(userId);
            if (!creditConsumed) {
              console.warn('⚠️ Impossible de consommer un crédit d\'examen');
            }
          } else {
            console.error('Erreur création session:', insertError);
          }
        }
      } catch (error) {
        console.error('Erreur chargement session:', error);
      }
      
      setIsLoading(false);
    }

    loadOrCreateSession();
  }, [user, supabase]);

  // Sauvegarder la progression automatiquement (debounced)
  const saveProgress = useCallback(async () => {
    if (!sessionId || !user || phase !== 'en_cours') return;

    try {
      await supabase
        .from('examens_blancs')
        .update({
          current_answers: userAnswers,
          current_question_index: currentQuestionIndex,
          time_remaining: timeRemaining,
          last_saved_at: new Date().toISOString()
        })
        .eq('id', sessionId);
    } catch (error) {
      console.error('Erreur sauvegarde progression:', error);
    }
  }, [sessionId, user, userAnswers, currentQuestionIndex, timeRemaining, phase, supabase]);

  // Sauvegarder à chaque changement de réponse ou de question
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;
    
    const timeoutId = setTimeout(() => {
      saveProgress();
    }, 500); // Debounce de 500ms

    return () => clearTimeout(timeoutId);
  }, [userAnswers, currentQuestionIndex, saveProgress, sessionId, phase]);

  // Sauvegarder le temps restant toutes les 10 secondes
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;

    const interval = setInterval(() => {
      saveProgress();
    }, 10000); // Toutes les 10 secondes

    return () => clearInterval(interval);
  }, [sessionId, phase, saveProgress]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (optionIndex: number) => {
    setUserAnswers(prev => 
      prev.map((answer, idx) => 
        idx === currentQuestionIndex 
          ? { ...answer, selectedIndex: optionIndex }
          : answer
      )
    );
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS_EXAMEN.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Calculer le score en vérifiant les hash
  const calculateScore = useCallback(() => {
    return userAnswers.reduce((acc, answer, idx) => {
      const question = QUESTIONS_EXAMEN[idx];
      if (answer.selectedIndex !== null && verifyAnswer(question.id, answer.selectedIndex, question.correctHash)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [userAnswers]);

  const handleFinishExam = useCallback(async () => {
    setPhase('termine');
    setIsSaving(true);

    const score = calculateScore();
    const tempsTotal = 45 * 60 - timeRemaining;
    const passed = score >= 32;

    // Mettre à jour la session existante dans Supabase
    if (user && sessionId) {
      try {
        await supabase
          .from('examens_blancs')
          .update({
            score: score,
            temps_total: tempsTotal,
            passed: passed,
            is_completed: true,
            completed_at: new Date().toISOString(),
            current_answers: userAnswers
          })
          .eq('id', sessionId);
      } catch (error) {
        console.error('Erreur sauvegarde examen:', error);
      }
    }

    setIsSaving(false);
  }, [calculateScore, timeRemaining, user, supabase, sessionId, userAnswers]);

  // Timer - doit être après handleFinishExam
  useEffect(() => {
    if (phase !== 'en_cours' || isLoading) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isLoading, handleFinishExam]);

  const score = calculateScore();
  const percentage = Math.round((score / 40) * 100);
  const passed = score >= 32;

  const handleStartRevision = () => {
    setPhase('revision');
    setRevisionQuestionIndex(0);
  };

  const handleRevisionPrevious = () => {
    if (revisionQuestionIndex > 0) {
      setRevisionQuestionIndex(revisionQuestionIndex - 1);
    }
  };

  const handleRevisionNext = () => {
    if (revisionQuestionIndex < QUESTIONS_EXAMEN.length - 1) {
      setRevisionQuestionIndex(revisionQuestionIndex + 1);
    }
  };

  // Écran de chargement pendant la récupération de la session
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 p-8 text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Chargement de l&apos;examen...</h2>
          <p className="text-gray-500 text-sm">
            Récupération de votre progression en cours
          </p>
        </div>
      </div>
    );
  }

  // Phase EN COURS
  if (phase === 'en_cours') {
    const currentQuestion = QUESTIONS_EXAMEN[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];
    const answeredCount = userAnswers.filter(a => a.selectedIndex !== null).length;

    return (
      <div className="max-w-6xl mx-auto px-0 sm:px-4 py-1 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6">
          
          {/* Panneau gauche - Progression (en bas sur mobile) */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white border border-gray-200 p-3 sm:p-4 lg:sticky lg:top-4">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Progression</h3>
                <div className="flex items-center gap-2 text-primary-600">
                  <Clock className="w-4 h-4" />
                  <span className={`font-mono font-bold ${timeRemaining < 300 ? 'text-red-600' : ''}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                {answeredCount}/40 questions répondues
              </p>

              <div className="grid grid-cols-10 sm:grid-cols-8 gap-1">
                {QUESTIONS_EXAMEN.map((_, idx) => {
                  const isAnswered = userAnswers[idx].selectedIndex !== null;
                  const isCurrent = idx === currentQuestionIndex;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleGoToQuestion(idx)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 text-xs font-medium border transition-colors ${
                        isCurrent
                          ? 'bg-primary-600 text-white border-primary-600'
                          : isAnswered
                            ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:block mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary-600"></div>
                  <span>Question actuelle</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-emerald-100 border border-emerald-300"></div>
                  <span>Répondue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border border-gray-200"></div>
                  <span>Non répondue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau droit - Question (en haut sur mobile) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white border-0 sm:border sm:border-gray-200 p-2 sm:p-6">
              {/* Timer mobile - affiché en haut sur téléphone */}
              <div className="flex sm:hidden items-center justify-between mb-3 pb-2 border-b border-gray-100">
                <span className="text-xs text-gray-500">{answeredCount}/40 répondues</span>
                <div className="flex items-center gap-1 text-primary-600">
                  <Clock className="w-3 h-3" />
                  <span className={`font-mono text-sm font-bold ${timeRemaining < 300 ? 'text-red-600' : ''}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{currentQuestion.categorie}</p>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  Question {currentQuestionIndex + 1} / 40
                </h2>
              </div>

              <p className="text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">{currentQuestion.question}</p>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = currentAnswer.selectedIndex === optIdx;
                  
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`w-full text-left p-3 sm:p-4 border-2 transition-all ${
                        isSelected
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center text-xs sm:text-sm font-bold ${
                          isSelected
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span className="text-sm sm:text-base text-gray-800">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                    currentQuestionIndex === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </button>

                {currentQuestionIndex === QUESTIONS_EXAMEN.length - 1 ? (
                  <button
                    onClick={handleFinishExam}
                    className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white font-semibold hover:bg-primary-700"
                  >
                    Terminer l&apos;examen
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-900"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phase TERMINÉ
  if (phase === 'termine') {
    return (
      <div className="max-w-2xl mx-auto px-0 sm:px-4 py-2 sm:py-12">
        <div className="bg-white border border-gray-200 p-2 sm:p-8 text-center">
          {isSaving ? (
            <div className="py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Enregistrement de vos résultats...</p>
            </div>
          ) : (
            <>
              <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                passed ? 'bg-emerald-100' : 'bg-red-100'
              }`}>
                {passed ? (
                  <Trophy className="w-10 h-10 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-10 h-10 text-red-500" />
                )}
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {passed ? 'Félicitations !' : 'Examen non validé'}
              </h1>
              <p className="text-gray-600 mb-8">
                {passed 
                  ? 'Vous avez réussi cette session d\'examen blanc !' 
                  : 'Vous devez obtenir au moins 32/40 (80%) pour réussir.'}
              </p>

              <div className={`inline-block px-8 py-6 mb-8 ${
                passed ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className={`text-5xl font-bold mb-2 ${passed ? 'text-emerald-600' : 'text-red-500'}`}>
                  {score}/40
                </div>
                <div className="text-gray-600">
                  {percentage}% de réussite
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-emerald-600">{score}</div>
                  <div className="text-sm text-gray-500">Bonnes réponses</div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-red-500">{40 - score}</div>
                  <div className="text-sm text-gray-500">Mauvaises réponses</div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-gray-700">
                    {formatTime(45 * 60 - timeRemaining)}
                  </div>
                  <div className="text-sm text-gray-500">Temps utilisé</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleStartRevision}
                  className="w-full bg-primary-600 text-white py-3 px-4 font-semibold hover:bg-primary-700 transition-colors"
                >
                  Revoir les réponses
                </button>
                <button
                  onClick={() => router.push('/dashboard/examens')}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Retour aux examens
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Phase RÉVISION
  if (phase === 'revision') {
    const currentQuestion = QUESTIONS_EXAMEN[revisionQuestionIndex];
    const currentAnswer = userAnswers[revisionQuestionIndex];
    const correctIndex = findCorrectIndex(currentQuestion.id, currentQuestion.correctHash);
    const isCorrect = currentAnswer.selectedIndex === correctIndex;
    const wasAnswered = currentAnswer.selectedIndex !== null;

    return (
      <div className="max-w-4xl mx-auto px-0 sm:px-4 py-1 sm:py-6">
        <div className="bg-white border border-gray-200 p-2 sm:p-4 mb-2 sm:mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-900">Révision des réponses</h2>
            <p className="text-sm text-gray-500">Question {revisionQuestionIndex + 1} / 40</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-emerald-600 font-bold">{score}</span>
              <span className="text-gray-400"> / 40</span>
            </div>
            <button
              onClick={() => router.push('/dashboard/examens')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Terminer la révision
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-2 sm:p-6">
          <div className={`inline-flex items-center gap-2 px-2 py-1 mb-2 text-sm font-medium ${
            isCorrect
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-red-50 text-red-700'
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Bonne réponse
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                {wasAnswered ? 'Mauvaise réponse' : 'Non répondue'}
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 mb-2">{currentQuestion.categorie}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, optIdx) => {
              const isCorrectOption = optIdx === correctIndex;
              const isUserChoice = currentAnswer.selectedIndex === optIdx;

              let optionClass = 'border-gray-200 bg-white';
              if (isCorrectOption) {
                optionClass = 'border-emerald-500 bg-emerald-50';
              } else if (isUserChoice && !isCorrectOption) {
                optionClass = 'border-red-500 bg-red-50';
              }

              return (
                <div
                  key={optIdx}
                  className={`p-4 border-2 ${optionClass}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${
                        isCorrectOption
                          ? 'bg-emerald-600 text-white'
                          : isUserChoice
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCorrectOption && (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      )}
                      {isUserChoice && !isCorrectOption && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      {isUserChoice && (
                        <span className="text-xs text-gray-500">Votre réponse</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-50 border border-primary-200 p-4">
            <h4 className="font-semibold text-primary-800 mb-2">Explication</h4>
            <p className="text-primary-700 text-sm">{currentQuestion.explication}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            {/* Navigation points - sur leur propre ligne */}
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {QUESTIONS_EXAMEN.map((q, idx) => {
                const answer = userAnswers[idx];
                const qCorrectIndex = findCorrectIndex(q.id, q.correctHash);
                const correct = answer.selectedIndex === qCorrectIndex;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setRevisionQuestionIndex(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === revisionQuestionIndex
                        ? 'bg-primary-600'
                        : correct
                          ? 'bg-emerald-400'
                          : 'bg-red-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Boutons Précédent / Suivant */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleRevisionPrevious}
                disabled={revisionQuestionIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                  revisionQuestionIndex === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              <span className="text-sm text-gray-500">
                {revisionQuestionIndex + 1} / 40
              </span>

              <button
                onClick={handleRevisionNext}
                disabled={revisionQuestionIndex === QUESTIONS_EXAMEN.length - 1}
                className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                  revisionQuestionIndex === QUESTIONS_EXAMEN.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
