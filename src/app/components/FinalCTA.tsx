import { motion } from 'motion/react';
import { Sparkles, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-20 lg:py-32 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium">Limited Time Offer</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Start Your Child's
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Intelligent Learning Journey
          </span>
          <br />
          Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join 12,000+ families experiencing measurable academic growth through AI-powered learning, verified tutors, and real-time progress tracking
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 text-lg">
            <Calendar className="w-5 h-5" />
            Book Free Assessment
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-lg">
            <Phone className="w-5 h-5" />
            Talk to Learning Advisor
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
        >
          {[
            '✓ Free Initial Assessment',
            '✓ No Credit Card Required',
            '✓ 100% Verified Tutors',
            '✓ Money-Back Guarantee'
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute left-0 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-64">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Success Rate</div>
                <div className="text-lg font-bold">94%</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">Students see measurable improvement</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, x: 40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-64">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Support</div>
                <div className="text-lg font-bold">24/7</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">Always available for parents</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
