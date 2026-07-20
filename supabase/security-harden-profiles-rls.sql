-- =====================================================
-- DURCISSEMENT SÉCURITÉ — table public.profiles
-- Corrige : C3 — un utilisateur peut s'auto-attribuer le premium / crédits
--           via un PATCH direct sur l'API REST Supabase (clé anon publique).
--
-- Principe : la policy RLS UPDATE (auth.uid() = id) reste, mais un TRIGGER
-- interdit à un rôle `authenticated`/`anon` de modifier les colonnes d'ENTITLEMENT.
-- Le rôle `service_role` (webhook Stripe, admin dashboard) n'est PAS bloqué.
--
-- Résilient au schéma : on compare via to_jsonb(), donc une colonne absente
-- est simplement ignorée (pas d'erreur). Rejoue-le sans risque (idempotent).
--
-- À exécuter dans : Supabase → SQL Editor (projet TCF exlwbyfxuhitctiwjech).
-- =====================================================

CREATE OR REPLACE FUNCTION public.protect_profile_entitlements()
RETURNS TRIGGER
LANGUAGE plpgsql
-- SECURITY INVOKER (défaut) : current_user reflète le rôle appelant
--   -> 'service_role' pour le webhook/admin, 'authenticated' pour un user connecté.
AS $$
DECLARE
  protected_cols text[] := ARRAY[
    'is_premium', 'credits', 'premium_expires_at',
    'subscription_status', 'subscription_tier',
    'subscription_start_date', 'subscription_end_date', 'subscription_exams_used',
    'all_levels_unlocked', 'no_timer_enabled',
    'exam_credits', 'flashcards_2_themes', 'flashcards_5_themes',
    'stripe_customer_id', 'stripe_subscription_id', 'stripe_price_id'
  ];
  col text;
  old_j jsonb := to_jsonb(OLD);
  new_j jsonb := to_jsonb(NEW);
BEGIN
  -- Le backend de confiance (service_role) ou le propriétaire DB peut tout modifier.
  IF current_user IN ('service_role', 'postgres', 'supabase_admin') THEN
    RETURN NEW;
  END IF;

  -- Un utilisateur normal ne doit modifier AUCUNE colonne d'entitlement.
  FOREACH col IN ARRAY protected_cols LOOP
    IF (old_j ? col) AND (old_j -> col IS DISTINCT FROM new_j -> col) THEN
      RAISE EXCEPTION 'Modification non autorisée du champ "%" (premium/abonnement géré côté serveur uniquement)', col
        USING ERRCODE = '42501'; -- insufficient_privilege
    END IF;
  END LOOP;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profile_entitlements ON public.profiles;
CREATE TRIGGER trg_protect_profile_entitlements
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profile_entitlements();

-- =====================================================
-- VÉRIFICATION (à lancer après, connecté comme un user normal via l'app) :
--   1. Éditer son prénom  -> doit RÉUSSIR.
--   2. PATCH profiles {is_premium:true} sur son propre id via l'anon key
--        -> doit ÉCHOUER avec l'erreur 42501 ci-dessus.
-- =====================================================
