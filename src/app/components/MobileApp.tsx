import { motion } from 'motion/react';
import { Smartphone, Bell, MapPin, FileText, CheckSquare, BarChart3 } from 'lucide-react';

export function MobileApp() {
  const apps = [
    {
      name: 'Parent App',
      description: 'Complete control and visibility',
      gradient: 'from-emerald-500 to-teal-600',
      features: ['Real-time tracking', 'Performance analytics', 'Instant notifications']
    },
    {
      name: 'Tutor App',
      description: 'Professional teaching tools',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Session management', 'Student reports', 'AI lesson planning']
    },
    {
      name: 'Student App',
      description: 'Interactive learning experience',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Homework tracking', 'Practice tests', 'Progress insights']
    }
  ];

  const features = [
    { icon: Bell, label: 'Notifications' },
    { icon: MapPin, label: 'Tracking' },
    { icon: FileText, label: 'Assessments' },
    { icon: BarChart3, label: 'Reports' },
    { icon: CheckSquare, label: 'Homework' },
    { icon: Smartphone, label: 'Attendance' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:64px_64px]" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6"
          >
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-[#0B1220]">Available on iOS & Android</span>
          </motion.div>

          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0B1220] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Learning In Your Pocket
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Dedicated apps for parents, tutors, and students — seamlessly connected
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Phone Mockup */}
              <motion.div
                whileHover={{ y: -12, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative bg-white rounded-[3rem] p-4 shadow-2xl border-8 border-gray-200 overflow-hidden"
              >
                {/* Screen */}
                <div className={`aspect-[9/19] bg-gradient-to-br ${app.gradient} rounded-[2.5rem] p-6 flex flex-col`}>
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-white text-xs mb-8">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-white/30 rounded" />
                      <div className="w-4 h-4 bg-white/30 rounded" />
                      <div className="w-4 h-4 bg-white/30 rounded" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
                      <p className="text-white/80 text-sm mb-6">{app.description}</p>

                      <div className="space-y-3">
                        {app.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-white text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-3 text-center text-white font-semibold">
                      Download Now
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-full" />
              </motion.div>

              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <h3
            className="text-2xl lg:text-3xl font-bold text-[#0B1220] mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            All-in-One Platform Features
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center text-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#0B1220]">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-[#0B1220] text-white rounded-2xl hover:bg-[#1a2332] transition-all duration-300 shadow-lg">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </button>

          <button className="flex items-center gap-3 px-8 py-4 bg-[#0B1220] text-white rounded-2xl hover:bg-[#1a2332] transition-all duration-300 shadow-lg">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
