import { motion } from 'motion/react';
import { Home, Monitor, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* Phase 2 (UX plan §7/§11): two real services, presented as equal cards with
   brand-coded top borders (orange = home, violet = online). The previous six
   "offerings" grid promised more than the MVP delivers and diluted the core
   message. Additional programs appear as a chip row, not as headline services. */

const ALSO_AVAILABLE = ['JEE / NEET', 'Olympiad Prep', 'Board Exam Revision'];

export function LearningSolutions() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      accent: 'border-t-[#EA580C]',
      chip: 'bg-[#FFF1E7] text-[#C2410C]',
      title: 'Home Tuition',
      description:
        'Learn comfortably at home with a verified tutor matched to your requirements — one-to-one attention, on your schedule.',
      cta: 'Find a home tutor',
      mode: 'home',
    },
    {
      icon: Monitor,
      accent: 'border-t-[#7B2FF7]',
      chip: 'bg-[#F4EFFE] text-[#6D28D9]',
      title: 'Online Classes',
      description:
        'Learn from experienced tutors through convenient one-to-one online classes — the same verified tutors, from anywhere.',
      cta: 'Start online',
      mode: 'online',
    },
  ];

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
            Our Services
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1E1B3A] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Two ways to learn with Tutoo
          </h2>
          <p className="text-lg text-[#6E6A85] max-w-2xl mx-auto">
            Choose what works for your family — a tutor at your doorstep, or live classes online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 border border-[#E6E3F0] border-t-[3px] ${service.accent} shadow-[0_1px_2px_rgba(30,27,58,0.06)] hover:shadow-[0_8px_24px_rgba(30,27,58,0.10)] transition-shadow duration-200`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.chip}`}>
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#1E1B3A] mb-3">{service.title}</h3>
              <p className="text-[#4B4763] mb-6 leading-relaxed">{service.description}</p>

              <button
                type="button"
                onClick={() => navigate(`/book-free-assessment?mode=${service.mode}`)}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#6D28D9] hover:underline"
              >
                {service.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Also available — chips, not headline services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-[#6E6A85]">Also available:</span>
          {ALSO_AVAILABLE.map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 rounded-full bg-[#F6F3FC] border border-[#E6E3F0] text-sm font-medium text-[#4B4763]"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
