-- =====================================================
-- 100 QUESTIONS - VALEURS DE LA RÉPUBLIQUE (PARTIE 2)
-- Niveaux 4 à 7
-- =====================================================

-- =====================================================
-- NIVEAU 4 : DÉMOCRATIE ET CITOYENNETÉ (Moyen)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'À quel âge devient-on citoyen français avec le droit de vote ?', 
'qcm',
'Depuis 1974, la majorité civique est fixée à 18 ans. Tout citoyen français majeur dispose du droit de vote. L''inscription sur les listes électorales est automatique depuis 1997.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le vote en France est-il obligatoire ?', 
'qcm',
'Non, le vote n''est pas obligatoire en France. C''est un droit, pas un devoir légal. Cependant, le vote est considéré comme un devoir civique et moral envers la démocratie.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le suffrage universel ?', 
'qcm',
'Le suffrage universel signifie que tous les citoyens majeurs ont le droit de vote, sans distinction de richesse, de sexe ou d''origine. En France, les femmes l''ont obtenu en 1944.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'En quelle année les femmes ont-elles obtenu le droit de vote en France ?', 
'qcm',
'L''ordonnance du 21 avril 1944 a accordé le droit de vote aux femmes. Elles ont voté pour la première fois aux élections municipales de 1945.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce qu''un référendum ?', 
'qcm',
'Un référendum est une consultation directe des citoyens sur une question précise. Le Président peut le convoquer sur proposition du gouvernement ou du Parlement (article 11 de la Constitution).',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Combien de Républiques la France a-t-elle connues ?', 
'qcm',
'La France a connu 5 Républiques. La Ve République actuelle a été fondée en 1958 par le Général de Gaulle. Chaque République correspond à une nouvelle Constitution.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la séparation des pouvoirs ?', 
'qcm',
'La séparation des pouvoirs distingue le pouvoir législatif (faire les lois), exécutif (les appliquer) et judiciaire (les juger). Ce principe évite la concentration du pouvoir.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel philosophe a théorisé la séparation des pouvoirs ?', 
'qcm',
'Montesquieu, dans "De l''Esprit des lois" (1748), a théorisé la séparation des pouvoirs. Ce principe est devenu fondamental dans les démocraties modernes.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Les étrangers peuvent-ils voter en France ?', 
'qcm',
'Les citoyens de l''Union européenne résidant en France peuvent voter aux élections municipales et européennes. Les autres étrangers ne peuvent pas voter aux élections françaises.',
2, 4);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que l''abstention ?', 
'qcm',
'L''abstention est le fait de ne pas participer à un vote alors qu''on y est inscrit. En France, l''abstention est en hausse depuis plusieurs décennies, notamment chez les jeunes.',
2, 4);

