-- ============================================================
-- QUESTIONS POUR "PRINCIPES ET VALEURS DE LA RÉPUBLIQUE"
-- Niveaux 7 et 8
-- ============================================================
-- Niveau 7 : Fraternité et solidarité (10 questions)
-- Niveau 8 : Langue française (10 questions)
-- ============================================================

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
    -- NIVEAU 7 : FRATERNITÉ ET SOLIDARITÉ (10 questions)
    -- ============================================================
    
    -- Question 7.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Que signifie la fraternité dans la devise républicaine ?',
        'La fraternité républicaine est la capacité à voir en autrui un semblable, malgré les différences. C''est une fraternité civique, et non pas ethnique ou religieuse.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Un lien de sang entre citoyens', false, 1),
    (q_id, 'La capacité à voir en autrui un semblable, malgré les différences', true, 2),
    (q_id, 'Une obligation religieuse', false, 3),
    (q_id, 'Un sentiment réservé à sa famille', false, 4);

    -- Question 7.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Qu''est-ce que le principe de solidarité nationale ?',
        'Le principe de solidarité signifie que la Nation assure aux individus libres et égaux en droit une protection collective.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Chacun doit se débrouiller seul', false, 1),
    (q_id, 'La Nation assure une protection aux citoyens', true, 2),
    (q_id, 'Seuls les riches aident les pauvres', false, 3),
    (q_id, 'L''État n''intervient jamais', false, 4);

    -- Question 7.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Pourquoi payer ses impôts est-il un acte de solidarité ?',
        'Remplir ses obligations fiscales est un acte solidaire qui permet de financer les services publics au bénéfice de tous.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Cela finance les services publics pour tous', true, 1),
    (q_id, 'Cela enrichit uniquement l''État', false, 2),
    (q_id, 'C''est une punition pour les riches', false, 3),
    (q_id, 'Cela ne sert à rien', false, 4);

    -- Question 7.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Qu''est-ce que la solidarité intergénérationnelle ?',
        'La solidarité intergénérationnelle est le soutien entre différentes générations, par exemple le système des retraites où les actifs cotisent pour les retraités.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Le soutien entre différentes générations', true, 1),
    (q_id, 'L''aide entre voisins du même âge', false, 2),
    (q_id, 'Un système réservé aux familles riches', false, 3),
    (q_id, 'Une tradition religieuse', false, 4);

    -- Question 7.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Le système des retraites en France est un exemple de quelle forme de solidarité ?',
        'Les retraites sont un exemple de solidarité intergénérationnelle : les actifs cotisent pour financer les pensions des retraités.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Solidarité intergénérationnelle', true, 1),
    (q_id, 'Solidarité régionale', false, 2),
    (q_id, 'Solidarité religieuse', false, 3),
    (q_id, 'Solidarité familiale uniquement', false, 4);

    -- Question 7.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'En cas de danger pour la Nation, que doit faire chaque citoyen ?',
        'Le principe de solidarité exige que chaque citoyen doive défendre la Nation en cas de danger.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Fuir le pays', false, 1),
    (q_id, 'Défendre la Nation', true, 2),
    (q_id, 'Attendre que les autres agissent', false, 3),
    (q_id, 'Ne rien faire', false, 4);

    -- Question 7.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'La fraternité républicaine est-elle basée sur l''origine ethnique ?',
        'La fraternité républicaine est une fraternité civique, et non pas ethnique ou religieuse. Elle unit tous les citoyens quelle que soit leur origine.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, elle est réservée aux Français de souche', false, 1),
    (q_id, 'Non, c''est une fraternité civique pour tous', true, 2),
    (q_id, 'Cela dépend des régions', false, 3),
    (q_id, 'Oui, selon la religion', false, 4);

    -- Question 7.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Comment la solidarité collective se manifeste-t-elle en France ?',
        'La solidarité collective se manifeste par la protection sociale : assurance maladie, allocations familiales, aide au logement, etc.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Par la protection sociale (maladie, allocations, etc.)', true, 1),
    (q_id, 'Par la charité privée uniquement', false, 2),
    (q_id, 'Il n''y a pas de solidarité collective', false, 3),
    (q_id, 'Par les dons aux églises', false, 4);

    -- Question 7.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'Qu''est-ce que les cotisations sociales financent ?',
        'Les cotisations sociales financent la protection sociale : assurance maladie, retraites, allocations chômage, prestations familiales.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La protection sociale (maladie, retraites, chômage)', true, 1),
    (q_id, 'Uniquement les salaires des ministres', false, 2),
    (q_id, 'Les vacances des fonctionnaires', false, 3),
    (q_id, 'Les entreprises privées', false, 4);

    -- Question 7.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 7, 
        'La fraternité implique-t-elle de respecter les différences des autres ?',
        'Oui, la fraternité implique de voir en autrui un semblable malgré les différences. Le respect de la diversité est au cœur de la fraternité républicaine.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, tout le monde doit être identique', false, 1),
    (q_id, 'Oui, respecter autrui malgré les différences', true, 2),
    (q_id, 'Seulement pour les personnes de même religion', false, 3),
    (q_id, 'Cela n''a aucun rapport', false, 4);

    -- ============================================================
    -- NIVEAU 8 : LANGUE FRANÇAISE (10 questions)
    -- ============================================================
    
    -- Question 8.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Quel article de la Constitution affirme que le français est la langue de la République ?',
        'L''article 2 de la Constitution dispose que « La langue de la République est le français ».')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Article 1', false, 1),
    (q_id, 'Article 2', true, 2),
    (q_id, 'Article 5', false, 3),
    (q_id, 'Article 10', false, 4);

    -- Question 8.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Le français est-il la langue officielle de la France ?',
        'Oui, le français est la langue nationale et officielle de la France, inscrite dans la Constitution.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, il n''y a pas de langue officielle', false, 1),
    (q_id, 'Oui, c''est inscrit dans la Constitution', true, 2),
    (q_id, 'Seulement en métropole', false, 3),
    (q_id, 'Le français et l''anglais sont officiels', false, 4);

    -- Question 8.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Combien de personnes parlent français dans le monde environ ?',
        'On estime à environ 321 millions le nombre de personnes francophones dans le monde.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Environ 50 millions', false, 1),
    (q_id, 'Environ 100 millions', false, 2),
    (q_id, 'Environ 321 millions', true, 3),
    (q_id, 'Environ 1 milliard', false, 4);

    -- Question 8.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Quel est le rang du français parmi les langues les plus parlées au monde ?',
        'Le français est la 5e langue mondiale en nombre de locuteurs.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '2e langue mondiale', false, 1),
    (q_id, '5e langue mondiale', true, 2),
    (q_id, '10e langue mondiale', false, 3),
    (q_id, '15e langue mondiale', false, 4);

    -- Question 8.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Qu''est-ce que l''Organisation internationale de la Francophonie (OIF) ?',
        'L''OIF est une organisation qui regroupe les pays et régions où le français est parlé ou enseigné, pour promouvoir la langue française et la coopération.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Une organisation promouvant la langue française dans le monde', true, 1),
    (q_id, 'Une entreprise de traduction', false, 2),
    (q_id, 'Un parti politique français', false, 3),
    (q_id, 'Une école de langues', false, 4);

    -- Question 8.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'La maîtrise du français est-elle importante pour l''intégration en France ?',
        'Oui, la maîtrise du français est essentielle pour l''intégration sociale et professionnelle, l''accès aux services publics et la citoyenneté.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, on peut vivre sans parler français', false, 1),
    (q_id, 'Oui, c''est essentiel pour l''intégration', true, 2),
    (q_id, 'Seulement pour les métiers intellectuels', false, 3),
    (q_id, 'L''anglais suffit', false, 4);

    -- Question 8.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Les étrangers résidant en France ont-ils droit à une formation linguistique ?',
        'Oui, les étrangers bénéficient d''un droit à la formation linguistique pour faciliter leur intégration.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, ils doivent apprendre seuls', false, 1),
    (q_id, 'Oui, c''est un droit pour faciliter l''intégration', true, 2),
    (q_id, 'Seulement pour les réfugiés', false, 3),
    (q_id, 'Uniquement s''ils paient', false, 4);

    -- Question 8.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Dans combien de pays le français est-il langue officielle ou co-officielle ?',
        'Le français est langue officielle ou co-officielle dans 29 pays à travers le monde.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '5 pays', false, 1),
    (q_id, '15 pays', false, 2),
    (q_id, '29 pays', true, 3),
    (q_id, '50 pays', false, 4);

    -- Question 8.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Pourquoi le français est-il important dans l''administration ?',
        'Le français étant la langue officielle, tous les documents administratifs, lois et communications officielles sont rédigés en français.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'C''est la langue des documents officiels et des lois', true, 1),
    (q_id, 'Ce n''est pas obligatoire', false, 2),
    (q_id, 'On peut utiliser n''importe quelle langue', false, 3),
    (q_id, 'L''anglais est aussi accepté', false, 4);

    -- Question 8.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 8, 
        'Les langues régionales sont-elles reconnues en France ?',
        'Oui, les langues régionales (breton, basque, corse, alsacien, etc.) sont reconnues comme patrimoine de la France, mais le français reste la seule langue officielle.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, elles sont interdites', false, 1),
    (q_id, 'Oui, comme patrimoine, mais le français reste la langue officielle', true, 2),
    (q_id, 'Elles sont toutes langues officielles', false, 3),
    (q_id, 'Seulement en Corse', false, 4);

    RAISE NOTICE 'Insertion réussie : 20 questions créées (niveaux 7 et 8)';
END $$;

-- ============================================================
-- VÉRIFICATION
-- ============================================================
SELECT 
    difficulte as niveau,
    COUNT(*) as nb_questions
FROM questions 
WHERE categorie_id = (SELECT id FROM categories WHERE nom = 'Principes et valeurs de la République')
  AND difficulte IN (7, 8)
GROUP BY difficulte
ORDER BY difficulte;
