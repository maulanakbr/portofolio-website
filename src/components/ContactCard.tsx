import IMG_02 from "../assets/img02.jpeg";
import { AiOutlineArrowUp } from "react-icons/ai";

const ContactCard = () => {
  return (
    <section className="h-full w-[80vw] rounded-lg shadow-lg outline outline-2 outline-offset-4 lg:w-full">
      <div className="h-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-400 p-4 lg:flex">
        <div className="mb-6 grid h-full place-items-center items-start p-4 lg:w-[50%] lg:place-content-around lg:place-items-start">
          <p className="mb-6 text-center text-[14px] leading-[2.7rem] md:text-[17px] xl:text-left">
            As a newcomer, I am excited to level up my experience by doing
            real-life projects. Now I am on my path to finding some
            opportunities to work. My inbox is always open, and I hope to
            contribute and give my best to your following projects soon.
          </p>
          <button className="h-[3rem] w-[6.8rem] rounded-lg bg-primary-200 font-semibold shadow-md">
            <a
              className="cursor-pointer"
              href="mailto:yudistika.akbar@gmail.com"
              aria-label="Instagram"
              target="blank"
              rel="noreferrer"
            >
              Say Hi
            </a>
          </button>
        </div>
        <div className="hidden h-full items-center justify-center p-4 lg:flex lg:w-[50%]">
          <div className="relative h-[37vh] w-full overflow-hidden rounded-full outline outline-2 outline-offset-4 xs:h-[34vh] lg:h-[60vh] lg:w-[30vw]">
            <img
              className="block h-full w-full object-cover"
              src={IMG_02}
              alt="IMG_02"
            />
            <div className="absolute top-0 flex h-full w-full items-center justify-center bg-primary-600 hover:mix-blend-color">
              <div className="rotate-[-40deg]">
                <AiOutlineArrowUp size={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
