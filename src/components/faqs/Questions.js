import Question from "./Question";
import NormalText from "../common/NormalText";

const Questions = ({ displayFaqs, criteria }) => {
  if (displayFaqs.length === 0 && criteria !== "") {
    return (
      <section className="section-fixed-width">
        <NormalText>No faqs match your search criteria</NormalText>
      </section>
    );
  }
  if (displayFaqs.length === 0 && criteria === "") {
    return (
      <section className="section-fixed-width">
        <NormalText>No faqs currently available</NormalText>
      </section>
    );
  }
  return (
    <section className="section-fixed-width">
      {displayFaqs.map((faq) => {
        return <Question key={faq.id} data={faq} />;
      })}
    </section>
  );
};

export default Questions;
