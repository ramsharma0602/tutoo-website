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
    <section className="relative overflow-hidden bg-[#FAFAFC] py-24">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7B2FF7]/10 rounded-full blur-[140px]" />

        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-[#7B2FF7]/10 rounded-full blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7B2FF7]/10 rounded-full blur-[120px]" />

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
              border-[#7B2FF7]/20
              shadow-lg
              "
            >
              📚

              <span className="font-semibold text-[#7B2FF7]">
                STUDY MATERIAL LIBRARY
              </span>
            </div>

            <h1
              className="
              mt-8
              text-5xl
              lg:text-5xl
              font-bold
              text-[#0A1028]
              leading-tight
              "
            >
              Study Smarter with{" "}
              <span className="bg-gradient-to-r from-[#7B2FF7] via-[#22D3EE] to-[#7B2FF7] bg-clip-text text-transparent">
                Quality Learning Resources
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#6E6A85] max-w-2xl">
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
              <Search className="w-5 h-5 text-[#6E6A85]" />

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
                bg-[#FAFAFC]
                text-sm
                text-[#6E6A85]
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
                  border-[rgba(30,27,58,0.08)]
                  text-sm
                  font-medium
                  text-[#6E6A85]
                  hover:border-[#7B2FF7]
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
                <FileText className="w-6 h-6 text-[#7B2FF7]" />

                <h4 className="font-bold mt-2">
                  Free
                </h4>

                <p className="text-xs text-[#6E6A85]">
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
                <BookOpen className="w-6 h-6 text-[#7B2FF7]" />

                <h4 className="font-bold mt-2">
                  CBSE · ICSE · SSC
                </h4>

                <p className="text-xs text-[#6E6A85]">
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
                <BarChart3 className="w-6 h-6 text-[#7B2FF7]" />

                <h4 className="font-bold mt-2">
                  Most Downloaded
                </h4>

                <p className="text-xs text-[#6E6A85]">
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