"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  UsersRound,
  ShieldCheck,
  MapPinned,
  TrendingUp,
  FileBarChart,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Learning Assessment",
    color: "#16C47F",
    bg: "rgba(22,196,127,0.08)",
    description:
      "Understand a student's strengths, weaknesses, learning style, and academic needs before assigning a tutor.",
  },
  {
    icon: UsersRound,
    title: "Smart Tutor Matching",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    description:
      "Match students with tutors based on expertise, learning goals, teaching style, and subject compatibility.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Session Verification",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    description:
      "Every learning session is protected through verification mechanisms that ensure safety and accountability.",
  },
  {
    icon: MapPinned,
    title: "Live Session Tracking",
    color: "#16C47F",
    bg: "rgba(22,196,127,0.08)",
    description:
      "Parents receive visibility into scheduled sessions, attendance, and learning activity for complete transparency.",
  },
  {
    icon: TrendingUp,
    title: "Progress Monitoring",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    description:
      "Track academic growth through continuous evaluation, performance insights, and measurable milestones.",
  },
  {
    icon: FileBarChart,
    title: "Monthly Performance Reports",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    description:
      "Receive structured reports highlighting achievements, improvement areas, and recommended next steps.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#F8FAFC]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
          absolute
          -top-40
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          blur-[140px]
          "
          style={{
            background: "rgba(22,196,127,0.10)",
          }}
        />

        <div
          className="
          absolute
          top-0
          right-0
          w-[600px]
          h-[600px]
          rounded-full
          blur-[160px]
          "
          style={{
            background: "rgba(37,99,235,0.10)",
          }}
        />

        <div
          className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[450px]
          h-[450px]
          rounded-full
          blur-[120px]
          "
          style={{
            background: "rgba(124,58,237,0.08)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-full
            border
            text-sm
            font-semibold
            text-[#16C47F]
            mb-8
            "
            style={{
              background: "rgba(255,255,255,0.75)",
              borderColor: "rgba(22,196,127,0.18)",
              backdropFilter: "blur(16px)",
            }}
          >
            🚀 OUR DIFFERENCE
          </div>

          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            text-[#0F172A]
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
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
              More Than Just Tuition
            </span>
          </h2>

          <p
            className="
            mt-8
            text-lg
            leading-8
            text-[#64748B]
            max-w-3xl
            mx-auto
            "
          >
            Tutoo combines technology, verified educators,
            personalized learning strategies, and continuous
            progress monitoring to create a smarter and more
            effective learning experience.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

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
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                p-8
                border
                bg-white/90
                backdrop-blur-xl
                transition-all
                duration-500
                "
                style={{
                  borderColor: "rgba(15,23,42,0.06)",
                  boxShadow:
                    "0 12px 40px rgba(15,23,42,0.06)",
                }}
              >

                {/* Hover Glow */}
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
                    background: `radial-gradient(circle at top right, ${item.bg}, transparent 70%)`,
                  }}
                />

                {/* Top Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px]"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                  style={{
                    background: item.bg,
                  }}
                >
                  <Icon
                    size={30}
                    style={{
                      color: item.color,
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#0F172A]
                  mb-4
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-[#64748B]
                  leading-8
                  text-sm
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Gradient Line */}
                <div
                  className="
                  mt-8
                  h-[3px]
                  rounded-full
                  "
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
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
          transition={{
            duration: 0.7,
          }}
          className="
          mt-20
          rounded-[32px]
          p-10
          text-center
          border
          bg-white/80
          backdrop-blur-xl
          "
          style={{
            borderColor: "rgba(15,23,42,0.06)",
            boxShadow:
              "0 20px 60px rgba(15,23,42,0.05)",
          }}
        >
          <h3
            className="
            text-2xl
            lg:text-3xl
            font-black
            text-[#0F172A]
            "
          >
            A Complete Learning Ecosystem
          </h3>

          <p
            className="
            mt-4
            max-w-3xl
            mx-auto
            text-[#64748B]
            leading-8
            "
          >
            Tutoo is not just about finding a tutor.
            We bring together assessments, verified educators,
            technology-driven learning, performance monitoring,
            and parent transparency to create meaningful
            educational outcomes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}