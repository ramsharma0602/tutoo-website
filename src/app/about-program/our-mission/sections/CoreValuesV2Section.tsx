"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Shield,
  Eye,
  Trophy,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Diamond,
  Sparkles,
  Quote,
  ArrowRight,
  Zap,
  CheckCircle2,
  Heart,
  Star,
  TrendingUp,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const VALUES = [
  {
    emoji: "🛡️",
    icon: Shield,
    title: "Integrity",
    desc: "We act with honesty, fairness, and accountability in every interaction with students, parents, and tutors — without compromise.",
    from: "#7B2FF7",
    to: "#7B2FF7",
    light: "rgba(248,120,8,0.08)",
    glow: "rgba(248,120,8,0.28)",
    chipColor: "#7B2FF7",
    chip: "Trust by default",
    number: "01",
    delay: 0.06,
  },
  {
    emoji: "🔍",
    icon: Eye,
    title: "Transparency",
    desc: "We believe in open communication, clear expectations, and complete visibility throughout every stage of the learning journey.",
    from: "#7B2FF7",
    to: "#7B2FF7",
    light: "rgba(123,47,247,0.08)",
    glow: "rgba(123,47,247,0.28)",
    chipColor: "#7B2FF7",
    chip: "Nothing hidden",
    number: "02",
    delay: 0.12,
  },
  {
    emoji: "🏆",
    icon: Trophy,
    title: "Excellence",
    desc: "We continuously strive to deliver the highest quality learning experiences and measurable outcomes families can see and feel.",
    from: "#F59E0B",
    to: "#7B2FF7",
    light: "rgba(245,158,11,0.08)",
    glow: "rgba(245,158,11,0.28)",
    chipColor: "#F59E0B",
    chip: "Results that matter",
    number: "03",
    delay: 0.18,
  },
  {
    emoji: "💡",
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace technology, creativity, and modern teaching methods to continuously improve and personalise every learning experience.",
    from: "#7B2FF7",
    to: "#7B2FF7",
    light: "rgba(123,47,247,0.08)",
    glow: "rgba(123,47,247,0.28)",
    chipColor: "#7B2FF7",
    chip: "Always evolving",
    number: "04",
    delay: 0.24,
  },
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Student First",
    desc: "Every decision begins with one question — how does this improve student learning and success? Students are never secondary.",
    from: "#7B2FF7",
    to: "#7B2FF7",
    light: "rgba(248,120,8,0.08)",
    glow: "rgba(248,120,8,0.26)",
    chipColor: "#7B2FF7",
    chip: "Learners lead us",
    number: "05",
    delay: 0.30,
  },
  {
    emoji: "📚",
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "We believe learning never stops — for students, tutors, parents, or our organisation. Growth is always the destination.",
    from: "#7B2FF7",
    to: "#7B2FF7",
    light: "rgba(123,47,247,0.08)",
    glow: "rgba(123,47,247,0.26)",
    chipColor: "#7B2FF7",
    chip: "Growth never ends",
    number: "06",
    delay: 0.36,
  },
];

const TRUST_CHIPS = [
  { label: "Student-Centric",       color: "#7B2FF7" },
  { label: "Verified Educators",    color: "#7B2FF7" },
  { label: "Transparent Learning",  color: "#7B2FF7" },
  { label: "Technology Driven",     color: "#F59E0B" },
  { label: "Continuous Improvement",color: "#7B2FF7" },
  { label: "Parent Trusted",        color: "#7B2FF7" },
];

// ─────────────────────────────────────────────
// BG WATERMARK TEXT
// ─────────────────────────────────────────────

function WatermarkText() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
      <p
        className="text-[88px] lg:text-[120px] font-black text-center leading-tight whitespace-nowrap"
        style={{
          background:
            "linear-gradient(135deg, rgba(248,120,8,0.045), rgba(123,47,247,0.045), rgba(123,47,247,0.045))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "var(--font-heading, 'Clash Display', sans-serif)",
          filter: "blur(1px)",
        }}
      >
        Integrity • Transparency • Excellence
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// SINGLE VALUE CARD
// ─────────────────────────────────────────────

