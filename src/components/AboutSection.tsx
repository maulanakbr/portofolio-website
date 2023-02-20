import Container from "./Container";

const AboutSection = () => {
  return (
    <Container id="aboutSection">
      <div className="mb-10 h-full w-full">
        <h4 className="mb-2 py-2 text-center font-semibold xl:text-left">
          About Me
        </h4>
        <div className="flex w-full items-center justify-center">
          <p className="text-center text-[18px] leading-[3rem] md:text-[21px] lg:leading-[3.5rem] xl:text-left">
            I enjoy working in the field of technology, mainly in the context of
            web development. I have been into various fascinating web
            development topics since I passionately had the opportunity to
            enroll Digital Talent Scholarship program held by the{" "}
            <span className="italic">
              Ministry of Communications and Informatics{" "}
            </span>{" "}
            a year ago. It was a great impression and experience that helped me
            learn and focus on some basic fundamental things that are required
            to grow as a professional web developer in the future.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
