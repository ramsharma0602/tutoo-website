import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import TutorCard from '../common/TutorCard';
import { cx, section, container, buttonDark, buttonMd } from '../common/ui';
import type { Tutor } from '../../data/tutors';
import { getVerifiedTutors } from '../../data/tutorLookup';

/* ─────────────────────────────────────────────────────────────────────────
   TUTORS WHO TEACH AT HOME

   The same construction as the homepage's ExpertTeachers and
   /online-tuition's OnlineTutors: same SectionHeading, the same shared
   TutorCard, the same grid, the same closing CTA. Only the words and the
   filter differ — which is the point. A parent comparing the two service
   pages is looking at one product, not two designs.

   Only tutors who can actually come to a home are shown: mode 'home' or
   'both'. An online-only tutor here would be a wasted click and a small lie.

   ── WHY THIS SECTION MATTERS MORE HERE THAN ON /online-tuition ──────────
   "Verified tutors" is an abstraction until you see four faces, names and
   qualifications. This page asks a parent to let one of these people into
   their house, so the claim has to become concrete before the safety section
   explains what stands behind it.

   Real tutors in data/tutors.ts always win; DEMO_TUTORS is the fallback while
   USE_DEMO_TUTORS is true. Set that to false and this section removes itself
   until a real home tutor exists — it never invents one.

   These are static imports, not a fetch, so slicing to four is the whole
   cost. When a real GET /api/tutors lands it should take ?mode=home&limit=4.

   `optionally filtered by city` — city pages pass their own id so a Kolhapur
   visitor is not shown four Pune tutors.
───────────────────────────────────────────────────────────────────────── */

interface Props {
  /** On a city page, restrict the four cards to that city. */
  city?: string;
  title?: string;
  lead?: string;
}

export default function HomeTutors({
  city,
  title = 'Tutors who teach at home',
  lead = 'Every tutor gives us their ID and qualification documents, and is interviewed before their first class.',
}: Props) {
  const navigate = useNavigate();

  /* Verified only. This used to be a private copy of the demo fallback
     ladder, duplicated in four components; it is one call now, and the
     verified rule lives with it so no surface can forget it. */
  const source: Tutor[] = getVerifiedTutors();

  const featured = source
    .filter((t) => t.mode !== 'online')
    .filter((t) => !city || t.city === city)
    .slice(0, 4);

  if (!featured.length) return null;

  const browseHref = `/find-a-tutor?mode=home${city ? `&city=${encodeURIComponent(city)}` : ''}`;

  return (
    <section className={cx(section, 'bg-white')} aria-labelledby="home-tutors-heading">
      <div className={container}>
        <SectionHeading
          eyebrow="Our Tutors"
          title={title}
          lead={lead}
          id="home-tutors-heading"
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
            onClick={() => navigate(browseHref)}
            className={cx(buttonDark, buttonMd)}
          >
            View all home tutors
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[14px] text-[#6E6A85] text-center sm:text-left max-w-xs">
            Or tell us what you need and we will shortlist the ones who fit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
