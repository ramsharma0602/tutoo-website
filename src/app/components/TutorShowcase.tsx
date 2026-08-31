import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TutorCard from './common/TutorCard';
import { TUTORS } from '../data/tutors';

/* Phase 4 (UX plan §13/§22): "concrete people beat abstract numbers".
   Shows up to 4 real verified tutors on the homepage. Renders NOTHING while
   src/app/data/tutors.ts is empty — never fake faces. */

export function TutorShowcase() {
  const navigate = useNavigate();
  if (!TUTORS.length) return null;

  const featured = TUTORS.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#6D28D9] mb-2">
            Verified Tutors
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1E1B3A] mb-4"
          >
            Meet some of our tutors
          </h2>
          <p className="text-lg text-[#6E6A85] max-w-2xl mx-auto">
            Every tutor is ID-verified and interviewed before their first class
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t, i) => (
            <TutorCard key={t.id} tutor={t} index={i} />
          ))}
        </div>

        {TUTORS.length > 4 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => navigate('/find-a-tutor')}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#6D28D9] hover:underline"
            >
              View all tutors <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
