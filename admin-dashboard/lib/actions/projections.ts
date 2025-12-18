// Prix des abonnements
const STANDARD_PRICE = 2.99;
const PREMIUM_PRICE = 6.99;

export type ProjectionParams = {
  currentStandard: number;
  currentPremium: number;
  // Croissance hebdomadaire estimée (%)
  weeklyGrowthStandard: number;
  weeklyGrowthPremium: number;
  // Taux de churn hebdomadaire (%)
  weeklyChurnStandard: number;
  weeklyChurnPremium: number;
  // Mois de projection
  months: number;
};

export type WeeklyProjection = {
  week: number;
  standard: number;
  premium: number;
  total: number;
  revenue: number;
  cumulativeRevenue: number;
};

export type ProjectionResult = {
  weeks: WeeklyProjection[];
  totalRevenue: number;
  avgMonthlyRevenue: number;
  finalStandard: number;
  finalPremium: number;
  growthRate: number;
  revenueGrowthRate: number;
};

export type SimulationParams = {
  newStandard: number;
  newPremium: number;
  retentionRate: number; // % qui restent après 1 mois
  months: number;
};

export type SimulationResult = {
  month: number;
  activeStandard: number;
  activePremium: number;
  monthlyRevenue: number;
  cumulativeRevenue: number;
};

export function calculateProjection(params: ProjectionParams): ProjectionResult {
  const weeks: WeeklyProjection[] = [];
  const totalWeeks = params.months * 4;

  let currentStandard = params.currentStandard;
  let currentPremium = params.currentPremium;
  let cumulativeRevenue = 0;

  for (let week = 1; week <= totalWeeks; week++) {
    // Appliquer croissance
    const newStandard = currentStandard * (params.weeklyGrowthStandard / 100);
    const newPremium = currentPremium * (params.weeklyGrowthPremium / 100);

    // Appliquer churn
    const churnStandard = currentStandard * (params.weeklyChurnStandard / 100);
    const churnPremium = currentPremium * (params.weeklyChurnPremium / 100);

    currentStandard = Math.max(0, currentStandard + newStandard - churnStandard);
    currentPremium = Math.max(0, currentPremium + newPremium - churnPremium);

    const revenue = (currentStandard * STANDARD_PRICE) + (currentPremium * PREMIUM_PRICE);
    cumulativeRevenue += revenue;

    weeks.push({
      week,
      standard: Math.round(currentStandard * 10) / 10,
      premium: Math.round(currentPremium * 10) / 10,
      total: Math.round((currentStandard + currentPremium) * 10) / 10,
      revenue: Math.round(revenue * 100) / 100,
      cumulativeRevenue: Math.round(cumulativeRevenue * 100) / 100,
    });
  }

  const initialTotal = params.currentStandard + params.currentPremium;
  const finalTotal = currentStandard + currentPremium;
  const growthRate = initialTotal > 0 
    ? Math.round(((finalTotal - initialTotal) / initialTotal) * 100)
    : 0;

  const initialRevenue = (params.currentStandard * STANDARD_PRICE) + (params.currentPremium * PREMIUM_PRICE);
  const finalRevenue = (currentStandard * STANDARD_PRICE) + (currentPremium * PREMIUM_PRICE);
  const revenueGrowthRate = initialRevenue > 0
    ? Math.round(((finalRevenue - initialRevenue) / initialRevenue) * 100)
    : 0;

  return {
    weeks,
    totalRevenue: Math.round(cumulativeRevenue * 100) / 100,
    avgMonthlyRevenue: Math.round((cumulativeRevenue / params.months) * 100) / 100,
    finalStandard: Math.round(currentStandard),
    finalPremium: Math.round(currentPremium),
    growthRate,
    revenueGrowthRate,
  };
}

export function simulateNewSubscriptions(params: SimulationParams): SimulationResult[] {
  const results: SimulationResult[] = [];
  
  let activeStandard = params.newStandard;
  let activePremium = params.newPremium;
  let cumulativeRevenue = 0;

  for (let month = 1; month <= params.months; month++) {
    // Appliquer le taux de rétention mensuel
    if (month > 1) {
      activeStandard = activeStandard * (params.retentionRate / 100);
      activePremium = activePremium * (params.retentionRate / 100);
    }

    // Revenus mensuels (4 semaines)
    const monthlyRevenue = (activeStandard * STANDARD_PRICE * 4) + (activePremium * PREMIUM_PRICE * 4);
    cumulativeRevenue += monthlyRevenue;

    results.push({
      month,
      activeStandard: Math.round(activeStandard * 10) / 10,
      activePremium: Math.round(activePremium * 10) / 10,
      monthlyRevenue: Math.round(monthlyRevenue * 100) / 100,
      cumulativeRevenue: Math.round(cumulativeRevenue * 100) / 100,
    });
  }

  return results;
}

