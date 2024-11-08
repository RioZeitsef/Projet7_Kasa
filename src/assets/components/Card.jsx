import { Link } from "react-router-dom";
import styles from "../style/Card.module.css";
import PropTypes from "prop-types";

function Card({ cover, title, id }) {
  return (
    <Link className={styles.cardlink} to={`/logement/${id}`}>
      <img className={styles.cardimg} src={cover} />
      <p className={styles.cardtitle}>{title}</p>
    </Link>
  );
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
