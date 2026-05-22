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
| [02](02-inscription-examen-civique.md) | Inscription examen civique — centres agréés, prix | 🔴 Haute | Forte |
| [04](04-rdv-prefecture-marche-noir-creneaux.md) | RDV préfecture introuvable — marché noir des créneaux | 🟠 Moyenne | Faible (trafic) |
| [06](06-examen-civique-exemples-questions.md) | Examen civique — exemples de questions corrigées | 🟠 Moyenne | Forte |
| [07](07-frais-inscription-universites-hors-ue.md) | Frais d'inscription universités hors-UE (décret 20 mai) | 🔴 Actu chaude | Moyenne |
| [08](08-cout-total-naturalisation-2026.md) | Coût total de la naturalisation 2026 (timbre 255 €) | 🔴 Haute | Forte |
| [09](09-entretien-naturalisation-2026.md) | Entretien de naturalisation 2026 | 🟠 Moyenne | Forte |
| [10](10-delai-renouvellement-titre-sejour-nunez.md) | Délai renouvellement titre de séjour (instruction Nuñez) | 🟠 Moyenne | Moyenne |

## File d'attente — MISES À JOUR d'articles existants

| Brief | Sujet | Priorité |
|---|---|---|
| [03](03-MAJ-niveau-b2-naturalisation.md) | 🔄 Niveau B2 naturalisation — diplômes & tests | 🟠 Moyenne |
| ~~05~~ | ✅ Hausse des taxes titres de séjour — **rédigé le 22/05/2026**, à publier | Fait |
| [MAJ-articles-existants.md](MAJ-articles-existants.md) | 🔄 12 articles existants à rafraîchir (ANEF, ANTS, Campus France, impôts…) | varié |

## ✅ Ordre de publication conseillé

Suivre cet ordre, cocher au fur et à mesure. Rythme : **2 à 3 articles / semaine**.

1. [x] **05** — Hausse des taxes titres de séjour · ✅ rédigé le 22/05/2026, à committer/publier
2. [ ] **07** — Frais université hors-UE · 🔴 actu chaude (décret du 20 mai)
3. [ ] **01** — Examen civique obligatoire (carte de séjour) · pilier
4. [ ] **MAJ-A** — ANEF bloqué + décision Conseil d'État · 🔴 actu
5. [ ] **02** — Inscription examen civique · pilier transactionnel
6. [ ] **08** — Coût total de la naturalisation 2026 (timbre 255 €)
7. [ ] **06** — Examen civique : exemples de questions corrigées
8. [ ] **03** — Niveau B2 naturalisation · 🔄 MAJ
9. [ ] **09** — Entretien de naturalisation 2026
10. [ ] **10** — Délai renouvellement titre de séjour (instruction Nuñez)
11. [ ] **04** — RDV préfecture : marché noir des créneaux
12. [ ] **Reste des MAJ** — sections B à L de [MAJ-articles-existants.md](MAJ-articles-existants.md)

> Logique : 05 et 07 d'abord (actu chaude + quick win), puis le cluster examen
> civique (cœur du produit), puis les sujets de fond et les mises à jour.

## Note

Ce dossier est de la documentation : il n'affecte pas le build (Next.js ignore les `.md`
hors `app/`). À committer (feuille de route utile) ou à mettre en `.gitignore`, au choix.