-- Réponses Niveau 4
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'À quel âge devient-on citoyen français%' AND niveau = 4), '18 ans', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'À quel âge devient-on citoyen français%' AND niveau = 4), '21 ans', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'À quel âge devient-on citoyen français%' AND niveau = 4), '16 ans', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'À quel âge devient-on citoyen français%' AND niveau = 4), '25 ans', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question = 'Le vote en France est-il obligatoire ?' AND niveau = 4), 'Non, c''est un droit, pas une obligation', TRUE, 1),
((SELECT id FROM questions WHERE question = 'Le vote en France est-il obligatoire ?' AND niveau = 4), 'Oui, sous peine d''amende', FALSE, 2),
((SELECT id FROM questions WHERE question = 'Le vote en France est-il obligatoire ?' AND niveau = 4), 'Oui, depuis 2017', FALSE, 3),
((SELECT id FROM questions WHERE question = 'Le vote en France est-il obligatoire ?' AND niveau = 4), 'Seulement pour les présidentielles', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le suffrage universel%' AND niveau = 4), 'Le droit de vote pour tous les citoyens majeurs', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le suffrage universel%' AND niveau = 4), 'Le vote réservé aux hommes', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le suffrage universel%' AND niveau = 4), 'Le vote des propriétaires', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le suffrage universel%' AND niveau = 4), 'Le vote par internet', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'En quelle année les femmes ont-elles obtenu le droit de vote%' AND niveau = 4), '1944', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'En quelle année les femmes ont-elles obtenu le droit de vote%' AND niveau = 4), '1789', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'En quelle année les femmes ont-elles obtenu le droit de vote%' AND niveau = 4), '1958', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'En quelle année les femmes ont-elles obtenu le droit de vote%' AND niveau = 4), '1905', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qu''un référendum%' AND niveau = 4), 'Une consultation directe des citoyens', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qu''un référendum%' AND niveau = 4), 'Une élection présidentielle', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qu''un référendum%' AND niveau = 4), 'Un vote au Parlement', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce qu''un référendum%' AND niveau = 4), 'Une décision du Conseil constitutionnel', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Combien de Républiques la France a-t-elle connues%' AND niveau = 4), '5 Républiques', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Combien de Républiques la France a-t-elle connues%' AND niveau = 4), '3 Républiques', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Combien de Républiques la France a-t-elle connues%' AND niveau = 4), '7 Républiques', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Combien de Républiques la France a-t-elle connues%' AND niveau = 4), '2 Républiques', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la séparation des pouvoirs%' AND niveau = 4), 'La distinction entre pouvoir législatif, exécutif et judiciaire', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la séparation des pouvoirs%' AND niveau = 4), 'La décentralisation des régions', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la séparation des pouvoirs%' AND niveau = 4), 'La division du territoire en départements', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la séparation des pouvoirs%' AND niveau = 4), 'La séparation des Églises et de l''État', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe a théorisé la séparation%' AND niveau = 4), 'Montesquieu', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe a théorisé la séparation%' AND niveau = 4), 'Voltaire', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe a théorisé la séparation%' AND niveau = 4), 'Rousseau', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe a théorisé la séparation%' AND niveau = 4), 'Diderot', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Les étrangers peuvent-ils voter en France%' AND niveau = 4), 'Seuls les citoyens européens aux municipales et européennes', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Les étrangers peuvent-ils voter en France%' AND niveau = 4), 'Oui, tous les étrangers', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Les étrangers peuvent-ils voter en France%' AND niveau = 4), 'Non, jamais', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Les étrangers peuvent-ils voter en France%' AND niveau = 4), 'Seulement après 10 ans de résidence', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''abstention%' AND niveau = 4), 'Le fait de ne pas voter', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''abstention%' AND niveau = 4), 'Le vote blanc', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''abstention%' AND niveau = 4), 'Le vote nul', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''abstention%' AND niveau = 4), 'Le refus de s''inscrire', FALSE, 4);


