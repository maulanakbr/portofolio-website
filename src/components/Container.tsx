import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <section className="mb-12 p-8 lg:px-20">{children}</section>;
};

export default Container;
