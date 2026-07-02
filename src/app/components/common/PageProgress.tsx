

import { motion, useScroll, useSpring } from "motion/react";

export default function PageProgress() {

  /* GLOBAL PAGE SCROLL */
  const { scrollYProgress } = useScroll();

  /* SMOOTH ANIMATION */
  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (

    <motion.div
      style={{ scaleX }}

      className="
      fixed
      top-0
      left-0
      right-0
      z-[9999]
      h-[4px]
      origin-left
      bg-gradient-to-r
      from-[#16C47F]
      via-[#2563EB]
      to-[#7C3AED]
      shadow-[0_0_20px_rgba(37,99,235,0.45)]
      "
    />
  );
}
