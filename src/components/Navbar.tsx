import { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navbarVariants } from "../config/motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollClick, setScrollClick] = useState(false);
  const [currentScrollValue, setCurrentScrollValue] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0 && window.innerWidth > 1280) {
        setCurrentScrollValue(true);
      } else {
        setCurrentScrollValue(false);
      }
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setCurrentScrollValue(false);
      });
  }, []);

  const date: string = new Date().getFullYear().toString();

  let currentWidth: number = window.innerWidth;

  const handleClick = (): void => {
    if (currentWidth >= 1280) {
      setScrollClick((prevClick) => !prevClick);
    } else {
      setToggle((prevToggle) => !prevToggle);
    }
  };

  return (
    <motion.nav
      className={
        currentScrollValue
          ? "relative m-4 flex items-center justify-between xl:fixed xl:top-0 xl:z-20 xl:m-0 xl:h-[4rem] xl:w-[80vw] xl:bg-primary-100"
          : "relative m-4 flex items-center justify-between xl:fixed xl:top-0 xl:z-20 xl:m-0 xl:h-[4rem] xl:w-[80vw] xl:bg-primary-100"
      }
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <span
        className={
          toggle
            ? "fixed top-4 z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
            : "z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
        }
      >
        <Link
          to="mainSection"
          spy={true}
          smooth="easeInQuint"
          offset={-100}
          duration={1000}
          onClick={handleClick}
        >
          MAY
        </Link>
      </span>

      {/* Desktop Menu */}
      <div
        className={
          !toggle
            ? "hidden xl:flex"
            : "fixed top-0 left-0 z-10 h-screen w-full bg-primary-600 xl:hidden"
        }
      >
        <div className="relative grid h-full place-content-center items-center justify-center">
          <ul className="xl:flex xl:items-center xl:justify-center xl:gap-4">
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[28px] sm:text-[31px] md:text-[33px] xl:text-[14px]">
              <Link
                to="mainSection"
                spy={true}
                smooth="easeInQuint"
                offset={-100}
                duration={1000}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[28px] sm:text-[31px] md:text-[33px] xl:text-[14px]">
              <Link
                to="aboutSection"
                spy={true}
                smooth="linear"
                duration={1000}
                offset={currentWidth <= 1280 ? 100 : -170}
                onClick={handleClick}
                activeClass="text-primary-500"
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[28px] sm:text-[31px] md:text-[33px] xl:text-[14px]">
              <Link
                to="skillSection"
                spy={true}
                smooth="linear"
                duration={1000}
                offset={currentWidth <= 1280 ? 10 : -150}
                onClick={handleClick}
                activeClass="text-primary-500"
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[28px] sm:text-[31px] md:text-[33px] xl:text-[14px]">
              <Link
                to="projectSection"
                spy={true}
                smooth="linear"
                duration={1000}
                offset={currentWidth <= 1280 ? 150 : -100}
                onClick={handleClick}
                activeClass="text-primary-500"
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[28px] sm:text-[31px] md:text-[33px] xl:text-[14px]">
              <Link
                to="contactSection"
                spy={true}
                smooth="linear"
                duration={1000}
                offset={currentWidth <= 1280 ? 150 : 50}
                onClick={handleClick}
                activeClass="text-primary-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="grid h-[8rem] place-content-center items-center xl:hidden">
            <div className="mb-3 flex justify-center gap-6 xl:mb-0">
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/shibuya7days/"
                aria-label="Instagram"
                target="blank"
                rel="noreferrer"
              >
                <RiInstagramLine size={17} />
              </a>
              <a
                className="cursor-pointer"
                href="https://linkedin.com/in/maulanakbr"
                aria-label="LinkedIn"
                target="blank"
                rel="noreferrer"
              >
                <RiLinkedinBoxLine size={17} />
              </a>
              <a
                className="cursor-pointer"
                href="https://github.com/maulanakbr"
                aria-label="GitHub"
                target="blank"
                rel="noreferrer"
              >
                <RiGithubLine size={17} />
              </a>
              <a
                className="cursor-pointer"
                href="https://wa.me/6288741076707"
                aria-label="Instagram"
                target="blank"
                rel="noreferrer"
              >
                <RiWhatsappLine size={17} />
              </a>
              <a
                className="cursor-pointer"
                href="mailto:yudistika.akbar@gmail.com"
                aria-label="Email"
                target="blank"
                rel="noreferrer"
              >
                <RiMailLine size={17} />
              </a>
            </div>
            <div className="text-center text-[13px]">
              &copy; {date}
              <span className="mx-1 font-semibold">Maulana Akbar Y</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!toggle ? (
        <div
          className="cursor-pointer p-2 xl:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <SlMenu size={29} />
        </div>
      ) : (
        <div
          className="fixed right-4 top-4 z-10 cursor-pointer p-2 active:animate-spin active:duration-300 xl:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineClose size={32} />
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
