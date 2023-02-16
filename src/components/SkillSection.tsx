import Container from "./Container";
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

const SkillSection = () => {
  return (
    <Container>
      <div className="mb-10 h-full w-full">
        <h4 className="mb-6 p-2 text-center font-semibold xl:text-left">
          02. Skills
        </h4>
        <div className="grid grid-cols-3 items-center justify-center gap-6 xl:grid-cols-4 xl:gap-12">
          <SkillCard>
            <SiJavascript size={50} />
          </SkillCard>
          <SkillCard>
            <SiHtml5 size={50} />
          </SkillCard>
          <SkillCard>
            <SiCss3 size={50} />
          </SkillCard>
          <SkillCard>
            <SiTypescript size={50} />
          </SkillCard>
          <SkillCard>
            <SiReact size={50} />
          </SkillCard>
          <SkillCard>
            <SiTailwindcss size={50} />
          </SkillCard>
          <SkillCard>
            <SiExpress size={50} />
          </SkillCard>
        </div>
      </div>
    </Container>
  );
};

export default SkillSection;
