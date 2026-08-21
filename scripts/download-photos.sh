#!/usr/bin/env bash
# ---------------------------------------------------------------------------
#  Downloads all homepage photography into public/tutoo_assets/photos/
#
#  Run from anywhere:
#    bash scripts/download-photos.sh
#
#  Sources, photographers, licence and swap instructions:
#    docs/PHOTO-SOURCES.md
#
#  Safe to re-run — it overwrites, so this is also how you refresh the files.
# ---------------------------------------------------------------------------
set -uo pipefail

# Resolve paths from this script's own location, so the cwd does not matter
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/public/tutoo_assets/photos"
mkdir -p "$DEST"

failed=0

get_photo() { # name, pexels id, query
  local name="$1" id="$2" query="$3"
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&${query}"
  printf '  %-20s' "$name"
  if curl -fsSL "$url" -o "$DEST/$name"; then
    printf 'ok (%s)\n' "$(du -h "$DEST/$name" | cut -f1)"
  else
    printf 'FAILED\n'
    failed=$((failed + 1))
  fi
}

echo "Section artwork (1400px wide):"
get_photo home-tuition.jpg 7079148 'w=1400'   # Kampus Production — tutoring at home
get_photo online-class.jpg 8055487 'w=1400'   # Annushka Ahuja    — online class

echo "Teacher portraits (800x1000):"
get_photo teacher-1.jpg 36781271 'w=800&h=1000&fit=crop'  # Anil Sharma  — educator at chalkboard
get_photo teacher-2.jpg 36781276 'w=800&h=1000&fit=crop'  # Anil Sharma  — man at blackboard
get_photo teacher-3.jpg 7580822  'w=800&h=1000&fit=crop'  # RDNE Stock   — woman, business attire
get_photo teacher-4.jpg 19186834 'w=800&h=1000&fit=crop'  # Shovan Datta — man in eyeglasses

echo
if [ "$failed" -gt 0 ]; then
  echo "$failed file(s) failed. Those cards fall back to a tinted panel or the"
  echo "teacher's initials — nothing renders broken."
  echo "Retry, or download by hand using docs/PHOTO-SOURCES.md."
  exit 1
fi

echo "Done — 6 photos in public/tutoo_assets/photos/"
echo "Restart the dev server if it is running, then hard-refresh the page."
