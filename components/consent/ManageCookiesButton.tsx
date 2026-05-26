'use client';

const CONSENT_KEY = 'tcf_cookie_consent_v1';

export default function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        try { localStorage.removeItem(CONSENT_KEY); } catch { /* ignore */ }
        window.dispatchEvent(new CustomEvent('tcf:open-cookie-banner'));
      }}
      className="text-gray-400 hover:text-white transition-colors text-left"
    >
      Gérer les cookies
    </button>
  );
}
