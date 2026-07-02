"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Target,
  BarChart3,
  Home,
  Lock,
  Headphones,
  Sparkles,
  Shield,
  Quote,
  CheckCircle2,
  ArrowRight,
  Star,
  Heart,
  Zap,
  TrendingUp,
} from "lucide-react";

// ─────────────────────────────────────────────
// TRUST CARDS DATA
// ─────────────────────────────────────────────

const TRUST_CARDS = [
  {
    emoji: "👨‍🏫",
    icon: ShieldCheck,
    title: "Verified Tutors",
    desc: "Every tutor undergoes a detailed background screening, credential verification, and quality assessment before joining the platform.",
    from: "#16C47F",
    to: "#2563EB",
    light: "rgba(22,196,127,0.07)",
    glow: "rgba(22,196,127,0.28)",
    chip: "100% Verified",
    chipIcon: ShieldCheck,
    stat: { val: "1,200+", label: "Tutors" },
    delay: 0.06,
    colSpan: 1,
  },
  {
    emoji: "🎯",
    icon: Target,
    title: "Personalized Learning Plans",
    desc: "Every student receives a customized learning roadmap designed around individual strengths, academic gaps, and personal goals.",
    from: "#2563EB",
    to: "#7C3AED",
    light: "rgba(37,99,235,0.07)",
    glow: "rgba(37,99,235,0.28)",
    chip: "AI-Powered",
    chipIcon: Zap,
    stat: { val: "5,000+", label: "Plans Created" },
    delay: 0.12,
    colSpan: 1,
  },
  {
    emoji: "📈",
    icon: BarChart3,
    title: "Regular Progress Reports",
    desc: "Parents receive structured updates, academic insights, and measurable learning outcomes — no guesswork, full visibility.",
    from: "#7C3AED",
    to: "#2563EB",
    light: "rgba(124,58,237,0.07)",
    glow: "rgba(124,58,237,0.28)",
    chip: "Real-Time",
    chipIcon: TrendingUp,
    stat: { val: "Weekly", label: "Reports" },
    delay: 0.18,
    colSpan: 1,
  },
  {
    emoji: "🏠",
    icon: Home,
    title: "Home & Online Options",
    desc: "Flexible home and online learning experiences designed around student convenience, lifestyle, and individual learning preferences.",
    from: "#16C47F",
    to: "#2563EB",
    light: "rgba(22,196,127,0.07)",
    glow: "rgba(22,196,127,0.28)",
    chip: "Hybrid Learning",
    chipIcon: Home,
    stat: { val: "2-in-1", label: "Modes" },
    delay: 0.24,
    colSpan: 1,
  },
  {
    emoji: "🔒",
    icon: Lock,
    title: "Secure Attendance Verification",
    desc: "Session attendance and learning activity are continuously monitored to ensure transparency, safety, and full accountability.",
    from: "#2563EB",
    to: "#7C3AED",
    light: "rgba(37,99,235,0.07)",
    glow: "rgba(37,99,235,0.28)",
    chip: "Always Safe",
    chipIcon: Lock,
    stat: { val: "100%", label: "Tracked" },
    delay: 0.30,
    colSpan: 1,
  },
  {
    emoji: "🤝",
    icon: Headphones,
    title: "Dedicated Support Team",
    desc: "A dedicated team is always available to assist students, parents, and tutors at every stage of the learning journey.",
    from: "#7C3AED",
    to: "#16C47F",
    light: "rgba(124,58,237,0.07)",
    glow: "rgba(124,58,237,0.28)",
    chip: "Always Available",
    chipIcon: Heart,
    stat: { val: "4hr", label: "Response" },
    delay: 0.36,
    colSpan: 1,
  },
];

const TRUST_CHIPS = [
  { text: "Verified Educators",    color: "#16C47F" },
  { text: "Parent Visibility",     color: "#2563EB" },
  { text: "Progress Tracking",     color: "#7C3AED" },
  { text: "Personalized Learning", color: "#F59E0B" },
  { text: "Secure Sessions",       color: "#16C47F" },
  { text: "Dedicated Support",     color: "#2563EB" },
];

