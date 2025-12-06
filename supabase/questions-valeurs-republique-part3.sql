-- =====================================================
-- 100 QUESTIONS - VALEURS DE LA RÉPUBLIQUE (PARTIE 3)
-- Niveaux 8 à 10
-- =====================================================

-- =====================================================
-- NIVEAU 8 : VALEURS ET EUROPE / INTERNATIONAL (Très Difficile)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La Convention européenne des droits de l''homme est-elle supérieure à la loi française ?', 
'qcm',
'Oui, les conventions internationales ratifiées ont une autorité supérieure aux lois (article 55 de la Constitution). Les juges français peuvent écarter une loi contraire à la CEDH.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La Cour européenne des droits de l''homme peut-elle condamner la France ?', 
'qcm',
'Oui, tout citoyen peut saisir la CEDH après avoir épuisé les recours nationaux. La France a été condamnée plusieurs fois (conditions de détention, délais de justice...).',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel article de la Constitution affirme que la France est membre de l''Union européenne ?', 
'qcm',
'Le Titre XV de la Constitution (articles 88-1 et suivants) traite de l''Union européenne. L''article 88-1 affirme la participation de la France à l''UE selon les traités en vigueur.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le droit européen prime-t-il sur la Constitution française ?', 
'qcm',
'C''est débattu. La Cour de justice de l''UE affirme la primauté absolue du droit européen, mais le Conseil constitutionnel maintient que la Constitution reste la norme suprême en France.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La France peut-elle refuser d''appliquer une directive européenne ?', 
'qcm',
'Non, la France doit transposer les directives en droit national. En cas de non-transposition, elle peut être condamnée par la Cour de justice de l''UE et payer des astreintes.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel texte européen garantit les droits fondamentaux dans l''UE ?', 
'qcm',
'La Charte des droits fondamentaux de l''UE (2000), devenue contraignante avec le Traité de Lisbonne (2009), garantit les droits civiques, politiques, économiques et sociaux dans l''UE.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La citoyenneté européenne remplace-t-elle la citoyenneté nationale ?', 
'qcm',
'Non, la citoyenneté européenne s''ajoute à la citoyenneté nationale. Elle confère des droits supplémentaires (circuler, voter aux municipales dans tout État membre).',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La Déclaration universelle des droits de l''homme a-t-elle force de loi en France ?', 
'qcm',
'Non, la DUDH de 1948 est une déclaration d''intention sans force contraignante. Cependant, elle inspire le droit français et international.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le principe de subsidiarité européen ?', 
'qcm',
'La subsidiarité signifie que l''UE n''agit que si les objectifs ne peuvent être atteints par les États membres. Elle protège les compétences nationales.',
3, 8);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Peut-on invoquer la DDHC de 1789 devant la Cour européenne des droits de l''homme ?', 
'qcm',
'Non, la CEDH ne peut statuer que sur les violations de la Convention européenne des droits de l''homme. La DDHC relève du droit français et du Conseil constitutionnel.',
3, 8);

