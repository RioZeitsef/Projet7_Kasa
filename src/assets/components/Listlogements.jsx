import logements from "../../data/datalogements.json";
import styles from "../style/Listlogements.module.css";
import Card from "./Card.jsx";

function ListLogements() {
  return (
    <div className={styles.container}>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
        />
      ))}
    </div>
  );
}

export default ListLogements;
