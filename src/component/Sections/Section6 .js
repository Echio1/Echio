import React from "react"
import QCards from "../QuoteCards/qCards";

import client1  from '../../images/client1.png'
import client2  from '../../images/client2.png'
import client3  from '../../images/client3.png'
import client4  from '../../images/client4.png'
import clientB  from '../../images/clientB.svg'

const Section6 = () => {
    return (
      <>
         <div id="test" className=""  style={{backgroundImage: `url(${clientB})`,paddingTop:"4.2rem", paddingBottom:"2rem", margin:"6rem 0"}}>
            <div className="row pt-5 mt-4 px-4 d-flex justify-content-center">
              <p className="w-100" style={{fontSize:"4.2rem",fontWeight:"900",color:"#E3FEF9",fontFamily:"Scada"}}>Facts Can Only Tell, It's The Stories That Sell!</p>
            </div>
            <div style={{marginBottom:"2rem"}} className="py-4">
                <div className="row px-4 d-flex justify-content-center">
                <div className="col-4">
                    <QCards Source={client1} Head="Angela" Text="Its been a great journey, Echio is a brand you can trust "/> 
                </div>
                <div className="col-4">
                    <QCards Source={client2} Head="Mark" Text="Its been a great journey, Echio is a brand you can trust "/> 
                </div>
                </div>
                <div className="row px-4 d-flex justify-content-center">
                <div className="col-4">
                    <QCards Source={client3} Head="Bruce" Text="Its been a great journey, Echio is a brand you can trust "/> 
                </div>
                <div className="col-4">
                    <QCards Source={client4} Head="Kety" Text="Its been a great journey, Echio is a brand you can trust "/> 
                </div>
                </div>
            </div>
          </div>
      </>
    );
};

    export default Section6;