-- =====================================================
-- NIVEAU 5 : ÉGALITÉ ET SOLIDARITÉ (Moyen-Difficile)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que l''égalité des chances ?', 
'qcm',
'L''égalité des chances vise à donner à tous les mêmes possibilités de réussite, indépendamment de leur origine sociale. Elle justifie des politiques comme les bourses, les ZEP, ou la discrimination positive.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La parité homme-femme en politique est-elle obligatoire ?', 
'qcm',
'Oui, depuis les lois sur la parité (2000, 2007, 2014), les partis doivent présenter autant de candidates que de candidats, sous peine de pénalités financières.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la solidarité nationale ?', 
'qcm',
'La solidarité nationale est le principe selon lequel la collectivité aide les plus vulnérables (maladie, chômage, vieillesse). Elle se concrétise par la Sécurité sociale et les aides sociales.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'L''impôt progressif est-il conforme au principe d''égalité ?', 
'qcm',
'Oui, l''impôt progressif (les riches paient proportionnellement plus) est conforme à l''égalité car il tient compte des capacités contributives de chacun. C''est un principe constitutionnel.',
3, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la discrimination positive ?', 
'qcm',
'La discrimination positive consiste à favoriser des groupes désavantagés pour rétablir l''égalité réelle. En France, elle existe pour le handicap et la parité, mais est limitée par le principe d''égalité.',
3, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le RSA (Revenu de Solidarité Active) illustre quel principe républicain ?', 
'qcm',
'Le RSA illustre le principe de solidarité et la dimension sociale de la République. Il garantit un revenu minimum aux personnes sans ressources, expression de la fraternité républicaine.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'L''école publique est-elle gratuite en France ?', 
'qcm',
'Oui, l''école publique est gratuite et obligatoire de 3 à 16 ans. C''est un service public fondamental qui garantit l''égalité d''accès à l''éducation pour tous les enfants.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que l''universalisme républicain ?', 
'qcm',
'L''universalisme républicain considère que les droits s''appliquent à tous les citoyens de manière égale, sans distinction communautaire. Il refuse les statistiques ethniques et le communautarisme.',
3, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La CMU (Couverture Maladie Universelle) illustre quel principe ?', 
'qcm',
'La CMU (devenue Protection Universelle Maladie) illustre l''égalité d''accès aux soins et la solidarité. Elle garantit une couverture santé à tous, même sans emploi ni cotisations.',
2, 5);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'L''accès aux services publics doit être :', 
'qcm',
'L''accès aux services publics doit être égal pour tous sur le territoire. C''est le principe d''égalité devant le service public, qui implique neutralité, continuité et adaptabilité.',
2, 5);

-- Réponses Niveau 5
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''égalité des chances%' AND niveau = 5), 'Donner à tous les mêmes possibilités de réussite', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''égalité des chances%' AND niveau = 5), 'Donner le même salaire à tous', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''égalité des chances%' AND niveau = 5), 'Supprimer toutes les inégalités', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''égalité des chances%' AND niveau = 5), 'Favoriser les plus riches', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La parité homme-femme en politique%' AND niveau = 5), 'Oui, avec des pénalités financières', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La parité homme-femme en politique%' AND niveau = 5), 'Non, c''est une recommandation', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La parité homme-femme en politique%' AND niveau = 5), 'Seulement pour les présidentielles', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La parité homme-femme en politique%' AND niveau = 5), 'Non, c''est inconstitutionnel', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la solidarité nationale%' AND niveau = 5), 'L''aide collective aux plus vulnérables', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la solidarité nationale%' AND niveau = 5), 'L''unité du territoire', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la solidarité nationale%' AND niveau = 5), 'La défense du pays', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la solidarité nationale%' AND niveau = 5), 'L''indépendance économique', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'L''impôt progressif est-il conforme%' AND niveau = 5), 'Oui, il tient compte des capacités de chacun', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'L''impôt progressif est-il conforme%' AND niveau = 5), 'Non, c''est une inégalité', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'L''impôt progressif est-il conforme%' AND niveau = 5), 'Seulement pour les entreprises', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'L''impôt progressif est-il conforme%' AND niveau = 5), 'Non, c''est inconstitutionnel', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la discrimination positive%' AND niveau = 5), 'Favoriser des groupes désavantagés pour l''égalité', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la discrimination positive%' AND niveau = 5), 'Interdire toute discrimination', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la discrimination positive%' AND niveau = 5), 'Punir les discriminations', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la discrimination positive%' AND niveau = 5), 'Encourager les inégalités', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le RSA%illustre quel principe%' AND niveau = 5), 'La solidarité et la fraternité', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le RSA%illustre quel principe%' AND niveau = 5), 'La liberté économique', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le RSA%illustre quel principe%' AND niveau = 5), 'L''égalité des salaires', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le RSA%illustre quel principe%' AND niveau = 5), 'La laïcité', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'L''école publique est-elle gratuite%' AND niveau = 5), 'Oui, et obligatoire de 3 à 16 ans', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'L''école publique est-elle gratuite%' AND niveau = 5), 'Non, il faut payer des frais', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'L''école publique est-elle gratuite%' AND niveau = 5), 'Seulement pour les familles pauvres', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'L''école publique est-elle gratuite%' AND niveau = 5), 'Oui, mais pas obligatoire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''universalisme républicain%' AND niveau = 5), 'Des droits égaux pour tous sans distinction', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''universalisme républicain%' AND niveau = 5), 'La reconnaissance des communautés', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''universalisme républicain%' AND niveau = 5), 'Le multiculturalisme', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que l''universalisme républicain%' AND niveau = 5), 'L''uniformité culturelle', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La CMU%illustre quel principe%' AND niveau = 5), 'L''égalité d''accès aux soins et la solidarité', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La CMU%illustre quel principe%' AND niveau = 5), 'La liberté de choisir son médecin', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La CMU%illustre quel principe%' AND niveau = 5), 'La privatisation de la santé', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La CMU%illustre quel principe%' AND niveau = 5), 'Le travail obligatoire', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'L''accès aux services publics%' AND niveau = 5), 'Égal pour tous sur le territoire', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'L''accès aux services publics%' AND niveau = 5), 'Réservé aux contribuables', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'L''accès aux services publics%' AND niveau = 5), 'Payant selon les revenus', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'L''accès aux services publics%' AND niveau = 5), 'Limité aux grandes villes', FALSE, 4);