-- Réponses Niveau 8
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La Convention européenne des droits de l''homme est-elle supérieure%' AND niveau = 8), 'Oui, elle a une autorité supérieure aux lois', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La Convention européenne des droits de l''homme est-elle supérieure%' AND niveau = 8), 'Non, la loi française prime', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La Convention européenne des droits de l''homme est-elle supérieure%' AND niveau = 8), 'Seulement en droit pénal', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La Convention européenne des droits de l''homme est-elle supérieure%' AND niveau = 8), 'Elles sont égales', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La Cour européenne des droits de l''homme peut-elle condamner%' AND niveau = 8), 'Oui, après épuisement des recours nationaux', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La Cour européenne des droits de l''homme peut-elle condamner%' AND niveau = 8), 'Non, la France est souveraine', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La Cour européenne des droits de l''homme peut-elle condamner%' AND niveau = 8), 'Seulement pour le terrorisme', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La Cour européenne des droits de l''homme peut-elle condamner%' AND niveau = 8), 'Non, ce n''est pas contraignant', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel article de la Constitution affirme%membre de l''Union%' AND niveau = 8), 'Le Titre XV (articles 88-1 et suivants)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel article de la Constitution affirme%membre de l''Union%' AND niveau = 8), 'L''article 1', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel article de la Constitution affirme%membre de l''Union%' AND niveau = 8), 'Le préambule uniquement', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel article de la Constitution affirme%membre de l''Union%' AND niveau = 8), 'L''article 5', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le droit européen prime-t-il sur la Constitution%' AND niveau = 8), 'Question débattue, position française nuancée', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le droit européen prime-t-il sur la Constitution%' AND niveau = 8), 'Oui, toujours', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le droit européen prime-t-il sur la Constitution%' AND niveau = 8), 'Non, jamais', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le droit européen prime-t-il sur la Constitution%' AND niveau = 8), 'Seulement économiquement', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La France peut-elle refuser d''appliquer une directive%' AND niveau = 8), 'Non, sous peine de sanctions', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La France peut-elle refuser d''appliquer une directive%' AND niveau = 8), 'Oui, la France est souveraine', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La France peut-elle refuser d''appliquer une directive%' AND niveau = 8), 'Seulement par référendum', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La France peut-elle refuser d''appliquer une directive%' AND niveau = 8), 'Oui, si le Parlement vote contre', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel texte européen garantit les droits fondamentaux%' AND niveau = 8), 'La Charte des droits fondamentaux de l''UE', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel texte européen garantit les droits fondamentaux%' AND niveau = 8), 'Le Traité de Rome', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel texte européen garantit les droits fondamentaux%' AND niveau = 8), 'La Constitution européenne', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel texte européen garantit les droits fondamentaux%' AND niveau = 8), 'L''Acte unique', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La citoyenneté européenne remplace-t-elle%' AND niveau = 8), 'Non, elle s''y ajoute', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La citoyenneté européenne remplace-t-elle%' AND niveau = 8), 'Oui, depuis Maastricht', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La citoyenneté européenne remplace-t-elle%' AND niveau = 8), 'Seulement pour les fonctionnaires', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La citoyenneté européenne remplace-t-elle%' AND niveau = 8), 'Oui, depuis Lisbonne', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La Déclaration universelle des droits de l''homme a-t-elle force%' AND niveau = 8), 'Non, c''est une déclaration d''intention', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La Déclaration universelle des droits de l''homme a-t-elle force%' AND niveau = 8), 'Oui, elle est contraignante', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La Déclaration universelle des droits de l''homme a-t-elle force%' AND niveau = 8), 'Seulement dans les pays de l''ONU', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La Déclaration universelle des droits de l''homme a-t-elle force%' AND niveau = 8), 'Oui, depuis 2000', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de subsidiarité européen%' AND niveau = 8), 'L''UE n''agit que si les États ne peuvent pas', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de subsidiarité européen%' AND niveau = 8), 'L''UE décide de tout', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de subsidiarité européen%' AND niveau = 8), 'Les États décident seuls', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de subsidiarité européen%' AND niveau = 8), 'C''est l''aide aux régions pauvres', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Peut-on invoquer la DDHC de 1789 devant la Cour européenne%' AND niveau = 8), 'Non, seule la Convention européenne s''applique', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Peut-on invoquer la DDHC de 1789 devant la Cour européenne%' AND niveau = 8), 'Oui, c''est universel', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Peut-on invoquer la DDHC de 1789 devant la Cour européenne%' AND niveau = 8), 'Seulement les articles 1 à 17', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Peut-on invoquer la DDHC de 1789 devant la Cour européenne%' AND niveau = 8), 'Oui, depuis 2010', FALSE, 4);


