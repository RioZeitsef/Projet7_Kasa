import styles from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.backgroundfooter}>
        <h1>Kasa</h1>
        <p className={styles.colortext}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
