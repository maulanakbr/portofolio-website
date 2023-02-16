import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Footer = () => {
  const date: string = new Date().getFullYear().toString();

  return (
    <section className="max-h-[40vh] w-full items-center justify-center border-t border-primary-1000">
      <div className="grid h-[8rem] place-content-center items-center lg:flex lg:h-[6rem] lg:justify-between">
        <div className="mb-4 flex justify-center gap-6 lg:mb-0">
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
    </section>
  );
};

export default Footer;