-- =====================================================
-- NIVEAU 9 : CAS PRATIQUES ET JURISPRUDENCE (Expert)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le port du voile intégral est-il interdit en France ?', 
'qcm',
'Oui, la loi du 11 octobre 2010 interdit la dissimulation du visage dans l''espace public. Cette interdiction a été validée par le Conseil constitutionnel et la CEDH (arrêt S.A.S. c. France, 2014).',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Un maire peut-il refuser de célébrer un mariage pour convictions religieuses ?', 
'qcm',
'Non, le maire agit en tant qu''officier d''état civil et doit appliquer la loi. Ses convictions personnelles ne peuvent justifier un refus. Il peut toutefois déléguer à un adjoint.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Un fonctionnaire peut-il refuser de serrer la main à une femme pour motif religieux ?', 
'qcm',
'Les fonctionnaires doivent respecter la neutralité et traiter tous les usagers de manière égale. Un tel refus peut constituer une faute disciplinaire.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Une entreprise privée peut-elle interdire le port de signes religieux ?', 
'qcm',
'Oui, si c''est prévu par le règlement intérieur, justifié par la nature de la tâche et proportionné. Depuis 2016, les entreprises peuvent prévoir une clause de neutralité.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La décision du Conseil constitutionnel sur une loi est-elle définitive ?', 
'qcm',
'Oui, les décisions du Conseil constitutionnel s''imposent à tous les pouvoirs publics. Elles ne peuvent faire l''objet d''aucun recours (article 62 de la Constitution).',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la "réserve d''interprétation" du Conseil constitutionnel ?', 
'qcm',
'Le Conseil peut déclarer une loi conforme sous réserve d''une interprétation particulière. Cette interprétation s''impose aux juges et à l''administration.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le Conseil d''État peut-il annuler un décret du Président ?', 
'qcm',
'Oui, le Conseil d''État peut annuler tout acte administratif, y compris un décret présidentiel, s''il est illégal ou contraire aux droits fondamentaux.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Un parent peut-il refuser la vaccination obligatoire de son enfant ?', 
'qcm',
'Non, la vaccination obligatoire a été validée par le Conseil constitutionnel. Elle est justifiée par l''objectif de protection de la santé publique.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La géolocalisation des citoyens est-elle conforme aux valeurs républicaines ?', 
'qcm',
'Elle peut l''être si elle est encadrée par la loi, proportionnée et contrôlée par un juge. Le suivi permanent sans garanties violerait la liberté individuelle.',
3, 9);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'L''interdiction des "thérapies de conversion" illustre quel principe ?', 
'qcm',
'Cette interdiction (2022) illustre la protection de la dignité humaine et la lutte contre les discriminations. Elle punit les pratiques visant à "changer" l''orientation sexuelle.',
3, 9);

-- Réponses Niveau 9
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le port du voile intégral est-il interdit%' AND niveau = 9), 'Oui, dans l''espace public depuis 2010', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le port du voile intégral est-il interdit%' AND niveau = 9), 'Non, c''est une liberté', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le port du voile intégral est-il interdit%' AND niveau = 9), 'Seulement dans les écoles', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le port du voile intégral est-il interdit%' AND niveau = 9), 'Seulement dans les administrations', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Un maire peut-il refuser de célébrer un mariage%' AND niveau = 9), 'Non, il doit appliquer la loi', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Un maire peut-il refuser de célébrer un mariage%' AND niveau = 9), 'Oui, liberté de conscience', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Un maire peut-il refuser de célébrer un mariage%' AND niveau = 9), 'Seulement pour les mariages religieux', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Un maire peut-il refuser de célébrer un mariage%' AND niveau = 9), 'Oui, s''il justifie ses raisons', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Un fonctionnaire peut-il refuser de serrer la main%' AND niveau = 9), 'Non, obligation de neutralité et égalité', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Un fonctionnaire peut-il refuser de serrer la main%' AND niveau = 9), 'Oui, liberté religieuse', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Un fonctionnaire peut-il refuser de serrer la main%' AND niveau = 9), 'Cela dépend du service', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Un fonctionnaire peut-il refuser de serrer la main%' AND niveau = 9), 'Oui, c''est un choix personnel', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Une entreprise privée peut-elle interdire le port de signes%' AND niveau = 9), 'Oui, si justifié et proportionné', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Une entreprise privée peut-elle interdire le port de signes%' AND niveau = 9), 'Non, jamais', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Une entreprise privée peut-elle interdire le port de signes%' AND niveau = 9), 'Seulement les entreprises publiques', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Une entreprise privée peut-elle interdire le port de signes%' AND niveau = 9), 'Non, c''est discriminatoire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La décision du Conseil constitutionnel sur une loi est-elle définitive%' AND niveau = 9), 'Oui, elle s''impose sans recours', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La décision du Conseil constitutionnel sur une loi est-elle définitive%' AND niveau = 9), 'Non, le Président peut passer outre', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La décision du Conseil constitutionnel sur une loi est-elle définitive%' AND niveau = 9), 'On peut faire appel', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La décision du Conseil constitutionnel sur une loi est-elle définitive%' AND niveau = 9), 'Le Parlement peut la rejeter', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la "réserve d''interprétation"%' AND niveau = 9), 'Une loi conforme sous condition d''interprétation', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la "réserve d''interprétation"%' AND niveau = 9), 'Un refus du Conseil', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la "réserve d''interprétation"%' AND niveau = 9), 'Un délai pour modifier la loi', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la "réserve d''interprétation"%' AND niveau = 9), 'Une validation automatique', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le Conseil d''État peut-il annuler un décret du Président%' AND niveau = 9), 'Oui, s''il est illégal', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le Conseil d''État peut-il annuler un décret du Président%' AND niveau = 9), 'Non, le Président est souverain', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le Conseil d''État peut-il annuler un décret du Président%' AND niveau = 9), 'Seulement le Conseil constitutionnel', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le Conseil d''État peut-il annuler un décret du Président%' AND niveau = 9), 'Non, c''est un acte de gouvernement', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Un parent peut-il refuser la vaccination obligatoire%' AND niveau = 9), 'Non, c''est une obligation légale validée', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Un parent peut-il refuser la vaccination obligatoire%' AND niveau = 9), 'Oui, liberté parentale', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Un parent peut-il refuser la vaccination obligatoire%' AND niveau = 9), 'Oui, pour convictions religieuses', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Un parent peut-il refuser la vaccination obligatoire%' AND niveau = 9), 'Seulement pour raisons médicales', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La géolocalisation des citoyens est-elle conforme%' AND niveau = 9), 'Seulement si encadrée et contrôlée', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La géolocalisation des citoyens est-elle conforme%' AND niveau = 9), 'Toujours, pour la sécurité', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La géolocalisation des citoyens est-elle conforme%' AND niveau = 9), 'Jamais, c''est totalitaire', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La géolocalisation des citoyens est-elle conforme%' AND niveau = 9), 'Seulement pour les criminels', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'L''interdiction des "thérapies de conversion"%' AND niveau = 9), 'Dignité humaine et lutte contre les discriminations', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'L''interdiction des "thérapies de conversion"%' AND niveau = 9), 'La laïcité', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'L''interdiction des "thérapies de conversion"%' AND niveau = 9), 'La liberté médicale', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'L''interdiction des "thérapies de conversion"%' AND niveau = 9), 'L''égalité homme-femme', FALSE, 4);


