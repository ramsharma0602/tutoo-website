"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Phone,
  GraduationCap,
  Users,
  Building2,
  Shield,
  MessageCircle,
  BookOpen,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Zap,
  Heart,
  Mail,
  MapPin,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const QUICK_CHIPS = [
  { icon: Phone, label: "Fast Response", color: "#16C47F" },
  { icon: GraduationCap, label: "Academic Support", color: "#2563EB" },
  { icon: Users, label: "Tutor Assistance", color: "#7C3AED" },
  { icon: Building2, label: "School Partnerships", color: "#F59E0B" },
  { icon: Shield, label: "Trusted Guidance", color: "#16C47F" },
];

const FLOAT_WIDGETS = [
  {
    icon: MessageCircle,
    title: "Live Support",
    sub: "Online Now",
    dot: "#16C47F",
    grad: "from-[#16C47F] to-[#2563EB]",
    pos: "top-6 -left-8",
    delay: 0.35,
    floatAmt: -7,
  },
  {
    icon: BookOpen,
    title: "Academic Guidance",
    sub: "Available Today",
    dot: "#2563EB",
    grad: "from-[#2563EB] to-[#7C3AED]",
    pos: "top-1/4 -right-8",
    delay: 0.5,
    floatAmt: 6,
  },
  {
    icon: GraduationCap,
    title: "Free Assessment",
    sub: "Book Today",
    dot: "#7C3AED",
    grad: "from-[#7C3AED] to-[#16C47F]",
    pos: "top-1/3 -left-6",
    delay: 0.65,
    floatAmt: -5,
  },
  {
    icon: Users,
    title: "Tutor Assistance",
    sub: "24-Hour Response",
    dot: "#F59E0B",
    grad: "from-[#F59E0B] to-[#16C47F]",
    pos: "bottom-32 -right-6",
    delay: 0.8,
    floatAmt: 7,
  },
  {
    icon: Star,
    title: "Parent Satisfaction",
    sub: "4.8 / 5 Rating ⭐",
    dot: "#16C47F",
    grad: "from-[#16C47F] to-[#2563EB]",
    pos: "bottom-32 -left-6",
    delay: 0.95,
    floatAmt: -6,
  },
];

const STATS = [
  { val: "5,000+", label: "Students Supported", icon: GraduationCap, grad: "from-[#16C47F] to-[#2563EB]" },
  { val: "1,200+", label: "Verified Tutors", icon: Users, grad: "from-[#2563EB] to-[#7C3AED]" },
  { val: "50+", label: "Cities Covered", icon: MapPin, grad: "from-[#7C3AED] to-[#F59E0B]" },
  { val: "4.8★", label: "Parent Satisfaction", icon: Star, grad: "from-[#F59E0B] to-[#16C47F]" },
];

const AUDIENCE_CARDS = [
  { icon: Heart, label: "Parents", desc: "Questions about tuition, safety, and pricing", color: "#16C47F" },
  { icon: GraduationCap, label: "Students", desc: "Guidance on learning plans and assessments", color: "#2563EB" },
  { icon: Users, label: "Tutors", desc: "Join our network and grow your career", color: "#7C3AED" },
  { icon: Building2, label: "Schools", desc: "Partnership and institutional programs", color: "#F59E0B" },
];

