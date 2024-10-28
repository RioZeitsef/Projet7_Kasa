import { Link } from "react-router-dom";
import styles from "../style/Card.module.css";

function Card({ cover, title, id }) {
  return (
    <Link className={styles.cardlink} to={`/logement/${id}`}>
      <img className={styles.cardimg} src={cover} />
      <p className={styles.cardtitle}>{title}</p>
    </Link>
  );
}

export default Card;
