import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";

export default function APropos() {
  return (
    <Layout>
      <Banner />
      <main>
        <h1>A propos</h1>
        <p>
          Kasa est une plateforme de réservation de logements de vacances entre
          particul iers. Elle permet de mettre en relation des personnes
          souhaitant louer leur r ésidence principale ou secondaire avec des
          vacanciers cherchant un logement p our leurs vacances.
        </p>
      </main>
    </Layout>
  );
}
