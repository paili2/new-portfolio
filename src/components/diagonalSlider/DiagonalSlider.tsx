"use client";

import { useRef } from "react";
import ConveyorBelt from "../conveyorBelt/ConveyorBelt";
import DiagonalCard from "./subComponents/DiagonalCard";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

const DiagonalSlider = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // <ConveyorBelt> effect
  const conveyorY = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["0vh", "-100vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], ["1", "0"]);

  // "frontend-project" text effect
  const textY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["0px", "-50px", "-100px"]
  );
  const springY = useSpring(textY, { stiffness: 100, damping: 10 });

  const translateY = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["0vh", "-100vh"]
  );

  const zIndex = useTransform(scrollYProgress, [0.6, 0.8], [0, 100]);

  // card effect
  const x = useTransform(scrollYProgress, [0.6, 1], ["100vw", "-200vw"]);
  const y = useTransform(scrollYProgress, [0.6, 1], ["100vh", "-200vh"]);
  const cardData = [
    { img: "/project/musinsa.webp", top: "10%", left: "10%" },
    { img: "/project/socar.webp", top: "40%", left: "40%" },
    { img: "/project/ticketLink.webp", top: "70%", left: "70%" },
    { img: "/project/nhis.webp", top: "100%", left: "100%" },
    { img: "16.jpg", top: "130%", left: "130%" },
    { img: "1.jpg", top: "160%", left: "160%" },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress:", latest);
  });

  return (
    <div ref={sectionRef} className="w-full h-[300vh] relative">
      <ConveyorBelt conveyorY={conveyorY} opacity={opacity}></ConveyorBelt>
      {/* <motion.div
        style={{ height, opacity }}
        className="fixed w-full top-0 left-0 bg-gray-500 z-10"
      ></motion.div> */}
      <motion.h1
        style={{
          y: springY,
          translateY,
          zIndex,
          textShadow: "1px 1px 2px gray",
        }}
        className="fixed bottom-10 right-30 text-9xl font-bold text-white"
      >
        Frontend
        <br />
        Project
      </motion.h1>
      {cardData.map((v, i) => {
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

export default DiagonalSlider;
