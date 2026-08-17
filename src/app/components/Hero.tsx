import { motion } from 'motion/react';
import {
  ShieldCheck,
  Monitor,
  CalendarClock,
  Lock,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Trophy,
  MessageSquare,
  Code2,
  Music,
  PersonStanding,
  MapPin,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { track } from '../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   HERO — full-bleed banner

   PHOTO
   The photo is a transparent cutout. Its left edge was feathered before export
   because the frame sliced the book stack flat and that cut read as a hard
   vertical line. Keep the .webp files — do NOT re-export as JPEG, and do not
   put a background colour behind the image.

   BACKDROP
   Depth behind the photo comes from stacked, purely decorative layers: a base
   diagonal wash, two radial glows, a fine grid, a large brand disc, a thin
   outline ring and a dotted patch. All are aria-hidden and carry no meaning,
   so they can be re-ordered or removed freely.

   "WE HELP IN" CARD
   Sits in flow after the banner and is shifted up by half its own height, so
   its centre lands on the section boundary. Move the group with the banner's
   bottom padding — never swap the translate for a fixed negative margin, which
   is what previously let the card climb over the button.
───────────────────────────────────────────────────────────────────────── */

const TRUST_BADGES = [
  { icon: ShieldCheck, line1: 'Verified', line2: 'Tutors' },
  { icon: Monitor, line1: 'Online &', line2: 'Home' },
  { icon: CalendarClock, line1: 'Flexible', line2: 'Timings' },
  { icon: Lock, line1: 'Safe &', line2: 'Trusted' },
];

/* The seven categories from the approved banner.
   NOTE: Tutoo currently staffs school subjects, boards and competitive exams.
   College, Language, Coding & IT, Music and Skills are shown here by owner
   decision — make sure the team can respond to an enquiry for each of them. */
const CATEGORIES = [
  { icon: BookOpen, label: 'School Subject', color: '#2563EB' },
  { icon: GraduationCap, label: 'College Subject', color: '#16A34A' },
  { icon: Trophy, label: 'Competitive Exam', color: '#7B2FF7' },
  { icon: MessageSquare, label: 'Language', color: '#EA580C' },
  { icon: Code2, label: 'Coding & IT', color: '#2563EB' },
  { icon: Music, label: 'Music', color: '#DB2777' },
  { icon: PersonStanding, label: 'Skills', color: '#0D9488' },
];

const PHOTO_ALT =
  'A tutor sitting beside a young student at her desk, helping her work through a page in her notebook';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 bg-white">

      {/* ══════════════ BANNER ══════════════ */}
      <div className="relative overflow-hidden">

        {/* Backdrop 1 — base wash, reaching white before the photo starts */}
        <div
          className="absolute inset-0 bg-[linear-gradient(103deg,#E6EEFF_0%,#EFEBFF_20%,#F8F5FF_34%,#FFFFFF_46%,#FFFFFF_100%)]"
          aria-hidden="true"
        />

        {/* Backdrop 2 — soft radial glows, mesh-gradient feel */}
        <div
          className="absolute -top-40 -left-32 w-[46rem] h-[46rem] rounded-full opacity-60"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(123,47,247,0.16) 0%, rgba(123,47,247,0.05) 45%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="hidden md:block absolute -bottom-52 left-[16%] w-[40rem] h-[40rem] rounded-full opacity-50"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(234,88,12,0.12) 0%, rgba(234,88,12,0.04) 45%, transparent 70%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Backdrop 3 — fine grid, faded out towards the bottom */}
        <div
          className="absolute inset-0 opacity-[0.30] bg-[linear-gradient(to_right,#1e1b3a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
          aria-hidden="true"
        />

        {/* Backdrop 4 — shapes behind the photo */}
        <div
          className="hidden lg:block absolute right-[7%] top-[13%] w-[33rem] h-[33rem] rounded-full bg-[radial-gradient(circle_at_30%_25%,#DCE8FF_0%,#E8DFFF_55%,#F6F1FF_100%)] opacity-80"
          aria-hidden="true"
        />
        <div
          className="hidden xl:block absolute right-[3.5%] top-[8%] w-[37rem] h-[37rem] rounded-full border border-[#7B2FF7]/[0.13]"
          aria-hidden="true"
        />
        <div
          className="hidden lg:block absolute top-24 right-8 w-40 h-28 opacity-45"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(#7B2FF7 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div
          className="hidden xl:block absolute bottom-10 right-[44%] w-24 h-24 rounded-full border-2 border-[#EA580C]/[0.16]"
          aria-hidden="true"
        />

        {/* Photo — transparent cutout, full-bleed right */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[55%] xl:w-[53%] 2xl:w-[51%] pointer-events-none">
          <img
            src="/tutoo_assets/hero/tutor-student.webp"
            alt={PHOTO_ALT}
            width={1400}
            height={994}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_22px_45px_rgba(30,27,58,0.13)]"
          />
        </div>

        {/* ── Copy ── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[50%] xl:w-[48%] pt-32 pb-28 lg:pt-36 lg:pb-36"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-[#E6E3F0] shadow-[0_2px_10px_rgba(30,27,58,0.05)] mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="text-[13px] font-semibold text-[#1E1B3A]">
                Kothrud (Pune) · Kolhapur · Online
              </span>
            </motion.div>

            <h1 className="max-w-[13ch] sm:max-w-[15ch] text-[2.15rem] leading-[1.1] sm:text-[2.6rem] lg:text-[2.75rem] xl:text-[2.95rem] font-bold tracking-[-0.022em] text-[#1E1B3A]">
              Find the Best Tutor.
              <span className="mt-1 block text-[#EA580C]">Learn Better.</span>
            </h1>

            <p className="mt-5 text-lg lg:text-xl leading-relaxed text-[#4B4763] max-w-lg">
              Home &amp; online tutors for school subjects, boards and
              competitive exams — Class 1 to 12.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-6 max-w-sm">
              {TRUST_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.line1}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white ring-1 ring-[#EFEBFA] shadow-[0_8px_20px_rgba(30,27,58,0.08)] flex items-center justify-center mb-2.5">
                    <span className="w-9 h-9 rounded-xl bg-[#F4EFFE] flex items-center justify-center">
                      <badge.icon className="w-[18px] h-[18px] text-[#6D28D9]" strokeWidth={2} />
                    </span>
                  </div>
                  <span className="text-[13px] font-semibold text-[#1E1B3A] leading-tight">
                    {badge.line1}
                    <br />
                    {badge.line2}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  track('book_cta_click', { placement: 'hero' });
                  navigate('/find-a-tutor');
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-9 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-lg shadow-[0_12px_30px_rgba(234,88,12,0.32)] transition-colors"
              >
                Find a Tutor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="mt-3.5 text-sm text-[#6E6A85]">
                Free first assessment · No obligation
              </p>
            </div>
          </motion.div>

          {/* ── Photo: stacked, full-width (mobile & tablet) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:hidden relative -mx-6 pb-4"
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 top-2 w-[18rem] h-[18rem] sm:w-[23rem] sm:h-[23rem] rounded-full bg-[radial-gradient(circle_at_35%_30%,#DCE8FF_0%,#E8DFFF_60%,transparent_100%)] opacity-80"
              aria-hidden="true"
            />
            <img
              src="/tutoo_assets/hero/tutor-student-sm.webp"
              alt={PHOTO_ALT}
              width={860}
              height={649}
              fetchPriority="high"
              decoding="async"
              className="relative w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>

      {/* ══════════════ "WE HELP IN" ══════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-[22px] shadow-[0_18px_50px_rgba(30,27,58,0.13)] ring-1 ring-[#EFEDF6] px-5 sm:px-8 py-5"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
              <p className="text-sm font-bold text-[#1E1B3A] shrink-0 text-center lg:text-left lg:border-r lg:border-[#EFEDF6] lg:pr-6">
                We help in
              </p>

              <ul className="flex-1 grid grid-cols-4 gap-y-4 sm:flex sm:items-start sm:justify-between">
                {CATEGORIES.map((c, i) => (
                  <li
                    key={c.label}
                    className={`group flex flex-col items-center justify-start text-center gap-1.5 px-0.5 sm:px-3.5 min-h-[3.25rem] ${
                      i > 0 ? 'sm:border-l sm:border-[#F1EFF7]' : ''
                    }`}
                  >
                    <c.icon
                      className="w-[22px] h-[22px] transition-transform duration-200 group-hover:-translate-y-0.5"
                      style={{ color: c.color }}
                      strokeWidth={1.9}
                    />
                    <span className="text-[11px] sm:text-xs font-medium text-[#4B4763] leading-tight whitespace-nowrap">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#F1EFF7] flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[13.5px] text-[#4B4763]">
              <span className="font-medium">One-to-One Learning</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7]" aria-hidden="true" />
              <span className="font-medium">Personal Attention</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7]" aria-hidden="true" />
              <span className="font-medium">Better Results</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
