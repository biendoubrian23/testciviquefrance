-- ============================================================
-- QUESTIONS POUR "PRINCIPES ET VALEURS DE LA RÉPUBLIQUE"
-- Niveaux 9 et 10
-- ============================================================
-- Niveau 9 : Lutte contre les discriminations (10 questions)
-- Niveau 10 : Maître des valeurs (10 questions) - RÉCAPITULATIF
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
    -- NIVEAU 9 : LUTTE CONTRE LES DISCRIMINATIONS (10 questions)
    -- ============================================================
    
    -- Question 9.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Combien de critères de discrimination sont interdits par la loi française ?',
        'La loi française interdit les discriminations fondées sur plus de 25 critères, dont l''origine, le sexe, l''âge, le handicap, l''orientation sexuelle, les opinions politiques, etc.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '5 critères', false, 1),
    (q_id, '10 critères', false, 2),
    (q_id, 'Plus de 25 critères', true, 3),
    (q_id, '3 critères', false, 4);

    -- Question 9.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Qu''est-ce que la discrimination à l''embauche ?',
        'La discrimination à l''embauche consiste à refuser un emploi à une personne en raison de critères interdits (origine, sexe, âge, handicap, etc.) et non de ses compétences.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Choisir le candidat le plus compétent', false, 1),
    (q_id, 'Refuser un emploi pour des critères interdits (origine, sexe, etc.)', true, 2),
    (q_id, 'Exiger un diplôme pour un poste', false, 3),
    (q_id, 'Demander une expérience professionnelle', false, 4);

    -- Question 9.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'L''incitation à la haine raciale est-elle un délit en France ?',
        'Oui, l''incitation à la haine raciale est un délit puni par la loi. Cela inclut les propos, écrits ou comportements incitant à la haine ou à la violence envers un groupe.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, c''est une liberté d''expression', false, 1),
    (q_id, 'Oui, c''est un délit puni par la loi', true, 2),
    (q_id, 'Seulement si c''est violent physiquement', false, 3),
    (q_id, 'Cela dépend du contexte', false, 4);

    -- Question 9.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Qui peut saisir le Défenseur des droits en cas de discrimination ?',
        'Toute personne victime ou témoin de discrimination peut saisir le Défenseur des droits gratuitement, sans avocat.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Uniquement les victimes françaises', false, 1),
    (q_id, 'Toute personne victime ou témoin', true, 2),
    (q_id, 'Seulement les associations', false, 3),
    (q_id, 'Uniquement avec un avocat', false, 4);

    -- Question 9.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Le harcèlement moral au travail est-il une forme de discrimination ?',
        'Oui, le harcèlement moral peut constituer une forme de discrimination et est interdit par la loi. Il porte atteinte à la dignité de la personne.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, ce n''est pas la même chose', false, 1),
    (q_id, 'Oui, c''est interdit et puni par la loi', true, 2),
    (q_id, 'Seulement dans le secteur public', false, 3),
    (q_id, 'C''est toléré entre collègues', false, 4);

    -- Question 9.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'La discrimination fondée sur le handicap est-elle interdite ?',
        'Oui, discriminer une personne en raison de son handicap est interdit par la loi. Les employeurs doivent prendre des mesures pour favoriser l''accès à l''emploi des personnes handicapées.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, l''employeur est libre de choisir', false, 1),
    (q_id, 'Oui, c''est interdit par la loi', true, 2),
    (q_id, 'Seulement pour les handicaps visibles', false, 3),
    (q_id, 'Cela dépend du métier', false, 4);

    -- Question 9.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Qu''est-ce que le testing anti-discrimination ?',
        'Le testing est une méthode pour détecter les discriminations : on envoie des candidatures identiques sauf un critère (origine, nom...) et on compare les réponses.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Une méthode pour détecter les discriminations', true, 1),
    (q_id, 'Un examen médical obligatoire', false, 2),
    (q_id, 'Un test de langue française', false, 3),
    (q_id, 'Un contrôle d''identité', false, 4);

    -- Question 9.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Les propos homophobes sont-ils punis par la loi ?',
        'Oui, les injures et propos homophobes sont punis par la loi française. La haine anti-LGBT est considérée comme une discrimination.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Non, c''est une opinion personnelle', false, 1),
    (q_id, 'Oui, c''est puni par la loi', true, 2),
    (q_id, 'Seulement en public', false, 3),
    (q_id, 'Uniquement sur Internet', false, 4);

    -- Question 9.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Peut-on refuser de louer un logement à une famille avec enfants ?',
        'Non, refuser de louer en raison de la situation familiale est une discrimination interdite par la loi.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Oui, le propriétaire choisit ses locataires', false, 1),
    (q_id, 'Non, c''est une discrimination interdite', true, 2),
    (q_id, 'Seulement pour les studios', false, 3),
    (q_id, 'Cela dépend du nombre d''enfants', false, 4);

    -- Question 9.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 9, 
        'Quelle est la peine maximale pour discrimination en France ?',
        'La discrimination est punie de 3 ans d''emprisonnement et 45 000 euros d''amende. Les peines peuvent être aggravées dans certains cas.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Une simple amende de 100 euros', false, 1),
    (q_id, 'Jusqu''à 3 ans de prison et 45 000 euros d''amende', true, 2),
    (q_id, 'Un avertissement', false, 3),
    (q_id, 'Il n''y a pas de sanction', false, 4);

    -- ============================================================
    -- NIVEAU 10 : MAÎTRE DES VALEURS (10 questions)
    -- Questions de synthèse sur tous les thèmes abordés
    -- ============================================================
    
    -- Question 10.1
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Quelle est la devise de la République française ?',
        'La devise de la République française est « Liberté, Égalité, Fraternité ». Elle figure à l''article 2 de la Constitution.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Liberté, Égalité, Fraternité', true, 1),
    (q_id, 'Liberté, Justice, Solidarité', false, 2),
    (q_id, 'Honneur, Patrie, Devoir', false, 3),
    (q_id, 'Travail, Famille, Patrie', false, 4);

    -- Question 10.2
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'L''article 1er de la Constitution définit la France comme une République...',
        'L''article 1er de la Constitution définit la France comme « une République indivisible, laïque, démocratique et sociale ».')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Indivisible, laïque, démocratique et sociale', true, 1),
    (q_id, 'Fédérale et religieuse', false, 2),
    (q_id, 'Monarchique et traditionnelle', false, 3),
    (q_id, 'Libérale et capitaliste', false, 4);

    -- Question 10.3
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'La loi de séparation des Églises et de l''État date de quelle année ?',
        'La loi de séparation des Églises et de l''État a été votée le 9 décembre 1905. Elle est le fondement de la laïcité en France.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, '1789', false, 1),
    (q_id, '1848', false, 2),
    (q_id, '1905', true, 3),
    (q_id, '1958', false, 4);

    -- Question 10.4
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Que signifie le principe d''indivisibilité de la République ?',
        'L''indivisibilité signifie que la France forme un tout unique : même Constitution, mêmes lois, même langue officielle sur tout le territoire.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Chaque région a ses propres lois', false, 1),
    (q_id, 'La France forme un tout unique avec les mêmes lois partout', true, 2),
    (q_id, 'La France est divisée en États indépendants', false, 3),
    (q_id, 'Seul Paris décide de tout', false, 4);

    -- Question 10.5
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'La souveraineté nationale appartient à qui selon la Constitution ?',
        'L''article 3 de la Constitution dispose que « La souveraineté nationale appartient au peuple qui l''exerce par ses représentants et par la voie du référendum ».')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Au Président de la République', false, 1),
    (q_id, 'Au peuple français', true, 2),
    (q_id, 'Au Parlement uniquement', false, 3),
    (q_id, 'À l''Union européenne', false, 4);

    -- Question 10.6
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Quel texte de 1789 proclame les droits fondamentaux ?',
        'La Déclaration des droits de l''homme et du citoyen de 1789 proclame les droits fondamentaux : liberté, égalité, propriété, sûreté, résistance à l''oppression.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'La Déclaration des droits de l''homme et du citoyen', true, 1),
    (q_id, 'Le Code civil', false, 2),
    (q_id, 'La Constitution de la Ve République', false, 3),
    (q_id, 'Le traité de Versailles', false, 4);

    -- Question 10.7
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Qu''est-ce que le principe de neutralité de l''État ?',
        'La neutralité de l''État signifie qu''il ne favorise ni ne défavorise aucune religion. L''État traite tous les citoyens de manière égale, quelles que soient leurs croyances.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'L''État ne prend jamais de décision', false, 1),
    (q_id, 'L''État ne favorise aucune religion et traite tous les citoyens également', true, 2),
    (q_id, 'L''État interdit toutes les religions', false, 3),
    (q_id, 'L''État choisit une religion officielle', false, 4);

    -- Question 10.8
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Que garantit l''article 1er de la Constitution concernant l''égalité ?',
        'L''article 1er garantit l''égalité devant la loi de tous les citoyens sans distinction d''origine, de race ou de religion.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'L''égalité des salaires pour tous', false, 1),
    (q_id, 'L''égalité devant la loi sans distinction d''origine, de race ou de religion', true, 2),
    (q_id, 'L''égalité uniquement entre Français', false, 3),
    (q_id, 'L''égalité des chances à l''école', false, 4);

    -- Question 10.9
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Quel est le rôle du Défenseur des droits ?',
        'Le Défenseur des droits est une autorité indépendante qui défend les droits des citoyens face aux administrations, lutte contre les discriminations et protège les droits des enfants.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Défendre les droits des citoyens et lutter contre les discriminations', true, 1),
    (q_id, 'Diriger l''armée française', false, 2),
    (q_id, 'Voter les lois au Parlement', false, 3),
    (q_id, 'Présider les tribunaux', false, 4);

    -- Question 10.10
    INSERT INTO questions (id, categorie_id, difficulte, question, explication)
    VALUES (gen_random_uuid(), cat_id, 10, 
        'Pourquoi les valeurs républicaines sont-elles importantes pour vivre ensemble ?',
        'Les valeurs de liberté, égalité et fraternité, ainsi que la laïcité, permettent à des personnes d''origines et de croyances différentes de vivre ensemble dans le respect mutuel.')
    RETURNING id INTO q_id;
    
    INSERT INTO reponses (question_id, texte, is_correct, ordre) VALUES
    (q_id, 'Elles permettent de vivre ensemble dans le respect mutuel', true, 1),
    (q_id, 'Elles sont uniquement symboliques', false, 2),
    (q_id, 'Elles divisent la société', false, 3),
    (q_id, 'Elles ne concernent que les Français de naissance', false, 4);

    RAISE NOTICE 'Insertion réussie : 20 questions créées (niveaux 9 et 10)';
END $$;

-- ============================================================
-- VÉRIFICATION
-- ============================================================
SELECT 
    difficulte as niveau,
    COUNT(*) as nb_questions
FROM questions 
WHERE categorie_id = (SELECT id FROM categories WHERE nom = 'Principes et valeurs de la République')
  AND difficulte IN (9, 10)
GROUP BY difficulte
ORDER BY difficulte;
