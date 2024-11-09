import { Link } from "react-router-dom";
import styles from "../style/Header.module.css";
import logo from "../logo/LOGO.png";

const Header = () => {
  return (
    <header>
      <nav className={styles.position}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.positionlist}>
          <Link to="/">Accueil</Link>
          <Link to="/About">A propos</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
