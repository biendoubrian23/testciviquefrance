-- ============================================================
-- Fonction RPC pour les stats du dashboard admin
-- Remplace 13 requêtes parallèles par 1 seule connexion
-- Compatible avec le plan NANO (pool de connexions limité)
-- ============================================================

DROP FUNCTION IF EXISTS get_admin_dashboard_stats(TEXT);

CREATE OR REPLACE FUNCTION get_admin_dashboard_stats(p_start_of_month TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_start_of_month TIMESTAMPTZ;
  v_total_users INT;
  v_new_users_this_month INT;
  v_premium_users INT;
  v_standard_users INT;
  v_trialing_users INT;
  v_total_questions INT;
  v_total_categories INT;
  v_total_examens INT;
  v_examens_reussis INT;
  v_total_sessions INT;
  v_questions_repondues BIGINT;
  v_temps_etude_total BIGINT;
  v_all_revenue JSON;
  v_month_revenue JSON;
BEGIN
  v_start_of_month := p_start_of_month::TIMESTAMPTZ;

  -- Total utilisateurs
  SELECT COUNT(*) INTO v_total_users FROM profiles;

  -- Nouveaux ce mois
  SELECT COUNT(*) INTO v_new_users_this_month
  FROM profiles WHERE created_at >= v_start_of_month;

  -- Utilisateurs premium (prix premium)
  SELECT COUNT(*) INTO v_premium_users
  FROM profiles
  WHERE (is_premium = true OR subscription_status IN ('active', 'trialing'))
    AND stripe_price_id IN (
      'price_1Sc3rPEuT9agNbEU65mDE4RP',
      'price_1Sc3BYIUG5GUejFZaWexcxzz'
    );

  -- Utilisateurs standard (prix standard)
  SELECT COUNT(*) INTO v_standard_users
  FROM profiles
  WHERE (is_premium = true OR subscription_status IN ('active', 'trialing'))
    AND stripe_price_id IN (
      'price_1Sc3qxEuT9agNbEUdX0RkLM4',
      'price_1Sc3AqIUG5GUejFZagJyV8HC'
    );

  -- Utilisateurs en période d'essai
  SELECT COUNT(*) INTO v_trialing_users
  FROM profiles WHERE subscription_status = 'trialing';

  -- Total questions
  SELECT COUNT(*) INTO v_total_questions FROM questions;

  -- Total catégories
  SELECT COUNT(*) INTO v_total_categories FROM categories;

  -- Total examens complétés
  SELECT COUNT(*) INTO v_total_examens
  FROM examens_blancs WHERE is_completed = true;

  -- Examens réussis
  SELECT COUNT(*) INTO v_examens_reussis
  FROM examens_blancs WHERE passed = true;

  -- Total sessions quiz complétées
  SELECT COUNT(*) INTO v_total_sessions
  FROM sessions_quiz WHERE completed = true;

  -- Stats agrégées
  SELECT
    COALESCE(SUM(total_questions_repondues), 0),
    COALESCE(SUM(temps_total_etude), 0)
  INTO v_questions_repondues, v_temps_etude_total
  FROM statistiques;

  -- Revenus totaux
  SELECT json_agg(json_build_object('amount', amount, 'product_type', product_type))
  INTO v_all_revenue
  FROM revenue_events WHERE status = 'succeeded';

  -- Revenus ce mois
  SELECT json_agg(json_build_object('amount', amount, 'product_type', product_type))
  INTO v_month_revenue
  FROM revenue_events
  WHERE status = 'succeeded' AND created_at >= v_start_of_month;

  RETURN json_build_object(
    'totalUsers', v_total_users,
    'newUsersThisMonth', v_new_users_this_month,
    'premiumUsers', v_premium_users,
    'standardUsers', v_standard_users,
    'trialingUsers', v_trialing_users,
    'totalQuestions', v_total_questions,
    'totalCategories', v_total_categories,
    'totalExamens', v_total_examens,
    'examensReussis', v_examens_reussis,
    'totalSessions', v_total_sessions,
    'questionsRepondues', v_questions_repondues,
    'tempsEtudeTotal', v_temps_etude_total,
    'allRevenue', COALESCE(v_all_revenue, '[]'::json),
    'monthRevenue', COALESCE(v_month_revenue, '[]'::json)
  );
END;
$$;

-- Donner les droits d'exécution au rôle service_role
GRANT EXECUTE ON FUNCTION get_admin_dashboard_stats(TEXT) TO service_role;
