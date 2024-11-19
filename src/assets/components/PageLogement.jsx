import { useParams } from "react-router-dom";
import styles from "../style/PageLogement.module.css";
import Layout from "../components/Layout";
import logements from "/src/data/datalogements.json";
import ErrorPage from "../pages/ErrorPage.jsx";
import Carousel from "../components/Carousel.jsx";
import Collapse from "../components/Collapse.jsx";

const PageLogement = () => {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  const tag = logements.find((tags) => tags.id === id).tags;

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <div className={styles.logementcontent}>
        <div>
          <Carousel pictures={logement.pictures} />
        </div>
        <div className={styles.logementheader}>
          <h3 className={styles.title}>{logement.title}</h3>
          <p className={styles.location}>{logement.location}</p>
          <div className={styles.tags}>
            {tag.map((tags, index) => (
              <span key={index} className={styles.tag}>
                {tags}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.ratingandname}>
          {logement.rating}
          <div className={styles.salerinfo}>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>
        </div>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          {logement.equipments.map((equipment, index) => (
            <li className={styles.liequipements} key={index}>
              {equipment}
            </li>
          ))}
        </Collapse>
      </div>
    </Layout>
  );
};

export default PageLogement;
