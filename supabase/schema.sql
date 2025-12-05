-- =====================================================
-- SCRIPT SQL POUR SUPABASE - TEST CIVIQUE FRANCE
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. TABLE PROFILES (extension de auth.users)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  prenom TEXT,
  nom TEXT,
  avatar_url TEXT,
  credits INTEGER DEFAULT 5,
  is_premium BOOLEAN DEFAULT FALSE,
  premium_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activer RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Politique: les utilisateurs peuvent voir/modifier leur propre profil
CREATE POLICY "Les utilisateurs peuvent voir leur profil" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Les utilisateurs peuvent modifier leur profil" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

-- 2. TABLE CATEGORIES (thèmes de l'examen civique)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  description TEXT,
  icone TEXT,
  couleur TEXT DEFAULT '#1e40af',
  ordre INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut voir les catégories" 
  ON public.categories FOR SELECT 
  TO authenticated, anon
  USING (true);

-- 3. TABLE QUESTIONS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  categorie_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  type TEXT DEFAULT 'qcm' CHECK (type IN ('qcm', 'vrai_faux', 'texte')),
  explication TEXT,
  difficulte INTEGER DEFAULT 1 CHECK (difficulte BETWEEN 1 AND 3),
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs connectés peuvent voir les questions gratuites" 
  ON public.questions FOR SELECT 
  TO authenticated
  USING (is_premium = FALSE OR EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND (is_premium = TRUE OR credits > 0)
  ));

-- 4. TABLE REPONSES (options de réponse pour chaque question)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.reponses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
  texte TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE,
  ordre INTEGER DEFAULT 0
);

ALTER TABLE public.reponses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs connectés peuvent voir les réponses" 
  ON public.reponses FOR SELECT 
  TO authenticated
  USING (true);

-- 5. TABLE RESULTATS (historique des tentatives)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.resultats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
  reponse_donnee UUID REFERENCES public.reponses(id),
  is_correct BOOLEAN,
  temps_reponse INTEGER, -- en secondes
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.resultats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent voir leurs résultats" 
  ON public.resultats FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leurs résultats" 
  ON public.resultats FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- 6. TABLE EXAMENS_BLANCS (sessions d'examen complet)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.examens_blancs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  score INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 12,
  temps_total INTEGER, -- en secondes
  is_completed BOOLEAN DEFAULT FALSE,
  passed BOOLEAN,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

ALTER TABLE public.examens_blancs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent voir leurs examens" 
  ON public.examens_blancs FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leurs examens" 
  ON public.examens_blancs FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent modifier leurs examens" 
  ON public.examens_blancs FOR UPDATE 
  USING (auth.uid() = user_id);

-- 7. TABLE STATISTIQUES (stats agrégées par utilisateur)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.statistiques (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  total_questions_repondues INTEGER DEFAULT 0,
  total_bonnes_reponses INTEGER DEFAULT 0,
  total_examens_blancs INTEGER DEFAULT 0,
  total_examens_reussis INTEGER DEFAULT 0,
  meilleur_score INTEGER DEFAULT 0,
  temps_total_etude INTEGER DEFAULT 0, -- en secondes
  serie_actuelle INTEGER DEFAULT 0, -- jours consécutifs
  meilleure_serie INTEGER DEFAULT 0,
  derniere_activite TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.statistiques ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Les utilisateurs peuvent voir leurs stats" 
  ON public.statistiques FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent modifier leurs stats" 
  ON public.statistiques FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leurs stats" 
  ON public.statistiques FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- 8. FONCTION: Créer automatiquement un profil à l'inscription
-- =====================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, prenom, nom)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'prenom',
    NEW.raw_user_meta_data->>'nom'
  );
  
  INSERT INTO public.statistiques (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer le profil automatiquement
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. INSERTION DES CATÉGORIES DE BASE
-- =====================================================
INSERT INTO public.categories (nom, description, icone, couleur, ordre) VALUES
  ('Valeurs de la République', 'Liberté, Égalité, Fraternité et les principes fondamentaux', 'Scale', '#1e40af', 1),
  ('Symboles de la France', 'Drapeau, hymne national, devise et emblèmes', 'Flag', '#dc2626', 2),
  ('Histoire de France', 'Les grandes dates et événements historiques', 'BookOpen', '#7c3aed', 3),
  ('Institutions françaises', 'Organisation politique et administrative', 'Building', '#0891b2', 4),
  ('Droits et devoirs', 'Droits fondamentaux et obligations citoyennes', 'Users', '#059669', 5),
  ('Vie quotidienne', 'Culture, traditions et vie en société', 'Home', '#d97706', 6)
ON CONFLICT DO NOTHING;

-- 10. QUELQUES QUESTIONS D'EXEMPLE
-- =====================================================
-- (À compléter avec plus de questions)

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte) 
SELECT 
  c.id,
  'Quelle est la devise de la République française ?',
  'qcm',
  'La devise "Liberté, Égalité, Fraternité" est issue de la Révolution française et figure dans la Constitution.',
  1
