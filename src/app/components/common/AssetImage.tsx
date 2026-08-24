import { useState, type ReactNode } from 'react';

/* ─────────────────────────────────────────────────────────────────────────
   ASSET IMAGE — a self-hosted photograph with a non-broken failure state

   Every photograph on the site lives in public/tutoo_assets/photos/ and is
   downloaded by `scripts/download-photos.ps1`. See docs/PHOTO-SOURCES.md for
   the source URL, photographer and licence of each one.

   If a file is missing (script not run yet) or ever 404s in production, the
   browser's default is a broken-image icon, which looks like a bug to a
   parent. So the call site passes a `fallback` node — a tinted panel, a set
   of initials — and this renders that instead.

   Photos are self-hosted on purpose. Hot-linking images.pexels.com puts a
   page-critical asset on someone else's CDN, and their guidelines
   discourage it.
───────────────────────────────────────────────────────────────────────── */

interface AssetImageProps {
  /** Path under /tutoo_assets/photos/ */
  src: string;
  alt: string;
  /** Rendered in place of the image if it fails to load. */
  fallback?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  /** Use "eager" for anything above the fold. */
  loading?: 'lazy' | 'eager';
  /** e.g. "center top" to keep faces in frame on a tall crop. */
  objectPosition?: string;
  /** Candidate files, e.g. "/…-sm.webp 760w, /….webp 1200w". Pair with `sizes`. */
  srcSet?: string;
  /** Rendered width per breakpoint, so the browser can pick from `srcSet`
   *  before layout. Without it a srcSet is guesswork and the browser
   *  over-fetches. */
  sizes?: string;
}

export default function AssetImage({
  src,
  alt,
  fallback = null,
  className = '',
  width,
  height,
  loading = 'lazy',
  objectPosition,
  srcSet,
  sizes,
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
