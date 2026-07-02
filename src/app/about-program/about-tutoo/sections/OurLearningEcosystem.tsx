"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import {
    UserPlus,
    Brain,
    Users,
    BookOpen,
    BarChart3,
    Rocket,
    Sparkles,
    Globe,
    ArrowDown,
    CheckCircle2,
    Zap,
    Star,
} from "lucide-react";

// ─────────────────────────────────────────────
// STAGE DATA
// ─────────────────────────────────────────────

const STAGES = [
    {
        step: "01",
        icon: UserPlus,
        emoji: "👤",
        title: "Student Registers",
        desc: "Students or parents share academic requirements, learning goals, and preferred schedule to begin their journey.",
        from: "#16C47F",
        to: "#2563EB",
        glow: "rgba(22,196,127,0.40)",
        tag: "Starting Point",
        side: "left",
        delay: 0.1,
        features: ["Academic Profile", "Goal Setting", "Schedule Preference"],
    },
    {
        step: "02",
        icon: Brain,
        emoji: "🧠",
        title: "AI Assessment",
        desc: "Learning strengths, weaknesses, knowledge gaps, and preferred learning styles are precisely identified.",
        from: "#2563EB",
        to: "#7C3AED",
        glow: "rgba(37,99,235,0.40)",
        tag: "Intelligence Layer",
        side: "right",
        delay: 0.2,
        features: ["Gap Analysis", "Learning Style", "Aptitude Score"],
    },
    {
        step: "03",
        icon: Users,
        emoji: "👨‍🏫",
        title: "Tutor Matching",
        desc: "The platform intelligently recommends the most suitable verified tutor based on subject, style, and availability.",
        from: "#7C3AED",
        to: "#2563EB",
        glow: "rgba(124,58,237,0.40)",
        tag: "Smart Match",
        side: "left",
        delay: 0.3,
        features: ["Subject Expertise", "Style Alignment", "Availability Match"],
    },
    {
        step: "04",
        icon: BookOpen,
        emoji: "📚",
        title: "Learning Sessions",
        desc: "Structured home or online learning sessions begin with personalized lesson plans and interactive content.",
        from: "#16C47F",
        to: "#2563EB",
        glow: "rgba(22,196,127,0.40)",
        tag: "Active Learning",
        side: "right",
        delay: 0.4,
        features: ["Home & Online", "Structured Plan", "Interactive Content"],
    },
    {
        step: "05",
        icon: BarChart3,
        emoji: "📈",
        title: "Progress Tracking",
        desc: "Performance, attendance, and learning outcomes are continuously monitored through real-time dashboards.",
        from: "#2563EB",
        to: "#7C3AED",
        glow: "rgba(37,99,235,0.40)",
        tag: "Data Insights",
        side: "left",
        delay: 0.5,
        features: ["Performance Reports", "Parent Visibility", "Trend Analysis"],
    },
    {
        step: "06",
        icon: Rocket,
        emoji: "🚀",
        title: "Academic Improvement",
        desc: "Students build confidence, master concepts, achieve better results, and unlock their full academic potential.",
        from: "#7C3AED",
        to: "#16C47F",
        glow: "rgba(124,58,237,0.40)",
        tag: "Goal Achieved",
        side: "right",
        delay: 0.6,
        features: ["Grade Improvement", "Confidence Built", "Goals Achieved"],
    },
];

// ─────────────────────────────────────────────
// FLOATING PARTICLES
// ─────────────────────────────────────────────
function Particles() {
    const dots = [
        { x: 5, y: 8, c: "#16C47F", s: 5, d: 0 },
        { x: 93, y: 15, c: "#2563EB", s: 7, d: 0.6 },
        { x: 10, y: 45, c: "#7C3AED", s: 4, d: 1.2 },
        { x: 88, y: 55, c: "#16C47F", s: 6, d: 0.3 },
        { x: 50, y: 5, c: "#2563EB", s: 5, d: 0.9 },
        { x: 15, y: 80, c: "#7C3AED", s: 4, d: 1.5 },
        { x: 85, y: 85, c: "#16C47F", s: 7, d: 0.7 },
        { x: 50, y: 95, c: "#2563EB", s: 5, d: 1.1 },
    ];
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {dots.map((d, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3.5 + d.d, repeat: Infinity, ease: "easeInOut", delay: d.d }}
                    className="absolute rounded-full"
                    style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.s, height: d.s, background: d.c, filter: `blur(0.5px)` }}
                />
            ))}
        </div>
    );
}

