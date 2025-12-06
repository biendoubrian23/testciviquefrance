-- =====================================================
-- 100 QUESTIONS - VALEURS DE LA RÉPUBLIQUE
-- 10 niveaux de 10 questions chacun
-- Catégorie: Valeurs de la République (ID à remplacer)
-- =====================================================

-- IMPORTANT: Remplacez 'VOTRE_CATEGORIE_ID' par l'ID réel de la catégorie
-- Vous pouvez le trouver avec: SELECT id FROM categories WHERE nom = 'Valeurs de la République';

-- =====================================================
-- NIVEAU 1 : FONDAMENTAUX (Facile)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quelle est la devise de la République française ?', 
'qcm',
'La devise "Liberté, Égalité, Fraternité" est apparue pendant la Révolution française. Elle est inscrite dans l''article 2 de la Constitution de 1958 et figure sur les frontons des bâtiments publics, les pièces de monnaie et les timbres.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Selon l''article 1er de la Constitution, la France est une République :', 
'qcm',
'L''article 1er de la Constitution de 1958 définit la France comme "une République indivisible, laïque, démocratique et sociale". Ces quatre caractéristiques sont les piliers fondamentaux de notre République.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Que signifie le principe de laïcité en France ?', 
'qcm',
'La laïcité garantit la liberté de conscience et de culte, la séparation des Églises et de l''État, et la neutralité de l''État vis-à-vis des religions. Elle permet à chacun de croire ou de ne pas croire.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Que garantit le principe d''égalité en France ?', 
'qcm',
'Le principe d''égalité signifie que tous les citoyens sont égaux devant la loi, sans distinction d''origine, de race ou de religion. C''est un droit fondamental inscrit dans la Déclaration des droits de l''homme de 1789.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel document fondateur proclame que "les hommes naissent libres et égaux en droits" ?', 
'qcm',
'L''article 1er de la Déclaration des droits de l''homme et du citoyen de 1789 proclame ce principe fondamental. Ce texte fait partie du bloc de constitutionnalité français.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La République française est-elle un État laïque ?', 
'qcm',
'Oui, la France est un État laïque depuis la loi de séparation des Églises et de l''État de 1905. Ce principe est inscrit dans l''article 1er de la Constitution.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Que signifie "Fraternité" dans la devise républicaine ?', 
'qcm',
'La fraternité exprime l''idée de solidarité entre les citoyens, l''entraide et le vivre-ensemble. Elle implique que les citoyens se considèrent comme membres d''une même communauté nationale.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quelle est la valeur qui permet à chacun de penser et d''agir selon sa volonté ?', 
'qcm',
'La Liberté est le premier terme de la devise républicaine. Elle comprend la liberté d''expression, de conscience, de circulation, d''association, etc. Elle s''exerce dans le respect des lois et des droits d''autrui.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'En France, la souveraineté appartient à :', 
'qcm',
'Selon l''article 3 de la Constitution, "la souveraineté nationale appartient au peuple qui l''exerce par ses représentants et par la voie du référendum". C''est le principe de la démocratie.',
1, 1);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel est le régime politique de la France ?', 
'qcm',
'La France est une République, c''est-à-dire un régime politique où le pouvoir est exercé par des représentants élus par le peuple. Depuis 1958, c''est la Ve République.',
1, 1);

