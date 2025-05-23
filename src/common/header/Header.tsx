"use client";

import { useScroll, useTransform, motion } from "motion/react";

const Header = () => {
  const { scrollYProgress } = useScroll();

  const fontSize = useTransform(scrollYProgress, [0, 0.3], ["96px", "50px"]);

  return (
    <div className="fixed top-0 w-full h-fit py-15 text-white perspective-[800px] z-50">
      <motion.h1
        initial={{
          opacity: 0,
          rotateX: "-100deg",
          y: "100px",
        }}
        animate={{ opacity: 1, rotateX: "0deg", y: "0px" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="font-bold text-center whitespace-nowrap transform-style-preserve-3d translate-z-[100px] text-black"
        style={{ fontSize }}
      >
        JEONG SEORYEONG
      </motion.h1>
    </div>
  );
};

export default Header;
