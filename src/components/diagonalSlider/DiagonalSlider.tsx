"use client";

import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { easeIn, easeOut } from "popmotion";

import { useRef } from "react";

const DiagonalSlider = () => {
  const repeatedText = "Sand Butter ".repeat(20);

  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], ["1", "0"]);

  const y = useTransform(scrollYProgress, [0.5, 1], ["0px", "-50px"]);
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  const container = useRef(null);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["1200px", "0px", "0px", "-1200px"],
    { ease: easeOut }
  );

  return (
    <div className="w-full h-[300vh] relative flex justify-end bg-blue-300">
      <motion.div
        style={{ height, opacity }}
        className="fixed w-full top-0 left-0 bg-blue-700 z-30 "
      >
        Box
      </motion.div>
      <div
        ref={container}
        className="fixed w-full h-screen top-0 left-0 flex justify-end items-end p-32 bg-gray-300 z-10"
      >
        <motion.h1 style={{ y: springY }} className="text-9xl font-bold">
          Frontend
          <br />
          Project
        </motion.h1>
        <motion.div
          style={{ x }}
          className="w-[500px] h-[500px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-none rounded-2xl bg-amber-300"
        ></motion.div>
      </div>

      <motion.h1
        initial={{ x: "1000px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed -top-5 text-gray-300 text-7xl -rotate-10 whitespace-nowrap"
      >
        {repeatedText}
      </motion.h1>
      <div className="w-fit h-fit">
        <img className="object-cover z-20" src="1" alt="" />
      </div>
    </div>
  );
};

export default DiagonalSlider;
