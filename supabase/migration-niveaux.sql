-- =====================================================
-- MIGRATION: Tables pour l'entraînement par niveaux
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. TABLE PROGRESSION_NIVEAUX (progression par niveau et catégorie)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.progression_niveaux (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  categorie_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  niveau INTEGER NOT NULL CHECK (niveau BETWEEN 1 AND 10),
  is_unlocked BOOLEAN DEFAULT FALSE,
  is_completed BOOLEAN DEFAULT FALSE,
  meilleur_score INTEGER DEFAULT 0,
  tentatives INTEGER DEFAULT 0,
  derniere_tentative TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, categorie_id, niveau)
);

ALTER TABLE public.progression_niveaux ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Les utilisateurs peuvent voir leur progression" ON public.progression_niveaux;
CREATE POLICY "Les utilisateurs peuvent voir leur progression" 
  ON public.progression_niveaux FOR SELECT 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent créer leur progression" ON public.progression_niveaux;
CREATE POLICY "Les utilisateurs peuvent créer leur progression" 
  ON public.progression_niveaux FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent modifier leur progression" ON public.progression_niveaux;
CREATE POLICY "Les utilisateurs peuvent modifier leur progression" 
  ON public.progression_niveaux FOR UPDATE 
  USING (auth.uid() = user_id);

-- 2. TABLE SESSIONS_QUIZ (sessions d'entraînement)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.sessions_quiz (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  categorie_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  niveau INTEGER NOT NULL,
  score INTEGER DEFAULT 0,
  temps_moyen INTEGER, -- temps moyen par question en secondes
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

ALTER TABLE public.sessions_quiz ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Les utilisateurs peuvent voir leurs sessions" ON public.sessions_quiz;
CREATE POLICY "Les utilisateurs peuvent voir leurs sessions" 
  ON public.sessions_quiz FOR SELECT 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent créer leurs sessions" ON public.sessions_quiz;
CREATE POLICY "Les utilisateurs peuvent créer leurs sessions" 
  ON public.sessions_quiz FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent modifier leurs sessions" ON public.sessions_quiz;
CREATE POLICY "Les utilisateurs peuvent modifier leurs sessions" 
  ON public.sessions_quiz FOR UPDATE 
  USING (auth.uid() = user_id);

-- 3. TABLE GAMIFICATION (points et séries)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.gamification (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  points_total INTEGER DEFAULT 0,
  streak_jours INTEGER DEFAULT 0,
  meilleure_serie INTEGER DEFAULT 0,
  derniere_activite TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.gamification ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Les utilisateurs peuvent voir leur gamification" ON public.gamification;
CREATE POLICY "Les utilisateurs peuvent voir leur gamification" 
  ON public.gamification FOR SELECT 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent créer leur gamification" ON public.gamification;
CREATE POLICY "Les utilisateurs peuvent créer leur gamification" 
  ON public.gamification FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Les utilisateurs peuvent modifier leur gamification" ON public.gamification;
CREATE POLICY "Les utilisateurs peuvent modifier leur gamification" 
  ON public.gamification FOR UPDATE 
  USING (auth.uid() = user_id);

-- =====================================================
-- VÉRIFICATION
-- =====================================================
-- Vérifier que les tables ont été créées
SELECT 
  'progression_niveaux' as table_name, 
  COUNT(*) as row_count 
FROM public.progression_niveaux
UNION ALL
SELECT 
  'sessions_quiz' as table_name, 
  COUNT(*) as row_count 
FROM public.sessions_quiz
UNION ALL
SELECT 
  'gamification' as table_name, 
  COUNT(*) as row_count 
FROM public.gamification;
