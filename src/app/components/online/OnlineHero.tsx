import { motion } from 'motion/react';
import {
  Radio,
  Users,
  ShieldCheck,
  CalendarClock,
  Lock,
  ClipboardCheck,
  MessageCircleQuestion,
  Smartphone,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { track } from '../../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   /online-tuition HERO — same construction as the homepage hero

   Deliberately built from the homepage Hero's parts so the two read as one
   product: identical backdrop stack, identical eyebrow pill, two-line H1 with
   the second line in orange, a four-badge trust row, and a card that sits on
   the section boundary shifted up by half its own height.

   PHOTO
   Transparent cutout, full-bleed right. Its left edge was feathered with a
   170px alpha ramp before export, because the frame sliced the desk flat and
   that cut read as a hard vertical line mid-page. Keep the .webp files — do
   NOT re-export as JPEG and do not put a background colour behind the image.

   BACKDROP
   Purely decorative stacked layers: base diagonal wash, two radial glows, a
   fine grid, a brand disc, a thin outline ring and a dotted patch. All are
   aria-hidden and carry no meaning, so they can be re-ordered or removed.

   "IN EVERY CLASS" CARD
   Sits in flow after the banner and is shifted up by half its own height, so
   its centre lands on the section boundary. Move the group with the banner's
   bottom padding — never swap the translate for a fixed negative margin,
   which is what previously let the homepage card climb over its button.

   The card carries the proof the class-window panel used to carry: live, one
   to one, OTP, attendance, doubts, any device. Every item is real product
   behaviour — do not add a claim here Tutoo cannot stand behind. The full
   class-window panel still exists; it now appears once, in InsideAClass.
───────────────────────────────────────────────────────────────────────── */

/* Two short words each. Longer labels ("Not Recorded", "One-to-One") wrap to a
   third line in the 87px column this grid gives at 390px, which left the four
   badges sitting at different heights. Nothing is lost — "Live, Not Recorded"
   and "One-to-One" both appear in full in the card below. */
const TRUST_BADGES = [
  { icon: Radio, line1: 'Live', line2: 'Classes' },
  { icon: Users, line1: 'Personal', line2: 'Attention' },
  { icon: ShieldCheck, line1: 'Verified', line2: 'Tutors' },
  { icon: CalendarClock, line1: 'Flexible', line2: 'Timings' },
];

/* Six, not the homepage's seven — six divided items fit comfortably from lg
   up, where seven needed roughly 1024px and clipped the last label. */
const IN_EVERY_CLASS = [
  { icon: Radio, label: 'Live, Not Recorded', color: '#EF4444' },
  { icon: Users, label: 'One-to-One', color: '#7B2FF7' },
  { icon: Lock, label: 'Starts With OTP', color: '#2563EB' },
  { icon: ClipboardCheck, label: 'Attendance Logged', color: '#16A34A' },
  { icon: MessageCircleQuestion, label: 'Doubts Answered', color: '#EA580C' },
  { icon: Smartphone, label: 'Any Device', color: '#0D9488' },
];

const PHOTO_ALT =
  'A student taking a live one-to-one online class, talking to her tutor over a laptop while writing in her notebook';

export default function OnlineHero() {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 bg-white" aria-labelledby="online-hero-heading">

      {/* ══════════════ BANNER ══════════════ */}
      <div className="relative overflow-hidden">

        {/* Backdrop 1 — base wash, reaching white before the photo starts */}
        <div
          className="absolute inset-0 bg-[linear-gradient(103deg,#EFEBFF_0%,#F1EEFF_20%,#F8F5FF_34%,#FFFFFF_46%,#FFFFFF_100%)]"
          aria-hidden="true"
        />

        {/* Backdrop 2 — soft radial glows */}
        <div
          className="absolute -top-40 -left-32 w-[46rem] h-[46rem] rounded-full opacity-60"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(123,47,247,0.18) 0%, rgba(123,47,247,0.05) 45%, transparent 70%)',
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
            src="/tutoo_assets/hero/online-hero.webp"
            alt={PHOTO_ALT}
            width={1400}
            height={1000}
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
              <Globe className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="text-[13px] font-semibold text-[#1E1B3A]">
                Online Classes · Anywhere in India
              </span>
            </motion.div>

            <h1
              id="online-hero-heading"
              className="max-w-[14ch] sm:max-w-[16ch] text-[2.15rem] leading-[1.1] sm:text-[2.6rem] lg:text-[2.75rem] xl:text-[2.95rem] font-bold tracking-[-0.022em] text-[#1E1B3A]">
              Learn From the Right Tutor.
              <span className="mt-1 block text-[#EA580C]">From Anywhere.</span>
            </h1>

            <p className="mt-5 text-lg lg:text-xl leading-relaxed text-[#4B4763] max-w-lg">
              Live one-to-one online classes for Class 1 to 12 — your child&apos;s
              own tutor, on your own schedule.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-6 max-w-sm">
              {TRUST_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.line2}
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

            {/* Two CTAs, and they mean different things: "Find a Tutor" browses
                /find-a-tutor, "Book a Free Assessment" opens the form. The old
                page's single button said "Find an Online Tutor" and went to the
                form — a promise the click did not keep. */}
            <div className="mt-9">
              <div className="flex flex-col sm:flex-row gap-3.5">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => {
                    track('find_tutor_click', { placement: 'online_hero' });
                    navigate('/find-a-tutor?mode=online');
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-[17px] whitespace-nowrap shadow-[0_12px_30px_rgba(234,88,12,0.32)] transition-colors"
                >
                  Find a Tutor
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => {
                    track('book_cta_click', { placement: 'online_hero' });
                    navigate('/book-free-assessment?mode=online');
                  }}
                  className="inline-flex items-center justify-center px-8 h-14 rounded-xl bg-white ring-[1.5px] ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A] font-bold text-[17px] whitespace-nowrap transition-all"
                >
                  Book a Free Assessment
                </motion.button>
              </div>

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
              src="/tutoo_assets/hero/online-hero-sm.webp"
              alt={PHOTO_ALT}
              width={860}
              height={615}
              fetchPriority="high"
              decoding="async"
              className="relative w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>

      {/* ══════════════ "IN EVERY CLASS" ══════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-[22px] shadow-[0_18px_50px_rgba(30,27,58,0.13)] ring-1 ring-[#EFEDF6] px-5 sm:px-8 py-5"
          >
            {/* ── UP TO xl: a swipeable row of pills ──
                   The divided row below needs ~1100px for six items plus the
                   label; at 1024 it pushed 11px past the viewport. */}
            <div className="xl:hidden">
              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6E6A85] mb-3">
                In every class
              </p>

              <div className="relative -mx-5">
                <ul
                  className="flex gap-2 overflow-x-auto snap-x snap-mandatory px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  aria-label="What happens in every online class"
                >
                  {IN_EVERY_CLASS.map((c) => (
                    <li
                      key={c.label}
                      className="snap-start shrink-0 inline-flex items-center gap-2 rounded-full bg-[#F8F6FF] border border-[#EFEDF6] pl-3 pr-4 py-2"
                    >
                      <c.icon
                        className="w-[18px] h-[18px] shrink-0"
                        style={{ color: c.color }}
                        strokeWidth={2}
                      />
                      <span className="text-[13px] font-semibold text-[#1E1B3A] whitespace-nowrap">
                        {c.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Fade on the right edge, hinting there is more to swipe */}
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* ── xl and up: divided row ── */}
            <div className="hidden xl:flex xl:items-center gap-6">
              <p className="text-sm font-bold text-[#1E1B3A] shrink-0 border-r border-[#EFEDF6] pr-6">
                In every class
              </p>

              <ul className="flex-1 flex items-start justify-between">
                {IN_EVERY_CLASS.map((c, i) => (
                  <li
                    key={c.label}
                    className={`group flex flex-col items-center justify-start text-center gap-1.5 px-3.5 min-h-[3.25rem] ${
                      i > 0 ? 'border-l border-[#F1EFF7]' : ''
                    }`}
                  >
                    <c.icon
                      className="w-[22px] h-[22px] transition-transform duration-200 group-hover:-translate-y-0.5"
                      style={{ color: c.color }}
                      strokeWidth={1.9}
                    />
                    <span className="text-xs font-medium text-[#4B4763] leading-tight whitespace-nowrap">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we cover, in one line */}
            <div className="mt-4 pt-3.5 border-t border-[#F1EFF7]">
              <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-x-4 xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-x-3 text-[13.5px] text-[#4B4763]">
                {['Class 1 to 12', 'CBSE · ICSE · SSC', 'JEE & NEET Prep'].map((point, i) => (
                  <div key={point} className="contents">
                    {i > 0 && (
                      <span
                        className="hidden xl:block w-1.5 h-1.5 rounded-full bg-[#7B2FF7]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="flex items-center gap-2 font-medium xl:gap-0">
                      <span
                        className="xl:hidden w-1.5 h-1.5 rounded-full bg-[#7B2FF7] shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
