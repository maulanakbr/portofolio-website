import ContactCard from "./ContactCard";
import Container from "./Container";

const ContactSection = () => {
  return (
    <Container id="containerSection">
      <div className="mb-10 h-full w-full">
        <h4 className="mb-4 py-2 text-center font-semibold xl:text-left">
          Get In Touch
        </h4>
        <div className="flex w-full items-center justify-center">
          <ContactCard />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
