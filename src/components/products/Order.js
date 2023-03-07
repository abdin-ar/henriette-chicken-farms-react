import { Link } from "react-router-dom";
import EmText from "../common/EmText";
import NormalText from "../common/NormalText";

const Order = () => {
  return (
    <>
      <NormalText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
        amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
        elementum magna tristique. Quisque vehicula, risus eget aliquam
        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
        Praesent scelerisque tortor sed accumsan convallis.
      </NormalText>
      <EmText>
        To order our products, please do not hesitate to{" "}
        <Link to="/contact">Contact Us</Link>
      </EmText>
    </>
  );
};

export default Order;
