import { motion } from 'motion/react';
import { Calculator, Atom, BookOpen, Code, Cpu, Trophy, FlaskConical, Microscope, MessageSquare, User } from 'lucide-react';

export function SubjectsPrograms() {
  const subjects = [
    { icon: Calculator, name: 'Mathematics', gradient: 'from-blue-500 to-indigo-600' },
    { icon: Atom, name: 'Science', gradient: 'from-purple-500 to-pink-600' },
    { icon: BookOpen, name: 'English', gradient: 'from-emerald-500 to-teal-600' },
    { icon: Code, name: 'Coding', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Cpu, name: 'AI & Robotics', gradient: 'from-violet-500 to-purple-600' },
    { icon: Trophy, name: 'Olympiads', gradient: 'from-orange-500 to-red-600' },
    { icon: FlaskConical, name: 'JEE', gradient: 'from-blue-600 to-indigo-700' },
    { icon: Microscope, name: 'NEET', gradient: 'from-pink-500 to-rose-600' },
    { icon: MessageSquare, name: 'Spoken English', gradient: 'from-teal-500 to-emerald-600' },
    { icon: User, name: 'Personality Dev', gradient: 'from-amber-500 to-orange-600' }
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
            Subjects & Programs
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Comprehensive coverage across academic subjects and skill development programs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${subject.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <subject.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-sm font-bold text-[#0B1220]">{subject.name}</h3>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br ${subject.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Boards & Classes Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
        >
          <h3
            className="text-3xl lg:text-4xl font-bold text-[#0B1220] mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            All Boards & Classes Covered
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'CBSE', description: 'Class 1 - 12', color: 'emerald' },
              { title: 'ICSE', description: 'Class 1 - 10', color: 'blue' },
              { title: 'State Boards', description: 'All Classes', color: 'purple' },
              { title: 'International', description: 'IB, IGCSE', color: 'orange' }
            ].map((board, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-2xl p-6 border-2 border-${board.color}-200 hover:border-${board.color}-300 transition-all duration-300`}
              >
                <div className={`text-2xl font-bold text-${board.color}-600 mb-2`}>{board.title}</div>
                <div className="text-[#64748B]">{board.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-5 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
            Find Your Perfect Program
          </button>
        </motion.div>
      </div>
    </section>
  );
}
