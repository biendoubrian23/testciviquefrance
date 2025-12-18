'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui';
import { UserRanking, SortCriteria, FilterCriteria } from '@/lib/actions/classement';
import { Trophy, Medal, Award, Clock, Target, Zap, TrendingUp } from 'lucide-react';

interface ClassementTableProps {
  initialData: UserRanking[];
  onSortChange: (sort: SortCriteria) => void;
  onFilterChange: (filters: FilterCriteria) => void;
  currentSort: SortCriteria;
  currentFilters: FilterCriteria;
}

export function ClassementTable({ 
  initialData, 
  onSortChange, 
  onFilterChange,
  currentSort,
  currentFilters,
}: ClassementTableProps) {
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (index === 1) return <Medal className="w-5 h-5 text-gray-400" />;
    if (index === 2) return <Award className="w-5 h-5 text-amber-600" />;
    return <span className="text-sm text-text-muted">{index + 1}</span>;
  };

  const getSubscriptionBadge = (type: 'gratuit' | 'standard' | 'premium') => {
    switch (type) {
      case 'premium':
        return <Badge variant="success">Premium</Badge>;
      case 'standard':
        return <Badge variant="warning">Standard</Badge>;
      default:
        return <Badge variant="default">Gratuit</Badge>;
    }
  };

  const sortOptions: { value: SortCriteria; label: string; icon: React.ReactNode }[] = [
    { value: 'taux_reussite', label: 'Taux de reussite', icon: <Target className="w-4 h-4" /> },
    { value: 'total_questions_repondues', label: 'Questions repondues', icon: <TrendingUp className="w-4 h-4" /> },
    { value: 'temps_total_etude', label: 'Temps d\'etude', icon: <Clock className="w-4 h-4" /> },
    { value: 'examens_reussis', label: 'Examens reussis', icon: <Trophy className="w-4 h-4" /> },
    { value: 'points_total', label: 'Points totaux', icon: <Zap className="w-4 h-4" /> },
    { value: 'streak_jours', label: 'Serie actuelle', icon: <Zap className="w-4 h-4" /> },
    { value: 'niveaux_completes', label: 'Niveaux completes', icon: <Award className="w-4 h-4" /> },
    { value: 'meilleur_score_examen', label: 'Meilleur score examen', icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <div>
      {/* Filtres et tri */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 border border-gray-200">
        {/* Tri */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text-secondary">Trier par:</label>
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value as SortCriteria)}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Filtre type abonnement */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text-secondary">Abonnement:</label>
          <select
            value={currentFilters.subscriptionType || 'all'}
            onChange={(e) => onFilterChange({ ...currentFilters, subscriptionType: e.target.value as any })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Tous</option>
            <option value="premium">Premium</option>
            <option value="standard">Standard</option>
            <option value="gratuit">Gratuit</option>
          </select>
        </div>

        {/* Filtre questions minimum */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text-secondary">Min. questions:</label>
          <select
            value={currentFilters.minQuestions || 0}
            onChange={(e) => onFilterChange({ ...currentFilters, minQuestions: parseInt(e.target.value) || undefined })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="0">Tous</option>
            <option value="10">10+</option>
            <option value="50">50+</option>
            <option value="100">100+</option>
            <option value="500">500+</option>
          </select>
        </div>

        {/* Filtre taux minimum */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text-secondary">Taux min.:</label>
          <select
            value={currentFilters.minTauxReussite || 0}
            onChange={(e) => onFilterChange({ ...currentFilters, minTauxReussite: parseInt(e.target.value) || undefined })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="0">Tous</option>
            <option value="50">50%+</option>
            <option value="70">70%+</option>
            <option value="80">80%+</option>
            <option value="90">90%+</option>
          </select>
        </div>

        {/* Checkbox filtres */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.hasExamens || false}
              onChange={(e) => onFilterChange({ ...currentFilters, hasExamens: e.target.checked || undefined })}
              className="w-4 h-4"
            />
            <span className="text-sm">Avec examens</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.actifRecent || false}
              onChange={(e) => onFilterChange({ ...currentFilters, actifRecent: e.target.checked || undefined })}
              className="w-4 h-4"
            />
            <span className="text-sm">Actif 7j</span>
          </label>
        </div>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">Rang</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">Utilisateur</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Abonnement</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Taux reussite</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Questions</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Examens</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Temps etude</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Points</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Serie</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-text-secondary uppercase">Niveaux</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {initialData.map((user, index) => (
              <tr key={user.id} className={index < 3 ? 'bg-yellow-50/30' : 'hover:bg-gray-50'}>
                <td className="px-4 py-4 w-16">
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(index)}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-medium text-text-primary">
                      {user.prenom && user.nom ? `${user.prenom} ${user.nom}` : 'Non renseigne'}
                    </p>
                    <p className="text-xs text-text-muted">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  {getSubscriptionBadge(user.subscription_type)}
                </td>
                <td className="px-4 py-4 text-center">
                  <span className={`font-bold ${
                    user.taux_reussite >= 80 ? 'text-green-600' :
                    user.taux_reussite >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {user.taux_reussite}%
                  </span>
                  <p className="text-xs text-text-muted">{user.total_bonnes_reponses}/{user.total_questions_repondues}</p>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="font-medium">{user.total_questions_repondues}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="font-medium">{user.examens_reussis}/{user.total_examens}</span>
                  {user.meilleur_score_examen > 0 && (
                    <p className="text-xs text-text-muted">Max: {user.meilleur_score_examen}%</p>
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="font-medium">{formatDuration(user.temps_total_etude)}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="font-medium">{user.points_total}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{user.streak_jours}</span>
                  </div>
                  <p className="text-xs text-text-muted">Max: {user.meilleure_serie}</p>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="font-medium">{user.niveaux_completes}</span>
                  <p className="text-xs text-text-muted">Niv. {user.niveau_max}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {initialData.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            Aucun utilisateur ne correspond aux criteres
          </div>
        )}
      </div>
    </div>
  );
}
