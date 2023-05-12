import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../assets/brand/logo.png";
import HomeCSS from "./Home.module.css";
import {HiMenuAlt3} from "react-icons/hi";
function Header() {
  return (
    <Navbar bg="white" expand="lg" className={HomeCSS.navbar}>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#cart">
            <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
          <Nav.Link href="#notification">
            <i className="fas fa-bell"></i>
          </Nav.Link>
          <Nav.Link href="#login">
            <i className="fas fa-user"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
