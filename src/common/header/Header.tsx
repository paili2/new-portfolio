"use client";

import { useScroll, useTransform, motion } from "motion/react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], ["-100deg", "0deg"]);
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);

  return (
    <div className="fixed top-0 w-full h-fit py-10 z-10 text-white perspective-[800px]">
      <motion.h1
        style={{ opacity, rotateX, y }}
        className="text-8xl font-bold text-center whitespace-nowrap transform-style-preserve-3d translate-z-[100px]"
      >
        JEONG SEORYEONG
      </motion.h1>
    </div>
  );
};

export default Header;
