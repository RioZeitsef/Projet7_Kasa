import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";
import AboutKasa from "../../data/aboutdata.json";
import Collapse from "../components/Collapse.jsx";
import styles from "../style/About.module.css";

export default function About() {
  return (
    <Layout>
      <Banner />
      <div className={styles.aboutcontainer}>
        {AboutKasa.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </Layout>
  );
}
