
import { motion } from "motion/react";

import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  IndianRupee,
  Users,
  ShieldCheck,
  Sparkles,
  PlayCircle,
} from "lucide-react";

import { useNavigate } from 'react-router-dom';


export function ForTutorsHeroSection() {

  const navigate = useNavigate();

  const trustBadges = [
    "5000+ Students",
    "Flexible Teaching Hours",
    "Weekly Payouts",
    "Verified Tutor Network",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* -------------------------------------------------------------------------- */}
          {/*                                 LEFT SIDE                                  */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#16C47F]/20 shadow-sm mb-8">

              <GraduationCap className="w-4 h-4 text-[#16C47F]" />

              <span className="text-sm font-semibold text-[#16C47F]">
                For Tutors
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#0B1220]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Teach.{" "}

              <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
                Inspire.
              </span>{" "}

              Earn.
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-2xl">
              Join Tutoo and connect with students across India through a
              modern AI-powered learning platform designed for passionate educators.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#64748B] font-medium">
              Teach Online or Offline • Flexible Schedule • Attractive Earnings • Dedicated Support
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-4 mt-10">

              {trustBadges.map((badge, index) => (

                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-sm hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">

                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>

                  <span className="text-sm font-semibold text-[#0F172A]">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-12">

              {/* Primary Button */}
              <button
                type="button"
                onClick={() => navigate('/apply-tutor')}
                className="
                  group
                  h-14
                  px-8
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#16C47F]
                  to-[#2563EB]
                  text-white
                  font-semibold
                  shadow-[0_10px_40px_rgba(37,99,235,0.25)]
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-3
                  "
              >

                Apply as Tutor

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Secondary */}
              <button className="h-14 px-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-[rgba(15,23,42,0.08)] shadow-sm hover:shadow-lg transition-all duration-300 font-semibold text-[#0F172A] flex items-center gap-3">

                <PlayCircle className="w-5 h-5 text-[#2563EB]" />

                View Earnings
              </button>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------------- */}
          {/*                                RIGHT SIDE                                  */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/50 shadow-[0_20px_80px_rgba(15,23,42,0.12)]">

              <img
                src="https://gjhometuition.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-17-2025-03_27_53-PM.png"
                alt="Tutor Teaching"
                className="w-full h-[760px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent" />
            </div>

            {/* Glow */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#2563EB]/20 rounded-full blur-3xl" />

            {/* Earnings Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -left-10 top-10 rounded-[28px] bg-gradient-to-br from-[#16C47F] to-[#2563EB] p-6 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] w-64"
            >

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6">

                <IndianRupee className="w-7 h-7 text-white" />
              </div>

              <p className="text-sm text-white/80">
                Average Monthly Earnings
              </p>

              <h3 className="text-5xl font-black mt-2">
                ₹35K+
              </h3>

              <p className="text-sm text-white/70 mt-4 leading-7">
                Flexible tutoring opportunities with weekly payouts.
              </p>
            </motion.div> */}

            {/* Active Tutors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="absolute top-1/2 -right-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-6 w-60"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg">

                  <Users className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-sm text-[#64748B]">
                    Active Tutors
                  </p>

                  <h3 className="text-4xl font-black text-[#0F172A] mt-1">
                    1200+
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Live Session */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-32 left-10 px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex items-center gap-4"
            >

              <div className="relative">

                <div className="w-3 h-3 rounded-full bg-[#16C47F]" />

                <div className="absolute inset-0 rounded-full bg-[#16C47F] animate-ping" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Live Session Active
                </p>

                <p className="text-xs text-[#64748B] mt-1">
                  24 students attending now
                </p>
              </div>
            </motion.div>

            {/* Verified Tutor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 }}
              viewport={{ once: true }}
              className="absolute bottom-8 right-12 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#16C47F]/20 shadow-xl px-5 py-4 flex items-center gap-3"
            >

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                <ShieldCheck className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Verified Tutor ✓
                </p>

                <p className="text-xs text-[#64748B] mt-1">
                  Trusted educator network
                </p>
              </div>
            </motion.div>

            {/* AI Recommendation */}
            <div className="absolute top-28 right-12 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex items-center gap-3">

              <Sparkles className="w-5 h-5 text-[#2563EB]" />

              <div>
                <p className="text-xs font-bold text-[#0F172A]">
                  AI Match Score
                </p>

                <p className="text-[11px] text-[#64748B]">
                  98% Student Compatibility
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
