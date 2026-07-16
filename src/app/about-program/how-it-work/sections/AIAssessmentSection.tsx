"use client";

import { motion, useScroll, useTransform, animate, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Brain,
  BarChart3,
  Zap,
  Target,
  BookOpen,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  Bot,
  ChevronRight,
  Circle,
} from "lucide-react";

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function Counter({ to, duration = 1.6, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

// ─────────────────────────────────────────────
// RADIAL PROGRESS RING
// ─────────────────────────────────────────────
function ProgressRing({
  pct,
  size = 64,
  stroke = 5,
  from,
  to,
  label,
  delay = 0,
}: {
  pct: number; size?: number; stroke?: number;
  from: string; to: string; label: string; delay?: number;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true });
  const [offset, setOffset] = useState(circ);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setOffset(circ - (pct / 100) * circ), delay * 1000 + 200);
    return () => clearTimeout(t);
  }, [inView, pct, circ, delay]);

  const id = `rg-${label.replace(/\s/g, "")}`;

  return (
    <div ref={inViewRef} className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(15,23,42,0.07)" strokeWidth={stroke} />
        {/* Progress */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1)" }}
        />
        <text x={size / 2} y={size / 2 + 1} textAnchor="middle" dominantBaseline="middle"
          fontSize={size * 0.22} fontWeight="800" fill="#0F172A">
          {pct}%
        </text>
      </svg>
      <span className="text-[11px] font-bold text-[#64748B] text-center leading-tight">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED PROGRESS BAR
// ─────────────────────────────────────────────
function ProgressBar({ pct, from, to, label, sublabel, delay = 0 }: {
  pct: number; from: string; to: string; label: string; sublabel: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setWidth(pct), delay * 1000 + 300);
    return () => clearTimeout(t);
  }, [inView, pct, delay]);
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-[#0F172A]">{label}</span>
        <span className="text-xs font-black" style={{ color: from }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-[rgba(15,23,42,0.07)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${from}, ${to})`,
            boxShadow: `0 0 8px ${from}50`,
            transitionDelay: `${delay * 0.2}s`,
          }}
        />
      </div>
      <span className="text-[10px] text-[#64748B]">{sublabel}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// AI DASHBOARD — LEFT PANEL
// ─────────────────────────────────────────────
function AIDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-full space-y-4">

      {/* ── MAIN ANALYSIS CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0B1220 0%, #111827 60%, #0f1e38 100%)",
          boxShadow: "0 20px 60px rgba(11,18,32,0.35)",
        }}
      >
        {/* Ambient glows inside dark card */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#16C47F]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top gradient stripe */}
        <div className="h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

        <div className="relative z-10 p-6">
          {/* Card header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] font-black tracking-widest uppercase text-[#64748B] mb-1">Assessment Result</p>
              <p className="text-white font-black text-lg leading-tight"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                Academic Intelligence Report
              </p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#16C47F]/20 border border-[#16C47F]/30 text-[#16C47F] text-[10px] font-black">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#16C47F]" />
                Live Analysis
              </span>
              <span className="text-[10px] text-white/40 font-semibold">Grade 8 · Math Focus</span>
            </div>
          </div>

          {/* Expected vs Current */}
          <div className="space-y-4 mb-6">
            <ProgressBar pct={100} from="#16C47F" to="#2563EB" label="Expected Level" sublabel="Grade 8 Standard" delay={0} />
            <ProgressBar pct={60}  from="#F59E0B" to="#EF4444" label="Current Level"  sublabel="Equivalent to Grade 6.2" delay={0.2} />
          </div>

          {/* Gap indicator */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/20">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
            <div>
              <p className="text-xs font-black text-white">Learning Gap Detected</p>
              <p className="text-[10px] text-white/50">40% gap requires structured remediation</p>
            </div>
            <span className="ml-auto text-[#F59E0B] font-black text-sm">–40%</span>
          </div>
        </div>
      </motion.div>

      {/* ── SUBJECT ANALYSIS RINGS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-3xl p-5 bg-white/80 backdrop-blur-xl border border-[rgba(15,23,42,0.07)] shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-black text-[#0F172A] tracking-wide uppercase">Subject Analysis</p>
          <span className="text-[10px] text-[#64748B] font-semibold">3 subjects scanned</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <ProgressRing pct={60} from="#F59E0B" to="#EF4444" label="Mathematics" delay={0.1} />
          <ProgressRing pct={82} from="#16C47F" to="#2563EB" label="Science"     delay={0.2} />
          <ProgressRing pct={91} from="#2563EB" to="#7C3AED" label="English"     delay={0.3} />
        </div>
      </motion.div>

      {/* ── AI RECOMMENDATION ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative rounded-3xl overflow-hidden p-5"
        style={{
          background: "linear-gradient(135deg, #16C47F, #2563EB)",
          boxShadow: "0 8px 32px rgba(22,196,127,0.30)",
        }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent 60%)" }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <p className="text-white font-black text-sm">AI Recommendation</p>
          </div>
          <div className="flex gap-2">
            {["Foundation Reinforcement", "Advanced Support"].map((tag) => (
              <span key={tag} className="flex-1 text-center text-[11px] font-black text-white px-3 py-2 rounded-xl bg-white/20 backdrop-blur border border-white/30">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-white/75 leading-relaxed">
            Structured 12-week program to close the Grade 6→8 gap with daily 45-min sessions.
          </p>
        </div>
      </motion.div>

      {/* ── LEARNING READINESS SCORE ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="rounded-3xl p-5 bg-white/80 backdrop-blur-xl border border-[rgba(15,23,42,0.07)] shadow-lg
                   flex items-center gap-4"
        style={{
          background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #2563EB33, #16C47F33) border-box",
          border: "1.5px solid transparent",
        }}
      >
        {/* Donut */}
        <div className="relative flex-shrink-0">
          <ProgressRing pct={78} size={76} stroke={7} from="#2563EB" to="#16C47F" label="" delay={0.5} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Brain className="w-5 h-5 text-[#2563EB] mt-[-18px]" />
          </div>
        </div>
        <div>
          <p className="text-[10px] font-black tracking-widest uppercase text-[#64748B] mb-0.5">Learning Readiness Score</p>
          <p className="text-2xl font-black text-[#0F172A]"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}>
            <Counter to={78} suffix="%" />
          </p>
          <p className="text-[11px] text-[#16C47F] font-bold mt-0.5">Ready for Personalized Learning Plan ✓</p>
        </div>
      </motion.div>

      {/* ── FLOATING AI CHIPS (absolute, outside card stack) ── */}
      {[
        { icon: Bot,         text: "AI Analysis Complete",        c: "#2563EB", pos: "-top-3 -right-4",   delay: 0.8  },
        { icon: TrendingUp,  text: "Learning Pattern Identified",  c: "#16C47F", pos: "-bottom-3 -left-4", delay: 1.0  },
      ].map((chip, i) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: chip.delay, type: "spring", bounce: 0.4 }}
            animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
            style={{ animationDuration: `${3.4 + i * 0.5}s`, zIndex: 30, border: `1px solid ${chip.c}22`, boxShadow: `0 4px 20px ${chip.c}20` }}
            className={`absolute ${chip.pos} flex items-center gap-2 px-3.5 py-2 rounded-2xl
                        bg-white/92 backdrop-blur-xl shadow-xl`}
          >
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${chip.c}18` }}>
              <Icon className="w-3.5 h-3.5" style={{ color: chip.c }} />
            </div>
            <span className="text-[11px] font-black whitespace-nowrap" style={{ color: chip.c }}>{chip.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// INSIGHT CARDS
// ─────────────────────────────────────────────
const INSIGHTS = [
  { emoji: "📊", icon: BarChart3,  title: "Current Academic Level", desc: "Understand exactly where the student stands today vs the expected grade standard.", from: "#2563EB", to: "#7C3AED", delay: 0.08 },
  { emoji: "💪", icon: TrendingUp, title: "Strengths",              desc: "Identify subjects and concepts already mastered — so we build on what works.",         from: "#16C47F", to: "#2563EB", delay: 0.16 },
  { emoji: "⚠️", icon: AlertTriangle, title: "Weaknesses",          desc: "Pinpoint learning gaps and knowledge holes causing underperformance.",                 from: "#F59E0B", to: "#EF4444", delay: 0.24 },
  { emoji: "🧠", icon: Brain,       title: "Learning Style",        desc: "Visual, practical, conceptual, or interactive — every student absorbs differently.",    from: "#7C3AED", to: "#2563EB", delay: 0.32 },
  { emoji: "🎯", icon: Target,      title: "Aptitude Indicators",   desc: "Discover hidden strengths and future potential beyond current academic performance.",   from: "#16C47F", to: "#7C3AED", delay: 0.40 },
];

// ─────────────────────────────────────────────
// STEP INDICATOR
// ─────────────────────────────────────────────
function StepIndicator() {
  const steps = [
    { label: "Register",   done: true  },
    { label: "Assessment", done: true, active: true },
    { label: "Match",      done: false },
    { label: "Learn",      done: false },
    { label: "Track",      done: false },
  ];
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all duration-300"
              style={{
                background: s.active ? "linear-gradient(135deg,#2563EB,#16C47F)" : s.done ? "#16C47F" : "transparent",
                borderColor: s.active ? "#2563EB" : s.done ? "#16C47F" : "rgba(15,23,42,0.18)",
                color: s.done || s.active ? "#fff" : "#64748B",
                boxShadow: s.active ? "0 0 12px rgba(37,99,235,0.4)" : "none",
              }}
            >
              {s.done && !s.active ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span className={`text-[9px] font-black tracking-wide ${s.active ? "text-[#2563EB]" : s.done ? "text-[#16C47F]" : "text-[#64748B]"}`}>
              {s.label.toUpperCase()}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-10 h-[2px] mx-1 mb-4 rounded-full overflow-hidden" style={{ background: "rgba(15,23,42,0.10)" }}>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: i < 1 ? "100%" : i === 1 ? "100%" : "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg,#16C47F,#2563EB)" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export function AIAssessmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 bg-[#F8FAFC]"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY, background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
          className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.13]"
        />
        <div className="absolute -bottom-44 -right-44 w-[640px] h-[640px] rounded-full blur-[120px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[100px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

        {/* Neural network dots */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#16C47F" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={`${i * 10 + 5}%`} y1="0" x2={`${i * 10 + 5}%`} y2="100%"
              stroke="url(#netGrad)" strokeWidth="0.6" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="0" y1={`${i * 12.5 + 6}%`} x2="100%" y2={`${i * 12.5 + 6}%`}
              stroke="url(#netGrad)" strokeWidth="0.6" />
          ))}
        </svg>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── STEP INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-2"
        >
          <StepIndicator />
        </motion.div>

        {/* ── SPLIT LAYOUT ── */}
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-start">

          {/* ════ LEFT — DASHBOARD ════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <AIDashboard />
          </motion.div>

          {/* ════ RIGHT — CONTENT ════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-7
                         bg-white/80 backdrop-blur-xl
                         border border-[#2563EB]/30
                         shadow-[0_0_24px_rgba(37,99,235,0.18)]"
            >
              <Brain className="w-4 h-4 text-[#2563EB]" />
              <span className="text-xs font-black tracking-widest uppercase text-[#2563EB]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                AI-Powered Assessment
              </span>
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
            </motion.div>

            {/* Heading */}
            <h2
              className="text-4xl lg:text-5xl font-black leading-[1.07] tracking-tight text-[#0B1220] mb-3"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
            >
              Understand Before
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#16C47F] to-[#2563EB] bg-clip-text text-transparent
                               drop-shadow-[0_0_32px_rgba(37,99,235,0.25)]">
                We Teach
              </span>
            </h2>

            <p className="text-sm font-black tracking-wide text-[#16C47F] mb-6 uppercase">
              AI-Powered{" "}
              <span className="text-[#2563EB]">Learning Assessment</span>
            </p>

            {/* Body */}
            <div className="space-y-4 mb-9">
              {[
                "Before assigning a tutor, Tutoo evaluates each student's current academic level, learning patterns, and knowledge gaps.",
                "This allows us to create a personalized learning roadmap and match students with tutors who can deliver the greatest academic impact.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-base leading-8 text-[#64748B]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Insight cards heading */}
            <p className="text-xs font-black tracking-widest uppercase text-[#64748B] mb-4">
              The Assessment Identifies
            </p>

            {/* Insight cards */}
            <div className="space-y-3 mb-8">
              {INSIGHTS.map((ins) => {
                const Icon = ins.icon;
                return (
                  <motion.div
                    key={ins.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ins.delay }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl
                               bg-white/70 backdrop-blur-xl
                               border border-[rgba(15,23,42,0.06)]
                               shadow-sm hover:shadow-lg
                               transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                      style={{ background: `radial-gradient(ellipse 80% 60% at 0% 50%, ${ins.from}0E, transparent 70%)` }} />
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 relative z-10"
                      style={{ background: `linear-gradient(135deg, ${ins.from}, ${ins.to})` }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="relative z-10 flex-1 min-w-0">
                      <p className="text-sm font-black text-[#0F172A] mb-0.5"
                        style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                        {ins.emoji} {ins.title}
                      </p>
                      <p className="text-xs leading-6 text-[#64748B]">{ins.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#CBD5E1] group-hover:text-[#2563EB] mt-1 transition-colors duration-300 relative z-10" />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-b-2xl transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${ins.from}, ${ins.to})` }} />
                  </motion.div>
                );
              })}
            </div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 p-4 rounded-2xl mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(22,196,127,0.07), rgba(37,99,235,0.07))",
                border: "1px solid rgba(22,196,127,0.18)",
              }}
            >
              <Shield className="w-5 h-5 text-[#16C47F] flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-6 text-[#0F172A] font-semibold">
                Every assessment is designed to help students receive the most effective tutor,
                learning plan, and academic support — not to label or categorise them.
              </p>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="group h-13 px-8 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#16C47F]
                           text-white font-bold shadow-xl shadow-[#2563EB]/22
                           flex items-center gap-2 transition-all duration-300"
              >
                Start Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <button className="text-sm text-[#2563EB] font-bold hover:text-[#16C47F] transition-colors duration-300">
                How it works →
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM FLOATING STATUS CHIPS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-20"
        >
          {[
            { icon: Bot,          text: "AI Analysis Complete",      c: "#2563EB" },
            { icon: TrendingUp,   text: "Learning Pattern Identified", c: "#16C47F" },
            { icon: Target,       text: "Tutor Match Ready",          c: "#7C3AED" },
            { icon: BookOpen,     text: "Personalized Plan Generated", c: "#F59E0B" },
          ].map((chip, i) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={chip.text}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={{ scale: 1.06, y: -3 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl
                           bg-white/80 backdrop-blur-xl
                           border border-[rgba(15,23,42,0.07)]
                           shadow-md hover:shadow-lg
                           transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `${chip.c}12` }}>
                  <Icon className="w-4 h-4" style={{ color: chip.c }} />
                </div>
                <span className="text-sm font-bold text-[#0F172A]">{chip.text}</span>
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="w-2 h-2 rounded-full" style={{ background: chip.c }} />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}