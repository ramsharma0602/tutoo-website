import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Landmark, BookOpen, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { SUBJECTS, CLASS_BAND_OPTIONS, BOARD_OPTIONS } from '../../data/subjects';
import { TUTORS, type Tutor } from '../../data/tutors';
import { DEMO_TUTORS, USE_DEMO_TUTORS } from '../../data/tutorsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   CAN WE TEACH YOUR CHILD?  — a build-your-search panel, not a filter bar

   ── WHY IT WORKS THIS WAY ───────────────────────────────────────────────
   The first version was three rows of loose chips, each a separate link into
   /find-a-tutor. Seventeen independent links means the parent has to guess
   which single dimension to click, and every click throws away the other two
   parts of what they actually need. It also read as a filter bar that had
   escaped from another page rather than a designed section.

   Now the three choices compose. Pick any combination of class, board and
   subject and the panel answers the section's own question — "can we teach
   your child?" — with a real number, then carries all three selections into
   /find-a-tutor in one qualified click.

   ── THE COUNT IS REAL ───────────────────────────────────────────────────
   `matches` re-implements exactly the predicate /find-a-tutor uses (see
   page.tsx "Filtering"), against the same tutor list. If the two ever drift,
   this panel will promise a number the results page does not deliver — so
   change both together.

   Zero is shown honestly rather than hidden: an empty combination says so
   and routes to the enquiry form. A chip that silently disappears would tell
   a parent we do not teach something when we simply have nobody free.

   Values come from data/subjects.ts, which re-exports the constants the
   filters match against — never a second hardcoded list. IB and IGCSE are
   deliberately absent: Tutoo does not staff them.
───────────────────────────────────────────────────────────────────────── */

type GroupKey = 'class' | 'board' | 'subject';

const GROUPS: {
  key: GroupKey;
  icon: typeof GraduationCap;
  label: string;
  hint: string;
  values: string[];
}[] = [
  {
    key: 'class',
    icon: GraduationCap,
    label: 'Class',
    hint: 'Class 1 to 12, plus entrance prep',
    values: CLASS_BAND_OPTIONS,
  },
  {
    key: 'board',
    icon: Landmark,
    label: 'Board',
    hint: 'The board your child’s school follows',
    values: BOARD_OPTIONS,
  },
  {
    key: 'subject',
    icon: BookOpen,
    label: 'Subject',
    hint: 'The subjects we can staff today',
    values: SUBJECTS.map((s) => s.name),
  },
];

