import { ReactNode } from "react";

type SkillProps = {
  children: ReactNode;
};

const SkillCard = ({ children }: SkillProps) => {
  return (
    <section className="w-ful flex h-full overflow-hidden rounded-xl">
      <div className="flex h-full w-full items-center justify-center bg-primary-600 text-primary-200 hover:bg-primary-400 hover:text-primary-900">
        {children}
      </div>
    </section>
  );
};

export default SkillCard;
