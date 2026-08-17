"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Target,
  CheckCircle2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const highlights = [
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "Personalised Learning",
    desc: "Every student receives a customised learning experience designed around their pace, board, and goals.",
    color: "#7B2FF7",
    bg: "rgba(123,47,247,0.08)",
    border: "rgba(123,47,247,0.18)",
    grad: "from-[#7B2FF7] to-[#7B2FF7]",
  },
  {
    icon: Users,
    emoji: "👨‍🏫",
    title: "Verified Educators",
    desc: "Learn from background-checked, interview-passed, and experienced tutors you can trust completely.",
    color: "#7B2FF7",
    bg: "rgba(248,120,8,0.08)",
    border: "rgba(248,120,8,0.18)",
    grad: "from-[#EA580C] to-[#C2410C]",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Progress You Can See",
    desc: "Track academic progress through real-time reports, homework logs, and clear learning analytics.",
    color: "#7B2FF7",
    bg: "rgba(123,47,247,0.08)",
    border: "rgba(123,47,247,0.18)",
    grad: "from-[#7B2FF7] to-[#7B2FF7]",
  },
];

const floatingWidgets = [
  { icon: "📚", label: "Learning Plan Active", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", delay: 0 },
  { icon: "👨‍🏫", label: "Verified Tutor Assigned", color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.2)", delay: 0.9 },
  { icon: "📈", label: "Progress Shared", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", delay: 1.8 },
  { icon: "⭐", label: "Assessment Completed", color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.2)", delay: 0.5 },
  { icon: "🎯", label: "Learning Goals Achieved", color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.2)", delay: 1.3 },
];

const ecosystemNodes = [
  { label: "Student", icon: "🎓", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", x: "50%", y: "44%", size: "lg" },
  { label: "Tutor", icon: "👨‍🏫", color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.2)", x: "50%", y: "6%", size: "md" },
  { label: "Parent", icon: "👨‍👩‍👧", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", x: "10%", y: "32%", size: "md" },
  { label: "Dashboard", icon: "📊", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", x: "82%", y: "28%", size: "md" },
  { label: "Academic Growth", icon: "📈", color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.2)", x: "18%", y: "72%", size: "sm" },
  { label: "Attendance", icon: "✦", color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.2)", x: "80%", y: "68%", size: "sm" },
  { label: "Progress Report", icon: "📋", color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.2)", x: "50%", y: "84%", size: "sm" },
];

const connectorLines = [
  { x1: "50%", y1: "17%", x2: "50%", y2: "40%" },  // Tutor → Student
  { x1: "18%", y1: "36%", x2: "46%", y2: "44%" },  // Parent → Student
  { x1: "78%", y1: "32%", x2: "55%", y2: "44%" },  // Dashboard → Student
  { x1: "50%", y1: "52%", x2: "24%", y2: "72%" },  // Student → Growth
  { x1: "50%", y1: "52%", x2: "78%", y2: "68%" },  // Student → AI
  { x1: "50%", y1: "52%", x2: "50%", y2: "80%" },  // Student → Report
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function MissionStatementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* ── BG atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[600px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(ellipse, rgba(123,47,247,0.09), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(248,120,8,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(123,47,247,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(30,27,58,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,58,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ════════════════════════════════════
              LEFT — CONTENT
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-9"
              style={{ background: "rgba(248,120,8,0.08)", borderColor: "rgba(248,120,8,0.28)", backdropFilter: "blur(12px)", boxShadow: "0 0 20px rgba(248,120,8,0.1)" }}
            >
              <span className="text-sm">🌍</span>
              <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">Our Purpose</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] animate-pulse" />
            </motion.div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-[#0A1028] mb-8"
            >
              Our{" "}
              <span className="relative inline-block">
                <span className="text-[#6D28D9]">
                  Mission
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #7B2FF7, #7B2FF7)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>

            {/* Content paragraphs */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                "Our mission is to bridge the gap between students and quality education by connecting learners with experienced tutors through personalised home and online tuition programs.",
                "We strive to make learning engaging, accessible, and effective for students of all ages, boards, and academic levels.",
                "Right student + right tutor = better learning. That is the whole idea.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg leading-[1.85] text-[#334155]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4, boxShadow: `0 8px 28px ${h.color}18` }}
                  className="group flex items-start gap-5 rounded-2xl border p-5 transition-all duration-300 cursor-default"
                  style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(30,27,58,0.07)", backdropFilter: "blur(10px)", boxShadow: "0 2px 12px rgba(30,27,58,0.04)" }}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${h.grad} flex items-center justify-center text-xl shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {h.emoji}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0A1028] mb-1.5">
                      {h.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#6E6A85]">{h.desc}</p>
                  </div>
                  {/* Hover indicator */}
                  <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                    <ArrowRight className="w-4 h-4" style={{ color: h.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Main ecosystem card */}
          <div
            className="
            relative
            rounded-[32px]
            overflow-hidden
            border
            "
            style={{
              background: "rgba(248,250,252,0.95)",
              borderColor: "rgba(30,27,58,0.07)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 80px rgba(30,27,58,0.09)",
              aspectRatio: "1 / 1.05",
            }}
          >

            {/* Premium Mission Image */}
            <img
              src="https://www.1edtech.org/sites/default/files/styles/ims_background/public/content/media/images/bg/adobestock_608711063.jpeg?itok=mWox9WDK"
              alt="A student studying with a tutor"
              className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            "
            />

            {/* Dark Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(10,16,40,0.15), rgba(10,16,40,0.55))",
              }}
            />

            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7]" />

            {/* Center Title */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">

              <div
                className="
                px-5
                py-2.5
                rounded-full
                bg-white/15
                backdrop-blur-xl
                border
                border-white/20
                text-white
                text-xs
                font-bold
                flex
                items-center
                gap-2
                "
                        >
                <Sparkles className="w-4 h-4" />
                How We Help
              </div>

            </div>

            {/* Bottom Story Card */}
            <div
              className="
              absolute
              left-6
              right-6
              bottom-6
              z-20
              "
            >

              <div
                className="
              rounded-3xl
              bg-white/12
              backdrop-blur-xl
              border
              border-white/15
              p-6
              "
              >
                <h4 className="text-white font-bold text-lg">
                  Student → Tutor → Success
                </h4>

                <p className="mt-2 text-white/80 text-sm leading-7">
                  Personalized learning journeys powered by verified tutors,
                  progress tracking, parent visibility and modern educational
                  technology.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}