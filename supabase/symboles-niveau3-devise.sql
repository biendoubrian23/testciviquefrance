-- =====================================================
-- SYMBOLES DE LA FRANCE - NIVEAU 3 : LA DEVISE RÉPUBLICAINE
-- 10 questions avec 4 réponses chacune
-- Niveau : 3 (difficulte = 3)
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

  -- Vérifier si des questions niveau 3 existent déjà
  IF EXISTS (SELECT 1 FROM public.questions WHERE categorie_id = cat_id AND difficulte = 3) THEN
    RAISE NOTICE 'Des questions niveau 3 existent déjà. Supprimez-les d''abord avec delete-symboles-niveaux-123.sql';
    RETURN;
  END IF;

  -- ========== QUESTION 1 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle est la devise de la République française ?',
    'qcm',
    'La devise de la France est "Liberté, Égalité, Fraternité". Elle est inscrite dans la Constitution et figure sur les bâtiments publics et les documents officiels.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Liberté, Égalité, Fraternité', true, 1),
    (q_id, 'Liberté, Justice, Solidarité', false, 2),
    (q_id, 'Unité, Force, Progrès', false, 3),
    (q_id, 'Honneur, Patrie, Valeur', false, 4);

  -- ========== QUESTION 2 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'À quelle période historique la devise "Liberté, Égalité, Fraternité" est-elle apparue ?',
    'qcm',
    'La devise est apparue pendant la Révolution française (1789). Elle a été adoptée comme devise officielle sous la IIe République en 1848.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La Révolution française', true, 1),
    (q_id, 'Le règne de Louis XIV', false, 2),
    (q_id, 'Le Premier Empire', false, 3),
    (q_id, 'La Renaissance', false, 4);

  -- ========== QUESTION 3 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Où peut-on lire la devise de la République française ?',
    'qcm',
    'La devise figure sur les frontons des bâtiments publics (mairies, écoles, préfectures), sur les pièces de monnaie et sur de nombreux documents officiels.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Sur les bâtiments publics et les pièces de monnaie', true, 1),
    (q_id, 'Uniquement sur le drapeau', false, 2),
    (q_id, 'Seulement dans la Constitution', false, 3),
    (q_id, 'Sur les billets de banque uniquement', false, 4);

  -- ========== QUESTION 4 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que signifie le mot "Liberté" dans la devise française ?',
    'qcm',
    'La Liberté garantit les droits fondamentaux : liberté d''expression, de pensée, de religion, de circulation. Elle est le premier pilier des droits de l''Homme.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit d''agir, de penser et de s''exprimer librement', true, 1),
    (q_id, 'Le droit de ne pas payer d''impôts', false, 2),
    (q_id, 'Le droit de faire ce que l''on veut sans limite', false, 3),
    (q_id, 'La liberté de ne pas respecter les lois', false, 4);

  -- ========== QUESTION 5 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que signifie le mot "Égalité" dans la devise française ?',
    'qcm',
    'L''Égalité signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction d''origine, de race ou de religion.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Tous les citoyens ont les mêmes droits devant la loi', true, 1),
    (q_id, 'Tout le monde gagne le même salaire', false, 2),
    (q_id, 'Tous les Français sont identiques', false, 3),
    (q_id, 'Chacun possède les mêmes biens', false, 4);

  -- ========== QUESTION 6 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que signifie le mot "Fraternité" dans la devise française ?',
    'qcm',
    'La Fraternité exprime la solidarité entre les citoyens, l''entraide et le vivre-ensemble. Elle appelle à considérer tous les membres de la société comme des frères.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La solidarité et l''entraide entre citoyens', true, 1),
    (q_id, 'Les liens familiaux uniquement', false, 2),
    (q_id, 'L''appartenance à une fraternité religieuse', false, 3),
    (q_id, 'L''obligation d''avoir des frères et sœurs', false, 4);

  -- ========== QUESTION 7 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel article de la Constitution de 1958 mentionne la devise de la République ?',
    'qcm',
    'L''article 2 de la Constitution définit les symboles de la République française, dont la devise "Liberté, Égalité, Fraternité".',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Article 2', true, 1),
    (q_id, 'Article 1', false, 2),
    (q_id, 'Article 5', false, 3),
    (q_id, 'Préambule', false, 4);

  -- ========== QUESTION 8 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'En quelle année la devise "Liberté, Égalité, Fraternité" est-elle devenue officiellement la devise de la République ?',
    'qcm',
    'Bien qu''utilisée dès 1789, la devise a été officiellement adoptée sous la IIe République en 1848, puis confirmée par les Républiques suivantes.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '1848', true, 1),
    (q_id, '1789', false, 2),
    (q_id, '1870', false, 3),
    (q_id, '1958', false, 4);

  -- ========== QUESTION 9 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel célèbre document de 1789 proclame que "Les hommes naissent et demeurent libres et égaux en droits" ?',
    'qcm',
    'La Déclaration des droits de l''homme et du citoyen du 26 août 1789 pose les fondements de la devise républicaine avec son article premier.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La Déclaration des droits de l''homme et du citoyen', true, 1),
    (q_id, 'La Constitution', false, 2),
    (q_id, 'Le Code civil', false, 3),
    (q_id, 'Les cahiers de doléances', false, 4);

  -- ========== QUESTION 10 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'La devise "Liberté, Égalité, Fraternité" est associée à quel type de régime politique ?',
    'qcm',
    'La devise est le symbole de la République française. Elle incarne les valeurs démocratiques et républicaines qui fondent le pacte social français.',
    3,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La République', true, 1),
    (q_id, 'La Monarchie', false, 2),
    (q_id, 'L''Empire', false, 3),
    (q_id, 'La Dictature', false, 4);

  RAISE NOTICE '✅ Les 10 questions du niveau 3 "La devise républicaine" ont été créées avec succès !';
END $$;
