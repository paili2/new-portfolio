"use client";

import { motion, MotionValue, useAnimation } from "motion/react";
import { useEffect } from "react";

type conveyorBeltProps = {
  className?: string;
  conveyorY: MotionValue<string>;
  opacity: MotionValue<string>;
};

const ConveyorBelt = ({ className, conveyorY, opacity }: conveyorBeltProps) => {
  const images = [
    "/220412_PBS_web_kinako.png",
    "/220412_PBS_web_plain.png",
    "/fy25_chocolate_webtop_1430x1200.png",
    "/220412_PBS_web_kinako.png",
    "/220412_PBS_web_plain.png",
    "/fy25_chocolate_webtop_1430x1200.png",
  ];

  const controls = useAnimation();

  useEffect(() => {
    let idx = 0;
    const cycle = async () => {
      while (true) {
        // 각 프레임: 모든 슬라이드에 x, z, scale 설정
        await controls.start((i: number) => {
          // i: 각 이미지의 index, idx: 현재 “중앙” 이미지 인덱스
          const offset = i - idx;
          return {
            x: `${offset * 200}px`, // 가로 위치
            translateZ: i === idx ? 300 : -100, // 중앙만 앞으로
            scale: i === idx ? 1.2 : 0.8, // 중앙만 크게
            transition: { duration: 1, ease: "easeInOut" },
          };
        });

        // 3초 대기 후 다음 이미지로 이동
        await new Promise((r) => setTimeout(r, 2000));
        idx = (idx + 1) % images.length;
      }
    };
    cycle();
  }, [controls]);

  return (
    <motion.div
      className={`fixed w-full h-screen overflow-hidden [perspective:1000px] bg-blue-300 top-0 left-0 z-20  ${className}`}
      style={{ y: conveyorY, opacity }}
    >
      {images.map((src, i) => (
        <motion.img
          key={i}
          custom={i}
          animate={controls}
          src={src}
          alt=""
          className="
            absolute top-1/2 left-1/2
            w-48 h-48 object-cover
            -translate-x-1/2 -translate-y-1/2
            transform-style-preserve-3d 
          "
        />
      ))}
    </motion.div>
  );
};

export default ConveyorBelt;
