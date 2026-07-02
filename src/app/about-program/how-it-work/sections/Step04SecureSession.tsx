"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import {
    ShieldCheck,
    MapPin,
    Clock,
    CheckCircle2,
    Lock,
    Users,
    ClipboardList,
    Eye,
    ArrowRight,
    Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const verificationFlow = [
    {
        emoji: "👨‍🏫", step: "01",
        title: "Tutor Starts Session",
        desc: "Tutor reaches location and initiates the session through the UberTutor app.",
        color: "#2563EB", glow: "rgba(37,99,235,0.3)", border: "rgba(37,99,235,0.3)", bg: "rgba(37,99,235,0.07)",
    },
    {
        emoji: "🔐", step: "02",
        title: "System Generates 6-Digit Code",
        desc: "A unique one-time verification code is instantly generated for this session.",
        color: "#7C3AED", glow: "rgba(124,58,237,0.3)", border: "rgba(124,58,237,0.3)", bg: "rgba(124,58,237,0.07)",
    },
    {
        emoji: "📲", step: "03",
        title: "Parent Verifies Code",
        desc: "Parent receives the code via SMS and enters it to authenticate the session.",
        color: "#16C47F", glow: "rgba(22,196,127,0.3)", border: "rgba(22,196,127,0.3)", bg: "rgba(22,196,127,0.07)",
    },
    {
        emoji: "✅", step: "04",
        title: "Session Activated",
        desc: "Learning session is officially unlocked and begins with full transparency.",
        color: "#16C47F", glow: "rgba(22,196,127,0.35)", border: "rgba(22,196,127,0.35)", bg: "rgba(22,196,127,0.07)",
    },
    {
        emoji: "📋", step: "05",
        title: "Attendance Recorded",
        desc: "Session attendance is automatically logged and visible in the parent dashboard.",
        color: "#2563EB", glow: "rgba(37,99,235,0.28)", border: "rgba(37,99,235,0.28)", bg: "rgba(37,99,235,0.07)",
    },
];

