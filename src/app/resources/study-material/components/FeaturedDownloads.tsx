import { motion } from "framer-motion";
import {
  Download,
  Eye,
  ArrowRight,
  Star,
  FileText,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const featuredResources = [
  {
    id: 1,
    title: "CBSE Class 10 Board Exam Success Kit",

    category: "Exam Preparation",

    board: "CBSE",

    downloads: "12,500+",

    pages: "180 Pages",

    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",

    description:
      "Complete board preparation package with sample papers, revision notes, chapter-wise questions and important concepts.",

    gradient:
      "from-[#2563EB] to-[#16C47F]",
  },

  {
    id: 2,

    title:
      "ICSE Science Master Notes Collection",

    category:
      "Science Notes",

    board:
      "ICSE",

    downloads:
      "9,200+",

    pages:
      "140 Pages",

    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",

    description:
      "Comprehensive Physics, Chemistry and Biology notes created by expert educators.",

    gradient:
      "from-[#7C3AED] to-[#2563EB]",
  },

  {
    id: 3,

    title:
      "SSC Question Bank Ultimate Pack",

    category:
      "Question Bank",

    board:
      "SSC",

    downloads:
      "8,700+",

    pages:
      "220 Pages",

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",

    description:
      "Previous year questions, solved examples and practice sets for SSC students.",

    gradient:
      "from-[#F59E0B] to-[#EF4444]",
  },

  {
    id: 4,

    title:
      "Class 5 Mathematics Worksheet Bundle",

    category:
      "Worksheets",

    board:
      "CBSE",

    downloads:
      "6,800+",

    pages:
      "95 Pages",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    description:
      "Printable worksheets designed to improve conceptual understanding and problem solving.",

    gradient:
      "from-[#16C47F] to-[#2563EB]",
  },
];

export default function FeaturedDownloads() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#16C47F]/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#2563EB]/10
          blur-[160px]
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
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
            py-2.5
            rounded-full
            bg-white
            border
            border-[#16C47F]/20
            shadow-lg
            "
          >
            ⭐

            <span className="font-semibold text-[#16C47F]">
              FEATURED DOWNLOADS
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
            Recommended{" "}
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-[#64748B]">
            Discover the most downloaded
            study kits, worksheets,
            revision notes and exam packs
            recommended by our academic experts.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >

          {featuredResources.map((resource) => (

            <SwiperSlide key={resource.id}>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                group
                rounded-[36px]
                overflow-hidden
                bg-white
                border
                border-[rgba(15,23,42,0.08)]
                shadow-xl
                "
              >

                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">

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

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    "
                  />

                  {/* Badge */}
                  <div className="absolute top-5 left-5">

                    <span
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-white
                      text-[#2563EB]
                      text-xs
                      font-bold
                      shadow-lg
                      "
                    >
                      {resource.category}
                    </span>

                  </div>

                  {/* Downloads */}
                  <div className="absolute top-5 right-5">

                    <span
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#F59E0B]
                      text-white
                      text-xs
                      font-bold
                      flex
                      items-center
                      gap-1
                      "
                    >
                      <Star className="w-3 h-3 fill-white" />

                      Popular
                    </span>

                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">

                    <h3
                      className="
                      text-3xl
                      font-black
                      text-white
                      leading-tight
                      "
                    >
                      {resource.title}
                    </h3>

                    <p className="mt-4 text-white/85 line-clamp-2">
                      {resource.description}
                    </p>

                  </div>

                </div>

                {/* Bottom */}
                <div className="p-8">

                  <div className="flex flex-wrap gap-3 mb-6">

                    <div
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#2563EB]/10
                      text-[#2563EB]
                      text-sm
                      font-semibold
                      "
                    >
                      {resource.board}
                    </div>

                    <div
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#16C47F]/10
                      text-[#16C47F]
                      text-sm
                      font-semibold
                      "
                    >
                      {resource.pages}
                    </div>

                    <div
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#F59E0B]/10
                      text-[#F59E0B]
                      text-sm
                      font-semibold
                      "
                    >
                      {resource.downloads} Downloads
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-4">

                    <button
                      className="
                      h-14
                      rounded-2xl
                      border
                      border-[rgba(15,23,42,0.08)]
                      flex
                      items-center
                      justify-center
                      gap-2
                      font-semibold
                      text-[#64748B]
                      hover:bg-[#F8FAFC]
                      "
                    >
                      <Eye className="w-4 h-4" />

                      Preview
                    </button>

                    <button
                      className={`
                      h-14
                      rounded-2xl
                      bg-gradient-to-r
                      ${resource.gradient}
                      text-white
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      shadow-xl
                      `}
                    >
                      <Download className="w-4 h-4" />

                      Download
                    </button>

                  </div>

                  {/* Link */}
                  <button
                    className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#2563EB]
                    "
                  >
                    View Resource Details

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

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}