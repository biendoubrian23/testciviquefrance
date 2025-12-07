-- =====================================================
-- RENOMMER LES CATÉGORIES SELON LE RÉFÉRENTIEL OFFICIEL
-- À exécuter dans Supabase SQL Editor
-- =====================================================

-- 1. Histoire de France → Histoire, géographie et culture
UPDATE public.categories
SET nom = 'Histoire, géographie et culture',
    description = 'Les grandes dates, événements historiques, territoires et patrimoine français'
WHERE nom = 'Histoire de France';

-- 2. Vie quotidienne → Vivre dans la société française
UPDATE public.categories
SET nom = 'Vivre dans la société française',
    description = 'S''installer en France, accès aux soins, travail, autorité parentale et système éducatif'
WHERE nom = 'Vie quotidienne';

-- 3. Institutions françaises → Système institutionnel et politique
UPDATE public.categories
SET nom = 'Système institutionnel et politique',
    description = 'Démocratie, droit de vote, organisation de la République et Union européenne'
WHERE nom = 'Institutions françaises';

-- 4. Valeurs de la République → Principes et valeurs de la République
UPDATE public.categories
SET nom = 'Principes et valeurs de la République',
    description = 'Devise, symboles de la République et laïcité'
WHERE nom = 'Valeurs de la République';

-- Vérification des modifications
SELECT id, nom, description FROM public.categories ORDER BY ordre;
