import { AiOutlineArrowUp } from "react-icons/ai";
import Container from "./Container";

const MainSection = () => {
  return (
    <section className="mb-12 lg:px-20">
      <div className="flex h-[83vh] w-full items-center justify-center">
        <div className="grid w-full md:w-[70vw]">
          <h1 className="mb-2 p-4 text-center font-bold md:text-left">
            Hi, I am Maulana Akbar Yudistika
          </h1>
          <div className="flex w-full justify-between border-t border-primary-1000">
            <h3 className="w-[16rem] p-4">Web Developer</h3>
            <span className="border-l border-primary-1000">
              <AiOutlineArrowUp
                className="translate-y-4 rotate-[-40deg]"
                size={80}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
