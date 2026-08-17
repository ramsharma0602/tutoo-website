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
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { track } from '../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   HERO — full-bleed banner

   The photo is a transparent cutout — the studio backdrop has been removed, so
   there is no white block and no card. The subjects sit directly on the page
   background and the gradient shows through around them.

   Because the asset carries alpha, do NOT re-export it as JPEG and do not add
   a background colour behind it.

   The "We help in" card is centred on the boundary between this section and the
   one below: it sits in flow after the banner and is shifted up by half its own
   height. Move the whole group with the banner's bottom padding; do not swap the
   translate for a fixed negative margin, which is what previously let the card
   climb over the "Find a Tutor" button.
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
  'A tutor explaining a page of a textbook to a young student sitting beside her at home';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 bg-white">

      {/* ══════════════ BANNER BLOCK ══════════════ */}
      <div className="relative overflow-hidden">

        {/* Background: tint on the left, pure white well before the photo starts */}
        <div
          className="absolute inset-0 bg-[linear-gradient(100deg,#E8F0FF_0%,#F1EEFF_22%,#FCFAFF_36%,#FFFFFF_46%,#FFFFFF_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,#1e1b3a08_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a08_1px,transparent_1px)] bg-[size:64px_64px]"
          aria-hidden="true"
        />

        {/* Soft brand circle, sitting between the copy and the photo */}
        <div
          className="hidden lg:block absolute left-[42%] top-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-[#CFE0FF]/45 to-[#E7DBFF]/45 blur-[70px]"
          aria-hidden="true"
        />

        {/* ────── Photo: transparent cutout, no background block ────── */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[54%] xl:w-[52%] 2xl:w-[50%] pointer-events-none">
          <img
            src="/tutoo_assets/hero/tutor-student-3.png"
            alt={PHOTO_ALT}
            width={1400}
            height={1077}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_18px_40px_rgba(30,27,58,0.10)]"
          />
        </div>

        {/* ────── Copy ────── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[50%] xl:w-[48%] pt-32 pb-28 lg:pt-36 lg:pb-36"
          >
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
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-[0_6px_18px_rgba(30,27,58,0.10)] flex items-center justify-center mb-2.5">
                    <badge.icon className="w-6 h-6 text-[#6D28D9]" strokeWidth={1.9} />
                  </div>
                  <span className="text-[13px] font-semibold text-[#1E1B3A] leading-tight">
                    {badge.line1}
                    <br />
                    {badge.line2}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => navigate('/find-a-tutor')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-lg shadow-[0_10px_28px_rgba(234,88,12,0.30)] transition-colors"
              >
                Find a Tutor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </motion.div>

          {/* ────── Photo: stacked, full-width (mobile & tablet) ────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:hidden relative -mx-6 pb-4"
          >
            <img
              src="/tutoo_assets/hero/tutor-student-sm-1.png"
              alt={PHOTO_ALT}
              width={820}
              height={631}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>


      {/* ══════════════ "WE HELP IN" ══════════════
          Sits in flow BELOW the banner and is shifted up by exactly half its own
          height, so its centre line lands on the section boundary — half on the
          banner, half on the section below. The shift is relative to the card
          itself, never a fixed offset, so it cannot ride up over the button.
          It lives outside the banner's overflow-hidden so the lower half is not
          clipped, and the section carries z-10 so it paints over what follows. */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="-translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-[22px] shadow-[0_14px_44px_rgba(30,27,58,0.12)] border border-[#EFEDF6] px-5 sm:px-8 py-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <p className="text-sm font-bold text-[#1E1B3A] shrink-0 text-center lg:text-left lg:border-r lg:border-[#EFEDF6] lg:pr-6">
              We help in
            </p>

            <ul className="flex-1 grid grid-cols-4 gap-y-4 sm:flex sm:items-start sm:justify-between">
              {CATEGORIES.map((c, i) => (
                <li
                  key={c.label}
                  className={`flex flex-col items-center justify-start text-center gap-1.5 px-0.5 sm:px-3.5 min-h-[3.25rem] ${
                    i > 0 ? 'sm:border-l sm:border-[#F1EFF7]' : ''
                  }`}
                >
                  <c.icon className="w-[22px] h-[22px]" style={{ color: c.color }} strokeWidth={1.9} />
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
