import styles from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.backgroundfooter}>
        <p className={styles.colortext}>© Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
