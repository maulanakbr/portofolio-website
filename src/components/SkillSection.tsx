import Container from "./Container";
// import SkillCard from "./SkillCard";
import SkillSwiper from "./SkillSwiper";
// import {
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiTypescript,
//   SiReact,
//   SiTailwindcss,
//   SiExpress,
// } from "react-icons/si";

const SkillSection = () => {
  return (
    <Container>
      <div className="mb-10 h-full w-full">
        <h4 className="mb-6 p-2 text-center font-semibold xl:text-left">
          02. Skills
        </h4>
        <SkillSwiper />
      </div>
    </Container>
  );
};

export default SkillSection;