-- Réponses pour le Niveau 1
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Quelle est la devise de la République française ?' AND niveau = 1), 'Liberté, Égalité, Fraternité', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Quelle est la devise de la République française ?' AND niveau = 1), 'Unité, Force, Progrès', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Quelle est la devise de la République française ?' AND niveau = 1), 'Travail, Famille, Patrie', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Quelle est la devise de la République française ?' AND niveau = 1), 'Paix, Justice, Solidarité', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Selon l''article 1er de la Constitution%' AND niveau = 1), 'Indivisible, laïque, démocratique et sociale', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Selon l''article 1er de la Constitution%' AND niveau = 1), 'Fédérale, laïque et démocratique', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Selon l''article 1er de la Constitution%' AND niveau = 1), 'Indivisible, catholique et démocratique', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Selon l''article 1er de la Constitution%' AND niveau = 1), 'Divisible, laïque et monarchique', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Que signifie le principe de laïcité en France ?' AND niveau = 1), 'La séparation des Églises et de l''État et la neutralité religieuse', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Que signifie le principe de laïcité en France ?' AND niveau = 1), 'L''interdiction de toutes les religions', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Que signifie le principe de laïcité en France ?' AND niveau = 1), 'La religion catholique comme religion d''État', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Que signifie le principe de laïcité en France ?' AND niveau = 1), 'L''obligation d''être athée', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Que garantit le principe d''égalité en France ?' AND niveau = 1), 'Tous les citoyens sont égaux devant la loi', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Que garantit le principe d''égalité en France ?' AND niveau = 1), 'Tout le monde a le même salaire', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Que garantit le principe d''égalité en France ?' AND niveau = 1), 'Les riches ont plus de droits', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Que garantit le principe d''égalité en France ?' AND niveau = 1), 'Seuls les hommes ont des droits', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel document fondateur proclame%' AND niveau = 1), 'La Déclaration des droits de l''homme et du citoyen de 1789', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel document fondateur proclame%' AND niveau = 1), 'Le Code civil de 1804', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel document fondateur proclame%' AND niveau = 1), 'La Constitution de 1958', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel document fondateur proclame%' AND niveau = 1), 'Le Traité de Versailles', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'La République française est-elle un État laïque ?' AND niveau = 1), 'Oui, depuis la loi de 1905', TRUE, 1),
((SELECT id FROM questions WHERE question = 'La République française est-elle un État laïque ?' AND niveau = 1), 'Non, c''est un État catholique', FALSE, 2),
((SELECT id FROM questions WHERE question = 'La République française est-elle un État laïque ?' AND niveau = 1), 'Oui, depuis 1958', FALSE, 3),
((SELECT id FROM questions WHERE question = 'La République française est-elle un État laïque ?' AND niveau = 1), 'Non, c''est un État athée', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Que signifie "Fraternité"%' AND niveau = 1), 'La solidarité et l''entraide entre citoyens', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Que signifie "Fraternité"%' AND niveau = 1), 'L''obligation d''avoir des frères', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Que signifie "Fraternité"%' AND niveau = 1), 'Le respect de l''autorité', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Que signifie "Fraternité"%' AND niveau = 1), 'La hiérarchie sociale', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quelle est la valeur qui permet à chacun%' AND niveau = 1), 'La Liberté', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quelle est la valeur qui permet à chacun%' AND niveau = 1), 'L''Égalité', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quelle est la valeur qui permet à chacun%' AND niveau = 1), 'La Fraternité', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quelle est la valeur qui permet à chacun%' AND niveau = 1), 'La Laïcité', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'En France, la souveraineté appartient à :' AND niveau = 1), 'Au peuple', TRUE, 1),
((SELECT id FROM questions WHERE question = 'En France, la souveraineté appartient à :' AND niveau = 1), 'Au Président de la République', FALSE, 2),
((SELECT id FROM questions WHERE question = 'En France, la souveraineté appartient à :' AND niveau = 1), 'Au Parlement', FALSE, 3),
((SELECT id FROM questions WHERE question = 'En France, la souveraineté appartient à :' AND niveau = 1), 'Au Gouvernement', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Quel est le régime politique de la France ?' AND niveau = 1), 'Une République', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Quel est le régime politique de la France ?' AND niveau = 1), 'Une Monarchie', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Quel est le régime politique de la France ?' AND niveau = 1), 'Une Dictature', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Quel est le régime politique de la France ?' AND niveau = 1), 'Un Empire', FALSE, 4);


