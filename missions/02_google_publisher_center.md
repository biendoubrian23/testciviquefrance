# Mission 02 — Google Publisher Center

## ⚠️ Avertissement préalable

**Google Publisher Center (anciennement Google News Producer)** est principalement conçu pour les **médias d'actualité** qui publient des nouvelles quotidiennes.

**Test Civique France** est une plateforme **éducative/informative** qui publie des guides et articles sur la naturalisation/titres de séjour. **Il y a un risque de refus** si Google juge que le contenu n'est pas assez "actualité".

### Stratégie recommandée
1. **D'abord** : Optimiser pour **Google Discover** (voir `03_google_discover.md`) — plus adapté au contenu éducatif
2. **Ensuite** : Tenter Publisher Center avec les optimisations ci-dessous
3. **Si refus** : Se concentrer sur SEO classique + réseaux sociaux (très efficace pour ce type de contenu)

---

## Objectif

Inscrire Test Civique France dans **Google Publisher Center** pour :
- Apparaître dans **Google Actualités** (google.com/news)
- Bénéficier d'un **boost de visibilité** sur certaines requêtes d'actualité
- Accéder aux **statistiques avancées** de Google News

---

## Prérequis obligatoires

### 1. Technique (✅ Déjà OK)
- [x] **Domaine propre** : testciviquefrance.fr
- [x] **HTTPS** activé
- [x] **Site en production** avec contenu public
- [x] **Google Search Console** vérifié
- [x] **Sitemap XML** actif (`/sitemap.xml`)
- [x] **Structured Data** (Article schema) implémenté

### 2. Contenu (⚠️ À vérifier/améliorer)
- [x] **Minimum 20-30 articles** publiés → ✅ 68 articles
- [ ] **Fréquence de publication régulière** → ⚠️ Publier 2-3 nouveaux articles/semaine pendant 1 mois avant soumission
- [ ] **Articles d'actualité** (pas seulement guides evergreen) → 🔴 **Point faible** — voir optimisations ci-dessous
- [ ] **Auteurs identifiés** avec pages author → ⚠️ À créer
- [ ] **Politique éditoriale** publique → ⚠️ À créer
- [ ] **Contact/Mentions légales** → ✅ Déjà présent

### 3. Qualité éditoriale
- [x] **Grammaire/orthographe irréprochable**
- [x] **Pas de contenu dupliqué** (plagiat)
- [x] **Sources citées** pour les informations factuelles
- [ ] **Neutralité éditoriale** → ⚠️ Adapter ton si besoin (moins promotionnel)

---

## Optimisations AVANT soumission (critiques pour acceptation)

### 🔴 **1. Ajouter une section "Actualités" au site**

**Pourquoi** : Google News attend du contenu d'**actualité**, pas seulement des guides.

**Comment** :
```
Créer une nouvelle catégorie "Actualités" avec des articles liés à :
- Nouveaux décrets/circulaires (ex: circulaire Maghreb avril 2026 ✅)
- Changements législatifs test civique
- Statistiques officielles (taux réussite, délais préfectures)
- Événements (ouverture nouveaux centres d'examen)
- Interviews d'experts naturalisation

Fréquence : 2-3 articles/semaine minimum
Ton : journalistique (qui/quoi/où/quand/pourquoi), pas tutoriel
```

**Exemples d'articles "actualité" acceptables** :
- ✅ "Nouvelle circulaire avril 2026 : délais naturalisation réduits à 12 mois pour Maghrébins"
- ✅ "15 nouveaux centres test civique ouvrent en mai 2026"
- ✅ "Statistiques 2026 : 72% de réussite au test civique, en hausse de 5 points"
- ❌ "Comment réussir le test civique" → trop guide, pas actualité

### 🔴 **2. Créer des pages auteurs**

**Pourquoi** : Google News exige des auteurs identifiables pour la crédibilité.

