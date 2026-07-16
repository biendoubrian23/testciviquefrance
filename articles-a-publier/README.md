# 📋 Articles à publier — backlog éditorial

Ce dossier contient les **briefs** des articles à rédiger / mettre à jour pour testciviquefrance.fr.
Un brief décrit **ce que l'article doit contenir** — ce n'est PAS l'article lui-même.

---

## ⚠️ RÈGLE ABSOLUE — Sources dans CHAQUE article

Tout article rédigé ou mis à jour depuis ce dossier **DOIT** :

1. **Citer ses sources officielles DANS le corps du texte** — un lien hypertexte vers
   Légifrance / service-public.gouv.fr / interieur.gouv.fr à côté de chaque fait
   juridique, date ou montant.
2. **Se terminer par une section « Sources »** listant les références officielles.
3. **Faire vérifier chaque date, chaque montant, chaque chiffre sur la source officielle
   AVANT publication.** Ne jamais recopier un chiffre d'un brief sans le confirmer —
   les briefs marquent d'un ⚠️ les données à revérifier.

> Pourquoi : crédibilité et E-E-A-T. C'est exactement ce que Google attend pour lever le
> flag « contenu à faible valeur ». Et sur un sujet immigration, une erreur de chiffre
> peut induire un lecteur en erreur sur une démarche réelle.

---

## Workflow

1. Tu demandes : « écris 1 (ou 2) article(s) de ce dossier ».
2. Claude rédige le contenu dans les fichiers du site
   (`lib/data/seo-content/*.ts` + `index.ts` + metadata dans `seo-articles.ts`).
3. Claude **supprime le brief** (ou la section, pour les mises à jour) de ce dossier.
4. Tu fais `commit` + `push` → publication. Cadence : **2 à 3 articles / semaine**.

## ⚠️ Ne pas tout publier d'un coup

Google a signalé le site pour « contenu produit en masse ». Petits lots réguliers +
contenu sourcé et de qualité = signal sain. Tout publier le même jour = on aggrave le
problème.

## ⚠️ Neuf vs mise à jour — ne pas créer de doublons

Beaucoup de sujets ci-dessous correspondent à des **articles qui existent déjà**.
Pour ceux-là : **on met à jour l'article existant**, on n'en crée PAS un nouveau
(deux articles sur le même sujet se cannibalisent et renforcent le signal « contenu de
masse »). Type indiqué dans chaque ligne : 🆕 Nouveau · 🔄 Mise à jour.

---

## File d'attente — articles NEUFS à rédiger

| Brief | Sujet | Priorité | Conversion abo |
|---|---|---|---|
| [01](01-examen-civique-obligatoire-carte-sejour.md) | Examen civique obligatoire — carte de séjour & résident | 🔴 Haute | Forte |
| ~~02~~ | ✅ Inscription examen civique — **rédigé le 01/06/2026** (MAJ de `inscription-test-civique-2026-ou-quand-comment-sinscrire`) | Fait |
| ~~04~~ | ✅ RDV préfecture introuvable — marché noir des créneaux — **rédigé le 16/07/2026** (`rdv-prefecture-titre-sejour-introuvable-2026-creneaux-marche-noir`) | Fait |
| ~~06~~ | ✅ Examen civique : exemples de questions corrigées — **rédigé le 09/06/2026** (`examen-civique-2026-exemples-questions-corrigees`) | Fait |
| ~~07~~ | ✅ Frais d'inscription universités hors-UE — **rédigé le 25/05/2026** | Fait |
| ~~08~~ | ✅ Coût total de la naturalisation 2026 (timbre 255 €) — **rédigé le 04/06/2026** | Fait |
| ~~09~~ | ✅ Entretien de naturalisation — **traité le 25/06/2026 en MAJ** de l'article existant `entretien-naturalisation-2026-preparation-assimilation-prefecture` (doublon évité : B1→B2, examen civique obligatoire 2026, marque + sources) | Fait |
| ~~10~~ | ✅ Délai renouvellement titre de séjour — **traité le 25/06/2026 en MAJ** de `renouvellement-titre-sejour-2026-anef-prefecture-documents-delais` (section instruction Nuñez / objectif 55 jours + récépissé + recours) | Fait |

## Cluster « Venir & s'installer en France » — proposé le 25/06/2026

5 articles NEUFS proposés (angles distincts des articles existants Campus France / premiers-pas pour éviter la cannibalisation). **3 rédigés**, à publier en 2 lots (cadence 2-3/sem.) :

