"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Rocket,
  Brain,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  Quote,
  GraduationCap,
  Lightbulb,
  Handshake,
  CheckCircle2,
  Zap,
  Star,
  TrendingUp,
  Eye,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const ROADMAP = [
  {
    year: "2026",
    icon: Rocket,
    emoji: "🚀",
    title: "Nationwide Learning Access",
    desc: "Home and online tuition rolled out across every major city and town, removing distance as a barrier to quality education.",
    from: "#16C47F",
    to: "#2563EB",
    glow: "rgba(22,196,127,0.30)",
    tag: "In Progress",
    tagColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    delay: 0.1,
  },
  {
    year: "2027",
    icon: Brain,
    emoji: "🧠",
    title: "AI-Powered Learning Support",
    desc: "Personalized learning recommendations, gap analysis, and real-time academic insights tailored to every student's unique journey.",
    from: "#2563EB",
    to: "#7C3AED",
    glow: "rgba(37,99,235,0.28)",
    tag: "Coming Soon",
    tagColor: "text-blue-600 bg-blue-50 border-blue-200",
    delay: 0.2,
  },
  {
    year: "2028",
    icon: BarChart3,
    emoji: "📊",
    title: "Real-Time Academic Intelligence",
    desc: "Advanced student progress dashboards with predictive performance analytics — giving parents and tutors a complete academic picture.",
    from: "#7C3AED",
    to: "#2563EB",
    glow: "rgba(124,58,237,0.28)",
    tag: "Roadmap",
    tagColor: "text-purple-600 bg-purple-50 border-purple-200",
    delay: 0.3,
  },
  {
    year: "2030",
    icon: Globe,
    emoji: "🌎",
    title: "Learning Without Boundaries",
    desc: "Connecting students and world-class educators beyond geography — a truly borderless learning ecosystem for every learner.",
    from: "#16C47F",
    to: "#7C3AED",
    glow: "rgba(22,196,127,0.28)",
    tag: "Vision",
    tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    delay: 0.4,
  },
];

const PILLARS = [
  {
    emoji: "🌍",
    icon: Globe,
    title: "Accessibility",
    desc: "Making quality education available to every student, everywhere — regardless of location or background.",
    from: "#16C47F",
    to: "#2563EB",
    delay: 0.1,
  },
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Excellence",
    desc: "Delivering measurable, visible academic outcomes that families can see and students can feel.",
    from: "#2563EB",
    to: "#7C3AED",
    delay: 0.2,
  },
  {
    emoji: "💡",
    icon: Lightbulb,
    title: "Innovation",
    desc: "Using smart technology and modern teaching methodologies to continuously improve every learning experience.",
    from: "#7C3AED",
    to: "#F59E0B",
    delay: 0.3,
  },
  {
    emoji: "🤝",
    icon: Handshake,
    title: "Trust",
    desc: "Building lasting confidence through radical transparency, verified educators, and open communication.",
    from: "#F59E0B",
    to: "#16C47F",
    delay: 0.4,
  },
];

// ─────────────────────────────────────────────
// ANIMATED CONNECTOR
// ─────────────────────────────────────────────

function RoadmapConnector({ from, to }: { from: string; to: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0 relative z-10">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full h-[2px] origin-left"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      >
        {/* Travelling glow dot */}
        <motion.div
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-lg"
          style={{ background: to, boxShadow: `0 0 10px ${to}` }}
        />
      </motion.div>
      {/* Arrowhead */}
      <div className="absolute right-0 w-0 h-0"
        style={{ borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `8px solid ${to}` }} />
    </div>
  );
}

// ─────────────────────────────────────────────
// ROADMAP CARD
// ─────────────────────────────────────────────

