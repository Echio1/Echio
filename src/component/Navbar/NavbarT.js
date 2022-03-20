import React from "react";

import "./NavbarStyle.css";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const NavBarT = () => {
  return (
    <>
      <div style={{backgroundColor:"#E3FEF9"}} className="navbar navbar-expand-lg  me-auto " collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid ">
        
            <div className="text-center d-flex justify-content">
            <div className="row navbar-nav align-items-center">
              <div className="col-lg-2 p-0 m-0">
                  <div className="row d-flex justify-content-center align-items-center p-0">
                    <div className="col-lg-6 p-0 m-0 text-end">
                      <Link className="w-100" to="/" ><img className="logo" src={logo} alt=""></img></Link>
                    </div>
                    <div className="col-lg-6 p-0 m-0 content-to-hide">
                      <Link className="w-100" to="/" style={{textDecoration:"none", color:"#09566E",fontSize:"1.8rem", fontWeight:"600"}}>ECHIO</Link>
                    </div>
                  </div>
              </div>
              <div className="col-lg-10 ms-auto">
                  <div className="row d-flex justify-content-end align-items-center ">
                      <div className="col-lg-2 col-sm-3 py-2"><Link style={{textDecoration:"none",fontSizez:"1.6rem"}} className="col-lg-2 col-md-2 col-sm-4 nav-link   px-1 w-75" to="/" >Home</Link></div>
                      <div className="col-lg-2 col-sm-3 py-2"><Link style={{textDecoration:"none",fontSizez:"1.6rem"}} className="col-lg-2 col-md-2 col-sm-3 nav-link   px-1 w-75" to="/team">Team</Link></div> 
                      {/* <a style={{textDecoration:"none"}} href="#contact" className="col-lg-1 col-md-2 col-sm-3 navlink">Contact Us</a> */}
                  </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default NavBarT;
