import EmSection from "../common/EmSection";
import EmSectionDiv from "../common/EmSectionDiv";

const LikeMyEggs = () => {
  return (
    <EmSection type="1">
      <EmSectionDiv>
        <img
          src="/images/img8.jpg"
          alt="Hope You Like my Eggs!"
          className="chicken-personal-image"
        />
      </EmSectionDiv>
      <EmSectionDiv>
        <h2 className="h1 emphasis-header">Hope You Like my Eggs!</h2>
        <p className="emphasis-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
          elementum magna tristique. Quisque vehicula, risus eget aliquam
          placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
          Praesent scelerisque tortor sed accumsan convallis.
        </p>
      </EmSectionDiv>
    </EmSection>
  );
};

export default LikeMyEggs;
