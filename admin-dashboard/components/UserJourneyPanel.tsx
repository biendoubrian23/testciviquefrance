'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, Clock, AlertTriangle, TrendingUp, BookOpen, Award, ShoppingCart, User, MapPin, MousePointer, Eye } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { UserJourneyData } from '@/lib/actions/getUserJourney';
import { ExamenBlanc } from '@/types';

// Types pour les données de navigation PostHog
interface NavigationData {
    pageViews: {
        path: string;
        url: string;
        count: number;
        lastVisited: string;
    }[];
    recentEvents: {
        event: string;
        timestamp: string;
        path: string;
        url: string;
    }[];
    totalPageviews: number;
    totalEvents: number;
    firstSeen: string | null;
    lastSeen: string | null;
    error?: string;
}

interface UserJourneyPanelProps {
    userId: string | null;
    onClose: () => void;
}

export function UserJourneyPanel({ userId, onClose }: UserJourneyPanelProps) {
    const [data, setData] = useState<UserJourneyData | null>(null);
    const [navData, setNavData] = useState<NavigationData | null>(null);
    const [loading, setLoading] = useState(false);
    const [navLoading, setNavLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) {
            setData(null);
            setNavData(null);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setNavLoading(true);
            setError(null);

            // Fetch journey data
            try {
                const response = await fetch(`/api/users/${userId}/journey`);
                if (!response.ok) throw new Error('Erreur de chargement');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError('Impossible de charger les données');
            } finally {
                setLoading(false);
            }

            // Fetch navigation data (PostHog)
            try {
                const navResponse = await fetch(`/api/users/${userId}/navigation`);
                if (navResponse.ok) {
                    const navResult = await navResponse.json();
                    setNavData(navResult);
                }
            } catch (err) {
                console.warn('Navigation data not available');
            } finally {
                setNavLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (!userId) return null;

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'Jamais';
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const formatRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Aujourd'hui";
        if (diffDays === 1) return 'Hier';
        if (diffDays < 7) return `Il y a ${diffDays} jours`;
        if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaine(s)`;
        return `Il y a ${Math.floor(diffDays / 30)} mois`;
    };

    const formatDuration = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours > 0) return `${hours}h ${minutes}min`;
        return `${minutes}min`;
    };

    return (
        <div className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in-right">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                        {loading ? (
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-32 mb-1"></div>
                                <div className="h-3 bg-gray-200 rounded w-48"></div>
                            </div>
                        ) : data ? (
                            <>
                                <h2 className="font-semibold text-lg text-gray-900">
                                    {data.profile.prenom && data.profile.nom
                                        ? `${data.profile.prenom} ${data.profile.nom}`
                                        : 'Non renseigné'}
                                </h2>
                                <p className="text-sm text-gray-500">{data.profile.email}</p>
                            </>
                        ) : null}
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Fermer"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>
            </div>

            {loading ? (
                <div className="p-6 space-y-4">
                    <div className="animate-pulse space-y-4">
                        <div className="h-32 bg-gray-200 rounded"></div>
                        <div className="h-48 bg-gray-200 rounded"></div>
                        <div className="h-32 bg-gray-200 rounded"></div>
                    </div>
                </div>
            ) : error ? (
                <div className="p-6 text-center text-red-500">
                    <AlertTriangle className="w-12 h-12 mx-auto mb-2" />
                    <p>{error}</p>
                </div>
            ) : data ? (
                <div className="p-4 space-y-6">
                    {/* Info inscription */}
                    <div className="text-sm text-gray-500">
                        Inscrit le {formatDate(data.profile.created_at)} ({formatRelativeTime(data.profile.created_at)})
                    </div>

                    {/* 📍 PARCOURS DE NAVIGATION - PostHog */}
                    <Card className="border-indigo-200 bg-indigo-50">
                        <h3 className="font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            Parcours de navigation
                            {navLoading && <span className="text-xs text-indigo-500 animate-pulse">Chargement...</span>}
                        </h3>

                        {navData && !navData.error ? (
                            <>
                                {/* Stats rapides */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div className="text-center p-2 bg-white rounded">
                                        <p className="text-xl font-bold text-indigo-600">{navData.totalPageviews}</p>
                                        <p className="text-xs text-gray-500">Pages vues</p>
                                    </div>
                                    <div className="text-center p-2 bg-white rounded">
                                        <p className="text-xl font-bold text-purple-600">{navData.totalEvents}</p>
                                        <p className="text-xs text-gray-500">Events</p>
                                    </div>
                                    <div className="text-center p-2 bg-white rounded">
                                        <p className="text-xl font-bold text-blue-600">{navData.pageViews.length}</p>
                                        <p className="text-xs text-gray-500">Pages uniques</p>
                                    </div>
                                </div>

                                {/* Pages les plus visitées */}
                                {navData.pageViews.length > 0 ? (
                                    <div className="space-y-2">
                                        <p className="text-xs font-medium text-indigo-700 flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            Pages les plus visitées
                                        </p>
                                        <div className="space-y-1 max-h-40 overflow-y-auto">
                                            {navData.pageViews.slice(0, 8).map((page, index) => (
                                                <div key={index} className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                                                    <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded text-xs flex items-center justify-center font-medium">
                                                        {page.count}
                                                    </span>
                                                    <span className="flex-1 truncate text-gray-700" title={page.url}>
                                                        {page.path}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-indigo-600 text-center py-2">Aucune page visitée</p>
                                )}

                                {/* Dernière activité PostHog */}
                                {navData.lastSeen && (
                                    <p className="text-xs text-indigo-500 mt-3 text-center">
                                        Dernière visite PostHog: {formatRelativeTime(navData.lastSeen)}
                                    </p>
                                )}
                            </>
                        ) : navData?.error ? (
                            <div className="text-sm text-indigo-600 text-center py-2">
                                <p>⚠️ {navData.error}</p>
                                <p className="text-xs mt-1">Configurez POSTHOG_PERSONAL_API_KEY et POSTHOG_PROJECT_ID</p>
                            </div>
                        ) : !navLoading && (
                            <p className="text-sm text-indigo-600 text-center py-2">
                                Données de navigation non disponibles
                            </p>
                        )}
                    </Card>

                    {/* Funnel */}
                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary-600" />
                            Funnel utilisateur
                        </h3>
                        <div className="space-y-3">
                            {Object.entries(data.funnel).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-3">
                                    {value.done ? (
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                    )}
                                    <span className={`flex-1 ${value.done ? 'text-gray-900' : 'text-gray-400'}`}>
                                        {key === 'inscription' && 'Inscription'}
                                        {key === 'onboarding' && 'Onboarding complété'}
                                        {key === 'premiereSession' && '1ère session d\'entraînement'}
                                        {key === 'premierExamen' && '1er examen blanc'}
                                        {key === 'premierAchat' && '1er achat'}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {value.date ? formatDate(value.date) : '—'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Points de blocage */}
                    {data.blocages.length > 0 && (
                        <Card className="border-orange-200 bg-orange-50">
                            <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                Points de blocage détectés
                            </h3>
                            <ul className="space-y-2">
                                {data.blocages.map((blocage, index) => (
                                    <li key={index} className="text-sm text-orange-700 flex items-start gap-2">
                                        <span className="text-orange-500">•</span>
                                        {blocage}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {/* Statistiques */}
                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary-600" />
                            Statistiques
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-primary-600">
                                    {data.statistiques?.total_questions_repondues || 0}
                                </p>
                                <p className="text-xs text-gray-500">Questions répondues</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-green-600">
                                    {data.statistiques && data.statistiques.total_questions_repondues > 0
                                        ? Math.round((data.statistiques.total_bonnes_reponses / data.statistiques.total_questions_repondues) * 100)
                                        : 0}%
                                </p>
                                <p className="text-xs text-gray-500">Taux de réussite</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-600">
                                    {data.recentSessions.filter(s => s.completed).length}
                                </p>
                                <p className="text-xs text-gray-500">Sessions complétées</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-purple-600">
                                    {data.recentExamens.filter(e => e.is_completed).length}
                                </p>
                                <p className="text-xs text-gray-500">Examens blancs</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg col-span-2">
                                <p className="text-2xl font-bold text-gray-700">
                                    {data.statistiques?.temps_total_etude
                                        ? formatDuration(data.statistiques.temps_total_etude)
                                        : '0min'}
                                </p>
                                <p className="text-xs text-gray-500">Temps d'étude total</p>
                            </div>
                        </div>
                        {data.statistiques?.derniere_activite && (
                            <p className="text-xs text-gray-500 mt-4 text-center">
                                Dernière activité: {formatRelativeTime(data.statistiques.derniere_activite)}
                            </p>
                        )}
                    </Card>

                    {/* Progression par catégorie */}
                    {data.progression.length > 0 && (
                        <Card>
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary-600" />
                                Progression par catégorie
                            </h3>
                            <div className="space-y-3">
                                {/* Grouper par catégorie */}
                                {Array.from(new Set(data.progression.map(p => p.categorie_id))).map(catId => {
                                    const catProgression = data.progression.filter(p => p.categorie_id === catId);
                                    const catName = catProgression[0]?.categorie_nom || 'Inconnu';
                                    const maxLevel = Math.max(...catProgression.map(p => p.niveau));
                                    const completedLevels = catProgression.filter(p => p.is_completed).length;
                                    const progressPercent = (completedLevels / 10) * 100;

                                    return (
                                        <div key={catId}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-700">{catName}</span>
                                                <span className="text-gray-500">Niveau {maxLevel}/10</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-primary-600 h-2 rounded-full transition-all"
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    )}

                    {/* Activité récente */}
                    <Card>
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary-600" />
                            Activité récente
                        </h3>
                        {data.recentSessions.length === 0 && data.recentExamens.length === 0 ? (
                            <p className="text-sm text-gray-500 text-center py-4">Aucune activité</p>
                        ) : (
                            <div className="space-y-2 max-h-64 overflow-y-auto">
                                {/* Fusionner sessions et examens, trier par date */}
                                {[
                                    ...data.recentSessions.map(s => ({ type: 'session' as const, data: s, date: s.started_at })),
                                    ...data.recentExamens.map(e => ({ type: 'examen' as const, data: e, date: e.started_at })),
                                ]
                                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                    .slice(0, 10)
                                    .map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm">
                                            {item.type === 'session' ? (
                                                <>
                                                    <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                                    <span className="flex-1 truncate">
                                                        {(item.data as any).categorie_nom} - Niveau {item.data.niveau}
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {item.data.score}/{(item.data as any).total_questions || 10}
                                                    </span>
                                                    {item.data.completed ? (
                                                        <Badge variant="success">✓</Badge>
                                                    ) : (
                                                        <Badge variant="warning">...</Badge>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <Award className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                                    <span className="flex-1">Examen blanc #{(item.data as ExamenBlanc).exam_number}</span>
                                                    <span className="text-gray-500">
                                                        {item.data.score}/{(item.data as ExamenBlanc).total_questions}
                                                    </span>
                                                    {(item.data as ExamenBlanc).is_completed ? (
                                                        (item.data as ExamenBlanc).passed ? (
                                                            <Badge variant="success">Réussi</Badge>
                                                        ) : (
                                                            <Badge variant="danger">Échoué</Badge>
                                                        )
                                                    ) : (
                                                        <Badge variant="warning">En cours</Badge>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </Card>

                    {/* Achats */}
                    {data.achats.length > 0 && (
                        <Card>
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 text-primary-600" />
                                Achats ({data.achats.length})
                            </h3>
                            <div className="space-y-2">
                                {data.achats.slice(0, 5).map((achat) => (
                                    <div key={achat.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                                        <span className="text-gray-700">{achat.product_type.replace(/_/g, ' ')}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{achat.amount}€</span>
                                            <span className="text-xs text-gray-500">{formatDate(achat.created_at)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>
            ) : null}
        </div>
    );
}
