# 🧾 Comment accéder à vos factures Stripe

## Pour les utilisateurs

### 1️⃣ Via le bouton "Gérer mon abonnement"

1. Connectez-vous à votre compte
2. Allez sur la page **"Nos Offres"** (ou **"Crédits"**)
3. Si vous avez un abonnement actif, cliquez sur le bouton **"Gérer mon abonnement"**
4. Vous serez redirigé vers le **Portail Client Stripe**

### 2️⃣ Dans le Portail Client Stripe

Une fois dans le portail, vous pouvez :

✅ **Voir vos factures** :
- Section **"INVOICE HISTORY"** (Historique des factures)
- Liste de toutes vos factures avec dates et montants
- Statut : "Paid" (Payé) ou "Unpaid" (Impayé)

✅ **Télécharger vos factures** :
- Cliquez sur la facture souhaitée
- Téléchargez le PDF pour vos archives
- Envoyez-la à votre comptable si besoin

✅ **Voir votre prochain paiement** :
- Section **"CURRENT SUBSCRIPTION"**
- Affiche "Your next billing date is..." (Votre prochaine date de facturation)

✅ **Gérer votre abonnement** :
- Bouton **"Update subscription"** : Passer de Standard à Premium ou vice-versa
- Bouton **"Cancel subscription"** : Annuler votre abonnement

✅ **Mettre à jour votre moyen de paiement** :
- Section **"PAYMENT METHOD"**
- Bouton **"+ Add payment method"** pour ajouter une nouvelle carte
- Icône crayon pour modifier la carte existante

✅ **Modifier vos informations de facturation** :
- Section **"BILLING INFORMATION"**
- Bouton **"Update information"** pour changer nom, adresse, etc.

---

## Pour vous (admin/développeur)

### 📊 Voir toutes les factures dans Stripe Dashboard

1. **Allez sur** : https://dashboard.stripe.com/test/invoices
2. **Vous verrez** :
   - Liste de toutes les factures générées
   - Statut de paiement (Paid, Draft, Uncollectible)
   - Client, montant, date
   - Possibilité de filtrer par client, statut, date

### 🔍 Voir les factures d'un client spécifique

**Option 1 : Par email**
```
https://dashboard.stripe.com/test/customers
→ Rechercher : clarkybrian@outlook.fr
→ Cliquer sur le client
→ Onglet "Invoices"
```

**Option 2 : Par Customer ID**
```
https://dashboard.stripe.com/test/customers/cus_xxxxx
→ Onglet "Invoices"
```

### 📧 Envoyer une facture par email

**Automatique :**
- Stripe envoie automatiquement les factures par email après chaque paiement
- L'email contient un lien pour télécharger le PDF
- Configuration : Dashboard → Settings → Invoices → "Automatically send invoice emails"

**Manuel :**
1. Allez sur l'invoice dans le dashboard
2. Cliquez sur "More" → "Email invoice"
3. Confirmez l'envoi

### 📋 Format des factures

Les factures Stripe incluent automatiquement :
- ✅ Numéro de facture (ex: INV-1234)
- ✅ Date d'émission
- ✅ Période de facturation (pour les abonnements)
- ✅ Montant HT et TTC
- ✅ Taxes applicables (si configurées)
- ✅ Informations du client (nom, email, adresse)
- ✅ Description du produit/service
- ✅ Moyen de paiement utilisé

---

## Configuration actuelle

### Produits Stripe

| Produit | Prix | Type | Price ID |
|---------|------|------|----------|
| Pack Standard | 2,99€/semaine | Abonnement récurrent | `price_1Sc3qxEuT9agNbEUdX0RkLM4` |
| Pack Premium | 6,99€/semaine | Abonnement récurrent | `price_1Sc3rPEuT9agNbEU65mDE4RP` |
| Pack Examen | 2,50€ | Paiement unique | `price_1Sc3rnEuT9agNbEUjrVnwyaq` |

### Emails Stripe activés

✅ **Pour les abonnements :**
- Email de confirmation de souscription
- Email de facturation à chaque renouvellement
- Email de rappel avant expiration
- Email de confirmation d'annulation

✅ **Pour les paiements uniques :**
- Email de confirmation de paiement avec facture

---

## Résolution de problèmes

### ❌ "Je ne reçois pas mes factures par email"

**Solutions :**
1. Vérifiez vos spams/courrier indésirable
2. Vérifiez que l'email dans Stripe est correct
3. Vérifiez les paramètres Stripe : Dashboard → Settings → Emails
4. Ajoutez `receipts@stripe.com` à vos contacts

### ❌ "Je ne vois pas le bouton 'Gérer mon abonnement'"

**Causes possibles :**
- Vous n'avez pas d'abonnement actif
- L'abonnement a expiré
- La base de données n'est pas synchronisée

**Solution :**
1. Vérifiez dans Supabase que `subscription_status = 'active'`
2. Vérifiez que `is_premium = true`
3. Rafraîchissez la page (Ctrl+F5)

### ❌ "Le lien vers le portail ne fonctionne pas"

**Vérification :**
1. Vérifiez que `STRIPE_SECRET_KEY` est configuré
2. Vérifiez que le `stripe_customer_id` existe dans Supabase
3. Regardez les logs de l'API `/api/create-portal-session`

---

## Tests en mode développement

### Tester l'envoi d'emails de facture

```bash
# Dans Stripe CLI
stripe trigger invoice.payment_succeeded
```

### Accéder au portail client en test

1. Créez un abonnement en mode test
2. Le bouton "Gérer mon abonnement" apparaît
3. Le portail s'ouvre avec l'URL : `https://billing.stripe.com/p/session/test_...`

---

## Production : Checklist avant déploiement

- [ ] Configurer les webhooks en production
- [ ] Activer l'envoi automatique des emails de facture
- [ ] Configurer les taxes (si applicable)
- [ ] Personnaliser les emails Stripe avec votre logo
- [ ] Tester le portail client en mode production
- [ ] Vérifier que les PDFs de facture sont générés correctement
- [ ] Configurer les mentions légales sur les factures

---

## Liens utiles

- **Dashboard Stripe (Test)** : https://dashboard.stripe.com/test/dashboard
- **Invoices** : https://dashboard.stripe.com/test/invoices
- **Customers** : https://dashboard.stripe.com/test/customers
- **Webhooks** : https://dashboard.stripe.com/test/webhooks
- **Email Settings** : https://dashboard.stripe.com/test/settings/emails
- **Billing Portal** : https://dashboard.stripe.com/test/settings/billing/portal

---

## Support

Pour toute question sur les factures Stripe :
- Documentation Stripe : https://stripe.com/docs/invoicing
- Support Stripe : https://support.stripe.com/
