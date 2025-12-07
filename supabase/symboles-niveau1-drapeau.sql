-- =====================================================
-- SYMBOLES DE LA FRANCE - NIVEAU 1 : LE DRAPEAU TRICOLORE
-- 10 questions avec 4 réponses chacune
-- Niveau : 1 (difficulte = 1)
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

  -- Vérifier si des questions niveau 1 existent déjà
  IF EXISTS (SELECT 1 FROM public.questions WHERE categorie_id = cat_id AND difficulte = 1) THEN
    RAISE NOTICE 'Des questions niveau 1 existent déjà. Supprimez-les d''abord avec delete-symboles-niveaux-123.sql';
    RETURN;
  END IF;

  -- ========== QUESTION 1 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelles sont les trois couleurs du drapeau français, de gauche à droite ?',
    'qcm',
    'Le drapeau français est composé de trois bandes verticales de largeur égale : bleu côté mât, blanc au centre, rouge à l''extérieur. Ces couleurs sont associées à la Révolution française.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Bleu, blanc, rouge', true, 1),
    (q_id, 'Rouge, blanc, bleu', false, 2),
    (q_id, 'Blanc, bleu, rouge', false, 3),
    (q_id, 'Bleu, rouge, blanc', false, 4);

  -- ========== QUESTION 2 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'En quelle année le drapeau tricolore est-il devenu l''emblème national de la France ?',
    'qcm',
    'Le drapeau tricolore est devenu l''emblème national en 1794, sous la Convention. Il a été définitivement adopté comme drapeau national par la Constitution de 1958.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '1794', true, 1),
    (q_id, '1789', false, 2),
    (q_id, '1815', false, 3),
    (q_id, '1848', false, 4);

  -- ========== QUESTION 3 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que symbolise la couleur bleue du drapeau français ?',
    'qcm',
    'Le bleu est traditionnellement associé à la ville de Paris et à la couleur de Saint Martin, patron de la France. Il représente aussi le peuple et la bourgeoisie parisienne.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Paris et le peuple', true, 1),
    (q_id, 'La mer et les océans', false, 2),
    (q_id, 'Le ciel et la liberté', false, 3),
    (q_id, 'La noblesse', false, 4);

  -- ========== QUESTION 4 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que symbolise la couleur blanche du drapeau français ?',
    'qcm',
    'Le blanc était la couleur du roi de France et de la monarchie. Il représente aussi la nation et symbolise l''unité entre le roi et le peuple au début de la Révolution.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La monarchie et la nation', true, 1),
    (q_id, 'La paix', false, 2),
    (q_id, 'La pureté de l''âme', false, 3),
    (q_id, 'Les nuages', false, 4);

  -- ========== QUESTION 5 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que symbolise la couleur rouge du drapeau français ?',
    'qcm',
    'Le rouge est associé à la ville de Paris et représente le sang versé pour la liberté. C''était aussi la couleur de Saint Denis, autre patron de Paris.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Paris et le sang versé pour la liberté', true, 1),
    (q_id, 'L''amour de la patrie', false, 2),
    (q_id, 'Le feu et la passion', false, 3),
    (q_id, 'La révolution industrielle', false, 4);

  -- ========== QUESTION 6 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Comment sont disposées les bandes du drapeau français ?',
    'qcm',
    'Le drapeau français est composé de trois bandes verticales de largeur égale. Cette disposition le distingue de nombreux autres drapeaux tricolores à bandes horizontales.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Verticalement', true, 1),
    (q_id, 'Horizontalement', false, 2),
    (q_id, 'En diagonale', false, 3),
    (q_id, 'En triangle', false, 4);

  -- ========== QUESTION 7 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Où le drapeau français doit-il obligatoirement être présent ?',
    'qcm',
    'Le drapeau français doit être présent sur tous les bâtiments publics (mairies, préfectures, écoles...). Il est également hissé lors des cérémonies officielles.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Sur les bâtiments publics', true, 1),
    (q_id, 'Uniquement à l''Élysée', false, 2),
    (q_id, 'Dans tous les foyers français', false, 3),
    (q_id, 'Seulement le 14 juillet', false, 4);

  -- ========== QUESTION 8 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel article de la Constitution de 1958 définit le drapeau tricolore comme emblème national ?',
    'qcm',
    'L''article 2 de la Constitution de 1958 stipule : "L''emblème national est le drapeau tricolore, bleu, blanc, rouge." Il définit aussi la langue, la devise et l''hymne.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Article 2', true, 1),
    (q_id, 'Article 1', false, 2),
    (q_id, 'Article 5', false, 3),
    (q_id, 'Article 10', false, 4);

  -- ========== QUESTION 9 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'À quelle période de l''histoire française le drapeau blanc a-t-il remplacé le tricolore ?',
    'qcm',
    'Pendant la Restauration (1814-1830), le drapeau blanc de la monarchie a remplacé le tricolore. Louis-Philippe rétablira le drapeau tricolore en 1830.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La Restauration (1814-1830)', true, 1),
    (q_id, 'Le Second Empire', false, 2),
    (q_id, 'La Commune de Paris', false, 3),
    (q_id, 'Jamais, il n''a jamais été remplacé', false, 4);

  -- ========== QUESTION 10 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Qui a contribué à créer la cocarde tricolore qui a inspiré le drapeau ?',
    'qcm',
    'La cocarde tricolore a été créée en juillet 1789. Lafayette aurait ajouté le blanc royal aux couleurs de Paris (bleu et rouge) pour symboliser l''union du roi et du peuple.',
    1,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Lafayette', true, 1),
    (q_id, 'Napoléon Bonaparte', false, 2),
    (q_id, 'Louis XVI', false, 3),
    (q_id, 'Robespierre', false, 4);

  RAISE NOTICE 'Les 10 questions du niveau 1 "Le drapeau tricolore" ont été créées avec succès !';
END $$;
