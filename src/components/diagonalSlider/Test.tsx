"use client";

import { useState } from "react";
import DiagonalCard from "./subComponents/DiagonalCard";
import { useScroll, useTransform, motion } from "motion/react";

const Test = () => {
  const [inView, setInview] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const a = [
    { img: "16.jpg", top: "10%", left: "10%" },
    { img: "1.jpg", top: "40%", left: "40%" },
    { img: "16.jpg", top: "70%", left: "70%" },
  ];

  return (
    <div className="w-full h-[200vh] relative">
      {a.map((v, i) => {
        return (
          <motion.div
            key={i}
            className="fixed"
            style={{ x, y, top: `${v.top}`, left: `${v.left}` }}
          >
            <DiagonalCard img={v.img}></DiagonalCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Test;
