"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Star,
  Quote,
  Heart,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Target,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const impactStats = [
  { icon: GraduationCap, value: "5,000+", label: "Students Empowered", color: "#2563EB", bg: "rgba(37,99,235,0.09)", border: "rgba(37,99,235,0.18)", glow: "rgba(37,99,235,0.12)", delay: 0 },
  { icon: Users,         value: "1,200+", label: "Verified Tutors",    color: "#16C47F", bg: "rgba(22,196,127,0.09)", border: "rgba(22,196,127,0.18)", glow: "rgba(22,196,127,0.12)", delay: 0.1 },
  { icon: BookOpen,      value: "50,000+",label: "Learning Sessions",  color: "#7C3AED", bg: "rgba(124,58,237,0.09)", border: "rgba(124,58,237,0.18)", glow: "rgba(124,58,237,0.12)", delay: 0.2 },
  { icon: Star,          value: "4.8/5",  label: "Parent Satisfaction",color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.18)", glow: "rgba(245,158,11,0.12)", delay: 0.3 },
];

const audience = [
  {
    icon: "🎓",
    title: "Students",
    desc: "Personalised learning that adapts to individual pace, style, and goals — building confidence with every session.",
    color: "#2563EB", bg: "rgba(37,99,235,0.07)", border: "rgba(37,99,235,0.15)",
    grad: "from-[#2563EB] to-[#7C3AED]",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parents",
    desc: "Full transparency, verified safety, real-time progress tracking, and measurable academic improvement you can see.",
    color: "#16C47F", bg: "rgba(22,196,127,0.07)", border: "rgba(22,196,127,0.15)",
    grad: "from-[#16C47F] to-[#2563EB]",
  },
  {
    icon: "👨‍🏫",
    title: "Tutors",
    desc: "Professional growth opportunities, cutting-edge teaching tools, fair earnings, and a platform built to support educators.",
    color: "#7C3AED", bg: "rgba(124,58,237,0.07)", border: "rgba(124,58,237,0.15)",
    grad: "from-[#7C3AED] to-[#2563EB]",
  },
];

