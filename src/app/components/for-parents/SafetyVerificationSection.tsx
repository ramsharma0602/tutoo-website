"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  ShieldCheck,
  FileText,
  BadgeCheck,
  GraduationCap,
  Users,
  BarChart2,
  Headphones,
  ArrowRight,
  MapPin,
  ClipboardCheck,
  UserCheck,
  Sparkles,
  Lock,
  Eye,
  Activity,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Application Submission",
    desc: "Tutor submits academic, identity, and professional details through the Tutoo onboarding system.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.35)",
    border: "rgba(37,99,235,0.4)",
    bg: "rgba(37,99,235,0.08)",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Document Verification",
    desc: "Government ID, address proof, and qualification documents are securely validated by our compliance team.",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.35)",
    border: "rgba(22,196,127,0.4)",
    bg: "rgba(22,196,127,0.08)",
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Qualification Assessment",
    desc: "Academic records, teaching expertise, subject knowledge, and communication skills are rigorously evaluated.",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.35)",
    border: "rgba(124,58,237,0.4)",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    num: "04",
    icon: UserCheck,
    title: "Personal Interview",
    desc: "Tutors undergo a professional screening interview to evaluate teaching quality and communication standards.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.35)",
    border: "rgba(245,158,11,0.4)",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Background Verification",
    desc: "Identity checks, reference validation, and safety screening ensure only trusted educators are onboarded.",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.4)",
    border: "rgba(22,196,127,0.5)",
    bg: "rgba(22,196,127,0.08)",
  },
  {
    num: "06",
    icon: BadgeCheck,
    title: "Approved Tutor",
    desc: "Only verified and qualified tutors are approved and activated for live student sessions.",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.5)",
    border: "rgba(22,196,127,0.6)",
    bg: "rgba(22,196,127,0.12)",
  },
];

const cards = [
  {
    icon: BadgeCheck,
    title: "ID Verification",
    desc: "Government-issued identity verification ensures every tutor profile is 100% authentic.",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.2)",
    border: "rgba(22,196,127,0.2)",
    tag: "Verified ✓",
  },
  {
    icon: MapPin,
    title: "Address Verification",
    desc: "Residential address validation for enhanced student safety and peace of mind.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.2)",
    border: "rgba(37,99,235,0.2)",
    tag: "Checked ✓",
  },
  {
    icon: GraduationCap,
    title: "Qualification Verified",
    desc: "Academic certificates and subject expertise verified before any onboarding is completed.",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.2)",
    border: "rgba(124,58,237,0.2)",
    tag: "Certified ✓",
  },
  {
    icon: Users,
    title: "Reference Checks",
    desc: "Professional references and teaching history are reviewed carefully by our team.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.2)",
    tag: "Reviewed ✓",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Every tutor is continuously tracked through ratings, attendance, and parent feedback loops.",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.2)",
    border: "rgba(22,196,127,0.2)",
    tag: "Live ●",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Our support team actively assists parents and monitors every tutoring experience in real time.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.2)",
    border: "rgba(37,99,235,0.2)",
    tag: "24/7 Active",
  },
];

const floatingChips = [
  { label: "Verified Tutor ✓", c: "text-[#16C47F] bg-[rgba(22,196,127,0.1)] border-[rgba(22,196,127,0.25)]" },
  { label: "Background Checked", c: "text-[#2563EB] bg-[rgba(37,99,235,0.1)] border-[rgba(37,99,235,0.22)]" },
  { label: "● Live Monitoring", c: "text-[#F59E0B] bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.22)]" },
  { label: "Safety Approved", c: "text-[#7C3AED] bg-[rgba(124,58,237,0.1)] border-[rgba(124,58,237,0.22)]" },
  { label: "AI Alerts Active", c: "text-[#16C47F] bg-[rgba(22,196,127,0.1)] border-[rgba(22,196,127,0.25)]" },
];

const dashStats = [
  { label: "Verification Score", value: "98.4%", color: "#16C47F" },
  { label: "Active Sessions", value: "1,240", color: "#2563EB" },
  { label: "OTP Verified", value: "100%", color: "#7C3AED" },
  { label: "Monitoring", value: "Live ●", color: "#F59E0B" },
];

