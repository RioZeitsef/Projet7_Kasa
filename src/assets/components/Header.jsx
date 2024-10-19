import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1 className="title">Kasa</h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="APropos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
