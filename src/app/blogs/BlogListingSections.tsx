"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
    ArrowRight,
    Clock,
    User,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    Sparkles,
    BookOpen,
    Zap,
    Star,
    ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const categories = [
    { label: "All", color: "#16C47F", activeGrad: "from-[#16C47F] to-[#2563EB]" },
    { label: "Study Tips", color: "#2563EB", activeGrad: "from-[#2563EB] to-[#7C3AED]" },
    { label: "Exam Preparation", color: "#7C3AED", activeGrad: "from-[#7C3AED] to-[#2563EB]" },
    { label: "Parenting", color: "#16C47F", activeGrad: "from-[#16C47F] to-[#2563EB]" },
    { label: "Career Guidance", color: "#F59E0B", activeGrad: "from-[#F59E0B] to-[#EF4444]" },
    { label: "Tutor Resources", color: "#2563EB", activeGrad: "from-[#2563EB] to-[#16C47F]" },
    { label: "Online Learning", color: "#7C3AED", activeGrad: "from-[#7C3AED] to-[#EC4899]" },
];

const blogPosts = [
    {
        cat: "Study Tips", catColor: "#2563EB",
        catBg: "rgba(37,99,235,0.09)",
        catBorder: "rgba(37,99,235,0.2)",
        title: "Best Study Techniques for Faster Learning",
        desc: "Unlock science-backed methods including spaced repetition, active recall, and the Feynman Technique to absorb complex topics faster.",
        author: "Priya Sharma", role: "Senior Educator", readTime: "5 min",
        grad: "from-[#2563EB] to-[#7C3AED]",
        imgBg: "from-[rgba(37,99,235,0.12)] to-[rgba(124,58,237,0.1)]",
        image: "https://studycornerbd.com/wp-content/uploads/2026/05/Best-Study-Techniques-That-Boost-Memory-Fast--1024x538.webp",
        tag: "Trending",
        authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c",
    },
    {
        id: "reduce-academic-stress",
        cat: "Parenting", catColor: "#16C47F", catBg: "rgba(22,196,127,0.09)", catBorder: "rgba(22,196,127,0.2)",
        title: "How Parents Can Reduce Their Child's Academic Stress",
        desc: "Practical, empathy-driven approaches parents can use to create a healthy learning environment at home without added pressure.",
        author: "Meera Iyer", role: "Child Psychologist", readTime: "6 min",
        grad: "from-[#16C47F] to-[#2563EB]",
        imgBg: "from-[rgba(22,196,127,0.12)] to-[rgba(37,99,235,0.1)]",
        image: "https://www.chirec.ac.in/wp-content/uploads/sites/27/2026/03/How-to-handle-academic-address.jpg",
        tag: "Popular",
        authorImage: "https://img.freepik.com/premium-photo/beautiful-indian-teacher-sari-standing-front-blackboard_979520-60712.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        cat: "Online Learning", catColor: "#7C3AED", catBg: "rgba(124,58,237,0.09)", catBorder: "rgba(124,58,237,0.2)",
        title: "5 Effective Time Management Tips for Students",
        desc: "From time-blocking to the Pomodoro method — master your schedule and boost academic output without burning out.",
        author: "Aryan Kapoor", role: "EdTech Researcher", readTime: "4 min",
        grad: "from-[#7C3AED] to-[#2563EB]",
        imgBg: "from-[rgba(124,58,237,0.12)] to-[rgba(37,99,235,0.1)]",
        image: "https://chrysalishigh.com/wp-content/uploads/2023/12/Quick-tips-for-Time-Management.jpg",
        tag: "New",
        authorImage: "https://img.magnific.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        cat: "Exam Preparation", catColor: "#F59E0B", catBg: "rgba(245,158,11,0.09)", catBorder: "rgba(245,158,11,0.2)",
        title: "Complete Guide to Cracking Board Exams in 2025",
        desc: "A structured 90-day preparation roadmap with subject-wise strategies, mock test plans, and revision schedules.",
        author: "Ravi Menon", role: "Academic Coach", readTime: "8 min",
        grad: "from-[#F59E0B] to-[#EF4444]",
        imgBg: "from-[rgba(245,158,11,0.12)] to-[rgba(239,68,68,0.08)]",
        image: "https://etimg.etb2bimg.com/photo/118120106.cms",
        tag: "Featured",
        authorImage: "https://drsumaorthodontist.com/wp-content/uploads/2023/01/Testimonials-21.png",
    },
    {
        cat: "Career Guidance", catColor: "#2563EB", catBg: "rgba(37,99,235,0.09)", catBorder: "rgba(37,99,235,0.2)",
        title: "Top Career Paths After Class 12 Science in India",
        desc: "Beyond medicine and engineering — discover emerging fields like data science, biotechnology, and design that reward curiosity.",
        author: "Sneha Patel", role: "Career Counsellor", readTime: "7 min",
        grad: "from-[#2563EB] to-[#16C47F]",
        imgBg: "from-[rgba(37,99,235,0.12)] to-[rgba(22,196,127,0.1)]",
        image: "https://deshbhagatuniversity.in/wp-content/uploads/2025/05/best-career-options-after-12th-science.webp",
        tag: "Trending",
        authorImage: "https://st4.depositphotos.com/5653638/41712/i/450/depositphotos_417127190-stock-photo-portrait-indian-lady-teacher-saree.jpg",
    },
    {
        cat: "Tutor Resources", catColor: "#16C47F", catBg: "rgba(22,196,127,0.09)", catBorder: "rgba(22,196,127,0.2)",
        title: "How to Explain Difficult Concepts Simply and Memorably",
        desc: "Teaching techniques every tutor should know — analogies, visual storytelling, and the chunking method for maximum student retention.",
        author: "Rahul Kumar", role: "Mathematics Tutor", readTime: "5 min",
        grad: "from-[#16C47F] to-[#7C3AED]",
        imgBg: "from-[rgba(22,196,127,0.12)] to-[rgba(124,58,237,0.1)]",
        image: "https://www.nitsotech.com/wp-content/uploads/Tips-For-Simplifying-Complex-Ideas-to-Explain-Non-Experts.jpg",
        tag: "New",
        authorImage: "https://img.magnific.com/premium-photo/full-body-portrait-photo-happy-indian-school-male-teacher-standing-proudly-blurred-background-o_928503-3759.jpg?semt=ais_hybrid&w=740&q=80",
    },
];

