# Test Civique France : stratégie d'acquisition par le contenu

Écrit le 20/10/2026. Jumeau de `C:\Projet\CosmetWiki\docs\seo\STRATEGIE.md` (Cosme Check), de `C:\Projet\Memory Pilot\STRATEGIE-SEO-MEMORYPILOT.md` et de `C:\Projet\Reveal Chat\STRATEGIE-SEO-3-MOIS.md` : même mécanique (un robot qui publie un article par jour, mesure tout et apprend), autre sujet, autre point de départ, **en français seulement, pour la France et l'outre-mer seulement**. Le robot relit la section « Les prévisions » chaque matin pour se situer (section « Prévision recalée » de son rapport).

---

## 1. Le point de départ (mesuré le 20/10/2026, 28 derniers jours, du 22/09 au 19/10)

| Mesure | Valeur | Source |
|---|---|---|
| Comptes | 1 629 au total ; 99 nouveaux sur la période (29 sur 7 jours, 110 sur 30 jours) | Supabase (`profiles`) |
| Abonnés | 3 abonnés actifs dans la base, 4 abonnements actifs chez Stripe (l'écart est à comprendre : un abonnement d'équipe, ou un statut pas encore recopié) | Supabase, Stripe |
| Ventes | 18 ventes encaissées pour 91,84 € TTC (net Stripe 84,86 €), aucun remboursement ; abonnements premium 10, standard 6, pack examen 1, flashcards 1 | `revenue_events`, Stripe |
| Usage | 135 entraînements terminés ; 0 examen blanc terminé enregistré sur la période (à vérifier côté produit) | Supabase |
| Site | 1 983 pages vues, dont 657 sur les articles ; 1 258 visiteurs-jour | PostHog (projet 112119) |
| Entonnoir | 41 inscriptions commencées, 61 terminées, 46 vues de `/tarifs`, 9 paiements commencés | PostHog |
| Sources | Google 772 visites, accès direct 547, Bing 225, Ecosia 99, Qwant 39 ; **66 visites marquées `utm_source=chatgpt.com`**, 9 Gemini, 6 Copilot, 2 Perplexity | PostHog |
| Articles les plus lus | `voyager-titre-sejour-francais-2026-pays-sans-visa-schengen` (70 vues), `prime-retour-volontaire-france-2026-conditions-demarches` (43), `hausse-taxes-titres-sejour-mai-2026…` (40), `absence-france-voyage-perte-titre-sejour-duree-maximale-2026` (39, et le premier sur 7 jours) | PostHog |
| Google | **pas encore lisible** : le compte de service du robot n'a pas accès à la propriété (voir « Ce qui reste à faire ») | Search Console |
| Articles | 154 en ligne, migrés le 20/10/2026 sans changer d'adresse ; aucun appel d'article mesuré avant ce jour | migration du 20/10 |

⚠️ **Ces chiffres PostHog sont sous-estimés.** Jusqu'au 20/10/2026, PostHog ne mesurait rien tant que le visiteur n'avait pas accepté les cookies analytiques. Depuis, il mesure sans cookie les autres (le « Cookieless server hash mode » du projet a été activé le même jour). Les séries vont donc monter mécaniquement au 21/10 : la base (comptes, ventes) et Stripe font foi pour comparer.

**Le diagnostic tient en trois phrases.** Le site a déjà une audience de recherche réelle sur les démarches (Google et Bing amènent l'essentiel, et ChatGPT cite déjà nos pages), et 154 articles, mais aucun appel d'article n'était mesuré et beaucoup de ces articles affirment des choses sans source officielle, dont certaines fausses (un taux de réussite de 72 % là où le ministère publie 81 %, une taxe de 650 € là où service-public indique 350 €, une réforme à 50 questions qu'aucun texte ne prévoit, une circulaire introuvable : la liste est dans `MOTS-CLES.md`). Sur ces sujets, une erreur coûte au lecteur bien plus qu'un clic, et à terme la confiance de Google : **corriger l'existant passe avant d'en écrire davantage**. Le levier de croissance est double : devenir la référence qui explique juste et vite chaque règle qui change (Google Actualités, `sitemap-news.xml`), et faire de chaque lecteur un candidat qui teste sa préparation.

## 2. Ce qui est en place (20/10/2026)

