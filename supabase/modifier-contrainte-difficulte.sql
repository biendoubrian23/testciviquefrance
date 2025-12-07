-- =====================================================
-- MODIFICATION DE LA CONTRAINTE difficulte
-- Permet les valeurs de 1 à 10 (pour 10 niveaux par catégorie)
-- =====================================================

-- 1. Supprimer l'ancienne contrainte
ALTER TABLE public.questions 
DROP CONSTRAINT IF EXISTS questions_difficulte_check;

-- 2. Ajouter la nouvelle contrainte (1 à 10)
ALTER TABLE public.questions 
ADD CONSTRAINT questions_difficulte_check 
CHECK (difficulte >= 1 AND difficulte <= 10);

-- 3. Vérifier que la modification est bien appliquée
SELECT 
  conname AS constraint_name,
  pg_get_constraintdef(oid) AS constraint_definition
FROM pg_constraint 
WHERE conrelid = 'public.questions'::regclass 
AND contype = 'c';
