import { Variants, motion } from "framer-motion";
import Container from "./Container";
import SkillSwiper from "./SkillSwiper";

const SkillSection = () => {
  const titleVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.25,
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  return (
    <Container id="skillSection">
      <div className="mb-10 h-full w-full">
        <motion.h4
          className="mb-4 p-4 text-center font-semibold lg:py-2 lg:px-0 xl:text-left"
          variants={titleVariants}
        >
          What I Have Been Learning
        </motion.h4>
        <SkillSwiper />
      </div>
    </Container>
  );
};

export default SkillSection;
