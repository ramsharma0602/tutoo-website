import { motion } from 'motion/react';
import { Radio, User, Lock, PenLine, Smartphone, MonitorPlay } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import AssetImage from '../common/AssetImage';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT A CLASS ACTUALLY LOOKS LIKE

   This section replaces two from the brief — "Why personalized online
   tuition" (§15) and "Learning experience" (§18) — which described the same
   five facts in different words. The comparison table §15 proposed was
   dropped by agreement: it invites a parent to measure Tutoo against an
   unnamed strawman, and every claim in the "generic" column is one we cannot
   substantiate about anyone else.

   ── WHY A PHOTOGRAPH, NOT THE RENDERED CLASS WINDOW ─────────────────────
   This column used to hold ClassWindowPanel — a drawn mock-up of a video
   call. It was the only invented interface left on the page, and a parent
   reading "what a class actually looks like" beside a picture of software
   we do not ship is being shown the wrong thing. The photograph shows what
   the section claims: one child, headphones on, her own notebook open, a
   real tutor live on the screen in front of her.

   ── NOTHING IS OVERLAID ON THE PHOTO ────────────────────────────────────
   The obvious move is a chip on the corner reading "Started with OTP ·
   Attendance recorded". It is not here on purpose: the photo does not show
   an OTP or an attendance record, and a label pinned to an image reads as a
   caption *of that image*. Both facts are true and both are stated in the
   list on the right, where they are claims about the product rather than
   claims about the picture.

   Every line below is real behaviour. Do not add a feature here that the
   product does not have.
───────────────────────────────────────────────────────────────────────── */

const FACTS = [
  {
    icon: Radio,
    title: 'Live, not recorded',
    text: 'Your child talks to their tutor in real time and asks questions as they come up.',
  },
  {
    icon: User,
    title: 'One tutor, one student',
    text: 'No batch. The whole class is about your child’s doubts.',
  },
  {
    icon: Lock,
    title: 'Every class starts with an OTP',
    text: 'So you know exactly when it began — and attendance is recorded.',
  },
  {
    icon: PenLine,
    title: 'Work on the same page',
    text: 'The tutor sees the work your child is doing and marks it as they go.',
  },
  {
    icon: Smartphone,
    title: 'All you need is a phone',
    text: 'A phone, tablet or laptop and an internet connection. We help with setup before the first class.',
  },
];

export default function InsideAClass() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden"
      aria-labelledby="inside-class-heading"
    >
      <div
        className="hidden lg:block absolute -bottom-32 -left-20 w-[32rem] h-[32rem] rounded-full opacity-60"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.10) 0%, transparent 68%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          id="inside-class-heading"
          eyebrow="Inside a Class"
          title="What a class actually looks like"
          lead="Not a recorded video and not a batch. Your child and their tutor, live."
        />

        {/* min-w-0 on both columns: without it a grid track is sized by its
            child's min-content and the photo can push the row past 320px. */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="min-w-0"
          >
            {/* aspect-[4/3] + width/height: the box is reserved before the file
                arrives, so the facts beside it never jump. */}
            <div className="relative rounded-[26px] overflow-hidden ring-1 ring-[#EFEDF6] shadow-[0_18px_50px_rgba(30,27,58,0.10)] bg-[#F4EFFE] aspect-[4/3]">
              <AssetImage
                src="/tutoo_assets/photos/inside-a-class.webp"
                srcSet="/tutoo_assets/photos/inside-a-class-sm.webp 760w, /tutoo_assets/photos/inside-a-class.webp 1200w"
                sizes="(min-width: 1024px) 592px, calc(100vw - 3rem)"
                width={1200}
                height={900}
                alt="A student wearing headphones writes in her notebook while her tutor teaches her live on the laptop in front of her."
                className="w-full h-full object-cover"
              />

              {/* A very light inner edge so a bright photo does not bleed into
                  the tinted section background. */}
              <div
                className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-black/[0.06]"
                aria-hidden="true"
              />
            </div>

            <p className="mt-4 flex items-start gap-2.5 text-[14px] text-[#6E6A85] leading-relaxed max-w-md">
              <MonitorPlay
                className="w-[18px] h-[18px] text-[#6D28D9] shrink-0 mt-[2px]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>
                One child, one tutor, live on screen — with her own notebook open,
                exactly the way she would work at a desk.
              </span>
            </p>
          </motion.div>

          <ul className="min-w-0 space-y-5">
            {FACTS.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-[#6D28D9]" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold text-[#1E1B3A] leading-tight mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4B4763]">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
