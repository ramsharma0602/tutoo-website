"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Star,
  Target,
  BookOpen,
  Zap,
  Brain,
  Users,
  BarChart2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const trustChips = [
  { icon: ShieldCheck, label: "Verified Tutors",       color: "#7B2FF7", bg: "rgba(248,120,8,0.09)",  border: "rgba(248,120,8,0.22)"  },
  { icon: Brain,       label: "AI-Powered Matching",   color: "#7B2FF7", bg: "rgba(123,47,247,0.09)",   border: "rgba(123,47,247,0.22)"   },
  { icon: BarChart2,   label: "Progress Tracking",     color: "#7B2FF7", bg: "rgba(123,47,247,0.09)",  border: "rgba(123,47,247,0.22)"  },
  { icon: BookOpen,    label: "Home & Online Learning", color: "#F59E0B", bg: "rgba(245,158,11,0.09)",  border: "rgba(245,158,11,0.22)"  },
  { icon: Users,       label: "Parent Dashboard",      color: "#7B2FF7", bg: "rgba(248,120,8,0.09)",  border: "rgba(248,120,8,0.22)"  },
];

const floatingCards = [
  { icon: TrendingUp, emoji: "📈", title: "Weekly Progress",         sub: "+24% Improvement",    color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.22)", pos: "top-6 -left-6",    delay: 0    },
  { icon: ShieldCheck,emoji: "👨‍🏫", title: "Verified Tutor",          sub: "Background Checked",  color: "#7B2FF7", bg: "rgba(123,47,247,0.09)", border: "rgba(123,47,247,0.22)",  pos: "top-5 -right-6",   delay: 0.35 },
  { icon: Star,       emoji: "⭐", title: "Parent Satisfaction",     sub: "4.8 / 5 Rating",      color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.22)", pos: "bottom-36 -left-8",delay: 0.7  },
  { icon: Target,     emoji: "🎯", title: "Personalised Plan",       sub: "Active & Running",    color: "#7B2FF7", bg: "rgba(123,47,247,0.09)",border: "rgba(123,47,247,0.22)", pos: "bottom-32 -right-6",delay: 1   },
  { icon: BookOpen,   emoji: "📚", title: "Homework Completed",      sub: "3 tasks this week",   color: "#7B2FF7", bg: "rgba(248,120,8,0.09)", border: "rgba(248,120,8,0.22)", pos: "top-1/2 -right-8", delay: 1.3  },
];

const microStats = [
  { value: "5,000+",  label: "Students Learning",  color: "#7B2FF7", bg: "rgba(123,47,247,0.08)",  border: "rgba(123,47,247,0.18)"  },
  { value: "1,200+",  label: "Verified Tutors",     color: "#7B2FF7", bg: "rgba(248,120,8,0.08)", border: "rgba(248,120,8,0.18)" },
  { value: "50,000+", label: "Learning Sessions",   color: "#7B2FF7", bg: "rgba(123,47,247,0.08)", border: "rgba(123,47,247,0.18)" },
  { value: "4.8★",    label: "Parent Rating",       color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.18)" },
];