// ─────────────────────────────────────────────
// SINGLE TRUST CARD
// ─────────────────────────────────────────────

function TrustCard({ card }: { card: typeof TRUST_CARDS[0] }) {
  const Icon = card.icon;
  const ChipIcon = card.chipIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.62, delay: card.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -12, scale: 1.025 }}
      className="group relative rounded-[28px] bg-white overflow-hidden flex flex-col
                 border border-[rgba(15,23,42,0.07)]
                 shadow-[0_4px_24px_rgba(15,23,42,0.07)]
                 hover:shadow-[0_24px_64px_rgba(15,23,42,0.12)]
                 transition-all duration-500 cursor-default p-7"
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }}
      />

      {/* Mesh bg reveal on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"
        style={{ background: `radial-gradient(ellipse 90% 55% at 50% 0%, ${card.light}, transparent 70%)` }}
      />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.7 }}
        style={{
          background: "linear-gradient(108deg, transparent 36%, rgba(255,255,255,0.44) 50%, transparent 64%)",
        }}
      />

      {/* Glow border */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `0 0 0 1.5px ${card.from}32, 0 0 40px ${card.glow}` }}
      />

      <div className="relative z-10 flex flex-col h-full">

        {/* Icon row */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.12 }}
            transition={{ duration: 0.5 }}
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${card.from}, ${card.to})` }}
          >
            {/* Icon glow halo */}
            <div
              className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${card.from}50, transparent 70%)` }}
            />
            <Icon className="w-7 h-7 text-white relative z-10" />
          </motion.div>

          {/* Stat badge */}
          <div className="flex flex-col items-end gap-0.5">
            <span
              className="text-2xl font-black leading-none"
              style={{
                background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-heading,'Clash Display',sans-serif)",
              }}
            >
              {card.stat.val}
            </span>
            <span className="text-[10px] font-bold text-[#64748B]">{card.stat.label}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-[19px] font-black text-[#0F172A] mb-3 leading-tight"
          style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}
        >
          {card.emoji} {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-7 text-[#64748B] flex-1 mb-6">{card.desc}</p>

        {/* Chip */}
        <motion.div
          whileHover={{ x: 3 }}
          className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300"
          style={{
            color: card.from,
            background: `${card.from}0E`,
            borderColor: `${card.from}28`,
          }}
        >
          <ChipIcon className="w-3.5 h-3.5" />
          <span className="text-xs font-black">{card.chip}</span>
        </motion.div>
      </div>

      {/* Bottom gradient bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-[28px] transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function WhyParentsTrustSection() {
  return (
    <section
      className="relative overflow-hidden py-32 bg-white"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <p
            className="text-[140px] lg:text-[200px] font-black text-center leading-none whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, rgba(22,196,127,0.032), rgba(37,99,235,0.032))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-heading,'Clash Display',sans-serif)",
              filter: "blur(1.5px)",
            }}
          >
            TRUST
          </p>
        </div>

        <div className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
        <div className="absolute -bottom-44 -right-44 w-[640px] h-[640px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 w-[440px] h-[440px] rounded-full blur-[90px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-18">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-white/90 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_28px_rgba(22,196,127,0.18)]"
            >
              <Shield className="w-4 h-4 text-[#16C47F]" />
              <span
                className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}
              >
                Trust & Transparency
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="text-5xl lg:text-[62px] font-black leading-[1.05] tracking-tight text-[#0B1220] mb-6"
            style={{ fontFamily: "var(--font-heading,'Clash Display','General Sans',sans-serif)" }}
          >
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                             drop-shadow-[0_0_36px_rgba(22,196,127,0.22)]">
              Trusted by Parents,
            </span>{" "}
            <br className="hidden lg:block" />
            Loved by Students
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-lg leading-8 text-[#64748B]"
          >
            Parents choose UberTutor because we combine expert educators, technology-driven
            learning, progress visibility, and student-focused support to create better
            educational outcomes every single day.
          </motion.p>

          {/* Star rating row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, type: "spring", bounce: 0.5 }}
                >
                  <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-black text-[#0F172A]">4.8 / 5</span>
            <span className="text-sm text-[#64748B]">· 5,000+ parents satisfied</span>
          </motion.div>
        </div>

        {/* ── CARDS GRID  3 × 2 ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRUST_CARDS.map((card) => (
            <TrustCard key={card.title} card={card} />
          ))}
        </div>

        {/* ── FEATURED TRUST PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="rounded-[36px] relative overflow-hidden py-14 px-10 lg:px-20 text-center mb-12"
          style={{
            background: "linear-gradient(145deg, #F0FDF4 0%, #EFF6FF 40%, #FAF5FF 80%, #FFF7ED 100%)",
            border: "1.5px solid rgba(22,196,127,0.18)",
            boxShadow: "0 24px 80px rgba(22,196,127,0.09), 0 0 0 1px rgba(37,99,235,0.05)",
          }}
        >
          {/* Ambient glows inside */}
          <div className="absolute top-0 left-0 w-72 h-40 bg-[#16C47F]/08 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-60 h-36 bg-[#2563EB]/07 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-32 bg-[#7C3AED]/05 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB]
                            flex items-center justify-center shadow-xl mb-8">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <p
              className="text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading,'Clash Display',sans-serif)" }}
            >
              "Education works best when parents stay
            </p>
            <p
              className="text-2xl lg:text-3xl font-black leading-tight mb-10
                         bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-heading,'Clash Display',sans-serif)" }}
            >
              informed, students stay motivated, and tutors stay supported."
            </p>

            {/* 3 supporting pillars */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(15,23,42,0.08)]">
              {[
                { icon: Heart,        text: "Parents Informed",    c: "#16C47F" },
                { icon: Zap,          text: "Students Motivated",  c: "#2563EB" },
                { icon: TrendingUp,   text: "Tutors Supported",    c: "#7C3AED" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: `${item.c}15` }}>
                      <Icon className="w-5 h-5" style={{ color: item.c }} />
                    </div>
                    <span className="text-xs font-black text-[#0F172A]">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── TRUST CHIPS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {TRUST_CHIPS.map((chip, i) => (
            <motion.span
              key={chip.text}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-white border border-[rgba(15,23,42,0.08)]
                         shadow-sm hover:shadow-lg
                         text-sm font-bold text-[#0F172A]
                         transition-all duration-300 cursor-default"
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: chip.color }} />
              {chip.text}
            </motion.span>
          ))}
        </motion.div>

        {/* ── DARK CLOSING CTA BAND ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[36px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 32px 100px rgba(11,18,32,0.28)",
          }}
        >
          {/* Inner glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-64 bg-[#16C47F]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-60 bg-[#7C3AED]/10 rounded-full blur-3xl" />
          </div>

          {/* Star field */}
          {[...Array(16)].map((_, i) => (
            <motion.div key={i}
              animate={{ opacity: [0.15, 0.75, 0.15] }}
              transition={{ duration: 2.5 + (i % 5) * 0.4, repeat: Infinity, delay: (i % 8) * 0.28 }}
              className="absolute w-[3px] h-[3px] rounded-full bg-white"
              style={{ left: `${(i * 1618) % 96}%`, top: `${(i * 2718) % 88}%` }}
            />
          ))}

          <div className="relative z-10 py-14 px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left text */}
              <div className="text-center lg:text-left">
                <motion.p
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-[#16C47F] text-xs font-black tracking-widest uppercase mb-4"
                >
                  ✦ Join 5,000+ Families ✦
                </motion.p>
                <h3
                  className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-heading,'Clash Display',sans-serif)" }}
                >
                  Ready to experience the{" "}
                  <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                    UberTutor difference?
                  </span>
                </h3>
                <p className="text-white/50 text-base leading-7 max-w-lg">
                  Thousands of parents already trust us with their child's education. Join them today.
                </p>
              </div>

              {/* Right CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="h-14 px-9 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                             text-white font-bold shadow-[0_8px_32px_rgba(22,196,127,0.35)]
                             flex items-center gap-2 justify-center transition-all duration-300"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Find a Verified Tutor
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="h-14 px-9 rounded-2xl font-bold text-white flex items-center gap-2 justify-center transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <Star className="w-4 h-4 text-[#F59E0B]" />
                  Book Free Assessment
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}