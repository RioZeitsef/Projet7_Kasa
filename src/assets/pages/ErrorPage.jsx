import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import styles from "../style/Errorpage.module.css";
import error404 from "../logo/404.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div className={styles.errorpage}>
        <img className={styles.title} src={error404} />
        <p className={styles.donotexist}>
          Oups ! La page que <br className={styles.return} />
          vous demandez n`existe pas.
        </p>
        <p>
          <Link to="/" className={styles.linkhomepage}>
            Retourner sur la page d`accueil
          </Link>
        </p>
      </div>
    </Layout>
  );
}
