# Audit sécurité – Test Civique France

Date : 26 décembre 2025

## ⚠️ Limite importante (à lire)
On ne peut pas garantir « aucune faille possible » : la sécurité est un processus (correctifs, surveillance, rotation de secrets, revue continue). En revanche, on peut réduire drastiquement le risque avec une défense en profondeur et des garde-fous sur les zones critiques.

---

## Résumé en quelques lignes (priorités)
1. **Bloquer immédiatement** l’accès non authentifié à l’endpoint Stripe Customer Portal : ne jamais accepter un `customerId` envoyé par le client ; le dériver côté serveur depuis la session utilisateur.
2. **Protéger l’admin dashboard** : aujourd’hui les routes API admin semblent accessibles sans auth et utilisent une clé `service_role` (risque de fuite massive de données si exposé publiquement).
3. **Mettre Next.js à jour** vers une version patchée (un avis de sécurité DoS est remonté par `npm audit`).
4. **Désactiver le cache PWA sur l’API Supabase REST** (risque de mise en cache de données privées et fuite sur sessions partagées / après logout).
5. **Durcir les endpoints “spammy”** (contact + subscribe) : rate‑limit, CAPTCHA, et échapper/sanitiser le HTML.
6. **Vérifier RLS Supabase** sur toutes les tables “user data” + éviter toute logique “trust client” (ex: points/score envoyés par le navigateur).

---

## Périmètre audité
- Application Next.js principale (middleware, headers, CSP, PWA)
- Routes API applicatives (Stripe, quiz, contact, subscribe)
- Admin dashboard (routes API et usage de la clé Supabase `service_role`)
- Dépendances (via `npm audit --omit=dev`)

---

## Constats détaillés (priorisés)

### CRITIQUE – Endpoint Stripe Customer Portal non protégé
**Risque** : un attaquant peut créer une session du portail client Stripe si l’API accepte un `customerId` arbitraire (gestion d’abonnement, moyens de paiement, etc.).

**Ce que j’ai observé**
- L’endpoint de création de session portal consomme `customerId` depuis le JSON et appelle `stripe.billingPortal.sessions.create(...)` sans contrôle d’authentification ni vérification que le `customerId` appartient à l’utilisateur connecté.

**Correctif recommandé (design)**
- Ne jamais accepter `customerId` depuis le client.
- Sur le serveur :
  - vérifier l’utilisateur (`supabase.auth.getUser()` via cookies),
  - charger le profil en base (`profiles`) et récupérer `stripe_customer_id`,
  - créer la session portal pour ce `stripe_customer_id` uniquement.
- Ajouter rate‑limit et logs minimalistes.

**Mitigation immédiate (si tu ne peux pas coder tout de suite)**
- Désactiver temporairement l’endpoint ou le protéger par un secret serveur (header) le temps de faire le correctif propre.

---

### CRITIQUE – Admin dashboard potentiellement exposé (API sans auth) + `service_role`
**Risque** : si l’admin dashboard est déployé et accessible, ses routes API semblent renvoyer stats/utilisateurs/abonnements **sans contrôle d’accès**. Comme elles s’appuient sur une clé Supabase `service_role` (bypass RLS), c’est un scénario “exfiltration totale”.

**Correctifs recommandés**
- Mettre une barrière d’accès “avant même l’app” :
  - Vercel “Password protection” / SSO, ou
  - allowlist IP (si possible), ou
  - Basic Auth au niveau edge (reverse proxy), ou
  - au minimum un header secret (mieux que rien, pas idéal).
- En plus : exiger une auth applicative (Supabase) + check d’un rôle admin côté serveur (table `profiles` / claim JWT) avant toute réponse.
- Ne jamais exposer `SUPABASE_SERVICE_ROLE_KEY` ailleurs que côté serveur.

---

### ÉLEVÉ – Dépendances : Next.js vulnérable (DoS) selon `npm audit`
**Impact** : risque de déni de service (consommation CPU/mémoire) via Server Components.

**Action**
- Mettre à jour `next` et `eslint-config-next` vers une version patchée (idéalement la dernière stable compatible).
- Après mise à jour : exécuter un build et un parcours rapide des pages critiques.

---

