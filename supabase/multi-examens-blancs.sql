-- =====================================================
-- SYSTÈME MULTI-EXAMENS BLANCS
-- Gestion de 5+ examens blancs avec crédits individuels
-- =====================================================

-- 1. Modifier la table examens_blancs pour ajouter le numéro d'examen
ALTER TABLE examens_blancs 
  ALTER COLUMN exam_number SET NOT NULL;

-- Ajouter un commentaire pour clarifier
COMMENT ON COLUMN examens_blancs.exam_number IS 'Numéro de l''examen blanc (1-5 ou plus)';

-- 2. Créer une table pour gérer les crédits d'examens par examen
CREATE TABLE IF NOT EXISTS exam_credits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_number INTEGER NOT NULL CHECK (exam_number >= 1),
  credits_remaining INTEGER NOT NULL DEFAULT 0 CHECK (credits_remaining >= 0),
  total_attempts INTEGER NOT NULL DEFAULT 0,
  last_attempt_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Un utilisateur ne peut avoir qu'une seule ligne par numéro d'examen
  UNIQUE(user_id, exam_number)
);

-- Index pour recherches rapides
CREATE INDEX IF NOT EXISTS idx_exam_credits_user_exam ON exam_credits(user_id, exam_number);
CREATE INDEX IF NOT EXISTS idx_exam_credits_user ON exam_credits(user_id);

-- Commentaires
COMMENT ON TABLE exam_credits IS 'Gestion des crédits d''examens blancs par utilisateur et par examen';
COMMENT ON COLUMN exam_credits.exam_number IS 'Numéro de l''examen blanc (1, 2, 3, 4, 5, etc.)';
COMMENT ON COLUMN exam_credits.credits_remaining IS 'Nombre de tentatives restantes pour cet examen';
COMMENT ON COLUMN exam_credits.total_attempts IS 'Nombre total de tentatives effectuées';

-- 3. Fonction pour initialiser les crédits d'un examen pour un utilisateur
CREATE OR REPLACE FUNCTION initialize_exam_credits(
  p_user_id UUID,
  p_exam_number INTEGER,
  p_initial_credits INTEGER DEFAULT 3
)
RETURNS void AS $$
BEGIN
  INSERT INTO exam_credits (user_id, exam_number, credits_remaining, total_attempts)
  VALUES (p_user_id, p_exam_number, p_initial_credits, 0)
  ON CONFLICT (user_id, exam_number) 
  DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Fonction pour consommer un crédit d'examen
