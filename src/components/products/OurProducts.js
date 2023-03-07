import productsData from "./productsData";
import OurProductsItem from "./OurProductsItem";

const OurProducts = () => {
  return (
    <div className="grid-container">
      <div className="grid3">
        {productsData.map((item) => {
          const { id, type, title, desc } = item;
          return (
            <OurProductsItem key={id} type={type} title={title} desc={desc} />
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
