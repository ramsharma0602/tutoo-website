import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a free assessment?",
      answer:
        "You can book a free assessment by filling out our assessment form or contacting our support team. Our academic advisors will guide you through the process and recommend the most suitable learning plan.",
    },
    {
      question: "How quickly can I get a tutor?",
      answer:
        "In most cases, tutor recommendations are shared within 24–48 hours after assessment and requirement verification.",
    },
    {
      question: "Do you offer online tuition?",
      answer:
        "Yes. UberTutor provides both online and home tuition options across multiple boards, subjects, and academic levels.",
    },
    {
      question: "How can I apply as a tutor?",
      answer:
        "Visit our Tutor Application page, submit your details, upload required documents, and complete the verification process.",
    },
    {
      question: "Which boards and classes do you support?",
      answer:
        "We support CBSE, ICSE, SSC, State Boards, IB, IGCSE, and competitive exam preparation across multiple grade levels.",
    },
  ];

  const chips = [
    "✓ Free Assessment Available",
    "✓ Verified Tutors",
    "✓ Fast Support",
    "✓ Home & Online Classes",
    "✓ Trusted by Parents",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#16C47F]/10 blur-[140px]" />

        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            bg-white/80
            backdrop-blur-xl
            border
            border-[#16C47F]/20
            shadow-lg
            "
          >
            ❓

            <span className="font-semibold text-[#16C47F]">
              HELP CENTER
            </span>
          </div>

          <h2
            className="
            mt-8
            text-5xl
            lg:text-6xl
            font-black
            text-[#0B1220]
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#64748B] max-w-3xl mx-auto">
            Find answers to the most common questions about assessments,
            tutors, classes, applications, pricing, and learning support.
          </p>
        </motion.div>

        {/* FAQ Layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 mt-20">

          {/* FAQ Column */}
          <div className="space-y-5">

            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  className={`
                  overflow-hidden
                  rounded-[24px]
                  border
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-[#2563EB]/20 shadow-xl shadow-[#2563EB]/10"
                      : "border-[rgba(15,23,42,0.08)]"
                  }
                  `}
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(
                        isOpen ? null : index
                      )
                    }
                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-7
                    text-left
                    "
                  >
                    <h3 className="text-lg font-bold text-[#0F172A] pr-5">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      className="
                      shrink-0
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                      bg-gradient-to-r
                      from-[#16C47F]
                      to-[#2563EB]
                      shadow-lg
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="px-7 pb-7 text-[#64748B] leading-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Support Card */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
            sticky
            top-28
            h-fit
            overflow-hidden
            rounded-[32px]
            shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

            <div className="relative z-10 p-8 text-white">

              <div className="text-5xl">
                💬
              </div>

              <h3
                className="
                mt-6
                text-3xl
                font-black
                "
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Still Have Questions?
              </h3>

              <p className="mt-4 text-white/85 leading-8">
                Can't find the answer you're looking for?
                Our support team is happy to help.
              </p>

              <div className="space-y-4 mt-8">

                <button
                  className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-white
                  text-[#0F172A]
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <Phone className="w-4 h-4" />
                  Contact Support
                </button>

                <button
                  className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-white/15
                  backdrop-blur-xl
                  border
                  border-white/20
                  text-white
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </button>

              </div>

              <div className="mt-10 pt-8 border-t border-white/20">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-white animate-pulse" />

                  <span className="font-semibold">
                    Support Available Today
                  </span>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Trust Chips */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">

          {chips.map((chip) => (
            <motion.div
              key={chip}
              whileHover={{
                y: -2,
              }}
              className="
              px-5
              py-3
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border
              border-[rgba(15,23,42,0.08)]
              text-sm
              font-medium
              text-[#64748B]
              shadow-sm
              "
            >
              {chip}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}