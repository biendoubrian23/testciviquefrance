import { ExamenBlanc } from './types';
import { EXAMEN_1 } from './examen1';
import { EXAMEN_2 } from './examen-2';
import { EXAMEN_3 } from './examen3';
import { EXAMEN_4 } from './examen4';
import { EXAMEN_5 } from './examen5';

// =====================================================
// INDEX DES EXAMENS BLANCS
// Gestion centralisée de tous les examens disponibles
// =====================================================

// Map de tous les examens disponibles (5 examens au total)
const EXAMENS_MAP: Map<number, ExamenBlanc> = new Map([
  [1, EXAMEN_1],
  [2, EXAMEN_2],
  [3, EXAMEN_3],
  [4, EXAMEN_4],
  [5, EXAMEN_5],
]);

/**
 * Récupérer un examen par son numéro
 */
export function getExamen(numero: number): ExamenBlanc | undefined {
  return EXAMENS_MAP.get(numero);
}

/**
 * Récupérer tous les examens disponibles
 */
export function getAllExamens(): ExamenBlanc[] {
  return Array.from(EXAMENS_MAP.values());
}

/**
 * Récupérer le nombre total d'examens disponibles
 */
export function getTotalExamens(): number {
  return 5; // 5 examens : 1 dans l'ancien système + 4 dans le nouveau
}

/**
 * ALGORITHME D'ATTRIBUTION D'EXAMEN
 * 
 * Stratégie : Rotation basée sur le nombre d'examens déjà passés
 * - Objectif : éviter qu'un utilisateur repasse le même examen
 * - Optimisé pour 10k utilisateurs simultanés (pas de requête DB complexe)
 * 
 * Règles :
 * 1. Récupérer le nombre d'examens déjà passés par l'utilisateur
 * 2. Utiliser une rotation simple : (nombreExamensPassés % totalExamens) + 1
 * 3. Toujours attribuer un examen différent jusqu'à ce qu'il ait fait tous les examens
 * 4. Après 5 examens, on recommence la rotation
 * 
 * Exemple :
 * - 1er examen : examen #1
 * - 2ème examen : examen #2
 * - 3ème examen : examen #3
 * - 6ème examen : on recommence à #1
 */
export function getNextExamenNumber(nombreExamensPassés: number): number {
  const totalExamens = getTotalExamens();
  const nextNumber = (nombreExamensPassés % totalExamens) + 1;
  return nextNumber;
}

/**
 * Vérifier si un utilisateur peut passer un nouvel examen
 * (différent du dernier passé)
 */
export function canPassNewExamen(dernierExamenNumero: number | null, nouveauNumero: number): boolean {
  if (dernierExamenNumero === null) return true;
  return dernierExamenNumero !== nouveauNumero;
}

/**
 * Obtenir l'examen suivant pour un utilisateur
 * Basé sur son historique - Attribution intelligente
 * 
 * LOGIQUE :
 * 1. Récupérer tous les examens complétés
 * 2. Créer un Set des examens déjà passés
 * 3. Chercher le premier examen non encore fait (1-5)
 * 4. Si tous faits, recommencer la rotation depuis le début
 */
export async function getNextExamenForUser(userId: string, supabase: any): Promise<ExamenBlanc | null> {
  try {
    // Récupérer tous les examens complétés (optimisé : une seule requête)
    const { data, error } = await supabase
      .from('examens_blancs')
      .select('exam_number, completed_at')
      .eq('user_id', userId)
      .eq('is_completed', true)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('Erreur récupération historique examens:', error);
      return null;
    }

    const examensPassés = data || [];
    const dernierExamen = examensPassés[0]?.exam_number || null;
    
    // Créer un Set des numéros déjà passés
    const numerosPassés = new Set(examensPassés.map((e: any) => e.exam_number));
    
    const totalExamens = getTotalExamens(); // 3 pour l'instant (1, 2, 3)

    // Chercher le premier examen non encore fait
    for (let i = 1; i <= totalExamens; i++) {
      if (!numerosPassés.has(i) && i !== dernierExamen) {
        // Examen trouvé qui n'a pas encore été fait
        // Pour l'examen 1, retourner null (géré par l'ancien système)
        if (i === 1) {
          return null; // L'utilisateur sera redirigé vers /examens/nouveau
        }
        return getExamen(i) || null;
      }
    }

    // Si tous les examens ont été faits, recommencer la rotation
    // Mais éviter de redonner le dernier immédiatement
    for (let i = 1; i <= totalExamens; i++) {
      if (i !== dernierExamen) {
        console.log(`♻️ Rotation complète : retour à l'examen ${i}`);
        // Pour l'examen 1, retourner null (géré par l'ancien système)
        if (i === 1) {
          return null;
        }
        return getExamen(i) || null;
      }
    }

    // Dernier recours : retourner null pour redirection vers l'examen 1
    return null;
  } catch (err) {
    console.error('Erreur getNextExamenForUser:', err);
    return null;
  }
}

// Export des types et fonctions utiles
export * from './types';
export { EXAMEN_2, EXAMEN_3, EXAMEN_4, EXAMEN_5 };
