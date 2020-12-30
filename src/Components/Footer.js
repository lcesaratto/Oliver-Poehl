import React from 'react'

const Footer = () => {

    return(
        <footer className="footer">
            <p>
                <b>Montage Service Oliver Pöhl.</b>
            </p>        
            <ul className="list-inline">
            <li className="list-inline-item">
                <a href="#">Starseite</a>
            </li>
            <li className="list-inline-item">
                <a href="#">Haustür Konfigurator</a>
            </li>
            <li className="list-inline-item">
                <a href="#">Datenschutz</a>
            </li>
            <li className="list-inline-item">
                <a href="#">Impressum</a>
            </li>
            </ul>
        </footer>
    );
}

export default Footer;