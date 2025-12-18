import { Badge } from '@/components/ui';
import { Profile } from '@/types';

interface RecentUsersTableProps {
  users: Profile[];
}

export function RecentUsersTable({ users }: RecentUsersTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (users.length === 0) {
    return (
      <p className="text-center text-text-muted py-8">Aucun utilisateur trouve</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="table-header">
            <th className="px-4 py-3 text-left">Utilisateur</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3 text-center">Credits</th>
            <th className="px-4 py-3 text-left">Inscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-medium text-sm">
                      {(user.prenom?.[0] || user.email?.[0] || '?').toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary text-sm">
                      {user.prenom && user.nom 
                        ? `${user.prenom} ${user.nom}` 
                        : 'Non renseigne'}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-text-secondary">
                {user.email}
              </td>
              <td className="px-4 py-4 text-center">
                {user.is_premium ? (
                  <Badge variant="success">Premium</Badge>
                ) : (
                  <Badge variant="neutral">Gratuit</Badge>
                )}
              </td>
              <td className="px-4 py-4 text-center">
                <span className="font-medium text-text-primary">{user.credits}</span>
              </td>
              <td className="px-4 py-4 text-sm text-text-muted">
                {formatDate(user.created_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
