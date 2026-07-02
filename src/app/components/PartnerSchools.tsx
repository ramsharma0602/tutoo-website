import { motion } from 'motion/react';
import { GraduationCap, Building2, Users, Award } from 'lucide-react';

export function PartnerSchools() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Partner Schools', color: 'emerald' },
    { icon: Users, value: '12,000+', label: 'Students Served', color: 'blue' },
    { icon: Award, value: '3,400+', label: 'Expert Tutors', color: 'purple' },
    { icon: GraduationCap, value: '94%', label: 'Success Rate', color: 'orange' }
  ];

  const schools = [
    'DPS', 'Ryan International', 'Amity', 'St. Xavier\'s',
    'Kendriya Vidyalaya', 'DAV', 'Modern School', 'Navodaya',
    'Army Public School', 'Delhi Public School', 'Mount Carmel', 'Cathedral School'
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6"
          >
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-[#0B1220]">Trusted By Leading Institutions</span>
          </motion.div>

          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0B1220] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Partner Schools
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Collaborating with India's top educational institutions to enhance learning outcomes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-2xl p-6 border-2 border-${stat.color}-100 hover:border-${stat.color}-200 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* School Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
        >
          <h3
            className="text-2xl lg:text-3xl font-bold text-[#0B1220] mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Partnering With Top Schools Across India
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {schools.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center justify-center h-24 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 px-6"
              >
                <span className="text-lg font-semibold text-[#0B1220] text-center">{school}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-3xl p-12 text-center"
        >
          <h3
            className="text-3xl font-bold text-[#0B1220] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Partner With Tutoo
          </h3>
          <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">
            Join leading schools in providing world-class learning experiences to your students
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
            Become A Partner School
          </button>
        </motion.div>
      </div>
    </section>
  );
}
