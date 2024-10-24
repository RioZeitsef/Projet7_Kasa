import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <main>
        <p>Welcome to the home page!</p>
        <ul>
          <li>top appartement</li>
          <li>appartement de charme</li>
          <li>appartement de luxe</li>
          <li>appartement de prestige</li>
          <li>appartement de standing</li>
          <li>appartement de caractère</li>
          <li>appartement de qualité</li>
        </ul>
      </main>
    </Layout>
  );
};

export default Home;
