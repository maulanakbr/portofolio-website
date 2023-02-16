import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="my-1 mx-2 max-w-[100vw] sm:max-w-[200vw] md:max-w-[80vw]">
      {children}
    </div>
  );
};

export default Wrapper;
