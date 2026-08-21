/* ─────────────────────────────────────────────────────────────────────────
   TEACHER AVATAR — illustrated, never a photo of a stranger

   Deliberately an illustration rather than a stock headshot. A stock photo
   next to a name reads as "this is that person", which would be untrue until
   a real tutor has sent us a real photo and consented to it being published.
   An illustrated avatar is honest, loads in ~1KB, and matches the brand.

   When a real tutor supplies a consented photo, pass `photo` and this
   component renders that instead.
───────────────────────────────────────────────────────────────────────── */

interface TeacherAvatarProps {
  /** 0-5 — picks one of the six looks below. Any number is wrapped. */
  variant: number;
  /** Consented real photo. Overrides the illustration when present. */
  photo?: string;
  name: string;
  className?: string;
}

/* Six looks: background tint, skin, hair colour, hair shape, clothing. */
const LOOKS = [
  { bg: '#F4EFFE', skin: '#F0C3A0', hair: '#3B2C4A', style: 'bun',   wear: '#7B2FF7' },
  { bg: '#FFF1E7', skin: '#E0A879', hair: '#2E2438', style: 'short', wear: '#EA580C' },
  { bg: '#E9F3FF', skin: '#F3CDAE', hair: '#4A3459', style: 'long',  wear: '#2563EB' },
  { bg: '#EAF7EF', skin: '#D89A6A', hair: '#241C2E', style: 'short', wear: '#0F9D58' },
  { bg: '#FDF0F6', skin: '#F0C3A0', hair: '#3B2C4A', style: 'long',  wear: '#DB2777' },
  { bg: '#F1EEFB', skin: '#E0A879', hair: '#2E2438', style: 'bun',   wear: '#5B21B6' },
];

export default function TeacherAvatar({
  variant,
  photo,
  name,
  className = '',
}: TeacherAvatarProps) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        decoding="async"
        className={`object-cover ${className}`}
      />
    );
  }

  const L = LOOKS[Math.abs(variant) % LOOKS.length];

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={`Illustration representing ${name}`}
    >
      <circle cx="60" cy="60" r="60" fill={L.bg} />

      {/* shoulders, clipped by the circle */}
      <clipPath id={`clip-${variant}`}>
        <circle cx="60" cy="60" r="60" />
      </clipPath>
      <g clipPath={`url(#clip-${variant})`}>
        <path d="M18 124c0-25 19-42 42-42s42 17 42 42z" fill={L.wear} />
        <path d="M18 124c0-20 12-35 30-40l12 40z" fill="#FFFFFF" opacity=".14" />

        {/* long hair sits behind the head */}
        {L.style === 'long' && (
          <path d="M32 62c0-20 12-34 28-34s28 14 28 34v30H32z" fill={L.hair} />
        )}

        <circle cx="60" cy="56" r="25" fill={L.skin} />

        {/* hair shapes */}
        {L.style === 'bun' && (
          <>
            <path d="M35 56c0-17 11-28 25-28s25 11 25 28c-3-11-13-15-25-15s-22 4-25 15z" fill={L.hair} />
            <circle cx="60" cy="27" r="9" fill={L.hair} />
          </>
        )}
        {L.style === 'short' && (
          <path d="M35 57c0-18 11-29 25-29s25 11 25 29c-2-12-12-17-25-17s-23 5-25 17z" fill={L.hair} />
        )}
        {L.style === 'long' && (
          <path d="M35 57c0-18 11-29 25-29s25 11 25 29c-2-12-12-17-25-17s-23 5-25 17z" fill={L.hair} />
        )}

        {/* face */}
        <circle cx="52" cy="58" r="2.6" fill="#3B2C4A" />
        <circle cx="68" cy="58" r="2.6" fill="#3B2C4A" />
        <path
          d="M55 67c3 3.5 7 3.5 10 0"
          stroke="#3B2C4A"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
