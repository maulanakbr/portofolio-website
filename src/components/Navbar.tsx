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
    <nav className="m-4 flex justify-between">
      <span
        className={
          toggle
            ? "fixed z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
            : "z-20 cursor-pointer p-2 text-[28.43px] font-bold leading-none"
        }
      >
        MAY
      </span>

      {/* Desktop Menu */}
      <div
        className={
          toggle
            ? "fixed top-0 left-0 z-10 h-screen w-full bg-primary-600 lg:hidden"
            : "hidden lg:flex"
        }
      >
        <ul className="absolute top-24 right-[6.6rem] sm:top-40 sm:right-[7.2rem] md:right-[7.6rem] lg:static lg:flex lg:items-center lg:justify-center lg:gap-4">
          <li className="cursor-pointer p-2 text-center text-[24px] font-semibold sm:text-[34px] md:text-[40px] lg:text-[14px]">
            Home
          </li>
          <li className="cursor-pointer p-2 text-center text-[24px] font-semibold sm:text-[34px] md:text-[40px] lg:text-[14px]">
            About
          </li>
          <li className="cursor-pointer p-2 text-center text-[24px] font-semibold sm:text-[34px] md:text-[40px] lg:text-[14px]">
            Skills
          </li>
          <li className="cursor-pointer p-2 text-center text-[24px] font-semibold sm:text-[34px] md:text-[40px] lg:text-[14px]">
            Projects
          </li>
        </ul>
        <div className="absolute bottom-0 right-16 grid h-[8rem] place-content-center items-center sm:right-24 md:right-28 lg:hidden">
          <div className="mb-3 flex justify-center gap-6 lg:mb-0">
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

      {/* Mobile Menu */}
      {!toggle ? (
        <div
          className="cursor-pointer p-2 lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <SlMenu size={29} />
        </div>
      ) : (
        <div
          className="fixed right-4 z-10 cursor-pointer p-2 active:animate-spin active:duration-300 lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineClose size={34} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
