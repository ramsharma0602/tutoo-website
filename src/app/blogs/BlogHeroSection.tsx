"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Search,
    BookOpen,
    TrendingUp,
    Sparkles,
    ArrowRight,
    Clock,
    User,
    Zap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const categories = [
    { label: "Study Tips", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
    { label: "Exam Preparation", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.22)" },
    { label: "Parenting Guides", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.22)" },
    { label: "Online Learning", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
    { label: "Career Advice", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.22)" },
    { label: "Teaching Resources", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.22)" },
    { label: "Productivity", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.22)" },
    { label: "AI Learning", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
];

const floatingStats = [
    { icon: BookOpen, label: "500+ Articles", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.2)" },
    { icon: TrendingUp, label: "Trending This Week", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
    { icon: Sparkles, label: "AI Learning Insights", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
    { icon: Zap, label: "New Articles Added", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
];

const featuredArticles = [
    {
        category: "Exam Preparation",
        categoryColor: "#2563EB",
        categoryBg: "rgba(37,99,235,0.1)",
        title: "10 Proven Study Strategies to Ace Your Board Exams in 2025",
        desc: "Master time management, smart revision techniques, and AI-powered learning tools to maximise your exam performance.",
        readTime: "6 min read",
        author: "Priya Sharma",
        authorRole: "Senior Educator",
        gradient: "from-[#2563EB] to-[#7C3AED]",
        bg: "from-[rgba(37,99,235,0.06)] to-[rgba(124,58,237,0.06)]",
    },
    {
        category: "Parenting Guides",
        categoryColor: "#16C47F",
        categoryBg: "rgba(22,196,127,0.1)",
        title: "How to Monitor Your Child's Learning Progress Without Stress",
        desc: "Practical strategies for parents to stay involved in their child's education using modern digital tools.",
        readTime: "5 min read",
        author: "Meera Iyer",
        authorRole: "Child Psychologist",
        gradient: "from-[#16C47F] to-[#2563EB]",
        bg: "from-[rgba(22,196,127,0.06)] to-[rgba(37,99,235,0.06)]",
    },
    {
        category: "AI Learning",
        categoryColor: "#7C3AED",
        categoryBg: "rgba(124,58,237,0.1)",
        title: "The Future of Personalised Education: AI Tutors & Smart Learning",
        desc: "How artificial intelligence is transforming the way students learn and tutors teach in the modern classroom.",
        readTime: "8 min read",
        author: "Aryan Kapoor",
        authorRole: "EdTech Researcher",
        gradient: "from-[#7C3AED] to-[#2563EB]",
        bg: "from-[rgba(124,58,237,0.06)] to-[rgba(37,99,235,0.06)]",
    },
];

/* ─────────────────────────────────────────────
   Main Export
───────────────────────────────────────────── */
export function BlogHeroSection() {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] pt-24 pb-0">

            {/* ── Background atmosphere ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mesh orbs */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-40"
                    style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
                <div className="absolute top-10 -left-40 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(70px)" }} />
                <div className="absolute top-0 -right-40 w-[450px] h-[450px] rounded-full opacity-25"
                    style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
                {/* Grid texture */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                }} />
                {/* Floating particles */}
                {[...Array(14)].map((_, i) => (
                    <motion.div key={i} className="absolute rounded-full"
                        style={{
                            width: i % 2 === 0 ? 3 : 2, height: i % 2 === 0 ? 3 : 2,
                            background: i % 3 === 0 ? "#16C47F" : i % 3 === 1 ? "#2563EB" : "#7C3AED",
                            left: `${(i * 14 + 6) % 96}%`, top: `${(i * 11 + 4) % 80}%`, opacity: 0.35,
                        }}
                        animate={{ y: [0, -16, 0], opacity: [0.25, 0.6, 0.25] }}
                        transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

                {/* ── Badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
                        style={{ background: "rgba(22,196,127,0.07)", borderColor: "rgba(22,196,127,0.28)", backdropFilter: "blur(12px)", boxShadow: "0 0 20px rgba(22,196,127,0.1)" }}>
                        <span className="text-sm">📚</span>
                        <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">Tutoo Blog</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />
                    </div>
                </motion.div>

                {/* ── Heading ── */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-black leading-[1.06] tracking-tight text-[#0B1220] mb-7"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Learning Resources for{" "}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            Students, Parents
                        </span>
                        <motion.span
                            className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                            style={{ background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED)" }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </span>
                    {" "}
                    <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                        &amp; Tutors
                    </span>
                </motion.h1>

                {/* ── Subheading ── */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl leading-9 text-[#64748B] max-w-3xl mx-auto mb-10"
                >
                    Study tips, exam strategies, parenting guides, career advice, teaching resources,
                    and AI-powered learning insights designed to help every learner grow smarter.
                </motion.p>

                {/* ── Floating stats chips ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {floatingStats.map((stat, i) => (
                        <motion.div key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold"
                            style={{ color: stat.color, background: stat.bg, borderColor: stat.border, backdropFilter: "blur(8px)" }}
                        >
                            <stat.icon className="w-3.5 h-3.5" />
                            {stat.label}
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Search Bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.35 }}
                    className="relative max-w-3xl mx-auto mb-6"
                >
                    <div
                        className="relative flex items-center rounded-2xl transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.85)",
                            border: focused ? "1.5px solid rgba(37,99,235,0.5)" : "1.5px solid rgba(15,23,42,0.1)",
                            backdropFilter: "blur(20px)",
                            boxShadow: focused
                                ? "0 0 0 4px rgba(37,99,235,0.08), 0 8px 40px rgba(37,99,235,0.12)"
                                : "0 4px 24px rgba(15,23,42,0.08)",
                        }}
                    >
                        {/* Search icon */}
                        <div className="pl-5 pr-3 flex items-center shrink-0">
                            <Search className="w-5 h-5 text-[#94A3B8]" />
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            placeholder="Search articles, topics, study tips, exams, parenting guides..."
                            className="flex-1 h-16 bg-transparent outline-none text-[#0F172A] placeholder-[#94A3B8] text-base font-medium pr-4"
                            style={{ fontFamily: "var(--font-body, Inter, system-ui)" }}
                        />

                        {/* AI badge inside field */}
                        <div className="hidden sm:flex items-center gap-1.5 pr-3">
                            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#7C3AED]"
                                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)" }}>
                                <Sparkles className="w-3 h-3" />
                                AI Search
                            </div>
                        </div>

                        {/* Search button */}
                        <div className="pr-2">
                            <button className="group h-12 px-6 rounded-xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white text-sm font-bold shadow-lg shadow-[#16C47F]/20 hover:scale-[1.03] hover:shadow-[#2563EB]/30 transition-all duration-300 flex items-center gap-2">
                                Search
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* AI discovery label */}
                    {/* <p className="mt-2.5 text-xs text-[#94A3B8] text-center font-medium">
                        ✦ AI-powered article discovery — find exactly what you need
                    </p> */}
                </motion.div>

                {/* ── Category chips ── */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.45 }}
                    className="flex flex-wrap justify-center gap-2.5 mb-20"
                >
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.06 }}
                            onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
                            className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-250 cursor-pointer"
                            style={{
                                color: activeCategory === cat.label ? "#fff" : cat.color,
                                background: activeCategory === cat.label
                                    ? `${cat.color}`
                                    : cat.bg,
                                borderColor: cat.border,
                                backdropFilter: "blur(8px)",
                                boxShadow: activeCategory === cat.label ? `0 4px 16px ${cat.color}40` : "none",
                            }}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div> */}
            </div>

            {/* Bottom fade into page body */}
            <div className="pointer-events-none h-16 mt-0 bg-gradient-to-b from-transparent to-[#F8FAFC]" />
        </section>
    );
}
