import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import logo from './../logo.png';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <img href="/" className="foto" src={logo} className="App-logo" alt="logo" />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Das Unternehmen</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Leistungen</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Referenzen</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Kontakt</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;