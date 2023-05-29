import { MutableRefObject, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  id: string;
  refObj?: MutableRefObject<null>;
};

const Container = ({ children, id, refObj }: ContainerProps) => {
  return (
    <section
      className="mb-12 h-full w-full p-8 lg:px-24 xl:px-20"
      id={id}
      ref={refObj}
    >
      {children}
    </section>
  );
};

export default Container;
