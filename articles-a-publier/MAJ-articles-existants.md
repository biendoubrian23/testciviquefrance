# 🔄 Mises à jour d'articles EXISTANTS

Ces sujets correspondent à des articles **déjà en ligne**. On les **met à jour** —
on n'en crée PAS de nouveaux (sinon cannibalisation + signal « contenu de masse »).

**Workflow :** quand une section est traitée, la supprimer de ce fichier.
**Règle sources :** voir la RÈGLE ABSOLUE du [README](README.md) — sources citées dans
le corps de l'article, chaque chiffre vérifié sur la source officielle.

---

## B. Échange de permis étranger — désormais payant 40 € — 🟠
- **Articles existants :** `echanger-permis-conduire-etranger-france-2026-ants-demarches` et `echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete`
- **À mettre à jour :** l'échange d'un permis étranger serait devenu payant (~40 €) ; permis international 100 % en ligne via ANTS.
- ⚠️ **Vérifier** le montant, la date d'entrée en vigueur et le texte sur Légifrance/ANTS.
- **Sources à citer :** service-public.gouv.fr, ants.gouv.fr.

## C. Campus France 2026-2027 — refresh saisonnier — 🟠 (pic juin-août)
- **Article existant :** `campus-france-etude-france-2026-visa-inscription-procedure` (un de tes meilleurs articles)
- **À mettre à jour :** calendrier 2026-2027, frais, lien avec le brief 07 (hausse des frais hors-UE).
- **Sources à citer :** campusfrance.org, service-public.gouv.fr.

## D. Carte de résident 10 ans — nouveau tarif — 🟠
- **Article existant :** `carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture` (+ `renouvellement-carte-resident-10-ans-2026-conditions-documents-anef`)
- **À mettre à jour :** nouveau tarif (la recherche source mentionne ~350 € — ⚠️ à vérifier) ; rappel : niveau **B1** + examen civique désormais requis.
- **Sources à citer :** service-public.gouv.fr, Légifrance.

## E. CIR — contrat d'intégration républicaine 2026 — 🟠
- **Article existant :** vérifier dans `lib/data/seo-content/articles-contrat-republicain.ts` (localiser le slug).
- **À mettre à jour :** ce qui change en 2026 (formation civique renforcée, lien avec l'examen civique obligatoire).
- **Sources à citer :** ofii.fr, service-public.gouv.fr.

## F. ENIC-NARIC — reconnaissance des diplômes — 🟢
- **Article existant :** `reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences`
- **À mettre à jour :** procédure et délais 2026 ; lien vers le brief 03 (un diplôme peut valoir le niveau de langue).
- **Sources à citer :** france-education-international.fr (ENIC-NARIC).

## G. VLS-TS étudiant — validation OFII — 🟢 (pic été)
- **Article existant :** `visa-long-sejour-vls-ts-validation-ofii-2026`
- **À mettre à jour :** procédure et tarifs de validation 2026, calendrier de rentrée.
- **Sources à citer :** service-public.gouv.fr, ofii.fr, ANEF.

## H. Passeport Talent 2026 — 🟢
- **Articles existants :** plusieurs (`passeport-talent-2026-conditions-metiers-demarches`, etc.)
- **À mettre à jour :** conditions de salaire 2026, changement d'employeur. **Vérifier d'abord la cannibalisation** entre les multiples articles Passeport Talent — envisager d'en consolider.
- **Sources à citer :** service-public.gouv.fr.

## I. Regroupement familial 2026 — 🟢
- **Article existant :** `regroupement-familial-france-2026-guide-complet-conditions-documents-delais`
- **À mettre à jour :** conditions de ressources, procédure OFII, délais réels 2026.
- **Sources à citer :** ofii.fr, service-public.gouv.fr.

## J. Impôts des non-résidents 2026 — date limite passée — 🟢
- **Article existant :** `declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise`
- **À mettre à jour :** la date limite non-résidents était le 21 mai 2026 → ajouter « date limite passée : que faire ? » (pénalités, régularisation) ; ajouter une section sur le **formulaire 3916** (comptes à l'étranger). Préparer une version evergreen pour la campagne 2027.
- **Sources à citer :** impots.gouv.fr, service-public.gouv.fr.

## K. [Chantier SEO] ANEF — restructurer en architecture « hub »
- Le mot-clé « anef » (~229 000 rech./mois) génère du trafic mais en position 7-9.
- **Action :** article pilier « ANEF 2026 » + articles satellites par cas d'usage, maillage interne, FAQ schema. Les 4 articles ANEF ont déjà été retitrés (cf. `seo-articles.ts`).
- ⚠️ Cannibalisation : 3 articles visent « créer/ouvrir un compte ANEF » → à consolider.

## L. [Chantier SEO] ANTS — enrichir le hub permis
- « ants » (~835 000 rech./mois) et « ants permis » (~80 000) : positionnement à améliorer.
- **Action :** enrichir l'article échange de permis (cf. section B), tableau filtrable des pays avec accord, FAQ schema, délais réels 2026.

---

> **Note :** le sujet « ANEF mon compte / connexion » est déjà traité — les titres et
> meta des 4 articles ANEF ont été optimisés dans `lib/data/seo-articles.ts`.
> Reste éventuellement à enrichir le contenu (FAQ, cas d'usage).