// ─────────────────────────────────────────────
// CENTER UBERTUTOR NODE
// ─────────────────────────────────────────────
function CenterNode() {
    return (
        <div className="relative flex items-center justify-center my-4">
            {/* Outer ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full"
                style={{ border: "1.5px dashed rgba(22,196,127,0.25)" }}
            />
            {/* Middle ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full"
                style={{ border: "1px dashed rgba(37,99,235,0.20)" }}
            />
            {/* Pulse rings */}
            {[1, 2, 3].map((r) => (
                <motion.div
                    key={r}
                    className="absolute rounded-full"
                    style={{ width: r * 60, height: r * 60, border: `1px solid rgba(22,196,127,${0.12 - r * 0.03})` }}
                    animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 3 + r * 0.8, repeat: Infinity, delay: r * 0.9, ease: "easeInOut" }}
                />
            ))}
            {/* Core */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.45, delay: 0.3 }}
                className="relative z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center
                   shadow-[0_0_48px_rgba(22,196,127,0.55)]"
                style={{
                    background: "linear-gradient(135deg, #16C47F, #2563EB, #7C3AED)",
                    animation: "corePulse 3s ease-in-out infinite",
                }}
            >
                <Globe className="w-6 h-6 text-white mb-0.5" />
                <p className="text-[8px] font-black text-white tracking-widest">UBERTUTOR</p>
            </motion.div>
        </div>
    );
}

// ─────────────────────────────────────────────
// STAGE CARD
// ─────────────────────────────────────────────
function StageCard({ stage, isLast }: { stage: typeof STAGES[0]; isLast: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const Icon = stage.icon;

    const isLeft = stage.side === "left";

    return (
        <div className="relative grid grid-cols-[1fr_64px_1fr] items-start gap-0">

            {/* LEFT CONTENT */}
            <div className={`${isLeft ? "flex justify-end pr-6" : "flex justify-start pl-6 lg:col-start-3"} `}
                style={{ gridColumn: isLeft ? "1" : "3" }}>
                {isLeft && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -36 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, delay: stage.delay }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative max-w-sm w-full rounded-3xl overflow-hidden cursor-default
                       border border-white/10
                       shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                       hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                       transition-all duration-500"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <CardInner stage={stage} />
                    </motion.div>
                )}
            </div>

            {/* CENTER SPINE */}
            <div className="relative flex flex-col items-center" style={{ gridColumn: "2" }}>
                {/* Connector line above node */}
                <div className="w-[2px] flex-1 min-h-[20px]"
                    style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.08))" }} />

                {/* Step node */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: stage.delay + 0.1, type: "spring", bounce: 0.4 }}
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center
                     shadow-lg text-white font-black text-sm"
                    style={{
                        background: `linear-gradient(135deg, ${stage.from}, ${stage.to})`,
                        boxShadow: `0 0 20px ${stage.glow}`,
                    }}
                >
                    <Icon className="w-5 h-5 text-white" />
                    {/* Pulse ring */}
                    <motion.div
                        className="absolute -inset-1.5 rounded-2xl"
                        style={{ border: `1.5px solid ${stage.from}55` }}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: stage.delay * 0.5 }}
                    />
                </motion.div>

                {/* Step number bubble */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: stage.delay + 0.2 }}
                    className="mt-1.5 text-[9px] font-black tracking-wider"
                    style={{ color: stage.from }}
                >
                    {stage.step}
                </motion.span>

                {/* Connector line below node */}
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.8, delay: stage.delay + 0.25, ease: "easeOut" }}
                        className="w-[2px] flex-1 min-h-[48px] origin-top"
                        style={{ background: `linear-gradient(180deg, ${stage.from}60, ${stage.to}20)` }}
                    />
                )}
            </div>

            {/* RIGHT CONTENT */}
            <div className={`${!isLeft ? "flex justify-start pl-6" : ""}`}
                style={{ gridColumn: isLeft ? "3" : "3" }}>
                {!isLeft && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 36 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, delay: stage.delay }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative max-w-sm w-full rounded-3xl overflow-hidden cursor-default
                       border border-white/10
                       shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                       hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                       transition-all duration-500"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <CardInner stage={stage} />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
