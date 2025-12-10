-- =====================================================
-- NETTOYAGE COMPLET DU SYSTÈME exam_credits
-- Annule tous les effets du script multi-examens-blancs.sql
-- =====================================================

-- 1. Supprimer le trigger
DROP TRIGGER IF EXISTS on_user_created_init_exam_credits ON auth.users;

-- 2. Supprimer les fonctions
DROP FUNCTION IF EXISTS initialize_user_exam_credits();
DROP FUNCTION IF EXISTS initialize_exam_credits(UUID, INTEGER, INTEGER);
DROP FUNCTION IF EXISTS consume_exam_credit(UUID, INTEGER);
DROP FUNCTION IF EXISTS get_all_exam_credits(UUID);
DROP FUNCTION IF EXISTS get_exam_history(UUID, INTEGER);

-- 3. Supprimer la vue
DROP VIEW IF EXISTS exam_statistics;

-- 4. Supprimer les politiques RLS
DROP POLICY IF EXISTS "Users can view their own exam credits" ON exam_credits;
DROP POLICY IF EXISTS "Users can insert their own exam credits" ON exam_credits;
DROP POLICY IF EXISTS "Users can update their own exam credits" ON exam_credits;

-- 5. Supprimer les index
DROP INDEX IF EXISTS idx_exam_credits_user_exam;
DROP INDEX IF EXISTS idx_exam_credits_user;

-- 6. Supprimer la table exam_credits
DROP TABLE IF EXISTS exam_credits;

-- 7. Remettre exam_number comme optionnel (si nécessaire)
ALTER TABLE examens_blancs 
  ALTER COLUMN exam_number DROP NOT NULL;

-- Message de confirmation
DO $$
BEGIN
  RAISE NOTICE 'Nettoyage terminé : table exam_credits et toutes ses dépendances supprimées';
END $$;