-- =====================================================
-- NIVEAU 6 : HISTOIRE DES VALEURS RÉPUBLICAINES (Difficile)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quand la devise "Liberté, Égalité, Fraternité" est-elle devenue officielle ?', 
'qcm',
'Apparue pendant la Révolution, la devise n''est devenue officiellement celle de la République qu''en 1848 (IIe République). Elle a été inscrite dans les Constitutions de 1946 et 1958.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel événement a conduit à la Déclaration des droits de l''homme de 1789 ?', 
'qcm',
'La Révolution française, débutée le 14 juillet 1789, a conduit à l''adoption de la DDHC le 26 août 1789 par l''Assemblée constituante. Elle marque la fin de l''Ancien Régime.',
2, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qui a rédigé la Déclaration des droits de l''homme et du citoyen ?', 
'qcm',
'La DDHC a été rédigée collectivement par l''Assemblée nationale constituante. Le marquis de La Fayette en a proposé le premier projet, inspiré de la Déclaration d''indépendance américaine.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quelle République a instauré l''école gratuite, laïque et obligatoire ?', 
'qcm',
'La IIIe République, avec les lois Jules Ferry (1881-1882), a rendu l''école primaire gratuite (1881), laïque et obligatoire (1882). C''est un pilier de la République française.',
2, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel régime a utilisé la devise "Travail, Famille, Patrie" ?', 
'qcm',
'Le régime de Vichy (1940-1944) a remplacé "Liberté, Égalité, Fraternité" par "Travail, Famille, Patrie". Cette devise symbolisait la rupture avec les valeurs républicaines.',
2, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quand l''abolition définitive de l''esclavage a-t-elle été proclamée en France ?', 
'qcm',
'L''abolition définitive de l''esclavage a été proclamée le 27 avril 1848 par Victor Schœlcher. Une première abolition avait eu lieu en 1794, mais Napoléon l''avait rétabli en 1802.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel philosophe des Lumières a écrit "Du Contrat social" ?', 
'qcm',
'Jean-Jacques Rousseau a écrit "Du Contrat social" (1762). Il y développe l''idée de souveraineté populaire et de volonté générale, qui influenceront la Révolution française.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quelle Constitution a introduit le préambule garantissant les droits sociaux ?', 
'qcm',
'La Constitution de 1946 (IVe République) a introduit un préambule garantissant les droits économiques et sociaux (droit au travail, à la santé, à l''éducation...). Il fait partie du bloc de constitutionnalité.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quand le droit de vote a-t-il été accordé aux militaires ?', 
'qcm',
'Les militaires ont obtenu le droit de vote en 1945. Avant cette date, ils étaient exclus du suffrage pour garantir la neutralité politique de l''armée.',
3, 6);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel texte a ajouté les droits environnementaux au bloc de constitutionnalité ?', 
'qcm',
'La Charte de l''environnement de 2004, intégrée à la Constitution en 2005, a ajouté les droits et devoirs environnementaux au bloc de constitutionnalité français.',
3, 6);

