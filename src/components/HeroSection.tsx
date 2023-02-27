import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { heroVariants } from "../config/motion";

const HeroSection = () => {
  let currentWidth: number = window.innerWidth;

  return (
    <motion.section
      className="mb-10 h-full px-6 sm:px-8 md:px-4 lg:px-28 xl:my-16 xl:px-20"
      id="mainSection"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex h-[83vh] w-full items-center justify-center">
        <div className="grid w-full xl:w-[70vw]">
          <h1 className="mb-2 p-4 text-center text-[50px] font-bold xs:text-[61px] sm:text-[65px] md:text-[75px] lg:text-[110px] xl:text-left xl:text-[80px]">
            Hi, I am Maulana Akbar Yudistika
          </h1>
          <div className="flex w-full items-stretch justify-between border-t border-primary-1000">
            <h3 className="px-4 py-4 text-primary-600">Web Developer</h3>
            <span className="flex items-center justify-center border-l border-primary-1000">
              <Link
                to="contactSection"
                spy={true}
                smooth="linear"
                duration={1000}
                offset={currentWidth <= 1280 ? 250 : -50}
                activeClass="text-primary-500"
              >
                <AiOutlineArrowUp
                  className="rotate-[-40deg] cursor-pointer"
                  size={74}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