export type RevenueGoal = {
  targetMonthlyRevenue: number;
  currentStandard: number;
  currentPremium: number;
  avgRetentionRate: number;
};

export type GoalAnalysis = {
  standardNeeded: number;
  premiumNeeded: number;
  mixedNeeded: { standard: number; premium: number };
  weeklyGrowthNeeded: number;
  monthsToReach: number;
};

export function analyzeRevenueGoal(goal: RevenueGoal): GoalAnalysis {
  // Revenus actuels par mois (4 semaines)
  const currentMonthly = ((goal.currentStandard * STANDARD_PRICE) + (goal.currentPremium * PREMIUM_PRICE)) * 4;
  const deficit = Math.max(0, goal.targetMonthlyRevenue - currentMonthly);

  // Si pas de déficit, déjà atteint
  if (deficit <= 0) {
    return {
      standardNeeded: 0,
      premiumNeeded: 0,
      mixedNeeded: { standard: 0, premium: 0 },
      weeklyGrowthNeeded: 0,
      monthsToReach: 0,
    };
  }

  // Combien d'abonnés supplémentaires pour atteindre l'objectif ?
  const standardNeeded = Math.ceil(deficit / (STANDARD_PRICE * 4));
  const premiumNeeded = Math.ceil(deficit / (PREMIUM_PRICE * 4));
  
  // Mix 50/50
  const mixDeficit = deficit / 2;
  const mixedNeeded = {
    standard: Math.ceil(mixDeficit / (STANDARD_PRICE * 4)),
    premium: Math.ceil(mixDeficit / (PREMIUM_PRICE * 4)),
  };

  // Croissance hebdomadaire nécessaire pour atteindre en 3 mois
  const currentTotal = goal.currentStandard + goal.currentPremium;
  const targetTotal = currentTotal + standardNeeded; // En utilisant seulement standard comme référence
  const weeksToReach = 12; // 3 mois
  let weeklyGrowthNeeded = 0;
  if (currentTotal > 0 && targetTotal > currentTotal) {
    weeklyGrowthNeeded = Math.round((Math.pow(targetTotal / currentTotal, 1 / weeksToReach) - 1) * 100);
  } else if (currentTotal === 0) {
    weeklyGrowthNeeded = 100; // Pas d'abonnés actuels
  }

  // Mois pour atteindre avec une croissance de 5% par semaine
  const growthRate = 0.05;
  let months = 0;
  let projected = currentMonthly;
  
  // Si revenus actuels = 0, utiliser une base minimale
  if (projected <= 0) {
    // Avec 0 abonnés, on ne peut pas calculer la croissance
    // On estime qu'il faut au moins le nombre d'abonnés nécessaires
    months = Math.ceil(standardNeeded / 4); // ~4 nouveaux abonnés par mois
  } else {
    while (projected < goal.targetMonthlyRevenue && months < 36) {
      projected *= Math.pow(1 + growthRate, 4);
      months++;
    }
  }

  return {
    standardNeeded: Math.max(0, standardNeeded),
    premiumNeeded: Math.max(0, premiumNeeded),
    mixedNeeded,
    weeklyGrowthNeeded: Math.max(0, weeklyGrowthNeeded),
    monthsToReach: months,
  };
}

export type ScenarioPreset = {
  name: string;
  description: string;
  weeklyGrowthStandard: number;
  weeklyGrowthPremium: number;
  weeklyChurnStandard: number;
  weeklyChurnPremium: number;
};

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    name: 'Pessimiste',
    description: 'Croissance lente, churn élevé',
    weeklyGrowthStandard: 2,
    weeklyGrowthPremium: 1,
    weeklyChurnStandard: 5,
    weeklyChurnPremium: 3,
  },
  {
    name: 'Réaliste',
    description: 'Croissance modérée, churn normal',
    weeklyGrowthStandard: 5,
    weeklyGrowthPremium: 3,
    weeklyChurnStandard: 3,
    weeklyChurnPremium: 2,
  },
  {
    name: 'Optimiste',
    description: 'Forte croissance, churn faible',
    weeklyGrowthStandard: 10,
    weeklyGrowthPremium: 8,
    weeklyChurnStandard: 2,
    weeklyChurnPremium: 1,
  },
  {
    name: 'Viral',
    description: 'Croissance explosive',
    weeklyGrowthStandard: 20,
    weeklyGrowthPremium: 15,
    weeklyChurnStandard: 1,
    weeklyChurnPremium: 0.5,
  },
];
