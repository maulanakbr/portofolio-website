import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  id: string;
};

const Container = ({ children, id }: ContainerProps) => {
  return (
    <section className="mb-12 p-8 lg:px-12 xl:px-20" id={id}>
      {children}
    </section>
  );
};

export default Container;
