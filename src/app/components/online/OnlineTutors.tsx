import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import TutorCard from '../common/TutorCard';
import { cx, section, sectionTinted, container, buttonDark, buttonMd } from '../common/ui';
import { TUTORS, type Tutor } from '../../data/tutors';
import { DEMO_TUTORS, USE_DEMO_TUTORS } from '../../data/tutorsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   TUTORS WHO TEACH ONLINE

   Identical construction to the homepage's ExpertTeachers — same
   SectionHeading, same shared TutorCard, same grid, same closing CTA. The
   only differences are the words and the online-only filter, which is how it
   should be: this is the same product, seen from a different page.

   Only tutors who actually teach online are shown: mode 'online' or 'both'.
   A home-only tutor here would be a wasted click.

   Real tutors in data/tutors.ts always win; DEMO_TUTORS is the fallback while
   USE_DEMO_TUTORS is true. Set that to false and this section disappears
   until a real online tutor exists — it never invents one.

   §33: these are static imports, not a fetch, so slicing to four is the whole
   cost. When a real GET /api/tutors lands it should take ?mode=online&limit=4.
───────────────────────────────────────────────────────────────────────── */

export default function OnlineTutors() {
  const navigate = useNavigate();

  const source: Tutor[] = TUTORS.length
    ? TUTORS
    : USE_DEMO_TUTORS
      ? DEMO_TUTORS
      : [];

  const featured = source.filter((t) => t.mode !== 'home').slice(0, 4);

  if (!featured.length) return null;

  return (
    <section className={cx(section, sectionTinted)}>
      <div className={container}>
        <SectionHeading
          eyebrow="Our Tutors"
          title="Tutors who teach online"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => navigate('/find-a-tutor?mode=online')}
            className={cx(buttonDark, buttonMd)}
          >
            View all online tutors
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
