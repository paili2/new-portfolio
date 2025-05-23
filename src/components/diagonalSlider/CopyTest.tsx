// absolute => absolute로 바꾸는 작업 Test

"use client";

import DiagonalCard from "./subComponents/DiagonalCard";
import { useScroll, useTransform, motion, useSpring } from "motion/react";

const CopyTest = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  // card effect
  const x = useTransform(scrollYProgress, [0.6, 1], ["100vw", "-200vw"]);
  const y = useTransform(scrollYProgress, [0.6, 1], ["100vh", "-200vh"]);
  const cardData = [
    { img: "16.jpg", top: "10%", left: "10%" },
    { img: "1.jpg", top: "50%", left: "50%" },
    { img: "16.jpg", top: "90%", left: "90%" },
  ];

  return (
    <div className="w-full h-[300vh] relative">
      {/* <motion.div className="absolute top-[10%] left-[10%] translate-x-[-50%] translate-y-[-50%]">
        <DiagonalCard img={"1.jpg"}></DiagonalCard>
      </motion.div>

      <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <DiagonalCard img={"1.jpg"}></DiagonalCard>
      </motion.div>

      <motion.div className="absolute top-[90%] left-[90%] translate-x-[-50%] translate-y-[-50%]">
        <DiagonalCard img={"1.jpg"}></DiagonalCard>
      </motion.div> */}

      {cardData.map((v, i) => {
        return (
          <motion.div
            key={i}
            className="absolute translate-x-[-50%] translate-y-[-50%]"
            style={{ x, y, top: `${v.top}`, left: `${v.left}` }}
          >
            <DiagonalCard img={v.img}></DiagonalCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CopyTest;
