-- =====================================================
-- ÉCHANGER L'ORDRE DE DEUX CATÉGORIES
-- Symboles de la France ↔ Vivre dans la société française
-- À exécuter dans Supabase SQL Editor
-- =====================================================

-- Étape 1: Récupérer les ordres actuels et les échanger
DO $$
DECLARE
  ordre_symboles INTEGER;
  ordre_vivre INTEGER;
BEGIN
  -- Récupérer l'ordre actuel de "Symboles de la France"
  SELECT ordre INTO ordre_symboles FROM public.categories WHERE nom = 'Symboles de la France';
  
  -- Récupérer l'ordre actuel de "Vivre dans la société française"
  SELECT ordre INTO ordre_vivre FROM public.categories WHERE nom = 'Vivre dans la société française';
  
  -- Échanger les ordres
  UPDATE public.categories SET ordre = ordre_vivre WHERE nom = 'Symboles de la France';
  UPDATE public.categories SET ordre = ordre_symboles WHERE nom = 'Vivre dans la société française';
  
  RAISE NOTICE '✅ Échange effectué : Symboles (ordre %) ↔ Vivre (ordre %)', ordre_vivre, ordre_symboles;
END $$;

-- Vérification de l'ordre final
SELECT nom, ordre FROM public.categories ORDER BY ordre;
