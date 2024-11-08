import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";
import AboutKasa from "../../data/aboutdata.json";
import Collapse from "../components/Collapse.jsx";

export default function About() {
  return (
    <Layout>
      <Banner />
      <main>
        <h1>A propos</h1>
        {AboutKasa.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </main>
    </Layout>
  );
}
