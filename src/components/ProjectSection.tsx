import Container from "./Container";
import ProjectCard from "./ProjectCard";
import PROJECT_1 from "../assets/projects/project-1.png";
import PROJECT_2 from "../assets/projects/project-2.png";
import { Variants, motion } from "framer-motion";

const ProjectSection = () => {
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
    <Container id="projectSection">
      <div className="mb-10 h-full w-full">
        <motion.h4
          className="mb-6 py-2 text-center font-semibold xl:text-left"
          variants={titleVariants}
        >
          Recent Projects
        </motion.h4>
        <div className="xl:flex xl:gap-8">
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
      </div>
    </Container>
  );
};

export default ProjectSection;