| Chantier | État |
|---|---|
| **Articles prêts pour un article par jour** | un fichier par article (`contenu/articles/`), registre documenté (`contenu/articles.ts`), page en trois colonnes (sommaire, article, « À lire ensuite »), cinq appels vers l'inscription gratuite, FAQ et sources en données structurées (`NewsArticle`, `BreadcrumbList`, `FAQPage`, `VideoObject`), questions d'entraînement (`qcm`), `feed.xml`, `sitemap-news.xml` et plan du site à jour. Les 154 articles migrés sans changer d'adresse ni d'ancre, texte comparé page par page avant et après. Le texte n'est plus posé en HTML brut (`dangerouslySetInnerHTML`) : un article ne peut plus devenir du code. L'accueil passe de 859 Ko à 176 Ko de JavaScript, un article de 943 Ko à 232 Ko (le texte de tout le site n'est plus envoyé au navigateur). |
| **Campagnes jusqu'à l'inscription** | chaque appel mène à `/signup?c=<slug>&m=blog&e=<emplacement>` ; la page d'inscription joint `campagne`, `medium` et `emplacement` à `signup_form_started`, `signup_submitted` et `signup_completed`. L'inscription par Google ne garde pas la campagne (redirection OAuth) : elle se lit dans la vue de `/signup`. |
| **Mesure** | PostHog (projet 112119, UE) **sans cookie** tant que le visiteur n'a pas accepté les cookies analytiques du bandeau, complète avec son accord : vues par article, sections lues (`section_atteinte`), clics par emplacement (`cta_clic`), sources dont les IA. Politique de confidentialité complétée. |
| **Le robot** | `/article-du-jour`, chaque matin à **7 h 30**, Opus 5.5 en effort medium, doctrine `docs/seo/ROBOT.md`. Verrou Chrome partagé avec Cosme Check (6 h), RevealChat (7 h) et MemoryPilot (8 h). Veille du Journal officiel du jour (open data DILA), des flux officiels, de Google Actualités, des suggestions et de Reddit. Vérificateur à deux niveaux (règles dures partout, doctrine complète pour tout article publié ou retouché depuis le 21/10/2026). |

## 3. La ligne éditoriale

Les articles parlent de **ce qui change et de ce qu'il faut faire** pour les étrangers en France (titres de séjour, naturalisation, préfectures, ANEF, OFII, droits, textes, calendrier) et de **la préparation à l'examen civique**, en français facile (un lecteur dont le français n'est pas la langue maternelle comprend tout), au vouvoiement, chaque règle adossée à sa source officielle datée. Mélange sur dix articles : **3 actualité réglementaire et démarches du moment**, **3 examen civique et révision**, **2 guides pratiques permanents**, **1 vie en France et culture civique**, **1 Test Civique pratique**. Une nouvelle règle officielle s'écrit dans les 24 heures.

Chaque article cherche à faire essayer la formation (cinq emplacements, plus un geste naturel dans le texte), et lie la page d'éligibilité, les cours et les articles voisins.

Les cinq grappes du premier mois :

1. **Corriger l'existant** : les articles de la liste « à revérifier » (`MOTS-CLES.md`), un par jour en optimisation, sur la source officielle ;
2. **L'examen civique, source par source** : le format fixé par l'arrêté du 10/10/2025, les chiffres officiels de la réponse ministérielle du 11/08/2026, les fiches et listes de questions de formation-civique.interieur.gouv.fr ;
3. **Les taxes et timbres 2026** (loi de finances pour 2026, service-public A18881) : la page juste que les autres n'ont pas ;
4. **Renouvellement, récépissé, absence du territoire** : les guides qui portent déjà le trafic ;
5. **L'outre-mer** : Mayotte (droit du sol), Guyane, titres à validité territoriale limitée, préfectures d'outre-mer.

**Les garde-fous qui comptent le plus** : neutralité politique stricte, source officielle datée pour toute règle, aucun conseil juridique individuel ni promesse de résultat, aucun chiffre inventé, aucun prix de la formation dans un article, aucun titre alarmiste faux. Le vérificateur bloque ce qu'il peut voir ; la doctrine dit le reste.

## 4. Les prévisions

Trois fourchettes (basse, médiane, haute). Hypothèses : un article par jour sans interruption, plus une correction par jour des articles existants ; un domaine qui a déjà de l'audience mais un signal « contenu produit en masse » à effacer ; des concurrents directs (letestcivique, monexamencivique, prépas en ligne) et des sites officiels qui tiennent la tête des requêtes de démarche ; un visiteur d'article sur 50 à 150 qui s'inscrit ; un taux d'achat des inscrits de l'ordre de celui d'aujourd'hui (18 ventes pour 99 comptes neufs sur 28 jours, à relire : une partie des ventes vient de comptes anciens).

### Lectures des articles (vues PostHog par mois, mesure sans cookie comprise)

| Horizon | Basse | Médiane | Haute |
|---|---|---|---|
| 1 mois | 1 200 | 2 000 | 3 500 |
| 3 mois | 2 500 | 5 000 | 10 000 |
| 6 mois | 5 000 | 12 000 | 30 000 |
| 12 mois | 10 000 | 30 000 | 80 000 |

Point de départ : 657 vues d'articles sur 28 jours, consentements seuls. La bascule sans cookie à elle seule devrait multiplier ce chiffre (une majorité de visiteurs refusent ou ignorent le bandeau) : la fourchette d'un mois en tient compte, et le premier recalage (02/11) dira de combien.

### Inscriptions par mois (comptes Supabase)

| Horizon | Venues d'un article (médiane) | Toutes sources (basse · médiane · haute) |
|---|---|---|
| 1 mois | 10 | 100 · 120 · 160 |
| 3 mois | 40 | 120 · 170 · 260 |
| 6 mois | 100 | 160 · 260 · 450 |
| 12 mois | 250 | 250 · 450 · 900 |

Point de départ : 110 comptes sur 30 jours, aucune inscription attribuée à un article (la mesure commence ce jour).

### Ventes

18 ventes encaissées sur 28 jours aujourd'hui (les montants vivent dans Stripe et l'admin, et changent avec les offres : ils ne s'écrivent pas ici). En hypothèse de travail, 10 à 20 % des inscrits achètent dans le mois : **25 à 60 ventes par mois à douze mois** en médiane. Le robot relève chaque matin les ventes et le montant encaissé (Supabase et Stripe), et la part qui suit un clic d'article.

## 5. Les risques, et comment on les tient

| Risque | Parade |
|---|---|
| Une règle fausse, périmée ou pas encore en vigueur publiée comme vraie | Source officielle datée obligatoire (vérificateur strict), distinction en vigueur / publié / annoncé, règle des 24 heures seulement avec le texte lu |
| Des articles existants faux (taux, taxes, réforme, circulaire) | Liste « à revérifier » dans `MOTS-CLES.md`, priorité absolue des optimisations ; un article retouché devient strict |
| Un titre alarmiste ou militant | Vérificateur (titre qui annonce un changement sans source fraîche, vocabulaire militant), doctrine de neutralité |
| Un conseil individuel pris pour une garantie | Phrase de prudence sur chaque page, renvoi vers préfecture, avocat, association agréée, Défenseur des droits ; promesses bloquées |
| Le signal « contenu produit en masse » | Un article par jour au plus, une correction par jour, aucune rafale, pas de doublon (mettre à jour plutôt que créer) |
| Lecteurs qui lisent sans s'inscrire | Mesure par emplacement d'appel et campagne jointe à l'inscription ; le robot déplace et réécrit les appels qui ne convertissent pas |
| Search Console pas encore lisible | Le robot décide avec PostHog et le Planificateur ; accès à ouvrir (voir plus bas) |
| Le compteur de vues des articles multiplie l'affichage par 1 000 (`components/blog/ArticleViews.tsx`, `VIEW_DISPLAY_MULTIPLIER`) | Chiffre affiché faux sur chaque page : décision produit à prendre par l'humain, hors du périmètre du robot |
| Les quatre robots dans le même Chrome | Verrou `C:\Projet\.robot-chrome.lock`, horaires décalés (6 h, 7 h, 7 h 30, 8 h) |
| Les couvertures Unsplash des articles migrés | Licence Unsplash (usage libre, commercial compris) ; toute nouvelle image vient de `seo:photo` avec crédit et licence |

## 6. Ce qui reste à faire (humain)

- **Ouvrir la Search Console au robot** : Search Console, propriété `testciviquefrance.fr` (domaine), Paramètres, Utilisateurs et autorisations, ajouter `seo-lecture@revealchat-a99bf.iam.gserviceaccount.com` en accès restreint. `npm run seo:donnees` le lira dès le lendemain (il prend toute propriété testciviquefrance.fr visible ; corriger `GSC_SITE` dans `.env` si c'est une propriété préfixe).
- Vérifier que la propriété Bing Webmaster Tools existe pour `https://www.testciviquefrance.fr/`.
- Décider du compteur de vues multiplié par 1 000.

## 7. À relire

- **Le 02/11/2026** : effet de la mesure sans cookie sur les vues ; premiers `cta_clic` par emplacement ; premières inscriptions attribuées à un article ; état de la liste « à revérifier ».
- **Le 16/11/2026** : premières positions Google (si l'accès est ouvert) des articles publiés par le robot ; part de l'actualité réglementaire dans les vues ; visites venues des IA.
- **Chaque premier dimanche du mois** : le robot recale ces fourchettes sur les vrais chiffres.
