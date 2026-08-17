import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  TrendingUp,
  Laptop,
  BookOpen,
  Target,
  Star,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Personalized Learning",
    description:
      "Customized learning experiences designed around individual student needs.",
    color: "#7B2FF7",
  },
  {
    icon: Users,
    title: "Expert Tutors",
    description:
      "Carefully verified and qualified educators committed to student success.",
    color: "#7B2FF7",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Attendance you can check and regular updates from the tutor.",
    color: "#7B2FF7",
  },
  {
    icon: Laptop,
    title: "Home & Online Learning",
    description:
      "Flexible learning options that fit every student's schedule.",
    color: "#F59E0B",
  },
];

const stats = [
  {
    value: "1-to-1",
    label: "Every Class",
  },
  {
    value: "Verified",
    label: "Every Tutor",
  },
  {
    value: "Free",
    label: "First Assessment",
  },
  {
    value: "2 Cities",
    label: "Kothrud & Kolhapur",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
          absolute
          -top-40
          -left-20
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7B2FF7]/10
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          right-0
          top-20
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#7B2FF7]/10
          blur-[150px]
          "
        />

        <div
          className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#7B2FF7]/8
          blur-[120px]
          "
        />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border
              border-[#7B2FF7]/20
              shadow-lg
              "
            >
              🏢

              <span className="font-semibold text-[#7B2FF7] text-sm">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
              mt-8
              text-4xl
              lg:text-5xl
              font-bold
              leading-[1.1]
              text-[#0A1028]
              "
            >
              Building Better{" "}

              <span
                className="
                bg-gradient-to-r
                from-[#7B2FF7]
                to-[#7B2FF7]
                bg-clip-text
                text-transparent
                "
              >
                Learning Experiences
              </span>

              {" "}for Every Student
            </motion.h2>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
              mt-8
              space-y-6
              text-[#6E6A85]
              text-lg
              leading-9
              "
            >
              <p>
                Tutoo is a modern learning platform
                designed to bridge the gap between students
                seeking academic support and qualified
                educators passionate about teaching.
              </p>

              <p>
                We provide personalized home tuition and
                online learning solutions for students
                across multiple boards, classes,
                and subjects.
              </p>

              <p>
                By combining technology, verified tutors,
                academic assessments, progress tracking,
                and personalized learning plans,
                we help students learn more effectively
                and achieve better outcomes.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-12">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                  group
                  p-6
                  rounded-3xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-[rgba(30,27,58,0.08)]
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-5
                    "
                    style={{
                      background: `${item.color}15`,
                    }}
                  >
                    <item.icon
                      className="w-7 h-7"
                      style={{
                        color: item.color,
                      }}
                    />
                  </div>

                  <h4 className="font-bold text-[#1E1B3A] text-lg mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-[#6E6A85]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Main Image */}
            <div
              className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              shadow-2xl
              "
            >
              <img
                src="https://s3.amazonaws.com/m.definedlearning.com/marketing-site/images/blog/Screen%20Shot%202022-01-12%20at%2011.51.44%20AM.png"
                alt="A tutor teaching a student"
                className="
                w-full
                h-[700px]
                object-cover
                "
              />
            </div>

            {/* Widget 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
              absolute
              top-10
              -left-10
              p-5
              rounded-3xl
              bg-white/85
              backdrop-blur-xl
              shadow-xl
              "
            >
              <div className="flex gap-3">
                <BookOpen className="text-[#7B2FF7]" />
                <div>
                  <p className="font-bold text-[#1E1B3A]">
                    Learning Plan
                  </p>
                  <p className="text-sm text-[#6E6A85]">
                    Active
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Widget 2 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
              absolute
              top-32
              -right-8
              p-5
              rounded-3xl
              bg-white/85
              backdrop-blur-xl
              shadow-xl
              "
            >
              <div className="flex gap-3">
                <Users className="text-[#7B2FF7]" />
                <div>
                  <p className="font-bold text-[#1E1B3A]">
                    Tutor Assigned
                  </p>
                  <p className="text-sm text-[#6E6A85]">
                    Verified Educator
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Widget 3 */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
              absolute
              bottom-36
              -left-8
              p-5
              rounded-3xl
              bg-white/85
              backdrop-blur-xl
              shadow-xl
              "
            >
              <div className="flex gap-3">
                <TrendingUp className="text-[#7B2FF7]" />
                <div>
                  <p className="font-bold text-[#1E1B3A]">
                    Weekly Progress
                  </p>
                  <p className="text-[#7B2FF7] font-semibold">
                    Shared
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Widget 4 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
              }}
              className="
              absolute
              bottom-16
              right-0
              p-5
              rounded-3xl
              bg-white/85
              backdrop-blur-xl
              shadow-xl
              "
            >
              <div className="flex gap-3">
                <Star className="text-[#F59E0B]" />
                <div>
                  <p className="font-bold text-[#1E1B3A]">
                    Assessment
                  </p>
                  <p className="text-[#F59E0B] font-semibold">
                    Free
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Widget 5 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
              }}
              className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[-20px]
              p-5
              rounded-3xl
              bg-white/85
              backdrop-blur-xl
              shadow-xl
              "
            >
              <div className="flex gap-3">
                <Target className="text-[#7B2FF7]" />
                <div>
                  <p className="font-bold text-[#1E1B3A]">
                    Academic Goals
                  </p>
                  <p className="text-[#7B2FF7] font-semibold">
                    On Track
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