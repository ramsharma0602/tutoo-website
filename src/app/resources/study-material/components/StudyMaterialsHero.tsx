import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  FileText,
  Download,
  BarChart3,
} from "lucide-react";

export default function StudyMaterialsHero() {
  const quickTags = [
    "CBSE",
    "ICSE",
    "Class 10",
    "Mathematics",
    "Worksheets",
    "Sample Papers",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 rounded-full blur-[140px]" />

        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

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
              📚

              <span className="font-semibold text-[#16C47F]">
                STUDY MATERIAL LIBRARY
              </span>
            </div>

            <h1
              className="
              mt-8
              text-5xl
              lg:text-7xl
              font-black
              text-[#0B1220]
              leading-tight
              "
              style={{
                fontFamily:
                  "var(--font-heading)",
              }}
            >
              Study Smarter with{" "}
              <span className="bg-gradient-to-r from-[#16C47F] via-[#22D3EE] to-[#2563EB] bg-clip-text text-transparent">
                Quality Learning Resources
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#64748B] max-w-2xl">
              Access curated study materials,
              practice worksheets,
              revision notes,
              sample papers,
              and exam resources designed
              to help students learn effectively.
            </p>

            {/* Search */}
            <div
              className="
              mt-10
              flex
              items-center
              bg-white
              rounded-[28px]
              shadow-xl
              px-5
              h-16
              "
            >
              <Search className="w-5 h-5 text-[#64748B]" />

              <input
                placeholder="Search Study Materials..."
                className="
                flex-1
                px-4
                bg-transparent
                outline-none
                "
              />

              <div
                className="
                px-3
                py-1.5
                rounded-lg
                bg-[#F8FAFC]
                text-sm
                text-[#64748B]
                "
              >
                ⌘ K
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">

              {quickTags.map((tag) => (
                <button
                  key={tag}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  border
                  border-[rgba(15,23,42,0.08)]
                  text-sm
                  font-medium
                  text-[#64748B]
                  hover:border-[#2563EB]
                  "
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="relative">

            {/* Main Card */}
            <div
              className="
              relative
              rounded-[40px]
              bg-white/80
              backdrop-blur-xl
              border
              border-white
              p-8
              shadow-2xl
              "
            >
              <img
                src="/images/study-material-hero.png"
                alt="Study Materials"
                className="w-full"
              />

              {/* Widget */}
              <div
                className="
                absolute
                top-8
                right-8
                bg-white
                rounded-2xl
                p-4
                shadow-lg
                "
              >
                <FileText className="w-6 h-6 text-[#2563EB]" />

                <h4 className="font-bold mt-2">
                  10,000+
                </h4>

                <p className="text-xs text-[#64748B]">
                  Resources
                </p>
              </div>

              <div
                className="
                absolute
                bottom-10
                left-0
                bg-white
                rounded-2xl
                p-4
                shadow-lg
                "
              >
                <BookOpen className="w-6 h-6 text-[#16C47F]" />

                <h4 className="font-bold mt-2">
                  500+
                </h4>

                <p className="text-xs text-[#64748B]">
                  Worksheets
                </p>
              </div>

              <div
                className="
                absolute
                bottom-0
                right-0
                bg-white
                rounded-2xl
                p-4
                shadow-lg
                "
              >
                <BarChart3 className="w-6 h-6 text-[#7C3AED]" />

                <h4 className="font-bold mt-2">
                  Most Downloaded
                </h4>

                <p className="text-xs text-[#64748B]">
                  Trending Resources
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}