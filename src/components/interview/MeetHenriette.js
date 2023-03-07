import { useState } from "react";
import NormalSection from "../common/NormalSection";
import EmText from "../common/EmText";
import MeetingParagraph from "./MeetingParagraph";
import meetingData from "./meetingData";
import ImageModal from "./ImageModal";

const zoomableImages = meetingData.filter((item) => item.type === "photo");

const MeetHenriette = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openImage = (id) => {
    setIsModalOpen(true);
    setCurrentImage(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    let newId = currentImage + 1;
    if (newId > zoomableImages.length) {
      newId = 1;
    }
    setCurrentImage(newId);
  };

  const prevImage = () => {
    let newId = currentImage - 1;
    if (newId < 1) {
      newId = zoomableImages.length;
    }
    setCurrentImage(newId);
  };

  return (
    <NormalSection title="Meet Henriette">
      <div className="content-with-images">
        {meetingData.map((item) => {
          const { id, title, desc, img, type } = item;
          return (
            <MeetingParagraph
              key={id}
              title={title}
              desc={desc}
              img={img}
              type={type}
              id={id}
              openImage={openImage}
            />
          );
        })}
      </div>
      {isModalOpen ? (
        <ImageModal
          data={zoomableImages}
          currentImage={currentImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      ) : null}
      <EmText>
        At the end, I would like to thank you very much for this interview,
        Henriette...
      </EmText>
    </NormalSection>
  );
};

export default MeetHenriette;