function RoadmapCard({ card, idx }: { card: typeof ROADMAP[0]; idx: number }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: card.delay }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative flex-1 rounded-3xl bg-white backdrop-blur-xl overflow-hidden
                 border border-[rgba(15,23,42,0.07)]
                 shadow-[0_6px_32px_rgba(15,23,42,0.07)]
                 hover:shadow-[0_24px_56px_rgba(15,23,42,0.12)]
                 transition-all duration-500 p-7 cursor-default"
    >
      {/* Mesh bg on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(ellipse 90% 60% at 50% 0%, ${card.from}10, transparent 70%)` }} />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
        style={{ background: "linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.38) 50%, transparent 62%)" }}
      />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `0 0 0 1.5px ${card.from}35, 0 0 32px ${card.glow}` }} />

      <div className="relative z-10">
        {/* Year badge + tag */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-3xl font-black"
            style={{
              background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-heading, 'Clash Display', sans-serif)",
            }}
          >
            {card.year}
          </span>
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${card.tagColor}`}>
            {card.tag}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
          style={{ background: `linear-gradient(135deg, ${card.from}, ${card.to})` }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Title */}
        <h3
          className="text-lg font-black text-[#0F172A] mb-3"
          style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
        >
          {card.emoji} {card.title}
        </h3>

        {/* Desc */}
        <p className="text-sm leading-7 text-[#64748B]">{card.desc}</p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }} />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PILLAR CARD
// ─────────────────────────────────────────────

function PillarCard({ p }: { p: typeof PILLARS[0] }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: p.delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl
                 border border-[rgba(15,23,42,0.07)]
                 shadow-[0_4px_28px_rgba(15,23,42,0.06)]
                 hover:shadow-[0_20px_56px_rgba(15,23,42,0.10)]
                 transition-all duration-400 p-8 cursor-default"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${p.from}10, transparent 70%)` }} />

      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${p.from}, ${p.to})` }} />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6"
          style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-black text-[#0F172A] mb-3"
          style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
          {p.emoji} {p.title}
        </h3>
        <p className="text-sm leading-7 text-[#64748B]">{p.desc}</p>
        <div className="mt-6 flex items-center gap-2" style={{ color: p.from }}>
          <span className="text-xs font-black">Core Pillar</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// FLOATING PARTICLES
// ─────────────────────────────────────────────

function Particles() {
  const dots = [
    { x: 8, y: 15, c: "#16C47F", s: 6, d: 0 },
    { x: 92, y: 22, c: "#2563EB", s: 8, d: 0.5 },
    { x: 18, y: 75, c: "#7C3AED", s: 5, d: 1 },
    { x: 85, y: 68, c: "#F59E0B", s: 7, d: 0.3 },
    { x: 50, y: 5,  c: "#16C47F", s: 4, d: 0.8 },
    { x: 72, y: 90, c: "#2563EB", s: 6, d: 1.2 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -14, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5 + d.d, repeat: Infinity, ease: "easeInOut", delay: d.d }}
          className="absolute rounded-full"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.s, height: d.s, background: d.c }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const quoteY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-white"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Particles />
        <motion.div style={{ y: bgY, background: "radial-gradient(circle, #16C47F, transparent 70%)" }}
          className="absolute -top-52 -left-52 w-[720px] h-[720px] rounded-full blur-[130px] opacity-[0.12]"
        />
        <div className="absolute -bottom-44 -right-44 w-[660px] h-[660px] rounded-full blur-[120px] opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full blur-[100px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Diagonal accent lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="visionLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16C47F" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,0 Q400,200 800,100 T1600,200" stroke="url(#visionLine)" strokeWidth="1.5" fill="none" />
          <path d="M0,800 Q500,600 1000,700 T1600,600" stroke="url(#visionLine)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-9"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-white/90 backdrop-blur-xl
                         border border-[#2563EB]/25
                         shadow-[0_0_28px_rgba(37,99,235,0.18)]"
            >
              <span className="text-base">🔮</span>
              <span className="text-sm font-black tracking-widest uppercase text-[#2563EB]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                Our Vision
              </span>
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl lg:text-[64px] font-black leading-[1.04] tracking-tight text-[#0B1220] mb-7"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
          >
            Building the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                               drop-shadow-[0_0_44px_rgba(22,196,127,0.25)]">
                Future of Personalized
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#16C47F] bg-clip-text text-transparent
                               drop-shadow-[0_0_44px_rgba(37,99,235,0.25)]">
                Education
              </span>
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
            Our vision is to create a world where every student receives personalized academic
            guidance, every tutor has access to meaningful opportunities, and every parent has
            complete visibility into learning outcomes.
          </motion.p>
        </div>

        {/* ── FEATURED VISION QUOTE ── */}
        <motion.div
          style={{ y: quoteY }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-[40px] overflow-hidden py-16 px-10 lg:px-20 text-center"
            style={{
              background: "linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 40%, #FAF5FF 80%, #FFF7ED 100%)",
              border: "1.5px solid rgba(22,196,127,0.18)",
              boxShadow: "0 24px 80px rgba(22,196,127,0.10), 0 0 0 1px rgba(37,99,235,0.06)",
            }}
          >
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#16C47F]/08 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#2563EB]/08 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#7C3AED]/04 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Giant quote icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-xl mb-10">
                <Quote className="w-8 h-8 text-white" />
              </div>

              <p
                className="text-3xl lg:text-5xl font-black text-[#0B1220] leading-tight max-w-4xl mx-auto"
                style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
              >
                "A future where quality education is available to{" "}
                <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  every learner,
                </span>{" "}
                anytime, anywhere."
              </p>

              {/* Proof chips */}
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {[
                  { text: "5,000+ Students", c: "#16C47F" },
                  { text: "1,200+ Tutors", c: "#2563EB" },
                  { text: "50+ Cities", c: "#7C3AED" },
                  { text: "4.8★ Satisfaction", c: "#F59E0B" },
                ].map((chip) => (
                  <motion.span
                    key={chip.text}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="inline-flex items-center gap-1.5 text-xs font-black px-4 py-2 rounded-full border"
                    style={{ color: chip.c, background: `${chip.c}10`, borderColor: `${chip.c}28` }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full" style={{ background: chip.c }}
                    />
                    {chip.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ROADMAP ── */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black tracking-widest uppercase text-[#64748B] mb-3">
              The journey ahead
            </p>
            <h3
              className="text-3xl lg:text-4xl font-black text-[#0B1220]"
              style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                Future Roadmap
              </span>
            </h3>
          </motion.div>

          {/* Progress bar above cards */}
          <div className="hidden lg:block mb-6 px-4">
            <div className="relative h-1.5 rounded-full bg-[#F1F5F9] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED, #16C47F)" }}
              />
              {/* Year milestones */}
              {[0, 33.3, 66.6, 100].map((pct, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md"
                  style={{
                    left: `${pct}%`,
                    transform: `translateX(-50%) translateY(-50%)`,
                    background: ["#16C47F","#2563EB","#7C3AED","#16C47F"][i],
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 px-0">
              {["2026", "2027", "2028", "2030"].map((y) => (
                <span key={y} className="text-xs font-black text-[#64748B]">{y}</span>
              ))}
            </div>
          </div>

          {/* Cards + connectors */}
          <div className="flex flex-col lg:flex-row items-stretch gap-0">
            {ROADMAP.map((card, i) => (
              <div key={card.year} className="flex flex-col lg:flex-row items-stretch flex-1">
                <RoadmapCard card={card} idx={i} />
                {i < ROADMAP.length - 1 && (
                  <RoadmapConnector from={ROADMAP[i].to} to={ROADMAP[i + 1].from} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── VISION PILLARS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 mt-20"
        >
          <p className="text-xs font-black tracking-widest uppercase text-[#64748B] mb-3">
            What we stand on
          </p>
          <h3
            className="text-3xl lg:text-4xl font-black text-[#0B1220]"
            style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
          >
            Four{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Vision Pillars
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PILLARS.map((p) => <PillarCard key={p.title} p={p} />)}
        </div>

        {/* ── FINAL VISION BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="rounded-[40px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 32px 100px rgba(11,18,32,0.30)",
          }}
        >
          {/* Glow layers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-72 bg-[#16C47F]/12 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-64 bg-[#2563EB]/12 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-[#7C3AED]/06 rounded-full blur-3xl" />
          </div>

          {/* Star field */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2.5 + (i % 4) * 0.5, repeat: Infinity, delay: (i % 7) * 0.3 }}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{ left: `${(i * 1618) % 97}%`, top: `${(i * 2718) % 90}%` }}
            />
          ))}

          <div className="relative z-10 py-20 px-10 lg:px-20 text-center">
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[#16C47F] text-sm font-black tracking-widest uppercase mb-6"
            >
              ✦ The Bigger Picture ✦
            </motion.p>

            <h3
              className="text-4xl lg:text-5xl font-black text-white mb-7 leading-tight"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
            >
              Our Vision Is{" "}
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Bigger Than Tutoring
              </span>
            </h3>

            <p className="text-white/55 text-lg leading-9 mb-12 max-w-3xl mx-auto">
              We envision a future where every student has access to personalized learning, every
              tutor has the opportunity to create real impact, and every parent can confidently
              support their child's academic journey.
            </p>

            {/* 3 floating stat chips */}
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              {[
                { icon: GraduationCap, label: "Student-first always", c: "#16C47F" },
                { icon: Eye,           label: "Full transparency",     c: "#2563EB" },
                { icon: TrendingUp,    label: "Proven growth",         c: "#7C3AED" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/08 backdrop-blur-xl border border-white/12"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.c}30` }}>
                      <Icon className="w-4 h-4" style={{ color: item.c }} />
                    </div>
                    <span className="text-sm font-bold text-white/80">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                           text-white font-bold shadow-[0_8px_32px_rgba(22,196,127,0.35)]
                           flex items-center gap-2 transition-all duration-300"
              >
                Explore Our Impact
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="h-14 px-10 rounded-2xl bg-white/10 backdrop-blur-xl
                           border border-white/20 text-white font-bold
                           hover:bg-white/18 transition-all duration-300
                           flex items-center gap-2"
              >
                <Star className="w-4 h-4 text-[#F59E0B]" />
                Find a Tutor
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}