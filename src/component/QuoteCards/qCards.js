import React from "react";
// import "./qCards.css"

function QCards(props) {
    return <>
        <div style={{backgroundColor:"#fff", borderRadius:"1rem"}} className="p-3 m-2 justify-content-center align-items-center">
            <div className="row d-flex  justify-content-center align-items-center">
                <div className="col-4">
                    <img className="rounded" src={props.Source} alt="Client"/>
                </div>
                <div className="col-8 align-items-center">
                <p className="m-0" style={{color:"#000",fontSize:"1rem"}}>{props.Head}</p>
                <p className="m-0 p-0" style={{color:"#000",fontSize:"0.6rem"}} >{props.Text}</p>
                </div>
            </div>
        </div>
    </>
  }

  export default QCards;