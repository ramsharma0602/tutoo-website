import { motion } from "motion/react";

import {
  Sparkles,
  Phone,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Wallet,
  Clock3,
  Laptop2,
} from "lucide-react";

export function TutorFinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0B1220]">

      {/* ------------------------------------------------------------------ */}
      {/* PREMIUM BACKGROUND                                                 */}
      {/* ------------------------------------------------------------------ */}

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(22,196,127,0.18),transparent_30%),radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_40%)]" />

      {/* Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#16C47F]/20 rounded-full blur-3xl"
      />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN                                                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(255,255,255,0.06)] mb-10"
        >

          <Sparkles className="w-4 h-4 text-[#16C47F]" />

          <span className="text-sm font-semibold text-white">
            Join The Tutor Network
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Ready to Start Your{" "}

          <span className="bg-gradient-to-r from-[#16C47F] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
            Teaching Journey?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className="mt-8 text-lg lg:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-8"
        >
          Join thousands of tutors already teaching through Tutoo and
          build a flexible, rewarding, and future-ready teaching career with
          AI-powered tools and continuous support.
        </motion.p>

        {/* ------------------------------------------------------------------ */}
        {/* BENEFITS                                                           */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >

          {[
            {
              icon: Clock3,
              text: "Flexible Schedule",
            },

            {
              icon: Wallet,
              text: "Attractive Earnings",
            },

            {
              icon: ShieldCheck,
              text: "Continuous Support",
            },

            {
              icon: Laptop2,
              text: "Online & Home Tuition Opportunities",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                shadow-[0_10px_30px_rgba(255,255,255,0.05)]
                "
              >

                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                  <Icon className="w-5 h-5 text-white" />
                </div>

                <span className="text-sm font-semibold text-white">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* BUTTONS                                                            */}
        {/* ------------------------------------------------------------------ */}

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
          transition={{
            delay: 0.4,
          }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          {/* Primary */}
          <button className="group h-16 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold shadow-[0_15px_50px_rgba(37,99,235,0.35)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-3">

            <GraduationCap className="w-5 h-5" />

            Apply as Tutor

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary */}
          <button className="group h-16 px-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white font-semibold hover:bg-white/15 transition-all duration-300 flex items-center gap-3 shadow-[0_10px_40px_rgba(255,255,255,0.05)]">

            <Phone className="w-5 h-5" />

            Talk to Recruitment Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}