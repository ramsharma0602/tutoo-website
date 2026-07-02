import { motion } from "motion/react";

import {
    ShieldCheck,
    GraduationCap,
    BarChart3,
    Users,
    CheckCircle2,
    Star,
    ArrowRight,
    Home,
    Laptop,
    PhoneCall,
    BookOpen,
    Brain,
    Sparkles,
} from "lucide-react";
import { FinalCTA } from "./FinalCTA";
import { HomeTutorsSection } from "./for-parents/HomeTutorsSection";
import { OnlineTutorsSection } from "./for-parents/OnlineTutorsSection";
import {ProgressTrackingSection} from "./for-parents/ProgressTrackingSection";
import {SafetyVerificationSection } from "./for-parents/SafetyVerificationSection";
import { ParentsTestimonials } from "./for-parents/ParentsTestimonials";
import { ParentsFAQ } from "./for-parents/ParentsFAQ";
import { ParentResourcesSection } from "./for-parents/ParentResourcesSection";
export default function ForParentsPage() {

    const features = [
        {
            icon: Home,
            title: "Home Tutors",
            description:
                "Personalized one-on-one home tuition designed around your child’s learning goals.",
        },
        {
            icon: Laptop,
            title: "Online Tutors",
            description:
                "Interactive online classes with digital whiteboards and recorded sessions.",
        },
        {
            icon: BarChart3,
            title: "Progress Tracking",
            description:
                "Monitor attendance, performance, homework, and weekly reports in real-time.",
        },
        {
            icon: ShieldCheck,
            title: "Verified Tutors",
            description:
                "Background-verified expert tutors with qualification checks and interviews.",
        },
        {
            icon: Brain,
            title: "AI Learning Analysis",
            description:
                "Smart assessment engine to identify learning gaps and improvement areas.",
        },
        {
            icon: PhoneCall,
            title: "Dedicated Support",
            description:
                "Academic advisors and support team available whenever parents need help.",
        },
    ];

    return (
        <div className="relative overflow-hidden bg-[#F8FAFC]">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 rounded-full blur-3xl" />

                <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
            </div>

            {/* HERO */}
            <section className="relative z-10 pt-36 pb-24">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT */}
                        <div>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-sm mb-8">

                                <Sparkles className="w-4 h-4 text-[#16C47F]" />

                                <span className="text-sm font-semibold text-[#16C47F]">
                                    For Parents
                                </span>
                            </div>

                            {/* Heading */}
                            <h1
                                className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0B1220]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Helping Parents Find the{" "}

                                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                    Perfect Tutor
                                </span>{" "}

                                for Their Child
                            </h1>

                            {/* Subheading */}
                            <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-2xl">
                                Personalized home and online tuition with verified tutors,
                                real-time progress tracking, and complete transparency.
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4 mt-10">

                                {[
                                    "Home Tutors",
                                    "Online Classes",
                                    "Progress Reports",
                                    "Verified Tutors",
                                    "Free Demo Session",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#16C47F]" />

                                        <span className="text-sm font-medium text-[#0F172A]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 mt-10">

                                <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold shadow-xl shadow-[#16C47F]/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">

                                    Find a Tutor

                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <button className="h-14 px-8 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] text-[#0F172A] font-semibold hover:shadow-lg transition-all duration-300">
                                    Book Free Demo
                                </button>
                            </div>

                            {/* Metrics */}
                            <div className="flex flex-wrap gap-4 mt-10">

                                {[
                                    "⭐ 4.8 Parent Rating",
                                    "👨‍🏫 1200+ Tutors",
                                    "🎓 5000+ Students",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-md text-sm font-semibold text-[#0F172A]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative">

                            {/* Main Image */}
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">

                                <img
                                    src="https://content.app-sources.com/s/28760560030364602/uploads/Blog_images/acetuitionsa-5798456.jpg?format=webp"
                                    alt="Parent Learning"
                                    className="w-full h-[650px] object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-5 w-60">

                                <div className="flex items-center gap-3">

                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">
                                            Verified Tutors
                                        </p>

                                        <p className="text-xs text-[#64748B]">
                                            Trusted & Background Checked
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Card */}
                            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-6 w-72">

                                <div className="flex items-center justify-between mb-5">

                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">
                                            Weekly Progress
                                        </p>

                                        <p className="text-xs text-[#64748B]">
                                            AI Learning Insights
                                        </p>
                                    </div>

                                    <BarChart3 className="w-5 h-5 text-[#2563EB]" />
                                </div>

                                <div className="space-y-4">

                                    {[
                                        { subject: "Mathematics", value: "89%" },
                                        { subject: "Science", value: "92%" },
                                        { subject: "English", value: "87%" },
                                    ].map((item) => (

                                        <div key={item.subject}>

                                            <div className="flex justify-between mb-2">

                                                <span className="text-sm font-medium text-[#0F172A]">
                                                    {item.subject}
                                                </span>

                                                <span className="text-sm font-bold text-[#2563EB]">
                                                    {item.value}
                                                </span>
                                            </div>

                                            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">

                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-[#16C47F] to-[#2563EB]"
                                                    style={{ width: item.value }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHY PARENTS CHOOSE */}
            <section className="relative z-10 py-28">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto">

                        <h2
                            className="text-4xl lg:text-6xl font-black text-[#0B1220]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Everything Parents Need in One Learning Platform
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-[#64748B]">
                            From verified tutors to real-time progress tracking —
                            Tutoo combines technology, safety, and personalized
                            learning into one intelligent ecosystem.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

                        {features.map((feature, index) => (

                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group rounded-[32px] bg-white/70 backdrop-blur-xl border border-white shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">

                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-[#0F172A]">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-[#64748B] leading-7">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <HomeTutorsSection />
            <OnlineTutorsSection />
            <ProgressTrackingSection />
            <SafetyVerificationSection />
            <ParentsTestimonials />
            <ParentsFAQ />
            <ParentResourcesSection />
            <FinalCTA />

        </div>
    );
}
