import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  Star,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    id: 1,
    title:
      "Mathematics Fractions Practice Worksheet",

    board: "CBSE",

    className: "Class 5",

    subject: "Mathematics",

    type: "Worksheet",

    fileType: "PDF",

    size: "2.4 MB",

    downloads: 2450,

    popular: true,

    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },

  {
    id: 2,

    title:
      "Class 10 Science Sample Paper 2026",

    board: "CBSE",

    className: "Class 10",

    subject: "Science",

    type: "Sample Paper",

    fileType: "PDF",

    size: "3.8 MB",

    downloads: 5870,

    popular: true,

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },

  {
    id: 3,

    title:
      "Physics Revision Notes Complete Guide",

    board: "ICSE",

    className: "Class 12",

    subject: "Physics",

    type: "Notes",

    fileType: "PDF",

    size: "5.2 MB",

    downloads: 1680,

    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },

  {
    id: 4,

    title:
      "Chemistry Question Bank",

    board: "SSC",

    className: "Class 10",

    subject: "Chemistry",

    type: "Question Bank",

    fileType: "PDF",

    size: "6.4 MB",

    downloads: 3200,

    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",
  },

  {
    id: 5,

    title:
      "English Grammar Workbook",

    board: "CBSE",

    className: "Class 8",

    subject: "English",

    type: "Worksheet",

    fileType: "DOC",

    size: "1.8 MB",

    downloads: 1120,

    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },

  {
    id: 6,

    title:
      "Computer Science Practice Test",

    board: "ICSE",

    className: "Class 11",

    subject: "Computer Science",

    type: "Practice Test",

    fileType: "PDF",

    size: "4.1 MB",

    downloads: 1980,

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
];

export default function ResourceLibrary() {
  return (
    <section className="relative py-24 bg-[#FAFAFC] overflow-hidden">

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
          bg-[#7B2FF7]/10
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
          bg-[#7B2FF7]/10
          blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-full
            bg-white/80
            border
            border-[#7B2FF7]/15
            shadow-lg
            "
          >
            📄

            <span className="font-semibold text-[#7B2FF7]">
              RESOURCE LIBRARY
            </span>
          </div>

          <h2
            className="
            mt-6
            text-4xl
            lg:text-5xl
            font-bold
            text-[#0A1028]
            "
          >
            Available Study{" "}
            <span className="text-[#6D28D9]">
              Resources
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-[#6E6A85] leading-8">
            Explore notes, worksheets,
            question banks, sample papers,
            and practice tests curated by
            expert educators.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {resources.map((resource, index) => (

            <motion.div
              key={resource.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              group
              rounded-[32px]
              overflow-hidden
              bg-white
              border
              border-[rgba(30,27,58,0.08)]
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={resource.image}
                  alt={resource.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* File Badge */}
                <div className="absolute top-4 left-4">

                  <span
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-white
                    text-xs
                    font-bold
                    text-[#7B2FF7]
                    shadow-lg
                    "
                  >
                    {resource.fileType}
                  </span>
                </div>

                {/* Popular */}
                {resource.popular && (

                  <div className="absolute top-4 right-4">

                    <span
                      className="
                      flex
                      items-center
                      gap-1
                      px-3
                      py-1.5
                      rounded-full
                      bg-[#F59E0B]
                      text-white
                      text-xs
                      font-bold
                      "
                    >
                      <Star className="w-3 h-3 fill-white" />

                      Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex flex-wrap gap-2 mb-4">

                  <span className="px-3 py-1 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7] text-xs font-semibold">
                    {resource.board}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7] text-xs font-semibold">
                    {resource.className}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7] text-xs font-semibold">
                    {resource.type}
                  </span>

                </div>

                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#1E1B3A]
                  leading-snug
                  mb-4
                  line-clamp-2
                  "
                >
                  {resource.title}
                </h3>

                {/* Meta */}
                <div className="space-y-2 text-sm text-[#6E6A85] mb-6">

                  <div>
                    Subject: {resource.subject}
                  </div>

                  <div>
                    File Size: {resource.size}
                  </div>

                  <div>
                    Downloads:{" "}
                    {"Free"}
                  </div>

                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">

                  <button
                    className="
                    h-12
                    rounded-2xl
                    border
                    border-[rgba(30,27,58,0.08)]
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-semibold
                    text-[#6E6A85]
                    hover:bg-[#FAFAFC]
                    "
                  >
                    <Eye className="w-4 h-4" />

                    Preview
                  </button>

                  <button
                    className="
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#7B2FF7]
                    to-[#7B2FF7]
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-lg
                    "
                  >
                    <Download className="w-4 h-4" />

                    Download
                  </button>
                </div>

                <button
                  className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[#7B2FF7]
                  font-semibold
                  "
                >
                  View Details

                  <ArrowRight
                    className="
                    w-4
                    h-4
                    group-hover:translate-x-1
                    transition-transform
                    "
                  />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16 gap-3">

          {[1, 2, 3, 4].map((page) => (

            <button
              key={page}
              className={`
                w-12
                h-12
                rounded-2xl
                font-bold
                ${
                  page === 1
                    ? "bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white"
                    : "bg-white border border-[rgba(30,27,58,0.08)] text-[#6E6A85]"
                }
              `}
            >
              {page}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}