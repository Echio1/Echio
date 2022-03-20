import React from "react";

import "./NavbarStyle.css";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bgT">
        <div className="container-fluid">
        <img className="logo mx-4" src={logo} alt=""></img>
            <button style={{color:"",width:"60px"}} class="navbar-toggler text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="navbar-nav collapse navbar-collapse ">
              <div  className="row d-flex justify-content-end align-items-center">
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><Link style={{textDecoration:"none",padding:"0"}} href="#home" className="nav-link py-2" to="/" >Home</Link></div>
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><a style={{textDecoration:"none",padding:"0"}} href="#influencers" className="nav-link py-2">Influencers</a></div>
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><a style={{textDecoration:"none",padding:"0"}} href="#brand" className="nav-link py-2">Brand</a></div>
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><a style={{textDecoration:"none",padding:"0"}} href="#testimonials" className="nav-link py-2">Testimonials</a></div>
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><Link style={{textDecoration:"none", padding:"0"}} href="" className="nav-link py-2" to="/team">Team</Link></div>
                <div className="col-lg-1 col-md-2 col-sm-4 nav-item p-0  m-0 text-center"><a style={{textDecoration:"none", padding:"0"}} href="#contact" className="nav-link py-2">Contact Us</a></div>
              </div>
              
              
              
              
              
              
            </div>
        </div>
      </nav>
      
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </>
  );
};
export default NavBar;
