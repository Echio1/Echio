import React from "react"
import {FiCheckSquare, FiStar} from 'react-icons/fi'
import {BsLink45Deg} from 'react-icons/bs'

// import icon1 from '../../images/pg2star.svg'
// import icon2 from '../../images/pg2link.svg'
// import icon3  from '../../images/pg2tick.svg'

import pg2img1 from '../../images/pg2img1.svg'
import pg2img2 from '../../images/pg2img2.svg'
import pg2img3 from '../../images/pg2img3.svg'
import pg2img4 from '../../images/pg2img4.svg'


const Section2 = () => {
    return (
      <>
        <div id="vision" className="container sec">
            <div  className="row pt-2 mt-2 m-0 d-flex justify-content-center text-center">
                <div  className="col"><h1 style={{ fontSize:"4rem"}}>Our Vision</h1> </div>
                </div>
                <div  className="text-center py-0 my-0"><h1 style={{ fontSize:"3rem", paddingBottom:"2rem",color:"#138C9E"}}>Wonder Why Our Audience Trust Echio?</h1> </div>

            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-4 col-sm-6 justify-content-center text-center m-0 p-0">
                    <div className="row justify-content-center text-center">
                        {/* <img className="iconsMain p-0" src={icon2} alt='icon2'/> */}
                        <div className="rounded-circle visionIcon">
                                <BsLink45Deg size={"6rem"}/>
                            </div>
                        </div>
                    <div className="row justify-content-center text-center"><p className="iconsText  w-75">Bridge the gap between talent & companies. </p></div>
                </div>
                <div className="col-lg-4 col-sm-12 justify-content-center text-center m-0 p-0">
                    <div className="row justify-content-center text-center ">
                        {/* <img className="iconsMain p-0" src={icon1} alt='icon1'/> */}
                        <div className="rounded-circle visionIcon">
                                <FiStar size={"6rem"}/>
                            </div>
                        </div>
                    <div className="row justify-content-center text-center"><p style={{color:"#1F8088"}} className="iconsText w-75">Encourage everyone to follow their passion in content creation and gaming.</p></div>
                </div>
                <div className="col-lg-4 col-sm-6 justify-content-center text-center m-0 p-0">

                    <div className="row justify-content-center text-center  ">
                        {/* <img className="iconsMain p-0" src={icon3} alt='icon3'/> */}
                            <div className="rounded-circle visionIcon">
                                <FiCheckSquare size={"6rem"}/>
                            </div>
                        
                        </div>
                    <div className="row justify-content-center text-center"><p className="iconsText  w-75">One stop destination for every influencer.</p></div>
                </div>
            </div>
            <div className="row d-flex w-100 justify-content-center">
                <div className="col-lg-3 col-sm-6 text-center justify-conten-center">
                    <img style={{width:"85%"}}  src={pg2img1} alt="stats 29,206"/>
                </div>
                <div className="col-lg-3 col-sm-6 text-center justify-conten-center">
                    <img style={{width:"85%"}}  src={pg2img2} alt="stats 29,206"/>
                </div>
                <div className="col-lg-3 col-sm-6 text-center justify-conten-center">
                    <img style={{width:"85%"}}  src={pg2img3} alt="stats 29,206"/>
                </div>
                <div className="col-lg-3 col-sm-6 text-center justify-conten-center">
                    <img style={{width:"85%"}}src={pg2img4} alt="stats 29,206"/>
                </div>
            </div>

        </div>

      </>
    );
};

    export default Section2;