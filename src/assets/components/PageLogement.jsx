import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import logements from "./data/datalogements.json"; // Importez les données des logements
import ErrorPage from "/src/error-page.jsx"; // Importez le composant ErrorPage

const PageLogement = () => {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <div>
        <img src={logement.pictures[0]} />
      </div>
      <div>
        <div>
          <h3>{logement.title}</h3>
          <p>{logement.description}</p>
          <p>{logement.location}</p>
        </div>
        <div>
          <span>{logement.tags}</span>
        </div>
        <div>
          <div>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>
          {logement.rating}
        </div>
      </div>
    </Layout>
  );
};

export default PageLogement;
