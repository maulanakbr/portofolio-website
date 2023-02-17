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
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      pagination={{ type: "progressbar" }}
      navigation
      breakpoints={{
        320: {
          navigation: {
            enabled: false,
          },
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            enabled: false,
          },
        },
        800: {
          slidesPerView: 3,
          navigation: { enabled: true },
        },
      }}
    >
      <SwiperSlide>
        <SkillCard>
          <SiJavascript size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiHtml5 size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiCss3 size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiTypescript size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiReact size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiTailwindcss size={95} />
        </SkillCard>
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard>
          <SiExpress size={95} />
        </SkillCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSwiper;
