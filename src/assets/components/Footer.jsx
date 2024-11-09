import styles from "../style/Footer.module.css";
import FooterLogo from "../logo/FooterLOGO.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.backgroundfooter}>
        <img className={styles.logo} src={FooterLogo} alt="logo" />
        <p className={styles.colortext}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
