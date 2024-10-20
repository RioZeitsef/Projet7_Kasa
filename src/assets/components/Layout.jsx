import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styles from "../style/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.position}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
