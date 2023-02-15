import Container from "./Container";
import IMG_02 from "../assets/img02.jpeg";

const AboutSection = () => {
  return (
    <Container>
      <div className="h-[100vh] md:h-[60vh]">
        <h4 className="mb-6 text-center font-semibold lg:text-left">
          01. About
        </h4>
        <div className="flex w-full items-center justify-center">
          <p className="mb-3 text-center text-[18px] leading-[3rem] md:text-[21px] lg:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae sapiente error nisi voluptatibus assumenda voluptates
            molestias, totam vitae dignissimos minus laboriosam quidem quod
            soluta. Vero laudantium nobis, exercitationem ea iure voluptatem
            quibusdam debitis eum aperiam corrupti? Excepturi hic illo non
            repellat rerum voluptatibus accusamus, placeat in et dolores.
            Reiciendis?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
