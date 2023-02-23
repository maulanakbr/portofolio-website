import ContactCard from "./ContactCard";
import Container from "./Container";
import { motion } from "framer-motion";
import { titleVariants } from "../config/motion";

const ContactSection = () => {
  const description: string =
    "As a newcomer, I am excited to level up my experience by doing real-life projects. Now I am on my path to finding some opportunities to work. My inbox is always open, and I hope to contribute and give my best to your following projects soon.";

  return (
    <Container id="contactSection">
      <motion.div
        className="mb-10 h-full w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h4
          className="mb-4 py-2 text-center font-semibold xl:text-left"
          variants={titleVariants}
        >
          Get In Touch
        </motion.h4>
        <div className="flex w-full items-center justify-center">
          <ContactCard description={description} />
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
