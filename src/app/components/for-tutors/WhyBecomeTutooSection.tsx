
import { motion } from "motion/react";

import {
    Clock3,
    Laptop,
    Wallet,
    Users,
    GraduationCap,
    TrendingUp,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Radio,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';


export function WhyBecomeTutooSection() {
    const navigate = useNavigate();

    const benefits = [
        {
            icon: Clock3,
            title: "Flexible Working Hours",
            description:
                "Choose your own teaching schedule and teach according to your availability.",

            gradient: "from-[#16C47F] to-[#2563EB]",
        },

        {
            icon: Laptop,
            title: "Teach Online or Home Tuition",
            description:
                "Teach students online, at home, or in hybrid mode based on your preference.",

            gradient: "from-[#2563EB] to-[#7C3AED]",
        },

        {
            icon: Wallet,
            title: "Attractive Earnings",
            description:
                "Earn competitive payouts with weekly payments and performance-based growth opportunities.",

            gradient: "from-[#16C47F] to-[#7C3AED]",
        },

        {
            icon: Users,
            title: "Access to Students",
            description:
                "Get connected with students across India through intelligent tutor matching.",

            gradient: "from-[#2563EB] to-[#16C47F]",
        },

        {
            icon: GraduationCap,
            title: "Training & Support",
            description:
                "Receive teaching resources, onboarding guidance, and continuous platform support.",

            gradient: "from-[#7C3AED] to-[#16C47F]",
        },

        {
            icon: TrendingUp,
            title: "Career Growth",
            description:
                "Build your teaching profile, improve ratings, and unlock long-term growth opportunities.",

            gradient: "from-[#F59E0B] to-[#16C47F]",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-28">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/5 rounded-full blur-3xl" />

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* -------------------------------------------------------------------------- */}
                {/*                                   HEADER                                   */}
                {/* -------------------------------------------------------------------------- */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#16C47F]/20 shadow-sm mb-8">

                        <Sparkles className="w-4 h-4 text-[#16C47F]" />

                        <span className="text-sm font-semibold text-[#16C47F]">
                            Why Become an Tutoo
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0B1220]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Build a{" "}

                        <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#16C47F] bg-clip-text text-transparent">
                            Rewarding Teaching Career
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-3xl mx-auto">
                        Teach with flexibility, grow your income, access quality students,
                        and build your professional teaching career with Tutoo’s
                        AI-powered learning ecosystem.
                    </p>
                </motion.div>

                {/* -------------------------------------------------------------------------- */}
                {/*                              FLOATING CHIPS                                */}
                {/* -------------------------------------------------------------------------- */}

                <div className="flex flex-wrap justify-center gap-4 mt-14 mb-16">

                    {[
                        // "Weekly Payouts",
                        "AI Tutor Match",
                        "Verified Tutors",
                        "Live Classes",
                        "Top Rated Tutor",
                    ].map((chip, index) => (

                        <motion.div
                            key={chip}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-[rgba(15,23,42,0.06)] shadow-sm hover:shadow-lg transition-all duration-300"
                        >

                            <span className="text-sm font-semibold text-[#0F172A]">
                                {chip}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                                   CARDS                                    */}
                {/* -------------------------------------------------------------------------- */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {benefits.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-500"
                            >

                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Shine */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">

                                    <div className="absolute -top-24 left-[-40%] w-[120%] h-60 rotate-12 bg-white/10 blur-3xl" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">

                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${item.gradient} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-500`}>

                                        <div className="w-full h-full rounded-[27px] bg-white/90 backdrop-blur-xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-500">

                                            <Icon className="w-9 h-9 text-[#0F172A] group-hover:text-white transition-colors duration-500" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-8 text-3xl font-black leading-tight text-[#0F172A] group-hover:text-white transition-colors duration-500">

                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 text-[#64748B] leading-8 text-[15px] group-hover:text-white/80 transition-colors duration-500">

                                        {item.description}
                                    </p>

                                    {/* Bottom */}
                                    <div className="mt-8 flex items-center gap-3">

                                        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg`}>

                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>

                                        <span className="text-sm font-bold text-[#0F172A] group-hover:text-white transition-colors duration-500">
                                            Learn More
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Particles */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                                    <div className="flex gap-2">

                                        <div className="w-2 h-2 rounded-full bg-white/50" />

                                        <div className="w-2 h-2 rounded-full bg-white/30" />

                                        <div className="w-2 h-2 rounded-full bg-white/20" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                                    CTA                                     */}
                {/* -------------------------------------------------------------------------- */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >

                    <div className="inline-flex flex-wrap items-center justify-center gap-5">

                        {/* Primary CTA */}
                        {/* Primary Button */}
                        <button
                            type="button"
                            onClick={() => navigate('/apply-tutor')}
                            className="
                  group
                  h-14
                  px-8
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#16C47F]
                  to-[#2563EB]
                  text-white
                  font-semibold
                  shadow-[0_10px_40px_rgba(37,99,235,0.25)]
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-3
                  "
                        >

                            Apply as Tutor

                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        {/* Secondary CTA */}
                        {/* <button className="group flex items-center gap-3 text-[#0F172A] hover:text-[#2563EB] transition-colors duration-300 font-semibold text-lg">

                            Learn About Tutor Benefits

                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button> */}
                    </div>
                </motion.div>

                {/* -------------------------------------------------------------------------- */}
                {/*                              FLOATING WIDGETS                              */}
                {/* -------------------------------------------------------------------------- */}

                <div className="absolute left-10 top-52 hidden xl:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl">

                    <Radio className="w-5 h-5 text-[#16C47F]" />

                    <div>
                        <p className="text-sm font-bold text-[#0F172A]">
                            Live Classes
                        </p>

                        <p className="text-xs text-[#64748B] mt-1">
                            120+ ongoing sessions
                        </p>
                    </div>
                </div>

                <div

                    className="
                    absolute
                    right-10
                    bottom-24
                    hidden
                    xl:flex
                    items-center
                    gap-4
                    px-6
                    py-4
                    rounded-[24px]
                    bg-gradient-to-br
                    from-[#2563EB]/10
                    via-white/80
                    to-[#16C47F]/10
                    backdrop-blur-2xl
                    border
                    border-white/50
                    shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                    overflow-hidden
                    group
                    ">


                    <ShieldCheck className="w-5 h-5 text-[#2563EB]" />

                    <div>
                        <p className="text-sm font-bold text-[#0F172A]">
                            Verified Tutors
                        </p>

                        <p className="text-xs text-[#64748B] mt-1">
                            Trusted educator network
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
