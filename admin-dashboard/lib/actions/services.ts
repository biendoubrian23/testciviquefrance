import { createAdminClient } from '@/lib/supabase/admin';

export type ServiceType = 'flashcards_2' | 'flashcards_5' | 'no_timer' | 'unlock_level' | 'all_levels' | 'exam_credits';

export type ServiceStats = {
  serviceType: ServiceType;
  count: number;
  revenue: number;
};

export type ServiceUser = {
  id: string;
  email: string;
  full_name: string | null;
  services: ServiceType[];
  exam_credits: number;
  unlock_level_count: number;
  all_levels_unlocked: boolean;
  totalSpent: number;
};

export type ServiceFilter = {
  serviceType?: ServiceType;
  startDate?: string;
  endDate?: string;
};

export const SERVICE_CONFIG: Record<ServiceType, { label: string; description: string; price: number }> = {
  flashcards_2: { 
    label: 'Flashcards 2 thèmes', 
    description: 'Accès aux flashcards de 2 thèmes au choix',
    price: 1.20 
  },
  flashcards_5: { 
    label: 'Flashcards 5 thèmes', 
    description: 'Accès aux flashcards de 5 thèmes au choix',
    price: 1.50 
  },
  no_timer: { 
    label: 'Mode sans chrono', 
    description: 'Désactive le chronomètre pour les quiz',
    price: 0.99 
  },
  unlock_level: { 
    label: 'Déblocage niveau', 
    description: 'Débloque un niveau supplémentaire',
    price: 0.99 
  },
  all_levels: { 
    label: 'Tous les niveaux', 
    description: 'Débloque tous les niveaux définitivement',
    price: 4.99 
  },
  exam_credits: { 
    label: 'Pack Examen', 
    description: 'Crédits pour examens blancs (+2)',
    price: 2.50 
  },
};


export async function getServicesStats(): Promise<ServiceStats[]> {
  const supabase = createAdminClient();

  const { data: profiles } = await supabase
    .from('profiles')
    .select('flashcards_2_themes, flashcards_5_themes, no_timer_enabled, unlock_level_count, all_levels_unlocked, exam_credits');

  if (!profiles || profiles.length === 0) {
    // Retourner des stats vides pour éviter les erreurs
    return Object.keys(SERVICE_CONFIG).map((key) => ({
      serviceType: key as ServiceType,
      count: 0,
      revenue: 0,
    }));
  }

  const stats: ServiceStats[] = [];

  // Flashcards 2 thèmes
  const flash2Count = profiles.filter(p => p.flashcards_2_themes && !p.flashcards_5_themes).length;
  stats.push({
    serviceType: 'flashcards_2',
    count: flash2Count,
    revenue: flash2Count * SERVICE_CONFIG.flashcards_2.price,
  });

  // Flashcards 5 thèmes
  const flash5Count = profiles.filter(p => p.flashcards_5_themes).length;
  stats.push({
    serviceType: 'flashcards_5',
    count: flash5Count,
    revenue: flash5Count * SERVICE_CONFIG.flashcards_5.price,
  });

  // Mode sans chrono
  const noTimerCount = profiles.filter(p => p.no_timer_enabled).length;
  stats.push({
    serviceType: 'no_timer',
    count: noTimerCount,
    revenue: noTimerCount * SERVICE_CONFIG.no_timer.price,
  });

  // Déblocage niveau (somme des unlock_level_count)
  const totalUnlocks = profiles.reduce((sum, p) => sum + (p.unlock_level_count || 0), 0);
  stats.push({
    serviceType: 'unlock_level',
    count: totalUnlocks,
    revenue: totalUnlocks * SERVICE_CONFIG.unlock_level.price,
  });

  // Tous les niveaux
  const allLevelsCount = profiles.filter(p => p.all_levels_unlocked).length;
  stats.push({
    serviceType: 'all_levels',
    count: allLevelsCount,
    revenue: allLevelsCount * SERVICE_CONFIG.all_levels.price,
  });

  // Pack Examen (crédits achetés) - chaque pack = 2 crédits
  const totalExamCredits = profiles.reduce((sum, p) => sum + (p.exam_credits || 0), 0);
  const packsSold = Math.ceil(totalExamCredits / 2);
  stats.push({
    serviceType: 'exam_credits',
    count: packsSold,
    revenue: packsSold * SERVICE_CONFIG.exam_credits.price,
  });

  return stats.sort((a, b) => b.revenue - a.revenue);
}

export async function getServiceUsers(filter: ServiceFilter = {}): Promise<ServiceUser[]> {
  const supabase = createAdminClient();

  let query = supabase
    .from('profiles')
    .select('id, email, prenom, nom, flashcards_2_themes, flashcards_5_themes, no_timer_enabled, unlock_level_count, all_levels_unlocked, exam_credits, last_purchase_at')
    .order('last_purchase_at', { ascending: false, nullsFirst: false });

  if (filter.startDate) {
    query = query.gte('last_purchase_at', filter.startDate);
  }
  if (filter.endDate) {
    query = query.lte('last_purchase_at', filter.endDate);
  }

  const { data: profiles } = await query;

  if (!profiles) return [];

  const users: ServiceUser[] = [];

  for (const profile of profiles) {
    const services: ServiceType[] = [];
    let totalSpent = 0;

    // Vérifier les services achetés
    if (profile.flashcards_5_themes) {
      services.push('flashcards_5');
      totalSpent += SERVICE_CONFIG.flashcards_5.price;
    } else if (profile.flashcards_2_themes) {
      services.push('flashcards_2');
      totalSpent += SERVICE_CONFIG.flashcards_2.price;
    }

    if (profile.no_timer_enabled) {
      services.push('no_timer');
      totalSpent += SERVICE_CONFIG.no_timer.price;
    }

    if (profile.unlock_level_count > 0) {
      services.push('unlock_level');
      totalSpent += profile.unlock_level_count * SERVICE_CONFIG.unlock_level.price;
    }

    if (profile.all_levels_unlocked) {
      services.push('all_levels');
      totalSpent += SERVICE_CONFIG.all_levels.price;
    }

    if (profile.exam_credits > 0) {
      services.push('exam_credits');
      // Chaque pack = 2 crédits
      const packs = Math.ceil(profile.exam_credits / 2);
      totalSpent += packs * SERVICE_CONFIG.exam_credits.price;
    }

    // Filtrer par type de service si spécifié
    if (filter.serviceType && !services.includes(filter.serviceType)) {
      continue;
    }

    // N'ajouter que les utilisateurs avec au moins un service
    if (services.length > 0) {
      users.push({
        id: profile.id,
        email: profile.email,
        full_name: profile.prenom && profile.nom 
          ? `${profile.prenom} ${profile.nom}` 
          : profile.prenom || profile.nom || null,
        services,
        exam_credits: profile.exam_credits || 0,
        unlock_level_count: profile.unlock_level_count || 0,
        all_levels_unlocked: profile.all_levels_unlocked || false,
        totalSpent,
      });
    }
  }

  return users;
}

export async function getTotalServicesRevenue(): Promise<number> {
  const stats = await getServicesStats();
  return stats.reduce((sum, s) => sum + s.revenue, 0);
}
