# Installe (ou remplace) la tache planifiee du robot editorial de Test Civique France.
# Jumeau de CosmetWiki/scripts/seo/installer-tache.ps1 (6 h), et de ceux de
# RevealChat (7 h) et de MemoryPilot (8 h) : les quatre robots partagent Chrome,
# d'ou l'ecart entre eux (Test Civique passe a 7 h 30) et le verrou de robot.ps1.
#
#   powershell -ExecutionPolicy Bypass -File scripts\seo\installer-tache.ps1 [-Heure 07:30]
#
# Pour l'enlever :  Unregister-ScheduledTask -TaskName 'TestCivique Robot SEO' -Confirm:$false
# Pour la suspendre sans la toucher : creer le fichier docs/seo/PAUSE.
#
# Reglages, et pourquoi :
# - chaque jour a l'heure dite, en session ouverte de l'utilisateur : la fenetre du
#   terminal et Chrome doivent s'afficher dans sa session, pas dans une session
#   invisible de service ;
# - WakeToRun : sort l'ordinateur de veille pour l'occasion ;
# - StartWhenAvailable : si l'ordinateur etait eteint a l'heure dite, la tache part
#   des qu'il redemarre, une fois, sans rattraper les jours manques ;
# - quatre heures au plus : une session bloquee ne tourne pas indefiniment ;
# - jamais deux en meme temps (IgnoreNew).

param([string]$Heure = '07:30')

$ErrorActionPreference = 'Stop'
$depot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$script = Join-Path $depot 'scripts\seo\robot.ps1'
$nom = 'TestCivique Robot SEO'

# PowerShell par son chemin complet, et non Windows Terminal : `wt.exe` n'est
# qu'un alias d'application, que le Planificateur ne resout pas (erreur
# 0x80070002, constatee le 19/10/2026 chez Cosme Check).
$action = New-ScheduledTaskAction `
  -Execute "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe" `
  -Argument "-NoExit -ExecutionPolicy Bypass -File `"$script`"" `
  -WorkingDirectory $depot
$declencheur = New-ScheduledTaskTrigger -Daily -At $Heure
$reglages = New-ScheduledTaskSettingsSet -WakeToRun -StartWhenAvailable `
  -ExecutionTimeLimit (New-TimeSpan -Hours 4) -MultipleInstances IgnoreNew `
  -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" `
  -LogonType Interactive -RunLevel Limited

Register-ScheduledTask -TaskName $nom -Action $action -Trigger $declencheur `
  -Settings $reglages -Principal $principal `
  -Description 'Test Civique France, chaque matin a 7 h 30 : Claude (Opus 5.5, medium) mesure, regarde l''actualite, ecrit un article, en optimise un, publie et demande l''indexation. Doctrine : docs/seo/ROBOT.md.' `
  -Force | Out-Null

Get-ScheduledTask -TaskName $nom | Select-Object TaskName, State
Write-Host "Prochaine execution : $((Get-ScheduledTaskInfo -TaskName $nom).NextRunTime)"
