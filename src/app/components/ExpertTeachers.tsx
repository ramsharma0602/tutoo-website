import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';
import TutorCard from './common/TutorCard';
import { cx, section, container, buttonDark, buttonMd } from './common/ui';
import type { Tutor } from '../data/tutors';
import { getVerifiedTutors } from '../data/tutorLookup';

/* ─────────────────────────────────────────────────────────────────────────
   MEET SOME OF OUR EXPERT TEACHERS

   Renders the shared TutorCard — the same component /online-tuition and
   /find-a-tutor use. This section used to hand-roll its own card, which is
   how the site ended up with two tutor designs. Change the card in
   components/common/TutorCard.tsx and all three surfaces move together.

   ── WHERE THE PEOPLE COME FROM ──────────────────────────────────────────
   Real, verified tutors in `data/tutors.ts` are always preferred. While that
   registry is empty this falls back to `DEMO_TUTORS` — the SAME sample set
   and the SAME single switch (`USE_DEMO_TUTORS`) the Find a Tutor page uses,
   so there is only ever one flag to flip before launch.

   ── WHAT IS DELIBERATELY ABSENT ─────────────────────────────────────────
   No star ratings, no review counts, no "students taught" numbers and no
   verification badges. None of it can be substantiated yet, and a parent
   choosing a teacher for their child deserves only claims we can stand
   behind. Qualification, experience, subjects and area are enough.
───────────────────────────────────────────────────────────────────────── */

export function ExpertTeachers() {
  const navigate = useNavigate();

  /* Verified only. This used to be a private copy of the demo fallback
     ladder, duplicated in four components; it is one call now, and the
     verified rule lives with it so no surface can forget it. */
  const source: Tutor[] = getVerifiedTutors();

  if (!source.length) return null;

  const featured = source.slice(0, 4);

  return (
    <section className={cx('relative overflow-hidden bg-white', section)}>
      {/* dotted backdrop, faded out at the edges */}
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(#DDD6EE 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, #000 30%, transparent 75%)',
        }}
      />
      <div
        className="hidden lg:block absolute -top-24 right-[8%] w-[30rem] h-[30rem] rounded-full opacity-60"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,247,0.13) 0%, transparent 68%)',
          filter: 'blur(28px)',
        }}
      />

      <div className={cx('relative', container)}>
        <SectionHeading
          eyebrow="Our Teachers"
          title="Meet some of our expert teachers"
          lead="Every tutor gives us their ID and qualification documents, and is interviewed before their first class."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              /* min-w-0: without it the grid track is sized by the card's
                 min-content and pushes past the viewport at 320px. */
              className="min-w-0"
            >
              <TutorCard tutor={t} index={i} />
            </motion.div>
          ))}
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
            className={cx(buttonDark, buttonMd)}
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
