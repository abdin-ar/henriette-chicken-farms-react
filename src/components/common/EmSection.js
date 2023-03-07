const EmSection = ({ type, children }) => {
  return (
    <article className="section-large-emphasis" data-style={type}>
      {children}
    </article>
  );
};

export default EmSection;
