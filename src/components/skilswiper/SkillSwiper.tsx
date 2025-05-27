"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./skillSwiper.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import SkillCard from "./subComponents/SkillCard";

const SkillSwiper = () => {
  return (
    <section className="w-full bg-blue-400 overflow-hidden py-30 px-25 justify-center items-center skill-section">
      <div className="w-full mx-auto flex flex-col items-center gap-20">
        <h1 className="text-6xl font-bold text-white">SKILLS</h1>

        <div className="w-full grid grid-cols-4 place-items-center">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard image={"/html.png"} skilName={"HTML"}></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10">
              <p>
                웹 문서의 구조를 설계하고 시맨틱 태그를 활용해 접근성과 SEO를
                고려한 마크업 작성
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard image={"/css.png"} skilName={"CSS"}></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10">
              <p>
                반응형 디자인과 유틸리티 클래스(Tailwind CSS 등)를 활용해 사용자
                친화적인 UI 스타일 구현
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard
                image={"/javascript.png"}
                skilName={"JAVASCRIPT"}
              ></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                동적 기능과 이벤트 기반 로직을 구현하여 사용자 경험을 향상시키는
                클라이언트 로직 개발
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard
                image={"/typescript.png"}
                skilName={"TYPESCRIPT"}
              ></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                TypeScript로 타입 안전성을 강화하고, 코드의 안정성을 높여 협업
                효율 개선
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard image={"/react.png"} skilName={"REACT"}></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                React를 사용 컴포넌트 기반 UI를 개발, 상태 관리, 라우팅을 통해
                효율적인 웹 구축
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard image={"/nextjs.png"} skilName={"NEXT.JS"}></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                SSR(서버 사이드 렌더링)과 SSG(정적 사이트 생성)를 활용해
                최적화된 React 기반 웹 애플리케이션 구축
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard image={"/java.png"} skilName={"JAVA"}></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                객체지향 프로그래밍 원칙에 기반해 안정적인 백엔드 로직을
                개발하고, 다양한 API와 시스템 연동 구현
              </p>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard
                image={"/springboot.png"}
                skilName={"SPRINGBOOT"}
              ></SkillCard>
            </SwiperSlide>

            <SwiperSlide className="p-10 !bg-blue-500">
              <p>
                Spring Boot 기반의 RESTful API 서버를 구축하고, 보안 및 예외
                처리를 적용해 안정적인 서비스 환경 개발
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillSwiper;
