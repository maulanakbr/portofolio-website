import Container from "./Container";
import SkillSwiper from "./SkillSwiper";

const SkillSection = () => {
  return (
    <Container id="skillSection">
      <div className="mb-10 h-full w-full">
        <h4 className="mb-3 py-2 text-center font-semibold xl:text-left">
          What I've Been Learning
        </h4>
        <SkillSwiper />
      </div>
    </Container>
  );
};

export default SkillSection;
