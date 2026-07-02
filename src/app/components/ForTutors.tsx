import { motion } from 'motion/react';
import { Users, Wallet, BookOpen, GraduationCap, CheckCircle2, ArrowRight, Sparkles, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const featureCards = [
  {
    icon: Users,
    title: 'Guaranteed Student Pipeline',
    description:
      'No searching for students. The platform intelligently matches tutors based on expertise, subjects, ratings, and location.',
    accent: 'from-[#16C47F] to-emerald-400',
    glow: 'rgba(22,196,127,0.10)',
    border: 'rgba(22,196,127,0.18)',
    iconBg: 'rgba(22,196,127,0.12)',
    iconColor: '#16C47F',
  },
  {
    icon: Wallet,
    title: 'Reliable Weekly Payments',
    description:
      'Automatic weekly payouts directly to your bank account — transparent, secure, and always on time.',
    accent: 'from-[#2563EB] to-sky-400',
    glow: 'rgba(37,99,235,0.10)',
    border: 'rgba(37,99,235,0.18)',
    iconBg: 'rgba(37,99,235,0.12)',
    iconColor: '#2563EB',
  },
  {
    icon: BookOpen,
    title: 'Ready-Made Lesson Plans',
    description:
      'AI-generated worksheets, assessments, homework, and lesson structures prepared automatically for every session.',
    accent: 'from-[#F59E0B] to-amber-300',
    glow: 'rgba(245,158,11,0.10)',
    border: 'rgba(245,158,11,0.18)',
    iconBg: 'rgba(245,158,11,0.12)',
    iconColor: '#F59E0B',
  },
];

const stats = [
  { value: '3,400+', label: 'Active Tutors' },
  { value: '4.8★', label: 'Average Tutor Rating' },
  { value: '98%', label: 'Tutor Satisfaction' },
];

export function ForTutors() {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-[#2563EB]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#16C47F]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7C3AED]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#2563EB]/20 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              For Tutors
            </motion.span>

            {/* Heading */}
            <h2
              className="text-4xl lg:text-6xl font-bold text-[#0F172A] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Teach More.{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.2))' }}
              >
                Manage Less.
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-[#64748B] mb-10 leading-relaxed max-w-lg">
              We handle student sourcing, scheduling, lesson planning, homework management, and payments — so tutors can focus completely on teaching.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {featureCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group flex gap-4 p-4 rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-300 cursor-default"
                  style={{
                    borderColor: card.border,
                    boxShadow: `0 2px 16px ${card.glow}`,
                  }}
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm mb-1">{card.title}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">

              <motion.button
                type="button"
                onClick={() => navigate('/apply-tutor')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold text-sm shadow-lg shadow-[#16C47F]/25 hover:shadow-[#16C47F]/45 transition-all duration-300"
              >
                Apply as a Tutor
                <ArrowRight className="w-4 h-4" />

              </motion.button>

              <button className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] flex items-center gap-1.5 transition-colors group">
                Learn About Tutor Benefits
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Image + floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-4 bg-gradient-to-br from-[#16C47F]/20 via-[#2563EB]/15 to-[#7C3AED]/10 rounded-3xl blur-2xl" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/60 shadow-2xl shadow-[#2563EB]/12">
              <img
                src="https://homeshiksha.com/wp-content/uploads/2026/01/Home-Tutor.webp"
                alt="Professional tutor teaching student in a modern home environment"
                className="w-full h-[520px] object-cover"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge — Verified Tutor (top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -left-4 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#16C47F]/25 shadow-xl shadow-[#16C47F]/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16C47F] to-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">Verified Tutor</p>
                <p className="text-[10px] text-[#16C47F] font-semibold">Background Checked</p>
              </div>
            </motion.div>

            {/* Floating badge — Live Session (top-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#2563EB]/20 shadow-xl shadow-[#2563EB]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />
              <div>
                <p className="text-xs font-bold text-[#0F172A]">Live Session</p>
                <p className="text-[10px] text-[#64748B]">4:00 PM — Maths</p>
              </div>
              <Wifi className="w-3.5 h-3.5 text-[#2563EB]" />
            </motion.div>

            {/* Floating chip — AI Recommendation (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#7C3AED]/20 shadow-xl shadow-[#7C3AED]/10"
            >
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">AI Matched</p>
                <p className="text-[10px] text-[#64748B]">98% compatibility</p>
              </div>
            </motion.div>

            {/* Floating stats strip — bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="
                hidden
                lg:flex
                absolute
                -bottom-4
                -right-4
                gap-4
                px-5
                py-3
                rounded-2xl
                bg-[#0B1220]/90
                backdrop-blur-md
                border
                border-white/10
                shadow-xl
                "
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-white font-bold text-sm">{s.value}</p>
                  <p className="text-white/40 text-[10px]">{s.label}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
