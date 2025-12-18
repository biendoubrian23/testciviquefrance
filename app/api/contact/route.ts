import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body;

    // Validation côté serveur
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email côté serveur
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérifier que la clé API est présente
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY non définie');
      return NextResponse.json(
        { success: false, message: 'Configuration serveur incorrecte' },
        { status: 500 }
      );
    }

    // Envoi à Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        to: 'clarkybrian@outlook.fr',
        from_name: nom,
        email: email,
        subject: `[TestCiviqueFrance] ${sujet}`,
        message: message,
        nom: nom,
        sujet: sujet,
      }),
    });

    // Vérifier le content-type de la réponse
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Réponse Web3Forms non-JSON:', text.substring(0, 200));
      return NextResponse.json(
        { success: false, message: 'Erreur de communication avec le service d\'envoi' },
        { status: 500 }
      );
    }

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
    } else {
      console.error('Erreur Web3Forms:', data);
      return NextResponse.json(
        { success: false, message: data.message || 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
