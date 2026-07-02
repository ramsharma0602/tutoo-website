
import { motion } from "motion/react";

import {
    GraduationCap,
    Brain,
    Users,
    Laptop,
    MessageSquare,
    TrendingUp,
    Sparkles,
    ArrowRight,
    ShieldCheck,
    Award,
    BookOpen,
    Radio,
} from "lucide-react";

export function TrainingDevelopmentSection() {

    const trainingCards = [
        {
            icon: Brain,
            title: "Teaching Methodologies",
            description:
                "Learn modern structured teaching approaches designed for effective student learning outcomes.",

            gradient: "from-[#16C47F] to-[#2563EB]",
        },

        {
            icon: Users,
            title: "Student Engagement Techniques",
            description:
                "Master interactive teaching methods that improve participation, confidence, and learning retention.",

            gradient: "from-[#2563EB] to-[#7C3AED]",
        },

        {
            icon: ShieldCheck,
            title: "Classroom Management",
            description:
                "Handle sessions professionally with better discipline, communication, and student interaction.",

            gradient: "from-[#7C3AED] to-[#16C47F]",
        },

        {
            icon: Laptop,
            title: "Technology Training",
            description:
                "Learn AI-powered teaching systems, digital tools, and virtual learning technologies.",

            gradient: "from-[#2563EB] to-[#16C47F]",
        },

        {
            icon: MessageSquare,
            title: "Communication Skills",
            description:
                "Improve parent communication, teaching clarity, and student relationship-building skills.",

            gradient: "from-[#F59E0B] to-[#7C3AED]",
        },

        {
            icon: TrendingUp,
            title: "Performance Coaching",
            description:
                "Receive expert mentorship, analytics, feedback, and professional growth guidance.",

            gradient: "from-[#16C47F] to-[#7C3AED]",
        },
    ];

    const timeline = [
        {
            title: "Onboarding",
            description: "Complete tutor onboarding and profile setup.",
            color: "#16C47F",
        },

        {
            title: "Platform Training",
            description:
                "Learn the Tutoo ecosystem, tools, and teaching systems.",
            color: "#2563EB",
        },

        {
            title: "Teaching Workshops",
            description:
                "Attend expert-led workshops focused on teaching excellence.",
            color: "#7C3AED",
        },

        {
            title: "Live Teaching",
            description:
                "Start teaching students through guided live sessions.",
            color: "#F59E0B",
        },

        {
            title: "Continuous Support",
            description:
                "Receive mentoring, analytics, and performance coaching.",
            color: "#16C47F",
        },
    ];

    // -----------------------------------------------------------------------------
    // TRAINING & DEVELOPMENT SECTION
    // Premium Light SaaS UI Version
    // -----------------------------------------------------------------------------

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F8FAFC]">

            {/* ---------------------------------------------------------------------- */}
            {/* Background                                                             */}
            {/* ---------------------------------------------------------------------- */}

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 opacity-70" />

            {/* Glow Orbs */}
            <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#16C47F]/10 rounded-full blur-3xl" />

            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#7C3AED]/10 rounded-full blur-3xl" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* ---------------------------------------------------------------------- */}
            {/* Main                                                                   */}
            {/* ---------------------------------------------------------------------- */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* ------------------------------------------------------------------ */}
                {/* Header                                                             */}
                {/* ------------------------------------------------------------------ */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-[#16C47F]/20 shadow-sm mb-8">

                        <GraduationCap className="w-4 h-4 text-[#16C47F]" />

                        <span className="text-sm font-semibold text-[#16C47F]">
                            Training & Development
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0F172A]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        We Help You Become a{" "}

                        <span className="bg-gradient-to-r from-[#16C47F] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                            Better Tutor
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-3xl mx-auto">
                        From teaching methodologies and student engagement to technology
                        training and performance coaching — Tutoo helps educators
                        continuously improve and grow professionally.
                    </p>
                </motion.div>

                {/* ------------------------------------------------------------------ */}
                {/* Feature Cards                                                      */}
                {/* ------------------------------------------------------------------ */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

                    {trainingCards.map((card, index) => {

                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              bg-white/80
              backdrop-blur-2xl
              border
              border-[#E2E8F0]
              p-8
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              hover:shadow-[0_20px_80px_rgba(37,99,235,0.12)]
              transition-all
              duration-500
              "
                            >

                                {/* Hover Gradient */}
                                <div
                                    className={`
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                ${card.gradient}
                `}
                                    style={{
                                        mixBlendMode: "soft-light",
                                    }}
                                />

                                {/* Shine */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">

                                    <div className="absolute -top-20 left-[-40%] w-[120%] h-60 rotate-12 bg-white/40 blur-3xl" />
                                </div>

                                <div className="relative z-10">

                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${card.gradient} p-[1px] shadow-lg`}>

                                        <div className="w-full h-full rounded-[27px] bg-white flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">

                                            <Icon className="w-9 h-9 text-[#0F172A]" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-8 text-2xl font-black text-[#0F172A] leading-tight">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 text-[#64748B] leading-8 text-[15px]">
                                        {card.description}
                                    </p>

                                    {/* Bottom */}
                                    <div className="mt-8 flex items-center gap-3">

                                        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center shadow-lg`}>

                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>

                                        <span className="text-sm font-bold text-[#0F172A]">
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Timeline                                                           */}
                {/* ------------------------------------------------------------------ */}

                <div className="relative mt-32">

                    {/* Line */}
                    <div className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

                    <div className="grid lg:grid-cols-5 gap-8">

                        {timeline.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="relative"
                            >

                                {/* Node */}
                                <div
                                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.25)] border border-white mx-auto"
                                    style={{
                                        background: item.color,
                                    }}
                                >

                                    <span className="text-white font-black text-lg">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Card */}
                                <div className="
              mt-8
              rounded-[28px]
              bg-white/80
              backdrop-blur-2xl
              border
              border-[#E2E8F0]
              p-6
              text-center
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              ">

                                    <h4 className="text-xl font-black text-[#0F172A]">
                                        {item.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-7 text-[#64748B]">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Certification Panel                                                */}
                {/* ------------------------------------------------------------------ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    className="
        relative
        overflow-hidden
        mt-32
        rounded-[40px]
        bg-white/80
        backdrop-blur-2xl
        border
        border-[#E2E8F0]
        p-12
        shadow-[0_20px_80px_rgba(15,23,42,0.08)]
        "
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#16C47F]/10 via-[#2563EB]/10 to-[#7C3AED]/10" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

                        {/* Left */}
                        <div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0]">

                                <Award className="w-4 h-4 text-[#16C47F]" />

                                <span className="text-sm font-semibold text-[#16C47F]">
                                    Certification Program
                                </span>
                            </div>

                            <h3 className="mt-8 text-5xl font-black leading-tight text-[#0F172A]">
                                Tutoo Certified Tutor Program
                            </h3>

                            <p className="mt-6 text-[#64748B] leading-8">
                                Earn official Tutoo certification after completing onboarding,
                                training, and teaching excellence programs.
                            </p>

                            {/* Chips */}
                            <div className="flex flex-wrap gap-4 mt-10">

                                {[
                                    "Verified Educator Badge",
                                    "Higher Student Visibility",
                                    "Performance Recognition",
                                    "Advanced Tutor Opportunities",
                                ].map((chip) => (

                                    <div
                                        key={chip}
                                        className="px-5 py-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm"
                                    >

                                        <span className="text-sm font-semibold text-[#0F172A]">
                                            {chip}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificate */}
                        <div className="relative">

                            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E2E8F0] p-10 shadow-[0_20px_80px_rgba(37,99,235,0.12)]">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl" />

                                <div className="relative z-10">

                                    {/* Header */}
                                    <div className="flex items-center justify-between">

                                        <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                                            <Award className="w-10 h-10 text-white" />
                                        </div>

                                        <div className="px-4 py-2 rounded-full bg-[#16C47F]/10 border border-[#16C47F]/20">

                                            <span className="text-sm font-bold text-[#16C47F]">
                                                AI Certified
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-10">

                                        <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">
                                            Certification
                                        </p>

                                        <h4 className="mt-4 text-4xl font-black text-[#0F172A] leading-tight">
                                            Certified Tutor Excellence Program
                                        </h4>

                                        <p className="mt-6 text-[#64748B] leading-8">
                                            Successfully completed Tutoo educator onboarding,
                                            training workshops, and teaching excellence assessments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

}
