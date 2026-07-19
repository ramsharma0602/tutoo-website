"use client";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    MapPin,
    ArrowRight,
    Home,
    Laptop,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const CITIES = [
    {
        name: "Kothrud",
        tag: "Locality · Pune West",
        description:
            "Dedicated home-tutor coverage across Kothrud and the surrounding Pune West neighbourhoods.",
        from: "#16C47F",
        to: "#2563EB",
    },
    // {
    //     name: "Pune",
    //     tag: "City-wide",
    //     description:
    //         "Full city-wide home and online tutoring coverage across all of Pune.",
    //     from: "#2563EB",
    //     to: "#7C3AED",
    // },
    {
        name: "Kolhapur",
        tag: "City-wide",
        description:
            "Verified tutors now available for home and online sessions across Kolhapur.",
        from: "#7C3AED",
        to: "#16C47F",
    },
];

const HIGHLIGHTS = [
    { icon: Home, label: "Home Tuition" },
    { icon: Laptop, label: "Online Classes" },
    { icon: ShieldCheck, label: "Verified Tutors" },
];

/* ─────────────────────────────────────────────
   FULL SECTION — homepage
───────────────────────────────────────────── */

function CityAvailabilityFull() {
    return (
        <section className="relative overflow-hidden py-28 bg-[#F8FAFC]">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, rgba(22,196,127,0.07) 50%, transparent 72%)",
                        filter: "blur(60px)",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8 mx-auto
                       bg-white/80 backdrop-blur-xl border border-[#16C47F]/30
                       shadow-[0_0_28px_rgba(22,196,127,0.18)]"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C47F] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16C47F]" />
                        </span>
                        <span
                            className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Now Live
                        </span>
                        <Sparkles className="w-4 h-4 text-[#16C47F]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#0F172A] mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Tutoo Is Live in{" "}
                        <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            Your City
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-lg leading-8 text-[#64748B]"
                    >
                        We're rolling out verified home and online tutoring city by
                        city — starting right where you are.
                    </motion.p>
                </div>

                {/* City Cards */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {CITIES.map((city, i) => (
                        <motion.div
                            key={city.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative rounded-[28px] overflow-hidden bg-white
                         border border-[#E2E8F0] p-8 w-full sm:w-[340px]
                         shadow-[0_4px_24px_rgba(15,23,42,0.06)]
                         hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]
                         transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                                    style={{ background: `linear-gradient(135deg, ${city.from}, ${city.to})` }}
                                >
                                    <MapPin className="w-7 h-7 text-white" />
                                </div>

                                <span
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                                    style={{ color: city.from, background: `${city.from}12` }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                    Live Now
                                </span>
                            </div>

                            <h3
                                className="text-2xl font-black text-[#0F172A] mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {city.name}
                            </h3>

                            <p className="text-xs font-bold uppercase tracking-wide text-[#94A3B8] mb-4">
                                {city.tag}
                            </p>

                            <p className="text-sm leading-7 text-[#64748B] mb-6">
                                {city.description}
                            </p>

                            <Link
                                to="/book-free-assessment"
                                className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                                style={{ color: city.from }}
                            >
                                Book a tutor here
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[28px]"
                                style={{ background: `linear-gradient(90deg, ${city.from}, ${city.to})` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Highlights + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white shadow-lg p-8 lg:p-10
                     flex flex-col lg:flex-row items-center justify-between gap-8"
                >
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {HIGHLIGHTS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-md">
                                        <Icon className="w-4.5 h-4.5 text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-[#0F172A]">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <Link
                        to="/book-free-assessment"
                        className="flex-shrink-0 inline-flex items-center gap-2.5 h-14 px-8 rounded-2xl
                       bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold
                       shadow-xl shadow-[#16C47F]/20 hover:scale-[1.03] transition-all duration-300"
                    >
                        Book Your Free Assessment
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                <p className="text-center text-sm text-[#94A3B8] mt-8">
                    Not in Kothrud, Pune, or Kolhapur yet? We're expanding to more
                    cities soon — check back often.
                </p>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   COMPACT BANNER — reused across other pages
───────────────────────────────────────────── */

function CityAvailabilityCompact() {
    return (
        <section className="relative py-6 bg-[#F8FAFC] mt-19">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3
                     rounded-2xl bg-white/80 backdrop-blur-xl border border-[#E2E8F0]
                     shadow-sm px-6 py-4"
                >
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C47F] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16C47F]" />
                        </span>
                        <span className="text-sm font-black uppercase tracking-wide text-[#16C47F]">
                            Now Live
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <MapPin className="w-4 h-4 text-[#64748B]" />
                        {CITIES.map((city, i) => (
                            <span key={city.name} className="flex items-center">
                                <span className="text-sm font-bold text-[#0F172A]">
                                    {city.name}
                                </span>
                                {i < CITIES.length - 1 && (
                                    <span className="mx-2 text-[#CBD5E1]">•</span>
                                )}
                            </span>
                        ))}
                    </div>

                    <Link
                        to="/book-free-assessment"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:gap-2.5 transition-all duration-300"
                    >
                        Book a tutor near you
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */

interface CityAvailabilitySectionProps {
    variant?: "full" | "compact";
}

export function CityAvailabilitySection({
    variant = "full",
}: CityAvailabilitySectionProps) {
    return variant === "full" ? <CityAvailabilityFull /> : <CityAvailabilityCompact />;
}

export default CityAvailabilitySection;
