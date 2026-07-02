import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Star,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FinalCTASection() {
  const navigate = useNavigate();

  const trustPoints = [
    "✓ Free Assessment",
    "✓ Verified Tutors",
    "✓ Home & Online Classes",
    "✓ Personalized Learning Plans",
    "✓ Progress Tracking",
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
      value: "4.8/5",
      label: "Parent Rating",
    },
    {
      icon: BookOpen,
      value: "50,000+",
      label: "Learning Sessions",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-[#0B1220]">

      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Mesh Glow */}
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#16C47F]/10 rounded-full blur-[180px]" />

        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2563EB]/10 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: 4,
              height: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Floating Stats */}
        <div className="hidden xl:block">

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
            absolute
            left-0
            top-24
            p-5
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            "
          >
            <div className="text-3xl mb-2">🎓</div>

            <div className="text-white font-black text-2xl">
              5000+
            </div>

            <div className="text-white/70 text-sm">
              Students Learning
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="
            absolute
            right-0
            top-20
            p-5
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            "
          >
            <div className="text-3xl mb-2">👨‍🏫</div>

            <div className="text-white font-black text-2xl">
              1200+
            </div>

            <div className="text-white/70 text-sm">
              Verified Tutors
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="
            absolute
            left-16
            bottom-10
            p-5
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            "
          >
            <div className="text-3xl mb-2">⭐</div>

            <div className="text-white font-black text-2xl">
              4.8/5
            </div>

            <div className="text-white/70 text-sm">
              Parent Rating
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            className="
            absolute
            right-16
            bottom-0
            p-5
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            "
          >
            <div className="text-3xl mb-2">📚</div>

            <div className="text-white font-black text-2xl">
              50,000+
            </div>

            <div className="text-white/70 text-sm">
              Learning Sessions
            </div>
          </motion.div>

        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-[#16C47F]/30
            "
          >
            🚀

            <span className="font-semibold text-white">
              START YOUR LEARNING JOURNEY
            </span>
          </motion.div>

          {/* Heading */}
          <h2
            className="
            mt-10
            text-5xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Ready to Find the{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#22D3EE] to-[#2563EB] bg-clip-text text-transparent">
              Right Tutor
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-8 text-xl leading-9 text-white/80">
            Book a free academic assessment and receive personalized
            tutor recommendations based on your learning goals,
            academic needs, and preferred learning style.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {trustPoints.map((item) => (
              <div
                key={item}
                className="
                px-5
                py-3
                rounded-full
                bg-white/8
                backdrop-blur-xl
                border
                border-white/10
                text-white/90
                text-sm
                font-medium
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                navigate("/book-free-assessment")
              }
              className="
              relative
              overflow-hidden
              h-16
              px-10
              rounded-full
              bg-gradient-to-r
              from-[#16C47F]
              to-[#2563EB]
              text-white
              font-bold
              text-lg
              shadow-[0_0_50px_rgba(37,99,235,0.35)]
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              onClick={() => navigate("/contact")}
              className="
              h-16
              px-10
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/15
              text-white
              font-semibold
              "
            >
              Talk to an Academic Advisor
            </motion.button>

          </div>

          {/* Quote */}
          <div className="mt-14">

            <p
              className="
              text-xl
              italic
              text-white/70
              "
            >
              “Every great academic journey starts with the right guidance.”
            </p>

          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-2 lg:hidden gap-4 mt-14">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-5
                "
              >
                <item.icon className="w-7 h-7 text-[#16C47F]" />

                <h4 className="mt-3 text-white text-2xl font-black">
                  {item.value}
                </h4>

                <p className="text-white/70 text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}