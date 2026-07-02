import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  Star,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function StudyMaterialsCTA() {
  const trustPoints = [
    "Verified Tutors",
    "Home & Online Tuition",
    "Personalized Learning Plans",
    "Progress Tracking",
    "Free Assessment",
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: "5000+",
      label: "Students Learning",
    },
    {
      icon: Users,
      value: "1200+",
      label: "Verified Tutors",
    },
    {
      icon: Star,
      value: "4.8★",
      label: "Parent Rating",
    },
    {
      icon: BookOpen,
      value: "50,000+",
      label: "Learning Sessions",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#0B1220]">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          -top-40
          left-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#16C47F]/15
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          top-0
          right-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#2563EB]/15
          blur-[160px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7C3AED]/10
          blur-[140px]
          "
        />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Floating Stats */}
        <div className="hidden xl:block">

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            left-0
            top-16
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-5
            "
          >
            <div className="text-3xl font-black text-white">
              5000+
            </div>

            <div className="text-sm text-white/70">
              Students Learning
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
            absolute
            right-0
            top-24
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-5
            "
          >
            <div className="text-3xl font-black text-white">
              1200+
            </div>

            <div className="text-sm text-white/70">
              Verified Tutors
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            left-12
            bottom-10
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-5
            "
          >
            <div className="text-3xl font-black text-white">
              4.8★
            </div>

            <div className="text-sm text-white/70">
              Parent Rating
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
            }}
            className="
            absolute
            right-16
            bottom-0
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-5
            "
          >
            <div className="text-3xl font-black text-white">
              50K+
            </div>

            <div className="text-sm text-white/70">
              Sessions
            </div>
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-full
            bg-white/10
            border
            border-white/15
            backdrop-blur-xl
            "
          >
            <Sparkles className="w-4 h-4 text-[#16C47F]" />

            <span className="text-white font-semibold">
              START YOUR LEARNING JOURNEY
            </span>
          </motion.div>

          {/* Heading */}
          <h2
            className="
            mt-8
            text-5xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            "
            style={{
              fontFamily:
                "var(--font-heading)",
            }}
          >
            Ready to Find the{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#22D3EE] to-[#2563EB] bg-clip-text text-transparent">
              Right Tutor?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-xl leading-9 text-white/75 max-w-3xl mx-auto">
            Book a free academic assessment and receive
            personalized tutor recommendations based on
            your learning goals, academic needs, and
            preferred learning style.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {trustPoints.map((item) => (
              <div
                key={item}
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                "
              >
                <CheckCircle2 className="w-4 h-4 text-[#16C47F]" />

                <span className="text-white text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <button
              className="
              group
              h-16
              px-10
              rounded-full
              bg-gradient-to-r
              from-[#16C47F]
              to-[#2563EB]
              text-white
              font-bold
              text-base
              shadow-[0_15px_40px_rgba(37,99,235,0.35)]
              hover:scale-[1.03]
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-3
              "
            >
              Book Free Assessment

              <ArrowRight
                className="
                w-5
                h-5
                group-hover:translate-x-1
                transition-transform
                "
              />
            </button>

            <button
              className="
              h-16
              px-10
              rounded-full
              bg-white/10
              border
              border-white/15
              backdrop-blur-xl
              text-white
              font-bold
              text-base
              hover:bg-white/15
              transition-all
              duration-300
              "
            >
              Talk to an Academic Advisor
            </button>

          </div>

          {/* Quote */}
          <div className="mt-14">

            <p
              className="
              text-xl
              italic
              text-white/60
              leading-8
              "
            >
              "Every great academic journey starts with
              the right guidance."
            </p>

          </div>

        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-2 lg:hidden gap-4 mt-16">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-5
                text-center
                "
              >
                <Icon className="w-6 h-6 text-[#16C47F] mx-auto mb-3" />

                <div className="text-2xl font-black text-white">
                  {item.value}
                </div>

                <div className="text-sm text-white/70 mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}