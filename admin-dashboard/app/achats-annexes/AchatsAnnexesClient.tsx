'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout';
import { StatCard, Card, Badge, LoadingSpinner } from '@/components/ui';
import { 
  ShoppingBag, 
  Zap, 
  Timer,
  Lock,
  CreditCard,
  TrendingUp,
  Filter,
  Download,
  User,
  Calendar
} from 'lucide-react';
import { ServiceStats, ServiceUser, ServiceFilter, SERVICE_CONFIG } from '@/lib/actions/services';

interface AchatsAnnexesClientProps {
  initialStats: ServiceStats[];
  initialUsers: ServiceUser[];
  totalRevenue: number;
}

export default function AchatsAnnexesClient({ 
  initialStats, 
  initialUsers, 
  totalRevenue 
}: AchatsAnnexesClientProps) {
  const [stats] = useState<ServiceStats[]>(initialStats);
  const [users, setUsers] = useState<ServiceUser[]>(initialUsers);
  const [loading, setLoading] = useState(false);

  // Filtres
  const [filters, setFilters] = useState<ServiceFilter>({
    serviceType: undefined,
    startDate: undefined,
    endDate: undefined,
  });

  // Service le plus populaire
  const mostPopular = stats.reduce((prev, current) => 
    (prev.count > current.count) ? prev : current
  );

  // Service le plus rentable
  const mostProfitable = stats.reduce((prev, current) => 
    (prev.revenue > current.revenue) ? prev : current
  );

  // Total d'achats
  const totalPurchases = stats.reduce((sum, s) => sum + s.count, 0);

  // Icône par type de service
  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'flashcards_2_themes':
      case 'flashcards_5_themes':
        return Zap;
      case 'no_timer_enabled':
        return Timer;
      case 'unlock_level':
      case 'all_levels_unlocked':
        return Lock;
      case 'pack_examen':
        return CreditCard;
      default:
        return ShoppingBag;
    }
  };

  // Couleur par type de service
  const getServiceColor = (type: string): 'primary' | 'success' | 'warning' | 'info' | 'danger' => {
    switch (type) {
      case 'flashcards_2_themes':
        return 'info';
      case 'flashcards_5_themes':
        return 'success';
      case 'no_timer_enabled':
        return 'warning';
      case 'unlock_level':
        return 'primary';
      case 'all_levels_unlocked':
        return 'success';
      case 'pack_examen':
        return 'danger';
      default:
        return 'info';
    }
  };

  // Appliquer les filtres
  const applyFilters = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.serviceType) params.append('serviceType', filters.serviceType);
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);

      const response = await fetch(`/api/services?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Erreur lors du filtrage:', error);
    } finally {
      setLoading(false);
    }
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      serviceType: undefined,
      startDate: undefined,
      endDate: undefined,
    });
    setUsers(initialUsers);
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Achats Annexes" 
        subtitle="Services additionnels achetés par les utilisateurs"
      />

      <div className="p-8">
        {/* Stats globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total achats annexes"
            value={totalPurchases}
            subtitle="Tous services confondus"
            icon={ShoppingBag}
            variant="primary"
          />
          <StatCard
            title="Revenus services"
            value={`${totalRevenue.toFixed(2)} €`}
            subtitle="Revenus générés"
            icon={TrendingUp}
            variant="success"
          />
          <StatCard
            title="Service le plus populaire"
            value={SERVICE_CONFIG[mostPopular.serviceType]?.label || mostPopular.serviceType}
            subtitle={`${mostPopular.count} achats`}
            icon={getServiceIcon(mostPopular.serviceType)}
            variant="info"
          />
          <StatCard
            title="Service le plus rentable"
            value={SERVICE_CONFIG[mostProfitable.serviceType]?.label || mostProfitable.serviceType}
            subtitle={`${mostProfitable.revenue.toFixed(2)} €`}
            icon={getServiceIcon(mostProfitable.serviceType)}
            variant="warning"
          />
        </div>

        {/* Détail par service */}
        <Card title="📊 Statistiques par service" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => {
              const config = SERVICE_CONFIG[stat.serviceType];
              const Icon = getServiceIcon(stat.serviceType);
              const color = getServiceColor(stat.serviceType);
              
              return (
                <div 
                  key={stat.serviceType}
                  className={`p-4 border rounded-lg ${color === 'success' ? 'border-green-200 bg-green-50' : color === 'warning' ? 'border-yellow-200 bg-yellow-50' : color === 'info' ? 'border-blue-200 bg-blue-50' : color === 'danger' ? 'border-red-200 bg-red-50' : 'border-primary-200 bg-primary-50'}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{config?.label || stat.serviceType}</span>
                    </div>
                    <Badge variant={color}>{stat.count} achat{stat.count > 1 ? 's' : ''}</Badge>
                  </div>
                  <p className="text-sm text-text-muted mb-2">{config?.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-muted">Prix unitaire: {config?.price.toFixed(2)}€</span>
                    <span className="text-lg font-bold text-green-600">{stat.revenue.toFixed(2)} €</span>
                  </div>
                  {/* Barre de progression */}
                  <div className="mt-2">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${color === 'success' ? 'bg-green-500' : color === 'warning' ? 'bg-yellow-500' : color === 'info' ? 'bg-blue-500' : color === 'danger' ? 'bg-red-500' : 'bg-primary-500'}`}
                        style={{ width: `${Math.min((stat.count / Math.max(...stats.map(s => s.count))) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Filtres */}
        <Card title="🔍 Filtrer les utilisateurs" className="mb-8">
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-1">Type de service</label>
              <select
                value={filters.serviceType || ''}
                onChange={(e) => setFilters({ ...filters, serviceType: e.target.value || undefined })}
                className="px-3 py-2 border border-gray-300 min-w-[200px]"
              >
                <option value="">Tous les services</option>
                {Object.entries(SERVICE_CONFIG).map(([key, config]) => (
                  <option key={key} value={key}>{config.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date début</label>
              <input
                type="date"
                value={filters.startDate || ''}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value || undefined })}
                className="px-3 py-2 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date fin</label>
              <input
                type="date"
                value={filters.endDate || ''}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value || undefined })}
                className="px-3 py-2 border border-gray-300"
              />
            </div>

            <button
              onClick={applyFilters}
              disabled={loading}
              className="px-4 py-2 bg-primary-600 text-white font-medium hover:bg-primary-700 flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtrer
            </button>

            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 text-text-primary hover:bg-gray-50"
            >
              Réinitialiser
            </button>
          </div>
        </Card>

        {/* Liste des utilisateurs avec services */}
        <Card title="👥 Utilisateurs avec services annexes">
          {loading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-text-muted">
              Aucun utilisateur avec des services annexes
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Utilisateur</th>
                    <th className="text-left py-3 px-4 font-medium">Services achetés</th>
                    <th className="text-right py-3 px-4 font-medium">Crédits exam</th>
                    <th className="text-right py-3 px-4 font-medium">Niveaux débloqués</th>
                    <th className="text-right py-3 px-4 font-medium">Total dépensé</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-600" />
                          </div>
                          <div>
                            <div className="font-medium">{user.full_name || 'Sans nom'}</div>
                            <div className="text-sm text-text-muted">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {user.services.map((service, idx) => {
                            const config = SERVICE_CONFIG[service];
                            return (
                              <Badge key={idx} variant={getServiceColor(service)}>
                                {config?.label || service}
                              </Badge>
                            );
                          })}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {user.exam_credits > 0 ? (
                          <Badge variant="primary">{user.exam_credits}</Badge>
                        ) : '-'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {user.all_levels_unlocked ? (
                          <Badge variant="success">Tous</Badge>
                        ) : user.unlock_level_count > 0 ? (
                          <Badge variant="info">{user.unlock_level_count}</Badge>
                        ) : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-green-600">
                        {user.totalSpent.toFixed(2)} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* Résumé des revenus */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-green-800">Total des revenus services annexes</h3>
              <p className="text-sm text-green-600">{totalPurchases} achats par {users.length} utilisateurs</p>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {totalRevenue.toFixed(2)} €
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