### ÉLEVÉ – PWA : cache runtime sur Supabase REST
**Risque** : la stratégie PWA peut mettre en cache des réponses de `https://*.supabase.co/rest/...`.
- Sur un navigateur partagé, ou après déconnexion, un cache peut servir des données d’un ancien contexte.
- La clé de cache est l’URL : elle ne tient pas compte de l’Authorization header.

**Correctif recommandé**
- Passer ce pattern en `NetworkOnly` ou supprimer totalement ce runtime caching.
- Réserver le cache PWA aux ressources statiques publiques (fonts, images, JS build).

---

### ÉLEVÉ – Intégrité : endpoints quiz “trust client” (score/points)
**Risque** : un utilisateur peut envoyer un `score` gonflé et obtenir plus de points / progression si la logique serveur fait confiance aux champs envoyés.

**Correctifs recommandés**
- Calculer le score côté serveur à partir des réponses enregistrées.
- Vérifier que `sessionId` appartient à l’utilisateur (et mettre à jour avec une condition `eq('user_id', user.id)` ou via RLS stricte).
- Idempotence : empêcher qu’un même quiz soit “complété” plusieurs fois.

---

### MOYEN – CSP trop permissive (`unsafe-inline`, `unsafe-eval`, `wasm-unsafe-eval`)
**Risque** : une CSP permissive réduit fortement la protection anti‑XSS.

**Recommandations**
- Migrer vers une CSP à base de nonces/hashes et retirer `unsafe-eval` si possible.
- Réduire les domaines autorisés (surtout `connect-src`, `frame-src`).

---

### MOYEN – `dangerouslyAllowSVG: true`
**Risque** : les SVG peuvent contenir du contenu actif. Même si l’usage est limité, c’est un élargissement de surface XSS.

**Action**
- Désactiver si non indispensable. Sinon : whitelisting strict des sources et vérifier les usages.

---

### MOYEN – Endpoints “contact” / “subscribe” : spam + injection HTML email
**Risque**
- Abus par bot (envoi massif) → coûts, réputation domaine, blocage Brevo.
- Le HTML d’email inclut des champs utilisateur non échappés → injection HTML dans l’email reçu.

**Correctifs**
- Rate‑limit + éventuellement challenge CAPTCHA.
- Échapper/sanitiser `nom`, `sujet`, `message` avant d’insérer dans `htmlContent`.

---

## Checklist “sécuriser à mort” (pratique)

### Secrets et comptes (à faire en premier)
- Tourner (rotate) immédiatement : `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `BREVO_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` si tu suspectes une fuite.
- Activer du secret scanning (GitHub) + alertes, et interdire les commits de `.env` (déjà ignoré, mais garde une règle de repo / CI).

### Stripe
- Webhooks : signature obligatoire (déjà fait) + idempotence (enregistrer `event.id` traité en base).
- Customer Portal : créer la session **uniquement** depuis l’identité serveur (pas depuis un `customerId` client).

### Supabase
- RLS : activer et tester pour chaque table (profiles, sessions_quiz, resultats, gamification, statistiques, progression_niveaux, etc.).
- Policies : `SELECT/INSERT/UPDATE/DELETE` basées sur `auth.uid()`.
- Séparer strictement : clés publiques (`NEXT_PUBLIC_*`) vs secrets serveur (service role).

### Admin dashboard
- Mettre une barrière d’accès réseau (password/IP allow list) + auth applicative.
- Journaliser les accès admin et les actions sensibles.

### App / Next.js
- Mettre Next à jour (corrige les avis de sécurité).
- Réduire CSP (nonces/hashes) et retirer `unsafe-eval` quand possible.
- Supprimer le cache PWA sur endpoints authentifiés.

### Observabilité
- Logs : éviter PII ; ajouter alertes sur pics (webhook, login, contact).
- Mettre un WAF/CDN (si Vercel, regarder la couche protection + rate limiting distribué).

---

## Si tu veux aller plus loin (niveau “pro”)
- Faire une passe SAST/DAST : CodeQL + OWASP ZAP sur l’URL de staging.
- Mettre un rate‑limit distribué (Upstash Redis / KV) au lieu d’un Map mémoire.
- Ajouter une politique de divulgation et un monitoring (Sentry, alerting).
