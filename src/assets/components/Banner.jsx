import { useLocation } from "react-router-dom";
import styles from "../style/Banner.module.css";
import BorderSea from "../images/bordersea.jpg";
import Mountain from "../images/mountain.jpg";

const Banner = () => {
  const location = useLocation();

  const isAboutPage = location.pathname === "/About";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={isAboutPage ? Mountain : BorderSea}
          alt={
            isAboutPage
              ? "Montagne et fôret ensoleillée"
              : "littoral sous un ciel nuageux"
          }
        />
        <h1 className={styles.text}>
          {isAboutPage ? null : "Chez vous, partout et ailleurs"}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
