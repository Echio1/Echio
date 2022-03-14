import React from "react"

import pg3img1 from "../../images/pg3img1.svg"
import inf2 from "../../images/inf2.jpeg"
import inf3 from "../../images/inf3.jpeg"

const Section3 = () => {
    return (
      <>
        {/******************** Influencers Section ********************/}
        <div id="influ" className="sec py-3">

            <div className="container">
              <div className="row d-flex justify-content-center align-items-center px-5">
                    <div className="col-lg-6 mb-5 text-center">
                        <img  src={pg3img1} alt="Influencers" className="w-75 " />
                    </div>
                    <div className="col-lg-6">
                        <h1  style={{ fontSize:"4rem", fontWeight:"600"}}>Influencers</h1>
                        <br/>
                        <p style={{color:"#1F8088",fontSize:"1.2rem"}}   className="align-items-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. 
                        </p>
                        <p  style={{fontSize:"2.5rem",fontFamily:"Rubik", fontWeight:"700",color:"#35C5D0",width:"80%"}}>No Fluff. Real Growth Wins For 250+ Influencers</p>
                    </div>
                </div>
                <div style={{padding:"4rem 0"}} className="row d-flex justify-content-center align-items-baseline">
                    <div style={{position:"relative",top:"4rem"}}  className="col-lg-2 col-sm-12 text-center ">
                        <img   src={inf2} alt="Influencers" className="rounded-circle w-75" />
                    </div>
                    <div className="col-lg-4 col-sm-12 p-0 m-0">

                        <div className="row d-flex">
                        <p style={{fontSize:"1.4rem",fontWeight:"700", color:"#1A1D32",letterSpacing:"2px"}} className="w-100 mb-0 ">Associated with</p>
                        </div>
                        <div className="row d-flex text-center ">
                        <p className="mb-0 text-end" style={{color:"#35C5D0", fontSize:"4rem",fontWeight:"600"}}>250+</p>
                        </div>
                        <div className="row d-flex text-end">
                        <p style={{fontWeight:"600",color:"#007A73",fontSize:"2rem"}} className="mb-0">Influencers</p>
                        </div>
                    
                    
                    </div>
                    <div style={{position:"relative",bottom:"4rem"}}  className="col-lg-2 col-sm-12 text-center py3">
                        <img style={{width:"65%"}} src={inf3} alt="Influencers" className="rounded-circle " />
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

    export default Section3;