// ─────────────────────────────────────────────
// CONTACT VISUAL — RIGHT PANEL
// ─────────────────────────────────────────────
function ContactVisual() {
  return (
    <div className="relative w-full select-none">
      {/* Main image */}
      <div className="relative rounded-[36px] overflow-hidden shadow-[0_28px_90px_rgba(15,23,42,0.13)] border border-white/60">
        <img
          src="https://img.magnific.com/free-photo/multiethnic-customer-support-team-work_482257-121935.jpg?semt=ais_hybrid&w=740&q=80"
          alt="UberTutor support team"
          className="w-full h-[540px] object-cover object-top"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/55 via-[#0B1220]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#16C47F]/12 via-transparent to-[#2563EB]/12" />

        {/* HUD corner brackets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <path d="M24,24 L52,24 M24,24 L24,52" stroke="#16C47F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M-24+100%,24 L-52+100%,24 M-24+100%,24 L-24+100%,52" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-[#16C47F]"
            />
            <span className="text-white/70 text-xs font-bold tracking-wide uppercase">Support Available Now</span>
          </div>
          <p
            className="text-white text-2xl font-black leading-tight"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
          >
            We're here for{" "}
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              every question.
            </span>
          </p>
        </div>
      </div>

      {/* Glow halos */}
      <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-[#16C47F]/18 rounded-full blur-3xl" />
      <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-3xl" />

      {/* Floating widgets */}
      {FLOAT_WIDGETS.map((w, i) => {
        const Icon = w.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: w.delay, type: "spring", bounce: 0.38 }}
            animate={{ y: [0, w.floatAmt, 0] }}
            className={`absolute ${w.pos} flex items-center gap-3
                        bg-white/90 backdrop-blur-xl rounded-2xl
                        border border-white shadow-2xl px-4 py-3 min-w-[172px]
                        transition-transform duration-300`}
            style={{ animationDuration: `${3.4 + i * 0.45}s`, zIndex: 20, boxShadow: `0 6px 28px rgba(15,23,42,0.10)` }}
            whileHover={{ scale: 1.07 }}
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${w.grad} flex items-center justify-center shadow-md flex-shrink-0`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-black text-[#0F172A] leading-tight">{w.title}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: w.dot }}
                />
                <p className="text-[11px] text-[#64748B] font-semibold">{w.sub}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export function ContactHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 bg-[#F8FAFC]"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: yOrb }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          animate={{ opacity: [0.2, 0.32, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, rgba(22,196,127,0.07) 50%, transparent 72%)", filter: "blur(60px)" }} />
        </motion.div>
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13), transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 -left-24 w-[450px] h-[380px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(22,196,127,0.13), transparent 70%)", filter: "blur(60px)" }} />
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {/* Particles */}
        {[...Array(14)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 2, height: 2, background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED", left: `${(i * 15 + 5) % 96}%`, top: `${(i * 11 + 4) % 80}%`, opacity: 0.35 }}
            animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── SPLIT LAYOUT ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* ════ LEFT — CONTENT ════ */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78 }}
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8
                         bg-white/80 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_28px_rgba(22,196,127,0.18)]"
            >
              <Phone className="w-4 h-4 text-[#16C47F]" />
              <span
                className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
              >
                Contact UberTutor
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>

            {/* Heading */}
            <h1
              className="text-5xl lg:text-[62px] font-black leading-[1.05] tracking-tight text-[#0B1220] mb-6"
              style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
            >
              Let's Start the{" "}
              <span
                className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                           drop-shadow-[0_0_36px_rgba(22,196,127,0.28)]"
              >
                Conversation
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-4 mb-10">
              {[
                "Have questions about tuition, tutor applications, pricing, assessments, partnerships, or academic support?",
                "Whether you're a parent, student, tutor, or institution — our dedicated team is ready to guide you every step of the way.",
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-lg leading-8 text-[#64748B]"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group h-14 px-9 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                           text-white font-bold shadow-xl shadow-[#16C47F]/22
                           flex items-center gap-2.5 transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5" />
                Book Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(37,99,235,0.07)" }}
                whileTap={{ scale: 0.97 }}
                className="group h-14 px-9 rounded-2xl
                           bg-white/70 backdrop-blur-xl
                           border border-[#2563EB]/25
                           text-[#2563EB] font-bold
                           flex items-center gap-2.5 transition-all duration-300
                           shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Our Team
              </motion.button>
            </div>

            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {QUICK_CHIPS.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.span
                    key={chip.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-white/80 backdrop-blur-xl
                               border border-[rgba(15,23,42,0.08)]
                               shadow-sm hover:shadow-md
                               text-xs font-bold text-[#0F172A]
                               transition-all duration-300 cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
                    {chip.label}
                  </motion.span>
                );
              })}
            </div>

            {/* Audience cards */}
            <p className="text-xs font-black tracking-widest uppercase text-[#64748B] mb-4">
              Who Can Reach Out
            </p>
            <div className="grid grid-cols-2 gap-3">
              {AUDIENCE_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group flex items-start gap-3 p-4 rounded-2xl
                               bg-white/70 backdrop-blur-xl
                               border border-[rgba(15,23,42,0.07)]
                               shadow-sm hover:shadow-lg
                               transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                      style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: `${card.color}15` }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: card.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#0F172A] leading-tight mb-0.5"
                        style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                        {card.label}
                      </p>
                      <p className="text-[11px] leading-5 text-[#64748B]">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ════ RIGHT — VISUAL ════ */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78, delay: 0.1 }}
          >
            <ContactVisual />
          </motion.div>
        </div>

        {/* ── CONTACT INFO STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {[
            {
              icon: Phone,
              title: "Call Us",
              line1: "+91 98765 43210",
              line2: "Mon – Sat, 8am – 8pm",
              from: "#16C47F",
              to: "#2563EB",
              delay: 0.1,
            },
            {
              icon: Mail,
              title: "Email Us",
              line1: "hello@ubertutor.in",
              line2: "Response within 4 hours",
              from: "#2563EB",
              to: "#7C3AED",
              delay: 0.18,
            },
            {
              icon: Clock,
              title: "Response Time",
              line1: "Under 4 Hours",
              line2: "All queries answered same day",
              from: "#7C3AED",
              to: "#16C47F",
              delay: 0.26,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden
                           bg-white/80 backdrop-blur-xl
                           border border-[rgba(15,23,42,0.07)]
                           shadow-lg hover:shadow-2xl
                           transition-all duration-400 p-6 flex items-start gap-4"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse 80% 55% at 0% 50%, ${item.from}0E, transparent 70%)` }} />
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${item.from}, ${item.to})` }} />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative z-10"
                  style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] font-black tracking-widest uppercase text-[#64748B] mb-1">{item.title}</p>
                  <p className="text-base font-black text-[#0F172A] mb-0.5"
                    style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}>
                    {item.line1}
                  </p>
                  <p className="text-xs text-[#64748B] font-semibold">{item.line2}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── STATS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 24px 80px rgba(11,18,32,0.28)",
          }}
        >
          {/* Inner glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-36 bg-[#16C47F]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-28 bg-[#2563EB]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  className="flex flex-col items-center gap-3 py-10 px-6 text-center transition-colors duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className={`text-3xl font-black bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}
                    style={{ fontFamily: "var(--font-heading, 'Clash Display', sans-serif)" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-sm font-semibold text-white/45">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}