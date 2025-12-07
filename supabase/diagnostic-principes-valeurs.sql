-- =====================================================
-- DIAGNOSTIC : PRINCIPES ET VALEURS DE LA RÉPUBLIQUE
-- Vérifier le nombre de questions par niveau
-- =====================================================

-- 1. Résumé : Combien de questions par niveau ?
SELECT 
  q.difficulte AS niveau,
  COUNT(*) AS nombre_questions
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République'
GROUP BY q.difficulte
ORDER BY q.difficulte;

-- 2. Détail NIVEAU 1 : Voir toutes les questions
SELECT 
  q.id,
  LEFT(q.question, 80) AS question_apercu,
  q.created_at
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 1
ORDER BY q.created_at;

-- 3. Détail NIVEAU 2 : Voir toutes les questions
SELECT 
  q.id,
  LEFT(q.question, 80) AS question_apercu,
  q.created_at
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 2
ORDER BY q.created_at;

-- 4. Détail NIVEAU 3 : Voir toutes les questions
SELECT 
  q.id,
  LEFT(q.question, 80) AS question_apercu,
  q.created_at
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 3
ORDER BY q.created_at;
