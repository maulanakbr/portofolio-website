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
import { motion } from "framer-motion";
import { contentVariants } from "../config/motion";

const SkillSwiper = () => {
  return (
    <motion.section variants={contentVariants}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{ type: "progressbar" }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
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
    </motion.section>
  );
};

export default SkillSwiper;
