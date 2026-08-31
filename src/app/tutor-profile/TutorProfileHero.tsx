import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Briefcase, Home, Monitor, Laptop, ChevronRight } from 'lucide-react';

import AssetImage from '../components/common/AssetImage';
import type { Tutor } from '../data/tutors';
import { cx, container } from '../components/common/ui';
import { DemoNotice } from './sections';

/* ─────────────────────────────────────────────────────────────────────────
   TUTOR PROFILE HERO

   Same backdrop stack as PageHero so this reads as the same site, but the
   composition is different on purpose: a service hero sells, this one
   introduces a person. Photo left, identity right, and the facts that
   matter to a parent — qualification, years, what and who they teach —
   above the fold without scrolling.

   ── WHAT IS NOT HERE ────────────────────────────────────────────────────
   No star rating, no review count, no "verified" badge, no students-taught
   number. None of it exists in the data and none of it can be substantiated.
   The brief asked for a rating block and also said not to invent one; this
   is what honouring the second half looks like.
───────────────────────────────────────────────────────────────────────── */

const MODE = {
  home: { label: 'Home tuition', icon: Home },
  online: { label: 'Online classes', icon: Monitor },
  both: { label: 'Home & online', icon: Laptop },
} as const;

const TINTS = [
  { bg: '#F4EFFE', fg: '#6D28D9' },
  { bg: '#FFF1E7', fg: '#EA580C' },
  { bg: '#E9F3FF', fg: '#2563EB' },
  { bg: '#EAF7EF', fg: '#0F9D58' },
];

function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
}

export default function TutorProfileHero({
  tutor,
  isDemo,
}: {
  tutor: Tutor;
  isDemo: boolean;
}) {
  const mode = MODE[tutor.mode];
  /* Stable per-tutor tint from the id, so the same tutor always gets the
     same colour rather than one that depends on list position. */
  const tint = TINTS[
    Math.abs([...tutor.id].reduce((a, c) => a + c.charCodeAt(0), 0)) % TINTS.length
  ];

  const place = /^online$/i.test(tutor.area) ? 'Anywhere in India' : tutor.area;
  const headline = tutor.subjects[0] ? `${tutor.subjects[0]} Tutor` : 'Tutor';

  const initialsTile = (
    <div
      className="w-full h-full flex items-center justify-center rounded-[26px]"
      style={{ background: tint.bg }}
      aria-hidden="true"
    >
      <span className="text-[3.5rem] font-bold tracking-tight" style={{ color: tint.fg }}>
        {initials(tutor.name)}
      </span>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="tutor-name">
      <div
        className="absolute inset-0 bg-[linear-gradient(103deg,#FFF3EA_0%,#FDF1FF_26%,#F8F5FF_46%,#FFFFFF_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-44 -left-28 w-[42rem] h-[42rem] rounded-full opacity-55"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(123,47,247,0.16) 0%, rgba(123,47,247,0.04) 46%, transparent 70%)',
          filter: 'blur(22px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,#1e1b3a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      <div className={cx('relative', container)}>
        {/* ── Breadcrumbs ── */}
        <nav aria-label="Breadcrumb" className="pt-28 lg:pt-32">
          <ol className="flex flex-wrap items-center gap-1 text-[13.5px] text-[#6E6A85]">
            <li>
              <Link to="/" className="hover:text-[#6D28D9] font-medium">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to="/find-a-tutor" className="hover:text-[#6D28D9] font-medium">
                Find a Tutor
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li aria-current="page" className="font-semibold text-[#1E1B3A] min-w-0 truncate">
              {tutor.name}
            </li>
          </ol>
        </nav>

        <div className="pt-6 pb-10 lg:pb-14">
          {isDemo && <DemoNotice />}

          <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-7 lg:gap-10 items-start">
            {/* ── Photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-40 sm:w-48 lg:w-full aspect-[4/5] rounded-[26px] overflow-hidden ring-1 ring-[#EFEDF6] shadow-[0_14px_44px_rgba(30,27,58,0.10)] bg-white"
            >
              {tutor.photo ? (
                <AssetImage
                  src={tutor.photo}
                  srcSet={
                    tutor.photo.endsWith('.webp')
                      ? `${tutor.photo.replace('.webp', '-sm.webp')} 400w, ${tutor.photo} 640w`
                      : undefined
                  }
                  sizes="(min-width: 1024px) 260px, 12rem"
                  width={640}
                  height={800}
                  loading="eager"
                  /* Dynamic and descriptive — never alt="image". */
                  alt={`${tutor.name}, ${tutor.qualification}`}
                  className="w-full h-full object-cover"
                  objectPosition="center 22%"
                  fallback={initialsTile}
                />
              ) : (
                initialsTile
              )}
            </motion.div>

            {/* ── Identity ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0"
            >
              <h1
                id="tutor-name"
                className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold tracking-[-0.022em] text-[#1E1B3A] leading-[1.1]"
              >
                {tutor.name}
              </h1>
              <p className="mt-1.5 text-[1.05rem] lg:text-[1.15rem] font-semibold text-[#EA580C]">
                {headline}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                <li className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2">
                  <GraduationCap className="w-4 h-4 text-[#6D28D9] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-[#1E1B3A]">{tutor.qualification}</span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2">
                  <Briefcase className="w-4 h-4 text-[#6D28D9] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-[#1E1B3A]">
                    {tutor.experienceYears} years teaching
                  </span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2">
                  <mode.icon className="w-4 h-4 text-[#6D28D9] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-[#1E1B3A]">{mode.label}</span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-[#1E1B3A]">{place}</span>
                </li>
              </ul>

              <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                <div className="min-w-0">
                  <dt className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#6E6A85]">
                    Subjects
                  </dt>
                  <dd className="mt-0.5 text-[15px] font-semibold text-[#1E1B3A]">
                    {tutor.subjects.join(' · ')}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#6E6A85]">
                    Classes
                  </dt>
                  <dd className="mt-0.5 text-[15px] font-semibold text-[#1E1B3A]">{tutor.classes}</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
