-- =====================================================
-- DIAGNOSTIC ET CORRECTION DU NOMBRE DE QUESTIONS PAR NIVEAU
-- À exécuter dans Supabase SQL Editor
-- =====================================================

-- 1. DIAGNOSTIC : Voir combien de questions par niveau pour chaque catégorie
SELECT 
  c.nom AS categorie,
  q.difficulte AS niveau,
  COUNT(*) AS nombre_questions
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
GROUP BY c.nom, q.difficulte
ORDER BY c.nom, q.difficulte;

-- 2. DIAGNOSTIC DÉTAILLÉ : Voir toutes les questions de "Symboles de la France" niveau 2
SELECT 
  q.id,
  q.question,
  q.difficulte,
  q.created_at
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Symboles de la France' AND q.difficulte = 2
ORDER BY q.created_at;

-- 3. Si vous trouvez des doublons ou plus de 10 questions,
-- cette requête supprime les questions en excès (garde les 10 premières)
-- ATTENTION: À exécuter seulement si nécessaire !

/*
-- Supprimer les questions en excès pour TOUS les niveaux de TOUTES les catégories
-- (garde seulement 10 questions par niveau par catégorie)

WITH questions_numerotees AS (
  SELECT 
    q.id,
    q.categorie_id,
    q.difficulte,
    ROW_NUMBER() OVER (
      PARTITION BY q.categorie_id, q.difficulte 
      ORDER BY q.created_at
    ) AS rang
  FROM public.questions q
)
DELETE FROM public.reponses 
WHERE question_id IN (
  SELECT id FROM questions_numerotees WHERE rang > 10
);

WITH questions_numerotees AS (
  SELECT 
    q.id,
    q.categorie_id,
    q.difficulte,
    ROW_NUMBER() OVER (
      PARTITION BY q.categorie_id, q.difficulte 
      ORDER BY q.created_at
    ) AS rang
  FROM public.questions q
)
DELETE FROM public.questions 
WHERE id IN (
  SELECT id FROM questions_numerotees WHERE rang > 10
);
*/

-- 4. Vérification finale après nettoyage
SELECT 
  c.nom AS categorie,
  q.difficulte AS niveau,
  COUNT(*) AS nombre_questions
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
GROUP BY c.nom, q.difficulte
HAVING COUNT(*) != 10
ORDER BY c.nom, q.difficulte;

-- Si cette dernière requête ne renvoie rien, tout est bon (10 questions par niveau)
