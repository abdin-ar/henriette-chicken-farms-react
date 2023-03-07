import { useState, useEffect, useRef } from "react";

function calculateSize(containerRef) {
  const popupContent = containerRef.current;
  let popImgContainerHeight = popupContent.offsetHeight;
  let popImgContainerWidth = popupContent.offsetWidth;

  let popDefaultWidth;
  if (popImgContainerWidth < popImgContainerHeight * 1.6) {
    popDefaultWidth = popImgContainerWidth;
  } else {
    popDefaultWidth = popImgContainerHeight * 1.45;
  }

  return popDefaultWidth;
}

const ImageModal = ({
  data,
  currentImage,
  closeModal,
  nextImage,
  prevImage,
}) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  const image = useRef();
  const container = useRef();

  useEffect(() => {
    setCurrentWidth(calculateSize(container));
  }, [currentImage]);

  useEffect(() => {
    image.current.style.width = `${currentWidth}px`;
  }, [currentWidth]);

  const currentImageData = data.find((item) => currentImage === item.id);

  const zoomIn = () => {
    setCurrentWidth((prev) => prev * 1.1);
  };

  const zoomOut = () => {
    setCurrentWidth((prev) => prev / 1.1);
  };

  const zoomFit = () => {
    setCurrentWidth(calculateSize(container));
  };

  return (
    <article id="popup-container">
      <div className="popup">
        <div className="popup-header">
          <div className="popup-controls">
            <button
              className="btn popup-btn"
              title="Previous Image"
              onClick={prevImage}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="btn popup-btn"
              title="Next Image"
              onClick={nextImage}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <button className="btn popup-btn" title="Zoom In" onClick={zoomIn}>
              <i className="fas fa-search-plus"></i>
            </button>
            <button
              className="btn popup-btn"
              title="Zoom Out"
              onClick={zoomOut}
            >
              <i className="fas fa-search-minus"></i>
            </button>
            <button className="btn popup-btn" title="Fit" onClick={zoomFit}>
              <i className="fas fa-expand"></i>
            </button>
          </div>
          <button className="btn popup-btn" title="Close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div id="popup-content" ref={container}>
          <img
            src={`/images/${currentImageData.img}`}
            alt="Chicken"
            ref={image}
          />
        </div>
      </div>
    </article>
  );
};

export default ImageModal;
