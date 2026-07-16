
import { motion } from "motion/react";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function TopInfoBar() {

  const navigate = useNavigate();

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: -20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}

      className="
      fixed
      relative
      z-[999]
      h-[46px]
      overflow-hidden
      border-b
      border-white/10
      "
      style={{
        background:
          "linear-gradient(90deg, #16C47F 0%, #2563EB 55%, #0B1220 100%)",
      }}
    >

      {/* Glow Orbs */}
      <div className="absolute -top-20 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-10 top-0 w-40 h-40 rounded-full bg-[#7C3AED]/20 blur-3xl" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="
    relative
    z-10
    h-full
    max-w-[1440px]
    mx-auto
    px-3
    lg:px-8
    flex
    items-center
    justify-between
    gap-2
  "
      >

        {/* DESKTOP LEFT */}
        <div
          className="
      hidden
      lg:flex
      items-center
      gap-6
      text-[13px]
      text-white/90
    "
        >
          {/* Location */}
          <motion.div
            whileHover={{ y: -1 }}
            className="group flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>

            <span>
              Home & Online Tuition Across India
            </span>
          </motion.div>

          {/* Phone */}
          <a
            href="tel:+ 8446146039"
            className="group flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>

            <span>
              +91  8446146039
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@tutoolearning.com"
            className="group flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>

            <span>
              info@tutoolearning.com
            </span>
          </a>
        </div>

        {/* MOBILE LEFT */}
        <div
          className="
      flex
      lg:hidden
      items-center
      gap-2
    "
        >
          <a
            href="tel:+ 91 8446146039"
            className="
        flex
        items-center
        gap-1.5
        px-2.5
        py-1
        rounded-full
        bg-white/10
        border
        border-white/10
      "
          >
            <Phone className="w-3 h-3 text-white" />

            <span className="text-[11px] text-white font-medium">
               +91  8446146039
            </span>
          </a>

          <a
            href="mailto:info@tutoolearning.com"
            className="
        flex
        items-center
        gap-1.5
        px-2.5
        py-1
        rounded-full
        bg-white/10
        border
        border-white/10
      "
          >
            <Mail className="w-3 h-3 text-white" />

            <span className="text-[11px] text-white font-medium">
              info@tutoolearning.com
            </span>
          </a>
        </div>

        {/* CENTER */}
        {/* <div className="flex items-center">

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
        inline-flex
        items-center
        gap-2
        px-3
        md:px-4
        py-1.5
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/15
      "
          >
            <div className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse" />

            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />

            <span className="text-[11px] md:text-[12px] font-semibold text-white whitespace-nowrap">
              Free Assessment
            </span>
          </motion.div>
        </div> */}

        {/* RIGHT */}
        <div className="hidden sm:flex items-center">

          <div
            className="
        flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-full
        bg-white/10
        border
        border-white/10
      "
          >
            <div className="relative">
              <div className="absolute w-2 h-2 rounded-full bg-[#16C47F] animate-ping" />
              <div className="relative w-2 h-2 rounded-full bg-[#16C47F]" />
            </div>

            <span className="text-[12px] font-medium text-white/90">
              Live Support
            </span>
          </div>
        </div>

      </div>

    </motion.div>
  );
}
