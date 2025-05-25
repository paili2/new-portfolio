"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";

type scrollLens = {
  top: MotionValue<string>;
};

const ScrollLens = ({ top }: scrollLens) => {
  const { scrollYProgress } = useScroll({
    offset: ["center start", "end end"],
  });

  const lensContainer = useRef(null);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "circle(1% at 50% 100%)", // 시작: 아래쪽 90% 지점
      "circle(3% at 50% 90%)", // 중간: 위쪽 50% 지점
      "circle(15% at 50% 75%)", // 끝: 위쪽 0% 지점
    ]
  );

  return (
    <motion.div className="relative" style={{ top }}>
      <div className="w-full h-[650vh]"></div>
      <div
        ref={lensContainer}
        className="relative w-full h-[200vh] overflow-hidden"
      >
        {/* B. 검은 오버레이 + 움직이는 렌즈 마스크 */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ clipPath }}
        >
          <img src="1.jpg" alt="lion" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollLens;
