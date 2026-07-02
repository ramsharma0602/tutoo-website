import { motion } from 'motion/react';
import { BarChart3, Calendar, CheckSquare, AlertCircle, Lightbulb, Clock, FileText } from 'lucide-react';

export function ParentDashboard() {
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
            Parent Dashboard
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Complete visibility and control over your child's learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220]">Performance Overview</h3>
                <p className="text-[#64748B]">Last 90 days</p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full">
                <span className="text-sm font-semibold text-emerald-700">+32% Overall</span>
              </div>
            </div>

            {/* Chart Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6">
              <div className="flex items-end justify-between h-64 gap-2">
                {[
                  { label: 'Jan', height: 45, color: 'emerald' },
                  { label: 'Feb', height: 62, color: 'emerald' },
                  { label: 'Mar', height: 55, color: 'blue' },
                  { label: 'Apr', height: 78, color: 'blue' },
                  { label: 'May', height: 85, color: 'purple' },
                  { label: 'Jun', height: 92, color: 'purple' }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className={`w-full bg-gradient-to-t from-${bar.color}-400 to-${bar.color}-600 rounded-lg relative group cursor-pointer`}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {bar.height}%
                      </div>
                    </motion.div>
                    <span className="text-xs text-[#64748B]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Calendar, label: 'Attendance', value: '96%', color: 'emerald' },
                { icon: CheckSquare, label: 'Homework', value: '92%', color: 'blue' },
                { icon: BarChart3, label: 'Test Score', value: '88%', color: 'purple' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className={`bg-gradient-to-br from-${stat.color}-50 to-white rounded-xl p-4 border border-${stat.color}-100`}
                >
                  <stat.icon className={`w-5 h-5 text-${stat.color}-600 mb-2`} />
                  <div className={`text-2xl font-bold text-${stat.color}-700`}>{stat.value}</div>
                  <div className="text-xs text-[#64748B]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Panels */}
          <div className="space-y-6">
            {/* Weak Topics Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-[#0B1220]">Weak Topics</h4>
              </div>
              <div className="space-y-3">
                {['Algebra', 'Physics Mechanics', 'Grammar'].map((topic, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">{topic}</span>
                    <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${45 + i * 10}%` }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-orange-400 to-red-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-[#0B1220]">AI Insights</h4>
              </div>
              <p className="text-sm text-[#64748B] mb-3">
                Student shows strong improvement in Mathematics. Recommend increasing practice sessions.
              </p>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View Full Analysis →
              </button>
            </motion.div>

            {/* Upcoming Sessions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-[#0B1220]">Next Session</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-[#0B1220]">Physics - Chapter 5</div>
                <div className="text-sm text-[#64748B]">Today, 4:00 PM</div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
                  <span className="text-sm text-[#0B1220]">Mr. Rajesh Kumar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
