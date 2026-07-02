import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Eye, UserCheck, Bell, Lock } from 'lucide-react';

export function SafetyTrust() {
  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: 'OTP Session Verification',
      description: 'Secure authentication for every learning session'
    },
    {
      icon: UserCheck,
      title: 'Tutor Background Verification',
      description: 'Comprehensive screening and credential validation'
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'Real-time GPS monitoring for home tuition safety'
    },
    {
      icon: Eye,
      title: 'Attendance Verification',
      description: 'Automated check-in and session confirmation'
    },
    {
      icon: Bell,
      title: 'Parent Monitoring',
      description: 'Instant notifications and live session visibility'
    },
    {
      icon: Lock,
      title: 'AI Safety Alerts',
      description: 'Intelligent alerts for unusual patterns or concerns'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">Enterprise-Grade Security</span>
          </motion.div>

          <h2
            className="text-4xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Safety & Trust
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Built Into Every Feature
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Multiple layers of verification and monitoring to ensure the highest standards of safety
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Complete Peace of Mind
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Every tutor undergoes rigorous verification. Every session is monitored. Every parent
                stays informed in real-time.
              </p>

              <div className="space-y-4">
                {[
                  'Police verification for all tutors',
                  'Live GPS tracking during home sessions',
                  'Instant session alerts to parents',
                  'AI-powered safety monitoring'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-lg">Live Session Status</h4>
                    <p className="text-sm text-gray-400">All systems active</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm text-emerald-400">Live</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Tutor Verified', status: 'Active', color: 'emerald' },
                    { label: 'Location Confirmed', status: 'Active', color: 'blue' },
                    { label: 'Session Recording', status: 'Active', color: 'purple' },
                    { label: 'Parent Notified', status: 'Active', color: 'emerald' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <span className="text-sm">{item.label}</span>
                      <span className={`text-xs px-2 py-1 bg-${item.color}-500/20 text-${item.color}-400 rounded-full`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
