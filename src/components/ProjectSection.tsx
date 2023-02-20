import Container from "./Container";
import ProjectCard from "./ProjectCard";
import PROJECT_1 from "../assets/projects/project-1.png";
import PROJECT_2 from "../assets/projects/project-2.png";

const ProjectSection = () => {
  return (
    <Container id="projectSection">
      <div className="mb-10 h-full w-full">
        <h4 className="mb-6 py-2 text-center font-semibold xl:text-left">
          Recent Projects
        </h4>
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
