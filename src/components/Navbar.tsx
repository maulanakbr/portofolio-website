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
    <nav className="my-4 flex justify-between">
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
      <ul
        className={
          toggle
            ? "fixed top-0 left-0 z-10 grid h-screen w-full place-content-center items-center gap-8 bg-primary-600 md:hidden"
            : "hidden items-center justify-center gap-4 md:flex"
        }
      >
        <li className="cursor-pointer p-2 text-center text-[24px] font-semibold md:text-[14px]">
          Home
        </li>
        <li className="cursor-pointer p-2 text-center text-[24px] font-semibold md:text-[14px]">
          About
        </li>
        <li className="cursor-pointer p-2 text-center text-[24px] font-semibold md:text-[14px]">
          Skills
        </li>
        <li className="cursor-pointer p-2 text-center text-[24px] font-semibold md:text-[14px]">
          Project
        </li>
        <div className="grid h-[8rem] place-content-center items-center md:hidden">
          <div className="mb-3 flex justify-center gap-6 md:mb-0">
            <a
              className="cursor-pointer"
              href="https://www.instagram.com/shibuya7days/"
              aria-label="Instagram"
              target="blank"
              rel="noreferrer"
            >
              <RiInstagramLine size={23} />
            </a>
            <a
              className="cursor-pointer"
              href="https://linkedin.com/in/maulanakbr"
              aria-label="LinkedIn"
              target="blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxLine size={23} />
            </a>
            <a
              className="cursor-pointer"
              href="https://github.com/maulanakbr"
              aria-label="GitHub"
              target="blank"
              rel="noreferrer"
            >
              <RiGithubLine size={23} />
            </a>
            <a
              className="cursor-pointer"
              href="https://wa.me/6288741076707"
              aria-label="Instagram"
              target="blank"
              rel="noreferrer"
            >
              <RiWhatsappLine size={23} />
            </a>
            <a
              className="cursor-pointer"
              href="mailto:yudistika.akbar@gmail.com"
              aria-label="Instagram"
              target="blank"
              rel="noreferrer"
            >
              <RiMailLine size={23} />
            </a>
          </div>
          <div className="text-center text-[12px]">
            &copy; {date}
            <span className="mx-1">Maulana Akbar Yudistika</span>
          </div>
        </div>
      </ul>

      {/* Mobile Menu */}
      {!toggle ? (
        <div
          className="cursor-pointer p-2 md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <SlMenu size={30} />
        </div>
      ) : (
        <div
          className="fixed right-4 z-10 cursor-pointer p-2 md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineClose size={30} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
