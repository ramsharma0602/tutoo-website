import { GraduationCap, MapPin, Home, Monitor, Laptop, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AssetImage from './AssetImage';
import { cx, card, cardHover, buttonPrimary } from './ui';
import type { Tutor } from '../../data/tutors';

/* ─────────────────────────────────────────────────────────────────────────
   TUTOR CARD — the one tutor card on the site

   ── WHY THIS IS THE ONLY ONE ────────────────────────────────────────────
   There used to be two. /find-a-tutor and /online-tuition rendered a
   compact left-aligned card with a 56px avatar; the homepage rendered a
   photo-forward 4:5 card. Same person, two designs, one site — which is
   exactly what made /online-tuition feel like a different product.

   This is the photo-forward one, because a parent choosing a person for
   their child looks at the face first, and because it degrades better: a
   4:5 tile holds a real head-and-shoulders photo, a half-body stock shot,
   or an initials block equally well.

   Used by: homepage ExpertTeachers, /online-tuition OnlineTutors,
   /find-a-tutor results grid. If a surface needs something different,
   change it HERE for everyone rather than forking a variant.

   ── PHOTOS ──────────────────────────────────────────────────────────────
   `tutor.photo` only. A real tutor's own consented photo, or nothing —
   in which case the initials tile shows, which is honest and looks
   deliberate. Never a stock face under a name that is not that person's.
───────────────────────────────────────────────────────────────────────── */

const MODE_LABEL: Record<Tutor['mode'], { label: string; icon: typeof Home }> = {
  home: { label: 'Home tuition', icon: Home },
  online: { label: 'Online', icon: Monitor },
  both: { label: 'Home & online', icon: Laptop },
};

/* Rotating tints so adjacent initials tiles never look the same */
const TINTS = [
  { bg: '#F4EFFE', fg: '#6D28D9' },
  { bg: '#FFF1E7', fg: '#EA580C' },
  { bg: '#E9F3FF', fg: '#2563EB' },
  { bg: '#EAF7EF', fg: '#0F9D58' },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

interface Props {
  tutor: Tutor;
  /** Rotates the initials-tile tint. Pass the map index. */
  index?: number;
}

export default function TutorCard({ tutor, index = 0 }: Props) {
  const navigate = useNavigate();
  const mode = MODE_LABEL[tutor.mode];
  const tint = TINTS[Math.abs(index) % TINTS.length];

  /* An online-only tutor carries city/area of "Online", which would otherwise
     print "Online · Online" beside the mode pill. */
  const raw = tutor.city ?? tutor.area;
  const place = /^online$/i.test(raw) ? 'Anywhere in India' : raw;

  const initialsTile = (
    <div
      className="w-full h-full flex items-center justify-center text-4xl font-bold"
      style={{ background: tint.bg, color: tint.fg }}
      aria-hidden="true"
    >
      {initials(tutor.name)}
    </div>
  );

  return (
    <article className={cx(card, cardHover, 'group relative flex flex-col h-full overflow-hidden')}>
      {/* ── PORTRAIT ──
          4:5 holds a head-and-shoulders photo, a half-body shot and an
          initials block equally well. object-position keeps the face in
          frame when the crop is tall. */}
      <div className="relative aspect-[4/5] overflow-hidden" style={{ background: tint.bg }}>
        {tutor.photo ? (
          <AssetImage
            src={tutor.photo}
            alt={`${tutor.name}, ${tutor.qualification}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            objectPosition="center 22%"
            fallback={initialsTile}
          />
        ) : (
          initialsTile
        )}

        {/* scrim so the mode pill stays readable over any photo */}
        <div
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent"
          aria-hidden="true"
        />

        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full pl-2 pr-2.5 py-1 text-[12px] font-bold text-[#1E1B3A] shadow-sm">
          <mode.icon className="w-3 h-3 text-[#7B2FF7]" strokeWidth={2.4} aria-hidden="true" />
          {mode.label}
        </span>
      </div>

      {/* ── DETAILS ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[17px] font-bold text-[#1E1B3A] leading-tight">{tutor.name}</h3>

        <p className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6D28D9]">
          <GraduationCap className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          {tutor.qualification}
        </p>

        <p className="mt-2 text-[13px] text-[#4B4763]">
          {tutor.experienceYears} years teaching · {tutor.classes}
        </p>

        {/* mb-auto pins every card's footer to the same baseline, so a
            one-subject tutor lines up with a three-subject one */}
        <div className="mt-3.5 mb-auto flex flex-wrap gap-1.5">
          {tutor.subjects.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[12px] font-semibold text-[#4B4763] bg-[#F7F5FC] ring-1 ring-[#EFEDF6] rounded-full px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-3.5 border-t border-[#F4F2FA] inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6E6A85]">
          <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0" strokeWidth={2.2} aria-hidden="true" />
          {place}
        </div>

        <button
          type="button"
          onClick={() =>
            navigate(
              `/book-free-assessment?mode=${tutor.mode === 'online' ? 'online' : 'home'}`
            )
          }
          className={cx(buttonPrimary, 'mt-4 w-full h-11 text-[14px] shadow-none')}
        >
          Request this tutor
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
}
