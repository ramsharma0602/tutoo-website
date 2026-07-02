"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BookOpen,
  MapPin,
  Users,
  Star,
  Clock,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const matchFactors = [
  { emoji: "📚", icon: BookOpen, title: "Subject Expertise", desc: "Tutors specialised in the exact subjects your child needs.", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#2563EB]" },
  { emoji: "📍", icon: MapPin, title: "Location", desc: "Nearby home tutors or online options matched to your area.", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", grad: "from-[#2563EB] to-[#7C3AED]" },
  { emoji: "👨‍🏫", icon: Users, title: "Experience", desc: "Teaching experience, qualifications, and subject mastery verified.", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", grad: "from-[#7C3AED] to-[#2563EB]" },
  { emoji: "👨‍👩‍👧", icon: Users, title: "Parent Preferences", desc: "Learning style, mode, timing, and parent expectations factored in.", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", grad: "from-[#F59E0B] to-[#EF4444]" },
  { emoji: "⭐", icon: Star, title: "Ratings & Reviews", desc: "Tutor performance analytics, parent feedback, and session history.", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#7C3AED]" },
  { emoji: "⏰", icon: Clock, title: "Availability", desc: "Session schedules matched to your preferred days and timings.", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", grad: "from-[#2563EB] to-[#16C47F]" },
];

// Canvas: 480 × 390, centre cx=240 cy=195
// Chips spread evenly — top, top-right, right, bottom-right, bottom-left, left
const floatingFactors = [
  { emoji: "📚", label: "Subject Expertise", color: "#16C47F", border: "rgba(22,196,127,0.3)", x: 0, y: -148 }, // top-centre
  { emoji: "📍", label: "Location Match", color: "#2563EB", border: "rgba(37,99,235,0.3)", x: 168, y: -74 }, // top-right
  { emoji: "⭐", label: "Ratings", color: "#F59E0B", border: "rgba(245,158,11,0.3)", x: 168, y: 74 }, // bottom-right
  { emoji: "👨‍🏫", label: "Experience", color: "#7C3AED", border: "rgba(124,58,237,0.3)", x: 0, y: 148 }, // bottom-centre
  { emoji: "⏰", label: "Availability", color: "#2563EB", border: "rgba(37,99,235,0.3)", x: -168, y: 74 }, // bottom-left
  { emoji: "🎯", label: "Preferences", color: "#16C47F", border: "rgba(22,196,127,0.3)", x: -168, y: -74 }, // top-left
];

const tutorAlts = [
  { initials: "RS", name: "Rahul S.", subject: "Science", score: 94, color: "#16C47F" },
  { initials: "PK", name: "Priya K.", subject: "English", score: 88, color: "#2563EB" },
  { initials: "AV", name: "Anand V.", subject: "Maths", score: 91, color: "#7C3AED" },
];

const progressSteps = [
  { label: "Register", done: true },
  { label: "Assessment", done: true },
  { label: "Match", done: true },
  { label: "Session", done: false },
  { label: "Track", done: false },
];

/* ─────────────────────────────────────────────
   MATCHING ENGINE VISUAL
───────────────────────────────────────────── */
function MatchingEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col gap-4">

      {/* ── Main matching orb card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative rounded-[28px] border overflow-hidden"
        style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 16px 56px rgba(15,23,42,0.10)" }}
      >
        <div className="h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#94A3B8]">AI Matching Engine</p>
              <h4 className="text-base font-black text-[#0B1220]" style={{ fontFamily: "var(--font-heading)" }}>Smart Tutor Selection</h4>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#16C47F]"
              style={{ background: "rgba(22,196,127,0.09)", border: "1px solid rgba(22,196,127,0.22)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
              Matching…
            </div>
          </div>

          {/* ── Orbital matching diagram — fixed pixel canvas ── */}
          <div className="relative w-full mb-6" style={{ height: 420 }}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 480 420"
              preserveAspectRatio="xMidYMid meet"
              overflow="visible"
            >
              <defs>
                <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#16C47F" />
                  <stop offset="100%" stopColor="#2563EB" />
                </radialGradient>
                <filter id="orbGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="chipShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.09" />
                </filter>
              </defs>

              {/* ── Orbit ring 1 — inner dashed ── */}
              {/* <motion.circle cx={240} cy={210} r={100}
                fill="none" stroke="rgba(22,196,127,0.13)" strokeWidth="1.5" strokeDasharray="6 4"
                animate={{ rotate: 360 }} style={{ originX: "240px", originY: "210px" }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }} /> */}

              {/* ── Orbit ring 2 — outer dashed ── */}
              {/* <motion.circle cx={240} cy={210} r={168}
                fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1.5" strokeDasharray="6 4"
                animate={{ rotate: -360 }} style={{ originX: "240px", originY: "210px" }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }} /> */}

              {/* ── Connector lines centre → each chip ── */}
              {floatingFactors.map((f, i) => (
                <motion.line key={`line-${i}`}
                  x1={240} y1={210}
                  x2={240 + f.x} y2={210 + f.y}
                  stroke={f.color} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 3"
                  initial={{ pathLength: 0 }}
                  animate={vis ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.7 }}
                />
              ))}

              {/* ── Centre AI orb ── */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={vis ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ originX: "240px", originY: "210px" }}
              >
                {/* Outer pulse ring */}
                <motion.circle cx={240} cy={210} r={70}
                  fill="rgba(22,196,127,0.07)" stroke="rgba(22,196,127,0.18)" strokeWidth="1"
                  animate={{ scale: [1, 1.09, 1], opacity: [0.5, 1, 0.5] }}
                  style={{ originX: "240px", originY: "210px" }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} />
                {/* Inner pulse ring */}
                <motion.circle cx={240} cy={210} r={57}
                  fill="rgba(37,99,235,0.05)" stroke="rgba(37,99,235,0.14)" strokeWidth="1"
                  animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.9, 0.4] }}
                  style={{ originX: "240px", originY: "210px" }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: 0.6, ease: "easeInOut" }} />
                {/* Solid orb */}
                <circle cx={240} cy={210} r={46} fill="url(#orbGrad)" filter="url(#orbGlow)" />
                {/* Text */}
                <text x={240} y={206} textAnchor="middle" fill="white" fontSize="9" fontWeight="900"
                  style={{ letterSpacing: "0.1em", fontFamily: "Inter,sans-serif" }}>AI MATCH</text>
                <text x={240} y={220} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5"
                  style={{ fontFamily: "Inter,sans-serif" }}>Finding best…</text>
              </motion.g>

              {/* ── Factor chip pills ── */}
              {floatingFactors.map((f, i) => {
                const px = 240 + f.x;
                const py = 210 + f.y;
                const pw = 152, ph = 34, pr = 17;
                return (
                  <motion.g key={`chip-${i}`}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={vis ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.38 + i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ cursor: "default", originX: `${px}px`, originY: `${py}px` }}
                    whileHover={{ scale: 1.06 }}
                  >
                    {/* Pill bg */}
                    <rect
                      x={px - pw / 2} y={py - ph / 2}
                      width={pw} height={ph} rx={pr}
                      fill="rgba(255,255,255,0.97)"
                      stroke={f.border} strokeWidth="1.2"
                      filter="url(#chipShadow)"
                    />
                    {/* Emoji */}
                    <text x={px - pw / 2 + 20} y={py + 5} fontSize="14" textAnchor="middle">{f.emoji}</text>
                    {/* Label */}
                    <text
                      x={px - pw / 2 + 34} y={py + 5}
                      fill={f.color} fontSize="10.5" fontWeight="700"
                      style={{ fontFamily: "Inter,sans-serif" }}
                    >{f.label}</text>
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Candidate tutors row */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Candidates Evaluated</p>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(15,23,42,0.08)] to-transparent" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {tutorAlts.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 10 }}
                animate={vis ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.09 }}
                className="rounded-xl border p-3 text-center"
                style={{ background: "rgba(248,250,252,0.9)", borderColor: "rgba(15,23,42,0.07)" }}>
                <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-black text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #2563EB)` }}>{t.initials}</div>
                <p className="text-[10px] font-bold text-[#0F172A]">{t.name}</p>
                <p className="text-[9px] text-[#94A3B8]">{t.subject}</p>
                <div className="mt-1.5 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(15,23,42,0.06)" }}>
                  <motion.div style={{ height: "100%", borderRadius: 999, background: `linear-gradient(90deg, ${t.color}, #2563EB)` }}
                    initial={{ width: 0 }} animate={vis ? { width: `${t.score}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.8 + i * 0.1 }} />
                </div>
                <p className="text-[9px] font-black mt-0.5" style={{ color: t.color }}>{t.score}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Best match result card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B1220, #111827)", boxShadow: "0 12px 40px rgba(15,23,42,0.2)" }}
      >
        <div className="h-[2px] bg-gradient-to-r from-[#16C47F] to-[#2563EB]" />
        <div className="p-5 flex gap-4 items-start">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center text-xl font-black text-white shadow-lg">SS</div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#16C47F] flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-black text-white">Sarah Sharma</p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-[#16C47F]"
                style={{ background: "rgba(22,196,127,0.15)", border: "1px solid rgba(22,196,127,0.25)" }}>🏆 Best Match</span>
            </div>
            <p className="text-xs text-[#94A3B8] mb-2">Mathematics Specialist · 8+ Years</p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "⭐", val: "4.9 Rating" },
                { icon: "📅", val: "Mon–Sat" },
                { icon: "✓", val: "Verified" },
              ].map((tag) => (
                <span key={tag.val} className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-[#16C47F]"
                  style={{ background: "rgba(22,196,127,0.1)", border: "1px solid rgba(22,196,127,0.22)" }}>
                  {tag.icon} {tag.val}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-2xl font-black text-white">98%</p>
            <p className="text-[9px] text-[#16C47F] font-bold uppercase tracking-wider">Match Score</p>
          </div>
        </div>
      </motion.div>

      {/* ── Status chips row ── */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-2"
      >
        {[
          { emoji: "🤖", label: "AI Match Complete", color: "#16C47F", border: "rgba(22,196,127,0.25)" },
          { emoji: "✅", label: "Tutor Verified", color: "#2563EB", border: "rgba(37,99,235,0.25)" },
          { emoji: "📩", label: "Profile Sent to Parent", color: "#7C3AED", border: "rgba(124,58,237,0.25)" },
        ].map((chip, i) => (
          <motion.span key={chip.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + i * 0.08 }}
            viewport={{ once: true }}
            animate={{ y: [0, -4, 0] }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border bg-white shadow-sm"
            style={{ color: chip.color, borderColor: chip.border, boxShadow: `0 4px 12px ${chip.color}14` }}>
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
export function Step03TutorMatch() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVis = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* ── BG ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute top-1/3 -left-24 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {[...Array(10)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 2, height: 2, background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED", left: `${(i * 18 + 5) % 96}%`, top: `${(i * 13 + 6) % 88}%`, opacity: 0.3 }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-start">

          {/* ════════════════════════════════
              LEFT — MATCHING ENGINE
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <MatchingEngine />
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

            <div className="flex flex-wrap items-center gap-4 mb-7">

              {/* Step badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(22,196,127,0.08)",
                  borderColor: "rgba(22,196,127,0.28)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center text-white text-[9px] font-black shadow-sm">
                  3
                </div>

                <span className="text-xs font-black tracking-widest text-[#059669] uppercase">
                  Step 03
                </span>

                <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
              </div>

              {/* Feature highlight badge */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,196,127,0.1), rgba(37,99,235,0.08))",
                  borderColor: "rgba(22,196,127,0.28)",
                  boxShadow: "0 0 20px rgba(22,196,127,0.12)",
                }}
              >
                <Zap className="w-4 h-4 text-[#16C47F]" />

                <span className="text-sm font-bold text-[#059669]">
                  No Manual Searching Required
                </span>
              </motion.div>

            </div>


            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              Finding the{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                  Right Tutor
                </span>
                <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #16C47F, #2563EB)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }} />
              </span>
              {" "}Automatically
            </h2>

            <div className="flex flex-col gap-4 mb-9">
              {[
                "Our intelligent tutor matching system automatically recommends the most suitable tutors based on the student's academic needs, learning goals, preferences, and location.",
                "Instead of manually comparing dozens of tutor profiles, UberTutor analyses multiple factors to ensure the best possible learning experience.",
              ].map((para, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg leading-8 text-[#64748B]">{para}</motion.p>
              ))}
            </div>

            {/* Matching factors */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-sm font-black uppercase tracking-widest text-[#0F172A] whitespace-nowrap">Matching Factors Considered</p>
              <div className="flex-1 h-px bg-gradient-to-r from-[rgba(22,196,127,0.25)] to-transparent" />
            </div>

            <div ref={gridRef} className="grid grid-cols-2 gap-3 mb-8">
              {matchFactors.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18, scale: 0.95 }}
                  animate={gridVis ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, boxShadow: `0 12px 32px ${card.color}22` }}
                  className="group relative rounded-2xl border p-4 cursor-default transition-all duration-300 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.9)", borderColor: card.border, boxShadow: `0 2px 10px ${card.color}10` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 20% 10%, ${card.color}12, transparent 65%)` }} />
                  <div className={`relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-lg mb-3 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {card.emoji}
                  </div>
                  <p className="relative z-10 text-xs font-black text-[#0B1220] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</p>
                  <p className="relative z-10 text-[10px] leading-relaxed text-[#64748B]">{card.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />
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
              style={{ background: "rgba(22,196,127,0.05)", borderColor: "rgba(22,196,127,0.2)", backdropFilter: "blur(10px)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                Every tutor recommendation is personalised based on learning needs, teaching style compatibility, and academic goals.
              </p>
            </motion.div>

            {/* Progress indicator */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.65 }}>
              <div className="flex items-center gap-0 mb-3">
                {progressSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm ${s.done ? "scale-110" : ""}`}
                      style={s.done
                        ? { background: "linear-gradient(135deg, #16C47F, #2563EB)", color: "#fff", boxShadow: "0 0 12px rgba(22,196,127,0.4)" }
                        : { background: "rgba(15,23,42,0.06)", color: "#94A3B8" }}>
                      {s.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                    </div>
                    {i < progressSteps.length - 1 && (
                      <div className="w-10 h-[2px] mx-1 rounded-full"
                        style={{ background: i < 2 ? "linear-gradient(90deg, #16C47F, #2563EB)" : "rgba(15,23,42,0.08)" }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />
                <p className="text-xs font-bold text-[#16C47F]">Tutor Match Completed · Step 3 of 5</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}