import { motion } from "motion/react";

import {
  CheckCircle2,
  Home,
  ShieldCheck,
  Brain,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

export function HomeTutorsSection() {

  const benefits = [
    "Personalized Attention",
    "Flexible Timings",
    "Comfortable Home Environment",
    "Better Focus & Confidence",
    "Customized Learning Plans",
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#FAFAFC]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#7B2FF7]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#7B2FF7]/10 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#7B2FF7]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* -------------------------------------------------------------------------- */}
          {/*                                 IMAGE SIDE                                 */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(30,27,58,0.12)] border border-white/50">

              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mjEqeXeBZ2fr451K/cute-indian-boy-with-mother-doing-homework-home-using-laptop-books-online-schooling-concept_466689-8973-YZ98LBoMVwuVOg5Q.webp"
                alt="Home Tutor"
                className="w-full h-[650px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1028]/40 via-transparent to-transparent" />
            </div>

            {/* Glow Behind */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[#7B2FF7]/20 rounded-full blur-3xl" />

            {/* Floating Verified Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-8 -left-10 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-5 w-64"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#1E1B3A]">
                    Verified Tutor
                  </p>

                  <p className="text-xs text-[#6E6A85] mt-1">
                    Background checked & certified
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rating Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="absolute top-1/2 -right-1 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-5 w-60"
            >

              <div className="flex items-center gap-3 mb-3">

                <div className="flex items-center gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                <span className="text-sm font-bold text-[#1E1B3A]">
                  4.8 Rating
                </span>
              </div>

              <p className="text-sm text-[#6E6A85] leading-6">
                Trusted by thousands of parents for premium one-on-one learning.
              </p>
            </motion.div> */}

            {/* AI Progress Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-6 w-72"
            >

              <div className="flex items-center justify-between mb-5">

                <div>
                  <p className="text-sm font-bold text-[#1E1B3A]">
                    Progress Improved
                  </p>

                  <p className="text-xs text-[#6E6A85]">
                    Personalized Learning
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7] text-sm font-bold">
                  +24%
                </div>
              </div>

              <div className="space-y-4">

                {[
                  { subject: "Mathematics", value: "89%" },
                  { subject: "Science", value: "92%" },
                  { subject: "English", value: "86%" },
                ].map((item) => (

                  <div key={item.subject}>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm font-medium text-[#1E1B3A]">
                        {item.subject}
                      </span>

                      <span className="text-sm font-bold text-[#7B2FF7]">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C]"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
           */}
          </motion.div>


          {/* -------------------------------------------------------------------------- */}
          {/*                                CONTENT SIDE                                */}
          {/* -------------------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#7B2FF7]/20 shadow-sm mb-8">

              <Home className="w-4 h-4 text-[#7B2FF7]" />

              <span className="text-sm font-semibold text-[#7B2FF7]">
                Home Tutors
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0A1028]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Expert{" "}

              <span className="bg-gradient-to-r from-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
                Home Tutors
              </span>{" "}

              at Your Doorstep
            </h2>

            {/* Subheading */}
            <p className="mt-8 text-lg leading-8 text-[#6E6A85] max-w-xl">
              One-on-one learning sessions designed around your child’s
              learning style, academic goals, and pace of understanding.
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
                  className="group flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-sm px-5 py-4 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-md">

                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>

                  <span className="font-semibold text-[#1E1B3A]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mini Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {/* Card 1 */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-lg">

                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#1E1B3A]">
                  Verified Tutors
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6E6A85]">
                  Background checked & qualified educators for trusted home learning.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center shadow-lg">

                  <Brain className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#1E1B3A]">
                  AI Progress Tracking
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6E6A85]">
                  Track homework, reports, attendance, and academic growth in real-time.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 mt-12">

              <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-semibold shadow-xl shadow-[#EA580C]/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">

                Find Home Tutor

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="text-[#7B2FF7] font-semibold hover:text-[#7B2FF7] transition-colors duration-300">
                Book Free Demo Session
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
