import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Laptop,
  Languages,
  ArrowRight,
} from "lucide-react";

export default function BrowseResources() {
  const [selectedBoard, setSelectedBoard] =
    useState("CBSE");

  const [selectedClass, setSelectedClass] =
    useState("Class 10");

  const boards = [
    {
      name: "CBSE",
      resources: "2,500+",
      icon: "📘",
      color: "#2563EB",
    },
    {
      name: "ICSE",
      resources: "1,800+",
      icon: "🏫",
      color: "#16C47F",
    },
    {
      name: "SSC",
      resources: "1,200+",
      icon: "📚",
      color: "#F59E0B",
    },
    {
      name: "HSC",
      resources: "950+",
      icon: "🎓",
      color: "#7C3AED",
    },
  ];

  const classes = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  const subjects = [
    {
      name: "Mathematics",
      count: "850+",
      icon: Calculator,
      color: "#2563EB",
      bg: "rgba(37,99,235,0.08)",
    },
    {
      name: "Science",
      count: "720+",
      icon: Atom,
      color: "#7C3AED",
      bg: "rgba(124,58,237,0.08)",
    },
    {
      name: "English",
      count: "640+",
      icon: Languages,
      color: "#16C47F",
      bg: "rgba(22,196,127,0.08)",
    },
    {
      name: "Physics",
      count: "510+",
      icon: Atom,
      color: "#2563EB",
      bg: "rgba(37,99,235,0.08)",
    },
    {
      name: "Chemistry",
      count: "480+",
      icon: FlaskConical,
      color: "#EF4444",
      bg: "rgba(239,68,68,0.08)",
    },
    {
      name: "Computer Science",
      count: "390+",
      icon: Laptop,
      color: "#16C47F",
      bg: "rgba(22,196,127,0.08)",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          left-0
          top-20
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#16C47F]/10
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          right-0
          bottom-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#2563EB]/10
          blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border
            border-[#16C47F]/20
            shadow-lg
            "
          >
            📚

            <span className="font-semibold text-[#16C47F]">
              BROWSE RESOURCES
            </span>
          </div>

          <h2
            className="
            mt-6
            text-4xl
            lg:text-6xl
            font-black
            text-[#0B1220]
            "
            style={{
              fontFamily:
                "var(--font-heading)",
            }}
          >
            Explore by{" "}
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              Board, Class & Subject
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-[#64748B] leading-8">
            Discover thousands of curated
            learning resources organised by
            academic boards, classes, and
            subjects.
          </p>
        </motion.div>

        {/* ==========================
            BOARDS
        ========================== */}
        <div className="mb-20">

          <h3 className="text-xl font-bold text-[#0F172A] mb-8">
            Browse By Board
          </h3>

          <div className="grid lg:grid-cols-4 gap-6">

            {boards.map((board) => (
              <motion.button
                key={board.name}
                whileHover={{
                  y: -5,
                }}
                onClick={() =>
                  setSelectedBoard(board.name)
                }
                className={`
                  relative
                  p-7
                  rounded-[28px]
                  border
                  text-left
                  transition-all
                  duration-300
                  ${
                    selectedBoard === board.name
                      ? "bg-white border-[#2563EB]"
                      : "bg-white/80 border-[rgba(15,23,42,0.08)]"
                  }
                `}
              >
                <div className="text-4xl mb-5">
                  {board.icon}
                </div>

                <h4 className="font-bold text-lg text-[#0F172A]">
                  {board.name}
                </h4>

                <p className="text-sm text-[#64748B] mt-2">
                  {board.resources} Resources
                </p>

                <ArrowRight
                  className="
                  absolute
                  right-5
                  bottom-5
                  w-5
                  h-5
                  text-[#2563EB]
                  "
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* ==========================
            CLASSES
        ========================== */}
        <div className="mb-20">

          <h3 className="text-xl font-bold text-[#0F172A] mb-8">
            Browse By Class
          </h3>

          <div className="flex flex-wrap gap-3">

            {classes.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setSelectedClass(item)
                }
                className={`
                  px-5
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    selectedClass === item
                      ? "bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white shadow-lg"
                      : "bg-white border border-[rgba(15,23,42,0.08)] text-[#64748B]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================
            SUBJECTS
        ========================== */}
        <div>

          <h3 className="text-xl font-bold text-[#0F172A] mb-8">
            Browse By Subject
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <motion.div
                  key={subject.name}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                  group
                  p-6
                  rounded-[28px]
                  bg-white
                  border
                  border-[rgba(15,23,42,0.08)]
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
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
                      background:
                        subject.bg,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color:
                          subject.color,
                      }}
                    />
                  </div>

                  <h4 className="font-bold text-lg text-[#0F172A]">
                    {subject.name}
                  </h4>

                  <p className="text-sm text-[#64748B] mt-2">
                    {subject.count} Resources
                  </p>

                  <div
                    className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-[#2563EB]
                    font-semibold
                    "
                  >
                    Explore

                    <ArrowRight
                      className="
                      w-4
                      h-4
                      group-hover:translate-x-1
                      transition-transform
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}