/* ─────────────────────────────────────────────
   HERO VISUAL — premium dashboard mockup
───────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative w-full" style={{ minHeight: 500 }}>

      {/* Glow behind card */}
      <div className="absolute inset-4 rounded-[36px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,47,247,0.18) 0%, rgba(248,120,8,0.1) 50%, transparent 75%)", filter: "blur(40px)" }} />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative rounded-[28px] border overflow-hidden"
        style={{ background: "#fff", borderColor: "rgba(30,27,58,0.08)", boxShadow: "0 24px 80px rgba(30,27,58,0.12)" }}
      >
        {/* Top stripe */}
        <div className="h-[3px] bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7]" />

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center text-white text-sm font-bold shadow-md">AR</div>
              <div>
                <p className="text-sm font-bold text-[#1E1B3A]">Arjun Rao</p>
                <p className="text-xs text-[#94A3B8]">CBSE Class 9 · Mumbai</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#7B2FF7]"
              style={{ background: "rgba(248,120,8,0.09)", border: "1px solid rgba(248,120,8,0.22)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] animate-pulse" />
              Live Session
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { v: "89%",  l: "Avg Score",  c: "#7B2FF7", bg: "rgba(123,47,247,0.07)",  ch: "↑ +24%" },
              { v: "96%",  l: "Attendance", c: "#7B2FF7", bg: "rgba(248,120,8,0.07)", ch: "↑ Great" },
              { v: "4.9★", l: "Tutor",      c: "#F59E0B", bg: "rgba(245,158,11,0.07)", ch: "Top 5%" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl p-3 text-center"
                style={{ background: s.bg, border: `1px solid ${s.c}20` }}>
                <p className="text-lg font-black leading-none mb-0.5" style={{ color: s.c }}>{s.v}</p>
                <p className="text-[9px] font-semibold text-[#94A3B8] uppercase tracking-wider">{s.l}</p>
                <p className="text-[9px] font-bold mt-0.5" style={{ color: s.c }}>{s.ch}</p>
              </div>
            ))}
          </div>

          {/* Subject progress */}
          <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">Subject Progress</p>
          <div className="flex flex-col gap-2.5 mb-5">
            {[
              { label: "Mathematics", val: 89, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
              { label: "Science",     val: 87, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
              { label: "English",     val: 92, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
            ].map((bar) => (
              <div key={bar.label} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#6E6A85] w-24 shrink-0">{bar.label}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(30,27,58,0.06)" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: 999, background: bar.grad }}
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.val}%` }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  />
                </div>
                <span className="text-xs font-bold w-8 text-right" style={{ color: bar.color }}>{bar.val}%</span>
              </div>
            ))}
          </div>

          {/* Tutor + AI row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border p-3.5" style={{ background: "#FAFAFC", borderColor: "rgba(30,27,58,0.07)" }}>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white text-[10px] font-bold mb-2 shadow-sm">RK</div>
              <p className="text-xs font-bold text-[#1E1B3A]">Rahul Kumar</p>
              <p className="text-[10px] text-[#94A3B8]">Maths Tutor · Verified</p>
            </div>
            <div className="rounded-2xl border p-3.5"
              style={{ background: "linear-gradient(135deg,rgba(123,47,247,0.06),rgba(123,47,247,0.06))", borderColor: "rgba(123,47,247,0.18)" }}>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center text-white text-sm mb-2 shadow-sm">✦</div>
              <p className="text-[9px] font-black uppercase tracking-widest text-[#7B2FF7]">AI Insight</p>
              <p className="text-[11px] font-semibold text-[#1E1B3A] leading-snug">27% growth in 6 weeks</p>
            </div>
          </div>

          {/* Notification strip */}
          <div className="mt-4 flex flex-col gap-1.5">
            {[
              { dot: "#7B2FF7", text: "Homework submitted — Algebra Ch. 7", time: "2m" },
              { dot: "#7B2FF7", text: "Weekly report ready to view",         time: "1h" },
            ].map((n, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.15 }}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                style={{ background: "rgba(30,27,58,0.03)", border: "1px solid rgba(30,27,58,0.05)" }}>
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: n.dot }} />
                <span className="text-[11px] text-[#1E1B3A] font-medium flex-1">{n.text}</span>
                <span className="text-[10px] text-[#94A3B8]">{n.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Floating cards ── */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.title}
          className={`absolute ${card.pos} z-20 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl`}
          style={{ background: "rgba(255,255,255,0.94)", border: `1px solid ${card.border}`, backdropFilter: "blur(16px)", boxShadow: `0 8px 28px ${card.color}20` }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5 + card.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04, y: -2 }}
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-sm"
            style={{ background: card.bg, border: `1px solid ${card.border}` }}>
            {card.emoji}
          </div>
          <div>
            <p className="text-xs font-bold text-[#1E1B3A] leading-none mb-0.5">{card.title}</p>
            <p className="text-[10px] font-semibold" style={{ color: card.color }}>{card.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function HowItWorksHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#FAFAFC] pt-24 pb-20">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: yOrb }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          animate={{ opacity: [0.2, 0.32, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(123,47,247,0.1) 0%, rgba(248,120,8,0.07) 50%, transparent 72%)", filter: "blur(60px)" }} />
        </motion.div>
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(123,47,247,0.13), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 -left-24 w-[450px] h-[380px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(248,120,8,0.13), transparent 70%)", filter: "blur(60px)" }} />
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(30,27,58,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,58,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {/* Particles */}
        {[...Array(14)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 2, height: 2, background: i % 3 === 0 ? "#7B2FF7" : i % 3 === 1 ? "#7B2FF7" : "#7B2FF7", left: `${(i * 15 + 5) % 96}%`, top: `${(i * 11 + 4) % 80}%`, opacity: 0.35 }}
            animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ════════════════════════════════════
              LEFT — CONTENT
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-8"
              style={{ background: "rgba(248,120,8,0.08)", borderColor: "rgba(248,120,8,0.3)", backdropFilter: "blur(12px)", boxShadow: "0 0 24px rgba(248,120,8,0.1)" }}
            >
              <Zap className="w-4 h-4 text-[#7B2FF7]" />
              <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">How Tutoo Works</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] animate-pulse" />
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0A1028] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              From Assessment to
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
                  Academic Success
                </span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #7B2FF7, #7B2FF7, #7B2FF7)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </h1>

            <p className="text-base font-semibold text-[#1E1B3A] mb-2">
              A Smart, Secure &amp; Personalised Learning Journey
            </p>

            <p className="text-lg leading-8 text-[#6E6A85] max-w-lg mb-9">
              Discover how our AI-powered platform helps students, parents, and tutors achieve better learning outcomes through verified tutors, personalised learning plans, progress tracking, and measurable academic growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-bold shadow-xl shadow-[#EA580C]/20 hover:scale-[1.02] hover:shadow-[#7B2FF7]/30 transition-all duration-300 flex items-center gap-2 text-sm">
                Book Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="h-14 px-8 rounded-2xl border font-semibold text-[#7B2FF7] text-sm hover:border-[#7B2FF7] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(30,27,58,0.12)", backdropFilter: "blur(10px)" }}>
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              {trustChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-semibold cursor-default transition-all duration-250 hover:scale-105"
                  style={{ color: chip.color, background: chip.bg, borderColor: chip.border }}
                >
                  <chip.icon className="w-3.5 h-3.5" />
                  {chip.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — HERO VISUAL
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>

        </div>

        {/* ── Micro stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {microStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, boxShadow: `0 12px 32px ${stat.color}20` }}
              className="rounded-2xl border p-5 text-center cursor-default transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.88)", borderColor: stat.border, backdropFilter: "blur(12px)", boxShadow: `0 2px 12px ${stat.color}10` }}
            >
              <p className="text-2xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}