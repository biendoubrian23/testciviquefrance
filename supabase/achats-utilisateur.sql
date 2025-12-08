-- =====================================================
-- SCRIPT SQL - GESTION DES ACHATS UTILISATEURS
-- Ajout des colonnes pour les micro-transactions
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- Ajout des colonnes pour les achats dans la table profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS unlock_level_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS no_timer_enabled BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS flashcards_2_themes BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS flashcards_5_themes BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS last_purchase_at TIMESTAMPTZ;

-- Commentaires pour documenter les colonnes
COMMENT ON COLUMN public.profiles.unlock_level_count IS 'Nombre de déblocages de niveau disponibles (0,59€ chacun)';
COMMENT ON COLUMN public.profiles.no_timer_enabled IS 'Mode sans chrono activé (0,69€)';
COMMENT ON COLUMN public.profiles.flashcards_2_themes IS 'Accès aux flashcards 2 thèmes (1,20€)';
COMMENT ON COLUMN public.profiles.flashcards_5_themes IS 'Accès aux flashcards 5 thèmes (1,50€)';
COMMENT ON COLUMN public.profiles.last_purchase_at IS 'Date du dernier achat';

-- =====================================================
-- TABLE DES ACHATS (historique des transactions)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.achats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_type TEXT NOT NULL CHECK (product_type IN (
    'pack_standard', 
    'pack_premium', 
    'pack_examen',
    'unlock_level', 
    'no_timer', 
    'flashcards_2', 
    'flashcards_5'
  )),
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  stripe_payment_id TEXT,
  stripe_customer_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_achats_user_id ON public.achats(user_id);
CREATE INDEX IF NOT EXISTS idx_achats_status ON public.achats(status);
CREATE INDEX IF NOT EXISTS idx_achats_product_type ON public.achats(product_type);

-- Activer RLS
ALTER TABLE public.achats ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Les utilisateurs peuvent voir leurs achats" 
  ON public.achats FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leurs achats" 
  ON public.achats FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- FONCTION: Activer un achat après paiement Stripe
-- Cette fonction sera appelée par le webhook Stripe
-- =====================================================
CREATE OR REPLACE FUNCTION public.activate_purchase(
  p_user_id UUID,
  p_product_type TEXT,
  p_stripe_payment_id TEXT DEFAULT NULL
)
RETURNS BOOLEAN AS $$
DECLARE
  v_success BOOLEAN := FALSE;
BEGIN
  -- Mettre à jour le profil selon le type de produit
  CASE p_product_type
    WHEN 'unlock_level' THEN
      UPDATE public.profiles 
      SET unlock_level_count = unlock_level_count + 1,
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'no_timer' THEN
      UPDATE public.profiles 
      SET no_timer_enabled = TRUE,
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'flashcards_2' THEN
      UPDATE public.profiles 
      SET flashcards_2_themes = TRUE,
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'flashcards_5' THEN
      UPDATE public.profiles 
      SET flashcards_5_themes = TRUE,
          flashcards_2_themes = TRUE, -- 5 thèmes inclut 2 thèmes
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'pack_standard' THEN
      UPDATE public.profiles 
      SET is_premium = TRUE,
          premium_expires_at = NOW() + INTERVAL '7 days',
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'pack_premium' THEN
      UPDATE public.profiles 
      SET is_premium = TRUE,
          premium_expires_at = NOW() + INTERVAL '7 days',
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    WHEN 'pack_examen' THEN
      UPDATE public.profiles 
      SET credits = credits + 2, -- 2 examens blancs
          last_purchase_at = NOW()
      WHERE id = p_user_id;
      v_success := TRUE;
      
    ELSE
      v_success := FALSE;
  END CASE;
  
  -- Enregistrer l'achat si stripe_payment_id fourni
  IF p_stripe_payment_id IS NOT NULL AND v_success THEN
    UPDATE public.achats 
    SET status = 'completed',
        completed_at = NOW()
    WHERE stripe_payment_id = p_stripe_payment_id;
  END IF;
  
  RETURN v_success;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- FONCTION: Utiliser un déblocage de niveau
-- =====================================================
CREATE OR REPLACE FUNCTION public.use_unlock_level(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_count INTEGER;
BEGIN
  SELECT unlock_level_count INTO v_count 
  FROM public.profiles 
  WHERE id = p_user_id;
  
  IF v_count > 0 THEN
    UPDATE public.profiles 
    SET unlock_level_count = unlock_level_count - 1
    WHERE id = p_user_id;
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- VÉRIFICATION: Afficher la structure mise à jour
-- =====================================================
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'profiles' 
AND table_schema = 'public'
ORDER BY ordinal_position;
