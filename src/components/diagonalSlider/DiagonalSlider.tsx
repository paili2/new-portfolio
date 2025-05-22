"use client";

import { motion } from "motion/react";

const DiagonalSlider = () => {
  const repeatedText = "Sand Butter ".repeat(20); // 긴 줄 만들기!

  return (
    <div className="w-full h-screen relative">
      <motion.h1
        initial={{ x: "1000px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed top-0 text-7xl -rotate-10 whitespace-nowrap"
      >
        {repeatedText}
      </motion.h1>
      <div className="w-fit h-fit">
        <img className="object-cover z-2" src="1" alt="" />
      </div>
    </div>
  );
};

export default DiagonalSlider;
