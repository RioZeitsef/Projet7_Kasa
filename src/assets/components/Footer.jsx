import styles from "../style/Footer.module.css";
import FooterLogo from "../logo/FooterLOGO.svg";

const Footer = () => {
  return (
    <footer className={styles.backgroundfooter}>
      <img className={styles.logo} src={FooterLogo} alt="logo" />
      <p className={styles.colortext}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
