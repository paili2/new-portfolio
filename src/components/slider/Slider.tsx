"use client";

import { useScroll, motion, useTransform } from "motion/react";

const Slider = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-400vw"]);

  return (
    <motion.div
      style={{ x }}
      className="w-[500vw] h-[600vh] flex sticky left-0"
    >
      <motion.div className="w-[100vw] h-full bg-amber-200"></motion.div>
      <motion.div className="w-[100vw] h-full bg-amber-300"></motion.div>
      <motion.div className="w-[100vw] h-full bg-amber-400"></motion.div>
      <motion.div className="w-[100vw] h-full bg-amber-500"></motion.div>
      <motion.div className="w-[100vw] h-full bg-amber-600"></motion.div>
    </motion.div>
  );
};

export default Slider;
