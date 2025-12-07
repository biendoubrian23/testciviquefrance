-- =====================================================
-- SUPPRESSION DES QUESTIONS - NIVEAUX 1, 2, 3
-- SYMBOLES DE LA FRANCE
-- ⚠️ ATTENTION: Ce script supprime les données !
-- =====================================================

DO $$
DECLARE
  cat_id UUID;
  deleted_count INTEGER;
BEGIN
  -- Récupérer l'ID de la catégorie
  SELECT id INTO cat_id FROM public.categories WHERE nom = 'Symboles de la France';
  
  IF cat_id IS NULL THEN
    RAISE NOTICE 'Catégorie "Symboles de la France" non trouvée';
    RETURN;
  END IF;

  -- 1. Supprimer d'abord les RESULTATS liés aux réponses des questions
  DELETE FROM public.resultats 
  WHERE reponse_donnee IN (
    SELECT r.id FROM public.reponses r
    JOIN public.questions q ON r.question_id = q.id
    WHERE q.categorie_id = cat_id 
    AND q.difficulte IN (1, 2, 3)
  );
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RAISE NOTICE 'Résultats supprimés: %', deleted_count;

  -- 2. Supprimer les REPONSES liées aux questions des niveaux 1, 2, 3
  DELETE FROM public.reponses 
  WHERE question_id IN (
    SELECT id FROM public.questions 
    WHERE categorie_id = cat_id 
    AND difficulte IN (1, 2, 3)
  );
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RAISE NOTICE 'Réponses supprimées: %', deleted_count;

  -- 3. Supprimer les QUESTIONS des niveaux 1, 2, 3
  DELETE FROM public.questions 
  WHERE categorie_id = cat_id 
  AND difficulte IN (1, 2, 3);
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RAISE NOTICE 'Questions supprimées: %', deleted_count;

  RAISE NOTICE '✅ Nettoyage terminé pour les niveaux 1, 2 et 3 de "Symboles de la France"';
END $$;
