import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  UserCheck,
  Target,
  Star,
  BookOpen,
} from "lucide-react";

export default function AboutHero() {
  const trustItems = [
    "Verified Tutors",
    "Personalized Learning",
    "Home & Online Tuition",
    "Progress Tracking",
    "Free Assessment",
  ];

  const stats = [
    {
      value: "5000+",
      label: "Students Learning",
    },
    {
      value: "1200+",
      label: "Verified Tutors",
    },
    {
      value: "50+",
      label: "Cities Covered",
    },
    {
      value: "50,000+",
      label: "Learning Sessions",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-24">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          top-0
          left-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#16C47F]/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          right-0
          top-20
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#2563EB]/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7C3AED]/10
          blur-[140px]
          "
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-white/75
              backdrop-blur-xl
              border
              border-[#16C47F]/20
              shadow-lg
              "
            >
              🎓

              <span className="font-semibold text-[#16C47F]">
                ABOUT UBERTUTOR
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
              mt-8
              text-5xl
              lg:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
              text-[#0B1220]
              "
              style={{
                fontFamily:
                  "var(--font-heading)",
              }}
            >
              Helping Every Student{" "}

              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                Learn Better
              </span>

              ,{" "}

              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Grow Faster
              </span>

              , and{" "}

              <span className="bg-gradient-to-r from-[#16C47F] via-[#22D3EE] to-[#2563EB] bg-clip-text text-transparent">
                Succeed Confidently
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-[#64748B]
              "
            >
              UberTutor connects students with
              expert tutors through personalized
              home and online tuition programs
              supported by technology,
              assessments, verified educators,
              and continuous progress tracking.

              <br />
              <br />

              Our mission is to make quality
              education accessible, measurable,
              and effective for every learner.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                className="
                group
                h-16
                px-8
                rounded-full
                bg-gradient-to-r
                from-[#16C47F]
                to-[#2563EB]
                text-white
                font-bold
                shadow-xl
                shadow-[#2563EB]/20
                hover:scale-[1.03]
                transition-all
                duration-300
                flex
                items-center
                gap-3
                "
              >
                Find a Tutor

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
                px-8
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border
                border-[rgba(15,23,42,0.08)]
                font-bold
                text-[#0F172A]
                hover:border-[#2563EB]
                transition-all
                "
              >
                Book Free Assessment
              </button>

            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-3 mt-10">

              {trustItems.map((item) => (
                <div
                  key={item}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-[rgba(15,23,42,0.08)]
                  flex
                  items-center
                  gap-2
                  "
                >
                  <CheckCircle2 className="w-4 h-4 text-[#16C47F]" />

                  <span className="text-sm font-medium text-[#64748B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main Image */}
            <div
              className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-white
              border
              border-[rgba(15,23,42,0.08)]
              shadow-2xl
              "
            >
              <img
                src="https://www.americanboard.org/blog/wp-content/uploads/2020/04/shutterstock_671773849-scaled.jpg"
                alt="UberTutor Learning"
                className="
                w-full
                h-[620px]
                object-cover
                "
              />
            </div>

            {/* Floating Cards */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              absolute
              -left-8
              top-10
              bg-white/85
              backdrop-blur-xl
              rounded-3xl
              p-5
              shadow-xl
              "
            >
              <div className="flex gap-3">

                <TrendingUp className="text-[#16C47F]" />

                <div>
                  <p className="font-bold text-[#0F172A]">
                    Student Progress
                  </p>

                  <p className="text-[#16C47F] font-semibold">
                    +28% Improvement
                  </p>
                </div>

              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
              absolute
              -right-8
              top-32
              bg-white/85
              backdrop-blur-xl
              rounded-3xl
              p-5
              shadow-xl
              "
            >
              <div className="flex gap-3">

                <UserCheck className="text-[#2563EB]" />

                <div>
                  <p className="font-bold text-[#0F172A]">
                    Verified Tutor
                  </p>

                  <p className="text-[#64748B]">
                    Background Checked
                  </p>
                </div>

              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
              }}
              className="
              absolute
              -left-5
              bottom-32
              bg-white/85
              backdrop-blur-xl
              rounded-3xl
              p-5
              shadow-xl
              "
            >
              <div className="flex gap-3">

                <Target className="text-[#7C3AED]" />

                <div>
                  <p className="font-bold text-[#0F172A]">
                    Learning Plan
                  </p>

                  <p className="text-[#16C47F]">
                    Active
                  </p>
                </div>

              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
              absolute
              right-0
              bottom-12
              bg-white/85
              backdrop-blur-xl
              rounded-3xl
              p-5
              shadow-xl
              "
            >
              <div className="flex gap-3">

                <Star className="text-[#F59E0B]" />

                <div>
                  <p className="font-bold text-[#0F172A]">
                    Parent Satisfaction
                  </p>

                  <p className="text-[#F59E0B]">
                    4.8 / 5 Rating
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}