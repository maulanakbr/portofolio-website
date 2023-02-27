import Container from "../Container";
import ProjectCard from "../ProjectCard";
import PROJECT_1 from "../../assets/projects/project-1.png";
import PROJECT_2 from "../../assets/projects/project-2.png";
import { motion } from "framer-motion";
import { contentVariants, titleVariants } from "../../config/motion";

const ProjectSection = () => {
  return (
    <Container id="projectSection">
      <motion.div
        className="mb-10 h-full w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h4
          className="mb-6 py-2 text-center font-semibold xl:text-left"
          variants={titleVariants}
        >
          Recent Projects
        </motion.h4>
        <div className="lg:flex lg:gap-8">
          <ProjectCard
            name="Movie App"
            projectId={1}
            image={PROJECT_1}
            webUrl="https://may-movie-project.netlify.app/"
            usingLibs={["Javascript", "React", "Tailwind", "TMDB API"]}
          />
          <ProjectCard
            name="Crypto App"
            projectId={2}
            image={PROJECT_2}
            webUrl="https://cryptohack.netlify.app/"
            usingLibs={["Javascript", "React", "Tailwind", "Coin Gecko API"]}
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default ProjectSection;
