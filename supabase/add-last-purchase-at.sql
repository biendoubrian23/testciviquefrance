-- =====================================================
-- AJOUT DES COLONNES POUR LE PACK EXAMEN
-- Pour tracker les examens blancs disponibles
-- =====================================================

-- Colonne pour les crédits d'examens blancs (Pack Examen à l'unité)
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS exam_credits INTEGER DEFAULT 0;

COMMENT ON COLUMN public.profiles.exam_credits IS 'Nombre d''examens blancs disponibles via Pack Examen (2,50€ = 2 examens)';

-- Colonne pour tracker les examens utilisés dans l'abonnement
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS subscription_exams_used INTEGER DEFAULT 0;

COMMENT ON COLUMN public.profiles.subscription_exams_used IS 'Nombre d''examens blancs déjà utilisés dans l''abonnement en cours (Standard=1 max, Premium=3 max)';

-- Colonne pour la date du dernier achat
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS last_purchase_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.last_purchase_at IS 'Date et heure du dernier achat effectué par l''utilisateur';

-- Vérification
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'profiles' 
AND column_name IN ('exam_credits', 'subscription_exams_used', 'last_purchase_at')
ORDER BY column_name;
