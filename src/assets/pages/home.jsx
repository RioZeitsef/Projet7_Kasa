import React from "react";
import { Link } from "react-router-dom";
import APropos from "./apropos.jsx";

const Accueil = () => {
  return;
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur l'application Kasa !</p>
    <p>
      <Link to="/apropos">
        <a>En savoir plus</a>
      </Link>
    </p>
  </div>;
};

export default Accueil;
