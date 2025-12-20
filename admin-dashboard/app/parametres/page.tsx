import { Header } from '@/components/layout';
import { Card } from '@/components/ui';
import { Settings, Database, Shield, Bell, Palette } from 'lucide-react';

export default function ParametresPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Parametres" 
        subtitle="Configuration du dashboard"
      />

      <div className="p-4 lg:p-8">
        <div className="max-w-4xl">
          {/* Connexion BDD */}
          <Card className="mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">Base de donnees</h3>
                <p className="text-sm text-text-muted mt-1">
                  Configuration de la connexion Supabase
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">
                      URL Supabase
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="https://xxxxx.supabase.co"
                      disabled
                      value={process.env.NEXT_PUBLIC_SUPABASE_URL || 'Non configure'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">
                      Cle anonyme
                    </label>
                    <input
                      type="password"
                      className="input-field"
                      disabled
                      value="••••••••••••••••••••"
                    />
                  </div>
                  <p className="text-xs text-text-muted">
                    Les variables d'environnement sont configurees dans le fichier .env.local
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Securite */}
          <Card className="mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">Securite</h3>
                <p className="text-sm text-text-muted mt-1">
                  Options de securite et authentification
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Authentification requise</p>
                      <p className="text-sm text-text-muted">
                        Proteger l'acces au dashboard
                      </p>
                    </div>
                    <span className="text-warning font-medium text-sm">A implementer</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Role administrateur</p>
                      <p className="text-sm text-text-muted">
                        Restreindre l'acces aux admins
                      </p>
                    </div>
                    <span className="text-warning font-medium text-sm">A implementer</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">Notifications</h3>
                <p className="text-sm text-text-muted mt-1">
                  Alertes et notifications par email
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Nouveaux utilisateurs</p>
                      <p className="text-sm text-text-muted">
                        Recevoir une alerte pour chaque inscription
                      </p>
                    </div>
                    <span className="text-text-muted font-medium text-sm">Desactive</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Nouveaux achats</p>
                      <p className="text-sm text-text-muted">
                        Recevoir une alerte pour chaque paiement
                      </p>
                    </div>
                    <span className="text-text-muted font-medium text-sm">Desactive</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Apparence */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">Apparence</h3>
                <p className="text-sm text-text-muted mt-1">
                  Personnalisation de l'interface
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Theme</p>
                      <p className="text-sm text-text-muted">
                        Mode clair uniquement
                      </p>
                    </div>
                    <span className="text-primary-600 font-medium text-sm">Clair</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div>
                      <p className="font-medium text-text-primary">Couleur principale</p>
                      <p className="text-sm text-text-muted">
                        Bleu Test Civique France
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary-600"></div>
                      <span className="text-sm font-mono text-text-muted">#2563EB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
