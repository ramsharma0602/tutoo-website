import { motion } from 'motion/react';
import { Brain, Shield, LayoutDashboard, Radio, FileBarChart, Target, LineChart, TrendingUp } from 'lucide-react';

export function WhyUberTutor() {
  const features = [
    {
      icon: Brain,
      title: 'AI Learning Engine',
      description: 'Advanced algorithms adapt to each student\'s unique learning style',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Verified Tutors',
      description: 'Rigorous background checks and qualification verification',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: LayoutDashboard,
      title: 'Parent Dashboard',
      description: 'Complete visibility into your child\'s learning journey',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Radio,
      title: 'Real-Time Tracking',
      description: 'Live session monitoring and attendance verification',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: FileBarChart,
      title: 'Smart Reports',
      description: 'Actionable insights and detailed performance analytics',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Custom curriculum designed for individual growth',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: LineChart,
      title: 'Learning Analytics',
      description: 'Data-driven approach to optimize learning outcomes',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Monitoring',
      description: 'Continuous assessment and improvement tracking',
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0B1220] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Choose Tutoo
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A comprehensive learning ecosystem powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-[#0B1220] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748B]">{feature.description}</p>
              </div>

              {/* Corner Accent */}
              <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3
            className="text-3xl font-bold text-[#0B1220] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experience the difference technology makes in education
          </h3>
          <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust Tutoo for measurable learning outcomes
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
            Book Your Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