CREATE OR REPLACE FUNCTION consume_exam_credit(
  p_user_id UUID,
  p_exam_number INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
  v_credits INTEGER;
BEGIN
  -- Vérifier et décrémenter le crédit
  UPDATE exam_credits
  SET 
    credits_remaining = GREATEST(credits_remaining - 1, 0),
    total_attempts = total_attempts + 1,
    last_attempt_at = NOW(),
    updated_at = NOW()
  WHERE user_id = p_user_id 
    AND exam_number = p_exam_number
    AND credits_remaining > 0
  RETURNING credits_remaining INTO v_credits;
  
  -- Si aucune ligne n'a été mise à jour, pas de crédit
  IF NOT FOUND THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Fonction pour obtenir les crédits de tous les examens d'un utilisateur
CREATE OR REPLACE FUNCTION get_all_exam_credits(p_user_id UUID)
RETURNS TABLE (
  exam_number INTEGER,
  credits_remaining INTEGER,
  total_attempts INTEGER,
  last_attempt_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ec.exam_number,
    ec.credits_remaining,
    ec.total_attempts,
    ec.last_attempt_at
  FROM exam_credits ec
  WHERE ec.user_id = p_user_id
  ORDER BY ec.exam_number;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Fonction pour obtenir l'historique complet des examens passés
CREATE OR REPLACE FUNCTION get_exam_history(
  p_user_id UUID,
  p_exam_number INTEGER DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  exam_number INTEGER,
  score INTEGER,
  total_questions INTEGER,
  percentage DECIMAL,
  passed BOOLEAN,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  time_taken_seconds INTEGER,
  answers JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    eb.id,
    eb.exam_number,
    eb.score,
    eb.total_questions,
    ROUND((eb.score::DECIMAL / eb.total_questions::DECIMAL) * 100, 2) as percentage,
    (eb.score >= 32) as passed,
    eb.started_at,
    eb.completed_at,
    EXTRACT(EPOCH FROM (eb.completed_at - eb.started_at))::INTEGER as time_taken_seconds,
    eb.current_answers as answers
  FROM examens_blancs eb
  WHERE eb.user_id = p_user_id
    AND eb.is_completed = TRUE
    AND (p_exam_number IS NULL OR eb.exam_number = p_exam_number)
  ORDER BY eb.completed_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Ajouter un index sur examens_blancs pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_examens_blancs_user_exam ON examens_blancs(user_id, exam_number, is_completed);

-- 8. Politique RLS pour exam_credits (Row Level Security)
ALTER TABLE exam_credits ENABLE ROW LEVEL SECURITY;

-- Politique : Les utilisateurs peuvent lire leurs propres crédits
CREATE POLICY "Users can view their own exam credits"
  ON exam_credits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Politique : Les utilisateurs peuvent insérer leurs propres crédits
CREATE POLICY "Users can insert their own exam credits"
  ON exam_credits
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Politique : Les utilisateurs peuvent mettre à jour leurs propres crédits
CREATE POLICY "Users can update their own exam credits"
  ON exam_credits
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 9. Initialiser les crédits pour les examens blancs 1 à 5 pour tous les utilisateurs existants
-- (3 tentatives par examen par défaut)
DO $$
DECLARE
  v_user RECORD;
  v_exam INTEGER;
BEGIN
  FOR v_user IN SELECT id FROM auth.users LOOP
    FOR v_exam IN 1..5 LOOP
      PERFORM initialize_exam_credits(v_user.id, v_exam, 3);
    END LOOP;
  END LOOP;
END $$;

-- 10. Trigger pour initialiser automatiquement les crédits lors de la création d'un utilisateur
CREATE OR REPLACE FUNCTION initialize_user_exam_credits()
RETURNS TRIGGER AS $$
BEGIN
  -- Initialiser les crédits pour les 5 premiers examens blancs
  FOR i IN 1..5 LOOP
    INSERT INTO exam_credits (user_id, exam_number, credits_remaining, total_attempts)
    VALUES (NEW.id, i, 3, 0);
  END LOOP;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Créer le trigger sur la création d'utilisateur
-- Note: Ce trigger se déclenche après l'insertion dans auth.users
-- Si vous utilisez Supabase Auth, vous devrez peut-être adapter cela
CREATE OR REPLACE TRIGGER on_user_created_init_exam_credits
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION initialize_user_exam_credits();

-- 11. Vue pour avoir un aperçu rapide des statistiques par examen
CREATE OR REPLACE VIEW exam_statistics AS
SELECT 
  eb.user_id,
  eb.exam_number,
  COUNT(*) as total_attempts,
  COUNT(*) FILTER (WHERE eb.score >= 32) as passed_attempts,
  COUNT(*) FILTER (WHERE eb.score < 32) as failed_attempts,
  ROUND(AVG(eb.score), 2) as average_score,
  MAX(eb.score) as best_score,
  MIN(eb.score) as worst_score,
  MAX(eb.completed_at) as last_attempt_date
FROM examens_blancs eb
WHERE eb.is_completed = TRUE
GROUP BY eb.user_id, eb.exam_number;

COMMENT ON VIEW exam_statistics IS 'Statistiques des examens blancs par utilisateur et par numéro d''examen';

-- =====================================================
-- FIN DU SCRIPT
-- =====================================================
