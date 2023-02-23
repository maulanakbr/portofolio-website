import { Variants, motion } from "framer-motion";
import Container from "./Container";

const AboutSection = () => {
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

  const paragraphVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  return (
    <Container id="aboutSection">
      <div className="mb-10 h-full w-full">
        <motion.h4
          className="mb-2 py-2 text-center font-semibold xl:text-left"
          variants={titleVariants}
        >
          About Me
        </motion.h4>
        <motion.div
          className="flex w-full items-center justify-center"
          variants={paragraphVariants}
        >
          <p className="text-center text-[18px] leading-[3rem] md:text-[21px] lg:leading-[3.5rem] xl:text-left">
            I enjoy working in the field of technology, mainly in the context of
            web development. I have been into various fascinating web
            development topics since I passionately had the opportunity to
            enroll Digital Talent Scholarship program held by the{" "}
            <span className="italic">
              Ministry of Communications and Informatics{" "}
            </span>{" "}
            a year ago. It was a great impression and experience that helped me
            learn and focus on some basic fundamental things that are required
            to grow as a professional web developer in the future.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutSection;
