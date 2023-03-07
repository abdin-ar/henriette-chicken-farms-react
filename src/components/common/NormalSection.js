const NormalSection = ({ title, children }) => {
  return (
    <article className="section-large">
      <div className="section-title">
        <h2 className="h1 section-title-text">{title}</h2>
      </div>
      {children}
    </article>
  );
};

export default NormalSection;
