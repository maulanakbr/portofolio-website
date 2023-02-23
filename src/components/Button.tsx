import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="h-[3rem] w-[6.8rem] rounded-lg bg-primary-200 shadow-md hover:font-semibold">
      {children}
    </button>
  );
};

export default Button;
