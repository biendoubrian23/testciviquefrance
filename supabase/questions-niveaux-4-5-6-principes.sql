-- ============================================================
-- QUESTIONS POUR "PRINCIPES ET VALEURS DE LA RÉPUBLIQUE"
-- Niveaux 4, 5 et 6
-- ============================================================
-- Niveau 4 : La laïcité - Application (10 questions)
-- Niveau 5 : Liberté et ses formes (10 questions)
-- Niveau 6 : Égalité des droits (10 questions)
-- ============================================================
-- COLONNES: question (pas texte), difficulte (pas niveau)
-- ============================================================

-- Récupérer l'ID de la catégorie "Principes et valeurs de la République"
DO $$
DECLARE
    cat_id UUID;
    q_id UUID;
BEGIN
    -- Récupérer l'ID de la catégorie
    SELECT id INTO cat_id FROM categories WHERE nom = 'Principes et valeurs de la République';
    
    IF cat_id IS NULL THEN
        RAISE EXCEPTION 'Catégorie "Principes et valeurs de la République" non trouvée';
    END IF;

    -- ============================================================
    -- NIVEAU 4 : LA LAÏCITÉ - APPLICATION (10 questions)
    -- ============================================================
    
    -- Question 4.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Dans une administration publique, un agent peut-il porter un signe religieux visible ?',
        'Les agents du service public sont soumis au principe de neutralité. Ils ne peuvent pas manifester leurs convictions religieuses dans l''exercice de leurs fonctions.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, c''est un droit fondamental', false, 1),
    (q_id, 'Non, les agents publics doivent respecter la neutralité', true, 2),
    (q_id, 'Seulement les petits signes discrets', false, 3),
    (q_id, 'Uniquement le vendredi', false, 4);

    -- Question 4.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Un usager d''un service public peut-il exprimer ses convictions religieuses ?',
        'Les usagers ont le droit d''exprimer leurs convictions religieuses dans la limite du respect de l''ordre public. Ils doivent s''abstenir de toute forme de prosélytisme.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, jamais', false, 1),
    (q_id, 'Oui, dans la limite du respect de l''ordre public', true, 2),
    (q_id, 'Seulement dans les hôpitaux', false, 3),
    (q_id, 'Uniquement à l''oral, pas par des signes', false, 4);

    -- Question 4.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Qu''interdit la Charte de la laïcité des usagers des services publics ?',
        'Le principe de laïcité interdit à quiconque de se prévaloir de ses croyances religieuses pour s''affranchir des règles communes.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'De prier en silence', false, 1),
    (q_id, 'D''avoir des convictions religieuses', false, 2),
    (q_id, 'De se soustraire aux règles communes au nom de sa religion', true, 3),
    (q_id, 'De discuter de religion avec d''autres usagers', false, 4);

    -- Question 4.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Dans une entreprise privée, la liberté de manifester sa religion peut-elle être restreinte ?',
        'Dans le secteur privé, la liberté de manifester sa religion peut être restreinte pour des impératifs d''hygiène, de sécurité ou si son exercice empêche le bon déroulement de l''activité.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, jamais dans le privé', false, 1),
    (q_id, 'Oui, pour des raisons d''hygiène ou de sécurité', true, 2),
    (q_id, 'Uniquement pour les cadres', false, 3),
    (q_id, 'Seulement si le salarié est en CDD', false, 4);

    -- Question 4.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'À l''école publique, que dit la Charte de la laïcité concernant le choix des enseignements ?',
        'La laïcité à l''école impose qu''il est interdit de choisir les enseignements en fonction de ses croyances religieuses.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Les parents peuvent refuser certains cours pour raisons religieuses', false, 1),
    (q_id, 'Il est interdit de choisir les enseignements selon ses croyances', true, 2),
    (q_id, 'Les élèves peuvent être dispensés de tous les cours', false, 3),
    (q_id, 'Seuls les cours de sport peuvent être refusés', false, 4);

    -- Question 4.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Quel est le rôle de l''État envers les lieux de culte ?',
        'L''État, dans sa neutralité, protège et sécurise les lieux de culte et lutte contre les actes antireligieux.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Les financer entièrement', false, 1),
    (q_id, 'Les interdire progressivement', false, 2),
    (q_id, 'Les protéger et lutter contre les actes antireligieux', true, 3),
    (q_id, 'Les contrôler et surveiller les prêches', false, 4);

    -- Question 4.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'La laïcité garantit-elle la liberté religieuse dans les prisons ?',
        'L''État est garant de la liberté religieuse y compris dans les lieux de privation de liberté.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, en prison toute pratique religieuse est interdite', false, 1),
    (q_id, 'Oui, l''État garantit la liberté religieuse même en prison', true, 2),
    (q_id, 'Seulement pour certaines religions', false, 3),
    (q_id, 'Uniquement pendant les fêtes religieuses', false, 4);

    -- Question 4.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Qu''est-ce que le prosélytisme abusif ?',
        'Le prosélytisme abusif est une pression forte sur une personne pour la forcer à croire ou ne pas croire. L''État le punit.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Parler de sa religion à ses amis', false, 1),
    (q_id, 'Une pression forte pour forcer quelqu''un à croire ou ne pas croire', true, 2),
    (q_id, 'Construire un lieu de culte', false, 3),
    (q_id, 'Prier en public', false, 4);

    -- Question 4.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'Pourquoi la laïcité impose-t-elle des règles à l''école publique ?',
        'La laïcité impose des règles à tous les membres de la communauté scolaire afin de protéger la liberté de choix de chaque enfant et préserver le fonctionnement de l''école.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Pour interdire toutes les religions', false, 1),
    (q_id, 'Pour protéger la liberté de choix des enfants', true, 2),
    (q_id, 'Pour favoriser une religion sur les autres', false, 3),
    (q_id, 'Pour simplifier l''administration scolaire', false, 4);

    -- Question 4.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 4, 
        'En France, peut-on être forcé de pratiquer une religion ?',
        'La liberté de conscience inclut le droit de croire, de ne pas croire, de changer de religion. L''État punit la pression forte sur une personne de croire ou de ne pas croire.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, si les parents l''exigent', false, 1),
    (q_id, 'Oui, dans certaines régions', false, 2),
    (q_id, 'Non, c''est puni par la loi', true, 3),
    (q_id, 'Cela dépend de l''âge', false, 4);

    -- ============================================================
    -- NIVEAU 5 : LIBERTÉ ET SES FORMES (10 questions)
    -- ============================================================
    
    -- Question 5.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté de pensée ?',
        'La liberté de pensée est une liberté individuelle qui permet à chaque citoyen d''avoir ses propres opinions et convictions.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de penser ce que l''on veut', true, 1),
    (q_id, 'Le droit de lire des journaux', false, 2),
    (q_id, 'Le droit de voyager librement', false, 3),
    (q_id, 'Le droit de travailler', false, 4);

    -- Question 5.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté d''expression ?',
        'La liberté d''expression permet d''exprimer librement ses opinions. Elle est encadrée par la loi (interdiction de la diffamation, de l''incitation à la haine, etc.).')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de s''exprimer sans aucune limite', false, 1),
    (q_id, 'Le droit d''exprimer ses opinions dans le respect de la loi', true, 2),
    (q_id, 'Uniquement le droit de parler en public', false, 3),
    (q_id, 'Le droit de vote', false, 4);

    -- Question 5.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté de réunion ?',
        'La liberté de réunion est une liberté collective qui permet aux citoyens de se rassembler pacifiquement.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de se rassembler pacifiquement', true, 1),
    (q_id, 'Le droit de travailler en groupe', false, 2),
    (q_id, 'Le droit de créer une entreprise', false, 3),
    (q_id, 'Le droit de voter en groupe', false, 4);

    -- Question 5.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté d''association ?',
        'La liberté d''association permet de créer ou d''adhérer à une association. C''est un droit fondamental en France.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de créer et d''adhérer à une association', true, 1),
    (q_id, 'Le droit de créer une entreprise', false, 2),
    (q_id, 'Le droit d''avoir des amis', false, 3),
    (q_id, 'Le droit de travailler en équipe', false, 4);

    -- Question 5.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'La polygamie est-elle autorisée en France ?',
        'La polygamie est interdite en France. La liberté de mariage n''inclut pas le droit d''être marié à plusieurs personnes en même temps.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, c''est une liberté individuelle', false, 1),
    (q_id, 'Non, elle est interdite', true, 2),
    (q_id, 'Seulement pour les étrangers', false, 3),
    (q_id, 'Seulement dans certaines régions', false, 4);

    -- Question 5.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté de circulation ?',
        'La liberté de circulation permet de se déplacer librement sur le territoire français et de voyager à l''étranger.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de conduire sans permis', false, 1),
    (q_id, 'Le droit de se déplacer librement en France et à l''étranger', true, 2),
    (q_id, 'Le droit d''utiliser les transports gratuits', false, 3),
    (q_id, 'Le droit de stationner n''importe où', false, 4);

    -- Question 5.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que le droit syndical ?',
        'Le droit syndical permet aux salariés de créer ou d''adhérer à un syndicat pour défendre leurs intérêts professionnels.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de créer une entreprise', false, 1),
    (q_id, 'Le droit de créer ou adhérer à un syndicat', true, 2),
    (q_id, 'Le droit de faire grève sans limite', false, 3),
    (q_id, 'Le droit de licencier des employés', false, 4);

    -- Question 5.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'La liberté de conscience inclut-elle le droit de changer de religion ?',
        'La liberté de conscience inclut le droit à l''apostasie (quitter sa religion) et le droit de se convertir à une autre religion.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, on doit garder la religion de ses parents', false, 1),
    (q_id, 'Oui, c''est un droit fondamental', true, 2),
    (q_id, 'Seulement après 18 ans', false, 3),
    (q_id, 'Seulement avec l''accord d''un juge', false, 4);

    -- Question 5.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Qu''est-ce que la liberté de mariage en France ?',
        'La liberté de mariage permet de choisir librement son conjoint, quel que soit son sexe. Le mariage forcé est interdit.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le droit de se marier uniquement avec quelqu''un du sexe opposé', false, 1),
    (q_id, 'Le droit de choisir librement son conjoint', true, 2),
    (q_id, 'Le droit d''être marié par ses parents', false, 3),
    (q_id, 'Le droit de divorcer sans raison', false, 4);

    -- Question 5.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 5, 
        'Le blasphème est-il un délit en France ?',
        'La liberté de conscience inclut le droit au blasphème. En France, critiquer ou se moquer d''une religion n''est pas un délit.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, c''est puni par la loi', false, 1),
    (q_id, 'Seulement pour certaines religions', false, 2),
    (q_id, 'Non, le blasphème n''est pas un délit en France', true, 3),
    (q_id, 'Cela dépend du contexte', false, 4);

    -- ============================================================
    -- NIVEAU 6 : ÉGALITÉ DES DROITS (10 questions)
    -- ============================================================
    
    -- Question 6.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Que signifie "l''égalité devant la loi" ?',
        'L''égalité devant la loi signifie que tous les citoyens sont soumis aux mêmes règles, sans distinction de naissance, d''origine ou de condition sociale.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Que tout le monde a le même salaire', false, 1),
    (q_id, 'Que la loi s''applique de la même façon à tous', true, 2),
    (q_id, 'Que tout le monde doit voter', false, 3),
    (q_id, 'Que tout le monde a le même diplôme', false, 4);

    -- Question 6.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'L''égalité entre les femmes et les hommes est-elle un principe constitutionnel ?',
        'L''égalité entre les femmes et les hommes est un principe fondamental inscrit dans la Constitution française.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, c''est juste une recommandation', false, 1),
    (q_id, 'Oui, c''est inscrit dans la Constitution', true, 2),
    (q_id, 'Seulement pour le travail', false, 3),
    (q_id, 'Cela dépend des régions', false, 4);

    -- Question 6.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Qu''est-ce qu''une discrimination ?',
        'Une discrimination est un traitement inégal fondé sur des critères interdits par la loi (origine, sexe, religion, handicap, etc.).')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Une simple préférence personnelle', false, 1),
    (q_id, 'Un traitement inégal basé sur des critères interdits', true, 2),
    (q_id, 'Une différence de salaire normale', false, 3),
    (q_id, 'Un choix d''embauche justifié', false, 4);

    -- Question 6.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Qu''est-ce que le racisme ?',
        'Le racisme est une discrimination fondée sur l''origine ou la couleur de peau. C''est puni par la loi en France.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Une opinion comme une autre', false, 1),
    (q_id, 'Une discrimination fondée sur l''origine, punie par la loi', true, 2),
    (q_id, 'Une préférence culturelle', false, 3),
    (q_id, 'Une forme de patriotisme', false, 4);

    -- Question 6.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Qu''est-ce que l''antisémitisme ?',
        'L''antisémitisme est la haine envers les personnes juives. C''est une forme de discrimination punie par la loi.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La critique d''une politique gouvernementale', false, 1),
    (q_id, 'La haine envers les personnes juives', true, 2),
    (q_id, 'Une forme de nationalisme', false, 3),
    (q_id, 'Un courant philosophique', false, 4);

    -- Question 6.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Les discriminations fondées sur l''orientation sexuelle sont-elles punies par la loi ?',
        'La haine anti-LGBT est punie par la loi. Les discriminations fondées sur l''orientation sexuelle sont interdites.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, c''est une affaire privée', false, 1),
    (q_id, 'Oui, la loi punit ces discriminations', true, 2),
    (q_id, 'Seulement au travail', false, 3),
    (q_id, 'Seulement pour les fonctionnaires', false, 4);

    -- Question 6.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Que garantit l''égalité des droits ?',
        'L''égalité des droits garantit que chaque personne a les mêmes droits fondamentaux, quel que soit son origine, son sexe, sa religion ou sa condition sociale.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Que tout le monde a le même travail', false, 1),
    (q_id, 'L''accès aux mêmes droits fondamentaux pour tous', true, 2),
    (q_id, 'Que tout le monde paie les mêmes impôts', false, 3),
    (q_id, 'Que tout le monde habite le même quartier', false, 4);

    -- Question 6.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Peut-on refuser un logement à quelqu''un en raison de son origine ?',
        'Refuser un logement en raison de l''origine est une discrimination interdite et punie par la loi.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, le propriétaire est libre de choisir', false, 1),
    (q_id, 'Non, c''est une discrimination interdite', true, 2),
    (q_id, 'Seulement dans le logement social', false, 3),
    (q_id, 'Cela dépend du quartier', false, 4);

    -- Question 6.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'À travail égal, les femmes et les hommes doivent-ils recevoir un salaire égal ?',
        'Le principe "à travail égal, salaire égal" est inscrit dans la loi. Les écarts de salaire non justifiés sont illégaux.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, cela dépend de l''entreprise', false, 1),
    (q_id, 'Oui, c''est un principe inscrit dans la loi', true, 2),
    (q_id, 'Seulement dans le secteur public', false, 3),
    (q_id, 'Seulement pour les CDI', false, 4);

    -- Question 6.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 6, 
        'Comment s''appelle l''institution qui lutte contre les discriminations ?',
        'Le Défenseur des droits est une institution indépendante qui lutte contre les discriminations et défend les droits des citoyens.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le ministre de la Justice', false, 1),
    (q_id, 'Le Défenseur des droits', true, 2),
    (q_id, 'Le Préfet', false, 3),
    (q_id, 'Le maire', false, 4);

    RAISE NOTICE 'Insertion réussie : 30 questions créées (niveaux 4, 5 et 6)';
END $$;

-- ============================================================
-- VÉRIFICATION
-- ============================================================
SELECT 
    difficulte as niveau,
    COUNT(*) as nb_questions
FROM questions 
WHERE categorie_id = (SELECT id FROM categories WHERE nom = 'Principes et valeurs de la République')
  AND difficulte IN (4, 5, 6)
GROUP BY difficulte
ORDER BY difficulte;
