import styles from "../style/Banner.module.css";
import BorderSea from "../images/bordersea.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={BorderSea} alt="littoral sous un ciel nuageux" />
        <h1 className={styles.text}>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Banner;
