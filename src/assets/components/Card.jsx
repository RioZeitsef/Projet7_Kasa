import styles from "../style/Card.module.css";

function Card({ cover, title }) {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.card}>
        <img src={cover} />
        <p className={styles.cardtitle}>{title}</p>
      </div>
    </div>
  );
}

export default Card;
