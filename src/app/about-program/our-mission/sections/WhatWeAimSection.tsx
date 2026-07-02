"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Globe,
  Handshake,
  ArrowRight,
  Sparkles,
  Quote,
  TrendingUp,
  ShieldCheck,
  Brain,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const visionCards = [
  {
    emoji: "📚",
    Icon: BookOpen,
    title: "Personalised Learning",
    desc: "Every student learns differently. We create customised experiences that adapt to individual strengths, learning styles, and academic goals — making education truly personal.",
    grad: "from-[#16C47F] to-[#2563EB]",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.18)",
    border: "rgba(22,196,127,0.2)",
    bg: "rgba(22,196,127,0.06)",
    size: "lg", // spans 2 cols
    accent: [
      { label: "Adaptive Plan",    icon: "✦" },
      { label: "Goal Tracking",    icon: "🎯" },
      { label: "Custom Schedule",  icon: "📅" },
    ],
  },
  {
    emoji: "🎓",
    Icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Helping students achieve stronger conceptual understanding, improved confidence, and better academic performance through structured, expert guidance.",
    grad: "from-[#2563EB] to-[#7C3AED]",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.18)",
    border: "rgba(37,99,235,0.2)",
    bg: "rgba(37,99,235,0.06)",
    size: "sm",
    accent: [],
  },
  {
    emoji: "🌍",
    Icon: Globe,
    title: "Accessible Education",
    desc: "Making quality education available to students everywhere through technology-enabled learning and rigorously verified educators.",
    grad: "from-[#7C3AED] to-[#16C47F]",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.18)",
    border: "rgba(124,58,237,0.2)",
    bg: "rgba(124,58,237,0.06)",
    size: "sm",
    accent: [],
  },
  {
    emoji: "🤝",
    Icon: Handshake,
    title: "Trusted Learning Community",
    desc: "Building meaningful relationships between students, parents, and tutors through full transparency, verified safety, and outcomes you can measure and trust.",
    grad: "from-[#F59E0B] to-[#16C47F]",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.2)",
    bg: "rgba(245,158,11,0.06)",
    size: "lg", // spans 2 cols
    accent: [
      { label: "Verified Tutors", icon: "✅" },
      { label: "Safety First",   icon: "🛡️" },
      { label: "Live Reports",   icon: "📊" },
    ],
  },
];

const ecosystemNodes = [
  { icon: "🎓", label: "Students",         color: "#2563EB", delay: 0,   angle: 0   },
  { icon: "👨‍🏫", label: "Tutors",           color: "#16C47F", delay: 0.1, angle: 60  },
  { icon: "👨‍👩‍👧", label: "Parents",          color: "#7C3AED", delay: 0.2, angle: 120 },
  { icon: "📈", label: "Progress",          color: "#F59E0B", delay: 0.3, angle: 180 },
  { icon: "🧠", label: "AI Support",        color: "#2563EB", delay: 0.4, angle: 240 },
  { icon: "🛡️", label: "Trust & Safety",    color: "#16C47F", delay: 0.5, angle: 300 },
];

const floatingStats = [
  { value: "5,000+", label: "Students",     color: "#2563EB", bg: "rgba(37,99,235,0.09)",  border: "rgba(37,99,235,0.2)"  },
  { value: "1,200+", label: "Verified Tutors", color: "#16C47F", bg: "rgba(22,196,127,0.09)", border: "rgba(22,196,127,0.2)" },
  { value: "50+",    label: "Cities",       color: "#7C3AED", bg: "rgba(124,58,237,0.09)", border: "rgba(124,58,237,0.2)" },
  { value: "4.8★",   label: "Satisfaction", color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.2)"  },
];

