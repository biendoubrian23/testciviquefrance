# Bilan Vercel du 10/12/2026 : Claude regarde si le compte peut repasser en offre gratuite.
#
# Lance une fois par la tache planifiee "TestCivique Bilan Vercel" (creee le 20/11/2026),
# ou a la main :  powershell -ExecutionPolicy Bypass -File scripts\vercel\bilan.ps1
# La consigne est dans docs/vercel/BILAN.md. Meme mecanique que scripts/seo/robot.ps1 :
# PC eveille, reseau, verrou Chrome partage avec les robots, session Claude visible.
# Quand docs/vercel/bilan-2026-12-10.md apparait, une fenetre previent Brian.

$ErrorActionPreference = 'Stop'
$depot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $depot
$Host.UI.RawUI.WindowTitle = 'Test Civique France : bilan Vercel'

Add-Type -Namespace TestCivique -Name Veille -MemberDefinition '[DllImport("kernel32.dll")] public static extern uint SetThreadExecutionState(uint esFlags);'
[void][TestCivique.Veille]::SetThreadExecutionState([uint32]'0x80000003')

$fin = (Get-Date).AddMinutes(3)
while (-not (Test-NetConnection 'api.anthropic.com' -Port 443 -InformationLevel Quiet -WarningAction SilentlyContinue)) {
  if ((Get-Date) -gt $fin) { Write-Host 'Pas de reseau apres 3 minutes : le bilan s''arrete.'; exit 1 }
  Start-Sleep -Seconds 10
}

# Chrome se partage avec les robots SEO (6 h a 8 h, plusieurs heures parfois).
$verrou = 'C:\Projet\.robot-chrome.lock'
$moi = 'testcivique-vercel'
while (Test-Path $verrou) {
  $tenu = Get-Content $verrou -ErrorAction SilentlyContinue | Select-Object -First 1
  $age = (New-TimeSpan -Start (Get-Item $verrou).LastWriteTime -End (Get-Date)).TotalMinutes
  if ($tenu -eq $moi -or $age -gt 150) { break }
  Write-Host ("Chrome est pris par le robot {0} depuis {1:N0} min : j'attends mon tour." -f $tenu, $age)
  Start-Sleep -Seconds 60
}
Set-Content -Path $verrou -Value $moi -Encoding ascii

if (-not (Get-Process chrome -ErrorAction SilentlyContinue)) {
  Start-Process 'C:\Program Files\Google\Chrome\Application\chrome.exe'
  Start-Sleep -Seconds 25
}
Add-Type -Namespace Robot -Name Fenetre -MemberDefinition '[DllImport("user32.dll")] public static extern bool ShowWindow(System.IntPtr h, int n); [DllImport("user32.dll")] public static extern bool SetForegroundWindow(System.IntPtr h);' -ErrorAction SilentlyContinue
Get-Process chrome -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowHandle -ne 0 } | ForEach-Object {
  [void][Robot.Fenetre]::ShowWindow($_.MainWindowHandle, 3)
  [void][Robot.Fenetre]::SetForegroundWindow($_.MainWindowHandle)
}

# La fenetre de notification : attend le rapport (6 heures au plus), puis l'affiche.
$rapport = Join-Path $depot 'docs\vercel\bilan-2026-12-10.md'
$guet = @"
`$fin = (Get-Date).AddHours(6)
while (-not (Test-Path '$rapport') -and (Get-Date) -lt `$fin) { Start-Sleep -Seconds 30 }
Add-Type -AssemblyName PresentationFramework
if (Test-Path '$rapport') {
  Start-Sleep -Seconds 5
  `$texte = (Get-Content '$rapport' -Encoding utf8 -TotalCount 40) -join [Environment]::NewLine
  [void][System.Windows.MessageBox]::Show(`$texte + [Environment]::NewLine + [Environment]::NewLine + 'Rapport complet : $rapport', 'Test Civique : bilan Vercel', 'OK', 'Information')
} else {
  [void][System.Windows.MessageBox]::Show('Le bilan Vercel n''a pas produit de rapport en 6 heures. Regarde la fenetre du terminal.', 'Test Civique : bilan Vercel', 'OK', 'Warning')
}
"@
Start-Process powershell -WindowStyle Hidden -ArgumentList '-NoProfile', '-Command', $guet

$outils = @(
  'Read', 'Write', 'Glob', 'Grep', 'WebSearch', 'WebFetch',
  'Bash(git log*)', 'Bash(git status*)',
  'mcp__claude-in-chrome', 'mcp__claude_ai_Gmail__send_message'
)

# La consigne passe AVANT --allowedTools, qui avale tout ce qui le suit.
claude 'Lis docs/vercel/BILAN.md et fais exactement ce qu''il demande, du debut a la fin.' `
  --model claude-opus-5-5 --effort medium --permission-mode auto --chrome `
  -n 'Bilan Vercel Test Civique 2026-12-10' --allowedTools @outils