-- =====================================================
-- NIVEAU 10 : SYNTHÈSE ET RÉFLEXION (Maître)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel principe permet de concilier laïcité et liberté religieuse ?', 
'qcm',
'La neutralité de l''État garantit que l''État ne favorise ni ne défavorise aucune religion, tout en protégeant la liberté de croire ou de ne pas croire. C''est un équilibre fondamental.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La devise républicaine peut-elle évoluer ?', 
'qcm',
'Théoriquement oui, par révision constitutionnelle, mais la devise est considérée comme un pilier identitaire intangible. Aucun projet sérieux de modification n''a jamais abouti.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que l''indivisibilité de la République ?', 
'qcm',
'L''indivisibilité signifie que la République ne peut être fractionnée. Elle garantit l''unité du territoire, du peuple, de la langue et l''égalité des citoyens. Elle n''empêche pas la décentralisation.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Comment les valeurs républicaines s''adaptent-elles au numérique ?', 
'qcm',
'De nouvelles lois encadrent le numérique (RGPD, lois contre la haine en ligne, droit à l''oubli). Les principes restent les mêmes mais s''appliquent aux nouveaux défis technologiques.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce qui distingue la laïcité française des autres modèles de séparation ?', 
'qcm',
'La laïcité française est particulièrement stricte sur la neutralité de l''État et l''espace public. D''autres pays (Allemagne, Royaume-Uni) maintiennent des liens officiels avec certaines religions.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Les valeurs républicaines sont-elles universelles ou spécifiquement françaises ?', 
'qcm',
'Elles sont d''inspiration universelle (droits de l''homme) mais leur application est spécifiquement française, fruit de l''histoire nationale (Révolution, laïcité, République).',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La fraternité est-elle un principe juridique ou moral ?', 
'qcm',
'Depuis 2018, le Conseil constitutionnel a reconnu la fraternité comme principe constitutionnel, notamment pour protéger l''aide humanitaire aux migrants (annulation du "délit de solidarité").',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel est le rôle de l''école dans la transmission des valeurs républicaines ?', 
'qcm',
'L''école forme les futurs citoyens aux valeurs républicaines. L''enseignement moral et civique (EMC), obligatoire, transmet les principes de la République dès le primaire.',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le contrat d''engagement républicain concerne qui ?', 
'qcm',
'Depuis 2021, toute association souhaitant des subventions publiques doit signer ce contrat, s''engageant à respecter les principes républicains (laïcité, égalité, fraternité).',
3, 10);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel est l''objectif ultime des valeurs républicaines ?', 
'qcm',
'Permettre le "vivre ensemble" en garantissant la liberté de chacun, l''égalité de tous et la solidarité collective, dans le cadre d''une société laïque et démocratique.',
3, 10);

