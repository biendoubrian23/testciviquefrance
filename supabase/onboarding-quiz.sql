-- =====================================================
-- SCRIPT SQL POUR L'ONBOARDING QUIZ - TEST CIVIQUE FRANCE
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. TABLE ONBOARDING_QUIZ (stocke les résultats du quiz initial)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.onboarding_quiz (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  score INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 7,
  completed BOOLEAN DEFAULT FALSE,
  answers JSONB DEFAULT '[]'::jsonb, -- Stocke les réponses détaillées
  strengths TEXT[] DEFAULT '{}', -- Domaines forts
  weaknesses TEXT[] DEFAULT '{}', -- Domaines à améliorer
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Activer RLS
ALTER TABLE public.onboarding_quiz ENABLE ROW LEVEL SECURITY;

-- Politiques RLS
CREATE POLICY "Les utilisateurs peuvent voir leur quiz onboarding" 
  ON public.onboarding_quiz FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leur quiz onboarding" 
  ON public.onboarding_quiz FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent modifier leur quiz onboarding" 
  ON public.onboarding_quiz FOR UPDATE 
  USING (auth.uid() = user_id);

-- 2. AJOUTER COLONNE has_completed_onboarding à profiles
-- =====================================================
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS has_completed_onboarding BOOLEAN DEFAULT FALSE;

-- 3. TABLE ONBOARDING_QUESTIONS (questions spécifiques pour l'onboarding)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.onboarding_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  domaine TEXT NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL, -- Array d'options [{text: string, isCorrect: boolean}]
  explication TEXT,
  ordre INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activer RLS
ALTER TABLE public.onboarding_questions ENABLE ROW LEVEL SECURITY;

-- Politique: tout le monde peut voir les questions onboarding
CREATE POLICY "Tout le monde peut voir les questions onboarding" 
  ON public.onboarding_questions FOR SELECT 
  TO authenticated
  USING (true);

-- 4. INSÉRER LES 7 QUESTIONS D'ONBOARDING (1 par domaine + 2 supplémentaires)
-- =====================================================

-- Question 1: Principes et valeurs de la République
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Principes et valeurs de la République',
  'Selon l''article 1er de la Constitution, la France est une République :',
  '[
    {"text": "Indivisible, laïque, démocratique et sociale", "isCorrect": true},
    {"text": "Fédérale, laïque et démocratique", "isCorrect": false},
    {"text": "Indivisible, catholique et démocratique", "isCorrect": false},
    {"text": "Divisible, laïque et monarchique", "isCorrect": false}
  ]'::jsonb,
  'L''article 1er de la Constitution de 1958 définit la France comme une République indivisible, laïque, démocratique et sociale. Ces quatre caractéristiques sont fondamentales.',
  1
);

-- Question 2: Symboles de la République
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Principes et valeurs de la République',
  'La loi de séparation des Églises et de l''État, fondement de la laïcité française, date de :',
  '[
    {"text": "1789", "isCorrect": false},
    {"text": "1905", "isCorrect": true},
    {"text": "1958", "isCorrect": false},
    {"text": "1848", "isCorrect": false}
  ]'::jsonb,
  'La loi du 9 décembre 1905 établit la séparation des Églises et de l''État. Elle garantit la liberté de conscience et le libre exercice des cultes, tout en affirmant que la République ne reconnaît, ne salarie ni ne subventionne aucun culte.',
  2
);

-- Question 3: Système institutionnel et politique
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Système institutionnel et politique',
  'Qui promulgue les lois en France ?',
  '[
    {"text": "Le Premier ministre", "isCorrect": false},
    {"text": "Le Président de l''Assemblée nationale", "isCorrect": false},
    {"text": "Le Président de la République", "isCorrect": true},
    {"text": "Le Conseil constitutionnel", "isCorrect": false}
  ]'::jsonb,
  'Selon l''article 10 de la Constitution, le Président de la République promulgue les lois dans les quinze jours qui suivent leur transmission au Gouvernement après leur adoption définitive.',
  3
);

-- Question 4: Droits et devoirs
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Droits et devoirs',
  'À partir de quel âge le vote devient-il un droit en France ?',
  '[
    {"text": "16 ans", "isCorrect": false},
    {"text": "18 ans", "isCorrect": true},
    {"text": "21 ans", "isCorrect": false},
    {"text": "25 ans", "isCorrect": false}
  ]'::jsonb,
  'Depuis 1974, tout citoyen français âgé de 18 ans ou plus dispose du droit de vote. L''inscription sur les listes électorales est automatique depuis 1997 pour les jeunes atteignant 18 ans.',
  4
);

-- Question 5: Histoire, géographie et culture
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Histoire, géographie et culture',
  'La Déclaration des Droits de l''Homme et du Citoyen a été adoptée en :',
  '[
    {"text": "1789", "isCorrect": true},
    {"text": "1848", "isCorrect": false},
    {"text": "1958", "isCorrect": false},
    {"text": "1945", "isCorrect": false}
  ]'::jsonb,
  'La Déclaration des Droits de l''Homme et du Citoyen (DDHC) a été adoptée le 26 août 1789 par l''Assemblée nationale constituante. Elle fait partie du bloc de constitutionnalité et reste un texte fondamental.',
  5
);

-- Question 6: Histoire, géographie et culture (2ème question)
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Histoire, géographie et culture',
  'Combien de régions administratives la France métropolitaine compte-t-elle depuis 2016 ?',
  '[
    {"text": "18", "isCorrect": false},
    {"text": "13", "isCorrect": true},
    {"text": "22", "isCorrect": false},
    {"text": "27", "isCorrect": false}
  ]'::jsonb,
  'Depuis la réforme territoriale de 2015 (effective en 2016), la France métropolitaine compte 13 régions. Avec les 5 régions d''outre-mer, la France compte 18 régions au total.',
  6
);

-- Question 7: Vivre dans la société française
INSERT INTO public.onboarding_questions (domaine, question, options, explication, ordre) VALUES
(
  'Vivre dans la société française',
  'L''école est obligatoire en France pour les enfants âgés de :',
  '[
    {"text": "6 à 16 ans", "isCorrect": false},
    {"text": "3 à 16 ans", "isCorrect": true},
    {"text": "5 à 18 ans", "isCorrect": false},
    {"text": "6 à 18 ans", "isCorrect": false}
  ]'::jsonb,
  'Depuis 2019, l''instruction est obligatoire de 3 à 16 ans. La formation est obligatoire jusqu''à 18 ans (formation, emploi ou service civique). L''école maternelle est devenue obligatoire à partir de 3 ans.',
  7
);

-- 5. FONCTION pour marquer l'onboarding comme complété
-- =====================================================
CREATE OR REPLACE FUNCTION mark_onboarding_completed(p_user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.profiles 
  SET has_completed_onboarding = TRUE 
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
