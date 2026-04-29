-- Compteurs de vues pour les articles.
-- A executer dans Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS public.article_views (
  slug TEXT PRIMARY KEY,
  views BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.article_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "article_views_public_read" ON public.article_views;
CREATE POLICY "article_views_public_read"
  ON public.article_views
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.increment_article_view(p_slug TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_views BIGINT;
BEGIN
  INSERT INTO public.article_views (slug, views)
  VALUES (p_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET
    views = public.article_views.views + 1,
    updated_at = NOW()
  RETURNING views INTO v_views;

  RETURN v_views;
END;
$$;

REVOKE ALL ON FUNCTION public.increment_article_view(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_article_view(TEXT) TO anon, authenticated;
GRANT SELECT ON public.article_views TO anon, authenticated;

-- Optionnel : si tu veux initialiser certains articles avec les clics Bing exportes
-- dans www.testciviquefrance.fr_PageTrafficReport_4_28_2026.csv, utilise des valeurs
-- reelles que tu acceptes comme base. L'affichage public les multipliera ensuite par 1000.
--
-- INSERT INTO public.article_views (slug, views)
-- VALUES
--   ('naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet', 49),
--   ('declaration-impots-etrangers-france-2026-guide-pratique-formulaires-dates-remboursement', 85)
-- ON CONFLICT (slug) DO UPDATE SET views = EXCLUDED.views, updated_at = NOW();