/* ─────────────────────────────────────────────
   Main Export
───────────────────────────────────────────── */
export function SafetyVerificationSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineVisible = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-28" style={{ background: "#0B1220" }}>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mesh glows */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(22,196,127,0.18), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)", filter: "blur(60px)" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED",
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 8) % 100}%`,
              opacity: 0.4,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8"
            style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.3)", backdropFilter: "blur(12px)" }}>
            <ShieldCheck className="w-4 h-4 text-[#16C47F]" />
            <span className="text-sm font-semibold text-[#16C47F]">Safety & Verification</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}>
            Your Child's{" "}
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              Safety Comes First
            </span>
          </h2>

          <p className="text-lg leading-8 text-[#94A3B8]">
            Every tutor on Tutoo goes through multiple layers of verification, screening,
            interviews, and performance monitoring before entering a student's learning journey.
          </p>
        </motion.div>

        {/* ── Main split layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ════════════════════════════════════
              LEFT — VERIFICATION TIMELINE
          ════════════════════════════════════ */}
          <div ref={timelineRef}>
            <div className="relative">

              {/* Animated connector line */}
              <div className="absolute left-[27px] top-8 bottom-8 w-[2px]"
                style={{ background: "linear-gradient(to bottom, rgba(22,196,127,0.15), rgba(37,99,235,0.15), rgba(124,58,237,0.15))" }}>
                <motion.div
                  className="w-full origin-top rounded-full"
                  style={{ background: "linear-gradient(to bottom, #16C47F, #2563EB, #7C3AED)" }}
                  initial={{ scaleY: 0 }}
                  animate={isTimelineVisible ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                />
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group relative flex gap-5 items-start"
                  >
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      {/* Outer pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ boxShadow: `0 0 0 0 ${step.glow}` }}
                        animate={{ boxShadow: [`0 0 0 0px ${step.glow}`, `0 0 0 8px transparent`] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <div className="w-14 h-14 rounded-full flex items-center justify-center border text-sm font-black transition-all duration-300 group-hover:scale-110"
                        style={{ background: step.bg, borderColor: step.border, color: step.color, boxShadow: `0 0 20px ${step.glow}` }}>
                        <step.icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border p-5 transition-all duration-300 group-hover:scale-[1.01]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: "rgba(255,255,255,0.07)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = step.border;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 30px ${step.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-black px-2.5 py-1 rounded-full"
                          style={{ color: step.color, background: step.bg, border: `1px solid ${step.border}` }}>
                          {step.num}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#94A3B8]">{step.desc}</p>

                      {/* Completion indicator for last step */}
                      {i === steps.length - 1 && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[rgba(255,255,255,0.07)]">
                          <div className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />
                          <span className="text-xs font-semibold text-[#16C47F]">Tutor Activated for Live Sessions</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════
              RIGHT — SECURITY CARDS + DASHBOARD
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Security dashboard panel */}
            <div className="rounded-3xl border p-6"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)", boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Security Dashboard</p>
                  <p className="text-xs text-[#64748B]">Real-time verification status</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-[#16C47F]">
                  <span className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />
                  All Systems Secure
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {dashStats.map((ds) => (
                  <div key={ds.label} className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xl font-black mb-1" style={{ color: ds.color }}>{ds.value}</p>
                    <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">{ds.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[#94A3B8]">Overall Safety Score</span>
                  <span className="text-xs font-bold text-[#16C47F]">98.4 / 100</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #16C47F, #2563EB)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.4%" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>

            {/* Bento grid of security cards */}
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border p-5 cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 8px 30px ${card.glow}`,
                    borderColor: card.border,
                  }}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md"
                    style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                    <card.icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-xs leading-relaxed text-[#64748B] mb-3">{card.desc}</p>

                  {/* Tag */}
                  <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ color: card.color, background: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Floating chips */}
            <div className="flex flex-wrap gap-2">
              {floatingChips.map((chip) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center text-[11px] font-semibold px-3 py-1.5 rounded-full border ${chip.c}`}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>

            {/* AI Monitoring card */}
            <div className="rounded-2xl border p-5 flex gap-4 items-start"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(37,99,235,0.08))", borderColor: "rgba(124,58,237,0.2)" }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center shadow-lg shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#7C3AED] mb-1">AI Safety System</p>
                <p className="text-sm font-semibold text-white mb-1">Continuous Session Monitoring</p>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Our AI monitors every session in real time — flagging irregularities, attendance anomalies, and behaviour patterns automatically.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold shadow-xl shadow-[#16C47F]/25 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                View Safety Standards
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="text-[#16C47F] font-semibold hover:text-[#2563EB] transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
