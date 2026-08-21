import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* Tutors get a compact strip above the footer rather than a full homepage
   section — the homepage's job is converting parents. The full tutor pitch
   lives at /for-tutors and /apply-tutor. */

export function ForTutors() {
  const navigate = useNavigate();

  return (
    <section className="py-10 lg:py-12 bg-white border-t border-[#F1EFF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="rounded-[22px] bg-[#FAFAFC] ring-1 ring-[#F1EFF7] px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-2xl bg-[#F4EFFE] flex items-center justify-center shrink-0">
              <GraduationCap className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} />
            </span>
            <div>
              <h2 className="text-lg font-bold text-[#1E1B3A]">Are you a tutor?</h2>
              <p className="text-[15px] text-[#4B4763] mt-0.5">
                Teach students near you — at home or online, on a schedule that fits you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/for-tutors')}
              className="text-[15px] font-semibold text-[#6D28D9] hover:text-[#5B21B6] hover:underline transition-colors"
            >
              How it works
            </button>
            <button
              type="button"
              onClick={() => navigate('/apply-tutor')}
              className="group inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#1E1B3A] hover:bg-[#2A2550] text-white font-semibold text-[15px] transition-colors"
            >
              Become a Tutor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
