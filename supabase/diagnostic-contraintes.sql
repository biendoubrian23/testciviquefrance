-- =====================================================
-- DIAGNOSTIC : Vérifier les contraintes sur la table questions
-- =====================================================

-- 1. Voir la structure de la table questions
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'questions'
ORDER BY ordinal_position;

-- 2. Voir les contraintes CHECK sur la table questions
SELECT 
  conname AS constraint_name,
  pg_get_constraintdef(oid) AS constraint_definition
FROM pg_constraint 
WHERE conrelid = 'public.questions'::regclass 
AND contype = 'c';

-- 3. Voir les valeurs distinctes de difficulte actuellement utilisées
SELECT DISTINCT difficulte, COUNT(*) as nb_questions
FROM public.questions
GROUP BY difficulte
ORDER BY difficulte;
