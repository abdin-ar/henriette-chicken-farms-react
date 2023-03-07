const Intro = ({ icon, children }) => {
  return (
    <section className="normal-text-with-icon fixedWidth">
      <i className={icon}></i>
      {children}
    </section>
  );
};

export default Intro;
