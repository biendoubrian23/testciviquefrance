# V3 — Trouver un logement étudiant en arrivant de l'étranger (CROUS, Visale, garant)

- **Type :** 🆕 Nouvel article (cluster « Venir & s'installer en France »)
- **Priorité :** 🟠 Moyenne — fort volume « logement étudiant », gros pain point
- **Conversion abonnement :** Faible (trafic) → cluster vers naturalisation à terme
- **État :** ⏳ **À RÉDIGER** (à publier après le 1er lot V1+V2, puis V4)

## ⚠️ Anti-doublon
Il existe déjà `louer-appartement-etranger-france-discrimination-refus-illegaux-2026` — celui-ci traite de la **discrimination** au logement. **V3 est différent :** angle 100 % pratique « comment trouver et sécuriser un logement étudiant quand on arrive de l'étranger » (CROUS, garant, Visale, dossier). Bien différencier dans l'intro et croiser les deux en maillage interne.

## 🎯 Métadonnées cibles
- **Slug proposé :** `logement-etudiant-etranger-france-2026-crous-visale-garant-dossier`
- **Titre SEO :** `Logement étudiant en France 2026 : CROUS, Visale, garant — guide pour étrangers`
- **Excerpt / meta :**
  `Comment trouver et sécuriser un logement quand on arrive de l'étranger : logement CROUS, garantie Visale (sans garant français), constitution du dossier, caution, et comment éviter les arnaques à la location.`
- **Catégorie :** Conseils pratiques (`conseils`)
- **Auteur :** Équipe Le Test Civique
- **Temps de lecture cible :** ~13 min

## 🔍 Cible SEO
- **Mot-clé principal :** logement étudiant étranger france
- **Secondaires / longue traîne :** garantie visale étudiant étranger, logement crous étudiant international, louer sans garant français, caution logement étudiant france, dossier location étudiant étranger
- **Intention :** informationnelle pratique + résolution de problème

## 💡 Angle unique
Le vrai blocage des étudiants étrangers = **pas de garant français + dossier incomplet**. Mettre en avant **Visale** (caution locative gratuite de l'État, accessible aux étudiants étrangers) comme solution clé, et donner un dossier-type prêt à l'emploi.

## 🗂️ Plan détaillé (sections H2)
1. **Les types de logement étudiant** — CROUS (résidences universitaires), résidences privées, colocation, foyer, parc privé. Coûts indicatifs par ville.
2. **Le logement CROUS** — qui peut l'obtenir, calendrier de demande (DSE / dossier social étudiant), critères, comment postuler tôt.
3. **Le problème du garant** — pourquoi les bailleurs exigent un garant français ; solutions quand on n'en a pas.
4. **La garantie Visale** — caution locative gratuite d'Action Logement, éligibilité des étudiants étrangers, plafonds, comment l'obtenir (visale.fr).
5. **Constituer un dossier de location béton** — pièces à fournir, dossier numérique, comment rassurer un bailleur quand on arrive de l'étranger.
6. **Caution, dépôt de garantie et premier loyer** — montants, à quoi s'attendre, assurance habitation obligatoire.
7. **Éviter les arnaques à la location** — faux propriétaires, virement avant visite, fausses annonces ; les réflexes.
8. **Les aides au logement (APL)** — comment cumuler avec le logement étudiant, lien vers le guide CAF.

## 📊 Données / faits à intégrer — ⚠️ À VÉRIFIER avant publication
- Plafonds et conditions exactes de **Visale 2026** (visale.fr) — montant de loyer couvert, âge (≤ 30 ans en général), éligibilité étudiants étrangers.
- Calendrier 2026-2027 du **dossier CROUS / DSE**.
- Montant légal max du **dépôt de garantie** (1 mois de loyer hors charges pour une location vide).
- Coûts de loyer indicatifs par ville (Paris vs province) — recouper avec source récente.

## ❓ FAQ suggérée
- Peut-on louer un logement en France sans garant français ?
- La garantie Visale est-elle accessible aux étudiants étrangers ?
- Comment obtenir un logement CROUS quand on est étudiant international ?
- Quel budget prévoir pour la caution et le premier loyer ?
- Comment repérer une arnaque à la location à distance ?

## 🔗 Maillage interne
- → /articles/papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander
- → /articles/preparer-depart-france-2026-checklist-documents-avant-avion
- → /articles/louer-appartement-etranger-france-discrimination-refus-illegaux-2026 (sujet voisin = discrimination, bien différencier)
- → /articles/premiers-pas-france-etranger-banque-logement-caf-ameli (APL / CAF)

## 📚 Sources — ⚠️ À CITER dans le corps de l'article
- Visale (Action Logement) : https://www.visale.fr/
- CROUS / messervices.etudiant.gouv.fr (dossier social étudiant)
- Service-Public.fr — dépôt de garantie et bail de location
- Campus France — se loger en France

## 🛠️ Intégration technique (à faire à la rédaction)
- Contenu : nouveau fichier `lib/data/seo-content/articles-logement-etudiant-2026.ts` (export `Content` + `Metadata`).
- Enregistrer dans `index.ts` (map) + metadata dans `seo-articles.ts` (`articlesEditoriaux2026`).
- Ajouter le maillage dans `internal-links.ts`.