| Brief | Article | Slug | État |
|---|---|---|---|
| [V1](V1-entretien-visa-consulat.md) | Entretien & visa au consulat/ambassade (≠ entretien Campus France) | `entretien-visa-consulat-ambassade-france-2026-reussir-visa-long-sejour` | ✅ rédigé 25/06/2026 |
| [V2](V2-preparer-depart-france.md) | Préparer son départ : checklist documents avant l'avion | `preparer-depart-france-2026-checklist-documents-avant-avion` | ✅ rédigé 25/06/2026 |
| [V4](V4-papiers-a-obtenir-arrivee.md) | Tous les papiers à obtenir en arrivant (où/comment) | `papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander` | ✅ rédigé 25/06/2026 |
| V3 | Trouver un logement étudiant (CROUS, Visale, garant, dossier) | `logement-etudiant-etranger-france-2026-crous-visale-garant-dossier` | ✅ rédigé 09/07/2026 |
| [V5](V5-10-choses-a-savoir-arrivee.md) | 10 choses à savoir en arrivant (codes, arnaques, quotidien) | — | ⏳ à rédiger |

> ⚠️ **Publier en lots, pas tout le même jour** (flag « contenu de masse »). Suggéré : V1+V2 d'abord, puis V4 quelques jours plus tard, puis V3 et V5 quand ils seront rédigés.
> 📌 Les 3 articles V1/V2/V4 sont **déjà en code** (1 seul lot de 3 max dans le commit). V3 et V5 restent à l'état de **briefs** dans ce dossier — à rédiger plus tard.

## File d'attente — MISES À JOUR d'articles existants

| Brief | Sujet | Priorité |
|---|---|---|
| ~~03~~ | ✅ Niveau B2 naturalisation — diplômes & tests — **rédigé le 15/06/2026** (MAJ de `niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation`) | Fait |
| ~~05~~ | ✅ Hausse des taxes titres de séjour — **rédigé le 22/05/2026**, à publier | Fait |
| [MAJ-articles-existants.md](MAJ-articles-existants.md) | 🔄 12 articles existants à rafraîchir (ANEF, ANTS, Campus France, impôts…) | varié |

## ✅ Ordre de publication conseillé

Suivre cet ordre, cocher au fur et à mesure. Rythme : **2 à 3 articles / semaine**.

1. [x] **05** — Hausse des taxes titres de séjour · ✅ rédigé le 22/05/2026, à committer/publier
2. [x] **07** — Frais université hors-UE · ✅ rédigé le 25/05/2026
3. [x] **01** — Examen civique obligatoire (carte de séjour) · ✅ rédigé le 26/05/2026
4. [x] **MAJ-A** — ANEF bloqué + décision Conseil d'État · ✅ rédigé le 28/05/2026
5. [x] **02** — Inscription examen civique · ✅ rédigé le 01/06/2026 (MAJ de l'article existant pour préserver le slug et les liens internes)
6. [x] **08** — Coût total de la naturalisation 2026 (timbre 255 €) · ✅ rédigé le 04/06/2026
7. [x] **06** — Examen civique : exemples de questions corrigées · ✅ rédigé le 09/06/2026
8. [x] **03** — Niveau B2 naturalisation · ✅ rédigé le 15/06/2026 (MAJ de l'article existant)
9. [x] **09** — Entretien de naturalisation · ✅ 25/06/2026 — **MAJ de l'article existant** (doublon évité, conforme à la règle anti-cannibalisation)
10. [x] **10** — Délai renouvellement titre de séjour · ✅ 25/06/2026 — **MAJ de l'article renouvellement existant** (section instruction Nuñez / 55 jours)
11. [x] **04** — RDV préfecture : marché noir des créneaux · ✅ rédigé le 16/07/2026 (sources : CE n° 435594, CJA L. 521-3, service-public, Sénat, Défenseur des droits, presse mai 2026)
12. [ ] **Reste des MAJ** — sections B à L de [MAJ-articles-existants.md](MAJ-articles-existants.md)

> Logique : 05 et 07 d'abord (actu chaude + quick win), puis le cluster examen
> civique (cœur du produit), puis les sujets de fond et les mises à jour.

## Note

Ce dossier est de la documentation : il n'affecte pas le build (Next.js ignore les `.md`
hors `app/`). À committer (feuille de route utile) ou à mettre en `.gitignore`, au choix.
