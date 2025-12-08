-- =====================================================
-- AJOUT DU STOCKAGE DES SESSIONS D'EXAMEN BLANC EN COURS
-- Permet de reprendre un examen après actualisation
-- =====================================================

-- Ajouter une colonne pour stocker les réponses en cours (JSON)
ALTER TABLE public.examens_blancs 
ADD COLUMN IF NOT EXISTS current_answers JSONB DEFAULT '[]'::jsonb;

-- Ajouter une colonne pour la question courante
ALTER TABLE public.examens_blancs 
ADD COLUMN IF NOT EXISTS current_question_index INTEGER DEFAULT 0;

-- Ajouter une colonne pour le temps restant
ALTER TABLE public.examens_blancs 
ADD COLUMN IF NOT EXISTS time_remaining INTEGER DEFAULT 2700; -- 45 minutes en secondes

-- Créer un index pour récupérer rapidement l'examen en cours
CREATE INDEX IF NOT EXISTS idx_examens_blancs_user_in_progress 
ON public.examens_blancs(user_id, is_completed) 
WHERE is_completed = FALSE;

-- Politique pour mettre à jour les examens (si pas déjà existante)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'examens_blancs' 
        AND policyname = 'Les utilisateurs peuvent modifier leurs examens'
    ) THEN
        CREATE POLICY "Les utilisateurs peuvent modifier leurs examens" 
        ON public.examens_blancs FOR UPDATE 
        USING (auth.uid() = user_id);
    END IF;
END $$;
