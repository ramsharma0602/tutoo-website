"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  User,
  School,
  BookOpen,
  MapPin,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const infoCards = [
  { icon: User,      emoji: "👤", title: "Student Name",      desc: "Create a personalised student profile.",                    color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)",  grad: "from-[#2563EB] to-[#7C3AED]" },
  { icon: School,    emoji: "🏫", title: "Class / Grade",     desc: "Understand the correct academic level.",                   color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#2563EB]" },
  { icon: Layers,    emoji: "📖", title: "Board",             desc: "CBSE · ICSE · SSC · State · IB · IGCSE",                   color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", grad: "from-[#7C3AED] to-[#2563EB]" },
  { icon: BookOpen,  emoji: "📚", title: "Subjects Required", desc: "Identify every learning need across subjects.",             color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)",  grad: "from-[#2563EB] to-[#16C47F]" },
  { icon: MapPin,    emoji: "📍", title: "Location",          desc: "Find nearby home tutors or online session options.",        color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", grad: "from-[#F59E0B] to-[#EF4444]" },
  { icon: Target,    emoji: "🎯", title: "Learning Goals",    desc: "Define academic objectives, targets, and expectations.",    color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#7C3AED]" },
];

const floatingCards = [
  { emoji: "🎓", title: "Student Profile",   sub: "Created Successfully", color: "#16C47F", border: "rgba(22,196,127,0.25)", pos: "-top-5 -right-4",    delay: 0.3  },
  { emoji: "📚", title: "Subjects Selected", sub: "Mathematics, Science",  color: "#2563EB", border: "rgba(37,99,235,0.25)",  pos: "top-1/3 -left-8",   delay: 0.55 },
  { emoji: "🎯", title: "Learning Goals",    sub: "3 Goals Added",         color: "#7C3AED", border: "rgba(124,58,237,0.25)", pos: "bottom-28 -right-6", delay: 0.8  },
  { emoji: "📍", title: "Location Verified", sub: "Ready for Matching",    color: "#F59E0B", border: "rgba(245,158,11,0.25)", pos: "-bottom-4 left-6",   delay: 1.05 },
];

const progressSteps = [
  { label: "Register",    active: true  },
  { label: "Assessment",  active: false },
  { label: "Match",       active: false },
  { label: "Session",     active: false },
  { label: "Track",       active: false },
];

/* ─────────────────────────────────────────────
   ILLUSTRATION PANEL
───────────────────────────────────────────── */
function IllustrationPanel() {
  return (
    <div className="relative w-full h-full" style={{ minHeight: 560 }}>

      {/* Outer glow */}
      <div className="absolute inset-6 rounded-[40px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(22,196,127,0.12), rgba(37,99,235,0.08), transparent 70%)", filter: "blur(40px)" }} />

      {/* Main visual card — premium registration UI mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative rounded-[28px] border overflow-hidden"
        style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 24px 80px rgba(15,23,42,0.11)" }}
      >
        {/* Stripe */}
        <div className="h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

        <div className="p-6">
          {/* App header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-black text-[#0B1220]">UberTutor</span>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-[#16C47F]"
              style={{ background: "rgba(22,196,127,0.09)", border: "1px solid rgba(22,196,127,0.22)" }}>
              Step 1 of 5
            </span>
          </div>

          {/* Form heading */}
          <p className="text-xs font-black uppercase tracking-widest text-[#94A3B8] mb-1">Student Registration</p>
          <h4 className="text-lg font-black text-[#0B1220] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
            Tell us about your child
          </h4>

          {/* Fake form fields */}
          <div className="flex flex-col gap-3 mb-5">
            {[
              { label: "Student Full Name",  val: "Arjun Rao",          icon: "👤", done: true  },
              { label: "Class / Grade",      val: "Class 9",             icon: "🏫", done: true  },
              { label: "Board",              val: "CBSE",                icon: "📖", done: true  },
              { label: "City / Location",    val: "Mumbai, Maharashtra", icon: "📍", done: true  },
              { label: "Subjects Required",  val: "Maths, Science, Eng", icon: "📚", done: true  },
              { label: "Learning Goal",      val: "Improve 20% this term",icon: "🎯",done: false },
            ].map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl border px-4 py-3"
                style={{
                  background: field.done ? "rgba(22,196,127,0.04)" : "#F8FAFC",
                  borderColor: field.done ? "rgba(22,196,127,0.2)" : "rgba(15,23,42,0.08)",
                }}
              >
                <span className="text-base shrink-0">{field.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider leading-none mb-0.5">{field.label}</p>
                  <p className="text-xs font-bold text-[#0F172A] truncate">{field.val}</p>
                </div>
                {field.done
                  ? <CheckCircle2 className="w-4 h-4 text-[#16C47F] shrink-0" />
                  : <div className="w-4 h-4 rounded-full border-2 border-[#CBD5E1] shrink-0" />
                }
              </motion.div>
            ))}
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white text-sm font-bold shadow-lg shadow-[#16C47F]/20 flex items-center justify-center gap-2"
          >
            Complete Registration
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Trust note */}
          <p className="text-center text-[10px] text-[#94A3B8] mt-3 font-medium">
            🔒 Your data is encrypted and never shared
          </p>
        </div>
      </motion.div>

      {/* ── Floating widget chips ── */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.title}
          className={`absolute ${card.pos} z-20 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl`}
          style={{ background: "rgba(255,255,255,0.96)", border: `1px solid ${card.border}`, backdropFilter: "blur(16px)", boxShadow: `0 8px 28px ${card.color}22` }}
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: card.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          animate={{ y: [0, -6 - i * 1.5, 0] }}
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
            style={{ background: `${card.color}14`, border: `1px solid ${card.color}28` }}>
            {card.emoji}
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F172A] leading-none mb-0.5">{card.title}</p>
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
export function Step01Registration() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVisible = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* ── BG ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(22,196,127,0.1), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 items-center">

          {/* ════════════════════════════════
              LEFT — ILLUSTRATION
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <IllustrationPanel />
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — CONTENT
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Step badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.28)", backdropFilter: "blur(10px)" }}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center text-white text-[9px] font-black shadow-sm">1</div>
              <span className="text-xs font-black tracking-widest text-[#059669] uppercase">Step 01</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              Parent{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                  Registers Student
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #16C47F, #2563EB)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>

            {/* Description */}
            <div className="flex flex-col gap-4 mb-9">
              {[
                "Parents provide basic academic details to help UberTutor understand the student's learning needs, academic goals, preferred subjects, and educational requirements.",
                "This information helps us create a personalised learning experience and match students with the most suitable verified tutors.",
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

            {/* Info collected heading */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Information We Collect</p>
              <div className="flex-1 h-px bg-gradient-to-r from-[rgba(37,99,235,0.2)] to-transparent" />
            </div>

            {/* Info cards grid */}
            <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18, scale: 0.95 }}
                  animate={gridVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, boxShadow: `0 12px 32px ${card.color}22` }}
                  className="group relative rounded-2xl border p-4 cursor-default transition-all duration-300 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.9)", borderColor: card.border, backdropFilter: "blur(10px)", boxShadow: `0 2px 12px ${card.color}10` }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 20% 10%, ${card.color}14, transparent 65%)` }} />

                  <div className={`relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-xl mb-3 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {card.emoji}
                  </div>
                  <p className="relative z-10 text-xs font-black text-[#0B1220] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</p>
                  <p className="relative z-10 text-[10px] leading-relaxed text-[#64748B]">{card.desc}</p>

                  {/* Bottom accent line */}
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
              style={{ background: "rgba(22,196,127,0.06)", borderColor: "rgba(22,196,127,0.2)", backdropFilter: "blur(10px)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                Your information is secure and used only to create the best learning experience for your child.
              </p>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-0 mb-3">
                {progressSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    {/* Node */}
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm transition-all duration-300 ${s.active ? "scale-110" : ""}`}
                        style={s.active
                          ? { background: "linear-gradient(135deg, #16C47F, #2563EB)", color: "#fff", boxShadow: "0 0 12px rgba(22,196,127,0.4)" }
                          : { background: "rgba(15,23,42,0.06)", color: "#94A3B8" }}>
                        {s.active ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                      </div>
                    </div>
                    {/* Connector */}
                    {i < progressSteps.length - 1 && (
                      <div className="w-10 h-[2px] mx-1 rounded-full"
                        style={{ background: i === 0 ? "linear-gradient(90deg, #16C47F, rgba(15,23,42,0.1))" : "rgba(15,23,42,0.08)" }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />
                <p className="text-xs font-bold text-[#16C47F]">Registration Completed · Step 1 of 5</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}