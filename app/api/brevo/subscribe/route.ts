import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = 4; // Liste "inscription" - ID #4

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API est configurée
    if (!BREVO_API_KEY) {
      console.error('❌ ERREUR CRITIQUE : BREVO_API_KEY non configurée dans les variables d\'environnement');
      return NextResponse.json(
        { error: 'Configuration Brevo manquante' },
        { status: 500 }
      );
    }

    // Log pour debugging (masqué)
    console.log(`📝 Tentative d'ajout Brevo. Key présente: ${!!BREVO_API_KEY}, ListID: ${BREVO_LIST_ID}`);

    const body = await request.json();
    const { email, prenom, nom } = body;

    // Validation de l'email
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Créer ou mettre à jour le contact dans Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          PRENOM: prenom || '',
          NOM: nom || '',
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true, // Met à jour si le contact existe déjà
      }),
    });

    // Brevo renvoie 201 pour création, 204 pour mise à jour
    if (brevoResponse.ok || brevoResponse.status === 201 || brevoResponse.status === 204) {
      console.log(`✅ Contact ajouté à Brevo: ${email}`);
      return NextResponse.json({ success: true });
    }

    // Gérer le cas où le contact existe déjà (400 avec message spécifique)
    if (brevoResponse.status === 400) {
      const errorData = await brevoResponse.json();

      // Si c'est juste un doublon, on considère que c'est un succès
      if (errorData.code === 'duplicate_parameter') {
        console.log(`ℹ️ Contact déjà existant sur Brevo: ${email}`);
        return NextResponse.json({ success: true, message: 'Contact déjà existant' });
      }

      console.error('Erreur Brevo (400):', errorData);
      return NextResponse.json(
        { error: 'Erreur lors de l\'ajout du contact', details: errorData },
        { status: 400 }
      );
    }

    // Autres erreurs
    const errorText = await brevoResponse.text();
    console.error(`Erreur Brevo (${brevoResponse.status}):`, errorText);
    return NextResponse.json(
      { error: 'Erreur Brevo', status: brevoResponse.status },
      { status: brevoResponse.status }
    );

  } catch (error) {
    console.error('Exception lors de l\'ajout à Brevo:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
