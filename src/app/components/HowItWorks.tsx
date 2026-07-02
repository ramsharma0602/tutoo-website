import { motion } from 'motion/react';
import { Brain, UserCheck, Rocket, Eye, BarChart3, FileText, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Brain,
      title: 'AI Assessment',
      description: 'Comprehensive evaluation of learning gaps and strengths',
      color: 'emerald'
    },
    {
      number: '02',
      icon: UserCheck,
      title: 'Smart Tutor Matching',
      description: 'Algorithm-driven pairing with verified expert tutors',
      color: 'blue'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Learning Plan Activation',
      description: 'Personalized curriculum tailored to student needs',
      color: 'purple'
    },
    {
      number: '04',
      icon: Eye,
      title: 'Live Session Monitoring',
      description: 'Real-time tracking and parent visibility',
      color: 'cyan'
    },
    {
      number: '05',
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Data-driven insights on learning outcomes',
      color: 'orange'
    },
    {
      number: '06',
      icon: FileText,
      title: 'Monthly Reports',
      description: 'Detailed performance and growth documentation',
      color: 'pink'
    },
    {
      number: '07',
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'AI-powered adjustments for optimal results',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
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
            How It Works
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A seamless, technology-driven process designed for measurable learning outcomes
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16C47F] via-[#2563EB] to-[#7C3AED] hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-8"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 rounded-full flex items-center justify-center shadow-lg shadow-${step.color}-500/30`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-xs font-bold text-[#0B1220]">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#0B1220] mb-3">{step.title}</h3>
                  <p className="text-[#64748B] text-lg">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-5 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
