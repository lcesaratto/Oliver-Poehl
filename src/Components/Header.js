import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import {Link, NavLink as RRNavLink} from 'react-router-dom';
import logo from './../images/logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm" toggleable fixed="top">
                <Link exact to='/'>
                    <img href="/" className="foto" src={logo} className="App-logo" alt="logo" />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/unternehmen" activeClassName="active">
                                Das Unternehmen
                            </NavLink>
                        </NavItem>
                        <div className="divider-vertical"></div>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/leistungen" activeClassName="active">
                                Leistungen
                            </NavLink>
                        </NavItem>
                        <div className="divider-vertical"></div>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/referenzen" activeClassName="active">
                                Referenzen
                            </NavLink>
                        </NavItem>
                        <div className="divider-vertical"></div>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/kontakt" activeClassName="active">
                                Kontakt
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;