-- Réponses Niveau 6
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quand la devise%est-elle devenue officielle%' AND niveau = 6), '1848 (IIe République)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quand la devise%est-elle devenue officielle%' AND niveau = 6), '1789', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quand la devise%est-elle devenue officielle%' AND niveau = 6), '1958', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quand la devise%est-elle devenue officielle%' AND niveau = 6), '1905', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel événement a conduit à la Déclaration%' AND niveau = 6), 'La Révolution française', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel événement a conduit à la Déclaration%' AND niveau = 6), 'La Première Guerre mondiale', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel événement a conduit à la Déclaration%' AND niveau = 6), 'La Résistance', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel événement a conduit à la Déclaration%' AND niveau = 6), 'Mai 68', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qui a rédigé la Déclaration des droits%' AND niveau = 6), 'L''Assemblée nationale constituante', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qui a rédigé la Déclaration des droits%' AND niveau = 6), 'Napoléon Bonaparte', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qui a rédigé la Déclaration des droits%' AND niveau = 6), 'Louis XVI', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qui a rédigé la Déclaration des droits%' AND niveau = 6), 'Voltaire seul', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quelle République a instauré l''école%' AND niveau = 6), 'La IIIe République (lois Jules Ferry)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quelle République a instauré l''école%' AND niveau = 6), 'La Ire République', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quelle République a instauré l''école%' AND niveau = 6), 'La Ve République', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quelle République a instauré l''école%' AND niveau = 6), 'La IVe République', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel régime a utilisé la devise%' AND niveau = 6), 'Le régime de Vichy (1940-1944)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel régime a utilisé la devise%' AND niveau = 6), 'Le Second Empire', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel régime a utilisé la devise%' AND niveau = 6), 'La IIIe République', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel régime a utilisé la devise%' AND niveau = 6), 'La Monarchie de Juillet', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quand l''abolition définitive de l''esclavage%' AND niveau = 6), '1848 par Victor Schœlcher', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quand l''abolition définitive de l''esclavage%' AND niveau = 6), '1789', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quand l''abolition définitive de l''esclavage%' AND niveau = 6), '1794 définitivement', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quand l''abolition définitive de l''esclavage%' AND niveau = 6), '1958', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe des Lumières a écrit%' AND niveau = 6), 'Jean-Jacques Rousseau', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe des Lumières a écrit%' AND niveau = 6), 'Montesquieu', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe des Lumières a écrit%' AND niveau = 6), 'Voltaire', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel philosophe des Lumières a écrit%' AND niveau = 6), 'Diderot', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quelle Constitution a introduit le préambule%' AND niveau = 6), 'La Constitution de 1946', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quelle Constitution a introduit le préambule%' AND niveau = 6), 'La Constitution de 1958', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quelle Constitution a introduit le préambule%' AND niveau = 6), 'La Constitution de 1791', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quelle Constitution a introduit le préambule%' AND niveau = 6), 'La Constitution de 1848', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quand le droit de vote a-t-il été accordé aux militaires%' AND niveau = 6), '1945', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quand le droit de vote a-t-il été accordé aux militaires%' AND niveau = 6), '1789', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quand le droit de vote a-t-il été accordé aux militaires%' AND niveau = 6), '1958', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quand le droit de vote a-t-il été accordé aux militaires%' AND niveau = 6), '1871', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel texte a ajouté les droits environnementaux%' AND niveau = 6), 'La Charte de l''environnement de 2004', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel texte a ajouté les droits environnementaux%' AND niveau = 6), 'Le préambule de 1946', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel texte a ajouté les droits environnementaux%' AND niveau = 6), 'La DDHC de 1789', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel texte a ajouté les droits environnementaux%' AND niveau = 6), 'Le Grenelle de l''environnement', FALSE, 4);


