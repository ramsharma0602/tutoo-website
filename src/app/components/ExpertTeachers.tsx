import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, MapPin, Home, Monitor, Laptop } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';
import AssetImage from './common/AssetImage';
import { TUTORS, type Tutor } from '../data/tutors';
import { DEMO_TUTORS, USE_DEMO_TUTORS } from '../data/tutorsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   MEET SOME OF OUR EXPERT TEACHERS

   ── WHERE THE PEOPLE COME FROM ──────────────────────────────────────────
   Real, verified tutors in `data/tutors.ts` are always preferred. While that
   registry is empty this falls back to `DEMO_TUTORS` — the SAME sample set
   and the SAME single switch (`USE_DEMO_TUTORS`) already used by the Find a
   Tutor page, so there is only ever one flag to flip before launch.

   Set USE_DEMO_TUTORS to false and this section disappears until a real
   tutor is added. It never renders an invented person once you go live.

   ── PHOTOS ──────────────────────────────────────────────────────────────
   Sample cards use stock portraits from public/tutoo_assets/photos/
   (teacher-1..4.jpg — see docs/PHOTO-SOURCES.md). These are photographs of
   models, not of your tutors; that is exactly why USE_DEMO_TUTORS has to be
   off before real parents arrive.

   A real tutor's own consented photo goes in public/tutors/ and is set as
   `photo` on their entry in data/tutors.ts — the card prefers that whenever
   it exists. If neither is present the card shows their initials, which
   looks deliberate rather than broken.

   ── WHAT IS DELIBERATELY ABSENT ─────────────────────────────────────────
   No star ratings, no review counts, no "students taught" numbers and no
   verification badges. Qualification, experience, subjects and area are
   claims you can stand behind; those others are not.
───────────────────────────────────────────────────────────────────────── */

const MODE_LABEL: Record<Tutor['mode'], { label: string; icon: typeof Home }> = {
  home: { label: 'Home tuition', icon: Home },
  online: { label: 'Online', icon: Monitor },
  both: { label: 'Home & online', icon: Laptop },
};

/* Stock portraits used for the sample cards, in card order. A real tutor's
   own `photo` always wins over these. */
const SAMPLE_PORTRAITS = [
  '/tutoo_assets/photos/teacher-1.png',
  '/tutoo_assets/photos/teacher-2.png',
  '/tutoo_assets/photos/teacher-3.png',
  '/tutoo_assets/photos/teacher-4.png',
];

/* Rotating tints so adjacent initials tiles never look the same */
const TINTS = [
  { bg: '#F4EFFE', fg: '#6D28D9' },
  { bg: '#FFF1E7', fg: '#EA580C' },
  { bg: '#E9F3FF', fg: '#2563EB' },
  { bg: '#EAF7EF', fg: '#0F9D58' },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function ExpertTeachers() {
  const navigate = useNavigate();

  const usingRealTutors = TUTORS.length > 0;

  const source: Tutor[] = usingRealTutors
    ? TUTORS
    : USE_DEMO_TUTORS
      ? DEMO_TUTORS
      : [];

  if (!source.length) return null;

  const featured = source.slice(0, 4);

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div
        className="hidden lg:block absolute -top-24 right-[8%] w-[30rem] h-[30rem] rounded-full opacity-60"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,247,0.13) 0%, transparent 68%)',
          filter: 'blur(28px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Teachers"
          title="Meet some of our expert teachers"
          lead="Every tutor gives us their ID and qualification documents, and is interviewed before their first class."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {featured.map((t, i) => {
            const mode = MODE_LABEL[t.mode];
            const tint = TINTS[i % TINTS.length];

            /* An online-only tutor carries city/area of "Online", which would
               print "Online · Online" next to the mode pill. */
            const raw = t.city ?? t.area;
            const place = /^online$/i.test(raw) ? 'Anywhere in India' : raw;

            /* Real tutor → their own consented photo (initials if they have
               none yet). Sample card → a local stock portrait. The demo
               entries carry randomuser.me URLs, which are deliberately NOT
               used: a third-party placeholder host is not something a live
               page should depend on. */
            const photo = usingRealTutors
              ? t.photo
              : SAMPLE_PORTRAITS[i % SAMPLE_PORTRAITS.length];

            /* Shown when a tutor has no photo yet, and as AssetImage's
               fallback if a photo file is missing. Reads as deliberate. */
            const initialsTile = (
              <div
                className="w-full h-full flex items-center justify-center text-4xl font-bold"
                style={{ background: tint.bg, color: tint.fg }}
                aria-hidden="true"
              >
                {initials(t.name)}
              </div>
            );

            return (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative flex flex-col h-full bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_20px_46px_rgba(30,27,58,0.13)] hover:-translate-y-1.5 hover:ring-[#7B2FF7]/25 transition-all duration-300 overflow-hidden"
              >
                {/* ── PORTRAIT ──
                    4:5 so a half-body stock shot and a real head-and-shoulders
                    photo both sit well. object-position keeps the face in
                    frame when the crop is tall. */}
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ background: tint.bg }}
                >
                  {photo ? (
                    <AssetImage
                      src={photo}
                      alt={`${t.name}, ${t.qualification}`}
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

                  {/* <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full pl-2 pr-2.5 py-1 text-[11px] font-bold text-[#1E1B3A] shadow-sm">
                    <mode.icon className="w-3 h-3 text-[#7B2FF7]" strokeWidth={2.4} />
                    {mode.label}
                  </span> */}
                </div>

                {/* ── DETAILS ── */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-[17px] font-bold text-[#1E1B3A] leading-tight">
                    {t.name}
                  </h3>

                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6D28D9]">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                    {t.qualification}
                  </p>

                  <p className="mt-2 text-[13px] text-[#4B4763]">
                    {t.experienceYears} years teaching · {t.classes}
                  </p>

                  {/* mb-auto pins every card's footer to the same baseline */}
                  <div className="mt-3.5 mb-auto flex flex-wrap gap-1.5">
                    {t.subjects.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-semibold text-[#4B4763] bg-[#F7F5FC] ring-1 ring-[#EFEDF6] rounded-full px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#F4F2FA] inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6E6A85]">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0" strokeWidth={2.2} />
                    {place}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* The honest close: we do the matching, you do the choosing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => navigate('/find-a-tutor')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1E1B3A] hover:bg-[#2A2550] text-white font-bold text-[15px] transition-colors"
          >
            Browse all teachers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[14px] text-[#6E6A85] text-center sm:text-left max-w-xs">
            Or tell us what you need and we will shortlist the ones who fit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
