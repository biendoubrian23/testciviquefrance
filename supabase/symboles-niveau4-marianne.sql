-- =====================================================
-- SYMBOLES DE LA FRANCE - NIVEAU 4 : MARIANNE
-- 10 questions avec 4 réponses chacune
-- Niveau : 4 (difficulte = 4)
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

  -- Vérifier si des questions niveau 4 existent déjà
  IF EXISTS (SELECT 1 FROM public.questions WHERE categorie_id = cat_id AND difficulte = 4) THEN
    RAISE NOTICE 'Des questions niveau 4 existent déjà. Utilisez le script de suppression d''abord.';
    RETURN;
  END IF;

  -- ========== QUESTION 1 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Qui représente Marianne ?',
    'qcm',
    'Marianne est la figure allégorique de la République française. Elle incarne les valeurs républicaines : Liberté, Égalité, Fraternité. Elle représente la Nation française et la République.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La République française', true, 1),
    (q_id, 'Une reine de France', false, 2),
    (q_id, 'Une sainte catholique', false, 3),
    (q_id, 'La ville de Paris', false, 4);

  -- ========== QUESTION 2 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quel couvre-chef porte traditionnellement Marianne ?',
    'qcm',
    'Marianne porte le bonnet phrygien, symbole de liberté hérité de l''Antiquité romaine. Ce bonnet était porté par les esclaves affranchis dans la Rome antique.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le bonnet phrygien', true, 1),
    (q_id, 'Une couronne royale', false, 2),
    (q_id, 'Un béret basque', false, 3),
    (q_id, 'Un chapeau haut-de-forme', false, 4);

  -- ========== QUESTION 3 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Où peut-on voir un buste de Marianne ?',
    'qcm',
    'Le buste de Marianne est présent dans toutes les mairies de France. C''est un symbole obligatoire de la République dans les bâtiments officiels.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Dans les mairies', true, 1),
    (q_id, 'Uniquement à l''Élysée', false, 2),
    (q_id, 'Dans les églises', false, 3),
    (q_id, 'Dans les gares SNCF', false, 4);

  -- ========== QUESTION 4 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Depuis quand Marianne est-elle le symbole de la République française ?',
    'qcm',
    'Marianne est devenue le symbole de la République dès la Révolution française en 1792. Elle représente la liberté et la raison face à la monarchie.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Depuis la Révolution française (1792)', true, 1),
    (q_id, 'Depuis Napoléon (1804)', false, 2),
    (q_id, 'Depuis la Ve République (1958)', false, 3),
    (q_id, 'Depuis le Moyen Âge', false, 4);

  -- ========== QUESTION 5 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Pourquoi le prénom "Marianne" a-t-il été choisi ?',
    'qcm',
    'Marie et Anne étaient les prénoms féminins les plus répandus en France au XVIIIe siècle. Marianne représentait ainsi le peuple français dans sa diversité.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'C''étaient les prénoms les plus courants du peuple', true, 1),
    (q_id, 'C''était le nom d''une révolutionnaire célèbre', false, 2),
    (q_id, 'C''était le nom de la femme de Louis XVI', false, 3),
    (q_id, 'C''est un acronyme républicain', false, 4);

  -- ========== QUESTION 6 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle célèbre peinture représente Marianne guidant le peuple ?',
    'qcm',
    '"La Liberté guidant le peuple" d''Eugène Delacroix (1830) est l''une des représentations les plus célèbres de Marianne, commémorant les Trois Glorieuses.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La Liberté guidant le peuple de Delacroix', true, 1),
    (q_id, 'La Joconde de Léonard de Vinci', false, 2),
    (q_id, 'Le Sacre de Napoléon de David', false, 3),
    (q_id, 'Les Nymphéas de Monet', false, 4);

  -- ========== QUESTION 7 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Sur quel support officiel peut-on voir Marianne ?',
    'qcm',
    'Marianne figure sur les timbres-poste français depuis 1944. Son visage apparaît également sur les pièces de monnaie et les documents officiels.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Les timbres-poste', true, 1),
    (q_id, 'Les billets de train', false, 2),
    (q_id, 'Les tickets de métro', false, 3),
    (q_id, 'Les cartes de fidélité', false, 4);

  -- ========== QUESTION 8 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle actrice française a servi de modèle pour le buste de Marianne en 1970 ?',
    'qcm',
    'Brigitte Bardot a été le modèle officiel de Marianne en 1970. Depuis, plusieurs personnalités ont prêté leurs traits : Catherine Deneuve, Laetitia Casta, etc.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Brigitte Bardot', true, 1),
    (q_id, 'Édith Piaf', false, 2),
    (q_id, 'Simone Signoret', false, 3),
    (q_id, 'Jeanne Moreau', false, 4);

  -- ========== QUESTION 9 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Que symbolise le bonnet phrygien porté par Marianne ?',
    'qcm',
    'Le bonnet phrygien symbolise la liberté. Dans la Rome antique, il était remis aux esclaves affranchis comme signe de leur libération.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La liberté', true, 1),
    (q_id, 'La royauté', false, 2),
    (q_id, 'La religion', false, 3),
    (q_id, 'La richesse', false, 4);

  -- ========== QUESTION 10 ==========
  INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, is_premium)
  VALUES (
    cat_id,
    'Quelle couleur est traditionnellement associée au bonnet phrygien de Marianne ?',
    'qcm',
    'Le bonnet phrygien de Marianne est traditionnellement rouge, couleur révolutionnaire symbolisant le sang versé pour la liberté et l''ardeur républicaine.',
    4,
    false
  ) RETURNING id INTO q_id;

  INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Rouge', true, 1),
    (q_id, 'Bleu', false, 2),
    (q_id, 'Blanc', false, 3),
    (q_id, 'Vert', false, 4);

  RAISE NOTICE '✅ Les 10 questions du niveau 4 "Marianne" ont été créées avec succès !';
END $$;
