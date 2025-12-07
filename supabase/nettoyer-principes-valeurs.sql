-- =====================================================
-- NETTOYAGE : Garder seulement 10 questions par niveau
-- Pour "Principes et valeurs de la République"
-- ⚠️ ATTENTION : Ceci va SUPPRIMER les questions en excès !
-- =====================================================

-- Étape 1 : Supprimer les RESULTATS liés aux réponses des questions en excès
WITH questions_a_supprimer AS (
  SELECT q.id
  FROM (
    SELECT 
      q.id,
      q.categorie_id,
      q.difficulte,
      ROW_NUMBER() OVER (
        PARTITION BY q.difficulte 
        ORDER BY q.created_at
      ) AS rang
    FROM public.questions q
    JOIN public.categories c ON q.categorie_id = c.id
    WHERE c.nom = 'Principes et valeurs de la République'
  ) q
  WHERE q.rang > 10
)
DELETE FROM public.resultats 
WHERE reponse_donnee IN (
  SELECT r.id FROM public.reponses r 
  WHERE r.question_id IN (SELECT id FROM questions_a_supprimer)
);

-- Étape 2 : Supprimer les REPONSES des questions en excès
WITH questions_a_supprimer AS (
  SELECT q.id
  FROM (
    SELECT 
      q.id,
      q.categorie_id,
      q.difficulte,
      ROW_NUMBER() OVER (
        PARTITION BY q.difficulte 
        ORDER BY q.created_at
      ) AS rang
    FROM public.questions q
    JOIN public.categories c ON q.categorie_id = c.id
    WHERE c.nom = 'Principes et valeurs de la République'
  ) q
  WHERE q.rang > 10
)
DELETE FROM public.reponses 
WHERE question_id IN (SELECT id FROM questions_a_supprimer);

-- Étape 3 : Supprimer les QUESTIONS en excès (garde les 10 premières par date)
WITH questions_numerotees AS (
  SELECT 
    q.id,
    q.difficulte,
    ROW_NUMBER() OVER (
      PARTITION BY q.difficulte 
      ORDER BY q.created_at
    ) AS rang
  FROM public.questions q
  JOIN public.categories c ON q.categorie_id = c.id
  WHERE c.nom = 'Principes et valeurs de la République'
)
DELETE FROM public.questions 
WHERE id IN (
  SELECT id FROM questions_numerotees WHERE rang > 10
);

-- Étape 3 : Vérification - doit afficher 10 pour chaque niveau
SELECT 
  q.difficulte AS niveau,
  COUNT(*) AS nombre_questions
FROM public.questions q
JOIN public.categories c ON q.categorie_id = c.id
WHERE c.nom = 'Principes et valeurs de la République'
GROUP BY q.difficulte
ORDER BY q.difficulte;
