import { ReactNode } from "react";

type SkillProps = {
  children: ReactNode;
};

const SkillCard = ({ children }: SkillProps) => {
  return (
    <section className="flex h-full w-full overflow-hidden rounded-xl shadow-lg outline outline-2 outline-offset-4 lg:w-[10vw]">
      <div className="flex h-[15vh] w-full items-center justify-center bg-primary-400 hover:bg-primary-600 hover:text-primary-200">
        {children}
      </div>
    </section>
  );
};

export default SkillCard;
