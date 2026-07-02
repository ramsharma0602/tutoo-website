"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BarChart2,
  Zap,
  AlertTriangle,
  Brain,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const insightCards = [
  { emoji: "📊", icon: BarChart2,     title: "Current Academic Level", desc: "Understand exactly where the student stands today against expected curriculum milestones.", color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)",  grad: "from-[#2563EB] to-[#7C3AED]" },
  { emoji: "💪", icon: Zap,           title: "Strengths",               desc: "Identify subjects and concepts already mastered to build further confidence.",             color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#2563EB]" },
  { emoji: "⚠️", icon: AlertTriangle, title: "Learning Gaps",           desc: "Pinpoint specific weaknesses and challenges that require focused intervention.",          color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", grad: "from-[#F59E0B] to-[#EF4444]" },
  { emoji: "🧠", icon: Brain,         title: "Learning Style",          desc: "Visual, practical, conceptual, or interactive — every student learns differently.",        color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", grad: "from-[#7C3AED] to-[#2563EB]" },
  { emoji: "🎯", icon: Target,        title: "Aptitude Indicators",     desc: "Discover hidden strengths, subject affinities, and future academic potential.",           color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)",  grad: "from-[#2563EB] to-[#16C47F]" },
];

const subjectData = [
  { label: "Mathematics", val: 60, color: "#2563EB", grad: "linear-gradient(90deg,#2563EB,#7C3AED)", ring: 138, gap: 55 },
  { label: "Science",     val: 82, color: "#16C47F", grad: "linear-gradient(90deg,#16C47F,#2563EB)", ring: 138, gap: 25 },
  { label: "English",     val: 91, color: "#7C3AED", grad: "linear-gradient(90deg,#7C3AED,#2563EB)", ring: 138, gap: 12 },
];

const floatingChips = [
  { emoji: "🤖", label: "AI Analysis Complete",        color: "#2563EB", border: "rgba(37,99,235,0.25)",  delay: 0   },
  { emoji: "📈", label: "Learning Pattern Identified",  color: "#16C47F", border: "rgba(22,196,127,0.25)", delay: 0.5 },
  { emoji: "🎯", label: "Tutor Match Ready",            color: "#7C3AED", border: "rgba(124,58,237,0.25)", delay: 1   },
  { emoji: "📚", label: "Personalised Plan Generated",  color: "#F59E0B", border: "rgba(245,158,11,0.25)", delay: 1.5 },
];

const progressSteps = [
  { label: "Register",   done: true  },
  { label: "Assessment", done: true  },
  { label: "Match",      done: false },
  { label: "Session",    done: false },
  { label: "Track",      done: false },
];

/* ─────────────────────────────────────────────
   RING CHART
───────────────────────────────────────────── */
function RingChart({ sub, visible }: { sub: typeof subjectData[0]; visible: boolean }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const offset = circ - (sub.val / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-14 h-14">
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(15,23,42,0.07)" strokeWidth="4" />
          <motion.circle
            cx="28" cy="28" r={r} fill="none" stroke={sub.color} strokeWidth="4"
            strokeLinecap="round" strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={visible ? { strokeDashoffset: offset } : { strokeDashoffset: circ }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-black" style={{ color: sub.color }}>{sub.val}%</div>
      </div>
      <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider text-center leading-tight">{sub.label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AI DASHBOARD PANEL
───────────────────────────────────────────── */
function AIDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col gap-4">

      {/* ── Main assessment result card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="rounded-[28px] border overflow-hidden"
        style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 16px 56px rgba(15,23,42,0.10)" }}
      >
        <div className="h-[3px] bg-gradient-to-r from-[#2563EB] via-[#16C47F] to-[#7C3AED]" />
        <div className="p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-md">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-black text-[#0B1220]">Assessment Result</p>
                <p className="text-xs text-[#94A3B8]">AI Learning Analysis · Grade 8</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563EB]"
              style={{ background: "rgba(37,99,235,0.09)", border: "1px solid rgba(37,99,235,0.22)" }}>
              <Sparkles className="w-3 h-3" /> AI Powered
            </div>
          </div>

          {/* Level comparison bars */}
          <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">Mathematics Performance Analysis</p>
          <div className="flex flex-col gap-2.5 mb-5">
            {[
              { label: "Expected Level (Grade 8)", val: 100, grad: "linear-gradient(90deg,rgba(15,23,42,0.15),rgba(15,23,42,0.08))", color: "#94A3B8", delay: 0.3 },
              { label: "Current Level (Student)",  val: 60,  grad: "linear-gradient(90deg,#2563EB,#7C3AED)", color: "#2563EB", delay: 0.5 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-[#64748B]">{bar.label}</span>
                  <span className="text-[11px] font-black" style={{ color: bar.color }}>{bar.val}%</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(15,23,42,0.06)" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: 999, background: bar.grad }}
                    initial={{ width: 0 }}
                    animate={vis ? { width: `${bar.val}%` } : {}}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: bar.delay }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gap indicator */}
          <div className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shrink-0 shadow-sm">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-black text-[#0B1220]">Learning Gap Detected</p>
              <p className="text-[10px] text-[#64748B]">Student is 40% behind expected level in Mathematics</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Subject rings + AI score row ── */}
      <div className="grid grid-cols-[1fr_auto] gap-4">

        {/* Subject rings card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border p-5"
          style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-4">Subject Analysis</p>
          <div className="flex items-center justify-between gap-3">
            {subjectData.map((sub) => <RingChart key={sub.label} sub={sub} visible={vis} />)}
          </div>
        </motion.div>

        {/* Readiness score card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border p-5 flex flex-col items-center justify-center text-center min-w-[120px]"
          style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.06),rgba(124,58,237,0.06))", borderColor: "rgba(37,99,235,0.2)", boxShadow: "0 4px 20px rgba(37,99,235,0.08)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-xl mb-3 shadow-md">🧠</div>
          <p className="text-[9px] font-black uppercase tracking-widest text-[#7C3AED] mb-1">Readiness Score</p>
          <motion.p
            className="text-3xl font-black text-[#2563EB] leading-none mb-1"
            initial={{ opacity: 0 }}
            animate={vis ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            78%
          </motion.p>
          <p className="text-[9px] text-[#64748B] font-semibold leading-tight">Ready for Personalised Plan</p>
        </motion.div>
      </div>

      {/* ── AI Recommendation card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0B1220,#111827)", boxShadow: "0 8px 32px rgba(15,23,42,0.18)" }}
      >
        <div className="h-[2px] bg-gradient-to-r from-[#16C47F] to-[#2563EB]" />
        <div className="p-5 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-[#16C47F] mb-1">AI Recommendation</p>
            <p className="text-sm font-black text-white mb-2">Foundation Reinforcement + Advanced Support</p>
            <div className="flex flex-wrap gap-2">
              {["Algebra Basics", "Problem Solving", "Concept Clarity"].map((tag) => (
                <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-[#16C47F]"
                  style={{ background: "rgba(22,196,127,0.1)", border: "1px solid rgba(22,196,127,0.22)" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Notification feed ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-2xl border overflow-hidden"
        style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 4px 20px rgba(15,23,42,0.05)" }}
      >
        <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: "rgba(15,23,42,0.06)" }}>
          <p className="text-xs font-black text-[#0B1220]">AI Assessment Insights</p>
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
        </div>
        {[
          { dot: "#2563EB", text: "Mathematics skill gap identified at Grade 6 level",  icon: <Activity className="w-3.5 h-3.5" /> },
          { dot: "#16C47F", text: "Science performance strong — 82% proficiency",        icon: <TrendingUp className="w-3.5 h-3.5" /> },
          { dot: "#7C3AED", text: "Visual learning style detected from test responses",  icon: <Brain className="w-3.5 h-3.5" /> },
        ].map((n, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={vis ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.55 + i * 0.1 }}
            className="flex items-center gap-3 px-5 py-3 border-b last:border-0"
            style={{ borderColor: "rgba(15,23,42,0.05)" }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${n.dot}14`, color: n.dot }}>{n.icon}</div>
            <span className="text-[11px] text-[#0F172A] font-medium leading-snug flex-1">{n.text}</span>
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: n.dot }} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Floating chips ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-2"
      >
        {floatingChips.map((chip, i) => (
          <motion.span key={chip.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 + i * 0.08 }}
            viewport={{ once: true }}
            animate={{ y: [0, -4, 0] }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border bg-white"
            style={{ color: chip.color, borderColor: chip.border, boxShadow: `0 4px 12px ${chip.color}18` }}>
            <span>{chip.emoji}</span>{chip.label}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function Step02Assessment() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVis = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* ── BG ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {[...Array(10)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 2, height: 2, background: i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#16C47F" : "#7C3AED", left: `${(i * 18 + 5) % 96}%`, top: `${(i * 13 + 6) % 88}%`, opacity: 0.3 }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-start">

          {/* ════════════════════════════════
              LEFT — AI DASHBOARD
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <AIDashboard />
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — CONTENT
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            {/* Step badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ background: "rgba(37,99,235,0.08)", borderColor: "rgba(37,99,235,0.28)", backdropFilter: "blur(10px)" }}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-[9px] font-black shadow-sm">2</div>
              <span className="text-xs font-black tracking-widest text-[#2563EB] uppercase">Step 02</span>
              <Sparkles className="w-3 h-3 text-[#2563EB]" />
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}>
              Understand
              <br />Before We Teach
            </h2>
            <p className="text-lg font-semibold text-[#0F172A] mb-4">
              AI-Powered{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                  Learning Assessment
                </span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563EB, #16C47F)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                />
              </span>
            </p>

            <div className="flex flex-col gap-4 mb-9">
              {[
                "Before assigning a tutor, UberTutor evaluates each student's current academic level, learning patterns, and knowledge gaps.",
                "This allows us to create a personalised learning roadmap and match students with tutors who can deliver the greatest impact.",
              ].map((para, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg leading-8 text-[#64748B]">
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Assessment identifies */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-sm font-black uppercase tracking-widest text-[#0F172A] whitespace-nowrap">The Assessment Identifies</p>
              <div className="flex-1 h-px bg-gradient-to-r from-[rgba(37,99,235,0.2)] to-transparent" />
            </div>

            <div ref={gridRef} className="flex flex-col gap-3 mb-8">
              {insightCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={gridVis ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4, boxShadow: `0 8px 28px ${card.color}18` }}
                  className="group flex items-center gap-4 rounded-2xl border px-5 py-4 cursor-default transition-all duration-300 overflow-hidden relative"
                  style={{ background: "rgba(255,255,255,0.9)", borderColor: card.border, backdropFilter: "blur(10px)", boxShadow: `0 2px 10px ${card.color}10` }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, ${card.color}12, transparent 60%)` }} />

                  <div className={`relative z-10 w-11 h-11 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-xl shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {card.emoji}
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="text-sm font-black text-[#0B1220] mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</p>
                    <p className="text-xs leading-relaxed text-[#64748B]">{card.desc}</p>
                  </div>
                  <ArrowRight className="relative z-10 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" style={{ color: card.color }} />
                </motion.div>
              ))}
            </div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 rounded-2xl border px-5 py-4 mb-8"
              style={{ background: "rgba(37,99,235,0.05)", borderColor: "rgba(37,99,235,0.18)", backdropFilter: "blur(10px)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-md shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                Every assessment is designed to help students receive the most effective tutor, learning plan, and academic support.
              </p>
            </motion.div>

            {/* Progress indicator */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <div className="flex items-center gap-0 mb-3">
                {progressSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm ${s.done ? "scale-110" : ""}`}
                      style={s.done
                        ? { background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "#fff", boxShadow: "0 0 12px rgba(37,99,235,0.4)" }
                        : { background: "rgba(15,23,42,0.06)", color: "#94A3B8" }}>
                      {s.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                    </div>
                    {i < progressSteps.length - 1 && (
                      <div className="w-10 h-[2px] mx-1 rounded-full"
                        style={{ background: i < 1 ? "linear-gradient(90deg, #2563EB, #16C47F)" : "rgba(15,23,42,0.08)" }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <p className="text-xs font-bold text-[#2563EB]">Assessment Completed · Step 2 of 5</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}