-- =====================================================
-- NIVEAU 2 : LAÏCITÉ (Facile-Moyen)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'En quelle année a été votée la loi de séparation des Églises et de l''État ?', 
'qcm',
'La loi du 9 décembre 1905 établit la séparation des Églises et de l''État. Elle met fin au Concordat de 1801 et garantit la liberté de conscience et le libre exercice des cultes.',
1, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La laïcité interdit-elle de pratiquer sa religion en France ?', 
'qcm',
'Non, la laïcité garantit au contraire la liberté de croire ou de ne pas croire. Elle assure le libre exercice des cultes tout en maintenant la neutralité de l''État.',
1, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Dans l''espace public, les agents de l''État doivent-ils afficher une neutralité religieuse ?', 
'qcm',
'Oui, les agents publics (fonctionnaires, enseignants, policiers...) doivent respecter le principe de neutralité. Ils ne peuvent pas porter de signes religieux ostensibles dans l''exercice de leurs fonctions.',
2, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La loi de 2004 sur les signes religieux à l''école concerne :', 
'qcm',
'La loi du 15 mars 2004 interdit le port de signes religieux ostensibles par les élèves dans les écoles, collèges et lycées publics. Elle ne concerne pas les établissements privés ni les universités.',
2, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Que finance l''État français en matière de religion ?', 
'qcm',
'Depuis 1905, la République "ne reconnaît, ne salarie ni ne subventionne aucun culte". L''État ne finance pas les cultes mais peut subventionner les associations cultuelles pour l''entretien du patrimoine religieux.',
2, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Peut-on être athée en France ?', 
'qcm',
'Oui, la laïcité garantit la liberté de conscience, ce qui inclut le droit de ne croire en aucune religion. L''athéisme est une conviction philosophique parfaitement légale.',
1, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Les communes peuvent-elles installer des crèches de Noël dans les bâtiments publics ?', 
'qcm',
'Les crèches peuvent être installées dans les bâtiments publics si elles présentent un caractère culturel, artistique ou festif, mais pas si elles constituent une revendication religieuse. La jurisprudence est nuancée.',
2, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La liberté de conscience garantit :', 
'qcm',
'La liberté de conscience permet à chacun d''avoir ses propres convictions (religieuses, philosophiques, politiques) sans être inquiété. C''est un droit fondamental protégé par la Constitution.',
1, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Un employeur privé peut-il interdire le port de signes religieux ?', 
'qcm',
'Oui, sous certaines conditions. L''employeur peut restreindre le port de signes religieux si cela est justifié par la nature de la tâche et proportionné au but recherché (contact avec la clientèle, sécurité...).',
2, 2);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le Concordat de 1801 est-il encore en vigueur quelque part en France ?', 
'qcm',
'Oui, en Alsace-Moselle (Bas-Rhin, Haut-Rhin, Moselle). Ces territoires étaient allemands en 1905 et n''ont pas été concernés par la loi de séparation. Le régime concordataire y est maintenu.',
2, 2);

-- Réponses Niveau 2
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'En quelle année a été votée la loi de séparation%' AND niveau = 2), '1905', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'En quelle année a été votée la loi de séparation%' AND niveau = 2), '1789', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'En quelle année a été votée la loi de séparation%' AND niveau = 2), '1958', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'En quelle année a été votée la loi de séparation%' AND niveau = 2), '1881', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'La laïcité interdit-elle de pratiquer sa religion en France ?' AND niveau = 2), 'Non, elle garantit la liberté de culte', TRUE, 1),
((SELECT id FROM questions WHERE question = 'La laïcité interdit-elle de pratiquer sa religion en France ?' AND niveau = 2), 'Oui, toute religion est interdite', FALSE, 2),
((SELECT id FROM questions WHERE question = 'La laïcité interdit-elle de pratiquer sa religion en France ?' AND niveau = 2), 'Seulement les religions non chrétiennes', FALSE, 3),
((SELECT id FROM questions WHERE question = 'La laïcité interdit-elle de pratiquer sa religion en France ?' AND niveau = 2), 'Oui, sauf à domicile', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Dans l''espace public, les agents de l''État%' AND niveau = 2), 'Oui, c''est le principe de neutralité', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Dans l''espace public, les agents de l''État%' AND niveau = 2), 'Non, ils sont libres', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Dans l''espace public, les agents de l''État%' AND niveau = 2), 'Seulement les enseignants', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Dans l''espace public, les agents de l''État%' AND niveau = 2), 'Seulement en présence du public', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La loi de 2004 sur les signes religieux%' AND niveau = 2), 'Les élèves des écoles publiques', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La loi de 2004 sur les signes religieux%' AND niveau = 2), 'Tous les citoyens', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La loi de 2004 sur les signes religieux%' AND niveau = 2), 'Les étudiants universitaires', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La loi de 2004 sur les signes religieux%' AND niveau = 2), 'Les élèves des écoles privées', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Que finance l''État français en matière de religion%' AND niveau = 2), 'Rien, l''État ne finance pas les cultes', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Que finance l''État français en matière de religion%' AND niveau = 2), 'Toutes les religions à parts égales', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Que finance l''État français en matière de religion%' AND niveau = 2), 'Uniquement l''Église catholique', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Que finance l''État français en matière de religion%' AND niveau = 2), 'Les trois grandes religions monothéistes', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Peut-on être athée en France ?' AND niveau = 2), 'Oui, c''est garanti par la liberté de conscience', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Peut-on être athée en France ?' AND niveau = 2), 'Non, c''est interdit', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Peut-on être athée en France ?' AND niveau = 2), 'Oui, mais c''est mal vu', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Peut-on être athée en France ?' AND niveau = 2), 'Seulement en privé', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Les communes peuvent-elles installer des crèches%' AND niveau = 2), 'Oui, si c''est culturel ou festif, pas religieux', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Les communes peuvent-elles installer des crèches%' AND niveau = 2), 'Jamais, c''est strictement interdit', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Les communes peuvent-elles installer des crèches%' AND niveau = 2), 'Oui, sans aucune restriction', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Les communes peuvent-elles installer des crèches%' AND niveau = 2), 'Seulement dans les églises', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'La liberté de conscience garantit :' AND niveau = 2), 'Le droit d''avoir ses propres convictions', TRUE, 1),
((SELECT id FROM questions WHERE question = 'La liberté de conscience garantit :' AND niveau = 2), 'Le droit de critiquer le gouvernement', FALSE, 2),
((SELECT id FROM questions WHERE question = 'La liberté de conscience garantit :' AND niveau = 2), 'Le droit de vote', FALSE, 3),
((SELECT id FROM questions WHERE question = 'La liberté de conscience garantit :' AND niveau = 2), 'Le droit de manifester', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Un employeur privé peut-il interdire%' AND niveau = 2), 'Oui, sous certaines conditions justifiées', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Un employeur privé peut-il interdire%' AND niveau = 2), 'Non, jamais', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Un employeur privé peut-il interdire%' AND niveau = 2), 'Oui, sans restriction', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Un employeur privé peut-il interdire%' AND niveau = 2), 'Seulement dans les entreprises publiques', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le Concordat de 1801 est-il encore en vigueur%' AND niveau = 2), 'Oui, en Alsace-Moselle', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le Concordat de 1801 est-il encore en vigueur%' AND niveau = 2), 'Non, il a été aboli en 1905', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le Concordat de 1801 est-il encore en vigueur%' AND niveau = 2), 'Oui, dans toute la France', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le Concordat de 1801 est-il encore en vigueur%' AND niveau = 2), 'Seulement en Corse', FALSE, 4);