**Comment** :
```typescript
// Créer app/auteurs/[slug]/page.tsx

Contenu requis :
- Nom complet
- Photo (optionnel mais recommandé)
- Bio courte (expertise naturalisation, titres de séjour)
- Liste des articles écrits
- Lien vers profil LinkedIn/X (optionnel)

Exemples d'auteurs :
- "Équipe Le Test Civique" → transformer en auteur individuel
- "Me Sophie Dubois, avocate droit des étrangers"
- "Thomas Martin, expert naturalisation"
```

**Implémentation rapide** :
```typescript
// lib/data/authors.ts
export const authors = [
  {
    id: 'equipe-test-civique',
    name: 'Équipe rédactionnelle Test Civique',
    slug: 'equipe-test-civique',
    bio: 'Notre équipe de juristes et conseillers en naturalisation vous accompagne...',
    image: '/authors/team.jpg',
    articles: [...] // articles écrits
  },
  // Ajouter 2-3 auteurs minimum
];
```

### 🔴 **3. Ajouter une page "À propos / Politique éditoriale"**

**Pourquoi** : Google News vérifie la transparence et la mission du site.

**Créer** : `app/a-propos/page.tsx` (existe déjà) — enrichir avec :

```markdown
# À propos de Test Civique France

## Mission
Test Civique France est une plateforme éducative créée en 2024 pour aider les candidats à la naturalisation française et au renouvellement de titre de séjour à réussir le test civique obligatoire depuis janvier 2026.

## Équipe éditoriale
[Noms et qualifications des auteurs]

## Politique éditoriale
- Sources officielles uniquement (service-public.fr, Legifrance, préfectures)
- Vérification systématique des informations juridiques
- Mise à jour mensuelle en cas de changements législatifs
- Neutralité politique

## Financement
[Abonnements utilisateurs / Publicité / Aucune influence externe]

## Contact
- Email : contact@testciviquefrance.fr
- Adresse : [si applicable]
```

### 🟠 **4. Enrichir les articles avec datestamps clairs**

**Pourquoi** : Google News privilégie les articles récents.

**Vérifier** :
- [x] Date de publication visible → ✅ Déjà présent
- [ ] Date de dernière mise à jour affichée → À ajouter
- [ ] Format ISO 8601 dans metadata → Vérifier

**Ajouter dans Article schema** :
```json
{
  "dateModified": "2026-04-01T10:00:00+02:00",
  "datePublished": "2026-03-15T08:30:00+01:00"
}
```

### 🟠 **5. Flux RSS optimisé**

**Vérifier** : `app/feed.xml/route.ts` (RSS feed)

**Optimisations** :
```xml
<rss version="2.0" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <channel>
    <title>Test Civique France - Actualités Naturalisation</title>
    <description>Actualités sur le test civique, naturalisation et titres de séjour</description>
    <link>https://testciviquefrance.fr</link>
    <language>fr</language>
    
    <item>
      <title>Nouvelle circulaire avril 2026 : naturalisations accélérées</title>
      <link>https://testciviquefrance.fr/articles/circulaire-avril-2026</link>
      <pubDate>Tue, 01 Apr 2026 10:00:00 +0200</pubDate>
      <news:news>
        <news:publication>
          <news:name>Test Civique France</news:name>
          <news:language>fr</news:language>
        </news:publication>
        <news:publication_date>2026-04-01T10:00:00+02:00</news:publication_date>
        <news:title>Nouvelle circulaire avril 2026 : naturalisations accélérées</news:title>
      </news:news>
    </item>
  </channel>
</rss>
```

---

## Étapes d'inscription Google Publisher Center

### **Étape 1 : Vérifier l'éligibilité**

**Checklist finale avant soumission** :
- [ ] 30+ articles publiés (dont 10+ "actualité")
- [ ] Publication régulière depuis 1+ mois (2-3 articles/semaine)
- [ ] Pages auteurs créées (minimum 2 auteurs)
- [ ] Page "À propos" complète
- [ ] RSS feed optimisé Google News
- [ ] Google Search Console vérifié et fonctionnel
- [ ] Aucune violation des politiques Google (spam, contenu trompeur, etc.)

