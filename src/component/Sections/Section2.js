import React from "react"

import icon1 from '../../images/pg2star.svg'
import icon2 from '../../images/pg2link.svg'
import icon3  from '../../images/pg2tick.svg'

import pg2img1 from '../../images/pg2img1.png'
import pg2img2 from '../../images/pg2img2.png'
import pg2img3 from '../../images/pg2img3.png'
import pg2img4 from '../../images/pg2img4.png'


const Section2 = () => {
    return (
      <>
        <div id="vision" className="container sec">
            <div  className="row pt-5 mt-4 m-0 d-flex justify-content-center text-center">
                <div  className="col"><h1 style={{ fontSize:"3.5rem"}}>Our Vision</h1> </div>
                </div>
                <div  className="text-center py-0 my-0"><h1 style={{ fontSize:"3rem", paddingBottom:"2rem",color:"#138C9E"}}>Wonder why our Audience trust Echio?</h1> </div>

            <div className="row d-flex justify-content-center text-center">
                <div className="col-4 text-center">
                    <div className="row justify-content-center text-center"><img className="iconsMain w-100" src={icon2} alt='icon2'/></div>
                    <div className="row justify-content-center text-center"><p className="iconsText  w-75">Bridge the gap between talent & companies. </p></div>
                </div>
                <div className="col-4 justify-content-center text-end">
                    <div className="row justify-content-center text-center"><img className="iconsMain w-100 " src={icon1} alt='icon1'/></div>
                    <div className="row justify-content-center text-center"><p style={{color:"#1F8088"}} className="iconsText w-75">Encourage everyone to follow their passion in content creation and gaming.</p></div>
                </div>
                <div className="col-4 text-center">
                    <div className="row justify-content-center text-center"><img className="iconsMain w-100" src={icon3} alt='icon3'/></div>
                    <div className="row justify-content-center text-center"><p className="iconsText  w-75">One stop destination for every influencer.</p></div>
                </div>
            </div>
            <div className="row d-flex w-100 justify-content-center">
                <div className="col-lg-2 col-sm-6 text-center justify-conten-center">
                    <img className="w-"  src={pg2img1} alt="stats 29,206"/>
                </div>
                <div className="col-lg-2 col-sm-6 text-center justify-conten-center">
                    <img className="w- text-center"  src={pg2img2} alt="stats 29,206"/>
                </div>
                <div className="col-lg-2 col-sm-6 text-center justify-conten-center">
                    <img className="w-"  src={pg2img3} alt="stats 29,206"/>
                </div>
                <div className="col-lg-2 col-sm-6 text-center justify-conten-center">
                    <img className="w-" src={pg2img4} alt="stats 29,206"/>
                </div>
            </div>

        </div>

      </>
    );
};

    export default Section2;