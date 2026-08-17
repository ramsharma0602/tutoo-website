import { motion } from 'motion/react';
import { UserCheck, FileText, TrendingUp, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HowItWorks() {
  const navigate = useNavigate();
  /* The booklet's four steps, worded for how Tutoo actually works today:
     we shortlist and share tutor profiles, the parent chooses. */
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Tell Us What You Need',
      description: 'Share the class, subject and learning requirement. Takes under a minute.',
      color: 'violet'
    },
    {
      number: '02',
      icon: Search,
      title: 'We Find Suitable Tutors',
      description: 'We assess your child for free, then shortlist verified tutors who match your requirement.',
      color: 'violet'
    },
    {
      number: '03',
      icon: UserCheck,
      title: 'Choose Your Tutor',
      description: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
      color: 'violet'
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Start Learning',
      description: 'Classes begin at your home or online, with attendance and progress you can check.',
      color: 'violet'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0A1028] mb-4"
          >
            How Tutoo Works
          </h2>
          <p className="text-lg text-[#6E6A85] max-w-2xl mx-auto">
            Tell us what you need. We&apos;ll help you find the right one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] hidden lg:block" />

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
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#7B2FF7] to-[#5B21B6] rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-xs font-bold text-[#0A1028]">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#0A1028] mb-3">{step.title}</h3>
                  <p className="text-[#6E6A85] text-lg">{step.description}</p>
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
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className="px-10 py-5 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-full font-semibold transition-colors duration-300 text-lg"
          >
            Find My Tutor
          </button>
          <p className="mt-3 text-sm text-[#6E6A85]">
            Free assessment · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
