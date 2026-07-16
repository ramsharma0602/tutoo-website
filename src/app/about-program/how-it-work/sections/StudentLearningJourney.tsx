"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  TrendingUp,
  Star,
} from "lucide-react";

/* ─────────────────────────────────────────────
   JOURNEY STEPS DATA
───────────────────────────────────────────── */
const steps = [
  {
    num: "01", emoji: "📝", title: "Register",
    desc: "Submit learning requirements and academic goals in minutes.",
    color: "#16C47F", glow: "rgba(22,196,127,0.25)", border: "rgba(22,196,127,0.3)",
    bg: "rgba(22,196,127,0.07)", grad: "from-[#16C47F] to-[#2563EB]",
    tag: "Quick Setup", tagColor: "#16C47F",
  },
  {
    num: "02", emoji: "📊", title: "Assessment",
    desc: "Identify strengths, learning gaps, and personalised goals.",
    color: "#2563EB", glow: "rgba(37,99,235,0.25)", border: "rgba(37,99,235,0.3)",
    bg: "rgba(37,99,235,0.07)", grad: "from-[#2563EB] to-[#7C3AED]",
    tag: "AI Powered", tagColor: "#2563EB",
  },
  {
    num: "03", emoji: "🤖", title: "Tutor Match",
    desc: "AI recommends the best-fit tutor based on your learning profile.",
    color: "#7C3AED", glow: "rgba(124,58,237,0.25)", border: "rgba(124,58,237,0.3)",
    bg: "rgba(124,58,237,0.07)", grad: "from-[#7C3AED] to-[#2563EB]",
    tag: "Smart Match", tagColor: "#7C3AED",
  },
  {
    num: "04", emoji: "🔐", title: "Secure Session",
    desc: "Verified tutor assignment with OTP session verification & safety protocols.",
    color: "#16C47F", glow: "rgba(22,196,127,0.25)", border: "rgba(22,196,127,0.3)",
    bg: "rgba(22,196,127,0.07)", grad: "from-[#16C47F] to-[#7C3AED]",
    tag: "Verified Safe", tagColor: "#16C47F",
  },
  {
    num: "05", emoji: "📍", title: "Live Tracking",
    desc: "Parents receive real-time attendance updates and session visibility.",
    color: "#2563EB", glow: "rgba(37,99,235,0.25)", border: "rgba(37,99,235,0.3)",
    bg: "rgba(37,99,235,0.07)", grad: "from-[#2563EB] to-[#16C47F]",
    tag: "Real-Time", tagColor: "#2563EB",
  },
  {
    num: "06", emoji: "🧠", title: "AI Learning Plan",
    desc: "Personalised study roadmap created and optimised automatically.",
    color: "#7C3AED", glow: "rgba(124,58,237,0.25)", border: "rgba(124,58,237,0.3)",
    bg: "rgba(124,58,237,0.07)", grad: "from-[#7C3AED] to-[#16C47F]",
    tag: "Personalised", tagColor: "#7C3AED",
  },
  {
    num: "07", emoji: "👨‍👩‍👧", title: "Parent Dashboard",
    desc: "Complete transparency through live reports, feedback, and updates.",
    color: "#16C47F", glow: "rgba(22,196,127,0.25)", border: "rgba(22,196,127,0.3)",
    bg: "rgba(22,196,127,0.07)", grad: "from-[#16C47F] to-[#2563EB]",
    tag: "Full Visibility", tagColor: "#16C47F",
  },
  {
    num: "08", emoji: "📈", title: "Monthly Reports",
    desc: "Track academic performance, attendance, and measurable growth.",
    color: "#2563EB", glow: "rgba(37,99,235,0.25)", border: "rgba(37,99,235,0.3)",
    bg: "rgba(37,99,235,0.07)", grad: "from-[#2563EB] to-[#7C3AED]",
    tag: "Data Driven", tagColor: "#2563EB",
  },
  {
    num: "09", emoji: "🚀", title: "Continuous Growth",
    desc: "Regular optimisation of learning outcomes for lifelong academic excellence.",
    color: "#7C3AED", glow: "rgba(124,58,237,0.25)", border: "rgba(124,58,237,0.3)",
    bg: "rgba(124,58,237,0.07)", grad: "from-[#7C3AED] to-[#2563EB]",
    tag: "Always Improving", tagColor: "#7C3AED",
  },
];

