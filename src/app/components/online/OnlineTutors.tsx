import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import TutorCard from '../common/TutorCard';
import { TUTORS, type Tutor } from '../../data/tutors';
import { DEMO_TUTORS, USE_DEMO_TUTORS } from '../../data/tutorsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   TUTORS WHO TEACH ONLINE

   Reuses the SAME TutorCard as /find-a-tutor, per brief §16 — a second card
   design for one page is how a product starts looking like two products.

   Only tutors who actually teach online are shown: mode 'online' or 'both'.
   A home-only tutor on this page would be a wasted click.

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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Tutors"
          title="Tutors who teach online"
          lead="Every tutor gives us their ID and qualification documents, and is interviewed before their first class."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              /* min-w-0: without it the grid track is sized by TutorCard's
                 min-content and pushes ~2px past the viewport at 320px. */
              className="min-w-0"
            >
              <TutorCard tutor={t} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => navigate('/find-a-tutor?mode=online')}
            className="group inline-flex items-center gap-2.5 px-7 h-13 py-3.5 rounded-xl bg-[#1E1B3A] hover:bg-[#2A2550] text-white font-bold text-[15px] transition-colors"
          >
            View all online tutors
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
