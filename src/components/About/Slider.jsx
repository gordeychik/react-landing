import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import styles from "./About.module.scss";

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1400) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1600) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем функцию при монтировании компонента

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      pagination={true}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      loop={true}
    >
      <SwiperSlide>
        <Slide backgroundColor="#FA6648" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundColor="#FFB0BC" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundColor="#FFBD12" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundColor="#FA6648" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundColor="#FFB0BC" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundColor="#FFBD12" />
      </SwiperSlide>
    </Swiper>
  );
};