import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import logements from "./data/datalogements.json"; // Importez les données des logements
import ErrorPage from "/src/error-page.jsx"; // Importez le composant ErrorPage

const PageLogement = () => {
  const { id } = useParams();

  // Trouvez le logement correspondant à l'ID
  const logement = logements.find((logement) => logement.id === id);

  // Si le logement n'est pas trouvé, affichez la page d'erreur
  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <div>
        <h1>{logement.title}</h1>
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.description}</p>
        <p>Location: {logement.location}</p>
      </div>
    </Layout>
  );
};

export default PageLogement;