const featuredBlogs = [
    {
        id: "improve-concentration-while-studying",
        category: "Study Tips",
        readTime: "7 min read",

        title: "How to Improve Concentration While Studying",

        highlight: "Concentration",

        description:
            "Discover practical techniques to improve focus, reduce distractions, and build better study habits for long-term academic success.",

        image:
            "https://www.intervaledu.com/media/blog/How_to_Focus_on_Studies_Proven_Techniques_to_Improve_Concentration__Productivity_in_2025.webp",

        authorImage:
            "https://st3.depositphotos.com/1177973/14750/i/450/depositphotos_147505703-stock-photo-indian-female-teacher.jpg",

        author: "Dr. Ananya Verma",

        role: "Learning Science Expert · Tutoo",

        reads: "2.4k reads this week",
    },

    {
        id: "crack-board-exams-2026",
        category: "Exam Preparation",
        readTime: "9 min read",

        title: "Smart Strategies to Crack Board Exams in 2026",

        highlight: "Board Exams",

        description:
            "Build a winning exam preparation strategy using revision systems, mock testing, and AI-powered study planning.",

        image:
            "https://homeshiksha.com/wp-content/uploads/2026/03/Common-Mistakes-in-Board-Exams-2026-and-How-to-Avoid-Them-1024x683.png",

        authorImage:
            "https://media.istockphoto.com/id/1289489558/photo/young-indian-female-school-teacher-or-college-professor.jpg?s=612x612&w=0&k=20&c=cylXQXXGqrgcmWY4mgl17yqXJXqgvvImtFFoQkD3Uco=",

        author: "Riya Mehta",

        role: "Academic Mentor · Tutoo",

        reads: "4.1k reads this week",
    },

    {
        id: "how-parents-can-reduce-academic-pressure",
        category: "Parenting",
        readTime: "6 min read",

        title: "How Parents Can Reduce Academic Pressure",

        highlight: "Academic Pressure",

        description:
            "Learn how to create a healthier learning environment and support your child emotionally during exams and daily studies.",

        image:
            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1400&auto=format&fit=crop",

        authorImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",

        author: "Meera Iyer",

        role: "Child Psychologist · Tutoo",

        reads: "1.9k reads this week",
    },
];

