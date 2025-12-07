-- =====================================================
-- RÉSUMÉ : Nombre de questions par niveau
-- Pour "Principes et valeurs de la République"
-- Exécuter CETTE REQUÊTE SEULE
-- =====================================================

SELECT 
  q.difficulte AS niveau,
  COUNT(*) AS nombre_questions,
  CASE 
    WHEN COUNT(*) = 10 THEN '✅ OK'
    WHEN COUNT(*) > 10 THEN '❌ ' || (COUNT(*) - 10) || ' en trop'
    ELSE '❌ ' || (10 - COUNT(*)) || ' manquantes'
  END AS statut
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République'
GROUP BY q.difficulte
ORDER BY q.difficulte;
