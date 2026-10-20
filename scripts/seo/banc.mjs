// Le banc du site (`scripts/verifier.mjs`) contre le build local, en une commande.
//
//   npm run build && npm run seo:banc
//
// Porte de Cosme Check (lui-meme venu de MemoryPilot) tel quel. `npm run verifier` attend un site deja lance
// sur http://127.0.0.1:3210 et echoue sur « fetch failed » sinon. Le robot ne peut pas tenir un serveur en
// arriere-plan entre deux commandes, donc ce lanceur s'en charge : il demarre
// `next start` sur 3210, attend qu'il reponde, lance le banc, et arrete le
// serveur quoi qu'il arrive (succes, echec, interruption). Le code de sortie
// est celui du banc.
import { spawn } from 'node:child_process';

const PORT = 3210;
const BASE = `http://127.0.0.1:${PORT}`;

const serveur = spawn('npx', ['next', 'start', '-p', String(PORT)], { shell: true, stdio: 'ignore', windowsHide: true });

function arreter() {
  if (serveur.exitCode !== null) return;
  // `shell: true` lance un cmd.exe : sur Windows, seul taskkill /T arrete l'arbre entier.
  if (process.platform === 'win32') spawn('taskkill', ['/PID', String(serveur.pid), '/T', '/F'], { stdio: 'ignore' });
  else serveur.kill('SIGTERM');
}
process.on('SIGINT', () => { arreter(); process.exit(130); });

let pret = false;
for (let i = 0; i < 60 && !pret; i++) {
  await new Promise((r) => setTimeout(r, 1000));
  // Un User-Agent de navigateur : le middleware refuse une requete qui n'en a pas.
  pret = await fetch(BASE + '/robots.txt', { headers: { 'User-Agent': 'Mozilla/5.0' } }).then((r) => r.ok, () => false);
}
if (!pret) {
  console.error(`Le site ne repond pas sur ${BASE} apres 60 s. Le build a-t-il ete fait (npm run build) ?`);
  arreter();
  process.exit(1);
}

// Deux passes, contre le meme serveur : le banc des pages, puis le maillage
// (`scripts/seo/maillage.mjs` : au moins cinq pages qui lient chaque article).
// Les deux tournent meme si le premier echoue, pour tout voir en une fois.
const jouer = (script) =>
  new Promise((fini) => {
    const p = spawn(process.execPath, [script], { stdio: 'inherit', env: { ...process.env, BASE_VERIF: BASE } });
    p.on('exit', (code) => fini(code ?? 1));
  });
const codeBanc = await jouer('scripts/verifier.mjs');
const codeMaillage = await jouer('scripts/seo/maillage.mjs');
arreter();
process.exitCode = codeBanc || codeMaillage;
