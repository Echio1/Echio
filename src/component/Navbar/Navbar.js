import React from "react";

import "./NavbarStyle.css";

// import { Route, Switch } from "react-router";

// import { Button, Navbar, Nav } from "react-bootstrap";

import logo from '../../images/logo.png'
const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg  " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid">
        <img className="logo mx-4" src={logo} alt=""></img> 
            <div className="  text-center d-flex justify-content px-3 me-auto">
              <a style={{textDecoration:"none"}} href="#home" className="col-lg-1 col-md-2 col-sm-4 navlink">Home</a>
              <a style={{textDecoration:"none"}} href="#influ" className="col-lg-1 col-md-2 col-sm-4 navlink">Influencers</a>
              <a style={{textDecoration:"none"}} href="#brand" className="col-lg-1 col-md-2 col-sm-4 navlink">Brand</a>
              <a style={{textDecoration:"none"}} href="#test" className="col-lg-1 col-md-2 col-sm-3 navlink">Testimonials</a>
              <a style={{textDecoration:"none"}} href="#contact" className="col-lg-1 col-md-2 col-sm-3 navlink">Contact Us</a>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
