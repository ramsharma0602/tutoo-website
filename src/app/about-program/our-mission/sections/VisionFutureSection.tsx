"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Rocket,
  Globe,
  Target,
  Sparkles,
  Quote,
  ArrowRight,
  GraduationCap,
  Users,
  MapPin,
  TrendingUp,
  Brain,
  Zap,
  Star,
  CheckCircle2,
  Layers,
  Cpu,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const VISION_PILLARS = [
  {
    emoji: "🎯",
    icon: Target,
    title: "Personalized Learning",
    desc: "Every learner receives customized guidance, adaptive content, and individual support tailored to their goals.",
    from: "#16C47F",
    to: "#2563EB",
    glow: "rgba(22,196,127,0.25)",
    delay: 0.1,
  },
  {
    emoji: "🌎",
    icon: Globe,
    title: "Education Without Boundaries",
    desc: "Making quality learning accessible to every student, anywhere in India — city or town.",
    from: "#2563EB",
    to: "#7C3AED",
    glow: "rgba(37,99,235,0.25)",
    delay: 0.2,
  },
  {
    emoji: "🚀",
    icon: Rocket,
    title: "Technology-Driven Growth",
    desc: "Using AI, data, and innovation to continuously improve learning outcomes and student success rates.",
    from: "#7C3AED",
    to: "#16C47F",
    glow: "rgba(124,58,237,0.25)",
    delay: 0.3,
  },
];

const FLOAT_METRICS = [
  {
    emoji: "🎓",
    icon: GraduationCap,
    value: "10M+",
    label: "Students Impacted",
    grad: "from-[#16C47F] to-[#2563EB]",
    pos: "top-5 -left-6",
    delay: 0.3,
    floatDir: -7,
  },
  {
    emoji: "👨‍🏫",
    icon: Users,
    value: "50K+",
    label: "Expert Tutors",
    grad: "from-[#2563EB] to-[#7C3AED]",
    pos: "top-1/3 -right-6",
    delay: 0.45,
    floatDir: 6,
  },
  {
    emoji: "🌍",
    icon: MapPin,
    value: "100+",
    label: "Cities Connected",
    grad: "from-[#7C3AED] to-[#F59E0B]",
    pos: "bottom-28 -left-4",
    delay: 0.6,
    floatDir: -5,
  },
  {
    emoji: "📈",
    icon: TrendingUp,
    value: "+250%",
    label: "Learning Growth",
    grad: "from-[#F59E0B] to-[#16C47F]",
    pos: "bottom-6 right-4",
    delay: 0.75,
    floatDir: 7,
  },
];

const BODY_PARAGRAPHS = [
  "Our vision is to become India's most trusted learning platform, helping millions of students unlock their full potential through innovative, technology-driven, and personalized education solutions.",
  "We aim to create a future where quality education is accessible, affordable, and tailored to every learner — regardless of location, background, or academic goals.",
  "By combining expert educators, intelligent learning systems, and measurable outcomes, we aspire to redefine how students learn and grow in the digital age.",
];

// ─────────────────────────────────────────────
// FUTURISTIC RIGHT-SIDE VISUAL
// ─────────────────────────────────────────────

