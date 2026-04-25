-- =====================================================
-- TABLE revenue_events
-- Enregistre chaque paiement réel reçu (subscription + one_time)
-- Source de vérité pour les revenus dans l'admin dashboard
-- =====================================================

CREATE TABLE IF NOT EXISTS public.revenue_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('subscription', 'one_time')),
  product_type TEXT NOT NULL, -- 'standard', 'premium', 'pack_examen', 'no_timer', 'flashcards_2_themes', 'flashcards_5_themes', 'unlock_level'
  amount NUMERIC(10,2) NOT NULL,
  currency TEXT DEFAULT 'eur',
  stripe_invoice_id TEXT UNIQUE, -- Idempotence pour les invoices
  stripe_payment_id TEXT,
  stripe_customer_id TEXT,
  status TEXT DEFAULT 'succeeded' CHECK (status IN ('succeeded', 'failed', 'refunded')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_revenue_events_created_at ON public.revenue_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_revenue_events_user_id ON public.revenue_events(user_id);
CREATE INDEX IF NOT EXISTS idx_revenue_events_event_type ON public.revenue_events(event_type);
CREATE INDEX IF NOT EXISTS idx_revenue_events_product_type ON public.revenue_events(product_type);

-- RLS : uniquement le service role peut lire/écrire (admin dashboard)
ALTER TABLE public.revenue_events ENABLE ROW LEVEL SECURITY;

-- Les admins (service role) ont accès complet
CREATE POLICY "Service role full access" ON public.revenue_events
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- Backfill : récupérer les achats existants depuis la table achats
-- (one_time purchases already tracked)
-- =====================================================
INSERT INTO public.revenue_events (user_id, event_type, product_type, amount, currency, stripe_payment_id, status, created_at)
SELECT 
  user_id,
  'one_time',
  product_type,
  amount,
  COALESCE(currency, 'eur'),
  stripe_payment_id,
  CASE WHEN status = 'completed' THEN 'succeeded' ELSE status END,
  COALESCE(completed_at, created_at)
FROM public.achats
WHERE status = 'completed'
ON CONFLICT DO NOTHING;
