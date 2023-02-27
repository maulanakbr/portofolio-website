import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="max-w-[100vw] xl:m-auto  xl:max-w-[80vw]">{children}</div>
  );
};

export default Wrapper;
