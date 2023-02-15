import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <section className="mb-12 px-4 lg:px-20">{children}</section>;
};

export default Container;
