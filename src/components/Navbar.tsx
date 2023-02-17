import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const date: string = new Date().getFullYear().toString();

  return (
    <nav className="relative m-4 flex items-center justify-between">
      <span
        className={
          toggle
            ? "fixed top-4 z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
            : "z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
        }
      >
        MAY
      </span>

      {/* Desktop Menu */}
      <div
        className={
          toggle
            ? "fixed top-0 left-0 z-10 h-screen w-full bg-primary-600 xl:hidden"
            : "hidden xl:flex"
        }
      >
        <div className="grid h-full place-content-center items-center justify-center">
          <ul className="xl:flex xl:items-center xl:justify-center xl:gap-4">
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[34px] sm:text-[34px] md:text-[40px] xl:text-[14px]">
              Home
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[34px] sm:text-[34px] md:text-[40px] xl:text-[14px]">
              About
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[34px] sm:text-[34px] md:text-[40px] xl:text-[14px]">
              Skills
            </li>
            <li className="cursor-pointer p-2 text-center text-[24px] font-semibold xs:text-[34px] sm:text-[34px] md:text-[40px] xl:text-[14px]">
              Projects
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
                <RiInstagramLine size={19} />
              </a>
              <a
                className="cursor-pointer"
                href="https://linkedin.com/in/maulanakbr"
                aria-label="LinkedIn"
                target="blank"
                rel="noreferrer"
              >
                <RiLinkedinBoxLine size={19} />
              </a>
              <a
                className="cursor-pointer"
                href="https://github.com/maulanakbr"
                aria-label="GitHub"
                target="blank"
                rel="noreferrer"
              >
                <RiGithubLine size={19} />
              </a>
              <a
                className="cursor-pointer"
                href="https://wa.me/6288741076707"
                aria-label="Instagram"
                target="blank"
                rel="noreferrer"
              >
                <RiWhatsappLine size={19} />
              </a>
              <a
                className="cursor-pointer"
                href="mailto:yudistika.akbar@gmail.com"
                aria-label="Instagram"
                target="blank"
                rel="noreferrer"
              >
                <RiMailLine size={19} />
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
    </nav>
  );
};

export default Navbar;
