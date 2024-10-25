import logements from "./data/datalogements.json";
import Card from "./Card.jsx";

function ListeLogements() {
  return (
    <div className="liste-logements">
      {logements.map((logement, id) => (
        <Card key={id} cover={logement.cover} title={logement.title} />
      ))}
    </div>
  );
}

export default ListeLogements;