-- =====================================================
-- NIVEAU 7 : DÉFENSE ET APPLICATION DES VALEURS (Difficile)
-- =====================================================

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Quel est le rôle du Conseil constitutionnel ?', 
'qcm',
'Le Conseil constitutionnel vérifie que les lois sont conformes à la Constitution et aux valeurs républicaines. Il peut censurer une loi avant ou après sa promulgation (QPC depuis 2010).',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que la QPC (Question Prioritaire de Constitutionnalité) ?', 
'qcm',
'Depuis 2010, tout justiciable peut contester la constitutionnalité d''une loi appliquée dans son procès. La question est transmise au Conseil constitutionnel via la Cour de cassation ou le Conseil d''État.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'L''état d''urgence permet-il de suspendre les valeurs républicaines ?', 
'qcm',
'Non, même en état d''urgence, les valeurs fondamentales restent protégées. Cependant, certaines libertés peuvent être restreintes temporairement (assignation à résidence, perquisitions...).',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le "bloc de constitutionnalité" ?', 
'qcm',
'Le bloc de constitutionnalité regroupe tous les textes à valeur constitutionnelle : la Constitution de 1958, la DDHC de 1789, le préambule de 1946, et la Charte de l''environnement de 2004.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le Président peut-il modifier la Constitution seul ?', 
'qcm',
'Non, la révision constitutionnelle nécessite soit un référendum, soit l''approbation du Congrès à la majorité des 3/5. Le Président ne peut agir seul.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le contrôle de conventionnalité ?', 
'qcm',
'Les juges vérifient que les lois françaises sont conformes aux conventions internationales (comme la Convention européenne des droits de l''homme). Ce contrôle complète le contrôle de constitutionnalité.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Peut-on être déchu de la nationalité française pour atteinte aux valeurs républicaines ?', 
'qcm',
'Oui, dans certains cas limitativement définis par la loi (terrorisme, atteinte aux intérêts fondamentaux), mais seulement pour les personnes ayant acquis la nationalité et si cela ne les rend pas apatrides.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Le Défenseur des droits peut-il sanctionner une administration ?', 
'qcm',
'Non, le Défenseur des droits n''a pas de pouvoir de sanction. Il peut faire des recommandations, proposer des médiations, et saisir les autorités compétentes, mais pas imposer de décision.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'La liberté d''association peut-elle être restreinte ?', 
'qcm',
'Oui, une association peut être dissoute si elle menace l''ordre public, incite à la haine ou au terrorisme. La dissolution est prononcée par décret en Conseil des ministres.',
3, 7);

INSERT INTO public.questions (categorie_id, question, type, explication, difficulte, niveau) VALUES
('f4ade348-dbe7-4fc3-bd11-02889a31b9fd', 
'Qu''est-ce que le principe de légalité des délits et des peines ?', 
'qcm',
'Ce principe signifie qu''on ne peut être condamné que pour des actes prévus par la loi au moment des faits. "Pas de crime, pas de peine sans loi" (nullum crimen, nulla poena sine lege).',
3, 7);

