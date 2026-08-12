// -----------------------------------------------------------------------------
// PREMIUM TOOLS & SUPPORT SECTION
// Ultra Modern Alternative SaaS UI
// -----------------------------------------------------------------------------

import { motion } from "motion/react";

import {
  Users,
  CalendarDays,
  ClipboardCheck,
  BookOpen,
  BarChart3,
  Headphones,
  ArrowRight,
  Sparkles,
  BrainCircuit,
  ShieldCheck,
  Radio,
} from "lucide-react";

export function ToolsSupportSection() {

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description:
        "Manage student profiles, goals, class history, and performance from one intelligent dashboard.",

      gradient:
        "from-[#7B2FF7] via-[#22C55E] to-[#7B2FF7]",

      bg: "bg-violet-50",
    },

    {
      icon: CalendarDays,
      title: "Class Scheduling",
      description:
        "Organize classes, availability, recurring sessions, and timetable management seamlessly.",

      gradient:
        "from-[#7B2FF7] via-[#4F46E5] to-[#7B2FF7]",

      bg: "bg-violet-50",
    },

    {
      icon: ClipboardCheck,
      title: "Attendance Tracking",
      description:
        "Automated attendance monitoring with real-time session tracking and insights.",

      gradient:
        "from-[#7B2FF7] via-[#6038F8] to-[#7B2FF7]",

      bg: "bg-violet-50",
    },

    {
      icon: BookOpen,
      title: "Learning Resources",
      description:
        "Access AI-powered worksheets, assignments, notes, templates, and teaching materials.",

      gradient:
        "from-[#7B2FF7] via-[#0EA5E9] to-[#7B2FF7]",

      bg: "bg-violet-50",
    },

    {
      icon: BarChart3,
      title: "Performance Reports",
      description:
        "Detailed learning analytics, student insights, and AI-generated teaching recommendations.",

      gradient:
        "from-[#7B2FF7] via-[#8B5CF6] to-[#7B2FF7]",

      bg: "bg-violet-50",
    },

    {
      icon: Headphones,
      title: "Dedicated Support Team",
      description:
        "Get assistance with onboarding, technical help, scheduling, and daily teaching operations.",

      gradient:
        "from-[#F59E0B] via-[#F97316] to-[#7B2FF7]",

      bg: "bg-orange-50",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-white">

      {/* ------------------------------------------------------------------ */}
      {/* UNIQUE BACKGROUND                                                  */}
      {/* ------------------------------------------------------------------ */}

      {/* Top Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,47,247,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(248,120,8,0.08),transparent_30%)]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating Shapes */}
      <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-[#7B2FF7]/10 blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#7B2FF7]/10 blur-[120px]" />

      {/* Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E1B3A05_1px,transparent_1px),linear-gradient(to_bottom,#1E1B3A05_1px,transparent_1px)] bg-[size:80px_80px]" /> */}

      {/* ------------------------------------------------------------------ */}
      {/* CONTENT                                                            */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* -------------------------------------------------------------- */}
        {/* TOP                                                            */}
        {/* -------------------------------------------------------------- */}

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
          className="max-w-4xl mx-auto text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#7B2FF7]/20 bg-white shadow-[0_8px_30px_rgba(30,27,58,0.05)] mb-8">

            <Sparkles className="w-4 h-4 text-[#7B2FF7]" />

            <span className="text-sm font-semibold text-[#7B2FF7]">
              Tools & Support
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#1E1B3A]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Everything You Need to{" "}

            <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
              Teach Successfully
            </span>
          </h2>

          {/* Desc */}
          <p className="mt-8 text-lg leading-8 text-[#6E6A85] max-w-3xl mx-auto">
            Tutoo provides a complete educator ecosystem with smart
            teaching tools, AI-powered analytics, scheduling systems,
            learning resources, and dedicated support.
          </p>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* ALTERNATIVE CARD LAYOUT                                        */}
        {/* -------------------------------------------------------------- */}

        <div className="mt-24 grid lg:grid-cols-12 gap-8">

          {/* LEFT LARGE CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
            lg:col-span-5
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#1E1B3A]
            via-[#111827]
            to-[#1E293B]
            p-10
            shadow-[0_30px_80px_rgba(30,27,58,0.35)]
            "
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#7B2FF7]/20 rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col">

              {/* Icon */}
              <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-2xl">

                <BrainCircuit className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="mt-10">

                <p className="text-sm uppercase tracking-[0.25em] text-[#94A3B8]">
                  AI Teaching Workspace
                </p>

                <h3 className="mt-5 text-4xl font-black leading-tight text-white">
                  Smart Productivity Tools For Modern Tutors
                </h3>

                <p className="mt-6 text-[#CBD5E1] leading-8">
                  Automate scheduling, manage students, access AI-powered
                  learning resources, and track student performance with a
                  premium teaching ecosystem designed for educators.
                </p>
              </div>

              {/* Widgets */}
              <div className="mt-12 space-y-4">

                {[
                  "AI Lesson Ready",
                  "Attendance Synced",
                  "Weekly Reports Generated",
                  "Live Support Available",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 backdrop-blur-xl"
                  >

                    <div className="w-3 h-3 rounded-full bg-[#7B2FF7] animate-pulse" />

                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="group mt-10 h-16 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-semibold shadow-[0_10px_40px_rgba(123,47,247,0.35)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">

                Start Teaching with Tutoo

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

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
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#E6E3F0]
                  ${feature.bg}
                  p-8
                  shadow-[0_10px_40px_rgba(30,27,58,0.05)]
                  hover:shadow-[0_20px_80px_rgba(123,47,247,0.12)]
                  transition-all
                  duration-500
                  `}
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
                    ${feature.gradient}
                    `}
                    style={{
                      mixBlendMode: "soft-light",
                    }}
                  />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${feature.gradient} p-[1px] shadow-lg`}>

                    <div className="w-full h-full rounded-[23px] bg-white flex items-center justify-center">

                      <Icon className="w-7 h-7 text-[#1E1B3A]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">

                    <h3 className="text-2xl font-black text-[#1E1B3A] leading-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-[#6E6A85] leading-7 text-[15px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 mt-8 flex items-center gap-3">

                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>

                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    <span className="text-sm font-bold text-[#1E1B3A]">
                      Learn More
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* FLOATING PRODUCTIVITY STRIP                                    */}
        {/* -------------------------------------------------------------- */}

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
          mt-20
          rounded-[36px]
          border
          border-[#E6E3F0]
          bg-white
          p-8
          shadow-[0_20px_80px_rgba(30,27,58,0.06)]
          "
        >

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF7]/5 via-[#7B2FF7]/5 to-[#7B2FF7]/5" />

          <div className="relative z-10 grid lg:grid-cols-4 gap-6">

            {[
              {
                icon: CalendarDays,
                title: "Upcoming Classes",
                value: "18 Scheduled",
              },

              {
                icon: Radio,
                title: "Live Sessions",
                value: "12 Active",
              },

              {
                icon: ShieldCheck,
                title: "Tutor Rating",
                value: "4.9 Verified",
              },

              {
                icon: BrainCircuit,
                title: "AI Insights",
                value: "Weekly Reports",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  rounded-[28px]
                  bg-[#FAFAFC]
                  border
                  border-[#E6E3F0]
                  p-6
                  "
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-lg">

                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>

                      <p className="text-sm font-medium text-[#6E6A85]">
                        {item.title}
                      </p>

                      <h4 className="mt-1 text-2xl font-black text-[#1E1B3A]">
                        {item.value}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
