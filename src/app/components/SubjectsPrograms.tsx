import { motion } from 'motion/react';
import {
  Calculator,
  Atom,
  BookOpen,
  FlaskConical,
  Microscope,
  MessageSquare,
  Landmark,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT WE TEACH

   Only subjects, boards and exams Tutoo can actually staff. Each subject
   deep-links into the enquiry form pre-filled, because no /subjects pages
   exist — a link to a thin page would be worse than a pre-filled form.
───────────────────────────────────────────────────────────────────────── */

const SUBJECTS = [
  { icon: Calculator, name: 'Mathematics' },
  { icon: Atom, name: 'Science' },
  { icon: BookOpen, name: 'English' },
  { icon: FlaskConical, name: 'Physics' },
  { icon: Microscope, name: 'Chemistry' },
  { icon: Landmark, name: 'Biology' },
  { icon: MessageSquare, name: 'Hindi & Marathi' },
  { icon: Trophy, name: 'Olympiads' },
];

const BOARDS = [
  { title: 'CBSE', sub: 'Class 1 – 12' },
  { title: 'ICSE', sub: 'Class 1 – 12' },
  { title: 'SSC', sub: 'Maharashtra Board' },
  { title: 'JEE & NEET', sub: 'Entrance Prep' },
];

export function SubjectsPrograms() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="What We Teach"
          title="Subjects, boards and exams"
          lead="Class 1 to 12 across the three boards we cover, plus entrance-exam preparation."
        />

        {/* ── Subjects ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {SUBJECTS.map((s, i) => (
            <motion.button
              key={s.name}
              type="button"
              onClick={() =>
                navigate(`/book-free-assessment?subject=${encodeURIComponent(s.name)}`)
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: Math.min(i, 7) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3 bg-white rounded-2xl ring-1 ring-[#EFEDF6] hover:ring-[#7B2FF7]/30 shadow-[0_4px_18px_rgba(30,27,58,0.05)] hover:shadow-[0_12px_30px_rgba(30,27,58,0.09)] transition-all duration-250 px-4 py-4 text-left"
            >
              <span className="w-11 h-11 rounded-xl bg-[#F4EFFE] flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-[#6D28D9]" strokeWidth={2} />
              </span>
              <span className="text-[14px] sm:text-[15px] font-semibold text-[#1E1B3A] leading-tight">
                {s.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* ── Boards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-[24px] bg-[#FAFAFC] ring-1 ring-[#F1EFF7] p-6 sm:p-8"
        >
          <p className="text-center text-[13px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-6">
            Boards We Cover
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BOARDS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl ring-1 ring-[#EFEDF6] px-4 py-5 text-center"
              >
                <p className="text-lg font-bold text-[#1E1B3A]">{b.title}</p>
                <p className="text-[13px] text-[#6E6A85] mt-1">{b.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={() => navigate('/book-free-assessment')}
              className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
            >
              Tell us what your child needs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
