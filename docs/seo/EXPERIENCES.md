# Expériences en cours

Un changement = une hypothèse = une date de relecture. Le verdict s'écrit ici à l'échéance, puis la leçon part dans `LECONS.md` si elle s'est vérifiée deux fois.

| Lancée le | Article | Changement | Hypothèse | Mesure | Valeur avant | À relire le | Verdict |
|---|---|---|---|---|---|---|---|
| 2026-10-20 | les 154 | Page article en trois colonnes, cinq appels vers l'inscription gratuite (haut, milieu, colonne, fin, barre), campagne jointe à l'inscription (`/signup?c=<slug>&m=blog&e=<emplacement>`) | Le haut et la barre convertissent le mieux sur téléphone ; au moins une inscription par semaine vient d'un article | `cta_clic` par emplacement, `signup_completed` avec `campagne` | 0 clic mesuré (seule la barre `article_sticky_cta_clicked` existait, sous consentement) | 2026-11-02 | |
| 2026-10-20 | site entier | PostHog passe sans cookie pour les visiteurs sans consentement (avant : aucune mesure) | Les vues mesurées des articles sont au moins multipliées par deux, sans changement réel d'audience | `$pageview` par jour sur `/articles/*` | 657 vues d'articles sur 28 jours | 2026-11-02 | |
| 2026-10-20 | les 154 | Le JavaScript envoyé par l'accueil et les articles passe de 859 et 943 Ko à 176 et 232 Ko (le texte n'est plus envoyé au navigateur) | La durée médiane de lecture et la profondeur de défilement montent sur téléphone | `duree_mediane_s`, `defilement_median_pct` par article | voir `docs/seo/donnees/2026-10-20.json` | 2026-11-02 | |
