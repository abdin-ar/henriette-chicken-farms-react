import Carousel from "../components/home/Carousel";
import carouselImages from "../components/home/carouselData";
import Marketing from "../components/marketing/Marketing";
import Quality from "../components/home/Quality";
import Visit from "../components/home/Visit";

const Home = () => {
  return (
    <>
      <Carousel
        data={carouselImages}
        interval={5000}
        pauseOnHover={true}
        className="full-height"
      />
      <Marketing />
      <Quality />
      <Visit />
    </>
  );
};

export default Home;
