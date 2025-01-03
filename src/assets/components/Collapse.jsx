import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../style/Collapse.module.css";
import ArrowUp from "../images/arrow_up.svg";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.collapse}`)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.collapse}>
      <button className={styles.button}>
        {title}
        <img
          onClick={toggleMenu}
          src={ArrowUp}
          alt="arrow"
          className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
        />
      </button>
      <div className={`${styles.collapsecontent} ${isOpen ? styles.show : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
