import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Test Civique France - Préparation Examen Naturalisation et Titre de Séjour 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              background: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ color: '#2563eb', fontSize: '22px', fontWeight: '900' }}>TCF</span>
          </div>
          <span style={{ color: 'white', fontSize: '34px', fontWeight: '700' }}>
            Test Civique France
          </span>
        </div>

        <h1
          style={{
            color: 'white',
            fontSize: '56px',
            fontWeight: '800',
            textAlign: 'center',
            margin: '0 0 24px 0',
            lineHeight: 1.15,
          }}
        >
          Réussissez votre Test Civique 2026
        </h1>

        <p
          style={{
            color: '#bfdbfe',
            fontSize: '26px',
            textAlign: 'center',
            margin: '0 0 40px 0',
          }}
        >
          Naturalisation · Carte de séjour · Titre de séjour
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              color: 'white',
              padding: '10px 22px',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            800+ Questions
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              color: 'white',
              padding: '10px 22px',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Accès gratuit
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              color: 'white',
              padding: '10px 22px',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Taux de réussite 95%
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
