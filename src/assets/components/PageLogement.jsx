import { useParams } from "react-router-dom";
import styles from "../style/PageLogement.module.css";
import Layout from "../components/Layout";
import logements from "/src/data/datalogements.json";
import ErrorPage from "../pages/ErrorPage.jsx";
import Carousel from "../components/Carousel.jsx";

const PageLogement = () => {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <div>
        <Carousel pictures={logement.pictures} />
      </div>
      <div className={styles.}>
        <div>
          <h3 className={styles.title}>{logement.title}</h3>
          <p className={styles.description}>{logement.description}</p>
          <p className={styles.location}>{logement.location}</p>
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
