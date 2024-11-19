import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../style/Carousel.module.css";
import arrowRight from "../images/arrow_right.png";
import arrowLeft from "../images/arrow_left.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    pictures.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, [pictures]);

  const nextSlide = () => {
    const newIndex =
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.prev}
        src={arrowLeft}
        alt="flèche gauche"
        onClick={prevSlide}
      />
      <div className={styles.carouselInner}>
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            {index === currentIndex && (
              <img src={picture} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
      </div>
      <img
        className={styles.next}
        src={arrowRight}
        alt="flèche droite"
        onClick={nextSlide}
      />
      <div className={styles.pages}>
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
