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
      <div className="m-auto grid h-[8rem] place-content-center items-center gap-4 border lg:w-[30rem] xl:flex xl:h-[6rem] xl:w-full xl:justify-between">
        <div className="flex w-[20rem] items-center justify-center gap-7 xl:mb-0 xl:justify-start">
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
            aria-label="Instagram"
            target="blank"
            rel="noreferrer"
          >
            <RiMailLine size={17} />
          </a>
        </div>
        <div className="flex w-[20rem] items-center justify-center gap-1 text-center text-[13px] xl:justify-end xl:text-right">
          &copy;
          <span className="font-semibold">{date}</span>
          <span className="font-semibold">Maulana Akbar Y</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
