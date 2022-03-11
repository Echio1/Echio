import React from "react";

import "./NavbarStyle.css";

// import { Route, Switch } from "react-router";

import { Button, Navbar, Nav } from "react-bootstrap";

import logo from '../../images/logo.png'
const NavBar = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg  " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid">
        <img className="logo mx-4" src={logo} alt=""></img> 
            <Nav className="ms-auto d-flex justify-content-end">
              {/* <Nav.Link href="#contact" className="navlink">Contact Us</Nav.Link> */}
            </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default NavBar;
