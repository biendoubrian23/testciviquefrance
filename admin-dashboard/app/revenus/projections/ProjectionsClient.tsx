'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout';
import { StatCard, Card, Tooltip } from '@/components/ui';
import { 
  TrendingUp, 
  Target, 
  Calculator,
  Zap,
  ArrowRight,
  Info,
  BarChart3,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import { 
  calculateProjection, 
  simulateNewSubscriptions,
  analyzeRevenueGoal,
  SCENARIO_PRESETS,
  ProjectionParams,
  SimulationParams,
  RevenueGoal,
  ProjectionResult,
  SimulationResult,
  GoalAnalysis,
} from '@/lib/actions/projections';

interface ProjectionsClientProps {
  currentStandard: number;
  currentPremium: number;
}

export default function ProjectionsClient({ currentStandard, currentPremium }: ProjectionsClientProps) {
  // État pour les projections
  const [projectionParams, setProjectionParams] = useState<ProjectionParams>({
    currentStandard,
    currentPremium,
    weeklyGrowthStandard: 5,
    weeklyGrowthPremium: 3,
    weeklyChurnStandard: 3,
    weeklyChurnPremium: 2,
    months: 3,
  });
  const [projectionResult, setProjectionResult] = useState<ProjectionResult | null>(null);

  // État pour la simulation
  const [simulationParams, setSimulationParams] = useState<SimulationParams>({
    newStandard: 10,
    newPremium: 5,
    retentionRate: 80,
    months: 6,
  });
  const [simulationResult, setSimulationResult] = useState<SimulationResult[] | null>(null);

  // État pour l'objectif
  const [goalParams, setGoalParams] = useState<RevenueGoal>({
    targetMonthlyRevenue: 100,
    currentStandard,
    currentPremium,
    avgRetentionRate: 80,
  });
  const [goalResult, setGoalResult] = useState<GoalAnalysis | null>(null);

  // Appliquer un scénario preset
  const applyScenario = (index: number) => {
    const scenario = SCENARIO_PRESETS[index];
    setProjectionParams({
      ...projectionParams,
      weeklyGrowthStandard: scenario.weeklyGrowthStandard,
      weeklyGrowthPremium: scenario.weeklyGrowthPremium,
      weeklyChurnStandard: scenario.weeklyChurnStandard,
      weeklyChurnPremium: scenario.weeklyChurnPremium,
    });
  };

  // Calculer la projection
  const runProjection = () => {
    const result = calculateProjection(projectionParams);
    setProjectionResult(result);
  };

  // Lancer la simulation
  const runSimulation = () => {
    const result = simulateNewSubscriptions(simulationParams);
    setSimulationResult(result);
  };

  // Analyser l'objectif
  const analyzeGoal = () => {
    const result = analyzeRevenueGoal({
      ...goalParams,
      currentStandard: projectionParams.currentStandard,
      currentPremium: projectionParams.currentPremium,
    });
    setGoalResult(result);
  };

  // Lancer les calculs automatiquement au chargement
  useEffect(() => {
    // Calcul initial de la projection
    const initialProjection = {
      currentStandard,
      currentPremium,
      weeklyGrowthStandard: 5,
      weeklyGrowthPremium: 3,
      weeklyChurnStandard: 3,
      weeklyChurnPremium: 2,
      months: 3,
    };
    const result = calculateProjection(initialProjection);
    setProjectionResult(result);
    
    // Calcul initial de l'objectif
    const goalResult = analyzeRevenueGoal({
      targetMonthlyRevenue: 100,
      currentStandard,
      currentPremium,
      avgRetentionRate: 80,
    });
    setGoalResult(goalResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStandard, currentPremium]);

  // Formater les nombres pour éviter NaN
  const formatNumber = (num: number | undefined | null, decimals = 0): string => {
    if (num === undefined || num === null || isNaN(num) || !isFinite(num)) {
      return '0';
    }
    return decimals > 0 ? num.toFixed(decimals) : Math.round(num).toString();
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Analyse Intelligente & Projections" 
        subtitle="Simulez vos revenus futurs et planifiez votre croissance"
      />

      <div className="p-8">
        {/* Données actuelles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Standard actuels"
            value={projectionParams.currentStandard}
            subtitle="2.99€/sem chacun"
            icon={TrendingUp}
            variant="warning"
          />
          <StatCard
            title="Premium actuels"
            value={projectionParams.currentPremium}
            subtitle="6.99€/sem chacun"
            icon={TrendingUp}
            variant="success"
          />
          <StatCard
            title="Revenus/semaine actuels"
            value={`${formatNumber((projectionParams.currentStandard * 2.99) + (projectionParams.currentPremium * 6.99), 2)} €`}
            icon={Calculator}
            variant="primary"
          />
          <StatCard
            title="Revenus/mois actuels"
            value={`${formatNumber(((projectionParams.currentStandard * 2.99) + (projectionParams.currentPremium * 6.99)) * 4, 2)} €`}
            icon={Target}
            variant="info"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Projection */}
          <Card 
            title={
              <div className="flex items-center gap-2">
                <span>📈 Projection de croissance</span>
                <Tooltip title="Qu'est-ce que la Projection de croissance ?">
                  <div className="space-y-3">
                    <p><strong>À quoi ça sert ?</strong></p>
                    <p>Cet outil simule comment votre nombre d'abonnés et vos revenus vont évoluer dans le futur, basé sur des paramètres de croissance et de départ (churn).</p>
                    
                    <p><strong>Comment l'utiliser ?</strong></p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Choisissez un scénario rapide OU ajustez les paramètres manuellement</li>
                      <li>Définissez la période (1 à 12 mois)</li>
                      <li>Cliquez sur "Calculer la projection"</li>
                    </ol>

                    <p><strong>Comprendre les résultats :</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Abonnés finaux</strong> : Nombre prévu d'abonnés à la fin de la période</li>
                      <li><strong>Croissance</strong> : Évolution en % du nombre d'abonnés</li>
                      <li><strong>Revenus totaux</strong> : Somme de tous les revenus sur la période</li>
                      <li><strong>Moyenne/mois</strong> : Revenus moyens mensuels</li>
                    </ul>
                  </div>
                </Tooltip>
              </div>
            } 
            subtitle="Simulez l'évolution sur plusieurs mois"
          >
            <div className="space-y-6">
              {/* Scénarios prédéfinis */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="text-sm font-medium">Scénario rapide</label>
                  <Tooltip title="Scénarios prédéfinis">
                    <p>Les scénarios sont des configurations prêtes à l'emploi :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Pessimiste</strong> : Croissance lente, beaucoup de départs</li>
                      <li><strong>Réaliste</strong> : Croissance modérée, départs normaux</li>
                      <li><strong>Optimiste</strong> : Bonne croissance, peu de départs</li>
                      <li><strong>Viral</strong> : Croissance explosive (bouche-à-oreille)</li>
                    </ul>
                  </Tooltip>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {SCENARIO_PRESETS.map((scenario, idx) => (
                    <button
                      key={idx}
                      onClick={() => applyScenario(idx)}
                      className="px-3 py-2 text-xs border border-gray-300 hover:bg-primary-50 hover:border-primary-500 transition-colors rounded"
                    >
                      <div className="font-medium">{scenario.name}</div>
                      <div className="text-text-muted">{scenario.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paramètres détaillés */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Croissance Standard (%/sem)</label>
                    <Tooltip title="Croissance hebdomadaire">
                      <p><strong>Croissance %/semaine</strong> : Le pourcentage de nouveaux abonnés que vous gagnez chaque semaine par rapport au nombre actuel.</p>
                      <p className="mt-2"><strong>Exemple :</strong> Si vous avez 100 abonnés et une croissance de 5%/sem, vous gagnez ~5 nouveaux abonnés cette semaine.</p>
                      <p className="mt-2 text-xs text-gray-500">Valeur typique : 2-10%</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={projectionParams.weeklyGrowthStandard}
                    onChange={(e) => setProjectionParams({ ...projectionParams, weeklyGrowthStandard: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Croissance Premium (%/sem)</label>
                    <Tooltip title="Croissance Premium">
                      <p>Même principe que Standard, mais pour les abonnés Premium (6.99€/sem).</p>
                      <p className="mt-2">Les Premium croissent généralement moins vite car le prix est plus élevé.</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={projectionParams.weeklyGrowthPremium}
                    onChange={(e) => setProjectionParams({ ...projectionParams, weeklyGrowthPremium: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Churn Standard (%/sem)</label>
                    <Tooltip title="Taux de désabonnement (Churn)">
                      <p><strong>Churn (désabonnement)</strong> : Le pourcentage d'abonnés qui arrêtent leur abonnement chaque semaine.</p>
                      <p className="mt-2"><strong>Exemple :</strong> Si vous avez 100 abonnés et un churn de 3%/sem, vous perdez ~3 abonnés cette semaine.</p>
                      <p className="mt-2"><strong>Important :</strong> Si le churn est supérieur à la croissance, vous perdez des abonnés !</p>
                      <p className="mt-2 text-xs text-gray-500">Valeur typique : 1-5%</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={projectionParams.weeklyChurnStandard}
                    onChange={(e) => setProjectionParams({ ...projectionParams, weeklyChurnStandard: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Churn Premium (%/sem)</label>
                    <Tooltip title="Churn Premium">
                      <p>Taux de désabonnement des utilisateurs Premium.</p>
                      <p className="mt-2">Les Premium ont généralement un churn plus faible car ils sont plus engagés.</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={projectionParams.weeklyChurnPremium}
                    onChange={(e) => setProjectionParams({ ...projectionParams, weeklyChurnPremium: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Période de projection</label>
                <select
                  value={projectionParams.months}
                  onChange={(e) => setProjectionParams({ ...projectionParams, months: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value={1}>1 mois</option>
                  <option value={3}>3 mois</option>
                  <option value={6}>6 mois</option>
                  <option value={12}>1 an</option>
                </select>
              </div>

              <button
                onClick={runProjection}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 rounded"
              >
                <Play className="w-5 h-5" />
                Calculer la projection
              </button>

              {/* Résultats projection */}
              {projectionResult && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    <h4 className="font-semibold">Résultats après {projectionParams.months} mois</h4>
                    <Tooltip title="Comprendre les résultats">
                      <ul className="space-y-2">
                        <li><strong>Abonnés finaux</strong> : Combien d'abonnés vous aurez à la fin de la période simulée</li>
                        <li><strong>Croissance</strong> : L'évolution du nombre total d'abonnés en pourcentage</li>
                        <li><strong>Revenus totaux</strong> : La somme de tous les paiements reçus pendant la période</li>
                        <li><strong>Moyenne/mois</strong> : Les revenus totaux divisés par le nombre de mois</li>
                      </ul>
                    </Tooltip>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white border rounded">
                      <div className="text-sm text-text-muted">Abonnés finaux</div>
                      <div className="text-2xl font-bold text-primary-600">
                        {formatNumber(projectionResult.finalStandard + projectionResult.finalPremium)}
                      </div>
                      <div className="text-xs text-text-muted">
                        {formatNumber(projectionResult.finalStandard)} Std + {formatNumber(projectionResult.finalPremium)} Prem
                      </div>
                    </div>
                    <div className="p-3 bg-white border rounded">
                      <div className="text-sm text-text-muted">Croissance</div>
                      <div className={`text-2xl font-bold ${projectionResult.growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {projectionResult.growthRate > 0 ? '+' : ''}{formatNumber(projectionResult.growthRate)}%
                      </div>
                    </div>
                    <div className="p-3 bg-white border rounded">
                      <div className="text-sm text-text-muted">Revenus totaux</div>
                      <div className="text-2xl font-bold text-green-600">
                        {formatNumber(projectionResult.totalRevenue, 2)} €
                      </div>
                    </div>
                    <div className="p-3 bg-white border rounded">
                      <div className="text-sm text-text-muted">Moyenne/mois</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {formatNumber(projectionResult.avgMonthlyRevenue, 2)} €
                      </div>
                    </div>
                  </div>

                  {/* Tableau détaillé */}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium text-primary-600">
                      Voir le détail semaine par semaine
                    </summary>
                    <div className="mt-2 max-h-48 overflow-y-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-2 py-1 text-left">Sem.</th>
                            <th className="px-2 py-1 text-right">Std</th>
                            <th className="px-2 py-1 text-right">Prem</th>
                            <th className="px-2 py-1 text-right">Rev/sem</th>
                            <th className="px-2 py-1 text-right">Cumulé</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectionResult.weeks.map((week) => (
                            <tr key={week.week} className="border-b">
                              <td className="px-2 py-1">{week.week}</td>
                              <td className="px-2 py-1 text-right">{formatNumber(week.standard, 1)}</td>
                              <td className="px-2 py-1 text-right">{formatNumber(week.premium, 1)}</td>
                              <td className="px-2 py-1 text-right">{formatNumber(week.revenue, 2)}€</td>
                              <td className="px-2 py-1 text-right font-medium">{formatNumber(week.cumulativeRevenue, 2)}€</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                </div>
              )}
            </div>
          </Card>

          {/* Section Simulation */}
          <Card 
            title={
              <div className="flex items-center gap-2">
                <span>🧮 Simulateur d'abonnements</span>
                <Tooltip title="Qu'est-ce que le Simulateur ?">
                  <div className="space-y-3">
                    <p><strong>À quoi ça sert ?</strong></p>
                    <p>Simulez l'impact de nouveaux abonnés sur vos revenus. Répondez à la question : "Si X personnes s'abonnent aujourd'hui, combien vais-je gagner ?"</p>
                    
                    <p><strong>Comment l'utiliser ?</strong></p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Entrez le nombre de nouveaux abonnés Standard et Premium</li>
                      <li>Ajustez le taux de rétention (combien restent abonnés)</li>
                      <li>Choisissez la période de simulation</li>
                      <li>Cliquez sur "Lancer la simulation"</li>
                    </ol>

                    <p><strong>Différence avec Projection :</strong></p>
                    <p>La Projection calcule l'évolution de vos abonnés actuels. Le Simulateur calcule l'impact de NOUVEAUX abonnés ajoutés.</p>
                  </div>
                </Tooltip>
              </div>
            }
            subtitle="Que se passe-t-il si X personnes s'abonnent ?"
          >
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <Info className="w-4 h-4 inline mr-2" />
                Simulez l'impact de nouveaux abonnés sur vos revenus
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Nouveaux Standard</label>
                    <Tooltip title="Nouveaux abonnés Standard">
                      <p>Nombre de nouvelles personnes qui s'abonnent à l'offre Standard (2.99€/semaine).</p>
                      <p className="mt-2"><strong>Exemple :</strong> Si vous lancez une campagne marketing et attendez 10 nouveaux abonnés Standard.</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={simulationParams.newStandard}
                    onChange={(e) => setSimulationParams({ ...simulationParams, newStandard: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label className="text-sm font-medium">Nouveaux Premium</label>
                    <Tooltip title="Nouveaux abonnés Premium">
                      <p>Nombre de nouvelles personnes qui s'abonnent à l'offre Premium (6.99€/semaine).</p>
                      <p className="mt-2">Les Premium rapportent plus mais sont généralement moins nombreux.</p>
                    </Tooltip>
                  </div>
                  <input
                    type="number"
                    value={simulationParams.newPremium}
                    onChange={(e) => setSimulationParams({ ...simulationParams, newPremium: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm font-medium">Taux de rétention mensuel (%)</label>
                  <Tooltip title="Taux de rétention">
                    <p><strong>Rétention</strong> : Le pourcentage d'abonnés qui RESTENT abonnés chaque mois.</p>
                    <p className="mt-2"><strong>Exemple :</strong> Avec 80% de rétention et 100 abonnés :</p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Mois 1 : 100 abonnés</li>
                      <li>Mois 2 : 80 abonnés (80%)</li>
                      <li>Mois 3 : 64 abonnés (80% de 80)</li>
                    </ul>
                    <p className="mt-2 text-xs text-gray-500">80% = bon taux, 90%+ = excellent</p>
                  </Tooltip>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={simulationParams.retentionRate}
                  onChange={(e) => setSimulationParams({ ...simulationParams, retentionRate: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center font-medium">{simulationParams.retentionRate}%</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Période de simulation</label>
                <select
                  value={simulationParams.months}
                  onChange={(e) => setSimulationParams({ ...simulationParams, months: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value={3}>3 mois</option>
                  <option value={6}>6 mois</option>
                  <option value={12}>12 mois</option>
                </select>
              </div>

              <button
                onClick={runSimulation}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-medium hover:bg-green-700 rounded"
              >
                <Zap className="w-5 h-5" />
                Lancer la simulation
              </button>

              {/* Résultats simulation */}
              {simulationResult && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="font-semibold">Résultats de la simulation</h4>
                    <Tooltip title="Comprendre le tableau">
                      <ul className="space-y-2">
                        <li><strong>Mois</strong> : Le mois de la simulation</li>
                        <li><strong>Actifs</strong> : Nombre d'abonnés encore actifs (décroît avec la rétention)</li>
                        <li><strong>Rev/mois</strong> : Revenus générés ce mois-là (4 semaines × prix × abonnés)</li>
                        <li><strong>Cumulé</strong> : Total des revenus depuis le début</li>
                      </ul>
                    </Tooltip>
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2 text-left">Mois</th>
                        <th className="px-3 py-2 text-right">Actifs</th>
                        <th className="px-3 py-2 text-right">Rev/mois</th>
                        <th className="px-3 py-2 text-right">Cumulé</th>
                      </tr>
                    </thead>
                    <tbody>
                      {simulationResult.map((month) => (
                        <tr key={month.month} className="border-b">
                          <td className="px-3 py-2">Mois {month.month}</td>
                          <td className="px-3 py-2 text-right">
                            {formatNumber(month.activeStandard + month.activePremium, 1)}
                          </td>
                          <td className="px-3 py-2 text-right text-green-600 font-medium">
                            {formatNumber(month.monthlyRevenue, 2)} €
                          </td>
                          <td className="px-3 py-2 text-right font-bold">
                            {formatNumber(month.cumulativeRevenue, 2)} €
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Section Objectif */}
        <Card 
          title={
            <div className="flex items-center gap-2">
              <span>🎯 Atteindre un objectif de revenus</span>
              <Tooltip title="Qu'est-ce que l'Objectif de revenus ?">
                <div className="space-y-3">
                  <p><strong>À quoi ça sert ?</strong></p>
                  <p>Calculez combien d'abonnés vous devez avoir pour atteindre un objectif de revenus mensuels.</p>
                  
                  <p><strong>Comment l'utiliser ?</strong></p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Entrez votre objectif (ex: 500€/mois)</li>
                    <li>Cliquez sur "Analyser l'objectif"</li>
                    <li>Découvrez les différentes façons d'y arriver</li>
                  </ol>

                  <p><strong>Les résultats montrent :</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Combien d'abonnés Standard il faudrait</li>
                    <li>Combien d'abonnés Premium il faudrait</li>
                    <li>Un mix des deux</li>
                    <li>Combien de temps pour y arriver avec une croissance de 5%/sem</li>
                  </ul>
                </div>
              </Tooltip>
            </div>
          }
          subtitle="Combien d'abonnés pour atteindre votre objectif ?" 
          className="mt-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm font-medium">Objectif de revenus mensuels (€)</label>
                  <Tooltip title="Objectif mensuel">
                    <p>Le montant que vous souhaitez gagner chaque mois avec les abonnements.</p>
                    <p className="mt-2"><strong>Note :</strong> Cela prend en compte vos abonnés actuels. L'outil calcule combien vous devez en AJOUTER.</p>
                  </Tooltip>
                </div>
                <input
                  type="number"
                  value={goalParams.targetMonthlyRevenue}
                  onChange={(e) => setGoalParams({ ...goalParams, targetMonthlyRevenue: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-lg"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {[50, 100, 500, 1000, 5000].map((value) => (
                  <button
                    key={value}
                    onClick={() => setGoalParams({ ...goalParams, targetMonthlyRevenue: value })}
                    className="px-3 py-1 text-sm border border-gray-300 hover:bg-primary-50 hover:border-primary-500 rounded"
                  >
                    {value}€
                  </button>
                ))}
              </div>

              <button
                onClick={analyzeGoal}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white font-medium hover:bg-purple-700 rounded"
              >
                <Target className="w-5 h-5" />
                Analyser l'objectif
              </button>
            </div>

            {/* Résultats objectif */}
            {goalResult && (
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg space-y-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-purple-800">
                    Pour atteindre {goalParams.targetMonthlyRevenue}€/mois
                  </h4>
                  <Tooltip title="Comprendre ces résultats">
                    <div className="space-y-2">
                      <p>Ces calculs montrent COMBIEN d'abonnés supplémentaires il vous faut :</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Avec Standard</strong> : Si vous n'ajoutez que des abonnés à 2.99€/sem</li>
                        <li><strong>Avec Premium</strong> : Si vous n'ajoutez que des abonnés à 6.99€/sem (moins d'abonnés nécessaires)</li>
                        <li><strong>Mix 50/50</strong> : Moitié Standard, moitié Premium</li>
                        <li><strong>Avec 5%/sem</strong> : Temps estimé si vos abonnés actuels croissent de 5% par semaine</li>
                      </ul>
                    </div>
                  </Tooltip>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 bg-white border rounded">
                    <div className="text-sm text-text-muted">Avec seulement des Standard (2.99€/sem)</div>
                    <div className="text-xl font-bold text-orange-600">
                      +{formatNumber(goalResult.standardNeeded)} abonnés
                    </div>
                  </div>

                  <div className="p-3 bg-white border rounded">
                    <div className="text-sm text-text-muted">Avec seulement des Premium (6.99€/sem)</div>
                    <div className="text-xl font-bold text-green-600">
                      +{formatNumber(goalResult.premiumNeeded)} abonnés
                    </div>
                  </div>

                  <div className="p-3 bg-white border rounded">
                    <div className="text-sm text-text-muted">Avec un mix 50/50</div>
                    <div className="text-xl font-bold text-blue-600">
                      +{formatNumber(goalResult.mixedNeeded.standard)} Std + {formatNumber(goalResult.mixedNeeded.premium)} Prem
                    </div>
                  </div>

                  <div className="p-3 bg-white border rounded">
                    <div className="text-sm text-text-muted">Avec 5% de croissance/semaine</div>
                    <div className="text-xl font-bold text-purple-600">
                      {goalResult.monthsToReach > 0 
                        ? `Atteint en ~${formatNumber(goalResult.monthsToReach)} mois`
                        : 'Déjà atteint ! 🎉'}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Lien retour */}
        <div className="mt-8">
          <Link 
            href="/revenus"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Retour aux revenus
          </Link>
        </div>
      </div>
    </div>
  );
}
