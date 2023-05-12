import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import Logo from "../assets/brand/logo.png";
import NavCSS from "./Components.module.css";
import {HiMenuAlt3} from "react-icons/hi";
function Navigation() {
  const location = useLocation();
  if (location.pathname === "/auth/login") {
    return null; // Return nothing to hide the navbar
  } else if (location.pathname === "/auth/signup") {
    return null;
  } else if (location.pathname === "/home") {
    return null;
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={NavCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="img-fluid"
            alt="BOS logo"
            id={NavCSS.navLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <HiMenuAlt3 className={NavCSS.toggleIcon} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className={NavCSS.btnGroup}>
              <Nav.Link>
                <Link to="auth/login" className="btn" id={NavCSS.loginBtn}>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="auth/signup" className="btn" id={NavCSS.registerBtn}>
                  Register
                </Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
