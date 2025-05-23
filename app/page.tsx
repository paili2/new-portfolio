"use client";

import ConveyorBelt from "@/src/components/conveyorBelt/ConveyorBelt";
import CopyTest from "@/src/components/diagonalSlider/CopyTest";
import DiagonalSlider from "@/src/components/diagonalSlider/DiagonalSlider";
import Test from "@/src/components/diagonalSlider/Test";
import Slider from "@/src/components/slider/Slider";

import { useScroll, motion, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0.5, 1], ["100vh", "0"]);

  return (
    <div className="overflow-hidden relative">
      <CopyTest></CopyTest>
      {/* <Test></Test> */}
      {/* <motion.div className="sticky top-0 left-0">
        <Slider></Slider>
      </motion.div> */}
      {/* <motion.div className="sticky top-0 left-0"></motion.div> */}
      {/* <DiagonalSlider></DiagonalSlider> */}
    </div>
  );
}
