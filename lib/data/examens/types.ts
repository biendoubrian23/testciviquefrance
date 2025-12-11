// =====================================================
// TYPES COMMUNS POUR LES EXAMENS BLANCS
// =====================================================

export interface Question {
  id: number;
  categorie: string;
  sousCategorie: string;
  question: string;
  options: string[];
  correctHash: string; // Hash de la bonne réponse
  explication: string;
}

// =====================================================
// ENCODAGE/DÉCODAGE - Protection du contenu
// =====================================================

/**
 * Encode une chaîne en Base64 pour la protéger
 */
export function encodeStr(str: string): string {
  return Buffer.from(str).toString('base64');
}

/**
 * Décode une chaîne Base64
 */
export function decodeStr(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}

/**
 * Décode une question complète (question, options, explication)
 */
export function decodeQuestion(q: Question): Question {
  return {
    ...q,
    question: decodeStr(q.question),
    options: q.options.map(opt => decodeStr(opt)),
    explication: decodeStr(q.explication)
  };
}

/**
 * Décode toutes les questions d'un examen
 */
export function decodeExamen(examen: ExamenBlanc): ExamenBlanc {
  return {
    ...examen,
    questions: examen.questions.map(q => decodeQuestion(q))
  };
}

export interface ExamenBlanc {
  numero: number;
  titre: string;
  description: string;
  questions: Question[];
  dureeMinutes: number;
  totalQuestions: number;
}

// =====================================================
// FONCTIONS DE HASH - Sécurité des réponses
// =====================================================

/**
 * Fonction de hash djb2 - Rapide et suffisant pour hacher les réponses
 * Impossible de deviner la bonne réponse sans bruteforce
 * 
 * ATTENTION: L'examen 1 utilise un pattern différent (sans préfixe "exam1")
 * pour des raisons historiques
 */
export function hashAnswer(examNumber: number, questionId: number, answerIndex: number): string {
  // L'examen 1 utilise un pattern sans préfixe d'examen
  const str = examNumber === 1 
    ? `q${questionId}_a${answerIndex}_civique2024`
    : `exam${examNumber}_q${questionId}_a${answerIndex}_civique2024`;
  
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

/**
 * Vérifier si une réponse est correcte
 */
export function verifyAnswer(examNumber: number, questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(examNumber, questionId, userAnswerIndex) === correctHash;
}

/**
 * Trouver l'index correct à partir du hash (pour affichage après correction)
 */
export function findCorrectIndex(examNumber: number, questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(examNumber, questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}
