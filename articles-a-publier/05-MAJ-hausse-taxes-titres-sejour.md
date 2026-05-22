# 05 — [MISE À JOUR] Hausse des taxes & timbres fiscaux pour les étrangers 2026

- **Type :** 🔄 Mise à jour d'un article existant
- **Priorité :** 🟢 Quick win (effort minime, gain immédiat) — à publier en premier
- **Conversion abonnement :** Faible à moyenne

## 📍 Article existant à mettre à jour
- **Slug :** `hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances`
- **Contenu :** `lib/data/seo-content/articles-taxes-titres-sejour-2026.ts`
- **Metadata :** `lib/data/seo-articles.ts`
- ⚠️ Vérifier la cohérence avec l'article voisin `hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux` (`articles-frais-titre-sejour-2026.ts`) — éviter doublons/contradictions, bien interlier.

## 🎯 Pourquoi cette mise à jour en premier
Cet article **rank déjà et est cité dans Google** : c'est l'actif le plus rentable à entretenir. La hausse s'applique depuis le **1er mai 2026**. Une mise à jour datée = signal *positif* de fraîcheur, aucun risque (pas de nouveau contenu).

## ⚠️⚠️ DONNÉES À VÉRIFIER IMPÉRATIVEMENT — sources divergentes
Les chiffres collectés se contredisent selon les sources. **Ne rien publier sans avoir
confirmé chaque montant sur la source officielle** (Légifrance — loi de finances 2026 ;
service-public.gouv.fr ; barème `timbres.impots.gouv.fr`).

Montants à vérifier (ordres de grandeur recueillis, NON confirmés) :
- Premier titre de séjour : **225 € → 350 €** *ou* **650 €** selon les sources → ⚠️ il s'agit peut-être de composantes différentes (droit de timbre vs coût « tout compris » taxe + droit). **Décomposer poste par poste.**
- Renouvellement de titre : ~**225 € → 250 €** → ⚠️ à confirmer.
- Duplicata : ~**25 € → 50 €** → ⚠️ à confirmer.
- Timbre fiscal **naturalisation** : **55 € → 255 €** → ⚠️ à confirmer (voir aussi brief 08).
- Autorisation provisoire de séjour (APS) : ~**100 €** → ⚠️ à confirmer.
- Droit de visa de régularisation : ~**300 €** → ⚠️ à confirmer.
- Regroupement familial : ~**200 € / personne** → ⚠️ à confirmer.
- Base légale citée : « article 128 de la loi de finances 2026 » → ⚠️ confirmer le numéro d'article.

## ✏️ Ce qu'il faut faire
1. Vérifier et corriger **tous** les montants ci-dessus sur les sources officielles.
2. **Tableau récapitulatif clair** : type de titre · ancien tarif · nouveau tarif · date d'effet.
3. Distinguer **droit de timbre** et **taxe** (un titre peut cumuler les deux) — c'est la clé pour réconcilier 350 € vs 650 €.
4. Mention « **Article mis à jour : mai 2026** » + `dateModified` à jour.
5. Section « Qui est exonéré » (aide juridictionnelle, réfugiés, mineurs).
6. Section « Comment payer le timbre fiscal » (`timbres.impots.gouv.fr`, bureau de tabac).

## ❓ FAQ suggérée (ajouter si absentes)
- Combien coûte un premier titre de séjour depuis mai 2026 ?
- La hausse s'applique-t-elle aux renouvellements ?
- J'ai déposé mon dossier avant le 1er mai : quel tarif ?
- Quand et comment payer le timbre fiscal ?

## 🔗 Maillage interne
- → 08 Coût total de la naturalisation 2026
- → /articles/hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux
- → /articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais
- → /articles/cout-regularisation-situation-france-2026-budget-complet

## 📚 Sources — ⚠️ À CITER dans le corps de l'article
- Préfecture de Police — « évolution des tarifs au 1er mai 2026 » : https://www.prefecturedepolice.interieur.gouv.fr/actualites-et-presse/actualites/demarches/evolution-des-tarifs-pour-les-titres-de-sejour-naturalisations-et-visas-partir-du-1er-mai-2026
- Légifrance — loi de finances 2026 (retrouver l'article exact).
- Service Public — barème des droits de timbre.
> Lien hypertexte à côté de CHAQUE montant, + section « Sources » finale.
