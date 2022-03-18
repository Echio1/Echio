import React from "react";
// import "./teamStyle.css"
import rocket  from '../../images/rocket.svg'

import NavBarT from "../Navbar/NavbarT";
// import {BsFacebook, BsInstagram,BsTwitter,BsGithub} from "react-icons/bs"
import Footer from "../Footer/Footer";
import SlideCards from "./cards";

import img1 from '../../images/client1.png'
import img2 from '../../images/client2.png'
import img3 from '../../images/client3.png'
import img4 from '../../images/client4.png'

const Team = () => {
  return ( 
    <div style={{background:"#E3FEF9"}}>
    <NavBarT/>
    <div className="">
            <div className="row d-flex justify-content-center align-items-center text-center mb-5 ">

                <div style={{padding:"4rem 2rem"}} className="col-lg-6 justify-content-center"> 
                    <SlideCards  Img1={img1} Img2={img2} Title="CEO" Head="Someone New"/>
                </div>
                <div style={{padding:"4rem 2rem"}}  className="col-lg-6 justify-content-center"><SlideCards  Img1={img3} Img2={img4} Title="CEO" Head="Someone New"/></div>
                <div style={{padding:"4rem 2rem"}}  className="col-lg-6"><SlideCards/></div>
                <div style={{padding:"4rem 2rem"}}  className="col-lg-6"><SlideCards/></div>
            {/* Card 1 */}
                {/* <div className="card">
                    <div className="imgBox">

                    </div>
                    <div className="details w-100 d-flex justify-content-center align-items-center">
                        <div className="content d-flex justify-content-center align-items-center">
                            <h2 style={{lineHeight:"1rem"}} className="text-center">Someone new<br/><span style={{color:"#35C5D0",fontSize:"0.8rem"}}>CEO</span></h2>
                            <div className="social-icons d-flex mt-4 ">
                                    <a href="#facebook" ><BsFacebook/></a>
                                    <a href="#insta" ><BsInstagram/></a>
                                    <a href="#twitter" ><BsTwitter/></a>
                                    <a href="#github"><BsGithub/></a>
                            </div>

                        </div>
                    </div>
                </div> */}
                

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