const benefitCards = [
    { emoji: "✅", icon: CheckCircle2, title: "Right Tutor", desc: "Ensures only the assigned verified tutor is present for each session.", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#2563EB]" },
    { emoji: "🎓", icon: Users, title: "Right Student", desc: "Confirms the correct learner is in the session before it begins.", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", grad: "from-[#2563EB] to-[#7C3AED]" },
    { emoji: "📋", icon: ClipboardList, title: "Verified Attendance", desc: "Automatically records session attendance — no manual logs needed.", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", grad: "from-[#7C3AED] to-[#2563EB]" },
    { emoji: "👨‍👩‍👧", icon: Eye, title: "Session Transparency", desc: "Parents stay informed and in control with real-time session visibility.", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", grad: "from-[#F59E0B] to-[#EF4444]" },
    { emoji: "📍", icon: MapPin, title: "Location Verification", desc: "Confirms tutor arrival and session location for complete accountability.", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#7C3AED]" },
    { emoji: "🔒", icon: Lock, title: "Enhanced Security", desc: "Creates a tamper-proof record of every session start, end, and attendance.", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", grad: "from-[#2563EB] to-[#16C47F]" },
];

const floatingWidgets = [
    { emoji: "🛡️", label: "Identity Verified", color: "#16C47F", border: "rgba(22,196,127,0.28)", delay: 0.3 },
    { emoji: "📍", label: "Location Confirmed", color: "#2563EB", border: "rgba(37,99,235,0.28)", delay: 0.65 },
    { emoji: "⏱️", label: "Session Started", color: "#7C3AED", border: "rgba(124,58,237,0.28)", delay: 1.0 },
    { emoji: "✅", label: "Attendance Logged", color: "#16C47F", border: "rgba(22,196,127,0.28)", delay: 1.35 },
];

const progressSteps = [
    { label: "Register", done: true },
    { label: "Assessment", done: true },
    { label: "Match", done: true },
    { label: "Verify", done: true },
    { label: "Track", done: false },
];

const OTP_DIGITS = ["4", "5", "8", "9", "2", "1"];

/* ─────────────────────────────────────────────
   OTP DISPLAY
───────────────────────────────────────────── */
function OTPDisplay({ visible }: { visible: boolean }) {
    const [revealed, setRevealed] = useState(false);
    useEffect(() => {
        if (visible) {
            const t = setTimeout(() => setRevealed(true), 600);
            return () => clearTimeout(t);
        }
    }, [visible]);

    return (
        <div className="flex items-center justify-center gap-3">
            {OTP_DIGITS.map((digit, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16, scale: 0.8 }}
                    animate={revealed ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: i * 0.09, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-12 h-14 rounded-xl flex items-center justify-center text-2xl font-black"
                    style={{
                        background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(22,196,127,0.08))",
                        border: "1.5px solid rgba(37,99,235,0.25)",
                        color: "#0B1220",
                        boxShadow: "0 4px 16px rgba(37,99,235,0.12)",
                    }}
                >
                    {digit}
                    {/* Bottom glow accent */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full"
                        style={{ background: "linear-gradient(90deg, #2563EB, #16C47F)" }} />
                </motion.div>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
   SECURITY FLOW VISUAL
───────────────────────────────────────────── */
function SecurityFlowVisual() {
    const ref = useRef<HTMLDivElement>(null);
    const vis = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div ref={ref} className="flex flex-col gap-4">

            {/* ── OTP Verification Card ── */}
            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative rounded-[28px] border overflow-hidden"
                style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 16px 56px rgba(15,23,42,0.10)" }}
            >
                <div className="h-[3px] bg-gradient-to-r from-[#2563EB] via-[#16C47F] to-[#7C3AED]" />
                <div className="p-6">

                    {/* Card header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg">
                                <Lock className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-[#0B1220]">Session Verification</p>
                                <p className="text-xs text-[#94A3B8]">One-Time Code · Expires in 5:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#16C47F]"
                            style={{ background: "rgba(22,196,127,0.09)", border: "1px solid rgba(22,196,127,0.22)" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
                            Live
                        </div>
                    </div>

                    {/* Session meta */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {[
                            { label: "Student", val: "Arjun Rao", icon: "🎓", color: "#2563EB", bg: "rgba(37,99,235,0.07)" },
                            { label: "Tutor", val: "Rahul Kumar", icon: "👨‍🏫", color: "#16C47F", bg: "rgba(22,196,127,0.07)" },
                            { label: "Subject", val: "Mathematics", icon: "📚", color: "#7C3AED", bg: "rgba(124,58,237,0.07)" },
                            { label: "Location", val: "Mumbai, Home", icon: "📍", color: "#F59E0B", bg: "rgba(245,158,11,0.07)" },
                        ].map((item) => (
                            <div key={item.label} className="rounded-xl p-3 flex items-center gap-2.5"
                                style={{ background: item.bg, border: `1px solid ${item.color}20` }}>
                                <span className="text-base">{item.icon}</span>
                                <div>
                                    <p className="text-[9px] font-semibold text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                                    <p className="text-xs font-bold text-[#0F172A]">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* OTP heading */}
                    <div className="text-center mb-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-1">
                            Generated Verification Code
                        </p>
                        <p className="text-xs text-[#64748B]">Share this code with your parent to begin the session</p>
                    </div>

                    {/* OTP digits */}
                    <div className="relative rounded-2xl border p-5 mb-5"
                        style={{ background: "rgba(248,250,252,0.9)", borderColor: "rgba(37,99,235,0.15)" }}>
                        {/* Glow behind OTP */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.06), transparent 70%)" }} />
                        <OTPDisplay visible={vis} />

                        {/* Pulse ring around OTP box */}
                        <motion.div className="absolute inset-0 rounded-2xl border pointer-events-none"
                            style={{ borderColor: "rgba(22,196,127,0.3)" }}
                            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.01, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Verification steps micro timeline */}
                    <div className="flex flex-col gap-2">
                        {[
                            { icon: "👨‍🏫", label: "Tutor present at location", done: true, color: "#2563EB" },
                            { icon: "🔐", label: "Code generated successfully", done: true, color: "#7C3AED" },
                            { icon: "📲", label: "Awaiting parent verification", done: false, color: "#16C47F" },
                        ].map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={vis ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + i * 0.12 }}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                                style={{ background: step.done ? `${step.color}08` : "rgba(15,23,42,0.03)", border: `1px solid ${step.color}18` }}
                            >
                                <span className="text-sm">{step.icon}</span>
                                <span className="text-xs font-medium text-[#0F172A] flex-1">{step.label}</span>
                                {step.done
                                    ? <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: step.color }} />
                                    : <motion.div className="w-4 h-4 rounded-full border-2 shrink-0"
                                        style={{ borderColor: step.color }}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} />
                                }
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── Verification flow nodes ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border overflow-hidden"
                style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
            >
                <div className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#16C47F]" />
                <div className="p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-4">Verification Flow</p>
                    <div className="relative">
                        {/* Vertical connector */}
                        <div className="absolute left-[22px] top-5 bottom-5 w-[2px]"
                            style={{ background: "rgba(15,23,42,0.06)" }}>
                            <motion.div className="w-full origin-top rounded-full"
                                style={{ background: "linear-gradient(to bottom, #2563EB, #7C3AED, #16C47F)" }}
                                initial={{ scaleY: 0 }}
                                animate={vis ? { scaleY: 1 } : {}}
                                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} />
                        </div>

                        <div className="flex flex-col gap-3">
                            {verificationFlow.map((step, i) => (
                                <motion.div key={step.step}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={vis ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.12, duration: 0.45 }}
                                    className="flex items-start gap-4"
                                >
                                    {/* Node */}
                                    <div className="relative z-10 shrink-0">
                                        <motion.div
                                            animate={{ boxShadow: [`0 0 0 0px ${step.glow}`, `0 0 0 6px transparent`] }}
                                            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                                        />
                                        <div className="w-11 h-11 rounded-full flex items-center justify-center text-base shadow-md"
                                            style={{ background: `linear-gradient(135deg, ${step.color}, #2563EB)`, boxShadow: `0 4px 14px ${step.glow}` }}>
                                            {step.emoji}
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 pt-1.5">
                                        <p className="text-xs font-black text-[#0B1220] mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</p>
                                        <p className="text-[10px] leading-relaxed text-[#64748B]">{step.desc}</p>
                                    </div>
                                    {/* Done badge */}
                                    {i < 2 && (
                                        <div className="shrink-0 pt-1.5">
                                            <span className="text-[9px] font-bold px-2 py-1 rounded-full text-[#16C47F]"
                                                style={{ background: "rgba(22,196,127,0.1)", border: "1px solid rgba(22,196,127,0.2)" }}>Done</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── Floating security widgets row ── */}
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2"
            >
                {floatingWidgets.map((w, i) => (
                    <motion.span key={w.label}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.55 + i * 0.09 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -4, 0] }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border bg-white shadow-sm"
                        style={{ color: w.color, borderColor: w.border, boxShadow: `0 4px 12px ${w.color}14` }}>
                        <span>{w.emoji}</span>{w.label}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function Step04SecureSession() {
    const gridRef = useRef<HTMLDivElement>(null);
    const gridVis = useInView(gridRef, { once: true, margin: "-60px" });

    return (
        <section className="relative overflow-hidden bg-white py-28">

            {/* ── BG ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -left-20 w-[600px] h-[500px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(70px)" }} />
                <div className="absolute top-1/2 -right-20 w-[500px] h-[400px] rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, rgba(22,196,127,0.1), transparent 70%)", filter: "blur(60px)" }} />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.02) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                }} />
                {[...Array(10)].map((_, i) => (
                    <motion.div key={i} className="absolute rounded-full"
                        style={{ width: 2, height: 2, background: i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#16C47F" : "#7C3AED", left: `${(i * 17 + 5) % 96}%`, top: `${(i * 13 + 6) % 88}%`, opacity: 0.28 }}
                        animate={{ y: [0, -14, 0], opacity: [0.18, 0.5, 0.18] }}
                        transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }} />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-start">

                    {/* ════════════════════════════════
              LEFT — SECURITY VISUAL
          ════════════════════════════════ */}
                    <motion.div
                        initial={{ opacity: 0, x: -36 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <SecurityFlowVisual />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5"
                                style={{ background: "rgba(37,99,235,0.08)", borderColor: "rgba(37,99,235,0.28)", backdropFilter: "blur(10px)" }}>
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-[9px] font-black shadow-sm">4</div>
                                <span className="text-xs font-black tracking-widest text-[#2563EB] uppercase">Step 04</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                            </div>

                            {/* USP highlight badge */}
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border mb-7"
                                style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.09), rgba(22,196,127,0.07))", borderColor: "rgba(37,99,235,0.28)", boxShadow: "0 0 20px rgba(37,99,235,0.1)" }}
                            >
                                <Lock className="w-4 h-4 text-[#2563EB]" />
                                <span className="text-sm font-bold text-[#2563EB]">Industry-Leading Session Security</span>
                            </motion.div>
                        </div>
                        {/* Heading */}
                        <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}>
                            Every Session
                            <br />
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                                    Starts With Trust
                                </span>
                                <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                                    style={{ background: "linear-gradient(90deg, #2563EB, #16C47F)" }}
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }} />
                            </span>
                        </h2>

                        <div className="flex flex-col gap-4 mb-9">
                            {[
                                "UberTutor's secure session verification system ensures that the correct tutor, correct student, and correct session are authenticated before learning begins.",
                                "Every session is verified, recorded, and tracked for complete transparency and accountability.",
                            ].map((para, i) => (
                                <motion.p key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-lg leading-8 text-[#64748B]">{para}</motion.p>
                            ))}
                        </div>

                        {/* "No Verification. No Session." callout */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="relative rounded-2xl border overflow-hidden mb-8 px-6 py-5"
                            style={{ background: "linear-gradient(135deg, #0B1220, #111827)", borderColor: "rgba(37,99,235,0.3)" }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#16C47F]" />
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.15), transparent 65%)" }} />
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-lg font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                                        No Verification. No Session.
                                    </p>
                                    <p className="text-xs text-[#94A3B8] mt-0.5">Every session must be authenticated — no exceptions.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Benefits grid */}
                        <div className="flex items-center gap-3 mb-5">
                            <p className="text-sm font-black uppercase tracking-widest text-[#0F172A] whitespace-nowrap">Verification Benefits</p>
                            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(37,99,235,0.2)] to-transparent" />
                        </div>

                        <div ref={gridRef} className="grid grid-cols-2 gap-3 mb-8">
                            {benefitCards.map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 18, scale: 0.95 }}
                                    animate={gridVis ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -4, boxShadow: `0 12px 32px ${card.color}22` }}
                                    className="group relative rounded-2xl border p-4 cursor-default transition-all duration-300 overflow-hidden"
                                    style={{ background: "rgba(255,255,255,0.92)", borderColor: card.border, boxShadow: `0 2px 10px ${card.color}10` }}
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
                            style={{ background: "rgba(37,99,235,0.05)", borderColor: "rgba(37,99,235,0.18)", backdropFilter: "blur(10px)" }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#16C47F] flex items-center justify-center shadow-md shrink-0">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                                Every session is authenticated before it begins, creating a safer and more transparent learning environment.
                            </p>
                        </motion.div>

                        {/* Progress indicator */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.65 }}>
                            <div className="flex items-center gap-0 mb-3">
                                {progressSteps.map((s, i) => (
                                    <div key={s.label} className="flex items-center">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm ${s.done ? "scale-110" : ""}`}
                                            style={s.done
                                                ? { background: "linear-gradient(135deg, #2563EB, #16C47F)", color: "#fff", boxShadow: "0 0 12px rgba(37,99,235,0.4)" }
                                                : { background: "rgba(15,23,42,0.06)", color: "#94A3B8" }}>
                                            {s.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                                        </div>
                                        {i < progressSteps.length - 1 && (
                                            <div className="w-10 h-[2px] mx-1 rounded-full"
                                                style={{ background: i < 3 ? "linear-gradient(90deg, #2563EB, #16C47F)" : "rgba(15,23,42,0.08)" }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                                <p className="text-xs font-bold text-[#2563EB]">Session Verification Completed · Step 4 of 5</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
