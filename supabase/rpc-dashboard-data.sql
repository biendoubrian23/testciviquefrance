-- ============================================
-- Fonction RPC pour récupérer les données du dashboard en une seule requête
-- Réduit de 4-5 requêtes à 1 seule requête
-- ============================================

-- Supprimer la fonction si elle existe déjà
DROP FUNCTION IF EXISTS get_dashboard_data(UUID);

-- Créer la fonction
CREATE OR REPLACE FUNCTION get_dashboard_data(p_user_id UUID)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    -- Statistiques utilisateur
    'statistiques', (
      SELECT json_build_object(
        'total_questions_repondues', COALESCE(s.total_questions_repondues, 0),
        'total_bonnes_reponses', COALESCE(s.total_bonnes_reponses, 0),
        'temps_total_etude', COALESCE(s.temps_total_etude, 0),
        'serie_actuelle', COALESCE(s.serie_actuelle, 0),
        'meilleure_serie', COALESCE(s.meilleure_serie, 0),
        'derniere_activite', s.derniere_activite
      )
      FROM statistiques s 
      WHERE s.user_id = p_user_id
    ),
    
    -- Gamification (points, badges, niveau)
    'gamification', (
      SELECT json_build_object(
        'points_totaux', COALESCE(g.points_totaux, 0),
        'niveau', COALESCE(g.niveau, 1),
        'badges', COALESCE(g.badges, '[]'::jsonb)
      )
      FROM gamification g 
      WHERE g.user_id = p_user_id
    ),
    
    -- 10 dernières sessions de quiz (activité récente)
    'sessions_recentes', COALESCE((
      SELECT json_agg(session_data ORDER BY completed_at DESC)
      FROM (
        SELECT json_build_object(
          'id', sq.id,
          'score', sq.score,
          'total_questions', sq.total_questions,
          'niveau', sq.niveau,
          'categorie_id', sq.categorie_id,
          'completed_at', sq.completed_at,
          'temps_total', sq.temps_total
        ) as session_data,
        sq.completed_at
        FROM sessions_quiz sq
        WHERE sq.user_id = p_user_id 
          AND sq.completed = true
        ORDER BY sq.completed_at DESC NULLS LAST
        LIMIT 10
      ) sub
    ), '[]'::json),
    
    -- Meilleurs scores par catégorie et niveau
    'meilleurs_scores', COALESCE((
      SELECT json_agg(score_data)
      FROM (
        SELECT json_build_object(
          'categorie_id', sq.categorie_id,
          'niveau', sq.niveau,
          'meilleur_score', MAX(sq.score),
          'tentatives', COUNT(*)
        ) as score_data
        FROM sessions_quiz sq
        WHERE sq.user_id = p_user_id 
          AND sq.completed = true
        GROUP BY sq.categorie_id, sq.niveau
      ) sub
    ), '[]'::json),
    
    -- Progression par catégorie (niveau max débloqué)
    'progression', COALESCE((
      SELECT json_agg(prog_data)
      FROM (
        SELECT json_build_object(
          'categorie_id', categorie_id,
          'niveau_max_debloque', GREATEST(1, (
            SELECT COALESCE(MAX(sq2.niveau) + 1, 1)
            FROM sessions_quiz sq2
            WHERE sq2.user_id = p_user_id
              AND sq2.categorie_id = sub.categorie_id
              AND sq2.completed = true
              AND sq2.score >= 7
          ))
        ) as prog_data,
        categorie_id
        FROM (
          SELECT DISTINCT categorie_id 
          FROM sessions_quiz 
          WHERE user_id = p_user_id
          UNION
          SELECT id FROM categories
        ) sub
      ) sub2
    ), '[]'::json)
    
  ) INTO result;
  
  -- Si pas de statistiques, retourner des valeurs par défaut
  IF result->'statistiques' IS NULL THEN
    result := jsonb_set(result::jsonb, '{statistiques}', '{
      "total_questions_repondues": 0,
      "total_bonnes_reponses": 0,
      "temps_total_etude": 0,
      "serie_actuelle": 0,
      "meilleure_serie": 0,
      "derniere_activite": null
    }'::jsonb)::json;
  END IF;
  
  -- Si pas de gamification, retourner des valeurs par défaut
  IF result->'gamification' IS NULL THEN
    result := jsonb_set(result::jsonb, '{gamification}', '{
      "points_totaux": 0,
      "niveau": 1,
      "badges": []
    }'::jsonb)::json;
  END IF;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Donner les droits d'exécution aux utilisateurs authentifiés
GRANT EXECUTE ON FUNCTION get_dashboard_data(UUID) TO authenticated;

-- Commentaire pour documentation
COMMENT ON FUNCTION get_dashboard_data(UUID) IS 
'Récupère toutes les données du dashboard en une seule requête:
- statistiques: questions répondues, taux réussite, temps étude, série
- gamification: points, niveau, badges
- sessions_recentes: 10 dernières sessions de quiz
- meilleurs_scores: meilleur score par catégorie/niveau
- progression: niveau max débloqué par catégorie

Usage: SELECT get_dashboard_data(''user-uuid-here'');';
