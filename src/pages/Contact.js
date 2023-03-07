import NormalSection from "../components/common/NormalSection";
import NormalText from "../components/common/NormalText";
import Intro from "../components/common/Intro";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <NormalSection title="Contact Us">
      <Intro icon="fas fa-envelope-open-text">
        <NormalText>
          Thank you for being interested in our company. To contact us, please
          fill the form below. Our team is available 24/7, and we will respond
          as soon as possible.
        </NormalText>
      </Intro>
      <ContactForm />
    </NormalSection>
  );
};

export default Contact;