-- Réponses Niveau 7
INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle du Conseil constitutionnel%' AND niveau = 7), 'Vérifier la conformité des lois à la Constitution', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle du Conseil constitutionnel%' AND niveau = 7), 'Voter les lois', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle du Conseil constitutionnel%' AND niveau = 7), 'Juger les criminels', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Quel est le rôle du Conseil constitutionnel%' AND niveau = 7), 'Conseiller le Président', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la QPC%' AND niveau = 7), 'Le droit de contester la constitutionnalité d''une loi', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la QPC%' AND niveau = 7), 'Une question posée au Parlement', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la QPC%' AND niveau = 7), 'Un référendum constitutionnel', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que la QPC%' AND niveau = 7), 'Une procédure d''urgence', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'L''état d''urgence permet-il de suspendre%' AND niveau = 7), 'Non, les valeurs fondamentales restent protégées', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'L''état d''urgence permet-il de suspendre%' AND niveau = 7), 'Oui, tout est suspendu', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'L''état d''urgence permet-il de suspendre%' AND niveau = 7), 'Seulement la liberté d''expression', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'L''état d''urgence permet-il de suspendre%' AND niveau = 7), 'Oui, pendant 3 mois', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le "bloc de constitutionnalité"%' AND niveau = 7), 'L''ensemble des textes à valeur constitutionnelle', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le "bloc de constitutionnalité"%' AND niveau = 7), 'La Constitution de 1958 seule', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le "bloc de constitutionnalité"%' AND niveau = 7), 'Le Conseil constitutionnel', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le "bloc de constitutionnalité"%' AND niveau = 7), 'Les lois organiques', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le Président peut-il modifier la Constitution seul%' AND niveau = 7), 'Non, il faut un référendum ou le Congrès', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le Président peut-il modifier la Constitution seul%' AND niveau = 7), 'Oui, par décret', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le Président peut-il modifier la Constitution seul%' AND niveau = 7), 'Oui, en cas d''urgence', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le Président peut-il modifier la Constitution seul%' AND niveau = 7), 'Seulement les articles mineurs', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le contrôle de conventionnalité%' AND niveau = 7), 'Vérifier la conformité aux conventions internationales', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le contrôle de conventionnalité%' AND niveau = 7), 'Contrôler les conventions collectives', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le contrôle de conventionnalité%' AND niveau = 7), 'Signer des traités', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le contrôle de conventionnalité%' AND niveau = 7), 'Organiser des conventions', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Peut-on être déchu de la nationalité%' AND niveau = 7), 'Oui, dans certains cas limités (terrorisme)', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Peut-on être déchu de la nationalité%' AND niveau = 7), 'Jamais, c''est interdit', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Peut-on être déchu de la nationalité%' AND niveau = 7), 'Oui, pour tout délit', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Peut-on être déchu de la nationalité%' AND niveau = 7), 'Seulement les étrangers', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Le Défenseur des droits peut-il sanctionner%' AND niveau = 7), 'Non, il fait des recommandations', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Le Défenseur des droits peut-il sanctionner%' AND niveau = 7), 'Oui, avec des amendes', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Le Défenseur des droits peut-il sanctionner%' AND niveau = 7), 'Oui, avec des peines de prison', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Le Défenseur des droits peut-il sanctionner%' AND niveau = 7), 'Seulement les entreprises', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'La liberté d''association peut-elle être restreinte%' AND niveau = 7), 'Oui, si menace à l''ordre public ou terrorisme', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''association peut-elle être restreinte%' AND niveau = 7), 'Jamais, c''est absolu', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''association peut-elle être restreinte%' AND niveau = 7), 'Seulement les partis politiques', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'La liberté d''association peut-elle être restreinte%' AND niveau = 7), 'Non, c''est inconstitutionnel', FALSE, 4);

INSERT INTO public.reponses (question_id, texte, is_correct, ordre) VALUES
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de légalité des délits%' AND niveau = 7), 'Pas de condamnation sans loi préexistante', TRUE, 1),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de légalité des délits%' AND niveau = 7), 'Le juge peut créer des délits', FALSE, 2),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de légalité des délits%' AND niveau = 7), 'Les peines sont fixes', FALSE, 3),
((SELECT id FROM questions WHERE question LIKE 'Qu''est-ce que le principe de légalité des délits%' AND niveau = 7), 'Le gouvernement décide des peines', FALSE, 4);
