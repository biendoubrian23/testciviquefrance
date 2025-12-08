-- Mise à jour de la table profiles pour intégrer Stripe
-- Exécutez ce script dans Supabase SQL Editor

-- Ajout des colonnes Stripe si elles n'existent pas
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_price_id TEXT,
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive',
ADD COLUMN IF NOT EXISTS subscription_start_date TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS subscription_end_date TIMESTAMPTZ;

-- Création d'un index pour recherche rapide par customer_id
CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id ON profiles(stripe_customer_id);

-- Commentaires pour documentation
COMMENT ON COLUMN profiles.stripe_customer_id IS 'ID unique du client dans Stripe';
COMMENT ON COLUMN profiles.stripe_subscription_id IS 'ID de l''abonnement actif dans Stripe';
COMMENT ON COLUMN profiles.stripe_price_id IS 'ID du prix/plan souscrit (price_1Sc3XLIUG5GUejFZl50nFqk4 ou price_1Sc3XrIUG5GUejFZyi5mOQUe)';
COMMENT ON COLUMN profiles.subscription_status IS 'Statut: active, canceled, past_due, trialing, incomplete, incomplete_expired, unpaid';
COMMENT ON COLUMN profiles.subscription_start_date IS 'Date de début de l''abonnement';
COMMENT ON COLUMN profiles.subscription_end_date IS 'Date de fin de l''abonnement (pour annulation)';
