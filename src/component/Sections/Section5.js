import React from "react"

import pg5img1 from "../../images/pg5img1.png"

const Section5 = () => {
    return (
      <>
      <div style={{color:"#fff", background:"#E3FEF9", borderTop:"0px solid #E3FEF9"}} className="sec d-flex align-items-center py-5" >
        <div style={{width: "100%",backgroundImage: `url(${pg5img1})`,backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
            <div style={{}} className="row px-5 d-flex align-items-start mt-3">
            <div className="row d-flex text-center mt-1">
                <p style={{fontSize:"4rem", fontWeight:"600"}}>What we do in E-Sports</p>
            </div>
            <div style={{width:"70%"}} className="row d-flex ps-5 my-3 pb-2">
                <p style={{fontSize:"1.4rem"}}>With an emphasis on players, organizations, and the communities that make the games 
                we play so special, 'E-Sports Talk' shines a spotlight on engaging stories from around the world and ties it all 
                together. Whether it’s a statement in an obscure podcast, an official press release, a post on social media, 
                or even just a small in-game hint you can rely on the E-Sports Talk team to connect the dots and reveal the 
                bigger picture. From articles to videos, podcasts, and more Esports Talk is your destination for e-sports news and updates.</p>
            </div>
            <div style={{paddingBottom:"4rem"}} className="row d-flex">
                <div  className="col-lg-4 col-sm-12">
                    <p className="ps-3" style={{overflow:"hidden",borderLeft:"10px solid #3AD3DF", fontSize:"4rem", fontWeight:"500", lineHeight:"1"}}>28k+ Members</p>
                </div>
                <div   className="col-lg-8 col-sm-12">
                <p className="ps-3 pb-0 mb-0" style={{overflow:"hidden",borderLeft:"10px solid #3AD3DF", fontSize:"4rem", fontWeight:"500",lineHeight:"1"}}>20+ <p className="mb-0" style={{overflow:"hidden"}}>Partnered Tournaments</p></p>
                </div>
            </div>

            </div>
        </div>
      </div>
      </>
    );
};

    export default Section5;