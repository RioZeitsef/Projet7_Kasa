import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "./assets/components/Layout.jsx";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div id="error-page">
        <h1 id="title">404</h1>
        <p id="donotexist">Oups ! La page que vous demandez n'existe pas.</p>
        <p>
          <Link to="/">
            <a id="linkhomepage">Retourner sur la page d'accueil</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
