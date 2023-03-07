import { useState } from "react";

const Question = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={`question ${isOpen ? "show-text" : ""}`}>
      <div className="question-title">
        <h2>{data.q}</h2>
        <button
          type="button"
          className="question-btn"
          title="Show/hide the answer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <i className="far fa-minus-square"></i>
          ) : (
            <i className="far fa-plus-square"></i>
          )}
        </button>
      </div>
      <div className="question-text">
        <p>{data.a}</p>
      </div>
    </section>
  );
};

export default Question;
