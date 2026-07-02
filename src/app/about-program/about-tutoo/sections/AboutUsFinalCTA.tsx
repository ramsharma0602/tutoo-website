"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Users,
  TrendingUp,
  Star,
  CheckCircle2,
} from "lucide-react";

const trustItems = [
  "Free Academic Assessment",
  "Verified Tutors",
  "Home & Online Learning",
  "Personalized Learning Plans",
  "Progress Tracking",
];

const floatingCards = [
  {
    icon: GraduationCap,
    title: "Personalized Learning",
    position: "top-16 left-10",
  },
  {
    icon: Users,
    title: "Verified Tutors",
    position: "top-24 right-12",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    position: "bottom-20 left-20",
  },
  {
    icon: Star,
    title: "Trusted by Families",
    position: "bottom-16 right-16",
  },
];

export default function AboutUsFinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#0B1220] via-[#111827] to-[#0F172A]">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute -top-20 left-0 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{
            background: "rgba(22,196,127,0.14)",
          }}
        />

        <div
          className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{
            background: "rgba(37,99,235,0.14)",
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{
            background: "rgba(124,58,237,0.10)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Cards */}
      <div className="hidden xl:block">

        {floatingCards.map((card, i) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className={`absolute ${card.position}`}
            >
              <div
                className="
                px-5
                py-4
                rounded-2xl
                backdrop-blur-xl
                border
                flex
                items-center
                gap-3
              "
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#16C47F]
                  to-[#2563EB]
                "
                >
                  <Icon size={18} className="text-white" />
                </div>

                <span className="text-white text-sm font-semibold">
                  {card.title}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">

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
            mb-8
            backdrop-blur-xl
            border
          "
          style={{
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(22,196,127,0.20)",
          }}
        >
          🚀 START YOUR LEARNING JOURNEY
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
          "
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Ready to Start Your
          <br />

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
            Learning Journey?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            max-w-3xl
            mx-auto
            mt-8
            text-lg
            leading-9
            text-white/75
          "
        >
          Get personalized tutor recommendations, expert academic
          guidance, and a free assessment designed to identify the
          best learning path for your child.
        </motion.p>

        {/* Trust Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-full
                backdrop-blur-xl
                border
              "
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <CheckCircle2
                size={16}
                className="text-[#16C47F]"
              />

              <span className="text-sm text-white">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button
            className="
              group
              relative
              overflow-hidden
              px-10
              py-5
              rounded-full
              text-white
              font-bold
              text-lg
              bg-gradient-to-r
              from-[#16C47F]
              to-[#2563EB]
              shadow-[0_20px_60px_rgba(37,99,235,0.35)]
              transition-all
              duration-500
              hover:scale-[1.04]
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Free Assessment

              <ArrowRight
                size={20}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </span>

            <div
              className="
                absolute
                inset-0
                bg-white/20
                translate-x-[-120%]
                group-hover:translate-x-[120%]
                transition-transform
                duration-1000
                skew-x-12
              "
            />
          </button>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            mx-auto
            mt-12
            text-xl
            italic
            text-white/60
            leading-9
          "
        >
          “The future belongs to students who receive the right
          support at the right time.”
        </motion.blockquote>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">

          {[
            ["5000+", "Students Learning"],
            ["1200+", "Verified Tutors"],
            ["50+", "Cities Covered"],
            ["4.8★", "Parent Rating"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="
                rounded-3xl
                border
                p-6
                backdrop-blur-xl
              "
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <div className="text-3xl font-black text-white">
                {number}
              </div>

              <div className="text-sm text-white/60 mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}