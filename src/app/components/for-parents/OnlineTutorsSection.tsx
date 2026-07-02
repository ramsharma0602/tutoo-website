import { motion } from "motion/react";

import {
  Laptop,
  CheckCircle2,
  Brain,
  PlayCircle,
  ArrowRight,
  Sparkles,
  Video,
  FileCheck2,
  Wand2,
  ShieldCheck,
} from "lucide-react";

export function OnlineTutorsSection() {

  const benefits = [
    "Learn Anywhere",
    "Flexible Schedule",
    "Interactive Classes",
    "Recorded Sessions",
    "Access to Top Tutors",
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#16C47F]/10 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* -------------------------------------------------------------------------- */}
          {/*                                CONTENT SIDE                                */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#2563EB]/20 shadow-sm mb-8">

              <Laptop className="w-4 h-4 text-[#2563EB]" />

              <span className="text-sm font-semibold text-[#2563EB]">
                Online Tutors
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Interactive
              </span>{" "}

              Online Learning
            </h2>

            {/* Subheading */}
            <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-xl">
              Learn from anywhere with live classes, interactive digital
              whiteboards, assignments, recorded sessions, and access to
              expert tutors.
            </p>

            {/* Benefits */}
            <div className="grid gap-4 mt-10">

              {benefits.map((benefit, index) => (

                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-2xl bg-[#F8FAFC]/80 backdrop-blur-xl border border-[rgba(15,23,42,0.06)] shadow-sm px-5 py-4 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">

                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>

                  <span className="font-semibold text-[#0F172A]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mini Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {/* Card 1 */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-[rgba(15,23,42,0.06)] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                  <Brain className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                  AI-Powered Learning
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  Smart lesson recommendations & real-time progress tracking.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-[rgba(15,23,42,0.06)] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg">

                  <PlayCircle className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                  Recorded Sessions
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  Replay classes anytime for revision and concept clarity.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 mt-12">

              <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold shadow-xl shadow-[#16C47F]/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">

                Explore Online Tuition

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="text-[#2563EB] font-semibold hover:text-[#16C47F] transition-colors duration-300">
                Book Free Demo Class
              </button>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------------- */}
          {/*                                  IMAGE SIDE                                */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.12)] border border-white/50">

              <img
                src="https://www.concepttutors.com/assets/Frame%205043-35700051760cfc5bdbcf08da11fa0ced9fa09567d9a965afb0404060ce3accc3.jpg"
                alt="Online Learning"
                className="w-full h-[650px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent" />
            </div>

            {/* Glow Behind */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl" />

            {/* Floating Live Session Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-8 -left-10 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-5 w-60"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">
                  <Video className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Live Class
                  </p>

                  <div className="flex items-center gap-2 mt-1">

                    <div className="w-2.5 h-2.5 rounded-full bg-[#16C47F]" />

                    <span className="text-xs text-[#64748B]">
                      Active Session
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Homework Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="absolute top-1/2 -right-10 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-5 w-64"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg">
                  <FileCheck2 className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Homework Submitted
                  </p>

                  <p className="text-xs text-[#64748B] mt-1">
                    ✓ Completed Successfully
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Recommendation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="
                hidden
                md:block
                absolute
                bottom-6
                lg:bottom-10
                left-4
                lg:left-8
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                border
                border-white
                shadow-2xl
                p-4
                lg:p-6
                w-64
                lg:w-72
              "
            >

              <div className="flex items-center justify-between mb-5">

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    AI Recommendation
                  </p>

                  <p className="text-xs text-[#64748B]">
                    Smart Learning Insight
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                  <Wand2 className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] border border-[rgba(15,23,42,0.06)] p-4">

                <p className="text-sm font-semibold text-[#0F172A]">
                  Revise Algebra Chapter
                </p>

                <p className="text-xs text-[#64748B] mt-2 leading-6">
                  Based on recent assessment performance and homework analysis.
                </p>
              </div>
            </motion.div>

            {/* Session Recorded Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-12 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex items-center gap-3"
            >

              <ShieldCheck className="w-5 h-5 text-[#16C47F]" />

              <div>
                <p className="text-xs font-bold text-[#0F172A]">
                  Session Recorded
                </p>

                <p className="text-[11px] text-[#64748B]">
                  Available for replay
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
