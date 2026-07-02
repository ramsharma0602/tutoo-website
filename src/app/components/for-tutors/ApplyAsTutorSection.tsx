
import { motion } from "motion/react";

import {
  ArrowRight,
  FileText,
  Upload,
  ShieldCheck,
  Video,
  BadgeCheck,
  MonitorPlay,
  User,
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
  Laptop,
  Sparkles,
  Radio,
} from "lucide-react";

import { useNavigate } from 'react-router-dom';

export function ApplyAsTutorSection() {

  const navigate = useNavigate();

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description:
        "Complete your tutor application with basic professional and teaching details.",

      gradient: "from-[#16C47F] to-[#2563EB]",
    },

    {
      icon: Upload,
      title: "Upload Documents",
      description:
        "Upload identity proof, qualifications, certifications, and required documents securely.",

      gradient: "from-[#2563EB] to-[#7C3AED]",
    },

    {
      icon: ShieldCheck,
      title: "Verification Process",
      description:
        "Our team verifies your profile, qualifications, and professional background.",

      gradient: "from-[#16C47F] to-[#22C55E]",
    },

    {
      icon: Video,
      title: "Interview / Assessment",
      description:
        "Attend a professional screening and subject expertise assessment.",

      gradient: "from-[#7C3AED] to-[#2563EB]",
    },

    {
      icon: BadgeCheck,
      title: "Profile Approval",
      description:
        "Once approved, your profile becomes visible to matched students and parents.",

      gradient: "from-[#16C47F] to-[#7C3AED]",
    },

    {
      icon: MonitorPlay,
      title: "Start Teaching",
      description:
        "Begin teaching online or offline and start earning with Tutoo.",

      gradient: "from-[#2563EB] to-[#16C47F]",
    },
  ];

  const infoCards = [
    {
      icon: User,
      title: "Personal Details",
      description:
        "Basic identity, contact information, and professional profile setup.",

      gradient: "from-[#16C47F] to-[#22C55E]",
    },

    {
      icon: GraduationCap,
      title: "Qualifications",
      description:
        "Academic records, certifications, degrees, and subject expertise.",

      gradient: "from-[#2563EB] to-[#3B82F6]",
    },

    {
      icon: Briefcase,
      title: "Teaching Experience",
      description:
        "Previous teaching background and student handling experience.",

      gradient: "from-[#7C3AED] to-[#8B5CF6]",
    },

    {
      icon: BookOpen,
      title: "Subjects",
      description:
        "Select subjects, boards, and specialized teaching areas.",

      gradient: "from-[#F59E0B] to-[#FBBF24]",
    },

    {
      icon: Users,
      title: "Preferred Classes",
      description:
        "Choose the student grades and levels you want to teach.",

      gradient: "from-[#16C47F] to-[#2563EB]",
    },

    {
      icon: Laptop,
      title: "Teaching Mode",
      description:
        "Teach online, home tuition, or hybrid classes based on your preference.",

      gradient: "from-[#2563EB] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-28">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7C3AED]/10 rounded-full blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          {/* Badge */}
          <button
            type="button"
            onClick={() => navigate('/apply-tutor')}
            className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-white/5
                backdrop-blur-xl
                border
                border-[#16C47F]/20
                shadow-sm
                mb-8
                hover:border-[#16C47F]/40
                hover:bg-[#16C47F]/10
                transition-all
                duration-300
                group
                cursor-pointer
                "
          >

            <Sparkles className="w-4 h-4 text-[#16C47F] group-hover:rotate-12 transition-transform duration-300" />

            <span className="text-sm font-semibold text-[#16C47F]">
              Apply as Tutor
            </span>
          </button>

          {/* Heading */}
          <h2
            className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Getting Started is{" "}

            <span className="bg-gradient-to-r from-[#16C47F] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
              Simple
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-8 text-lg leading-8 text-[#CBD5E1] max-w-3xl mx-auto">
            Our streamlined onboarding process helps verified educators start
            teaching quickly with complete platform support.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-20 mt-24">

          {/* ------------------------------------------------------------------ */}
          {/*                            LEFT TIMELINE                           */}
          {/* ------------------------------------------------------------------ */}

          <div className="relative">

            {/* Connector Line */}
            <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative flex gap-8 pb-12 group"
                >

                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-20 h-20 rounded-[28px] bg-gradient-to-br ${step.gradient} p-[1px] shadow-[0_10px_40px_rgba(37,99,235,0.25)]`}>

                    <div className="w-full h-full rounded-[27px] bg-[#0F172A] flex items-center justify-center backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">

                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative flex-1 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10 p-7 overflow-hidden group-hover:border-[#2563EB]/40 transition-all duration-500">

                    {/* Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${step.gradient}`} />

                    {/* Shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">

                      <div className="absolute -top-20 left-[-40%] w-[120%] h-60 rotate-12 bg-white/10 blur-3xl" />
                    </div>

                    <div className="relative z-10">

                      <div className="flex items-center gap-3">

                        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>

                          <span className="text-white text-sm font-black">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-5 text-[#CBD5E1] leading-8 text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ------------------------------------------------------------------ */}
          {/*                             RIGHT CARDS                            */}
          {/* ------------------------------------------------------------------ */}

          <div>

            <div className="grid sm:grid-cols-2 gap-6">

              {infoCards.map((card, index) => {

                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative overflow-hidden rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10 p-7"
                  >

                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${card.gradient}`} />

                    {/* Content */}
                    <div className="relative z-10">

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${card.gradient} p-[1px] shadow-lg`}>

                        <div className="w-full h-full rounded-[23px] bg-[#0F172A] flex items-center justify-center">

                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-xl font-black text-white">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-7 text-[#CBD5E1]">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden mt-10 rounded-[36px] bg-white/5 backdrop-blur-2xl border border-white/10 p-10"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#16C47F]/10 via-[#2563EB]/10 to-[#7C3AED]/10" />

              <div className="relative z-10">

                <h3 className="text-3xl font-black text-white">
                  Ready to start your teaching journey?
                </h3>

                <p className="mt-5 text-[#CBD5E1] leading-8 max-w-xl">
                  Join thousands of verified tutors teaching through Tutoo
                  across India.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-5 mt-10">

                  <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">

                    Apply Now

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button className="group flex items-center gap-3 text-white hover:text-[#16C47F] transition-colors duration-300 font-semibold text-lg">

                    Learn More About Teaching

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Chips */}
        <div className="absolute top-48 right-10 hidden xl:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

          <ShieldCheck className="w-5 h-5 text-[#16C47F]" />

          <span className="text-sm font-semibold text-white">
            Verified Tutor
          </span>
        </div>

        <div className="absolute bottom-20 left-10 hidden xl:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

          <Radio className="w-5 h-5 text-[#2563EB]" />

          <span className="text-sm font-semibold text-white">
            Live Sessions
          </span>
        </div>
      </div>
    </section>
  );
}
