-- Migration : Ajouter les colonnes d'objectifs utilisateur
-- Date : 2026-01-01
-- Description : Stocke les informations de profil collectées lors de l'onboarding

-- Ajouter les nouvelles colonnes à la table profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS test_deadline TEXT,
ADD COLUMN IF NOT EXISTS procedure_type TEXT,
ADD COLUMN IF NOT EXISTS profile_completed_at TIMESTAMPTZ;

-- Commentaires pour documentation
COMMENT ON COLUMN profiles.test_deadline IS 'Échéance du test civique: urgent, soon, relaxed, no_date, exploration';
COMMENT ON COLUMN profiles.procedure_type IS 'Type de démarche: naturalization, residence_permit, renewal, other';
COMMENT ON COLUMN profiles.profile_completed_at IS 'Date de complétion des étapes de profil onboarding';

-- Créer un index pour les requêtes admin (filtrer par échéance)
CREATE INDEX IF NOT EXISTS idx_profiles_test_deadline ON profiles(test_deadline);
CREATE INDEX IF NOT EXISTS idx_profiles_procedure_type ON profiles(procedure_type);
