import { motion } from 'motion/react';
import { Radio, User, Lock, PenLine, Smartphone } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import ClassWindowPanel from './ClassWindowPanel';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT A CLASS ACTUALLY LOOKS LIKE

   This section replaces two from the brief — "Why personalized online
   tuition" (§15) and "Learning experience" (§18) — which described the same
   five facts in different words. The comparison table §15 proposed was
   dropped by agreement: it invites a parent to measure Tutoo against an
   unnamed strawman, and every claim in the "generic" column is one we cannot
   substantiate about anyone else.

   The visual is a crop of the hero's class window showing only the shared
   working page. A zoom into the signature, not a second copy of it.

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
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden">
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
          eyebrow="Inside a Class"
          title="What a class actually looks like"
          lead="Not a recorded video and not a batch. Your child and their tutor, live."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* zoom into the shared page from the hero panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* The hero is photo-only, so this is the one place on the page the
                class window appears — full, at every width. LIVE state, timer,
                tutor tile, the ringed working and the OTP bar. */}
            <ClassWindowPanel />

            <p className="mt-4 text-[14px] text-[#6E6A85] leading-relaxed max-w-sm">
              The tutor can see and mark your child&apos;s working — the same way
              they would sitting next to them.
            </p>
          </motion.div>

          <ul className="space-y-5">
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
                <div>
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
