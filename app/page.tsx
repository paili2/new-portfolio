"use client";

import ConveyorBelt from "@/src/components/conveyorBelt/ConveyorBelt";
import DiagonalSlider from "@/src/components/diagonalSlider/DiagonalSlider";
import Slider from "@/src/components/slider/Slider";
import { useScroll, motion, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0.5, 1], ["100vh", "0"]);

  return (
    <div className="overflow-x-hidden overflow-y-auto relative">
      <motion.div className="sticky top-0 left-0">
        <DiagonalSlider></DiagonalSlider>
      </motion.div>
      <motion.div style={{ top }} className="sticky left-0">
        <ConveyorBelt></ConveyorBelt>
      </motion.div>
      <motion.div className="sticky top-0 left-0">
        <Slider></Slider>
      </motion.div>
    </div>
  );
}