const floatingWidgets = [
  { emoji: "🎯", line1: "Goal Achieved", line2: "+18% Growth", color: "#16C47F", border: "rgba(22,196,127,0.25)", idx: 1 },
  { emoji: "⭐", line1: "Tutor Assigned", line2: "Verified & Active", color: "#2563EB", border: "rgba(37,99,235,0.25)", idx: 3 },
  { emoji: "📚", line1: "Weekly Homework", line2: "All Completed", color: "#7C3AED", border: "rgba(124,58,237,0.25)", idx: 5 },
  { emoji: "🛡️", line1: "Session Verified", line2: "OTP Confirmed", color: "#16C47F", border: "rgba(22,196,127,0.25)", idx: 7 },
];

/* ─────────────────────────────────────────────
   SINGLE STEP CARD
───────────────────────────────────────────── */
function StepCard({ step, index, side }: { step: typeof steps[0]; index: number; side: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -32 : 32, y: 10 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      whileHover={{ y: -4, boxShadow: `0 20px 50px ${step.glow}` }}
      className="group relative rounded-[22px] border cursor-default transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.92)",
        borderColor: step.border,
        backdropFilter: "blur(16px)",
        boxShadow: `0 4px 24px ${step.glow}`,
      }}
    >
      {/* Top gradient stripe */}
      <div className={`h-[3px] rounded-t-[22px] bg-gradient-to-r ${step.grad}`} />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${step.glow}, transparent 65%)` }} />

      <div className="relative z-10 p-6">
        {/* Icon + step num */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.grad} flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            {step.emoji}
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full"
            style={{ color: step.color, background: step.bg, border: `1px solid ${step.border}` }}>
            {step.num}
          </span>
        </div>

        <h3 className="text-base font-black text-[#0B1220] mb-1.5 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#64748B] mb-4">{step.desc}</p>

        {/* Tag chip */}
        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full"
          style={{ color: step.tagColor, background: step.bg, border: `1px solid ${step.border}` }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: step.tagColor }} />
          {step.tag}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE NODE
───────────────────────────────────────────── */
function TimelineNode({ step, index, visible }: { step: typeof steps[0]; index: number; visible: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={visible ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.3, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Outer pulse ring */}
        <motion.div
          className="absolute -inset-2 rounded-full"
          animate={{ boxShadow: [`0 0 0 0px ${step.glow}`, `0 0 0 10px transparent`] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
        />
        {/* Node circle */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg"
          style={{ background: `linear-gradient(135deg, ${step.color}, #2563EB)`, boxShadow: `0 4px 20px ${step.glow}` }}>
          {step.emoji}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function StudentLearningJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineVisible = useInView(timelineRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full blur-[120px] opacity-[0.11]"
          style={{ background: "radial-gradient(circle, #16C47F, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[110px] opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full blur-[90px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Very subtle diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16C47F" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#bgLine)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#bgLine)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-8"
            style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.28)", backdropFilter: "blur(12px)", boxShadow: "0 0 24px rgba(22,196,127,0.1)" }}>
            <span className="text-sm">🚀</span>
            <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">Learning Journey</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}>
            Your Learning Journey,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Designed for Success
              </span>
              <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED)" }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }} />
            </span>
          </h2>

          <p className="text-lg leading-8 text-[#64748B]">
            From your first assessment to measurable academic improvement, Tutoo manages every stage of the learning journey through technology, expert tutors, and continuous progress tracking.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════
            TIMELINE — alternating left/right layout
        ════════════════════════════════════════════ */}
        <div ref={timelineRef} className="relative">

          {/* ── Central vertical line ── */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden lg:block"
            style={{ background: "rgba(15,23,42,0.06)" }}>
            <motion.div
              className="w-full origin-top rounded-full"
              style={{
                scaleY: lineScaleY,
                background: "linear-gradient(to bottom, #16C47F 0%, #2563EB 40%, #7C3AED 70%, #16C47F 100%)",
              }}
            />
          </div>

          {/* ── Steps ── */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const widget = floatingWidgets.find((w) => w.idx === i);

              return (
                <div key={step.num} className="relative">
                  {/* Desktop alternating row */}
                  <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8 py-5">

                    {/* Left slot */}
                    <div className={isLeft ? "flex justify-end" : "flex justify-end opacity-0 pointer-events-none"}>
                      {isLeft && <div className="w-full max-w-sm"><StepCard step={step} index={i} side="left" /></div>}
                    </div>

                    {/* Centre node */}
                    <TimelineNode step={step} index={i} visible={timelineVisible} />

                    {/* Right slot */}
                    <div className={!isLeft ? "flex justify-start" : "flex justify-start opacity-0 pointer-events-none"}>
                      {!isLeft && <div className="w-full max-w-sm"><StepCard step={step} index={i} side="right" /></div>}
                    </div>
                  </div>

                  {/* Mobile single column */}
                  <div className="lg:hidden flex gap-5 items-start py-4">
                    <div className="flex flex-col items-center shrink-0">
                      {/* Node */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-base shadow-md"
                        style={{ background: `linear-gradient(135deg, ${step.color}, #2563EB)`, boxShadow: `0 4px 16px ${step.glow}` }}>
                        {step.emoji}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-[2px] flex-1 mt-2" style={{ minHeight: 24, background: `linear-gradient(to bottom, ${step.color}, ${steps[i + 1].color})`, opacity: 0.35 }} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <StepCard step={step} index={i} side="left" />
                    </div>
                  </div>

                  {/* Floating widget between steps */}
                  {widget && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
                      style={{ background: "rgba(255,255,255,0.95)", border: `1px solid ${widget.border}`, backdropFilter: "blur(16px)", boxShadow: `0 8px 28px ${widget.color}22`, bottom: -16 }}
                    >
                      <span className="text-xl">{widget.emoji}</span>
                      <div>
                        <p className="text-xs font-bold text-[#0F172A] leading-none mb-0.5">{widget.line1}</p>
                        <p className="text-[10px] font-semibold" style={{ color: widget.color }}>{widget.line2}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Connector arrow to success card ── */}
          <div className="hidden lg:flex justify-center mt-6 mb-4">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-[2px] h-10 rounded-full bg-gradient-to-b from-[#7C3AED] to-[#16C47F] opacity-40" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">
                <ArrowRight className="w-3 h-3 text-white rotate-90" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            SUCCESS DESTINATION CARD
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mt-8 rounded-[32px] overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)", boxShadow: "0 24px 80px rgba(15,23,42,0.2)" }}
        >
          {/* Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

          {/* BG glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, rgba(22,196,127,0.3), transparent 70%)", filter: "blur(50px)" }} />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)", filter: "blur(50px)" }} />
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          </div>

          <div className="relative z-10 py-16 px-8 lg:px-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{ background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.25)" }}>
                <Sparkles className="w-4 h-4 text-[#16C47F]" />
                <span className="text-sm font-semibold text-[#16C47F]">The Destination</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3"
                style={{ fontFamily: "var(--font-heading)" }}>
                <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                  Academic Success
                </span>
              </h3>
              <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
                Every step of Tutoo's journey leads here — measurable, confident, lifelong achievement.
              </p>
            </div>

            {/* 4 outcome cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { emoji: "🎓", title: "Better Scores", desc: "Consistent grade improvement across all subjects.", color: "#16C47F", border: "rgba(22,196,127,0.25)", bg: "rgba(22,196,127,0.1)" },
                { emoji: "📈", title: "Higher Confidence", desc: "Students approach exams with clarity and calm.", color: "#2563EB", border: "rgba(37,99,235,0.25)", bg: "rgba(37,99,235,0.1)" },
                { emoji: "🏆", title: "Strong Concepts", desc: "Deep understanding, not just surface-level prep.", color: "#7C3AED", border: "rgba(124,58,237,0.25)", bg: "rgba(124,58,237,0.1)" },
                { emoji: "🚀", title: "Lifelong Learning", desc: "Skills and habits that last far beyond the exam.", color: "#F59E0B", border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.1)" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="rounded-2xl border p-6 text-center cursor-default transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: item.border, backdropFilter: "blur(12px)" }}
                >
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h4 className="text-base font-black text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed text-[#94A3B8]">{item.desc}</p>
                  <div className="mt-4 h-0.5 w-8 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, #2563EB)` }} />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10">
              <button className="group h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold shadow-xl shadow-[#16C47F]/25 hover:scale-[1.02] hover:shadow-[#2563EB]/30 transition-all duration-300 flex items-center gap-2 text-base">
                Start Your Journey Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}