import { motion } from 'motion/react';
import { Home, Monitor, Trophy, Sparkles, Code, Award } from 'lucide-react';

export function LearningSolutions() {
  const solutions = [
    {
      icon: Home,
      title: 'Home Tuition',
      description: 'Verified tutors at your doorstep with real-time tracking',
      gradient: 'from-emerald-500 to-teal-600',
      size: 'lg:col-span-2'
    },
    {
      icon: Monitor,
      title: 'Online Learning',
      description: 'Live interactive sessions with AI-powered feedback',
      gradient: 'from-blue-500 to-indigo-600',
      size: 'lg:col-span-1'
    },
    {
      icon: Trophy,
      title: 'Competitive Exams',
      description: 'JEE, NEET, Olympiad preparation with expert mentors',
      gradient: 'from-purple-500 to-pink-600',
      size: 'lg:col-span-1'
    },
    {
      icon: Sparkles,
      title: 'Skill Development',
      description: 'Personality, communication, and leadership skills',
      gradient: 'from-orange-500 to-red-600',
      size: 'lg:col-span-1'
    },
    {
      icon: Code,
      title: 'Coding & AI',
      description: 'Future-ready tech skills for young innovators',
      gradient: 'from-cyan-500 to-blue-600',
      size: 'lg:col-span-1'
    },
    {
      icon: Award,
      title: 'Olympiad Preparation',
      description: 'National and international competition training',
      gradient: 'from-violet-500 to-purple-600',
      size: 'lg:col-span-1'
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
            Complete Learning Solutions
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            From academics to skill development, we cover every aspect of your child's learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group ${solution.size} relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">{solution.title}</h3>
                <p className="text-[#64748B]">{solution.description}</p>

                <div className="mt-6 flex items-center text-sm font-semibold text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner Glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${solution.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