function ValueCard({ v }: { v: typeof VALUES[0] }) {
  const Icon = v.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: v.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -12, scale: 1.025 }}
      className="group relative rounded-[28px] overflow-hidden bg-white
                 border border-[rgba(30,27,58,0.07)]
                 shadow-[0_4px_24px_rgba(30,27,58,0.07)]
                 hover:shadow-[0_28px_64px_rgba(30,27,58,0.13)]
                 transition-all duration-500 cursor-default p-8"
    >
      {/* Mesh glow reveal on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"
        style={{
          background: `radial-gradient(ellipse 85% 55% at 50% 0%, ${v.light}, transparent 72%)`,
        }}
      />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        animate={{ x: ["-120%", "220%"] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.6,
        }}
        style={{
          background:
            "linear-gradient(108deg, transparent 36%, rgba(255,255,255,0.42) 50%, transparent 64%)",
        }}
      />

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1.5px ${v.from}30, 0 0 40px ${v.glow}`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Row: icon + number */}
        <div className="flex items-start justify-between mb-7">
          <motion.div
            whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.12 }}
            transition={{ duration: 0.5 }}
            className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${v.from}, ${v.to})` }}
          >
            <Icon className="w-[28px] h-[28px] text-white" />
          </motion.div>

          {/* Ghost number */}
          <span
            className="text-[52px] font-black select-none leading-none"
            style={{
              background: `linear-gradient(135deg, ${v.from}18, ${v.to}18)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-heading, 'Clash Display', sans-serif)",
            }}
          >
            {v.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[22px] font-black text-[#1E1B3A] mb-3 leading-snug"
          style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
        >
          {v.emoji} {v.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-[1.85] text-[#6E6A85] flex-1">{v.desc}</p>

        {/* Chip */}
        <motion.div
          whileHover={{ x: 3 }}
          className="mt-7 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300"
          style={{
            color: v.chipColor,
            background: `${v.from}0E`,
            borderColor: `${v.from}28`,
          }}
        >
          <Zap className="w-3.5 h-3.5" style={{ color: v.chipColor }} />
          <span className="text-xs font-black tracking-wide">{v.chip}</span>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-[28px] transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${v.from}, ${v.to})` }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function CoreValuesV2Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const quoteScale = useTransform(scrollYProgress, [0.3, 0.6], [0.97, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-white"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <WatermarkText />
        <motion.div
          className="absolute -top-56 -left-56 w-[750px] h-[750px] rounded-full blur-[140px] opacity-[0.10]"
          style={{ y: bgY , background: "radial-gradient(circle, #7B2FF7, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7B2FF7, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #7B2FF7, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #0A1028 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
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
                         border border-[#7B2FF7]/30
                         shadow-[0_0_28px_rgba(248,120,8,0.18)]"
            >
              <Diamond className="w-4 h-4 text-[#7B2FF7]" />
              <span
                className="text-sm font-black tracking-widest uppercase text-[#7B2FF7]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
              >
                Our Core Values
              </span>
              <Sparkles className="w-4 h-4 text-[#7B2FF7]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-[#0A1028] mb-7"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
          >
            The Values That{" "}
            <span
              className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent
                         drop-shadow-[0_0_40px_rgba(248,120,8,0.22)]"
            >
              Guide Us
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-lg lg:text-xl leading-9 text-[#6E6A85]"
          >
            At Tutoo, our values shape every learning experience, every parent interaction,
            and every decision we make as we help students achieve their academic goals.
          </motion.p>
        </div>

        {/* ── 6-CARD GRID  3 + 3 ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {VALUES.map((v) => (
            <ValueCard key={v.title} v={v} />
          ))}
        </div>

        {/* ── FEATURED QUOTE ── */}
        <motion.div
          style={{ scale: quoteScale }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78, delay: 0.08 }}
          className="mb-14"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="rounded-[36px] relative overflow-hidden py-14 px-10 lg:px-20 text-center"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(135deg, #7B2FF7, #7B2FF7, #7B2FF7) border-box",
              border: "1.5px solid transparent",
              boxShadow:
                "0 24px 80px rgba(248,120,8,0.09), 0 8px 32px rgba(123,47,247,0.07)",
            }}
          >
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#7B2FF7]/06 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7B2FF7]/05 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Quote icon */}
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-xl mb-9"
                style={{ background: "linear-gradient(135deg, #7B2FF7, #7B2FF7)" }}
              >
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Quote line 1 */}
              <p
                className="text-3xl lg:text-4xl font-black text-[#1E1B3A] leading-tight mb-4"
                style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
              >
                "Our values are not what we write on a wall.
              </p>

              {/* Quote line 2 — gradient */}
              <p
                className="text-3xl lg:text-4xl font-black leading-tight mb-10
                           bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
              >
                They are what students, parents, and tutors experience every day."
              </p>

              {/* Author row */}
              <div className="flex items-center justify-center gap-4 pt-8 border-t border-[rgba(30,27,58,0.07)]">
                <div className="flex -space-x-2">
                  {["#7B2FF7", "#7B2FF7", "#7B2FF7"].map((c, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${c}, ${["#7B2FF7", "#7B2FF7", "#7B2FF7"][i]})`,
                      }}
                    >
                      {["S", "T", "P"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1E1B3A]">Students · Tutors · Parents</p>
                  <p className="text-xs text-[#6E6A85]">The Tutoo community</p>
                </div>
                <div className="ml-6 flex gap-1.5">
                  {["#7B2FF7", "#7B2FF7", "#7B2FF7", "#F59E0B"].map((c) => (
                    <motion.div
                      key={c}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 1.5,
                      }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TRUST CHIPS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-24"
        >
          {TRUST_CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-white border border-[rgba(30,27,58,0.08)]
                         shadow-sm hover:shadow-lg
                         text-sm font-bold text-[#1E1B3A]
                         transition-all duration-300 cursor-default"
              style={{
                boxShadow: `0 0 0 0px ${chip.color}00`,
              }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: chip.color }} />
              {chip.label}
            </motion.span>
          ))}
        </motion.div>

        {/* ── 3-UP CONVICTION STRIP ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Heart,
              title: "For Parents",
              desc: "Values that guarantee your child is in safe, honest, and transparent hands every session.",
              from: "#7B2FF7",
              to: "#7B2FF7",
              delay: 0.1,
            },
            {
              icon: GraduationCap,
              title: "For Students",
              desc: "Values that put your growth, confidence, and academic success at the centre of everything.",
              from: "#7B2FF7",
              to: "#7B2FF7",
              delay: 0.2,
            },
            {
              icon: TrendingUp,
              title: "For Tutors",
              desc: "Values that respect your expertise, support your growth, and recognise the impact you create.",
              from: "#7B2FF7",
              to: "#7B2FF7",
              delay: 0.3,
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: card.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden
                           bg-white border border-[rgba(30,27,58,0.07)]
                           shadow-lg hover:shadow-2xl
                           transition-all duration-400 p-8 cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${card.from}0E, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6"
                    style={{ background: `linear-gradient(135deg, ${card.from}, ${card.to})` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-xl font-black text-[#1E1B3A] mb-3"
                    style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#6E6A85] mb-6">{card.desc}</p>
                  <div
                    className="flex items-center gap-2 text-sm font-bold"
                    style={{ color: card.from }}
                  >
                    <span>Our commitment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── DARK CLOSING BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[36px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0A1028 0%, #111827 55%, #0A1028 100%)",
            boxShadow: "0 32px 100px rgba(10,16,40,0.28)",
          }}
        >
          {/* Ambient glows */}
          <div className="absolute top-0 left-0 w-96 h-64 bg-[#7B2FF7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-60 bg-[#7B2FF7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-32 bg-[#7B2FF7]/06 rounded-full blur-3xl pointer-events-none" />

          {/* Twinkling dots */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{
                duration: 2.5 + (i % 5) * 0.4,
                repeat: Infinity,
                delay: (i % 8) * 0.28,
              }}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${(i * 1618) % 96}%`,
                top: `${(i * 2718) % 88}%`,
              }}
            />
          ))}

          <div className="relative z-10 py-16 px-10 lg:px-20 text-center">
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[#7B2FF7] text-xs font-black tracking-widest uppercase mb-6"
            >
              ✦ Values in Action ✦
            </motion.p>

            <h3
              className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
            >
              Values you can{" "}
              <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
                feel in every session.
              </span>
            </h3>

            <p className="text-white/50 text-lg leading-9 max-w-2xl mx-auto mb-10">
              These six principles are not aspirations. They are practiced in every lesson, every
              parent update, and every tutor interaction — every single day.
            </p>

            {/* Value pills row */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {VALUES.map((v) => (
                <motion.span
                  key={v.title}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black transition-all duration-300"
                  style={{
                    color: v.from,
                    background: `${v.from}15`,
                    borderColor: `${v.from}30`,
                  }}
                >
                  <span>{v.emoji}</span>
                  {v.title}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="h-14 px-10 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C]
                           text-white font-bold
                           shadow-[0_8px_32px_rgba(248,120,8,0.35)]
                           flex items-center gap-2 transition-all duration-300"
              >
                Find a Tutor
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
                Become a Tutor
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}