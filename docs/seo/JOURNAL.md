# Journal du robot

Une ligne par geste, la plus récente en bas. Format : `AAAA-MM-JJ | geste | article | raison | indexation`.

Gestes possibles : `publie`, `optimise`, `corrige`, `fusionne` (l'ancien slug en article, « vers `<slug gardé>` » dans la raison ; redirection 301), `indexation` (une demande dans Search Console), `abandonne`, `pause`, `arret`.

2026-10-20 | migration | les 154 articles | passage au modèle de données (`contenu/articles/`), page en trois colonnes, cinq appels vers l'inscription, FAQ, sources et vidéos gardées, mesure sans cookie ; texte rendu comparé avant et après pour chaque adresse ; mise en place humaine, pas un geste du robot | sans objet
2026-10-20 | publie | examen-civique-carte-de-resident | « examen civique carte de résident » 1 k à 10 k recherches par mois, aucun article ne comparait les mentions CSP et carte de résident ; famille examen civique | échec : Search Console n'a pas fini de charger (barre d'inspection sans effet, page blanche), abandonné après 3 essais ; IndexNow accepté ; à redemander demain
2026-10-20 | corrige | hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances | titre faux (« 650 € pour un premier titre » ; 350 € selon service-public A18881) ; réécrit en entier sur service-public lu le 20/10, section d'opinions retirée, exonérations non sourcées retirées, couverture locale ; « timbre fiscal titre de séjour » 10 k à 100 k, 1 177 impressions Search Console en 28 jours | sans objet (page existante, IndexNow)
2026-10-20 | fusionne | hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux | vers hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances ; doublon du même sujet aux montants non sourcés (225 € + 25 €, examen civique à 90 €) ; redirection 301, retrait du registre, liens internes repointés, seules ses requêtes reprises ; geste humain | à demander (seo:indexation la propose en tête)
