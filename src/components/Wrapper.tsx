import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="m-auto max-w-[90vw] md:max-w-[80vw]">{children}</div>;
};

export default Wrapper;
