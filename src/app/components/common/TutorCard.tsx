import { useState } from 'react';
import { BadgeCheck, MapPin, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Tutor } from '../../data/tutors';

/* Brand-spec tutor card (design system §F): white surface, violet structure,
   one orange action. Initials avatar when no consented photo exists. */

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const MODE_LABEL: Record<Tutor['mode'], string> = {
  home: 'Home tuition',
  online: 'Online',
  both: 'Home & Online',
};

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const navigate = useNavigate();
  /* If the photo fails to load (dead URL, blocked host, offline) we fall back
     to the initials avatar rather than showing a broken-image icon. */
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(tutor.photo) && !photoFailed;

  return (
    <article className="h-full bg-white rounded-2xl p-6 border border-[#E6E3F0] shadow-[0_1px_2px_rgba(30,27,58,0.06)] hover:shadow-[0_8px_24px_rgba(30,27,58,0.10)] hover:border-[#7B2FF7]/25 transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        {showPhoto ? (
          <img
            src={tutor.photo}
            alt={`${tutor.name}, tutor`}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
            className="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-[#F4EFFE]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="w-14 h-14 rounded-xl bg-[#F4EFFE] text-[#6D28D9] font-bold text-lg flex items-center justify-center flex-shrink-0"
          >
            {initials(tutor.name)}
          </span>
        )}

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            {/* Explicit size: a bare h3 inherits the 20–28px global heading
                scale, which is far too large inside a card. */}
            <h3 className="text-[17px] leading-tight font-bold text-[#1E1B3A] truncate">
              {tutor.name}
            </h3>
            <span
              className="inline-flex items-center gap-1 text-[#6D28D9] flex-shrink-0"
              title="Verified tutor"
            >
              <BadgeCheck className="w-4 h-4" aria-label="Verified" />
            </span>
          </div>
          <p className="text-sm text-[#4B4763] flex items-center gap-1.5 mt-0.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#6E6A85] flex-shrink-0" />
            {tutor.qualification} · {tutor.experienceYears} yrs
          </p>
          <p className="text-xs text-[#6E6A85] flex items-center gap-1.5 mt-1">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {tutor.area.toLowerCase() === MODE_LABEL[tutor.mode].toLowerCase()
              ? tutor.area
              : `${tutor.area} · ${MODE_LABEL[tutor.mode]}`}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {tutor.subjects.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 rounded-full bg-[#F6F3FC] border border-[#E6E3F0] text-xs font-medium text-[#4B4763]"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="text-xs text-[#6E6A85] mb-5">{tutor.classes}</p>

      <button
        type="button"
        onClick={() =>
          navigate(
            `/book-free-assessment?mode=${tutor.mode === 'online' ? 'online' : 'home'}`
          )
        }
        className="mt-auto w-full h-11 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-colors"
      >
        Request this tutor
      </button>
    </article>
  );
}
