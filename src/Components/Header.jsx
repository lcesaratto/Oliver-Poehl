import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, NavLink as RRNavLink } from "react-router-dom";

import "./Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      className={"navbar-dark navbar-expand-sm" + " " + props.className}
      toggleable
      fixed="top"
    >
      <Link exact to="/">
        <img src="images/logo.png" className="App-logo" alt="logo" />
        {/* <button onClick={() => console.log(props.className)}>Click me</button> */}
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              tag={RRNavLink}
              exact
              to="/unternehmen"
              activeClassName="active"
            >
              Das Unternehmen
            </NavLink>
          </NavItem>
          {/* <div className="divider-vertical"></div> */}
          <NavItem>
            <NavLink
              tag={RRNavLink}
              exact
              to="/leistungen"
              activeClassName="active"
            >
              Leistungen
            </NavLink>
          </NavItem>
          {/* <div className="divider-vertical"></div> */}
          <NavItem>
            <NavLink
              tag={RRNavLink}
              exact
              to="/referenzen"
              activeClassName="active"
            >
              Referenzen
            </NavLink>
          </NavItem>
          {/* <div className="divider-vertical"></div> */}
          <NavItem>
            <NavLink
              tag={RRNavLink}
              exact
              to="/kontakt"
              activeClassName="active"
            >
              Kontakt
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
