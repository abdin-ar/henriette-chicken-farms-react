import NormalText from "../common/NormalText";

const QualityItem = ({ icon, title, desc }) => {
  return (
    <section className="gridAuto280Content">
      <div className="normal-title-with-icon">
        <img src={`/images/${icon}`} alt="icon" />
        <h3 className="h1">{title} </h3>
      </div>
      <NormalText className="justify">{desc}</NormalText>
    </section>
  );
};

export default QualityItem;
