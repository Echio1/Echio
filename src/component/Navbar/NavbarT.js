import React from "react";

import "./NavbarStyle.css";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const NavBarT = () => {
  return (
    <>
      <div style={{backgroundColor:"#E3FEF9"}} className="navbar navbar-expand-lg  me-auto " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid ">
        <img className=" ms-4 me-2 logo" src={logo} alt=""></img>
            <div className="  text-center d-flex justify-content">
            <ul className="navbar-nav me-auto align-items-center">
              <li  style={{fontSize:"1.5rem", fontWeight:"600",color:"#09566E"}}>ECHIO</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li className="py-3"><Link style={{textDecoration:"none"}} href="#home" className="col-lg-1 col-md-2 col-sm-4 navlink teamlinks py-3 px-2" to="/" >Home</Link></li>
              <li className="py-3"><Link style={{textDecoration:"none"}} href="" className="col-lg-1 col-md-2 col-sm-3 navlink teamlinks py-3 px-2" to="/team">Team</Link></li>
              {/* <a style={{textDecoration:"none"}} href="#contact" className="col-lg-1 col-md-2 col-sm-3 navlink">Contact Us</a> */}
            </ul>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBarT;
