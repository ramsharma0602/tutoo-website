import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp,
  Quote,
  Check,
} from "lucide-react";

const problems = [
  {
    icon: BookOpen,
    title: "Students Need Personalized Learning",
    color: "#16C47F",
    glow: "rgba(22,196,127,0.25)",
    description:
      "Every student learns differently. Traditional classrooms often follow a one-size-fits-all approach, leaving many students struggling to keep up or reach their full potential.",
    points: [
      "Different learning styles",
      "Individual learning pace",
      "Concept clarity challenges",
      "Personalized academic support",
    ],
  },
  {
    icon: Users,
    title: "Parents Need Transparency",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.25)",
    description:
      "Parents want visibility into what their child is learning, how they are progressing, and where additional support is needed.",
    points: [
      "Progress visibility",
      "Attendance tracking",
      "Performance reports",
      "Learning accountability",
    ],
  },
  {
    icon: GraduationCap,
    title: "Tutors Need Better Opportunities",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.25)",
    description:
      "Talented educators often struggle to connect with students who need their expertise and deserve better tools to teach effectively.",
    points: [
      "Access to students",
      "Teaching flexibility",
      "Career growth",
      "Professional support",
    ],
  },
];

const stats = [
  {
    icon: "🎓",
    value: "5000+",
    label: "Students Supported",
  },
  {
    icon: "👨‍🏫",
    value: "1200+",
    label: "Tutors Connected",
  },
  {
    icon: "📈",
    value: "50,000+",
    label: "Learning Sessions",
  },
  {
    icon: "⭐",
    value: "4.8/5",
    label: "Parent Satisfaction",
  },
];

export default function ProblemWeSolve() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#0B1220]">

      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#16C47F]/10 rounded-full blur-[150px]" />

        <div className="absolute right-0 top-20 w-[700px] h-[700px] bg-[#2563EB]/10 rounded-full blur-[180px]" />

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="
            px-5
            py-2.5
            rounded-full
            border
            text-sm
            font-semibold
            text-[#16C47F]
            backdrop-blur-xl
            "
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(22,196,127,0.25)",
            }}
          >
            ⚡ THE PROBLEM WE SOLVE
          </div>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mt-8"
        >
          <h2
            className="
            text-5xl
            lg:text-7xl
            font-black
            leading-[1.05]
            text-white
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Why{" "}
            <span
              className="
              bg-gradient-to-r
              from-[#16C47F]
              via-[#22D3EE]
              to-[#2563EB]
              bg-clip-text
              text-transparent
              "
            >
              UberTutor
            </span>{" "}
            Was Created
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/70">
            Millions of students need personalized learning,
            parents need transparency, and tutors need better opportunities.

            <br />
            <br />

            UberTutor was built to bring all three together through
            technology, trust, and measurable learning outcomes.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20 relative">

          {/* Connection Line */}

          <div
            className="
            hidden
            lg:block
            absolute
            top-[130px]
            left-[16%]
            right-[16%]
            h-[2px]
            "
          >
            <div
              className="
              h-full
              bg-gradient-to-r
              from-[#16C47F]
              via-[#2563EB]
              to-[#7C3AED]
              opacity-40
              "
            />
          </div>

          {problems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
              relative
              group
              rounded-[32px]
              p-8
              overflow-hidden
              border
              backdrop-blur-xl
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
                style={{
                  background: `radial-gradient(circle at top, ${item.glow}, transparent 70%)`,
                }}
              />

              <div
                className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                mb-6
                "
                style={{
                  background: `${item.color}15`,
                }}
              >
                <item.icon
                  size={30}
                  style={{
                    color: item.color,
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-5">
                {item.title}
              </h3>

              <p className="text-white/70 leading-8 mb-8">
                {item.description}
              </p>

              <div className="space-y-4">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={16}
                      style={{
                        color: item.color,
                      }}
                    />

                    <span className="text-white/80 text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}

        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-24
          rounded-[36px]
          p-12
          text-center
          border
          backdrop-blur-xl
          "
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(22,196,127,0.15)",
          }}
        >
          <Quote
            className="
            mx-auto
            mb-6
            text-[#16C47F]
            "
            size={42}
          />

          <p
            className="
            text-2xl
            lg:text-4xl
            leading-relaxed
            font-semibold
            text-white
            max-w-5xl
            mx-auto
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Education works best when students receive
            personalized support, parents stay informed,
            and tutors are empowered to teach effectively.
          </p>
        </motion.div>

        {/* Floating Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -4,
              }}
              className="
              rounded-3xl
              px-6
              py-7
              border
              backdrop-blur-xl
              text-center
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-2xl mb-3">
                {item.icon}
              </div>

              <div className="text-3xl font-black text-white">
                {item.value}
              </div>

              <div className="mt-2 text-sm text-white/65">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}