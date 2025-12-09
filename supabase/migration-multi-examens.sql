-- =====================================================
-- MIGRATION: Support de 5 examens blancs distincts
-- Permet de stocker quel examen a été passé par chaque utilisateur
-- Optimisé pour 10k utilisateurs simultanés
-- =====================================================

-- Ajouter une colonne pour identifier l'examen (1-5)
ALTER TABLE public.examens_blancs 
ADD COLUMN IF NOT EXISTS exam_number INTEGER DEFAULT 1;

-- Ajouter un commentaire pour documenter
COMMENT ON COLUMN public.examens_blancs.exam_number IS 'Numéro de l''examen blanc (1-5) pour éviter de repasser le même';

-- Ajouter une contrainte pour valider le numéro (1 à 5)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'examens_blancs_exam_number_check'
    ) THEN
        ALTER TABLE public.examens_blancs
        ADD CONSTRAINT examens_blancs_exam_number_check 
        CHECK (exam_number >= 1 AND exam_number <= 5);
    END IF;
END $$;

-- Créer un index composite pour optimiser la recherche d'examens
-- Utile pour : "Récupérer les examens complétés d'un utilisateur"
-- Performance : O(log n) au lieu de O(n)
CREATE INDEX IF NOT EXISTS idx_examens_blancs_user_completed_exam 
ON public.examens_blancs(user_id, is_completed, exam_number, completed_at DESC)
WHERE is_completed = TRUE;

-- Index pour récupérer rapidement le dernier examen d'un utilisateur
-- Optimisé pour getNextExamenForUser() - une seule requête
CREATE INDEX IF NOT EXISTS idx_examens_blancs_user_last_exam 
ON public.examens_blancs(user_id, completed_at DESC)
WHERE is_completed = TRUE;

-- Index pour récupérer l'examen en cours (pas complété)
-- Permet de reprendre un examen après rafraîchissement
CREATE INDEX IF NOT EXISTS idx_examens_blancs_user_in_progress_exam 
ON public.examens_blancs(user_id, exam_number)
WHERE is_completed = FALSE;

-- Mettre à jour les statistiques pour inclure le numéro d'examen
-- Cela permet d'analyser la performance par examen
ALTER TABLE public.statistiques 
ADD COLUMN IF NOT EXISTS examens_par_numero JSONB DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.statistiques.examens_par_numero IS 'Statistiques par numéro d''examen: {{"1": 3, "2": 2}} = 3x examen #1, 2x examen #2';

-- Vue pour analyser la répartition des examens (optionnel, pour analytics)
CREATE OR REPLACE VIEW public.examens_distribution AS
SELECT 
  exam_number,
  COUNT(*) as total_passes,
  COUNT(CASE WHEN passed THEN 1 END) as total_reussis,
  ROUND(AVG(score), 2) as score_moyen,
  ROUND(AVG(temps_total) / 60.0, 2) as temps_moyen_minutes
FROM public.examens_blancs
WHERE is_completed = TRUE
GROUP BY exam_number
ORDER BY exam_number;

-- Fonction pour récupérer le prochain numéro d'examen
-- Optimisée pour éviter les race conditions à 10k users
CREATE OR REPLACE FUNCTION public.get_next_exam_number(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  v_count INTEGER;
  v_last_exam INTEGER;
  v_next_exam INTEGER;
BEGIN
  -- Compter les examens complétés
  SELECT COUNT(*), MAX(exam_number)
  INTO v_count, v_last_exam
  FROM public.examens_blancs
  WHERE user_id = p_user_id 
  AND is_completed = TRUE;

  -- Calculer le prochain examen (rotation 1-5)
  v_next_exam := (v_count % 5) + 1;

  -- Sécurité : éviter de redonner le même examen
  IF v_last_exam = v_next_exam THEN
    v_next_exam := (v_next_exam % 5) + 1;
  END IF;

  RETURN v_next_exam;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour vérifier si un examen est en cours
-- Permet de reprendre un examen non terminé
CREATE OR REPLACE FUNCTION public.get_exam_in_progress(p_user_id UUID)
RETURNS TABLE (
  id UUID,
  exam_number INTEGER,
  current_question_index INTEGER,
  time_remaining INTEGER,
  current_answers JSONB,
  started_at TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    e.id,
    e.exam_number,
    e.current_question_index,
    e.time_remaining,
    e.current_answers,
    e.started_at
  FROM public.examens_blancs e
  WHERE e.user_id = p_user_id 
  AND e.is_completed = FALSE
  ORDER BY e.started_at DESC
  LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions sur les fonctions
GRANT EXECUTE ON FUNCTION public.get_next_exam_number TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_exam_in_progress TO authenticated;

-- Grant permissions sur la vue
GRANT SELECT ON public.examens_distribution TO authenticated;

-- Message de confirmation
DO $$
BEGIN
  RAISE NOTICE '✅ Migration réussie : Support de 5 examens blancs activé';
  RAISE NOTICE '📊 Index créés pour optimisation 10k users simultanés';
  RAISE NOTICE '🔄 Rotation automatique des examens configurée';
END $$;
