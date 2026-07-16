"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Rocket,
  Lightbulb,
  Target,
  AlertTriangle,
  GraduationCap,
  Users,
  BookOpen,
  Star,
  Brain,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Quote,
  Heart,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const JOURNEY_STEPS = [
  {
    step: "01",
    icon: AlertTriangle,
    emoji: "⚠️",
    title: "The Problem",
    desc: "Many students struggle to find reliable academic support that matches their learning style, goals, and educational needs. Quality tutors remain out of reach for most families.",
    from: "#EF4444",
    to: "#F97316",
    bg: "from-red-500/10 to-orange-500/10",
    border: "border-red-200/60",
    glow: "shadow-red-500/15",
    iconBg: "from-[#EF4444] to-[#F97316]",
    tag: "Root Cause",
    tagColor: "text-red-500 bg-red-50 border-red-100",
    delay: 0.1,
  },
  {
    step: "02",
    icon: Lightbulb,
    emoji: "💡",
    title: "The Opportunity",
    desc: "We saw a chance to create a smarter, safer, and more personalized learning ecosystem powered by technology, data, and human connection.",
    from: "#F59E0B",
    to: "#EAB308",
    bg: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-200/60",
    glow: "shadow-amber-500/15",
    iconBg: "from-[#F59E0B] to-[#EAB308]",
    tag: "Vision",
    tagColor: "text-amber-600 bg-amber-50 border-amber-100",
    delay: 0.2,
  },
  {
    step: "03",
    icon: Target,
    emoji: "🎯",
    title: "The Solution",
    desc: "Build a platform where students, parents, and tutors connect seamlessly through verified learning experiences, progress tracking, and measurable academic outcomes.",
    from: "#2563EB",
    to: "#7C3AED",
    bg: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-200/60",
    glow: "shadow-blue-500/15",
    iconBg: "from-[#2563EB] to-[#7C3AED]",
    tag: "Blueprint",
    tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    delay: 0.3,
  },
  {
    step: "04",
    icon: Rocket,
    emoji: "🚀",
    title: "Tutoo",
    desc: "A complete learning ecosystem combining technology, verified tutors, progress tracking, assessments, and personalized learning journeys — built for every student.",
    from: "#16C47F",
    to: "#2563EB",
    bg: "from-emerald-500/10 to-blue-500/10",
    border: "border-emerald-200/60",
    glow: "shadow-emerald-500/15",
    iconBg: "from-[#16C47F] to-[#2563EB]",
    tag: "Today",
    tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    delay: 0.4,
  },
];

const ECOSYSTEM_NODES = [
  { label: "Students", emoji: "🎓", angle: -90, color: "#16C47F", r: 130 },
  { label: "Parents", emoji: "👨‍👩‍👧", angle: -18, color: "#2563EB", r: 130 },
  { label: "Progress", emoji: "📈", angle: 54, color: "#7C3AED", r: 130 },
  { label: "AI Support", emoji: "🧠", angle: 126, color: "#F59E0B", r: 130 },
  { label: "Safety", emoji: "🛡️", angle: 198, color: "#EF4444", r: 130 },
];

const STATS = [
  { value: "5,000+", label: "Students Learning", icon: GraduationCap, grad: "from-[#16C47F] to-[#2563EB]" },
  { value: "1,200+", label: "Verified Tutors", icon: Users, grad: "from-[#2563EB] to-[#7C3AED]" },
  { value: "50,000+", label: "Sessions Delivered", icon: BookOpen, grad: "from-[#7C3AED] to-[#F59E0B]" },
  { value: "4.8★", label: "Parent Satisfaction", icon: Star, grad: "from-[#F59E0B] to-[#16C47F]" },
];

// ─────────────────────────────────────────────
// CONNECTOR ARROW
// ─────────────────────────────────────────────

