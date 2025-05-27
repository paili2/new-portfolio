"use client";

import { useScroll, motion, useTransform } from "motion/react";
import Image from "next/image";

type sliderProps = {
  className?: string;
};

const Slider = ({ className }: sliderProps) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.5], ["0%", "-130%"]);

  return (
    <motion.div
      style={{ x }}
      className={`w-[600vw] h-[600vh] flex sticky top-0 left-0 ${className}`}
    >
      <motion.div className="w-[100vw] h-full bg-[#B9BABF]">
        <div className="w-[500px] h-[500px] absolute top-0"></div>
      </motion.div>
      <motion.div className="w-[100vw] h-full bg-black">
        <div className="w-[500px] h-[500px] absolute top-0"></div>
      </motion.div>
      <motion.div className="w-[100vw] h-full bg-[#B9BABF]">
        <div className="w-[500px] h-[500px] absolute top-0"></div>
      </motion.div>
      <motion.div className="w-[100vw] h-full bg-black">
        <div className="w-[500px] h-[500px] absolute top-0"></div>
      </motion.div>
      <motion.div className="w-[100vw] h-full bg-[#B9BABF]">
        <div className="w-[500px] h-[500px] absolute top-0"></div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
