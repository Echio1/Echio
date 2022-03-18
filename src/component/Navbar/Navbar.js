import React from "react";

import "./NavbarStyle.css";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navbar bgT navbar-expand-lg  " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid">
        <img className="logo mx-4" src={logo} alt=""></img> 
            <div className="  text-center d-flex justify-content px-3 me-auto">
              <Link style={{textDecoration:"none"}} href="#home" className="col-lg-1 col-md-2 col-sm-4 navlink" to="/" >Home</Link>
              <a style={{textDecoration:"none"}} href="#influencers" className="col-lg-1 col-md-2 col-sm-4 navlink">Influencers</a>
              <a style={{textDecoration:"none"}} href="#brand" className="col-lg-1 col-md-2 col-sm-4 navlink">Brand</a>
              <a style={{textDecoration:"none"}} href="#testimonials" className="col-lg-1 col-md-2 col-sm-3 navlink">Testimonials</a>
              <Link style={{textDecoration:"none"}} href="" className="col-lg-1 col-md-2 col-sm-3 navlink" to="/team">Team</Link>
              <a style={{textDecoration:"none"}} href="#contact" className="col-lg-1 col-md-2 col-sm-3 navlink">Contact Us</a>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
