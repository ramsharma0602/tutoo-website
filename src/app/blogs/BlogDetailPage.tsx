"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
    ArrowRight,
    Clock,
    Calendar,
    User,
    Share2,
    BookOpen,
    CheckCircle2,
    Sparkles,
    ChevronLeft,
    TrendingUp,
    Quote,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { BLOG_POSTS, BlogSection } from "./data/BlogPostData";


/* ─────────────────────────────────────────────
   CONTENT RENDERERS
───────────────────────────────────────────── */
function RenderSection({ section, index }: { section: BlogSection; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            viewport={{ once: true }}
        >
            {section.type === "intro" && (
                <p className="text-xl leading-[1.85] text-[#0F172A] font-medium mb-8">{section.text}</p>
            )}
            {section.type === "heading" && (
                <h2 className="text-2xl lg:text-3xl font-black text-[#0B1220] mt-12 mb-5 tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    {section.text}
                </h2>
            )}
            {section.type === "paragraph" && (
                <p className="text-lg leading-[1.85] text-[#334155] mb-6">{section.text}</p>
            )}
            {section.type === "tip" && (
                <div className="my-8 rounded-2xl border-l-4 border-[#16C47F] p-6 flex gap-4"
                    style={{ background: "rgba(22,196,127,0.06)", border: "1px solid rgba(22,196,127,0.18)", borderLeftWidth: 4, borderLeftColor: "#16C47F" }}>
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shrink-0 shadow-md mt-0.5">
                        <span className="text-base">💡</span>
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-[#059669] mb-2">Pro Tip</p>
                        <p className="text-base leading-relaxed text-[#0F172A] font-medium">{section.text}</p>
                    </div>
                </div>
            )}
            {section.type === "quote" && (
                <div className="my-10 relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#2563EB] to-[#16C47F]" />
                    <Quote className="w-8 h-8 text-[#2563EB] opacity-20 mb-2" />
                    <p className="text-2xl font-bold italic text-[#0B1220] leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        "{section.text}"
                    </p>
                    {section.attribution && (
                        <p className="text-sm text-[#64748B] font-semibold">— {section.attribution}</p>
                    )}
                </div>
            )}
            {section.type === "checklist" && (
                <div className="my-8 rounded-2xl border p-6 flex flex-col gap-3"
                    style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(15,23,42,0.08)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.05)" }}>
                    <p className="text-sm font-black uppercase tracking-widest text-[#2563EB] mb-1">Quick Checklist</p>
                    {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-base text-[#0F172A] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            )}
            {section.type === "numbered" && (
                <div className="my-6 flex flex-col gap-6">
                    {section.items.map((item, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-sm font-black shadow-md">
                                {i + 1}
                            </div>
                            <div className="flex-1 pt-1">
                                <h4 className="text-base font-bold text-[#0B1220] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h4>
                                <p className="text-base leading-relaxed text-[#334155]">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────── */
interface BlogDetailPageProps {
    postId?: string;           // pass from router params
    onBack?: () => void;       // optional nav callback
    onSelectPost?: (id: string) => void;
}

export function BlogDetailPage({
    onBack,
    onSelectPost,
}: BlogDetailPageProps) {

    const { slug } = useParams();

    const navigate = useNavigate();

    /* ACTIVE BLOG */
    const [activePost, setActivePost] =
        useState(
            BLOG_POSTS.find(
                (item) => item.id === slug
            ) || BLOG_POSTS[0]
        );

    /* UPDATE BLOG WHEN ROUTE CHANGES */
    useEffect(() => {

        const foundPost =
            BLOG_POSTS.find(
                (item) => item.id === slug
            );

        if (foundPost) {

            setActivePost(foundPost);
        }

        /* SCROLL TOP */
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, [slug]);

    /* CURRENT BLOG */
    const post = activePost;

    /* ARTICLE REF */
    const articleRef =
        useRef<HTMLDivElement>(null);

    /* READING PROGRESS */
    const { scrollYProgress } = useScroll({
        target: articleRef,
        offset: ["start start", "end end"],
    });

    const scaleX = useSpring(
        scrollYProgress,
        {
            stiffness: 120,
            damping: 30,
        }
    );

    /* RELATED BLOG NAVIGATION */
    const handleRelated = (id: string) => {

        /* FIND BLOG */
        const selectedBlog =
            BLOG_POSTS.find(
                (item) => item.id === id
            );

        /* IF BLOG EXISTS */
        if (selectedBlog) {

            /* UPDATE STATE */
            setActivePost(selectedBlog);

            /* OPTIONAL CALLBACK */
            onSelectPost?.(selectedBlog.id);

            /* NAVIGATE */
            navigate(`/blog/${selectedBlog.id}`);

            /* SCROLL TO TOP */
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="relative bg-[#F8FAFC] min-h-screen mt-20" ref={articleRef}>

            {/* ── Reading progress bar ── */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
                style={{ scaleX, background: "linear-gradient(90deg, #16C47F, #2563EB, #7C3AED)" }}
            />

            {/* ── Floating share button ── */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hidden lg:flex"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,23,42,0.09)", backdropFilter: "blur(12px)" }}
                title="Share article"
            >
                <Share2 className="w-4 h-4 text-[#64748B]" />
            </motion.button>

            {/* ── Back navigation ── */}
            {onBack && (
                <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
                    <button onClick={onBack}
                        className="flex items-center gap-2 text-sm font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors duration-250">
                        <ChevronLeft className="w-4 h-4" /> Back to Blog
                    </button>
                </div>
            )}

            {/* ══════════════════════════
                SECTION 1 — HERO
            ══════════════════════════ */}
            <section className="relative overflow-hidden pt-16 pb-12">
                {/* BG glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30"
                        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
                    <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(50px)" }} />
                    <div className="absolute inset-0 opacity-100"
                        style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
                    {/* Particles */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div key={i} className="absolute rounded-full"
                            style={{ width: 2, height: 2, background: i % 2 === 0 ? "#16C47F" : "#2563EB", left: `${(i * 18 + 5) % 95}%`, top: `${(i * 13 + 6) % 80}%`, opacity: 0.35 }}
                            animate={{ y: [0, -14, 0], opacity: [0.25, 0.6, 0.25] }}
                            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }} />
                    ))}
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    {/* Category badge */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex justify-center mb-7">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
                            style={{ background: post.categoryBg, borderColor: post.categoryBorder, backdropFilter: "blur(12px)" }}>
                            <span className="text-sm">📚</span>
                            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: post.categoryColor }}>
                                {post.category}
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0B1220] mb-7"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        {post.title.split(post.highlight).map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                    <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                                        {post.highlight}
                                    </span>
                                )}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Description */}
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
                        className="text-xl leading-8 text-[#64748B] max-w-2xl mx-auto mb-8">
                        {post.description}
                    </motion.p>

                    {/* Meta */}
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
                        className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-medium">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                        <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-medium">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#7C3AED]"
                            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)" }}>
                            <Sparkles className="w-3 h-3" /> AI Summary Available
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════
                SECTION 2 — HERO IMAGE
            ══════════════════════════ */}
            <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative rounded-3xl overflow-hidden h-[400px] lg:h-[600px] bg-gradient-to-br ${post.heroGrad}`}
                    style={{ boxShadow: "0 24px 80px rgba(15,23,42,0.13)" }}
                >

                    {/* Hero Image */}
                    <img
                        src={post.image}
                        alt={post.title}

                        className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                    "
                    />

                    {/* Floating elements */}
                    {[
                        { icon: BookOpen, pos: "top-10 left-12", delay: 0 },
                        { icon: TrendingUp, pos: "top-10 right-14", delay: 0.7 },
                        { icon: Sparkles, pos: "bottom-10 left-16", delay: 1.2 },
                        { icon: CheckCircle2, pos: "bottom-10 right-12", delay: 0.4 },
                    ].map((el, i) => (
                        <motion.div key={i} className={`absolute ${el.pos}`}
                            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3.5, repeat: Infinity, delay: el.delay }}>
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
                                style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                                <el.icon className="w-6 h-6 text-white" />
                            </div>
                        </motion.div>
                    ))}
                    {/* Category label on image */}
                    <div className="absolute bottom-6 left-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
                            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                            ✦ {post.category}
                        </span>
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-white"
                        style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)" }}>
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </div>
                </motion.div>
            </section>

            {/* ══════════════════════════
                SECTION 3 — BLOG CONTENT
            ══════════════════════════ */}
            <section className="max-w-3xl mx-auto px-6 lg:px-8 mb-20">
                {post.sections.map((section, i) => (
                    <RenderSection key={i} section={section} index={i} />
                ))}
            </section>

            {/* ══════════════════════════
                SECTION 4 — AUTHOR CARD
            ══════════════════════════ */}
            <section className="max-w-3xl mx-auto px-6 lg:px-8 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
                    style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.08)", backdropFilter: "blur(16px)", boxShadow: "0 8px 40px rgba(15,23,42,0.07)" }}
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-xl shrink-0">
                        <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                        <p className="text-lg font-black text-[#0B1220] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{post.author}</p>
                        <p className="text-sm font-semibold text-[#2563EB] mb-3">{post.authorRole}</p>
                        <p className="text-sm leading-relaxed text-[#64748B]">{post.authorBio}</p>
                    </div>
                </motion.div>
            </section>

            {/* ══════════════════════════
                SECTION 5 — RELATED
            ══════════════════════════ */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        Continue Reading
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-[rgba(37,99,235,0.2)] to-transparent" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">

                    {post.related.map((rel, i) => (

                        <motion.div
                            key={rel.id}

                            initial={{ opacity: 0, y: 24 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ delay: i * 0.1 }}

                            viewport={{ once: true }}

                            whileHover={{
                                y: -6,
                                boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
                            }}

                            className="
                            group
                            cursor-pointer
                            rounded-[28px]
                            border
                            overflow-hidden
                            transition-all
                            duration-500
                            bg-white/90
                            backdrop-blur-xl
                            hover:border-[#2563EB]/20
                            "
                            style={{
                                borderColor: "rgba(15,23,42,0.07)",
                                boxShadow: "0 6px 30px rgba(15,23,42,0.06)",
                            }}

                            onClick={() => handleRelated(rel.id)}
                        >

                            {/* Thumbnail */}
                            <div className="relative h-52 overflow-hidden bg-[#F8FAFC]">

                                {/* Blog Image */}
                                <img
                                    src={rel.image}
                                    alt={rel.title}

                                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.06]
                        "
                                />

                                {/* Overlay */}
                                <div
                                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0B1220]/60
                        via-[#0B1220]/10
                        to-transparent
                        "
                                />

                                {/* Gradient Layer */}
                                <div
                                    className={`
                        absolute
                        inset-0
                        bg-gradient-to-br
                        ${rel.grad}
                        opacity-20
                        `}
                                />

                                {/* Texture */}
                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(45deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                                        backgroundSize: "28px 28px",
                                    }}
                                />

                                {/* Category */}
                                <div className="absolute top-4 left-4">

                                    <span
                                        className="
                            px-3.5
                            py-1.5
                            rounded-full
                            text-xs
                            font-bold
                            backdrop-blur-xl
                            "
                                        style={{
                                            color: rel.categoryColor,
                                            background: rel.categoryBg,
                                            border: `1px solid ${rel.categoryColor}30`,
                                        }}
                                    >
                                        {rel.category}
                                    </span>
                                </div>

                                {/* Read Time */}
                                <div
                                    className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        items-center
                        gap-1
                        px-3
                        py-1.5
                        rounded-full
                        text-[11px]
                        font-semibold
                        text-white
                        bg-black/30
                        backdrop-blur-xl
                        "
                                >

                                    <Clock className="w-3 h-3" />

                                    {rel.readTime}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                {/* Title */}
                                <h3
                                    className="
                        text-[15px]
                        font-black
                        text-[#0F172A]
                        leading-[1.5]
                        mb-4
                        group-hover:text-[#2563EB]
                        transition-colors
                        duration-300
                        line-clamp-2
                        "
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                    }}
                                >
                                    {rel.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-7 text-[#64748B] mb-6 line-clamp-2">
                                    {rel.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-5 border-t border-[rgba(15,23,42,0.06)]">

                                    {/* Author */}
                                    <div className="flex items-center gap-3">

                                        <img
                                            src={rel.authorImage}
                                            alt={rel.author}

                                            className="
                            w-10
                            h-10
                            rounded-full
                            object-cover
                            border-2
                            border-white
                            shadow-md
                            "
                                        />

                                        <div>

                                            <p className="text-xs font-bold text-[#0F172A]">
                                                {rel.author}
                                            </p>

                                            <p className="text-[10px] text-[#94A3B8] mt-0.5">
                                                {rel.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            navigate(`/blog/${rel.id}`);
                                        }}

                                        className="
                            group/btn
                            flex
                            items-center
                            gap-1.5
                            text-xs
                            font-bold
                            text-[#2563EB]
                            hover:text-[#16C47F]
                            transition-colors
                            duration-300
                            "
                                    >
                                        Read Article

                                        <ArrowRight
                                            className="
                            w-3.5
                            h-3.5
                            group-hover/btn:translate-x-1
                            transition-transform
                            duration-300
                            "
                                        />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </section>

            {/* ══════════════════════════
                SECTION 6 — CTA BANNER
            ══════════════════════════ */}
            <section className="relative overflow-hidden mx-6 lg:mx-auto max-w-7xl rounded-[32px] mb-20"
                style={{ background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)" }}>

                {/* BG effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
                    <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-25"
                        style={{ background: "radial-gradient(circle, rgba(22,196,127,0.2), transparent 70%)", filter: "blur(60px)" }} />
                    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(60px)" }} />
                    <div className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
                    {/* Stripe */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />
                </div>

                <div className="relative z-10 py-20 px-8 lg:px-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{ background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.25)" }}>
                            <Sparkles className="w-4 h-4 text-[#16C47F]" />
                            <span className="text-sm font-semibold text-[#16C47F]">Get Started Today</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-white mb-5"
                            style={{ fontFamily: "var(--font-heading)" }}>
                            Need Academic Support for{" "}
                            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                                Your Child?
                            </span>
                        </h2>

                        <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-8">
                            Get expert tutor recommendations and a personalised learning plan designed for your child's goals.
                        </p>

                        <div className="flex justify-center mb-8">
                            <button
                                onClick={() => navigate('/book-free-assessment')}
                                className="group h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold shadow-xl shadow-[#16C47F]/25 hover:scale-[1.03] hover:shadow-[#2563EB]/30 transition-all duration-300 flex items-center gap-2 text-base">
                                Book Free Assessment
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Trust chips */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: "✓ Free Assessment", color: "#16C47F", bg: "rgba(22,196,127,0.1)", border: "rgba(22,196,127,0.22)" },
                                { label: "✓ Verified Tutors", color: "#2563EB", bg: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.22)" },
                                { label: "✓ Home & Online Tuition", color: "#7C3AED", bg: "rgba(124,58,237,0.1)", border: "rgba(124,58,237,0.22)" },
                            ].map((chip) => (
                                <span key={chip.label} className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full border"
                                    style={{ color: chip.color, background: chip.bg, borderColor: chip.border }}>
                                    {chip.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
