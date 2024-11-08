import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import styles from "../style/Errorpage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div className={styles.errorpage}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.donotexist}>
          Oups ! La page que vous demandez n`existe pas.
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
