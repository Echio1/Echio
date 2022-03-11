import React from "react";
import "./cards.css"

function Cards(props) {
    return <>
        <div className="main p-4 justify-content-center align-items-center">
            <div className="row d-flex  justify-content-center align-items-center">
                <h3 style={{color:"#fff"}} className="text-center">{props.heading}</h3>
            </div>

            <div className="row d-flex  justify-content-center align-items-center">
                <p style={{color:"#E3FEF9",fontWeight:"500"}} className="text-center">{props.t1}</p>
                <p style={{color:"#E3FEF9",fontWeight:"500"}} className="text-center">{props.t2}</p>
                <p style={{color:"#E3FEF9",fontWeight:"500"}} className="text-center">{props.t3}</p>
            </div>

            <div className="row d-flex  justify-content-center align-items-center">
                <div style={{backgroundColor:"#98F7FF", color:"#000", textDecoration:"none"}} className="btn btn-primary text-center justify-content-center w-50">{props.button}</div>
            </div>
        </div>
    </>
  }

  export default Cards;