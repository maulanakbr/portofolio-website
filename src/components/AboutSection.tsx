import Container from "./Container";
import IMG_02 from "../assets/img02.jpeg";

const AboutSection = () => {
  return (
    <Container>
      <div className="h-[125vh] md:h-[60vh]">
        <h4 className="mb-6 p-2 text-center font-semibold lg:text-left">
          01. About
        </h4>
        <div className="flex w-full items-center justify-center">
          <p className="mb-3 text-center text-[18px] leading-[3rem] md:text-[21px] lg:text-left">
            Hi, my name is Maulana Akbar Yudistika. I enjoy working in the field
            of technology, mainly in the context of web development. I have been
            into various fascinating web development topics since I passionately
            had the opportunity to enroll Digital Talent Scholarship program
            held by the{" "}
            <span className="italic">
              Ministry of Communications and Informatics{" "}
            </span>{" "}
            a year ago. It was a great impression and experience that helped me
            learn and focus on some basic fundamental things that are required
            to grow as a professional front-end web developer in the future.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
