import { ReactNode } from "react";

type SkillProps = {
  children: ReactNode;
};

const SkillCard = ({ children }: SkillProps) => {
  return (
    <section className="flex h-full w-full overflow-hidden rounded-xl outline outline-2 outline-offset-4 xl:w-[16rem]">
      <div className="flex h-full w-full items-center justify-center bg-primary-600 text-primary-200 hover:bg-primary-200 hover:text-primary-900">
        {children}
      </div>
    </section>
  );
};

export default SkillCard;
