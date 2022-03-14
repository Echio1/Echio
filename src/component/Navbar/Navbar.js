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
            <div className=" navlink text-end d-flex justify-content px-3">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <a style={{textDecoration:"none"}} href="#home" className="navlink">Home</a>
              <a style={{textDecoration:"none"}} href="#influ" className="navlink">Influencers</a>
              <a style={{textDecoration:"none"}} href="#brand" className="navlink">Brand</a>
              <a style={{textDecoration:"none"}} href="#test" className="navlink">Testimonials</a>
              <a style={{textDecoration:"none"}} href="#contact" className="navlink mx-0">Contact Us</a>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
