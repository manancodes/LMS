import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <span>LPM</span> Learner Pro Max
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="j" id="responsive-navbar-nav">
          <Nav className="i mr-auto">
            <NavLink
              exact
              activeClassName="activelinks"
              className="links"
              to={"/"}
            >
              <center>Home</center>
            </NavLink>
            <NavLink
              activeClassName="activelinks"
              className="links"
              to={"/dashboard"}
            >
              <center>Dashboard</center>
            </NavLink>
            <NavLink
              activeClassName="activelinks"
              className="links"
              to={"/learning"}
            >
              <center>Learning</center>
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link>
              <img
                src="https://as2.ftcdn.net/jpg/03/79/28/57/500_F_379285756_KKtYHhuguvxSJXXqTlZAHFSGTqo2SQWd.jpg"
                alt="404"
              ></img>
            </Nav.Link>
            <NavDropdown
              className="marg"
              title="Manan Sadana"
              id="basic-nav-dropdown"
            >
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
