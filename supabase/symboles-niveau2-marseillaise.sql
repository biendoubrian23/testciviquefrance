-- =====================================================
-- SYMBOLES DE LA FRANCE - NIVEAU 2 : LA MARSEILLAISE
-- 10 questions avec 4 réponses chacune
-- Niveau : 2 (difficulte = 2)
-- =====================================================

DO $$
DECLARE
  cat_id UUID;
  q_id UUID;
BEGIN
  -- Récupérer l'ID de la catégorie
  SELECT id INTO cat_id FROM public.categories WHERE nom = 'Symboles de la France';
  
  IF cat_id IS NULL THEN
    RAISE EXCEPTION 'Catégorie "Symboles de la France" non trouvée';
  END IF;

  -- Vérifier si des questions niveau 2 existent déjà
  IF EXISTS (SELECT 1 FROM public.questions WHERE categorie_id = cat_id AND difficulte = 2) THEN
    RAISE NOTICE 'Des questions niveau 2 existent déjà. Supprimez-les d''abord avec delete-symboles-niveaux-123.sql';
    RETURN;
  END IF;

  -- ========== QUESTION 1 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Qui a composé La Marseillaise ?',
    'qcm',
    'La Marseillaise a été composée par Claude Joseph Rouget de Lisle, officier français du génie, dans la nuit du 25 au 26 avril 1792 à Strasbourg.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Rouget de Lisle', true, 1),
    (q_id, 'Jean-Jacques Rousseau', false, 2),
    (q_id, 'Voltaire', false, 3),
    (q_id, 'Hector Berlioz', false, 4);

  -- ========== QUESTION 2 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'En quelle année La Marseillaise a-t-elle été composée ?',
    'qcm',
    'La Marseillaise a été composée en 1792, au début des guerres révolutionnaires, pour motiver les troupes françaises face aux armées européennes.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '1792', true, 1),
    (q_id, '1789', false, 2),
    (q_id, '1804', false, 3),
    (q_id, '1815', false, 4);

  -- ========== QUESTION 3 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel était le titre original de La Marseillaise ?',
    'qcm',
    'Le titre original était "Chant de guerre pour l''Armée du Rhin". Elle fut renommée "La Marseillaise" car les fédérés marseillais la chantaient en entrant dans Paris.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Chant de guerre pour l''Armée du Rhin', true, 1),
    (q_id, 'Hymne à la Liberté', false, 2),
    (q_id, 'Chant du Départ', false, 3),
    (q_id, 'La Parisienne', false, 4);

  -- ========== QUESTION 4 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Dans quelle ville La Marseillaise a-t-elle été composée ?',
    'qcm',
    'Contrairement à son nom, La Marseillaise a été composée à Strasbourg. Son nom vient des fédérés de Marseille qui l''ont popularisée à Paris.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Strasbourg', true, 1),
    (q_id, 'Marseille', false, 2),
    (q_id, 'Paris', false, 3),
    (q_id, 'Lyon', false, 4);

  -- ========== QUESTION 5 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'En quelle année La Marseillaise est-elle devenue l''hymne national français pour la première fois ?',
    'qcm',
    'La Marseillaise est devenue hymne national le 14 juillet 1795 sous la Convention. Elle a ensuite été interdite puis rétablie plusieurs fois avant d''être confirmée en 1879.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '1795', true, 1),
    (q_id, '1792', false, 2),
    (q_id, '1848', false, 3),
    (q_id, '1870', false, 4);

  -- ========== QUESTION 6 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel est le premier vers de La Marseillaise ?',
    'qcm',
    '"Allons enfants de la Patrie" est le premier vers célèbre de La Marseillaise, appelant les citoyens à défendre la nation.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Allons enfants de la Patrie', true, 1),
    (q_id, 'Aux armes citoyens', false, 2),
    (q_id, 'Liberté, Égalité, Fraternité', false, 3),
    (q_id, 'Marchons, marchons', false, 4);

  -- ========== QUESTION 7 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Combien de couplets comporte La Marseillaise dans sa version complète ?',
    'qcm',
    'La Marseillaise comporte 7 couplets dans sa version complète, mais seul le premier couplet et le refrain sont généralement chantés lors des cérémonies officielles.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '7 couplets', true, 1),
    (q_id, '3 couplets', false, 2),
    (q_id, '5 couplets', false, 3),
    (q_id, '10 couplets', false, 4);

  -- ========== QUESTION 8 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel article de la Constitution de 1958 désigne La Marseillaise comme hymne national ?',
    'qcm',
    'L''article 2 de la Constitution définit les symboles de la République : "L''hymne national est La Marseillaise", aux côtés du drapeau, de la devise et de la langue.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Article 2', true, 1),
    (q_id, 'Article 1', false, 2),
    (q_id, 'Article 3', false, 3),
    (q_id, 'Article 5', false, 4);

  -- ========== QUESTION 9 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle phrase célèbre se trouve dans le refrain de La Marseillaise ?',
    'qcm',
    '"Aux armes, citoyens !" est l''appel emblématique du refrain, suivi de "Formez vos bataillons ! Marchons, marchons !"',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Aux armes, citoyens !', true, 1),
    (q_id, 'Vive la France !', false, 2),
    (q_id, 'Liberté ou la mort !', false, 3),
    (q_id, 'Gloire à la République !', false, 4);

  -- ========== QUESTION 10 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Depuis quelle année La Marseillaise doit-elle être enseignée dans les écoles françaises ?',
    'qcm',
    'Depuis 2005, la loi Fillon impose l''apprentissage de La Marseillaise à l''école primaire, afin de transmettre les valeurs républicaines aux jeunes générations.',
    2,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '2005', true, 1),
    (q_id, '1958', false, 2),
    (q_id, '1989', false, 3),
    (q_id, '2015', false, 4);

  RAISE NOTICE '✅ Les 10 questions du niveau 2 "La Marseillaise" ont été créées avec succès !';
END $$;
