import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectSection from "../components/sections/ProjectSection";
import SkillSection from "../components/sections/SkillSection";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </section>
  );
};

export default Home;
