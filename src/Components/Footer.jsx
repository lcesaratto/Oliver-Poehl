import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <footer {...props}>
      <p>
        <b>Montage Service Oliver Pöhl</b>
      </p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link exact to="/" className="text-link">
            Starseite
          </Link>
        </li>
        <li className="list-inline-item">
          <Link exact to="/hs-konfigurator" className="text-link">
            Haustür Konfigurator
          </Link>
        </li>
        <li className="list-inline-item">
          <Link exact to="/datenschutz" className="text-link">
            Datenschutz
          </Link>
        </li>
        <li className="list-inline-item">
          <Link exact to="/impressum" className="text-link">
            Impressum
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
