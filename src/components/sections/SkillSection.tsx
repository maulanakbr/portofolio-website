import { motion } from "framer-motion";
import Container from "../Container";
import SkillSwiper from "../SkillSwiper";
import { titleVariants } from "../../config/motion";

const SkillSection = () => {
  return (
    <Container id="skillSection">
      <motion.div
        className="mb-10 h-full w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h4
          className="mb-4 p-4 text-center font-semibold lg:py-2 lg:px-0 xl:text-left"
          variants={titleVariants}
        >
          What I Have Been Learning
        </motion.h4>
        <SkillSwiper />
      </motion.div>
    </Container>
  );
};

export default SkillSection;
