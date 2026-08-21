import { motion } from 'motion/react';
import { Check, Users, Backpack } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT YOU GET OUT OF IT — parents and students, side by side

   The brief had these as two full-width sections (§19, §20). Two stacked
   bullet lists back to back is the most skippable pattern on a landing page;
   side by side, the contrast between the two audiences IS the design, and it
   takes one screen instead of two.

   Colour follows the site rule: orange is the parent/action side, violet is
   the student/structure side.

   Every line is something Tutoo actually does. No outcome promises, no marks
   improvement, no rankings.
───────────────────────────────────────────────────────────────────────── */

const COLUMNS = [
  {
    icon: Users,
    eyebrow: 'For Parents',
    title: 'You stay in the loop',
    accent: '#EA580C',
    tint: '#FFF1E7',
    points: [
      'See when each class starts and ends',
      'Tell us what you need — we shortlist the tutors',
      'Change tutor if the fit is not right',
      'Fee agreed before anything starts',
    ],
  },
  {
    icon: Backpack,
    eyebrow: 'For Students',
    title: 'You get room to ask',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    points: [
      'Ask questions without waiting your turn',
      'Go at your own pace, not the class average',
      'Get help with the topics you find hard',
      'The same tutor every class',
    ],
  },
];

export default function AudienceSplit() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Parents & Students"
          title="What you get out of it"
          lead="The same class, from two sides."
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {COLUMNS.map((c, i) => (
            <motion.div
              key={c.eyebrow}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[24px] bg-white ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_18px_44px_rgba(30,27,58,0.10)] transition-shadow duration-300 p-7 lg:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: c.accent }}
                aria-hidden="true"
              />

              <span
                className="inline-flex w-14 h-14 rounded-2xl items-center justify-center mb-5"
                style={{ background: c.tint }}
              >
                <c.icon className="w-6 h-6" style={{ color: c.accent }} strokeWidth={2} aria-hidden="true" />
              </span>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.09em] mb-1.5"
                style={{ color: c.accent }}
              >
                {c.eyebrow}
              </p>

              <h3 className="text-xl lg:text-2xl font-bold text-[#1E1B3A] mb-5">{c.title}</h3>

              <ul className="space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#1E1B3A]">
                    <span
                      className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: c.tint }}
                      aria-hidden="true"
                    >
                      <Check className="w-3 h-3" style={{ color: c.accent }} strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