const values = [
  { icon: Heart,       label: "Student First",        color: "#EF4444" },
  { icon: ShieldCheck, label: "Trust & Safety",        color: "#16C47F" },
  { icon: TrendingUp,  label: "Measurable Growth",     color: "#2563EB" },
  { icon: Sparkles,    label: "AI-Powered Learning",   color: "#7C3AED" },
  { icon: Target,      label: "Personalised Outcomes", color: "#F59E0B" },
  { icon: Users,       label: "Community Driven",      color: "#16C47F" },
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function OurMissionSection() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div ref={sectionRef} className="bg-[#F8FAFC] overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-24 pb-20 overflow-hidden">

        {/* ── BG atmosphere ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Parallax orbs */}
          <motion.div style={{ y: yOrb1 }}
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
            animate={{ opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            css-trick="true"
          >
            <div className="w-full h-full rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, rgba(22,196,127,0.07) 50%, transparent 75%)", filter: "blur(60px)" }} />
          </motion.div>

          <motion.div style={{ y: yOrb2, background: "radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)", filter: "blur(70px)" }}
            className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-25"
          />

          <div className="absolute bottom-0 -left-24 w-[450px] h-[380px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.14), transparent 70%)", filter: "blur(60px)" }} />

          {/* Grid texture */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />

          {/* Floating particles */}
          {[...Array(16)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
                background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED",
                left: `${(i * 15 + 5) % 96}%`, top: `${(i * 11 + 4) % 85}%`, opacity: 0.35,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.2, 0.65, 0.2] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.38, ease: "easeInOut" }}
            />
          ))}

          {/* Subtle network dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div key={`net-${i}`}
              className="absolute rounded-full border"
              style={{
                width: 120 + i * 30, height: 120 + i * 30,
                left: `${[10, 75, 40, 85, 5, 60][i]}%`, top: `${[15, 10, 70, 55, 60, 30][i]}%`,
                borderColor: i % 2 === 0 ? "rgba(37,99,235,0.05)" : "rgba(22,196,127,0.05)",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="flex justify-center mb-9">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
              style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.3)", backdropFilter: "blur(12px)", boxShadow: "0 0 24px rgba(22,196,127,0.1)" }}
            >
              <Target className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">Our Mission</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-7xl font-black leading-[1.06] tracking-tight text-[#0B1220] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Making{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Quality Education
              </span>
              <motion.span
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                style={{ background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
            <br />Accessible to{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
              Every Student
            </span>
          </motion.h1>

          {/* Mission description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="max-w-3xl mx-auto mb-14"
          >
            <p className="text-xl leading-9 text-[#334155] mb-5">
              At UberTutor, we believe that every student deserves personalised learning support, expert guidance, and the opportunity to achieve their full academic potential.
            </p>
            <p className="text-lg leading-8 text-[#64748B]">
              Our mission is to bridge the gap between students and quality education through technology, verified educators, and personalised learning experiences that create measurable outcomes.
            </p>
          </motion.div>

          {/* Values chips row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-2.5 mb-16"
          >
            {values.map((v, i) => (
              <motion.div key={v.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.38 + i * 0.07 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold"
                style={{ color: v.color, background: `${v.color}10`, borderColor: `${v.color}28`, backdropFilter: "blur(8px)" }}
              >
                <v.icon className="w-3.5 h-3.5" />
                {v.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Impact stat cards ── */}
        <div ref={statsRef} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: stat.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${stat.glow}` }}
                className="group rounded-3xl border p-7 text-center cursor-default transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.88)", borderColor: stat.border, backdropFilter: "blur(16px)", boxShadow: `0 4px 20px ${stat.glow}` }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-md"
                  style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </motion.div>
                <p className="text-3xl font-black mb-1.5" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-sm font-semibold text-[#64748B]">{stat.label}</p>
                <div className="mt-4 h-0.5 w-8 mx-auto rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ background: `linear-gradient(90deg, ${stat.color}, #2563EB)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION STATEMENT CENTERPIECE
      ══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative rounded-[32px] border overflow-hidden p-10 lg:p-14 text-center"
            style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(20px)", boxShadow: "0 16px 60px rgba(15,23,42,0.09)" }}
          >
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

            {/* Corner glows */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, rgba(22,196,127,0.3), transparent 70%)", filter: "blur(30px)" }} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)", filter: "blur(30px)" }} />

            {/* Quote icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Quote className="w-7 h-7 text-white" />
            </div>

            <blockquote className="text-2xl lg:text-3xl font-bold text-[#0B1220] leading-[1.5] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              "We don't just connect students with tutors.
              <br />
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                We build personalised learning journeys
              </span>{" "}
              that help every student grow with confidence."
            </blockquote>

            <div className="flex items-center justify-center gap-3 pt-6 border-t border-[rgba(15,23,42,0.06)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">UT</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0F172A]">UberTutor Team</p>
                <p className="text-xs text-[#94A3B8]">Education for Every Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISUAL STORY — JOURNEY DIAGRAM
      ══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}>
              The UberTutor{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-xl mx-auto">Every student's path from struggle to success — guided by technology and human expertise.</p>
          </motion.div>

          {/* Journey steps */}
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line desktop */}
            <div className="absolute top-12 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-[2px] hidden md:block"
              style={{ background: "linear-gradient(90deg, #2563EB, #16C47F, #7C3AED)" }} />

            {[
              { emoji: "🎓", step: "01", title: "Student", subtitle: "Needs Support", desc: "A student struggling with concepts, exams, or confidence reaches out for help.", color: "#2563EB", bg: "rgba(37,99,235,0.07)", border: "rgba(37,99,235,0.15)" },
              { emoji: "✦",  step: "02", title: "UberTutor", subtitle: "AI Matching", desc: "Our platform matches the student with a verified, compatible, expert tutor within 24 hours.", color: "#16C47F", bg: "rgba(22,196,127,0.07)", border: "rgba(22,196,127,0.15)" },
              { emoji: "🏆", step: "03", title: "Success", subtitle: "Measurable Growth", desc: "The student achieves higher scores, stronger confidence, and a lifelong love for learning.", color: "#7C3AED", bg: "rgba(124,58,237,0.07)", border: "rgba(124,58,237,0.15)" },
            ].map((item, i) => (
              <motion.div key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative rounded-3xl border p-7 text-center transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.88)", borderColor: item.border, backdropFilter: "blur(12px)", boxShadow: `0 4px 20px ${item.color}12` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg z-10"
                  style={{ background: `linear-gradient(135deg, ${item.color}, #2563EB)` }}>
                  {item.step}
                </div>
                <div className="text-4xl mb-5 mt-2">{item.emoji}</div>
                <h3 className="text-xl font-black text-[#0B1220] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.color }}>{item.subtitle}</p>
                <p className="text-sm leading-relaxed text-[#64748B]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BUILT FOR — TRUST SECTION (dark)
      ══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#0B1220" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.2), transparent 70%)", filter: "blur(70px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(70px)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.18), transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.25)" }}>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-semibold text-[#16C47F]">Built For Everyone</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}>
              Built for Students,{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                Parents & Tutors
              </span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-xl mx-auto">
              One platform. Three communities. One shared mission — better education for every child.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {audience.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: `0 12px 40px ${item.color}22` }}
                className="rounded-3xl border p-8 cursor-default transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: item.border, backdropFilter: "blur(16px)" }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.grad} flex items-center justify-center text-3xl mb-6 shadow-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-sm leading-8 text-[#94A3B8]">{item.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold" style={{ color: item.color }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-heading)" }}>
              Join the{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-[#64748B] leading-8 mb-10 max-w-xl mx-auto">
              Whether you're a parent seeking the best for your child, a student ready to grow, or a tutor wanting to make an impact — UberTutor is built for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group h-14 px-9 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold shadow-xl shadow-[#16C47F]/20 hover:scale-[1.02] hover:shadow-[#2563EB]/30 transition-all duration-300 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="h-14 px-9 rounded-2xl border font-semibold text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.12)", backdropFilter: "blur(10px)" }}>
                Learn About Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}