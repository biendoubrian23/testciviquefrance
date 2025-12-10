-- =====================================================
-- MIGRATION TIMER PERSISTANT PAR EXAMEN
-- Simplifié pour ajouter uniquement les colonnes nécessaires
-- =====================================================

-- 1. Ajouter les colonnes manquantes si elles n'existent pas
ALTER TABLE examens_blancs 
ADD COLUMN IF NOT EXISTS started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

ALTER TABLE examens_blancs 
ADD COLUMN IF NOT EXISTS last_saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- 2. Ajouter une contrainte unique pour empêcher les doublons par examen
-- Un utilisateur ne peut avoir qu'UN SEUL examen en cours par numéro d'examen
DROP INDEX IF EXISTS idx_examens_blancs_user_exam_in_progress;

CREATE UNIQUE INDEX idx_examens_blancs_user_exam_in_progress 
ON examens_blancs(user_id, exam_number) 
WHERE is_completed = FALSE;

-- 3. Mettre à jour les enregistrements existants
-- Mettre started_at à NOW() pour les anciens enregistrements
UPDATE examens_blancs
SET started_at = NOW()
WHERE started_at IS NULL;

-- Mettre last_saved_at à completed_at ou NOW()
UPDATE examens_blancs
SET last_saved_at = COALESCE(completed_at, NOW())
WHERE last_saved_at IS NULL;

-- 4. Politique RLS pour permettre la mise à jour
DROP POLICY IF EXISTS "Les utilisateurs peuvent modifier leurs examens en cours" ON examens_blancs;

CREATE POLICY "Les utilisateurs peuvent modifier leurs examens en cours" 
ON examens_blancs FOR UPDATE 
USING (auth.uid() = user_id);

-- 5. Index pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_examens_blancs_session_id 
ON examens_blancs(id) 
WHERE is_completed = FALSE;

-- Commentaires
COMMENT ON COLUMN examens_blancs.started_at IS 'Date et heure de démarrage de l''examen';
COMMENT ON COLUMN examens_blancs.last_saved_at IS 'Dernière sauvegarde de la progression';
COMMENT ON INDEX idx_examens_blancs_user_exam_in_progress IS 'Empêche un utilisateur d''avoir plusieurs sessions en cours pour le même examen';
