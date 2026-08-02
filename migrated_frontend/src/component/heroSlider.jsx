import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroSlide from "./heroSlide";
import ProjectSlides from "../data/projectSlides";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {ProjectSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}