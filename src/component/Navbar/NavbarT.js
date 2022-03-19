import React from "react";

import "./NavbarStyle.css";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const NavBarT = () => {
  return (
    <>
      <div style={{backgroundColor:"#E3FEF9"}} className="navbar navbar-expand-lg  me-auto " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid ">
        
            <div className="  text-center d-flex justify-content">
            <ul className="navbar-nav align-items-center">
              <li className="d-flex row justify-content-center align-items-center">
                <div className="col-lg-6 p-0">
                  <Link className="w-100" to="/" ><img className="logo" src={logo} alt=""></img></Link>
                </div>
                <div className="col-lg-6 p-0">
                  <Link className="w-100" to="/" style={{textDecoration:"none", color:"#09566E",fontSize:"1.8rem", fontWeight:"600"}}>ECHIO</Link>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li className="py-3"><Link style={{textDecoration:"none",fontSizez:"1.6rem"}} className="col-lg-2 col-md-2 col-sm-4 navlink teamlinks py-3 px-1" to="/" >Home</Link></li>
              <li className="py-3"><Link style={{textDecoration:"none",fontSizez:"1.6rem"}} className="col-lg-2 col-md-2 col-sm-3 navlink teamlinks py-3 px-1" to="/team">Team</Link></li>
              {/* <a style={{textDecoration:"none"}} href="#contact" className="col-lg-1 col-md-2 col-sm-3 navlink">Contact Us</a> */}
            </ul>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBarT;
