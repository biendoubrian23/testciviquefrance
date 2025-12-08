-- =====================================================
-- MIGRATION: Déblocage du niveau suivant (micro-service)
-- Remplace le compteur unlock_level_count par un booléen all_levels_unlocked
-- Permet de passer au niveau suivant si score entre 5/10 et 7/10
-- À exécuter dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. Ajouter la nouvelle colonne booléenne
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS all_levels_unlocked BOOLEAN DEFAULT FALSE;

-- 2. Commenter la colonne
COMMENT ON COLUMN public.profiles.all_levels_unlocked IS 'Permet de passer au niveau suivant avec un score de 5-7/10 au lieu de 8/10 (0,99€ - achat unique)';

-- 3. Migrer les utilisateurs qui avaient des déblocages
-- Si quelqu'un avait unlock_level_count > 0, on lui donne all_levels_unlocked = true
UPDATE public.profiles 
SET all_levels_unlocked = TRUE 
WHERE unlock_level_count > 0;

-- 4. Mettre à jour la fonction activate_purchase pour le nouveau système
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
      -- Nouveau comportement: activer le booléen (débloque TOUT)
      UPDATE public.profiles 
      SET all_levels_unlocked = TRUE,
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

-- 5. Supprimer l'ancienne fonction use_unlock_level (plus nécessaire)
DROP FUNCTION IF EXISTS public.use_unlock_level(UUID);

-- 6. Optionnel: Supprimer l'ancienne colonne (à faire plus tard après vérification)
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS unlock_level_count;

-- =====================================================
-- VÉRIFICATION: Afficher la structure mise à jour
-- =====================================================
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'profiles' 
AND table_schema = 'public'
AND column_name IN ('all_levels_unlocked', 'unlock_level_count', 'no_timer_enabled')
ORDER BY column_name;
