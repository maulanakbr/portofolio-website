import Container from "./Container";
import SkillSwiper from "./SkillSwiper";

const SkillSection = () => {
  return (
    <Container id="skillSection">
      <div className="mb-10 h-full w-full">
        <h4 className="mb-4 p-4 text-center font-semibold lg:py-2 lg:px-0 xl:text-left">
          What I've Been Learning
        </h4>
        <SkillSwiper />
      </div>
    </Container>
  );
};

export default SkillSection;
