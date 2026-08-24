import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { cx, section, sectionTinted, container } from '../common/ui';
import { SUBJECTS, CLASS_BANDS, BOARDS, type SubjectEntry } from '../../data/subjects';

/* ─────────────────────────────────────────────────────────────────────────
   CAN WE TEACH YOUR CHILD?  — classes, subjects and boards

   Built in the same language as the homepage's "What we teach"
   (SubjectsPrograms): icon-in-a-violet-well cards for the pickable things,
   then a tinted panel for the boards. Same card, same radius, same hover
   lift, same violet uppercase group label. A parent moving between the two
   pages should not notice they changed component.

   The one difference is where a card goes. The homepage sends you to the
   enquiry form, because the homepage does not know whether you want home or
   online. Here we know, so every card deep-links into /find-a-tutor with
   `mode=online` plus that filter already applied — a shorter path to an
   actual list of people.

   ── PARAM NAMES ─────────────────────────────────────────────────────────
   `class`, `board`, `subject` are what /find-a-tutor actually reads (note it
   is `class`, not `classBand`). Values come from data/subjects.ts, which
   re-exports the same constants the filters match against, and that file
   carries a build-time guard so a card can never link to an empty result.

   IB and IGCSE are deliberately absent: Tutoo does not staff them.
───────────────────────────────────────────────────────────────────────── */

/** Violet uppercase label above each group — same treatment as the homepage's
 *  "Boards We Cover". */
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[13px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-6">
      {children}
    </p>
  );
}

/** The shared icon card. Identical to the homepage's subject card. */
function PickCard({
  item,
  index,
  onClick,
  label,
}: {
  item: SubjectEntry;
  index: number;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, delay: Math.min(index, 7) * 0.05 }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-3 min-w-0 bg-white rounded-2xl ring-1 ring-[#EFEDF6] hover:ring-[#7B2FF7]/30 shadow-[0_4px_18px_rgba(30,27,58,0.05)] hover:shadow-[0_12px_30px_rgba(30,27,58,0.09)] transition-all duration-250 px-4 py-4 text-left"
    >
      <span className="w-11 h-11 rounded-xl bg-[#F4EFFE] flex items-center justify-center shrink-0">
        <item.icon className="w-5 h-5 text-[#6D28D9]" strokeWidth={2} aria-hidden="true" />
      </span>
      <span /* min-w-0 + break-words: without them "Olympiads" cannot shrink in the
           130px column this grid gives at 320px, and pushes past the viewport */
        className="min-w-0 break-words text-[14px] sm:text-[15px] font-semibold text-[#1E1B3A] leading-tight">
        {item.name}
      </span>
    </motion.button>
  );
}

export default function CoverageSelector() {
  const navigate = useNavigate();

  const go = (key: 'class' | 'board' | 'subject', value: string) =>
    navigate(`/find-a-tutor?mode=online&${key}=${encodeURIComponent(value)}`);

  return (
    <section className={cx('relative', section, sectionTinted)}>
      <div className={container}>

        <SectionHeading
          eyebrow="What We Cover"
          title="Can we teach your child?"
          lead="Class 1 to 12 across the three boards we cover, plus entrance-exam preparation."
        />

        {/* ── Classes ── */}
        <GroupLabel>Classes We Teach</GroupLabel>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-14">
          {CLASS_BANDS.map((c, i) => (
            <PickCard
              key={c.name}
              item={c}
              index={i}
              label={`Find online tutors for ${c.name}`}
              onClick={() => go('class', c.name)}
            />
          ))}
        </div>

        {/* ── Subjects ── */}
        <GroupLabel>Subjects We Teach</GroupLabel>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {SUBJECTS.map((s, i) => (
            <PickCard
              key={s.name}
              item={s}
              index={i}
              label={`Find online tutors for ${s.name}`}
              onClick={() => go('subject', s.name)}
            />
          ))}
        </div>

        {/* ── Boards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="rounded-[24px] bg-white ring-1 ring-[#EFEDF6] p-6 sm:p-8"
        >
          <GroupLabel>Boards We Cover</GroupLabel>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BOARDS.map((b) => (
              <button
                key={b.title}
                type="button"
                onClick={() => go('board', b.title)}
                aria-label={`Find online tutors for ${b.title}`}
                className="bg-[#FAFAFC] rounded-2xl ring-1 ring-[#EFEDF6] hover:ring-[#7B2FF7]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(30,27,58,0.08)] hover:-translate-y-1 transition-all duration-250 px-4 py-5 text-center"
              >
                <p className="text-lg font-bold text-[#1E1B3A]">{b.title}</p>
                <p className="text-[13px] text-[#6E6A85] mt-1">{b.sub}</p>
              </button>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={() => navigate('/find-a-tutor?mode=online')}
              className="group inline-flex items-center gap-2 py-2 text-[15px] font-bold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
            >
              Browse all online tutors
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-[14px] text-[#6E6A85]">
          Looking for a subject that is not listed? Ask us — we will check.
        </p>
      </div>
    </section>
  );
}
