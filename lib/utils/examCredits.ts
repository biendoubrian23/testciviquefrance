/**
 * Utilitaires pour gérer les crédits d'examens blancs
 */

import { createClient } from '@/lib/supabase/client';
import { STRIPE_PLANS, ALL_STANDARD_PRICE_IDS, ALL_PREMIUM_PRICE_IDS } from '@/lib/stripe/plans';

/**
 * Vérifier si un statut d'abonnement donne accès aux fonctionnalités premium
 * Inclut 'active' ET 'trialing' (période d'essai gratuite)
 */
export function isSubscriptionActive(status: string | null | undefined): boolean {
  return status === 'active' || status === 'trialing';
}

export interface ExamCreditsInfo {
  examCredits: number; // Crédits Pack Examen (achetés à l'unité)
  subscriptionExamsLimit: number; // Limite d'examens inclus dans l'abonnement (1 pour Standard, 3 pour Premium)
  subscriptionExamsUsed: number; // Nombre d'examens déjà utilisés avec l'abonnement
  subscriptionExamsRemaining: number; // Examens restants dans l'abonnement
  totalAvailable: number; // Total disponible (Pack Examen + Abonnement)
  hasAccess: boolean; // A-t-il accès à au moins 1 examen ?
  isFree: boolean; // Est un membre gratuit ?
  isStandard: boolean; // Est abonné Standard ?
  isPremium: boolean; // Est abonné Premium ?
}

/**
 * Récupérer les informations sur les examens blancs disponibles
 */
export async function getExamCreditsInfo(userId: string): Promise<ExamCreditsInfo> {
  const supabase = createClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('exam_credits, stripe_price_id, subscription_status, subscription_exams_used')
    .eq('id', userId)
    .single();

  if (!profile) {
    return {
      examCredits: 0,
      subscriptionExamsLimit: 0,
      subscriptionExamsUsed: 0,
      subscriptionExamsRemaining: 0,
      totalAvailable: 0,
      hasAccess: false,
      isFree: true,
      isStandard: false,
      isPremium: false,
    };
  }

  const examCredits = profile.exam_credits || 0;
  const subscriptionExamsUsed = profile.subscription_exams_used || 0;
  let subscriptionExamsLimit = 0;
  let isStandard = false;
  let isPremium = false;

  // Vérifier les examens inclus dans l'abonnement (inclut la période d'essai 'trialing')
  if (isSubscriptionActive(profile.subscription_status)) {
    // Utiliser les listes complètes de priceIds pour compatibilité dev/prod
    if (ALL_STANDARD_PRICE_IDS.includes(profile.stripe_price_id)) {
      subscriptionExamsLimit = 1; // Pack Standard = 1 examen
      isStandard = true;
    } else if (ALL_PREMIUM_PRICE_IDS.includes(profile.stripe_price_id)) {
      subscriptionExamsLimit = 3; // Pack Premium = 3 examens
      isPremium = true;
    }
  }

  const subscriptionExamsRemaining = Math.max(0, subscriptionExamsLimit - subscriptionExamsUsed);
  const totalAvailable = examCredits + subscriptionExamsRemaining;
  const isFree = !isStandard && !isPremium && examCredits === 0;

  return {
    examCredits,
    subscriptionExamsLimit,
    subscriptionExamsUsed,
    subscriptionExamsRemaining,
    totalAvailable,
    hasAccess: totalAvailable > 0,
    isFree,
    isStandard,
    isPremium,
  };
}

/**
 * Consommer un crédit d'examen blanc
 * Priorité : utilise d'abord les crédits Pack Examen, puis les examens de l'abonnement
 * Retourne true si le crédit a été consommé, false sinon
 */
export async function consumeExamCredit(userId: string): Promise<boolean> {
  const supabase = createClient();

  // Récupérer le profil actuel
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('exam_credits, subscription_exams_used, stripe_price_id, subscription_status')
    .eq('id', userId)
    .single();

  if (fetchError || !profile) {
    console.error('Erreur récupération profil:', fetchError);
    return false;
  }

  // Priorité 1 : Utiliser les crédits Pack Examen
  if (profile.exam_credits && profile.exam_credits > 0) {
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ exam_credits: profile.exam_credits - 1 })
      .eq('id', userId);

    if (updateError) {
      console.error('Erreur décrémentation crédit Pack Examen:', updateError);
      return false;
    }

    console.log(`✅ Crédit Pack Examen consommé pour user ${userId}. Reste: ${profile.exam_credits - 1}`);
    return true;
  }

  // Priorité 2 : Utiliser les examens de l'abonnement (inclut la période d'essai 'trialing')
  if (isSubscriptionActive(profile.subscription_status)) {
    const subscriptionExamsUsed = profile.subscription_exams_used || 0;
    let subscriptionExamsLimit = 0;

    // Utiliser les listes complètes de priceIds pour compatibilité dev/prod
    if (ALL_STANDARD_PRICE_IDS.includes(profile.stripe_price_id)) {
      subscriptionExamsLimit = 1;
    } else if (ALL_PREMIUM_PRICE_IDS.includes(profile.stripe_price_id)) {
      subscriptionExamsLimit = 3;
    }

    if (subscriptionExamsUsed < subscriptionExamsLimit) {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ subscription_exams_used: subscriptionExamsUsed + 1 })
        .eq('id', userId);

      if (updateError) {
        console.error('Erreur incrémentation examens abonnement:', updateError);
        return false;
      }

      console.log(`✅ Examen abonnement consommé pour user ${userId}. Utilisés: ${subscriptionExamsUsed + 1}/${subscriptionExamsLimit}`);
      return true;
    }
  }

  console.error('Aucun crédit d\'examen disponible');
  return false;
}

/**
 * Vérifier si l'utilisateur peut accéder à un examen blanc
 */
export async function canAccessExamBlanc(userId: string): Promise<boolean> {
  const info = await getExamCreditsInfo(userId);
  return info.hasAccess;
}

/**
 * Afficher un message d'information sur les examens disponibles
 */
export function getExamCreditsMessage(info: ExamCreditsInfo): string {
  if (info.isFree) {
    return 'Aucun examen blanc disponible. Souscrivez à un abonnement ou achetez le Pack Examen pour débloquer les examens.';
  }

  if (info.totalAvailable === 0) {
    return 'Vous avez épuisé tous vos examens blancs. Achetez le Pack Examen pour en obtenir 2 de plus.';
  }

  const parts: string[] = [];

  if (info.examCredits > 0) {
    parts.push(`${info.examCredits} Pack Examen`);
  }

  if (info.subscriptionExamsRemaining > 0) {
    const label = info.isStandard ? 'Standard' : info.isPremium ? 'Premium' : 'abonnement';
    parts.push(`${info.subscriptionExamsRemaining}/${info.subscriptionExamsLimit} ${label}`);
  }

  return `${info.totalAvailable} examen${info.totalAvailable > 1 ? 's' : ''} blanc${info.totalAvailable > 1 ? 's' : ''} disponible${info.totalAvailable > 1 ? 's' : ''} (${parts.join(' + ')})`;
}
