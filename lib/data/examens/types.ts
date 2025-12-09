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
 */
export function hashAnswer(examNumber: number, questionId: number, answerIndex: number): string {
  const str = `exam${examNumber}_q${questionId}_a${answerIndex}_civique2024`;
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
