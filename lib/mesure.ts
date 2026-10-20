import posthog from "posthog-js";

/**
 * La mesure de la lecture des articles, et le seul fichier qui en parle à
 * PostHog pour eux.
 *
 * Portée de Cosme Check (`CosmetWiki/lib/mesure.ts`), de MemoryPilot et de
 * RevealChat, pour la même raison : le robot éditorial du matin
 * (`docs/seo/ROBOT.md`) doit lire, article par article, combien de gens
 * arrivent, jusqu'où ils lisent et s'ils touchent l'appel à s'inscrire. Les
 * noms d'événements sont **les mêmes** que sur les trois autres sites : le
 * robot les interroge avec les mêmes requêtes.
 *
 * | événement | quand | propriétés |
 * |---|---|---|
 * | `$pageview`, `$pageleave` | chaque page, et sa sortie (profondeur de défilement) | celles de PostHog (`components/analytics/PostHogProvider.tsx`) |
 * | `cta_clic` | un appel d'article est touché | `source` (`<slug>-<emplacement>`), `destination` (`inscription`), `slug`, `emplacement` |
 * | `section_atteinte` | un `h2` d'article entre à l'écran, une fois par visite | `slug`, `section` (son ancre), `index` (à partir de 1), `total` |
 *
 * L'entonnoir se poursuit avec les événements du site : `signup_completed`
 * (qui porte `campagne` et `emplacement` quand l'inscription vient d'un
 * article), `checkout_started`, puis le paiement relevé dans Stripe.
 *
 * ## Le consentement d'abord
 *
 * Le site a un bandeau cookies (`components/consent/CookieBanner.tsx`, clé
 * `tcf_cookie_consent_v1`). **Sans consentement aux cookies analytiques**
 * (refus, ou pas encore de réponse), PostHog tourne **sans cookie** :
 * `cookieless_mode: 'always'`, rien n'est écrit dans le navigateur, pas de
 * session replay, pas de carte de chaleur, pas de profil. Le visiteur est
 * compté par une empreinte calculée sur les serveurs de PostHog, dont le sel
 * change chaque jour : c'est une mesure d'audience, pas un pistage. **Avec
 * consentement**, la mesure complète d'avant reprend (cookie, replay masqué,
 * identité de l'utilisateur connecté), au chargement suivant.
 *
 * ⚠️ Le réglage « Cookieless server hash mode » du projet PostHog (112119)
 * doit rester actif : sans lui, PostHog jette ces événements sans rien dire.
 */

const CLE_CONSENTEMENT = "tcf_cookie_consent_v1";

/** `true` si le visiteur a accepté les cookies analytiques dans le bandeau. */
export function consentementAnalytique(): boolean {
  try {
    const brut = window.localStorage.getItem(CLE_CONSENTEMENT);
    if (!brut) return false;
    return JSON.parse(brut).analytics === true;
  } catch {
    // Navigation privée stricte, stockage bloqué : pas de consentement.
    return false;
  }
}

/**
 * Envoie un événement nommé, si PostHog tourne.
 *
 * `immediat` sert aux clics qui quittent la page : le navigateur coupe les
 * requêtes en cours à la navigation, et `sendBeacon` est le seul transport
 * qui survit.
 */
export function suivre(nom: string, proprietes: Record<string, unknown> = {}, immediat = false): void {
  // `__loaded` : sans clé PostHog (développement, préversion), rien n'est initialisé.
  if (typeof window === "undefined" || !(posthog as unknown as { __loaded?: boolean }).__loaded) return;
  try {
    posthog.capture(nom, proprietes, immediat ? { send_instantly: true, transport: "sendBeacon" } : undefined);
  } catch {
    // La mesure ne casse jamais une page.
  }
}

/**
 * La campagne d'un article, lue dans l'adresse de la page d'inscription
 * (`/signup?c=<slug>&m=blog&e=<emplacement>`) : elle part avec
 * `signup_completed` pour relier une inscription à l'article et à
 * l'emplacement qui l'ont amenée.
 */
export function campagneDeLAdresse(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const propre = (v: string | null) => (v && /^[a-z0-9-]{1,120}$/.test(v) ? v : null);
  const c = propre(p.get("c"));
  if (!c) return {};
  return {
    campagne: c,
    ...(propre(p.get("m")) ? { medium: propre(p.get("m")) as string } : {}),
    ...(propre(p.get("e")) ? { emplacement: propre(p.get("e")) as string } : {}),
  };
}
