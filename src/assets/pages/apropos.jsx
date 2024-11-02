import Banner from "../components/Banner.jsx";
import Layout from "../components/Layout.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";

export default function APropos() {
  return (
    <Layout>
      <Banner />
      <main>
        <h1>A propos</h1>
        <DropdownMenu />
        <DropdownMenu />
      </main>
    </Layout>
  );
}