### **Étape 2 : Accéder à Publisher Center**

1. Aller sur https://publishercenter.google.com
2. Se connecter avec le compte Google du projet (**même compte que Search Console**)
3. Accepter les conditions d'utilisation

### **Étape 3 : Ajouter la publication**

1. Cliquer sur **« Ajouter une publication »**
2. Remplir les informations :

```
Nom de la publication : Test Civique France
URL principale : https://testciviquefrance.fr
Langue principale : Français (France)
Pays : France
Type de publication : Site web éducatif / Actualités spécialisées
```

3. Cliquer sur **« Continuer »**

### **Étape 4 : Vérifier la propriété**

Google vérifie automatiquement via **Google Search Console**.

Si erreur :
- S'assurer que le même compte Google possède Search Console ET Publisher Center
- Vérifier que testciviquefrance.fr est bien vérifié dans Search Console

### **Étape 5 : Configurer les sections**

**Créer des sections correspondant aux catégories d'articles** :

| Section Publisher Center | URL | Description |
|--------------------------|-----|-------------|
| Actualités naturalisation | `https://testciviquefrance.fr/articles?category=actualites` | Nouveautés législatives, décrets |
| Cadre légal | `https://testciviquefrance.fr/articles?category=cadre-legal` | Lois, conventions, circulaires |
| Préparation test civique | `https://testciviquefrance.fr/articles?category=preparation` | Guides révision, examens blancs |
| Conseils pratiques | `https://testciviquefrance.fr/articles?category=conseils` | Dossiers, démarches préfecture |
| Titres de séjour | `https://testciviquefrance.fr/articles?category=titres-sejour` | VLS-TS, carte résident, passeport talent |

**⚠️ Important** : Les URLs doivent renvoyer vers des **pages de listing** (pas 404), pas vers des articles individuels.

**À implémenter si manquant** :
```typescript
// app/articles/page.tsx
// Ajouter filtrage par catégorie via query params
// Ex: /articles?category=actualites → affiche articles catégorie "actualites"
```

### **Étape 6 : Ajouter le flux RSS**

1. Dans Publisher Center, section **« Sources de contenu »**
2. Cliquer sur **« Ajouter un flux »**
3. Entrer l'URL : `https://testciviquefrance.fr/feed.xml`
4. Google validera automatiquement (si format correct)

**Alternative : Sitemap News**

Si pas de RSS, créer un **sitemap spécifique Google News** :
```xml
<!-- public/sitemap-news.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://testciviquefrance.fr/articles/circulaire-avril-2026</loc>
    <news:news>
      <news:publication>
        <news:name>Test Civique France</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>2026-04-01T10:00:00+02:00</news:publication_date>
      <news:title>Nouvelle circulaire avril 2026</news:title>
      <news:keywords>naturalisation, maghreb, circulaire, 2026</news:keywords>
    </news:news>
  </url>
  <!-- Répéter pour chaque article récent (72h max) -->
</urlset>
```

Soumettre : `https://testciviquefrance.fr/sitemap-news.xml`

### **Étape 7 : Logo et branding**

Uploader 2 versions du logo :

**Logo carré** :
- Dimensions : **512×512 px minimum** (idéalement 1024×1024)
- Format : PNG ou JPG
- Fond : transparent ou uni
- Marges : 10% autour du logo

**Logo rectangulaire** :
- Dimensions : **600×60 px** (ratio 10:1)
- Format : PNG ou JPG
- Fond : transparent de préférence

**Créer si manquant** :
```
public/logo-square.png (1024×1024)
public/logo-wide.png (600×60)
```

### **Étape 8 : Informations éditoriales**

Remplir :
- **Adresse email de contact** : contact@testciviquefrance.fr
- **Page "À propos"** : https://testciviquefrance.fr/a-propos
- **Politique de confidentialité** : https://testciviquefrance.fr/politique-confidentialite (✅ existe)
- **Conditions d'utilisation** : https://testciviquefrance.fr/cgu (✅ existe)

