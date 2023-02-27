import IMG_02 from "../assets/img02.jpeg";
import Button from "./Button";
import { contentVariants } from "../config/motion";
import { motion } from "framer-motion";

type ContactCardProps = {
  description: string;
};

const ContactCard = ({ description }: ContactCardProps) => {
  return (
    <motion.section
      className="h-full w-[80vw] rounded-lg shadow-lg outline outline-2 outline-offset-4 lg:h-[54vh] lg:w-full xl:h-[60vh]"
      variants={contentVariants}
    >
      <div className="h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-400 p-4 lg:flex lg:p-2">
        <div className="grid h-full w-full place-items-center items-start p-4 lg:w-[50%] lg:place-items-center lg:items-center">
          <p className="mb-6 text-center text-[18px] leading-[2.4rem] md:text-[21px] lg:text-left">
            {description}
          </p>
          <div className="mt-6 flex w-[7rem] flex-wrap items-center justify-center lg:-mt-2 lg:w-full lg:flex-nowrap lg:justify-start">
            <Button>
              <a
                className="cursor-pointer"
                href="mailto:yudistika.akbar@gmail.com"
                aria-label="Instagram"
                target="blank"
                rel="noreferrer"
              >
                Say Hi
              </a>
            </Button>
            <a
              className="mt-2 block h-full cursor-pointer p-4 text-center font-semibold lg:mt-0 lg:ml-6"
              href="https://drive.google.com/file/d/1ET9xH18Pzwlxn37zlpyiurFZe1Vhl_I0/view?usp=sharing"
              aria-label="Resume"
              target="blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="hidden h-full items-center justify-end p-4 lg:flex lg:w-[50%]">
          <div className="group relative w-full overflow-hidden rounded-full outline outline-2 outline-offset-4 hover:outline-none xs:h-[34vh] lg:h-[32vh] lg:w-[40vw] xl:h-[53vh] xl:w-[26.5vw]">
            <img
              className="block h-full w-full object-cover"
              src={IMG_02}
              alt="IMG_02"
            />
            <div className="absolute top-0 flex h-full w-full items-center justify-center bg-primary-600 mix-blend-color group-hover:hidden group-hover:transition-all group-hover:delay-300">
              <br />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCard;
