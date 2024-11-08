import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";
import styles from "../style/Homepage.module.css";
import ListeLogements from "../components/Listlogements.jsx";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <div className={styles.container}>
        <ListeLogements />
      </div>
    </Layout>
  );
};

export default Home;
