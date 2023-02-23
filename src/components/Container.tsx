import { ReactNode } from "react";
import { motion } from "framer-motion";

type ContainerProps = {
  children: ReactNode;
  id: string;
};

const Container = ({ children, id }: ContainerProps) => {
  return (
    <motion.section
      className="mb-12 h-full w-full p-8 lg:px-12 xl:px-20"
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default Container;
