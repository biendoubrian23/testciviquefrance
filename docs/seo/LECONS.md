# Leçons

Ce qui s'est vérifié **au moins deux fois**. Une hypothèse n'a rien à faire ici : elle reste dans `EXPERIENCES.md`.

## Point de départ (20/10/2026), appris ailleurs, à confirmer chez nous

Ces règles viennent de Vaultaire (Starter Story, octobre 2026 : un article par jour, presque tout le trafic depuis Google) et des robots jumeaux de Cosme Check, de RevealChat et de MemoryPilot. Elles ne sont pas encore prouvées ici ; on les applique jusqu'à preuve du contraire.

- **Partir de ce que Google montre déjà.** Une requête où le site apparaît sans être cliqué est le meilleur sujet du jour : la demande est prouvée et Google nous trouve déjà pertinents. Chez nous, la Search Console n'est pas encore lisible (20/10/2026) : en attendant, les articles les plus lus dans PostHog (absence du territoire, voyage avec un titre de séjour, aide au retour, taxes) disent où est la demande.
- **Un seul article par jour, mais excellent.** Google favorise un flux régulier de pages de qualité, pas les rafales. Ce site a déjà été signalé pour « contenu produit en masse » (`articles-a-publier/README.md`) : la règle compte double.
- **Mettre à jour plutôt que créer un doublon.** Deux articles sur le même sujet se cannibalisent (leçon notée dans `articles-a-publier/README.md`, avant le robot).
- **Le maillage interne fait le classement.** Une nouvelle page liée depuis les pages qui ont déjà du trafic est explorée et classée en quelques jours.
- **Placer l'appel là où les lecteurs s'arrêtent de lire**, pas seulement en bas.
- **Mesurer le volume avant d'écrire.** Une suggestion Google prouve une demande, pas sa taille.
- **Un titre sage ne se clique pas, un titre faux se paie.** Écrire cinq titres et garder le plus fort, mais chez nous jamais au prix de la justesse : un lecteur trompé sur un délai ou un droit ne revient pas.
- **ChatGPT marque ses liens.** Les visites venues de ChatGPT arrivent avec `utm_source=chatgpt.com` plutôt qu'avec un référent (66 sur 28 jours au 20/10/2026, 0 par le référent) : les compter par les deux voies.

## Vérifié chez nous

- **Une page neuve du robot, sourcée et liée, prend des impressions Google en un à trois jours, en première page.** Vérifié trois fois (relevé du 24/10/2026) : `regularisation-metiers-en-tension` 263 impressions, position 4,5 (3 jours) ; `numeros-urgence-france` 95, position 7,1 (2 jours) ; `decret-retention-administrative-22-octobre-2026` 74, position 5,2 (1 jour). On ne sait pas encore séparer l'effet des demandes d'indexation faites le jour même : les garder. Ce qui reste à prouver, c'est le clic (taux de clic encore trop faible pour conclure).
