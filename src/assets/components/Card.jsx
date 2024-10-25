import styles from "../style/Card.module.css";

function Card({ cover, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardimg} src={cover} />
      <p className={styles.cardtitle}>{title}</p>
    </div>
  );
}

export default Card;
