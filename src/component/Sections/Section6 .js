import React from "react"
import QCards from "../QuoteCards/qCards";
import "./section.css"

import client1  from '../../images/client1.png'
import client2  from '../../images/client2.png'
import client3  from '../../images/client3.png'
import client4  from '../../images/client4.png'
import clientB  from '../../images/clientB.svg'
import { Flip } from "react-reveal";

const Section6 = () => {
    return (
      <>
      <div className="cont">

         <div id="testimonials" className=""  style={{backgroundImage: `url(${clientB})`,backgroundRepeatY:"no-repeat",backgroundColor:"#E3FEF9",paddingTop:"4.2rem", paddingBottom:"12rem", marginBottom:""}}>
            <div className="row pt-5 mt-2 px-4 d-flex justify-content-center">
              <p className="w-100" style={{fontSize:"4.2rem",fontWeight:"900",color:"#E3FEF9",fontFamily:"Scada"}}>Facts Can Only Tell, It's The Stories That Sell!</p>
            </div>
            <div style={{marginBottom:"2rem"}} className="py-4">
                <div className="row px-4 d-flex justify-content-center">
                <div className="col-5">
                    <Flip left>
                    <QCards Source={client1} Head="Angela" Text="Its been a great journey, Echio is a brand you can trust "/> 

                    </Flip>
                </div>
                <div className="col-5">
                <Flip left>
                    <QCards Source={client2} Head="Mark" Text="Its been a great journey, Echio is a brand you can trust "/> 

                </Flip>
                </div>
                </div>
                <div className="row px-4 d-flex justify-content-center">
                <div className="col-5">
                <Flip left>
                    <QCards Source={client3} Head="Bruce" Text="Its been a great journey, Echio is a brand you can trust "/> 

                </Flip>
                </div>
                <div className="col-5">
                <Flip left>
                    <QCards Source={client4} Head="Kety" Text="Its been a great journey, Echio is a brand you can trust "/> 

                </Flip>
                </div>
                </div>
            </div>
          </div>
      </div>
      </>
    );
};

    export default Section6;