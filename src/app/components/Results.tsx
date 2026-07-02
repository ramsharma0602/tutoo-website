import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Star } from 'lucide-react';

export function Results() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '94%',
      label: 'Grade Improvement',
      description: 'Students see measurable progress',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Star,
      value: '98%',
      label: 'Parent Satisfaction',
      description: 'Trust and confidence rating',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      value: '12,000+',
      label: 'Active Students',
      description: 'Learning across India',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Award,
      value: '3,400+',
      label: 'Verified Tutors',
      description: 'Expert educators network',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Results That Speak
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              For Themselves
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Data-driven outcomes backed by thousands of success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-xl font-bold mb-2">{metric.label}</div>

                {/* Description */}
                <div className="text-gray-400 text-sm">{metric.description}</div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              </div>

              {/* Bottom Glow */}
              <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br ${metric.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Interactive Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Proven Track Record
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Our data-driven approach consistently delivers measurable improvements in academic
                performance across all grades and subjects.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Academic Improvement', value: 94 },
                  { label: 'Test Score Growth', value: 88 },
                  { label: 'Student Engagement', value: 96 },
                  { label: 'Learning Consistency', value: 92 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{item.label}</span>
                      <span className="text-sm font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[340px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent backdrop-blur-xl p-8 overflow-hidden">

              {/* Glow Background */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />

              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between px-8 py-8 pointer-events-none">
                {[100, 75, 50, 25, 0].map((line, i) => (
                  <div
                    key={i}
                    className="border-t border-white/5 w-full relative"
                  >
                    <span className="absolute -left-6 -top-3 text-[10px] text-gray-500">
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="relative z-10 h-full flex items-end justify-between gap-4">

                {[
                  { month: 'M1', value: 65 },
                  { month: 'M2', value: 68 },
                  { month: 'M3', value: 72 },
                  { month: 'M4', value: 78 },
                  { month: 'M5', value: 83 },
                  { month: 'M6', value: 88 },
                  { month: 'M7', value: 92 },
                  { month: 'M8', value: 94 },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full flex flex-col justify-end items-center gap-3 group"
                  >
                    {/* Value */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-xs font-bold text-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {bar.value}%
                    </motion.div>

                    {/* Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3 + i * 0.08,
                        ease: 'easeOut',
                      }}
                      className="w-full rounded-2xl relative overflow-hidden shadow-lg"
                      style={{
                        maxWidth: '44px',
                        background:
                          'linear-gradient(to top, #10B981 0%, #06B6D4 50%, #3B82F6 100%)',
                      }}
                    >
                      {/* Shine */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20" />

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                    </motion.div>

                    {/* Label */}
                    <span className="text-xs font-medium text-gray-400">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