FROM public.categories c WHERE c.nom = 'Valeurs de la République'
ON CONFLICT DO NOTHING;

-- Récupérer l'ID de la question pour ajouter les réponses
DO $$
DECLARE
  q_id UUID;
BEGIN
  SELECT id INTO q_id FROM public.questions WHERE question = 'Quelle est la devise de la République française ?' LIMIT 1;
  
  IF q_id IS NOT NULL THEN
    INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
      (q_id, 'Liberté, Égalité, Fraternité', TRUE, 1),
      (q_id, 'Unité, Force, Progrès', FALSE, 2),
      (q_id, 'Travail, Famille, Patrie', FALSE, 3),
      (q_id, 'Paix, Justice, Solidarité', FALSE, 4)
    ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- Question 2
INSERT INTO public.questions (categorie_id, question, type, explication, difficulte) 
SELECT 
  c.id,
  'Quelles sont les couleurs du drapeau français, de gauche à droite ?',
  'qcm',
  'Le drapeau tricolore bleu-blanc-rouge est l''emblème national depuis 1794.',
  1
FROM public.categories c WHERE c.nom = 'Symboles de la France'
ON CONFLICT DO NOTHING;

DO $$
DECLARE
  q_id UUID;
BEGIN
  SELECT id INTO q_id FROM public.questions WHERE question LIKE '%couleurs du drapeau%' LIMIT 1;
  
  IF q_id IS NOT NULL THEN
    INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
      (q_id, 'Bleu, Blanc, Rouge', TRUE, 1),
      (q_id, 'Rouge, Blanc, Bleu', FALSE, 2),
      (q_id, 'Blanc, Bleu, Rouge', FALSE, 3),
      (q_id, 'Bleu, Rouge, Blanc', FALSE, 4)
    ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- Question 3
INSERT INTO public.questions (categorie_id, question, type, explication, difficulte) 
SELECT 
  c.id,
  'Quel est l''hymne national français ?',
  'qcm',
  'La Marseillaise, composée par Rouget de Lisle en 1792, est l''hymne national depuis 1879.',
  1
FROM public.categories c WHERE c.nom = 'Symboles de la France'
ON CONFLICT DO NOTHING;

DO $$
DECLARE
  q_id UUID;
BEGIN
  SELECT id INTO q_id FROM public.questions WHERE question LIKE '%hymne national%' LIMIT 1;
  
  IF q_id IS NOT NULL THEN
    INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
      (q_id, 'La Marseillaise', TRUE, 1),
      (q_id, 'Le Chant du Départ', FALSE, 2),
      (q_id, 'La Parisienne', FALSE, 3),
      (q_id, 'L''Internationale', FALSE, 4)
    ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- Question 4
INSERT INTO public.questions (categorie_id, question, type, explication, difficulte) 
SELECT 
  c.id,
  'En quelle année a eu lieu la Révolution française ?',
  'qcm',
  'La Révolution française a débuté en 1789 avec la prise de la Bastille le 14 juillet.',
  1
FROM public.categories c WHERE c.nom = 'Histoire de France'
ON CONFLICT DO NOTHING;

DO $$
DECLARE
  q_id UUID;
BEGIN
  SELECT id INTO q_id FROM public.questions WHERE question LIKE '%Révolution française%' LIMIT 1;
  
  IF q_id IS NOT NULL THEN
    INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
      (q_id, '1789', TRUE, 1),
      (q_id, '1799', FALSE, 2),
      (q_id, '1776', FALSE, 3),
      (q_id, '1815', FALSE, 4)
    ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- Question 5
INSERT INTO public.questions (categorie_id, question, type, explication, difficulte) 
SELECT 
  c.id,
  'Qui est le chef de l''État en France ?',
  'qcm',
  'Le Président de la République est le chef de l''État français, élu au suffrage universel direct pour 5 ans.',
  1
FROM public.categories c WHERE c.nom = 'Institutions françaises'
ON CONFLICT DO NOTHING;

DO $$
DECLARE
  q_id UUID;
BEGIN
  SELECT id INTO q_id FROM public.questions WHERE question LIKE '%chef de l''État%' LIMIT 1;
  
  IF q_id IS NOT NULL THEN
    INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
      (q_id, 'Le Président de la République', TRUE, 1),
      (q_id, 'Le Premier Ministre', FALSE, 2),
      (q_id, 'Le Président du Sénat', FALSE, 3),
      (q_id, 'Le Président de l''Assemblée nationale', FALSE, 4)
    ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- =====================================================
-- FIN DU SCRIPT
-- =====================================================
