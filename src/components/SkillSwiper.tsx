import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SkillCard from "./SkillCard";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const SkillSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      modules={[Pagination, Navigation]}
      pagination={{ type: "progressbar" }}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            enabled: false,
          },
        },
        800: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <SkillCard>
          <SiJavascript size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiHtml5 size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiCss3 size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiTypescript size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiReact size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiTailwindcss size={80} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiExpress size={80} />
        </SkillCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSwiper;
