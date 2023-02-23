import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import { Variants, motion } from "framer-motion";

const Home = () => {
  const homeVariants: Variants = {
    hidden: { x: 500 },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        delay: 0.2,
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  return (
    <motion.section variants={homeVariants} initial="hidden" animate="visible">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </motion.section>
  );
};

export default Home;
