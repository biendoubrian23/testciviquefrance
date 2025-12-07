-- =====================================================
-- AFFICHER LES QUESTIONS ET RÉPONSES
-- Pour "Principes et valeurs de la République" - Niveaux 1, 2, 3
-- =====================================================

-- NIVEAU 1
SELECT 
  '=== NIVEAU 1 ===' AS info
UNION ALL
SELECT 
  q.question || ' | Réponse: ' || r.texte || ' (Correct: ' || r.est_correcte || ')'
FROM public.questions q
JOIN public.reponses r ON q.id = r.question_id
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 1
ORDER BY q.created_at, r.id

UNION ALL

-- NIVEAU 2
SELECT 
  '=== NIVEAU 2 ===' AS info
UNION ALL
SELECT 
  q.question || ' | Réponse: ' || r.texte || ' (Correct: ' || r.est_correcte || ')'
FROM public.questions q
JOIN public.reponses r ON q.id = r.question_id
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 2
ORDER BY q.created_at, r.id

UNION ALL

-- NIVEAU 3
SELECT 
  '=== NIVEAU 3 ===' AS info
UNION ALL
SELECT 
  q.question || ' | Réponse: ' || r.texte || ' (Correct: ' || r.est_correcte || ')'
FROM public.questions q
JOIN public.reponses r ON q.id = r.question_id
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République' AND q.difficulte = 3
ORDER BY q.created_at, r.id;
