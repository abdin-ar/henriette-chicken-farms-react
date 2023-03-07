const OurProductsItem = ({ type, title, desc }) => {
  if (type === "img") {
    return (
      <section className="gridContent2">
        <img src={`/images/${title}`} alt={desc} />
      </section>
    );
  }
  return (
    <section className="gridContent1">
      <h3 className="h1">{title}</h3>
      <p>{desc}</p>
    </section>
  );
};

export default OurProductsItem;
