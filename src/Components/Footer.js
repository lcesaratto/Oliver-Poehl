import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';

const Footer = () => {

    return(
        <footer className="footer">
            <p>
                <b>Montage Service Oliver Pöhl.</b>
            </p>        
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link exact to='/'>
                        Starseite
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link exact to='/hs-konfigurator'>
                        Haustür Konfigurator
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link exact to='/datenschutz'>
                        Datenschutz
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link exact to='/impressum'>
                        Impressum
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;