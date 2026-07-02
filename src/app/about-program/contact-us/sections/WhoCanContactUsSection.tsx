import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const audiences = [
  {
    title: "Parents",
    heading: "Find the Right Tutor for Your Child",
    description:
      "Need academic guidance, home tuition, online classes, or help choosing the right learning plan?",

    cta: "Book Free Assessment",

    badge: "✓ Free Assessment Available",

    image:
      "https://homeshiksha.com/wp-content/uploads/2026/01/Home-Tutor.webp",

    gradient:
      "from-[#16C47F] via-[#16C47F]/50 to-transparent",

    color: "#16C47F",
  },

  {
    title: "Students",

    heading:
      "Get Personalized Learning Support",

    description:
      "Looking for help with school subjects, exam preparation, homework assistance, or academic improvement?",

    cta:
      "Explore Learning Support",

    badge:
      "📚 Learning Plan Ready",

    image:
      "https://simplitrain.com/wp-content/uploads/2024/09/Personalized-Learning-1024x614.png",

    gradient:
      "from-[#2563EB] via-[#2563EB]/50 to-transparent",

    color:
      "#2563EB",
  },

  {
    title:
      "Tutors",

    heading:
      "Join India's Growing Tutor Network",

    description:
      "Want to teach online or offline, earn flexible income, and grow your teaching career?",

    cta:
      "Apply as Tutor",

    badge:
      "🚀 Applications Open",

    image:
      "https://mentorclap.com/landing-img.webp",

    gradient:
      "from-[#7C3AED] via-[#7C3AED]/50 to-transparent",

    color:
      "#7C3AED",
  },

  {
    title:
      "Schools",

    heading:
      "Partner with UberTutor",

    description:
      "Interested in student support programs, learning partnerships, academic workshops, or institutional collaboration?",

    cta:
      "Discuss Partnership",

    badge:
      "🤝 Partnership Opportunities",

    image:
      "https://img.magnific.com/free-photo/business-people-shaking-hands-greeting_53876-101876.jpg?semt=ais_hybrid&w=740&q=80",

    gradient:
      "from-[#F59E0B] via-[#16C47F]/40 to-transparent",

    color:
      "#F59E0B",
  },
];

const chips = [
  "✓ Student Support",
  "✓ Parent Guidance",
  "✓ Tutor Recruitment",
  "✓ School Partnerships",
  "✓ Academic Success",
  "✓ Learning Solutions",
];

export default function WhoCanContactUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-20 w-[420px] h-[420px] bg-[#16C47F]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
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
            border-[#16C47F]/20
            bg-white/80
            backdrop-blur-xl
            shadow-lg
            "
          >
            💬

            <span className="text-sm font-semibold text-[#16C47F]">
              WHO CAN CONTACT US
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mt-8"
        >
          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            text-[#0B1220]
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            We're Here for{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B] leading-9">
            Whether you're looking for academic support,
            career opportunities, educational partnerships,
            or personalized learning guidance, our team is
            ready to assist you.
          </p>
        </motion.div>

        {/* Floating Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {chips.map((chip) => (
            <motion.div
              key={chip}
              whileHover={{ y: -2 }}
              className="
              px-4
              py-2
              rounded-full
              bg-white/70
              border
              border-[rgba(15,23,42,0.08)]
              backdrop-blur-xl
              shadow-sm
              text-sm
              text-[#64748B]
              "
            >
              {chip}
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {audiences.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              min-h-[420px]
              border
              border-[rgba(15,23,42,0.08)]
              shadow-xl
              "
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className={`
                absolute
                inset-0
                bg-gradient-to-t
                ${item.gradient}
                from-black/75
                via-black/40
                to-black/20
                `}
              />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-20">

                <div
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/15
                  backdrop-blur-xl
                  border
                  border-white/20
                  text-white
                  text-xs
                  font-bold
                  "
                >
                  {item.badge}
                </div>

              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <div
                  className="inline-flex items-center gap-2 mb-4"
                  style={{
                    color: item.color,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: item.color,
                    }}
                  />

                  <span className="text-sm font-bold uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>

                <h3
                  className="
                  text-3xl
                  font-black
                  text-white
                  leading-tight
                  "
                  style={{
                    fontFamily:
                      "var(--font-heading)",
                  }}
                >
                  {item.heading}
                </h3>

                <p className="mt-5 text-white/80 leading-8">
                  {item.description}
                </p>

                {/* CTA */}
                <button
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-white
                  font-bold
                  group/btn
                  w-fit
                  "
                >
                  {item.cta}

                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Footer Link */}
                <div className="mt-8 pt-5 border-t border-white/15">

                  <div className="inline-flex items-center gap-2 text-white font-semibold">

                    Learn More

                    <ArrowRight className="w-4 h-4" />

                  </div>

                  <div
                    className="h-[2px] mt-2 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, transparent)`,
                    }}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}