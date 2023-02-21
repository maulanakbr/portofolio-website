import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        type: "spring",
        bounce: 0.25,
      }}
    >
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </motion.section>
  );
};

export default Home;
