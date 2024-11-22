import PropTypes from "prop-types";
import styles from "../style/Ratingstars.module.css";
import Staractive from "../logo/StarActive.svg";
import Starinactive from "../logo/StarInactive.svg";

function Ratingstars({ rating }) {
  const numericRating = parseInt(rating, 10);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= numericRating ? Staractive : Starinactive}
        alt={i <= numericRating ? "étoile active" : "étoile inactive"}
        className={styles.star}
      />
    );
  }

  return <div className={styles.rating}>{stars}</div>;
}

Ratingstars.propTypes = {
  rating: PropTypes.node.isRequired,
};

export default Ratingstars;
