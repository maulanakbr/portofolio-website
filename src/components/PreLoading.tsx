import { AiOutlineArrowUp } from "react-icons/ai";

const PreLoading = () => {
  return (
    <section className="relative flex h-screen w-full justify-center">
      <div className="flex items-center justify-center">
        <div className="load-animation">
          <AiOutlineArrowUp size={90} />
        </div>
      </div>
    </section>
  );
};

export default PreLoading;