function FutureVisual() {
  return (
    <div className="relative w-full h-full min-h-[540px] flex items-center justify-center">
      {/* Base image card */}
      <div className="relative w-full rounded-[36px] overflow-hidden shadow-[0_28px_90px_rgba(15,23,42,0.14)] border border-white/50">
        <img
          src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/10/students-VR-headsets-500x330-1.jpg"
          alt="Future of digital learning"
          className="w-full h-[520px] object-cover"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-[#0B1220]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#16C47F]/15 via-transparent to-[#2563EB]/15" />

        {/* Futuristic HUD grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none">
          <defs>
            <linearGradient id="hudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16C47F" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`}
              stroke="url(#hudGrad)" strokeWidth="0.5" strokeDasharray="8 6" />
          ))}
          {/* Vertical lines */}
          {[20, 40, 60, 80].map((x) => (
            <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"
              stroke="url(#hudGrad)" strokeWidth="0.5" strokeDasharray="8 6" />
          ))}
          {/* Corner brackets */}
          <path d="M20,20 L40,20 M20,20 L20,40" stroke="#16C47F" strokeWidth="1.5" fill="none" />
          <path d="M80,20 L60,20 M80,20 L80,40" stroke="#16C47F" strokeWidth="1.5" fill="none" />
          <path d="M20,80 L40,80 M20,80 L20,60" stroke="#2563EB" strokeWidth="1.5" fill="none" />
          <path d="M80,80 L60,80 M80,80 L80,60" stroke="#2563EB" strokeWidth="1.5" fill="none" />
          {/* Center crosshair */}
          <circle cx="50%" cy="50%" r="24" stroke="#16C47F" strokeWidth="0.8" fill="none" strokeDasharray="4 3" />
          <circle cx="50%" cy="50%" r="8" stroke="#2563EB" strokeWidth="1" fill="none" />
        </svg>

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          {/* AI tags row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { icon: Brain,  label: "AI Learning",    c: "#16C47F" },
              { icon: Cpu,    label: "Smart Platform", c: "#2563EB" },
              { icon: Layers, label: "Personalised",   c: "#7C3AED" },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-white/15 backdrop-blur-xl border border-white/20 text-white text-xs font-bold">
                  <Icon className="w-3.5 h-3.5" style={{ color: t.c }} />
                  {t.label}
                </span>
              );
            })}
          </div>
          <p className="text-white text-xl font-black leading-snug"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}>
            The Future of Learning —
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent"> Personalized & Boundless</span>
          </p>
        </div>
      </div>

      {/* Glow behind card */}
      <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#16C47F]/18 rounded-full blur-3xl" />
      <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-[#2563EB]/18 rounded-full blur-3xl" />

      {/* Floating metric cards */}
      {FLOAT_METRICS.map((m, i) => {
        const Icon = m.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: m.delay, type: "spring", bounce: 0.38 }}
            animate={{ y: [0, m.floatDir, 0] }}
            style={{ animationDuration: `${3.4 + i * 0.5}s` }}
            whileHover={{ scale: 1.08 }}
            className={`absolute ${m.pos} flex items-center gap-3
                        bg-white/88 backdrop-blur-xl rounded-2xl
                        border border-white shadow-2xl px-4 py-3 min-w-[168px]
                        transition-transform duration-300`}
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.grad}
                            flex items-center justify-center shadow-md flex-shrink-0`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-base font-black text-[#0F172A] leading-none"
                style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}>
                {m.value}
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5 font-semibold">{m.label}</p>
            </div>
          </motion.div>
        );
      })}

      {/* AI pulse node (center overlay) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, type: "spring" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ animation: "aiPulse 3s ease-in-out infinite" }}
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB]
                        flex items-center justify-center shadow-[0_0_32px_rgba(22,196,127,0.6)]">
          <Brain className="w-7 h-7 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function VisionFutureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY    = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-[#F8FAFC]"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-52 -left-52 w-[720px] h-[720px] rounded-full blur-[140px] opacity-[0.13]"
          style={{ y: bgY, background: "radial-gradient(circle, #16C47F, transparent 70%)" }}
        />
        <div className="absolute -bottom-44 -right-44 w-[660px] h-[660px] rounded-full blur-[130px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute top-1/2 right-1/4 w-[440px] h-[440px] rounded-full blur-[90px] opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

        {/* Light grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.045]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16C47F" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i + 1) * 8}%`} x2="100%" y2={`${(i + 1) * 8}%`}
              stroke="url(#gridGrad)" strokeWidth="0.6" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={`${(i + 1) * 6}%`} y1="0" x2={`${(i + 1) * 6}%`} y2="100%"
              stroke="url(#gridGrad)" strokeWidth="0.6" />
          ))}
        </svg>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── SPLIT LAYOUT ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* ══ LEFT — CONTENT ══ */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78 }}
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-9
                         bg-white/80 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_28px_rgba(22,196,127,0.18)]"
            >
              <span className="text-base">🔮</span>
              <span className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                Our Vision
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-[60px] font-black leading-[1.05] tracking-tight text-[#0B1220] mb-8"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
            >
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                               drop-shadow-[0_0_36px_rgba(22,196,127,0.28)]">
                Looking Ahead
              </span>
            </h2>

            {/* Body paragraphs */}
            <div className="space-y-5 mb-12">
              {BODY_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-lg leading-9 text-[#64748B]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Vision Pillar Mini Cards */}
            <div className="space-y-4 mb-12">
              {VISION_PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: p.delay }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl
                               bg-white/70 backdrop-blur-xl
                               border border-[rgba(15,23,42,0.07)]
                               shadow-sm hover:shadow-lg
                               transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    {/* Hover mesh */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                      style={{ background: `radial-gradient(ellipse 80% 60% at 0% 50%, ${p.from}0E, transparent 70%)` }} />

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 relative z-10"
                      style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="relative z-10 flex-1">
                      <p className="font-black text-[#0F172A] mb-1"
                        style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                        {p.emoji} {p.title}
                      </p>
                      <p className="text-sm leading-6 text-[#64748B]">{p.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#16C47F] mt-1 flex-shrink-0 relative z-10
                                          opacity-0 group-hover:opacity-100 group-hover:translate-x-1
                                          transition-all duration-300" />

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-b-2xl transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${p.from}, ${p.to})` }} />
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group h-14 px-9 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                           text-white font-bold shadow-xl shadow-[#16C47F]/22
                           flex items-center gap-2 transition-all duration-300"
              >
                Explore Our Future
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <button className="text-[#2563EB] font-bold hover:text-[#16C47F] transition-colors duration-300">
                Find a Tutor →
              </button>
            </div>
          </motion.div>

          {/* ══ RIGHT — VISUAL ══ */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78, delay: 0.1 }}
          >
            <FutureVisual />
          </motion.div>
        </div>

        {/* ── ACHIEVEMENTS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {[
            { icon: GraduationCap, val: "10M+",  label: "Students Vision",   grad: "from-[#16C47F] to-[#2563EB]", delay: 0.1 },
            { icon: Users,         val: "50K+",  label: "Expert Tutors",     grad: "from-[#2563EB] to-[#7C3AED]", delay: 0.18 },
            { icon: MapPin,        val: "100+",  label: "Cities Connected",  grad: "from-[#7C3AED] to-[#F59E0B]", delay: 0.26 },
            { icon: TrendingUp,    val: "+250%", label: "Learning Growth",   grad: "from-[#F59E0B] to-[#16C47F]", delay: 0.34 },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: s.delay }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group rounded-3xl bg-white/80 backdrop-blur-xl
                           border border-[rgba(15,23,42,0.07)]
                           shadow-[0_4px_28px_rgba(15,23,42,0.07)]
                           hover:shadow-[0_16px_48px_rgba(15,23,42,0.10)]
                           transition-all duration-400 p-6 text-center"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${s.grad}
                                flex items-center justify-center shadow-md mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-3xl font-black bg-gradient-to-r ${s.grad} bg-clip-text text-transparent mb-1`}
                  style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}>
                  {s.val}
                </p>
                <p className="text-xs font-semibold text-[#64748B]">{s.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── FEATURED VISION STATEMENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="rounded-[36px] relative overflow-hidden py-16 px-10 lg:px-20 text-center mb-20"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(135deg, #16C47F, #2563EB, #7C3AED) border-box",
            border: "1.5px solid transparent",
            boxShadow:
              "0 28px 88px rgba(22,196,127,0.10), 0 8px 36px rgba(37,99,235,0.08)",
          }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#16C47F]/06 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED]/05 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB]
                            flex items-center justify-center shadow-xl mb-9">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <p
              className="text-3xl lg:text-[40px] font-black text-[#0F172A] leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
            >
              "We envision a future where every student has access to
            </p>
            <p
              className="text-3xl lg:text-[40px] font-black leading-tight mb-10
                         bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
            >
              the right teacher, the right guidance, and the right opportunities to succeed."
            </p>

            {/* Proof row */}
            <div className="flex flex-wrap justify-center gap-3 pt-9 border-t border-[rgba(15,23,42,0.07)]">
              {[
                { text: "Personalized",      c: "#16C47F" },
                { text: "Accessible",        c: "#2563EB" },
                { text: "Technology-Driven", c: "#7C3AED" },
                { text: "Results-Focused",   c: "#F59E0B" },
              ].map((chip) => (
                <motion.span
                  key={chip.text}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center gap-1.5 text-xs font-black px-4 py-2 rounded-full border transition-all duration-300"
                  style={{ color: chip.c, background: `${chip.c}10`, borderColor: `${chip.c}28` }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 1.5 }}
                    className="w-1.5 h-1.5 rounded-full" style={{ background: chip.c }}
                  />
                  {chip.text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── DARK CLOSING BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72 }}
          className="rounded-[36px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 32px 100px rgba(11,18,32,0.28)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-64 bg-[#16C47F]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-60 bg-[#2563EB]/10 rounded-full blur-3xl" />
          </div>

          {/* Star field */}
          {[...Array(18)].map((_, i) => (
            <motion.div key={i}
              animate={{ opacity: [0.15, 0.75, 0.15] }}
              transition={{ duration: 2.5 + (i % 5) * 0.4, repeat: Infinity, delay: (i % 8) * 0.28 }}
              className="absolute w-[3px] h-[3px] rounded-full bg-white"
              style={{ left: `${(i * 1618) % 96}%`, top: `${(i * 2718) % 88}%` }}
            />
          ))}

          <div className="relative z-10 py-16 px-10 lg:px-20 text-center">
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[#16C47F] text-xs font-black tracking-widest uppercase mb-6"
            >
              ✦ The Vision Ahead ✦
            </motion.p>

            <h3
              className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
            >
              India's Future of{" "}
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Personalized Learning
              </span>
            </h3>

            <p className="text-white/50 text-lg leading-9 max-w-2xl mx-auto mb-10">
              Millions of students. Thousands of expert educators. One mission — make world-class
              learning accessible to every learner in India.
            </p>

            {/* 3 feature chips */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: Zap,          label: "AI-Powered",       c: "#16C47F" },
                { icon: CheckCircle2, label: "Verified Tutors",  c: "#2563EB" },
                { icon: Star,         label: "4.8★ Satisfaction", c: "#F59E0B" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/08 backdrop-blur-xl border border-white/12">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.c}28` }}>
                      <Icon className="w-4 h-4" style={{ color: item.c }} />
                    </div>
                    <span className="text-sm font-bold text-white/75">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                           text-white font-bold shadow-[0_8px_32px_rgba(22,196,127,0.35)]
                           flex items-center gap-2 transition-all duration-300"
              >
                Explore Our Impact
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="h-14 px-10 rounded-2xl bg-white/10 backdrop-blur-xl
                           border border-white/20 text-white font-bold
                           hover:bg-white/18 transition-all duration-300"
              >
                Join the Movement
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes aiPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,196,127,0.3), 0 0 32px rgba(22,196,127,0.6); }
          50%      { box-shadow: 0 0 0 18px rgba(22,196,127,0), 0 0 32px rgba(22,196,127,0.6); }
        }
      `}</style>
    </section>
  );
}