function Connector({ gradient }: { gradient: string[] }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-16 flex-shrink-0 relative -mx-1 z-10">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative w-full h-0.5"
        style={{ background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})` }}
      >
        {/* Glowing dot sliding */}
        <motion.div
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-lg"
          style={{ background: gradient[1], boxShadow: `0 0 8px ${gradient[1]}` }}
        />
      </motion.div>
      {/* Arrowhead */}
      <div
        className="absolute right-0 w-0 h-0"
        style={{
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: `8px solid ${gradient[1]}`,
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// ECOSYSTEM DIAGRAM
// ─────────────────────────────────────────────

function EcosystemDiagram() {
  return (
    <div className="relative w-full h-[380px] flex items-center justify-center select-none">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#16C47F]/20"
      />
      <div className="absolute w-[240px] h-[240px] rounded-full border border-[#2563EB]/10" />

      {/* Radial lines */}
      <svg className="absolute w-[300px] h-[300px]" viewBox="0 0 300 300">
        {ECOSYSTEM_NODES.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = 150 + n.r * Math.cos(rad);
          const y = 150 + n.r * Math.sin(rad);
          return (
            <motion.line
              key={i}
              x1={150} y1={150} x2={x} y2={y}
              stroke={n.color}
              strokeWidth="1.5"
              strokeDasharray="5 4"
              opacity={0.35}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
            />
          );
        })}
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
        className="relative z-10 w-[88px] h-[88px] rounded-2xl
                   bg-gradient-to-br from-[#16C47F] via-[#2563EB] to-[#7C3AED]
                   flex flex-col items-center justify-center
                   shadow-[0_8px_32px_rgba(22,196,127,0.45)]"
        style={{ animation: "centerPulse 3s ease-in-out infinite" }}
      >
        <Rocket className="w-7 h-7 text-white" />
        <p className="text-[9px] font-black text-white mt-1 tracking-wider">TUTOO</p>
      </motion.div>

      {/* Orbit nodes */}
      {ECOSYSTEM_NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = n.r * Math.cos(rad);
        const y = n.r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.12, type: "spring", bounce: 0.35 }}
            animate={{ y: [0, i % 2 === 0 ? -6 : 5, 0] }}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px - 34px)`,
              top: `calc(50% + ${y}px - 34px)`,
              animationDuration: `${3.5 + i * 0.5}s`,
              borderColor: `${n.color}30`
            }}
            whileHover={{ scale: 1.15 }}
            className="w-[68px] h-[68px] rounded-2xl
                       bg-white/90 backdrop-blur-xl
                       border-2 border-white shadow-xl
                       flex flex-col items-center justify-center gap-1
                       transition-transform duration-300 cursor-default"
          >
            <span className="text-xl">{n.emoji}</span>
            <p className="text-[8px] font-black tracking-wider" style={{ color: n.color }}>{n.label.toUpperCase()}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function WhyWeStartedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-[#F8FAFC]"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large mesh blobs */}
        <motion.div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-20"
          style={{ y: bgY, background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #7C3AED, transparent 70%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Journey path hint */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="33%" stopColor="#F59E0B" />
              <stop offset="66%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#16C47F" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q400,50 800,200 Q1200,350 1600,200" stroke="url(#pathGrad)" strokeWidth="2" fill="none" />
          <path d="M0,400 Q500,250 1000,400 Q1300,500 1600,350" stroke="url(#pathGrad)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── TOP CONTENT ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-9"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-white/80 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_24px_rgba(22,196,127,0.2)]"
            >
              <Rocket className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                Why We Started
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight text-[#0B1220] mb-7"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
          >
            From Educational Challenges
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                             drop-shadow-[0_0_32px_rgba(22,196,127,0.3)]">
              Meaningful Solutions
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg lg:text-xl leading-9 text-[#64748B]"
          >
            Millions of students need personalized academic support, while thousands
            of talented tutors struggle to connect with the right learners.
            Tutoo was built to bridge that gap.
          </motion.p>
        </div>

        {/* ── JOURNEY TIMELINE ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 mb-24">
          {JOURNEY_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <>
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative flex-1 rounded-3xl bg-white/80 backdrop-blur-xl
                             border ${step.border}
                             shadow-lg ${step.glow}
                             hover:shadow-2xl transition-all duration-400 p-7 overflow-hidden`}
                >
                  {/* Colored mesh bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bg} opacity-60 rounded-3xl`} />

                  {/* Top row */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.iconBg}
                                   flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${step.tagColor}`}>
                      {step.tag}
                    </span>
                  </div>

                  {/* Step number */}
                  <div className="relative z-10 mb-3">
                    <span
                      className="text-[64px] font-black leading-none select-none"
                      style={{
                        background: `linear-gradient(135deg, ${step.from}18, ${step.to}18)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "var(--font-heading, 'Clash Display', sans-serif)",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className="text-xl font-black text-[#0F172A] mb-3"
                      style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
                    >
                      {step.emoji} {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#64748B]">{step.desc}</p>
                  </div>

                  {/* Bottom animated bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${step.from}, ${step.to})` }}
                  />
                </motion.div>

                {/* Connector — between cards only */}
                {i < JOURNEY_STEPS.length - 1 && (
                  <Connector
                    key={`conn-${i}`}
                    gradient={[JOURNEY_STEPS[i].to, JOURNEY_STEPS[i + 1].from]}
                  />
                )}
              </>
            );
          })}
        </div>

        {/* Mobile step dots */}
        <div className="flex lg:hidden justify-center gap-3 mb-16">
          {JOURNEY_STEPS.map((s, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full"
              style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }} />
          ))}
        </div>

        {/* ── ECOSYSTEM DIAGRAM + QUOTE ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-[rgba(15,23,42,0.07)]
                            shadow-[0_16px_64px_rgba(15,23,42,0.08)] p-8 overflow-hidden relative">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#16C47F]/08 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#2563EB]/08 rounded-full blur-3xl" />

              <div className="relative z-10">
                <p className="text-center text-xs font-black tracking-widest uppercase text-[#64748B] mb-2">
                  The Learning Ecosystem
                </p>
                <h3
                  className="text-center text-2xl font-black text-[#0F172A] mb-6"
                  style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
                >
                  Everyone{" "}
                  <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                    Connected
                  </span>
                </h3>
                <EcosystemDiagram />
              </div>
            </div>

            {/* Floating tutors badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              animate={{ y: [0, -5, 0] }}
              className="absolute -bottom-5 -right-5 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-2xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">Fully Verified</p>
                <p className="text-[11px] text-[#64748B]">Every tutor, every session</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-9 relative overflow-hidden"
              style={{
                background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #16C47F, #2563EB, #7C3AED) border-box",
                border: "1.5px solid transparent",
                boxShadow: "0 20px 64px rgba(22,196,127,0.12)",
              }}
            >
              {/* BG glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#16C47F]/08 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7C3AED]/06 rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg mb-8">
                  <Quote className="w-7 h-7 text-white" />
                </div>

                <p
                  className="text-2xl lg:text-3xl font-black leading-tight text-[#0F172A] mb-5"
                  style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
                >
                  "We didn't build Tutoo to help parents find tutors.
                </p>
                <p className="text-2xl lg:text-3xl font-black leading-tight bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-8">
                  We built Tutoo to ensure every student has access to the right learning support, at the right time, in the right way."
                </p>

                <div className="flex items-center gap-4 pt-7 border-t border-[rgba(15,23,42,0.07)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">The Tutoo Team</p>
                    <p className="text-sm text-[#64748B]">Founded with purpose</p>
                  </div>
                  <div className="ml-auto flex gap-1.5">
                    {["#16C47F", "#2563EB", "#7C3AED"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 mini belief chips */}
            <div className="mt-6 space-y-3">
              {[
                { icon: "🎯", text: "Every student deserves personalized support" },
                { icon: "🔒", text: "Safety and trust are non-negotiable" },
                { icon: "📈", text: "Progress should be visible and measurable" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl
                             bg-white/60 backdrop-blur-xl border border-[rgba(15,23,42,0.07)]
                             shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-sm font-semibold text-[#0F172A]">{item.text}</p>
                  <ArrowRight className="w-4 h-4 text-[#16C47F] ml-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes centerPulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(22,196,127,0.45), 0 0 0 0px rgba(22,196,127,0.2); }
          50% { box-shadow: 0 8px 32px rgba(22,196,127,0.45), 0 0 0 14px rgba(22,196,127,0); }
        }
      `}</style>
    </section>
  );
}