export default function CoverageSelector() {
  const navigate = useNavigate();

  const [picked, setPicked] = useState<Record<GroupKey, string>>({
    class: '',
    board: '',
    subject: '',
  });

  const source: Tutor[] = TUTORS.length
    ? TUTORS
    : USE_DEMO_TUTORS
      ? DEMO_TUTORS
      : [];

  /* Mirrors the predicate in find-a-tutor/page.tsx. Keep them in step. */
  const matches = useMemo(
    () =>
      source.filter((t) => {
        if (t.mode !== 'online' && t.mode !== 'both') return false;
        if (picked.board && !(t.boards ?? []).includes(picked.board)) return false;
        if (picked.class && !(t.classBands ?? []).includes(picked.class)) return false;
        if (picked.subject && !t.subjects.includes(picked.subject)) return false;
        return true;
      }).length,
    [source, picked]
  );

  const chosen = (Object.keys(picked) as GroupKey[])
    .map((k) => picked[k])
    .filter(Boolean);

  const toggle = (key: GroupKey, value: string) =>
    setPicked((p) => ({ ...p, [key]: p[key] === value ? '' : value }));

  const clearAll = () => setPicked({ class: '', board: '', subject: '' });

  const goToResults = () => {
    const params = new URLSearchParams({ mode: 'online' });
    (Object.keys(picked) as GroupKey[]).forEach((k) => {
      if (picked[k]) params.set(k, picked[k]);
    });
    navigate(`/find-a-tutor?${params.toString()}`);
  };

  const goToEnquiry = () => {
    const params = new URLSearchParams({ mode: 'online' });
    if (picked.subject) params.set('subject', picked.subject);
    navigate(`/book-free-assessment?${params.toString()}`);
  };

  const noMatch = matches === 0;

  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="What We Cover"
          title="Can we teach your child?"
          lead="Pick your child’s class, board and subject. We will tell you straight away."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-[26px] ring-1 ring-[#EFEDF6] shadow-[0_14px_44px_rgba(30,27,58,0.08)] overflow-hidden"
        >
          <div className="p-6 sm:p-8 lg:p-9 space-y-7">
            {GROUPS.map((group) => (
              <fieldset key={group.key} className="min-w-0">
                <legend className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 mb-3.5">
                  <span className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1E1B3A]">
                    <group.icon
                      className="w-4 h-4 text-[#6D28D9]"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    {group.label}
                  </span>
                  <span className="text-[13px] text-[#6E6A85]">{group.hint}</span>
                </legend>

                {/* Scrolls rather than wrapping on small screens — eight subjects
                    wrapped into a ragged block with one orphan on the last row. */}
                <div className="relative -mx-6 sm:mx-0">
                  <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto sm:overflow-visible px-6 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {group.values.map((value) => {
                      const active = picked[group.key] === value;

                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => toggle(group.key, value)}
                          aria-pressed={active}
                          className={`shrink-0 h-11 px-4 rounded-full text-[14px] font-semibold ring-1 transition-all duration-200 ${
                            active
                              ? 'bg-[#7B2FF7] text-white ring-[#7B2FF7] shadow-[0_8px_20px_rgba(123,47,247,0.26)]'
                              : 'bg-white text-[#1E1B3A] ring-[#E6E3F0] hover:ring-[#7B2FF7]/45 hover:bg-[#FAF8FF]'
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>

                  <div
                    className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </fieldset>
            ))}
          </div>

          {/* ── ANSWER BAR ── */}
          <div
            className={`border-t px-6 sm:px-8 lg:px-9 py-6 transition-colors duration-300 ${
              noMatch
                ? 'border-[#FBE3D4] bg-[#FFF7F2]'
                : 'border-[#EFEDF6] bg-[#FAFAFC]'
            }`}
            aria-live="polite"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="min-w-0 flex-1">
                {noMatch ? (
                  <>
                    <p className="text-[15px] font-bold text-[#1E1B3A]">
                      No online tutor free for that combination yet.
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#4B4763]">
                      Tell us what you need and we will look for one — the first
                      assessment is free either way.
                    </p>
                  </>
                ) : (
                  <p className="text-[15px] text-[#4B4763]">
                    <span className="text-[22px] font-bold text-[#1E1B3A] tabular-nums align-middle mr-1.5">
                      {matches}
                    </span>
                    online {matches === 1 ? 'tutor' : 'tutors'}
                    {chosen.length ? ' for' : ' available right now'}
                  </p>
                )}

                {/* Always rendered when something is picked — including at zero
                    matches. Hiding it there left the parent unable to see or
                    undo the combination that produced the dead end. */}
                {chosen.length > 0 && (
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] font-semibold text-[#6D28D9]">
                    {chosen.map((c, i) => (
                      <span key={c} className="inline-flex items-center gap-2">
                        {i > 0 && (
                          <span
                            className="w-1 h-1 rounded-full bg-[#C4B5FD]"
                            aria-hidden="true"
                          />
                        )}
                        {c}
                      </span>
                    ))}

                    <button
                      type="button"
                      onClick={clearAll}
                      className="inline-flex items-center gap-1 ml-1 px-2.5 py-1.5 rounded-full text-[13px] font-semibold text-[#6E6A85] hover:text-[#1E1B3A] hover:bg-[#F1EFF7] transition-colors"
                    >
                      <X className="w-3.5 h-3.5" strokeWidth={2.4} aria-hidden="true" />
                      Clear
                    </button>
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={noMatch ? goToEnquiry : goToResults}
                className="group shrink-0 inline-flex items-center justify-center gap-2.5 px-7 h-13 py-3.5 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-[15px] shadow-[0_10px_26px_rgba(234,88,12,0.26)] transition-colors"
              >
                {noMatch
                  ? 'Tell us what you need'
                  : chosen.length
                    ? `See ${matches === 1 ? 'the tutor' : `all ${matches}`}`
                    : 'Browse all online tutors'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 flex items-center justify-center gap-2 text-[14px] text-[#6E6A85] text-center">
          <Search className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          Looking for a subject that is not listed? Ask us — we will check.
        </p>
      </div>
    </section>
  );
}
