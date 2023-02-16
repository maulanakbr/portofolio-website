import { AiOutlineArrowUp } from "react-icons/ai";

const MainSection = () => {
  return (
    <section className="mb-10 h-full px-2 md:px-6 lg:px-20">
      <div className="flex h-[83vh] w-full items-center justify-center">
        <div className="grid w-full lg:w-[70vw]">
          <h1 className="mb-2 p-4 text-center text-[50px] font-bold xs:text-[61px] sm:text-[65px] md:text-[75px] lg:text-left lg:text-[80px]">
            Hi, I am Maulana Akbar Yudistika
          </h1>
          <div className="flex w-full items-stretch justify-between border-t border-primary-1000">
            <h3 className="p-4">Web Developer</h3>
            <span className="border-l border-primary-1000">
              <AiOutlineArrowUp
                className="translate-y-4 rotate-[-40deg] md:translate-y-5 lg:translate-y-1"
                size={74}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
