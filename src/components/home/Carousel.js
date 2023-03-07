import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (
      prop === "carouselImages" ||
      prop === "interval" ||
      prop === "pauseOnHover" ||
      prop === "className"
    ) {
      delete myProps[prop];
    }
  }
  const { data: carouselImages, interval, pauseOnHover } = props;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let pause;
  if (interval && pauseOnHover) {
    pause = true;
  } else {
    pause = false;
  }

  useEffect(() => {
    const lastIndex = carouselImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, carouselImages]);

  useEffect(() => {
    let slider;

    if (interval && !isPaused) {
      slider = setInterval(() => {
        setIndex(index + 1);
      }, interval);
    }

    return () => {
      if (slider) {
        clearInterval(slider);
      }
    };
  }, [index, isPaused, interval]);

  const pauseSlider = () => {
    if (pause) {
      setIsPaused(true);
    }
  };

  const unpauseSlider = () => {
    if (pause) {
      setIsPaused(false);
    }
  };

  return (
    <section
      className={`carousel-section ${props.className}`}
      onMouseEnter={pauseSlider}
      onMouseLeave={unpauseSlider}
      onFocus={pauseSlider}
      onBlur={unpauseSlider}
      tabIndex={0}
      {...myProps}
    >
      {carouselImages.map((carouselImage, carouselImageIndex) => {
        const { id, image, title, desc, link } = carouselImage;
        let position = "nextSlide";
        if (carouselImageIndex === index) {
          position = "activeSlide";
        }
        if (
          carouselImageIndex === index - 1 ||
          (index === 0 && carouselImageIndex === carouselImages.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={`carousel-slide ${position}`} key={id}>
            <Link to={link} tabIndex={-1}>
              <img
                src={`/images/${image}`}
                alt={title}
                className="carousel-img"
              />
              <div className="carousel-overlay">
                <div>
                  <h3 className="h4">{title}</h3>
                  <p className="carousel-text">{desc}</p>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
      <button
        className="carousel-prev"
        aria-label="previous image"
        onClick={() => setIndex(index - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="carousel-next"
        aria-label="next image"
        onClick={() => setIndex(index + 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default Carousel;
