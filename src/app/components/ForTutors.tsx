import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* Phase 2 (UX plan §7): tutors get a compact strip above the footer instead of
   a full homepage section — the homepage's job is converting parents. The full
   tutor pitch lives at /for-tutors and /apply-tutor. */

export function ForTutors() {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-[#F6F3FC] border-y border-[#E6E3F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFFE] border border-[#E6E3F0] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <h2
                className="text-xl font-bold text-[#1E1B3A]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Are you a tutor?
              </h2>
              <p className="text-[15px] text-[#4B4763]">
                Teach students near you — at home or online, on a schedule that fits you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={() => navigate('/for-tutors')}
              className="text-[15px] font-semibold text-[#6D28D9] hover:underline"
            >
              See how it works
            </button>
            <button
              type="button"
              onClick={() => navigate('/apply-tutor')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7B2FF7] hover:bg-[#6D28D9] text-white rounded-xl text-[15px] font-semibold transition-colors"
            >
              Become a Tutor <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
