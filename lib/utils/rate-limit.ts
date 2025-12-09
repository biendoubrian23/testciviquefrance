/**
 * Rate Limiting simple pour les API routes
 * Utilise un Map en mémoire (compatible Vercel serverless)
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Store en mémoire (reset à chaque cold start, mais suffisant pour la protection)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Nettoyage périodique des entrées expirées (toutes les 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  windowMs: number;  // Fenêtre de temps en ms
  max: number;       // Nombre max de requêtes par fenêtre
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}

/**
 * Vérifie si une requête est autorisée selon le rate limit
 * @param identifier - Identifiant unique (IP, userId, etc.)
 * @param config - Configuration du rate limit
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Nouvelle entrée ou entrée expirée
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      success: true,
      remaining: config.max - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Entrée existante, vérifier le compteur
  if (entry.count >= config.max) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Incrémenter le compteur
  entry.count++;
  return {
    success: true,
    remaining: config.max - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Configurations prédéfinies pour différents endpoints
 */
export const RATE_LIMITS = {
  // Quiz start - 10 requêtes par minute (on ne démarre pas 10 quiz en 1 min)
  quizStart: { windowMs: 60 * 1000, max: 10 },
  
  // Quiz verify - 100 requêtes par minute (10 questions × quelques essais)
  quizVerify: { windowMs: 60 * 1000, max: 100 },
  
  // Quiz complete - 10 requêtes par minute
  quizComplete: { windowMs: 60 * 1000, max: 10 },
  
  // API générale - 120 requêtes par minute
  general: { windowMs: 60 * 1000, max: 120 },
  
  // Auth - 10 requêtes par minute (anti brute-force)
  auth: { windowMs: 60 * 1000, max: 10 },
  
  // Webhook Stripe - 100 requêtes par minute par IP (protection DDoS)
  stripeWebhook: { windowMs: 60 * 1000, max: 100 },
} as const;

/**
 * Helper pour créer une réponse 429 Too Many Requests
 */
export function rateLimitResponse(resetTime: number): Response {
  const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
  return new Response(
    JSON.stringify({ 
      error: 'Trop de requêtes. Veuillez patienter.',
      retryAfter 
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': retryAfter.toString(),
        'X-RateLimit-Reset': resetTime.toString(),
      },
    }
  );
}

/**
 * Extraire l'identifiant depuis une Request (IP + userId si disponible)
 */
export function getIdentifier(request: Request, userId?: string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  return userId ? `${ip}:${userId}` : ip;
}
