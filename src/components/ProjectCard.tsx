type ProjectCardProps = {
  name: string;
  projectId: number;
  image: string;
  webUrl: string;
  usingLibs: string[];
};

const ProjectCard = ({
  name,
  projectId,
  image,
  webUrl,
  usingLibs,
}: ProjectCardProps) => {
  return (
    <section className="mx-auto mb-8 flex w-[80vw] flex-wrap items-center justify-center overflow-hidden rounded-xl bg-primary-400 shadow-lg outline outline-2 outline-offset-4 sm:w-[65vw] md:mb-4 lg:mx-0 lg:h-[72vh] lg:w-[35vw] hover:lg:h-[90vh] xl:w-[24vw]">
      <div className="h-full w-full flex-col">
        <div className="group relative mb-4 h-[40vh] overflow-hidden hover:h-[65vh] lg:h-[50vh]">
          <a href={webUrl} aria-label={name} target="blank" rel="noreferrer">
            <img
              className="block h-full w-full object-fill blur-sm group-hover:blur-none group-hover:transition-all group-hover:delay-300 group-hover:ease-in"
              src={image}
              alt={image}
            />
          </a>
          <div className="absolute top-0 flex h-full w-full items-center justify-center bg-primary-600 group-hover:hidden">
            <div className="relative h-[14rem] w-[14rem] rounded-full border xl:h-[15rem] xl:w-[15rem]">
              <span className="absolute bottom-10 -left-6 text-[90px] font-semibold text-primary-200 group-hover:hidden xl:-left-8 xl:text-[120px]">{`0${projectId}`}</span>
            </div>
          </div>
        </div>
        <a href={webUrl} aria-label={name} target="blank" rel="noreferrer">
          <div className="flex items-center justify-between">
            <span className="px-4 text-[18px] font-semibold">{name}</span>
            <hr className="w-[20vw] lg:w-[10vw]" />
          </div>
        </a>
        <ul className="flex flex-wrap gap-5 p-4">
          {usingLibs.map((item: string, index: number) => (
            <li
              className="rounded-md bg-primary-200 px-5 py-1 text-[13px]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectCard;
