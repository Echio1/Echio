import React from "react";
// import "./teamStyle.css"
import rocket  from '../../images/rocket.svg'

import NavBarT from "../Navbar/NavbarT";
// import {BsFacebook, BsInstagram,BsTwitter,BsGithub} from "react-icons/bs"
import Footer from "../Footer/Footer";
import SlideCards from "./cards";

// import img1 from '../../images/client1.png'
// import img2 from '../../images/client2.png'
// import img3 from '../../images/client3.png'
// import img4 from '../../images/client4.png'

import img5 from '../../images/teamcard1.jpeg'
import img6 from '../../images/teamcard2.jpeg'
import clientB from '../../images/clientB.svg'

const Team = () => {
  return ( 
    <div style={{background:"#E3FEF9",backgroundImage: `url(${clientB})`,backgroundSize: "contain",backgroundRepeat: "no-repeat"}}>
    <NavBarT/>
    <div className="justify-content-center align-items-center w-100 text-center">
            <div className="px-5" style={{width:"30%"}}>
              <p className=" mb-0 text-start pb-1" style={{transform:"scale(1,0.9)",fontSize:"3rem",fontWeight:"500", color:"#fff", letterSpacing:"4px", borderBottom:"2px solid #E3FEF9", lineHeight:"0.9"}}>MEET THE TEAM</p>
              <p className=" mb-0 text-start " style={{fontSize:"0.5rem",fontWeight:"500", color:"#fff", letterSpacing:"4px"}}>HOVER TO KNOW MORE</p>
            </div>
            <div className="row d-flex justify-content-center align-items-center text-center mb-5  mx-5  ">

                <div style={{padding:"2.5rem 12rem"}} className="col-lg-6 justify-content-center"> 
                    <SlideCards  Img1={img5} Img2={img6} Title="CEO" Head="Someone New"/>
                </div>
                <div style={{padding:"2.5rem 8rem"}} className="col-lg-6 justify-content-center"> 
                    <SlideCards  Img1={img5} Img2={img6} Title="CEO" Head="Someone New"/>
                </div>
                <div style={{padding:"2.5rem 12rem"}} className="col-lg-6 justify-content-center"> 
                    <SlideCards  Img1={img5} Img2={img6} Title="CEO" Head="Someone New"/>
                </div>
                <div style={{padding:"2.5rem 8rem"}} className="col-lg-6 justify-content-center"> 
                    <SlideCards  Img1={img5} Img2={img6} Title="CEO" Head="Someone New"/>
                </div>
            </div>
        

    
            <div style={{background:"#E3FEF9"}} className="row d-flex justify-content-center">
            <div style={{zIndex:"10"}} className="d-flex w-75  justify-content-center rounded-top grad">
                <div className="row pt-3 px-3 d-flex align-items-center">
                  <div className="col-2">
                    <img style={{height:"3rem"}} src={rocket} alt="rocket"/>
                  </div>
                  <div className="col-lg-10  ">
                    <p style={{fontSize:"1rem", color:"#fff"}}>Start your Journey Now with Us!</p>
                  </div>

                </div>
            </div>
          </div>
        </div>
<Footer/>
    </div>
  );
};

export default Team;
