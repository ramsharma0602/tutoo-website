import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 opacity-60" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-[#0F172A]">
                India's First Learning Operating System
              </span>
            </motion.div>

            <h1
              className="text-5xl lg:text-7xl font-bold text-[#0B1220] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We don't just find tutors.
              <br />
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                We guarantee learning outcomes.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-[#64748B] mb-8 leading-relaxed">
              AI-powered assessments, verified tutors, real-time parent monitoring, and measurable
              student growth — all within one intelligent learning platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
              type="button"
              onClick={() => navigate('/book-free-assessment')}
              className="px-8 py-4 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
                Book Free Assessment
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#0B1220] text-[#0B1220] rounded-full font-semibold hover:bg-[#0B1220] hover:text-white transition-all duration-300 text-lg">
                Explore Platform
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, label: '12,000+ Students', color: 'text-emerald-600' },
                { icon: Award, label: '3,400+ Verified Tutors', color: 'text-blue-600' },
                { icon: TrendingUp, label: '94% Improvement', color: 'text-purple-600' },
                { icon: Sparkles, label: '98% Satisfaction', color: 'text-emerald-600' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-start gap-2"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-semibold text-[#0F172A]">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#0B1220]">Student Analytics</h3>
            <p className="text-sm text-[#64748B]">Last 30 days performance</p>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full">
            <span className="text-sm font-semibold text-emerald-700">+24% Growth</span>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="h-48 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-4 mb-4">
          <div className="h-full flex items-end justify-between gap-2">
            {[45, 62, 55, 78, 85, 92, 88].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-[#16C47F] to-[#2563EB] rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Attendance', value: '96%', color: 'emerald' },
            { label: 'Homework', value: '92%', color: 'blue' },
            { label: 'Tests', value: '88%', color: 'purple' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
              <div className="text-xs text-[#64748B] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0, x: -20 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -left-4 top-12 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 w-48"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs text-[#64748B]">AI Insights</div>
            <div className="text-sm font-bold text-[#0B1220]">Strong Progress</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0, x: 20 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute -right-4 bottom-12 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 w-48"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs text-[#64748B]">Weekly Growth</div>
            <div className="text-sm font-bold text-[#0B1220]">+18 Points</div>
          </div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl -z-10" />
    </div>
  );
}