-- Réponses Niveau 10
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel principe permet de concilier laïcité%' AND niveau = 10), 'La neutralité de l''État', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel principe permet de concilier laïcité%' AND niveau = 10), 'L''interdiction des religions', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel principe permet de concilier laïcité%' AND niveau = 10), 'La religion d''État', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel principe permet de concilier laïcité%' AND niveau = 10), 'L''athéisme obligatoire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La devise républicaine peut-elle évoluer%' AND niveau = 10), 'Théoriquement oui, mais c''est un pilier intangible', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La devise républicaine peut-elle évoluer%' AND niveau = 10), 'Non, c''est impossible', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La devise républicaine peut-elle évoluer%' AND niveau = 10), 'Oui, facilement par décret', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La devise républicaine peut-elle évoluer%' AND niveau = 10), 'Elle change régulièrement', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''indivisibilité de la République%' AND niveau = 10), 'L''unité du territoire, du peuple et de la loi', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''indivisibilité de la République%' AND niveau = 10), 'L''interdiction des régions', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''indivisibilité de la République%' AND niveau = 10), 'Un gouvernement centralisé uniquement', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''indivisibilité de la République%' AND niveau = 10), 'L''uniformité culturelle obligatoire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Comment les valeurs républicaines s''adaptent-elles au numérique%' AND niveau = 10), 'Par de nouvelles lois appliquant les principes existants', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Comment les valeurs républicaines s''adaptent-elles au numérique%' AND niveau = 10), 'Elles ne s''appliquent pas au numérique', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Comment les valeurs républicaines s''adaptent-elles au numérique%' AND niveau = 10), 'En interdisant internet', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Comment les valeurs républicaines s''adaptent-elles au numérique%' AND niveau = 10), 'En laissant le marché décider', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qui distingue la laïcité française%' AND niveau = 10), 'Une neutralité stricte de l''État et de l''espace public', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qui distingue la laïcité française%' AND niveau = 10), 'L''athéisme d''État', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qui distingue la laïcité française%' AND niveau = 10), 'Elle est identique partout', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qui distingue la laïcité française%' AND niveau = 10), 'Une religion nationale', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Les valeurs républicaines sont-elles universelles%' AND niveau = 10), 'Inspiration universelle, application française spécifique', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Les valeurs républicaines sont-elles universelles%' AND niveau = 10), 'Purement françaises', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Les valeurs républicaines sont-elles universelles%' AND niveau = 10), 'Totalement universelles', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Les valeurs républicaines sont-elles universelles%' AND niveau = 10), 'Seulement européennes', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La fraternité est-elle un principe juridique%' AND niveau = 10), 'Juridique depuis 2018 (Conseil constitutionnel)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La fraternité est-elle un principe juridique%' AND niveau = 10), 'Purement moral', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La fraternité est-elle un principe juridique%' AND niveau = 10), 'Ni l''un ni l''autre', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La fraternité est-elle un principe juridique%' AND niveau = 10), 'Juridique depuis 1789', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle de l''école dans la transmission%' AND niveau = 10), 'Former les citoyens via l''enseignement moral et civique', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle de l''école dans la transmission%' AND niveau = 10), 'Aucun rôle spécifique', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle de l''école dans la transmission%' AND niveau = 10), 'Seulement enseigner les matières', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle de l''école dans la transmission%' AND niveau = 10), 'Uniquement au lycée', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le contrat d''engagement républicain concerne qui%' AND niveau = 10), 'Les associations demandant des subventions', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le contrat d''engagement républicain concerne qui%' AND niveau = 10), 'Tous les citoyens', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le contrat d''engagement républicain concerne qui%' AND niveau = 10), 'Les fonctionnaires', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le contrat d''engagement républicain concerne qui%' AND niveau = 10), 'Les entreprises uniquement', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel est l''objectif ultime des valeurs républicaines%' AND niveau = 10), 'Permettre le vivre ensemble dans une société démocratique', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel est l''objectif ultime des valeurs républicaines%' AND niveau = 10), 'Imposer une pensée unique', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel est l''objectif ultime des valeurs républicaines%' AND niveau = 10), 'La croissance économique', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel est l''objectif ultime des valeurs républicaines%' AND niveau = 10), 'La domination mondiale', FALSE, 4);
