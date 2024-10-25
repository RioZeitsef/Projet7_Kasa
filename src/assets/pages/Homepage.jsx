import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";
import styles from "../style/Bodypages.module.css";
import ListeLogements from "../components/Listelogements.jsx";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <main className={styles.body}>
        <ListeLogements />
      </main>
    </Layout>
  );
};

export default Home;