-- =====================================================
-- NIVEAU 3 : DROITS FONDAMENTAUX (Moyen)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel texte constitue la base des droits fondamentaux en France ?', 
'qcm',
'La Déclaration des droits de l''homme et du citoyen de 1789 est le texte fondateur. Elle fait partie du "bloc de constitutionnalité" avec le préambule de 1946 et la Charte de l''environnement de 2004.',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La liberté d''expression en France est-elle absolue ?', 
'qcm',
'Non, la liberté d''expression a des limites : l''injure, la diffamation, l''incitation à la haine, le négationnisme, l''apologie du terrorisme sont interdits. La liberté s''arrête où commence celle d''autrui.',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le droit de propriété est considéré comme :', 
'qcm',
'L''article 17 de la DDHC de 1789 qualifie la propriété de droit "inviolable et sacré". Toutefois, elle peut être limitée pour cause d''utilité publique (expropriation) avec juste indemnisation.',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la présomption d''innocence ?', 
'qcm',
'Toute personne accusée est considérée innocente jusqu''à ce que sa culpabilité soit établie par un tribunal. C''est un principe fondamental du droit pénal inscrit dans la DDHC (article 9).',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La liberté de réunion permet-elle de manifester sans autorisation ?', 
'qcm',
'Les manifestations sur la voie publique doivent être déclarées (pas autorisées) à la préfecture au moins 3 jours avant. Une manifestation non déclarée peut être dispersée.',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le droit au respect de la vie privée est garanti par :', 
'qcm',
'L''article 9 du Code civil protège la vie privée. C''est aussi un droit constitutionnel et un droit garanti par la Convention européenne des droits de l''homme (article 8).',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le droit d''asile ?', 
'qcm',
'Le droit d''asile permet à une personne persécutée dans son pays d''obtenir une protection en France. Il est garanti par la Constitution et les conventions internationales (Convention de Genève).',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La discrimination est-elle punie par la loi en France ?', 
'qcm',
'Oui, les discriminations fondées sur l''origine, le sexe, la religion, le handicap, l''orientation sexuelle, etc. sont des délits punis par le Code pénal (jusqu''à 3 ans de prison et 45 000€ d''amende).',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le droit de grève en France est :', 
'qcm',
'Le droit de grève est un droit constitutionnel (préambule de 1946). Il peut être exercé par tous les salariés, avec quelques restrictions pour certains services publics essentiels.',
2, 3);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel organisme défend les droits et libertés en France ?', 
'qcm',
'Le Défenseur des droits est une autorité indépendante créée en 2011. Il peut être saisi gratuitement par toute personne s''estimant victime de discrimination ou de dysfonctionnement des services publics.',
2, 3);