/* ─────────────────────────────────────────────
   VISION CARD
───────────────────────────────────────────── */
function VisionCard({ card, index }: { card: typeof visionCards[0]; index: number }) {
  const isLarge = card.size === "lg";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: `0 24px 60px ${card.glow}` }}
      className={`group relative rounded-3xl border overflow-hidden cursor-default transition-all duration-350 ${isLarge ? "md:col-span-2" : ""}`}
      style={{ background: "#fff", borderColor: card.border, boxShadow: `0 4px 20px ${card.glow}`, backdropFilter: "blur(16px)" }}
    >
      {/* Top gradient stripe */}
      <div className={`h-[3px] bg-gradient-to-r ${card.grad}`} />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${card.glow}, transparent 65%)` }} />

      {/* Shine sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)", transform: "translateX(-100%)" }}
        whileHover={{ transform: "translateX(200%)" }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />

      <div className={`relative z-10 p-7 ${isLarge ? "lg:p-9" : ""}`}>
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            {card.emoji}
          </div>
          {/* Arrow */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: card.bg, border: `1px solid ${card.border}` }}>
              <ArrowRight className="w-4 h-4" style={{ color: card.color }} />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-black text-[#0B1220] mb-3 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          {card.title}
        </h3>
        <p className="text-sm leading-7 text-[#64748B] mb-5">{card.desc}</p>

        {/* Accent chips — only on large cards */}
        {isLarge && card.accent.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {card.accent.map((a) => (
              <span key={a.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ color: card.color, background: card.bg, border: `1px solid ${card.border}` }}>
                <span>{a.icon}</span>{a.label}
              </span>
            ))}
          </div>
        )}

        {/* Mini graph for "Academic Excellence" */}
        {card.title === "Academic Excellence" && (
          <div className="mt-4 flex items-end gap-1 h-10">
            {[40, 55, 50, 70, 65, 82, 89].map((h, i) => (
              <motion.div key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex-1 rounded-t-sm origin-bottom"
                style={{ height: `${h}%`, background: `linear-gradient(to top, #2563EB, #7C3AED)`, opacity: 0.7 + i * 0.04 }}
              />
            ))}
          </div>
        )}

        {/* Globe dots for "Accessible Education" */}
        {card.title === "Accessible Education" && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Mumbai", "Delhi", "Pune", "Chennai", "Bengaluru", "Hyderabad"].map((city) => (
              <span key={city} className="text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ color: "#7C3AED", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
                {city}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ECOSYSTEM ORBITAL
───────────────────────────────────────────── */
function EcosystemOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const R = 130; // orbit radius

  return (
    <div ref={ref} className="relative w-[340px] h-[340px] mx-auto select-none">
      {/* Orbit rings */}
      {[1, 2].map((r) => (
        <motion.div key={r}
          className="absolute inset-0 rounded-full border"
          style={{ margin: `${r * 28}px`, borderColor: r === 1 ? "rgba(37,99,235,0.1)" : "rgba(22,196,127,0.08)" }}
          animate={{ rotate: r === 1 ? 360 : -360 }}
          transition={{ duration: 28 + r * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Centre node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-xl z-10"
        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", boxShadow: "0 8px 32px rgba(37,99,235,0.35)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-2xl">✦</span>
        <span className="text-[9px] font-black text-white tracking-widest uppercase mt-0.5">UberTutor</span>
      </motion.div>

      {/* Orbital nodes */}
      {ecosystemNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + (R / 170) * 50 * Math.cos(rad);
        const y = 50 + (R / 170) * 50 * Math.sin(rad);

        return (
          <motion.div key={node.label}
            className="absolute flex flex-col items-center gap-1 z-10"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + node.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md"
              style={{ background: `${node.color}14`, border: `1.5px solid ${node.color}30` }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              {node.icon}
            </motion.div>
            <span className="text-[9px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded-full"
              style={{ color: node.color, background: `${node.color}12`, border: `1px solid ${node.color}25` }}>
              {node.label}
            </span>

            {/* Animated connector line via SVG absolutely placed */}
            <svg className="absolute pointer-events-none" style={{ width: "200px", height: "200px", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: -1 }}>
              <motion.line
                x1="100" y1="100"
                x2={100 - (R / 170) * 50 * Math.cos(rad) * 2}
                y2={100 - (R / 170) * 50 * Math.sin(rad) * 2}
                stroke={node.color} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 3"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ delay: 0.5 + node.delay, duration: 0.8 }}
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function WhatWeAimSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* ── BG ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 2, height: 2, background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED", left: `${(i * 17 + 4) % 96}%`, top: `${(i * 13 + 6) % 88}%`, opacity: 0.3 }}
            animate={{ y: [0, -16, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.42, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-20">

          {/* Badge */}
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-8"
            style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.28)", backdropFilter: "blur(12px)", boxShadow: "0 0 24px rgba(22,196,127,0.1)" }}>
            <span className="text-sm">🚀</span>
            <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">Our Vision</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-7"
            style={{ fontFamily: "var(--font-heading)" }}>
            Building the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Future of Personalised
              </span>
              <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED)" }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </span>
            {" "}Education
          </h2>

          <p className="text-lg leading-8 text-[#64748B]">
            Our vision is to create a learning ecosystem where every student receives the right guidance, every tutor reaches the right learners, and every parent gains complete confidence in their child's educational journey.
          </p>
        </motion.div>

        {/* ── Bento vision cards grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {visionCards.map((card, i) => (
            <VisionCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* ── Ecosystem orbital + floating stats ── */}
        <div className="relative mb-20">
          {/* Floating stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {floatingStats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border p-5 text-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.9)", borderColor: stat.border, backdropFilter: "blur(12px)", boxShadow: `0 4px 16px ${stat.bg}` }}
              >
                <p className="text-2xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Ecosystem center visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative rounded-[32px] border overflow-hidden py-14"
            style={{ background: "linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.95))", borderColor: "rgba(15,23,42,0.07)", boxShadow: "0 8px 48px rgba(15,23,42,0.07)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

            <div className="text-center mb-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#94A3B8]">The Learning Ecosystem</p>
            </div>

            <EcosystemOrbit />

            <div className="text-center mt-6">
              <p className="text-sm text-[#64748B] font-medium max-w-sm mx-auto">
                UberTutor operates as the intelligent centre — connecting every stakeholder in one trusted platform.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Vision quote block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[32px] border overflow-hidden p-10 lg:p-16 text-center max-w-4xl mx-auto"
          style={{ background: "rgba(255,255,255,0.92)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(20px)", boxShadow: "0 16px 60px rgba(15,23,42,0.08)" }}
        >
          {/* Top stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

          {/* Corner glows */}
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.28), transparent 70%)", filter: "blur(28px)" }} />
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.28), transparent 70%)", filter: "blur(28px)" }} />

          <div className="relative z-10">
            {/* Quote icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Quote className="w-7 h-7 text-white" />
            </div>

            <blockquote className="text-2xl lg:text-3xl font-bold text-[#0B1220] leading-[1.55] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              "Our goal is not just to connect tutors with students.
              <br className="hidden lg:block" />
              Our goal is to create a learning ecosystem where{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                every student can achieve their full potential.
              </span>"
            </blockquote>

            {/* Divider */}
            <div className="w-16 h-0.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#16C47F] to-[#2563EB]" />

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">UT</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0F172A]">UberTutor</p>
                <p className="text-xs text-[#94A3B8]">Vision & Mission</p>
              </div>
            </div>

            {/* Bottom value chips */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {[
                { icon: TrendingUp, label: "Measurable Outcomes", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)" },
                { icon: ShieldCheck, label: "Verified & Safe",     color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)"  },
                { icon: Brain,      label: "AI-Powered Learning",  color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
                { icon: Users,      label: "Community Driven",     color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)"  },
              ].map((chip) => (
                <span key={chip.label} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border"
                  style={{ color: chip.color, background: chip.bg, borderColor: chip.border }}>
                  <chip.icon className="w-3.5 h-3.5" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}