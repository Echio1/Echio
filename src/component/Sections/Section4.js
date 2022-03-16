import React from "react"

import pg4img1 from "../../images/pg4img1.png"
import brandLogos from "../../images/brandLogos.svg"

const Section4 = () => {
    return (
      <>
      <div  id="brand" className="sec">
        <div className="row px-5 d-flex align-items-start ">
                <div className="col-lg-6 ">
                    <div className="text-end">
                        <strong className="w-25"  style={{fontSize:"3.1rem", paddingBottom:"0.9rem"}} >Our Brand's Success
                            </strong>
                            <p style={{color:"#1F8088",fontSize:"1.2rem",width:"80%",textAlign:"start",marginLeft:"20%"}} className="my-0 p-0">Influencer Marketing is a type of social media marketing that uses endorsements and 
                            product mentions from influencers–individuals who have a dedicated social following and
                            are viewed as experts within their niche. Influencer marketing works because of the high
                            amount of trust that social influencers have built up with their following
                            </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <img style={{width:"85%"}} src={pg4img1} alt="vector2"/>
                    </div>
                </div>
            </div>
            <div  className="container w-50 my-0 py-0">
                <div className="row  d-flex">
                <p style={{fontSize:"1.7rem",fontWeight:"700", color:"#1A1D32",letterSpacing:"2px"}} className="w-100 my-0 ">Assisted out</p>
                </div>
                <div className="row d-flex text-center py-0 my-0 ">
                <p className="my-0 p-0" style={{color:"#35C5D0", fontSize:"4.5rem",fontWeight:"600"}}>6+</p>
                </div>
                <div  style={{fontFamily:"Scada",fontWeight:"600",color:"#007A73",fontSize:"2rem"}} className="row d-flex text-end mb-0 pb-0">
                <p className="my-0">Brands to Accomplish</p>
                <p>Their Target Market</p>
                </div>
            </div>
            <div style={{background:"white", display:"flex", justifyContent:"center"}} className="row d-flex align-items-center w-100 px-0 mx-0">
            <img style={{width:"95%"}} src={brandLogos} alt="Associated Brands"/>
          </div>
      </div>
      </>
    );
};

    export default Section4;