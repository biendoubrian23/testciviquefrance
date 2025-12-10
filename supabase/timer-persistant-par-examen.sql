-- =====================================================
-- TIMER PERSISTANT PAR EXAMEN
-- Permet à chaque examen d'avoir son propre timer et session
-- Assure qu'un examen ne peut pas écraser un autre
-- =====================================================

-- 1. Ajouter une contrainte unique pour empêcher les doublons
-- Un utilisateur ne peut avoir qu'UN SEUL examen en cours par numéro d'examen
-- Il peut avoir examen 1 en cours ET examen 2 en cours en même temps
CREATE UNIQUE INDEX IF NOT EXISTS idx_examens_blancs_user_exam_in_progress 
ON examens_blancs(user_id, exam_number) 
WHERE is_completed = FALSE;

COMMENT ON INDEX idx_examens_blancs_user_exam_in_progress IS 
'Empêche un utilisateur d''avoir plusieurs sessions en cours pour le même examen';

-- 2. Ajouter une colonne pour tracker quand l'examen a été démarré
ALTER TABLE examens_blancs 
ADD COLUMN IF NOT EXISTS started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

COMMENT ON COLUMN examens_blancs.started_at IS 
'Date et heure de démarrage de l''examen (pour calculer le temps écoulé)';

-- 3. Ajouter une colonne pour tracker la dernière mise à jour
ALTER TABLE examens_blancs 
ADD COLUMN IF NOT EXISTS last_saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

COMMENT ON COLUMN examens_blancs.last_saved_at IS 
'Dernière sauvegarde de la progression (pour détecter les sessions abandonnées)';

-- 4. Créer une fonction pour récupérer ou créer une session d'examen
CREATE OR REPLACE FUNCTION get_or_create_exam_session(
  p_user_id UUID,
  p_exam_number INTEGER
)
RETURNS TABLE (
  session_id UUID,
  current_answers JSONB,
  current_question_index INTEGER,
  time_remaining INTEGER,
  is_new_session BOOLEAN
) AS $$
DECLARE
  v_session examens_blancs%ROWTYPE;
  v_is_new BOOLEAN := FALSE;
BEGIN
  -- Chercher une session en cours pour cet examen
  SELECT * INTO v_session
  FROM examens_blancs
  WHERE user_id = p_user_id
    AND exam_number = p_exam_number
    AND is_completed = FALSE
  LIMIT 1;

  -- Si pas de session, en créer une nouvelle
  IF NOT FOUND THEN
    INSERT INTO examens_blancs (
      user_id,
      exam_number,
      score,
      total_questions,
      is_completed,
      current_answers,
      current_question_index,
      time_remaining,
      started_at,
      last_saved_at
    ) VALUES (
      p_user_id,
      p_exam_number,
      0,
      40,
      FALSE,
      '[]'::jsonb,
      0,
      2700, -- 45 minutes en secondes
      NOW(),
      NOW()
    )
    RETURNING * INTO v_session;
    
    v_is_new := TRUE;
  END IF;

  -- Retourner les données de la session
  RETURN QUERY SELECT 
    v_session.id,
    v_session.current_answers,
    v_session.current_question_index,
    v_session.time_remaining,
    v_is_new;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION get_or_create_exam_session IS 
'Récupère la session en cours ou en crée une nouvelle pour un examen donné';

-- 5. Créer une fonction pour sauvegarder la progression
CREATE OR REPLACE FUNCTION save_exam_progress(
  p_session_id UUID,
  p_current_answers JSONB,
  p_current_question_index INTEGER,
  p_time_remaining INTEGER
)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE examens_blancs
  SET 
    current_answers = p_current_answers,
    current_question_index = p_current_question_index,
    time_remaining = p_time_remaining,
    last_saved_at = NOW()
  WHERE id = p_session_id
    AND is_completed = FALSE;
    
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION save_exam_progress IS 
'Sauvegarde la progression d''un examen en cours';

-- 6. Créer une vue pour faciliter le suivi des examens en cours par utilisateur
CREATE OR REPLACE VIEW user_active_exams AS
SELECT 
  eb.user_id,
  eb.exam_number,
  eb.id AS session_id,
  eb.current_question_index,
  eb.time_remaining,
  ROUND(((40 - eb.current_question_index) / 40.0) * 100) AS progression_percentage,
  EXTRACT(EPOCH FROM (NOW() - eb.started_at)) AS seconds_elapsed,
  CASE 
    WHEN eb.time_remaining <= 0 THEN 'expired'
    WHEN EXTRACT(EPOCH FROM (NOW() - eb.last_saved_at)) > 3600 THEN 'abandoned'
    ELSE 'active'
  END AS session_status
FROM examens_blancs eb
WHERE eb.is_completed = FALSE
ORDER BY eb.started_at DESC;

COMMENT ON VIEW user_active_exams IS 
'Vue des examens en cours avec leur statut et progression';

-- 7. Politique RLS pour permettre la mise à jour
DROP POLICY IF EXISTS "Les utilisateurs peuvent modifier leurs examens en cours" ON examens_blancs;

CREATE POLICY "Les utilisateurs peuvent modifier leurs examens en cours" 
ON examens_blancs FOR UPDATE 
USING (auth.uid() = user_id AND is_completed = FALSE);

-- 8. Index pour optimiser les requêtes de sauvegarde
CREATE INDEX IF NOT EXISTS idx_examens_blancs_session_id 
ON examens_blancs(id) 
WHERE is_completed = FALSE;

-- 9. Fonction pour nettoyer les sessions abandonnées (optionnel)
CREATE OR REPLACE FUNCTION cleanup_abandoned_exams()
RETURNS INTEGER AS $$
DECLARE
  v_count INTEGER;
BEGIN
  -- Marquer comme abandonnées les sessions sans activité depuis 24h
  -- et avec temps écoulé
  UPDATE examens_blancs
  SET is_completed = TRUE,
      completed_at = last_saved_at
  WHERE is_completed = FALSE
    AND EXTRACT(EPOCH FROM (NOW() - last_saved_at)) > 86400  -- 24h
    AND time_remaining <= 0;
    
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION cleanup_abandoned_exams IS 
'Nettoie les sessions d''examen abandonnées (24h sans activité et temps écoulé)';

-- =====================================================
-- NOTES D'IMPLÉMENTATION
-- =====================================================

/*
UTILISATION DANS LE CODE TYPESCRIPT:

1. Au chargement de la page examen:
   - Appeler get_or_create_exam_session(userId, examNumber)
   - Si is_new_session = true → consommer un crédit
   - Charger les données retournées (answers, question_index, time_remaining)

2. Pendant l'examen:
   - Sauvegarder toutes les 10 secondes avec save_exam_progress()
   - Le timer continue à partir de time_remaining (pas de 45min à chaque fois)

3. Séparation des examens:
   - Examen 1 : exam_number = 1
   - Examen 2 : exam_number = 2
   - Impossible d'avoir 2 sessions actives du même examen
   - Possible d'avoir examen 1 ET examen 2 en cours simultanément

4. Consommation de crédit:
   - Crédit consommé UNIQUEMENT lors de la création (is_new_session = true)
   - Pas de consommation lors de la reprise d'une session
*/
