import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import HomeCSS from "./Home.module.css";
import {MdAdd, MdExplore, MdHome, MdSearch} from "react-icons/md";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top bg-light">
      <Container>
        <Navbar.Brand href="#home">
          <p>Logo</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={HomeCSS.toggleBorder}
        >
          <p>Solomon Bonney</p>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className="mx-auto">
              <Nav.Link>
                <a href="auth/login" className="btn">
                  Solomon Bonney
                </a>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
