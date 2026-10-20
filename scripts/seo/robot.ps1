# La journee du robot editorial de Test Civique France, dans une fenetre de terminal visible.
#
# Lance par la tache planifiee "TestCivique Robot SEO" (voir installer-tache.ps1),
# ou a la main :  powershell -ExecutionPolicy Bypass -File scripts\seo\robot.ps1
#
# Jumeau de CosmetWiki\scripts\seo\robot.ps1, lui-meme jumeau de ceux de
# MemoryPilot et de RevealChat. Ce script ne decide rien : il garde le PC
# eveille, attend le reseau, attend son tour pour Chrome, ouvre Chrome si
# besoin, puis tape `/article-du-jour` a Claude. Tout le reste est dans
# docs/seo/ROBOT.md.
#
# Pourquoi une session interactive et non `claude -p` : la fenetre reste ouverte a
# la fin, on peut lire ce que le robot a fait et lui poser une question.

$ErrorActionPreference = 'Stop'
$depot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $depot

$Host.UI.RawUI.WindowTitle = 'Test Civique France : robot editorial'

if (Test-Path (Join-Path $depot 'docs\seo\PAUSE')) {
  Write-Host 'docs/seo/PAUSE existe : le robot est en pause, rien a faire aujourd''hui.'
  exit 0
}

# Le PC reste eveille pendant toute la journee du robot (reveille par la tache,
# Windows le rendort au bout de deux minutes sans clavier).
Add-Type -Namespace TestCivique -Name Veille -MemberDefinition '[DllImport("kernel32.dll")] public static extern uint SetThreadExecutionState(uint esFlags);'
[void][TestCivique.Veille]::SetThreadExecutionState([uint32]'0x80000001') # ES_CONTINUOUS | ES_SYSTEM_REQUIRED

# Le reseau d'abord, trois minutes au plus.
$fin = (Get-Date).AddMinutes(3)
while (-not (Test-NetConnection 'api.anthropic.com' -Port 443 -InformationLevel Quiet -WarningAction SilentlyContinue)) {
  if ((Get-Date) -gt $fin) { Write-Host 'Pas de reseau apres 3 minutes : le robot s''arrete.'; exit 1 }
  Start-Sleep -Seconds 10
}

# Chrome se partage avec les robots de Cosme Check (6 h), RevealChat (7 h) et
# MemoryPilot (8 h) ; celui-ci passe a 7 h 30. Un seul pilote a la fois : le
# verrou nomme celui qui le tient et depuis quand. Le robot le libere a la fin
# de sa journee (`npm run seo:liberer`, derniere etape de ROBOT.md) ; s'il meurt
# avant, le verrou est tenu pour abandonne au bout de 150 minutes.
$verrou = 'C:\Projet\.robot-chrome.lock'
$moi = 'testcivique'
while (Test-Path $verrou) {
  $tenu = Get-Content $verrou -ErrorAction SilentlyContinue | Select-Object -First 1
  $age = (New-TimeSpan -Start (Get-Item $verrou).LastWriteTime -End (Get-Date)).TotalMinutes
  if ($tenu -eq $moi -or $age -gt 150) { break }
  Write-Host ("Chrome est pris par le robot {0} depuis {1:N0} min : j'attends mon tour." -f $tenu, $age)
  Start-Sleep -Seconds 60
}
Set-Content -Path $verrou -Value $moi -Encoding ascii

# Chrome doit tourner pour que l'extension Claude in Chrome reponde.
if (-not (Get-Process chrome -ErrorAction SilentlyContinue)) {
  Start-Process 'C:\Program Files\Google\Chrome\Application\chrome.exe'
  Start-Sleep -Seconds 25
}

$date = Get-Date -Format 'yyyy-MM-dd'
$outils = @(
  'Read', 'Edit', 'Write', 'Glob', 'Grep', 'WebSearch', 'WebFetch',
  'Bash(git pull *)', 'Bash(git status*)', 'Bash(git diff*)', 'Bash(git log*)',
  'Bash(git add *)', 'Bash(git commit *)', 'Bash(git push)', 'Bash(git restore --staged *)',
  'Bash(npm run *)', 'Bash(npx tsc *)', 'Bash(node scripts/seo/*)',
  'PowerShell(npm run *)', 'PowerShell(git status*)', 'PowerShell(git diff*)',
  'mcp__claude-in-chrome'
)

# La consigne passe AVANT --allowedTools, qui avale tout ce qui le suit.
# Windows PowerShell retire le `--` qui servirait a l'en separer : ne pas compter dessus.
claude '/article-du-jour' --model claude-opus-5-5 --effort medium --permission-mode auto --chrome `
  -n "Robot SEO Test Civique $date" --allowedTools @outils
