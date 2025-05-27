"use client";

import ConveyorBelt from "@/src/components/conveyorBelt/ConveyorBelt";
import DiagonalSlider from "@/src/components/diagonalSlider/DiagonalSlider";
import ScrollLens from "@/src/components/scrollLens/ScrollLens";
import SkillSwiper from "@/src/components/skilswiper/SkillSwiper";
import Slider from "@/src/components/slider/Slider";

import { useScroll, motion, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0.5, 1], ["100vh", "0"]);

  return (
    <div className="overflow-hidden relative">
      <Slider></Slider>
      <DiagonalSlider></DiagonalSlider>
      <ScrollLens top={top}></ScrollLens>
      <SkillSwiper></SkillSwiper>
    </div>
  );
}
