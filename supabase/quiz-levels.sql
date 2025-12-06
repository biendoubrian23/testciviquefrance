-- =====================================================
-- SCRIPT SQL POUR LE SYSTÈME DE NIVEAUX - TEST CIVIQUE FRANCE
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. AJOUTER COLONNE niveau à la table questions
-- =====================================================
ALTER TABLE public.questions 
ADD COLUMN IF NOT EXISTS niveau INTEGER DEFAULT 1 CHECK (niveau BETWEEN 1 AND 10);

-- 2. TABLE PROGRESSION_NIVEAUX (progression par thème/utilisateur)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.progression_niveaux (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  categorie_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  niveau_actuel INTEGER DEFAULT 1 CHECK (niveau_actuel BETWEEN 1 AND 10),
  questions_repondues_niveau INTEGER DEFAULT 0,
  questions_correctes_niveau INTEGER DEFAULT 0,
  niveau_debloque BOOLEAN DEFAULT FALSE,
  date_dernier_niveau TIMESTAMPTZ,
  niveaux_aujourd_hui INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, categorie_id)
);

ALTER TABLE public.progression_niveaux ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progression" 
  ON public.progression_niveaux FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progression" 
  ON public.progression_niveaux FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progression" 
  ON public.progression_niveaux FOR UPDATE 
  USING (auth.uid() = user_id);

-- 3. TABLE SESSIONS_QUIZ (historique des sessions)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.sessions_quiz (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  categorie_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  niveau INTEGER NOT NULL,
  score INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 10,
  temps_total INTEGER DEFAULT 0, -- en secondes
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

ALTER TABLE public.sessions_quiz ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sessions" 
  ON public.sessions_quiz FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own sessions" 
  ON public.sessions_quiz FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sessions" 
  ON public.sessions_quiz FOR UPDATE 
  USING (auth.uid() = user_id);

-- 4. TABLE GAMIFICATION (points, badges, streaks)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.gamification (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  points_total INTEGER DEFAULT 0,
  streak_jours INTEGER DEFAULT 0,
  meilleur_streak INTEGER DEFAULT 0,
  badges JSONB DEFAULT '[]'::jsonb,
  derniere_activite DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.gamification ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own gamification" 
  ON public.gamification FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own gamification" 
  ON public.gamification FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own gamification" 
  ON public.gamification FOR UPDATE 
  USING (auth.uid() = user_id);

-- 5. FONCTION: Réinitialiser les niveaux quotidiens à minuit
-- =====================================================
CREATE OR REPLACE FUNCTION reset_daily_levels()
RETURNS void AS $$
BEGIN
  UPDATE public.progression_niveaux 
  SET niveaux_aujourd_hui = 0 
  WHERE date_dernier_niveau < CURRENT_DATE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. FONCTION: Créer gamification pour nouvel utilisateur
-- =====================================================
CREATE OR REPLACE FUNCTION public.handle_new_user_gamification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.gamification (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger
DROP TRIGGER IF EXISTS on_auth_user_created_gamification ON auth.users;
CREATE TRIGGER on_auth_user_created_gamification
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_gamification();
