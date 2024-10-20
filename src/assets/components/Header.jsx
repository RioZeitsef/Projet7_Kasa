import { Link } from "react-router-dom";
import styles from "../style/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.position}>
        <h1 className={styles.title}>Kasa</h1>
        <span className={styles.positionlist}>
          <Link to="/">Accueil</Link>
          <Link to="APropos">A propos</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
