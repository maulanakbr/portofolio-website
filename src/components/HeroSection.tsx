import { AiOutlineArrowUp } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section
      className="mb-10 h-full px-6 sm:px-8 md:px-4 lg:px-28 xl:my-16 xl:px-20"
      id="mainSection"
    >
      <div className="flex h-[83vh] w-full items-center justify-center">
        <div className="grid w-full xl:w-[70vw]">
          <h1 className="mb-2 p-4 text-center text-[50px] font-bold xs:text-[61px] sm:text-[65px] md:text-[75px] lg:text-[90px] xl:text-left xl:text-[80px]">
            Hi, I am Maulana Akbar Yudistika
          </h1>
          <div className="flex w-full items-stretch justify-between border-t border-primary-1000">
            <h3 className="px-4 py-4 text-primary-600">Web Developer</h3>
            <span className="flex items-center justify-center border-l border-primary-1000">
              <AiOutlineArrowUp className="rotate-[-40deg]" size={74} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
