# ---------------------------------------------------------------------------
#  Downloads all homepage photography into public/tutoo_assets/photos/
#
#  Run from anywhere:
#    powershell -ExecutionPolicy Bypass -File scripts\download-photos.ps1
#
#  Sources, photographers, licence and swap instructions:
#    docs/PHOTO-SOURCES.md
#
#  Safe to re-run — it overwrites, so this is also how you refresh the files.
# ---------------------------------------------------------------------------

$ErrorActionPreference = 'Stop'

# Resolve paths from this script's own location, so the cwd does not matter
$root = Split-Path -Parent $PSScriptRoot
$dest = Join-Path $root 'public\tutoo_assets\photos'

New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Section artwork — landscape, cropped by CSS to 4:3
$wide = [ordered]@{
  'home-tuition.jpg' = 7079148   # Kampus Production — adult tutoring a child at home
  'online-class.jpg' = 8055487   # Annushka Ahuja  — child in an online class
}

# Teacher card portraits — portrait crop, cropped by CSS to 4:5
$portraits = [ordered]@{
  'teacher-1.jpg' = 36781271     # Anil Sharma   — smiling educator at a chalkboard
  'teacher-2.jpg' = 36781276     # Anil Sharma   — man with folded arms at a blackboard
  'teacher-3.jpg' = 7580822      # RDNE Stock    — woman in business attire, smiling
  'teacher-4.jpg' = 19186834     # Shovan Datta  — portrait of a man in eyeglasses
}

$failed = @()

function Get-Photo($name, $id, $query) {
  $url = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&$query"
  $out = Join-Path $script:dest $name
  Write-Host ("  {0,-20}" -f $name) -NoNewline
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing
    $kb = [math]::Round((Get-Item $out).Length / 1KB)
    Write-Host "ok ($kb KB)" -ForegroundColor Green
  }
  catch {
    Write-Host "FAILED — $($_.Exception.Message)" -ForegroundColor Red
    $script:failed += $name
  }
}

Write-Host "Section artwork (1400px wide):"
foreach ($n in $wide.Keys)      { Get-Photo $n $wide[$n]      'w=1400' }

Write-Host "Teacher portraits (800x1000):"
foreach ($n in $portraits.Keys) { Get-Photo $n $portraits[$n] 'w=800&h=1000&fit=crop' }

Write-Host ''
if ($failed.Count -gt 0) {
  Write-Host "$($failed.Count) file(s) failed. Those cards fall back to a tinted" -ForegroundColor Yellow
  Write-Host "panel or the teacher's initials — nothing renders broken." -ForegroundColor Yellow
  Write-Host "Retry, or download by hand using docs/PHOTO-SOURCES.md." -ForegroundColor Yellow
  exit 1
}

Write-Host "Done — 6 photos in public\tutoo_assets\photos\" -ForegroundColor Green
Write-Host "Restart the dev server if it is running, then hard-refresh the page."
