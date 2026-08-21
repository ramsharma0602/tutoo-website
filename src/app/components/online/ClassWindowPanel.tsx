import { motion, useReducedMotion } from 'motion/react';
import { Lock, ClipboardCheck, Mic, Video } from 'lucide-react';
import AssetImage from '../common/AssetImage';

/* ─────────────────────────────────────────────────────────────────────────
   CLASS WINDOW PANEL — the signature element of /online-tuition

   ── WHY THIS EXISTS ─────────────────────────────────────────────────────
   A parent choosing online tuition has usually already accepted the
   convenience. Their real objection is "is my child being taught, or just
   parked in front of a screen?" Benefit cards cannot answer that. Showing
   the class can.

   ── WHY IT IS RENDERED UI, NOT A PHOTOGRAPH ─────────────────────────────
   A stock photo of a child at a laptop shows a screen you cannot read —
   which is exactly the part that matters. Rendered UI keeps the OTP, the
   timer and the tutor's annotation legible down to a 340px-wide phone, and
   it is the one element on this page that could not be lifted onto a
   competitor's site unchanged.

   Everything depicted is real product behaviour: classes start with an OTP,
   attendance is recorded, sessions are live and one-to-one. Nothing here
   claims a feature Tutoo does not have.

   `variant="page"` crops to just the shared working page — used lower down
   as a zoom into the same idea rather than a second copy of the panel.
───────────────────────────────────────────────────────────────────────── */

interface Props {
  variant?: 'full' | 'page';
  className?: string;
}

/* A real Class 8 algebra step, mid-solve — the tutor has ringed the line the
   student got wrong. That ring is the whole "we work on the same page" claim. */
const WORKING = [
  { text: '2x + 5 = 17', marked: false },
  { text: '2x = 17 + 5', marked: true },
  { text: 'x = 11', marked: false },
];

function SharedPage({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full rounded-xl bg-white overflow-hidden ring-1 ring-black/5">
      {/* ruled paper */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(#EDF1F7 0 1px, transparent 1px 22px)',
          backgroundPosition: '0 30px',
        }}
      />
      <div className="absolute left-5 top-0 bottom-0 w-px bg-[#F6D9D9]" aria-hidden="true" />

      <div className={`relative ${compact ? 'p-4 pl-8' : 'p-4 pl-8'}`}>
        <p className="text-[12px] font-semibold text-[#8A93A6] mb-2.5">Solve for x</p>

        {/* Each step is its own block row. They were inline-block once, which
            made the three lines flow onto one line and collide. */}
        <div className="space-y-[7px]">
          {WORKING.map((line) => (
            <div key={line.text}>
              <span className="relative inline-block">
                <span
                  className={`text-[15px] sm:text-base font-semibold tabular-nums whitespace-nowrap ${
                    line.marked ? 'text-[#1E1B3A]' : 'text-[#4B4763]'
                  }`}
                >
                  {line.text}
                </span>

                {/* the tutor's mark-up, drawn as a hand-ish ellipse */}
                {line.marked && (
                  <span
                    className="absolute -inset-x-2 -inset-y-1 rounded-[50%] border-2 border-[#EA580C] rotate-[-1.5deg]"
                    aria-hidden="true"
                  />
                )}
              </span>

              {/* Sits under the ringed step rather than beside it — beside it
                  overflowed the panel at every width below 1440. */}
              {line.marked && (
                <span className="block mt-1.5 text-[12px] font-bold text-[#EA580C] whitespace-nowrap">
                  ↑ check the sign
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ClassWindowPanel({ variant = 'full', className = '' }: Props) {
  const reduce = useReducedMotion();

  /* One orchestrated entrance rather than scattered effects: the window, then
     the tutor tile, then the OTP bar. Skipped entirely for reduced motion. */
  const step = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.45, delay: 0.12 + i * 0.14, ease: 'easeOut' as const },
        };

  if (variant === 'page') {
    return (
      <div
        className={`relative rounded-[20px] bg-[#0A1028] p-3 shadow-[0_18px_50px_rgba(10,16,40,0.22)] ${className}`}
        role="img"
        aria-label="A student's worked algebra, with the tutor's correction ringed in orange"
      >
        <div className="h-[188px] sm:h-[210px]">
          <SharedPage compact />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      role="img"
      aria-label="A live one-to-one online class: the tutor on video, the student's worked algebra beside it, the class started with a one-time code and attendance recorded."
    >
      {/* brand glow behind the window */}
      <div
        className="absolute -inset-6 rounded-[40px] blur-2xl"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(123,47,247,0.22) 0%, rgba(234,88,12,0.10) 55%, transparent 74%)',
        }}
      />

      <motion.div
        {...step(0)}
        className="relative min-w-0 rounded-[22px] bg-[#0A1028] shadow-[0_24px_60px_rgba(10,16,40,0.28)] ring-1 ring-white/10 overflow-hidden"
      >
        {/* ── title bar: live state, what is being taught, how long ── */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
          <span className="inline-flex items-center gap-2 shrink-0">
            <span className="relative flex w-2 h-2" aria-hidden="true">
              {!reduce && (
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#EF4444] opacity-70 animate-ping" />
              )}
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#EF4444]" />
            </span>
            <span className="text-[12px] font-bold tracking-[0.08em] text-white">LIVE</span>
          </span>

          <span className="text-[12px] font-semibold text-white/60 truncate">
            Class 8 · Mathematics
          </span>

          <span className="text-[12px] font-bold tabular-nums text-white/80 shrink-0">24:15</span>
        </div>

        {/* ── the class itself ── */}
        <div className="grid grid-cols-[38%_minmax(0,1fr)] gap-2.5 p-2.5">
          {/* tutor video tile */}
          <motion.div
            {...step(1)}
            className="relative rounded-xl overflow-hidden bg-[#241A4A] ring-1 ring-white/10 aspect-[3/4]"
          >
            <AssetImage
              src="/tutoo_assets/photos/teacher-1.jpg"
              alt=""
              loading="lazy"
              objectPosition="center 20%"
              className="w-full h-full object-cover"
              fallback={
                <div
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3B2A7A] to-[#241A4A] text-white/70 text-xl font-bold"
                  aria-hidden="true"
                >
                  PD
                </div>
              }
            />
            {/* name plate */}
            <span className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1 rounded-md bg-black/55 backdrop-blur px-1.5 py-1">
              <Mic className="w-3 h-3 text-[#4ADE80] shrink-0" strokeWidth={2.5} aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white truncate">Priya D.</span>
            </span>
          </motion.div>

          {/* shared working page */}
          <motion.div {...step(2)} className="min-w-0">
            <SharedPage />
          </motion.div>
        </div>

        {/* ── proof bar: the two things a parent actually wants ── */}
        <motion.div
          {...step(3)}
          className="flex items-center gap-3 px-4 py-3 border-t border-white/10 bg-white/[0.03]"
        >
          <span className="inline-flex items-center gap-1.5 min-w-0">
            <Lock className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" strokeWidth={2.4} aria-hidden="true" />
            <span className="text-[12px] font-semibold text-white/80 truncate">
              Started with OTP
            </span>
          </span>

          <span className="w-px h-3.5 bg-white/15 shrink-0" aria-hidden="true" />

          <span className="inline-flex items-center gap-1.5 min-w-0">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" strokeWidth={2.4} aria-hidden="true" />
            <span className="text-[12px] font-semibold text-white/80 truncate">
              Attendance recorded
            </span>
          </span>

          <Video
            className="w-3.5 h-3.5 text-white/35 ml-auto shrink-0"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
