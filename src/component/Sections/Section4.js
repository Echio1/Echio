import React from "react"

import pg4img1 from "../../images/pg4img1.png"
import brandLogos from "../../images/brandLogos.svg"

const Section4 = () => {
    return (
      <>
      <div  id="brand" className="sec">
        <div className="row px-5 d-flex align-items-start ">
                <div className="col-lg-6 ">
                    <div className="text-end ">
                        <strong className="w-25"  style={{fontSize:"3.1rem", paddingBottom:"0.9rem"}} >Our Brand's Success
                            </strong>
                            <p style={{color:"#1F8088",fontSize:"1.2rem",width:"80%",textAlign:"start",marginLeft:"20%"}} className="my-0 p-0">We help brands engage with and activate their target audiences worldwide through strategic and creative influencer marketing campaigns. 
                                <br/>
                                <br/>
                            <p>We create the most authentic connection between a brand and an influencer using our unique and longstanding expertise. We then develop and execute these strategies to amplify your brand story at scale.</p>
                            </p>

                            <div className="col-12 .d-sm-none .d-md-block">
                                <p style={{fontSize:"1.7rem",fontWeight:"700", color:"#1A1D32",letterSpacing:"2px"}} className="w-100 mb-0 mt-5 ">Assisted out</p>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <img style={{width:"85%"}} src={pg4img1} alt="vector2"/>
                    </div>
                </div>
            </div>
            <div  className="container w-50 my-0 py-0">
                <div className="row d-flex text-center py-0 my-0 ">
                <p className="my-0 p-0" style={{color:"#35C5D0", fontSize:"5.3rem",fontWeight:"600"}}>6+</p>
                </div>
                <div  style={{color:"#007A73",fontSize:"2rem"}} className="row d-flex text-end mb-0 pb-0">
                <p style={{fontFamily:"Scada",fontWeight:"600"}} className="my-0">Brands to Accomplish</p>
                <p style={{fontFamily:"Scada",fontWeight:"600"}}className="my-0">Their Target Market</p>
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