const tagMap: Record<string, { color: string; bg: string }> = {
    Trending: { color: "#2563EB", bg: "rgba(37,99,235,0.1)" },
    Popular: { color: "#16C47F", bg: "rgba(22,196,127,0.1)" },
    New: { color: "#7C3AED", bg: "rgba(124,58,237,0.1)" },
    Featured: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
};


/* ─────────────────────────────────────────────
   BLOG CARD
───────────────────────────────────────────── */
function BlogCard({
    post,
    index,
}: {
    post: typeof blogPosts[0];
    index: number;
}) {

    const navigate = useNavigate();

    const tagStyle = tagMap[post.tag];

    return (

        <motion.div

            initial={{ opacity: 0, y: 28 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
            }}

            viewport={{ once: true }}

            whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
            }}

            onClick={() => navigate(`/blog/${post.id}`)}

            className="
            group
            rounded-3xl
            border
            overflow-hidden
            flex
            flex-col
            cursor-pointer
            transition-all
            duration-300
            hover:border-[#2563EB]/20
            "

            style={{
                background: "rgba(255,255,255,0.92)",
                borderColor: "rgba(15,23,42,0.07)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
            }}
        >

            {/* Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F8FAFC]">

                {/* Blog Image */}
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
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.06]
          will-change-transform
          "

                    loading="lazy"
                />

                {/* Overlay */}
                <div
                    className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0B1220]/55
          via-[#0B1220]/10
          to-transparent
          "
                />

                {/* Decorative orb */}
                <div className="absolute inset-0 flex items-center justify-center">

                    <div
                        className={`
            w-44
            h-44
            rounded-full
            bg-gradient-to-br
            ${post.grad}
            opacity-20
            `}
                        style={{
                            filter: "blur(36px)",
                            transform: "translate(-8px, 8px)",
                        }}
                    />

                    <div
                        className={`
            absolute
            w-28
            h-28
            rounded-full
            bg-gradient-to-br
            ${post.grad}
            opacity-15
            `}
                        style={{
                            filter: "blur(20px)",
                            transform: "translate(20px, -12px)",
                        }}
                    />
                </div>

                {/* Pattern lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(45deg, #0F172A 1px, transparent 1px), linear-gradient(-45deg, #0F172A 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Category */}
                <div className="absolute top-4 left-4 flex items-center gap-2">

                    <span
                        className="
            px-3
            py-1.5
            rounded-full
            text-xs
            font-bold
            backdrop-blur-xl
            "
                        style={{
                            color: post.catColor,
                            background: post.catBg,
                            border: `1px solid ${post.catBorder}`,
                        }}
                    >
                        {post.cat}
                    </span>
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4">

                    <span
                        className="
            px-2.5
            py-1
            rounded-full
            text-[10px]
            font-bold
            backdrop-blur-xl
            "
                        style={{
                            color: tagStyle.color,
                            background: tagStyle.bg,
                            border: `1px solid ${tagStyle.color}30`,
                        }}
                    >
                        {post.tag}
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
          text-[10px]
          font-semibold
          text-white
          bg-black/30
          backdrop-blur-xl
          "
                >

                    <Clock className="w-3 h-3" />

                    {post.readTime} read
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">

                {/* Title */}
                <h3
                    className="
          text-base
          font-bold
          text-[#0F172A]
          leading-snug
          mb-3
          group-hover:text-[#2563EB]
          transition-colors
          duration-300
          line-clamp-2
          "
                    style={{
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#64748B] mb-5 flex-1 line-clamp-2">
                    {post.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(15,23,42,0.06)]">

                    {/* Author */}
                    <div className="flex items-center gap-2.5">

                        <div className="relative shrink-0">

                            {/* Glow */}
                            <div
                                className={`
                absolute
                inset-0
                rounded-full
                bg-gradient-to-br
                ${post.grad}
                opacity-40
                blur-md
                `}
                            />

                            {/* Author Image */}
                            <img
                                src={post.authorImage}
                                alt={post.author}

                                className="
                relative
                w-10
                h-10
                rounded-full
                object-cover
                border-2
                border-white
                shadow-md
                "
                            />
                        </div>

                        <div>

                            <p className="text-xs font-bold text-[#0F172A]">
                                {post.author}
                            </p>

                            <p className="text-[10px] text-[#94A3B8]">
                                {post.role}
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <button

                        onClick={(e) => {

                            e.stopPropagation();

                            navigate(`/blog/${post.id}`);
                        }}

                        className="
            group/btn
            flex
            items-center
            gap-1
            text-xs
            font-bold
            text-[#2563EB]
            hover:text-[#16C47F]
            transition-colors
            duration-300
            "
                    >

                        Read

                        <ArrowRight
                            className="
              w-3.5
              h-3.5
              group-hover/btn:translate-x-0.5
              transition-transform
              duration-300
              "
                        />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}


/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function BlogListingSections() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const catScrollRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

    const scrollCats = (dir: "left" | "right") => {
        if (!catScrollRef.current) return;
        catScrollRef.current.scrollBy({ left: dir === "right" ? 180 : -180, behavior: "smooth" });
    };

    const filtered = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.cat === activeCategory || p.cat.includes(activeCategory));

    const visible = showAll ? filtered : filtered.slice(0, 6);

    // Featured blog slider state and handlers
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === featuredBlogs.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? featuredBlogs.length - 1 : prev - 1
        );
    };

    const activeBlog = featuredBlogs[activeIndex];


    return (
        <>
            {/* ══════════════════════════════════════════════
                SECTION 2 — CATEGORIES
            ══════════════════════════════════════════════ */}
            <section className="relative bg-[#F8FAFC] pt-16 pb-4 overflow-hidden">
                {/* Subtle bg glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] rounded-full opacity-30 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        {/* Left arrow */}
                        <button onClick={() => scrollCats("left")}
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(15,23,42,0.08)] bg-white shadow-sm hover:shadow-md hover:border-[rgba(37,99,235,0.2)] transition-all duration-250 hidden lg:flex">
                            <ChevronLeft className="w-4 h-4 text-[#64748B]" />
                        </button>

                        {/* Scrollable pills */}
                        <div ref={catScrollRef}
                            className="flex items-center gap-3 overflow-x-auto scrollbar-none flex-1 py-2"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat.label;
                                return (
                                    <motion.button
                                        key={cat.label}
                                        onClick={() => setActiveCategory(cat.label)}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-250 whitespace-nowrap`}
                                        style={
                                            isActive
                                                ? { background: `linear-gradient(135deg, ${cat.color}, #2563EB)`, color: "#fff", border: "1px solid transparent", boxShadow: `0 4px 20px ${cat.color}40` }
                                                : { background: "rgba(255,255,255,0.85)", color: "#0F172A", borderColor: "rgba(15,23,42,0.09)", backdropFilter: "blur(8px)", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }
                                        }
                                    >
                                        {cat.label}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Right arrow */}
                        <button onClick={() => scrollCats("right")}
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(15,23,42,0.08)] bg-white shadow-sm hover:shadow-md hover:border-[rgba(37,99,235,0.2)] transition-all duration-250 hidden lg:flex">
                            <ChevronRight className="w-4 h-4 text-[#64748B]" />
                        </button>
                    </motion.div>

                    {/* Active indicator strip */}
                    <motion.div layout className="flex justify-center mt-4">
                        <div className="h-0.5 rounded-full w-24 bg-gradient-to-r from-[#16C47F] to-[#2563EB] opacity-50" />
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 3 — FEATURED BLOG
            ══════════════════════════════════════════════ */}
            <section className="relative bg-[#F8FAFC] py-16 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                    <div
                        className="absolute -top-20 right-0 w-[500px] h-[400px] rounded-full opacity-20"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(22,196,127,0.15), transparent 70%)",
                            filter: "blur(60px)",
                        }}
                    />

                    <div
                        className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-15"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)",
                            filter: "blur(50px)",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">

                        <div>

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#16C47F] bg-[#16C47F]/10 border border-[#16C47F]/20 backdrop-blur-xl">
                                Featured Resources
                            </span>

                            <h2
                                className="mt-5 text-4xl lg:text-5xl font-black text-[#0B1220]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Featured{" "}
                                <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                                    Learning Insights
                                </span>
                            </h2>
                        </div>

                        {/* Slider Buttons */}
                        <div className="hidden md:flex items-center gap-3">

                            <button
                                onClick={prevSlide}
                                aria-label="Previous articles"
                                className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white/80
                        backdrop-blur-xl
                        border
                        border-white
                        shadow-lg
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        hover:border-[#2563EB]/30
                        transition-all
                        duration-300
                        "
                            >
                                <ArrowLeft className="w-5 h-5 text-[#0F172A]" />
                            </button>

                            <button
                                onClick={nextSlide}
                                aria-label="Next articles"
                                className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#16C47F]
                        to-[#2563EB]
                        shadow-xl
                        shadow-[#2563EB]/20
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition-all
                        duration-300
                        "
                            >
                                <ArrowRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Slider */}
                    <AnimatePresence mode="wait">

                        <motion.div
                            key={activeIndex}

                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}

                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}

                            className="
                        relative
                        rounded-[36px]
                        overflow-hidden
                        border
                        border-white
                        bg-white/80
                        backdrop-blur-2xl
                        shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                        "
                        >

                            <div className="grid lg:grid-cols-[1fr_1.05fr] min-h-[500px]">

                                {/* LEFT IMAGE */}
                                <div className="relative overflow-hidden">

                                    <img
                                        src={activeBlog.image}
                                        alt={activeBlog.title}

                                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-105
                            "
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/55 via-[#0B1220]/10 to-transparent" />

                                    {/* Featured Badge */}
                                    <div className="absolute bottom-6 left-6">

                                        <span
                                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                text-xs
                                font-bold
                                text-[#16C47F]
                                bg-white/10
                                backdrop-blur-xl
                                border
                                border-white/10
                                "
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />

                                            Featured Article
                                        </span>
                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="flex flex-col justify-center p-10 lg:p-14">

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-6">

                                        <span
                                            className="
                                px-4
                                py-1.5
                                rounded-full
                                text-xs
                                font-bold
                                text-[#2563EB]
                                bg-[#2563EB]/10
                                border
                                border-[#2563EB]/15
                                "
                                        >
                                            {activeBlog.category}
                                        </span>

                                        <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-medium">

                                            <Clock className="w-3.5 h-3.5" />

                                            {activeBlog.readTime}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2
                                        className="
                            text-3xl
                            lg:text-5xl
                            font-black
                            leading-[1.12]
                            tracking-tight
                            text-[#0B1220]
                            mb-6
                            "
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {activeBlog.title
                                            .split(activeBlog.highlight)
                                            .map((part, i, arr) => (
                                                <>
                                                    {part}

                                                    {i !== arr.length - 1 && (
                                                        <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                                                            {activeBlog.highlight}
                                                        </span>
                                                    )}
                                                </>
                                            ))}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-base leading-8 text-[#64748B] mb-10 max-w-lg">
                                        {activeBlog.description}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 mb-10">

                                        <div className="relative">

                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/40 to-[#7C3AED]/40 blur-xl" />

                                            <img
                                                src={activeBlog.authorImage}
                                                alt={activeBlog.author}

                                                className="
                                relative
                                w-14
                                h-14
                                rounded-full
                                object-cover
                                border-2
                                border-white
                                shadow-lg
                                "
                                            />

                                            <div
                                                className="
                                absolute
                                bottom-0
                                right-0
                                w-3.5
                                h-3.5
                                rounded-full
                                bg-[#16C47F]
                                border-2
                                border-white
                                "
                                            />
                                        </div>

                                        <div>

                                            <p className="text-sm font-bold text-[#0F172A]">
                                                {activeBlog.author}
                                            </p>

                                            <p className="text-xs text-[#64748B] mt-1">
                                                {activeBlog.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-wrap items-center gap-6">

                                        <button
                                            type="button"
                                            onClick={() => navigate(`/blog/${activeBlog.id}`)}
                                            className="
                                            group
                                            h-12
                                            px-7
                                            rounded-2xl
                                            bg-gradient-to-r
                                            from-[#16C47F]
                                            to-[#2563EB]
                                            text-white
                                            text-sm
                                            font-bold
                                            shadow-xl
                                            shadow-[#2563EB]/20
                                            hover:scale-[1.02]
                                            transition-all
                                            duration-300
                                            flex
                                            items-center
                                            gap-2
                                            "
                                        >
                                            Read Full Article

                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">

                                            <TrendingUp className="w-4 h-4 text-[#16C47F]" />

                                            <span>{activeBlog.reads}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 4 — BLOG GRID
            ══════════════════════════════════════════════ */}

            <section className="relative bg-[#F8FAFC] py-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
                        style={{ background: "radial-gradient(circle, rgba(22,196,127,0.1), transparent 70%)", filter: "blur(60px)" }} />
                </div>

                <div ref={gridRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between mb-10"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <BookOpen className="w-5 h-5 text-[#2563EB]" />
                                <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider">All Articles</span>
                            </div>
                            <h2 className="text-3xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Explore the{" "}
                                <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">Knowledge Hub</span>
                            </h2>
                        </div>

                        {/* Floating stats */}
                        <div className="hidden lg:flex items-center gap-3">
                            {[
                                { icon: TrendingUp, label: "Trending", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.18)" },
                                { icon: Sparkles, label: "500+ Articles", color: "#16C47F", bg: "rgba(22,196,127,0.08)", border: "rgba(22,196,127,0.18)" },
                            ].map((chip) => (
                                <div key={chip.label} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border"
                                    style={{ color: chip.color, background: chip.bg, borderColor: chip.border }}>
                                    <chip.icon className="w-3.5 h-3.5" />
                                    {chip.label}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {visible.map((post, i) => (
                            <BlogCard key={post.title} post={post} index={i} />
                        ))}
                    </div>

                    {/* Empty state */}
                    {visible.length === 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
                            <p className="text-[#94A3B8] text-base font-medium">No articles found in this category yet.</p>
                        </motion.div>
                    )}

                    {/* Load More */}
                    {filtered.length > 6 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center mt-14"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(37,99,235,0.18)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowAll(!showAll)}
                                className="group h-14 px-10 rounded-2xl text-sm font-bold border transition-all duration-300 flex items-center gap-2"
                                style={{ background: "rgba(255,255,255,0.9)", borderColor: "rgba(15,23,42,0.1)", color: "#0F172A", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.07)" }}
                            >
                                {showAll ? "Show Less" : "Load More Articles"}
                                <ArrowRight className={`w-4 h-4 text-[#2563EB] transition-transform duration-300 ${showAll ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
                            </motion.button>
                        </motion.div>
                    )}

                    {/* Bottom floating strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 mt-12"
                    >
                        {[
                            { label: "500+ Articles", color: "#16C47F", bg: "rgba(22,196,127,0.07)", border: "rgba(22,196,127,0.18)" },
                            { label: "✦ AI Learning Insights", color: "#7C3AED", bg: "rgba(124,58,237,0.07)", border: "rgba(124,58,237,0.18)" },
                            { label: "↑ Top Study Resources", color: "#2563EB", bg: "rgba(37,99,235,0.07)", border: "rgba(37,99,235,0.18)" },
                            { label: "⚡ New Blogs Added Weekly", color: "#F59E0B", bg: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.18)" },
                        ].map((chip) => (
                            <span key={chip.label} className="inline-flex items-center text-[11px] font-semibold px-3.5 py-2 rounded-full border"
                                style={{ color: chip.color, background: chip.bg, borderColor: chip.border }}>
                                {chip.label}
                            </span>
))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
