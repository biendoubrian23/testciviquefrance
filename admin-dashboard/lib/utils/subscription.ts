import { Profile } from '@/types';

// Price IDs pour différencier les plans
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];

const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type UserSubscriptionType = 'gratuit' | 'standard' | 'premium';

export function getUserSubscriptionType(user: Profile): UserSubscriptionType {
  if (!user.is_premium) {
    return 'gratuit';
  }

  if (user.stripe_price_id && PREMIUM_PRICE_IDS.includes(user.stripe_price_id)) {
    return 'premium';
  }

  if (user.stripe_price_id && STANDARD_PRICE_IDS.includes(user.stripe_price_id)) {
    return 'standard';
  }

  // Si is_premium = true mais pas de price_id reconnu, considérer comme premium par défaut
  return 'premium';
}

export function getUserSubscriptionLabel(type: UserSubscriptionType): string {
  switch (type) {
    case 'gratuit':
      return 'Gratuit';
    case 'standard':
      return 'Standard';
    case 'premium':
      return 'Premium';
  }
}

export function getUserSubscriptionBadgeVariant(type: UserSubscriptionType): 'success' | 'warning' | 'neutral' {
  switch (type) {
    case 'premium':
      return 'success';
    case 'standard':
      return 'warning';
    case 'gratuit':
      return 'neutral';
  }
}
