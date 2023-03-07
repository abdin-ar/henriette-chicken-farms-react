import MeetingImg from "./MeetingImg";
import MeetingLogo from "./MeetingLogo";
import NormalText from "../common/NormalText";

const MeetingParagraph = ({ id, title, desc, img, type, openImage }) => {
  return (
    <section className="content-with-images-div">
      <div className="content-with-images-txt">
        <h3 className="h1 normal-title">{title}</h3>
        <NormalText className="justify">{desc}</NormalText>
      </div>
      {type === "logo" ? (
        <MeetingLogo img={img} />
      ) : (
        <MeetingImg img={img} id={id} openImage={openImage} />
      )}
    </section>
  );
};

export default MeetingParagraph;