-- Réponses Niveau 3
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel texte constitue la base des droits%' AND niveau = 3), 'La Déclaration des droits de l''homme et du citoyen de 1789', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel texte constitue la base des droits%' AND niveau = 3), 'La Constitution de 1958', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel texte constitue la base des droits%' AND niveau = 3), 'Le Code civil', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel texte constitue la base des droits%' AND niveau = 3), 'Le Code pénal', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La liberté d''expression en France est-elle absolue%' AND niveau = 3), 'Non, elle a des limites (injure, diffamation, haine)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''expression en France est-elle absolue%' AND niveau = 3), 'Oui, on peut tout dire', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''expression en France est-elle absolue%' AND niveau = 3), 'Non, on ne peut rien critiquer', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''expression en France est-elle absolue%' AND niveau = 3), 'Oui, sauf pour la politique', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le droit de propriété est considéré comme%' AND niveau = 3), 'Un droit inviolable et sacré', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le droit de propriété est considéré comme%' AND niveau = 3), 'Un privilège réservé aux riches', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le droit de propriété est considéré comme%' AND niveau = 3), 'Un droit secondaire', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le droit de propriété est considéré comme%' AND niveau = 3), 'Un droit temporaire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la présomption d''innocence%' AND niveau = 3), 'Être considéré innocent jusqu''à preuve du contraire', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la présomption d''innocence%' AND niveau = 3), 'Le droit de mentir à la police', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la présomption d''innocence%' AND niveau = 3), 'L''obligation de prouver son innocence', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la présomption d''innocence%' AND niveau = 3), 'Le droit de ne pas être arrêté', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La liberté de réunion permet-elle de manifester%' AND niveau = 3), 'Non, il faut déclarer la manifestation à la préfecture', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La liberté de réunion permet-elle de manifester%' AND niveau = 3), 'Oui, aucune formalité nécessaire', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La liberté de réunion permet-elle de manifester%' AND niveau = 3), 'Non, toute manifestation est interdite', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La liberté de réunion permet-elle de manifester%' AND niveau = 3), 'Oui, mais seulement le week-end', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le droit au respect de la vie privée%' AND niveau = 3), 'L''article 9 du Code civil et la Constitution', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le droit au respect de la vie privée%' AND niveau = 3), 'Aucun texte, c''est une tradition', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le droit au respect de la vie privée%' AND niveau = 3), 'Uniquement la CNIL', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le droit au respect de la vie privée%' AND niveau = 3), 'Le Code du travail', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le droit d''asile%' AND niveau = 3), 'La protection accordée aux personnes persécutées', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le droit d''asile%' AND niveau = 3), 'Le droit de voyager librement', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le droit d''asile%' AND niveau = 3), 'Le droit de travailler en France', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le droit d''asile%' AND niveau = 3), 'Le droit de vote des étrangers', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La discrimination est-elle punie%' AND niveau = 3), 'Oui, c''est un délit puni par la loi', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La discrimination est-elle punie%' AND niveau = 3), 'Non, c''est seulement immoral', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La discrimination est-elle punie%' AND niveau = 3), 'Seulement dans le travail', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La discrimination est-elle punie%' AND niveau = 3), 'Non, c''est légal', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le droit de grève en France est%' AND niveau = 3), 'Un droit constitutionnel', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le droit de grève en France est%' AND niveau = 3), 'Interdit', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le droit de grève en France est%' AND niveau = 3), 'Réservé au secteur privé', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le droit de grève en France est%' AND niveau = 3), 'Soumis à autorisation', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel organisme défend les droits%' AND niveau = 3), 'Le Défenseur des droits', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel organisme défend les droits%' AND niveau = 3), 'Le Président de la République', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel organisme défend les droits%' AND niveau = 3), 'Le Premier ministre', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel organisme défend les droits%' AND niveau = 3), 'Le maire', FALSE, 4);
