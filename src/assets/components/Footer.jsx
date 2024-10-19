// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../style/modules.footer.css";

const Footer = () => {
  return (
    <div className={styles.backgroundfooter}>
      <h3>Kasa</h3>
      <p className={styles.colorext}>
        {/* <FontAwesomeIcon
          icon="fa-light fa-copyright"
          style={{ color: "#ffffff" }}
        /> */}
        Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
