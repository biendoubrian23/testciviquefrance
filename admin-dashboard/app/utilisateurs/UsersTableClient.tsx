'use client';

import { useState } from 'react';
import { DataTable, Badge } from '@/components/ui';
import { UserJourneyPanel } from '@/components/UserJourneyPanel';
import { Profile } from '@/types';
import { getUserSubscriptionType, getUserSubscriptionLabel, getUserSubscriptionBadgeVariant } from '@/lib/utils/subscription';

interface UsersTableClientProps {
    users: Profile[];
}

export function UsersTableClient({ users }: UsersTableClientProps) {
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const columns = [
        {
            key: 'user',
            header: 'Utilisateur',
            truncate: true,
            render: (user: Profile) => (
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-semibold text-sm lg:text-base">
                            {(user.prenom?.[0] || user.email?.[0] || '?').toUpperCase()}
                        </span>
                    </div>
                    <div className="min-w-0">
                        <p className="font-medium text-text-primary text-sm truncate">
                            {user.prenom && user.nom ? `${user.prenom} ${user.nom}` : 'Non renseigné'}
                        </p>
                        <p className="text-xs text-text-muted truncate">{user.email}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Abonn.',
            className: 'text-center',
            render: (user: Profile) => {
                const subscriptionType = getUserSubscriptionType(user);
                const label = getUserSubscriptionLabel(subscriptionType);
                const variant = getUserSubscriptionBadgeVariant(subscriptionType);

                return (
                    <div className="flex justify-center">
                        <Badge variant={variant}>{label}</Badge>
                    </div>
                );
            },
        },
        {
            key: 'credits',
            header: 'Crédits',
            className: 'text-center',
            hideOnMobile: true,
            render: (user: Profile) => (
                <span className="font-medium">{user.credits}</span>
            ),
        },
        {
            key: 'features',
            header: 'Options',
            hideOnMobile: true,
            render: (user: Profile) => (
                <div className="flex flex-wrap gap-1">
                    {user.no_timer_enabled && <Badge variant="info">Sans chrono</Badge>}
                    {user.flashcards_5_themes && <Badge variant="info">Flash 5</Badge>}
                    {user.flashcards_2_themes && !user.flashcards_5_themes && <Badge variant="info">Flash 2</Badge>}
                    {user.unlock_level_count > 0 && <Badge variant="warning">{user.unlock_level_count} débl.</Badge>}
                </div>
            ),
        },
        {
            key: 'onboarding',
            header: 'Onboard.',
            className: 'text-center',
            hideOnMobile: true,
            render: (user: Profile) => (
                <div className="flex justify-center">
                    {user.has_completed_onboarding ? (
                        <Badge variant="success">OK</Badge>
                    ) : (
                        <Badge variant="warning">...</Badge>
                    )}
                </div>
            ),
        },
        {
            key: 'created_at',
            header: 'Inscrit',
            hideOnMobile: true,
            render: (user: Profile) => (
                <span className="text-text-muted text-xs lg:text-sm">{formatDate(user.created_at)}</span>
            ),
        },
    ];

    return (
        <>
            <DataTable
                columns={columns}
                data={users}
                keyExtractor={(user) => user.id}
                emptyMessage="Aucun utilisateur trouvé"
                onRowClick={(user) => setSelectedUserId(user.id)}
                rowClassName="cursor-pointer hover:bg-primary-50 transition-colors"
            />

            {/* User Journey Panel */}
            <UserJourneyPanel
                userId={selectedUserId}
                onClose={() => setSelectedUserId(null)}
            />

            {/* Overlay */}
            {selectedUserId && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setSelectedUserId(null)}
                />
            )}
        </>
    );
}
