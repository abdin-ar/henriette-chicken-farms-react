import { Link } from "react-router-dom";
import NormalText from "../components/common/NormalText";
import Intro from "../components/common/Intro";
import NormalSection from "../components/common/NormalSection";
import FaqsMain from "../components/faqs/FaqsMain";

const Faqs = () => {
  return (
    <>
      <NormalSection title="FAQs">
        <Intro icon="fas fa-question-circle">
          <NormalText>
            Frequently asked questions and their answers are presented below. If
            you have further questions, please don't hesitate to{" "}
            <Link to="/contact">Contact Us</Link>.
          </NormalText>
        </Intro>
        <FaqsMain />
      </NormalSection>
    </>
  );
};

export default Faqs;
