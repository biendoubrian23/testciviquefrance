-- Script pour synchroniser les statistiques avec les sessions de quiz existantes
-- À exécuter une seule fois dans Supabase SQL Editor

-- 1. Mettre à jour les statistiques pour tous les utilisateurs
-- basé sur leurs sessions de quiz complétées

UPDATE statistiques s
SET 
  total_questions_repondues = COALESCE(quiz_stats.total_questions, 0),
  total_bonnes_reponses = COALESCE(quiz_stats.total_score, 0),
  temps_total_etude = COALESCE(quiz_stats.total_temps, 0),
  updated_at = NOW()
FROM (
  SELECT 
    user_id,
    SUM(total_questions) as total_questions,
    SUM(score) as total_score,
    SUM(COALESCE(temps_total, 0)) as total_temps
  FROM sessions_quiz
  WHERE completed = true
  GROUP BY user_id
) quiz_stats
WHERE s.user_id = quiz_stats.user_id;

-- 2. Créer les statistiques pour les utilisateurs qui n'en ont pas
-- mais qui ont des sessions complétées

INSERT INTO statistiques (user_id, total_questions_repondues, total_bonnes_reponses, temps_total_etude)
SELECT 
  sq.user_id,
  SUM(sq.total_questions) as total_questions,
  SUM(sq.score) as total_score,
  SUM(COALESCE(sq.temps_total, 0)) as total_temps
FROM sessions_quiz sq
LEFT JOIN statistiques s ON sq.user_id = s.user_id
WHERE sq.completed = true
  AND s.user_id IS NULL
GROUP BY sq.user_id
ON CONFLICT (user_id) DO UPDATE SET
  total_questions_repondues = EXCLUDED.total_questions_repondues,
  total_bonnes_reponses = EXCLUDED.total_bonnes_reponses,
  temps_total_etude = EXCLUDED.temps_total_etude,
  updated_at = NOW();

-- 3. Vérification : afficher les statistiques mises à jour
SELECT 
  p.prenom,
  p.email,
  s.total_questions_repondues,
  s.total_bonnes_reponses,
  CASE 
    WHEN s.total_questions_repondues > 0 
    THEN ROUND((s.total_bonnes_reponses::numeric / s.total_questions_repondues) * 100, 1)
    ELSE 0 
  END as taux_reussite_percent,
  s.temps_total_etude
FROM statistiques s
JOIN profiles p ON s.user_id = p.id
ORDER BY s.total_questions_repondues DESC;
