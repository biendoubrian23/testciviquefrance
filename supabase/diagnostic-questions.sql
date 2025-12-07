-- =====================================================
-- DIAGNOSTIC DES QUESTIONS - SYMBOLES DE LA FRANCE
-- Exécute ce script pour voir l'état actuel des questions
-- =====================================================

-- 1. Voir toutes les questions de la catégorie "Symboles de la France"
SELECT 
  q.id,
  q.question,
  q.difficulte as niveau,
  q.created_at,
  (SELECT COUNT(*) FROM public.reponses r WHERE r.question_id = q.id) as nb_reponses
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Symboles de la France'
ORDER BY q.difficulte, q.created_at;

-- 2. Détecter les questions en DOUBLE (même texte)
SELECT 
  q.question,
  COUNT(*) as nombre_doublons
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Symboles de la France'
GROUP BY q.question
HAVING COUNT(*) > 1;

-- 3. Compter les questions par niveau de difficulté
SELECT 
  q.difficulte as niveau,
  COUNT(*) as nombre_questions
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Symboles de la France'
GROUP BY q.difficulte
ORDER BY q.difficulte;

-- 4. Vérifier la structure de la table questions
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'questions';
