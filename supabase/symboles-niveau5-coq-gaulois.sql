-- =====================================================
-- SYMBOLES DE LA FRANCE - NIVEAU 5 : LE COQ GAULOIS
-- 10 questions avec 4 réponses chacune
-- Niveau : 5 (difficulte = 5)
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

  -- Vérifier si des questions niveau 5 existent déjà
  IF EXISTS (SELECT 1 FROM public.questions WHERE categorie_id = cat_id AND difficulte = 5) THEN
    RAISE NOTICE 'Des questions niveau 5 existent déjà. Utilisez le script de suppression d''abord.';
    RETURN;
  END IF;

  -- ========== QUESTION 1 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Pourquoi le coq est-il associé à la France ?',
    'qcm',
    'Le mot latin "gallus" signifie à la fois "coq" et "gaulois". Ce jeu de mots a fait du coq l''emblème des Gaulois, puis de la France.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le mot latin "gallus" signifie coq et gaulois', true, 1),
    (q_id, 'Parce que la France élève beaucoup de coqs', false, 2),
    (q_id, 'C''était l''animal préféré de Louis XIV', false, 3),
    (q_id, 'C''est le symbole du christianisme', false, 4);

  -- ========== QUESTION 2 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Où peut-on voir le coq gaulois comme symbole officiel ?',
    'qcm',
    'Le coq gaulois figure sur la grille du Palais de l''Élysée, résidence du Président de la République. Il est aussi présent sur les maillots des équipes de France.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Sur la grille du Palais de l''Élysée', true, 1),
    (q_id, 'Sur le drapeau français', false, 2),
    (q_id, 'Sur les billets de banque', false, 3),
    (q_id, 'Sur le passeport français', false, 4);

  -- ========== QUESTION 3 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'À quelle époque le coq gaulois est-il devenu un symbole de la France ?',
    'qcm',
    'Le coq est associé à la Gaule depuis l''Antiquité romaine, mais il est devenu un véritable symbole national pendant la Révolution française.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Depuis l''Antiquité romaine', true, 1),
    (q_id, 'Depuis le règne de Charlemagne', false, 2),
    (q_id, 'Depuis Napoléon', false, 3),
    (q_id, 'Depuis la Ve République', false, 4);

  -- ========== QUESTION 4 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle qualité le coq gaulois symbolise-t-il principalement ?',
    'qcm',
    'Le coq symbolise la fierté, le courage et la vigilance. Son chant au lever du soleil représente aussi la lumière triomphant des ténèbres.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La fierté et le courage', true, 1),
    (q_id, 'La richesse et le pouvoir', false, 2),
    (q_id, 'La discrétion et la modestie', false, 3),
    (q_id, 'La paix et la tranquillité', false, 4);

  -- ========== QUESTION 5 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Sur quel monument parisien célèbre trouve-t-on un coq gaulois ?',
    'qcm',
    'Un coq gaulois doré trône au sommet de la flèche de la cathédrale Notre-Dame de Paris, servant de girouette et contenant des reliques.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La cathédrale Notre-Dame de Paris', true, 1),
    (q_id, 'La Tour Eiffel', false, 2),
    (q_id, 'L''Arc de Triomphe', false, 3),
    (q_id, 'Le Panthéon', false, 4);

  -- ========== QUESTION 6 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel roi de France a utilisé le coq comme emblème personnel ?',
    'qcm',
    'François Ier a adopté le coq comme emblème royal au XVIe siècle. Il apparaissait sur ses armoiries et ses résidences.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'François Ier', true, 1),
    (q_id, 'Louis XIV', false, 2),
    (q_id, 'Henri IV', false, 3),
    (q_id, 'Charlemagne', false, 4);

  -- ========== QUESTION 7 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Le coq gaulois est l''emblème de quelles équipes sportives françaises ?',
    'qcm',
    'Le coq gaulois est l''emblème des équipes de France de football, rugby, handball et de nombreux autres sports. Il figure sur tous les maillots.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Les équipes de France de tous les sports', true, 1),
    (q_id, 'Uniquement l''équipe de football', false, 2),
    (q_id, 'Uniquement les sports olympiques', false, 3),
    (q_id, 'Aucune équipe sportive', false, 4);

  -- ========== QUESTION 8 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle caractéristique du coq le rend symbolique pour la France ?',
    'qcm',
    'Le coq chante à l''aube pour annoncer le lever du soleil. Ce comportement symbolise la vigilance et l''éveil, qualités attribuées au peuple français.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Son chant à l''aube symbolisant la vigilance', true, 1),
    (q_id, 'Sa capacité à voler', false, 2),
    (q_id, 'Sa couleur bleue', false, 3),
    (q_id, 'Sa taille imposante', false, 4);

  -- ========== QUESTION 9 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Pendant quelle période le coq a-t-il été remplacé comme symbole français ?',
    'qcm',
    'Napoléon Ier a remplacé le coq par l''aigle impérial en 1804, jugeant le coq insuffisamment noble. Le coq est revenu après sa chute.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Sous Napoléon Ier (l''aigle l''a remplacé)', true, 1),
    (q_id, 'Pendant la Révolution française', false, 2),
    (q_id, 'Sous Louis XIV', false, 3),
    (q_id, 'Il n''a jamais été remplacé', false, 4);

  -- ========== QUESTION 10 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Le coq gaulois est-il un symbole officiel de la République française ?',
    'qcm',
    'Le coq gaulois n''est pas un symbole officiel inscrit dans la Constitution (contrairement au drapeau ou à l''hymne), mais il reste un emblème national très populaire.',
    5,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, c''est un symbole populaire mais pas officiel', true, 1),
    (q_id, 'Oui, il est dans la Constitution', false, 2),
    (q_id, 'Oui, depuis 1958', false, 3),
    (q_id, 'Oui, depuis la Révolution', false, 4);

  RAISE NOTICE '✅ Les 10 questions du niveau 5 "Le coq gaulois" ont été créées avec succès !';
END $$;
