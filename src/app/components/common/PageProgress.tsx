

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
      from-[#7B2FF7]
      via-[#7B2FF7]
      to-[#7B2FF7]
      shadow-[0_0_20px_rgba(123,47,247,0.45)]
      "
    />
  );
}
