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


// Mapping des product_type de la table achats vers nos ServiceType
const PRODUCT_TYPE_MAPPING: Record<string, ServiceType> = {
  'flashcards_2_themes': 'flashcards_2',
  'flashcards_5_themes': 'flashcards_5',
  'flashcards_2': 'flashcards_2',
  'flashcards_5': 'flashcards_5',
  'no_timer': 'no_timer',
  'unlock_level': 'unlock_level',
  'pack_examen': 'exam_credits',
};

export async function getServicesStats(): Promise<ServiceStats[]> {
  const supabase = createAdminClient();

  // Récupérer les achats de services annexes depuis la table achats
  const { data: achats, error } = await supabase
    .from('achats')
    .select('product_type, amount')
    .eq('status', 'completed')
    .in('product_type', [
      'flashcards_2_themes', 'flashcards_5_themes', 
      'flashcards_2', 'flashcards_5',
      'no_timer', 'unlock_level', 'pack_examen'
    ]);

  if (error) {
    console.error('Erreur récupération achats services:', error);
  }

  // Initialiser les stats pour tous les services
  const statsMap: Record<ServiceType, { count: number; revenue: number }> = {
    flashcards_2: { count: 0, revenue: 0 },
    flashcards_5: { count: 0, revenue: 0 },
    no_timer: { count: 0, revenue: 0 },
    unlock_level: { count: 0, revenue: 0 },
    all_levels: { count: 0, revenue: 0 },
    exam_credits: { count: 0, revenue: 0 },
  };

  if (!achats || achats.length === 0) {
    // Retourner des stats vides pour éviter les erreurs
    return Object.keys(SERVICE_CONFIG).map((key) => ({
      serviceType: key as ServiceType,
      count: 0,
      revenue: 0,
    }));
  }

  // Agréger les achats par type de service
  for (const achat of achats) {
    const serviceType = PRODUCT_TYPE_MAPPING[achat.product_type];
    if (serviceType && statsMap[serviceType]) {
      statsMap[serviceType].count += 1;
      statsMap[serviceType].revenue += achat.amount || 0;
    }
  }

  // Convertir en tableau et trier par revenu
  const stats: ServiceStats[] = Object.entries(statsMap).map(([key, value]) => ({
    serviceType: key as ServiceType,
    count: value.count,
    revenue: value.revenue,
  }));

  return stats.sort((a, b) => b.revenue - a.revenue);
}

export async function getServiceUsers(filter: ServiceFilter = {}): Promise<ServiceUser[]> {
  const supabase = createAdminClient();

  // Récupérer les achats de services annexes depuis la table achats
  let achatsQuery = supabase
    .from('achats')
    .select('user_id, product_type, amount, created_at')
    .eq('status', 'completed')
    .in('product_type', [
      'flashcards_2_themes', 'flashcards_5_themes', 
      'flashcards_2', 'flashcards_5',
      'no_timer', 'unlock_level', 'pack_examen'
    ])
    .order('created_at', { ascending: false });

  if (filter.startDate) {
    achatsQuery = achatsQuery.gte('created_at', filter.startDate);
  }
  if (filter.endDate) {
    achatsQuery = achatsQuery.lte('created_at', filter.endDate);
  }

  const { data: achats } = await achatsQuery;

  if (!achats || achats.length === 0) return [];

  // Grouper par user_id
  const userAchatsMap = new Map<string, { services: Set<ServiceType>; totalSpent: number; productTypes: string[] }>();
  
  for (const achat of achats) {
    const userId = achat.user_id;
    const serviceType = PRODUCT_TYPE_MAPPING[achat.product_type];
    
    // Filtrer par type de service si spécifié
    if (filter.serviceType && serviceType !== filter.serviceType) {
      continue;
    }
    
    if (!userAchatsMap.has(userId)) {
      userAchatsMap.set(userId, { services: new Set(), totalSpent: 0, productTypes: [] });
    }
    
    const userData = userAchatsMap.get(userId)!;
    if (serviceType) {
      userData.services.add(serviceType);
    }
    userData.totalSpent += achat.amount || 0;
    userData.productTypes.push(achat.product_type);
  }

  // Récupérer les profils des utilisateurs
  const userIds = Array.from(userAchatsMap.keys());
  
  if (userIds.length === 0) return [];

  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, email, prenom, nom, exam_credits, unlock_level_count, all_levels_unlocked')
    .in('id', userIds);

  if (!profiles) return [];

  const users: ServiceUser[] = [];

  for (const profile of profiles) {
    const userData = userAchatsMap.get(profile.id);
    if (!userData) continue;

    users.push({
      id: profile.id,
      email: profile.email,
      full_name: profile.prenom && profile.nom 
        ? `${profile.prenom} ${profile.nom}` 
        : profile.prenom || profile.nom || null,
      services: Array.from(userData.services),
      exam_credits: profile.exam_credits || 0,
      unlock_level_count: profile.unlock_level_count || 0,
      all_levels_unlocked: profile.all_levels_unlocked || false,
      totalSpent: userData.totalSpent,
    });
  }

  // Trier par total dépensé
  return users.sort((a, b) => b.totalSpent - a.totalSpent);
}

export async function getTotalServicesRevenue(): Promise<number> {
  const stats = await getServicesStats();
  return stats.reduce((sum, s) => sum + s.revenue, 0);
}
