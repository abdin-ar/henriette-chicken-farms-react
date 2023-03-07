import NormalSection from "../components/common/NormalSection";
import Marketing from "../components/marketing/Marketing";
import OurProducts from "../components/products/OurProducts";
import LikeMyEggs from "../components/products/LikeMyEggs";
import Order from "../components/products/Order";

const Products = () => {
  return (
    <>
      <NormalSection title="Our Products">
        <OurProducts />
      </NormalSection>
      <Marketing />
      <LikeMyEggs />
      <NormalSection title="Make an Order">
        <Order />
      </NormalSection>
    </>
  );
};

export default Products;