### **Étape 9 : Soumettre pour validation**

1. Vérifier que toutes les sections sont **vertes** (validées)
2. Cliquer sur **« Soumettre la publication »**
3. Google affiche un message de confirmation

**Délai de validation** : **3 jours à 4 semaines** selon :
- Volume de demandes chez Google
- Qualité/clarté du contenu
- Antériorité du site

---

## Après soumission : que faire pendant l'attente ?

### ✅ **Continuer à publier régulièrement**
- 2-3 articles/semaine minimum
- Focus sur actualité (décrets, circulaires, nouveaux centres)
- Ne PAS arrêter la publication (Google surveille l'activité)

### ✅ **Optimiser les articles existants**
- Ajouter dates de mise à jour
- Enrichir avec sources officielles
- Corriger erreurs/typos

### ✅ **Surveiller Google Search Console**
- Erreurs d'indexation
- Nouveaux articles indexés
- Performances (CTR, impressions)

### ✅ **Préparer contenu vidéo** (optionnel mais +++)
Google News favorise les publications multimédia :
- Vidéos YouTube intégrées dans articles
- Interviews experts
- Examens blancs filmés

---

## Réponse de Google : 3 scénarios

### 🟢 **Scénario 1 : Acceptation**

**Email reçu** : "Votre publication Test Civique France a été approuvée."

**Actions immédiates** :
1. ✅ Vérifier apparition dans Google Actualités : chercher "test civique 2026" sur google.com/news
2. ✅ Surveiller dashboard Publisher Center (impressions, clics)
3. ✅ Optimiser titres pour News : courts (60 caractères), accrocheurs
4. ✅ Publier communiqué réseaux sociaux : "Test Civique France désormais sur Google Actualités"

**Optimisations post-validation** :
- Publier **1-2 articles actualité/jour** (Google News priorise fraîcheur)
- Titres "news-style" : "Naturalisation 2026 : les délais passent sous 12 mois"
- Premier paragraphe = résumé complet (qui/quoi/où/quand/pourquoi)
- Images haute qualité (1200×800 minimum)

### 🟠 **Scénario 2 : Demande d'informations**

**Email reçu** : "Nous avons besoin de clarifications..."

**Raisons fréquentes** :
- Politique éditoriale floue
- Auteurs non identifiés
- Contenu jugé trop promotionnel
- Pas assez d'articles d'actualité

**Actions** :
1. Lire attentivement les remarques Google
2. Corriger les points soulevés (ajuster À propos, ajouter auteurs, etc.)
3. Répondre via Publisher Center
4. Re-soumettre

**Délai** : 1-2 semaines supplémentaires

### 🔴 **Scénario 3 : Refus**

**Email reçu** : "Votre publication ne respecte pas les critères..."

**Raisons possibles** :
- ❌ Contenu jugé **trop niche** (pas assez généraliste)
- ❌ Pas assez d'**actualité fraîche** (trop de guides evergreen)
- ❌ Site trop récent / pas assez d'historique publication
- ❌ Politique éditoriale insuffisante

**Actions si refus** :

**Option 1 : Re-candidater dans 3-6 mois**
- Publier 100+ articles dont 50% actualité
- Créer équipe éditoriale identifiée (3+ auteurs)
- Professionnaliser l'approche "média"

**Option 2 : Abandonner Publisher Center et se concentrer sur alternatives (RECOMMANDÉ)**

### 🎯 **Alternatives à Google Publisher Center (très efficaces)**

Si refus, **ne pas perdre de temps** — ces canaux sont souvent **plus rentables** pour contenu éducatif :

#### **1. Google Discover** (voir `03_google_discover.md`)
- Flux de recommandations mobile Google
- **Meilleur match** pour contenu éducatif evergreen
- Potentiel : 10 000 - 100 000 impressions/jour si optimisé
- Critères : images qualité, Core Web Vitals (✅ déjà bon), contenu long

#### **2. YouTube Search**
- Vidéos "examen blanc test civique" → trafic massif
- Monétisation AdSense + affiliation
- Autorité SEO (vidéos remontent dans Google Search)

#### **3. Réseaux sociaux organiques**
- TikTok/Instagram Reels : viralité possible
- Facebook Groups : communautés naturalisation très actives
- LinkedIn : professionnels en demande titre séjour

#### **4. Partenariats/Backlinks**
- Associations d'aide aux migrants
- Sites juridiques (village-justice.com, etc.)
- Forums immigrés (immigrer.com, expat.com)

#### **5. SEO classique agressif**
- Cibler 200+ mots-clés longue traîne
- Exemple : "combien coûte test civique marseille 2026"
- Backlinking depuis sites .gouv.fr (citer articles officiels)

---

## Checklist finale avant soumission Publisher Center

### Contenu
- [ ] 30+ articles publiés
- [ ] 10+ articles "actualité" (décrets, circulaires, nouveaux centres)
- [ ] Publication régulière 2-3/semaine depuis 1+ mois
- [ ] Tous les articles avec date publication visible
- [ ] Sources officielles citées (service-public.fr, Legifrance)

### Technique
- [ ] Google Search Console vérifié et actif
- [ ] Sitemap XML soumis et indexé
- [ ] RSS feed fonctionnel (`/feed.xml`)
- [ ] Structured Data Article sur tous les articles
- [ ] HTTPS actif partout
- [ ] Core Web Vitals (performance) bons

### Pages obligatoires
- [ ] Page "À propos" complète avec mission éditoriale
- [ ] Pages auteurs (minimum 2 auteurs identifiés)
- [ ] Politique de confidentialité
- [ ] CGU
- [ ] Contact/Mentions légales

### Branding
- [ ] Logo carré 1024×1024 px
- [ ] Logo rectangulaire 600×60 px
- [ ] Charte graphique cohérente

### Catégories/Sections
- [ ] URLs de catégories fonctionnelles (/articles?category=X)
- [ ] Au moins 4-5 sections différentes
- [ ] Chaque section avec 5+ articles

---

## Timeline réaliste

| Phase | Durée | Actions |
|-------|-------|---------|
| **Préparation** | 2-4 semaines | Publier articles actualité, créer pages auteurs, optimiser RSS |
| **Soumission** | 1 jour | Inscription Publisher Center, remplir formulaire |
| **Attente validation** | 1-4 semaines | Continuer publication, surveiller email Google |
| **Post-validation** | Ongoing | Optimiser contenu News, surveiller analytics |

**Total avant potentielle acceptation** : **1,5 à 2 mois**

---

## Conclusion & recommandation

### ✅ **Tenter Publisher Center SI :**
- Vous pouvez publier **2-3 articles actualité/semaine** pendant 2+ mois
- Vous avez une équipe éditoriale identifiée
- Vous êtes prêt à professionnaliser l'approche "média d'information"

### ❌ **Abandonner Publisher Center et privilégier alternatives SI :**
- Ressources limitées (1 personne, pas de temps pour actualité quotidienne)
- Focus principal = contenu éducatif evergreen (guides, cours)
- ROI incertain vs autres canaux (YouTube, TikTok, Facebook Groups)

**Mon avis personnel** : Pour Test Civique France, **Google Discover + YouTube + Réseaux sociaux** seront **10x plus efficaces** que Publisher Center. Gardez Publisher Center comme "bonus" si vous avez du temps, mais ne misez pas tout dessus.

---

## Support et ressources

- [Centre d'aide Google Publisher Center](https://support.google.com/publishercenter)
- [Critères d'éligibilité Google News](https://support.google.com/news/publisher-center/answer/9606710)
- [Politique de contenu Google News](https://support.google.com/news/publisher-center/answer/9605460)
- [Guide structured data Article](https://developers.google.com/search/docs/appearance/structured-data/article)
