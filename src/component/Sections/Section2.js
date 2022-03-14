import React from "react"

import icon1 from '../../images/pg2star.svg'
import icon2 from '../../images/pg2link.svg'
import icon3  from '../../images/pg2tick.svg'

const Section2 = () => {
    return (
      <>
        <div id="vision" className="container sec">
            <div  className="row pt-5 mt-4 m-0 d-flex justify-content-center text-center">
            <div  className="col"><h1 style={{ fontSize:"4rem", paddingBottom:"2rem"}}>Our Vision</h1> </div>
            </div>

            <div className="row d-flex justify-content-center text-center">
            <div className="col-4 justify-content-center text-end">
                <div className="row justify-content-center text-center"><img className="iconsMain w-100 " src={icon1} alt='icon1'/></div>
                <div className="row justify-content-center text-center"><p className="iconsText w-75">Encourage everyone to follow their passion.</p></div>
            </div>
            <div className="col-4 text-center">
                <div className="row justify-content-center text-center"><img className="iconsMain w-100" src={icon2} alt='icon2'/></div>
                <div className="row justify-content-center text-center"><p style={{color:"#1F8088"}} className="iconsText  w-100">Bridge the gap between talent & companies. </p></div>
            </div>
            <div className="col-4 text-center">
                <div className="row justify-content-center text-center"><img className="iconsMain w-100" src={icon3} alt='icon3'/></div>
                <div className="row justify-content-center text-center"><p className="iconsText  w-75">One stop destination for every influencer.</p></div>
            </div>
            </div>

        </div>

      </>
    );
};

    export default Section2;