// CARD INNER CONTENT
// ─────────────────────────────────────────────
function CardInner({ stage }: { stage: typeof STAGES[0] }) {
    const Icon = stage.icon;
    return (
        <>
            {/* Top gradient stripe */}
            <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${stage.from}, ${stage.to})` }} />

            {/* Hover mesh */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${stage.from}15, transparent 70%)` }} />

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `0 0 0 1.5px ${stage.from}40, 0 0 36px ${stage.glow}` }} />

            <div className="relative z-10 p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                    <motion.div
                        whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${stage.from}, ${stage.to})`, boxShadow: `0 4px 16px ${stage.glow}` }}
                    >
                        <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <span
                        className="text-[10px] font-black px-2.5 py-1 rounded-full border"
                        style={{ color: stage.from, background: `${stage.from}15`, borderColor: `${stage.from}30` }}
                    >
                        {stage.tag}
                    </span>
                </div>

                {/* Step ghost number */}
                <p
                    className="text-[48px] font-black leading-none mb-2 select-none"
                    style={{
                        background: `linear-gradient(135deg, ${stage.from}20, ${stage.to}15)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "var(--font-heading,'Clash Display',sans-serif)",
                    }}
                >
                    {stage.step}
                </p>

                {/* Title */}
                <h3 className="text-lg font-black text-white mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                    {stage.emoji} {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {stage.desc}
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2">
                    {stage.features.map((f) => (
                        <span key={f}
                            className="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full"
                            style={{ color: stage.from, background: `${stage.from}12`, border: `1px solid ${stage.from}25` }}>
                            <CheckCircle2 className="w-3 h-3" />
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom gradient bar */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${stage.from}, ${stage.to})` }} />
        </>
    );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export function LearningEcosystemSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-32"
            style={{
                background: "linear-gradient(180deg, #0B1220 0%, #111827 50%, #0F172A 100%)",
                fontFamily: "var(--font-body, Inter, sans-serif)",
            }}
        >
            {/* ── BACKGROUND ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Particles />
                <motion.div
                    className="absolute -top-56 left-1/4 w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.14]"
                    style={{ y: bgY, background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
                <div className="absolute -bottom-48 right-1/4 w-[640px] h-[640px] rounded-full blur-[130px] opacity-[0.10]"
                    style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.07]"
                    style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gl1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#16C47F" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={`${i * 10 + 5}%`} y1="0" x2={`${i * 10 + 5}%`} y2="100%"
                            stroke="url(#gl1)" strokeWidth="0.6" />
                    ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

                {/* ── HEADER ── */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-8"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full"
                            style={{
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(22,196,127,0.30)",
                                backdropFilter: "blur(20px)",
                                boxShadow: "0 0 28px rgba(22,196,127,0.18)",
                            }}
                        >
                            <Globe className="w-4 h-4 text-[#16C47F]" />
                            <span className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                                style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                                Our Learning Ecosystem
                            </span>
                            <Sparkles className="w-4 h-4 text-[#16C47F]" />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.72 }}
                        className="text-5xl lg:text-[60px] font-black leading-[1.06] tracking-tight text-white mb-6"
                        style={{ fontFamily: "var(--font-heading,'Clash Display','General Sans',sans-serif)" }}
                    >
                        More Than a Tutor.{" "}
                        <br className="hidden lg:block" />
                        A Complete{" "}
                        <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                             drop-shadow-[0_0_40px_rgba(22,196,127,0.35)]">
                            Learning Ecosystem.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg leading-8"
                        style={{ color: "rgba(255,255,255,0.60)" }}
                    >
                        We combine expert tutors, personalized learning, AI technology, assessments, and
                        data-driven insights to create a complete educational ecosystem that helps students
                        achieve measurable academic growth.
                    </motion.p>
                </div>

                {/* ── TIMELINE ── */}
                <div className="relative space-y-8">

                    {/* Vertical spine background */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] pointer-events-none"
                        style={{ background: "linear-gradient(180deg, transparent, rgba(22,196,127,0.15) 10%, rgba(37,99,235,0.15) 50%, rgba(124,58,237,0.15) 90%, transparent)" }} />

                    {/* Stages */}
                    {STAGES.map((stage, i) => (
                        <StageCard key={stage.step} stage={stage} isLast={i === STAGES.length - 1} />
                    ))}

                    {/* Center UberTutor node — between stages 3 and 4 */}
                    {/* <div className="absolute left-1/2 top-290 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                        <CenterNode />
                    </div> */}
                </div>

                {/* ── MOBILE CENTRE NODE ── */}
                <div className="lg:hidden flex justify-center my-8">
                    <CenterNode />
                </div>

                {/* ── BOTTOM CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-6 mt-16"
                >
                    <p className="text-sm font-black tracking-widest uppercase text-[#16C47F]">
                        ✦ Begin Your Journey Today ✦
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.button
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                            className="h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                         text-white font-bold shadow-[0_8px_32px_rgba(22,196,127,0.35)]
                         flex items-center gap-2"
                        >
                            <Rocket className="w-5 h-5" />
                            Start Learning Today
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                            className="h-14 px-10 rounded-2xl font-bold text-white flex items-center gap-2 transition-all duration-300"
                            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(12px)" }}
                        >
                            <Users className="w-5 h-5" />
                            Find a Tutor
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes corePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,196,127,0.3), 0 0 48px rgba(22,196,127,0.55); }
          50%      { box-shadow: 0 0 0 18px rgba(22,196,127,0), 0 0 48px rgba(22,196,127,0.55); }
        }
      `}</style>
        </section>
    );
}