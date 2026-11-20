# Bilan Vercel du 10/12/2026 : peut-on repasser en offre gratuite ?

Consigne de la session lancée par la tâche planifiée « TestCivique Bilan Vercel »
(`scripts/vercel/bilan.ps1`). Tu travailles **en lecture seule** chez Vercel.

## Le contexte

- Sur 30 jours, du 21/10 au 20/11/2026, Vercel a compté **2,2 M de requêtes CDN** pour
  `testciviquefrance`. L'offre Hobby en inclut **1 M par mois**. Le site a été mis en
  pause (402), et Brian a pris l'offre Pro le 20/11/2026. La période Pro va du 20/11 au
  **20/12/2026** ; elle se renouvelle seule ce jour-là.
- Les corrections sont en ligne depuis le 20/11/2026 vers 15 h (commit `9e0f877`) :
  plus de service worker PWA (il téléchargeait environ 230 fichiers par visiteur),
  `prefetch={false}` sur tous les liens, plus de manifeste PWA.
- Estimation faite le 20/11 : 300 000 à 500 000 requêtes par mois après corrections.
- Le classement de référence, avant corrections (30 jours) : `/articles/[slug]` 46 K,
  `/fallback-….js` 22 K, `/signup` 19 K, `/logo.png` 16 K, `/` 15 K, chaque chunk JS
  de 11 K à 15 K. Robots : meta-webindexer 36 K, google-inspectiontool 16 K,
  shapbot 10 K, facebookexternalhit 9,3 K, bingbot 9,2 K, meta-externalagent 8,3 K,
  oai-searchbot 7,3 K. Les robots faisaient environ 120 K au total.
- Brian veut repasser en Hobby **entre le 17 et le 19/12/2026**, avant le
  renouvellement. L'offre Hobby compte sur les **30 derniers jours** : à la date de la
  rétrogradation, la fenêtre contiendra encore les jours du 17 au 20/11, d'avant les
  corrections. C'est elle qu'il faut estimer, pas le total du jour.

## Ce que tu fais

1. **Chrome** (`mcp__claude-in-chrome`) : `tabs_context_mcp`, puis un onglet neuf.
   Le compte Vercel de Brian y est déjà connecté.
2. **Requêtes CDN** : ouvre
   `https://vercel.com/brians-projects-c95c9792/testciviquefrance/observability/cdn-requests?period=30d`,
   puis la même adresse avec `period=14d` et `period=7d`. Note le total de chaque
   période. La moyenne par jour **après corrections** se lit sur 14 jours et 7 jours.
   Relève aussi le top 20 des routes (`pageSize=50`) et le top 10 des robots (onglet
   « Bot Name »), sur 30 jours.
3. **Les autres compteurs, sur tout le compte** : l'offre Hobby compte tous les projets
   ensemble, y compris `admin-test-civique`. Ouvre la page Usage de l'équipe
   (`https://vercel.com/brians-projects-c95c9792/~/usage`, ou Usage depuis le menu de
   l'équipe), en « Last 30 Days ». Relève chaque produit : requêtes CDN, Fast Data
   Transfer, Fast Origin Transfer, appels et durée des fonctions, ISR, optimisation
   d'images, Web Analytics, minutes de build.
4. **Les limites Hobby du jour** : lis https://vercel.com/docs/plans/hobby et
   https://vercel.com/docs/limits (WebFetch). Ne te fie pas à ta mémoire.
5. **L'estimation au 18/12** pour chaque compteur : moyenne par jour après corrections
   × 27 jours, plus ce que Vercel a compté du 18 au 20/11 si tu peux le lire. Pour
   chaque compteur, en % de la limite Hobby.
6. **Le verdict** :
   - **Feu vert** si chaque compteur estimé reste sous 80 % de sa limite Hobby ;
   - **Prudence** entre 80 et 100 % (dis lequel et pourquoi) ;
   - **Rester en Pro** si un compteur dépasse : dis ce qui coûte et ce qu'on pourrait
     encore optimiser dans le code (sans rien modifier aujourd'hui).
7. **Le rapport** : écris `docs/vercel/bilan-2026-12-10.md`, court : le verdict en une
   phrase, le tableau des compteurs (30 j, 7 j, moyenne par jour, estimation au 18/12,
   limite Hobby, %), le top des routes et des robots comparé à la référence, et la
   marche à suivre. **Écris ce fichier en dernier** : son apparition déclenche la
   fenêtre de notification sur le PC.
8. **Préviens Brian** par e-mail, à son adresse `brianbiendou@gmail.com` (outil Gmail,
   `send_message`), objet « Vercel : feu vert pour repasser en gratuit » (ou
   « Vercel : prudence » / « Vercel : rester en Pro »). Le corps reprend le verdict, le
   tableau, et la marche à suivre ci-dessous. Si l'outil Gmail n'est pas disponible,
   dis-le dans le rapport : la fenêtre sur le PC suffira.

## La marche à suivre à donner à Brian (si feu vert)

- Entre le **17 et le 19/12/2026**, pas après le 20 : Vercel → Settings → Billing →
  **Downgrade Plan**.
- Ne jamais refuser un prélèvement ni bloquer la carte pour forcer l'arrêt : c'est ce
  qui met le compte en pause.
- Le lendemain, vérifier que le site répond et que les deux projets ne sont pas en
  pause.
- Rappel : l'offre Hobby est réservée à un usage personnel et non commercial ; le site
  vend des abonnements. Alternative si Vercel bloque : Cloudflare.

## Ce que tu ne fais pas

- Tu ne changes **rien** chez Vercel : pas de rétrogradation, pas de réglage, pas de
  paiement, pas de bouton « Upgrade » ni « Downgrade ». Seul Brian le fait.
- Tu ne modifies pas le code du site, tu ne commits pas, tu ne pousses pas.
- À la fin, ferme ton onglet, puis libère Chrome pour les robots : supprime
  `C:\Projet\.robot-chrome.lock` **seulement** s'il contient `testcivique-vercel`.
